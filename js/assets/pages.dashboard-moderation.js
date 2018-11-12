(window.webpackJsonp = window.webpackJsonp || []).push([
    [174], {
        "2bi+": function(e, t, n) {
            "use strict";
            n("DLhE");
            var r = n("fvjX"),
                o = n("/7QA"),
                i = n("mrSG"),
                a = n("V3Pk"),
                s = n("ZuiC"),
                c = function(e) {
                    return i.__assign({
                        searchHits: [],
                        videos: {}
                    }, e)
                };
            var l = n("sf7/"),
                d = n("DpwM"),
                u = n("g807"),
                m = n("RNNG"),
                p = n("Sfdh"),
                f = function(e) {
                    return i.__assign({
                        comments: Object(u.c)(),
                        currentVideoTime: 0,
                        cursor: {
                            future: d.g,
                            past: d.g
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
                h = 150;
            var g = {
                apiToken: "",
                deviceId: ""
            };
            var v = {
                    users: {}
                },
                b = function(e) {
                    return i.__assign({
                        users: {}
                    }, e)
                };

            function C(e, t) {
                var n = t.reduce(function(e, t) {
                    return e[t.id] = t, e
                }, {});
                return i.__assign({}, e, n)
            }
            var k = Object(r.combineReducers)({
                comments: function(e, t) {
                    var n;
                    switch (void 0 === e && (e = f()), t.type) {
                        case s.l:
                            var r = i.__assign({}, t.comments[0], {
                                highlight: !0,
                                source: d.f
                            });
                            return i.__assign({}, e, {
                                comments: Object(u.d)(e.comments, [r]),
                                isPostCooldownActive: !0
                            });
                        case s.m:
                            return i.__assign({}, e, {
                                errorMessage: t.createError
                            });
                        case s.o:
                            return i.__assign({}, e, {
                                errorMessage: t.errorMessage
                            });
                        case s.d:
                            var o = t.comments[0].parentId,
                                c = e.cursor,
                                g = e.replyCursorMap,
                                v = t.comments.slice();
                            if ("" === o) c = t.cursor;
                            else if (g = i.__assign({}, e.replyCursorMap, ((n = {})[o] = t.cursor.future, n)), t.cursor.future === d.g) {
                                var b = Object(u.b)(e.comments, o);
                                if (b) {
                                    var C = i.__assign({}, b, {
                                        moreReplies: !1
                                    });
                                    v.push(C)
                                }
                            }
                            var k = Object(u.d)(e.comments, v);
                            return e.isScrollingSynced && (k = Object(m.e)(k, h)), i.__assign({}, e, {
                                comments: k,
                                cursor: c,
                                hasLoadedData: !0,
                                replyCursorMap: g
                            });
                        case s.e:
                            return i.__assign({}, e, {
                                comments: Object(u.d)(Object(u.c)(), t.comments),
                                hasLoadedData: !0,
                                cursor: t.cursor,
                                replyCursorMap: {}
                            });
                        case s.f:
                            return i.__assign({}, e, {
                                hasLoadedData: !0
                            });
                        case a.c:
                            return i.__assign({}, e, {
                                comments: Object(u.d)(Object(u.c)(), t.comments),
                                cursor: t.cursor,
                                hasLoadedData: !0,
                                errorMessage: ""
                            });
                        case a.b:
                            return i.__assign({}, f(), {
                                hasLoadedData: !0,
                                errorMessage: t.error
                            });
                        case l.b:
                            return i.__assign({}, e, {
                                currentVideoTime: Math.floor(t.updatedTime)
                            });
                        case l.a:
                        case s.c:
                            return i.__assign({}, f());
                        case s.n:
                            return i.__assign({}, e, {
                                comments: Object(m.d)(e.comments, t.comment)
                            });
                        case s.k:
                            var y = e.errorMessage;
                            return y === Object(p.a)().messageCreatedTooQuickError && (y = ""), i.__assign({}, e, {
                                isPostCooldownActive: !1,
                                errorMessage: y
                            });
                        case s.h:
                            return i.__assign({}, e, {
                                isScrollingSynced: !1
                            });
                        case s.i:
                            return i.__assign({}, e, {
                                comments: Object(m.e)(e.comments, h),
                                isScrollingSynced: !0
                            });
                        case a.a:
                            return i.__assign({}, e, {
                                comments: Object(m.a)(e.comments, function(e) {
                                    return e.commenter !== t.user
                                })
                            });
                        case s.p:
                            return i.__assign({}, e, {
                                comments: Object(u.d)(e.comments, t.comments)
                            });
                        case s.g:
                            return i.__assign({}, e, {
                                isReplayFilterOn: t.isReplayFilterOn
                            });
                        case s.a:
                            return i.__assign({}, e, {
                                hasDismissedChatReplayError: !0
                            });
                        case s.j:
                            return i.__assign({}, e, {
                                hideTimestamps: t.hideTimestamps
                            });
                        case s.b:
                            return i.__assign({}, e, {
                                isReplayFilterOn: t.isReplayFilterOn,
                                hideTimestamps: t.hideTimestamps
                            });
                        default:
                            return e
                    }
                },
                config: function(e) {
                    return void 0 === e && (e = g), e
                },
                users: function(e, t) {
                    switch (void 0 === e && (e = v), t.type) {
                        case s.d:
                        case s.e:
                        case a.c:
                        case s.l:
                            return {
                                users: C(e.users, t.users)
                            };
                        case s.c:
                            return i.__assign({}, b());
                        default:
                            return e
                    }
                },
                moderation: function(e, t) {
                    switch (void 0 === e && (e = c()), t.type) {
                        case a.c:
                            return i.__assign({}, e, {
                                videos: function(e, t) {
                                    var n = t.reduce(function(e, t) {
                                        return e[t.id] = t, e
                                    }, {});
                                    return i.__assign({}, e, n)
                                }(e.videos, t.videos)
                            });
                        case a.d:
                            return t.hits && t.hits.results.length > 0 ? i.__assign({}, e, {
                                searchHits: t.hits.results
                            }) : i.__assign({}, e, {
                                searchHits: []
                            });
                        case s.c:
                            return i.__assign({}, c());
                        default:
                            return e
                    }
                }
            });
            o.p.store.registerReducer("vodChat", k);
            n("WK0g"), n("ahza");
            var y = n("nxZp"),
                S = (function() {}(), n("pU2t"), n("l41m")),
                _ = n("HjbF"),
                E = n("kVrx"),
                O = n("ZUUl"),
                w = n("82xK"),
                D = n("zClW"),
                T = (n("3Ps+"), n("GCGb")),
                M = n("Zkco"),
                N = n("KD05"),
                R = n("fCiU"),
                I = n("XXm5"),
                j = n("znm4"),
                x = (n("pwkZ"), n("4OCo")),
                F = n("GEnX");
            n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return y.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "A", function() {
                return S.d
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "o", function() {
                return s.y
            }), n.d(t, "q", function() {
                return l.d
            }), n.d(t, "u", function() {
                return _.c
            }), n.d(t, "v", function() {
                return _.d
            }), n.d(t, "n", function() {
                return _.a
            }), n.d(t, "m", function() {
                return E.a
            }), n.d(t, "x", function() {
                return E.b
            }), n.d(t, "z", function() {
                return E.c
            }), n.d(t, "B", function() {
                return O.a
            }), n.d(t, "C", function() {
                return O.b
            }), n.d(t, "k", function() {
                return w.a
            }), n.d(t, "p", function() {
                return D.a
            }), n.d(t, "r", function() {
                return D.b
            }), n.d(t, "y", function() {
                return D.c
            }), n.d(t, "H", function() {
                return D.i
            }), n.d(t, "D", function() {
                return D.d
            }), n.d(t, "E", function() {
                return D.e
            }), n.d(t, "F", function() {
                return D.f
            }), n.d(t, "G", function() {
                return D.g
            }), n.d(t, !1, function() {}), n.d(t, "b", function() {
                return d.b
            }), n.d(t, "d", function() {
                return d.d
            }), n.d(t, "a", function() {
                return d.a
            }), n.d(t, "c", function() {
                return d.c
            }), n.d(t, !1, function() {}), n.d(t, "w", function() {
                return d.h
            }), n.d(t, "e", function() {
                return T.b
            }), n.d(t, !1, function() {}), n.d(t, "h", function() {
                return M.a
            }), n.d(t, "t", function() {
                return N.b
            }), n.d(t, "s", function() {
                return R.b
            }), n.d(t, "f", function() {
                return I.a
            }), n.d(t, "g", function() {
                return I.b
            }), n.d(t, "l", function() {
                return j.a
            }), n.d(t, !1, function() {}), n.d(t, "j", function() {
                return x.a
            }), n.d(t, "i", function() {
                return F.a
            })
        },
        "2e6W": function(e, t, n) {},
        "3Ps+": function(e, t) {},
        "4OCo": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return u
            });
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                a = n("mmRu"),
                s = n("cpJf"),
                c = n("Sfdh"),
                l = n("Tqc9"),
                d = n("Ue10"),
                u = (n("sbEw"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.submitReply = function() {
                            if ("" !== n.state.newReplyText) {
                                if (n.props.isCreationCoolDownActive) return n.setState({
                                    showCoolDownState: !0
                                }), void(n.props.onError && n.props.onError(Object(c.a)().messageCreatedTooQuickError));
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
                            e.key === l.b && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === l.c && (e.preventDefault(), n.props.onReplyFormClose())
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
                        return o.createElement(d.Xa, {
                            className: this.props.classNames,
                            position: d.jb.Relative
                        }, o.createElement(d.Sb, {
                            error: this.state.showCoolDownState,
                            maxLength: 512,
                            noResize: !0,
                            onChange: this.onChange,
                            onKeyDown: this.onKeyDown,
                            placeholder: Object(i.d)("Reply", "ReplyForm"),
                            refDelegate: this.setTextareaRef,
                            value: this.state.newReplyText
                        }), o.createElement(a.a, {
                            attachRight: !0,
                            attachTop: !0,
                            channelOwnerID: this.props.videoOwnerID,
                            emotePickerSource: s.a.VodChat,
                            inputRef: this.textArea,
                            onClickEmote: this.onEmoticonClick,
                            position: d.jb.Absolute
                        }))
                    }, t
                }(o.Component))
        },
        "4g9D": function(e, t, n) {},
        "52dQ": function(e, t, n) {},
        "6yEf": function(e, t, n) {},
        "7nEj": function(e, t, n) {},
        "82xK": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("q1tI"),
                o = n("/7QA"),
                i = n("Ue10"),
                a = function(e) {
                    return r.createElement(i.z, {
                        type: i.F.Text,
                        onClick: e.onClick
                    }, Object(o.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
                }
        },
        "8uuy": function(e, t) {
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
        "8zXI": function(e, t, n) {},
        BKFw: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            var r = "BROADCAST_TYPE_ALL",
                o = "broadcaster_id",
                i = "BROADCAST_LENGTH_ANY"
        },
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var r, o = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                s = n("I6K6"),
                c = n("bTcf"),
                l = n("L7EG");

            function d(e, t, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var r, c, u, m;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, c = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, r.video), u = {
                                    channel: c.owner ? c.owner.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: c.game ? c.game.name : null,
                                    partner: !!c.owner && c.owner.roles.isPartner,
                                    location: t.location,
                                    share_context: t.collectionID ? a.ShareItemContext.Collection : null,
                                    share_platform: t.platform,
                                    shared_item_id: t.collectionID ? t.collectionID : c.id,
                                    shared_item_type: t.collectionID ? a.ShareItemType.Collection : Object(s.a)(c.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: c.id,
                                    source_item_type: Object(s.a)(c.broadcastType)
                                }, i.p.tracking.track(a.SpadeEventType.ShareItem, u), [3, 3];
                            case 2:
                                return m = o.sent(), i.k.error(m.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return o.__awaiter(this, void 0, void 0, function() {
                    var r, s, l;
                    return o.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: c,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, s = {
                                    channel: r.user ? r.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!r.user && r.user.roles.isPartner,
                                    location: t.location,
                                    share_context: null,
                                    share_platform: t.platform,
                                    shared_item_id: e.id,
                                    shared_item_type: a.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: e.id,
                                    source_item_type: a.SourceItemType.Collection
                                }, i.p.tracking.track(a.SpadeEventType.ShareItem, s), [3, 3];
                            case 2:
                                return l = o.sent(), i.k.error(l.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(r || (r = {}))
        },
        BZOq: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var r = n("H/lO"),
                o = n("BKFw");

            function i(e) {
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
            }

            function a(e) {
                var t = {},
                    n = [];
                return "broadcastType" in e && e.broadcastType !== o.c && void 0 !== e.broadcastType && n.push(e.broadcastType), "broadcasterId" in e && n.push(o.a + ":" + e.broadcasterId), t.facetFilters = function(e) {
                    return e.join(",")
                }(n), "broadcastLength" in e && e.broadcastLength !== o.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]), {
                    typeID: r.a.Videos,
                    params: t
                }
            }
        },
        CJLt: function(e, t) {
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
                    end: 197
                }
            };
            n.loc.source = {
                body: "query VideoChat_TrackingContext_VideoAndCurrentUser($videoID: ID) {\nvideo(id: $videoID) {\nid\nbroadcastType\ntitle\ngame {\nid\nname\n}\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\n}\ncurrentUser {\nid\nlogin\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        DLhE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return u
            });
            var r = n("mrSG"),
                o = n("G1cX"),
                i = n("/7QA"),
                a = n("f00E"),
                s = n("+pBb"),
                c = n("W/3w"),
                l = n("F6GT");

            function d(e) {
                return e.chat.renderSent
            }

            function u(e) {
                var t = [];
                if (e.chat && e.chat.commandHandlers)
                    for (var n in e.chat.commandHandlers) e.chat.commandHandlers[n] && t.push(n);
                return t.sort()
            }
            i.p.store.registerReducer("chat", function(e, t) {
                var n;
                switch (void 0 === e && (e = function() {
                    var e = Object(l.a)();
                    return r.__assign({}, e, {
                        commandHandlers: {},
                        emoteSets: [],
                        emotePickerSessionID: null,
                        followerDuration: c.a,
                        followerMode: !1,
                        isChatRulesOpen: !1,
                        isHidden: !1,
                        renderSent: null,
                        slowMode: !1,
                        slowModeDuration: 120,
                        subsOnlyMode: !1,
                        unhideIgnoredUsers: []
                    })
                }()), t.type) {
                    case s.d:
                        return r.__assign({}, e, {
                            isHidden: !0
                        });
                    case s.e:
                        return r.__assign({}, e, {
                            isHidden: !1
                        });
                    case s.f:
                        return r.__assign({}, e, {
                            isChatRulesOpen: !1
                        });
                    case s.i:
                        return r.__assign({}, e, {
                            emoteSets: t.emoteSets
                        });
                    case s.g:
                        return r.__assign({}, e, {
                            emotePickerSessionID: null
                        });
                    case s.h:
                        return r.__assign({}, e, {
                            emotePickerSessionID: Object(a.b)()
                        });
                    case s.j:
                        return r.__assign({}, e, {
                            lastUsedFollowerDurations: r.__assign({}, e.lastUsedFollowerDurations, (n = {}, n[t.channelLogin] = t.duration, n))
                        });
                    case s.r:
                        return r.__assign({}, e, {
                            isChatRulesOpen: !0
                        });
                    case s.q:
                        var i = r.__assign({}, e);
                        return void 0 !== t.roomState.followersOnly && (i.followerMode = t.roomState.followersOnly), void 0 !== t.roomState.followersOnlyRequirement && (i.followerDuration = t.roomState.followersOnlyRequirement), void 0 !== t.roomState.slowMode && (i.slowMode = t.roomState.slowMode), void 0 !== t.roomState.slowModeDuration && (i.slowModeDuration = t.roomState.slowModeDuration), void 0 !== t.roomState.subsOnly && (i.subsOnlyMode = t.roomState.subsOnly), i;
                    case s.b:
                        return r.__assign({}, e, {
                            showAutoModActions: !1
                        });
                    case s.c:
                        return r.__assign({}, e, {
                            showAutoModActions: !0
                        });
                    case s.k:
                        return r.__assign({}, e, {
                            showModerationActions: !1
                        });
                    case s.l:
                        return r.__assign({}, e, {
                            showModerationActions: !0
                        });
                    case s.m:
                        return r.__assign({}, e, {
                            showModIcons: !1
                        });
                    case s.n:
                        return r.__assign({}, e, {
                            showModIcons: !0
                        });
                    case s.s:
                        return r.__assign({}, e, {
                            showTimestamps: !1
                        });
                    case s.t:
                        return r.__assign({}, e, {
                            showTimestamps: !0
                        });
                    case s.v:
                        return r.__assign({}, e, {
                            useHighContrastColors: !1
                        });
                    case s.w:
                        return r.__assign({}, e, {
                            useHighContrastColors: !0
                        });
                    case s.a:
                        return o(e, function(e) {
                            return e.commandHandlers
                        }, function(e) {
                            return t.command in e ? e[t.command].push(t.handler) : e[t.command] = [t.handler], e
                        });
                    case s.o:
                        return o(e, function(e) {
                            return e.commandHandlers
                        }, function(e) {
                            if (!(t.command in e)) return e;
                            var n = e[t.command].indexOf(t.handler);
                            return e[t.command].splice(n, 1), 0 === e[t.command].length && delete e[t.command], e
                        });
                    case s.p:
                        return r.__assign({}, e, {
                            renderSent: t.customEvent
                        });
                    case s.u:
                        return r.__assign({}, e, {
                            unhideIgnoredUsers: e.unhideIgnoredUsers.concat([t.userID])
                        });
                    default:
                        return e
                }
            })
        },
        DpwM: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "g", function() {
                return l
            }), n.d(t, "h", function() {
                return d
            });
            var r = "video",
                o = "published",
                i = "unpublished",
                a = "pending_review",
                s = "pending_review_spam",
                c = "current",
                l = "",
                d = function(e) {
                    return "" !== e.parentId
                }
        },
        E78O: function(e, t, n) {},
        EE1E: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return C
            });
            var r = n("EN5X"),
                o = n("G7cy"),
                i = n("m7BI"),
                a = n("E8D/"),
                s = n("DtRd"),
                c = n("R4sh"),
                l = n("/0dD"),
                d = n("76Lv"),
                u = 4.5,
                m = [239, 238, 241],
                p = [14, 12, 19],
                f = .1,
                h = 50,
                g = "7A7A7A",
                v = 36,
                b = {};

            function C(e, t) {
                var n = s(e),
                    C = k(o(n));
                if (void 0 === t && (t = Object(d.d)()), C in b[t]) return b[t][C];
                if (t === l.a.Dark && n.every(function(e) {
                        return e < v
                    })) return g;
                var y = t === l.a.Light ? m : p,
                    S = Object(c.a)(n, y);
                if (S > u) return C;
                for (var _ = [n[0], n[1], n[2]], E = h; E >= 0 && S < u; E--) {
                    var O = i(_);
                    t === l.a.Light ? O[0] -= O[0] * f : O[0] += O[0] * f, _ = a(r(O)), S = Object(c.a)(_, y)
                }
                var w = k(o(_));
                return b[t][C] = w, w
            }

            function k(e) {
                return "#" === e[0] ? e.substr(1) : e
            }
            b[l.a.Dark] = {}, b[l.a.Light] = {}
        },
        F6GT: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("/7QA"),
                i = "control";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            });
            var a = "chatSettings";

            function s() {
                var e = o.m.get(a, {});
                return r.__assign({
                    lastUsedFollowerDurations: {},
                    showAutoModActions: !0,
                    showMessageFlags: !0,
                    showModerationActions: !0,
                    showModIcons: !1,
                    showTimestamps: !1,
                    useHighContrastColors: !1,
                    zachModeStatus: i
                }, e)
            }

            function c(e, t) {
                var n = s();
                n[e] = t, o.m.set(a, n)
            }

            function l(e, t) {
                var n = s();
                n.lastUsedFollowerDurations[e] = t, o.m.set(a, n)
            }
        },
        GCGb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "b", function() {
                return d
            });
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                a = n("cZKs"),
                s = n("Ue10"),
                c = (n("gPTj"), "confirm-button"),
                l = "deny-button",
                d = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(s.Eb, {
                            className: "twp-modal",
                            background: s.r.Base,
                            color: s.O.Alt,
                            padding: 3
                        }, o.createElement("h3", null, this.props.title), o.createElement(s.Xa, {
                            className: "twp-modal__message",
                            margin: {
                                bottom: 2
                            }
                        }, this.props.children), o.createElement(s.Xa, {
                            display: s.X.Flex,
                            justifyContent: s.Wa.End
                        }, o.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(s.z, {
                            onClick: this.props.onDenyClick,
                            type: s.F.Hollow,
                            "data-test-selector": l
                        }, Object(i.d)("Cancel", "ConfirmationModal"))), o.createElement(s.z, {
                            onClick: this.props.onConfirmClick,
                            type: s.F.Alert,
                            disabled: this.props.isConfirmDisabled,
                            "data-test-selector": c
                        }, Object(i.d)("Ok", "ConfirmationModal"))), o.createElement(a.a, {
                            closeOnBackdropClick: !0
                        }))
                    }, t
                }(o.Component)
        },
        GEnX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/7QA"),
                a = n("XXm5"),
                s = n("Ue10"),
                c = n("fCiU"),
                l = (n("sPFP"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onReplyClickHandler = function() {
                            t.props.replyCommentContext ? t.props.onReplyClick(Object(c.b)(t.props.replyCommentContext.author)) : t.props.onReplyClick()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(i.d)("Reply", "DashboardModerationReplyButton");
                        return this.props.context === a.c ? o.createElement("button", {
                            className: "video-chat-reply-button",
                            onClick: this.onReplyClickHandler,
                            "data-test-selector": "parent-reply-button"
                        }, o.createElement(s.Xa, {
                            display: s.X.Flex
                        }, o.createElement(s.Xa, {
                            className: "video-chat-reply-button__icon",
                            display: s.X.Flex,
                            padding: {
                                right: .5
                            }
                        }, o.createElement(s.sb, {
                            width: 13,
                            height: 13,
                            asset: s.tb.Conversations,
                            type: s.ub.Inherit
                        })), o.createElement(s.W, {
                            align: s.fc.Middle,
                            type: s.Vb.Span
                        }, e))) : this.props.context === a.a ? o.createElement(s.A, {
                            ariaLabel: e,
                            type: s.C.Hollow,
                            icon: s.tb.Conversations,
                            onClick: this.onReplyClickHandler,
                            "data-test-selector": "moderation-reply-button",
                            "data-a-selector": "qa-vod-chat-reply-button"
                        }) : o.createElement(s.Eb, {
                            color: s.O.Link,
                            display: s.X.Inline,
                            margin: {
                                left: 1
                            }
                        }, o.createElement("button", {
                            onClick: this.onReplyClickHandler,
                            "data-test-selector": "reply-reply-button"
                        }, o.createElement(s.W, {
                            type: s.Vb.Span
                        }, e)))
                    }, t
                }(o.Component))
        },
        GeG0: function(e, t, n) {},
        HjbF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "f", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("DpwM");

            function o(e, t, n, r) {
                return e in t ? {
                    bitsConfig: r,
                    commentID: e,
                    cursor: t[e]
                } : {
                    bitsConfig: r,
                    commentID: e,
                    videoID: n
                }
            }

            function i(e) {
                var t = e.currentVideoTime < e.offsetRange.beginSec,
                    n = e.currentVideoTime > e.offsetRange.endSec;
                return t && c(e.cursor) || n && s(e.cursor)
            }

            function a(e) {
                return s(e.cursor) && function(e) {
                    var t = e.offsetEndTime - e.offsetThreshold;
                    return e.currentVideoTime >= t && e.currentVideoTime <= e.offsetEndTime
                }({
                    currentVideoTime: e.currentVideoTime,
                    offsetEndTime: e.offsetEndTime,
                    offsetThreshold: e.offsetThreshold
                })
            }

            function s(e) {
                return e.future !== r.g
            }

            function c(e) {
                return e.past !== r.g
            }

            function l(e, t) {
                var n = e.id === t.id,
                    r = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
                return !!t.self && t.self.isModerator || r || n
            }
        },
        IKE4: function(e, t) {
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
        "Jxh/": function(e, t, n) {
            "use strict";

            function r(e) {
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
                return r
            })
        },
        KD05: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r = function(e) {
                    return "v" + e
                },
                o = function(e) {
                    return e + "s"
                }
        },
        Km7b: function(e, t, n) {},
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
        NTKp: function(e, t, n) {},
        NTvC: function(e, t, n) {},
        Nimz: function(e, t, n) {},
        R4sh: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = [e[0], e[1], e[2]].map(function(e) {
                    return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                });
                return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
            }

            function o(e, t) {
                var n = r(e) + .05,
                    o = r(t) + .05;
                return n > o ? n / o : o / n
            }
            n.d(t, "a", function() {
                return o
            })
        },
        RLGp: function(e, t, n) {},
        RNNG: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "a", function() {
                return m
            });
            var r = n("mrSG"),
                o = n("DpwM"),
                i = Number.MAX_VALUE,
                a = Number.MIN_VALUE,
                s = function(e) {
                    return r.__assign({
                        commentCount: 0,
                        maxOffset: a,
                        minOffset: i,
                        parentComments: {},
                        offsets: {},
                        replies: {}
                    }, e)
                },
                c = function(e, t) {
                    var n = f(e);
                    return t.forEach(function(e) {
                        var t, o = e.id,
                            i = e.contentOffset,
                            a = e.parentId;
                        if ("" === a) {
                            n.minOffset = Math.min(n.minOffset, i), n.maxOffset = Math.max(n.maxOffset, i), n.parentComments = r.__assign({}, n.parentComments, ((t = {})[o] = e, t));
                            var s = n.offsets[i];
                            Array.isArray(s) ? s.includes(o) || (n.offsets[i] = s.concat(o), n.commentCount++) : (n.offsets[i] = [o], n.commentCount++)
                        } else {
                            var c = n.replies[a];
                            if (Array.isArray(c)) {
                                var l = c.findIndex(function(t) {
                                    return t.id === e.id
                                }); - 1 !== l ? c[l] = e : (n.replies[a] = c.concat(e), n.commentCount++)
                            } else n.replies[a] = [e], n.commentCount++
                        }
                    }), n
                },
                l = function(e, t) {
                    if (t in e.parentComments) return e.parentComments[t]
                },
                d = function(e, t) {
                    var n = f(e);
                    return Object(o.h)(t) ? v(n, t.parentId, t.id) : g(n, t.id)
                },
                u = function(e, t) {
                    if (e.commentCount < t || p(e)) return e;
                    for (var n = e; n.commentCount > t && !p(e);) n = b(n, n.minOffset);
                    return n
                },
                m = function(e, t) {
                    var n = f(e);
                    return Object.keys(e.parentComments).forEach(function(r) {
                        var o = e.parentComments[r];
                        t(o) || (n = g(n, o.id))
                    }), Object.keys(e.replies).forEach(function(r) {
                        e.replies[r].forEach(function(e) {
                            t(e) || (n = v(n, e.id, e.parentId))
                        })
                    }), n
                },
                p = function(e) {
                    return e.minOffset === e.maxOffset
                },
                f = function(e) {
                    return {
                        commentCount: e.commentCount,
                        maxOffset: e.maxOffset,
                        minOffset: e.minOffset,
                        offsets: h(e.offsets),
                        parentComments: r.__assign({}, e.parentComments),
                        replies: r.__assign({}, e.replies)
                    }
                },
                h = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        return t[Number(n)] = e[Number(n)].slice(), t
                    }, {})
                },
                g = function(e, t) {
                    if (!(t in e.parentComments)) return e;
                    var n = e.parentComments[t].contentOffset,
                        r = e.offsets[n],
                        o = [];
                    if (r && (o = r.filter(function(e) {
                            return e !== t
                        })), e.offsets[n] = o, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                        var i = e.replies[t].length;
                        delete e.replies[t], e.commentCount -= i
                    }
                    return e
                },
                v = function(e, t, n) {
                    if (!(t in e.replies)) return e;
                    var r = e.replies[t].length,
                        o = e.replies[t].filter(function(e) {
                            if (e.id !== n) return e
                        });
                    e.replies[t] = o, 0 === o.length && delete e.replies[t];
                    var i = r - o.length;
                    return e.commentCount -= i, e
                },
                b = function(e, t) {
                    return t >= e.minOffset && t <= e.maxOffset && !p(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                        e = g(e, t)
                    }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
                }
        },
        Sfdh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("4rCz");

            function o() {
                return {
                    messageCreatedTooQuickError: Object(r.d)("Your message was not sent because you are sending messages too quickly.", "format-error-messages"),
                    chatReplayFilterError: Object(r.d)("Your message has been posted. However, other messages posted after the live stream are hidden.", "format-error-messages")
                }
            }
        },
        Tqc9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            });
            var r = "@",
                o = "Enter",
                i = "Escape",
                a = " "
        },
        UJc8: function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, "b", function() {
                    return o
                }), n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.Everyone = "EVERYONE", e.Moderator = "MODERATOR", e.Subscriber = "SUBSCRIBER"
                }(o || (o = {}));
            var i = ((r = {})[o.Everyone] = "Everyone", r[o.Moderator] = "Mods", r[o.Subscriber] = "Subs", r)
        },
        UZgS: function(e, t, n) {},
        V3Pk: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "h", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "g", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "f", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "i", function() {
                return m
            });
            var r = n("mrSG"),
                o = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
                i = function(e, t) {
                    return r.__assign({
                        type: o
                    }, e, {
                        bitsConfig: t
                    })
                },
                a = "vodChat.channel-moderation-comments.RESULTS_FAILED",
                s = function(e) {
                    return {
                        type: a,
                        error: e
                    }
                },
                c = function(e) {
                    return {
                        type: "vodChat.channel-moderation-comments.BAN_FAILED",
                        error: e
                    }
                },
                l = "vodChat.channel-moderation-comments.BAN_SUCCESS",
                d = function(e) {
                    return {
                        type: l,
                        user: e
                    }
                },
                u = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
                m = function(e) {
                    return {
                        type: u,
                        hits: e
                    }
                }
        },
        "W/3w": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            });
            var r = n("/7QA"),
                o = 30,
                i = [0, 10, 30, 60, 1440, 10080, 43200, 129600];

            function a(e) {
                switch (e) {
                    case 0:
                        return Object(r.d)("0 minutes (Any followers)", "FollowersOnlyLabel");
                    case 10:
                        return Object(r.d)("10 minutes (Most used)", "FollowersOnlyLabel");
                    case 30:
                        return Object(r.d)("30 minutes", "FollowersOnlyLabel");
                    case 60:
                        return Object(r.d)("1 hour", "FollowersOnlyLabel");
                    case 1440:
                        return Object(r.d)("1 day", "FollowersOnlyLabel");
                    case 10080:
                        return Object(r.d)("1 week", "FollowersOnlyLabel");
                    case 43200:
                        return Object(r.d)("1 month", "FollowersOnlyLabel");
                    case 129600:
                        return Object(r.d)("3 months", "FollowersOnlyLabel");
                    default:
                        return r.k.warn("[FollowersOnlyLabel] Tried to generate a label for a non-preset.", e), ""
                }
            }

            function s(e) {
                switch (e) {
                    case 0:
                        return Object(r.d)("0 min", "FollowersOnlyShorthand");
                    case 10:
                        return Object(r.d)("10 min", "FollowersOnlyShorthand");
                    case 30:
                        return Object(r.d)("30 min", "FollowersOnlyShorthand");
                    case 60:
                        return Object(r.d)("1 hr", "FollowersOnlyShorthand");
                    case 1440:
                        return Object(r.d)("1 day", "FollowersOnlyShorthand");
                    case 10080:
                        return Object(r.d)("1 wk", "FollowersOnlyShorthand");
                    case 43200:
                        return Object(r.d)("1 mo", "FollowersOnlyShorthand");
                    case 129600:
                        return Object(r.d)("3 mo", "FollowersOnlyShorthand");
                    default:
                        return Object(r.d)("custom", "FollowersOnlyShorthand")
                }
            }
        },
        WK0g: function(e, t, n) {
            "use strict";
            var r = n("cr+I"),
                o = n("b6Yk"),
                i = n("ahza"),
                a = n("mrSG"),
                s = n("pU2t"),
                c = n("XeJ1"),
                l = function(e, t) {
                    var n = Object(s.d)(e, t),
                        r = e.comments.reduce(function(e, t) {
                            return void 0 === t.video ? e : e.concat([d(t.video)])
                        }, []);
                    return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                        n.comments.push(s.a.normalizeRecord(e, t)), n.users.push(c.a.normalizeRecord(e.commenter))
                    }), a.__assign({}, n, {
                        videos: r
                    })
                },
                d = function(e) {
                    return {
                        id: e._id,
                        title: e.title,
                        preview: e.preview
                    }
                };
            n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return g
            });
            var u = "channel_id",
                m = "limit",
                p = "video_id",
                f = 50;

            function h(e) {
                var t;
                return t = function(e) {
                    return "userId" in e
                }(e) ? function(e) {
                    var t = {};
                    return t[m] = f.toString(), t[u] = e.userId, void 0 !== e.cursor && (t[i.a] = e.cursor), "/v5/videos/comments?" + r.stringify(t)
                }(e) : function(e) {
                    var t = {};
                    return t[m] = f.toString(), t[p] = e.videoId, void 0 !== e.cursor && (t[i.a] = e.cursor), "/v5/videos/comments?" + r.stringify(t)
                }(e), o.a.getOrThrow(t).then(function(t) {
                    return l(t.body, e.bitsConfig)
                })
            }

            function g(e) {
                var t = function(e) {
                        return "/v5/videos/channels/" + e.targetChannel + "/bans"
                    }(e),
                    n = {
                        body: {
                            commenter_id: e.bannedUser
                        }
                    };
                return o.a.postOrThrow(t, n)
            }
        },
        WytW: function(e, t, n) {
            "use strict";
            n.d(t, "g", function() {
                return i
            }), n.d(t, "h", function() {
                return a
            }), n.d(t, "j", function() {
                return s
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "p", function() {
                return h
            }), n.d(t, "m", function() {
                return v
            }), n.d(t, "q", function() {
                return C
            }), n.d(t, "k", function() {
                return y
            }), n.d(t, "o", function() {
                return _
            }), n.d(t, "n", function() {
                return O
            }), n.d(t, "l", function() {
                return T
            }), n.d(t, "i", function() {
                return N
            });
            var r = n("/7QA"),
                o = r.p.logger.withCategory("chat-commands");

            function i(e) {
                return "/mod " + e
            }

            function a(e) {
                return "/unmod " + e
            }

            function s(e) {
                return /^[\/]/.test(e)
            }

            function c() {
                return "/clear"
            }

            function l() {
                return "/followersoff"
            }

            function d() {
                return "/slowoff"
            }

            function u(e) {
                return "/followers " + e
            }

            function m() {
                return "/slow"
            }

            function p(e) {
                return "/color " + e
            }
            var f = /^\/w(?:$|\s+)(\S+)?\s*(.+)?/i;

            function h(e) {
                var t = e.trim().match(f);
                return t ? {
                    recipientLogin: t[1] || null,
                    body: t[2] || null
                } : null
            }
            var g = /^\/host(?:$|\s+)(\S+)/i;

            function v(e) {
                var t = e.trim().match(g);
                return t ? {
                    recipientLogin: t[1]
                } : null
            }
            var b = /^(\S+)?\s+(.+)?$/;

            function C(e) {
                var t = e.trim().match(b);
                return t ? {
                    recipientLogin: t[1] || null,
                    body: t[2] || null
                } : {
                    recipientLogin: null,
                    body: null
                }
            }
            var k = /^\/ban\s+@?(\S+)(?:\s+(.+))?$/;

            function y(e) {
                var t = e.trim().match(k);
                return t ? {
                    banTarget: t[1],
                    reason: t[2] || null
                } : null
            }
            var S = /^\/timeout\s+@?(\S+)(?:\s+(\d+))?(?:\s+(.+))?$/;

            function _(e) {
                var t = e.trim().match(S);
                return t ? {
                    banTarget: t[1],
                    duration: t[2] && Number(t[2]) || null,
                    reason: t[3] || null
                } : null
            }
            var E = /^\/slow(?:\s+(\d+)?)?$/;

            function O(e) {
                var t = e.trim().match(E);
                return t ? {
                    duration: t[1] && Number(t[1]) || null
                } : null
            }
            var w = ["blue", "blueviolet", "cadetblue", "chocolate", "coral", "dodgerblue", "firebrick", "goldenrod", "green", "hotpink", "orangered", "red", "seagreen", "springgreen", "yellowgreen"],
                D = /^\/color\s+(#[A-Fa-f0-9]{6}|[A-Za-z]+)$/;

            function T(e) {
                var t = e.trim().match(D);
                if (!t) return null;
                var n = t[1];
                return n.startsWith("#") || -1 !== w.indexOf(n.toLowerCase()) ? {
                    color: n
                } : null
            }
            var M = /^[/.]([a-z0-9]+)(.+)?$/i;

            function N(e, t) {
                var n = e.match(M);
                if (!n) return {
                    handled: !1
                };
                var i = n[1],
                    a = r.p.store.getState().chat.commandHandlers[i.toLowerCase()];
                if (!a) return {
                    command: i,
                    handled: !1
                };
                if (1 !== a.length) return o.error(new Error("Failed to run comand " + i), "Multiple command handlers defined for '" + i + "'", {
                    command: i
                }), {
                    command: i,
                    handled: !1
                };
                var s = (n[2] || "").trim(),
                    c = {
                        channelLogin: t
                    },
                    l = a[0];
                try {
                    return {
                        command: i,
                        handled: !0,
                        result: l(s, c)
                    }
                } catch (e) {
                    return o.warn("Exception thrown from chat command handler", {
                        command: i,
                        err: e
                    }), {
                        handled: !1
                    }
                }
            }
        },
        XXm5: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            var r = "vod-message",
                o = "mod-dashboard",
                i = "mod-comment"
        },
        XeJ1: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("nxZp"),
                o = n("ehEd"),
                i = {
                    normalizeRecord: function(e) {
                        return new r.a({
                            id: e._id,
                            name: e.name,
                            logo: new URL(e.logo || o.a),
                            bio: e.bio,
                            createdAt: new Date(e.created_at),
                            displayName: e.display_name,
                            type: e.type,
                            updatedAt: new Date(e.updated_at)
                        })
                    },
                    serializeRecord: function(e) {
                        return {
                            _id: e.id,
                            name: e.name,
                            logo: e.logo.toString(),
                            bio: e.bio,
                            created_at: e.createdAt.toISOString(),
                            display_name: e.displayName,
                            type: e.type,
                            updated_at: e.updatedAt.toISOString()
                        }
                    }
                }
        },
        XjG0: function(e, t, n) {},
        ZEQw: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "e", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            });
            var r = "subscribe_to_channel",
                o = "turbo",
                i = "visit_url",
                a = "none",
                s = "broadcaster"
        },
        ZUUl: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            var r = n("4rCz");

            function o(e, t) {
                return function(n, o) {
                    e({
                        dispatch: n,
                        getState: o
                    }, t, r.q.apollo.client)
                }
            }

            function i(e, t) {
                return function(n, o) {
                    e({
                        dispatch: n,
                        getState: o
                    }, t, r.q.apollo.client, r.p)
                }
            }
        },
        ZVTe: function(e, t, n) {
            "use strict";
            var r = n("TSYQ"),
                o = n("q1tI"),
                i = n("EE1E"),
                a = (n("2e6W"), function(e) {
                    var t, n = e.userData.color;
                    e.highContrastUsernameColor && n && (n = "#" + Object(i.a)(n, e.theme));
                    var a = [o.createElement("span", {
                        key: "username-display",
                        className: "chat-author__display-name",
                        "data-a-target": "chat-message-username",
                        "data-a-user": e.userData.userLogin,
                        "data-test-selector": "message-username",
                        style: {
                            color: n
                        }
                    }, e.userData.userDisplayName)];
                    if (e.userData.isIntl) {
                        var s = r(((t = {})["chat-author__intl-login"] = !e.highlighted, t["chat-author__intl-login--highlighted"] = e.highlighted, t));
                        a.push(o.createElement("span", {
                            key: "username-login",
                            style: {
                                color: n
                            },
                            className: s,
                            "data-test-selector": "message-username-canonical"
                        }, " (" + e.userData.userLogin + ")"))
                    }
                    return o.createElement("span", {
                        key: e.userData.userID + "-authorlabel"
                    }, a)
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
        Zkco: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("q1tI"),
                o = n("cys1"),
                i = {
                    disableLinks: !0,
                    forceClipsNetworkRequest: !0
                },
                a = function(e) {
                    var t = e.message;
                    return r.createElement("span", {
                        key: t.id,
                        style: {
                            color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                        }
                    }, Object(o.f)(t.tokens, i))
                }
        },
        ZuiC: function(e, t, n) {
            "use strict";
            n.d(t, "n", function() {
                return i
            }), n.d(t, "t", function() {
                return a
            }), n.d(t, "l", function() {
                return s
            }), n.d(t, "s", function() {
                return c
            }), n.d(t, "m", function() {
                return l
            }), n.d(t, "r", function() {
                return d
            }), n.d(t, "o", function() {
                return u
            }), n.d(t, "u", function() {
                return m
            }), n.d(t, "p", function() {
                return p
            }), n.d(t, "v", function() {
                return f
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "z", function() {
                return g
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "A", function() {
                return b
            }), n.d(t, "f", function() {
                return C
            }), n.d(t, "B", function() {
                return k
            }), n.d(t, "c", function() {
                return y
            }), n.d(t, "y", function() {
                return S
            }), n.d(t, "k", function() {
                return _
            }), n.d(t, "q", function() {
                return E
            }), n.d(t, "i", function() {
                return O
            }), n.d(t, "E", function() {
                return w
            }), n.d(t, "h", function() {
                return D
            }), n.d(t, "D", function() {
                return T
            }), n.d(t, "g", function() {
                return M
            }), n.d(t, "C", function() {
                return N
            }), n.d(t, "a", function() {
                return R
            }), n.d(t, "w", function() {
                return I
            }), n.d(t, "j", function() {
                return j
            }), n.d(t, "F", function() {
                return x
            }), n.d(t, "b", function() {
                return F
            }), n.d(t, "x", function() {
                return U
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = "vodChat.comments.DELETED_SUCCESS",
                a = function(e) {
                    return r.__assign({
                        type: i
                    }, e)
                },
                s = "vodChat.comments.CREATED_SUCCESS",
                c = function(e) {
                    return r.__assign({
                        type: s
                    }, e)
                },
                l = "vodChat.comments.CREATE_FAILED",
                d = function(e) {
                    return {
                        type: l,
                        createError: e
                    }
                },
                u = "vodChat.comments.DISPLAY_ERROR",
                m = function(e) {
                    return {
                        type: u,
                        errorMessage: e
                    }
                },
                p = "vodChat.comments.UPDATED_SUCCESS",
                f = function(e) {
                    return r.__assign({
                        type: p
                    }, e)
                },
                h = "vodChat.comments.CURSOR_RECEIVED",
                g = function(e) {
                    return r.__assign({
                        type: h
                    }, e)
                },
                v = "vodChat.comments.OFFSET_RECEIVED",
                b = function(e) {
                    return r.__assign({
                        type: v
                    }, e)
                },
                C = "vodChat.comments.QUERY_FAILED",
                k = function() {
                    return {
                        type: C
                    }
                },
                y = "vodChat.comments.CLEARED",
                S = function() {
                    return {
                        type: y
                    }
                },
                _ = "vodChat.comments.COOLDOWN_ENDED",
                E = function() {
                    return {
                        type: _
                    }
                },
                O = "vodChat.comments.SYNC_ENABLED",
                w = function() {
                    return {
                        type: O
                    }
                },
                D = "vodChat.comments.SYNC_DISABLED",
                T = function() {
                    return {
                        type: D
                    }
                },
                M = "vodChat.comments.REPLAY_FILTER_CHANGED",
                N = function(e) {
                    return o.m.set("videoChat.is_replay_mode", e), {
                        type: M,
                        isReplayFilterOn: e
                    }
                },
                R = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
                I = function() {
                    return {
                        type: R
                    }
                },
                j = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
                x = function(e) {
                    return o.m.set("videoChat.hide_timestamps", e), {
                        type: j,
                        hideTimestamps: e
                    }
                },
                F = "vodChat.comments.REQUEST_CHAT_SETTINGS",
                U = function() {
                    return {
                        type: F,
                        isReplayFilterOn: o.m.get("videoChat.is_replay_mode", !1),
                        hideTimestamps: o.m.get("videoChat.hide_timestamps", !1)
                    }
                }
        },
        ahza: function(e, t, n) {
            "use strict";
            var r = n("cr+I"),
                o = n("b6Yk");
            var i = n("pU2t");
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return m
            }), n.d(t, "g", function() {
                return p
            }), n.d(t, "h", function() {
                return f
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "e", function() {
                return g
            }), n.d(t, "d", function() {
                return v
            }), n.d(t, "f", function() {
                return b
            });
            var a = "content_offset_seconds",
                s = "cursor",
                c = "comment_id";

            function l(e) {
                return function(e) {
                    return "/v5/videos/" + e
                }(e) + "/comments"
            }

            function d(e) {
                return u(e).toString() + "/replies"
            }

            function u(e) {
                return "/v5/videos/comments/" + e
            }

            function m(e) {
                var t;
                t = g(e) ? d(e.parentId) : l(e.contentId);
                var n = {
                    body: Object(i.g)(e)
                };
                return o.a.post(t, n)
            }

            function p(e) {
                try {
                    if (function(e) {
                            return "commentID" in e
                        }(e)) return function(e) {
                        var t = {};
                        void 0 !== e.cursor && (t[s] = e.cursor);
                        var n = d(e.commentID) + "?" + r.stringify(t);
                        return o.a.getOrThrow(n).then(function(e) {
                            return Object(i.e)(e.body)
                        })
                    }(e);
                    var t = {};
                    v(e) ? t[s] = e.cursor : b(e) && (t[a] = "" + e.offset, void 0 !== e.highlightedMessageID && (t[c] = e.highlightedMessageID));
                    var n = l(e.videoID) + "?" + r.stringify(t);
                    return o.a.getOrThrow(n).then(function(t) {
                        return Object(i.d)(t.body, e.bitsConfig)
                    })
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function f(e) {
                var t = u(e.comment.id),
                    n = {
                        body: {
                            state: e.state
                        }
                    };
                return o.a.putOrThrow(t, n).then(function(t) {
                    return Object(i.f)(t.body, e.comment)
                })
            }

            function h(e) {
                var t = u(e.id);
                return o.a.delete(t)
            }

            function g(e) {
                return "parentId" in e
            }

            function v(e) {
                return "cursor" in e
            }

            function b(e) {
                return "offset" in e
            }
        },
        b5C3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("q1tI"),
                o = n("vHGB"),
                i = function(e) {
                    var t = e.badgesToRender,
                        n = e.badgeSets;
                    if (!t) return null;
                    var i = [];
                    ! function(e) {
                        return Array.isArray(e)
                    }(t) ? function(e) {
                        return !Array.isArray(e)
                    }(t) && (i = Object.keys(t).map(function(e) {
                        var i = t[e],
                            a = n.getBadge(e, i);
                        return null === a ? null : r.createElement(o.a, {
                            key: a.setID + "/" + a.version,
                            badge: a
                        })
                    })) : i = t.map(function(e) {
                        var t = n.getBadge(e.setID, e.version);
                        return null === t ? null : r.createElement(o.a, {
                            key: t.setID + "/" + t.version,
                            badge: t
                        })
                    });
                    var a = i.filter(function(e) {
                        return null !== e
                    });
                    return r.createElement("span", null, a)
                };
            i.displayName = "BadgeList"
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
        cVte: function(e, t, n) {},
        ehEd: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            });
            var r = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png",
                o = function(e) {
                    return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/1.0"
                },
                i = function(e) {
                    return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/2.0 2x"
                }
        },
        fCiU: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            });
            var r = n("p52R"),
                o = /^[\x00-\x7F]*$/,
                i = function(e) {
                    return !o.test(e)
                },
                a = function(e) {
                    return i(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
                },
                s = function(e, t) {
                    return {
                        userID: e.id,
                        userDisplayName: e.displayName,
                        userType: r.a.User,
                        isIntl: i(e.displayName),
                        userLogin: e.name,
                        color: t
                    }
                }
        },
        fI4C: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return p
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "a", function() {
                return g
            }), n.d(t, "m", function() {
                return v
            }), n.d(t, "l", function() {
                return b
            }), n.d(t, "f", function() {
                return C
            }), n.d(t, "g", function() {
                return k
            }), n.d(t, "e", function() {
                return y
            }), n.d(t, "i", function() {
                return S
            }), n.d(t, "h", function() {
                return _
            }), n.d(t, "j", function() {
                return E
            }), n.d(t, "k", function() {
                return O
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = n("vRsq"),
                a = n("2xye"),
                s = n("L9xt"),
                c = n("I6K6"),
                l = n("ahza"),
                d = n("DpwM"),
                u = n("BQs+"),
                m = n("CJLt"),
                p = "replay_mode",
                f = "timestamp_mode",
                h = "on",
                g = "off",
                v = function(e) {
                    o.o.track(s.SpadeEventType.VideoChatSettingChanged, e)
                },
                b = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var n, l, d, p;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, o.p.apollo.client.query({
                                        query: m,
                                        variables: {
                                            videoCreatorID: e.channelId,
                                            videoID: e.contentId
                                        }
                                    })];
                                case 1:
                                    return n = r.sent().data, l = {
                                        channel: n.video.owner.login,
                                        channel_id: Number(e.channelId),
                                        game: n.video.game ? n.video.game.name : null,
                                        location: a.PageviewLocation.VideoWatchPage,
                                        share_platform: u.a.Link,
                                        share_context: a.ShareItemContext.Chomment,
                                        shared_item_id: Object(i.p)(e.contentId),
                                        shared_item_type: Object(c.a)(n.video.broadcastType),
                                        shared_item_url: t.toString(),
                                        partner: n.video.owner.roles.isPartner,
                                        source_item_id: e.id,
                                        source_item_type: a.SourceItemType.Chomment
                                    }, d = w(e, n, u.a.Link), o.o.track(s.SpadeEventType.ChommentUIAction, d), o.o.track(s.SpadeEventType.ShareItem, l), [3, 3];
                                case 2:
                                    return p = r.sent(), o.k.error(p.toString(), b.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e, t) {
                    var n = e.users[0],
                        r = e.comments[0];
                    return {
                        channel: t.user.login,
                        channel_id: Number(r.channelId),
                        comment_id: r.id,
                        comment_state: r.state,
                        event_source: "frontend",
                        game: t.video.game ? t.video.game.name : null,
                        login: n.name,
                        play_session_id: o.o.getVideoPlayerTrackingData().playSessionID,
                        reply_to_comment_id: Object(d.h)(r) ? r.parentId : null,
                        user_id: Number(n.id),
                        vod_id: Number(r.contentId),
                        vod_title: t.video.title,
                        vod_ts: r.contentOffset,
                        vod_type: Object(c.a)(t.video.broadcastType)
                    }
                },
                k = function(e, t, n) {
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
                        vod_type: Object(c.a)(n.video.broadcastType),
                        vod_ts: e.comment.contentOffset
                    }
                },
                y = function(e, t, n) {
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
                        vod_type: Object(c.a)(n.video.broadcastType),
                        vod_ts: e.comment.contentOffset
                    }
                },
                S = function(e, t, n) {
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
                        vod_type: Object(c.a)(n.video.broadcastType),
                        vod_ts: e.contentOffset
                    }
                },
                _ = function(e, t, n) {
                    var r = null,
                        o = Object.keys(t.vodChat.comments.comments.parentComments);
                    if (o.length > 0) {
                        var i = o[0];
                        r = t.vodChat.comments.comments.parentComments[i].channelId
                    }
                    return {
                        action: "create",
                        channel_id: r ? Number(r) : null,
                        comment_body: e.message,
                        event_source: "frontend",
                        game: n.video.game ? n.video.game.name : null,
                        login: t.session.user ? t.session.user.login : null,
                        reply_to_comment_id: Object(l.e)(e) ? e.parentId : null,
                        user_id: t.session.user ? Number(t.session.user.id) : null,
                        vod_id: Number(n.video.id),
                        vod_title: n.video.title,
                        vod_ts: Object(l.e)(e) ? null : Number(e.contentOffsetSeconds),
                        vod_type: Object(c.a)(n.video.broadcastType)
                    }
                },
                E = function(e, t, n) {
                    var r = e.comment.id,
                        o = e.comment.channelId;
                    return {
                        action: e.state === d.c ? "publish" : "unpublish",
                        channel_id: Number(o),
                        comment_id: r,
                        event_source: "frontend",
                        game: n.video.game ? n.video.game.name : null,
                        login: t.session.user.login,
                        user_id: Number(t.session.user.id),
                        vod_id: Number(n.video.id),
                        vod_title: n.video.title,
                        vod_ts: e.comment.contentOffset,
                        vod_type: Object(c.a)(n.video.broadcastType)
                    }
                },
                O = function(e, t, n) {
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
                        vod_type: Object(c.a)(n.video.broadcastType)
                    }
                },
                w = function(e, t, n) {
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
                        vod_type: Object(c.a)(t.video.broadcastType),
                        share_platform: n
                    }
                }
        },
        fIj0: function(e, t) {
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
        fQWD: function(e, t, n) {
            "use strict";
            var r = n("vHGB");
            n.d(t, "a", function() {
                return r.a
            })
        },
        g807: function(e, t, n) {
            "use strict";
            var r = n("RNNG"),
                o = function() {
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
                }();
            n.d(t, "b", function() {
                return r.b
            }), n.d(t, "c", function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.d
            }), n.d(t, !1, function() {
                return r.e
            }), n.d(t, "d", function() {
                return r.f
            }), n.d(t, !1, function() {}), n.d(t, "a", function() {
                return o
            })
        },
        gPTj: function(e, t, n) {},
        kVrx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "c", function() {
                return f
            });
            var r = n("/7QA"),
                o = n("f00E"),
                i = n("4rCz"),
                a = n("BKFw"),
                s = n("NZDK"),
                c = n("9kXc"),
                l = n("BZOq"),
                d = n("V3Pk"),
                u = n("WK0g"),
                m = function(e, t) {
                    return Object(u.b)(t).then(function(n) {
                        e.dispatch(Object(d.h)(n, t.bitsConfig))
                    }, function() {
                        e.dispatch(Object(d.g)(Object(i.d)("Unable to retrieve messages, please try again.", "routines-moderation")))
                    })
                },
                p = function(e, t) {
                    return Object(u.a)(t).then(function() {
                        e.dispatch(Object(d.f)(t.bannedUser))
                    }).catch(function(t) {
                        return e.dispatch(Object(d.e)(t))
                    })
                },
                f = function(e, t) {
                    var n = new s.a({
                            appId: r.a.algoliaApplicationID,
                            apiKey: r.a.algoliaAPIKey,
                            apolloClient: r.p.apollo.client,
                            logger: r.k,
                            config: r.a,
                            stats: r.p.stats
                        }),
                        i = o.a(),
                        u = Object(l.b)({
                            broadcastType: a.c,
                            broadcasterId: t.creatorId
                        }),
                        m = u.typeID,
                        p = u.params;
                    return n.queryForType(m, t.searchTerm, i, p).then(function(t) {
                        var n = Object(c.b)({
                            searchResults: t
                        });
                        n.currentVideoResults && e.dispatch(Object(d.i)(n.currentVideoResults))
                    }).catch(function() {})
                }
        },
        kt0o: function(e, t, n) {},
        l41m: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "d", function() {
                return p
            }), n.d(t, "b", function() {
                return C
            });
            var r = n("mrSG"),
                o = n("QzU5"),
                i = n("DpwM"),
                a = n("g807"),
                s = n("RNNG"),
                c = n("pU2t"),
                l = n("KD05"),
                d = {
                    beginSec: Number.MIN_VALUE,
                    endSec: Number.MAX_VALUE
                },
                u = function(e, t) {
                    return t.commenter in e
                },
                m = function(e, t, n, r) {
                    var o = e.vodChat.comments,
                        i = o.currentVideoTime,
                        l = o.comments;
                    return 0 === l.commentCount ? [] : Array.from(new a.a(l)).reduce(function(o, a) {
                        return a.offset > i ? o : (a.comments.forEach(function(i) {
                            var a = Object(s.b)(l, i);
                            if (void 0 !== a && (n || !u(r, a))) return a.source === c.b && k(e.vodChat.comments.isReplayFilterOn, t) ? o : o.push(g(a, e, n, r, t))
                        }), o)
                    }, []).sort(f)
                },
                p = function(e) {
                    var t = function(e) {
                        return e.vodChat.comments.comments
                    }(e);
                    return Object.keys(t.parentComments).map(function(n) {
                        return b(t.parentComments[n], e)
                    }).filter(function(e) {
                        return void 0 !== e.video
                    }).sort(h)
                },
                f = function(e, t) {
                    return e.comment.contentOffset === t.comment.contentOffset ? e.comment.createdAt.getTime() - t.comment.createdAt.getTime() : e.comment.contentOffset - t.comment.contentOffset
                },
                h = function(e, t) {
                    return e.comment.createdAt.getTime() === t.comment.createdAt.getTime() ? t.comment.contentOffset - e.comment.contentOffset : t.lastUpdated.getTime() - e.lastUpdated.getTime()
                },
                g = function(e, t, n, r, o) {
                    var a = new Array,
                        s = new Array,
                        c = t.vodChat.comments.comments.replies[e.id],
                        l = e.createdAt;
                    return Array.isArray(c) && c.forEach(function(e) {
                        !n && u(r, e) || (e.source === i.f && k(t.vodChat.comments.isReplayFilterOn, o) ? (s.push(g(e, t, n, r)), l = y(l, e.createdAt)) : (a.push(g(e, t, n, r)), l = y(l, e.createdAt)))
                    }), k(t.vodChat.comments.isReplayFilterOn, o) ? {
                        author: t.vodChat.users.users[e.commenter],
                        comment: e,
                        lastUpdated: l,
                        replies: s.sort(f)
                    } : {
                        author: t.vodChat.users.users[e.commenter],
                        comment: e,
                        lastUpdated: l,
                        replies: a.sort(f)
                    }
                },
                v = function(e, t) {
                    var n = new Array,
                        r = t.vodChat.comments.comments.replies[e.id],
                        o = e.createdAt;
                    return Array.isArray(r) && r.forEach(function(e) {
                        n.push(v(e, t)), o = y(o, e.createdAt)
                    }), {
                        author: t.vodChat.users.users[e.commenter],
                        comment: e,
                        lastUpdated: o,
                        replies: n.sort(f)
                    }
                },
                b = function(e, t) {
                    var n = v(e, t);
                    return r.__assign({}, n, {
                        video: t.vodChat.moderation.videos[Object(l.a)(e.contentId)]
                    })
                },
                C = function(e) {
                    return 0 === e.commentCount ? d : {
                        beginSec: e.minOffset,
                        endSec: e.maxOffset
                    }
                },
                k = function(e, t) {
                    return !!t && (e && (t === o.a.Archive || t === o.a.Highlight))
                },
                y = function(e, t) {
                    return e.getTime() > t.getTime() ? e : t
                }
        },
        lRNp: function(e, t, n) {},
        "n+IG": function(e, t, n) {},
        nLDR: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                o = n("/MKj"),
                i = n("wIs1"),
                a = n("yR8l"),
                s = n("aCAx"),
                c = n("kRBY"),
                l = n("0Lz3"),
                d = n("2bi+"),
                u = n("q1tI"),
                m = n("fvjX"),
                p = n("/7QA"),
                f = n("ZDlU"),
                h = n("8/mp"),
                g = n("V+GM"),
                v = n("NvVO"),
                b = n("2xye"),
                C = n("uIkQ"),
                k = n("GnwI"),
                y = n("N0BP"),
                S = n("DMoW"),
                _ = n("/HY+"),
                E = n("eJ65"),
                O = n("Ue10"),
                w = (n("oxdP"), function(e) {
                    return u.createElement("div", {
                        className: "mod-dashboard__ban-message"
                    }, u.createElement(O.Pa, {
                        padding: {
                            left: 2
                        },
                        margin: {
                            y: 2
                        }
                    }, u.createElement("ul", null, u.createElement("li", null, u.createElement("span", null, Object(p.d)("All messages from this viewer will be deleted from your channel and videos", "chomments.moderation.deletePreviousMessages"))), u.createElement("li", null, u.createElement("span", null, Object(p.d)("This viewer will not be able to chat on your channel, videos, or Pulse posts", "chomments.moderation.disallowFutureMessages"))))), u.createElement(O.Eb, {
                        background: O.r.Alt2,
                        display: O.X.Flex,
                        flexWrap: O.Ba.NoWrap,
                        padding: 2,
                        margin: {
                            y: 2
                        }
                    }, u.createElement(O.Pa, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement("img", {
                        src: e.user.logo.toString(),
                        style: {
                            width: "4rem",
                            height: "4rem"
                        }
                    })), u.createElement("div", null, u.createElement(O.Eb, {
                        margin: {
                            top: .5
                        },
                        fontSize: O.Ca.Size6,
                        color: O.O.Alt2
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
                                title: Object(p.d)("Ban this viewer?", "chomments.moderation.banUserActionConfirmV2"),
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = u.createElement(O.A, {
                                ariaLabel: Object(p.d)("Message Options Menu", "ModeratorCommentMenu"),
                                dropdown: !0,
                                icon: O.tb.More,
                                "data-test-selector": "menu-button"
                            }),
                            t = null;
                        return "onPublishClick" in this.props ? t = u.createElement(O.Ua, {
                            onClick: this.onPublishClickHandler,
                            "data-test-selector": "publish"
                        }, u.createElement(O.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(p.d)("Publish Message", "chomments.moderation.publishMessageAction"))) : "onUnpublishClick" in this.props && (t = u.createElement(O.Ua, {
                            onClick: this.onUnpublishClickHandler,
                            "data-test-selector": "un-publish"
                        }, u.createElement(O.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(p.d)("Hold for Review", "chomments.moderation.unpublishMessageAction")))), u.createElement(O.Xa, {
                            display: O.X.Flex,
                            flexWrap: O.Ba.NoWrap
                        }, u.createElement(E.a, {
                            ref: this.saveBalloonWrapperRef
                        }, e, u.createElement(O.u, {
                            direction: O.v.BottomRight
                        }, u.createElement(O.Xa, {
                            padding: .5
                        }, u.createElement(O.Ua, {
                            onClick: this.banUserClickHandler,
                            "data-test-selector": "ban-user"
                        }, u.createElement(O.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(p.d)("Ban User", "chomments.moderation.menu.banUserAction"))), t, u.createElement(O.Ua, {
                            onClick: this.onReportMessageClick,
                            "data-test-selector": "report-message"
                        }, u.createElement(O.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(p.d)("Report Message", "chomments.moderation.reportMessageAction")))))))
                    }, t
                }(u.Component);
            var T = Object(o.connect)(null, function(e) {
                    return {
                        onCloseBanUserModal: function() {
                            e(Object(s.c)())
                        },
                        onMessageReportRequest: function(t, n, r) {
                            e(Object(s.d)(_.a, {
                                title: Object(p.d)("Report this message?", "ModeratorCommentMenu"),
                                reportContext: {
                                    contentType: S.N.VOD_COMMENT_REPORT,
                                    contentID: t,
                                    targetUserID: n,
                                    additionalTrackingID: r
                                }
                            }))
                        },
                        onShowBanUserModal: function(t, n) {
                            e(Object(s.d)(t, n))
                        }
                    }
                })(D),
                M = n("TSYQ"),
                N = (n("cVte"), function(e) {
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
                    return u.createElement(O.Xa, {
                        className: "mod-comment__unpublished-message",
                        padding: {
                            left: 5,
                            y: 1
                        }
                    }, u.createElement(O.W, {
                        color: O.O.Link,
                        fontSize: O.Ca.Size5
                    }, t, ": ", Object(p.d)("This message was held for review and is hidden from viewers.", "chomments.moderation.heldForReview")))
                }),
                R = (n("NTKp"), function(e) {
                    var t, n = null;
                    e.state !== d.c && (n = u.createElement(N, {
                        state: e.state
                    }));
                    var r = M(((t = {})[d.g + "__row--unpublished"] = e.state !== d.c, t));
                    return u.createElement("div", {
                        className: r
                    }, n, e.children)
                }),
                I = n("hyVY"),
                j = (n("kt0o"), "comment"),
                x = "t",
                F = function(e) {
                    var t = e.context,
                        n = t.video,
                        r = t.comment,
                        o = function(e) {
                            var t = "/videos/" + e.contentId,
                                n = new URLSearchParams;
                            return n.append(j, e.id), n.append(x, Object(d.t)(e.contentOffset)), t + "?" + n
                        }(e.context.comment);
                    return u.createElement(O.Xa, {
                        className: "mod-dashboard__video",
                        margin: {
                            x: 2
                        }
                    }, u.createElement("a", {
                        href: o,
                        target: "_blank"
                    }, u.createElement(O.o, null, u.createElement("img", {
                        src: n.preview.small,
                        alt: e.context.video.title
                    }))), u.createElement(O.z, {
                        ariaLabel: Object(p.d)("Go to message in video.", "MessageVideo"),
                        type: O.F.Text,
                        icon: O.tb.Conversations,
                        fullWidth: !0,
                        linkTo: o,
                        targetBlank: !0,
                        "data-a-target": "moderator-message-video-button"
                    }, Object(I.b)(r.contentOffset)))
                };
            var U = function(e) {
                    var t = Object(p.i)(e.comment.createdAt),
                        n = Object(d.s)(e.user),
                        r = "/" + e.user.name;
                    return e.showRelativeTimeOnly ? u.createElement("span", {
                        "data-test-selector": "createdat-message"
                    }, t) : Object(d.w)(e.comment) ? u.createElement("span", {
                        "data-test-selector": "reply-createdat-message"
                    }, Object(p.d)("{user} replied {when}", {
                        user: u.createElement("a", {
                            href: r,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, n),
                        when: t
                    }, "chomments.moderation.userRepliedWhen")) : u.createElement("span", {
                        "data-test-selector": "parent-createdat-message"
                    }, Object(p.d)("{user} left a message {when}", {
                        user: u.createElement("a", {
                            href: r,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, n),
                        when: t
                    }, "chomments.moderation.userLeftMessageWhen"))
                },
                A = (n("RLGp"), function(e) {
                    return u.createElement(O.Xa, {
                        display: O.X.Flex,
                        flexWrap: O.Ba.NoWrap
                    }, u.createElement(O.Xa, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(O.q, {
                        alt: e.author.displayName,
                        src: e.author.logo.toString(),
                        size: 40
                    })), u.createElement(O.Eb, {
                        fontSize: O.Ca.Size5,
                        color: O.O.Alt,
                        className: d.f + "-message"
                    }, u.createElement(d.h, {
                        allowActionTextColors: !1,
                        message: e.comment.message
                    }), u.createElement(O.Eb, {
                        margin: {
                            top: .5
                        },
                        fontSize: O.Ca.Size6,
                        color: O.O.Alt2
                    }, u.createElement(C.b, {
                        badgesToRender: e.comment.userBadges,
                        badgeSets: e.badgeSets
                    }), u.createElement(U, {
                        comment: e.comment,
                        user: e.author,
                        showRelativeTimeOnly: e.showRelativeTimeOnly || !1
                    }))))
                }),
                L = (n("8zXI"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isTextAreaVisible: !1
                        }, t.deleteClickHandler = function() {
                            t.props.onShowDeleteModal(d.e, {
                                title: Object(p.d)("Delete this message?", "DashboardModerationReactionBar"),
                                onConfirmClick: t.props.onDeleteConfirmClick,
                                onDenyClick: t.props.onCloseDeleteModal,
                                children: u.createElement(O.Eb, {
                                    background: O.r.Alt2,
                                    padding: 2,
                                    margin: {
                                        y: 2
                                    }
                                }, u.createElement(A, {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null,
                            t = null,
                            n = null;
                        return this.props.comment.state === d.c ? ((Object(d.w)(this.props.comment) && this.props.parentCommentState === d.c || !Object(d.w)(this.props.comment)) && (t = u.createElement(O.Xa, {
                            padding: {
                                x: .5
                            },
                            "data-test-selector": "reply-comment-button"
                        }, u.createElement(d.i, {
                            context: d.f,
                            onReplyClick: this.onReplyClickHandler
                        }))), this.state.isTextAreaVisible && (n = u.createElement(O.Xa, {
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
                        })))) : e = u.createElement(O.Xa, {
                            padding: {
                                x: .5
                            }
                        }, u.createElement(O.z, {
                            type: O.F.Hollow,
                            "data-test-selector": "publish",
                            onClick: this.props.onPublishClick
                        }, Object(p.d)("Publish Message", "DashboardModerationReactionBar"))), u.createElement("div", null, u.createElement(O.Xa, {
                            display: O.X.InlineFlex,
                            margin: {
                                left: 5
                            },
                            padding: {
                                top: 1
                            }
                        }, t, e, u.createElement("div", {
                            className: "mod-dashboard__button--warning"
                        }, u.createElement(O.A, {
                            ariaLabel: Object(p.d)("Delete Message", "DashboardModerationReactionBar"),
                            type: O.C.Hollow,
                            "data-a-selector": "qa-mod-delete-button",
                            "data-test-selector": "delete-comment-button",
                            icon: O.tb.Trash,
                            onClick: this.deleteClickHandler
                        }))), n)
                    }, t
                }(u.Component));
            var V = Object(o.connect)(null, function(e) {
                    return {
                        onCloseDeleteModal: function() {
                            e(Object(s.c)())
                        },
                        onShowDeleteModal: function(t, n) {
                            e(Object(s.d)(t, n))
                        }
                    }
                })(L),
                H = function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.context,
                            n = e.onDeleteClick,
                            o = {
                                badgeSets: this.props.badgeSets,
                                comment: this.props.context.comment,
                                onBanUserClick: this.onBanUserClickHandler,
                                author: this.props.context.author
                            };
                        return t.comment.state === d.c ? o.onUnpublishClick = this.onUnpublishClickHandler : o.onPublishClick = this.onPublishClickHandler, u.createElement(R, {
                            state: t.comment.state
                        }, u.createElement(O.Xa, {
                            padding: {
                                top: 1,
                                left: 5,
                                right: 1,
                                bottom: 2
                            }
                        }, u.createElement(O.Ja, null, u.createElement(O.P, {
                            cols: {
                                default: 12,
                                xs: 8,
                                sm: 10,
                                md: 11
                            }
                        }, u.createElement(O.Xa, {
                            display: O.X.Flex
                        }, u.createElement(A, {
                            author: t.author,
                            badgeSets: this.props.badgeSets,
                            comment: t.comment
                        })), u.createElement(V, {
                            badgeSets: this.props.badgeSets,
                            comment: t.comment,
                            onCreateReplyClick: this.props.onCreateReplyClick,
                            onDeleteConfirmClick: function() {
                                n(t.comment)
                            },
                            onPublishClick: this.onPublishClickHandler,
                            messageAuthor: t.author,
                            parentCommentState: this.props.parentCommentState
                        })), u.createElement(O.P, {
                            cols: {
                                default: 12,
                                xs: 4,
                                sm: 2,
                                md: 1
                            }
                        }, u.createElement(T, r.__assign({}, o))))))
                    }, t
                }(u.Component),
                B = (n("XjG0"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.replies.map(function(t) {
                                return u.createElement("li", {
                                    key: t.comment.id,
                                    "data-a-target": "moderator-message-reply-" + t.comment.id
                                }, u.createElement(H, {
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
                X = (n("NTvC"), function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.context,
                            t = {
                                badgeSets: this.props.badgeSets,
                                comment: e.comment,
                                onBanUserClick: this.onBanUserClickHandler,
                                author: e.author
                            };
                        e.comment.state === d.c ? t.onUnpublishClick = this.onUnpublishClickHandler : t.onPublishClick = this.onPublishClickHandler;
                        var n = null;
                        return e.comment.moreReplies && (n = u.createElement(O.Eb, {
                            fontSize: O.Ca.Size6,
                            padding: {
                                left: 5,
                                y: .5
                            }
                        }, u.createElement(d.k, {
                            onClick: this.onLoadMoreRepliesClickHandler
                        }))), u.createElement(O.Eb, r.__assign({
                            border: !0,
                            className: d.g + " qa-mod-comment",
                            fontSize: O.Ca.Size5
                        }, Object(y.a)(this.props)), u.createElement(R, {
                            state: e.comment.state
                        }, u.createElement(O.Ja, null, u.createElement(O.P, {
                            cols: {
                                default: 12,
                                sm: 5,
                                md: 7,
                                lg: 8
                            }
                        }, u.createElement(O.Xa, {
                            display: O.X.Flex,
                            flexDirection: O.Aa.Column,
                            padding: {
                                y: 1,
                                left: 1
                            }
                        }, u.createElement(A, {
                            badgeSets: this.props.badgeSets,
                            comment: e.comment,
                            author: e.author
                        }), u.createElement(V, {
                            badgeSets: this.props.badgeSets,
                            comment: e.comment,
                            onCreateReplyClick: this.props.onCreateReplyClick,
                            onDeleteConfirmClick: this.onDeleteClickHandler,
                            onPublishClick: this.onPublishClickHandler,
                            messageAuthor: e.author
                        }))), u.createElement(O.P, {
                            cols: {
                                default: 12,
                                xs: 9,
                                sm: 5,
                                md: 4,
                                lg: 3
                            }
                        }, u.createElement(O.Xa, {
                            display: O.X.Flex,
                            flexDirection: O.Aa.Row,
                            padding: {
                                top: 1
                            }
                        }, u.createElement(F, {
                            context: e
                        }), u.createElement(O.W, {
                            color: O.O.Base,
                            type: O.Vb.H5
                        }, e.video.title))), u.createElement(O.P, {
                            cols: {
                                default: 12,
                                xs: 3,
                                sm: 1
                            }
                        }, u.createElement(O.Xa, {
                            margin: {
                                top: 1
                            }
                        }, u.createElement(T, r.__assign({}, t))))), n), u.createElement(B, {
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
                P = (n("7nEj"), Object(k.b)("ModeratorCommentList", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.comments.map(function(t, n) {
                        return u.createElement(O.Pa, {
                            key: t.comment.id,
                            margin: {
                                y: 1
                            }
                        }, u.createElement("li", {
                            className: d.g + " " + d.g + "__fadein"
                        }, u.createElement(X, {
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
                W = n("u5aL"),
                z = n("BZOq"),
                q = n("z3cX"),
                G = (n("6yEf"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.changeHandler = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return u.createElement(O.Xa, {
                            className: "search-bar"
                        }, u.createElement(O.vb, {
                            disabled: this.props.disabled,
                            onChange: this.changeHandler,
                            placeholder: Object(p.d)("Search by video", "chomments.moderation.searchByVideoPlaceholder"),
                            value: this.props.searchTerm,
                            id: d.f + "-search"
                        }))
                    }, t
                }(u.Component)),
                Q = (n("Km7b"), function(e) {
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
                                r = "";
                            t && t.title && (r = t.title), n.setState({
                                isShowingResults: !1,
                                searchInputValue: r
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.searchTerm !== e.searchTerm && this.setState({
                            searchInputValue: e.searchTerm
                        })
                    }, t.prototype.render = function() {
                        var e = this,
                            t = "";
                        return t = 0 === this.props.searchHits.length ? [u.createElement(O.Ua, {
                            "data-test-selector": "no-results",
                            key: "no-results"
                        }, u.createElement(O.Xa, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(p.d)("No results found.", "chomments.moderation.noResults")))] : Object(z.a)(this.props.searchHits).map(function(t, n) {
                            var r = {
                                id: t.id,
                                lengthSeconds: t.length,
                                title: t.title,
                                previewThumbnailURL: t.thumbnail,
                                publishedAt: new Date(1e3 * t.createdAt).toDateString()
                            };
                            return u.createElement(O.Ua, {
                                key: "result-" + n,
                                onClick: function() {
                                    e.resultClickHandler(r.id)
                                }
                            }, u.createElement(q.a, {
                                video: r
                            }))
                        }), u.createElement(O.Xa, {
                            position: O.jb.Relative
                        }, u.createElement(W.a, {
                            onClickOut: this.closeResults
                        }, u.createElement(G, {
                            disabled: this.props.disabled,
                            searchTerm: this.state.searchInputValue,
                            onChange: this.searchInputChangeHandler
                        }), u.createElement(O.u, {
                            show: this.state.isShowingResults,
                            size: O.w.Large
                        }, u.createElement(h.b, {
                            className: "search-bar__search-results",
                            suppressScrollX: !0
                        }, u.createElement(O.Xa, {
                            padding: .5
                        }, t)))))
                    }, t
                }(u.Component)),
                K = Object(k.b)("SearchFilter")(Q),
                Z = (n("GeG0"), Object(k.b)("FilterOptions", {
                    autoReportInteractive: !0
                })(function(e) {
                    return u.createElement(K, {
                        disabled: e.disabled,
                        onSearchTermChange: e.onSearchTermChange,
                        onSearchResultClick: e.onSearchResultClick,
                        onSearchTermReset: e.onSearchTermReset,
                        searchHits: e.searchHits,
                        searchTerm: e.searchTerm
                    })
                })),
                $ = Object(o.connect)(function(e, t) {
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
                })(Z),
                Y = function(e) {
                    return u.createElement(O.Xa, {
                        display: O.X.Flex,
                        justifyContent: O.Wa.Center
                    }, u.createElement(O.Xa, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(O.z, {
                        onClick: e.onNewerClick,
                        "data-test-selector": "newer-button",
                        disabled: !("onNewerClick" in e)
                    }, Object(p.d)("Newer Messages", "chomments.dashboard.newerMessages"))), u.createElement(O.z, {
                        onClick: e.onOlderClick,
                        "data-test-selector": "older-button",
                        disabled: !("onOlderClick" in e)
                    }, Object(p.d)("Older Messages", "chomments.dashboard.olderMessages")))
                };
            n("4g9D");

            function J(e) {
                return e.ownerLogin || e.match.params.channelName
            }
            var ee = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onBanUserClickHandler = function(e, t) {
                            n.props.onBanUserClick({
                                targetChannel: n.props.data.user.id,
                                bannedUser: e,
                                comment: t
                            })
                        }, n.createReply = function(e, t) {
                            var r = {
                                message: e,
                                parentId: t
                            };
                            n.props.onCreateClick(r)
                        }, n.onLoadMoreRepliesHandler = function(e, t) {
                            n.props.onLoadMoreRepliesClick(e, n.props.replyCursorMap, t)
                        }, n.badgeSets = new C.c([], [], J(t)), n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.setPageTitle(), this.props.onMountOrDidUpdate(this.props)
                    }, t.prototype.componentDidUpdate = function(e) {
                        this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive(2), e.data.loading && !this.props.data.loading && this.setPageTitle(), this.props.onMountOrDidUpdate(this.props, e)
                    }, t.prototype.componentWillUnmount = function() {
                        this.props.onUnmount()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        (function(e, t) {
                            return t.data.badges !== e.data.badges || t.data.user !== e.data.user
                        })(this.props, e) && (this.badgeSets = new C.c([], [], J(this.props)), !e.data.loading && e.data.user && (this.badgeSets = new C.c(e.data.badges, e.data.user.broadcastBadges, J(e))))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.comments,
                            n = e.data;
                        if ("" !== e.errorMessage || !this.props.data.loading && ! function(e) {
                                return !e.data.loading && (e.data.user.id === e.data.currentUser.id || e.data.user.self.isModerator || e.data.currentUser.roles.isStaff || e.data.currentUser.roles.isGlobalMod || e.data.currentUser.roles.isSiteAdmin)
                            }(this.props)) return u.createElement(O.Eb, {
                            className: d.f + "__permissions",
                            color: O.O.Alt2,
                            textAlign: O.Rb.Center
                        }, u.createElement(O.W, {
                            type: O.Vb.H3,
                            italic: !0,
                            "data-test-selector": "unauthorized-test-selector"
                        }, this.props.errorMessage || Object(p.d)("You do not have permission to access this dashboard.", "ModerationPageComponent")));
                        var o = null;
                        "" !== this.props.videoFilter && (o = u.createElement(O.Xa, {
                            margin: {
                                left: 1
                            }
                        }, u.createElement(O.z, {
                            onClick: this.props.onClearFiltersClick,
                            "data-test-selector": "clear-filters-button-test-selector"
                        }, Object(p.d)("Clear filters", "chomments.moderation.clearSearchFilters"))));
                        var i = null;
                        if (this.props.comments.length < 1 && !n.loading && !n.error && this.props.hasFetchedComments) {
                            var a = Object(p.d)("You currently have no messages. Add a message to one of your videos to encourage conversation in your community.", "ModerationDashboard");
                            "" !== this.props.videoFilter && (a = Object(p.d)("You currently have no messages on this video. Add a message to this video to encourage conversation in your community.", "ModerationDashboard")), i = u.createElement(O.Eb, {
                                className: d.f + "__empty",
                                color: O.O.Alt2,
                                textAlign: O.Rb.Center,
                                key: "modDashboardNoComments"
                            }, u.createElement(O.W, {
                                type: O.Vb.H3,
                                italic: !0,
                                "data-test-selector": "no-comments-test-selector"
                            }, a))
                        }
                        var s = "";
                        void 0 !== n.video && (s = n.video.title);
                        var c = [i, u.createElement(P, {
                            badgeSets: this.badgeSets,
                            comments: t,
                            key: "modDashboardCommentList",
                            onBanUserClick: this.onBanUserClickHandler,
                            onCreateReplyClick: this.createReply,
                            onDeleteClick: this.props.onDeleteClick,
                            onLoadMoreRepliesClick: this.onLoadMoreRepliesHandler,
                            onToggleVisibilityClick: this.props.onToggleVisibilityClick
                        })];
                        return n.error ? c = [u.createElement(f.a, {
                            key: "modDashboardError",
                            message: Object(p.d)("Error loading data.", "chomments.moderation")
                        })] : !n.loading && this.props.hasFetchedComments || (c = [u.createElement(O.Xa, {
                            key: "modDashboardLoading",
                            display: O.X.Flex,
                            alignItems: O.f.Center,
                            fullHeight: !0
                        }, u.createElement(O.Za, {
                            fillContent: !0
                        }))]), u.createElement(h.b, {
                            suppressScrollX: !0,
                            contentClassName: d.f + "__scroll-container"
                        }, u.createElement(O.Xa, {
                            padding: 2,
                            fullWidth: !0
                        }, u.createElement(O.Eb, {
                            className: d.f + "__filters",
                            fullWidth: !0,
                            padding: 2,
                            borderMarked: !0,
                            border: !0,
                            display: O.X.Flex
                        }, u.createElement($, {
                            creatorId: n.user && n.user.id || "",
                            disabled: !(n.user && n.user.id),
                            onSearchClick: this.props.onSearchClick,
                            onClearFilters: this.props.onClearFiltersClick,
                            selectedVideoTitle: s
                        }), o), c, u.createElement(Y, r.__assign({}, te(this.props)))))
                    }, t.prototype.setPageTitle = function() {
                        if (this.props.data.user) {
                            var e = this.props.data.user.displayName;
                            p.p.setPageTitle(Object(p.d)("{ownerDisplayName} - Video Moderation", {
                                ownerDisplayName: e
                            }, "VideoModerationPage"))
                        }
                    }, t
                }(u.Component),
                te = function(e) {
                    var t = {};
                    return Object(d.u)(e.cursor) && (t.onNewerClick = function() {
                        window.scrollTo(0, 0), e.onLoadNewerClick(ne(e, e.cursor.future))
                    }), Object(d.v)(e.cursor) && (t.onOlderClick = function() {
                        window.scrollTo(0, 0), e.onLoadOlderClick(ne(e, e.cursor.past))
                    }), t
                },
                ne = function(e, t) {
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
                re = Object(m.compose)(Object(k.b)("ModerationPage", {
                    destination: v.a.ChannelDashboardModeration
                }), Object(g.a)({
                    location: b.PageviewLocation.Dashboard
                }))(ee),
                oe = n("zl5M");
            var ie = Object(i.a)(Object(o.connect)(function(e, t) {
                return {
                    ownerLogin: t.channelName || "",
                    commentId: function(e) {
                        var t = new URLSearchParams(e.location.search).get("comment");
                        return "" === e.location.search || null === t ? "" : t
                    }(t),
                    comments: Object(d.A)(e),
                    cursor: e.vodChat.comments.cursor,
                    errorMessage: e.vodChat.comments.errorMessage,
                    hasFetchedComments: e.vodChat.comments.hasLoadedData,
                    replyCursorMap: e.vodChat.comments.replyCursorMap,
                    sessionIsAuthenticated: Object(c.f)(e)
                }
            }, function(e, t) {
                return {
                    onMountOrDidUpdate: function(n, r) {
                        if (n.sessionIsAuthenticated && function(e) {
                                return !e.data.loading
                            }(n) && function(e, t) {
                                return !t || (!e.hasFetchedComments || t.videoFilter !== e.videoFilter || t.commentFilter !== e.commentFilter || t.data.loading && !e.data.loading)
                            }(n, r))
                            if (function(e) {
                                    return "" !== e.videoFilter
                                }(n)) {
                                var o = {
                                        bitsConfig: n.bitsConfig,
                                        videoId: n.videoFilter || ""
                                    },
                                    i = new URLSearchParams(t.location.search).get("cursor");
                                null !== i && (o.cursor = i), e(Object(d.B)(d.x, o))
                            } else o = {
                                bitsConfig: n.bitsConfig,
                                userId: n.data.user.id
                            }, e(Object(d.B)(d.x, o))
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
                    onLoadMoreRepliesClick: function(n, r, o) {
                        e(Object(d.B)(d.y, Object(d.n)(n, r, o, t.bitsConfig)))
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
                var o = r.__assign({}, n, e, {
                    onMountOrDidUpdate: t.onMountOrDidUpdate,
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
                n.clearSearchParams && (o.onClearFiltersClick = n.clearSearchParams), n.setVideoParam && (o.onSearchClick = n.setVideoParam);
                var i = new URLSearchParams(n.location.search);
                return o.videoFilter = n.videoFilter || i.get("video") || "", o.commentFilter = n.commentFilter || i.get("comment") || "", o
            })(Object(a.a)(oe, {
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
                        o = Object(l.a)(n && !n.loading && !n.error && n.user && n.user.cheer && n.user.cheer.emotes || []);
                    return r.__assign({}, t, {
                        data: n,
                        bitsConfig: o
                    })
                }
            })(re)));
            n.d(t, "CommentModeratorPage", function() {
                return ie
            })
        },
        nxZp: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function() {
                return function(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
            }()
        },
        oK83: function(e, t, n) {
            "use strict";
            var r, o;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return o
                }),
                function(e) {
                    e[e.recent_raids = 0] = "recent_raids", e[e.chat_message = 1] = "chat_message", e[e.room_message = 2] = "room_message", e[e.extension_message = 3] = "extension_message", e[e.viewer_list = 4] = "viewer_list", e[e.viewer_list_mod_section = 5] = "viewer_list_mod_section", e[e.member_list = 6] = "member_list", e[e.test = 7] = "test"
                }(r || (r = {})),
                function(e) {
                    e[e.Viewer = 0] = "Viewer", e[e.Extension = 1] = "Extension"
                }(o || (o = {}))
        },
        oi4T: function(e, t, n) {
            "use strict";
            var r, o = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye");
            ! function(e) {
                e.Everyone = "everyone", e.ModsOnly = "mod", e.StreamChat = "twitch_chat", e.SubsOnly = "sub"
            }(r || (r = {}));
            var s = n("UJc8");
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
                            t = r.Everyone;
                            break;
                        case s.b.Moderator:
                            t = r.ModsOnly;
                            break;
                        case s.b.Subscriber:
                            t = r.SubsOnly;
                            break;
                        default:
                            t = r.StreamChat
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
                    i.o.track(a.SpadeEventType.ChatRoomJoined, c(e))
                },
                d = function(e) {
                    i.o.track(a.SpadeEventType.ChatRoomWatched, o.__assign({}, c(e), {
                        channel_id: e.channelID
                    }))
                }
        },
        oxdP: function(e, t, n) {},
        p52R: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
                }(r || (r = {}))
        },
        pU2t: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("XmgI"),
                i = n("ahza"),
                a = n("DpwM"),
                s = n("a1OF"),
                c = function(e, t, n) {
                    var r = e.body,
                        o = function(e) {
                            void 0 === e && (e = []);
                            return e.reduce(function(e, t) {
                                return e[t.begin] = {
                                    id: t._id,
                                    startIndex: t.begin
                                }, e
                            }, {})
                        }(e.emoticons),
                        i = Object(s.e)(r, o, e.bits_spent || 0, n, !1, t);
                    return {
                        id: "1",
                        isAction: e.is_action,
                        tokens: i,
                        userColor: e.user_color ? e.user_color : Object(s.b)(t)
                    }
                };
            var l = n("XeJ1");
            n.d(t, "b", function() {
                return d
            }), n.d(t, "g", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "d", function() {
                return f
            }), n.d(t, "e", function() {
                return h
            }), n.d(t, "a", function() {
                return v
            });
            var d = "comment";

            function u(e) {
                return Object(i.e)(e) ? {
                    message: e.message,
                    parent_id: e.parentId
                } : {
                    content_id: e.contentId,
                    content_offset_seconds: e.contentOffsetSeconds,
                    content_type: e.contentType,
                    message: e.message
                }
            }
            var m = function(e) {
                    return {
                        comments: [v.normalizeRecord(e, o.a)],
                        users: [l.a.normalizeRecord(e.commenter)]
                    }
                },
                p = function(e, t) {
                    var n = r.__assign({}, e, {
                        more_replies: t.moreReplies
                    });
                    return {
                        comments: [v.normalizeRecord(n, o.a)],
                        users: [l.a.normalizeRecord(e.commenter)]
                    }
                },
                f = function(e, t) {
                    var n = e.comments.map(function(e) {
                            return l.a.normalizeRecord(e.commenter)
                        }),
                        r = {
                            past: a.g,
                            future: a.g
                        };
                    return void 0 !== e._next && (r.future = e._next), void 0 !== e._prev && (r.past = e._prev), {
                        comments: e.comments.reduce(function(e, r) {
                            return r.replies && r.replies.map(function(e) {
                                n.push(l.a.normalizeRecord(e.commenter))
                            }), e.concat(v.normalizeRecords(r, t))
                        }, []),
                        cursor: r,
                        users: n
                    }
                },
                h = function(e) {
                    var t = e.comments.map(function(e) {
                        return l.a.normalizeRecord(e.commenter)
                    });
                    return {
                        comments: e.comments.map(function(e) {
                            return v.normalizeRecord(e, o.a)
                        }),
                        cursor: {
                            future: e._next || a.g
                        },
                        users: t
                    }
                };

            function g(e) {
                return e.reduce(function(e, t) {
                    return e[t._id] = t.version, e
                }, {})
            }
            var v = {
                    normalizeRecords: function(e, t) {
                        var n = [v.normalizeRecord(e, t)];
                        return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                            n.push(b.normalizeRecord(e, t))
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
                            message: c(e.message, e.commenter._id, t),
                            moreReplies: e.more_replies || !1,
                            parentId: void 0 !== e.parent_id ? e.parent_id : "",
                            state: e.state,
                            source: e.source,
                            userBadges: g(e.message.user_badges || [])
                        }
                    }
                },
                b = {
                    normalizeRecord: function(e, t) {
                        return {
                            channelId: e.channel_id,
                            commenter: e.commenter._id,
                            contentId: e.content_id,
                            contentOffset: Math.floor(e.content_offset_seconds),
                            contentType: e.content_type,
                            createdAt: new Date(e.created_at),
                            id: e._id,
                            message: c(e.message, e.commenter._id, t),
                            moreReplies: !1,
                            parentId: void 0 !== e.parent_id ? e.parent_id : "",
                            state: e.state,
                            source: e.source,
                            userBadges: g(e.message.user_badges || [])
                        }
                    }
                }
        },
        "pq/L": function(e, t, n) {
            var r = {
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
                    end: 497
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoComments($videoID: ID! $hasVideoID: Boolean!) {\nbadges {\n...badge\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\nisGlobalMod\n}\nblockedUsers {\nid\n}\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\nvideo(id: $videoID options: { includePrivate: true }) @include(if: $hasVideoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n...cheer\nself {\nisModerator\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(i(n("IKE4").definitions)), r.definitions = r.definitions.concat(i(n("F9eG").definitions)), e.exports = r
        },
        pwkZ: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("TSYQ"),
                i = n("q1tI"),
                a = n("QzU5"),
                s = n("4rCz"),
                c = n("uIkQ"),
                l = n("0Lz3"),
                d = n("GnwI"),
                u = n("Sfdh"),
                m = n("Ue10"),
                p = 15e3,
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.autoDismissErrorTimeoutId = 0, t.clearDismissTimeout = function() {
                            window.clearTimeout(t.autoDismissErrorTimeoutId)
                        }, t.onManualErrorDismissClickHandler = function() {
                            t.props.onErrorDismissed(!0)
                        }, t.setAutoDismissTimeout = function() {
                            t.autoDismissErrorTimeoutId = window.setTimeout(function() {
                                t.props.onErrorDismissed()
                            }, p)
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
                        return this.props.message === Object(u.a)().chatReplayFilterError && (e = i.createElement(m.W, {
                            type: m.Vb.Span
                        }, " ", i.createElement(m.W, {
                            type: m.Vb.Span,
                            decoration: m.Tb.Underline
                        }, i.createElement("a", {
                            onClick: this.props.onMessageClick
                        }, Object(s.d)("Click here to show all messages.", "CommentError"))))), i.createElement(m.Eb, {
                            alignItems: m.f.Center,
                            background: m.r.Base,
                            className: "anim-swoop",
                            color: m.O.Error,
                            "data-test-selector": "vod-chat-error",
                            display: m.X.Flex,
                            flexWrap: m.Ba.NoWrap,
                            fullWidth: !0,
                            padding: {
                                y: 1,
                                x: 2
                            },
                            position: m.jb.Absolute,
                            zIndex: m.ic.Above
                        }, i.createElement(m.W, {
                            type: m.Vb.Span
                        }, this.props.message, e), i.createElement(m.Xa, {
                            alignSelf: m.g.Start
                        }, i.createElement(m.A, {
                            ariaLabel: Object(s.d)("Close", "CommentErrorComponent"),
                            icon: m.tb.Close,
                            onClick: this.onManualErrorDismissClickHandler
                        })))
                    }, t
                }(i.Component),
                h = n("/7QA"),
                g = n("hyVY"),
                v = n("0FG4"),
                b = n("okS7"),
                C = n("tFCv"),
                k = n("mmRu"),
                y = n("cpJf"),
                S = n("OpME"),
                _ = n("/MKj"),
                E = n("ZuiC"),
                O = n("fI4C"),
                w = (n("UZgS"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.buildModerationDashboardURL = function() {
                            return "/" + t.props.videoOwnerLogin + "/dashboard/moderation"
                        }, t.buildModerationPrefsURL = function() {
                            return "/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation"
                        }, t.onReplayModeChange = function(e) {
                            t.props.onReplayModeChange(e.currentTarget.checked)
                        }, t.onTimestampModeChange = function(e) {
                            t.props.onTimestampModeChange(e.currentTarget.checked)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        this.props.isUpload || (e = i.createElement(m.Xa, {
                            display: m.X.Flex,
                            flexWrap: m.Ba.NoWrap,
                            justifyContent: m.Wa.Between,
                            key: "viewerReplayOption",
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(m.Xa, null, Object(h.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), i.createElement(m.Xa, {
                            flexShrink: 0
                        }, i.createElement(m.Xb, {
                            checked: this.props.isReplayFilterOn,
                            "data-test-selector": "reply-mode",
                            onChange: this.onReplayModeChange
                        }))));
                        var t = [i.createElement(m.W, {
                            key: "moderationHeader",
                            bold: !0
                        }, Object(h.d)("Mod Tools", "VideoChatSettings"))];
                        return this.props.canSessionEditModerationSettings && t.push(i.createElement(m.Pa, {
                            key: "moderationPrefs",
                            display: m.X.InlineBlock
                        }, i.createElement(m.U, {
                            to: this.buildModerationPrefsURL(),
                            "data-test-selector": "video_chat_settings_mod_prefs"
                        }, Object(h.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(i.createElement(m.Pa, {
                            key: "moderationDashboard",
                            display: m.X.InlineBlock
                        }, i.createElement(m.U, {
                            to: this.buildModerationDashboardURL(),
                            "data-test-selector": "video_chat_settings_mod_dashboard"
                        }, Object(h.d)("Moderate messages", "VideoChatSettings")))), i.createElement(m.Xa, {
                            className: "video-chat__settings",
                            padding: {
                                x: 2,
                                y: 2
                            }
                        }, i.createElement(m.W, {
                            bold: !0
                        }, Object(h.d)("Viewer Settings", "VideoChatSettings")), e, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            justifyContent: m.Wa.Between,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(m.Xa, null, Object(h.d)("Hide timestamps", "VideoChatSettings")), i.createElement(m.Xa, {
                            flexShrink: 0
                        }, i.createElement(m.Xb, {
                            "data-test-selector": "timestamp-mode",
                            checked: this.props.hideTimestamps,
                            onChange: this.onTimestampModeChange
                        }))), t.length > 1 ? t : null)
                    }, t
                }(i.Component)),
                D = Object(d.b)("ChatSettings")(w);
            var T, M = Object(_.connect)(function(e) {
                    return {
                        isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                        hideTimestamps: e.vodChat.comments.hideTimestamps
                    }
                }, function(e) {
                    return {
                        onReplayModeChange: function(t) {
                            Object(O.m)({
                                setting: O.c,
                                value: t ? O.b : O.a
                            }), e(Object(E.C)(t))
                        },
                        onTimestampModeChange: function(t) {
                            Object(O.m)({
                                setting: O.d,
                                value: t ? O.b : O.a
                            }), e(Object(E.F)(t))
                        }
                    }
                })(D),
                N = n("Tqc9");
            ! function(e) {
                e.CurrentTime = "current-time"
            }(T || (T = {}));
            var R = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case N.b:
                                e.preventDefault(), n.createComment();
                                break;
                            case N.d:
                                n.maybeUnpauseScrolling();
                                break;
                            case N.a:
                                n.setState({
                                    isMentionPaused: !n.state.isMentionPaused && n.props.isScrollingSynced || n.state.isMentionPaused
                                }), n.props.onScrollPause()
                        }
                    }, n.createComment = function() {
                        if ("" !== n.state.newMessageText) {
                            if (n.props.isPostCooldownActive) return n.setState({
                                showCoolDownState: !0
                            }), void n.props.onError(Object(u.a)().messageCreatedTooQuickError);
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
                        var e = Object(v.b)(n.props.currentUser.emoteSets);
                        return Object.keys(e).map(function(t) {
                            return {
                                id: t,
                                emotes: Object(S.b)([e[t]])
                            }
                        })
                    };
                    var r = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        o = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || r);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: o,
                        canSessionEditModerationSettings: r,
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
                    (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = i.createElement(C.b, null, i.createElement(M, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    })));
                    var t = null;
                    return this.props.currentUser && (t = i.createElement(b.d, {
                        emotes: this.getSessionSpecificEmotes()
                    })), i.createElement("div", null, i.createElement(m.Xa, {
                        position: m.jb.Relative
                    }, i.createElement(b.b, {
                        componentType: b.a.TextArea,
                        suggestionSource: b.c.Chat,
                        onValueUpdate: this.onChange,
                        onKeyDown: this.onKeyDown,
                        componentRefDelegate: this.setTextareaRef,
                        refDelegate: this.setAutocompleteInputRef,
                        paddingRight: 30,
                        placeholder: Object(h.d)("Post a message", "VideoChatInput"),
                        noResize: !0,
                        "data-a-target": "video-chat-input",
                        disabled: this.state.showCoolDownState
                    }, t), i.createElement(k.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        emotePickerSource: y.a.VodChat,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: m.jb.Absolute
                    })), i.createElement(m.Xa, {
                        margin: {
                            top: 1
                        },
                        justifyContent: m.Wa.Between,
                        display: m.X.Flex
                    }, e, i.createElement("span", null), " ", i.createElement(m.z, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, i.createElement(m.Xa, {
                        display: m.X.Flex
                    }, i.createElement("span", null, Object(h.d)("Post at ", "CommentInput")), i.createElement(m.Xa, {
                        margin: {
                            x: .5
                        },
                        display: m.X.Flex
                    }, i.createElement(m.sb, {
                        asset: m.tb.GlyphLength
                    })), i.createElement("span", {
                        "data-test-selector": T.CurrentTime
                    }, Object(g.b)(this.props.currentVideoTime))))))
                }, t
            }(i.Component);
            var I, j = Object(d.b)("MessageInput", {
                    autoReportInteractive: !0
                })(R),
                x = function(e) {
                    var t = e.offset,
                        n = e.onClick;
                    return i.createElement(m.Xa, {
                        margin: {
                            right: .5
                        }
                    }, i.createElement(m.Yb, {
                        align: m.Zb.Left,
                        direction: m.ac.Top,
                        label: Object(h.d)("Jump to video", "TimeStamp")
                    }, i.createElement(m.Ua, {
                        onClick: n,
                        blurAfterClick: !0
                    }, i.createElement(m.Xa, {
                        padding: {
                            x: .5
                        }
                    }, i.createElement(m.W, {
                        fontSize: m.Ca.Size7
                    }, Object(g.b)(t))))))
                },
                F = n("ZEQw"),
                U = n("ZVTe"),
                A = n("Zkco"),
                L = n("u5aL"),
                V = n("Jxh/"),
                H = n("GCGb"),
                B = n("fCiU"),
                X = n("cr+I"),
                P = function(e, t) {
                    var n = new URL("https://www.twitch.tv/videos/" + e);
                    if (t) {
                        var r = X.stringify(t);
                        n.search = r
                    }
                    return n
                },
                W = n("Addw"),
                z = "ban-user",
                q = "delete-comment-button",
                G = "reply-button",
                Q = "relative-time-title",
                K = "share-button",
                Z = "share-button-clicked",
                $ = 3e3,
                Y = function(e) {
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
                            if ("function" == typeof t.state.confirmationAction) return i.createElement(m.Xa, {
                                padding: {
                                    y: 1
                                }
                            }, i.createElement(m.Eb, {
                                display: m.X.Flex,
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: .5
                                }
                            }, i.createElement(m.W, {
                                type: m.Vb.Span
                            }, Object(h.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction"))), i.createElement(m.Xa, {
                                display: m.X.Flex,
                                justifyContent: m.Wa.Center,
                                alignItems: m.f.Center
                            }, i.createElement(m.Xa, {
                                display: m.X.Inline,
                                padding: {
                                    right: 1
                                }
                            }, i.createElement(m.z, {
                                type: m.F.Alert,
                                onClick: t.onContinueClickHandler,
                                "data-test-selector": H.a
                            }, Object(h.d)("Yes", "MessageOptionsMenu"))), i.createElement(m.z, {
                                type: m.F.Hollow,
                                onClick: t.onCancelClickHandler,
                                "data-test-selector": H.c
                            }, Object(h.d)("No", "MessageOptionsMenu"))));
                            var e = [];
                            t.props.isExpandedLayout || e.push(i.createElement(m.Eb, {
                                key: t.props.context.comment.id,
                                color: m.O.Alt2,
                                display: m.X.Flex,
                                "data-test-selector": Q
                            }, i.createElement(m.Eb, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    bottom: .5
                                },
                                fullWidth: !0,
                                borderBottom: !0
                            }, i.createElement(m.W, {
                                type: m.Vb.Span
                            }, Object(h.d)("Posted ", "MessageOptionsMenu"), Object(h.i)(t.props.context.comment.createdAt)))), i.createElement(m.Eb, {
                                key: t.props.context.comment.id + "2",
                                display: m.X.Flex,
                                color: m.O.Link
                            }, i.createElement(m.Ua, {
                                onClick: t.onReplyClickHandler,
                                "data-test-selector": G
                            }, i.createElement(m.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, Object(h.d)("Reply to {userName}", {
                                userName: Object(B.b)(t.props.context.author)
                            }, "MessageOptionsMenu")))));
                            var n = [];
                            t.props.isCurrentUserModerator && n.push(i.createElement(m.Xa, {
                                key: t.props.context.comment.id,
                                display: m.X.Flex
                            }, i.createElement(m.Ua, {
                                type: m.Va.Alert,
                                onClick: t.onDeleteButtonClickHandler,
                                "data-test-selector": q
                            }, i.createElement(m.Eb, {
                                margin: {
                                    x: 1
                                },
                                padding: {
                                    y: .5
                                },
                                borderBottom: !0
                            }, Object(h.d)("Delete", "MessageOptionsMenu")))), i.createElement(m.Xa, {
                                key: t.props.context.comment.id + "2",
                                display: m.X.Flex
                            }, i.createElement(m.Ua, {
                                type: m.Va.Alert,
                                onClick: t.onBanUserClickHandler,
                                "data-test-selector": z
                            }, i.createElement(m.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, Object(h.d)("Ban User", "MessageOptionsMenu")))));
                            var r = i.createElement(m.Ua, {
                                onClick: t.onShareClick,
                                "data-test-selector": K
                            }, i.createElement(m.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, Object(h.d)("Copy Link", "MessageOptionsMenu")));
                            t.state.isLinkCopied && (r = i.createElement(m.z, {
                                fullWidth: !0,
                                icon: m.tb.Check,
                                type: m.F.Success,
                                "data-test-selector": Z
                            }, i.createElement(m.Xa, {
                                display: m.X.Flex,
                                alignItems: m.f.Center,
                                justifyContent: m.Wa.Start
                            }, Object(h.d)("Copied to clipboard", "MessageOptionsMenu"))));
                            var o = i.createElement(m.Eb, {
                                display: m.X.Flex,
                                fullWidth: !0,
                                key: t.props.context.comment.id + "-share",
                                color: m.O.Link
                            }, r);
                            return i.createElement(m.Xa, {
                                padding: {
                                    y: 1
                                }
                            }, e, o, n)
                        }, t.closeMenu = function() {
                            t.setState({
                                isMenuOpen: !1,
                                confirmationAction: null,
                                isLinkCopied: !1
                            }), t.props.onClose()
                        }, t.onShareClick = function() {
                            var e = t.props.context.comment,
                                n = e.contentId,
                                r = P(n, {
                                    tt_medium: "video_chat",
                                    tt_content: "message_share_link",
                                    t: Object(W.a)(e.contentOffset),
                                    comment: e.id
                                });
                            return Object(V.a)(r.toString()), t.setState({
                                isLinkCopied: !0
                            }, function() {
                                return t.dismissTimeoutID = setTimeout(function() {
                                    t.setState({
                                        isLinkCopied: !1
                                    })
                                }, $)
                            }), Object(O.l)(e, r)
                        }, t.onReplyClickHandler = function() {
                            t.props.onReplyClick(Object(B.b)(t.props.context.author)), t.closeMenu()
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
                        return i.createElement(m.Xa, {
                            position: m.jb.Relative
                        }, i.createElement(L.a, {
                            onClickOut: this.closeMenu
                        }, i.createElement(m.A, {
                            ariaLabel: Object(h.d)("Message Actions Menu", "VideoCommentsMenu"),
                            size: m.B.Small,
                            type: m.C.Secondary,
                            "data-test-selector": "menu-button",
                            icon: m.tb.More,
                            onClick: this.onToggleMenu
                        }), i.createElement(m.u, {
                            direction: m.v.BottomRight,
                            show: this.state.isMenuOpen,
                            size: m.w.Small,
                            offsetX: "0.5rem"
                        }, this.getContent())))
                    }, t
                }(i.Component),
                J = (n("Nimz"), function(e) {
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
                        var e, t = this.props,
                            n = t.context,
                            r = t.badgeSets,
                            a = t.currentUser,
                            s = !!a && n.comment.commenter === a.id,
                            l = void 0 !== n.comment.userBadges[F.a],
                            d = o("video-chat__message-menu", {
                                "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                            }),
                            u = i.createElement(m.Xa, {
                                className: d,
                                "data-test-selector": "menu-options-wrapper",
                                flexShrink: 0
                            }, i.createElement(Y, {
                                context: n,
                                isCurrentUserModerator: this.props.isCurrentUserModerator,
                                isExpandedLayout: this.props.isExpandedLayout,
                                onBanUserClick: this.onBanUserClickHandler,
                                onClose: this.onMenuCloseHandler,
                                onDeleteCommentClick: this.onDeleteCommentClickHandler,
                                onOpen: this.onMenuOpenHandler,
                                onReplyClick: this.props.onReplyClick
                            })),
                            p = o("video-chat__message-author", ((e = {})["video-chat__message-author--me"] = s, e["video-chat__message-author--creator"] = l, e)),
                            f = s || l ? "" : n.comment.message.userColor,
                            h = i.createElement(m.Pa, {
                                padding: {
                                    right: .5
                                }
                            }, i.createElement("span", null, ":"));
                        return n.comment.message.isAction && (h = i.createElement(m.Pa, {
                            padding: {
                                right: .5
                            }
                        }, i.createElement("span", null))), i.createElement(m.Xa, {
                            alignItems: m.f.Start,
                            display: m.X.Flex,
                            flexWrap: m.Ba.NoWrap
                        }, i.createElement(m.Xa, {
                            flexGrow: 1
                        }, i.createElement(c.b, {
                            badgesToRender: n.comment.userBadges,
                            badgeSets: r
                        }), i.createElement("a", {
                            className: p,
                            "data-test-selector": "comment-author-selector",
                            "data-tt_content": "tab_videos",
                            "data-tt_medium": "video-message-author",
                            href: "/" + n.author.name,
                            rel: "noopener noreferrer",
                            target: "_blank"
                        }, i.createElement(U.a, {
                            userData: Object(B.a)(n.author, f),
                            highlighted: s || l
                        })), i.createElement(m.Xa, {
                            display: m.X.Inline,
                            className: "video-chat__message",
                            "data-test-selector": "comment-message-selector"
                        }, h, i.createElement(A.a, {
                            message: n.comment.message,
                            allowActionTextColors: !0
                        }))), u)
                    }, t
                }(i.Component)),
                ee = n("GEnX"),
                te = n("4OCo"),
                ne = function(e) {
                    return i.createElement(m.Xa, {
                        padding: {
                            y: .5,
                            left: 1
                        }
                    }, i.createElement(m.Xa, {
                        className: "vod-message__content"
                    }, i.createElement(J, {
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
                re = "vod-message-reply",
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.makeReplyButtonAndRelativeTime = function(e) {
                            return i.createElement(m.Xa, {
                                display: m.X.Flex,
                                alignItems: m.f.Center
                            }, i.createElement(ee.a, {
                                context: re,
                                onReplyClick: t.props.onReplyClick,
                                replyCommentContext: e
                            }), i.createElement(m.Pa, {
                                margin: {
                                    left: .5
                                }
                            }, i.createElement(m.W, {
                                color: m.O.Alt2,
                                fontSize: m.Ca.Size7,
                                type: m.Vb.Span
                            }, " • " + Object(h.i)(e.comment.createdAt))))
                        }, t.makeReply = function(e) {
                            var n = null;
                            return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), i.createElement("li", {
                                key: e.comment.id
                            }, i.createElement(ne, {
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
                        return i.createElement("ul", null, e)
                    }, t
                }(i.Component),
                ie = n("82xK"),
                ae = (n("lRNp"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = i.createElement(m.Xa, {
                            display: m.X.InlineBlock,
                            className: "vod-message__show-more-replies"
                        }, i.createElement(ie.a, {
                            onClick: this.props.onLoadMoreRepliesClick
                        })));
                        var t = null;
                        this.props.showReplyForm && (t = i.createElement(m.Xa, {
                            margin: {
                                top: .5,
                                bottom: 1,
                                x: 1
                            }
                        }, i.createElement(te.a, {
                            isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                            onError: this.props.onError,
                            onReplyFormClose: this.props.onReplyFormClose,
                            onReplySubmit: this.props.onReplySubmit,
                            replyToUserDisplayName: this.props.replyToUserDisplayName,
                            videoOwnerID: this.props.parentMessage.comment.channelId
                        })));
                        var n = null;
                        return this.props.isExpandedLayout && (n = i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            display: m.X.Flex
                        }, i.createElement(ee.a, {
                            context: "vod-message",
                            onReplyClick: this.props.onReplyClick,
                            replyCommentContext: this.props.parentMessage
                        }), i.createElement(m.Pa, {
                            margin: {
                                left: .5
                            }
                        }, i.createElement(m.W, {
                            color: m.O.Alt2,
                            fontSize: m.Ca.Size7,
                            type: m.Vb.Span
                        }, " • " + Object(h.i)(this.props.parentMessage.comment.createdAt))))), i.createElement(m.Xa, null, n, i.createElement(m.Xa, {
                            margin: {
                                y: .5,
                                left: .5
                            },
                            className: o("vod-message__reply", "qa-vod-chat-reply")
                        }, e, i.createElement(oe, {
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
                }(i.Component)),
                se = (n("ya7N"), function(e) {
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
                        var e, t = null;
                        (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (t = i.createElement(ae, {
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
                        var n = null;
                        this.props.hideTimestamp || (n = i.createElement(m.Xa, {
                            className: "vod-message__header",
                            "data-test-selector": "message-timestamp",
                            display: m.X.Flex,
                            flexShrink: 0,
                            textAlign: m.Rb.Right
                        }, i.createElement(x, {
                            offset: this.props.timeStampOffset,
                            onClick: this.onTimestampClickHandler
                        })));
                        var r = o("vod-message", ((e = {})["vod-message--focused"] = this.shouldFocusMessage(), e)),
                            a = this.props.messageContext.comment.highlight || !1;
                        return i.createElement(m.i, {
                            duration: m.k.Medium,
                            enabled: a,
                            type: m.n.FadeIn
                        }, i.createElement(m.Xa, {
                            alignItems: m.f.Start,
                            className: r,
                            "data-test-selector": "message-layout",
                            display: m.X.Flex,
                            flexWrap: m.Ba.NoWrap,
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                left: this.props.hideTimestamp ? 2 : .5
                            },
                            refDelegate: this.refHandler
                        }, n, i.createElement(m.Xa, {
                            fullWidth: !0
                        }, i.createElement(J, {
                            badgeSets: this.props.badgeSets,
                            context: this.props.messageContext,
                            currentUser: this.props.currentUser,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.props.onBanUserClick,
                            onDeleteCommentClick: this.props.onDeleteCommentClick,
                            onDisableSync: this.props.onDisableSync,
                            onReplyClick: this.onReplyClickHandler
                        }), t)))
                    }, t.prototype.shouldComponentUpdate = function(e, t) {
                        return e.focus !== this.props.focus || e.isReplayFilterOn !== this.props.isReplayFilterOn || e.hideTimestamp !== this.props.hideTimestamp || t.showReplyForm !== this.state.showReplyForm || e.messageContext.replies.length !== this.props.messageContext.replies.length || t.replyToUserDisplayName !== this.state.replyToUserDisplayName
                    }, t.prototype.shouldFocusMessage = function() {
                        return this.props.focus
                    }, t
                }(i.Component)),
                ce = (n("52dQ"), function(e) {
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
                        var e, t = o("video-chat__message-list-wrapper", ((e = {})["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, e)),
                            n = null;
                        return !1 === this.props.isScrollingSynced && (n = i.createElement(m.Pa, {
                            className: "video-chat__sync-button",
                            padding: {
                                x: 1
                            },
                            position: m.jb.Absolute,
                            attachBottom: !0
                        }, i.createElement("button", {
                            onClick: this.syncButtonClick
                        }, Object(s.d)("Resume auto scroll", "MessageScrollArea")))), i.createElement(m.Eb, {
                            fullHeight: !0,
                            overflow: m.cb.Hidden,
                            position: m.jb.Relative
                        }, i.createElement("div", {
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
                }(i.Component)),
                le = n("DpwM"),
                de = n("l41m"),
                ue = n("ehEd"),
                me = function(e, t) {
                    return !!e && (t >= e.offset && e.offset + e.duration >= t)
                };
            n("n+IG");
            n.d(t, "a", function() {
                    return he
                }),
                function(e) {
                    e.MessageInputPlaceholder = "message-input-placeholder", e.ChatContentPlaceholder = "message-content-placeholder", e.VideoChatError = "video-chat-error", e.NoCommentCTA = "no-comments-cta"
                }(I || (I = {}));
            var pe = 5e3;
            var fe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            commentAlreadyFocused: !1
                        }, t.badgeSets = new c.c([], [], ""), t.createComment = function(e) {
                            if (t.props.videoID) {
                                var n = {
                                    contentId: t.props.videoID,
                                    contentOffsetSeconds: t.props.currentVideoTime,
                                    contentType: le.e,
                                    message: e
                                };
                                t.onCreate(n)
                            }
                        }, t.createReply = function(e, n) {
                            var r = {
                                message: e,
                                parentId: n
                            };
                            t.onCreate(r)
                        }, t.onErrorDismissedHandler = function(e) {
                            t.props.onError("");
                            var n = t.props.errorMessage === Object(u.a)().chatReplayFilterError;
                            e && t.props.shouldSendReplayFilterError && n && t.props.onErrorDismissClick()
                        }, t.onErrorMessageClickHandler = function() {
                            t.props.onError(""), t.props.onTurnOffReplayFilter()
                        }, t.onMessageScrollAreaMount = function() {
                            t.props.highlightedMessageID && "" !== t.props.highlightedMessageID && t.props.onDisableSync()
                        }, t.onError = function(e) {
                            t.props.onError(e)
                        }, t.onLoadMoreRepliesHandler = function(e, n) {
                            var r = t.props.data.video,
                                o = r && r.owner.cheer && r.owner.cheer.emotes || [];
                            t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(l.a)(o))
                        }, t.focusedCommentCallback = function(e) {
                            t.setState({
                                commentToFocus: e
                            })
                        }, t.startUnfocusTimeout = function() {
                            t.focusTimer = setTimeout(function() {
                                t.setState({
                                    commentAlreadyFocused: !0
                                })
                            }, pe)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.props.onWillMount()
                    }, t.prototype.componentDidMount = function() {
                        this.props.startInReplayMode && this.props.onDidMount(this.props.startInReplayMode)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                                commentAlreadyFocused: !1
                            })),
                            function(e, t) {
                                if (!t.data.loading && !t.data.error) {
                                    var n = t.data.video !== e.data.video,
                                        r = t.data.badges !== e.data.badges;
                                    return n || r
                                }
                                return !1
                            }(this.props, e) && (this.badgeSets = new c.c([], [], ""), !e.data.loading && !e.data.error && e.data.video && e.data.video.owner && (this.badgeSets = new c.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login))), this.props.onUpdateBegan(e, this.props)
                    }, t.prototype.componentDidUpdate = function() {
                        (this.props.data.loading || this.props.data.error || !this.props.hasFetchedComments || this.props.latencyTracking.reportInteractive(), this.props.data.loading || this.props.data.error || !this.props.disableChatForVideo || this.props.latencyTracking.reportInteractive(), this.state.commentToFocus) && ((this.state.commentToFocus.nextElementSibling || this.state.commentToFocus).scrollIntoView(!0), this.setState({
                            commentToFocus: void 0
                        }), this.startUnfocusTimeout())
                    }, t.prototype.componentWillUnmount = function() {
                        clearTimeout(this.focusTimer), this.props.latencyTracking.reportInteractive(), this.props.onUnmount()
                    }, t.prototype.render = function() {
                        var e, t = this,
                            n = this.props,
                            r = n.comments,
                            c = n.highlightedMessageID,
                            l = n.data,
                            d = l.video;
                        if (this.props.disableChatForVideo) e = i.createElement("div", {
                            "data-test-selector": I.ChatContentPlaceholder
                        });
                        else if (!d || l.loading) e = i.createElement(m.Za, {
                            fillContent: !0
                        });
                        else if (l.error) e = i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            "data-test-selector": I.VideoChatError,
                            fullHeight: !0,
                            justifyContent: m.Wa.Center
                        }, i.createElement(m.W, {
                            italic: !0
                        }, Object(s.d)("Video Chat is currently unavailable.", "VideoChat")));
                        else {
                            var u = void 0;
                            if (this.props.hasFetchedComments && this.props.offsetRange === de.a) u = i.createElement(m.Pa, {
                                display: m.X.Flex,
                                margin: {
                                    x: 1,
                                    top: 2,
                                    bottom: 1
                                },
                                alignItems: m.f.Center
                            }, i.createElement("li", {
                                "data-test-selector": I.NoCommentCTA
                            }, i.createElement(m.Pa, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement("img", {
                                src: Object(ue.b)(65),
                                srcSet: Object(ue.c)(65)
                            })), Object(s.d)("Join the chat while watching the video!", "VideoChatComponent")));
                            else {
                                u = (this.props.messageWindow ? r.filter(function(e) {
                                    return me(t.props.messageWindow, e.comment.contentOffset)
                                }) : r).map(function(e, n) {
                                    var r = !t.state.commentAlreadyFocused && e.comment.id === c,
                                        o = n + 1 === t.props.comments.length,
                                        s = !t.props.isScrollingSynced && o,
                                        u = e.comment.contentOffset;
                                    return t.props.messageWindow && me(t.props.messageWindow, e.comment.contentOffset) && (u = e.comment.contentOffset - t.props.messageWindow.offset), i.createElement(m.Pa, {
                                        padding: s ? {
                                            bottom: 4
                                        } : {},
                                        key: e.comment.id,
                                        fullWidth: !0
                                    }, i.createElement("li", null, i.createElement(se, {
                                        badgeSets: t.badgeSets,
                                        currentUser: l.currentUser,
                                        focus: r,
                                        isCreationCoolDownActive: t.props.isCreationCoolDownActive,
                                        isCurrentUserModerator: t.props.isCurrentUserModerator,
                                        isExpandedLayout: d.broadcastType === a.a.Upload,
                                        isReplayFilterOn: t.props.isReplayFilterOn,
                                        messageContext: e,
                                        onBanUserClick: t.props.onBanUser,
                                        onCreateReply: t.createReply,
                                        onDeleteCommentClick: t.props.onDeleteComment,
                                        onDisableSync: t.props.onDisableSync,
                                        onError: t.onError,
                                        onFocus: t.focusedCommentCallback,
                                        onLoadMoreRepliesClick: t.onLoadMoreRepliesHandler,
                                        onTimeStampClick: t.props.onPlayerSeekRequest,
                                        hideTimestamp: t.props.hideTimestamps,
                                        timeStampOffset: u
                                    })))
                                })
                            }
                            e = i.createElement("ul", {
                                style: {
                                    minHeight: 0
                                }
                            }, u)
                        }
                        var p, h = void 0 === this.props.highlightedMessageID,
                            g = null;
                        if ("" !== this.props.errorMessage && (g = i.createElement(f, {
                                message: this.props.errorMessage,
                                onErrorDismissed: this.onErrorDismissedHandler,
                                onMessageClick: this.onErrorMessageClickHandler
                            })), !d || !d.owner || l.loading || l.error || this.props.disableChatForVideo) p = i.createElement(m.ib, {
                            "data-test-selector": I.MessageInputPlaceholder,
                            height: 90,
                            width: 340
                        });
                        else {
                            var v = this.props.currentVideoTime;
                            this.props.messageWindow && me(this.props.messageWindow, this.props.currentVideoTime) && (v = this.props.currentVideoTime - this.props.messageWindow.offset), p = i.createElement(j, {
                                currentUser: l.currentUser,
                                currentVideoTime: v,
                                onError: this.onError,
                                isModerator: !!d.owner.self && d.owner.self.isModerator,
                                isReplayMode: this.props.isReplayFilterOn,
                                isScrollingSynced: this.props.isScrollingSynced,
                                isPostCooldownActive: this.props.isCreationCoolDownActive,
                                isUpload: d.broadcastType === a.a.Upload,
                                onCreateComment: this.createComment,
                                onScrollPause: this.props.onDisableSync,
                                onScrollResume: this.props.onEnableSync,
                                videoOwnerID: d.owner.id,
                                videoOwnerLogin: d.owner.login
                            })
                        }
                        return i.createElement(m.Eb, {
                            className: o("video-chat", "qa-vod-chat"),
                            display: m.X.Flex,
                            background: m.r.Alt2,
                            borderLeft: !0,
                            color: m.O.Alt,
                            flexDirection: m.Aa.Column,
                            flexShrink: 0,
                            flexWrap: m.Ba.NoWrap,
                            fullHeight: !0,
                            fullWidth: !0,
                            position: m.jb.Relative
                        }, i.createElement(m.Xa, {
                            alignItems: m.f.Center,
                            className: "video-chat__header",
                            display: m.X.Flex,
                            flexShrink: 0,
                            justifyContent: m.Wa.Center
                        }, i.createElement(m.W, {
                            type: m.Vb.Span
                        }, Object(s.d)("Chat on Videos", "VideoChatPresentation"))), g, i.createElement(ce, {
                            startSynced: h,
                            isScrollingSynced: this.props.isScrollingSynced,
                            onScrollOffBottom: this.props.onDisableSync,
                            onScrollBottom: this.props.onEnableSync,
                            onMount: this.onMessageScrollAreaMount,
                            onSyncScrollClick: this.props.onEnableSync
                        }, i.createElement(m.Xa, {
                            display: m.X.Flex,
                            flexDirection: m.Aa.Column,
                            fullHeight: !0,
                            justifyContent: m.Wa.End
                        }, i.createElement(m.Pa, {
                            display: m.X.Flex,
                            flexWrap: m.Ba.Wrap,
                            alignItems: m.f.End,
                            fullWidth: !0
                        }, e))), i.createElement(m.Xa, {
                            className: "video-chat__input",
                            padding: {
                                top: 1,
                                bottom: 2,
                                x: 2
                            },
                            flexShrink: 0,
                            fullWidth: !0
                        }, p))
                    }, t.prototype.onCreate = function(e) {
                        this.props.isLoggedIn ? this.props.onCreate(e) : this.props.onShowLogin()
                    }, t
                }(i.Component),
                he = Object(d.b)("VideoChat")(fe)
        },
        r2Xj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = {
                DarkMode: "darkMode",
                FollowerDuration: "followerDuration",
                FollowerMode: "followerMode",
                HideChat: "hideChat",
                ShowMessageFlags: "showMessageFlags",
                ShowAutoModActions: "showAutoModActions",
                ShowModActions: "showModerationActions",
                ShowModIcons: "showModIcons",
                ShowTimestamps: "showTimestamps",
                UseHighContrastColors: "useHighContrastColors",
                SlowMode: "slowMode"
            }
        },
        sPFP: function(e, t, n) {},
        sbEw: function(e, t, n) {},
        "sf7/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "d", function() {
                return a
            });
            var r = "vodChat.video.CURRENT_VIDEO_CHANGED",
                o = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
                i = function(e) {
                    return {
                        type: r,
                        id: e
                    }
                },
                a = function(e) {
                    return {
                        type: o,
                        updatedTime: e
                    }
                }
        },
        tFCv: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                a = n("9C/b"),
                s = n("fvjX"),
                c = n("ZS2+"),
                l = n("/0dD"),
                d = n("SDEh"),
                u = n("edgk"),
                m = n("1/iK"),
                p = n("y5D0"),
                f = n("jZLd"),
                h = n("kRBY"),
                g = n("XDQu"),
                v = n("+pBb"),
                b = n("tY8L"),
                C = n("r2Xj"),
                k = n("WytW"),
                y = n("F6GT"),
                S = n("x0gr"),
                _ = c.a.wrap(function() {
                    return n.e(198).then(n.bind(null, "8MX0"))
                }, "ChatSettingsComponent"),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            editAppearance: !1,
                            shouldMountChild: !1
                        }, t.handleSettingsToggle = function(e) {
                            t.setState({
                                shouldMountChild: !0
                            }), t.props.onToggle && t.props.onToggle(e), t.state.editAppearance && t.setState({
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
                            t.props.onThemeChanged(e, !t.props.isPopout), Object(S.a)({
                                channelLogin: t.props.channelLogin,
                                isHostMode: t.props.isHostMode,
                                newValue: !t.props.darkModeEnabled,
                                settingName: C.a.DarkMode
                            })
                        }, t.onTimestampToggle = function() {
                            Object(y.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(S.a)({
                                channelLogin: t.props.channelLogin,
                                isHostMode: t.props.isHostMode,
                                newValue: !t.props.showTimestamps,
                                settingName: C.a.ShowTimestamps
                            })
                        }, t.onHighContrastColorsToggle = function() {
                            Object(y.b)("useHighContrastColors", !t.props.useHighContrastColors), t.props.useHighContrastColors ? t.props.onUseHighContrastColorsDisable() : t.props.onUseHighContrastColorsEnable(), Object(S.a)({
                                channelLogin: t.props.channelLogin,
                                isHostMode: t.props.isHostMode,
                                newValue: !t.props.useHighContrastColors,
                                settingName: C.a.UseHighContrastColors
                            })
                        }, t.onChatHide = function() {
                            t.props.onChatHide(), Object(S.a)({
                                channelLogin: t.props.channelLogin,
                                isHostMode: t.props.isHostMode,
                                newValue: !0,
                                settingName: C.a.HideChat
                            })
                        }, t.onChatPopout = function() {
                            t.props.isPopout || t.props.onChatHide();
                            var e = window.open("/popout/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                            e && !Object(d.a)() && (e.focus(), Object(u.a)(e, function() {
                                t.props.onChatUnhide()
                            }))
                        }, t.onColorSelected = function(e) {
                            t.props.isLoggedIn ? t.props.onChatCommand(Object(k.a)(e)) : t.props.login()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(o.Fragment, null, o.createElement(_.Preload, null), o.createElement(R, {
                            onToggle: this.handleSettingsToggle
                        }, this.state.shouldMountChild && o.createElement(_, {
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
                            onShowChatRules: this.props.onShowChatRules,
                            onDarkModeToggle: this.onDarkModeToggle,
                            onTimestampToggle: this.onTimestampToggle,
                            onHighContrastColorsToggle: this.onHighContrastColorsToggle,
                            showTimestamps: this.props.showTimestamps,
                            useHighContrastColors: this.props.useHighContrastColors,
                            theatreModeEnabled: this.props.theatreModeEnabled,
                            onColorSelected: this.onColorSelected,
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID,
                            isLoggedIn: this.props.isLoggedIn,
                            onClickEditAppearance: this.onEdit,
                            onLeaveEditAppearance: this.onLeaveEdit,
                            onShowViewerCard: this.props.onShowViewerCard,
                            containerElement: this.props.containerElement,
                            "data-test-selector": "chat-settings-component"
                        })))
                    }, t
                }(o.Component);
            var O = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(h.f)(e),
                        darkModeEnabled: Object(g.a)(e) === l.a.Dark,
                        showTimestamps: e.chat.showTimestamps,
                        useHighContrastColors: e.chat.useHighContrastColors,
                        theatreModeEnabled: e.ui.theatreModeEnabled
                    }
                }, function(e) {
                    return Object(s.bindActionCreators)({
                        login: function() {
                            return Object(p.e)(m.a.Chat)
                        },
                        onChatHide: function() {
                            return v.L()
                        },
                        onChatUnhide: function() {
                            return v.O()
                        },
                        onThemeChanged: function(e) {
                            return Object(f.b)(e, void 0, !1)
                        },
                        onTimestampsDisable: function() {
                            return v.E()
                        },
                        onTimestampsEnable: function() {
                            return v.J()
                        },
                        onUseHighContrastColorsDisable: function() {
                            return v.F()
                        },
                        onUseHighContrastColorsEnable: function() {
                            return v.K()
                        },
                        onShowViewerCard: b.e
                    }, e)
                })(E),
                w = Object(a.a)(O),
                D = n("/7QA"),
                T = n("eJ65"),
                M = n("Ue10"),
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.setToggleBalloonRef = function(e) {
                            return t.toggleBalloonRef = e
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        this.props.onToggle && this.props.isChatRulesOpen && !e.isChatRulesOpen && this.toggleBalloonRef.toggleBalloon(!1)
                    }, t.prototype.render = function() {
                        return o.createElement(T.a, {
                            onToggle: this.props.onToggle,
                            ref: this.setToggleBalloonRef
                        }, o.createElement(M.A, {
                            icon: M.tb.Gear,
                            ariaLabel: Object(D.d)("Chat settings", "ChatInput"),
                            "data-a-target": "chat-settings",
                            disabled: !!this.props.disabled
                        }), o.createElement(M.u, {
                            direction: M.v.Top,
                            noTail: !0,
                            offsetY: "11px",
                            "data-a-target": "chat-settings-balloon"
                        }, this.props.children))
                    }, t
                }(o.Component);
            var R = Object(i.connect)(function(e) {
                return {
                    isChatRulesOpen: e.chat.isChatRulesOpen
                }
            })(N);
            n.d(t, "a", function() {
                return w
            }), n.d(t, "b", function() {
                return R
            })
        },
        tY8L: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "d", function() {
                return c
            });
            var r = n("oK83"),
                o = "viewer-card.VIEWER_CARD_HIDDEN",
                i = "viewer-card.VIEWER_CARD_SHOWN";

            function a() {
                return {
                    type: o
                }
            }

            function s(e, t, n, o) {
                return void 0 === o && (o = 0), {
                    type: i,
                    viewerCardOptions: {
                        viewerCardType: r.b.Viewer,
                        initialTopOffset: o,
                        sourceID: n,
                        sourceType: t,
                        targetID: e
                    }
                }
            }

            function c(e, t, n, o) {
                return void 0 === o && (o = 0), {
                    type: i,
                    viewerCardOptions: {
                        viewerCardType: r.b.Extension,
                        initialTopOffset: o,
                        sourceID: n,
                        targetID: e,
                        extensionVersion: t
                    }
                }
            }
        },
        uIkQ: function(e, t, n) {
            "use strict";
            var r = n("b5C3"),
                o = n("fQWD"),
                i = n("ZEQw"),
                a = (n("yzyL"), n("mrSG")),
                s = function() {
                    function e(e, t, n) {
                        this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                    }
                    return e.prototype.getBadge = function(e, t) {
                        var n = this.channelsBySet.get(e);
                        return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                    }, e.prototype.indexBadges = function(e, t, n) {
                        e.forEach(function(e) {
                            n && e.clickAction === i.c && (e = a.__assign({}, e, {
                                channelName: n
                            }));
                            var r = t.get(e.setID);
                            r || (r = new Map, t.set(e.setID, r)), r.set(e.version, e)
                        })
                    }, e
                }();
            new s([], [], "");
            n.d(t, "b", function() {
                return r.a
            }), n.d(t, "a", function() {
                return o.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
                return s
            })
        },
        vHGB: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("q1tI"),
                i = n("ZEQw"),
                a = n("Ue10"),
                s = (n("E78O"), n("/7QA")),
                c = n("2xye"),
                l = function(e) {
                    e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.p.tracking.track(c.SpadeEventType.ChatBadgeClick, e)
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.badge,
                        t = e.title,
                        n = e.image1x,
                        r = e.image2x,
                        i = e.image4x,
                        c = o.createElement("img", {
                            alt: t,
                            "aria-label": Object(s.d)("{badgeTitle} badge", {
                                badgeTitle: t
                            }, "Badge"),
                            className: "chat-badge",
                            src: n,
                            srcSet: n + " 1x, " + r + " 2x, " + i + " 4x",
                            onMouseOver: this.onMouseOver,
                            onMouseOut: this.onMouseOut
                        });
                    return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (c = o.createElement("a", {
                        href: this.targetURL,
                        onClick: this.onBadgeClickHandler,
                        target: "_blank",
                        "data-a-target": "chat-badge"
                    }, c)), this.state.isHovering ? o.createElement(a.Yb, {
                        align: a.Zb.Left,
                        "data-a-target": "chat-badge",
                        display: a.X.Inline,
                        key: n,
                        label: t,
                        offsetY: "0.9rem"
                    }, c) : c
                }, t.prototype.getTargetURL = function() {
                    var e = this.props.badge;
                    switch (e.clickAction) {
                        case i.e:
                            return e.clickURL;
                        case i.c:
                            return e.channelName ? this.getSubscriberLink() : "";
                        case i.d:
                            return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                        default:
                            return ""
                    }
                }, t.prototype.getSubscriberLink = function() {
                    return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
                }, t
            }(o.Component)
        },
        x0gr: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = n("2xye"),
                a = n("r2Xj"),
                s = n("oi4T"),
                c = function(e) {
                    o.o.track(i.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
                },
                l = function(e) {
                    var t = r.__assign({}, Object(s.a)(e), {
                        setting_name: e.settingName,
                        new_value: e.newValue.toString()
                    });
                    o.o.track(i.SpadeEventType.ChatSettingsChanged, t)
                },
                d = function(e) {
                    var t = r.__assign({}, Object(s.a)(e), {
                        setting_name: a.a.FollowerDuration,
                        new_value: e.newValue.toString(),
                        follower_mode_on: e.followerModeOn
                    });
                    o.o.track(i.SpadeEventType.ChatSettingsChanged, t)
                }
        },
        xM4F: function(e, t) {
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
        ya7N: function(e, t, n) {},
        yzyL: function(e, t) {},
        z3cX: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r, o = n("q1tI"),
                i = n("/7QA"),
                a = n("hyVY"),
                s = n("Ue10");
            ! function(e) {
                e[e.Metadata = 0] = "Metadata", e[e.Overlay = 1] = "Overlay"
            }(r || (r = {}));
            var c = function(e) {
                    var t, n = Object(a.b)(e.video.lengthSeconds);
                    return t = e.video.publishedAt ? o.createElement(s.W, {
                        fontSize: s.Ca.Size7
                    }, Object(i.c)(new Date(e.video.publishedAt), "medium"), o.createElement("span", null, " · "), n) : o.createElement(s.W, {
                        fontSize: s.Ca.Size7
                    }, n), o.createElement(s.Xa, {
                        alignItems: s.f.Stretch,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Row,
                        flexGrow: 1,
                        padding: .5
                    }, o.createElement(s.Xa, {
                        flexGrow: 0,
                        flexShrink: 0,
                        position: s.jb.Relative
                    }, o.createElement(s.I, {
                        alt: e.video.title,
                        aspect: s.p.Aspect16x9,
                        size: s.J.Size8,
                        src: e.video.previewThumbnailURL
                    }), l(e.selected)), o.createElement(s.Xa, {
                        alignItems: s.f.Start,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: s.Wa.Center,
                        padding: {
                            x: 1
                        },
                        overflow: s.cb.Hidden
                    }, o.createElement(s.Xa, {
                        fullWidth: !0,
                        overflow: s.cb.Hidden
                    }, o.createElement(s.W, {
                        type: s.Vb.H3,
                        fontSize: s.Ca.Size6,
                        title: e.video.title,
                        ellipsis: !0
                    }, e.video.title)), o.createElement("div", {
                        "data-test-selector": r.Metadata
                    }, t)))
                },
                l = function(e) {
                    return e ? o.createElement(s.Eb, {
                        background: s.r.Overlay,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        position: s.jb.Absolute,
                        alignItems: s.f.Center,
                        "data-test-selector": r.Overlay,
                        display: s.X.Flex,
                        flexDirection: s.Aa.Column,
                        justifyContent: s.Wa.Center
                    }, o.createElement(s.sb, {
                        asset: s.tb.Check
                    })) : null
                }
        },
        zClW: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return b
            }), n.d(t, "a", function() {
                return C
            }), n.d(t, "b", function() {
                return k
            }), n.d(t, "i", function() {
                return y
            }), n.d(t, "d", function() {
                return E
            }), n.d(t, "f", function() {
                return O
            }), n.d(t, "e", function() {
                return w
            }), n.d(t, "g", function() {
                return D
            }), n.d(t, "h", function() {
                return T
            });
            var r = n("mrSG"),
                o = n("/7QA"),
                i = n("2xye"),
                a = n("ZuiC"),
                s = n("ahza"),
                c = n("pU2t"),
                l = n("ZUUl"),
                d = n("fI4C"),
                u = n("fIj0"),
                m = n("xM4F"),
                p = n("8uuy");
            var f = function(e) {
                    if (e.includes("FollowersOnlyError")) return function(e) {
                        return Object(o.d)("This room is in {duration} followers-only mode. Follow this channel to join the community", {
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
                            CommenterBannedError: Object(o.d)("You are banned from sending messages in this channel", "routines-comments"),
                            CommentingDisabledError: Object(o.d)("Sending messages in this channel is disabled", "routines-comments"),
                            UserNotVerifiedError: Object(o.d)("Account email verification required to send a message", "routines-comments"),
                            MaxChildCommentsError: Object(o.d)("The reply limit for this message has been reached", "routines-comments"),
                            MessageLikelySpamError: Object(o.d)("Your message was blocked by the spam filter", "routines-comments"),
                            MessageContainsBannedWordsError: Object(o.d)("Your message wasn't posted due to conflicts with the channel's moderation settings", "routines-comments")
                        },
                        n = Object.keys(t).find(function(t) {
                            return e.includes(t)
                        });
                    return n ? t[n] : Object(o.d)("Unable to send a new message at this time", "routines-comments")
                },
                h = "",
                g = -1,
                v = !1,
                b = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            if (v) return [2, Promise.resolve()];
                            if (Object(s.f)(t)) {
                                if (t.offset === g) return [2, Promise.resolve()];
                                g = t.offset
                            }
                            if (Object(s.d)(t)) {
                                if (t.cursor === h) return [2, Promise.resolve()];
                                h = t.cursor
                            }
                            return v = !0, [2, Object(s.g)(t).then(function(n) {
                                v = !1, Object(s.f)(t) && t.offset === g ? e.dispatch(Object(a.A)(n)) : e.dispatch(Object(a.z)(n))
                            }, function(t) {
                                v = !1, o.k.error(t, "VideoChat: unable to fetch messages"), e.dispatch(Object(a.B)())
                            })]
                        })
                    })
                },
                C = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var n, i, d;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(s.b)(t)];
                                case 1:
                                    return (n = r.sent()).requestError ? (o.k.error(n.requestError, C.name), e.dispatch(Object(a.r)(f(""))), [2]) : n.error ? (o.k.error(new Error(n.error.error), C.name), e.dispatch(Object(a.r)(f(n.error.message))), [2]) : void 0 === n.body ? (e.dispatch(Object(a.r)(f(""))), [2]) : (i = Object(c.c)(n.body), e.dispatch(Object(a.s)(i)), e.dispatch(Object(l.b)(S, i)), setTimeout(function() {
                                        e.dispatch(Object(a.q)())
                                    }, 5e3), [3, 3]);
                                case 2:
                                    return d = r.sent(), o.k.error(d, C.name), e.dispatch(Object(a.r)(f(""))), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(s.c)(t)];
                                case 1:
                                    return r.sent(), e.dispatch(Object(a.t)({
                                        comment: t
                                    })), e.dispatch(Object(l.b)(_, {
                                        comment: t
                                    })), [3, 3];
                                case 2:
                                    return n = r.sent(), o.k.error(n, k.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e, t) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var n, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(s.h)(t)];
                                case 1:
                                    return n = r.sent(), e.dispatch(Object(a.v)(n)), [3, 3];
                                case 2:
                                    return i = r.sent(), o.k.error(i, y.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                S = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var e, s;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: u,
                                        variables: {
                                            videoCreatorID: t.comments[0].channelId,
                                            videoID: t.comments[0].contentId
                                        }
                                    })];
                                case 1:
                                    return e = r.sent().data, a.track(i.SpadeEventType.ChommentCreated, Object(d.f)(t, e)), [3, 3];
                                case 2:
                                    return s = r.sent(), o.k.error(s, S.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                _ = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var s, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: m,
                                        variables: {
                                            videoCreatorID: t.comment.channelId,
                                            commentCreator: t.comment.commenter,
                                            videoID: t.comment.contentId
                                        }
                                    })];
                                case 1:
                                    return s = r.sent().data, a.track(i.SpadeEventType.ChommentDeleted, Object(d.g)(t, e.getState(), s)), [3, 3];
                                case 2:
                                    return c = r.sent(), o.k.error(c, _.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                E = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var s, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: p,
                                        variables: {
                                            videoID: t.comment.contentId
                                        }
                                    })];
                                case 1:
                                    return s = r.sent().data, a.track(i.SpadeEventType.ChommentUIAction, Object(d.e)(t, e.getState(), s)), [3, 3];
                                case 2:
                                    return c = r.sent(), o.k.error(c, E.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                O = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var s, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: m,
                                        variables: {
                                            videoCreatorID: t.channelId,
                                            commentCreator: t.commenter,
                                            videoID: t.contentId
                                        }
                                    })];
                                case 1:
                                    return s = r.sent().data, a.track(i.SpadeEventType.ChommentUIAction, Object(d.i)(t, e.getState(), s)), [3, 3];
                                case 2:
                                    return c = r.sent(), o.k.error(c, O.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                w = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var c, l, u, m;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), c = e.getState(), l = Object(s.e)(t) ? c.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                        query: p,
                                        variables: {
                                            videoID: l
                                        }
                                    })];
                                case 1:
                                    return u = r.sent().data, a.track(i.SpadeEventType.ChommentUIAction, Object(d.h)(t, e.getState(), u)), [3, 3];
                                case 2:
                                    return m = r.sent(), o.k.error(m, w.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                D = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var s, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: p,
                                        variables: {
                                            videoID: t.comment.contentId
                                        }
                                    })];
                                case 1:
                                    return s = r.sent().data, a.track(i.SpadeEventType.ChommentUIAction, Object(d.j)(t, e.getState(), s)), [3, 3];
                                case 2:
                                    return c = r.sent(), o.k.error(c, D.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                T = function(e, t, n, a) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var s, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, n.query({
                                        query: u,
                                        variables: {
                                            videoCreatorID: t.channelId,
                                            videoID: t.contentId
                                        }
                                    })];
                                case 1:
                                    return s = r.sent().data, a.track(i.SpadeEventType.ChommentUIAction, Object(d.k)(t, e.getState(), s)), [3, 3];
                                case 2:
                                    return c = r.sent(), o.k.error(c, T.name), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        zl5M: function(e, t, n) {
            var r = {
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
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoModerationDashboard($dashboardOwnerLogin: String $videoID: ID $hasVideoID: Boolean!) {\nbadges {\n...badge\n}\nuser(login: $dashboardOwnerLogin) {\nid\nbroadcastBadges {\n...badge\n}\n...cheer\ndisplayName\nself {\nisModerator\n}\n}\nvideo(id: $videoID) @include(if: $hasVideoID) {\nid\ntitle\n}\ncurrentUser {\nid\nlogin\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var o = {};

            function i(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !o[t] && (o[t] = !0, !0)
                })
            }
            r.definitions = r.definitions.concat(i(n("IKE4").definitions)), r.definitions = r.definitions.concat(i(n("F9eG").definitions)), e.exports = r
        },
        znm4: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                o = n("/MKj"),
                i = n("yR8l"),
                a = n("QzU5"),
                s = n("kRBY"),
                c = n("4rCz"),
                l = n("0Lz3"),
                d = n("WytW"),
                u = n("ZuiC"),
                m = n("sf7/"),
                p = n("HjbF"),
                f = n("kVrx"),
                h = n("zClW"),
                g = n("l41m"),
                v = function(e, t, n) {
                    return e && t && !n
                },
                b = n("Sfdh"),
                C = n("ZUUl"),
                k = n("pwkZ"),
                y = n("pq/L");
            n.d(t, "a", function() {
                return E
            });
            var S = 2;
            var _ = Object(o.connect)(function(e, t) {
                    var n = {
                        comments: [],
                        currentVideoTime: e.vodChat.comments.currentVideoTime,
                        cursor: e.vodChat.comments.cursor,
                        errorMessage: e.vodChat.comments.errorMessage,
                        hasFetchedComments: e.vodChat.comments.hasLoadedData,
                        hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                        isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                        isCurrentUserModerator: !1,
                        isLoggedIn: Object(s.f)(e),
                        isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                        isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                        offsetRange: Object(g.b)(e.vodChat.comments.comments),
                        replyCursorMap: e.vodChat.comments.replyCursorMap,
                        shouldSendReplayFilterError: !1,
                        hideTimestamps: e.vodChat.comments.hideTimestamps
                    };
                    if (!t.data.loading && !t.data.error && t.data.video) {
                        var r = t.data,
                            o = r.currentUser,
                            i = r.video;
                        null !== o && o.roles && (n.isCurrentUserModerator = Object(p.b)(o, i.owner)), n.comments = Object(g.c)(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = v(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== a.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
                    }
                    return n
                }, function(e, t) {
                    return {
                        onUpdateBegan: function(n, r) {
                            if (n.videoID)
                                if (r.videoID === n.videoID) {
                                    if (!n.hasFetchedComments) {
                                        var o = {
                                            bitsConfig: t.bitsConfig,
                                            offset: n.currentVideoTime,
                                            videoID: n.videoID
                                        };
                                        if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                                        return n.highlightedMessageID && (o.highlightedMessageID = n.highlightedMessageID), void e(Object(C.a)(h.c, o))
                                    }
                                    if (n.offsetRange !== g.a) {
                                        if (Object(p.f)({
                                                cursor: n.cursor,
                                                currentVideoTime: n.currentVideoTime,
                                                offsetEndTime: n.offsetRange.endSec,
                                                offsetThreshold: S
                                            })) return void e(Object(C.a)(h.c, {
                                            bitsConfig: t.bitsConfig,
                                            cursor: n.cursor.future,
                                            videoID: n.videoID
                                        }));
                                        if (Object(p.e)(n)) return void e(Object(C.a)(h.c, {
                                            bitsConfig: t.bitsConfig,
                                            offset: n.currentVideoTime,
                                            videoID: n.videoID
                                        }))
                                    }
                                } else e(Object(m.c)(n.videoID))
                        },
                        onCreate: function(t) {
                            if (Object(d.j)(t.message)) {
                                var n = Object(c.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                                e(Object(u.u)(n))
                            } else e(Object(C.a)(h.a, t)), e(Object(C.b)(h.e, t))
                        },
                        onError: function(t) {
                            e(Object(u.u)(t))
                        },
                        onErrorDismissClick: function() {
                            e(Object(u.w)())
                        },
                        onUnmount: function() {
                            e(Object(u.y)())
                        },
                        onLoadMoreReplies: function(t, n, r, o) {
                            e(Object(C.a)(h.c, Object(p.a)(t, n, r, o)))
                        },
                        onDisableSync: function() {
                            e(Object(u.D)())
                        },
                        onEnableSync: function() {
                            e(Object(u.E)())
                        },
                        onBanUser: function(t) {
                            e(Object(C.a)(f.a, t)), e(Object(C.b)(h.d, t))
                        },
                        onDeleteComment: function(t) {
                            e(Object(C.a)(h.b, t)), e(Object(C.b)(h.f, t))
                        },
                        onPlayerSeekRequest: function(n, r) {
                            t.onPlayerSeekRequest(n), void 0 !== r && e(Object(C.b)(h.h, r))
                        },
                        onTurnOffReplayFilter: function() {
                            e(Object(u.C)(!1))
                        },
                        onWillMount: function() {
                            e(Object(u.x)())
                        },
                        onDidMount: function(t) {
                            e(Object(u.C)(t))
                        }
                    }
                }, function(e, t, n) {
                    var o = t.onDisableSync;
                    e.isScrollingSynced || (o = function() {});
                    var i = t.onCreate;
                    return e.shouldSendReplayFilterError && (i = function(e) {
                        t.onError(Object(b.a)().chatReplayFilterError), t.onCreate(e)
                    }), r.__assign({}, e, t, n, {
                        onDisableSync: o,
                        onCreate: i,
                        data: n.data
                    })
                })(k.a),
                E = Object(i.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                videoID: e.videoID,
                                hasVideoID: !!e.videoID
                            }
                        }
                    },
                    props: function(e) {
                        var t = e.ownProps,
                            n = e.data,
                            o = n && n.video && n.video.owner && n.video.owner.cheer && n.video.owner.cheer.emotes || [],
                            i = Object(l.a)(o),
                            a = {};
                        return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (a = n.currentUser.blockedUsers.reduce(function(e, t) {
                            return t && (e[t.id] = !0), e
                        }, {})), r.__assign({}, t, {
                            data: n,
                            bitsConfig: i,
                            blockedUsers: a
                        })
                    }
                })(_)
        }
    }
]);