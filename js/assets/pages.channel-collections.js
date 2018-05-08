webpackJsonp([56], {
    "+Aaf": function(e, t) {},
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
    "1E7T": function(e, t) {},
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
    "4Uxc": function(e, t) {
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
            return m
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
                                    type: m,
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
                    var o, d, m, g, v, _, b, k;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                o = c.store.getState(), d = o.collections, m = Object(s.c)(o), g = m ? m.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), [4, f("/v5/channels/" + e + "/collections/", {
                                    title: t
                                })];
                            case 2:
                                return v = i.sent(), _ = Object(l.b)(v.body), d.collections = [_].concat(d.collections), c.store.dispatch({
                                    type: u,
                                    collections: d.collections
                                }), Object(r.b)({
                                    channelID: e,
                                    playlistID: _.id,
                                    userID: g,
                                    title: _.title
                                }), b = {
                                    type: l.a.Video,
                                    id: n
                                }, [4, f("/v5/collections/" + _.id + "/items", b)];
                            case 3:
                                return i.sent(), d.containingCollections = [_].concat(d.containingCollections), c.store.dispatch({
                                    type: p,
                                    containingCollections: d.containingCollections,
                                    videoID: n
                                }), Object(r.a)({
                                    channelID: e,
                                    itemID: n,
                                    itemPosition: -1,
                                    itemType: l.a.Video,
                                    playlistID: _.id,
                                    userID: g
                                }), [3, 5];
                            case 4:
                                return k = i.sent(), a.j.error(k, "Failed to add new collection with video"), c.store.dispatch({
                                    type: h,
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
                    var u, m, h, v, _, b, k, y, S;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                u = d.store.getState(), m = Object(c.a)(u), h = Object(s.c)(u), v = h ? h.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 6, , 7]), m.map(function(e) {
                                    return e.id
                                }).includes(e.id) ? (_ = JSON.stringify({
                                    type: l.a.Video,
                                    id: t
                                }), b = btoa(_), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + b)]) : [3, 3];
                            case 2:
                                return i.sent(), y = m.filter(function(t) {
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
                                    userID: v
                                }), [3, 5];
                            case 3:
                                return k = {
                                    type: l.a.Video,
                                    id: t
                                }, [4, f("/v5/collections/" + e.id + "/items", k)];
                            case 4:
                                i.sent(), y = m.concat([e]), d.store.dispatch({
                                    type: p,
                                    containingCollections: y,
                                    videoID: t
                                }), Object(r.a)({
                                    channelID: n,
                                    itemID: t,
                                    itemPosition: -1,
                                    itemType: l.a.Video,
                                    playlistID: e.id,
                                    userID: v
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
            m = "collections.COLLECTIONS_FETCH_FAILED",
            h = "collections.COLLECTIONS_CREATE_FAILED",
            g = "collections.COLLECTIONS_UPDATE_FAILED";
        var f = function(e, t) {
            return o.a.postOrThrow(e, {
                body: t
            })
        }
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
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
            m = n("1E7T"),
            h = (n.n(m), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = a(((e = {})["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, e));
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
            }(o.Component)),
            g = Object(s.f)(h)
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
                        zIndex: r._62.Above
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
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
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
            return _
        });
        var v = r.o.logger.withCategory("browser-push-notifications-manager"),
            _ = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(u.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, h()];
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
                                    return [4, h()];
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
                                        mutation: f
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
        var h = Object(a.b)(null, function(e) {
            return Object(r.b)({
                closeModal: o.c
            }, e)
        })(m);
        var g = Object(a.b)(null, function(e) {
            return Object(r.b)({
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
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
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
            _ = n("RH2O"),
            b = n("2KeS"),
            k = n("V5M+"),
            y = n("E9Qg"),
            S = n("ebTC"),
            E = n("4Q9N"),
            w = n("Odds"),
            C = (n("4Jix"), n("Ojfd")),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.user;
                        e && t.props.showModal(S.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: E.a.ProfileBanner,
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
                    if (i && i.loading || !this.props.firstPageLoaded) e = r.createElement(w._14, {
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
                        this.props.canEdit && (o = r.createElement(w._35, {
                            className: "channel-banner__edit-overlay",
                            background: w.n.Overlay,
                            position: w._15.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0
                        }, r.createElement("button", {
                            className: "channel-banner__edit-overlay__button",
                            "data-test-selector": "channel-banner__edit-overlay-interactable",
                            onClick: this.openModal
                        }, r.createElement(w._8, {
                            display: w.R.Flex,
                            alignItems: w.c.Center,
                            flexDirection: w.T.Column,
                            justifyContent: w._7.Center
                        }, r.createElement(w._8, null, r.createElement(w._24, {
                            asset: w._25.Edit
                        })), Object(s.d)("Update Profile Banner", "ChannelBanner"))))), e = r.createElement("div", {
                            className: "channel-banner__image",
                            "data-test-selector": "channel-banner",
                            style: t
                        }, o)
                    }
                    return r.createElement("div", {
                        className: a("channel-banner", n),
                        onTransitionEnd: this.props.onTransitionEnd
                    }, r.createElement(w._2, {
                        fullWidth: !0
                    }, e))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.closeModal()
                }, t
            }(r.Component),
            N = Object(u.a)(C, {
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
            })(I);
        var O = Object(_.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(b.b)({
                    closeModal: k.c,
                    showModal: k.d
                }, e)
            })(N),
            T = n("x9n8"),
            x = n("CSlQ"),
            D = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(T.a, {
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
                    return r.createElement(w._8, {
                        className: "edit-profile-overlay",
                        display: w.R.Flex,
                        justifyContent: w._7.Center,
                        alignContent: w.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(w.w, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: w._25.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(x.d)("EditProfileOverlay")], t)
            }(r.Component));
        var j = Object(_.b)(null, function(e) {
                return Object(b.b)({
                    showModal: k.d
                }, e)
            })(D),
            L = n("70dR"),
            U = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return A
        }), n.d(t, "a", function() {
            return z
        });
        var A, F = "channel-header__edit-profile-overlay",
            P = "channel-header__verified-badge",
            R = "channel-header__live-indicator",
            M = "TWILIGHT_BROWSER_NOTIFICATIONS_UPSELL",
            H = "yes",
            B = "browser-notifications-upsell-seen";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(A || (A = {}));
        var z = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.verifiedBadgeElement = r.createElement(w._52, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: w._54.Right
                }, r.createElement(w._8, {
                    className: "channel-header__verified",
                    "data-target": P,
                    display: w.R.Flex,
                    alignItems: w.c.Center,
                    margin: {
                        left: 1
                    }
                }, r.createElement(w._24, {
                    asset: w._25.Verified
                }))), n.ChannelStatusIndicatorElement = r.createElement(w._8, {
                    margin: {
                        left: 1
                    },
                    "data-target": R
                }, r.createElement(w._52, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: w._54.Right
                }, r.createElement(w.G, {
                    status: w.I.Live,
                    pulse: !0
                }))), n.renderAvatarEditButton = function() {
                    return n.props.data && n.props.data.user && n.isChannelEditor() ? r.createElement(w._35, {
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
                    }, r.createElement(j, {
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
                                    return !s.l.get(B, !1) && Object(g.a)() && Object(f.c)() && s.o.experiments.getAssignment(M) === H ? [4, h.a.hasPushSubscription()] : [3, 3];
                                case 1:
                                    return e.sent() ? [3, 3] : (s.l.set(B, !0), this.props.showBrowserNotificationsUpsellModal(), [4, h.a.userSubscribe(v.a.Channel)]);
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
                    p = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, p = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                var h = this.state.live && !this.isActiveTab(A.Channel),
                    g = this.createChannelLinks(n, i, u),
                    f = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(A.Channel)
                    },
                    v = null;
                this.canRenderBitsButton() && (v = r.createElement(w._8, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(m.a, {
                    channelLogin: this.props.channelLogin,
                    isInTopNav: !1
                })));
                var _, b = r.createElement(w._8, {
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Center,
                    flexShrink: 0
                }, r.createElement(w._8, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: w.R.Flex,
                    flexShrink: 0,
                    alignItems: w.c.Stretch
                }, r.createElement(w._8, {
                    position: w._15.Relative
                }, r.createElement(w.m, {
                    size: 36,
                    src: p,
                    alt: e || ""
                }), this.renderAvatarEditButton())), e ? r.createElement(w.Q, {
                    type: w._49.H5
                }, e) : r.createElement(w._8, {
                    alignItems: w.c.Center
                }, r.createElement(w._14, {
                    lineCount: 1,
                    width: 120
                })), h && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                _ = this.isActiveTab(A.Channel) ? r.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, b) : this.props.data && this.props.data.user && this.props.data.user.login ? r.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, b) : b;
                var k = this.state.bannerHidden ? w.R.HideAccessible : w.R.Block,
                    y = null;
                return this.isActiveTab(A.Channel) && (y = r.createElement(w._8, {
                    display: k
                }, r.createElement(O, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), r.createElement(w._8, {
                    className: "channel-header",
                    flexShrink: 0
                }, y, r.createElement(w._8, {
                    display: w.R.Flex,
                    justifyContent: w._7.Between,
                    flexWrap: w.U.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, r.createElement(w._8, {
                    display: w.R.Flex,
                    alignItems: w.c.Stretch,
                    flexShrink: 0,
                    flexWrap: w.U.NoWrap,
                    "data-target": "channel-header-left"
                }, r.createElement(w._2, {
                    className: a(f),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    alignItems: w.c.Center,
                    flexShrink: 0
                }, _), this.renderTabs(g), r.createElement(w._8, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: w.d.Center,
                    "data-target": "channel-header-button"
                }, r.createElement(d.a, {
                    alwaysMountBalloonContent: !0
                }, r.createElement(w.w, {
                    icon: w._25.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), r.createElement(w.q, {
                    direction: w.r.Bottom,
                    noTail: !0
                }, r.createElement(w._8, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(g)))))), r.createElement(w._8, {
                    display: w.R.Flex,
                    flexWrap: w.U.NoWrap,
                    flexShrink: 0,
                    alignItems: w.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, r.createElement(w._8, {
                    className: "channel-header__follow-button",
                    display: w.R.Flex,
                    alignItems: w.c.Stretch,
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
                })), r.createElement(w._8, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(L.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin,
                    hideEsportsSubscription: this.props.hideEsportsSubscription
                })), v)), r.createElement(c.a, {
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
                    var n = e.count ? r.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(w.Q, {
                            type: w._49.Span,
                            fontSize: w.V.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(p.b)() ? "_blank" : ""), r.createElement(w._2, {
                        key: "channel-header__item--" + e.label,
                        alignItems: w.c.Center,
                        flexShrink: 0
                    }, r.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), r.createElement(w._8, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: w.R.Flex
                    }, r.createElement(w.Q, {
                        type: w._49.Span,
                        fontSize: w.V.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(w._8, {
                            className: "channel-header__item-count",
                            display: w.R.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(w.Q, {
                            type: w._49.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), r.createElement(w._8, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, r.createElement(w._6, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, o), r.createElement(w._8, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: w.R.Flex
                    }, r.createElement(w.Q, {
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== A.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer && !1 === this.state.isGetBitsButtonTopNavExperimentEnabled
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(U, {
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
            }), Object(x.d)("ChannelHeader")], t)
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
    ebTC: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
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
            _ = n("CSlQ"),
            b = n("Odds"),
            k = (n("+Aaf"), n("0H+u")),
            y = ["image/*"],
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
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: v.b.BadSizeError
                            }) : Object(g.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, r, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(f.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                            case 3:
                                                return r = s.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: v.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = c.k.subscribe({
                                                    topic: Object(m.j)(this.props.userID),
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
                                                        if (e.upload_id === a) {
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
                    if (this.state.loading) n = l.createElement(b._8, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: b._15.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(b._24, {
                        asset: b._25.Upload,
                        type: b._26.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === h.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(b._8, null, l.createElement(b._8, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(b._8, null, l.createElement(b._24, {
                            asset: b._25.Plus,
                            type: b._26.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(b.Q, {
                            type: b._49.H3,
                            color: b.K.Alt2,
                            fontSize: b.V.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(b._8, {
                            className: "user-image-uploader__upload-recommendation",
                            position: b._15.Absolute,
                            textAlign: b._45.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(b.Q, {
                            type: b._49.H6,
                            color: b.K.Alt2,
                            fontSize: b.V.Size8,
                            align: b._59.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = l.createElement(u.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        r = l.createElement(b._12, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(b._8, {
                        className: "user-image-uploader",
                        position: b._15.Relative,
                        fullHeight: !0
                    }, l.createElement(b._35, {
                        className: "user-image-uploader__background-container",
                        background: b.n.Base,
                        fullWidth: !0
                    }, l.createElement(b._8, {
                        padding: 2,
                        display: b.R.InlineBlock,
                        position: b._15.Relative,
                        textAlign: b._45.Center,
                        fullWidth: !0
                    }, l.createElement(b._35, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(b.Q, {
                        type: b._49.H3,
                        fontSize: b.V.Size4
                    }, t)), l.createElement(b._8, {
                        className: "user-image-uploader__upload-container",
                        display: b.R.InlineBlock,
                        position: b._15.Relative,
                        textAlign: b._45.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(b._8, {
                        className: "user-image-uploader__upload",
                        display: b.R.InlineBlock,
                        position: b._15.Relative,
                        textAlign: b._45.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(b._35, {
                        "data-test-selector": "status-message",
                        fontSize: b.V.Size4,
                        position: b._15.Relative,
                        textAlign: b._45.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
                }, t = s.__decorate([Object(p.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            E = Object(_.d)("User Image Upload")(S);
        var w = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(E);
        n.d(t, "a", function() {
            return w
        })
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function l(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.o.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return r.createElement(t, i.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? a.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                r = a.stringify(t);
                            r.length > 0 && (i = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, o
                }(r.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return l
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
            m = function(e) {
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
            h = Object(u.d)("CollectionRow")(m),
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
                        return l.createElement(h, {
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
            f = Object(u.d)("CollectionsListPresentation")(g);
        var v, _ = Object(i.b)(function(e) {
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
            })(f),
            b = n("zDSl"),
            k = n.n(b);
        n("PelN");
        ! function(e) {
            e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
        }(v || (v = {}));
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
                        "data-test-selector": v.VideoCountOverlayText
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
            return _
        }), n.d(t, "a", function() {
            return S
        })
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
            _ = n("4Q9N"),
            b = n("Tt3k"),
            k = n("W6ca"),
            y = n("xgnX"),
            S = n("CSlQ"),
            E = (n("AL3x"), n("nmDn")),
            w = ["image/*"],
            C = function(e) {
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
                            var i = Object(b.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: y.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(b.b)(n, function(e) {
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
                                        return o.trys.push([1, 3, , 4]), [4, Object(k.a)(this.props.userID, this.props.authToken, _.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = o.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: y.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = d.k.subscribe({
                                            topic: Object(g.j)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(k.c)(n, r.currentImage)
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
                            imagePreviewURL: Object(h.a)(h.b[e], 300)
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
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = c.createElement(f._8, {
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
                    var r = null;
                    this.props.showCloser && (r = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(y.c)(this.state.statusMessage),
                            m = s.message,
                            g = s.type;
                        o = c.createElement(f._12, {
                            label: m,
                            type: g
                        })
                    }
                    var _ = this.props.login;
                    return this.props.displayName && (_ = this.props.displayName), c.createElement(f._8, {
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
                        userName: _
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
                    }, a), n)), c.createElement(f._35, {
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
                    }, Object(d.d)("Update", "Profile Edit"))))), r)
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
                                    return i.trys.push([1, 3, , 4]), [4, Object(k.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
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
                }, t = s.__decorate([Object(m.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            I = Object(S.d)("Profile Edit")(C);
        var N = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(I);
        n.d(t, "a", function() {
            return N
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
            o = n("6sO2"),
            s = n("yWCw"),
            l = n("zCIC"),
            c = n("j7/Y"),
            d = n("SZoP"),
            u = n("w9tK"),
            p = n("vH/s"),
            m = n("SI0h"),
            h = n("CSlQ"),
            g = n("F8kA"),
            f = n("kk4f"),
            v = n("Odds"),
            _ = 0,
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.computeViewsMessage = function() {
                        var e = t.props.totalViews || _;
                        return 0 === e || 1 === e ? Object(o.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(o.d)("{viewCount} views", {
                            viewCount: Object(o.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.d)("By {channelName}", {
                        channelName: a.createElement(v.O, {
                            "data-test-selector": "collection-card-channel-link",
                            to: this.props.channelLinkTo,
                            hoverUnderlineNone: !0
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(v.C, i.__assign({
                        key: this.props.title
                    }, Object(v._63)(this.props)), a.createElement(v._2, {
                        position: v._15.Relative
                    }, a.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: p.PageviewContent.CollectionCard,
                                medium: p.PageviewMedium.ChannelCollections
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
                    }))), a.createElement(v.D, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(v._8, {
                        display: v.R.Flex,
                        flexDirection: v.T.Column,
                        flexWrap: v.U.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(v.Q, {
                        fontSize: v.V.Size5,
                        ellipsis: !0
                    }, a.createElement(v.O, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: p.PageviewContent.CollectionCard,
                                medium: p.PageviewMedium.ChannelCollections
                            }
                        },
                        "data-test-selector": "collection-card-title-link",
                        hoverUnderlineNone: !0
                    }, this.props.title)), a.createElement(v.Q, {
                        color: v.K.Alt2,
                        ellipsis: !0
                    }, a.createElement(v.Q, {
                        type: v._49.Span
                    }, e), a.createElement(v.Q, {
                        type: v._49.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            k = Object(h.d)("CollectionCard", {
                autoReportInteractive: !0
            })(b),
            y = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(v.Q, {
                    type: v._49.H4,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("Create a collection of your videos from Video Producer.", "collection-page")), a.createElement(v._8, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(v.v, {
                    type: v.B.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(o.d)("Go to Video Producer", "collection-page")))) : a.createElement(v.Q, {
                    type: v._49.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("No collections found.", "collection-page")), a.createElement(v._35, {
                    color: v.K.Alt2,
                    textAlign: v._45.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            S = n("Ic9h"),
            E = n("4Uxc"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return o.o.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            n = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            i = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === n.length && (r = a.createElement(y, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== n.length && this.showCollectionManagerButton() && (c = a.createElement(v._8, {
                            display: v.R.Flex,
                            justifyContent: v._7.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(v.v, {
                            type: v.B.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(o.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return a.createElement(v._8, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(k, {
                                channelLinkTo: "/" + t.login,
                                channelDisplayName: Object(d.a)(t.login, t.displayName),
                                imageSrc: e.thumbnailURL,
                                linkTo: "/collections/" + e.id,
                                title: e.title,
                                totalViews: e.viewCount,
                                videoCount: e.items.totalCount,
                                "data-a-target": "collection-card-" + n
                            }))
                        });
                        e = a.createElement("div", null, c, r, a.createElement(v._55, {
                            gutterSize: v._57.Small,
                            childWidth: v._56.Large,
                            placeholderItems: 20
                        }, u), a.createElement(l.a, {
                            enabled: i,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var p = [], h = 0; h < 12; h++) p.push(a.createElement(v._8, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(v._8, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(v.k, {
                            ratio: v.l.Aspect16x9
                        }, a.createElement(v._14, null))), a.createElement(v.Q, null, a.createElement(v._14, {
                            width: 150
                        })), a.createElement(v.Q, {
                            fontSize: v.V.Size7
                        }, a.createElement(v._14, {
                            width: 100
                        }))));
                        e = a.createElement(v._55, {
                            gutterSize: v._57.Small,
                            childWidth: v._56.Medium,
                            placeholderItems: 20
                        }, p)
                    } else e = a.createElement(v._8, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(s.a, {
                        message: Object(o.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(v._8, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(S.a, {
                        currentPage: m.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            C = {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: E,
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
            },
            I = Object(r.compose)(Object(r.graphql)(E, C), Object(h.d)("ChannelCollectionsPage", {
                destination: u.a.ChannelCollections
            }), Object(c.a)({
                location: p.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(w);
        n.d(t, "ChannelCollectionsPage", function() {
            return I
        })
    }
});
//# sourceMappingURL=pages.channel-collections-2dd95973aa2872a755d757cacb3bbdf9.js.map