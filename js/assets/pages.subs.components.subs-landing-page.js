webpackJsonp([67], {
    1332: function(e, t, n) {
        "use strict";

        function a(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t;
                return i.__generator(this, function(n) {
                    return t = {
                        login: e.login,
                        user_id: Number(e.userId),
                        channel: e.channel,
                        channel_id: e.channelId,
                        clickthrough_location: e.clickthroughLocation
                    }, r.m.track(o.SpadeEventType.SubsLandingStreamerClick, t), [2]
                })
            })
        }

        function s(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return i.__generator(this, function(a) {
                    if (t = null, e.isSubscribedCurrentTier) switch (e.isSubscribedCurrentTier) {
                        case "1000":
                            t = "$4.99";
                            break;
                        case "2000":
                            t = "$9.99";
                            break;
                        case "3000":
                            t = "$24.99"
                    }
                    return n = {
                        action: e.action,
                        can_subscribe: e.canSubscribe,
                        channel: e.channelLogin,
                        channel_id: e.channelID,
                        checkout_button_tier: e.checkoutButtonTier,
                        has_sub_credit: e.hasSubCredit,
                        host_channel: e.hostChannelLogin,
                        host_channel_id: e.hostChannelID,
                        is_menu_open: e.isMenuOpen,
                        is_subscribed: e.isSubscribed,
                        is_subscribed_current_tier: t,
                        sub_location: e.sub_location,
                        modal: e.modal,
                        modal_level: "",
                        show_prime_content: e.showPrimeContent,
                        show_resub: e.showResub,
                        vod_id: "",
                        vod_type: "",
                        viewport_height: window.innerHeight,
                        viewport_width: window.innerWidth
                    }, r.m.track(o.SpadeEventType.Subscription, n), [2]
                })
            })
        }
        t.a = a, t.b = s;
        var i = n(0),
            r = n(2),
            o = n(14)
    },
    139: function(e, t, n) {
        "use strict";

        function a() {
            return Math.floor(((new Date).getTime() - 6e5) / 1e3)
        }

        function s() {
            var e = new Date;
            return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
        }
        n.d(t, "a", function() {
            return u
        });
        var i = n(0),
            r = n(457),
            o = (n.n(r), n(89)),
            l = n(280),
            c = {
                games: {
                    indexName: o.a.Games,
                    hitsPerPage: 2,
                    topNumericFilters: ["popularity>1"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                videos: {
                    indexName: o.a.Videos,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["created_at>" + s()]
                    },
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                users: {
                    indexName: o.a.Users,
                    hitsPerPage: 2,
                    topNumericFilters: ["followers>50"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                },
                channels: {
                    indexName: o.a.Channels,
                    hitsPerPage: 6,
                    get topNumericFilters() {
                        return ["channel_count>10", "updated_on>" + a()]
                    },
                    get singleTypeNumericFilters() {
                        return ["updated_on>" + a()]
                    },
                    optionalFacetFilters: ""
                },
                communities: {
                    indexName: o.a.Communities,
                    hitsPerPage: 2,
                    topNumericFilters: ["channels>9"],
                    singleTypeNumericFilters: [],
                    optionalFacetFilters: ""
                }
            },
            u = function() {
                function e(e, t) {
                    this.client = r(e, t)
                }
                return e.prototype.queryTopResults = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, a, s, r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = [], a = [], n.push(this.getTopResult(c.games, e)), n.push(this.getTopResult(c.videos, e)), n.push(this.getTopResult(c.users, e)), n.push(this.getTopResult(c.channels, e)), n.push(this.getTopResult(c.communities, e)), a.push(this.getTotalResult(c.games, e)), a.push(this.getTotalResult(c.videos, e)), a.push(this.getTotalResult(c.users, e)), a.push(this.getTotalResult(c.channels, e)), a.push(this.getTotalResult(c.communities, e)), [4, this.client.search(n.concat(a))];
                                case 1:
                                    return s = i.sent(), r = s.results, o = {
                                        id: t,
                                        games: {
                                            totalHits: r[5].nbHits,
                                            hits: r[0].hits
                                        },
                                        videos: {
                                            totalHits: r[6].nbHits,
                                            hits: r[1].hits
                                        },
                                        users: {
                                            totalHits: r[7].nbHits,
                                            hits: r[2].hits
                                        },
                                        channels: {
                                            totalHits: r[8].nbHits,
                                            hits: r[3].hits
                                        },
                                        communities: {
                                            totalHits: r[9].nbHits,
                                            hits: r[4].hits
                                        }
                                    }, [2, o]
                            }
                        })
                    })
                }, e.prototype.queryForType = function(e, t, n, a) {
                    var s = void 0 === a ? {} : a,
                        r = s.page,
                        l = void 0 === r ? 0 : r,
                        u = s.hitsPerPage,
                        d = void 0 === u ? 50 : u,
                        m = s.facetFilters,
                        p = void 0 === m ? "" : m,
                        h = s.numericFilters;
                    return i.__awaiter(this, void 0, void 0, function() {
                        var a, s, r, u, m, g, f, b, _ = this;
                        return i.__generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    switch (a = {
                                        id: n,
                                        currentPage: l
                                    }, s = function(e) {
                                        return i.__awaiter(_, void 0, void 0, function() {
                                            var n, s;
                                            return i.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return n = {
                                                            indexName: e.indexName,
                                                            query: t,
                                                            params: {
                                                                page: l,
                                                                hitsPerPage: d,
                                                                numericFilters: h || e.singleTypeNumericFilters,
                                                                facets: "*",
                                                                facetFilters: p
                                                            }
                                                        }, [4, this.client.search([n])];
                                                    case 1:
                                                        return s = i.sent(), a.exhaustedHits = !s.results[0].nbHits || s.results[0].hits.length < d, [2, {
                                                            totalHits: s.results[0].nbHits,
                                                            hits: s.results[0].hits
                                                        }]
                                                }
                                            })
                                        })
                                    }, r = e) {
                                        case o.a.Games:
                                            return [3, 1];
                                        case o.a.Users:
                                            return [3, 3];
                                        case o.a.Channels:
                                            return [3, 5];
                                        case o.a.Videos:
                                            return [3, 7];
                                        case o.a.Communities:
                                            return [3, 9]
                                    }
                                    return [3, 11];
                                case 1:
                                    return u = a, [4, s(c.games)];
                                case 2:
                                    return u.games = v.sent(), [3, 12];
                                case 3:
                                    return m = a, [4, s(c.users)];
                                case 4:
                                    return m.users = v.sent(), [3, 12];
                                case 5:
                                    return g = a, [4, s(c.channels)];
                                case 6:
                                    return g.channels = v.sent(), [3, 12];
                                case 7:
                                    return f = a, [4, s(c.videos)];
                                case 8:
                                    return f.videos = v.sent(), [3, 12];
                                case 9:
                                    return b = a, [4, s(c.communities)];
                                case 10:
                                    return b.communities = v.sent(), [3, 12];
                                case 11:
                                    return [2, null];
                                case 12:
                                    return [2, a]
                            }
                        })
                    })
                }, e.prototype.queryVideos = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var a, s, r, u;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    switch (n.sort) {
                                        case l.b.Newest:
                                            a = o.a.VideosNewest;
                                            break;
                                        case l.b.Popular:
                                        default:
                                            a = o.a.Videos
                                    }
                                    switch (s = [], n.length) {
                                        case l.a.Short:
                                            s.push("length<=900");
                                            break;
                                        case l.a.Long:
                                            s.push("length>900")
                                    }
                                    switch (r = {
                                        indexName: a,
                                        query: e,
                                        params: {
                                            page: 0,
                                            hitsPerPage: c.videos.hitsPerPage,
                                            numericFilters: s,
                                            facets: "*",
                                            facetFilters: ""
                                        }
                                    }, n.type) {
                                        case l.c.PastBroadcasts:
                                            r.params.facetFilters = "broadcast_type:archive";
                                            break;
                                        case l.c.Uploads:
                                            r.params.facetFilters = "broadcast_type:upload";
                                            break;
                                        case l.c.Highlights:
                                            r.params.facetFilters = "broadcast_type:highlight"
                                    }
                                    return [4, this.client.search([r])];
                                case 1:
                                    return u = i.sent(), [2, {
                                        id: t,
                                        totalHits: u.results[0].nbHits,
                                        hits: u.results[0].hits
                                    }]
                            }
                        })
                    })
                }, e.prototype.getTopResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            page: 0,
                            hitsPerPage: e.hitsPerPage,
                            numericFilters: e.topNumericFilters
                        }
                    }
                }, e.prototype.getTotalResult = function(e, t) {
                    return {
                        indexName: e.indexName,
                        query: t,
                        params: {
                            hitsPerPage: 0,
                            numericFilters: e.singleTypeNumericFilters
                        }
                    }
                }, e
            }()
    },
    1956: function(e, t, n) {
        e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd364135a9d764.png"
    },
    1957: function(e, t, n) {
        e.exports = n.p + "assets/emotes-e2efaf11b6d1b3db4fe5fd980350e28b.png"
    },
    1958: function(e, t) {},
    1959: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Following_CurrentUser"
                },
                variableDefinitions: [{
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
                                    value: "follows"
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
                                        value: "filter"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "SUBBABLE"
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
                                                                value: "300"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 359
            }
        };
        n.loc.source = {
            body: "query Following_CurrentUser($limit: Int, $cursor: Cursor){\n  currentUser{\n    id\n    login\n    follows(first: $limit, after: $cursor, filter: SUBBABLE){\n      edges{\n        node{\n          id\n          login\n          displayName\n          profileImageURL(width: 300)\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1960: function(e, t) {},
    1961: function(e, t) {},
    1962: function(e, t) {},
    1963: function(e, t) {},
    2039: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(S.d)(e)
            }
        }

        function s(e) {
            return Object(v.bindActionCreators)({
                login: function() {
                    return w.f(y.a.SubsLandingPage)
                }
            }, e)
        }

        function i(e) {
            return {
                user: Object(S.c)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(8),
            o = n(0),
            l = n(1),
            c = n(2),
            u = n(1956),
            d = n.n(u),
            m = n(1957),
            p = n.n(m),
            h = n(30),
            g = n(922),
            f = n(918),
            b = n(14),
            _ = n(6),
            v = n(11),
            y = n(51),
            w = n(35),
            S = n(19),
            k = n(9),
            C = n(23),
            E = n(12),
            P = n(3),
            x = (n(1958), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleClick = function() {
                        t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.followedChannel.profileImageURL;
                    return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), l.createElement(E.a, {
                        className: "followed-channel-link",
                        to: "/subs/" + this.props.followedChannel.login,
                        onClick: this.handleClick
                    }, l.createElement(P.U, {
                        textAlign: P._22.Center,
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(P.P, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement("img", {
                        className: "followed-channel-link__avatar",
                        src: e,
                        alt: this.props.followedChannel.displayName
                    })), l.createElement(P.P, {
                        margin: {
                            top: 0,
                            bottom: 1
                        }
                    }, l.createElement(P._21, {
                        className: "followed-channel-link__name",
                        color: P.F.Link,
                        ellipsis: !0,
                        noWrap: !0
                    }, this.props.followedChannel.displayName))))
                }, t = o.__decorate([Object(_.c)("FollowedChannelLink")], t)
            }(l.Component)),
            N = x,
            F = n(1332),
            T = n(1959),
            H = (n(1960), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        followedChannels: []
                    }, t.messages = {
                        title: Object(c.d)("Streamers You Follow", "SubsLandingFollowing"),
                        login: Object(c.d)("Log in", "SubsLandingFollowing"),
                        loginTitle: Object(c.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                        showMore: Object(c.d)("Show More", "SubsLandingFollowing"),
                        emptyFollows: Object(c.d)("No followed channels to show", "SubsLandingFollowing")
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.getFollowedChannels = function() {
                        if (t.props.data.loading || t.props.data.error) return [l.createElement(P._1, {
                            key: "followed-channels-placeholder-1",
                            height: 96
                        })];
                        var e = t.state.followedChannels.map(function(e) {
                            return l.createElement(N, {
                                key: "followed-channel-link-" + e.id,
                                followedChannel: e,
                                onClick: t.onFollowClick
                            })
                        });
                        return e.length < 1 ? [l.createElement(P._21, {
                            key: "followed-channels_empty"
                        }, t.messages.emptyFollows)] : e
                    }, t.onFollowClick = function(e, n) {
                        Object(F.a)({
                            login: t.props.data.currentUser.login,
                            userId: t.props.data.currentUser.id,
                            channel: n,
                            channelId: e,
                            clickthroughLocation: "followed"
                        })
                    }, t.getShowMore = function() {
                        return t.props.data.loading || t.props.data.error || !t.props.data.currentUser.follows.pageInfo || !t.props.data.currentUser.follows.pageInfo.hasNextPage ? null : l.createElement(P.U, {
                            className: "subs-landing-followed-channels__show-more",
                            margin: {
                                top: 1
                            }
                        }, l.createElement(P.u, {
                            fullWidth: !0,
                            onClick: t.onShowMore
                        }, t.messages.showMore))
                    }, t.onShowMore = function() {
                        if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    if (e.data.currentUser && e.data.currentUser.follows.edges) {
                        var t = (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        });
                        this.setState({
                            followedChannels: t
                        })
                    }
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? l.createElement(P.U, {
                        className: "subs-landing-followed-channels",
                        display: P.H.Flex,
                        alignItems: P.c.Center,
                        flexDirection: P.J.Column,
                        fullWidth: !0
                    }, l.createElement(P.P, {
                        margin: {
                            top: 3,
                            bottom: 2
                        }
                    }, l.createElement(P._21, {
                        type: P._26.H3,
                        color: P.F.Link,
                        bold: !0,
                        className: "subs-landing-followed-channels__title"
                    }, this.messages.title)), l.createElement(P._33, {
                        center: !0,
                        gutterSize: P._35.Small
                    }, this.getFollowedChannels()), this.getShowMore()) : l.createElement(P.U, {
                        textAlign: P._22.Center,
                        margin: {
                            top: 3
                        }
                    }, l.createElement(P.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, this.messages.login), l.createElement(P._21, null, this.messages.loginTitle))
                }, t = o.__decorate([Object(k.a)(T, {
                    options: function() {
                        return {
                            variables: {
                                limit: 12,
                                cursor: ""
                            }
                        }
                    },
                    props: function(e) {
                        return o.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: T,
                                    variables: o.__assign({}, e.data.variables, {
                                        cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            currentUser: o.__assign({}, a.currentUser, {
                                                follows: o.__assign({}, a.currentUser.follows, {
                                                    edges: Object(C.b)(e.currentUser.follows.edges, a.currentUser.follows.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(l.Component)),
            L = H,
            U = Object(r.a)(a, s)(L),
            D = n(65),
            O = n(20),
            R = n(89),
            I = n(139),
            j = n(409),
            M = n(88),
            A = n(52),
            V = (n(1961), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamerClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.streamer_id;) n = n.parentElement;
                        n.dataset.streamer_login && n.dataset.streamer_id && t.props.onResultSelected({
                            channel: n.dataset.streamer_login,
                            channelId: n.dataset.streamer_id
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? l.createElement(P.X, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), l.createElement(P._17, {
                        elevation: 4
                    }, l.createElement("div", {
                        className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, l.createElement(P._17, {
                        className: "streamer-search-panel__results",
                        background: P.m.Base,
                        position: P._2.Relative,
                        overflow: P.Y.Hidden,
                        display: P.H.Block,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        fullHeight: !0
                    }, l.createElement(P.P, {
                        overflow: P.Y.Hidden,
                        position: P._2.Relative,
                        fullHeight: !0
                    }, l.createElement(h.b, {
                        suppressScrollX: !0
                    }, l.createElement(P.U, null, e, l.createElement(h.a, {
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))))
                }, t.prototype.getStreamerResultContent = function() {
                    var e = this;
                    if (!this.props.streamerResults) return l.createElement(P.U, null);
                    var t = this.props.streamerResults.results.map(function(t) {
                        var n = Object(A.a)(t.login || "", t.name || "");
                        return l.createElement(P.S, {
                            linkTo: "/subs/" + t.login,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "streamer-search-result-" + t.id,
                            "data-streamer_id": t.id,
                            "data-streamer_login": t.login,
                            onClick: e.onStreamerClick
                        }, l.createElement(P.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, l.createElement(P.A, {
                            row: !0
                        }, l.createElement(P.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: P.D.Size4,
                            aspect: P.k.Aspect1x1
                        }), l.createElement(P.B, null, l.createElement(P.P, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(P._21, {
                            type: P._26.H5,
                            ellipsis: !0
                        }, n))))))
                    });
                    return l.createElement(P.U, null, t)
                }, t.prototype.getErrorMessage = function() {
                    return l.createElement(P._21, null, "Error")
                }, t.prototype.getNoResultsMessage = function() {
                    return l.createElement(P._21, null, "No Results")
                }, t
            }(l.Component)),
            q = V,
            z = (n(1962), {
                searchPlaceholder: Object(c.d)("Search for a Streamer", "StreamerSearch")
            }),
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(P.U, {
                        margin: {
                            top: 2
                        },
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        fullWidth: !0
                    }, l.createElement(P.P, {
                        fullWidth: !0,
                        zIndex: P._38.Above,
                        position: P._2.Relative
                    }, l.createElement("div", {
                        className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                    }, l.createElement(M.a, {
                        onClickOut: this.props.onClickOut
                    }, l.createElement(P._11, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: z.searchPlaceholder,
                        id: "streamer-search-input"
                    }), l.createElement(P.p, {
                        direction: P.q.BottomCenter,
                        noTail: !0,
                        size: P.r.ExtraLarge,
                        show: this.props.isOpen
                    }, l.createElement(q, {
                        isOpen: this.props.isOpen,
                        streamerResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    }))))))
                }, t
            }(l.Component),
            W = 50,
            G = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, W)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === D.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === D.a.Up ? t.focusNext(-1) : e.keyCode === D.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function(e) {
                        t.setState({
                            isOpen: !1
                        });
                        var n = Object.assign({
                            login: t.props.user ? t.props.user.login : null,
                            userId: t.props.user ? String(t.props.user.id) : null,
                            channel: e.channel,
                            channelId: e.channelId,
                            clickthroughLocation: "search"
                        }, e);
                        Object(F.a)(n)
                    }, t.loadMore = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, a;
                            return o.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(R.a.Users, this.state.term, "", {
                                            page: e,
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return t = s.sent(), [3, 4];
                                    case 3:
                                        return n = s.sent(), c.i.error(n, "Algolia page search failed"), this.setState(o.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (a = Object(j.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: a.currentUserResults,
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: a.exhaustedHits
                                        }), [2]) : (this.setState(o.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.state = t.getEmptyState(), t.searchClient = new I.a(c.a.algoliaApplicationID, c.a.algoliaAPIKey), t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(B, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        loadMore: this.loadMore,
                        onResultSelected: this.onResultSelected,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        a = document.activeElement,
                        s = Array.prototype.indexOf.call(n, a);
                    if (t = s < 0 ? e > 0 ? 0 : n.length - 1 : s + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var i = n.item(t);
                        i.focus(), i.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: i
                        })
                    }
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var t, n, a, s, i, r;
                        return o.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = O.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !a && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(R.a.Users, e, n, {
                                        facetFilters: "has_subscription_products:true"
                                    })];
                                case 2:
                                    return s = l.sent(), [3, 4];
                                case 3:
                                    return i = l.sent(), c.i.error(i, "Algolia top results search failed"), this.setState(o.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return s ? this.state.queryID !== s.id ? [2] : (r = Object(j.b)({
                                        searchResults: s,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return o.__assign({}, n, r, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(o.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t = o.__decorate([Object(_.c)("StreamerSearch")], t)
            }(l.Component),
            K = Object(r.a)(i)(G),
            $ = (n(1963), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.messages = {
                        title: Object(c.d)("Subscriptions", "SubsLandingPage"),
                        info: Object(c.d)("Subscribe to a streamer to enjoy exclusive emotes, badges and more!", "SubsLandingPage"),
                        searchTitle: Object(c.d)("Search For Streamer", "SubsLandingPage"),
                        searchInfo: Object(c.d)("Find a streamer you're thinking of subbing to, then click on their name to go to their page and subscribe.", "SubsLandingPage"),
                        perksTitle: Object(c.d)("Subscriber Perks", "SubsLandingPage"),
                        perksInfo: Object(c.d)("Subscriptions let Partners and Affiliates interact with their most passionate fans. Subscribing unlocks exclusive chat badges, plus many streamers host sub-only games or events too.", "SubsLandingPage"),
                        emotesTitle: Object(c.d)("Emotes", "SubsLandingPage"),
                        emotesInfo: Object(c.d)("Subscribing to a streamer unlocks custom emotes, usable on any channel on Twitch. The more subs a streamer has, the more custom emotes slots will be unlocked, so more support equals more rewards for everyone.", "SubsLandingPage")
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), c.n.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return l.createElement(P.U, {
                        className: "subs-landing-page",
                        fullHeight: !0,
                        display: P.H.Flex,
                        justifyContent: P.T.Center
                    }, l.createElement(P.P, {
                        fullWidth: !0
                    }, l.createElement(h.b, {
                        suppressScrollX: !0
                    }, l.createElement(P.U, {
                        fullWidth: !0,
                        display: P.H.Flex,
                        justifyContent: P.T.Center
                    }, l.createElement(P.U, {
                        className: "subs-landing-page-contents",
                        textAlign: P._22.Center,
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        alignItems: P.c.Center,
                        flexWrap: P.K.NoWrap,
                        flexDirection: P.J.Column,
                        padding: {
                            x: 2
                        },
                        fullHeight: !0
                    }, l.createElement(P.P, {
                        margin: {
                            top: 4
                        }
                    }, l.createElement(P._21, {
                        type: P._26.H2,
                        color: P.F.Link,
                        bold: !0
                    }, this.messages.title)), l.createElement(P.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(P._21, {
                        type: P._26.P,
                        fontSize: P.L.Size5
                    }, this.messages.info)), l.createElement(P.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(P._21, {
                        type: P._26.H3,
                        color: P.F.Link,
                        bold: !0,
                        fontSize: P.L.Size4
                    }, this.messages.searchTitle)), l.createElement(P.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(P._21, {
                        type: P._26.P,
                        fontSize: P.L.Size5
                    }, this.messages.searchInfo)), l.createElement(K, null), l.createElement(U, null), l.createElement(P.U, {
                        className: "subs-landing-page-contents__section",
                        display: P.H.Flex,
                        justifyContent: P.T.Center
                    }, l.createElement(P.U, {
                        className: "subs-landing-page-contents__section-info",
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        alignItems: P.c.Center,
                        flexDirection: P.J.Column,
                        margin: {
                            x: 3
                        }
                    }, l.createElement(P.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(P._21, {
                        type: P._26.H3,
                        color: P.F.Link,
                        bold: !0,
                        fontSize: P.L.Size4
                    }, this.messages.perksTitle)), l.createElement(P.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(P._21, {
                        type: P._26.P,
                        fontSize: P.L.Size5
                    }, this.messages.perksInfo))), l.createElement(P.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, l.createElement("img", {
                        src: d.a
                    }))), l.createElement(P.U, {
                        className: "subs-landing-page-contents__section",
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(P.U, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__image"
                    }, l.createElement("img", {
                        src: p.a
                    })), l.createElement(P.U, {
                        className: "subs-landing-page__section-info",
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        alignItems: P.c.Center,
                        flexDirection: P.J.Column,
                        margin: {
                            x: 3
                        }
                    }, l.createElement(P.P, {
                        margin: {
                            top: 3
                        },
                        className: "subs-landing-page-contents__heading"
                    }, l.createElement(P._21, {
                        type: P._26.H3,
                        color: P.F.Link,
                        bold: !0,
                        fontSize: P.L.Size4
                    }, this.messages.emotesTitle)), l.createElement(P.P, {
                        margin: {
                            top: 2
                        },
                        className: "subs-landing-page-contents__paragraph"
                    }, l.createElement(P._21, {
                        type: P._26.P,
                        fontSize: P.L.Size5
                    }, this.messages.emotesInfo)))))))))
                }, t = o.__decorate([Object(_.c)("SubsLandingPage", {
                    destination: f.a.SubsLandingPage
                }), Object(g.a)({
                    location: b.PageviewLocation.SubsLandingPage
                })], t)
            }(l.Component)),
            J = $,
            Q = Object(r.a)()(J);
        n.d(t, "SubsLandingPage", function() {
            return Q
        })
    },
    23: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = new Set(e.map(function(e) {
                return e.node.id
            }));
            return e.concat(t.filter(function(e) {
                return !n.has(e.node.id)
            }))
        }

        function s(e) {
            return {
                variables: {
                    input: e
                }
            }
        }

        function i(e, t, n, a) {
            void 0 === t && (t = {});
            try {
                var s = l.n.apollo.client.readQuery({
                    query: e,
                    variables: t
                });
                if (a && a(s)) return;
                var i = o(s, function(e) {
                    return e
                }, function(e) {
                    return n(e)
                });
                l.n.apollo.client.writeQuery({
                    query: e,
                    variables: t,
                    data: i
                })
            } catch (e) {
                l.i.warn("Failed writing updated query to Apollo", e)
            }
        }

        function r(e) {
            try {
                var t = e.id,
                    n = e.fragment,
                    a = e.mutator,
                    s = l.n.apollo.client.readFragment({
                        id: t,
                        fragment: n
                    }),
                    i = o(s, function(e) {
                        return e
                    }, function(e) {
                        return a(e)
                    });
                l.n.apollo.client.writeFragment({
                    fragment: n,
                    id: t,
                    data: i
                })
            } catch (e) {
                l.i.warn("Failed writing updated query to Apollo", e)
            }
        }
        t.b = a, t.a = s, t.d = i, t.c = r;
        var o = n(141),
            l = (n.n(o), n(2))
    },
    280: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return i
        });
        var a;
        ! function(e) {
            e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
        }(a || (a = {}));
        var s;
        ! function(e) {
            e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
        }(s || (s = {}));
        var i;
        ! function(e) {
            e[e.Popular = 0] = "Popular", e[e.Newest = 1] = "Newest"
        }(i || (i = {}))
    },
    406: function(e, t, n) {
        "use strict";

        function a(e) {
            return e ? "/directory/" + e : "/directory"
        }

        function s(e) {
            return "/directory/game/" + encodeURIComponent(e)
        }

        function i(e) {
            return "/communities/" + encodeURIComponent(e)
        }

        function r(e) {
            return "/settings/" + encodeURIComponent(e)
        }

        function o(e) {
            return "/events/" + encodeURIComponent(e)
        }
        t.b = a, t.d = s, t.a = i, t.e = r, t.c = o
    },
    409: function(e, t, n) {
        "use strict";

        function a(e) {
            var t, n, a, i, c, u = e.append,
                d = void 0 !== u && u,
                m = e.searchResults,
                p = e.currentGameResults,
                h = e.currentUserResults,
                g = e.currentCommunityResults,
                f = e.currentVideoResults,
                b = e.currentLiveResults;
            if (m.games && (t = {
                    totalHits: m.games.totalHits,
                    results: d && p ? p.results : []
                }, d && m.exhaustedHits && p && !m.games.totalHits && (t.totalHits = p.totalHits), t.results = t.results.concat(m.games.hits.map(function(e, t) {
                    var n, a = r.n.intl.getLanguageCode();
                    return n = a && void 0 !== e.localizations && a in e.localizations ? e.localizations[a] : e.name, {
                        title: n,
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: Object(o.d)(e.name),
                            state: {
                                content: l.PageviewContent.Game,
                                content_index: t,
                                medium: l.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        popularity: e.popularity
                    }
                }))), m.videos) {
                var _ = d && f ? f.results : [],
                    v = m.videos.totalHits;
                d && m.exhaustedHits && f && !m.videos.totalHits && (v = f.totalHits), i = s(_, m.videos, v)
            }
            return m.users && (n = {
                totalHits: d && h ? h.totalHits : m.users.totalHits,
                results: d && h ? h.results : []
            }, d && m.exhaustedHits && h && !m.users.totalHits && (n.totalHits = h.totalHits), n.results = n.results.concat(m.users.hits.map(function(e, t) {
                return {
                    login: e.login,
                    name: e.name,
                    thumbnail: e.profile_image || r.a.defaultAvatarURL,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: l.PageviewContent.User,
                            content_index: t,
                            medium: l.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    followers: e.followers
                }
            }))), m.channels && (c = {
                totalHits: d && b ? b.totalHits : m.channels.totalHits,
                results: d && b ? b.results : []
            }, c.results = c.results.concat(m.channels.hits.map(function(e, t) {
                return {
                    viewerCount: e.channel_count,
                    login: e.login,
                    name: e.name,
                    thumbnailAltText: e.status,
                    linkTo: {
                        pathname: "/" + e.login,
                        state: {
                            content: l.PageviewContent.Live,
                            content_index: t,
                            medium: l.PageviewMedium.NavSearch
                        }
                    },
                    id: e.objectID,
                    status: e.status
                }
            }))), m.communities && (a = {
                totalHits: m.communities.totalHits,
                results: d && g ? g.results : []
            }, d && m.exhaustedHits && g && !m.communities.totalHits && (a.totalHits = g.totalHits), a.results = a.results.concat(m.communities.hits.map(function(e, t) {
                return {
                    name: e.name,
                    thumbnail: e.avatar_image_url,
                    thumbnailAltText: e.name,
                    linkTo: {
                        pathname: "/communities/" + e.name,
                        state: {
                            content: l.PageviewContent.Community,
                            content_index: t,
                            medium: l.PageviewMedium.NavSearch
                        }
                    },
                    viewerCount: e.viewers,
                    id: e.objectID
                }
            }))), {
                currentGameResults: t,
                currentUserResults: n,
                currentLiveResults: c,
                currentCommunityResults: a,
                currentVideoResults: i,
                exhaustedHits: m.exhaustedHits
            }
        }

        function s(e, t, n) {
            return {
                results: e.concat(t.hits.map(i)),
                totalHits: t.totalHits || n
            }
        }

        function i(e, t) {
            return {
                title: e.title,
                thumbnail: e.thumbnail,
                thumbnailAltText: e.title,
                linkTo: {
                    pathname: "/videos/" + e.objectID,
                    state: {
                        content: l.PageviewContent.Video,
                        content_index: t,
                        medium: l.PageviewMedium.NavSearch
                    }
                },
                login: e.broadcaster_login,
                name: e.broadcaster_name,
                createdAt: e.created_at,
                length: e.length,
                id: e.objectID
            }
        }
        t.b = a, t.a = i;
        var r = n(2),
            o = n(406),
            l = n(14)
    },
    458: function(e, t) {},
    52: function(e, t, n) {
        "use strict";

        function a(e) {
            return i.test(e)
        }
        n.d(t, "a", function() {
            return r
        });
        var s = n(1),
            i = (n.n(s), /^[\x00-\x7F]*$/),
            r = function(e, t, n) {
                return void 0 === n && (n = !1), t && e && !a(t) ? n ? t + " (" + e + ")" : s.createElement("span", null, t, " ", s.createElement("span", {
                    className: "intl-login"
                }, "(" + e + ")")) : t || (e || "")
            }
    },
    89: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "game", e.Videos = "vod", e.VideosNewest = "vod_by_created_at", e.Users = "user", e.Channels = "live_channel", e.Communities = "community"
        }(a || (a = {}))
    },
    918: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
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
    922: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = s.__assign({}, e.properties));
                                var n = s.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    r = i.content,
                                    o = i.medium,
                                    c = i.content_index;
                                l.n.tracking.trackPageview(s.__assign({
                                    content: r,
                                    medium: o,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return s.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return r.createElement(t, s.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                s = i.stringify(t);
                            s.length > 0 && (a = "?" + s), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(r.Component);
                return Object(o.f)(n)
            }
        }
        var s = n(0),
            i = n(21),
            r = n(1),
            o = n(12),
            l = n(2);
        n.d(t, "a", function() {
            return a
        })
    }
});
//# sourceMappingURL=pages.subs.components.subs-landing-page-86ed9428c80f1de60a242d6d47893985.js.map