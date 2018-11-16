(window.webpackJsonp = window.webpackJsonp || []).push([
    [141], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function i(e) {
                return {
                    type: r,
                    languagePreferences: e
                }
            }
        },
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                i = n("mrSG"),
                a = n("q1tI"),
                o = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Fb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, a.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), a.createElement(l.a, null))
                    }, t
                }(a.Component));
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(o.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return m
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
        "3f6U": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("V+GM"),
                s = n("vRsq"),
                l = n("NvVO"),
                c = n("2xye"),
                d = n("GnwI"),
                u = n("/MKj"),
                p = n("OhOW"),
                m = n("ZDlU"),
                h = n("8/mp"),
                g = n("yR8l"),
                b = n("geRD"),
                v = n("4rCz"),
                f = n("cras"),
                k = n("FUtE"),
                y = n("L4bB"),
                C = n("HStj"),
                S = n("Ue10"),
                w = n("EgD6"),
                T = (n("gY/c"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.loadMoreTopClips = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
                                    return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                                })
                            })
                        }, t.canLoadMore = function() {
                            var e = t.props.data;
                            return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data.loading && !this.props.data.game) return i.createElement(m.a, {
                            message: Object(v.d)("Game does not exist", "DirectoryGameClipsContent")
                        });
                        if (this.props.data.error) return i.createElement(m.a, {
                            message: Object(v.d)("Error loading data.", "DirectoryGameClipsContent")
                        });
                        var e = this.props.timeRange,
                            t = Object(s.l)(e),
                            n = i.createElement(S.Ya, {
                                className: "directory-game-clips-page__filters",
                                display: S.X.Flex,
                                flexDirection: S.Aa.Row,
                                margin: {
                                    top: 1,
                                    right: 3
                                }
                            }, i.createElement(f.a, {
                                buttonSize: S.D.Large,
                                contentType: C.a.Clips,
                                directoryName: this.props.gameName
                            }), i.createElement(y.a, {
                                showTagExperimentStyles: !0
                            }));
                        return i.createElement(i.Fragment, null, n, i.createElement(S.Ya, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, i.createElement(k.a, {
                            clips: this.props.data.game && this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            isLoading: this.props.data.loading,
                            loadMoreClips: this.loadMoreTopClips,
                            timeRange: e
                        }), i.createElement(h.a, {
                            enabled: this.canLoadMore(),
                            key: t,
                            loadMore: this.props.loadMore
                        })))
                    }, t = r.__decorate([Object(d.b)("DirectoryGameClipsContent", {
                        autoReportInteractive: !0
                    }), Object(g.a)(w, {
                        options: function(e) {
                            return {
                                variables: {
                                    gameName: e.gameName,
                                    limit: 20,
                                    criteria: {
                                        languages: e.languagePreferences,
                                        filter: Object(s.l)(e.timeRange)
                                    }
                                }
                            }
                        },
                        props: function(e) {
                            return r.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: w,
                                        variables: r.__assign({}, e.data.variables, {
                                            cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                game: r.__assign({}, n.game, {
                                                    clips: r.__assign({}, n.game.clips, {
                                                        edges: Object(b.c)(e.game.clips.edges, n.game.clips.edges)
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    })], t)
                }(i.Component));
            var _ = Object(u.connect)(function(e) {
                    return {
                        languagePreferences: Object(p.a)(e)
                    }
                })(T),
                O = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        a.p.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                    }, t.prototype.render = function() {
                        var e = Object(s.v)(this.props.location.search) || s.b.Day;
                        return i.createElement(_, {
                            gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            timeRange: e
                        })
                    }, t = r.__decorate([Object(d.b)("DirectoryGameClipsPage", {
                        autoReportInteractive: !0,
                        destination: l.a.DirectoryGameClips
                    }), Object(o.a)({
                        location: c.PageviewLocation.ClipsGame
                    })], t)
                }(i.Component);
            n.d(t, "DirectoryGameClipsPage", function() {
                return O
            })
        },
        "4L7N": function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("VwyG"),
                l = n("X7Ac"),
                c = n("yR8l"),
                d = n("MLDe"),
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
                            var r = t.videoQualities[0];
                            n = r.sourceURL
                        }
                        var i = this.props,
                            a = i.broadcasterId,
                            c = i.broadcasterLogin,
                            u = i.forceShow;
                        return o.createElement(s.a, {
                            ownerLogin: this.props.broadcasterLogin,
                            permittedRoles: {
                                editor: !0,
                                staff: !0
                            }
                        }, function(r) {
                            var i = r.permitted;
                            return n && (i || u) ? o.createElement(l.a, {
                                type: l.b.Download,
                                text: e.props.slug,
                                url: n,
                                onShareClick: t ? Object(d.c)(t.id, t.game && t.game.name, a, c, e.props.pageType) : void 0
                            }) : null
                        })
                    }, t
                }(o.Component),
                m = Object(c.a)(u)(p);
            var h = Object(r.connect)(function(e) {
                var t = Object(i.e)(e);
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
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function l(e, t) {
                var n = this;
                return function(a) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, l;
                        return r.__generator(this, function(r) {
                            return n = new Set(d()), t ? n.add(e) : n.delete(e), l = Array.from(n), i.m.set(s, l), a(Object(o.b)(l)), [2]
                        })
                    })
                }
            }

            function c() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function d() {
                return i.m.get(s, []).filter(function(e) {
                    return a.a.has(e)
                })
            }
        },
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
        "9a8W": function(e, t, n) {},
        "BQs+": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "b", function() {
                return u
            });
            var r, i = n("mrSG"),
                a = n("/7QA"),
                o = n("2xye"),
                s = n("I6K6"),
                l = n("bTcf"),
                c = n("L7EG");

            function d(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, l, u, p;
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
                                return r = i.sent().data, l = function(e, t) {
                                    return {
                                        id: e.id,
                                        owner: t.owner,
                                        broadcastType: t.broadcastType,
                                        game: t.game
                                    }
                                }(e, r.video), u = {
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
                                return p = i.sent(), a.k.error(p.toString(), d.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function u(e, t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, s, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, n.query({
                                    query: l,
                                    variables: {
                                        creatorID: e.owner.id
                                    }
                                })];
                            case 1:
                                return r = i.sent().data, s = {
                                    channel: r.user ? r.user.login : null,
                                    channel_id: Number(e.owner.id),
                                    game: null,
                                    partner: !!r.user && r.user.roles.isPartner,
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
                                return c = i.sent(), a.k.error(c.toString(), u.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e.Copy = "link", e.Embed = "option_embed", e.Facebook = "fb", e.Link = "option_link", e.Reddit = "reddit", e.Twitter = "twitter", e.Unknown = "", e.VKontakte = "vk", e.Download = "download"
            }(r || (r = {}))
        },
        BhFH: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("kSkr");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            blockUserMutation: function(n, i, s, l) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return t.mutate ? [4, t.mutate({
                                                    variables: {
                                                        input: {
                                                            targetUserID: n,
                                                            sourceContext: s,
                                                            reason: i
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
        EgD6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsCards__Game"
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
                                value: "GameClipsInput"
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
                                                            kind: "Field",
                                                            name: {
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
                    end: 489
                }
            };
            n.loc.source = {
                body: "query ClipsCards__Game($gameName: String! $limit: Int $cursor: Cursor $criteria: GameClipsInput) {\ngame(name: $gameName) {\nid\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        FUtE: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("9C/b"),
                s = n("GFmA"),
                l = n("+GjP"),
                c = n("vRsq"),
                d = n("tuvy"),
                u = n("/MKj"),
                p = n("fvjX"),
                m = n("aCAx"),
                h = n("MdYN"),
                g = n("MLDe"),
                b = n("2xye"),
                v = n("4rCz"),
                f = n("GnwI"),
                k = n("bdIb"),
                y = n("Ue10");
            ! function(e) {
                e.AllClipsUpsell = "all-clips-upsell", e.CreateAClipUpsell = "create-clip-upsell"
            }(r || (r = {}));
            var C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.cardClickHandler = function(e, n, r) {
                            r.preventDefault(), t.props.onCardClick(e, n, function() {
                                return t.props.clips
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return 0 === this.props.clips.length ? a.createElement("div", null, this.renderEmpty()) : a.createElement(y.Ya, {
                            fullWidth: !0
                        }, a.createElement(y.cc, {
                            gutterSize: y.ec.Small,
                            childWidth: y.dc.Large,
                            placeholderItems: 20
                        }, this.props.clips.map(function(t, n) {
                            return a.createElement(y.Ya, {
                                "data-a-target": "clips-card-" + n,
                                margin: {
                                    bottom: 2
                                },
                                key: n
                            }, Object(d.b)() || Object(d.a)() ? e.renderClipCardForPage(t, n) : e.renderClipCardForModal(t, n))
                        })))
                    }, t.prototype.renderClipCardForModal = function(e, t) {
                        return a.createElement(s.a, {
                            context: this.props.context,
                            title: e.title,
                            linkTo: e.url,
                            onClick: this.cardClickHandler.bind(this, e, t),
                            thumbnailImageProps: {
                                src: e.thumbnailURL || v.q.config.defaultStreamPreviewURL,
                                alt: e.title
                            },
                            channelDisplayName: e.broadcaster && e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster && e.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: e.broadcaster ? "/" + e.broadcaster.login : ""
                            },
                            channelImageProps: {
                                src: e.broadcaster && e.broadcaster.profileImageURL || "",
                                alt: e.broadcaster && e.broadcaster.login || ""
                            },
                            gameTitle: e.game && e.game.name || void 0,
                            gameTitleLinkTo: e.game ? {
                                pathname: "/directory/game/" + encodeURI(e.game.name)
                            } : void 0,
                            gameBoxArtImageProps: e.game ? {
                                src: e.game.boxArtURL || v.a.defaultBoxArtURL,
                                alt: e.game.name
                            } : void 0,
                            datePublished: e.createdAt,
                            viewCount: e.viewCount,
                            durationInSeconds: e.durationSeconds,
                            clipCreatedByChannelLogin: e.curator && e.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: e.curator ? "/" + e.curator.login : "",
                            trackImageLatency: 0 === t
                        })
                    }, t.prototype.renderClipCardForPage = function(e, t) {
                        return a.createElement(k.a, {
                            context: this.props.context,
                            key: "video-" + t,
                            tracking: {
                                content: b.PageviewContent.TopClips,
                                content_index: t,
                                medium: b.PageviewMedium.TopClips
                            },
                            clip: e
                        })
                    }, t.prototype.renderEmpty = function() {
                        var e = this.props.timeRange === c.b.All ? a.createElement(y.Ya, {
                            "data-test-selector": r.CreateAClipUpsell
                        }, a.createElement(y.W, {
                            fontSize: y.Ca.Size4
                        }, Object(v.d)("No Clips Found", "ClipsCards")), a.createElement(y.Ya, {
                            margin: 3
                        }, Object(v.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                            "x:link": function(e) {
                                return a.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                    target: "_blank"
                                }, e)
                            }
                        }, "ClipsCards"))) : a.createElement(y.Ya, {
                            "data-test-selector": r.AllClipsUpsell
                        }, a.createElement(y.W, {
                            fontSize: y.Ca.Size4
                        }, Object(v.d)("No clips were created in this time period.", "ClipsCards"), a.createElement("br", null), Object(v.d)("Check out all popular clips from this channel instead.", "ClipsCards")), a.createElement(y.Ya, {
                            margin: 3
                        }, a.createElement(y.z, {
                            type: y.F.Hollow,
                            onClick: this.props.onShowAllClipsClick
                        }, Object(v.d)("See all popular clips", "ClipCards"))));
                        return a.createElement(y.Ya, {
                            fullWidth: !0
                        }, a.createElement(y.Ja, null, a.createElement(y.P, {
                            cols: 3
                        }), a.createElement(y.P, {
                            cols: 6
                        }, a.createElement(y.Ya, {
                            textAlign: y.Sb.Center
                        }, e)), a.createElement(y.P, {
                            cols: 3
                        })))
                    }, t
                }(a.Component),
                S = Object(f.b)("ClipCards", {
                    autoReportInteractive: !0
                })(C);
            var w, T = Object(u.connect)(null, function(e, t) {
                    return Object.assign(Object(p.bindActionCreators)({
                        onCardClick: function(e, n, r) {
                            var i = t.context === s.b.SingleChannelList ? g.b.Channel : g.b.Game;
                            return Object(m.d)(h.a, {
                                clip: e,
                                clipIndex: n,
                                getClips: r,
                                loadMoreClips: t.loadMoreClips,
                                pageType: i
                            })
                        }
                    }, e), t)
                })(S),
                _ = n("L4bB"),
                O = n("0Rl0"),
                E = n("cERj"),
                R = n("mHR/");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(w || (w = {}));
            var M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showAllClipsHandler = function() {
                            var e, n = ((e = {})[c.a] = c.b.All, e);
                            t.props.history.push(Object(l.d)(t.props.location, n))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.channelLogin;
                        if (this.props.isLoading) {
                            for (var n = [], r = 0; r < 20; r++) n.push(a.createElement(O.a, {
                                key: r
                            }));
                            e = a.createElement(y.cc, {
                                gutterSize: y.ec.Small,
                                childWidth: y.dc.Large,
                                placeholderItems: 20
                            }, n)
                        } else e = a.createElement(T, {
                            clips: this.props.clips || [],
                            context: t ? s.b.SingleChannelList : s.b.SingleGameList,
                            loadMoreClips: this.props.loadMoreClips,
                            onShowAllClipsClick: this.showAllClipsHandler,
                            timeRange: this.props.timeRange
                        });
                        var i = null;
                        if (!Object(R.a)(this.props.match.path)) {
                            var o = null;
                            t && Object(d.b)() && (o = a.createElement(E.a, {
                                channelLogin: t
                            })), Object(d.a)() || (i = a.createElement(y.Ya, {
                                "data-test-selector": w.Filters,
                                display: y.X.Flex,
                                flexDirection: y.Aa.Row,
                                fullWidth: !0,
                                margin: {
                                    bottom: 2
                                }
                            }, o, a.createElement(_.a, {
                                hideLanguageFilter: !!t
                            })))
                        }
                        return a.createElement(y.Ya, {
                            fullWidth: !0
                        }, i, a.createElement("div", null, e))
                    }, t
                }(a.Component),
                N = Object(o.a)(M);
            n.d(t, !1, function() {
                return w
            }), n.d(t, !1, function() {
                return 20
            }), n.d(t, !1, function() {
                return M
            }), n.d(t, "a", function() {
                return N
            })
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var r = n("/7QA"),
                i = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function a(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(a()).map(function(e) {
                return e.code
            }));

            function s() {
                var e = r.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var r = t(e),
                        i = t(n);
                    return r !== i ? r - i : r + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(a(!0))
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
        L4bB: function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("sLlB"),
                l = n("9C/b"),
                c = n("vSJR"),
                d = n("eJ65"),
                u = n("+GjP"),
                p = n("vRsq"),
                m = n("Ue10");
            ! function(e) {
                e[e.FilterText = 0] = "FilterText"
            }(r || (r = {}));
            var h = p.b.Week,
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.filterOptions = [{
                            label: Object(o.d)("Trending", "TopClipsTimeFilter"),
                            filter: p.b.Trending
                        }, {
                            label: Object(o.d)("24h", "TopClipsTimeFilter"),
                            filter: p.b.Day
                        }, {
                            label: Object(o.d)("7d", "TopClipsTimeFilter"),
                            filter: p.b.Week
                        }, {
                            label: Object(o.d)("30d", "TopClipsTimeFilter"),
                            filter: p.b.Month
                        }, {
                            label: Object(o.d)("all", "TopClipsTimeFilter"),
                            filter: p.b.All
                        }], t.renderFilterText = function(e) {
                            return e.filter === p.b.Trending ? a.createElement("span", {
                                "data-test-selector": r.FilterText
                            }, e.label) : a.createElement(m.Ya, {
                                display: m.X.Flex
                            }, Object(o.d)("Top", "TopClipsTimeFilter"), a.createElement(m.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, a.createElement(m.hb, {
                                "data-test-selector": r.FilterText,
                                type: m.ib.Brand,
                                label: e.label
                            })))
                        }, t.renderBalloonOption = function(e) {
                            var n, r = ((n = {})[p.a] = e.filter, n),
                                i = Object(u.d)(t.props.location, r),
                                o = e.selected ? a.createElement(m.Ya, {
                                    attachRight: !0,
                                    position: m.kb.Absolute,
                                    margin: {
                                        right: 1
                                    }
                                }, a.createElement(m.tb, {
                                    asset: m.ub.Check,
                                    height: 18,
                                    width: 18
                                })) : null;
                            return a.createElement(m.Va, {
                                "data-a-target": "time-filter-option-" + e.filter,
                                key: e.filter,
                                linkTo: i,
                                selected: !t.props.showTagExperimentStyles && e.selected
                            }, a.createElement(m.Ya, {
                                display: m.X.Flex,
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.renderFilterText(e), t.props.showTagExperimentStyles && o))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillMount = function() {
                        this.ensureFilterPresent()
                    }, t.prototype.componentWillUpdate = function() {
                        this.ensureFilterPresent()
                    }, t.prototype.render = function() {
                        var e = this.filterOptions,
                            t = Object(p.v)(this.props.location.search);
                        t || (t = h), e.forEach(function(e) {
                            e.selected = e.filter === t
                        });
                        var n = e.find(function(e) {
                            return !!e.selected
                        }) || e[0];
                        return this.props.showTagExperimentStyles ? a.createElement(c.a, {
                            buttonLabel: this.renderFilterText(n),
                            hideDropdownOnInsideClick: !0
                        }, e.map(this.renderBalloonOption)) : a.createElement(m.Ya, {
                            className: "top-clips-time-filter"
                        }, a.createElement(d.a, {
                            hideBalloonOnInsideClick: !0
                        }, a.createElement(m.z, {
                            dropdown: !0,
                            type: m.F.Hollow,
                            "data-a-target": "time-filter-selection"
                        }, this.renderFilterText(n)), a.createElement(m.u, {
                            direction: m.v.BottomLeft,
                            noTail: !0
                        }, e.map(this.renderBalloonOption))))
                    }, t.prototype.ensureFilterPresent = function() {
                        var e;
                        if (!Object(p.v)(this.props.location.search)) {
                            var t = ((e = {})[p.a] = h, e),
                                n = Object(u.d)(this.props.location, t);
                            this.props.history.replace(n)
                        }
                    }, t
                }(a.Component),
                b = Object(l.a)(g);
            n.d(t, "a", function() {
                return v
            });
            var v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(m.Ya, {
                        alignItems: m.f.End,
                        display: m.X.Flex,
                        flexDirection: m.Aa.Row,
                        fullWidth: !0,
                        justifyContent: m.Xa.Between
                    }, a.createElement(m.Ya, {
                        alignItems: m.f.End,
                        display: m.X.Flex,
                        flexDirection: m.Aa.Row
                    }, this.renderLanguageFilter(), a.createElement(b, {
                        showTagExperimentStyles: this.props.showTagExperimentStyles
                    })), a.createElement(m.Ya, {
                        padding: {
                            y: this.props.showTagExperimentStyles ? .5 : 0
                        }
                    }, a.createElement(m.z, {
                        "data-a-target": "manage-clips-button",
                        linkTo: "/manager/clips",
                        size: this.props.showTagExperimentStyles ? m.D.Large : m.D.Default,
                        targetBlank: !0,
                        type: m.F.Hollow
                    }, Object(o.d)("Manage my clips", "TopClips"))))
                }, t.prototype.renderLanguageFilter = function() {
                    return this.props.hideLanguageFilter ? null : a.createElement(m.Ya, {
                        margin: {
                            right: this.props.showTagExperimentStyles ? 0 : 1
                        }
                    }, a.createElement(s.a, null))
                }, t
            }(a.Component)
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
                return h
            });
            var r, i, a = n("/7QA"),
                o = n("wbMx"),
                s = n("2xye"),
                l = n("BQs+"),
                c = ((r = {})[o.b.Twitter] = "twitter", r[o.b.Reddit] = "reddit", r[o.b.VKontakte] = "vkontakte", r[o.b.Facebook] = "facebook", r[o.b.Copy] = "link", r[o.b.CopyInput] = "option_link", r[o.b.Download] = "download", r),
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
                m = function(e, t, n, r, i) {
                    return function(o) {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: c[o],
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: r,
                            live: null
                        })
                    }
                },
                h = function(e, t, n, r, i, o) {
                    return function() {
                        a.p.tracking.track(s.SpadeEventType.VideoShare, {
                            vod_id: e,
                            vod_type: s.SpadeVideoBroadcastType.Clip,
                            share_platform: l.a.Link,
                            location: p[i],
                            game: t,
                            channel_id: Number(n || 0),
                            channel: r,
                            live: null,
                            shared_item_url: o
                        })
                    }
                }
        },
        MPK0: function(e, t, n) {},
        McYG: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return "https://www.twitch.tv/" + t + "/clip/" + e
            }
            n.d(t, "a", function() {
                return r
            })
        },
        MdYN: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                u = n("cZKs"),
                p = n("DMoW"),
                m = n("jsEL"),
                h = n("GnwI"),
                g = n("/HY+"),
                b = n("8Ad5"),
                v = n("u5aL"),
                f = n("uX80"),
                k = n("wbMx"),
                y = n("Jxh/"),
                C = n("kduP"),
                S = n("f00E"),
                w = n("vhpE"),
                T = n("bq0i"),
                _ = n("yR8l"),
                O = n("4rCz"),
                E = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(r || (r = {}));
            var R = n("Ue10"),
                M = n("WsU7"),
                N = [r.Delete, r.DeleteAll],
                j = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(E.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(R.Va, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && N.includes(e)
                            }, c.createElement(R.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [r.Report, {
                                display: Object(O.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Report)
                                }
                            }],
                            [r.Delete, {
                                display: Object(O.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Delete)
                                }
                            }],
                            [r.DeleteAll, {
                                display: Object(O.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.DeleteAll)
                                }
                            }],
                            [r.Ban, {
                                display: Object(O.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Ban)
                                }
                            }],
                            [r.Timeout, {
                                display: Object(O.d)("Timeout User (24 hr)", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(r.Timeout)
                                }
                            }]
                        ]), n
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.props.clip;
                        if (!e || !e.currentUser) return null;
                        var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                            i = !!t.curator && e.currentUser.id === t.curator.id,
                            a = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = i || a || n,
                            s = a || n,
                            l = [r.Report];
                        return o && l.push(r.Delete), s && (l.push(r.DeleteAll), t.curator && t.broadcaster && (l.push(r.Ban), l.push(r.Timeout))), c.createElement(R.Ya, {
                            className: "moderation-menu"
                        }, c.createElement(T.a, null, c.createElement(R.z, {
                            type: R.F.Hollow,
                            icon: R.ub.More,
                            ariaLabel: Object(O.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(R.u, {
                            direction: R.v.TopRight
                        }, c.createElement(R.Ya, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(_.a)(M), Object(h.b)("ModerationMenu")], t)
                }(c.Component),
                x = n("MLDe"),
                D = (n("n/Dx"), 2e3),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingBalloon: !1,
                            playerRefID: Object(S.a)()
                        }, t.timeoutID = null, t.copyClipURL = function() {
                            var e;
                            try {
                                e = Object(y.a)(t.props.clip.url)
                            } catch (e) {
                                return void d.k.warn("Failed to copy", e)
                            }
                            e && (t.setState({
                                isShowingBalloon: !0
                            }), t.timeoutID = setTimeout(function() {
                                t.setState({
                                    isShowingBalloon: !1
                                })
                            }, D), Object(x.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(k.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(R.U, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(d.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(R.U, {
                                to: "" + Object(C.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(R.Fb, {
                            className: "clips-view-modal-content",
                            background: R.r.Base
                        }, c.createElement(R.Ya, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(R.o, {
                            ratio: R.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(R.Ya, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(R.Ya, {
                            display: R.X.Flex,
                            flexWrap: R.Ba.NoWrap
                        }, c.createElement(R.Ya, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(v.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(f.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: R.ub.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(R.u, {
                            show: this.state.isShowingBalloon,
                            direction: R.v.TopRight
                        }, c.createElement(R.Va, {
                            onClick: this.dismissBalloon
                        }, c.createElement(R.Ya, {
                            padding: 1
                        }, c.createElement(R.W, {
                            bold: !0
                        }, Object(d.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(w.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(j, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(R.Ya, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: R.X.Flex,
                            flexWrap: R.Ba.NoWrap,
                            justifyContent: R.Xa.Between,
                            fullWidth: !0,
                            overflow: R.db.Hidden
                        }, c.createElement(R.Ya, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(R.Qa, {
                            ellipsis: !0
                        }, c.createElement(R.Fb, {
                            display: R.X.Flex,
                            fontSize: R.Ca.Size5
                        }, c.createElement(R.Ya, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(R.Ya, {
                            flexShrink: 0
                        }, c.createElement(R.W, {
                            type: R.Wb.Span,
                            color: R.O.Alt2
                        }, " • ", Object(d.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(R.Qa, {
                            ellipsis: !0
                        }, c.createElement(R.Fb, {
                            color: R.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(d.d)("Clipped by {curator}", {
                            curator: c.createElement(R.U, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(R.Fb, {
                            display: R.X.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: R.Ca.Size5,
                            color: R.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(R.Ya, {
                            margin: {
                                right: .5
                            },
                            alignItems: R.f.Center,
                            display: R.X.Flex
                        }, c.createElement(R.tb, {
                            asset: R.ub.GlyphViews
                        })), Object(d.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(h.b)("ClipsViewModalContent")], t)
                }(c.Component),
                I = n("S1Za");
            var F = Object(i.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        reportPlayerInstanceStarted: I.b
                    }, e)
                })(U),
                L = (n("9a8W"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onKeyDown = function(e) {
                            var n = e.charCode || e.keyCode;
                            n === b.a.Left ? t.updateClipBackward() : n === b.a.Right && t.updateClipForward()
                        }, t.updateClipForward = function() {
                            t.updateClipIndex(t.props.clipIndex + 1)
                        }, t.updateClipBackward = function() {
                            t.updateClipIndex(t.props.clipIndex - 1)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = null;
                        this.props.clipIndex > 0 && (e = c.createElement(R.Ya, {
                            position: R.kb.Absolute,
                            display: R.X.Flex,
                            alignItems: R.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(R.A, {
                            ariaLabel: Object(d.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: R.C.Primary,
                            icon: R.ub.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(R.Ya, {
                            position: R.kb.Absolute,
                            display: R.X.Flex,
                            alignItems: R.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(R.A, {
                            ariaLabel: Object(d.d)("Next clip", "ClipsViewModalNavigation"),
                            type: R.C.Primary,
                            icon: R.ub.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(R.Ya, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(F, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState,
                            pageType: this.props.pageType,
                            closeModal: this.props.closeModal
                        }), t)
                    }, t.prototype.componentWillUnmount = function() {
                        document.removeEventListener("keydown", this.onKeyDown)
                    }, t.prototype.setUpArrowListeners = function() {
                        document.addEventListener("keydown", this.onKeyDown)
                    }, t.prototype.updateClipIndex = function(e) {
                        var t = Math.max(0, e),
                            n = this.props.getClips();
                        n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(V, {
                            getClips: this.props.getClips,
                            clip: n[t],
                            clipIndex: t,
                            loadMoreClips: this.props.loadMoreClips,
                            pageType: this.props.pageType
                        })
                    }, t
                }(c.Component)),
                W = Object(h.b)("ClipsViewModalNavigation")(L);
            var A = Object(i.connect)(null, function(e) {
                    return Object(a.bindActionCreators)({
                        showModal: o.d,
                        closeModal: o.c
                    }, e)
                })(W),
                B = (n("ygyh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            modalView: r.View
                        }, t.setToViewState = function() {
                            t.updateClipsModalViewState(r.View)
                        }, t.updateClipsModalViewState = function(e) {
                            t.setState({
                                modalView: e
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = ((e = {})["clips-modal-view"] = !0, e["clips-modal-view--wide"] = !1, e);
                        switch (this.state.modalView) {
                            case r.Report:
                                t = c.createElement(g.a, {
                                    title: Object(d.d)("Report this Clip", "ClipsViewModal"),
                                    reportContext: {
                                        contentType: p.N.CLIP_REPORT,
                                        contentID: this.props.clip.slug,
                                        targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                        additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                    },
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.Delete:
                                t = c.createElement(m.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.DeleteAll:
                                t = c.createElement(m.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case r.Ban:
                            case r.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(m.b, {
                                        targetUser: {
                                            displayName: this.props.clip.curator.displayName || "",
                                            login: this.props.clip.curator.login || ""
                                        },
                                        broadcasterID: this.props.clip.broadcaster.id || "",
                                        isTemporary: this.state.modalView === r.Timeout,
                                        onClose: this.setToViewState
                                    });
                                    break
                                }
                            default:
                                t = c.createElement(A, {
                                    getClips: this.props.getClips,
                                    clip: this.props.clip,
                                    clipIndex: this.props.clipIndex,
                                    updateModalViewState: this.updateClipsModalViewState,
                                    loadMoreClips: this.props.loadMoreClips,
                                    pageType: this.props.pageType
                                }), n["clips-modal-view--wide"] = !0
                        }
                        return c.createElement(R.Ya, {
                            className: l(n)
                        }, t, c.createElement(u.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                z = Object(h.b)("ClipsViewModal")(B);
            var V = Object(i.connect)(null, function(e) {
                return Object(a.bindActionCreators)({
                    showModal: o.d
                }, e)
            })(z);
            n.d(t, "a", function() {
                return V
            }), n.d(t, !1, function() {})
        },
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("2xye");

            function o(e) {
                i.p.tracking.track(a.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(r || (r = {}))
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            i.p.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case a.a:
                        return r.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        Oy4H: function(e, t, n) {},
        "Pub/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("HzXE");

            function i(e, t, n) {
                try {
                    return e.readQuery({
                        query: r,
                        variables: {
                            channelID: t,
                            targetUserID: n
                        }
                    })
                } catch (e) {}
            }
        },
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
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
                        return a.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(o.d)("Select Reason (required)", "ReportUserModal")
                        }, a.createElement(d.Ab, {
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
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
            var g = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? a.createElement("div", null, a.createElement(d.z, {
                        onClick: this.props.onClose
                    }, a.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(o.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, a.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), a.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d.Fb, {
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
                    }), a.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(o.d)("Description (required)", "ReportUser")
                    }, a.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, a.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.Ya, {
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
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return a.createElement(d.Fb, {
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
        S58p: function(e, t, n) {},
        TVuH: function(e, t, n) {},
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
            var r = n("/MKj"),
                i = n("kRBY"),
                a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("GnwI"),
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
            var h = Object(r.connect)(function(e) {
                return {
                    isLoggedIn: Object(i.f)(e)
                }
            })(m);
            n.d(t, "a", function() {
                return h
            })
        },
        WsU7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ModerationMenu_CurrentUser"
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
                }],
                loc: {
                    start: 0,
                    end: 75
                }
            };
            n.loc.source = {
                body: "query ModerationMenu_CurrentUser {\ncurrentUser {\nid\nisSiteAdmin\nisStaff\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        X7Ac: function(e, t, n) {
            "use strict";
            var r = n("wbMx");
            n.d(t, "a", function() {
                return r.a
            }), n.d(t, "b", function() {
                return r.b
            })
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
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("GFmA"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || a.p.config.defaultStreamPreviewURL,
                                alt: this.props.clip.title
                            },
                            channelDisplayName: this.props.clip.broadcaster && this.props.clip.broadcaster.displayName || "",
                            channelLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login : "",
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.clip.broadcaster && this.props.clip.broadcaster.profileImageURL || "",
                                alt: this.props.clip.broadcaster && this.props.clip.broadcaster.login || ""
                            },
                            gameTitle: this.props.clip.game && this.props.clip.game.name || void 0,
                            gameTitleLinkTo: this.props.clip.game ? {
                                pathname: "/directory/game/" + encodeURI(this.props.clip.game.name),
                                state: this.getLinkState()
                            } : void 0,
                            gameBoxArtImageProps: this.props.clip.game ? {
                                src: this.props.clip.game.boxArtURL || a.a.defaultBoxArtURL,
                                alt: this.props.clip.game.name
                            } : void 0,
                            datePublished: this.props.clip.createdAt,
                            viewCount: this.props.clip.viewCount,
                            durationInSeconds: this.props.clip.durationSeconds,
                            clipCreatedByChannelLogin: this.props.clip.curator && this.props.clip.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: this.props.clip.curator ? "/" + this.props.clip.curator.login : ""
                        })
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(i.Component)
        },
        cERj: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return h
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("9C/b"),
                s = n("/7QA"),
                l = n("eJ65"),
                c = n("+GjP"),
                d = n("vRsq"),
                u = n("tuvy"),
                p = n("Ue10");
            ! function(e) {
                e.ButtonText = "button-text", e.FilterText = "filter-text"
            }(r || (r = {}));
            var m = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.getFilters(),
                            t = e.find(function(e) {
                                return !!e.selected
                            });
                        return a.createElement(p.Ya, {
                            padding: {
                                right: 1
                            }
                        }, a.createElement(p.Ya, {
                            padding: {
                                bottom: .5
                            }
                        }, a.createElement(p.W, {
                            bold: !0
                        }, Object(s.d)("Showing", "VideoFilter"))), a.createElement(l.a, {
                            hideBalloonOnInsideClick: !0
                        }, a.createElement(p.z, {
                            dropdown: !0,
                            type: p.F.Hollow,
                            "data-test-selector": r.ButtonText
                        }, t ? t.label : e[0].label), a.createElement(p.u, {
                            noTail: !0,
                            direction: p.v.Bottom
                        }, this.renderFilterList())))
                    }, t.prototype.renderFilterList = function() {
                        return this.getFilters().map(this.renderFilter.bind(this))
                    }, t.prototype.renderFilter = function(e) {
                        var t = !!e.selected;
                        return a.createElement(p.Va, {
                            key: e.label,
                            linkTo: t ? this.props.location : this.filterLink(e.filter),
                            selected: t
                        }, a.createElement(p.Ya, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            "data-test-selector": r.FilterText
                        }, e.label))
                    }, t.prototype.getFilters = function() {
                        var e = [{
                                label: Object(s.d)("All Videos", "VideoFilter2"),
                                filter: d.e.All
                            }, {
                                label: Object(s.d)("Past Broadcasts", "VideoFilter2"),
                                filter: d.e.PastBroadcasts
                            }, {
                                label: Object(s.d)("Clips", "VideoFilter2"),
                                filter: d.e.Clips
                            }, {
                                label: Object(s.d)("Collections", "VideoFilter2"),
                                filter: d.e.Collections
                            }, {
                                label: Object(s.d)("Highlights", "VideoFilter2"),
                                filter: d.e.Highlights
                            }],
                            t = null;
                        if (Object(u.a)()) t = Object(d.x)(this.props.location.search);
                        else {
                            var n = Object(d.w)(this.props.location.pathname);
                            t = n ? Object(d.A)(n) : null
                        }
                        return e.forEach(function(e) {
                            t || e.filter !== d.e.All ? t && t === e.filter && (e.selected = !0) : e.selected = !0
                        }), e
                    }, t.prototype.filterLink = function(e) {
                        var t;
                        return Object(u.a)() ? e ? Object(c.d)(this.props.location, ((t = {})[d.c] = e, t)) : Object(c.b)(this.props.location, d.c) : e ? Object(c.c)(this.props.location, "/" + this.props.channelLogin + "/" + Object(d.z)(e)) : Object(c.c)(this.props.location, "/" + this.props.channelLogin + "/" + Object(d.o)())
                    }, t
                }(a.Component),
                h = Object(o.a)(m)
        },
        cMjZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("o4DC");

            function i(e) {
                return e && Object(r.c)(e) || ""
            }
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, i, a = n("mrSG"),
                o = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                m = n("geRD"),
                h = n("O3Y9"),
                g = n("f00E"),
                b = n("D7An"),
                v = n("DMoW"),
                f = n("2xye"),
                k = n("GnwI"),
                y = n("QVaV"),
                C = n("Ue10"),
                S = (n("MPK0"), "report-wizard-block"),
                w = "report-wizard-unblock",
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": S
                            }, o.createElement(C.Ya, {
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, o.createElement(C.tb, {
                                type: C.vb.Brand,
                                asset: C.ub.Ban
                            }), o.createElement(C.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(C.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, o.createElement(C.tb, {
                                type: C.vb.Success,
                                asset: C.ub.FollowCheck
                            }), o.createElement(C.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(C.W, {
                                className: "block-user__success",
                                type: C.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), o.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": w
                            }, o.createElement(C.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
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
                            t = Object(y.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(C.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(C.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(C.Fb, {
                            color: C.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(C.fc, {
                            baseFontSize: C.Ca.Size6
                        }, o.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(C.Ya, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(i || (i = {}));
            var _, O = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                E = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: i.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: i.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: i.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: i.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: i.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: i.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: i.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: i.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: i.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: i.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: i.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: i.Link
                    },
                    messaging_general: {
                        getTitle: O.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: O.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: r.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: O.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: r.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: r.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: v.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: r.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: O.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: O.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                i = n.value;
                            t.props.onChangeText(r, i)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(C.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(C.Ya, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(C.Ea, {
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
                                case i.Text:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case i.Link:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(C.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(C.Ya, {
                                        display: C.X.Flex
                                    }, o.createElement(C.Ya, {
                                        display: C.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(C.tb, {
                                        asset: C.ub.Document
                                    })), t.getTitle())));
                                case i.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        a = t.required && (!r || !!r && 0 === r.trim().length);
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(C.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(C.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && a,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case i.MultipleChoice:
                                default:
                                    return o.createElement(C.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(C.qb, {
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
                M = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(_ || (_ = {}));
            var N, j, x, D = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                U = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                I = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: U.thanks,
                    type: _.Info,
                    value: "end card"
                },
                F = {
                    socialMedia: a.__assign({}, I, {
                        items: [E.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, I, {
                        items: [E.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [E.endLink_DMCA, E.endLink_trademark, E.endLink_devAgreement],
                        type: _.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [E.endLink_selfharm],
                        type: _.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: U.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [E.endLink_eventCoC],
                        value: "twitch event end",
                        type: _.Info
                    }
                },
                L = {
                    getTitle: U.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [E.video, E.whisper, E.chat, E.room, E.profile, E.username, E.report_other],
                    type: _.MultipleChoice,
                    value: "content type"
                },
                W = {
                    identifyUser: {
                        getTitle: U.reportVideo,
                        getLabel: D.identifyUser,
                        items: [E.video_streamer, E.video_someoneElse, E.video_chatSomeone],
                        type: _.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: U.reportVideo,
                        getLabel: D.contentGeneral,
                        items: [E.revealPersonalInfo, E.video_labeling, E.video_inactive, E.video_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: _.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: U.reportVideo,
                        getLabel: D.content,
                        items: [E.report_username, E.violence, E.abusive, E.cheating, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: _.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                A = {
                    content: {
                        getTitle: U.reportMessage,
                        getLabel: D.contentGeneral,
                        items: [E.revealPersonalInfo, E.evasion, E.spam, E.maliciousRaid, E.report_username, E.messaging_general, E.selfharm],
                        type: _.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: U.reportMessage,
                        getLabel: D.content,
                        items: [E.report_emotes, E.violence, E.abusive, E.inappropriateContent, E.impersonation, E.underage, E.bitsViolation],
                        type: _.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = a.__assign({}, A.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                z = {
                    content: {
                        getTitle: U.reportProfile,
                        getLabel: D.contentGeneral,
                        items: [E.revealPersonalInfo, E.inappropriateBadge, E.inappropriateExtension, E.noModeration, E.profile_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: _.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: U.reportProfile,
                        getLabel: D.content,
                        items: [E.report_username, E.violence, E.abusive, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: _.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                V = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.identifyUser,
                    items: [E.report_channelOwner, E.report_member],
                    value: "room report user",
                    type: _.MultipleChoice
                },
                P = {
                    getTitle: U.tellUsMore,
                    items: [E.input_description],
                    type: _.Confirm,
                    value: "tell us more"
                },
                Y = {
                    banEvasion: a.__assign({}, P, {
                        items: [E.input_usernames, E.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, P, {
                        items: [E.input_link, E.input_connection, E.input_description],
                        nextCard: F.socialMedia,
                        value: "social media tell us more"
                    })
                },
                G = {
                    content: {
                        getTitle: U.reportAbusive,
                        getLabel: D.relevantStatements,
                        items: [E.hateSpeech, E.harassment, E.abusiveViolence, E.commitingViolence, E.swatting, E.personalInfo],
                        type: _.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [E.threat_me, E.threat_person, E.threat_group, E.threat_selfharm],
                        type: _.MultipleChoice,
                        value: "violence type"
                    }
                },
                q = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [E.location_onTwitch, E.location_anotherSite, E.location_TwitchEvent],
                        type: _.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: D.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [E.external_incitingRaids, E.external_threatening, E.external_harassment],
                        type: _.MultipleChoice,
                        nextCard: Y.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, G.violence, {
                        items: [E.threat_me, E.threat_person, E.threat_group],
                        nextCard: Y.socialMedia
                    }),
                    external_abusive: a.__assign({}, G.content, {
                        items: [E.hateSpeech, E.harassment, E.external_abusiveViolence, E.external_commitingViolence, E.swatting, E.personalInfo],
                        nextCard: Y.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.contentGeneral,
                    items: [E.spam_bot, E.spam_scam, E.spam_repeated],
                    type: _.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.relevantStatements,
                    items: [E.inappropriate_game, E.gory, E.sexuallyViolent, E.childAnimal, E.pornographic, E.suggestive, E.nudity, E.other],
                    type: _.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [E.evasion_chat, E.evasion_sitewide, E.evasion_messaging],
                    type: _.MultipleChoice,
                    nextCard: Y.banEvasion
                },
                $ = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [E.impersonation_me, E.impersonation_brand, E.impersonation_other],
                    type: _.MultipleChoice,
                    value: "impersonation type"
                },
                K = L,
                J = P,
                Z = I,
                ee = {
                    video: W.identifyUser,
                    whisper: B,
                    chat: A.content,
                    profile: z.content,
                    room: V,
                    "somewhere else": q.identifyLocation,
                    streamer: W.content,
                    "someone else in video": W.content,
                    "someone in chat": A.content,
                    general_video: W.general,
                    general_messaging: A.general,
                    general_profile: z.general,
                    "channel owner": z.content,
                    "community member": A.content,
                    "on twitch": z.content,
                    "another site": q.externalSite,
                    "twitch event": F.twitchEvent,
                    "brigading/raids": Y.socialMedia,
                    threatening: q.external_violence,
                    "hateful/harassing": q.external_abusive,
                    "external site; threatening violence": q.external_violence,
                    "external site; committing violence": q.external_violence,
                    "external site; scam": Y.socialMedia,
                    "ban evasion": Q,
                    spam: H,
                    hateful: G.content,
                    impersonation: $,
                    "violence/threats": G.violence,
                    "threatening violence": G.violence,
                    "committing violence": G.violence,
                    abusive: G.content,
                    "inappropriate content": X,
                    "intellectual property": F.legal,
                    "violating developer agreement": F.legal
                },
                te = {
                    selfharm: F.selfharm,
                    harm: F.violence,
                    other: Z
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: z.content,
                    COMMUNITY_REPORT: z.content,
                    CHAT_REPORT: A.content,
                    CLIP_REPORT: W.content,
                    EVENT_REPORT: z.content,
                    EXTENSION_REPORT: z.content,
                    LIVE_UP_REPORT: z.content,
                    ROOM_REPORT: V,
                    WHISPER_REPORT: B,
                    VOD_COMMENT_REPORT: A.content
                },
                re = "report-wizard-back",
                ie = "report-wizard-close",
                ae = "report-wizard-next",
                oe = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || K,
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
                            return o.createElement(C.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(C.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ie,
                                i = !1,
                                a = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case _.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = ae, i = !t.state.currentSelection;
                                    break;
                                case _.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, i = !t.state.userTextInput, r = oe
                            }
                            return o.createElement(C.Ya, null, a, o.createElement(C.z, {
                                onClick: n,
                                disabled: i,
                                "data-test-selector": r
                            }, o.createElement(C.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(C.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: C.X.InlineBlock
                            }, o.createElement(C.z, {
                                type: C.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": re
                            }, o.createElement(C.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(x.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    i = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    a = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    o = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || J;
                                ee[t.state.currentSelection.value] && (s = ee[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === _.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: a,
                                    currentSelection: i || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: o
                                }, function() {
                                    return t.trackNavigation(j.Next, e.value)
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
                                if (e.type !== i.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case M.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case M.a.Success:
                                                    r = Z, te[t] && (r = te[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(j.Submit)
                                                    });
                                                    break;
                                                case M.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case M.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(M.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, i, o = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return o.trackNavigation(j.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(x.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === _.Info && this.state.currentCard.blockPrompt ? o.createElement(T, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(C.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === _.Info ? null : this.renderPrimer();
                        return o.createElement(C.Fb, {
                            className: "reporting-wizard",
                            display: C.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: C.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(C.W, {
                            bold: !0,
                            fontSize: C.Ca.Size4
                        }, this.getTitle()), n, o.createElement(C.Ya, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(R, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === M.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return j
                }), n.d(t, "a", function() {
                    return x
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(N || (N = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(j || (j = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(x || (x = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, i, o, s, l = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = r === v.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, i = v.N[n], null === (o = {
                                                description: t,
                                                reason: e,
                                                content: i,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: M.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: M.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(N.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = a.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: M.a.MutationError
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
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(j.Open, void 0, e) : n.trackAction(N.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(j.Close, t, void 0, e) : n.trackAction(N.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, i) {
                        c.p.tracking.track(f.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: i,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(f.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(g.a)();
                    var r = c.p.experiments.getAssignment(b.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: M.a.Unsubmitted,
                        showWizard: "yes" === r,
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
                    if (this.props.data.error) return o.createElement(C.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(C.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(C.ab, null) : o.createElement(se, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(M.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(C.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
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
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(k.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
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
        "gY/c": function(e, t, n) {},
        iS14: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("8jSG"),
                o = n("cMjZ"),
                s = n("zixI");

            function l() {
                var e = this;
                return Object(i.a)(s, {
                    props: function(t) {
                        return {
                            unblockUserMutation: function(n, i) {
                                return r.__awaiter(e, void 0, void 0, function() {
                                    return r.__generator(this, function(e) {
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
                                                            id: Object(o.a)(i),
                                                            fragment: a
                                                        });
                                                        t && (t.blockedUsers = t.blockedUsers.filter(function(e) {
                                                            return null !== e && e.id !== n
                                                        }), e.writeFragment({
                                                            id: Object(o.a)(i),
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
        iyGE: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("yR8l"),
                a = n("Pub/"),
                o = n("HzXE"),
                s = 60,
                l = 60 * s,
                c = 24 * l,
                d = 7 * c,
                u = 4 * d;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(i.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(i, p, m) {
                                return void 0 === p && (p = null), void 0 === m && (m = null), r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                h.label = 1;
                                            case 1:
                                                return h.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: i,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var r = Math.floor(t / u);
                                                                    t -= r * u, n += r + "mo"
                                                                }
                                                                if (t > d) {
                                                                    var i = Math.floor(t / d);
                                                                    t -= i * d, n += i + "w"
                                                                }
                                                                if (t > c) {
                                                                    var a = Math.floor(t / c);
                                                                    t -= a * c, n += a + "d"
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
                                                                var i = Object(a.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!i) return;
                                                                e.writeQuery({
                                                                    query: o,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: r.__assign({}, i, {
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
        jeZI: function(e, t, n) {},
        jsEL: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
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
                c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderSuccess = function() {
                            return t.props.successContent ? i.createElement(s.Fb, {
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
                            }, i.createElement(s.W, {
                                type: s.Wb.Strong
                            }, t.props.successContent)) : null
                        }, t.renderError = function() {
                            return t.props.errorContent ? i.createElement(s.Fb, {
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
                            }, i.createElement(s.W, {
                                type: s.Wb.Strong,
                                color: s.O.Error
                            }, t.props.errorContent)) : null
                        }, t.onSubmit = function() {
                            t.props.onSubmit()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.successContent ? i.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.Fb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, this.renderSuccess(), i.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center
                        }, i.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            onClick: this.props.onClose
                        }, Object(a.d)("Close", "ClipsModal")))))) : i.createElement(o.a, {
                            onClickOut: this.props.onClose
                        }, i.createElement(s.Fb, {
                            padding: 2,
                            background: s.r.Base,
                            className: "clip-modal"
                        }, i.createElement(s.Fb, {
                            "data-test-selector": l.TITLE,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 1
                            }
                        }, this.props.title), i.createElement(s.Fb, {
                            "data-test-selector": l.MAIN_BODY,
                            borderBottom: !0,
                            margin: {
                                bottom: 2
                            },
                            padding: {
                                bottom: 2
                            }
                        }, this.renderError(), this.props.body), i.createElement(s.Ya, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center
                        }, i.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.CANCEL_BUTTON,
                            type: s.F.Text,
                            onClick: this.props.onClose
                        }, Object(a.d)("Cancel", "ClipsModal"))), i.createElement(s.Ya, {
                            margin: {
                                x: 1
                            }
                        }, i.createElement(s.z, {
                            "data-test-selector": l.SUBMIT_BUTTON,
                            type: this.props.buttonType ? this.props.buttonType : s.F.Default,
                            onClick: this.onSubmit,
                            disabled: this.props.submitDisabled
                        }, this.props.buttonContent), this.props.isLoading && i.createElement(s.ab, {
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
                                type: s.Wb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : i.createElement(s.W, {
                                type: s.Wb.H5,
                                ellipsis: !0
                            }, Object(a.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                        }, t.renderBodyText = function() {
                            return t.props.isTemporary ? i.createElement(s.W, null, Object(a.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser")) : i.createElement(s.W, null, Object(a.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                                clipCreator: t.props.targetUser.displayName
                            }, "ClipsModalBanUser"))
                        }, t.renderButtonText = function() {
                            return t.props.isTemporary ? Object(a.d)("Timeout User", "ClipsModalBanUser") : Object(a.d)("Ban User", "ClipsModalBanUser")
                        }, t.renderSuccess = function() {
                            return t.state.hasSucceeded ? Object(a.d)("Success!", "ClipsModalBanUser") : null
                        }, t.renderFailure = function() {
                            return t.state.hasErrored ? t.props.isTemporary ? Object(a.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(a.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                        }, t.banUser = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            this.setState({
                                                isLoading: !0,
                                                hasSucceeded: !1,
                                                hasErrored: !1
                                            }), e = this.props.targetUser.login, t = this.props.isTemporary ? this.props.banUserMutation(e, p) : this.props.banUserMutation(e), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, t];
                                        case 2:
                                            return !(n = r.sent().banUserFromChatRoom) || n.error ? this.setState({
                                                hasErrored: !0,
                                                isLoading: !1
                                            }) : this.setState({
                                                hasSucceeded: !0,
                                                isLoading: !1
                                            }), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                h = Object(u.b)("ClipsModalBanUser")(Object(d.a)(function(e) {
                    return {
                        channelID: e.broadcasterID
                    }
                })(m)),
                g = n("yR8l"),
                b = n("vUXZ");

            function v(e) {
                return Object(g.a)(b, e)
            }
            var f = n("DJtx"),
                k = (n("n9Ey"), {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                }),
                y = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onDeleteClick = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = [i.createElement(s.W, {
                            key: "title",
                            type: s.Wb.H4
                        }, Object(a.d)("Delete This Clip", "ClipsModalDelete")), i.createElement(s.Ya, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.W, {
                            type: s.Wb.P,
                            color: s.O.Alt2
                        }, Object(a.d)("This clip will be permanently deleted.", "ClipsModalDelete")))];
                        if (!this.props.data.clip) return null;
                        var t = null;
                        this.props.data.clip.curator && this.props.data.clip.curator.login && (t = i.createElement("span", null, " • ", Object(a.d)("Clipped by {curator}", {
                            curator: this.props.data.clip.curator.login
                        }, "ClipsModalDelete")));
                        var n = i.createElement(s.Fb, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Ya, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, i.createElement(s.o, {
                            ratio: s.p.Aspect16x9
                        }, i.createElement("img", {
                            src: this.props.data.clip.thumbnailURL
                        }))), i.createElement(s.Ya, null, i.createElement(s.W, {
                            type: s.Wb.H5
                        }, this.props.data.clip.title), i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{created, date, medium}", {
                            created: new Date(this.props.data.clip.createdAt)
                        }, "ClipsModalDelete"), t), i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(a.d)("{viewCount, number} views", {
                            viewCount: this.props.data.clip.viewCount
                        }, "ClipsModalDelete"))));
                        return i.createElement(c, {
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
                }(i.Component),
                C = Object(g.a)(f)(v({
                    props: function(e) {
                        return {
                            deleteClip: function(t) {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var n;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]), [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            slugs: [t]
                                                        }
                                                    }
                                                })];
                                            case 1:
                                                return r.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                            case 2:
                                                throw n = r.sent(), a.k.error(n, "Failed to delete clip"), n;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                })(y)),
                S = n("oJmH"),
                w = n("Vsf8"),
                T = {
                    isLoading: !1,
                    hasErrored: !1,
                    hasSucceeded: !1
                },
                _ = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.deleteAll = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                        }, n.state = T, n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = i.createElement(s.W, {
                            type: s.Wb.P
                        }, Object(a.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                        return i.createElement(c, {
                            onSubmit: this.deleteAll,
                            onClose: this.props.onClose,
                            title: i.createElement(s.W, {
                                type: s.Wb.H4
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
                }(i.Component),
                O = Object(S.compose)(Object(u.b)("ClipsModalDeleteAll"), v({
                    props: function(e) {
                        return {
                            deleteAllClips: function(t, n) {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var i, o, s;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            videoID: n
                                                        }
                                                    }
                                                })] : [3, 2];
                                            case 1:
                                                return o = r.sent(), i = o.data, [3, 5];
                                            case 2:
                                                return t ? [4, e.mutate({
                                                    variables: {
                                                        input: {
                                                            broadcastID: t
                                                        }
                                                    }
                                                })] : [3, 4];
                                            case 3:
                                                return o = r.sent(), i = o.data, [3, 5];
                                            case 4:
                                                throw new Error("Invalid broadcastID specified for deleteAllClips");
                                            case 5:
                                                return e.ownProps.onDeleteAll && i.deleteClips && i.deleteClips.clips && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                            case 6:
                                                throw s = r.sent(), a.k.error(s, "Failed to delete clips from VOD"), s;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }
                        }
                    }
                }), Object(g.a)(w, {
                    props: function(e) {
                        var t = e.data.clip;
                        return t ? {
                            videoID: t.video ? t.video.id : null,
                            broadcastID: t.broadcast && t.broadcast.id || ""
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
                E = {
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
                            return r.__awaiter(n, void 0, void 0, function() {
                                return r.__generator(this, function(e) {
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
                        }, n.state = E, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = i.createElement(s.W, {
                                type: s.Wb.H4
                            }, Object(a.d)("Delete these clips?", "ClipsModalBatchDelete")),
                            t = i.createElement(s.W, {
                                type: s.Wb.P
                            }, Object(a.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                        return i.createElement(c, {
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
                }(i.Component),
                M = v({
                    props: function(e) {
                        return {
                            deleteClips: function() {
                                return r.__awaiter(void 0, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(n) {
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
                return c
            }), n.d(t, "b", function() {
                return h
            }), n.d(t, "d", function() {
                return C
            }), n.d(t, "e", function() {
                return O
            }), n.d(t, "c", function() {
                return M
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
        "n/Dx": function(e, t, n) {},
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
        r62z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var r = n("+GjP"),
                i = "https://www.facebook.com/sharer/sharer.php",
                a = "https://www.twitter.com/share",
                o = "https://www.reddit.com/submit",
                s = "https://vk.com/share.php";

            function l(e) {
                return Object(r.e)(i, {
                    u: e
                })
            }

            function c(e, t) {
                return Object(r.e)(a, {
                    url: e,
                    text: t
                })
            }

            function d(e, t) {
                return Object(r.e)(o, {
                    url: e,
                    title: t
                })
            }

            function u(e) {
                return Object(r.e)(s, {
                    url: e
                })
            }
        },
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
        sLlB: function(e, t, n) {
            "use strict";
            var r, i = n("/MKj"),
                a = n("fvjX"),
                o = n("5xw2"),
                s = n("OhOW"),
                l = n("mrSG"),
                c = n("q1tI"),
                d = n("wIs1"),
                u = n("/7QA"),
                p = n("vSJR"),
                m = n("8/mp"),
                h = n("HSqT"),
                g = n("2xye"),
                b = n("GnwI"),
                v = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(r || (r = {}));
            var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                r = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            r && (t.props.updateLanguagePreferences(r, n.checked), t.trackLanguageChange(r, n.checked))
                        }, t.renderDropdownContent = function() {
                            return c.createElement(c.Fragment, null, c.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, c.createElement(m.b, null, c.createElement(v.Ya, {
                                padding: .5
                            }, Object(h.b)().map(t.renderLanguageOption)))), c.createElement(v.Fb, {
                                background: v.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, c.createElement(v.z, {
                                type: v.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": r.ClearAllButton
                            }, Object(u.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return c.createElement(v.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, c.createElement(v.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(u.d)("Language", "LanguageSelectMenu");
                            return c.createElement(v.Ya, {
                                display: v.X.Flex
                            }, n, c.createElement(v.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && c.createElement(v.hb, {
                                type: v.ib.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var r = "";
                            t.props.match && t.props.match.params && (r = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), u.p.tracking.track(g.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: r || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return c.createElement(v.Ya, {
                            className: "language-select-menu"
                        }, c.createElement(p.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(c.Component),
                k = Object(a.compose)(d.a, Object(b.b)("LanguageSelectMenu"))(f);
            var y = Object(i.connect)(function(e) {
                return {
                    languagePreferences: Object(s.a)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
                }, e)
            })(k);
            n.d(t, "a", function() {
                return y
            })
        },
        uX80: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("fvjX"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = (n("TVuH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectOnFocus = function(e) {
                            e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(s.Ya, r.__assign({
                            position: s.kb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.kc)(this.props)), i.createElement(s.Sa, {
                            type: s.Ua.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(i.Component)),
                c = Object(a.compose)(Object(o.b)("SelectableInput"))(l)
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
        vhpE: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return m
            }), n.d(t, "a", function() {
                return h
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("wbMx"),
                s = n("+GjP"),
                l = n("2xye"),
                c = n("MLDe"),
                d = n("McYG"),
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
            }(r || (r = {}));
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = {
                            margin: {
                                right: 1
                            }
                        },
                        t = {};
                    return this.props.asBalloon && (t = {
                        justifyContent: p.Xa.Between
                    }, e = {}), a.createElement(p.Ya, i.__assign({
                        className: "clips-social-share",
                        display: p.X.Flex,
                        flexWrap: p.Ba.NoWrap
                    }, t, {
                        "data-test-selector": r.MainContainer
                    }), a.createElement(p.Ya, i.__assign({
                        display: p.X.InlineBlock
                    }, e, {
                        "data-test-selector": r.DownloadButtonContainer
                    }), a.createElement(u.a, {
                        broadcasterLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                        broadcasterId: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                        slug: this.props.clip.slug,
                        pageType: this.props.pageType
                    })), this.renderSocialButton(e, r.ShareButtonTwitter, o.b.Twitter, {
                        tt_medium: "twtr"
                    }), this.renderSocialButton(e, r.ShareButtonFacebook, o.b.Facebook, {
                        tt_medium: "fb"
                    }), this.renderSocialButton(e, r.ShareButtonReddit, o.b.Reddit, {
                        tt_medium: "redt"
                    }), this.renderSocialButton(e, r.ShareButtonCopy, o.b.Copy))
                }, t.prototype.renderSocialButton = function(e, t, n, r) {
                    var u = Object(s.e)(this.props.clip.url, r);
                    return this.props.pageType === l.PageviewLocation.ClipsWatchPage && this.props.clip.broadcaster && this.props.clip.broadcaster.login && (u = Object(s.e)(Object(d.a)(this.props.clip.slug, this.props.clip.broadcaster.login), r)), a.createElement(p.Ya, i.__assign({
                        key: n
                    }, e, {
                        "data-test-selector": t
                    }), a.createElement(o.a, {
                        key: n,
                        type: n,
                        text: this.props.clip.title,
                        url: u,
                        onShareClick: Object(c.c)(this.props.clip.id, this.props.clip.game && this.props.clip.game.name, this.props.clip.broadcaster && this.props.clip.broadcaster.id, this.props.clip.broadcaster && this.props.clip.broadcaster.login, this.props.pageType)
                    }))
                }, t
            }(a.Component)
        },
        wC0O: function(e, t, n) {},
        wbMx: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return d
            });
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("Jxh/"),
                l = n("r62z"),
                c = n("Ue10");
            n("jeZI");
            ! function(e) {
                e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput", e[e.Download = 6] = "Download"
            }(r || (r = {}));
            var d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderLink = function() {
                        var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                        return n.props.type === r.Download ? a.createElement("a", i.__assign({
                            href: n.props.url,
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.kc)(n.props), {
                            download: n.props.text
                        }), n.renderIcon()) : n.isLink() ? a.createElement("a", i.__assign({
                            href: n.getLinkTarget(),
                            target: "_blank",
                            className: e,
                            onClick: n.onShareClickHandler
                        }, Object(c.kc)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                            onClick: n.copyPageUrl,
                            onMouseLeave: n.clearIsCopiedStatus,
                            className: e
                        }, Object(c.kc)(n.props)), n.renderIcon())
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
                        return a.createElement(c.Ya, {
                            className: "social-button__icon " + n.addSocialClassModifier("social-button__icon"),
                            display: c.X.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Xa.Center
                        }, a.createElement(c.tb, {
                            asset: e
                        }))
                    }, n.isLink = function() {
                        return n.props.type !== r.Copy
                    }, n.getTooltipFromType = function() {
                        switch (n.props.type) {
                            case r.Twitter:
                                return "Twitter";
                            case r.Reddit:
                                return "Reddit";
                            case r.Facebook:
                                return "Facebook";
                            case r.VKontakte:
                                return "VKontakte";
                            case r.Download:
                                return Object(o.d)("Download", "SocialButton");
                            case r.Copy:
                                return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                            default:
                                return ""
                        }
                    }, n.getAssetFromType = function() {
                        switch (n.props.type) {
                            case r.Twitter:
                                return c.ub.Twitter;
                            case r.Facebook:
                                return c.ub.Facebook;
                            case r.VKontakte:
                                return c.ub.VKontakte;
                            case r.Reddit:
                                return c.ub.Reddit;
                            case r.Download:
                                return c.ub.Download;
                            case r.Copy:
                            default:
                                return c.ub.Copy
                        }
                    }, n.addSocialClassModifier = function(e) {
                        switch (n.props.type) {
                            case r.Twitter:
                                return e + "--twitter";
                            case r.Reddit:
                                return e + "--reddit";
                            case r.Facebook:
                                return e + "--facebook";
                            case r.VKontakte:
                                return e + "--vkontakte";
                            case r.Download:
                                return e + "--download";
                            case r.Copy:
                                return e + "--copy";
                            default:
                                return ""
                        }
                    }, n.getLinkTarget = function() {
                        var e = n.props,
                            t = e.text,
                            i = e.type,
                            a = n.getUrl(),
                            o = t || "";
                        switch (i) {
                            case r.Reddit:
                                return Object(l.b)(a, o);
                            case r.VKontakte:
                                return Object(l.d)(a);
                            case r.Facebook:
                                return Object(l.a)(a);
                            case r.Twitter:
                                return Object(l.c)(a, o);
                            default:
                                return ""
                        }
                    }, n.state = {
                        isCopied: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.Ya, {
                        className: "social-button"
                    }, a.createElement(c.Zb, {
                        label: this.getTooltipFromType(),
                        direction: c.bc.Bottom
                    }, this.renderLink()))
                }, t
            }(a.Component)
        },
        y4Ne: function(e, t, n) {},
        ygyh: function(e, t, n) {},
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