(window.webpackJsonp = window.webpackJsonp || []).push([
    [172], {
        "3GEC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var a = n("mrSG"),
                r = n("/7QA"),
                i = n("2xye");

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
                        }, r.o.track(i.SpadeEventType.SubsLandingStreamerClick, t), [2]
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
                        }, r.o.track(i.SpadeEventType.Subscription, n), [2]
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
                r = n("yLwq"),
                i = n("kduP"),
                s = n("2xye"),
                o = n("sLmD");

            function l(e) {
                var t, n, o, l, d = e.append,
                    m = void 0 !== d && d,
                    p = e.searchResults,
                    g = e.currentGameResults,
                    h = e.currentUserResults,
                    f = e.currentVideoResults,
                    b = e.currentLiveResults;
                if (p.games && (t = {
                        totalHits: p.games.totalHits,
                        results: m && g ? g.results : []
                    }, m && p.exhaustedHits && g && !p.games.totalHits && (t.totalHits = g.totalHits), t.results = t.results.concat(p.games.hits.map(function(e, t) {
                        var n, r = a.p.intl.getLanguageCode();
                        n = r && void 0 !== e.localizations && r in e.localizations ? e.localizations[r] : e.name;
                        var o = u(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(i.c)(e.name),
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
                    }))), p.videos) {
                    var v = m && f ? f.results : [],
                        _ = p.videos.totalHits;
                    m && p.exhaustedHits && f && !p.videos.totalHits && (_ = f.totalHits), o = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(c)),
                            totalHits: t.totalHits || n
                        }
                    }(v, p.videos, _)
                }
                return p.users && (n = {
                    totalHits: m && h ? h.totalHits : p.users.totalHits,
                    results: m && h ? h.results : []
                }, m && p.exhaustedHits && h && !p.users.totalHits && (n.totalHits = h.totalHits), n.results = n.results.concat(p.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(r.c)(e.objectID, 64),
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
                }))), p.channels && ((l = {
                    totalHits: m && b ? b.totalHits : p.channels.totalHits,
                    results: m && b ? b.results : []
                }).results = l.results.concat(p.channels.hits.map(function(e, t) {
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
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: l,
                    currentVideoResults: o,
                    exhaustedHits: p.exhaustedHits
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
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(a || (a = {}))
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n("mrSG"),
                r = n("hnrd"),
                i = n("/7QA"),
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
                        this.apolloClient = e.apolloClient, this.client = r(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === i.p.experiments.getAssignment(s.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var n, r, i, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), r.push(this.getTotalResult(d.games, e)), r.push(this.getTotalResult(d.videos, e)), r.push(this.getTotalResult(d.users, e)), r.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(r))];
                                    case 1:
                                        return (i = a.sent()) ? (s = i.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: s[4].nbHits,
                                                hits: s[0].hits
                                            },
                                            videos: {
                                                totalHits: s[5].nbHits,
                                                hits: s[1].hits
                                            },
                                            users: {
                                                totalHits: s[6].nbHits,
                                                hits: s[2].hits
                                            },
                                            channels: {
                                                totalHits: s[7].nbHits,
                                                hits: s[3].hits
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
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, r) {
                        var i = void 0 === r ? {} : r,
                            s = i.page,
                            l = void 0 === s ? 0 : s,
                            c = i.hitsPerPage,
                            u = void 0 === c ? 50 : c,
                            m = i.facetFilters,
                            p = void 0 === m ? "" : m,
                            g = i.numericFilters,
                            h = i.restrictSearchableAttributes,
                            f = void 0 === h ? [] : h;
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, i, s, c, m, h, b, v, _ = this;
                            return a.__generator(this, function(y) {
                                switch (y.label) {
                                    case 0:
                                        switch (r = {
                                            id: n,
                                            currentPage: l
                                        }, i = function(e) {
                                            return a.__awaiter(_, void 0, void 0, function() {
                                                var n, i;
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
                                                            return (i = a.sent()) ? (r.exhaustedHits = !i.results[0].nbHits || i.results[0].hits.length < u, [2, {
                                                                totalHits: i.results[0].nbHits,
                                                                hits: i.results[0].hits
                                                            }]) : (r.exhaustedHits = !0, [2, {
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
                                            case o.a.StreamTags:
                                                return [3, 9];
                                            case o.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return s = r, [4, i(d.games)];
                                    case 2:
                                        return s.games = y.sent(), [3, 14];
                                    case 3:
                                        return c = r, [4, i(d.users)];
                                    case 4:
                                        return c.users = y.sent(), [3, 14];
                                    case 5:
                                        return m = r, [4, i(d.channels)];
                                    case 6:
                                        return m.channels = y.sent(), [3, 14];
                                    case 7:
                                        return h = r, [4, i(d.videos)];
                                    case 8:
                                        return h.videos = y.sent(), [3, 14];
                                    case 9:
                                        return b = r, [4, i(d.streamTags)];
                                    case 10:
                                        return b.streamTags = y.sent(), [3, 14];
                                    case 11:
                                        return v = r, [4, i(d.tags)];
                                    case 12:
                                        return v.tags = y.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return a.__awaiter(this, void 0, void 0, function() {
                            var r, i, s, c;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        switch (r = o.a.Videos, i = [], n.length) {
                                            case l.a.Short:
                                                i.push("length<=900");
                                                break;
                                            case l.a.Long:
                                                i.push("length>900")
                                        }
                                        switch (s = {
                                            indexName: r,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: i,
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
                            var t, n, r, i, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        n = Date.now(), i = !1, a.label = 1;
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
                                        return a.sent(), i = !0, t = null, [3, 7];
                                    case 7:
                                        return r = Date.now(), this.countryCode && (i ? this.stats.recordSearchError(this.countryCode, r - n) : this.stats.recordSearchSuccess(this.countryCode, r - n)), [2, t]
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
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var a = n("q1tI"),
                r = /^[\x00-\x7F]*$/,
                i = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !s(t) ? n ? t + " (" + e + ")" : a.createElement("span", null, t, " ", a.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function s(e) {
                return r.test(e)
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                r = n("cr+I"),
                i = n("q1tI"),
                s = n("wIs1"),
                o = n("/7QA");

            function l(e) {
                return function(t) {
                    var n = function(n) {
                        function s(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = a.__assign({}, e.properties));
                                    var n = a.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var i = r.referenceTracking,
                                        s = i.content,
                                        l = i.medium,
                                        c = i.content_index,
                                        u = i.email_id;
                                    o.p.tracking.trackPageview(a.__assign({
                                        content: s,
                                        medium: l,
                                        content_index: c,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, o.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return a.__extends(s, n), s.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, s.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, s.prototype.render = function() {
                            return i.createElement(t, a.__assign({}, this.props))
                        }, s.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var a = "",
                                    i = r.stringify(t);
                                i.length > 0 && (a = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
                                })
                            }
                            return n
                        }, s
                    }(i.Component);
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
                r = n("mrSG"),
                i = n("q1tI"),
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
                S = n("Ue10"),
                w = (n("tftU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.handleClick = function() {
                            t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.followedChannel.profileImageURL;
                        return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), i.createElement(S.U, {
                            className: "followed-channel-link",
                            to: "/subs/" + this.props.followedChannel.login,
                            onClick: this.handleClick
                        }, i.createElement(S.Wa, {
                            textAlign: S.Jb.Center,
                            padding: {
                                bottom: 1
                            }
                        }, i.createElement(S.Oa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement("img", {
                            className: "followed-channel-link__avatar",
                            src: e,
                            alt: this.props.followedChannel.displayName
                        })), i.createElement(S.Oa, {
                            margin: {
                                top: 0,
                                bottom: 1
                            }
                        }, i.createElement(S.W, {
                            className: "followed-channel-link__name",
                            color: S.O.Link,
                            ellipsis: !0,
                            noWrap: !0
                        }, this.props.followedChannel.displayName))))
                    }, t = r.__decorate([Object(h.b)("FollowedChannelLink")], t)
                }(i.Component)),
                N = n("3GEC"),
                C = n("jv6/"),
                E = (n("iajy"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.messages = {
                            title: Object(s.d)("Streamers You Follow", "SubsLandingFollowing"),
                            login: Object(s.d)("Log in", "SubsLandingFollowing"),
                            loginTitle: Object(s.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                            showMore: Object(s.d)("Show More", "SubsLandingFollowing"),
                            emptyFollows: Object(s.d)("No followed channels to show", "SubsLandingFollowing")
                        }, t.onLoginClick = function(e) {
                            e.preventDefault(), t.props.login()
                        }, t.renderFollowedChannels = function() {
                            var e = t.props.data;
                            if (e.loading || e.error) return i.createElement(S.db, {
                                key: "followed-channels-placeholder-1",
                                height: 96
                            });
                            var n = [];
                            return e.currentUser && e.currentUser.follows && e.currentUser.follows.edges && (n = e.currentUser.follows.edges.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.node
                            }).filter(function(e) {
                                return e
                            }).map(function(e) {
                                return i.createElement(w, {
                                    followedChannel: e,
                                    key: "followed-channel-link-" + e.id,
                                    onClick: t.onFollowClick
                                })
                            })), n.length > 0 ? n : i.createElement(S.W, {
                                key: "followed-channels_empty"
                            }, t.messages.emptyFollows)
                        }, t.onFollowClick = function(e, n) {
                            var a = t.props.data.currentUser;
                            Object(N.a)({
                                login: a ? a.login : "",
                                userId: a ? a.id : "",
                                channel: n,
                                channelId: e,
                                clickthroughLocation: "followed"
                            })
                        }, t.getShowMore = function() {
                            return !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo && t.props.data.currentUser.follows.pageInfo.hasNextPage ? i.createElement(S.Wa, {
                                className: "subs-landing-followed-channels__show-more",
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(S.z, {
                                fullWidth: !0,
                                onClick: t.onShowMore
                            }, t.messages.showMore)) : null
                        }, t.onShowMore = function() {
                            if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? i.createElement(S.Wa, {
                            className: "subs-landing-followed-channels",
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            flexDirection: S.Z.Column,
                            fullWidth: !0
                        }, i.createElement(S.Oa, {
                            margin: {
                                top: 3,
                                bottom: 2
                            }
                        }, i.createElement(S.W, {
                            bold: !0,
                            className: "subs-landing-followed-channels__title",
                            color: S.O.Link,
                            type: S.Nb.H3
                        }, this.messages.title)), i.createElement(S.Tb, {
                            center: !0,
                            gutterSize: S.Vb.Small
                        }, this.renderFollowedChannels()), this.getShowMore()) : i.createElement(S.Wa, {
                            textAlign: S.Jb.Center,
                            margin: {
                                top: 3
                            }
                        }, i.createElement(S.z, {
                            onClick: this.onLoginClick,
                            "data-a-target": "login-button"
                        }, this.messages.login), i.createElement(S.W, null, this.messages.loginTitle))
                    }, t = r.__decorate([Object(y.a)(C, {
                        options: function() {
                            return {
                                variables: {
                                    limit: 12,
                                    cursor: ""
                                }
                            }
                        },
                        props: function(e) {
                            return r.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: C,
                                        variables: r.__assign({}, e.data.variables, {
                                            cursor: e.data.currentUser && e.data.currentUser.follows && e.data.currentUser.follows.edges ? e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor : ""
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                a = [];
                                            return e.currentUser && n.currentUser ? (e.currentUser.follows && e.currentUser.follows.edges && n.currentUser.follows && n.currentUser.follows.edges ? a = Object(k.c)(e.currentUser.follows.edges, n.currentUser.follows.edges) : !e.currentUser.follows && n.currentUser.follows && n.currentUser.follows.edges ? a = n.currentUser.follows.edges : e.currentUser.follows && e.currentUser.follows.edges && !n.currentUser.follows && (a = e.currentUser.follows.edges), {
                                                currentUser: r.__assign({}, n.currentUser, {
                                                    follows: r.__assign({}, n.currentUser.follows, {
                                                        edges: a
                                                    })
                                                })
                                            }) : null
                                        }
                                    })
                                }
                            })
                        }
                    })], t)
                }(i.Component));
            var x = Object(a.connect)(function(e) {
                    return {
                        isLoggedIn: Object(_.f)(e)
                    }
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        login: function() {
                            return v.e(b.a.SubsLandingPage)
                        }
                    }, e)
                })(E),
                T = n("8Ad5"),
                F = n("f00E"),
                O = n("H/lO"),
                D = n("NZDK"),
                P = n("9kXc"),
                I = n("u5aL"),
                U = n("QVaV"),
                R = (n("d2d0"), function(e) {
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? i.createElement(S.Ya, {
                            fillContent: !0
                        }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), i.createElement(S.xb, {
                            elevation: 4
                        }, i.createElement("div", {
                            className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                            tabIndex: 0,
                            onKeyDown: this.props.onKeyDown
                        }, i.createElement(S.xb, {
                            className: "streamer-search-panel__results",
                            background: S.r.Base,
                            position: S.eb.Relative,
                            overflow: S.Za.Hidden,
                            display: S.X.Block,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            fullHeight: !0
                        }, i.createElement(S.Oa, {
                            overflow: S.Za.Hidden,
                            position: S.eb.Relative,
                            fullHeight: !0
                        }, i.createElement(d.b, {
                            suppressScrollX: !0
                        }, i.createElement(S.Wa, null, e, i.createElement(d.a, {
                            enabled: !this.props.isWaiting && this.props.isOpen,
                            loadMore: this.props.loadMore
                        })))))))
                    }, t.prototype.getStreamerResultContent = function() {
                        var e = this;
                        if (!this.props.streamerResults) return i.createElement(S.Wa, null);
                        var t = this.props.streamerResults.results.map(function(t) {
                            var n = Object(U.a)(t.login || "", t.name || "");
                            return i.createElement(S.Ta, {
                                linkTo: "/subs/" + t.login,
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "streamer-search-result-" + t.id,
                                "data-streamer_id": t.id,
                                "data-streamer_login": t.login,
                                onClick: e.onStreamerClick
                            }, i.createElement(S.Wa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, i.createElement(S.G, {
                                row: !0
                            }, i.createElement(S.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: S.J.Size4,
                                aspect: S.p.Aspect1x1
                            }), i.createElement(S.H, {
                                overflow: S.Za.Hidden
                            }, i.createElement(S.Oa, {
                                padding: {
                                    x: 1
                                }
                            }, i.createElement(S.W, {
                                type: S.Nb.H5,
                                ellipsis: !0
                            }, n))))))
                        });
                        return i.createElement(S.Wa, null, t)
                    }, t.prototype.getErrorMessage = function() {
                        return i.createElement(S.W, null, Object(s.d)("Error", "StreamerSearchResultPanel"))
                    }, t.prototype.getNoResultsMessage = function() {
                        return i.createElement(S.W, null, Object(s.d)("No Results", "StreamerSearchResultPanel"))
                    }, t
                }(i.Component)),
                H = (n("bfDQ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(S.Wa, {
                            margin: {
                                top: 2
                            },
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            fullWidth: !0
                        }, i.createElement(S.Oa, {
                            fullWidth: !0,
                            zIndex: S.ac.Above,
                            position: S.eb.Relative
                        }, i.createElement("div", {
                            className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                        }, i.createElement(I.a, {
                            onClickOut: this.props.onClickOut
                        }, i.createElement(S.qb, {
                            onChange: this.handleChange,
                            onFocus: this.props.onFocus,
                            onKeyDown: this.props.onKeyDown,
                            placeholder: Object(s.d)("Search for a Streamer", "StreamerSearch"),
                            id: "streamer-search-input"
                        }), i.createElement(S.u, {
                            direction: S.v.BottomCenter,
                            noTail: !0,
                            size: S.w.ExtraLarge,
                            show: this.props.isOpen
                        }, i.createElement(R, {
                            isOpen: this.props.isOpen,
                            streamerResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            onResultSelected: this.props.onResultSelected,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown
                        }))))))
                    }, t
                }(i.Component)),
                L = 50;
            var j = function(e) {
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
                            Object(N.a)(t)
                        }, n.loadMore = function() {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, a;
                                return r.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(O.a.Users, this.state.term, "", {
                                                page: e,
                                                facetFilters: "has_subscription_products:true"
                                            })];
                                        case 2:
                                            return t = i.sent(), [3, 4];
                                        case 3:
                                            return n = i.sent(), s.k.error(n, "Algolia page search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2];
                                        case 4:
                                            return t ? (a = Object(P.b)({
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
                                            }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.state = n.getEmptyState(), n.searchClient = new D.a({
                            appId: s.a.algoliaApplicationID,
                            apiKey: s.a.algoliaAPIKey,
                            apolloClient: s.p.apollo.client,
                            logger: s.k,
                            config: s.a,
                            stats: s.p.stats
                        }), n
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(H, {
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
                            r = Array.prototype.indexOf.call(n, a);
                        if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
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
                        return r.__awaiter(this, void 0, void 0, function() {
                            var t, n, a, i, o, l;
                            return r.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = F.a(), a = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: n,
                                            focusSelectable: !a && !!this.state.currentFocus
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(O.a.Users, e, n, {
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return i = c.sent(), [3, 4];
                                    case 3:
                                        return o = c.sent(), s.k.error(o, "Algolia top results search failed"), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return i ? this.state.queryID !== i.id ? [2] : (l = Object(P.b)({
                                            searchResults: i,
                                            append: !1
                                        }), this.setState(function(n) {
                                            return r.__assign({}, n, l, {
                                                queryID: "",
                                                term: e,
                                                isOpen: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2])
                                }
                            })
                        })
                    }, t = r.__decorate([Object(h.b)("StreamerSearch")], t)
                }(i.Component),
                W = Object(a.connect)(function(e) {
                    return {
                        user: Object(_.e)(e)
                    }
                })(j),
                A = (n("nfEO"), function(e) {
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
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), s.p.setPageTitle("Subscriptions")
                    }, t.prototype.render = function() {
                        return i.createElement(S.Wa, {
                            className: "subs-landing-page",
                            fullHeight: !0,
                            display: S.X.Flex,
                            justifyContent: S.Va.Center
                        }, i.createElement(S.Oa, {
                            fullWidth: !0
                        }, i.createElement(d.b, {
                            suppressScrollX: !0
                        }, i.createElement(S.Wa, {
                            fullWidth: !0,
                            display: S.X.Flex,
                            justifyContent: S.Va.Center
                        }, i.createElement(S.Wa, {
                            className: "subs-landing-page-contents",
                            textAlign: S.Jb.Center,
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            alignItems: S.f.Center,
                            flexWrap: S.Aa.NoWrap,
                            flexDirection: S.Z.Column,
                            padding: {
                                x: 2
                            },
                            fullHeight: !0
                        }, i.createElement(S.Oa, {
                            margin: {
                                top: 4
                            }
                        }, i.createElement(S.W, {
                            type: S.Nb.H2,
                            color: S.O.Link,
                            bold: !0
                        }, this.messages.title)), i.createElement(S.Oa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, i.createElement(S.W, {
                            type: S.Nb.P,
                            fontSize: S.Ba.Size5
                        }, this.messages.info)), i.createElement(S.Oa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, i.createElement(S.W, {
                            type: S.Nb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ba.Size4
                        }, this.messages.searchTitle)), i.createElement(S.Oa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, i.createElement(S.W, {
                            type: S.Nb.P,
                            fontSize: S.Ba.Size5
                        }, this.messages.searchInfo)), i.createElement(W, null), i.createElement(x, null), i.createElement(S.Wa, {
                            className: "subs-landing-page-contents__section",
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            flexWrap: S.Aa.Wrap
                        }, i.createElement(S.Wa, {
                            className: "subs-landing-page-contents__section-info",
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            alignItems: S.f.Center,
                            flexDirection: S.Z.Column,
                            margin: {
                                x: 3
                            }
                        }, i.createElement(S.Oa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, i.createElement(S.W, {
                            type: S.Nb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ba.Size4
                        }, this.messages.perksTitle)), i.createElement(S.Oa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, i.createElement(S.W, {
                            type: S.Nb.P,
                            fontSize: S.Ba.Size5
                        }, this.messages.perksInfo))), i.createElement(S.Wa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, i.createElement("img", {
                            src: l.a
                        }))), i.createElement(S.Wa, {
                            className: "subs-landing-page-contents__section",
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            flexWrap: S.Aa.Wrap,
                            margin: {
                                bottom: 2
                            }
                        }, i.createElement(S.Wa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, i.createElement("img", {
                            src: u.a
                        })), i.createElement(S.Wa, {
                            className: "subs-landing-page__section-info",
                            display: S.X.Flex,
                            justifyContent: S.Va.Center,
                            alignItems: S.f.Center,
                            flexDirection: S.Z.Column,
                            margin: {
                                x: 3
                            }
                        }, i.createElement(S.Oa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, i.createElement(S.W, {
                            type: S.Nb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ba.Size4
                        }, this.messages.emotesTitle)), i.createElement(S.Oa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, i.createElement(S.W, {
                            type: S.Nb.P,
                            fontSize: S.Ba.Size5
                        }, this.messages.emotesInfo)))))))))
                    }, t = r.__decorate([Object(h.b)("SubsLandingPage", {
                        destination: p.a.SubsLandingPage
                    }), Object(m.a)({
                        location: g.PageviewLocation.SubsLandingPage
                    })], t)
                }(i.Component)),
                q = Object(a.connect)()(A);
            n.d(t, "SubsLandingPage", function() {
                return q
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

            function r(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function s(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
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
                r = "en-us",
                i = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: r,
                    "en-gb": r,
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
                    }, e.localizations && e.localizations[n] ? t.localizedName = e.localizations[n] : e.localizations && e.localizations[r] ? t.localizedName = e.localizations[r] : t.localizedName = t.tagName, t
                };

            function o() {
                return i[a.p.intl.getLanguageCode() || ""] || r
            }
        },
        tftU: function(e, t, n) {},
        "vR4/": function(e, t, n) {
            "use strict";
            var a, r;
            n.d(t, "b", function() {
                    return a
                }), n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(a || (a = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(r || (r = {}))
        },
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return i
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

            function r(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function i(e, t) {
                var n = parseInt(e, 10) % a.length;
                return r(a[n], t)
            }
        }
    }
]);