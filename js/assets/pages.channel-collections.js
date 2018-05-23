webpackJsonp([59], {
    "+t2Q": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionsPage_UserAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ownerLogin"
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
                                    value: "ownerLogin"
                                }
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
                                    value: "collections"
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
                                                            value: "title"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 365
            }
        };
        n.loc.source = {
            body: "query CollectionsPage_UserAndCurrentUser($ownerLogin: String! $limit: Int $cursor: Cursor) {\nuser(login: $ownerLogin) {\nid\nlogin\ndisplayName\ncollections(first: $limit after: $cursor) {\nedges {\ncursor\nnode {\nid\ntitle\nitems(first: 1) {\ntotalCount\n}\nviewCount\nthumbnailURL(width: 320 height: 180)\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1E7T": function(e, t) {},
    B9Px: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("jXn2"),
            o = n("9u8h"),
            s = n("Aj/L"),
            l = n("O8Ns"),
            c = n("dL0Y");

        function d(e) {
            return function(t, n) {
                return e({
                    store: {
                        dispatch: t,
                        getState: n
                    }
                })
            }
        }
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return p
        }), n.d(t, "c", function() {
            return h
        }), t.e = function(e, t) {
            var n = this;
            return d(function(r) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, s, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 3, , 4]), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                            case 1:
                                return n = i.sent(), r.store.dispatch({
                                    type: u,
                                    collections: Object(l.c)(n.body)
                                }), [4, o.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.a.Video + ":" + t)];
                            case 2:
                                return s = i.sent(), r.store.dispatch({
                                    type: p,
                                    containingCollections: Object(l.c)(s.body),
                                    videoID: t
                                }), [3, 4];
                            case 3:
                                return c = i.sent(), a.j.error(c, "Failed to fetch collections"), r.store.dispatch({
                                    type: h,
                                    errorType: "Fetch Failed",
                                    errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            })
        }, t.d = function(e, t, n) {
            var o = this;
            return d(function(c) {
                return i.__awaiter(o, void 0, void 0, function() {
                    var o, d, h, g, f, b, _, k;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                o = c.store.getState(), d = o.collections, h = Object(s.c)(o), g = h ? h.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), [4, v("/v5/channels/" + e + "/collections/", {
                                    title: t
                                })];
                            case 2:
                                return f = i.sent(), b = Object(l.b)(f.body), d.collections = [b].concat(d.collections), c.store.dispatch({
                                    type: u,
                                    collections: d.collections
                                }), Object(r.b)({
                                    channelID: e,
                                    playlistID: b.id,
                                    userID: g,
                                    title: b.title
                                }), _ = {
                                    type: l.a.Video,
                                    id: n
                                }, [4, v("/v5/collections/" + b.id + "/items", _)];
                            case 3:
                                return i.sent(), d.containingCollections = [b].concat(d.containingCollections), c.store.dispatch({
                                    type: p,
                                    containingCollections: d.containingCollections,
                                    videoID: n
                                }), Object(r.a)({
                                    channelID: e,
                                    itemID: n,
                                    itemPosition: -1,
                                    itemType: l.a.Video,
                                    playlistID: b.id,
                                    userID: g
                                }), [3, 5];
                            case 4:
                                return k = i.sent(), a.j.error(k, "Failed to add new collection with video"), c.store.dispatch({
                                    type: m,
                                    errorType: "Create Failed",
                                    errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                }), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })
            })
        }, t.f = function(e, t, n) {
            var u = this;
            return d(function(d) {
                return i.__awaiter(u, void 0, void 0, function() {
                    var u, h, m, f, b, _, k, y, S;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                u = d.store.getState(), h = Object(c.a)(u), m = Object(s.c)(u), f = m ? m.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 6, , 7]), h.map(function(e) {
                                    return e.id
                                }).includes(e.id) ? (b = JSON.stringify({
                                    type: l.a.Video,
                                    id: t
                                }), _ = btoa(b), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + _)]) : [3, 3];
                            case 2:
                                return i.sent(), y = h.filter(function(t) {
                                    return t.id !== e.id
                                }), d.store.dispatch({
                                    type: p,
                                    containingCollections: y,
                                    videoID: t
                                }), Object(r.c)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: l.a.Video,
                                    playlistID: e.id,
                                    userID: f
                                }), [3, 5];
                            case 3:
                                return k = {
                                    type: l.a.Video,
                                    id: t
                                }, [4, v("/v5/collections/" + e.id + "/items", k)];
                            case 4:
                                i.sent(), y = h.concat([e]), d.store.dispatch({
                                    type: p,
                                    containingCollections: y,
                                    videoID: t
                                }), Object(r.a)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: l.a.Video,
                                    playlistID: e.id,
                                    userID: f
                                }), i.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                return S = i.sent(), a.j.error(S, "Failed to fetch collections"), d.store.dispatch({
                                    type: g,
                                    errorType: "Update Failed",
                                    errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                }), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            })
        };
        var u = "collections.COLLECTIONS_FETCHED",
            p = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
            h = "collections.COLLECTIONS_FETCH_FAILED",
            m = "collections.COLLECTIONS_CREATE_FAILED",
            g = "collections.COLLECTIONS_UPDATE_FAILED";
        var v = function(e, t) {
            return o.a.postOrThrow(e, {
                body: t
            })
        }
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return m
        }), n.d(t, "a", function() {
            return v
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("KSGD")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("5kgt"),
            c = n("SI0h"),
            d = n("eXld"),
            u = n("2aoH"),
            p = n("Odds"),
            h = n("1E7T"),
            m = (n.n(h), "channel-page-layout__scroll-area--theatre-mode"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = a(((e = {})[m] = !!this.props.theatreMode, e));
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
                    scrollToTop: r.func
                }, t
            }(o.Component),
            v = Object(s.f)(g)
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
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    LdTg: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelCollectionsPage"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ownerLogin"
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
                                    value: "ownerLogin"
                                }
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
                end: 92
            }
        };
        n.loc.source = {
            body: "query ChannelCollectionsPage($ownerLogin: String!) {\nuser(login: $ownerLogin) {\nid\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    O8Ns: function(e, t, n) {
        "use strict";
        var i, a, r = function(e, t, n) {
            var i = e.collectionItems || [];
            return Boolean(i.find(function(e) {
                return e.ObjectType === n && e.id === t
            }))
        };
        ! function(e) {
            e.Public = "public"
        }(i || (i = {})),
        function(e) {
            e.Staff = "staff"
        }(a || (a = {}));
        var o, s = function(e) {
            return {
                __typename: "Collection",
                id: e._id,
                title: e.title,
                state: i.Public,
                thumbnailSrc: e.thumbnails && e.thumbnails.small,
                totalDuration: e.total_duration,
                itemsCount: e.items_count
            }
        };

        function l(e) {
            return e.collections.map(function(e) {
                return s(e)
            })
        }! function(e) {
            e.Video = "video"
        }(o || (o = {})), n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, !1, function() {
            return a
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "a", function() {
            return o
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
            c = function() {
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
            d = function() {
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
            p = n("OtmA"),
            h = null;

        function m() {
            if (h) return h;
            var e = p.register({
                scope: "/"
            });
            return h = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var g = n("JBcW"),
            v = n("TbkX");
        n.d(t, "a", function() {
            return b
        });
        var f = r.o.logger.withCategory("browser-push-notifications-manager"),
            b = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(u.a)() ? (f.debug("permissions have been denied. nothing to do here."), [2]) : [4, m()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(r.o.store.getState()), [4, this.hasPushSubscription()];
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    d.setEnabled(), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, this.subscribe()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), Object(u.a)() || f.warn(t, "user subscribe failed", {
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
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
                        var e, t, n, i, l, c;
                        return a.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(u.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(r.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = r.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, m()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
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
                                    }), [4, r.o.apollo.client.mutate(a.__assign({
                                        mutation: v
                                    }, c))];
                                case 5:
                                    return d.sent(), [2]
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
                                    return [4, m()];
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
    PelN: function(e, t) {},
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("V5M+"),
            s = n("TToO"),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("x49/"),
            u = n.n(d),
            p = n("Odds"),
            h = (n("ZUp+"), function(e) {
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
        var m = Object(a.b)(null, function(e) {
            return Object(r.b)({
                closeModal: o.c
            }, e)
        })(h);
        var g = Object(a.b)(null, function(e) {
            return Object(r.b)({
                showBrowserNotificationsUpsellModal: function() {
                    return Object(o.d)(m, {})
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
    TPVZ: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return D
        });
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("hdYS"),
            d = n("DtWM"),
            u = n("+Znq"),
            p = n("7vx8"),
            h = n("czpb"),
            m = n("MsZa"),
            g = n("OOv5"),
            v = n("LBNC"),
            f = n("UbVv"),
            b = n("JBcW"),
            _ = n("MN3T"),
            k = n("SLyH"),
            y = n("pC0g"),
            S = n("CSlQ"),
            C = n("70dR"),
            w = n("Odds"),
            E = n("z4Db"),
            N = (n.n(E), n("kOMe")),
            O = (n.n(N), "channel-header__edit-profile-overlay"),
            I = "channel-header__verified-badge",
            T = "channel-header__live-indicator",
            L = "TWILIGHT_BROWSER_NOTIFICATIONS_UPSELL",
            x = "yes",
            F = "browser-notifications-upsell-seen";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(i || (i = {}));
        var D = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.verifiedBadgeElement = o.createElement(w._52, {
                    label: Object(l.d)("Verified", "ChannelHeader"),
                    direction: w._54.Right
                }, o.createElement(w._8, {
                    className: "channel-header__verified",
                    "data-target": I,
                    display: w.R.Flex,
                    alignItems: w.c.Center,
                    margin: {
                        left: 1
                    }
                }, o.createElement(w._24, {
                    asset: w._25.Verified
                }))), n.ChannelStatusIndicatorElement = o.createElement(w._8, {
                    margin: {
                        left: 1
                    },
                    "data-target": T
                }, o.createElement(w._52, {
                    label: Object(l.d)("Live Now", "ChannelHeader"),
                    direction: w._54.Right
                }, o.createElement(w.G, {
                    status: w.I.Live,
                    pulse: !0
                }))), n.renderAvatarEditButton = function() {
                    return n.props.data && n.props.data.user && n.isChannelEditor() ? o.createElement(w._35, {
                        className: O,
                        background: w.n.Overlay,
                        position: w._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: w.R.InlineFlex,
                        alignItems: w.c.Center,
                        justifyContent: w._7.Center
                    }, o.createElement(y.a, {
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
                    return a.__awaiter(n, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return !l.l.get(F, !1) && Object(v.a)() && Object(f.c)() && l.o.experiments.getAssignment(L) === x ? [4, g.a.hasPushSubscription()] : [3, 3];
                                case 1:
                                    return e.sent() ? [3, 3] : (l.l.set(F, !0), this.props.showBrowserNotificationsUpsellModal(), [4, g.a.userSubscribe(b.a.Channel)]);
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
                var i = l.o.experiments.getAssignment("TWILIGHT_GET_BITS_TOP_NAV");
                return n.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1,
                    isGetBitsButtonTopNavExperimentEnabled: "treatment" === i
                }, n
            }
            return a.__extends(t, e), t.prototype.componentWillMount = function() {
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
                    a = 0,
                    p = 0,
                    h = l.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, a = this.props.data.user.followers.totalCount, p = this.props.data.user.follows.totalCount, h = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                var g = this.state.live && !this.isActiveTab(i.Channel),
                    v = this.createChannelLinks(n, a, p),
                    f = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(i.Channel)
                    },
                    b = null;
                this.canRenderBitsButton() && (b = o.createElement(w._8, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(m.a, {
                    channelLogin: this.props.channelLogin,
                    isInTopNav: !1
                })));
                var y, S = o.createElement(w._8, {
                        display: w.R.Flex,
                        flexWrap: w.U.NoWrap,
                        alignItems: w.c.Center,
                        flexShrink: 0
                    }, o.createElement(w._8, {
                        className: "channel-header__user-avatar channel-header__user-avatar--active",
                        margin: {
                            right: 1
                        },
                        display: w.R.Flex,
                        flexShrink: 0,
                        alignItems: w.c.Stretch
                    }, o.createElement(w._8, {
                        position: w._15.Relative
                    }, o.createElement(w.m, {
                        size: 36,
                        src: h,
                        alt: e || ""
                    }), this.renderAvatarEditButton())), e ? o.createElement(w.Q, {
                        type: w._49.H5
                    }, e) : o.createElement(w._8, {
                        alignItems: w.c.Center
                    }, o.createElement(w._14, {
                        lineCount: 1,
                        width: 120
                    })), g && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement),
                    E = o.createElement(w._8, {
                        className: "channel-header__follow-button",
                        display: w.R.Flex,
                        alignItems: w.c.Stretch,
                        margin: {
                            left: 1
                        }
                    }, o.createElement(c.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        isHostedFollow: !1,
                        channelLogin: this.props.channelLogin,
                        onFollow: this.maybeShowBrowserNotificationsUpsell,
                        followUIType: c.b.IconAndText,
                        unfollowUIType: c.b.IconOnly
                    })),
                    N = o.createElement(w._8, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(C.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        channelLogin: this.props.channelLogin,
                        hideEsportsSubscription: this.props.hideEsportsSubscription
                    }));
                y = this.isActiveTab(i.Channel) ? o.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, S) : this.props.data && this.props.data.user && this.props.data.user.login ? o.createElement(s.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, S) : S;
                var O = this.state.bannerHidden ? w.R.HideAccessible : w.R.Block,
                    I = Object(k.a)(),
                    T = null;
                return this.isActiveTab(i.Channel) && (T = o.createElement(w._8, {
                    display: O
                }, o.createElement(_.a, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), o.createElement(w._8, {
                    className: "channel-header",
                    flexShrink: 0
                }, T, o.createElement(w._8, {
                    display: w.R.Flex,
                    justifyContent: w._7.Between,
                    flexWrap: w.U.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, o.createElement(w._8, {
                    display: w.R.Flex,
                    alignItems: w.c.Stretch,
                    flexShrink: 0,
                    flexWrap: w.U.NoWrap,
                    "data-target": "channel-header-left"
                }, o.createElement(w._2, {
                    className: r(f),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Center,
                    flexShrink: 0
                }, y), this.renderTabs(v), o.createElement(w._8, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: w.d.Center,
                    "data-target": "channel-header-button"
                }, o.createElement(u.a, {
                    alwaysMountBalloonContent: !0
                }, o.createElement(w.w, {
                    icon: w._25.NavMore,
                    ariaLabel: Object(l.d)("More", "ChannelHeader")
                }), o.createElement(w.q, {
                    direction: w.r.Bottom,
                    noTail: !0
                }, o.createElement(w._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(v)))))), o.createElement(w._8, {
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    flexShrink: 0,
                    alignItems: w.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, !I && E, !I && N, b)), o.createElement(d.a, {
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
                return t ? Object(h.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? o.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(w.Q, {
                            type: w._49.Span,
                            fontSize: w.V.Size5
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.target = Object(h.b)() ? "_blank" : ""), o.createElement(w._2, {
                        key: "channel-header__item--" + e.label,
                        alignItems: w.c.Center,
                        flexShrink: 0
                    }, o.createElement(s.a, a.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, r, {
                        to: i,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), o.createElement(w._8, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: w.R.Flex
                    }, o.createElement(w.Q, {
                        type: w._49.Span,
                        fontSize: w.V.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? o.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(w.Q, {
                            type: w._49.Span
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), o.createElement(w._8, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, o.createElement(w._6, a.__assign({
                        linkTo: i,
                        disabled: "#" === i
                    }, r), o.createElement(w._8, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: w.R.Flex
                    }, o.createElement(w.Q, {
                        type: w._49.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(l.d)("Videos", "ChannelHeader"),
                    count: Object(l.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Videos)
                }, {
                    label: Object(l.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Clips)
                }, {
                    label: Object(l.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Collections)
                }, {
                    label: Object(l.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Events)
                }, {
                    label: Object(l.d)("Followers", "ChannelHeader"),
                    count: Object(l.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Followers)
                }, {
                    label: Object(l.d)("Following", "ChannelHeader"),
                    count: Object(l.e)(n),
                    pathSuffix: "following",
                    isExternal: !1,
                    isSelected: this.isActiveTab(i.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return i[this.props.currentPage] === i[e]
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
                        var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (c) {
                            var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            c.classList.toggle("channel-header__item--hide", d)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== i.Clips && this.props.data.user && this.props.data.user.cheer && !1 === this.state.isGetBitsButtonTopNavExperimentEnabled
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(p.a)(N, {
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
            }), Object(S.d)("ChannelHeader")], t)
        }(o.Component)
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
    "ZUp+": function(e, t) {},
    bKut: function(e, t, n) {
        "use strict";
        n("dL0Y")
    },
    dL0Y: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.collections.containingCollections
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("B9Px");
        a.o.store.registerReducer("collections", function(e, t) {
            switch (void 0 === e && (e = {
                collections: [],
                videoID: "",
                containingCollections: [],
                errors: {}
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        collections: t.collections
                    });
                case r.b:
                    return i.__assign({}, e, {
                        videoID: t.videoID,
                        containingCollections: t.containingCollections
                    });
                case r.c:
                    return i.__assign({}, e, {
                        errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                    });
                default:
                    return e
            }
            var n
        })
    },
    jXn2: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            i.n.track(a.SpadeEventType.CollectionCreate, {
                channel_id: e.channelID,
                playlist_id: e.playlistID,
                user_id: e.userID,
                title: e.title
            })
        }, t.a = function(e) {
            i.n.track(a.SpadeEventType.CollectionAddItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        }, t.c = function(e) {
            i.n.track(a.SpadeEventType.CollectionRemoveItem, {
                channel_id: e.channelID,
                item_id: e.itemID,
                item_position: e.itemPosition,
                item_type: e.itemType,
                playlist_id: e.playlistID,
                user_id: e.userID
            })
        };
        var i = n("6sO2"),
            a = n("vH/s")
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
    kk4f: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("Aj/L"),
            o = n("B9Px"),
            s = (n("bKut"), n("TToO")),
            l = n("GiK3"),
            c = n("6sO2"),
            d = n("mi6k"),
            u = n("CSlQ"),
            p = n("Odds"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeHandler = function() {
                        return t.props.onSelected(t.props.collection)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(p._8, {
                        display: p.R.Flex
                    }, l.createElement(p._8, {
                        padding: 2
                    }, l.createElement(p.J, {
                        label: "",
                        onChange: this.onChangeHandler,
                        checked: this.props.videoIsInCollection
                    })), l.createElement(p._8, {
                        padding: 1
                    }, l.createElement(p.E, {
                        aspect: p.l.Aspect16x9,
                        alt: this.props.collection.title,
                        src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        size: p.F.Size8
                    })), l.createElement(p._8, {
                        padding: 1,
                        display: p.R.Flex,
                        flexDirection: p.T.Column
                    }, l.createElement(p._8, null, l.createElement(p.Q, {
                        ellipsis: !0
                    }, this.props.collection.title)), l.createElement(p._8, {
                        display: p.R.Flex
                    }, l.createElement(p._8, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(p.Q, null, Object(c.d)("{videoCount} video", {
                        videoCount: this.props.collection.itemsCount
                    }, "CollectionRowPresentation"))), l.createElement(p._8, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(p.Q, null, "·")), l.createElement(p._8, {
                        padding: {
                            left: 1
                        }
                    }, l.createElement(p.Q, null, Object(d.b)(this.props.collection.totalDuration))))))
                }, t
            }(l.Component),
            m = Object(u.d)("CollectionRow")(h),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onCollectionRowChange = function(e) {
                        t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(p._8, null, this.props.collections.map(function(t) {
                        return l.createElement(m, {
                            key: t.id,
                            collection: t,
                            videoIsInCollection: e.props.containingCollections.map(function(e) {
                                return e.id
                            }).indexOf(t.id) > -1,
                            onSelected: e.onCollectionRowChange
                        })
                    })) : l.createElement(p._8, null)
                }, t
            }(l.Component),
            v = Object(u.d)("CollectionsListPresentation")(g);
        var f, b = Object(i.b)(function(e) {
                return {
                    isLoggedIn: Object(r.d)(e),
                    collections: e.collections.collections,
                    containingCollections: e.collections.containingCollections
                }
            }, function(e) {
                return Object(a.b)({
                    fetchCollectionsForVideo: o.e,
                    updateItemInCollection: o.f
                }, e)
            })(v),
            _ = n("zDSl"),
            k = n.n(_);
        n("PelN");
        ! function(e) {
            e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
        }(f || (f = {}));
        var y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        imageLoadError: !1
                    }, t.onErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive(), t.setState({
                            imageLoadError: !0
                        })
                    }, t.onLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = null;
                    return "number" == typeof this.props.videoCount && (n = l.createElement(p._8, {
                        position: p._15.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, l.createElement(p._35, {
                        alignItems: p.c.Center,
                        attachRight: !0,
                        className: "collection-preview-image__wrapper",
                        color: p.K.Overlay,
                        display: p.R.InlineFlex,
                        flexDirection: p.T.Column,
                        fontSize: p.V.Size5,
                        fullHeight: !0,
                        justifyContent: p._7.Center,
                        position: p._15.Absolute,
                        textAlign: p._45.Center
                    }, l.createElement(p._24, {
                        asset: p._25.Collections,
                        height: 19,
                        width: 19
                    }), l.createElement(p.Q, {
                        "data-test-selector": f.VideoCountOverlayText
                    }, Object(c.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount.toString()
                    }, "CollectionCard"))))), !this.props.src || this.state.imageLoadError ? (e = k.a, t = {
                        "320w": k.a
                    }) : (e = this.props.src, t = this.props.srcSet), l.createElement(p._8, {
                        position: p._15.Relative
                    }, l.createElement(p.N, {
                        alt: this.props.alt,
                        onError: this.onErrorHandler,
                        onLoad: this.onLoadHandler,
                        src: e,
                        srcSet: t,
                        sizes: this.props.sizes
                    }), n)
                }, t
            }(l.Component),
            S = Object(u.d)("CollectionPreviewImage")(y);
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return S
        })
    },
    "x49/": function(e, t, n) {
        e.exports = n.p + "assets/notification_upsell_arrow-c9d4ff7c87444b45d8134f21635c5443.png"
    },
    z4Db: function(e, t) {},
    zDSl: function(e, t, n) {
        e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff84459331417137edd6cfdb.png"
    },
    zfLI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("3zLD"),
            o = n("j7/Y"),
            s = n("w9tK"),
            l = n("vH/s"),
            c = n("SI0h"),
            d = n("CSlQ"),
            u = n("6sO2"),
            p = n("yWCw"),
            h = n("zCIC"),
            m = n("7vx8"),
            g = n("SZoP"),
            v = n("F8kA"),
            f = n("kk4f"),
            b = n("Odds"),
            _ = 0,
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.computeViewsMessage = function() {
                        var e = t.props.totalViews || _;
                        return 0 === e || 1 === e ? Object(u.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(u.d)("{viewCount} views", {
                            viewCount: Object(u.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("By {channelName}", {
                        channelName: a.createElement(b.O, {
                            "data-test-selector": "collection-card-channel-link",
                            to: this.props.channelLinkTo,
                            hoverUnderlineNone: !0
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(b.C, i.__assign({
                        key: this.props.title
                    }, Object(b._63)(this.props)), a.createElement(b._2, {
                        position: b._15.Relative
                    }, a.createElement(v.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: l.PageviewContent.CollectionCard,
                                medium: l.PageviewMedium.ChannelCollections
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, a.createElement(f.a, {
                        alt: this.props.title,
                        sizes: [{
                            size: "320px"
                        }],
                        src: this.props.imageSrc,
                        videoCount: this.props.videoCount
                    }))), a.createElement(b.D, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(b._8, {
                        display: b.R.Flex,
                        flexDirection: b.T.Column,
                        flexWrap: b.U.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(b.Q, {
                        fontSize: b.V.Size5,
                        ellipsis: !0
                    }, a.createElement(b.O, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: l.PageviewContent.CollectionCard,
                                medium: l.PageviewMedium.ChannelCollections
                            }
                        },
                        "data-test-selector": "collection-card-title-link",
                        hoverUnderlineNone: !0
                    }, this.props.title)), a.createElement(b.Q, {
                        color: b.K.Alt2,
                        ellipsis: !0
                    }, a.createElement(b.Q, {
                        type: b._49.Span
                    }, e), a.createElement(b.Q, {
                        type: b._49.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            y = Object(d.d)("CollectionCard", {
                autoReportInteractive: !0
            })(k),
            S = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(b.Q, {
                    type: b._49.H4,
                    "data-test-selector": "no-collections"
                }, Object(u.d)("Create a collection of your videos from Video Producer.", "collection-page")), a.createElement(b._8, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(b.v, {
                    type: b.B.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(u.d)("Go to Video Producer", "collection-page")))) : a.createElement(b.Q, {
                    type: b._49.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(u.d)("No collections found.", "collection-page")), a.createElement(b._35, {
                    color: b.K.Alt2,
                    textAlign: b._45.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            C = n("+t2Q"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || (this.props.data.user && u.o.setPageTitle(this.props.data.user.displayName), this.props.latencyTracking.reportInteractive())
                }, t.prototype.render = function() {
                    if (!this.props.data.error && this.props.data.user) {
                        var e = this.props.data.user,
                            t = e.collections.edges.map(function(e) {
                                return e.node
                            }),
                            n = !this.props.data.loading && !this.props.data.error && !!e.collections.pageInfo.hasNextPage,
                            i = null;
                        0 === t.length && (i = a.createElement(S, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.channelLogin
                        }));
                        var r = null;
                        0 !== t.length && this.showCollectionManagerButton() && (r = a.createElement(b._8, {
                            display: b.R.Flex,
                            justifyContent: b._7.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(b.v, {
                            type: b.B.Hollow,
                            linkTo: "/" + this.props.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(u.d)("Manage your collections", "collection-page"))));
                        var o = t.map(function(t, n) {
                            return a.createElement(b._8, {
                                key: t.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(y, {
                                channelLinkTo: "/" + e.login,
                                channelDisplayName: Object(g.a)(e.login, e.displayName),
                                imageSrc: t.thumbnailURL,
                                linkTo: "/collections/" + t.id,
                                title: t.title,
                                totalViews: t.viewCount,
                                videoCount: t.items.totalCount,
                                "data-a-target": "collection-card-" + n
                            }))
                        });
                        return a.createElement("div", null, r, i, a.createElement(b._55, {
                            gutterSize: b._57.Small,
                            childWidth: b._56.Large,
                            placeholderItems: 20
                        }, o), a.createElement(h.a, {
                            enabled: n,
                            loadMore: this.props.loadMore
                        }))
                    }
                    if (this.props.data.loading && !this.props.data.user) {
                        for (var s = [], l = 0; l < 12; l++) s.push(a.createElement(b._8, {
                            key: "collection-placeholder-" + l,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(b._8, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(b.k, {
                            ratio: b.l.Aspect16x9
                        }, a.createElement(b._14, null))), a.createElement(b.Q, null, a.createElement(b._14, {
                            width: 150
                        })), a.createElement(b.Q, {
                            fontSize: b.V.Size7
                        }, a.createElement(b._14, {
                            width: 100
                        }))));
                        return a.createElement(b._55, {
                            gutterSize: b._57.Small,
                            childWidth: b._56.Medium,
                            placeholderItems: 20
                        }, s)
                    }
                    return a.createElement(b._8, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(p.a, {
                        message: Object(u.d)("These collections are temporarily unavailable.", "channel-collections")
                    }))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            E = Object(r.compose)(Object(d.d)("ChannelCollectionsContent"), Object(m.a)(C, {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: C,
                                variables: i.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        user: i.__assign({}, n.user, {
                                            collections: i.__assign({}, n.user.collections, {
                                                edges: e.user.collections.edges.concat(n.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(w),
            N = n("Ic9h"),
            O = n("LdTg"),
            I = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(b._8, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(N.a, {
                        currentPage: c.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, a.createElement(E, {
                        channelLogin: this.props.match.params.channelLogin
                    })))
                }, t
            }(a.Component),
            T = Object(r.compose)(Object(d.d)("ChannelCollectionsPage", {
                destination: s.a.ChannelCollections,
                autoReportInteractive: !0
            }), Object(r.graphql)(O, {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin
                        }
                    }
                }
            }), Object(o.a)({
                location: l.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(I);
        n.d(t, "ChannelCollectionsPage", function() {
            return T
        })
    }
});
//# sourceMappingURL=pages.channel-collections-343eceabc290a0613a02c4da4d1d368b.js.map