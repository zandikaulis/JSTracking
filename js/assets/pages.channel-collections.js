webpackJsonp([50], {
    1017: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return m
        });
        var n = i(0),
            a = i(4),
            r = (i.n(a), i(1)),
            s = (i.n(r), i(11)),
            o = i(29),
            l = i(54),
            c = i(854),
            u = i(3),
            d = i(1018),
            p = (i.n(d), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.scrollAreaRef = null, t.onHistoryChange = function(e) {
                        null !== t.scrollAreaRef && e.pathname !== t.currentPath && t.scrollAreaRef.scrollToTop(), t.currentPath = e.pathname
                    }, t.scrollRefHandler = function(e) {
                        t.scrollAreaRef = e
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return r.createElement(u.U, n.__assign({
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        flexWrap: u.K.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), r.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    }), r.createElement(o.b, {
                        className: e,
                        scrollRef: this.scrollRefHandler
                    }, r.createElement(u.U, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children)));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t
            }(r.Component)),
            m = Object(s.f)(p)
    },
    1018: function(e, t) {},
    1680: function(e, t) {},
    1681: function(e, t) {
        var i = {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 543
            }
        };
        i.loc.source = {
            body: "query CollectionsPage_UserAndCurrentUser($ownerLogin: String!, $limit: Int, $cursor: Cursor) {\n  user(login: $ownerLogin) {\n    id\n    login\n    displayName\n    collections(first: $limit, after: $cursor) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          items(first: 1) {\n            totalCount\n          }\n          viewCount\n          thumbnailURL(width: 320 height: 180)\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    2024: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0),
            a = i(1),
            r = i(30),
            s = i(2),
            o = i(62),
            l = i(29),
            c = i(764),
            u = i(51),
            d = i(761),
            p = i(13),
            m = i(854),
            h = i(5),
            b = i(11),
            g = i(3),
            f = (i(1680), 0),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPrimaryImageLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.computeViewsMessage = function() {
                        var e = t.props.totalViews || f;
                        return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                            viewCount: Object(s.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    var e = Object(s.d)("By {channelName}", {
                        channelName: a.createElement(b.a, {
                            to: this.props.channelLinkTo,
                            className: "collection-card__link",
                            "data-test-selector": "collection-card-channel-link"
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(g.A, n.__assign({
                        key: this.props.title
                    }, Object(g._39)(this.props)), a.createElement(g.P, {
                        className: "collection-card",
                        position: g._2.Relative
                    }, a.createElement(b.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, a.createElement(g.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc || s.a.defaultCollectionPreviewURL,
                        aspect: g.k.Aspect16x9,
                        onImageLoad: this.onPrimaryImageLoad,
                        "data-test-selector": "collection-image-body"
                    }, a.createElement(g.U, {
                        position: g._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(g._17, {
                        alignItems: g.c.Center,
                        display: g.H.InlineFlex,
                        flexDirection: g.J.Column,
                        position: g._2.Absolute,
                        attachRight: !0,
                        color: g.F.Overlay,
                        fontSize: g.L.Size5,
                        className: "collection-card__wrapper",
                        fullHeight: !0,
                        textAlign: g._22.Center,
                        justifyContent: g.T.Center,
                        "data-test-selector": "collection-card-overlay"
                    }, a.createElement("figure", null, a.createElement("svg", {
                        className: "collection-card__svg",
                        width: "19",
                        height: "19",
                        viewBox: "0 0 19 19"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M0,6 L19,6 L19,19 L0,19 L0,6 Z M12.25,12.5 L7,9 L7,16 L12.25,12.5 Z M2,3 L17,3 L17,5 L2,5 L2,3 Z M4,0 L15,0 L15,2 L4,2 L4,0 Z"
                    }))), a.createElement(g._21, null, Object(s.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount
                    }, "CollectionCard"))))))), a.createElement(g.B, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(g.U, {
                        display: g.H.Flex,
                        flexDirection: g.J.Column,
                        flexWrap: g.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(g._21, {
                        fontSize: g.L.Size5,
                        ellipsis: !0
                    }, a.createElement(b.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        className: "collection-card__link",
                        "data-test-selector": "collection-card-title-link"
                    }, this.props.title)), a.createElement(g._21, {
                        color: g.F.Alt2,
                        ellipsis: !0
                    }, a.createElement(g._21, {
                        type: g._26.Span
                    }, e), a.createElement(g._21, {
                        type: g._26.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            v = Object(h.c)("CollectionCard")(S),
            k = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(g._21, {
                    type: g._26.H4,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("Create a collection of your videos from Video Manager.", "collection-page")), a.createElement(g.U, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(g.u, {
                    type: g.z.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(s.d)("Go to Video Manager", "collection-page")))) : a.createElement(g._21, {
                    type: g._26.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(s.d)("No collections found.", "collection-page")), a.createElement(g._17, {
                    color: g.F.Alt2,
                    textAlign: g._22.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            y = i(1017),
            _ = i(1681),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return s.n.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            i = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            n = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === i.length && (r = a.createElement(k, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== i.length && this.showCollectionManagerButton() && (c = a.createElement(g.U, {
                            display: g.H.Flex,
                            justifyContent: g.T.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(g.u, {
                            type: g.z.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(s.d)("Manage your collections", "collection-page"))));
                        var d = i.map(function(e, i) {
                            return a.createElement(g.U, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(v, {
                                channelLinkTo: "/" + t.login,
                                channelDisplayName: Object(u.a)(t.login, t.displayName),
                                imageAlt: e.title,
                                imageSrc: e.thumbnailURL,
                                linkTo: "/collections/" + e.id,
                                title: e.title,
                                totalViews: e.viewCount,
                                videoCount: e.items.totalCount,
                                "data-a-target": "collection-card-" + i
                            }))
                        });
                        e = a.createElement("div", null, c, r, a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, d), a.createElement(l.a, {
                            enabled: n,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var p = [], h = 0; h < 12; h++) p.push(a.createElement(g.U, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(g.U, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(g.j, {
                            ratio: g.k.Aspect16x9
                        }, a.createElement(g._1, null))), a.createElement(g._21, null, a.createElement(g._1, {
                            width: 150
                        })), a.createElement(g._21, {
                            fontSize: g.L.Size7
                        }, a.createElement(g._1, {
                            width: 100
                        }))));
                        e = a.createElement(g._33, {
                            gutterSize: g._35.Small,
                            childWidth: g._34.Medium,
                            placeholderItems: 20
                        }, p)
                    } else e = a.createElement(g.U, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(o.a, {
                        message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(g.U, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(y.a, {
                        currentPage: m.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            P = {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return n.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: _,
                                variables: n.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var i = t.fetchMoreResult,
                                        a = i;
                                    return {
                                        user: n.__assign({}, a.user, {
                                            collections: n.__assign({}, a.user.collections, {
                                                edges: e.user.collections.edges.concat(a.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            },
            T = Object(r.compose)(Object(r.graphql)(_, P), Object(h.c)("ChannelCollectionsPage", {
                destination: d.a.ChannelCollections
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
            }))(E);
        i.d(t, "ChannelCollectionsPage", function() {
            return T
        })
    },
    357: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(n || (n = {}))
    },
    758: function(e, t, i) {
        "use strict";

        function n(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || d.ChatTooltip
            };
            c.m.track(u.SpadeEventType.BitsCardInteraction, t)
        }

        function a(e) {
            return e && m[e] ? m[e] : (c.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), p.Buy100)
        }

        function r(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            c.m.track(u.SpadeEventType.BitsAdsAvailability, t)
        }

        function s(e) {
            var t = {
                distinct_id: c.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            c.m.track(u.SpadeEventType.BitsAdsImpression, t)
        }

        function o(e) {
            var t = c.m.getLastPageview(),
                i = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: c.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            c.m.track(u.SpadeEventType.BitsAdsRequest, i)
        }
        t.h = n, i.d(t, "b", function() {
            return d
        }), i.d(t, "a", function() {
            return p
        }), t.d = a, t.e = r, t.f = s, i.d(t, "c", function() {
            return l
        }), t.g = o;
        var l, c = i(2),
            u = i(13),
            d = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            p = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            m = {
                100: p.Buy100,
                500: p.Buy500,
                1e3: p.Buy1000,
                1500: p.Buy1500,
                5e3: p.Buy5000,
                1e4: p.Buy10000,
                25e3: p.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(l || (l = {}))
    },
    761: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    764: function(e, t, i) {
        "use strict";

        function n(e) {
            return function(t) {
                var i = function(i) {
                    function n(t) {
                        var n = i.call(this, t) || this;
                        return n.tracked = !1, n.referenceTracking = {}, n.trackPageview = function() {
                            if (!(n.tracked || e.skip && e.skip(n.props))) {
                                n.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(n.props) : e.properties && (t = a.__assign({}, e.properties));
                                var i = a.__assign({}, n.props);
                                i.location && i.location.state && (t.medium = i.location.state.medium, t.content = i.location.state.content, t.content_index = i.location.state.content_index);
                                var r = n.referenceTracking,
                                    s = r.content,
                                    o = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: s,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), n
                    }
                    return a.__extends(n, i), n.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, i) {
                            "REPLACE" !== i && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, n.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, n.prototype.render = function() {
                        return s.createElement(t, a.__assign({}, this.props))
                    }, n.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            i = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, i.medium || i.content) {
                            var n = "",
                                a = r.stringify(t);
                            a.length > 0 && (n = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: n
                            })
                        }
                        return i
                    }, n
                }(s.Component);
                return Object(o.f)(i)
            }
        }
        var a = i(0),
            r = i(20),
            s = i(1),
            o = i(11),
            l = i(2);
        i.d(t, "a", function() {
            return n
        })
    },
    766: function(e, t, i) {
        "use strict";

        function n(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var a, r = i(0),
            s = i(1),
            o = i(2),
            l = i(776),
            c = i(125),
            u = i(249),
            d = i(5),
            p = i(775),
            m = i(356),
            h = i(787),
            b = i(777),
            g = i(248),
            f = i(3),
            S = (i(812), "gift-subscription-button"),
            v = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(a || (a = {}));
        var k = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + a.Prime:
                                i.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: i.messages.tier1Price
                                }), i.props.onSelectTierTab(a.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier1:
                                i.setState({
                                    activeTab: a.Tier1,
                                    currentPurchasePrice: i.messages.tier1Price
                                }), i.props.onSelectTierTab(a.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier2:
                                i.setState({
                                    activeTab: a.Tier2,
                                    currentPurchasePrice: i.messages.tier2Price
                                }), i.props.onSelectTierTab(a.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier3:
                                i.setState({
                                    activeTab: a.Tier3,
                                    currentPurchasePrice: i.messages.tier3Price
                                }), i.props.onSelectTierTab(a.Tier3);
                                break;
                            default:
                                i.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: i.messages.tier1Price
                                }), i.props.onSelectTierTab(a.Prime)
                        }
                    }, i.getTabTitle = function() {
                        switch (i.state.activeTab) {
                            case a.Prime:
                                return i.messages.freeSubWithPrime;
                            case a.Tier1:
                                return i.messages.tier1Sub;
                            case a.Tier2:
                                return i.messages.tier2Sub;
                            case a.Tier3:
                                return i.messages.tier3Sub;
                            default:
                                return i.messages.tier1Sub
                        }
                    }, i.getTierSubscribeButton = function() {
                        var e = i.props.subscriptionProducts[i.state.activeTab - 1];
                        return i.props.isGift ? i.props.giftRecipient ? s.createElement(f.u, {
                            ariaLabel: i.messages.giftSubscription + " " + i.state.currentPurchasePrice,
                            "data-test-selector": S,
                            onClick: i.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: i.state.currentPurchasePrice,
                            linkTo: Object(c.a)(e.url, {
                                recipient: i.props.giftRecipient
                            })
                        }, i.messages.giftSubscription) : s.createElement(f.u, {
                            ariaLabel: i.messages.giftSubscription + " " + i.state.currentPurchasePrice,
                            "data-test-selector": S,
                            onClick: i.onGiftSelect,
                            purchase: i.state.currentPurchasePrice
                        }, i.messages.giftSubscription) : i.state.subbedTier === i.state.activeTab && i.state.activeTab === a.Prime ? s.createElement(h.a, {
                            authToken: i.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: i.props.isSubscribed,
                            isSubscribedWithPrime: i.props.subbedTier === p.a,
                            onSubscribedWithPrime: i.onSubscribedWithPrime,
                            reportSubMenuAction: i.props.reportSubMenuAction,
                            subLogin: i.props.subLogin,
                            userHasPrime: i.props.userHasPrime,
                            canPrimeSubscribe: i.props.canPrimeSubscribe
                        }) : s.createElement(m.a, {
                            isSubbedToTier: i.state.subbedTier === i.state.activeTab,
                            tierPrice: i.state.currentPurchasePrice,
                            reportSubAction: i.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": v
                        })
                    }, i.onSubscribedWithPrime = function() {
                        i.props.onSubscribedWithPrime && i.props.onSubscribedWithPrime()
                    }, i.reportGiftCheckoutAction = function() {
                        i.props.reportSubMenuAction({
                            action: g.a.BuyGiftSub,
                            checkoutButtonTier: i.state.currentPurchasePrice,
                            giftRecipient: i.props.giftRecipient ? i.props.giftRecipient : null
                        })
                    }, i.onGiftSelect = function() {
                        i.props.reportSubMenuAction({
                            action: g.a.GiftASub,
                            checkoutButtonTier: i.state.currentPurchasePrice
                        }), i.props.onGiftSelect && i.props.onGiftSelect()
                    }, i.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (i.setState({
                            activeTab: a.Prime,
                            subbedTier: a.Prime
                        }), e.onSelectTierTab(a.Prime)) : e.subbedTier === l.a.Tier1 ? (i.setState({
                            activeTab: a.Tier1,
                            subbedTier: a.Tier1
                        }), e.onSelectTierTab(a.Tier1)) : e.subbedTier === l.a.Tier2 ? (i.setState({
                            activeTab: a.Tier2,
                            subbedTier: a.Tier2
                        }), e.onSelectTierTab(a.Tier2)) : e.subbedTier === l.a.Tier3 ? (i.setState({
                            activeTab: a.Tier3,
                            subbedTier: a.Tier3
                        }), e.onSelectTierTab(a.Tier3)) : e.isGift ? e.onSelectTierTab(i.state.activeTab) : e.onSelectTierTab(a.Prime)
                    }, i.getExtraEmotes = function(e) {
                        return (e === a.Tier2 ? Object(u.b)(i.props.subscriptionProducts[1].emotes) : Object(u.b)(i.props.subscriptionProducts[2].emotes.concat(i.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return s.createElement(f.U, {
                                display: f.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, s.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, i.state = {
                        activeTab: a.Tier1,
                        currentPurchasePrice: i.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, i
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, s.createElement(f._8, {
                        asset: f._9.Star
                    })));
                    var t = s.createElement(f._21, null),
                        i = null,
                        r = null,
                        c = null,
                        u = s.createElement(f.U, {
                            display: f.H.InlineFlex
                        }, this.state.subbedTier === a.Tier3 && e, s.createElement(f._18, {
                            active: this.state.activeTab === a.Tier3,
                            "data-a-target": n(a.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== a.Prime && (t = s.createElement(f.U, null, s.createElement(f._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, Object(b.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), s.createElement(f._21, {
                        className: "tw-subscription-modal__new-price",
                        type: f._26.H5,
                        bold: !0
                    }, Object(b.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (i = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, s.createElement(f._8, {
                        asset: f._9.Crown
                    })), s.createElement(f._18, {
                        active: this.state.activeTab === a.Prime,
                        "data-a-target": n(a.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (r = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier1 && e, s.createElement(f._18, {
                        active: this.state.activeTab === a.Tier1,
                        "data-a-target": n(a.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (c = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier2 && e, s.createElement(f._18, {
                        active: this.state.activeTab === a.Tier2,
                        "data-a-target": n(a.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var d = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === a.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === a.Tier3) && (d = s.createElement(f.U, {
                        display: f.H.InlineFlex,
                        alignItems: f.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), s.createElement(f._21, {
                        bold: !0
                    }, Object(o.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === a.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), s.createElement(f.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._19, null, i, r, c, u)), s.createElement(f.U, null, s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, {
                        type: f._26.H5,
                        bold: !0
                    }, this.getTabTitle())), s.createElement(f.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(f._21, null, this.messages.subTierBenefits)), d, t, s.createElement(f.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        i = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: i,
                        prime: Object(o.d)("Prime", "SubTierTabs"),
                        subscribed: Object(o.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(o.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(o.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(b.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(b.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(b.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(b.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(d.c)("SubTierTabs")], t)
            }(s.Component),
            y = k;
        i.d(t, !1, function() {
            return S
        }), i.d(t, !1, function() {
            return v
        }), i.d(t, "b", function() {
            return a
        }), i.d(t, !1, function() {
            return n
        }), i.d(t, "a", function() {
            return y
        })
    },
    767: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        }), i.d(t, "b", function() {
            return a
        }), i.d(t, "d", function() {
            return r
        }), i.d(t, "e", function() {
            return s
        }), i.d(t, "c", function() {
            return o
        });
        var n = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            s = "single_purchase",
            o = "black_friday_2017"
    },
    768: function(e, t, i) {
        "use strict";

        function n(e) {
            return e.type !== d.a && (r(e) && null !== e.promotion && e.promotion.type === d.d)
        }

        function a(e) {
            return e.type !== d.a && (r(e) && null !== e.promotion && e.promotion.type === d.e)
        }

        function r(e) {
            return e.type === d.b && null !== e.promotion && !!e.promotion
        }

        function s(e) {
            var t = 0,
                i = 0,
                n = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), i = i ? Math.min(i, e.cheerAmount) : e.cheerAmount, n += e.cheerAmount)
            }), {
                total: n,
                smallestCheermote: i,
                largestCheermote: t
            }
        }

        function o(e) {
            var t = e.messageBits,
                i = t.total,
                n = t.largestCheermote,
                a = t.smallestCheermote;
            if (i) {
                var r = {
                    cheerAboveMaxBitsPerEmote: n > p.k,
                    totalAboveBalance: i > e.balance,
                    totalBelowCheerMinimum: i < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > p.j,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return c.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }

        function l(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(m.d)(e.bitsAmount), {
                    location: e.location
                });
                var i = t.replace("{channelID}", e.channelID),
                    n = window.open(i, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !n || Object(u.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(m.a.CloseCard, {
                    location: e.location
                })) : (n.focus(), n)
            }
        }
        t.c = n, t.e = a, t.d = r, t.a = s, t.f = o, t.b = l;
        var c = i(0),
            u = i(799),
            d = i(767),
            p = i(247),
            m = i(758)
    },
    770: function(e, t, i) {
        "use strict";
        var n, a = i(4),
            r = i(1),
            s = i(350),
            o = i(353),
            l = i(351),
            c = i(3);
        i(839);
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(n || (n = {}));
        var u;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(u || (u = {}));
        var d = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(o.b)());
            var i = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            i || (i = t.orderedTiers[0]);
            var d = null,
                p = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === n.Small || e.size === n.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === n.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== u.InlineTextOnly && e.display !== u.Inline
                });
            e.amount && e.display !== u.ImageOnly && (d = r.createElement(c.P, {
                padding: e.size === n.Small ? 0 : void 0,
                textAlign: e.size === n.Small ? c._22.Center : void 0
            }, r.createElement("strong", {
                className: p,
                style: {
                    color: i.color
                }
            }, e.amount)));
            var m = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === u.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === n.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === n.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== u.InlineTextOnly && e.display !== u.Inline && e.size !== n.Small
                }),
                h = r.createElement(l.a, {
                    className: m,
                    sources: Object(s.b)(i, 4, e.animated)
                });
            return e.display !== u.TextOnly && e.display !== u.InlineTextOnly || (h = null), e.display === u.InlineTextOnly || e.display === u.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, h, d) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, h, d)
        };
        i.d(t, "a", function() {
            return d
        }), i.d(t, "b", function() {
            return n
        }), i.d(t, "c", function() {
            return u
        })
    },
    774: function(e, t, i) {
        "use strict";

        function n(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }
        var a = i(0),
            r = i(1),
            s = i(8),
            o = i(18),
            l = i(5),
            c = i(775),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = a.__decorate([Object(l.c)("SubscribeButton")], t)
            }(r.Component),
            d = Object(s.a)(n)(u);
        i.d(t, !1, function() {
            return u
        }), i.d(t, "b", function() {
            return d
        }), i.d(t, !1, function() {}), i.d(t, "a", function() {
            return c.a
        }), i.d(t, !1, function() {
            return c.b
        })
    },
    775: function(e, t, i) {
        "use strict";

        function n(e) {
            var t = new Map;
            return t.set(x.b.Prime, null), e.forEach(function(e, i) {
                t.set(i + 1, e)
            }), t
        }
        var a, r = i(0),
            s = i(1),
            o = i(2),
            l = i(60),
            c = i(7),
            u = i(102),
            d = i(776),
            p = i(130),
            m = i(22),
            h = i(35),
            b = i(19),
            g = i(5),
            f = i(61),
            S = i(83),
            v = i(128),
            k = i(355),
            y = i(29),
            _ = i(51),
            E = i(125),
            P = i(800),
            T = i(248),
            C = i(3),
            N = (i(811), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(o.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(o.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(o.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: T.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var i = e.target; i.parentElement && !i.dataset.user_id;) i = i.parentElement;
                        i.dataset.user_id && i.dataset.user_login && i.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: i.dataset.userId || "",
                                login: i.dataset.user_login || "",
                                name: i.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? s.createElement(C.U, {
                        fullHeight: !0
                    }, s.createElement(C.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.searchHint)), s.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, s.createElement(C._17, {
                        className: "gift-recipient-search-result-view",
                        background: C.m.Alt,
                        position: C._2.Relative,
                        overflow: C.Y.Hidden,
                        display: C.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, s.createElement(C.P, {
                        overflow: C.Y.Hidden,
                        position: C._2.Relative
                    }, s.createElement(y.b, {
                        suppressScrollX: !0
                    }, s.createElement(C.U, null, e, s.createElement(y.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(E.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = s.createElement(P.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        i = null;
                    if (this.state.selectedUser) {
                        var n = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        i = s.createElement(C.P, {
                            margin: {
                                x: 1
                            }
                        }, s.createElement(C._21, null, Object(o.d)("for {displayName}", {
                            displayName: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, n)
                        }, "GiftRecipientSearchResult")))
                    }
                    return s.createElement(C.U, {
                        display: C.H.Flex,
                        alignItems: C.c.Center,
                        fullWidth: !0
                    }, t, i)
                }, t.prototype.getErrorMessage = function() {
                    return s.createElement(C.U, {
                        fullWidth: !0,
                        textAlign: C._22.Center,
                        justifyContent: C.T.Center
                    }, s.createElement(C._21, null, Object(o.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var i = Object(_.a)(t.login || "", t.name || "");
                        return s.createElement(C.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, s.createElement(C.U, {
                            padding: .5
                        }, s.createElement(C.A, {
                            row: !0
                        }, s.createElement(C.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: C.D.Size4,
                            aspect: C.k.Aspect1x1
                        }), s.createElement(C.B, null, s.createElement(C.P, {
                            padding: {
                                x: 1
                            }
                        }, s.createElement(C._21, {
                            type: C._26.H5,
                            ellipsis: !0
                        }, i))))))
                    }) : s.createElement(C._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return s.createElement(C.U, {
                        margin: 1
                    }, s.createElement(C._21, {
                        color: C.F.Alt2
                    }, this.messages.noResults))
                }, t = r.__decorate([Object(g.c)("GiftRecipientSearchResultPanel")], t)
            }(s.Component)),
            w = N,
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(C.U, null, s.createElement(C._21, null, this.messages.giftSingleMonth), s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Center,
                        fullWidth: !0
                    }, s.createElement(C.P, {
                        fullWidth: !0
                    }, s.createElement("div", null, s.createElement(C._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), s.createElement(w, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : s.createElement(C._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(o.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(o.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(o.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(o.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(s.Component),
            B = 50,
            O = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, B)
                    }, t.loadMore = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, i, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(S.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (n = Object(k.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: n.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: n.exhaustedHits
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === f.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === f.a.Up ? t.focusNext(-1) : e.keyCode === f.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new v.a(o.a.algoliaApplicationID, o.a.algoliaAPIKey), t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(A, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, n, a, s, o;
                        return r.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, i = b.a(), n = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: i,
                                        focusSelectable: !n && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(S.a.Users, e, i)];
                                case 2:
                                    return a = l.sent(), [3, 4];
                                case 3:
                                    return s = l.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(k.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(i) {
                                        return r.__assign({}, i, o, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, i = document.querySelectorAll("[data-ts_selectable=true]"),
                        n = document.activeElement,
                        a = Array.prototype.indexOf.call(i, n);
                    if (t = a < 0 ? e > 0 ? 0 : i.length - 1 : a + e, t < 0 && (t = 0), !(t >= i.length)) {
                        var r = i.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t = r.__decorate([Object(g.c)("GiftRecipientSearch")], t)
            }(s.Component),
            U = O,
            I = i(783),
            x = i(766),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(C.U, null, s.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), s.createElement(C.u, {
                        type: C.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: C._9.AngleLeft,
                        onClick: this.props.onBack
                    }, s.createElement(C.U, {
                        alignItems: C.c.Center,
                        display: C.H.InlineFlex
                    }, s.createElement(C._21, null, this.messages.back)))), s.createElement(x.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(o.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(s.Component),
            F = D,
            j = i(774),
            L = i(787);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(a || (a = {}));
        var M = i(777),
            R = i(813),
            H = (i(814), function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.handleTopPageSubButtonClick = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.ClickCheckout,
                            checkoutButtonTier: i.messages.tier1Price
                        })
                    }, i.showGiftOptions = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), i.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, i.showSubOptions = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), i.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, i.showRecipientSelect = function() {
                        i.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, i.showTop = function() {
                        i.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, i.goToPreviousPage = function() {
                        return i.props.reportSubMenuAction({
                            action: T.a.ClickBack,
                            modalLevel: i.state.currentPage === a.SubOptions || i.state.currentPage === a.GiftOptions ? "top_page" : "second_page"
                        }), i.state.currentPage === a.SubOptions || i.state.currentPage === a.GiftOptions ? void i.showTop() : i.state.currentPage === a.RecipientSelect ? void i.showGiftOptions() : void 0
                    }, i.onSelectTierTab = function(e) {
                        var t = i.tabToSubProduct.get(e);
                        if (t) {
                            var n = i.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            n !== i.state.selectedSubProductIndex && i.setState({
                                selectedSubProductIndex: n
                            }), i.props.onSelectTierTab(t.price)
                        } else i.props.onSelectTierTab(j.a)
                    }, i.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, i.tabToSubProduct = n(t.subscriptionProducts), i
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return s.createElement(F, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(I.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(U, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        i = null,
                        n = s.createElement(C._21, null, this.messages.tier1PricePerMonth),
                        a = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (n = s.createElement(C.U, null, s.createElement(C._21, {
                        className: "tw-subscription-modal__old-price"
                    }, s.createElement("s", null, this.messages.tier1PricePerMonth)), s.createElement(C._21, {
                        className: "tw-subscription-modal__new-price",
                        type: C._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), a = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (i = this.renderPrimeSection()), this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), s.createElement(C.U, {
                        padding: 2
                    }, i, s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), n, s.createElement(C.U, {
                        display: C.H.Flex
                    }, s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: a,
                        targetBlank: !0
                    }, this.messages.subscribe)))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(C._21, null, e)), s.createElement(L.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(M.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(o.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: s.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(o.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(o.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: s.createElement("strong", null, Object(o.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(o.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(o.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(o.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(o.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(o.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(o.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(o.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(o.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(M.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(c.a)(R, {
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
                }), Object(g.c)("BalloonNonSubbedUser")], t)
            }(s.Component)),
            G = H,
            W = function(e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.showTop = function() {
                        i.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, i.showRecipientSelect = function() {
                        i.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, i.showGiftOptions = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.ClickGiftSubOptions
                        }), i.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, i.showSubOptions = function() {
                        i.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, i.goToPreviousPage = function() {
                        return i.state.currentPage === a.GiftOptions || i.state.currentPage === a.SubOptions || i.state.giftShortcut ? (i.showTop(), void i.setState({
                            giftShortcut: !1
                        })) : i.state.currentPage === a.RecipientSelect ? void i.showGiftOptions() : void 0
                    }, i.onGiftSelect = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.GiftASub,
                            checkoutButtonTier: i.props.subscriptionProducts[0].price
                        }), i.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), i.showRecipientSelect()
                    }, i.handleTopPageSubButtonClick = function() {
                        i.props.reportSubMenuAction({
                            action: T.a.ClickCheckout,
                            checkoutButtonTier: i.props.subscriptionProducts[0].price
                        })
                    }, i.onSelectTierTab = function(e) {
                        var t = i.tabToSubProduct.get(e);
                        if (t) {
                            var n = i.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            n !== i.state.selectedSubProductIndex && i.setState({
                                selectedSubProductIndex: n
                            }), i.props.onSelectTierTab(t.price)
                        } else i.props.onSelectTierTab(j.a)
                    }, i.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, i.tabToSubProduct = n(t.subscriptionProducts), i
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return s.createElement(U, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return s.createElement(C.U, {
                        padding: 2
                    }, s.createElement(I.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return s.createElement(F, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), s.createElement(C.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: C.H.Flex
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), s.createElement(C.U, {
                        margin: {
                            left: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return s.createElement(C.U, null, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), s.createElement(x.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, i = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, i = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), s.createElement(C.U, null, s.createElement(C._21, {
                        bold: !0,
                        type: C._26.H4
                    }, e), s.createElement(C.P, {
                        margin: {
                            y: 1
                        }
                    }, s.createElement(C._21, null, t)), i)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = s.createElement(C.U, {
                        margin: {
                            right: 1
                        },
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: C.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = s.createElement(C.U, {
                        display: C.H.Inline
                    }, s.createElement(C.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: C.z.Hollow
                    }, this.messages.giftSubscription)), s.createElement(C.U, null, s.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, {
                        type: C._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), s.createElement(C.P, {
                        margin: {
                            top: 1
                        }
                    }, s.createElement(C._21, null, this.messages.tier1PricePerMonth)), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, s.createElement(C.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), s.createElement(C.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, s.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : s.createElement(C.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case d.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case d.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case d.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(o.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(o.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(o.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(o.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(o.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(o.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(o.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(o.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(o.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(o.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(o.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(o.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(o.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(o.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: s.createElement(C._21, {
                                bold: !0,
                                type: C._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(o.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(o.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(o.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(o.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        o.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = r.__decorate([Object(g.c)("BalloonSubbedUser")], t)
            }(s.Component),
            V = W,
            z = (i(815), i(816));
        i.d(t, "a", function() {
            return q
        }), i.d(t, "b", function() {
            return K
        });
        var q = "prime",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: q,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(T.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === T.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== T.a.ClickMoreSubOptions && e.action !== T.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: q
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? T.a.CloseSubMenu : T.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: T.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: d.a.Prime
                        }), Object(m.d)(z, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(b.a)(),
                                purchasedWithPrime: !0,
                                tier: q,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(o.d)("Gift A Sub", "SubscribeButton") : Object(o.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(o.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(o.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(o.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(o.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var i = Object.assign({}, t.state.subData);
                            if (null !== i) {
                                for (var n = [], a = 0; a < 3; a++) {
                                    var r = Object.assign({}, i.subscriptionProducts[a]);
                                    r.self = e[a].self, n.push(r)
                                }
                                i.subscriptionProducts = n, t.setState({
                                    subData: i
                                })
                            }
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? q : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var i = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: i
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return s.createElement(C.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: C._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === d.a.Prime ? C._9.Crown : C._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        i = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        n = s.createElement(C.u, {
                            "data-a-target": i,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? C.z.Success : C.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        a = this.props.hostChannelID ? C.q.TopLeft : C.q.BottomRight;
                    return s.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, n, s.createElement(C.p, {
                        size: C.r.Large,
                        direction: a,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return o.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (o.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return s.createElement(V, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = s.createElement(C.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, s.createElement(C._21, null, this.messages.discountMessage))), s.createElement(C.U, null, e, s.createElement(G, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return s.createElement(G, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "no", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, o.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = i.sent(), [3, 4];
                                case 3:
                                    return t = i.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(M.b)(e.subData.subscriptionProducts))
                }, t = r.__decorate([Object(c.a)(z, {
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
                }), Object(u.a)([{
                    topic: function(e) {
                        return Object(h.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(s.Component),
            K = $
    },
    776: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        var n = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    777: function(e, t, i) {
        "use strict";

        function n(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function a(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = n, t.b = a
    },
    783: function(e, t, i) {
        "use strict";
        var n = i(0),
            a = i(1),
            r = i(2),
            s = i(766),
            o = i(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(o.U, null, a.createElement(o.U, {
                        display: o.H.Flex,
                        justifyContent: o.T.Between,
                        alignItems: o.c.Center,
                        fullWidth: !0
                    }, a.createElement(o._21, {
                        bold: !0,
                        type: o._26.H5
                    }, Object(r.d)("Choose A Gift Subscription", "GiftTierTabs")), a.createElement(o.u, {
                        type: o.z.Text,
                        icon: o._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, a.createElement(o.U, {
                        alignItems: o.c.Center,
                        display: o.H.InlineFlex
                    }, a.createElement(o._21, null, Object(r.d)("Back", "GiftTierTabs"))))), a.createElement(s.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(a.Component),
            c = l;
        i.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), i.d(t, "a", function() {
            return c
        })
    },
    785: function(e, t, i) {
        "use strict";

        function n(e) {
            var t, i = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var n = e.bitsConfig.indexedActions[o.e];
                n || (n = Object(c.b)());
                var d = n.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (d) {
                    var p = Object(l.b)(d);
                    return void 0 !== e.themeOverride && (e.themeOverride === s.a.Light ? p.dark = p.light : p.light = p.dark), t = a.createElement(u.a, {
                        className: "bits-count--img",
                        sources: p
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? i : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, i))
        }
        var a = i(1),
            r = i(2),
            s = i(36),
            o = i(247),
            l = i(350),
            c = i(353),
            u = i(351);
        i(847);
        i.d(t, "a", function() {
            return n
        })
    },
    786: function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!e) return void a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var i = setInterval(function() {
                var n = !1,
                    a = !1;
                try {
                    n = e.closed, a = !!e.success
                } catch (e) {}
                if (n || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(i)
                }
            }, 500)
        }
        t.a = n;
        var a = i(2)
    },
    787: function(e, t, i) {
        "use strict";

        function n(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var i, n, r, l, c;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            i = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, n = 1, a.label = 1;
                        case 1:
                            if (!(n <= o)) return [3, 7];
                            a.label = 2;
                        case 2:
                            return a.trys.push([2, 5, , 6]), [4, fetch(i, {
                                method: "POST",
                                headers: {
                                    "Client-ID": s.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return r = a.sent(), [4, r.body];
                        case 4:
                            return l = a.sent(), [2, l];
                        case 5:
                            if (c = a.sent(), n === o) throw c;
                            return [3, 6];
                        case 6:
                            return ++n, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var a = i(0),
            r = i(1),
            s = i(2),
            o = 3,
            l = i(248),
            c = i(3),
            u = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, n(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), s.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": u,
                        disabled: this.state.isSubscribing,
                        icon: c._9.Crown,
                        state: this.state.isSubscribing ? c.y.Loading : c.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(c._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.primeSubNotAvailable) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": u,
                        icon: c._9.Crown,
                        linkTo: s.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(c._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(s.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(s.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(s.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(s.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(s.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(r.Component),
            p = d;
        i.d(t, !1, function() {
            return u
        }), i.d(t, "a", function() {
            return p
        })
    },
    799: function(e, t, i) {
        "use strict";

        function n(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = n;
        var a = /\scurse\/\d/
    },
    800: function(e, t, i) {
        "use strict";
        var n = i(0),
            a = i(1),
            r = i(2),
            s = i(7),
            o = i(5),
            l = i(3),
            c = i(810),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1
                    }, t
                }
                return n.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return a.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(r.d)("Gift Subscription", "GiftSubscribeButton"))
                }, t = n.__decorate([Object(o.c)("GiftSubscribeButton"), Object(s.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(a.Component),
            d = u;
        i.d(t, !1, function() {
            return "gift-subscribe-button"
        }), i.d(t, "a", function() {
            return d
        })
    },
    802: function(e, t, i) {
        "use strict";

        function n(e) {
            var t = [],
                i = {};
            return e.forEach(function(e) {
                var n = e.tiers.map(function(e) {
                    var t = new Map,
                        i = new Map,
                        n = new Map,
                        r = new Map;
                    return e.images.forEach(function(e) {
                        "LIGHT" === e.theme ? e.isAnimated ? i.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : n.set(e.dpiScale, e.url)
                    }), a.__assign({
                        indexedImages: {
                            LIGHT: {
                                static: t,
                                animated: i
                            },
                            DARK: {
                                static: n,
                                animated: r
                            }
                        }
                    }, e)
                });
                n.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var r = a.__assign({}, e, {
                    indexedTiers: new Map(n.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: n
                });
                t.push(r), i[r.prefix.toLowerCase()] = r
            }), {
                indexedActions: i,
                orderedActions: t
            }
        }
        t.a = n;
        var a = i(0)
    },
    803: function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = (i.n(a), i(3)),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, a.createElement(r.P, {
                        display: r.H.Hide
                    }, a.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component)
    },
    805: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "type"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "InlineFragment",
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BitsBundleOffer"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "price"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "promotion"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
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
        i.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\n  id\n  type\n  bits\n  ... on BitsBundleOffer {\n    price\n    discount\n    isPromo\n    url\n    includesVAT\n    promotion {\n      id\n      type \n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    807: function(e, t) {
        var i = {
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "prefix"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 270
            }
        };
        i.loc.source = {
            body: "fragment cheer on User {\n  cheer {\n    id\n    emotes {\n      id\n      prefix\n      type\n      tiers {\n        id\n        bits\n        color\n        images {\n          id\n          url\n          theme\n          isAnimated\n          dpiScale\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    810: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "subProductId"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "recipientLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 195
            }
        };
        i.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    811: function(e, t) {},
    812: function(e, t) {},
    813: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 246
            }
        };
        i.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    814: function(e, t) {},
    815: function(e, t) {},
    816: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "price"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 673
            }
        };
        i.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    817: function(e, t, i) {
        "use strict";

        function n(e) {
            return Object(h.bindActionCreators)({
                closeModal: c.c
            }, e)
        }

        function a(e) {
            return p.__awaiter(this, void 0, void 0, function() {
                var t, i, n, a, r;
                return p.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (t = b.b.get("bits_truex_partner_hash", ""), !(i = b.b.get("bits_truex_api_url", "")) || !t) return b.i.warn("Truex API info missing from dynamic settings"), [2, v.Error];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 5, , 6]), [4, fetch(i + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return n = s.sent(), n.ok ? [4, n.json()] : [3, 4];
                        case 3:
                            if ((a = s.sent()) && Array.isArray(a) && a.length) return [2, v.Available];
                            s.label = 4;
                        case 4:
                            return [2, v.Unavailable];
                        case 5:
                            return r = s.sent(), b.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, v.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(u.b)(e, T),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function s(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(c.d)(T, t))
                }
            }
        }
        var o, l = i(8),
            c = i(49),
            u = i(85),
            d = i(18),
            p = i(0),
            m = i(1),
            h = i(10),
            b = i(2),
            g = i(123),
            f = i(7),
            S = i(22);
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var v, k = i(357),
            y = i(758),
            _ = i(3),
            E = i(835),
            P = (i(836), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, i, n, a, a, r, s;
                            return p.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (i = t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return n = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(n, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.g)({
                                                campaignID: a.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return l.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(S.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return r = l.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return s = l.sent(), b.i.warn("Error while redeeming bits for truex ad", s), this.props.onError && this.props.onError(o.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(o.LimitReached) : t.type === k.a.Adblock ? this.props.onError(o.Adblock) : t.type === k.a.OnError ? this.props.onError(o.Unknown) : this.hasAwarded || this.props.onError(o.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._17, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(g.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = p.__decorate([Object(f.a)(E, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            T = Object(l.a)(null, n)(P),
            C = i(4),
            N = i(786),
            w = i(29);
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(v || (v = {}));
        var A, B = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(b.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._17, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(b.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.U, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(b.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._22.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            O = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(y.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === v.Available
                                    }), e !== v.Available && e !== v.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return O.test(navigator.userAgent) ? null : m.createElement(B, p.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            I = i(767),
            x = i(247),
            D = i(350),
            F = i(768),
            j = i(353),
            L = i(351),
            M = (i(837), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var i = t.props.channelID || "",
                            n = Object(F.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: i,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        n && (t.props.onBuyPopupClose(n), t.props.onClose())
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === I.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(U, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(F.c)(this.props.offer) ? t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._21, {
                        type: _._26.Strong,
                        fontSize: _.L.Size6
                    }, Object(b.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(F.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === I.c && (t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._21, {
                        type: _._26.Strong,
                        fontSize: _.L.Size6
                    }, Object(b.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var i = null;
                    this.props.offer.discount && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(b.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var n = null;
                    (Object(F.c)(this.props.offer) || Object(F.e)(this.props.offer)) && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(b.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? _._17 : _.U;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.U, {
                        display: _.H.Flex,
                        justifyContent: _.T.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.U, {
                        flexGrow: 1
                    }, m.createElement(_._21, {
                        type: _._26.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.U, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (i || n) && m.createElement(_.U, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._22.Right,
                        margin: {
                            top: .5
                        }
                    }, i, n))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[x.e];
                    t || (t = Object(j.b)());
                    var i = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, i.map(function(e) {
                        return m.createElement(L.a, {
                            key: e.bits,
                            sources: Object(D.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            R = (i(838), function(e) {
                var t = [],
                    i = [],
                    n = null;
                return e.offers.forEach(function(a, r) {
                    var s = m.createElement(M, {
                            key: a.id,
                            offer: a,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        o = Object(F.d)(a),
                        l = Object(F.c)(a),
                        c = a.type === I.a;
                    l && !e.hidePromos ? t.push(s) : o && !l ? t.push(s) : c && !e.hideWateb ? n = s : c || o || i.push(s)
                }), e.fullsize ? m.createElement(_.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, n, t, i) : m.createElement(w.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.U, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, n, t, i))
            }),
            H = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._21, {
                    italic: !0,
                    type: _._26.P,
                    color: _.F.Alt
                }, Object(b.d)("Prices include VAT", "Bits--BuyCard")));
                var i = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (i = m.createElement(_._21, {
                    color: _.F.Alt
                }, Object(b.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var n = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (n = m.createElement(_._21, {
                    color: _.F.Alt
                }, Object(b.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._17, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    color: _.F.Alt
                }, Object(b.d)("Purchase Bits", "Bits--BuyCard")), t), n, i)
            },
            G = i(770),
            W = function(e) {
                return m.createElement(_.U, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(G.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, Object(b.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._21, {
                    color: _.F.Alt2
                }, Object(b.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(b.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(b.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(b.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), e !== v.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(W, p.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            z = (i(840), function(e) {
                var t = Object(b.d)("Something's wrong!", "Bits--WatchAdError"),
                    i = Object(b.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    n = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        n = "adserroradblock", i = Object(b.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        n = "adserrorlimit", t = Object(b.d)("Ad Limit Reached", "Bits--WatchAdError"), i = Object(b.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        i = Object(b.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(b.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(b.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(b.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.U, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: x.a + "/light/static/1/" + n + ".png"
                })), m.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, t)), m.createElement(_._21, {
                    color: _.F.Alt2
                }, i), a)
            }),
            q = i(841);
        i(842);
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(A || (A = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: A.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(N.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: A.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: y.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: A.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === A.Error && (t.setState({
                            wateb: A.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return p.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = C({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === y.b.ChatTooltip
                        }),
                        i = null;
                    if (this.props.location === y.b.ChatTooltip && (i = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._8, {
                            asset: _._9.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._17, p.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center
                    }, e), m.createElement(_.X, {
                        delay: 0
                    }), m.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._21, {
                        italic: !0
                    }, Object(b.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.U, p.__assign({
                        className: C(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        padding: 2,
                        textAlign: _._22.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), i, m.createElement(_._21, {
                        italic: !0
                    }, Object(b.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var n = this.renderWatebCard();
                    if (n) return m.createElement(_._17, p.__assign({
                        className: C(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center,
                        padding: 1
                    }, e), i, n);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === I.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        s = this.props.data.user ? this.props.data.user.id : "",
                        o = m.createElement(R, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: s,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === y.b.ChatTooltip && (l = m.createElement(H, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._17, p.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), i, l, o)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case A.Awarded:
                            return m.createElement(V, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case A.Error:
                            return m.createElement(z, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = p.__decorate([Object(f.a)(q, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(m.Component),
            K = $,
            J = Object(l.a)(r, s)(K);
        i.d(t, !1, function() {
            return r
        }), i.d(t, !1, function() {
            return s
        }), i.d(t, "a", function() {
            return J
        })
    },
    823: function(e, t, i) {
        "use strict";
        var n = i(1),
            a = i(2),
            r = i(247),
            s = i(351),
            o = i(3),
            l = (i(848), {
                themed: !0,
                dark: {
                    "1x": r.a + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.a + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return n.createElement(o.U, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.T.Center,
                    alignItems: o.c.Center
                }, n.createElement(o._21, {
                    type: o._26.H4,
                    bold: !0
                }, n.createElement(s.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), n.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        i.d(t, "a", function() {
            return c
        })
    },
    835: function(e, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
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
                                value: "RedeemTrueXAdInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "redeemTrueXAd"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
        i.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\n  redeemTrueXAd(input:$input) {\n    grantedBits\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    836: function(e, t) {},
    837: function(e, t) {},
    838: function(e, t) {},
    839: function(e, t) {},
    840: function(e, t) {},
    841: function(e, t, i) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bitsOffers"
                        },
                        arguments: [],
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
                                        value: "isLoggedIn"
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
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "settings"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cheerMinimumBits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 528
            }
        };
        n.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\n\nquery Bits_BuyCard_Offers($withChannel: Boolean!, $isLoggedIn: Boolean!, $channelLogin: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $channelLogin) @include(if: $withChannel) {\n    id\n    displayName\n    cheer {\n      id\n      settings {\n        cheerMinimumBits\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        n.definitions = n.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(i(805).definitions)), e.exports = n
    },
    842: function(e, t) {},
    847: function(e, t) {},
    848: function(e, t) {},
    854: function(e, t, i) {
        "use strict";
        var n = i(880);
        i.d(t, !1, function() {}), i.d(t, !1, function() {}), i.d(t, !1, function() {}), i.d(t, !1, function() {}), i.d(t, "b", function() {
            return n.b
        }), i.d(t, "a", function() {
            return n.a
        })
    },
    880: function(e, t, i) {
        "use strict";

        function n(e) {
            return {
                isLoggedIn: Object(P.d)(e)
            }
        }

        function a(e, t, i) {
            var n = new FileReader;
            n.onloadend = function() {
                i && i(n.result)
            }, n.readAsDataURL(e);
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }

        function r(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var i = decodeURI(e);
            return fetch(i, {
                method: "PUT",
                body: new Blob([t])
            })
        }

        function s(e, t, i) {
            if (void 0 === i) throw new Error("No default avatar selected.");
            return fetch(f.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + f.a.authClientID + "&api_version=" + f.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: Z[i].id
                })
            })
        }

        function o(e, t, i) {
            return m.__awaiter(this, void 0, void 0, function() {
                var n;
                return m.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, fetch(f.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + f.a.authClientID + "&api_version=" + f.a.defaultAPIVersion + "&image_type=" + i, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return n = a.sent(), [2, n.json()]
                    }
                })
            })
        }

        function l(e) {
            switch (e) {
                case Q.Success:
                    return {
                        message: Object(f.d)("Success!", "Profile Edit"),
                        type: U._0.Success
                    };
                case Q.UnexpectedError:
                    return {
                        message: Object(f.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: U._0.Alert
                    };
                case Q.BadSizeError:
                    return {
                        message: Object(f.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: U._0.Alert
                    };
                case Q.NonImageError:
                    return {
                        message: Object(f.d)("You must upload an image.", "Profile Edit"),
                        type: U._0.Alert
                    };
                case Q.WrongFormatError:
                    return {
                        message: Object(f.d)("You must select a valid image type.", "Profile Edit"),
                        type: U._0.Alert
                    };
                case Q.TimeoutError:
                    return {
                        message: Object(f.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: U._0.Alert
                    };
                case Q.Uploading:
                    return {
                        message: Object(f.d)("Uploading....", "Profile Edit"),
                        type: U._0.Brand
                    };
                case Q.ImageNotSelected:
                    return {
                        message: Object(f.d)("Select a image first.", "Profile Edit"),
                        type: U._0.Alert
                    };
                default:
                    return {
                        message: Object(f.d)("Please try again.", "Profile Edit"),
                        type: U._0.Alert
                    }
            }
        }

        function c(e) {
            return {
                authToken: Object(P.a)(e)
            }
        }

        function u(e, t) {
            return Object(V.bindActionCreators)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(z.c)()
                }
            }, e)
        }

        function d(e) {
            return Object(V.bindActionCreators)({
                showModal: z.d
            }, e)
        }
        var p, m = i(0),
            h = i(4),
            b = i(1),
            g = i(11),
            f = i(2),
            S = i(254),
            v = i(363),
            k = i(60),
            y = i(7),
            _ = i(126),
            E = i(8),
            P = i(18),
            T = i(84),
            C = i(786),
            N = i(785),
            w = i(817),
            A = i(823),
            B = i(768),
            O = i(758),
            U = i(3),
            I = (i(887), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var i = Object(B.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: O.b.GetBitsButton
                        });
                        i && t.props.onPromoBuyClose(i)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = b.createElement(U.U, null, b.createElement(U.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: U._22.Center
                    }, b.createElement(U._21, {
                        type: U._26.H4,
                        bold: !0
                    }, Object(f.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), b.createElement(U.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, b.createElement(U._21, {
                        type: U._26.Span,
                        color: U.F.Alt
                    }, Object(f.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), b.createElement(U.P, {
                        margin: {
                            left: .5
                        }
                    }, b.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(f.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), b.createElement(U.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: U._22.Center
                    }, b.createElement(U.P, {
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(U._21, {
                        type: U._26.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(f.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), b.createElement(U.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(f.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? b.createElement(U.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, b.createElement(U.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, b.createElement(U.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: U.z.Text
                    }, b.createElement(U._8, {
                        asset: U._9.Play,
                        height: 8
                    }), " ", Object(f.d)("Back", "Bits--FirstTimeUserPrompt"))), b.createElement(U.U, {
                        textAlign: U._22.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, b.createElement(U.e, {
                        type: U.i.SlideInLeft,
                        duration: U.g.Long,
                        enabled: !0
                    }, b.createElement(A.a, null)))) : this.props.animateFirstTimeUserIntro ? b.createElement(U.P, {
                        className: "bits-first-time-user-prompt"
                    }, b.createElement(U.e, {
                        type: U.i.SlideInRight,
                        duration: U.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : b.createElement(U.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(b.Component)),
            x = I,
            D = i(767),
            F = i(802),
            j = i(5),
            L = i(888),
            M = (i(889), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, i) {
                        var n = {
                            actionName: e,
                            emoteType: i && i.emoteType,
                            emoteLevel: i && i.emoteLevel,
                            location: O.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(O.h)(n)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(C.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return b.createElement(U._17, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: U.H.Flex,
                        flexDirection: U.J.Column,
                        alignItems: U.c.Center,
                        justifyContent: U.T.Center,
                        textAlign: U._22.Center,
                        padding: {
                            y: 5
                        }
                    }, b.createElement(U.X, {
                        delay: 0
                    }), b.createElement(U.U, {
                        padding: {
                            top: 2
                        }
                    }, b.createElement(U._21, {
                        italic: !0
                    }, Object(f.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(B.c)(e)
                        });
                        t && t.type === D.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = b.createElement(x, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var i = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? i = b.createElement(U._17, {
                        borderBottom: !0,
                        textAlign: U._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, b.createElement(U._21, {
                        type: U._26.Span
                    }, Object(f.d)("You have {bitsBalance}", {
                        bitsBalance: b.createElement(N.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (i = b.createElement(U._17, {
                        borderBottom: !0,
                        textAlign: U._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, b.createElement(U._21, {
                        type: U._26.Span
                    }, Object(f.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: b.createElement(N.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var n = null;
                    return this.props.bitsConfig && this.props.channelLogin && (n = b.createElement(w.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: O.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), b.createElement(T.b, {
                        className: "get-bits-button-content"
                    }, b.createElement(U.U, null, i, e, n))
                }, t = m.__decorate([Object(j.c)("GetBitsButtonContent"), Object(y.a)(L, {
                    name: "data",
                    props: function(e) {
                        var t, i;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(F.a)(e.data.user.cheer.emotes), i = e.data.user.id);
                        var n, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, n = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (n = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: n,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: i
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(b.Component)),
            R = M,
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(O.h)({
                            actionName: O.a.BuyMain,
                            location: O.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = b.createElement(R, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), b.createElement(k.a, {
                        onToggle: this.toggleBalloon
                    }, b.createElement(U.u, {
                        dropdown: !0
                    }, Object(f.d)("Get Bits", "Bits--GetBitsButton")), b.createElement(U.p, {
                        direction: U.q.BottomRight,
                        size: U.r.Large
                    }, e))
                }, t = m.__decorate([Object(j.c)("GetBitsButton")], t)
            }(b.Component),
            G = H,
            W = Object(E.a)(n)(G),
            V = i(10),
            z = i(49),
            q = i(803),
            $ = i(123),
            K = i(35),
            J = (i(890), function(e) {
                var t = function() {
                        e.onSelect(e.index)
                    },
                    i = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                return b.createElement(U.U, {
                    padding: {
                        bottom: 1
                    }
                }, b.createElement("div", {
                    onClick: t,
                    "aria-label": Object(f.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, b.createElement(U._17, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: U._2.Relative,
                    className: h(i)
                }, b.createElement("img", {
                    alt: Object(f.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(p || (p = {}));
        var Y;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(Y || (Y = {}));
        var Q;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(Q || (Q = {}));
        var X = (i(891), i(892)),
            Z = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            ee = ["image/*"],
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1
                    }, t.currentImage = null, t.logger = f.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var i;
                        if (null === e) return void t.setState({
                            statusMessage: Q.ImageNotSelected
                        });
                        i = e[0];
                        var n = (i.size / 1024 / 1024).toFixed(4);
                        if (parseInt(n, 10) > 10) return void t.setState({
                            statusMessage: Q.BadSizeError
                        });
                        t.setState({
                            selectedImageIndex: void 0,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1
                        }), a(i, function(e) {
                            t.currentImage = e, t.setState({
                                statusMessage: null
                            })
                        }, function(e) {
                            var i = new Image,
                                n = !1;
                            i.onload = function() {
                                i.width < i.height && (n = !0), t.setState({
                                    currentImageHasTallAspectRatio: n
                                })
                            }, i.src = e, t.setState({
                                imagePreviewURL: e
                            })
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, i, n, a, s = this;
                            return m.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: Q.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: Q.Uploading
                                        }), l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, o(this.props.userID, this.props.authToken, p.ProfileImage)];
                                    case 2:
                                        return t = l.sent(), i = t.upload_url, n = t.upload_id, [3, 4];
                                    case 3:
                                        return a = l.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: Q.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = f.j.subscribe({
                                            topic: Object(K.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    r(i, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: Q.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                s.timeoutHandle = setTimeout(function() {
                                                    return s.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                s.setState({
                                                    statusMessage: Q.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === n) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null,
                                                        i = s.state.imagePreviewURL;
                                                    e.status === Y.Success ? t = Q.Success : e.status === Y.BadSize ? (t = Q.BadSizeError, i = "", s.currentImage = null) : e.status === Y.NonImage ? (t = Q.NonImageError, i = "", s.currentImage = null) : e.status === Y.WrongFormat ? (t = Q.WrongFormatError, i = "", s.currentImage = null) : (t = Q.UnexpectedError, i = "", s.currentImage = null), s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t,
                                                        imagePreviewURL: i
                                                    }), s.state.statusMessage === Q.Success && s.setState({
                                                        profileUpdated: !0
                                                    })
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Z[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: Q.TimeoutError
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = Z.map(function(t, i) {
                            return b.createElement(J, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: i,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === i
                            })
                        }),
                        i = "" !== this.state.imagePreviewURL,
                        n = null;
                    if (i) {
                        var a = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = b.createElement(U.U, {
                            className: h(a),
                            "data-test-selector": "preview-image",
                            position: U._2.Relative
                        }, b.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = "" === this.state.imagePreviewURL,
                        s = null;
                    r && (s = b.createElement(U.U, {
                        className: "profile-edit__upload-info"
                    }, b.createElement(U.U, null, b.createElement(U._8, {
                        asset: U._9.Plus,
                        type: U._10.Alt2,
                        height: 20,
                        width: 20
                    })), b.createElement(U._21, {
                        type: U._26.H3,
                        color: U.F.Alt2,
                        fontSize: U.L.Size4
                    }, Object(f.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = b.createElement($.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var u = l(this.state.statusMessage),
                            d = u.message,
                            p = u.type;
                        c = b.createElement(U.Z, {
                            label: d,
                            type: p
                        })
                    }
                    var m = this.props.login;
                    return this.props.displayName && (m = this.props.displayName), b.createElement(U.U, {
                        className: "profile-edit",
                        position: U._2.Relative,
                        fullHeight: !0
                    }, b.createElement(U._17, {
                        className: "profile-edit__background-container",
                        background: U.m.Base,
                        fullWidth: !0
                    }, b.createElement(U.U, {
                        padding: 2,
                        display: U.H.InlineBlock,
                        position: U._2.Relative,
                        textAlign: U._22.Center,
                        fullWidth: !0
                    }, b.createElement(U._17, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(U._21, {
                        type: U._26.H3,
                        fontSize: U.L.Size4
                    }, Object(f.d)("Editing profile picture for {userName}", {
                        userName: m
                    }, "Profile Edit"), " ")), b.createElement(U.U, {
                        className: "profile-edit__upload-container",
                        display: U.H.InlineBlock,
                        position: U._2.Relative,
                        textAlign: U._22.Center,
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(U.U, {
                        className: "profile-edit__upload",
                        display: U.H.InlineBlock,
                        position: U._2.Relative,
                        textAlign: U._22.Center
                    }, b.createElement(q.a, {
                        allowedFileTypes: ee,
                        onFilesSubmitted: this.onImageInputChange
                    }, s), n)), b.createElement(U._17, {
                        "data-test-selector": "status-message",
                        fontSize: U.L.Size4,
                        position: U._2.Relative,
                        textAlign: U._22.Center,
                        className: "profile-edit__status-message"
                    }, c), b.createElement(U._17, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(U.U, {
                        margin: {
                            bottom: 1
                        }
                    }, b.createElement(U._21, {
                        type: U._26.H3,
                        fontSize: U.L.Size5
                    }, Object(f.d)("Or select one of these", "Profile Edit"))), b.createElement(U._33, {
                        childWidth: U._34.ExtraSmall,
                        gutterSize: U._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), b.createElement(U.U, {
                        display: U.H.Flex,
                        justifyContent: U.T.Center
                    }, b.createElement(U.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(f.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, i;
                        return m.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: Q.Uploading
                                    }), e = Q.UnexpectedError, n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, s(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return t = n.sent(), 204 === t.status || 200 === t.status ? e = Q.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return i = n.sent(), this.logger.error(i, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === Q.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = m.__decorate([Object(y.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(b.Component),
            ie = Object(j.c)("Profile Edit")(te),
            ne = Object(E.a)(c, u)(ie),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(ne, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return b.createElement(U.U, null, b.createElement("div", {
                        onClick: this.openModal
                    }, b.createElement(U._8, {
                        asset: U._9.Edit,
                        height: 36,
                        width: 36,
                        fill: !0,
                        type: U._10.Brand
                    })))
                }, t = m.__decorate([Object(j.c)("EditProfileOverlay")], t)
            }(b.Component),
            re = ae,
            se = Object(E.a)(null, d)(re),
            oe = i(774),
            le = (i(893), i(894));
        i.d(t, "b", function() {
            return ce
        }), i.d(t, "a", function() {
            return me
        });
        var ce, ue = "channel-header__verified-badge",
            de = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(ce || (ce = {}));
        var pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        live: !1
                    }, t.verifiedBadgeElement = b.createElement(U._30, {
                        label: Object(f.d)("Verified", "ChannelHeader"),
                        direction: U._32.Right
                    }, b.createElement(U.U, {
                        className: "channel-header__verified",
                        "data-target": ue,
                        display: U.H.Flex,
                        alignItems: U.c.Center,
                        margin: {
                            left: 1
                        }
                    }, b.createElement(U._8, {
                        asset: U._9.Verified
                    }))), t.liveIndicatorElement = b.createElement(U.U, {
                        margin: {
                            left: 1
                        },
                        "data-target": de
                    }, b.createElement(U._30, {
                        label: Object(f.d)("Live Now", "ChannelHeader"),
                        direction: U._32.Right
                    }, b.createElement(U.V, {
                        pulse: !0
                    }))), t.renderAvatarEditButton = function() {
                        return t.props.data && t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? b.createElement(U.U, {
                            className: "channel-header__edit-profile-overlay",
                            position: U._2.Absolute
                        }, b.createElement(se, {
                            userID: t.props.data.user.id,
                            login: t.props.data.user.login,
                            displayName: t.props.data.user.displayName
                        })) : null
                    }, t.onUpdateDebounce = function() {
                        if (!t.resizeAnimationFrame && t.channelHeader) {
                            var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                            t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                        }
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                    }, t.saveChannelHeaderRef = function(e) {
                        return t.channelHeader = e
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.updateLiveState(this.props)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateLiveState(e)
                }, t.prototype.componentDidUpdate = function() {
                    this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                }, t.prototype.updateWidth = function(e) {
                    var t = e !== this.width || this.width !== this.prevWidth;
                    void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                }, t.prototype.render = function() {
                    var e, t, i = 0,
                        n = 0,
                        a = 0,
                        r = f.a.defaultAvatarURL;
                    this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (i = this.props.data.user.videos.totalCount, n = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, r = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                    var s = this.state.live && ce[this.props.currentPage] !== ce[ce.Channel],
                        o = this.createChannelLinks(i, n, a),
                        l = {
                            "channel-header__user": !0,
                            "channel-header__user--selected": ce[this.props.currentPage] === ce[ce.Channel]
                        },
                        c = null;
                    this.canRenderBitsButton() && (c = b.createElement(U.U, {
                        margin: {
                            left: 1
                        }
                    }, b.createElement(W, {
                        channelLogin: this.props.channelLogin
                    })));
                    var u, d = b.createElement(U.U, {
                        display: U.H.Flex,
                        flexWrap: U.K.NoWrap,
                        alignItems: U.c.Center,
                        flexShrink: 0
                    }, b.createElement(U.U, {
                        className: "channel-header__user-avatar channel-header__user-avatar--active",
                        margin: {
                            right: 1
                        },
                        display: U.H.Flex,
                        flexShrink: 0,
                        alignItems: U.c.Stretch
                    }, b.createElement(U.l, {
                        size: 36,
                        imageSrc: r,
                        imageAlt: e || ""
                    }), this.renderAvatarEditButton()), e ? b.createElement(U._21, {
                        type: U._26.H5
                    }, e) : b.createElement(U.U, {
                        alignItems: U.c.Center
                    }, b.createElement(U._1, {
                        lineCount: 1,
                        width: 120
                    })), s && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                    return u = this.props.data && this.props.data.user && this.props.data.user.login ? b.createElement(g.a, {
                        to: "/" + this.props.data.user.login,
                        "data-target": "channel-header__channel-link",
                        "data-a-target": "user-channel-header-item"
                    }, d) : d, b.createElement(U.U, {
                        className: "channel-header",
                        flexShrink: 0,
                        padding: {
                            x: 3
                        }
                    }, b.createElement(U.U, {
                        display: U.H.Flex,
                        justifyContent: U.T.Between,
                        flexWrap: U.K.NoWrap,
                        fullHeight: !0,
                        refDelegate: this.saveChannelHeaderRef
                    }, b.createElement(U.U, {
                        display: U.H.Flex,
                        alignItems: U.c.Stretch,
                        flexShrink: 0,
                        flexWrap: U.K.NoWrap,
                        "data-target": "channel-header-left"
                    }, b.createElement(U.P, {
                        className: h(l),
                        padding: {
                            y: .5,
                            right: 2
                        },
                        display: U.H.Flex,
                        flexWrap: U.K.NoWrap,
                        alignItems: U.c.Center,
                        flexShrink: 0
                    }, u), this.renderTabs(o), b.createElement(U.U, {
                        className: "channel-header__item channel-header__item--no-underline",
                        padding: {
                            x: 1
                        },
                        display: U.H.Flex,
                        flexShrink: 0,
                        alignSelf: U.d.Center,
                        "data-target": "channel-header-button"
                    }, b.createElement(k.a, {
                        alwaysMountBalloonContent: !0
                    }, b.createElement(U.v, {
                        icon: U._9.NavMore,
                        ariaLabel: Object(f.d)("More", "ChannelHeader")
                    }), b.createElement(U.p, {
                        direction: U.q.Bottom,
                        noTail: !0
                    }, b.createElement(U.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderDropdown(o)))))), b.createElement(U.U, {
                        display: U.H.Flex,
                        flexWrap: U.K.NoWrap,
                        flexShrink: 0,
                        alignItems: U.c.Center,
                        className: "channel-header__right",
                        "data-target": "channel-header-right"
                    }, b.createElement(U.U, {
                        className: "channel-header__follow-button",
                        display: U.H.Flex,
                        alignItems: U.c.Stretch,
                        margin: {
                            left: 1
                        }
                    }, b.createElement(S.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        isHostedFollow: !1,
                        channelLogin: this.props.channelLogin
                    })), b.createElement(U.U, {
                        margin: {
                            left: 1
                        }
                    }, b.createElement(oe.b, {
                        updateContainerWidth: this.onUpdateDebounce,
                        channelLogin: this.props.channelLogin
                    })), c)), b.createElement(v.a, {
                        onResize: this.onUpdateDebounce
                    }))
                }, t.prototype.updateLiveState = function(e) {
                    !e.data || e.data.loading || e.data.error || this.setState({
                        live: !!e.data.user.stream && "" !== e.data.user.stream.id
                    })
                }, t.prototype.generateUserLink = function(e, t) {
                    void 0 === e && (e = ""), void 0 === t && (t = !1);
                    var i = this.props.data && this.props.data.user && this.props.data.user.login;
                    if (!i) return "#";
                    var n = "/" + i + "/" + e;
                    return t ? Object(_.a)(n) : n
                }, t.prototype.renderTabs = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var i = e.count ? b.createElement(U.U, {
                                className: "channel-header__item-count",
                                display: U.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, b.createElement(U._21, {
                                type: U._26.Span,
                                fontSize: U.L.Size5
                            }, e.count)) : null,
                            n = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.target = Object(_.b)() ? "_blank" : ""), b.createElement(U.P, {
                            key: "channel-header__item--" + e.label,
                            display: U.H.Flex,
                            alignItems: U.c.Center,
                            flexShrink: 0
                        }, b.createElement(g.a, m.__assign({
                            className: "channel-header__item hide " + (e.isSelected ? "channel-header__item--selected" : "")
                        }, a, {
                            to: n,
                            disabled: "#" === n,
                            "data-target": "channel-header-item",
                            "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                        }), b.createElement(U.U, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: U.H.Flex
                        }, b.createElement(U._21, {
                            type: U._26.Span,
                            fontSize: U.L.Size5
                        }, e.label), i)))
                    })
                }, t.prototype.renderDropdown = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var i = e.count ? b.createElement(U.U, {
                                className: "channel-header__item-count",
                                display: U.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, b.createElement(U._21, {
                                type: U._26.Span
                            }, e.count)) : null,
                            n = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.targetBlank = !0), b.createElement(U.U, {
                            key: "channel-header__dropdown-item--" + e.label,
                            "data-target": "channel-header-dropdown-item"
                        }, b.createElement(U.S, m.__assign({
                            linkTo: n,
                            disabled: "#" === n
                        }, a), b.createElement(U.U, {
                            className: "channel-header__dropdown-hover-target",
                            padding: {
                                y: .5,
                                x: 1
                            },
                            display: U.H.Flex
                        }, b.createElement(U._21, {
                            type: U._26.Span
                        }, e.label), i)))
                    })
                }, t.prototype.createChannelLinks = function(e, t, i) {
                    return [{
                        label: Object(f.d)("Videos", "ChannelHeader"),
                        count: Object(f.e)(e),
                        pathSuffix: "videos/all",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Videos]
                    }, {
                        label: Object(f.d)("Clips", "ChannelHeader"),
                        pathSuffix: "clips",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Clips]
                    }, {
                        label: Object(f.d)("Collections", "ChannelHeader"),
                        pathSuffix: "collections",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Collections]
                    }, {
                        label: Object(f.d)("Events", "ChannelHeader"),
                        pathSuffix: "events",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Events]
                    }, {
                        label: Object(f.d)("Followers", "ChannelHeader"),
                        count: Object(f.e)(t),
                        pathSuffix: "followers",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Followers]
                    }, {
                        label: Object(f.d)("Following", "ChannelHeader"),
                        count: Object(f.e)(i),
                        pathSuffix: "following",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Following]
                    }]
                }, t.prototype.getChannelHeaderSize = function() {
                    if (this.channelHeader) {
                        var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                            t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                            i = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                            n = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                        if (i.length) {
                            var a = this.getWidth(this.channelHeader).width,
                                r = this.getWidth(e).width,
                                s = this.getWidth(t).width,
                                o = r + s + 20 - a;
                            if (o > 0)
                                for (var l = i.length - 1; l >= 0; l--) {
                                    var c = i[l];
                                    if (!c.classList.contains("hide")) {
                                        var u = this.getWidth(c);
                                        if (c.classList.add("hide"), n[l].classList.remove("hide"), (o -= u.width) <= 0) break
                                    }
                                } else
                                    for (var l = 0; l < i.length; l++) {
                                        var c = i[l];
                                        if (c.classList.contains("hide")) {
                                            c.classList.remove("hide");
                                            var u = this.getWidth(c);
                                            if (u.width >= Math.abs(o)) {
                                                c.classList.add("hide");
                                                break
                                            }
                                            c.classList.remove("hide"), n[l].classList.add("hide"), o += u.width
                                        }
                                    }
                            var d = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                            if (d) {
                                var p = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].hide').length;
                                d.classList.toggle("hide", p)
                            }
                        }
                    }
                }, t.prototype.canRenderBitsButton = function() {
                    return this.props.data && !this.props.data.loading && this.props.currentPage !== ce.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
                }, t.prototype.getWidth = function(e) {
                    return e ? {
                        width: e.clientWidth
                    } : {
                        width: 0
                    }
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(y.a)(le, {
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
                }), Object(j.c)("ChannelHeader")], t)
            }(b.Component),
            me = pe
    },
    887: function(e, t) {},
    888: function(e, t, i) {
        function n(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "bitsOffers"
                        },
                        arguments: [],
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
                                        value: "isLoggedIn"
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
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "currentUser"
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
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 803
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\n\nquery GetBitsButton_Bits($isLoggedIn: Boolean!, $withChannel: Boolean!, $login: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $login) @include(if: $withChannel) {\n    id\n    ...cheer\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(n(i(805).definitions)), a.definitions = a.definitions.concat(n(i(807).definitions)), e.exports = a
    },
    889: function(e, t) {},
    890: function(e, t) {},
    891: function(e, t) {},
    892: function(e, t) {
        var i = {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 121
            }
        };
        i.loc.source = {
            body: "query UserProfileEditor($login: String!) {\n  user(login: $login) {\n    id\n    login\n    profileImageURL(width: 70)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    },
    893: function(e, t) {},
    894: function(e, t) {
        var i = {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 423
            }
        };
        i.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    profileImageURL(width: 70)\n    roles {\n      isPartner\n    }\n    stream {\n      id\n    }\n    videos {\n      totalCount\n    }\n    followers {\n      totalCount\n    }\n    follows {\n      totalCount\n    }\n    cheer {\n      id\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = i
    }
});
//# sourceMappingURL=pages.channel-collections-a9f9dfd782457f8a97632b352814d687.js.map