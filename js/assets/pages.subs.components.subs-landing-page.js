(window.webpackJsonp = window.webpackJsonp || []).push([
    [178], {
        "3GEC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("2xye");

            function s(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return a.__generator(this, function(n) {
                        return t = {
                            login: e.login,
                            user_id: Number(e.userId),
                            channel: e.channel,
                            channel_id: e.channelId,
                            clickthrough_location: e.clickthroughLocation
                        }, i.n.track(r.SpadeEventType.SubsLandingStreamerClick, t), [2]
                    })
                })
            }

            function o(e) {
                return a.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return a.__generator(this, function(a) {
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
                        }, i.n.track(r.SpadeEventType.Subscription, n), [2]
                    })
                })
            }
        },
        "8Ad5": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.Comma = 188] = "Comma", e[e.Period = 190] = "Period"
                }(a || (a = {}))
        },
        "9kXc": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("/7QA"),
                i = n("yLwq"),
                r = n("kduP"),
                s = n("2xye"),
                o = n("sLmD");

            function l(e) {
                var t, n, o, l, d, m = e.append,
                    p = void 0 !== m && m,
                    g = e.searchResults,
                    h = e.currentGameResults,
                    f = e.currentUserResults,
                    b = e.currentCommunityResults,
                    v = e.currentVideoResults,
                    _ = e.currentLiveResults;
                if (g.games && (t = {
                        totalHits: g.games.totalHits,
                        results: p && h ? h.results : []
                    }, p && g.exhaustedHits && h && !g.games.totalHits && (t.totalHits = h.totalHits), t.results = t.results.concat(g.games.hits.map(function(e, t) {
                        var n, i = a.o.intl.getLanguageCode();
                        n = i && void 0 !== e.localizations && i in e.localizations ? e.localizations[i] : e.name;
                        var o = u(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(r.c)(e.name),
                                state: {
                                    content: s.PageviewContent.Game,
                                    content_index: t,
                                    medium: s.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: o
                        }
                    }))), g.videos) {
                    var y = p && v ? v.results : [],
                        k = g.videos.totalHits;
                    p && g.exhaustedHits && v && !g.videos.totalHits && (k = v.totalHits), l = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(c)),
                            totalHits: t.totalHits || n
                        }
                    }(y, g.videos, k)
                }
                return g.users && (n = {
                    totalHits: p && f ? f.totalHits : g.users.totalHits,
                    results: p && f ? f.results : []
                }, p && g.exhaustedHits && f && !g.users.totalHits && (n.totalHits = f.totalHits), n.results = n.results.concat(g.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(i.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.User,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), g.channels && ((d = {
                    totalHits: p && _ ? _.totalHits : g.channels.totalHits,
                    results: p && _ ? _.results : []
                }).results = d.results.concat(g.channels.hits.map(function(e, t) {
                    var n = u(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: s.PageviewContent.Live,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: n
                    }
                }))), g.communities && (o = {
                    totalHits: g.communities.totalHits,
                    results: p && b ? b.results : []
                }, p && g.exhaustedHits && b && !g.communities.totalHits && (o.totalHits = b.totalHits), o.results = o.results.concat(g.communities.hits.map(function(e, t) {
                    return {
                        name: e.name,
                        thumbnail: e.avatar_image_url,
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/communities/" + e.name,
                            state: {
                                content: s.PageviewContent.Community,
                                content_index: t,
                                medium: s.PageviewMedium.NavSearch
                            }
                        },
                        viewerCount: e.viewers,
                        id: e.objectID
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: d,
                    currentCommunityResults: o,
                    currentVideoResults: l,
                    exhaustedHits: g.exhaustedHits
                }
            }

            function c(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: s.PageviewContent.Video,
                            content_index: t,
                            medium: s.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function u(e) {
                if (e) return e.map(function(e) {
                    var t, n = Object(o.a)();
                    return t = n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        BSTw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 57
                }
            };
            n.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "H/lO": function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.Communities = "community", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(a || (a = {}))
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n("mrSG"),
                i = n("hnrd"),
                r = n("/7QA"),
                s = n("D7An"),
                o = n("H/lO"),
                l = n("vR4/"),
                c = n("BSTw"),
                u = n("Z9JJ"),
                d = {
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
                            return ["created_at>" + g(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
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
                            return ["channel_count>10", "updated_on>" + g(p())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + g(p())]
                        },
                        optionalFacetFilters: ""
                    },
                    communities: {
                        indexName: o.a.Communities,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: o.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: o.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                m = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = i(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === r.o.experiments.getAssignment(s.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var n, i, r, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return i = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), n.push(this.getTopResult(d.communities, e)), i.push(this.getTotalResult(d.games, e)), i.push(this.getTotalResult(d.videos, e)), i.push(this.getTotalResult(d.users, e)), i.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(i))];
                                    case 1:
                                        return (r = a.sent()) ? (s = r.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: s[5].nbHits,
                                                hits: s[0].hits
                                            },
                                            videos: {
                                                totalHits: s[6].nbHits,
                                                hits: s[1].hits
                                            },
                                            users: {
                                                totalHits: s[7].nbHits,
                                                hits: s[2].hits
                                            },
                                            channels: {
                                                totalHits: s[8].nbHits,
                                                hits: s[3].hits
                                            },
                                            communities: {
                                                totalHits: s[4].nbHits,
                                                hits: s[4].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                communities: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, i) {
                        var r = void 0 === i ? {} : i,
                            s = r.page,
                            l = void 0 === s ? 0 : s,
                            c = r.hitsPerPage,
                            u = void 0 === c ? 50 : c,
                            m = r.facetFilters,
                            p = void 0 === m ? "" : m,
                            g = r.numericFilters,
                            h = r.restrictSearchableAttributes,
                            f = void 0 === h ? [] : h;
                        return a.__awaiter(this, void 0, void 0, function() {
                            var i, r, s, c, m, h, b, v, _, y = this;
                            return a.__generator(this, function(k) {
                                switch (k.label) {
                                    case 0:
                                        switch (i = {
                                            id: n,
                                            currentPage: l
                                        }, r = function(e) {
                                            return a.__awaiter(y, void 0, void 0, function() {
                                                var n, r;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: l,
                                                                    hitsPerPage: u,
                                                                    numericFilters: g || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: p,
                                                                    restrictSearchableAttributes: f
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (r = a.sent()) ? (i.exhaustedHits = !r.results[0].nbHits || r.results[0].hits.length < u, [2, {
                                                                totalHits: r.results[0].nbHits,
                                                                hits: r.results[0].hits
                                                            }]) : (i.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case o.a.Games:
                                                return [3, 1];
                                            case o.a.Users:
                                                return [3, 3];
                                            case o.a.Channels:
                                                return [3, 5];
                                            case o.a.Videos:
                                                return [3, 7];
                                            case o.a.Communities:
                                                return [3, 9];
                                            case o.a.StreamTags:
                                                return [3, 11];
                                            case o.a.Tags:
                                                return [3, 13]
                                        }
                                        return [3, 15];
                                    case 1:
                                        return s = i, [4, r(d.games)];
                                    case 2:
                                        return s.games = k.sent(), [3, 16];
                                    case 3:
                                        return c = i, [4, r(d.users)];
                                    case 4:
                                        return c.users = k.sent(), [3, 16];
                                    case 5:
                                        return m = i, [4, r(d.channels)];
                                    case 6:
                                        return m.channels = k.sent(), [3, 16];
                                    case 7:
                                        return h = i, [4, r(d.videos)];
                                    case 8:
                                        return h.videos = k.sent(), [3, 16];
                                    case 9:
                                        return b = i, [4, r(d.communities)];
                                    case 10:
                                        return b.communities = k.sent(), [3, 16];
                                    case 11:
                                        return v = i, [4, r(d.streamTags)];
                                    case 12:
                                        return v.streamTags = k.sent(), [3, 16];
                                    case 13:
                                        return _ = i, [4, r(d.tags)];
                                    case 14:
                                        return _.tags = k.sent(), [3, 16];
                                    case 15:
                                        return [2, null];
                                    case 16:
                                        return [2, i]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var i, r, s, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        switch (i = o.a.Videos, r = [], n.length) {
                                            case l.a.Short:
                                                r.push("length<=900");
                                                break;
                                            case l.a.Long:
                                                r.push("length>900")
                                        }
                                        switch (s = {
                                            indexName: i,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: r,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case l.b.PastBroadcasts:
                                                s.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case l.b.Uploads:
                                                s.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case l.b.Highlights:
                                                s.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([s])];
                                    case 1:
                                        return (c = a.sent()) ? [2, {
                                            id: t,
                                            totalHits: c.results[0].nbHits,
                                            hits: c.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: c
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.error(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            n = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: u,
                            variables: n,
                            fetchPolicy: "network-only"
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.error(e, "Failed to get search results"), e
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
                    }, e.prototype.query = function(e) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var t, n, i, r, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        n = Date.now(), r = !1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (s = e[0].query, [4, this.getSearchResults(s)]) : [3, 3];
                                    case 2:
                                        return t = a.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = a.sent(), a.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return a.sent(), r = !0, t = null, [3, 7];
                                    case 7:
                                        return i = Date.now(), this.countryCode && (r ? this.stats.recordSearchError(this.countryCode, i - n) : this.stats.recordSearchSuccess(this.countryCode, i - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function p() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function g(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("q1tI"),
                i = /^[\x00-\x7F]*$/,
                r = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !s(t) ? n ? t + " (" + e + ")" : a.createElement("span", null, t, " ", a.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function s(e) {
                return i.test(e)
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("cr+I"),
                r = n("q1tI"),
                s = n("wIs1"),
                o = n("/7QA");

            function l(e) {
                return function(t) {
                    var n = function(n) {
                        function s(t) {
                            var i = n.call(this, t) || this;
                            return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                                if (!(i.tracked || e.skip && e.skip(i.props))) {
                                    i.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var n = a.__assign({}, i.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var r = i.referenceTracking,
                                        s = r.content,
                                        l = r.medium,
                                        c = r.content_index,
                                        u = r.email_id;
                                    o.o.tracking.trackPageview(a.__assign({
                                        content: s,
                                        medium: l,
                                        content_index: c,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, o.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                        }
                        return a.__extends(s, n), s.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, s.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, s.prototype.render = function() {
                            return r.createElement(t, a.__assign({}, this.props))
                        }, s.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? i.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    r = i.stringify(t);
                                r.length > 0 && (a = "?" + r), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return n
                        }, s
                    }(r.Component);
                    return Object(s.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        Z9JJ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
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
                    end: 112
                }
            };
            n.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bfDQ: function(e, t, n) {},
        d2d0: function(e, t, n) {},
        dNH5: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("mrSG"),
                r = n("q1tI"),
                s = n("/7QA"),
                o = n("lT7W"),
                l = n.n(o),
                c = n("iDlv"),
                u = n.n(c),
                d = n("8/mp"),
                m = n("V+GM"),
                p = n("NvVO"),
                g = n("2xye"),
                h = n("GnwI"),
                f = n("fvjX"),
                b = n("1/iK"),
                v = n("y5D0"),
                _ = n("kRBY"),
                y = n("yR8l"),
                k = n("geRD"),
                S = n("2iEm"),
                w = n("Ue10"),
                N = (n("tftU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.handleClick = function() {
                            t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.followedChannel.profileImageURL;
                        return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), r.createElement(S.a, {
                            className: "followed-channel-link",
                            to: "/subs/" + this.props.followedChannel.login,
                            onClick: this.handleClick
                        }, r.createElement(w.Va, {
                            textAlign: w.Jb.Center,
                            padding: {
                                bottom: 1
                            }
                        }, r.createElement(w.Na, {
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement("img", {
                            className: "followed-channel-link__avatar",
                            src: e,
                            alt: this.props.followedChannel.displayName
                        })), r.createElement(w.Na, {
                            margin: {
                                top: 0,
                                bottom: 1
                            }
                        }, r.createElement(w.V, {
                            className: "followed-channel-link__name",
                            color: w.O.Link,
                            ellipsis: !0,
                            noWrap: !0
                        }, this.props.followedChannel.displayName))))
                    }, t = i.__decorate([Object(h.c)("FollowedChannelLink")], t)
                }(r.Component)),
                C = n("3GEC"),
                E = n("jv6/"),
                x = (n("iajy"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.state = {
                            followedChannels: []
                        }, n.messages = {
                            title: Object(s.d)("Streamers You Follow", "SubsLandingFollowing"),
                            login: Object(s.d)("Log in", "SubsLandingFollowing"),
                            loginTitle: Object(s.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                            showMore: Object(s.d)("Show More", "SubsLandingFollowing"),
                            emptyFollows: Object(s.d)("No followed channels to show", "SubsLandingFollowing")
                        }, n.onLoginClick = function(e) {
                            e.preventDefault(), n.props.login()
                        }, n.renderFollowedChannels = function() {
                            if (n.props.data.loading || n.props.data.error) return [r.createElement(w.cb, {
                                key: "followed-channels-placeholder-1",
                                height: 96
                            })];
                            var e = n.state.followedChannels.map(function(e) {
                                return r.createElement(N, {
                                    key: "followed-channel-link-" + e.id,
                                    followedChannel: e,
                                    onClick: n.onFollowClick
                                })
                            });
                            return e.length < 1 ? [r.createElement(w.V, {
                                key: "followed-channels_empty"
                            }, n.messages.emptyFollows)] : e
                        }, n.onFollowClick = function(e, t) {
                            Object(C.a)({
                                login: n.props.data.currentUser.login,
                                userId: n.props.data.currentUser.id,
                                channel: t,
                                channelId: e,
                                clickthroughLocation: "followed"
                            })
                        }, n.getShowMore = function() {
                            return !n.props.data.loading && !n.props.data.error && n.props.data.currentUser.follows && n.props.data.currentUser.follows.pageInfo && n.props.data.currentUser.follows.pageInfo.hasNextPage ? r.createElement(w.Va, {
                                className: "subs-landing-followed-channels__show-more",
                                margin: {
                                    top: 1
                                }
                            }, r.createElement(w.z, {
                                fullWidth: !0,
                                onClick: n.onShowMore
                            }, n.messages.showMore)) : null
                        }, n.onShowMore = function() {
                            if (!n.props.data.loading && !n.props.data.error && n.props.data.currentUser.follows && n.props.data.currentUser.follows.pageInfo.hasNextPage) return n.props.loadMore()
                        };
                        var a = n.getFollowedChannels(t) || [];
                        return n.state = {
                            followedChannels: a
                        }, n
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        var t = this.getFollowedChannels(e);
                        t && this.setState({
                            followedChannels: t
                        })
                    }, t.prototype.render = function() {
                        return this.props.isLoggedIn ? r.createElement(w.Va, {
                            className: "subs-landing-followed-channels",
                            display: w.W.Flex,
                            alignItems: w.f.Center,
                            flexDirection: w.Y.Column,
                            fullWidth: !0
                        }, r.createElement(w.Na, {
                            margin: {
                                top: 3,
                                bottom: 2
                            }
                        }, r.createElement(w.V, {
                            type: w.Nb.H3,
                            color: w.O.Link,
                            bold: !0,
                            className: "subs-landing-followed-channels__title"
                        }, this.messages.title)), r.createElement(w.Tb, {
                            center: !0,
                            gutterSize: w.Vb.Small
                        }, this.renderFollowedChannels()), this.getShowMore()) : r.createElement(w.Va, {
                            textAlign: w.Jb.Center,
                            margin: {
                                top: 3
                            }
                        }, r.createElement(w.z, {
                            onClick: this.onLoginClick,
                            "data-a-target": "login-button"
                        }, this.messages.login), r.createElement(w.V, null, this.messages.loginTitle))
                    }, t.prototype.getFollowedChannels = function(e) {
                        if (e.data.currentUser && e.data.currentUser.follows) return (e.data.currentUser.follows.edges || []).map(function(e) {
                            return e.node
                        })
                    }, t = i.__decorate([Object(y.a)(E, {
                        options: function() {
                            return {
                                variables: {
                                    limit: 12,
                                    cursor: ""
                                }
                            }
                        },
                        props: function(e) {
                            return i.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: E,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: e.data.currentUser.follows ? e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor : ""
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                a = [];
                                            return e.currentUser.follows && n.currentUser.follows ? a = Object(k.c)(e.currentUser.follows.edges, n.currentUser.follows.edges) : !e.currentUser.follows && n.currentUser.follows ? a = n.currentUser.follows.edges : e.currentUser.follows && !n.currentUser.follows && (a = e.currentUser.follows.edges), {
                                                currentUser: i.__assign({}, n.currentUser, {
                                                    follows: i.__assign({}, n.currentUser.follows, {
                                                        edges: a
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    })], t)
                }(r.Component));
            var F = Object(a.connect)(function(e) {
                    return {
                        isLoggedIn: Object(_.f)(e)
                    }
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        login: function() {
                            return v.e(b.a.SubsLandingPage)
                        }
                    }, e)
                })(x),
                T = n("8Ad5"),
                D = n("f00E"),
                P = n("H/lO"),
                O = n("NZDK"),
                H = n("9kXc"),
                R = n("u5aL"),
                I = n("QVaV"),
                U = (n("d2d0"), function(e) {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? r.createElement(w.Xa, {
                            fillContent: !0
                        }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), r.createElement(w.xb, {
                            elevation: 4
                        }, r.createElement("div", {
                            className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                            tabIndex: 0,
                            onKeyDown: this.props.onKeyDown
                        }, r.createElement(w.xb, {
                            className: "streamer-search-panel__results",
                            background: w.r.Base,
                            position: w.db.Relative,
                            overflow: w.Ya.Hidden,
                            display: w.W.Block,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            fullHeight: !0
                        }, r.createElement(w.Na, {
                            overflow: w.Ya.Hidden,
                            position: w.db.Relative,
                            fullHeight: !0
                        }, r.createElement(d.b, {
                            suppressScrollX: !0
                        }, r.createElement(w.Va, null, e, r.createElement(d.a, {
                            enabled: !this.props.isWaiting && this.props.isOpen,
                            loadMore: this.props.loadMore
                        })))))))
                    }, t.prototype.getStreamerResultContent = function() {
                        var e = this;
                        if (!this.props.streamerResults) return r.createElement(w.Va, null);
                        var t = this.props.streamerResults.results.map(function(t) {
                            var n = Object(I.a)(t.login || "", t.name || "");
                            return r.createElement(w.Sa, {
                                linkTo: "/subs/" + t.login,
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "streamer-search-result-" + t.id,
                                "data-streamer_id": t.id,
                                "data-streamer_login": t.login,
                                onClick: e.onStreamerClick
                            }, r.createElement(w.Va, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, r.createElement(w.G, {
                                row: !0
                            }, r.createElement(w.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: w.J.Size4,
                                aspect: w.p.Aspect1x1
                            }), r.createElement(w.H, {
                                overflow: w.Ya.Hidden
                            }, r.createElement(w.Na, {
                                padding: {
                                    x: 1
                                }
                            }, r.createElement(w.V, {
                                type: w.Nb.H5,
                                ellipsis: !0
                            }, n))))))
                        });
                        return r.createElement(w.Va, null, t)
                    }, t.prototype.getErrorMessage = function() {
                        return r.createElement(w.V, null, Object(s.d)("Error", "StreamerSearchResultPanel"))
                    }, t.prototype.getNoResultsMessage = function() {
                        return r.createElement(w.V, null, Object(s.d)("No Results", "StreamerSearchResultPanel"))
                    }, t
                }(r.Component)),
                j = (n("bfDQ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(w.Va, {
                            margin: {
                                top: 2
                            },
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            fullWidth: !0
                        }, r.createElement(w.Na, {
                            fullWidth: !0,
                            zIndex: w.ac.Above,
                            position: w.db.Relative
                        }, r.createElement("div", {
                            className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                        }, r.createElement(R.a, {
                            onClickOut: this.props.onClickOut
                        }, r.createElement(w.pb, {
                            onChange: this.handleChange,
                            onFocus: this.props.onFocus,
                            onKeyDown: this.props.onKeyDown,
                            placeholder: Object(s.d)("Search for a Streamer", "StreamerSearch"),
                            id: "streamer-search-input"
                        }), r.createElement(w.u, {
                            direction: w.v.BottomCenter,
                            noTail: !0,
                            size: w.w.ExtraLarge,
                            show: this.props.isOpen
                        }, r.createElement(U, {
                            isOpen: this.props.isOpen,
                            streamerResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            onResultSelected: this.props.onResultSelected,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown
                        }))))))
                    }, t
                }(r.Component)),
                L = 50;
            var V = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                                isWaiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doSearch(e)
                            }, L)) : n.setState(n.getEmptyState())
                        }, n.onClickOut = function() {
                            n.state.isOpen && n.setState({
                                isOpen: !1
                            })
                        }, n.onFocus = function() {
                            n.state.term && !n.state.isOpen && n.setState({
                                isOpen: !0
                            })
                        }, n.onKeyDown = function(e) {
                            n.state.term && (e.keyCode === T.a.Esc ? n.setState({
                                isOpen: !1
                            }) : e.keyCode === T.a.Up ? n.focusNext(-1) : e.keyCode === T.a.Down && n.focusNext(1))
                        }, n.onResultSelected = function(e) {
                            n.setState({
                                isOpen: !1
                            });
                            var t = Object.assign({
                                login: n.props.user ? n.props.user.login : null,
                                userId: n.props.user ? String(n.props.user.id) : null,
                                channel: e.channel,
                                channelId: e.channelId,
                                clickthroughLocation: "search"
                            }, e);
                            Object(C.a)(t)
                        }, n.loadMore = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a;
                                return i.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(P.a.Users, this.state.term, "", {
                                                page: e,
                                                facetFilters: "has_subscription_products:true"
                                            })];
                                        case 2:
                                            return t = r.sent(), [3, 4];
                                        case 3:
                                            return n = r.sent(), s.j.error(n, "Algolia page search failed"), this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2];
                                        case 4:
                                            return t ? (a = Object(H.b)({
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
                                            }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.state = n.getEmptyState(), n.searchClient = new O.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.o.apollo.client,
                            logger: s.j,
                            config: s.a,
                            stats: s.o.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return r.createElement(j, {
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
                            i = Array.prototype.indexOf.call(n, a);
                        if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                            var r = n.item(t);
                            r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: r
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
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, r, o, l;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = D.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: n,
                                            focusSelectable: !a && !!this.state.currentFocus
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(P.a.Users, e, n, {
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return r = c.sent(), [3, 4];
                                    case 3:
                                        return o = c.sent(), s.j.error(o, "Algolia top results search failed"), this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return r ? this.state.queryID !== r.id ? [2] : (l = Object(H.b)({
                                            searchResults: r,
                                            append: !1
                                        }), this.setState(function(n) {
                                            return i.__assign({}, n, l, {
                                                queryID: "",
                                                term: e,
                                                isOpen: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2])
                                }
                            })
                        })
                    }, t = i.__decorate([Object(h.c)("StreamerSearch")], t)
                }(r.Component),
                A = Object(a.connect)(function(e) {
                    return {
                        user: Object(_.e)(e)
                    }
                })(V),
                q = (n("nfEO"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.messages = {
                            title: Object(s.d)("Subscriptions", "SubsLandingPage"),
                            info: Object(s.d)("Subscribe to a streamer to enjoy exclusive emotes, badges and more!", "SubsLandingPage"),
                            searchTitle: Object(s.d)("Search For Streamer", "SubsLandingPage"),
                            searchInfo: Object(s.d)("Find a streamer you're thinking of subbing to, then click on their name to go to their page and subscribe.", "SubsLandingPage"),
                            perksTitle: Object(s.d)("Subscriber Perks", "SubsLandingPage"),
                            perksInfo: Object(s.d)("Subscriptions let Partners and Affiliates interact with their most passionate fans. Subscribing unlocks exclusive chat badges, plus many streamers host sub-only games or events too.", "SubsLandingPage"),
                            emotesTitle: Object(s.d)("Emotes", "SubsLandingPage"),
                            emotesInfo: Object(s.d)("Subscribing to a streamer unlocks custom emotes, usable on any channel on Twitch. The more subs a streamer has, the more custom emotes slots will be unlocked, so more support equals more rewards for everyone.", "SubsLandingPage")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), s.o.setPageTitle("Subscriptions")
                    }, t.prototype.render = function() {
                        return r.createElement(w.Va, {
                            className: "subs-landing-page",
                            fullHeight: !0,
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center
                        }, r.createElement(w.Na, {
                            fullWidth: !0
                        }, r.createElement(d.b, {
                            suppressScrollX: !0
                        }, r.createElement(w.Va, {
                            fullWidth: !0,
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center
                        }, r.createElement(w.Va, {
                            className: "subs-landing-page-contents",
                            textAlign: w.Jb.Center,
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            alignItems: w.f.Center,
                            flexWrap: w.Z.NoWrap,
                            flexDirection: w.Y.Column,
                            padding: {
                                x: 2
                            },
                            fullHeight: !0
                        }, r.createElement(w.Na, {
                            margin: {
                                top: 4
                            }
                        }, r.createElement(w.V, {
                            type: w.Nb.H2,
                            color: w.O.Link,
                            bold: !0
                        }, this.messages.title)), r.createElement(w.Na, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, r.createElement(w.V, {
                            type: w.Nb.P,
                            fontSize: w.Aa.Size5
                        }, this.messages.info)), r.createElement(w.Na, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, r.createElement(w.V, {
                            type: w.Nb.H3,
                            color: w.O.Link,
                            bold: !0,
                            fontSize: w.Aa.Size4
                        }, this.messages.searchTitle)), r.createElement(w.Na, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, r.createElement(w.V, {
                            type: w.Nb.P,
                            fontSize: w.Aa.Size5
                        }, this.messages.searchInfo)), r.createElement(A, null), r.createElement(F, null), r.createElement(w.Va, {
                            className: "subs-landing-page-contents__section",
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            flexWrap: w.Z.Wrap
                        }, r.createElement(w.Va, {
                            className: "subs-landing-page-contents__section-info",
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            alignItems: w.f.Center,
                            flexDirection: w.Y.Column,
                            margin: {
                                x: 3
                            }
                        }, r.createElement(w.Na, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, r.createElement(w.V, {
                            type: w.Nb.H3,
                            color: w.O.Link,
                            bold: !0,
                            fontSize: w.Aa.Size4
                        }, this.messages.perksTitle)), r.createElement(w.Na, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, r.createElement(w.V, {
                            type: w.Nb.P,
                            fontSize: w.Aa.Size5
                        }, this.messages.perksInfo))), r.createElement(w.Va, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, r.createElement("img", {
                            src: l.a
                        }))), r.createElement(w.Va, {
                            className: "subs-landing-page-contents__section",
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            flexWrap: w.Z.Wrap,
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(w.Va, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, r.createElement("img", {
                            src: u.a
                        })), r.createElement(w.Va, {
                            className: "subs-landing-page__section-info",
                            display: w.W.Flex,
                            justifyContent: w.Ua.Center,
                            alignItems: w.f.Center,
                            flexDirection: w.Y.Column,
                            margin: {
                                x: 3
                            }
                        }, r.createElement(w.Na, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, r.createElement(w.V, {
                            type: w.Nb.H3,
                            color: w.O.Link,
                            bold: !0,
                            fontSize: w.Aa.Size4
                        }, this.messages.emotesTitle)), r.createElement(w.Na, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, r.createElement(w.V, {
                            type: w.Nb.P,
                            fontSize: w.Aa.Size5
                        }, this.messages.emotesInfo)))))))))
                    }, t = i.__decorate([Object(h.c)("SubsLandingPage", {
                        destination: p.a.SubsLandingPage
                    }), Object(m.a)({
                        location: g.PageviewLocation.SubsLandingPage
                    })], t)
                }(r.Component)),
                z = Object(a.connect)()(q);
            n.d(t, "SubsLandingPage", function() {
                return z
            })
        },
        iDlv: function(e, t, n) {
            e.exports = n.p + "assets/emotes-e2efaf11b6d1b3db4fe5.png"
        },
        iajy: function(e, t, n) {},
        "jv6/": function(e, t) {
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
            n.loc.source = {
                body: "query Following_CurrentUser($limit: Int $cursor: Cursor){\ncurrentUser{\nid\nlogin\nfollows(first: $limit after: $cursor filter: SUBBABLE){\nedges{\nnode{\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kduP: function(e, t, n) {
            "use strict";

            function a(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function r(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function s(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return s
            })
        },
        lT7W: function(e, t, n) {
            e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd.png"
        },
        nfEO: function(e, t, n) {},
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return o
            });
            var a = n("/7QA"),
                i = "en-us",
                r = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: i,
                    "en-gb": i,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                s = function(e) {
                    var t, n = o();
                    return t = function(e) {
                        return void 0 !== e.tag_id
                    }(e) ? {
                        id: e.tag_id,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    } : {
                        id: e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: e.description_localizations && e.description_localizations[n] || "",
                        localizedName: ""
                    }, e.localizations && e.localizations[n] ? t.localizedName = e.localizations[n] : e.localizations && e.localizations[i] ? t.localizedName = e.localizations[i] : t.localizedName = t.tagName, t
                };

            function o() {
                return r[a.o.intl.getLanguageCode() || ""] || i
            }
        },
        tftU: function(e, t, n) {},
        "vR4/": function(e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "b", function() {
                    return a
                }), n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(a || (a = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(i || (i = {}))
        },
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return r
            });
            var a = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function i(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function r(e, t) {
                var n = parseInt(e, 10) % a.length;
                return i(a[n], t)
            }
        }
    }
]);