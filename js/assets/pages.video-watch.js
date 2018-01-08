webpackJsonp([35, 66], {
    "+/J2": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t);
            return n.setMilliseconds(a), n
        }
    },
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
                            value: "userLogin"
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
                                    value: "userLogin"
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "videos"
                                                        },
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
                                                                value: "30"
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
                                                            }, {
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 319
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery LatestCollectionCarousel_User($userLogin:String!) {\nuser(login:$userLogin) {\nid\ndisplayName\ncollections(first:1) {\nedges {\nnode {\nid\ntitle\nvideos: items(first: 30) {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i = "subscribe_to_channel",
            a = "turbo",
            r = "visit_url",
            o = "broadcaster"
    },
    "+sSA": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return t.setMilliseconds(999), t
        }
    },
    "/LBW": function(e, t, n) {
        "use strict";
        t.h = function(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || o.ChatTooltip
            };
            a.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            return e && l[e] ? l[e] : (a.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            a.m.track(r.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: a.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            a.m.track(r.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return i
        }), t.g = function(e) {
            var t = a.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: a.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            a.m.track(r.SpadeEventType.BitsAdsRequest, n)
        };
        var i, a = n("6sO2"),
            r = n("vH/s"),
            o = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            s = {
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
            l = {
                100: s.Buy100,
                500: s.Buy500,
                1e3: s.Buy1000,
                1500: s.Buy1500,
                5e3: s.Buy5000,
                1e4: s.Buy10000,
                25e3: s.Buy25000
            };
        (i || (i = {})).ShowAdButton = "show_ad_button"
    },
    "/dIK": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t);
            return n.setDate(a), n
        }
    },
    "/nNw": function(e, t, n) {
        "use strict";
        var i = n("3Ybq");
        n.d(t, "VIDEO_STATUS_FAILED", function() {
            return i.f
        }), n.d(t, "VIDEO_STATUS_PENDING_TRANSCODE", function() {
            return i.g
        }), n.d(t, "VIDEO_STATUS_RECORDED", function() {
            return i.h
        }), n.d(t, "VIDEO_STATUS_TRANSCODING", function() {
            return i.i
        }), n.d(t, "VIDEO_STATUS_UPLOADING", function() {
            return i.j
        }), n.d(t, "VideoPremiereStatus", function() {
            return i.k
        }), n.d(t, "VideoScope", function() {
            return i.l
        }), n.d(t, "availableVideoStatuses", function() {
            return i.m
        }), n.d(t, "pendingVideoStatuses", function() {
            return i.n
        });
        n("NfL5");
        var a = n("Rv0e");
        n.n(a);
        n.o(a, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return a.EditModalErrorOrigin
        }), n.o(a, "NotificationType") && n.d(t, "NotificationType", function() {
            return a.NotificationType
        });
        var r = n("Ydo4");
        n.d(t, "NotificationType", function() {
            return r.a
        });
        var o = n("vv3i");
        n.n(o);
        n.o(o, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return o.EditModalErrorOrigin
        });
        var s = n("O4od");
        n.d(t, "EditModalErrorOrigin", function() {
            return s.a
        })
    },
    "024F": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getMilliseconds()
        }
    },
    "0LAu": function(e, t, n) {
        var i = n("MIQa");
        e.exports = function() {
            return i(new Date)
        }
    },
    "0TFF": function(e, t, n) {
        function i(e) {
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isGlobalMod"
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
                                    value: "blockedUsers"
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
                                    value: "broadcastType"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                                    value: "isModerator"
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
                end: 412
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoComments($videoID: ID!) {\nbadges {\n...badge\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\nisGlobalMod\n}\nblockedUsers {\nid\n}\n}\nvideo(id: $videoID options: { includePrivate: true }) {\nid\nbroadcastType\nowner {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n...cheer\nself {\nisModerator\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("QU+n").definitions)), a.definitions = a.definitions.concat(i(n("576g").definitions)), e.exports = a
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
                a = new Date(0);
            return a.setFullYear(t, n, i - 1), a.setHours(23, 59, 59, 999), a
        }
    },
    "0aH9": function(e, t, n) {
        var i = n("3znZ"),
            a = 6e4,
            r = 6048e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                l = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - l) / r)
        }
    },
    "0i+s": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            void 0 === t && (t = a);
            var n = i.__assign({}, a, t),
                r = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (r += function(e, t) {
                return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
            }(n.textLink.url, n.textLink.text)), r
        };
        var i = n("TToO"),
            a = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
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
                    value: "VideoShareBox_Tracking_Video"
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
                                    value: "broadcastType"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                            value: "name"
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
                end: 150
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_Tracking_Video($videoID: ID!) {\nvideo(id: $videoID) {\nid\nbroadcastType\nowner {\nid\nlogin\nroles {\nisPartner\n}\n}\ngame {\nid\nname\n}\n}\n}",
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
    "1pvm": function(e, t) {},
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
    "2hJ3": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
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
        e.exports = function(e, t, n, a) {
            var r = i(e).getTime(),
                o = i(t).getTime(),
                s = i(n).getTime(),
                l = i(a).getTime();
            if (r > o || s > l) throw new Error("The start of the range cannot be after the end of the range");
            return r < l && s < o
        }
    },
    "3EIC": function(e, t, n) {
        var i = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t),
                o = n.getMonth() + r,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var l = a(s);
            return n.setMonth(o, Math.min(l, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            a = n("mbxv"),
            r = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) ? n.get(t) || null : null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === r.b && (e = o.__assign({}, e, {
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
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    "3Ybq": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "l", function() {
            return i
        }), n.d(t, "j", function() {
            return o
        }), n.d(t, "g", function() {
            return s
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "f", function() {
            return c
        }), n.d(t, "h", function() {
            return d
        }), n.d(t, "m", function() {
            return u
        }), n.d(t, "n", function() {
            return m
        }), n.d(t, "d", function() {
            return p
        }), n.d(t, "c", function() {
            return h
        }), n.d(t, "e", function() {
            return f
        }), n.d(t, "k", function() {
            return g
        });
        n("zGmo");
        var i, a = "generated",
            r = "custom";
        ! function(e) {
            e.Private = "PRIVATE", e.Public = "PUBLIC"
        }(i || (i = {}));
        var o = "uploading",
            s = "pending_transcode",
            l = "transcoding",
            c = "failed",
            d = "recorded",
            u = [d, "recording"],
            m = [l, s, c],
            p = "FORMAT_NOT_SUPPORTED",
            h = "BAD_ASSET",
            f = "INTERNAL_ERROR",
            g = {
                VIDEO_PREMIERE_STATUS_UNSCHEDULED: "unscheduled",
                VIDEO_PREMIERE_STATUS_SCHEDULED: "scheduled",
                VIDEO_PREMIERE_STATUS_STARTED: "started",
                VIDEO_PREMIERE_STATUS_FAILED: "failed"
            }
    },
    "3g9B": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getDate()
        }
    },
    "3nPg": function(e, t, n) {
        var i = n("G7No"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = i(e, t) / a;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var i, a = "VIEWS",
            r = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    "3znZ": function(e, t, n) {
        var i = n("u/4p");
        e.exports = function(e) {
            return i(e, {
                weekStartsOn: 1
            })
        }
    },
    "4JjK": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    "4LxA": function(e, t, n) {
        var i = n("iRXW");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t || 6 === t
        }
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
            var a = i(e).getTime(),
                r = i(t).getTime(),
                o = i(n).getTime();
            if (r > o) throw new Error("The start of the range cannot be after the end of the range");
            return a >= r && a <= o
        }
    },
    "576g": function(e, t) {
        var n = {
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
                end: 133
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\ncheer {\nid\nemotes {\nid\nprefix\ntype\ntiers {\nid\nbits\ncolor\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "5Nu7": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("HW6M"),
            a = (n.n(i), n("U7vG")),
            r = (n.n(a), n("ysVA")),
            o = (n.n(r), "chat-author__intl-login"),
            s = function(e) {
                var t = [a.createElement("span", {
                    key: "username-display",
                    className: "chat-author__display-name",
                    "data-a-target": "chat-message-username",
                    "data-test-selector": "message-username",
                    style: {
                        color: e.userData.color
                    }
                }, e.userData.userDisplayName)];
                if (e.userData.isIntl) {
                    var n = i((r = {}, r[o] = !e.highlighted, r["chat-author__intl-login--highlighted"] = e.highlighted, r));
                    t.push(a.createElement("span", {
                        key: "username-login",
                        style: {
                            color: e.userData.color
                        },
                        className: n,
                        "data-test-selector": "message-username-canonical"
                    }, " (" + e.userData.userLogin + ")"))
                }
                return a.createElement("span", {
                    key: e.userData.userID + "-authorlabel"
                }, t);
                var r
            }
    },
    "5qwL": function(e, t, n) {
        var i = n("VaeB");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    "5vPJ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
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
                    return n || this.state.isTimedOut ? a.createElement(s.a, {
                        error: {
                            title: Object(r.d)("Something went wrong", "ClipsChatCard"),
                            description: Object(r.d)("We couldn't find that Clip", "ClipsChatCard")
                        }
                    }) : i || !t ? a.createElement(s.a, null) : a.createElement(s.a, {
                        data: {
                            title: t.title ? t.title : Object(r.d)("Clip of {broadcaster}", {
                                broadcaster: t.broadcaster.displayName
                            }, "ClipsChatCard"),
                            description: Object(r.d)("Clipped by {curator}", {
                                curator: t.curator.displayName
                            }, "ClipsChatCard"),
                            previewImageURL: t.thumbnailURL,
                            contentURL: t.url
                        }
                    })
                }, t
            }(a.Component),
            u = function(e) {
                return {
                    variables: {
                        slug: e.slug
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: e.forceNetworkRequest ? "cache-first" : "cache-only"
                }
            },
            m = Object(o.a)(l, {
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
            return m
        })
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "68hr": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("yWCw"),
            o = n("Odds"),
            s = function() {
                return i.createElement(r.a, {
                    message: Object(a.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.U, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(a.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "PageNotFound", function() {
            return s
        })
    },
    "6Agf": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
        }(i || (i = {}))
    },
    "6CZb": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return i(e).getTime() > (new Date).getTime()
        }
    },
    "6Rwu": function(e, t) {},
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
                a = Number(t);
            return new Date(n + a)
        }
    },
    "6axH": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 6 === i(e).getDay()
        }
    },
    "6lb1": function(e, t) {},
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
    "7yyf": function(e, t, n) {
        var i = n("rBmI");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n("a4C9"),
            r = (n.n(a), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
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
            var a = i(e, n),
                r = i(t, n);
            return a.getTime() === r.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var i = n("xA5w"),
            a = 864e5;
        e.exports = function(e, t, n, r) {
            var o = i(e).getTime(),
                s = i(t).getTime(),
                l = i(n).getTime(),
                c = i(r).getTime();
            if (o > s || l > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < c && l < s)) return 0;
            var d = (c > s ? s : c) - (l < o ? o : l);
            return Math.ceil(d / a)
        }
    },
    "8UBU": function(e, t) {},
    "8Wuk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("2hJ3"),
            s = n("yDzg"),
            l = "https://www.facebook.com/sharer/sharer.php",
            c = "https://www.twitter.com/share",
            d = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            m = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return h
        });
        var p;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(p || (p = {}));
        var h = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(m._39)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(m._39)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(o.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return a.createElement(m.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(m._9, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== p.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case p.Twitter:
                            return "Twitter";
                        case p.Reddit:
                            return "Reddit";
                        case p.Facebook:
                            return "Facebook";
                        case p.VKontakte:
                            return "VKontakte";
                        case p.Copy:
                            return n.state.isCopied ? Object(r.d)("Copied", "SocialButton") : Object(r.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case p.Twitter:
                            return m._10.Twitter;
                        case p.Facebook:
                            return m._10.Facebook;
                        case p.VKontakte:
                            return m._10.VKontakte;
                        case p.Reddit:
                            return m._10.Reddit;
                        case p.Copy:
                        default:
                            return m._10.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case p.Twitter:
                            return e + "--twitter";
                        case p.Reddit:
                            return e + "--reddit";
                        case p.Facebook:
                            return e + "--facebook";
                        case p.VKontakte:
                            return e + "--vkontakte";
                        case p.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        i = e.type,
                        a = n.getUrl(),
                        r = t || "";
                    switch (i) {
                        case p.Reddit:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    title: t
                                })
                            }(a, r);
                        case p.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(a);
                        case p.Facebook:
                            return function(e) {
                                return Object(s.a)(l, {
                                    u: e
                                })
                            }(a);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    text: t
                                })
                            }(a, r);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(m.U, {
                    className: "social-button"
                }, a.createElement(m._30, {
                    label: this.getTooltipFromType(),
                    direction: m._32.Top
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    "9CWX": function(e, t) {},
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
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        });
        var i = "BROADCAST_TYPE_ALL",
            a = "broadcaster_id",
            r = "BROADCAST_LENGTH_ANY",
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
            return s
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
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
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return r = i.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
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
                                    return a = i.sent(), t.requestError = a, [3, 4];
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
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var s = Object(r.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
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
                                alias: null,
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
                                        alias: null,
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("QU+n").definitions)), e.exports = i
    },
    Akl5: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    AwFw: function(e, t) {},
    Bb5e: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getFullYear() - a.getFullYear()
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
                a = Number(t);
            return n.setMonth(0), n.setDate(a), n
        }
    },
    D6ie: function(e, t, n) {
        var i = n("xA5w"),
            a = n("3znZ"),
            r = n("iRXW"),
            o = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = a(t).getTime() - r(t).getTime();
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
                n = e.broadcastSort === a.c,
                r = [];
            return "broadcastType" in e && e.broadcastType !== a.d && void 0 !== e.broadcastType && r.push(e.broadcastType), "broadcasterId" in e && r.push(a.a + ":" + e.broadcasterId), t.facetFilters = function(e) {
                return e.join(",")
            }(r), "broadcastLength" in e && e.broadcastLength !== a.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]), {
                typeID: n ? i.a.VideosNewest : i.a.Videos,
                params: t
            }
        };
        var i = n("5LoI"),
            a = n("9m97")
    },
    "Eoz/": function(e, t, n) {
        function i(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                i = Math.abs(e),
                r = i % 60;
            return n + a(Math.floor(i / 60), 2) + t + a(r, 2)
        }

        function a(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        var r = n("ymQ7"),
            o = n("D6ie"),
            s = n("zZbG"),
            l = n("xA5w"),
            c = n("dH3X"),
            d = n("uyaC"),
            u = {
                M: function(e) {
                    return e.getMonth() + 1
                },
                MM: function(e) {
                    return a(e.getMonth() + 1, 2)
                },
                Q: function(e) {
                    return Math.ceil((e.getMonth() + 1) / 3)
                },
                D: function(e) {
                    return e.getDate()
                },
                DD: function(e) {
                    return a(e.getDate(), 2)
                },
                DDD: function(e) {
                    return r(e)
                },
                DDDD: function(e) {
                    return a(r(e), 3)
                },
                d: function(e) {
                    return e.getDay()
                },
                E: function(e) {
                    return e.getDay() || 7
                },
                W: function(e) {
                    return o(e)
                },
                WW: function(e) {
                    return a(o(e), 2)
                },
                YY: function(e) {
                    return a(e.getFullYear(), 4).substr(2)
                },
                YYYY: function(e) {
                    return a(e.getFullYear(), 4)
                },
                GG: function(e) {
                    return String(s(e)).substr(2)
                },
                GGGG: function(e) {
                    return s(e)
                },
                H: function(e) {
                    return e.getHours()
                },
                HH: function(e) {
                    return a(e.getHours(), 2)
                },
                h: function(e) {
                    var t = e.getHours();
                    return 0 === t ? 12 : t > 12 ? t % 12 : t
                },
                hh: function(e) {
                    return a(u.h(e), 2)
                },
                m: function(e) {
                    return e.getMinutes()
                },
                mm: function(e) {
                    return a(e.getMinutes(), 2)
                },
                s: function(e) {
                    return e.getSeconds()
                },
                ss: function(e) {
                    return a(e.getSeconds(), 2)
                },
                S: function(e) {
                    return Math.floor(e.getMilliseconds() / 100)
                },
                SS: function(e) {
                    return a(Math.floor(e.getMilliseconds() / 10), 2)
                },
                SSS: function(e) {
                    return a(e.getMilliseconds(), 3)
                },
                Z: function(e) {
                    return i(e.getTimezoneOffset(), ":")
                },
                ZZ: function(e) {
                    return i(e.getTimezoneOffset())
                },
                X: function(e) {
                    return Math.floor(e.getTime() / 1e3)
                },
                x: function(e) {
                    return e.getTime()
                }
            };
        e.exports = function(e, t, n) {
            var i = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                a = (n || {}).locale,
                r = d.format.formatters,
                o = d.format.formattingTokensRegExp;
            a && a.format && a.format.formatters && (r = a.format.formatters, a.format.formattingTokensRegExp && (o = a.format.formattingTokensRegExp));
            var s = l(e);
            return c(s) ? function(e, t, n) {
                var i, a, r = e.match(n),
                    o = r.length;
                for (i = 0; i < o; i++) a = t[r[i]] || u[r[i]], r[i] = a || function(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
                }(r[i]);
                return function(e) {
                    for (var t = "", n = 0; n < o; n++) r[n] instanceof Function ? t += r[n](e, u) : t += r[n];
                    return t
                }
            }(i, r, o)(s) : "Invalid Date"
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
    Etzl: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("foQ+");
        t.normalizeName = function(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }, t.normalizeValue = function(e) {
            return "string" != typeof e && (e = String(e)), e
        }, t.getHeaderValues = function(e, t) {
            if (e instanceof Headers && e.getAll) return e.getAll(t);
            var n = e.get(t);
            return n && "string" == typeof n ? [n] : n
        }, t.getHeaderKeys = function(e) {
            var t = {},
                n = [];
            return e.keys ? i.iterateHeadersKeys(e, function(e) {
                t[e] || (t[e] = !0, n.push(e))
            }) : e.forEach ? e.forEach(function(e, i) {
                t[i] || (t[i] = !0, n.push(i))
            }) : i.iterateHeaders(e, function(e) {
                var i = e[0];
                t[i] || (t[i] = !0, n.push(i))
            }), n
        }, t.splitHeaderValue = function(e) {
            var t = [];
            return e.split(", ").forEach(function(e) {
                e.split(",").forEach(function(e) {
                    t.push(e)
                })
            }), t
        }
    },
    FKWv: function(e, t) {},
    FsFC: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e === a.SECOND ? Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === a.MINUTE ? Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === a.DAY ? Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === a.HOUR ? Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === a.WEEK ? Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === a.MONTH ? Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }
        t.a = function(e) {
            if (e < 60) return i(a.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(a.MINUTE, t) + " " + i(a.SECOND, n) : i(a.MINUTE, t);
            var r = Math.floor(t / 60);
            if (t %= 60, r < 24) return t ? i(a.HOUR, r) + " " + i(a.MINUTE, t) : i(a.HOUR, r);
            var o = Math.floor(r / 24);
            if (r %= 24, o < 7) return r ? i(a.DAY, o) + " " + i(a.HOUR, r) : i(a.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return (o %= 7) ? i(a.WEEK, s) + " " + i(a.DAY, o) : i(a.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return i(a.MONTH, l)
        };
        var a, r = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(a || (a = {}))
    },
    G7No: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() - a.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var i = n("xA5w"),
            a = n("orNa"),
            r = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = r(n, o),
                l = Math.abs(a(n, o));
            return n.setMonth(n.getMonth() - s * l), s * (l - (r(n, o) === -s))
        }
    },
    GJxf: function(e, t, n) {
        "use strict";
        var i, a, r = n("RH2O"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("U7vG"),
            c = n("6sO2"),
            d = n("vH/s"),
            u = n("CSlQ"),
            m = n("81qH"),
            p = n("Odds"),
            h = (n("yF7E"), "carousel-content"),
            f = 10,
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        hasTrackedItemSectionLoad: !1
                    }, t.onPreviewCardClick = function(e) {
                        if (t.props.videos) {
                            var n = t.props.videos[e];
                            c.m.trackItemSectionClick(o.__assign({
                                carousel_content: t.props.tracking.content,
                                item_id: n.id,
                                item_index: e,
                                item_type: d.TwitchDataType.Video,
                                item_viewcount: n.viewCount,
                                location: t.props.tracking.location
                            }, t.props.tracking.source))
                        }
                    }, t.getVideoCards = function(e) {
                        if (null === e) {
                            for (var n = [], i = 0; i < f; i++) n.push(l.createElement(m.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        for (var a = [], r = 0; r < e.length; r++) null !== e && (r < f || t.props.firstPageLoaded) ? a.push(l.createElement(m.VideoPreviewCard, {
                            collectionID: t.props.collectionID,
                            onClick: t.onPreviewCardClick,
                            key: "video-" + r,
                            tracking: {
                                content: t.props.tracking.content,
                                content_index: r,
                                medium: t.props.tracking.medium
                            },
                            overrideImageInteractivity: t.props.overrideCardImageInteractivity,
                            video: e[r]
                        })) : a.push(l.createElement(m.VideoPreviewCardPlaceholder, {
                            key: "carousel-placeholder-" + r
                        }));
                        return a
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
                                n = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
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
                            a = t.getVideoCardEndPadding();
                        return Math.floor((i + a) / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.getVideoCardEndPadding = function() {
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + h + "]");
                        if (!e || 0 === e.children.length) return 0;
                        var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                        return 2 * parseInt(n, 10) || 0
                    }, t.pixelOffset = function() {
                        return t.getChildWidth() * t.state.currentElementIndex * -1
                    }, t.transformString = function() {
                        return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.videos && this.props.videos && !1 === this.state.hasTrackedItemSectionLoad && this.onDataLoaded()
                }, t.prototype.render = function() {
                    return l.createElement(p.P, o.__assign({}, this.props, {
                        margin: {
                            bottom: 2,
                            top: 1
                        },
                        position: p._3.Relative
                    }), l.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, l.createElement(p.U, {
                        className: "video-carousel__child-container",
                        overflow: p.Z.Hidden,
                        position: p._3.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, l.createElement(p.P, {
                        margin: {
                            bottom: 3
                        }
                    }, l.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, l.createElement(p._33, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || p._34.Large,
                        gutterSize: p._35.Small,
                        "data-js-selector": h
                    }, this.getVideoCards(this.props.videos))))), l.createElement(p.U, {
                        className: "video-carousel__nav",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        position: p._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, l.createElement(y, {
                        direction: v.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), l.createElement(p.U, {
                        className: "video-carousel__nav",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        position: p._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, l.createElement(y, {
                        direction: v.DirectionNext,
                        disabled: !this.state.childrenRendered || this.isForwardButtonDisabled(),
                        onClickHandler: this.moveCarouselForward
                    }))))
                }, t.prototype.trackSectionLoad = function() {
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, a = e; i < a.length; i++) {
                        var r = a[i];
                        t.push(r.id), n.push(r.viewCount)
                    }
                    c.m.trackItemSectionLoad(o.__assign({
                        carousel_content: this.props.tracking.content,
                        location: this.props.tracking.location,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [d.TwitchDataType.Video],
                        rendered_items_viewcounts: n
                    }, this.props.tracking.source))
                }, t.prototype.onDataLoaded = function() {
                    this.trackSectionLoad(), this.state.childrenRendered || this.setState({
                        childrenRendered: !0
                    })
                }, t
            }(l.Component),
            v = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            b = (i = {}, i[v.DirectionPrevious] = "previous", i[v.DirectionNext] = "next", i),
            k = (a = {}, a[v.DirectionPrevious] = p._10.AngleLeft, a[v.DirectionNext] = p._10.AngleRight, a),
            y = function(e) {
                var t = b[e.direction],
                    n = (a = {}, a[v.DirectionPrevious] = Object(c.d)("previous", "CarouselNavButton"), a[v.DirectionNext] = Object(c.d)("next", "CarouselNavButton"), a),
                    i = s("video-carousel__button", "video-carousel__button--" + t, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return l.createElement(p.U, {
                    className: i,
                    position: p._3.Relative,
                    display: p.H.Flex,
                    alignItems: p.c.Stretch
                }, l.createElement(p.v, {
                    "data-test-selector": t + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: n[e.direction],
                    icon: k[e.direction],
                    size: p.x.Large
                }));
                var a
            },
            S = Object(u.c)("VideoCarousel", {
                autoReportInteractive: !0
            })(g);
        n.d(t, "a", function() {
            return _
        });
        var _ = Object(r.a)(function(e) {
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
            a = n("U7vG"),
            r = n("F8kA"),
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
                    return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), a.createElement(c.C, {
                        aspect: c.k.Aspect16x9,
                        imageAlt: this.props.altText,
                        imageSrc: e,
                        onImageError: this.handleImageError
                    })
                }, t
            }(a.Component),
            u = (n("1tZx"), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
            m = {
                ERROR: "chat-card-error",
                TITLE: "chat-card-title",
                DESCRIPTION: "chat-card-description"
            },
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderErrorCard = function() {
                        var e = a.createElement("img", {
                            "data-test-selector": m.ERROR,
                            src: u,
                            className: "chat-card__error-img"
                        });
                        return t.renderCardContent(e, t.props.error)
                    }, t.renderCardContent = function(e, t) {
                        var n, i;
                        return t ? (n = a.createElement(c._22, {
                            type: c._27.Span,
                            fontSize: c.L.Size5,
                            "data-test-selector": m.TITLE,
                            title: t.title
                        }, t.title), i = a.createElement(c._22, {
                            type: c._27.Span,
                            fontSize: c.L.Size6,
                            color: c.F.Alt2,
                            "data-test-selector": m.DESCRIPTION
                        }, t.description)) : (e = a.createElement(c._2, {
                            overlay: !0
                        }), n = a.createElement(c._2, {
                            width: 180
                        }), i = a.createElement(c._2, {
                            width: 120
                        })), a.createElement(c._18, {
                            background: c.m.Base,
                            display: c.H.Flex,
                            flexWrap: c.K.NoWrap,
                            padding: .5
                        }, a.createElement(c._18, {
                            className: "chat-card__preview-img",
                            background: c.m.Alt2,
                            display: c.H.Flex,
                            alignItems: c.c.Center,
                            justifyContent: c.T.Center,
                            flexShrink: 0
                        }, e), a.createElement(c.U, {
                            display: c.H.Flex,
                            alignItems: c.c.Center
                        }, a.createElement(c.U, {
                            margin: {
                                left: 1
                            },
                            fullWidth: !0
                        }, a.createElement(c.U, {
                            className: "chat-card__title",
                            ellipsis: !0
                        }, n), a.createElement(c.U, {
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
                            n = a.createElement(d, {
                                altText: this.props.data.title,
                                imageURL: this.props.data.previewImageURL
                            });
                        e = a.createElement(r.a, {
                            className: "chat-card__link",
                            to: t,
                            target: "_blank"
                        }, this.renderCardContent(n, {
                            title: this.props.data.title,
                            description: this.props.data.description
                        }))
                    } else e = this.renderCardContent();
                    return a.createElement(c._18, {
                        elevation: 1,
                        margin: {
                            top: .5
                        }
                    }, e)
                }, t
            }(a.Component),
            h = p;
        n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return p
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
                a = new Date(0);
            return a.setFullYear(t, n, i + 1), a.setHours(23, 59, 59, 999), a
        }
    },
    I7cV: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = i(e),
                r = a.getDay(),
                o = 6 + (r < n ? -7 : 0) - (r - n);
            return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a
        }
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("KSGD")),
            o = (n.n(r), n("U7vG")),
            s = (n.n(o), n("F8kA")),
            l = n("5kgt"),
            c = n("SI0h"),
            d = n("eXld"),
            u = n("2aoH"),
            m = n("Odds"),
            p = n("1E7T"),
            h = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.onHistoryChange = function(e) {
                        e.pathname !== t.currentPath && t.context.scrollToTop(), t.currentPath = e.pathname
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return o.createElement(m.U, i.__assign({
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), o.createElement(d.b, {
                        className: e,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), o.createElement(u.a, null, o.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), o.createElement(m.U, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.contextTypes = {
                    scrollToTop: r.func
                }, t
            }(o.Component)),
            f = Object(s.f)(h)
    },
    IwGL: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "LatestVideosFromFollowedCarouselComponent", function() {
            return p
        }), n.d(t, "LatestVideosFromFollowedCarousel", function() {
            return h
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("BhyV")),
            o = (n.n(r), n("6sO2")),
            s = n("7vx8"),
            l = n("CSlQ"),
            c = n("GJxf"),
            d = n("dc2a"),
            u = n("Odds"),
            m = n("97Ye"),
            p = (n.n(m), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data && !this.props.data.loading && this.props.data.currentUser && Object(d.a)(this.props.data.currentUser.followedVideos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? a.createElement(u.U, null, a.createElement(u.U, {
                        padding: {
                            bottom: 1
                        }
                    }, a.createElement(u._22, {
                        type: u._27.H4,
                        fontSize: u.L.Size5,
                        transform: u._26.Uppercase,
                        color: u.F.Alt2
                    }, Object(o.d)("Latest videos", "LatestVideosFromFollowedCarousel"))), a.createElement(c.a, {
                        overrideCardImageInteractivity: !0,
                        tracking: {
                            content: this.props.tracking.content,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {}
                        },
                        videos: e
                    })) : null
                }, t
            }(a.Component)),
            h = Object(r.compose)(Object(s.a)(m), Object(l.c)("LatestVideosFromFollowedCarousel"))(p)
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
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
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.P, {
                        position: r._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._38.Above
                    }, a.createElement("input", {
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
    JpYe: function(e, t, n) {
        "use strict";

        function i(e) {
            return r(s.parse(e.location.search).sort || "")
        }

        function a(e) {
            switch (e.match.params.filter) {
                case c.a.Archive.toLowerCase():
                    return c.a.Archive;
                case c.a.Highlight.toLowerCase():
                    return c.a.Highlight;
                case c.a.Upload.toLowerCase():
                    return c.a.Upload;
                case c.a.PastPremiere.toLowerCase():
                    return c.a.PastPremiere;
                default:
                    return
            }
        }

        function r(e) {
            switch (e.toUpperCase()) {
                case d.b:
                    return d.b;
                case d.a:
                    return d.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, r) {
            var s = r || i(t),
                c = "";
            s && (c = "?sort=" + function(e) {
                switch (e) {
                    case d.b:
                        return o.Popular;
                    case d.a:
                        return o.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(s));
            var u = n ? n.toLowerCase() : function(e) {
                var t = a(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            l.n.history.push(e + "/" + u + c)
        }, t.c = i, t.b = a, t.a = function(e) {
            var t = s.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = r;
        var o, s = n("OAwv"),
            l = (n.n(s), n("6sO2")),
            c = n("6WAQ"),
            d = n("3yQz");
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(o || (o = {}))
    },
    Jtuq: function(e, t, n) {
        var i = n("lQzg"),
            a = n("xA5w");
        e.exports = function(e, t) {
            var n = a(e),
                r = a(t);
            return 4 * (n.getFullYear() - r.getFullYear()) + (i(n) - i(r))
        }
    },
    Jvcu: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t);
            return n.setDate(n.getDate() + a), n
        }
    },
    K7ZZ: function(e, t, n) {
        var i = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var r = a(n);
            return r.setMilliseconds(r.getMilliseconds() - 1), r
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPermanent"
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
    "Lx+S": function(e, t, n) {
        "use strict";

        function i(e) {
            var t = r.createElement(T._22, {
                    bold: !0,
                    type: T._27.Span
                }, r.createElement("span", {
                    style: {
                        color: e.chatColor
                    },
                    "data-a-target": P
                }, Object(R.a)(e.login, e.displayName))),
                n = null;
            return e.editAppearance || (n = r.createElement(T.U, {
                margin: {
                    top: 1
                }
            }, r.createElement("div", {
                className: "chat-settings__edit-button",
                onClick: e.onClickEdit,
                "data-a-target": B,
                "data-test-selector": V
            }, Object(w.d)("Edit Appearance", "ChatSettings")))), r.createElement(T._18, {
                background: T.m.Base,
                color: T.F.Base,
                display: T.H.InlineFlex,
                flexDirection: T.J.Column,
                fullWidth: !0
            }, r.createElement(T._22, {
                color: T.F.Alt2,
                transform: T._26.Uppercase
            }, Object(w.d)("Name Display", "ChatSettings")), r.createElement(T.U, {
                margin: {
                    top: 2
                }
            }, e.userBadges && e.userBadges.map(function(e) {
                return r.createElement(j.a, {
                    key: e.id,
                    badge: e
                })
            }), t), n)
        }
        var a = n("TToO"),
            r = n("U7vG"),
            o = n("RH2O"),
            s = n("CIox"),
            l = n("2KeS"),
            c = n("NXs7"),
            d = n("Ouuk"),
            u = n("jF7o"),
            m = n("+xm8"),
            p = n("f2i/"),
            h = n("NikC"),
            f = n("Aj/L"),
            g = n("0nzt"),
            v = n("vh75"),
            b = n("ass3"),
            k = n("UzRK"),
            y = n("TnJK"),
            S = n("O0Qc"),
            _ = n("VsL1"),
            C = n("Umoc"),
            w = n("6sO2"),
            E = n("zCIC"),
            x = n("+Znq"),
            D = n("7vx8"),
            O = n("HW6M"),
            N = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            T = n("Odds"),
            I = (n("90yy"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onColorSelected = function(e) {
                        var n = e.currentTarget.getAttribute("data-color");
                        n && t.props.onColorSelected(n)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = N.map(function(t) {
                            var n = {
                                "color-chooser": !0,
                                "color-chooser--selected": t === e.props.selectedColor
                            };
                            return r.createElement("div", {
                                key: t,
                                "data-color": t,
                                onClick: e.onColorSelected,
                                className: O(n),
                                style: {
                                    backgroundColor: t
                                },
                                "data-test-selector": "color_swatch_" + t,
                                "data-a-target": "color_swatch_" + t
                            })
                        }),
                        n = r.createElement(T._22, {
                            transform: T._26.Uppercase,
                            color: T.F.Alt2
                        }, Object(w.d)("Name Color", "ChatSettings"));
                    return this.props.borderTop && (n = r.createElement(T._18, {
                        margin: {
                            top: 2
                        },
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, n)), r.createElement("div", null, r.createElement(T._18, {
                        margin: {
                            bottom: 1
                        },
                        background: T.m.Base,
                        color: T.F.Base,
                        display: T.H.InlineFlex,
                        flexDirection: T.J.Column,
                        fullWidth: !0
                    }, n), r.createElement(T.U, {
                        margin: {
                            y: 1
                        },
                        display: T.H.Flex
                    }, t, r.createElement(T._22, {
                        fontSize: T.L.Size7
                    }, r.createElement("a", {
                        href: "https://twitch.tv/products/turbo?ref=more_colors_direct"
                    }, Object(w.d)("more colors →", "ChatSettings")))))
                }, t
            }(r.Component)),
            F = n("OAwv"),
            A = n("AaXK"),
            U = (n("7LVu"), "channel_badge"),
            M = "global_badge",
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onGlobalBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setGlobalBadge(t.props.userLogin, n || "")
                    }, t.onChannelBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? r.createElement("div", null, r.createElement(I, {
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
                            s = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": !o
                            },
                            l = Object(w.d)("No channel badges :(", "ChatSettings");
                        t && t.length > 0 && (l = t.map(function(t) {
                            var i = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": n && t.setID === o
                            };
                            return r.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onChannelBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: O(i),
                                "data-test-selector": U + "_" + t.setID,
                                "data-a-target": U + "_" + t.setID
                            }, r.createElement(T._30, {
                                label: t.title
                            }, r.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(r.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onChannelBadgeClicked,
                            className: O(s),
                            "data-test-selector": U + "_none",
                            "data-a-target": U + "_none"
                        }, r.createElement(T._30, {
                            label: Object(w.d)("Same as Global", "ChatSettings")
                        }, r.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, r.createElement(T._9, {
                            asset: T._10.Global
                        })))));
                        var c = void 0 === this.state.globalBadgeID && a ? a.setID : this.state.globalBadgeID,
                            d = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": !c
                            },
                            u = Object(w.d)("No global badges :(", "ChatSettings");
                        return i && i.length > 0 && (u = i.map(function(t) {
                            var n = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": a && t.setID === c
                            };
                            return r.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onGlobalBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: O(n),
                                "data-test-selector": M + "_" + t.setID,
                                "data-a-target": M + "_" + t.setID
                            }, r.createElement(T._30, {
                                label: t.title
                            }, r.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(r.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onGlobalBadgeClicked,
                            className: O(d),
                            "data-test-selector": M + "_none",
                            "data-a-target": M + "_none"
                        }, r.createElement(T._30, {
                            label: Object(w.d)("None", "ChatSettings")
                        }, r.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, r.createElement(T._9, {
                            asset: T._10.Ban
                        }))))), r.createElement("div", null, r.createElement(T._18, {
                            background: T.m.Base,
                            color: T.F.Base,
                            display: T.H.InlineFlex,
                            flexDirection: T.J.Column,
                            fullWidth: !0
                        }, r.createElement(T._18, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, r.createElement(T._30, {
                            align: T._31.Left,
                            label: Object(w.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                            width: 175
                        }, r.createElement(T._22, {
                            color: T.F.Alt2,
                            transform: T._26.Uppercase
                        }, Object(w.d)("Global Badge [?]", "ChatSettings")))), r.createElement(T.U, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: T.H.Flex,
                            "data-a-target": "global-badge-selector"
                        }, u)), r.createElement(T._18, {
                            background: T.m.Base,
                            color: T.F.Base,
                            display: T.H.InlineFlex,
                            flexDirection: T.J.Column,
                            fullWidth: !0
                        }, r.createElement(T._18, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, r.createElement(T._30, {
                            align: T._31.Left,
                            label: Object(w.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                            width: 175
                        }, r.createElement(T._22, {
                            color: T.F.Alt2,
                            transform: T._26.Uppercase
                        }, Object(w.d)("Channel Badge [?]", "ChatSettings")))), r.createElement(T.U, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: T.H.Flex,
                            "data-a-target": "channel-badge-selector"
                        }, l)))
                    }
                }, t.prototype.setChannelBadge = function(e, t, n) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var i, r, o;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return i = {
                                        "Client-ID": w.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, r = "https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", [4, fetch(r, {
                                        method: "PUT",
                                        body: F.stringify({
                                            selected_badge: n
                                        }),
                                        headers: i
                                    })];
                                case 1:
                                    return (o = a.sent()) && o.ok && (this.props.onBadgesChanged(), this.setState({
                                        channelBadgeID: n
                                    })), [2]
                            }
                        })
                    })
                }, t.prototype.setGlobalBadge = function(e, t) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var n, i, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = {
                                        "Client-ID": w.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, i = "https://api.twitch.tv/kraken/users/" + e + "/chat/badges", [4, fetch(i, {
                                        method: "PUT",
                                        body: F.stringify({
                                            selected_badge: t
                                        }),
                                        headers: n
                                    }).catch(console.error)];
                                case 1:
                                    return (r = a.sent()) && r.ok && (this.props.onBadgesChanged(), this.setState({
                                        globalBadgeID: t
                                    })), [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(D.a)(A, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(r.Component),
            R = n("SZoP"),
            j = n("3T7g"),
            V = "edit-appearance-button",
            B = "edit-appearance-button",
            P = "edit-display-name",
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(T.U, {
                        "data-toggle-balloon-id": "raids-follower-only-tooltip",
                        margin: {
                            left: .5
                        },
                        position: T._3.Relative
                    }, r.createElement(T._30, {
                        align: T._31.Right,
                        direction: T._32.Top,
                        display: T.H.InlineFlex,
                        label: this.props.text,
                        width: 175,
                        show: !0
                    }, r.createElement(T.P, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.H.InlineFlex,
                        justifyContent: T.T.Center
                    }, r.createElement(T._22, {
                        color: T.F.Overlay,
                        fontSize: T.L.Size8,
                        type: T._27.Span,
                        "data-test-selector": "raids-follower-only-tooltip"
                    }, "i"))))
                }, t
            }(r.Component),
            W = n("V5M+"),
            z = n("oSFp"),
            q = n("F8kA"),
            G = n("9u8h"),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetChannelID = t.props.targetChannelID, t
                }
                return a.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, G.a.get("/kraken/raids?client_id=" + w.a.authClientID + "&api_version=" + w.a.defaultAPIVersion + "&target_id=" + e)];
                                case 1:
                                    return t = i.sent(), [2, this.deserialize(t)];
                                case 2:
                                    return n = i.sent(), w.i.error(n, "Couldn't fetch raids list"), [2, []];
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
            Q = n("oIkB"),
            K = n("g7wA"),
            J = n("O9wU"),
            Z = n("jPU6"),
            $ = n("y1/w"),
            X = (n("MSFW"), n("L0RX")),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onUsernameClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-username"),
                            i = e.currentTarget.getAttribute("data-raid-id") || "";
                        n && t.props.onUsernameClick(n, J.a.recent_raids, i)
                    }, t.onBanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.banUser)(Object(Q.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t.onUnbanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.unbanUser)(Object(Q.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(T.U, {
                        key: "recent-raids-layout2-" + this.props.raiderUserID,
                        className: "recent-raids-item",
                        flexDirection: T.J.Row,
                        display: T.H.Flex,
                        fullWidth: !0
                    }, r.createElement(T.U, {
                        flexDirection: T.J.Row,
                        display: T.H.Flex,
                        fullWidth: !0,
                        justifyContent: T.T.Between
                    }, r.createElement(T._22, {
                        bold: !0
                    }, r.createElement("a", {
                        className: "recent-raids-item__name",
                        "data-username": this.props.channelLogin,
                        "data-raid-id": this.props.raidID,
                        onClick: this.onUsernameClick,
                        href: "#"
                    }, this.props.channelLogin)), r.createElement(T.U, {
                        position: T._3.Relative
                    }, r.createElement(T.U, {
                        className: "recent-raids-item__timestamp"
                    }, Object(K.s)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                }, t.prototype.getCardSlideInContent = function() {
                    if (!this.props.slideInContent) return null;
                    var e = null;
                    return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? r.createElement(T.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.x.Small,
                        type: T.z.Text,
                        onClick: this.onUnbanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(w.d)("Unban", "RecentRaid")) : r.createElement(T.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.x.Small,
                        type: T.z.Text,
                        onClick: this.onBanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(w.d)("Ban", "RecentRaid")), r.createElement(T.U, {
                        key: "recent-raids-layout-" + this.props.raiderUserID,
                        className: "recent-raids-item__hover-content",
                        zIndex: T._38.Above,
                        "data-a-target": "recent-raids-item-hover"
                    }, this.props.slideInContent, e)
                }, t = a.__decorate([Object(D.a)($, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.raiderUserID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(D.a)(Z, {
                    name: "banUser",
                    options: function(e) {
                        return {
                            update: function(t, n) {
                                ! function(e, t, n) {
                                    var i = e.readQuery({
                                        query: $,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        }
                                    });
                                    t && t.data && (i.chatRoomBanStatus = {
                                        isPermanent: !0,
                                        __typename: "ChatRoomBanStatus"
                                    }), e.writeQuery({
                                        query: $,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        },
                                        data: i
                                    })
                                }(t, n, e)
                            }
                        }
                    }
                }), Object(D.a)(X, {
                    name: "unbanUser",
                    options: function(e) {
                        return {
                            update: function(t) {
                                ! function(e, t) {
                                    var n = e.readQuery({
                                            query: $,
                                            variables: {
                                                targetUserID: t.raiderUserID,
                                                channelID: t.channelID
                                            }
                                        }),
                                        i = a.__assign({}, n, {
                                            chatRoomBanStatus: null
                                        });
                                    e.writeQuery({
                                        query: $,
                                        variables: {
                                            targetUserID: t.raiderUserID,
                                            channelID: t.channelID
                                        },
                                        data: i
                                    })
                                }(t, e)
                            }
                        }
                    }
                })], t)
            }(r.Component),
            te = n("mw/a"),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onReportButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-raid-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-id") || "",
                            a = e.currentTarget.getAttribute("data-target-user-login") || "";
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: te.a.Raid,
                                targetUserID: i,
                                contentID: n,
                                extra: JSON.stringify({
                                    channel_id: i.toString()
                                })
                            },
                            title: Object(w.d)("Report {channelDisplayName}", {
                                channelDisplayName: a
                            }, "ReportUserModal")
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Y.fetchRecentRaidsList(this.props.targetChannelID)];
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
                    if (void 0 !== this.state.raidChannels) {
                        0 === this.state.raidChannels.length && e.push(r.createElement(T._22, {
                            key: "recent-raids-no-raids",
                            type: T._27.P
                        }, Object(w.d)("You have no recent raids", "RecentRaids")));
                        for (var i in this.state.raidChannels)
                            if (i.hasOwnProperty) {
                                var a = this.state.raidChannels[i];
                                this.state.raidChannels.hasOwnProperty(i) && void 0 === n[a.userID] && (t.push(r.createElement(ee, {
                                    key: "recent-raids-item-" + a.userID,
                                    slideInContent: [r.createElement(T._18, {
                                        key: "recent-raids-item-report-area-" + a.userID,
                                        color: T.F.Alt2,
                                        display: T.H.InlineFlex
                                    }, r.createElement(T.u, {
                                        key: "recent-raid-report-button",
                                        size: T.x.Small,
                                        type: T.z.Text,
                                        onClick: this.onReportButtonClick,
                                        "data-a-target": "recent-raid-item-button",
                                        "data-raid-id": a.raidID,
                                        "data-target-user-login": a.name,
                                        "data-target-user-id": a.userID
                                    }, Object(w.d)("Report", "RecentRaid")), r.createElement(T._30, {
                                        align: T._31.Right,
                                        width: 150,
                                        label: Object(w.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
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
                    }
                    var o = null;
                    return this.props.recentRaids ? r.createElement(T.U, {
                        key: "recent-raids"
                    }, r.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(T._22, {
                        color: T.F.Link,
                        type: T._27.Span
                    }, r.createElement(q.a, {
                        to: {
                            pathname: "/broadcast/dashboard/settings/raids"
                        }
                    }, Object(w.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (o = r.createElement(T.U, {
                        key: "recent-raids",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: T.H.Flex,
                        justifyContent: T.T.Between,
                        alignItems: T.c.Center
                    }, r.createElement("span", {
                        className: "chat-settings__edit-button",
                        onClick: this.props.onClickRecentRaids,
                        "data-test-selector": "recent-raids-button"
                    }, Object(w.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && r.createElement(T.U, {
                        position: T._3.Relative
                    }, r.createElement(T._30, {
                        align: T._31.Right,
                        direction: T._32.Top,
                        display: T.H.InlineFlex,
                        label: this.props.tooltipText,
                        width: 175,
                        show: !0
                    }, r.createElement(T.P, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.H.InlineFlex,
                        justifyContent: T.T.Center,
                        margin: {
                            left: .5
                        }
                    }, r.createElement(T._22, {
                        color: T.F.Overlay,
                        fontSize: T.L.Size8,
                        type: T._27.Span
                    }, "i"))))), r.createElement(T.U, null, o))
                }, t
            }(r.Component),
            ie = Object(o.a)(function() {
                return {}
            }, function(e) {
                return Object(l.bindActionCreators)({
                    showReportUserModal: function(e) {
                        var t = a.__rest(e, []);
                        return Object(W.d)(z.a, t)
                    }
                }, e)
            })(ne),
            ae = n("baDC"),
            re = (n("Vaxm"), "chat-settings-back-button"),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        recentRaids: !1,
                        chatColor: null,
                        raidsTooltipDismissed: !1
                    }, t.dismissRaidsTooltip = function() {
                        t.setState({
                            raidsTooltipDismissed: !0
                        })
                    }, t.handleFollowerDurationClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-duration");
                        n && t.props.onFollowerDurationChange(parseInt(n, 10))
                    }, t.onClickEdit = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onClickEditAppearance()
                    }, t.onClickRecentRaids = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
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
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return !this.props.data || this.props.data.loading ? [3, 2] : [4, this.props.data.refetch()];
                                    case 1:
                                        if ((e = i.sent()).data) {
                                            if (!(t = e.data).user.self) return [2];
                                            n = {}, t.user.self.displayBadges.forEach(function(e) {
                                                n[e.setID] = e.version
                                            }), w.n.tmi.client.updateChannelBadges(this.props.channelLogin, n)
                                        }
                                        i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    var e = null;
                    if (this.props.isLoggedIn && this.props.data.currentUser) {
                        var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                        e = r.createElement(i, {
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
                    return this.props.isLoggedIn ? this.props.editAppearance ? n = [r.createElement(T.P, {
                        margin: {
                            bottom: 2
                        },
                        key: "chat-settings-edit-inject"
                    }, r.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__edit-button",
                        onClick: this.onClickBack,
                        "data-test-selector": re
                    }, r.createElement(T._22, {
                        color: T.F.Link,
                        type: T._27.Span
                    }, r.createElement(T._9, {
                        asset: T._10.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(w.d)("Back", "ChatSettingsAppearance")))), e, r.createElement(L, {
                        key: "edit-appearance",
                        onColorSelected: this.onColorSelected,
                        editAppearance: this.props.editAppearance,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                        userLogin: this.props.data.currentUser.login,
                        onBadgesChanged: this.onBadgesChanged
                    })] : this.state.recentRaids ? n = [r.createElement(T.P, {
                        key: "chat-settings-recent-raids"
                    }, r.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__recent-raids-button",
                        onClick: this.onClickBack,
                        "data-test-selector": re
                    }, r.createElement(T._22, {
                        color: T.F.Link,
                        type: T._27.Span
                    }, r.createElement(T._9, {
                        asset: T._10.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(w.d)("Back", "ChatSettingsRecentRaids")), r.createElement(T.U, {
                        margin: {
                            top: 2
                        }
                    }, r.createElement(T._22, {
                        key: "recent-raids-title",
                        color: T.F.Alt2,
                        transform: T._26.Uppercase
                    }, Object(w.d)("Recent Raids", "ChatSettings"))))), r.createElement(ie, {
                        key: "recent-raids",
                        targetChannelID: this.props.channelID,
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard
                    })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && n.push(this.renderModTools())) : n = [r.createElement(I, {
                        key: "color-chooser",
                        onColorSelected: this.props.onColorSelected
                    }), this.renderUniversalOptions()], r.createElement(E.b, {
                        className: "chat-settings"
                    }, r.createElement("div", {
                        onClick: this.dismissRaidsTooltip
                    }, r.createElement(T._18, {
                        key: "chat-settings",
                        className: "chat-settings__content",
                        background: T.m.Base,
                        color: T.F.Base,
                        padding: 2
                    }, n)))
                }, t.prototype.renderUniversalOptions = function() {
                    if (!this.props.data) return null;
                    var e = this.props.isPopout && r.createElement(T.E, {
                            checked: this.props.darkModeEnabled,
                            "data-a-target": "darkmode-checkbox",
                            "data-test-selector": "dark-mode-checkbox",
                            id: "chat-settings-dark-mode",
                            label: Object(w.d)("Dark Mode", "ChatSettings"),
                            onChange: this.props.onDarkModeToggle
                        }),
                        t = !this.props.isPopout && r.createElement("button", {
                            onClick: this.props.onChatPopout,
                            "data-a-target": "popout-chat-button",
                            "data-test-selector": "popout-button"
                        }, Object(w.d)("Popout", "ChatSettings")),
                        n = !this.props.isPopout && (window.BetterTTV || window.FrankerFaceZ) && r.createElement("button", {
                            onClick: this.props.onLegacyChatPopout,
                            "data-test-selector": "legacy-popout-button"
                        }, Object(w.d)("Legacy Popout", "ChatSettings"));
                    return r.createElement(T.U, {
                        key: "chat-options"
                    }, r.createElement(T._18, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(T._22, {
                        color: T.F.Alt2,
                        transform: T._26.Uppercase
                    }, Object(w.d)("Chat Options", "ChatSettings"))), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.E, {
                        checked: this.props.showTimestamps,
                        "data-a-target": "timestamp-checkbox",
                        "data-test-selector": "timestamps-selector",
                        id: "chat-settings-timestamp",
                        label: Object(w.d)("Timestamps", "ChatSettings"),
                        onChange: this.props.onTimestampToggle
                    })), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, e), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement("button", {
                        onClick: this.props.onChatHide,
                        "data-a-target": "hide-chat-button",
                        "data-test-selector": "hide-chat-button"
                    }, Object(w.d)("Hide Chat", "ChatSettings"))), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, t), n && r.createElement(T.U, null, n))
                }, Object.defineProperty(t.prototype, "showRaidsTooltip", {
                    get: function() {
                        return this.props.sawFirstRaidPrompt && !this.state.raidsTooltipDismissed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderModTools = function() {
                    return r.createElement(T._18, {
                        key: "mod-tools",
                        borderTop: !0,
                        "data-test-selector": "mod-tools",
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, r.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(T._22, {
                        color: T.F.Alt2,
                        transform: T._26.Uppercase
                    }, Object(w.d)("Mod Tools", "ChatSettings"))), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.E, {
                        checked: this.props.showModerationIcons,
                        "data-a-target": "mod-icons-checkbox",
                        "data-test-selector": "mod-icons-checkbox",
                        id: "chat-settings-mod-icons",
                        label: Object(w.d)("Mod Icons", "ChatSettings"),
                        onChange: this.props.onModIconsToggle
                    })), r.createElement(T._18, {
                        margin: {
                            bottom: 1
                        },
                        display: T.H.Flex,
                        justifyContent: T.T.Between
                    }, r.createElement(T.E, {
                        checked: this.props.followerModeEnabled,
                        "data-a-target": "follower-mode-checkbox",
                        "data-test-selector": "follower-mode-checkbox",
                        id: "chat-settings-followers-only",
                        label: Object(w.d)("Followers-Only Chat", "ChatSettings"),
                        onChange: this.props.onFollowerModeToggle
                    }), this.showRaidsTooltip ? r.createElement(H, {
                        text: Object(w.d)("Prevent offensive raiders from chatting.", "RaidReportingChat")
                    }) : null, r.createElement(T.U, {
                        alignItems: T.c.Center,
                        display: T.H.Flex,
                        flexWrap: T.K.NoWrap,
                        justifyContent: T.T.Between
                    }, r.createElement(T.U, {
                        margin: {
                            right: .5
                        }
                    }, r.createElement(T._22, {
                        color: T.F.Alt2,
                        fontSize: T.L.Size7,
                        type: T._27.Span
                    }, Object(w.d)("Must have followed for", "ChatSettings"))), r.createElement(T.U, {
                        className: "chat-settings__mod-tools-follower-button",
                        flexShrink: 0
                    }, r.createElement(x.a, {
                        display: T.H.InlineBlock
                    }, r.createElement(T.u, {
                        size: T.x.Small,
                        type: T.z.Text,
                        "data-a-target": "follower-mode-dropdown",
                        "data-test-selector": "follower-mode-duration-menu",
                        dropdown: !0
                    }, Object(k.d)(this.props.selectedFollowerModeDuration)), r.createElement(T.p, {
                        direction: T.q.TopRight
                    }, r.createElement(T.U, {
                        padding: .5
                    }, r.createElement(T._22, {
                        color: T.F.Alt2
                    }, Object(w.d)("Followers can chat if they have followed for at least", "ChatSettings"))), r.createElement(T._18, {
                        color: T.F.Link
                    }, this.renderFollowerModeOptions())))))), r.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(T.E, {
                        checked: this.props.slowModeEnabled,
                        "data-a-target": "slow-mode-checkbox",
                        "data-test-selector": "slow-mode-checkbox",
                        id: "chat-settings-slow-mode",
                        label: Object(w.d)("Slow Mode", "ChatSettings"),
                        onChange: this.props.onSlowModeToggle
                    })), r.createElement(ie, {
                        key: "recent-raids",
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: b.d,
                        targetChannelID: this.props.channelID,
                        tooltipText: this.showRaidsTooltip ? Object(w.d)("View recent raids with option to report or ban.", "RaidReportingChat") : ""
                    }), r.createElement("button", {
                        onClick: this.props.onChatClear,
                        "data-a-target": "clear-chat-button",
                        "data-test-selector": "clear-chat-button"
                    }, Object(w.d)("Clear Chat", "ChatSettings")))
                }, t.prototype.renderFollowerModeOptions = function() {
                    var e = this;
                    return k.b.map(function(t) {
                        return r.createElement(T.S, {
                            "data-duration": t,
                            key: t,
                            onClick: e.handleFollowerDurationClick,
                            selected: t === e.props.selectedFollowerModeDuration
                        }, r.createElement(T.U, {
                            padding: .5
                        }, Object(k.c)(t)))
                    })
                }, t = a.__decorate([Object(D.a)(ae, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(r.Component),
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
                        var e = t.props.darkModeEnabled ? c.a.Light : c.a.Dark;
                        t.props.onThemeChanged(e, !t.props.isPopout), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.darkModeEnabled,
                            settingName: y.a.DarkMode
                        })
                    }, t.onTimestampToggle = function() {
                        Object(_.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showTimestamps,
                            settingName: y.a.ShowTimestamps
                        })
                    }, t.onChatHide = function() {
                        t.props.onChatHide(), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !0,
                            settingName: y.a.HideChat
                        })
                    }, t.onChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("/popout/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(d.a)() && (e.focus(), Object(u.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onLegacyChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("https://www.twitch.tv/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(d.a)() && (e.focus(), Object(u.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onModIconsToggle = function() {
                        Object(_.b)("showModIcons", !t.props.showModerationIcons), t.props.showModerationIcons ? t.props.onModIconsDisable() : t.props.onModIconsEnable(), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showModerationIcons,
                            settingName: y.a.ShowModIcons
                        })
                    }, t.onFollowerModeToggle = function() {
                        if (t.props.followerModeEnabled) t.props.onChatCommand(Object(S.d)()), t.props.onFollowerModeDisable();
                        else {
                            var e = t.getSelectedFollowerDuration();
                            t.props.onChatCommand(Object(S.f)(e)), t.props.onFollowerModeDurationChange(e), t.props.onFollowerModeEnable()
                        }
                        Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.followerModeEnabled,
                            settingName: y.a.FollowerMode
                        })
                    }, t.onFollowerDurationChange = function(e) {
                        Object(_.c)(t.props.channelLogin, e), t.props.onFollowerModeDurationPreferenceChange(t.props.channelLogin, e), t.props.followerModeEnabled && (t.props.onChatCommand(Object(S.f)(e)), t.props.onFollowerModeDurationChange(e)), Object(C.c)({
                            channelLogin: t.props.channelLogin,
                            followerModeOn: t.props.followerModeEnabled,
                            isHostMode: t.props.isHostMode,
                            newValue: e
                        })
                    }, t.onSlowModeToggle = function() {
                        t.props.slowModeEnabled ? (t.props.onChatCommand(Object(S.e)()), t.props.onSlowModeDisable()) : (t.props.onChatCommand(Object(S.g)()), t.props.onSlowModeEnable()), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.slowModeEnabled,
                            settingName: y.a.SlowMode
                        })
                    }, t.onChatClear = function() {
                        t.props.onChatCommand(Object(S.c)())
                    }, t.getSelectedFollowerDuration = function() {
                        if (t.props.followerModeEnabled) return t.props.followerModeDuration;
                        var e = t.props.lastUsedFollowerDurations[t.props.channelLogin];
                        return "number" == typeof e ? e : k.a
                    }, t.onColorSelected = function(e) {
                        t.props.isLoggedIn ? t.props.onChatCommand(Object(S.b)(e)) : t.props.login()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(de, {
                        disabled: this.props.disabled,
                        onToggle: this.handleSettingsToggle
                    }, r.createElement(oe, {
                        darkModeEnabled: this.props.darkModeEnabled,
                        followerModeEnabled: this.props.followerModeEnabled,
                        editAppearance: this.state.editAppearance,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isPopout: this.props.isPopout,
                        onChatClear: this.onChatClear,
                        onChatHide: this.onChatHide,
                        onChatPopout: this.onChatPopout,
                        onDarkModeToggle: this.onDarkModeToggle,
                        onFollowerDurationChange: this.onFollowerDurationChange,
                        onFollowerModeToggle: this.onFollowerModeToggle,
                        onLegacyChatPopout: this.onLegacyChatPopout,
                        onModIconsToggle: this.onModIconsToggle,
                        onSlowModeToggle: this.onSlowModeToggle,
                        onTimestampToggle: this.onTimestampToggle,
                        selectedFollowerModeDuration: this.getSelectedFollowerDuration(),
                        showModerationIcons: this.props.showModerationIcons,
                        showTimestamps: this.props.showTimestamps,
                        slowModeEnabled: this.props.slowModeEnabled,
                        theatreModeEnabled: this.props.theatreModeEnabled,
                        onColorSelected: this.onColorSelected,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        channelID: this.props.channelID,
                        isLoggedIn: this.props.isLoggedIn,
                        onClickEditAppearance: this.onEdit,
                        onLeaveEditAppearance: this.onLeaveEdit,
                        sawFirstRaidPrompt: this.props.sawFirstRaidPrompt,
                        onShowViewerCard: this.props.onShowViewerCard
                    }))
                }, t
            }(r.Component),
            le = Object(o.a)(function(e) {
                return {
                    darkModeEnabled: Object(g.a)(e) === c.a.Dark,
                    followerModeDuration: e.chat.followerDuration,
                    followerModeEnabled: e.chat.followerMode,
                    lastUsedFollowerDurations: e.chat.lastUsedFollowerDurations,
                    showModerationIcons: e.chat.showModIcons,
                    showTimestamps: e.chat.showTimestamps,
                    slowModeEnabled: e.chat.slowMode,
                    theatreModeEnabled: e.ui.theatreModeEnabled,
                    isLoggedIn: Object(f.d)(e)
                }
            }, function(e) {
                return Object(l.bindActionCreators)({
                    onChatHide: function() {
                        return v.H()
                    },
                    onChatUnhide: function() {
                        return v.K()
                    },
                    onFollowerModeDisable: function() {
                        return v.x()
                    },
                    onFollowerModeDurationChange: function(e) {
                        return v.u(e)
                    },
                    onFollowerModeDurationPreferenceChange: function(e, t) {
                        return v.v(e, t)
                    },
                    onFollowerModeEnable: function() {
                        return v.C()
                    },
                    onModIconsDisable: function() {
                        return v.y()
                    },
                    onModIconsEnable: function() {
                        return v.D()
                    },
                    onSlowModeDisable: function() {
                        return v.z()
                    },
                    onSlowModeEnable: function() {
                        return v.E()
                    },
                    onTimestampsDisable: function() {
                        return v.B()
                    },
                    onTimestampsEnable: function() {
                        return v.G()
                    },
                    onShowViewerCard: b.d,
                    onThemeChanged: function(e) {
                        return Object(h.b)(e, void 0, !1)
                    },
                    login: function() {
                        return Object(p.f)(m.a.Chat)
                    }
                }, e)
            })(se),
            ce = Object(s.e)(le),
            de = function(e) {
                return r.createElement(x.a, {
                    onToggle: e.onToggle
                }, r.createElement(T.v, {
                    icon: T._10.Gear,
                    ariaLabel: Object(w.d)("Chat settings", "ChatInput"),
                    "data-a-target": "chat-settings",
                    disabled: !!e.disabled
                }), r.createElement(T.p, {
                    direction: T.q.Top,
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
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t).getTime();
            if (n.getTime() > a) throw new Error("The first date cannot be after the second date");
            var r = [],
                o = n;
            for (o.setHours(0, 0, 0, 0); o.getTime() <= a;) r.push(i(o)), o.setDate(o.getDate() + 1);
            return r
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
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("Ejve"),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? a.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = a.stringify(t),
                                    r = "";
                                i.length > 0 && (r = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(l, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var r = new RegExp(a, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: a,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
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
                a = t.getMonth(),
                r = new Date(0);
            return r.setFullYear(n, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var i = n("M5Oo");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                a = i(t).getTime();
            return n < a ? -1 : n > a ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var i = n("6Zhv"),
            a = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * a)
        }
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
                id: Object(r.b)(),
                errors: [],
                fileSizeBytes: 0,
                totalBytesSent: 0,
                viewable: i.private,
                videoAuthToken: "",
                status: l.queued,
                progressPercentage: 0
            }, e)
        }, t.d = function(e) {
            var t = [];
            return c.includes(e.type) || t.push(new Error(Object(a.d)("File type {filetype} is not currently supported", {
                filetype: e.type
            }, "VideoUploadModel"))), e.size > o && t.push(new Error(Object(a.d)("File too large. The maximum file size is {maxFileSizeLabel}", {
                maxFileSizeLabel: s
            }, "VideoUploadModel"))), t
        };
        var i, a = n("6sO2"),
            r = n("HM6l"),
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
            return r
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
        }, t.n = function(e) {
            var t = e.trim().match(o);
            return t ? {
                recipientLogin: t[1] || null,
                body: t[2] || null
            } : null
        }, t.o = function(e) {
            var t = e.trim().match(s);
            return t ? {
                recipientLogin: t[1] || null,
                body: t[2] || null
            } : {
                recipientLogin: null,
                body: null
            }
        }, t.l = function(e, t) {
            var n = e.match(l);
            if (!n) return {
                handled: !1
            };
            var r = i.n.store.getState().chat.commandHandlers[n[1].toLowerCase()];
            if (!r) return {
                handled: !1
            };
            var o = (n[2] || "").trim(),
                s = {
                    channelLogin: t
                };
            try {
                return {
                    handled: !0,
                    result: r(o, s)
                }
            } catch (e) {
                return a.warn("Exception thrown from chat command handler", {
                    command: n[1],
                    err: e
                }), {
                    handled: !1
                }
            }
        };
        var i = n("6sO2"),
            a = i.n.logger.withCategory("chat-commands"),
            r = "/unraid",
            o = /^\/w(?:$|\s+)(\S+)?\s*(.+)?/i,
            s = /^(\S+)?\s+(.+)?$/,
            l = /^[/.]([a-z0-9]+)(.+)?$/i
    },
    O4od: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Save = 0] = "Save", e[e.Thumbnail = 1] = "Thumbnail", e[e.Initialize = 2] = "Initialize"
        }(i || (i = {}))
    },
    O9wU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.recent_raids = 0] = "recent_raids", e[e.chat_message = 1] = "chat_message", e[e.viewer_list = 2] = "viewer_list", e[e.test = 3] = "test"
        }(i || (i = {}))
    },
    OLKT: function(e, t) {},
    OcEY: function(e, t) {
        var n = {
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
                end: 145
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\npromotion {\nid\ntype\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        };
        var i = /\scurse\/\d/
    },
    OvUa: function(e, t) {},
    PNnM: function(e, t) {},
    PPK2: function(e, t) {},
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
                    i = i || {};
                    var a;
                    return a = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), i.addSuffix ? i.comparison > 0 ? "in " + a : a + " ago" : a
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var i = n("u/4p"),
            a = 6e4,
            r = 6048e5;
        e.exports = function(e, t, n) {
            var o = i(e, n),
                s = i(t, n),
                l = o.getTime() - o.getTimezoneOffset() * a,
                c = s.getTime() - s.getTimezoneOffset() * a;
            return Math.round((l - c) / r)
        }
    },
    QFW6: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("vH/s"),
            r = "public";
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        });
        var o = function(e) {
                return {
                    channel: e.channelLogin,
                    is_host_mode: e.isHostMode,
                    is_using_web_sockets: !0,
                    room_type: r
                }
            },
            s = function(e) {
                i.m.track(a.SpadeEventType.ChatRoomJoined, o(e))
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
                            value: "setID"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "version"
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
                        directives: [],
                        selectionSet: null
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
                        directives: [],
                        selectionSet: null
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
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clickAction"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clickURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                a = i(t);
            return n.getFullYear() === a.getFullYear()
        }
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("U7vG"),
            a = (n.n(i), n("mbxv")),
            r = function(e) {
                var t = Object.keys(e.badgesToRender).map(function(t) {
                    var n = e.badgesToRender[t],
                        r = e.badgeSets.getBadge(t, n);
                    return null === r ? null : i.createElement(a.a, {
                        key: r.setID + "/" + r.version,
                        badge: r
                    })
                }).filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, t)
            }
    },
    Rv0e: function(e, t) {},
    SHOI: function(e, t, n) {
        var i = n("xA5w"),
            a = n("Jvcu");
        e.exports = function(e, t, n) {
            var r = n ? Number(n.weekStartsOn) || 0 : 0,
                o = i(e),
                s = Number(t),
                l = o.getDay();
            return a(o, ((s % 7 + 7) % 7 < r ? 7 : 0) + s - l)
        }
    },
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(i);
            var a = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + a.join("|") + "|.)", "g")
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
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i, a = n("TToO"),
            r = n("HW6M"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2"),
            c = n("hdYS"),
            d = n("DtWM"),
            u = n("+Znq"),
            m = n("7vx8"),
            p = n("czpb"),
            h = n("RH2O"),
            f = n("Aj/L"),
            g = n("N221"),
            v = n("jF7o"),
            b = n("iMOk"),
            k = n("WVx7"),
            y = n("ySfT"),
            S = n("ZJYd"),
            _ = n("/LBW"),
            C = n("Odds"),
            w = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(S.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: _.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.createElement(C.U, null, o.createElement(C.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: C._23.Center
                    }, o.createElement(C._22, {
                        type: C._27.H4,
                        bold: !0
                    }, Object(l.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), o.createElement(C.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, o.createElement(C._22, {
                        type: C._27.Span,
                        color: C.F.Alt
                    }, Object(l.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), o.createElement(C.P, {
                        margin: {
                            left: .5
                        }
                    }, o.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(l.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), o.createElement(C.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: C._23.Center
                    }, o.createElement(C.P, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C._22, {
                        type: C._27.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(l.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), o.createElement(C.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(l.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? o.createElement(C.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, o.createElement(C.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, o.createElement(C.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: C.z.Text
                    }, o.createElement(C._9, {
                        asset: C._10.Play,
                        height: 8
                    }), " ", Object(l.d)("Back", "Bits--FirstTimeUserPrompt"))), o.createElement(C.U, {
                        textAlign: C._23.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, o.createElement(C.e, {
                        type: C.i.SlideInLeft,
                        duration: C.g.Long,
                        enabled: !0
                    }, o.createElement(y.a, null)))) : this.props.animateFirstTimeUserIntro ? o.createElement(C.P, {
                        className: "bits-first-time-user-prompt"
                    }, o.createElement(C.e, {
                        type: C.i.SlideInRight,
                        duration: C.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : o.createElement(C.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(o.Component)),
            E = n("jxGs"),
            x = n("bkpq"),
            D = n("CSlQ"),
            O = n("annQ"),
            N = (n("lGVF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: _.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(_.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(v.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return o.createElement(C._18, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: C.H.Flex,
                        flexDirection: C.J.Column,
                        alignItems: C.c.Center,
                        justifyContent: C.T.Center,
                        textAlign: C._23.Center,
                        padding: {
                            y: 5
                        }
                    }, o.createElement(C.Y, {
                        delay: 0
                    }), o.createElement(C.U, {
                        padding: {
                            top: 2
                        }
                    }, o.createElement(C._22, {
                        italic: !0
                    }, Object(l.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(S.c)(e)
                        });
                        t && t.type === E.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = o.createElement(w, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var n = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = o.createElement(C._18, {
                        borderBottom: !0,
                        textAlign: C._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, o.createElement(C._22, {
                        type: C._27.Span
                    }, Object(l.d)("You have {bitsBalance}", {
                        bitsBalance: o.createElement(b.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = o.createElement(C._18, {
                        borderBottom: !0,
                        textAlign: C._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, o.createElement(C._22, {
                        type: C._27.Span
                    }, Object(l.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: o.createElement(b.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = o.createElement(k.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: _.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), o.createElement(g.b, {
                        className: "get-bits-button-content"
                    }, o.createElement(C.U, null, n, e, i))
                }, t = a.__decorate([Object(D.c)("GetBitsButtonContent"), Object(m.a)(O, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(x.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
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
            }(o.Component)),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(_.h)({
                            actionName: _.a.BuyMain,
                            location: _.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = o.createElement(N, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), o.createElement(u.a, {
                        onToggle: this.toggleBalloon
                    }, o.createElement(C.u, {
                        dropdown: !0
                    }, Object(l.d)("Get Bits", "Bits--GetBitsButton")), o.createElement(C.p, {
                        direction: C.q.BottomRight,
                        size: C.r.Large
                    }, e))
                }, t = a.__decorate([Object(D.c)("GetBitsButton")], t)
            }(o.Component),
            I = Object(h.a)(function(e) {
                return {
                    isLoggedIn: Object(f.d)(e)
                }
            })(T),
            F = n("2KeS"),
            A = n("V5M+"),
            U = n("J8WN"),
            M = n("+8VM"),
            L = n("HZww"),
            R = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return o.createElement(C.U, {
                    padding: {
                        bottom: 1
                    }
                }, o.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(l.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, o.createElement(C._18, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: C._3.Relative,
                    className: r(t)
                }, o.createElement("img", {
                    alt: Object(l.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(i || (i = {}));
        var j;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(j || (j = {}));
        var V;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(V || (V = {}));
        n("AL3x");
        var B = n("nmDn"),
            P = [{
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
            H = ["image/*"],
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = l.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            var i = function(e) {
                                    var t = "";
                                    if (e && e.name) {
                                        var n = e.name;
                                        t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
                                    }
                                    return "" === t && (t = "png"), t
                                }(n = e[0]),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: V.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), function(e, t, n) {
                                var i = new FileReader;
                                i.onloadend = function() {
                                    n && n(i.result)
                                }, i.readAsDataURL(e);
                                var a = new FileReader;
                                a.onloadend = function() {
                                    t(a.result)
                                }, a.readAsArrayBuffer(e)
                            }(n, function(e) {
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
                            statusMessage: V.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, o, s = this;
                            return a.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: V.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: V.Uploading
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, function(e, t, n, i) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var r;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, fetch(l.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + l.a.authClientID + "&api_version=" + l.a.defaultAPIVersion + "&image_type=" + n + "&format=" + i, {
                                                                method: "POST",
                                                                headers: {
                                                                    Authorization: "OAuth " + t
                                                                }
                                                            })];
                                                        case 1:
                                                            return r = a.sent(), [2, r.json()]
                                                    }
                                                })
                                            })
                                        }(this.props.userID, this.props.authToken, i.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = c.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return o = c.sent(), this.logger.error(o, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: V.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = l.j.subscribe({
                                            topic: Object(L.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    ! function(e, t) {
                                                        if (!t) throw new Error("Attempted to upload an empty file object.");
                                                        var n = decodeURI(e);
                                                        fetch(n, {
                                                            method: "PUT",
                                                            body: new Blob([t])
                                                        })
                                                    }(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: V.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                s.timeoutHandle = setTimeout(function() {
                                                    return s.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                s.setState({
                                                    statusMessage: V.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === j.Success ? V.Success : e.status === j.BadSize ? V.BadSizeError : e.status === j.NonImage ? V.NonImageError : e.status === j.WrongFormat ? V.WrongFormatError : V.UnexpectedError, s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t
                                                    }), s.state.statusMessage === V.Success ? s.setState({
                                                        profileUpdated: !0
                                                    }) : (s.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), s.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: P[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: V.TimeoutError
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = P.map(function(t, n) {
                            return o.createElement(R, {
                                key: t.id,
                                imageSrc: t.uri,
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
                        n = o.createElement(C.U, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: C._3.Relative
                        }, o.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = o.createElement(C.U, {
                        className: "profile-edit__upload-info"
                    }, o.createElement(C.U, null, o.createElement(C._9, {
                        asset: C._10.Plus,
                        type: C._11.Alt2,
                        height: 20,
                        width: 20
                    })), o.createElement(C._22, {
                        type: C._27.H3,
                        color: C.F.Alt2,
                        fontSize: C.L.Size4
                    }, Object(l.d)("Upload a Photo", "Profile Edit"))));
                    var s = null;
                    this.props.showCloser && (s = o.createElement(M.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var d = function(e) {
                                switch (e) {
                                    case V.Success:
                                        return {
                                            message: Object(l.d)("Success!", "Profile Edit"),
                                            type: C._1.Success
                                        };
                                    case V.UnexpectedError:
                                        return {
                                            message: Object(l.d)("Unexpected error, please try again.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    case V.BadSizeError:
                                        return {
                                            message: Object(l.d)("Image might exceed 10MB.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    case V.NonImageError:
                                        return {
                                            message: Object(l.d)("You must upload an image.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    case V.WrongFormatError:
                                        return {
                                            message: Object(l.d)("You must select a valid image type.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    case V.TimeoutError:
                                        return {
                                            message: Object(l.d)("Upload timed-out. Please try again.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    case V.Uploading:
                                        return {
                                            message: Object(l.d)("Uploading....", "Profile Edit"),
                                            type: C._1.Brand
                                        };
                                    case V.ImageNotSelected:
                                        return {
                                            message: Object(l.d)("Select a image first.", "Profile Edit"),
                                            type: C._1.Alert
                                        };
                                    default:
                                        return {
                                            message: Object(l.d)("Please try again.", "Profile Edit"),
                                            type: C._1.Alert
                                        }
                                }
                            }(this.state.statusMessage),
                            u = d.message,
                            m = d.type;
                        c = o.createElement(C._0, {
                            label: u,
                            type: m
                        })
                    }
                    var p = this.props.login;
                    return this.props.displayName && (p = this.props.displayName), o.createElement(C.U, {
                        className: "profile-edit",
                        position: C._3.Relative,
                        fullHeight: !0
                    }, o.createElement(C._18, {
                        className: "profile-edit__background-container",
                        background: C.m.Base,
                        fullWidth: !0
                    }, o.createElement(C.U, {
                        padding: 2,
                        display: C.H.InlineBlock,
                        position: C._3.Relative,
                        textAlign: C._23.Center,
                        fullWidth: !0
                    }, o.createElement(C._18, {
                        borderBottom: !0,
                        padding: {
                            bottom: 2
                        },
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(C._22, {
                        type: C._27.H3,
                        fontSize: C.L.Size4
                    }, Object(l.d)("Editing profile picture for {userName}", {
                        userName: p
                    }, "Profile Edit"), " ")), o.createElement(C.U, {
                        className: "profile-edit__upload-container",
                        display: C.H.InlineBlock,
                        position: C._3.Relative,
                        textAlign: C._23.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C.U, {
                        className: "profile-edit__upload",
                        display: C.H.InlineBlock,
                        position: C._3.Relative,
                        textAlign: C._23.Center
                    }, o.createElement(U.a, {
                        allowedFileTypes: H,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), o.createElement(C._18, {
                        "data-test-selector": "status-message",
                        fontSize: C.L.Size4,
                        position: C._3.Relative,
                        textAlign: C._23.Center,
                        className: "profile-edit__status-message"
                    }, c), o.createElement(C._18, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(C.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(C._22, {
                        type: C._27.H3,
                        fontSize: C.L.Size5
                    }, Object(l.d)("Or select one of these", "Profile Edit"))), o.createElement(C._33, {
                        childWidth: C._34.ExtraSmall,
                        gutterSize: C._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), o.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Center
                    }, o.createElement(C.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(l.d)("Update", "Profile Edit"))))), s)
                }, t.prototype.setDefaultAvatar = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: V.Uploading
                                    }), e = V.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                        if (void 0 === n) throw new Error("No default avatar selected.");
                                        return fetch(l.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + l.a.authClientID + "&api_version=" + l.a.defaultAPIVersion, {
                                            method: "PUT",
                                            headers: {
                                                Authorization: "OAuth " + t,
                                                "Content-Type": "application/json",
                                                Accept: "application/json"
                                            },
                                            body: JSON.stringify({
                                                default_profile_image: P[n].id
                                            })
                                        })
                                    }(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = V.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === V.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(m.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(o.Component),
            z = Object(D.c)("Profile Edit")(W),
            q = Object(h.a)(function(e) {
                return {
                    authToken: Object(f.a)(e)
                }
            }, function(e, t) {
                return Object(F.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(A.c)()
                    }
                }, e)
            })(z),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(q, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(C.v, {
                        overlay: !0,
                        size: C.x.Large,
                        ariaLabel: Object(l.d)("Edit Profile", "ChannelHeader"),
                        icon: C._10.Edit,
                        onClick: this.openModal
                    })
                }, t = a.__decorate([Object(D.c)("EditProfileOverlay")], t)
            }(o.Component),
            Y = Object(h.a)(null, function(e) {
                return Object(F.bindActionCreators)({
                    showModal: A.d
                }, e)
            })(G),
            Q = n("70dR"),
            K = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return J
        }), n.d(t, "a", function() {
            return X
        });
        var J, Z = "channel-header__verified-badge",
            $ = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(J || (J = {}));
        var X = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1
                }, t.verifiedBadgeElement = o.createElement(C._30, {
                    label: Object(l.d)("Verified", "ChannelHeader"),
                    direction: C._32.Right
                }, o.createElement(C.U, {
                    className: "channel-header__verified",
                    "data-target": Z,
                    display: C.H.Flex,
                    alignItems: C.c.Center,
                    margin: {
                        left: 1
                    }
                }, o.createElement(C._9, {
                    asset: C._10.Verified
                }))), t.liveIndicatorElement = o.createElement(C.U, {
                    margin: {
                        left: 1
                    },
                    "data-target": $
                }, o.createElement(C._30, {
                    label: Object(l.d)("Live Now", "ChannelHeader"),
                    direction: C._32.Right
                }, o.createElement(C.W, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? o.createElement(C._18, {
                        className: "channel-header__edit-profile-overlay",
                        background: C.m.Overlay,
                        position: C._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: C.H.InlineFlex,
                        alignItems: C.c.Center,
                        justifyContent: C.T.Center
                    }, o.createElement(Y, {
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
                    i = 0,
                    a = 0,
                    m = l.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && J[this.props.currentPage] !== J[J.Channel],
                    h = this.createChannelLinks(n, i, a),
                    f = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": J[this.props.currentPage] === J[J.Channel]
                    },
                    g = null;
                this.canRenderBitsButton() && (g = o.createElement(C.U, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(I, {
                    channelLogin: this.props.channelLogin
                })));
                var v, b = o.createElement(C.U, {
                    display: C.H.Flex,
                    flexWrap: C.K.NoWrap,
                    alignItems: C.c.Center,
                    flexShrink: 0
                }, o.createElement(C.U, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: C.H.Flex,
                    flexShrink: 0,
                    alignItems: C.c.Stretch
                }, o.createElement(C.U, {
                    position: C._3.Relative
                }, o.createElement(C.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? o.createElement(C._22, {
                    type: C._27.H5
                }, e) : o.createElement(C.U, {
                    alignItems: C.c.Center
                }, o.createElement(C._2, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                return v = this.props.data && this.props.data.user && this.props.data.user.login ? o.createElement(s.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, b) : b, o.createElement(C.U, {
                    className: "channel-header",
                    flexShrink: 0,
                    padding: {
                        x: 3
                    }
                }, o.createElement(C.U, {
                    display: C.H.Flex,
                    justifyContent: C.T.Between,
                    flexWrap: C.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef
                }, o.createElement(C.U, {
                    display: C.H.Flex,
                    alignItems: C.c.Stretch,
                    flexShrink: 0,
                    flexWrap: C.K.NoWrap,
                    "data-target": "channel-header-left"
                }, o.createElement(C.P, {
                    className: r(f),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: C.H.Flex,
                    flexWrap: C.K.NoWrap,
                    alignItems: C.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(h), o.createElement(C.U, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: C.d.Center,
                    "data-target": "channel-header-button"
                }, o.createElement(u.a, {
                    alwaysMountBalloonContent: !0
                }, o.createElement(C.v, {
                    icon: C._10.NavMore,
                    ariaLabel: Object(l.d)("More", "ChannelHeader")
                }), o.createElement(C.p, {
                    direction: C.q.Bottom,
                    noTail: !0
                }, o.createElement(C.U, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), o.createElement(C.U, {
                    display: C.H.Flex,
                    flexWrap: C.K.NoWrap,
                    flexShrink: 0,
                    alignItems: C.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, o.createElement(C.U, {
                    className: "channel-header__follow-button",
                    display: C.H.Flex,
                    alignItems: C.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, o.createElement(c.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), o.createElement(C.U, {
                    margin: {
                        left: 1
                    }
                }, o.createElement(Q.b, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), g)), o.createElement(d.a, {
                    onResize: this.onUpdateDebounce
                }))
            }, t.prototype.updateLiveState = function(e) {
                !e.data || e.data.loading || e.data.error || this.setState({
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
                    var n = e.count ? o.createElement(C.U, {
                            className: "channel-header__item-count",
                            display: C.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(C._22, {
                            type: C._27.Span,
                            fontSize: C.L.Size5
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.target = Object(p.b)() ? "_blank" : ""), o.createElement(C.P, {
                        key: "channel-header__item--" + e.label,
                        alignItems: C.c.Center,
                        flexShrink: 0
                    }, o.createElement(s.a, a.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, r, {
                        to: i,
                        disabled: "#" === i,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), o.createElement(C.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: C.H.Flex
                    }, o.createElement(C._22, {
                        type: C._27.Span,
                        fontSize: C.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? o.createElement(C.U, {
                            className: "channel-header__item-count",
                            display: C.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, o.createElement(C._22, {
                            type: C._27.Span
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), o.createElement(C.U, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, o.createElement(C.S, a.__assign({
                        linkTo: i,
                        disabled: "#" === i
                    }, r), o.createElement(C.U, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: C.H.Flex
                    }, o.createElement(C._22, {
                        type: C._27.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(l.d)("Videos", "ChannelHeader"),
                    count: Object(l.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Videos]
                }, {
                    label: Object(l.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Clips]
                }, {
                    label: Object(l.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Collections]
                }, {
                    label: Object(l.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: J[this.props.currentPage] === J[J.Events]
                }, {
                    label: Object(l.d)("Followers", "ChannelHeader"),
                    count: Object(l.e)(t),
                    pathSuffix: "followers",
                    isExternal: !0,
                    isSelected: J[this.props.currentPage] === J[J.Followers]
                }, {
                    label: Object(l.d)("Following", "ChannelHeader"),
                    count: Object(l.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: J[this.props.currentPage] === J[J.Following]
                }]
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
                                        l.classList.remove("channel-header__item--hide");
                                        if ((s = this.getWidth(l)).width >= Math.abs(r)) {
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== J.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(m.a)(K, {
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
            }), Object(D.c)("ChannelHeader")], t)
        }(o.Component)
    },
    TnID: function(e, t) {},
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
                a = Number(t);
            return n.setSeconds(a), n
        }
    },
    Tv4R: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, r = i(e).getTime();
            return t.forEach(function(e) {
                var t = i(e),
                    o = Math.abs(r - t.getTime());
                (void 0 === n || o < a) && (n = t, a = o)
            }), n
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
            a = n("6sO2"),
            r = n("vH/s"),
            o = n("TnJK"),
            s = n("QFW6"),
            l = function(e) {
                a.m.track(r.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
            },
            c = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: e.settingName,
                    new_value: e.newValue.toString()
                });
                a.m.track(r.SpadeEventType.ChatSettingsChanged, t)
            },
            d = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: o.a.FollowerDuration,
                    new_value: e.newValue.toString(),
                    follower_mode_on: e.followerModeOn
                });
                a.m.track(r.SpadeEventType.ChatSettingsChanged, t)
            }
    },
    Utj3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("Etzl"),
            a = function() {
                function e(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = {
                        splitValues: !1
                    });
                    var n = this;
                    if (this.headersMap = {}, e)
                        if ("undefined" != typeof Headers && e instanceof Headers) {
                            i.getHeaderKeys(e).forEach(function(a) {
                                i.getHeaderValues(e, a).forEach(function(e) {
                                    t.splitValues ? n.append(a, i.splitHeaderValue(e)) : n.append(a, e)
                                })
                            })
                        } else if (function(e) {
                            return "object" == typeof e && "object" == typeof e.headersMap && "function" == typeof e.forEach
                        }(e)) e.forEach(function(e, t) {
                        n.append(e, t)
                    });
                    else if ("undefined" != typeof Map && e instanceof Map) {
                        e.forEach(function(e, t) {
                            n.append(t, e)
                        })
                    } else "string" == typeof e ? this.appendFromString(e) : "object" == typeof e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        var i = e[t];
                        Array.isArray(i) ? i.forEach(function(e) {
                            n.append(t, e)
                        }) : n.append(t, i)
                    })
                }
                return e.prototype.appendFromString = function(e) {
                    for (var t = e.split("\r\n"), n = 0; n < t.length; n++) {
                        var i = t[n],
                            a = i.indexOf(": ");
                        if (a > 0) {
                            var r = i.substring(0, a),
                                o = i.substring(a + 2);
                            this.append(r, o)
                        }
                    }
                }, e.prototype.delete = function(e, t) {
                    var n = i.normalizeName(e);
                    if (void 0 === t) delete this.headersMap[n];
                    else {
                        var a = this.headersMap[n];
                        if (a) {
                            var r = a.indexOf(t);
                            r >= 0 && a.splice(r, 1), 0 === a.length && delete this.headersMap[n]
                        }
                    }
                }, e.prototype.append = function(e, t) {
                    var n = this,
                        a = i.normalizeName(e);
                    Array.isArray(this.headersMap[a]) || (this.headersMap[a] = []), Array.isArray(t) ? t.forEach(function(e) {
                        n.headersMap[a].push(i.normalizeValue(e))
                    }) : this.headersMap[a].push(i.normalizeValue(t))
                }, e.prototype.set = function(e, t) {
                    var n = i.normalizeName(e);
                    if (Array.isArray(t)) {
                        var a = [];
                        t.forEach(function(e) {
                            a.push(i.normalizeValue(e))
                        }), this.headersMap[n] = a
                    } else this.headersMap[n] = [i.normalizeValue(t)]
                }, e.prototype.has = function(e, t) {
                    var n = this.headersMap[i.normalizeName(e)];
                    if (!Array.isArray(n)) return !1;
                    if (void 0 !== t) {
                        var a = i.normalizeValue(t);
                        return n.indexOf(a) >= 0
                    }
                    return !0
                }, e.prototype.get = function(e) {
                    var t = this.headersMap[i.normalizeName(e)];
                    return void 0 !== t ? t.concat() : []
                }, e.prototype.forEach = function(e) {
                    var t = this;
                    Object.getOwnPropertyNames(this.headersMap).forEach(function(n) {
                        e(n, t.headersMap[n])
                    }, this)
                }, e.prototype.toHeaders = function() {
                    if ("undefined" != typeof Headers) {
                        var e = new Headers;
                        return this.forEach(function(t, n) {
                            n.forEach(function(n) {
                                e.append(t, n)
                            })
                        }), e
                    }
                    throw new Error("Headers class is not defined")
                }, e
            }();
        t.BrowserHeaders = a
    },
    "Uu+E": function(e, t, n) {
        var i = n("xA5w"),
            a = n("iRXW"),
            r = n("nizW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = r(n, a(n)),
                l = new Date(0);
            return l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0), (n = a(l)).setDate(n.getDate() + s), n
        }
    },
    UzRK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
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
                    return i.i.warn("[FollowersOnlyLabel] Tried to generate a label for a non-preset.", e), ""
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
            a = 30,
            r = [0, 10, 30, 60, 1440, 10080, 43200, 129600]
    },
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
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
    VsL1: function(e, t, n) {
        "use strict";

        function i() {
            var e = r.k.get(s, {});
            return a.__assign({
                lastUsedFollowerDurations: {},
                showAutoModActions: !0,
                showMessageFlags: !0,
                showModerationActions: !0,
                showModIcons: !1,
                showTimestamps: !1,
                zachModeStatus: o
            }, e)
        }
        var a = n("TToO"),
            r = n("6sO2"),
            o = "control";
        t.a = i, t.b = function(e, t) {
            var n = i();
            n[e] = t, r.k.set(s, n)
        }, t.c = function(e, t) {
            var n = i();
            n.lastUsedFollowerDurations[e] = t, r.k.set(s, n)
        };
        var s = "chatSettings"
    },
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
                    },
                    defaultValue: null
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
                                    value: "broadcastType"
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
                                    value: "game"
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
                                            value: "name"
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
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return u.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = h.b.get("bits_truex_partner_hash", ""), !(n = h.b.get("bits_truex_api_url", "")) || !t) return h.i.warn("Truex API info missing from dynamic settings"), [2, b.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = o.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = o.sent()) && Array.isArray(a) && a.length) return [2, b.Available];
                            o.label = 4;
                        case 4:
                            return [2, b.Unavailable];
                        case 5:
                            return r = o.sent(), h.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, b.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function a(e) {
            return {
                adModalOpen: Object(c.b)(e, w),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(l.d)(w, t))
                }
            }
        }
        var o, s = n("RH2O"),
            l = n("V5M+"),
            c = n("Iw4B"),
            d = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            h = n("6sO2"),
            f = n("+8VM"),
            g = n("7vx8"),
            v = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var b, k = n("4JjK"),
            y = n("/LBW"),
            S = n("Odds"),
            _ = n("zzpv"),
            C = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, r;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
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
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.g)({
                                                campaignID: i.campaign_id.toString(),
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
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(v.a)({
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
                                        return a = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = s.sent(), h.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(o.Unknown), [3, 8];
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
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(S._18, {
                        background: S.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(f.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(g.a)(_, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            w = Object(s.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: l.c
                }, e)
            })(C),
            E = n("HW6M"),
            x = n("jF7o"),
            D = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(b || (b = {}));
        var O, N = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(h.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(S._18, {
                    className: "bits-buy-card__offer-row",
                    display: S.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: S.T.Between,
                    flexWrap: S.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(S.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(h.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(S.U, {
                    flexShrink: 0,
                    display: S.H.Flex,
                    flexDirection: S.J.Column,
                    alignItems: S.c.End
                }, m.createElement(S.u, {
                    type: S.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(h.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(S.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: S.d.Stretch,
                    textAlign: S._23.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            T = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(y.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === b.Available
                                    }), e !== b.Available && e !== b.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return T.test(navigator.userAgent) ? null : m.createElement(N, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            F = n("jxGs"),
            A = n("3iBR"),
            U = n("iydZ"),
            M = n("ZJYd"),
            L = n("CFVp"),
            R = n("qe65"),
            j = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(M.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        i && (t.props.onBuyPopupClose(i), t.props.onClose())
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === F.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(I, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(M.c)(this.props.offer) ? t = m.createElement(S.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(S._22, {
                        type: S._27.Strong,
                        fontSize: S.L.Size6
                    }, Object(h.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(M.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === F.c && (t = m.createElement(S.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(S._22, {
                        type: S._27.Strong,
                        fontSize: S.L.Size6
                    }, Object(h.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(M.c)(this.props.offer) || Object(M.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? S._18 : S.U;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: S.H.Flex,
                        justifyContent: S.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: S.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(S.U, {
                        display: S.H.Flex,
                        justifyContent: S.T.Between,
                        alignItems: S.c.Center
                    }, m.createElement(S.U, {
                        flexGrow: 1
                    }, m.createElement(S._22, {
                        type: S._27.H5,
                        color: S.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(S.U, {
                        flexShrink: 0,
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.End
                    }, m.createElement(S.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(S.U, {
                        alignSelf: S.d.Stretch,
                        textAlign: S._23.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[A.f];
                    t || (t = Object(L.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(S.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(R.a, {
                            key: e.bits,
                            sources: Object(U.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            V = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var o = m.createElement(j, {
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
                        s = Object(M.d)(a),
                        l = Object(M.c)(a),
                        c = a.type === F.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? i = o : c || s || n.push(o)
                }), e.fullsize ? m.createElement(S.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: S.K.NoWrap,
                    display: S.H.Flex,
                    flexDirection: S.J.Column
                }, i, t, n) : m.createElement(D.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(S.U, {
                    flexGrow: 1,
                    flexWrap: S.K.NoWrap,
                    display: S.H.Flex,
                    flexDirection: S.J.Column
                }, i, t, n))
            }),
            B = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(S._22, {
                    italic: !0,
                    type: S._27.P,
                    color: S.F.Alt
                }, Object(h.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(S._22, {
                    color: S.F.Alt
                }, Object(h.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(S._22, {
                    color: S.F.Alt
                }, Object(h.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(S._18, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(S.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(S._22, {
                    type: S._27.H4,
                    color: S.F.Alt
                }, Object(h.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            P = n("nrdj"),
            H = function(e) {
                return m.createElement(S.U, {
                    display: S.H.Flex,
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    fullWidth: !0,
                    flexWrap: S.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(P.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(S.U, {
                    display: S.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    flexWrap: S.K.NoWrap
                }, m.createElement(S._22, {
                    type: S._27.H4,
                    bold: !0
                }, Object(h.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(S.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(S._22, {
                    color: S.F.Alt2
                }, Object(h.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(h.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(S.U, {
                    display: S.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Between
                }, m.createElement(S.u, {
                    onClick: e.onStartCheering
                }, Object(h.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(S.u, {
                    type: S.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(h.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        return u.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== b.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(H, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            z = (n("q8Cw"), function(e) {
                var t = Object(h.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(h.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        i = "adserroradblock", n = Object(h.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        i = "adserrorlimit", t = Object(h.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(h.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        n = Object(h.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(S.U, {
                    className: "watch-ad-error__footer",
                    display: S.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Center
                }, m.createElement(S.u, {
                    onClick: e.onTryAgain
                }, Object(h.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (a = m.createElement(S.U, {
                    className: "watch-ad-error__footer",
                    display: S.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: S.d.Stretch,
                    justifyContent: S.T.Between
                }, m.createElement(S.u, {
                    onClick: e.onClose
                }, Object(h.d)("Got It", "Bits--WatchAdError")), m.createElement(S.u, {
                    onClick: e.onTryAgain,
                    type: S.z.Hollow
                }, Object(h.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(S.U, {
                    padding: {
                        x: 1
                    },
                    display: S.H.Flex,
                    flexGrow: 1,
                    flexDirection: S.J.Column,
                    alignItems: S.c.Center,
                    fullWidth: !0,
                    flexWrap: S.K.NoWrap
                }, m.createElement(S.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: A.b + "/light/static/1/" + i + ".png"
                })), m.createElement(S.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(S._22, {
                    type: S._27.H4,
                    bold: !0
                }, t)), m.createElement(S._22, {
                    color: S.F.Alt2
                }, n), a)
            }),
            q = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(O || (O = {}));
        var G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: O.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(x.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: O.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
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
                            wateb: O.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === O.Error && (t.setState({
                            wateb: O.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: S.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = E({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === y.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === y.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(S._9, {
                            asset: S._10.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(S._18, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        textAlign: S._23.Center
                    }, e), m.createElement(S.Y, {
                        delay: 0
                    }), m.createElement(S.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(S._22, {
                        italic: !0
                    }, Object(h.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(S.U, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        padding: 2,
                        textAlign: S._23.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(S._22, {
                        italic: !0
                    }, Object(h.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(S._18, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.T.Center,
                        textAlign: S._23.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === F.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(V, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: o,
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
                    return this.props.location === y.b.ChatTooltip && (l = m.createElement(B, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(S._18, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case O.Awarded:
                            return m.createElement(W, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case O.Error:
                            return m.createElement(z, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(g.a)(q, {
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
            Y = Object(s.a)(a, r)(G);
        n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return Y
        })
    },
    WzS7: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("vH/s"),
            l = n("CSlQ"),
            c = n("GJxf"),
            d = n("dc2a"),
            u = n("Odds"),
            m = n("+DHI"),
            p = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && !this.props.data.loading && !this.props.data.user) return null;
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user) {
                        var n = this.props.data.user.collections.edges;
                        if (0 === n.length) return null;
                        if (e = n[0].node, 0 === (t = Object(d.a)(e.videos)).length) return null
                    }
                    return a.createElement(u.U, {
                        padding: {
                            top: 3
                        }
                    }, this.renderCarouselHeader(), a.createElement(c.a, {
                        videos: t,
                        collectionID: e ? e.id : void 0,
                        tracking: {
                            content: s.PageviewContent.LatestCollection,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_channel: this.props.userLogin,
                                source_item_type: s.TwitchDataType.Channel
                            }
                        }
                    }))
                }, t.prototype.renderCarouselHeader = function() {
                    if (this.props.data && this.props.data.loading) return a.createElement(u._2, {
                        width: 250,
                        lineCount: 1
                    });
                    var e = this.props.data.user.collections.edges[0].node,
                        t = Object(r.d)("By {displayName}", {
                            displayName: this.props.data.user.displayName
                        }, "LatestCollectionCarousel"),
                        n = Object(r.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                            videoCountText: e.videos.totalCount
                        }, "LatestCollectionCarousel");
                    return a.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Baseline
                    }, a.createElement(u.U, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, a.createElement(u._22, {
                        type: u._27.H4,
                        "data-test-selector": "collection-title"
                    }, e.title || Object(r.d)("Latest Collection", "LatestCollectionCarousel"))), a.createElement(u.U, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, a.createElement(u._22, {
                        color: u.F.Alt2,
                        type: u._27.Span,
                        "data-test-selector": "collection-metadata"
                    }, t, " · ", n)), a.createElement(u.u, {
                        type: u.z.Hollow,
                        size: u.x.Small,
                        icon: u._10.Play,
                        linkTo: "/collections/" + e.id,
                        "data-test-selector": "play-all-button"
                    }, Object(r.d)("Play all", "LatestCollectionCarousel")))
                }, t = i.__decorate([Object(o.a)(m), Object(l.c)("LatestCollectionCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component),
            h = n("IwGL"),
            f = n("RH2O"),
            g = n("pXt7"),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.noGameSpecified) return null;
                    var e = this.props.data && !this.props.data.loading && this.props.data.game && Object(d.a)(this.props.data.game.videos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? a.createElement(u.U, null, a.createElement(u._22, {
                        type: u._27.H4,
                        transform: u._26.Uppercase,
                        color: u.F.Alt2
                    }, this.props.gameName ? Object(r.d)("Popular videos from {game}", {
                        game: this.props.gameName
                    }, "PopularVideosByGameCarousel") : a.createElement(u._2, {
                        width: 200
                    })), a.createElement(c.a, {
                        tracking: {
                            content: s.PageviewContent.PopularVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_item_type: s.TwitchDataType.Game,
                                source_game: this.props.gameName || void 0
                            }
                        },
                        videos: e
                    })) : null
                }, t = i.__decorate([Object(l.c)("PopularVideosByGameCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(g, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.gameName
                    }
                })], t)
            }(a.Component),
            b = Object(f.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(v),
            k = n("tKvs"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return !this.props.data || this.props.data.loading || this.props.data.videos ? this.props.data && this.props.data.videos && 0 === (e = Object(d.a)(this.props.data.videos)).length ? null : a.createElement(u.U, null, a.createElement(u._22, {
                        type: u._27.H4,
                        transform: u._26.Uppercase,
                        color: u.F.Alt2
                    }, Object(r.d)("Popular Videos On Twitch", "PopularVideosCarousel")), a.createElement(c.a, {
                        tracking: {
                            content: s.PageviewContent.PopularOverallVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {}
                        },
                        videos: e
                    })) : null
                }, t = i.__decorate([Object(l.c)("PopularVideosCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(k)], t)
            }(a.Component),
            S = n("f5HX"),
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && (this.props.data.error || !this.props.data.user)) return null;
                    var e = !this.props.data || this.props.data.loading ? null : Object(d.a)(this.props.data.user.videos);
                    return e && 0 === e.length ? null : a.createElement(u.U, null, a.createElement(u._22, {
                        type: u._27.H4,
                        transform: u._26.Uppercase,
                        color: u.F.Alt2
                    }, this.props.displayName ? Object(r.d)("Recent videos from {displayName}", {
                        displayName: this.props.displayName
                    }, "RecentVideosFromUserCarousel") : a.createElement(u._2, {
                        width: 200
                    })), a.createElement(c.a, {
                        videos: e,
                        tracking: {
                            content: s.PageviewContent.RecentVideos,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {
                                source_item_type: s.TwitchDataType.Channel,
                                source_channel: this.props.data ? this.props.data.user.login : ""
                            }
                        }
                    }))
                }, t = i.__decorate([Object(l.c)("RecentVideosFromUserCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(S, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.userID
                    }
                })], t)
            }(a.Component),
            C = Object(f.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(_),
            w = n("Aj/L"),
            E = n("pwi9"),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && Object(d.a)(this.props.data.currentUser.recommendations.videos) || null;
                    if (this.props.data && !this.props.data.loading && (!e || 0 === e.length)) return null;
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return a.createElement(u.U, null, a.createElement(u._22, {
                        type: u._27.H4,
                        transform: u._26.Uppercase,
                        color: u.F.Alt2
                    }, Object(r.d)("Based On Your Viewing History", "RecommendedVideoCarousel")), a.createElement(c.a, {
                        tracking: {
                            content: s.PageviewContent.RecommendedVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {
                                source_item_type: s.TwitchDataType.User,
                                source_channel: t
                            }
                        },
                        videos: e
                    }))
                }, t = i.__decorate([Object(l.c)("RecommendedVideoCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(E, {
                    skip: function(e) {
                        return !e.isLoggedIn || !e.firstPageLoaded
                    }
                })], t)
            }(a.Component),
            D = Object(f.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(w.d)(e)
                }
            })(x);
        n.d(t, "a", function() {
            return p
        }), n.d(t, !1, function() {
            return h.LatestVideosFromFollowedCarousel
        }), n.d(t, "b", function() {
            return b
        }), n.d(t, "c", function() {
            return y
        }), n.d(t, "d", function() {
            return C
        }), n.d(t, "e", function() {
            return D
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
            return r
        });
        var i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._2, null)), i.createElement(a.B, null, i.createElement(a.U, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._2, {
                    width: 40,
                    height: 56
                })), i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._22, null, i.createElement(a._2, {
                    width: 150
                })), i.createElement(a._22, {
                    fontSize: a.L.Size7
                }, i.createElement(a._2, {
                    width: 100
                }))))))
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
            a = n("Jvcu"),
            r = n("AZvW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = r(n);
            return a(n, o - s)
        }
    },
    YRFD: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                a = i(t).getTime();
            return n > a ? -1 : n < a ? 1 : 0
        }
    },
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
    ZJYd: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type === o.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== o.a && i(e) && null !== e.promotion && e.promotion.type === o.d
        }, t.e = function(e) {
            return e.type !== o.a && i(e) && null !== e.promotion && e.promotion.type === o.e
        }, t.d = i, t.a = function(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }, t.f = function(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var o = {
                    cheerAboveMaxBitsPerEmote: i > s.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > s.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(o).some(function(e) {
                        return o[e]
                    })) return a.__assign({
                    canSpend: !1
                }, o)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(l.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(l.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var a = n("TToO"),
            r = n("Ouuk"),
            o = n("jxGs"),
            s = n("3iBR"),
            l = n("/LBW")
    },
    ZUMa: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 0 === i(e).getDay()
        }
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    a7Cs: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t);
            return n.setFullYear(a), n
        }
    },
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("U7vG")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            c = n("SZoP"),
            d = n("mi6k"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            h = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.onClickHandler = function() {
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
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(m.U, {
                        position: m._3.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._6, {
                        size: m._7.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._39)(this.props)), o.createElement(m.A, null, o.createElement(m.U, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._18, {
                        display: m.H.InlineFlex,
                        position: m._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._38.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._17, {
                        "data-test-selector": "video-view-count",
                        icon: m._10.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(m._18, {
                        display: m.H.InlineFlex,
                        position: m._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._38.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._17, {
                        "data-test-selector": "video-length",
                        icon: m._10.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(d.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Row,
                        flexWrap: m.K.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(m.j, {
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
                    }, o.createElement(m.P, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(m.j, {
                        ratio: m.k.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(m.U, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.P, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._30, {
                        display: m.H.Block,
                        direction: m._32.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || l.a.defaultBoxArtURL
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
                            title: Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m.U, {
                        "data-test-selector": "video-title",
                        overflow: m.Z.Hidden,
                        position: m._3.Relative
                    }, o.createElement(m._22, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.V.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.U, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._22, {
                        type: m._27.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.P, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component)),
            f = Object(u.c)("VideoPreviewCard")(h)
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
    annQ: function(e, t, n) {
        function i(e) {
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
                end: 748
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("OcEY").definitions)), a.definitions = a.definitions.concat(i(n("576g").definitions)), e.exports = a
    },
    aqNN: function(e, t, n) {
        var i = {
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
                end: 440
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = i
    },
    ass3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.c = function() {
            return {
                type: i
            }
        }, t.d = function(e, t, n) {
            return {
                type: a,
                viewerCardOptions: {
                    targetLogin: e,
                    sourceType: t,
                    sourceID: n
                }
            }
        };
        var i = "viewer-card.VIEWER_CARD_HIDDEN",
            a = "viewer-card.VIEWER_CARD_SHOWN"
    },
    b7g8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    baDC: function(e, t, n) {
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
                                    value: "chatColor"
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("QU+n").definitions)), e.exports = i
    },
    balU: function(e, t, n) {
        var i = n("xA5w"),
            a = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                l = new Date(0);
            l.setFullYear(o, r, 15), l.setHours(0, 0, 0, 0);
            var c = a(l);
            return n.setMonth(r, Math.min(s, c)), n
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
    bkpq: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map,
                n = new Map,
                i = new Map,
                r = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
            }), a.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: i,
                        animated: r
                    }
                }
            }, e)
        }
        t.a = function(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var s = e.tiers.map(function(e) {
                    return i(e)
                });
                "Cheer" === e.prefix && s.push(function() {
                    var e = ["DARK", "LIGHT"],
                        t = ["static", "animated"],
                        n = [];
                    return [1, 1.5, 2, 3, 4].forEach(function(i) {
                        e.forEach(function(e) {
                            t.forEach(function(t) {
                                n.push({
                                    url: o.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: i
                                })
                            })
                        })
                    }), i({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: o.e[r.a.Yellow],
                        images: n
                    })
                }()), s.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var l = a.__assign({}, e, {
                    indexedTiers: new Map(s.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: s
                });
                t.push(l), n[l.prefix.toLowerCase()] = l
            }), {
                indexedActions: n,
                orderedActions: t
            }
        };
        var a = n("TToO"),
            r = n("I89S"),
            o = n("3iBR")
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

        function i(e, t) {
            return {
                id: e.id,
                owner: t.owner || null,
                broadcastType: t.broadcastType,
                game: t.game
            }
        }
        n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "b", function() {
            return m
        });
        var a, r = n("TToO"),
            o = n("6sO2"),
            s = n("vH/s"),
            l = n("xrVp"),
            c = n("164Z"),
            d = (n.n(c), this);
        ! function(e) {
            e.Video = "video", e.Collection = "collection"
        }(a || (a = {}));
        var u = function(e, t, n) {
                return r.__awaiter(d, void 0, void 0, function() {
                    var a, d, m, p;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) return [2];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return a = r.sent().data, d = i(e, a.video), m = {
                                    channel: d.owner ? d.owner.login : null,
                                    channel_id: d.owner ? Number(d.owner.id) : null,
                                    game: d.game ? d.game.name : null,
                                    partner: !!d.owner && d.owner.roles.isPartner,
                                    location: s.PageviewLocation.VideoWatchPage,
                                    share_context: t.collectionID ? s.ShareItemContext.Collection : null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: d.id,
                                    shared_item_type: Object(l.a)(d.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: d.id,
                                    source_item_type: Object(l.a)(d.broadcastType)
                                }, o.n.tracking.track(s.SpadeEventType.ShareItem, m), [3, 4];
                            case 3:
                                return p = r.sent(), o.i.error(p.toString(), u.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            m = function(e, t, n) {
                return r.__awaiter(d, void 0, void 0, function() {
                    var a, d, u, p;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e || !t.collectionID) return [2];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return a = r.sent().data, d = i(e, a.video), u = {
                                    channel: d.owner ? d.owner.login : null,
                                    channel_id: d.owner ? Number(d.owner.id) : null,
                                    game: null,
                                    partner: !!d.owner && d.owner.roles.isPartner,
                                    location: s.PageviewLocation.VideoWatchPage,
                                    share_context: null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: t.collectionID,
                                    shared_item_type: s.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: d.id,
                                    source_item_type: Object(l.a)(d.broadcastType)
                                }, o.n.tracking.track(s.SpadeEventType.ShareItem, u), [3, 4];
                            case 3:
                                return p = r.sent(), o.i.error(p.toString(), m.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
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
            a = n("U7vG"),
            r = n("F8kA"),
            o = n("Odds"),
            s = function(e) {
                return a.createElement(o.U, {
                    margin: {
                        right: 1
                    },
                    display: o.H.Flex,
                    alignItems: o.c.Center
                }, a.createElement(o._30, {
                    align: o._31.Left,
                    label: e.tooltip,
                    direction: o._32.Bottom
                }, a.createElement(o.U, {
                    margin: {
                        right: .5
                    }
                }, a.createElement(o._18, {
                    display: o.H.Flex,
                    alignItems: o.c.Center,
                    color: o.F.Alt2
                }, a.createElement(o._9, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), a.createElement(o._22, {
                    fontSize: o.L.Size5,
                    ellipsis: !0
                }, a.createElement(r.a, i.__assign({
                    to: e.linkTo
                }, Object(o._39)(e), {
                    target: e.target
                }), e.title))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    cv4W: function(e, t, n) {
        e.exports = n.p + "assets/gift3-03f7dd6edab76b3567ff92bba447d5cb.png"
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
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return i.b.get(r.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(r.a, !1) && i.a.buildType === a.a.Production
        };
        var o = "https://www.twitch.tv"
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
                a = Number(t);
            return n.setMinutes(a), n
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                                    value: "displayName"
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
                                    value: "videoFields"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    }, {
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
                                                                    value: "videoFields"
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
                                alias: null,
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
                    value: "videoFields"
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
                            value: "broadcastType"
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
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publishedAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                            value: "scope"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "chatSettings"
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
                                            value: "rules"
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
                end: 837
            }
        };
        n.loc.source = {
            body: "query VideoWatchPage_Video($videoID: ID $collectionID: ID! $useCollectionID: Boolean!) {\ncurrentUser {\nid\ndisplayName\n}\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @skip(if: $useCollectionID) {\n...videoFields\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $useCollectionID) {\nitems(first: 1) {\ntotalCount\nedges {\nnode {\n... on Video {\n...videoFields\n}\n}\n}\n}\nowner {\nid\nlogin\ndisplayName\n}\n}\n}\n# These are the fields used by the watch page.\nfragment videoFields on Video {\nid\nbroadcastType\ntitle\ndescription\nlengthSeconds\npublishedAt\nviewCount\nscope\npreviewThumbnailURL(width: 126 height: 71)\ngame {\nid\nboxArtURL(width: 138 height: 190)\nname\n}\nowner {\nid\ndisplayName\nlogin\nchatSettings {\nrules\n}\n}\n}",
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
                a = i(t);
            return n.getFullYear() === a.getFullYear() && n.getMonth() === a.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    f5HX: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecentVideosFromUser_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userID"
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
                end: 237
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery RecentVideosFromUser_User($userID: ID) {\nuser(id: $userID) {\nid\nlogin\nvideos(first: 30 sort: TIME) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    fHoP: function(e, t) {},
    fK0I: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() > a.getTime()
        }
    },
    fKKh: function(e, t) {},
    fTsm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("7enT"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("knr3"),
            c = n("U7vG"),
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
                    return c.createElement(d.U, {
                        className: e,
                        flexWrap: d.K.NoWrap,
                        fullHeight: this.props.theatreModeEnabled,
                        fullWidth: !this.props.rightColumnExpanded,
                        position: this.props.theatreModeEnabled ? d._3.Fixed : d._3.Relative
                    }, c.createElement(d.j, null, this.props.children))
                }, t
            }(c.Component));
        n.d(t, "a", function() {
            return m
        });
        var m = Object(i.a)(function(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded
            }
        }, function(e) {
            return Object(a.bindActionCreators)({
                onTheatreModeDisabled: r.n,
                onTheatreModeEnabled: r.o
            }, e)
        })(u)
    },
    fUo1: function(e, t, n) {
        var i = n("iRXW"),
            a = n("7EGB"),
            r = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = i(a(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / r)
        }
    },
    fo7E: function(e, t, n) {
        var i = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, -n)
        }
    },
    "foQ+": function(e, t) {
        e.exports = {
            iterateHeaders: function(e, t) {
                for (var n = e[Symbol.iterator](), i = n.next(); !i.done;) t(i.value[0]), i = n.next()
            },
            iterateHeadersKeys: function(e, t) {
                for (var n = e.keys(), i = n.next(); !i.done;) t(i.value), i = n.next()
            }
        }
    },
    g7wA: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return c.createElement("a", {
                key: e,
                className: "chat-line__message--link",
                href: t.content.url,
                target: "_blank",
                rel: "noreferrer noopener"
            }, t.content.displayText)
        }

        function a(e, t, n) {
            var a = null,
                r = e.reduce(function(r, o, s) {
                    switch (o.type) {
                        case _.a.Text:
                            var l = s > 0;
                            return r.concat(function(e, t, n, i, a) {
                                var r = [],
                                    o = "";
                                i && (o = o.concat(" "));
                                var s = e.content.split(/\s+/);
                                return s.forEach(function(e, i) {
                                    if ("" !== e) {
                                        var a = i < s.length - 1 ? e + " " : e;
                                        (t || n) && function(e, t, n) {
                                            var i = e.trim().toLowerCase();
                                            return t && i === t.toLowerCase() || n && i === n.toLowerCase()
                                        }(e, t, n) ? (r = (r = r.concat(o)).concat(c.createElement(C.U, {
                                            className: "chat-line__message--mention-recipient",
                                            display: C.H.InlineFlex,
                                            key: "" + e + i,
                                            "data-a-target": "chat-message-mention"
                                        }, a)), o = "") : o = o.concat(a)
                                    }
                                }), r = r.concat(o), c.createElement("span", {
                                    key: "chat-line__message-text-" + a,
                                    "data-a-target": "chat-message-text"
                                }, r)
                            }(o, t, n, l, s));
                        case _.a.Mention:
                            var d = "";
                            return function(e) {
                                return e.content && e.content.sender
                            }(o) && t && o.content.sender.toLowerCase() === t.toLowerCase() ? d = "chat-line__message--mention-sender" : function(e) {
                                return e.content && e.content.recipient
                            }(o) && t && o.content.recipient.toLowerCase() === t.toLowerCase() && (d = "chat-line__message--mention-recipient"), r.concat(c.createElement(C.U, {
                                className: d,
                                display: C.H.InlineFlex,
                                key: s,
                                "data-a-target": "chat-message-mention"
                            }, "@" + o.content.recipient));
                        case _.a.Link:
                            return r = r.concat(i(s, o)), e.length > s + 1 && e[s + 1].type === _.a.Link && r.push(" "), r;
                        case _.a.Emote:
                            return r = r.concat(c.createElement(b.a, {
                                key: s,
                                emote: o.content
                            })), e.length > s + 1 && e[s + 1].type === _.a.Emote && r.push(" "), r;
                        case _.a.ClipLink:
                            return a ? r.concat(i(s, o)) : (a = c.createElement(k.a, {
                                key: s,
                                slug: o.content.slug
                            }), r);
                        case _.a.VideoLink:
                            return a ? r.concat(i(s, o)) : (a = c.createElement(y.a, {
                                key: s,
                                id: o.content.id,
                                url: o.content.url
                            }), r);
                        default:
                            return r.concat(c.createElement("span", {
                                key: s
                            }))
                    }
                }, []);
            return a && (r = r.concat(a)), r
        }

        function r(e) {
            var t = Object(h.a)("https://twitch.amazon.com/prime", {
                ref: "subscriptionMessage",
                channel: e
            });
            return c.createElement("a", {
                className: "chat-line__subscribe--prime",
                href: t,
                target: "_blank",
                rel: "noopener"
            }, Object(d.d)("Twitch Prime", "ChatLine"))
        }

        function o(e, t) {
            return Object(d.d)("{userLogin} just subscribed with {service}!", {
                userLogin: e,
                service: t
            }, "ChatLine")
        }

        function s(e, t) {
            return Object(d.d)("{userLogin} just subscribed with a {subTier} sub!", {
                userLogin: e,
                subTier: t
            }, "ChatLine")
        }

        function l(e) {
            return c.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, function(e) {
                var t = e.getHours() % 12;
                0 === t && (t = 12);
                var n = e.getMinutes(),
                    i = n.toString();
                return n < 10 && (i = "0" + i), t + ":" + i
            }(new Date(e)))
        }
        t.e = function() {
            return c.createElement("span", {
                key: "thankyou"
            }, Object(d.d)("Thank you for your feedback!", "ChatLine"))
        }, t.h = a, t.i = function(e) {
            if (e.type === S.a.Ban) return e.reason ? c.createElement("span", {
                className: "chat-line__moderation--ban-with-reason"
            }, Object(d.d)("{userLogin} has been banned. Reason: {reason}", {
                userLogin: e.userLogin,
                reason: e.reason
            }, "ChatLine")) : c.createElement("span", {
                className: "chat-line__moderation--ban"
            }, Object(d.d)("{userLogin}  is now banned from this room.", {
                userLogin: e.userLogin
            }, "ChatLine"));
            if (e.reason && e.duration) {
                var t = Object(d.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                    duration: e.duration,
                    reason: e.reason,
                    userLogin: e.userLogin
                }, "ChatLine");
                return c.createElement("span", {
                    className: "chat-line__moderation--timeout-with-reason"
                }, t)
            }
            return e.duration ? c.createElement("span", {
                className: "chat-line__moderation--timeout"
            }, Object(d.d)("{userLogin} has been timed out for {duration} seconds.", {
                userLogin: e.userLogin,
                duration: e.duration
            }, "ChatLine")) : void 0
        }, t.q = function(e) {
            return e.isPrime ? c.createElement("span", null, o(e.userLogin, r(e.channel))) : c.createElement("span", null, s(e.userLogin, e.tier))
        }, t.p = function(e) {
            return "custom" === e.tier ? c.createElement("span", null, function(e, t) {
                return Object(d.d)("{userLogin} gifted a subscription to {recipient}!", {
                    userLogin: e,
                    recipient: t
                }, "ChatLine")
            }(e.userLogin, e.recipient)) : c.createElement("span", null, function(e, t, n) {
                return Object(d.d)("{userLogin} gifted a {subTier} sub to {recipient}!", {
                    userLogin: e,
                    subTier: t,
                    recipient: n
                }, "ChatLine")
            }(e.userLogin, e.tier, e.recipient))
        }, t.a = function(e) {
            var t = e.daysLeft;
            0 === t && (t = e.hoursLeft);
            var n = {
                bitsTotal: c.createElement("strong", null, Object(f.e)(e.total, {
                    style: "currency",
                    currency: "USD"
                })),
                charityName: c.createElement("strong", null, e.charityName),
                learnMoreURL: c.createElement("a", {
                    href: e.learnMore,
                    target: "_blank"
                }, e.learnMore),
                hashtag: c.createElement("strong", null, e.hashtag),
                timeRemaining: Object(f.e)(t)
            };
            return c.createElement("span", null, 0 === e.daysLeft ? function(e) {
                return Object(d.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n) : function(e) {
                return Object(d.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n))
        }, t.l = function(e, t, n, i, u) {
            if (e.user) {
                var m = null;
                e.badges && (m = c.createElement(g.b, {
                    badgeSets: u,
                    badgesToRender: e.badges
                }));
                var p = e.isPrime ? o(e.user.userDisplayName, r(e.channel)) : s(e.user.userDisplayName, e.tier),
                    h = [c.createElement("span", {
                        key: "chat--resubbed"
                    }, p, c.createElement("span", {
                        key: "sub-separator"
                    }, " "), Object(d.d)("{userLogin} subscribed for {months} months in a row!", {
                        userLogin: e.user.userDisplayName,
                        months: e.months
                    }, "ChatLine"))];
                if (e.messageParts && e.user && !e.deleted) {
                    var f = null;
                    t && e.timestamp && (f = l(e.timestamp)), h.push(c.createElement("div", {
                        key: "resub-message",
                        className: "chat-line__subscribe--message"
                    }, f, m, c.createElement(v.a, {
                        userData: e.user
                    }), c.createElement("span", {
                        key: "separator"
                    }, " : "), a(e.messageParts, n, i)))
                }
                return h
            }
            return null
        }, t.n = function(e) {
            var t = e.enabled ? Object(d.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                length: e.length
            }, "ChatLine") : Object(d.d)("This room is no longer in slow mode.", "ChatLine");
            return c.createElement("span", null, t)
        }, t.j = function(e) {
            return c.createElement("span", null, e.message)
        }, t.g = function(e) {
            return c.createElement("span", null, e.message)
        }, t.m = function(e) {
            var t;
            if (e.length > 0) {
                var n = e.join(", ");
                t = Object(d.d)("The moderators of this room are: {moderatorList}", {
                    moderatorList: n
                }, "ChatLine")
            } else t = Object(d.d)("There are no moderators of this room.", "ChatLine");
            return c.createElement("span", null, t)
        }, t.f = function(e) {
            if (e.enabled) {
                var t = 0 === e.length ? Object(d.d)("This room is in followers-only mode.", "ChatLine") : Object(d.d)("This room is now in {length} followers-only mode.", {
                    length: Object(p.a)(60 * e.length)
                }, "ChatLine");
                return c.createElement("span", null, t)
            }
            return c.createElement("span", null, Object(d.d)("This room is no longer in followers-only mode.", "ChatLine"))
        }, t.d = function(e) {
            return e.enabled ? c.createElement("span", null, Object(d.d)("This room is now in emote-only mode.", "ChatLine")) : c.createElement("span", null, Object(d.d)("This room is no longer in emote-only mode.", "ChatLine"))
        }, t.o = function(e) {
            var t = e.enabled ? Object(d.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(d.d)("This room is no longer in subscriber-only mode.", "ChatLine");
            return c.createElement("span", null, t)
        }, t.b = function() {
            return c.createElement("span", null, Object(d.d)("Chat was cleared by a moderator", "ChatLine"))
        }, t.r = l, t.s = function(e) {
            return c.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, function(e, t) {
                void 0 === t && (t = {});
                var n = d.n.intl.getLanguageCode() || "en";
                return Intl.DateTimeFormat(n, t).format(e)
            }(new Date(e), {
                hour: "numeric",
                minute: "numeric"
            }))
        }, t.t = function() {
            return c.createElement("span", null, Object(d.d)("The raid has been cancelled.", "RaidCancelMessage"))
        }, t.c = function(e) {
            return c.createElement(C._18, {
                borderMarked: !0,
                borderBottom: !1
            }, c.createElement(C.U, {
                className: "chat-line__status",
                display: C.H.Flex,
                alignItems: C.c.Center,
                flexWrap: C.K.NoWrap
            }, c.createElement(C.P, {
                flexShrink: 0
            }, c.createElement("img", {
                src: m.a,
                height: "32",
                width: "32"
            })), c.createElement(C.U, {
                margin: {
                    left: .5
                }
            }, Object(d.d)("<x:boldpurple>{userName}</x:boldpurple>'s Cheer unlocked gifts for <x:bold>{numberOfGifts, number} others</x:bold>!", {
                userName: e.message.user.userDisplayName,
                numberOfGifts: e.selectedCount,
                "x:boldpurple": function(e) {
                    return c.createElement(C._22, {
                        type: C._27.Span,
                        bold: !0,
                        color: C.F.Link
                    }, e)
                },
                "x:bold": function(e) {
                    return c.createElement("strong", null, e)
                }
            }, "Crates"))), c.createElement(C._18, {
                className: "chat-line__status",
                background: C.m.Alt2
            }, c.createElement(C._22, {
                bold: !0,
                color: C.F.Link
            }, Object(d.d)("Cheer 250+ to unlock gifts for others in chat!", "Crates"))))
        }, t.k = function(e, t, n) {
            return 0 === n ? Object(d.d)("<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}!</x:bold>", {
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return c.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage") : Object(d.d)("{numCrates, plural, one {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened a <x:bold>Twitch Crate!</x:bold>} other {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened # <x:bold>Twitch Crates!</x:bold>}}", {
                numCrates: n,
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return c.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage")
        };
        var c = n("U7vG"),
            d = (n.n(c), n("6sO2")),
            u = n("cv4W"),
            m = n.n(u),
            p = n("FsFC"),
            h = n("yDzg"),
            f = n("J4ib"),
            g = n("3T7g"),
            v = n("5Nu7"),
            b = n("hXeO"),
            k = n("5vPJ"),
            y = n("kBA+"),
            S = n("qkCi"),
            _ = n("mwvJ"),
            C = n("Odds")
    },
    gAt4: function(e, t, n) {
        var i = n("xA5w"),
            a = n("nizW"),
            r = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = r(n, o),
                l = Math.abs(a(n, o));
            return n.setDate(n.getDate() - s * l), s * (l - (r(n, o) === -s))
        }
    },
    gDPd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() < a.getTime()
        }
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, i + 1), a.setHours(0, 0, 0, 0), a
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
            return r
        });
        var i = n("U7vG"),
            a = (n.n(i), n("8RKZ")),
            r = function(e) {
                var t, n = e.emote,
                    r = n.alt || "";
                return n.cheerAmount && (r += " " + n.cheerAmount.toString(), t = i.createElement("strong", {
                    className: "chat-line__message--cheer-amount",
                    style: {
                        color: n.cheerColor
                    }
                }, n.cheerAmount)), i.createElement(a.a, {
                    alt: r,
                    cheerText: t,
                    className: "chat-line__message--emote",
                    srcKey: "1x",
                    srcSet: n.images
                })
            }
    },
    hico: function(e, t, n) {
        var i = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var r = a(n);
            return r.setDate(r.getDate() - 1), r
        }
    },
    hj5Y: function(e, t, n) {
        var i = n("5qwL");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    i5XQ: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("Utj3");
        t.BrowserHeaders = i.BrowserHeaders
    },
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(c.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(l.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n("U7vG"),
            r = n("6sO2"),
            o = n("NXs7"),
            s = n("3iBR"),
            l = n("iydZ"),
            c = n("CFVp"),
            d = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return i
        })
    },
    iO8W: function(e, t) {
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
                    },
                    defaultValue: null
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
                                    value: "broadcastType"
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
                                    value: "game"
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
                                            value: "name"
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
                                    value: "owner"
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
    iOr9: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    iRXW: function(e, t, n) {
        var i = n("zZbG"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), a(n)
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = r.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var i = n("6sO2")
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isPermanent"
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
                a = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
                        return a[e.getDay()]
                    },
                    dddd: function(e) {
                        return r[e.getDay()]
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
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("cAee"),
            s = n("zAjo"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTrackHandler = function(e) {
                        switch (e.shareTrackingType) {
                            case o.a.Video:
                                return Object(o.c)(t.props.video, e, r.n.apollo.client);
                            case o.a.Collection:
                                return Object(o.b)(t.props.video, e, r.n.apollo.client);
                            default:
                                return e.shareTrackingType
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(s.b, {
                        collectionID: this.props.collectionID,
                        video: this.props.video,
                        buttonType: this.props.buttonType,
                        balloonDirection: this.props.balloonDirection,
                        onShareClick: this.onTrackHandler,
                        lastVideoOffset: this.props.lastVideoOffset
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    jvcJ: function(e, t) {},
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "black_friday_2017"
    },
    jy2q: function(e, t, n) {
        var i = n("xA5w"),
            a = n("balU");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return a(n, n.getMonth() + 3 * r)
        }
    },
    k2hM: function(e, t) {},
    "kBA+": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("7vx8"),
            s = n("SZoP"),
            l = n("GxDs"),
            c = n("Odds"),
            d = n("s+oZ"),
            u = {
                ERROR: "video-chat-card-error"
            },
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.video,
                        n = e.error,
                        i = e.loading;
                    if (n || t && !t.owner) return a.createElement(l.a, {
                        error: {
                            title: Object(r.d)("Something went wrong", "VideoChatCard"),
                            description: Object(r.d)("We couldn't find that video", "VideoChatCard")
                        }
                    });
                    if (i || !t) return a.createElement(l.a, null);
                    var o = a.createElement(c._22, null, Object(r.c)(new Date(t.publishedAt), "medium"), a.createElement("span", null, " · "), Object(s.a)(t.owner.login, t.owner.displayName));
                    return a.createElement(l.a, {
                        data: {
                            title: t.title,
                            description: o,
                            previewImageURL: t.previewThumbnailURL,
                            contentURL: this.props.url
                        }
                    })
                }, t
            }(a.Component),
            p = function(e) {
                return {
                    variables: {
                        videoID: e.id
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: "cache-first"
                }
            },
            h = Object(o.a)(d, {
                options: p
            })(m);
        n.d(t, !1, function() {
            return "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"
        }), n.d(t, !1, function() {
            return u
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, !1, function() {
            return p
        }), n.d(t, "a", function() {
            return h
        })
    },
    kDuD: function(e, t, n) {
        var i = n("xA5w"),
            a = n("MIQa"),
            r = n("xKy+");
        e.exports = function(e) {
            var t = i(e);
            return a(t).getTime() === r(t).getTime()
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
            a = 36e5;
        e.exports = function(e, t) {
            var n = i(e, t) / a;
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
    lGVF: function(e, t) {},
    lQzg: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    m9YJ: function(e, t, n) {
        "use strict";

        function i() {
            return {
                messageCreatedTooQuickError: Object(De.d)("Your message was not sent because you are sending messages too quickly.", "format-error-messages"),
                chatReplayFilterError: Object(De.d)("Your message has been posted. However, other messages posted after the live stream are hidden.", "format-error-messages")
            }
        }

        function a(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return x.__assign({}, e, n)
        }

        function r(e, t) {
            return fetch(e, t).then(function(e) {
                return e.status >= 300 ? Promise.reject(e) : e
            })
        }

        function o(e) {
            void 0 === e && (e = "");
            var t = {};
            return "" !== e && (t[je] = "OAuth " + e), t
        }

        function s(e) {
            return ze.getClient(Object(Me.a)(e.getState()))
        }

        function l(e) {
            return e.reduce(function(e, t) {
                return e[t._id] = t.version, e
            }, {})
        }

        function c(e) {
            var t = function(e) {
                return new URL(Ve + "/videos/" + e)
            }(e);
            return new URL(t.toString() + "/comments")
        }

        function d(e) {
            var t = u(e).toString();
            return new URL(t + "/replies")
        }

        function u(e) {
            return new URL(Ve + "/videos/comments/" + e)
        }

        function m(e, t) {
            var n;
            n = h(t) ? d(t.parentId) : c(t.contentId);
            var i = function(e) {
                    return h(e) ? {
                        message: e.message,
                        parent_id: e.parentId
                    } : {
                        content_id: e.contentId,
                        content_offset_seconds: e.contentOffsetSeconds,
                        content_type: e.contentType,
                        message: e.message
                    }
                }(t),
                a = {
                    method: Be,
                    body: JSON.stringify(i)
                };
            return e.doAuthRequest(n, a).then(function(e) {
                return Xe(e)
            })
        }

        function p(e, t) {
            try {
                if (function(e) {
                        return "commentID" in e
                    }(t)) return function(e, t) {
                    var n, i = new URLSearchParams;
                    void 0 !== t.cursor && i.append(rt, t.cursor);
                    return n = new URL("?" + i.toString(), d(t.commentID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                        return tt(e)
                    })
                }(e, t);
                var n = void 0,
                    i = new URLSearchParams;
                return f(t) ? i.append(rt, t.cursor) : g(t) && (i.append(at, "" + t.offset), void 0 !== t.highlightedMessageID && i.append(ot, t.highlightedMessageID)), n = new URL("?" + i.toString(), c(t.videoID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                    return et(e, t.bitsConfig)
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }

        function h(e) {
            return "parentId" in e
        }

        function f(e) {
            return "cursor" in e
        }

        function g(e) {
            return "offset" in e
        }

        function v(e, t) {
            var n;
            return n = function(e) {
                return "userId" in e
            }(e) ? function(e) {
                var t = new URL(Ve + "/videos/comments/"),
                    n = new URLSearchParams;
                return n.append(dt, mt.toString()), n.append(ct, e.userId), void 0 !== e.cursor && n.append(rt, e.cursor), t.search = "?" + n, t
            }(e) : function(e) {
                var t = new URL(Ve + "/videos/comments/"),
                    n = new URLSearchParams;
                return n.append(dt, mt.toString()), n.append(ut, e.videoId), void 0 !== e.cursor && n.append(rt, e.cursor), t.search = "?" + n, t
            }(e), t.doAuthRequest(n, {}).then(function(t) {
                return st(t, e.bitsConfig)
            })
        }

        function b(e, t) {
            var n = new URL(function(e) {
                    return new URL(Ve + "/videos/channels/" + e.targetChannel + "/bans")
                }(e).toString()),
                i = {
                    method: Be,
                    body: JSON.stringify({
                        commenter_id: e.bannedUser
                    })
                };
            return t.doRawAuthRequest(n, i)
        }

        function k(e, t, n, i) {
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

        function y(e) {
            return e.future !== de
        }

        function S(e) {
            return e.past !== de
        }

        function _(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, De.o.apollo.client)
            }
        }

        function C(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, De.o.apollo.client, De.n)
            }
        }
        var w = n("2KeS"),
            E = n("6sO2"),
            x = n("TToO"),
            D = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
            O = "vodChat.channel-moderation-comments.RESULTS_FAILED",
            N = "vodChat.channel-moderation-comments.BAN_SUCCESS",
            T = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
            I = "videoChat.is_replay_mode",
            F = "videoChat.hide_timestamps",
            A = "vodChat.comments.DELETED_SUCCESS",
            U = "vodChat.comments.CREATED_SUCCESS",
            M = "vodChat.comments.CREATE_FAILED",
            L = "vodChat.comments.DISPLAY_ERROR",
            R = function(e) {
                return {
                    type: L,
                    errorMessage: e
                }
            },
            j = "vodChat.comments.UPDATED_SUCCESS",
            V = "vodChat.comments.CURSOR_RECEIVED",
            B = "vodChat.comments.OFFSET_RECEIVED",
            P = "vodChat.comments.QUERY_FAILED",
            H = "vodChat.comments.CLEARED",
            W = function() {
                return {
                    type: H
                }
            },
            z = "vodChat.comments.COOLDOWN_ENDED",
            q = "vodChat.comments.SYNC_ENABLED",
            G = function() {
                return {
                    type: q
                }
            },
            Y = "vodChat.comments.SYNC_DISABLED",
            Q = function() {
                return {
                    type: Y
                }
            },
            K = "vodChat.comments.REPLAY_FILTER_CHANGED",
            J = function(e) {
                return E.k.set(I, e), {
                    type: K,
                    isReplayFilterOn: e
                }
            },
            Z = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
            $ = function() {
                return {
                    type: Z
                }
            },
            X = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
            ee = function(e) {
                return E.k.set(F, e), {
                    type: X,
                    hideTimestamps: e
                }
            },
            te = "vodChat.comments.REQUEST_CHAT_SETTINGS",
            ne = function() {
                return {
                    type: te,
                    isReplayFilterOn: E.k.get(I, !1),
                    hideTimestamps: E.k.get(F, !1)
                }
            },
            ie = function(e) {
                return x.__assign({
                    searchHits: [],
                    videos: {}
                }, e)
            },
            ae = "vodChat.video.CURRENT_VIDEO_CHANGED",
            re = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
            oe = function(e) {
                return {
                    type: ae,
                    id: e
                }
            },
            se = function(e) {
                return {
                    type: re,
                    updatedTime: e
                }
            },
            le = "video",
            ce = "current",
            de = "",
            ue = function(e) {
                return "" !== e.parentId
            },
            me = Number.MAX_VALUE,
            pe = Number.MIN_VALUE,
            he = function(e) {
                return x.__assign({
                    commentCount: 0,
                    maxOffset: pe,
                    minOffset: me,
                    parentComments: {},
                    offsets: {},
                    replies: {}
                }, e)
            },
            fe = function(e, t) {
                var n = Se(e);
                return t.forEach(function(e) {
                    var t = e.id,
                        i = e.contentOffset,
                        a = e.parentId;
                    if ("" === a) {
                        n.minOffset = Math.min(n.minOffset, i), n.maxOffset = Math.max(n.maxOffset, i), n.parentComments = x.__assign({}, n.parentComments, (l = {}, l[t] = e, l));
                        var r = n.offsets[i];
                        Array.isArray(r) ? r.includes(t) || (n.offsets[i] = r.concat(t), n.commentCount++) : (n.offsets[i] = [t], n.commentCount++)
                    } else {
                        var o = n.replies[a];
                        if (Array.isArray(o)) {
                            var s = o.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 !== s ? o[s] = e : (n.replies[a] = o.concat(e), n.commentCount++)
                        } else n.replies[a] = [e], n.commentCount++
                    }
                    var l
                }), n
            },
            ge = function(e, t) {
                if (t in e.parentComments) return e.parentComments[t]
            },
            ve = function(e, t) {
                var n = Se(e);
                return ue(t) ? we(n, t.parentId, t.id) : Ce(n, t.id)
            },
            be = function(e, t) {
                if (e.commentCount < t || ye(e)) return e;
                for (var n = e; n.commentCount > t && !ye(e);) n = Ee(n, n.minOffset);
                return n
            },
            ke = function(e, t) {
                var n = Se(e);
                return Object.keys(e.parentComments).forEach(function(i) {
                    var a = e.parentComments[i];
                    t(a) || (n = Ce(n, a.id))
                }), Object.keys(e.replies).forEach(function(i) {
                    e.replies[i].forEach(function(e) {
                        t(e) || (n = we(n, e.id, e.parentId))
                    })
                }), n
            },
            ye = function(e) {
                return e.minOffset === e.maxOffset
            },
            Se = function(e) {
                return {
                    commentCount: e.commentCount,
                    maxOffset: e.maxOffset,
                    minOffset: e.minOffset,
                    offsets: _e(e.offsets),
                    parentComments: x.__assign({}, e.parentComments),
                    replies: x.__assign({}, e.replies)
                }
            },
            _e = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[Number(n)] = e[Number(n)].slice(), t
                }, {})
            },
            Ce = function(e, t) {
                if (!(t in e.parentComments)) return e;
                var n = e.parentComments[t].contentOffset,
                    i = e.offsets[n],
                    a = [];
                if (i && (a = i.filter(function(e) {
                        return e !== t
                    })), e.offsets[n] = a, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                    var r = e.replies[t].length;
                    delete e.replies[t], e.commentCount -= r
                }
                return e
            },
            we = function(e, t, n) {
                if (!(t in e.replies)) return e;
                var i = e.replies[t].length,
                    a = e.replies[t].filter(function(e) {
                        if (e.id !== n) return e
                    });
                e.replies[t] = a, 0 === a.length && delete e.replies[t];
                var r = i - a.length;
                return e.commentCount -= r, e
            },
            Ee = function(e, t) {
                return t >= e.minOffset && t <= e.maxOffset && !ye(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                    e = Ce(e, t)
                }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
            },
            xe = function() {
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
            De = n("J4ib"),
            Oe = function(e) {
                return x.__assign({
                    comments: he(),
                    currentVideoTime: 0,
                    cursor: {
                        future: de,
                        past: de
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
            Ne = 150,
            Te = {
                apiToken: "",
                deviceId: ""
            },
            Ie = {
                users: {}
            },
            Fe = function(e) {
                return x.__assign({
                    users: {}
                }, e)
            },
            Ae = Object(w.combineReducers)({
                comments: function(e, t) {
                    switch (void 0 === e && (e = Oe()), t.type) {
                        case U:
                            var n = x.__assign({}, t.comments[0], {
                                highlight: !0,
                                source: ce
                            });
                            return x.__assign({}, e, {
                                comments: fe(e.comments, [n]),
                                isPostCooldownActive: !0
                            });
                        case M:
                            return x.__assign({}, e, {
                                errorMessage: t.createError
                            });
                        case L:
                            return x.__assign({}, e, {
                                errorMessage: t.errorMessage
                            });
                        case V:
                            var a = t.comments[0].parentId,
                                r = e.cursor,
                                o = e.replyCursorMap,
                                s = t.comments.slice();
                            if ("" === a) r = t.cursor;
                            else if (o = x.__assign({}, e.replyCursorMap, (p = {}, p[a] = t.cursor.future, p)), t.cursor.future === de) {
                                var l = ge(e.comments, a);
                                if (l) {
                                    var c = x.__assign({}, l, {
                                        moreReplies: !1
                                    });
                                    s.push(c)
                                }
                            }
                            var d = fe(e.comments, s);
                            return e.isScrollingSynced && (d = be(d, Ne)), x.__assign({}, e, {
                                comments: d,
                                cursor: r,
                                hasLoadedData: !0,
                                replyCursorMap: o
                            });
                        case B:
                            return x.__assign({}, e, {
                                comments: fe(he(), t.comments),
                                hasLoadedData: !0,
                                cursor: t.cursor,
                                replyCursorMap: {}
                            });
                        case P:
                            return x.__assign({}, e, {
                                hasLoadedData: !0
                            });
                        case D:
                            return x.__assign({}, e, {
                                comments: fe(he(), t.comments),
                                cursor: t.cursor,
                                hasLoadedData: !0,
                                errorMessage: ""
                            });
                        case O:
                            return x.__assign({}, Oe(), {
                                hasLoadedData: !0,
                                errorMessage: t.error
                            });
                        case re:
                            return x.__assign({}, e, {
                                currentVideoTime: Math.floor(t.updatedTime)
                            });
                        case ae:
                        case H:
                            return x.__assign({}, Oe());
                        case A:
                            return x.__assign({}, e, {
                                comments: ve(e.comments, t.comment)
                            });
                        case z:
                            var u = e.errorMessage;
                            return u === i().messageCreatedTooQuickError && (u = ""), x.__assign({}, e, {
                                isPostCooldownActive: !1,
                                errorMessage: u
                            });
                        case Y:
                            return x.__assign({}, e, {
                                isScrollingSynced: !1
                            });
                        case q:
                            return x.__assign({}, e, {
                                comments: be(e.comments, Ne),
                                isScrollingSynced: !0
                            });
                        case N:
                            var m = function(e) {
                                return e.commenter !== t.user
                            };
                            return x.__assign({}, e, {
                                comments: ke(e.comments, m)
                            });
                        case j:
                            return x.__assign({}, e, {
                                comments: fe(e.comments, t.comments)
                            });
                        case K:
                            return x.__assign({}, e, {
                                isReplayFilterOn: t.isReplayFilterOn
                            });
                        case Z:
                            return x.__assign({}, e, {
                                hasDismissedChatReplayError: !0
                            });
                        case X:
                            return x.__assign({}, e, {
                                hideTimestamps: t.hideTimestamps
                            });
                        case te:
                            return x.__assign({}, e, {
                                isReplayFilterOn: t.isReplayFilterOn,
                                hideTimestamps: t.hideTimestamps
                            });
                        default:
                            return e
                    }
                    var p
                },
                config: function(e) {
                    return void 0 === e && (e = Te), e
                },
                users: function(e, t) {
                    switch (void 0 === e && (e = Ie), t.type) {
                        case V:
                        case B:
                        case D:
                        case U:
                            return {
                                users: a(e.users, t.users)
                            };
                        case H:
                            return x.__assign({}, Fe());
                        default:
                            return e
                    }
                },
                moderation: function(e, t) {
                    switch (void 0 === e && (e = ie()), t.type) {
                        case D:
                            return x.__assign({}, e, {
                                videos: function(e, t) {
                                    var n = t.reduce(function(e, t) {
                                        return e[t.id] = t, e
                                    }, {});
                                    return x.__assign({}, e, n)
                                }(e.videos, t.videos)
                            });
                        case T:
                            return t.hits && t.hits.results.length > 0 ? x.__assign({}, e, {
                                searchHits: t.hits.results
                            }) : x.__assign({}, e, {
                                searchHits: []
                            });
                        case H:
                            return x.__assign({}, ie());
                        default:
                            return e
                    }
                }
            });
        E.n.store.registerReducer("vodChat", Ae);
        var Ue, Me = n("Aj/L"),
            Le = n("i5XQ"),
            Re = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = new Le.BrowserHeaders(t),
                    i = new Le.BrowserHeaders(e);
                return n.forEach(function(e, t) {
                    i.set(e, t)
                }), i
            },
            je = "Authorization",
            Ve = "https://api.twitch.tv/v5",
            Be = "POST",
            Pe = "PUT",
            He = "DELETE",
            We = (Ue = {}, Ue.Accept = "application/vnd.twitchtv.v5+json", Ue["Content-Type"] = "application/json", Ue["CLIENT-ID"] = "jzkbprff40iqj646a697cyrvl0zt2m6", Ue),
            ze = function() {
                function e(e) {
                    this.chatOAuthToken = e
                }
                return e.getClient = function(t) {
                    return void 0 === t && (t = ""), new e(t)
                }, e.prototype.doRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = x.__assign({}, t, {
                        headers: Re(We, t.headers).toHeaders()
                    });
                    return function(e, t) {
                        return r(e, t).then(function(e) {
                            return e.json()
                        })
                    }(new Request(e.toString(), n))
                }, e.prototype.doAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = x.__assign({}, t, {
                        headers: Re(o(this.chatOAuthToken), t.headers)
                    });
                    return this.doRequest(e, n)
                }, e.prototype.doRawRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = x.__assign({}, t, {
                        headers: Re(We, t.headers).toHeaders()
                    });
                    return r(new Request(e.toString(), n))
                }, e.prototype.doRawAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = x.__assign({}, t, {
                        headers: Re(o(this.chatOAuthToken), t.headers)
                    });
                    return this.doRawRequest(e, n)
                }, e
            }(),
            qe = n("iydZ"),
            Ge = n("mwvJ"),
            Ye = n("l21v"),
            Qe = function(e, t, n) {
                var i = e.body,
                    a = e.emoticons || [],
                    r = [];
                return r = 0 === a.length ? e.bits_spent ? r.concat(Object(qe.c)(i, n)) : r.concat(Object(Ye.c)(i, t, !1)) : function(e, t, n, i) {
                    var a, r = 0,
                        o = Array.from(t);
                    return a = e.reduce(function(e, t) {
                        var n = t.begin,
                            i = t.end,
                            a = o.slice(r, n),
                            s = o.slice(n, i + 1);
                        return 0 !== a.length && (e = e.concat(Object(Ye.c)(a.join(""), "", !1))), e.push({
                            type: Ge.a.Emote,
                            content: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": Object(Ye.e)(t._id, 1),
                                        "2x": Object(Ye.e)(t._id, 2),
                                        "4x": Object(Ye.e)(t._id, 4)
                                    }
                                },
                                alt: s.join("")
                            }
                        }), r = i + 1, e
                    }, []), r < t.length && (a = a.concat(Object(Ye.c)(o.slice(r).join(""), "", !1))), i ? a.reduce(function(e, t) {
                        return t.type === Ge.a.Text ? e.concat(Object(qe.c)(t.content, n)) : (e.push(t), e)
                    }, []) : a
                }(a, i, n, void 0 !== e.bits_spent), {
                    id: "1",
                    isAction: e.is_action,
                    tokens: r,
                    userColor: e.user_color ? e.user_color : Object(Ye.b)(t)
                }
            },
            Ke = function() {
                return function(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
            }(),
            Je = "https://static-cdn.jtvnw.net",
            Ze = Je + "/emoticons/v1/",
            $e = function(e) {
                return new Ke({
                    id: e._id,
                    name: e.name,
                    logo: new URL(e.logo || "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"),
                    bio: e.bio,
                    createdAt: new Date(e.created_at),
                    displayName: e.display_name,
                    type: e.type,
                    updatedAt: new Date(e.updated_at)
                })
            },
            Xe = function(e) {
                return {
                    comments: [nt.normalizeRecord(e, qe.a)],
                    users: [$e(e.commenter)]
                }
            },
            et = function(e, t) {
                var n = e.comments.map(function(e) {
                        return $e(e.commenter)
                    }),
                    i = {
                        past: de,
                        future: de
                    };
                void 0 !== e._next && (i.future = e._next), void 0 !== e._prev && (i.past = e._prev);
                return {
                    comments: e.comments.reduce(function(e, i) {
                        return i.replies && i.replies.map(function(e) {
                            n.push($e(e.commenter))
                        }), e.concat(nt.normalizeRecords(i, t))
                    }, []),
                    cursor: i,
                    users: n
                }
            },
            tt = function(e) {
                var t = e.comments.map(function(e) {
                    return $e(e.commenter)
                });
                return {
                    comments: e.comments.map(function(e) {
                        return nt.normalizeRecord(e, qe.a)
                    }),
                    cursor: {
                        future: e._next || de
                    },
                    users: t
                }
            },
            nt = {
                normalizeRecords: function(e, t) {
                    var n = [nt.normalizeRecord(e, t)];
                    return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                        n.push(it.normalizeRecord(e, t))
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
                        message: Qe(e.message, e.commenter._id, t),
                        moreReplies: e.more_replies || !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: l(e.message.user_badges || [])
                    }
                }
            },
            it = {
                normalizeRecord: function(e, t) {
                    return {
                        channelId: e.channel_id,
                        commenter: e.commenter._id,
                        contentId: e.content_id,
                        contentOffset: Math.floor(e.content_offset_seconds),
                        contentType: e.content_type,
                        createdAt: new Date(e.created_at),
                        id: e._id,
                        message: Qe(e.message, e.commenter._id, t),
                        moreReplies: !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: l(e.message.user_badges || [])
                    }
                }
            },
            at = "content_offset_seconds",
            rt = "cursor",
            ot = "comment_id",
            st = function(e, t) {
                var n = et(e, t),
                    i = e.comments.reduce(function(e, t) {
                        return void 0 === t.video ? e : e.concat([lt(t.video)])
                    }, []);
                return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                    n.comments.push(nt.normalizeRecord(e, t)), n.users.push($e(e.commenter))
                }), x.__assign({}, n, {
                    videos: i
                })
            },
            lt = function(e) {
                return {
                    id: e._id,
                    title: e.title,
                    preview: e.preview
                }
            },
            ct = "channel_id",
            dt = "limit",
            ut = "video_id",
            mt = 50,
            pt = (function() {}(), n("6WAQ")),
            ht = function(e) {
                return e + "s"
            },
            ft = {
                beginSec: Number.MIN_VALUE,
                endSec: Number.MAX_VALUE
            },
            gt = function(e, t) {
                return t.commenter in e
            },
            vt = function(e, t, n, i) {
                var a = e.vodChat.comments,
                    r = a.currentVideoTime,
                    o = a.comments;
                if (0 === o.commentCount) return [];
                return Array.from(new xe(o)).reduce(function(a, s) {
                    return s.offset > r ? a : (s.comments.forEach(function(r) {
                        var s = ge(o, r);
                        if (void 0 !== s && (n || !gt(i, s))) return "comment" === s.source && Et(e.vodChat.comments.isReplayFilterOn, t) ? a : a.push(St(s, e, n, i, t))
                    }), a)
                }, []).sort(kt)
            },
            bt = function(e) {
                var t = function(e) {
                    return e.vodChat.comments.comments
                }(e);
                return Object.keys(t.parentComments).map(function(n) {
                    return Ct(t.parentComments[n], e)
                }).filter(function(e) {
                    return void 0 !== e.video
                }).sort(yt)
            },
            kt = function(e, t) {
                return e.comment.contentOffset === t.comment.contentOffset ? e.comment.createdAt.getTime() - t.comment.createdAt.getTime() : e.comment.contentOffset - t.comment.contentOffset
            },
            yt = function(e, t) {
                return e.comment.createdAt.getTime() === t.comment.createdAt.getTime() ? t.comment.contentOffset - e.comment.contentOffset : t.lastUpdated.getTime() - e.lastUpdated.getTime()
            },
            St = function(e, t, n, i, a) {
                var r = new Array,
                    o = new Array,
                    s = t.vodChat.comments.comments.replies[e.id],
                    l = e.createdAt;
                return Array.isArray(s) && s.forEach(function(e) {
                    !n && gt(i, e) || (e.source === ce && Et(t.vodChat.comments.isReplayFilterOn, a) ? (o.push(St(e, t, n, i)), l = xt(l, e.createdAt)) : (r.push(St(e, t, n, i)), l = xt(l, e.createdAt)))
                }), Et(t.vodChat.comments.isReplayFilterOn, a) ? {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: o.sort(kt)
                } : {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: r.sort(kt)
                }
            },
            _t = function(e, t) {
                var n = new Array,
                    i = t.vodChat.comments.comments.replies[e.id],
                    a = e.createdAt;
                return Array.isArray(i) && i.forEach(function(e) {
                    n.push(_t(e, t)), a = xt(a, e.createdAt)
                }), {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: a,
                    replies: n.sort(kt)
                }
            },
            Ct = function(e, t) {
                var n = _t(e, t);
                return x.__assign({}, n, {
                    video: t.vodChat.moderation.videos[function(e) {
                        return "v" + e
                    }(e.contentId)]
                })
            },
            wt = function(e) {
                return 0 === e.commentCount ? ft : {
                    beginSec: e.minOffset,
                    endSec: e.maxOffset
                }
            },
            Et = function(e, t) {
                return !!t && (e && (t === pt.a.Archive || t === pt.a.Highlight))
            },
            xt = function(e, t) {
                return e.getTime() > t.getTime() ? e : t
            },
            Dt = n("HM6l"),
            Ot = n("9m97"),
            Nt = n("MAZT"),
            Tt = n("uTyw"),
            It = n("E8Jt"),
            Ft = function(e, t) {
                var n = s(e);
                return v(t, n).then(function(n) {
                    e.dispatch(function(e, t) {
                        return x.__assign({
                            type: D
                        }, e, {
                            bitsConfig: t
                        })
                    }(n, t.bitsConfig))
                }, function() {
                    e.dispatch(function(e) {
                        return {
                            type: O,
                            error: e
                        }
                    }(Object(De.d)("Unable to retrieve messages, please try again.", "routines-moderation")))
                })
            },
            At = function(e, t) {
                var n = s(e);
                return b(t, n).then(function() {
                    e.dispatch(function(e) {
                        return {
                            type: N,
                            user: e
                        }
                    }(t.bannedUser))
                }).catch(function(t) {
                    return e.dispatch(function(e) {
                        return {
                            type: "vodChat.channel-moderation-comments.BAN_FAILED",
                            error: e
                        }
                    }(t))
                })
            },
            Ut = function(e, t) {
                var n = new Nt.a(E.a.algoliaApplicationID, E.a.algoliaAPIKey),
                    i = Dt.a(),
                    a = Object(It.b)({
                        broadcastType: Ot.d,
                        broadcasterId: t.creatorId
                    }),
                    r = a.typeID,
                    o = a.params;
                return n.queryForType(r, t.searchTerm, i, o).then(function(t) {
                    var n = Object(Tt.b)({
                        searchResults: t
                    });
                    n.currentVideoResults && e.dispatch(function(e) {
                        return {
                            type: T,
                            hits: e
                        }
                    }(n.currentVideoResults))
                }).catch(function() {})
            },
            Mt = n("U7vG"),
            Lt = n("Odds"),
            Rt = function(e) {
                return Mt.createElement(Lt.u, {
                    type: Lt.z.Text,
                    onClick: e.onClick
                }, Object(E.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
            },
            jt = n("vH/s"),
            Vt = n("IWpL"),
            Bt = n("xrVp"),
            Pt = n("Ryxq"),
            Ht = n("zAjo"),
            Wt = n("iO8W"),
            zt = this,
            qt = "replay_mode",
            Gt = "timestamp_mode",
            Yt = "on",
            Qt = "off",
            Kt = "frontend",
            Jt = function(e) {
                E.m.track(Vt.SpadeEventType.VideoChatSettingChanged, e)
            },
            Zt = function(e, t) {
                return x.__awaiter(zt, void 0, void 0, function() {
                    var n, i, a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, E.n.apollo.client.query({
                                    query: Wt,
                                    variables: {
                                        videoCreatorID: e.channelId,
                                        videoID: e.contentId
                                    }
                                })];
                            case 1:
                                return n = o.sent().data, i = {
                                    channel: n.video.owner.login,
                                    channel_id: Number(e.channelId),
                                    game: n.video.game ? n.video.game.name : null,
                                    location: jt.PageviewLocation.VideoWatchPage,
                                    share_platform: Ht.a.Link,
                                    share_context: jt.ShareItemContext.Chomment,
                                    shared_item_id: Object(Pt.a)(e.contentId),
                                    shared_item_type: Object(Bt.a)(n.video.broadcastType),
                                    shared_item_url: t.toString(),
                                    partner: n.video.owner.roles.isPartner,
                                    source_item_id: e.id,
                                    source_item_type: jt.ShareItemSourceItemType.Chomment
                                }, a = $t(e, n, Ht.a.Link), E.m.track(Vt.SpadeEventType.ChommentUIAction, a), E.m.track(Vt.SpadeEventType.ShareItem, i), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), Zt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            $t = function(e, t, n) {
                return {
                    action: "share",
                    author_id: Number(e.commenter),
                    channel: t.video.owner.login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: Kt,
                    game: t.video.game ? t.video.game.name : null,
                    login: t.currentUser ? t.currentUser.login : null,
                    user_id: t.currentUser ? Number(t.currentUser.id) : null,
                    vod_id: Number(e.contentId),
                    vod_title: t.video.title,
                    vod_ts: e.contentOffset,
                    vod_type: Object(Bt.a)(t.video.broadcastType),
                    share_platform: n
                }
            },
            Xt = n("WNf4"),
            en = n("tSZx"),
            tn = n("vjRp"),
            nn = this,
            an = function(e) {
                if (e.includes("FollowersOnlyError")) {
                    return function(e) {
                        return Object(E.d)("This room is in {duration} followers-only mode. Follow this channel to join the community", {
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
                            2592e3: "1 Month",
                            7776e3: "3 Months"
                        }[60 * parseInt(n[2] || "0", 10) * 60 + 60 * parseInt(n[3], 10) + parseInt(n[4], 10)]
                    }(e))
                }
                var t = {
                        CommenterBannedError: Object(E.d)("You are banned from sending messages in this channel", "routines-comments"),
                        CommentingDisabledError: Object(E.d)("Sending messages in this channel is disabled", "routines-comments"),
                        UserNotVerifiedError: Object(E.d)("Account email verification required to send a message", "routines-comments"),
                        MaxChildCommentsError: Object(E.d)("The reply limit for this message has been reached", "routines-comments"),
                        MessageLikelySpamError: Object(E.d)("Your message was blocked by the spam filter", "routines-comments"),
                        MessageContainsBannedWordsError: Object(E.d)("Your message wasn't posted due to conflicts with the channel's moderation settings", "routines-comments")
                    },
                    n = Object.keys(t).find(function(t) {
                        return e.includes(t)
                    });
                return n ? t[n] : Object(E.d)("Unable to send a new message at this time", "routines-comments")
            },
            rn = "",
            on = -1,
            sn = !1,
            ln = function(e, t) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var n;
                    return x.__generator(this, function(i) {
                        if (sn) return [2, Promise.resolve()];
                        if (g(t)) {
                            if (t.offset === on) return [2, Promise.resolve()];
                            on = t.offset
                        }
                        if (f(t)) {
                            if (t.cursor === rn) return [2, Promise.resolve()];
                            rn = t.cursor
                        }
                        return n = s(e), sn = !0, [2, p(n, t).then(function(n) {
                            sn = !1, g(t) && t.offset === on ? e.dispatch(function(e) {
                                return x.__assign({
                                    type: B
                                }, e)
                            }(n)) : e.dispatch(function(e) {
                                return x.__assign({
                                    type: V
                                }, e)
                            }(n))
                        }, function(t) {
                            sn = !1, E.n.logger.error(t, "VideoChat: unable to fetch messages"), e.dispatch({
                                type: P
                            })
                        })]
                    })
                })
            },
            cn = function(e, t) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var n;
                    return x.__generator(this, function(i) {
                        return n = s(e), [2, m(n, t).then(function(t) {
                            e.dispatch(function(e) {
                                return x.__assign({
                                    type: U
                                }, e)
                            }(t)), e.dispatch(C(mn, t)), setTimeout(function() {
                                e.dispatch({
                                    type: z
                                })
                            }, 5e3)
                        }, function(t) {
                            return t.json().then(function(t) {
                                e.dispatch(function(e) {
                                    return {
                                        type: M,
                                        createError: e
                                    }
                                }(an(t.message)))
                            })
                        })]
                    })
                })
            },
            dn = function(e, t) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var n, i;
                    return x.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                n = s(e), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, function(e, t) {
                                    var n = u(t.id),
                                        i = {
                                            method: He
                                        };
                                    return e.doRawAuthRequest(n, i)
                                }(n, t)];
                            case 2:
                                return a.sent(), e.dispatch(function(e) {
                                    return x.__assign({
                                        type: A
                                    }, e)
                                }({
                                    comment: t
                                })), e.dispatch(C(pn, {
                                    comment: t
                                })), [3, 4];
                            case 3:
                                return i = a.sent(), E.i.error(i.toString(), dn.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            un = function(e, t) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var n, i, a;
                    return x.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                n = s(e), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, function(e, t) {
                                    var n = u(t.comment.id),
                                        i = {
                                            method: Pe,
                                            body: JSON.stringify({
                                                state: t.state
                                            })
                                        };
                                    return e.doAuthRequest(n, i).then(function(e) {
                                        return Xe(e)
                                    }, function(e) {
                                        return Promise.reject(e)
                                    })
                                }(n, t)];
                            case 2:
                                return i = r.sent(), e.dispatch(function(e) {
                                    return x.__assign({
                                        type: j
                                    }, e)
                                }(i)), [3, 4];
                            case 3:
                                return a = r.sent(), E.i.error(a.toString(), un.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            mn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var e, a;
                    return x.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Xt,
                                    variables: {
                                        videoCreatorID: t.comments[0].channelId,
                                        videoID: t.comments[0].contentId
                                    }
                                })];
                            case 1:
                                return e = r.sent().data, i.track(jt.SpadeEventType.ChommentCreated, function(e, t) {
                                    var n = e.users[0],
                                        i = e.comments[0];
                                    return {
                                        channel: t.user.login,
                                        channel_id: Number(i.channelId),
                                        comment_id: i.id,
                                        comment_state: i.state,
                                        event_source: Kt,
                                        game: t.video.game ? t.video.game.name : null,
                                        login: n.name,
                                        play_session_id: E.m.getVideoPlayerTrackingData().playSessionID,
                                        reply_to_comment_id: ue(i) ? i.parentId : null,
                                        user_id: Number(n.id),
                                        vod_id: Number(i.contentId),
                                        vod_title: t.video.title,
                                        vod_ts: i.contentOffset,
                                        vod_type: Object(Bt.a)(t.video.broadcastType)
                                    }
                                }(t, e)), [3, 3];
                            case 2:
                                return a = r.sent(), E.i.error(a.toString(), mn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            pn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: en,
                                    variables: {
                                        videoCreatorID: t.comment.channelId,
                                        commentCreator: t.comment.commenter,
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(jt.SpadeEventType.ChommentDeleted, function(e, t, n) {
                                    return {
                                        author_id: Number(e.comment.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.comment.channelId),
                                        comment_id: e.comment.id,
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.comment.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(Bt.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), pn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            hn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: tn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "ban_user",
                                        author_id: Number(e.bannedUser),
                                        channel_id: Number(e.targetChannel),
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        target_user_id: Number(e.bannedUser),
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_type: Object(Bt.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), hn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            fn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: en,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        commentCreator: t.commenter,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "delete",
                                        author_id: Number(e.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        reply_to_comment_id: e.parentId ? e.parentId : null,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(Bt.a)(n.video.broadcastType),
                                        vod_ts: e.contentOffset
                                    }
                                }(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), fn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            gn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r, o, s;
                    return x.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return l.trys.push([0, 2, , 3]), a = e.getState(), r = h(t) ? a.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                    query: tn,
                                    variables: {
                                        videoID: r
                                    }
                                })];
                            case 1:
                                return o = l.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = null,
                                        a = Object.keys(t.vodChat.comments.comments.parentComments);
                                    if (a.length > 0) {
                                        var r = a[0];
                                        i = t.vodChat.comments.comments.parentComments[r].channelId
                                    }
                                    return {
                                        action: "create",
                                        channel_id: i ? Number(i) : null,
                                        comment_body: e.message,
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        reply_to_comment_id: h(e) ? e.parentId : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: h(e) ? null : Number(e.contentOffsetSeconds),
                                        vod_type: Object(Bt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = l.sent(), E.i.error(s.toString(), gn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            vn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: tn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = e.comment.id,
                                        a = e.comment.channelId;
                                    return {
                                        action: "published" === e.state ? "publish" : "unpublish",
                                        channel_id: Number(a),
                                        comment_id: i,
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: e.comment.contentOffset,
                                        vod_type: Object(Bt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), vn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            bn = function(e, t, n, i) {
                return x.__awaiter(nn, void 0, void 0, function() {
                    var a, r;
                    return x.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Xt,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "sync_vod_to_time",
                                        author_id: Number(e.commenter),
                                        channel: n.user.login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: Kt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_ts: e.contentOffset,
                                        vod_type: Object(Bt.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), E.i.error(r.toString(), bn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            kn = (n("FKWv"), n("+8VM")),
            yn = (n("smiM"), "confirm-button"),
            Sn = "deny-button",
            _n = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x.__extends(t, e), t.prototype.render = function() {
                    return Mt.createElement(Lt._18, {
                        className: "twp-modal",
                        background: Lt.m.Base,
                        color: Lt.F.Alt,
                        padding: 3
                    }, Mt.createElement("h3", null, this.props.title), Mt.createElement(Lt.U, {
                        className: "twp-modal__message",
                        margin: {
                            bottom: 2
                        }
                    }, this.props.children), Mt.createElement(Lt.U, {
                        display: Lt.H.Flex,
                        justifyContent: Lt.T.End
                    }, Mt.createElement(Lt.U, {
                        margin: {
                            right: 1
                        }
                    }, Mt.createElement(Lt.u, {
                        onClick: this.props.onDenyClick,
                        type: Lt.z.Hollow,
                        "data-test-selector": Sn
                    }, Object(E.d)("Cancel", "ConfirmationModal"))), Mt.createElement(Lt.u, {
                        onClick: this.props.onConfirmClick,
                        type: Lt.z.Alert,
                        disabled: this.props.isConfirmDisabled,
                        "data-test-selector": yn
                    }, Object(E.d)("Ok", "ConfirmationModal"))), Mt.createElement(kn.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(Mt.Component),
            Cn = function(e) {
                var t = e,
                    n = Math.floor(t / 3600);
                t -= 3600 * n;
                var i = Math.floor(t / 60);
                t -= 60 * i;
                var a = Math.floor(t);
                return n > 0 ? n + ":" + wn(i) + ":" + wn(a) : i + ":" + wn(a)
            },
            wn = function(e) {
                return e < 10 ? "0" + e : "" + e
            },
            En = (n("9CWX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function() {
                        t.props.onClick(t.props.video.id)
                    }, t
                }
                return x.__extends(t, e), t.prototype.render = function() {
                    return Mt.createElement(Lt.S, {
                        onClick: this.onClickHandler,
                        "data-ts_selectable": !0,
                        "data-tt_content": !0
                    }, Mt.createElement(Lt.U, {
                        className: "search-card-row",
                        fullWidth: !0,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Mt.createElement(Lt.A, {
                        row: !0
                    }, Mt.createElement(Lt.C, {
                        imageSrc: this.props.video.previewImageSrc,
                        imageAlt: this.props.video.title,
                        size: Lt.D.Size8,
                        aspect: Lt.k.Aspect16x9
                    }), Mt.createElement(Lt.B, null, Mt.createElement(Lt.P, {
                        margin: {
                            left: 1
                        }
                    }, Mt.createElement(Lt._22, {
                        type: Lt._27.H5,
                        ellipsis: !0
                    }, this.props.video.title)), Mt.createElement(Lt.P, {
                        margin: {
                            left: 1
                        }
                    }, Mt.createElement(Lt._22, {
                        className: "search-card-row__link",
                        ellipsis: !0
                    }, Object(E.c)(new Date(1e3 * this.props.video.publishedAt), "medium"), Mt.createElement("span", null, " · "), Cn(this.props.video.lengthSeconds)))))))
                }, t
            }(Mt.Component)),
            xn = n("hXeO"),
            Dn = n("5vPJ"),
            On = n("kBA+"),
            Nn = function(e) {
                var t = e.message,
                    n = null,
                    i = t.tokens.map(function(e, t) {
                        switch (e.type) {
                            case Ge.a.Text:
                                return [Mt.createElement("span", {
                                    key: t
                                }, e.content)];
                            case Ge.a.Emote:
                                return [Mt.createElement(xn.a, {
                                    key: t,
                                    emote: e.content
                                }), " "];
                            case Ge.a.Link:
                                return [Mt.createElement("span", {
                                    key: t
                                }, e.content.displayText)];
                            case Ge.a.VideoLink:
                                return n ? [Mt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = Mt.createElement(On.a, {
                                    key: t,
                                    id: e.content.id,
                                    url: e.content.url
                                }));
                            case Ge.a.ClipLink:
                                return n ? [Mt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = Mt.createElement(Dn.a, {
                                    key: t,
                                    slug: e.content.slug,
                                    forceNetworkRequest: !0
                                }));
                            case Ge.a.Mention:
                                return [Mt.createElement("span", {
                                    key: t
                                }, "@", e.content.recipient)];
                            default:
                                return null
                        }
                    });
                return i.push(n), Mt.createElement("span", {
                    key: t.id,
                    className: "qa-mod-message",
                    style: {
                        color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                    }
                }, Array.prototype.concat.apply([], i))
            },
            Tn = n("6Agf"),
            In = /^[\x00-\x7F]*$/,
            Fn = function(e) {
                return !In.test(e)
            },
            An = function(e) {
                return Fn(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
            },
            Un = n("BhyV"),
            Mn = n("RH2O"),
            Ln = n("bkpq"),
            Rn = n("O0Qc"),
            jn = function(e, t, n) {
                return e && t && !n
            },
            Vn = n("HW6M"),
            Bn = n("3T7g"),
            Pn = n("CSlQ"),
            Hn = 15e3,
            Wn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.autoDismissErrorTimeoutId = 0, t.clearDismissTimeout = function() {
                        window.clearTimeout(t.autoDismissErrorTimeoutId)
                    }, t.onManualErrorDismissClickHandler = function() {
                        t.props.onErrorDismissed(!0)
                    }, t.setAutoDismissTimeout = function() {
                        t.autoDismissErrorTimeoutId = window.setTimeout(function() {
                            t.props.onErrorDismissed()
                        }, Hn)
                    }, t
                }
                return x.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setAutoDismissTimeout()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.props.message !== e.message && (this.clearDismissTimeout(), this.setAutoDismissTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    this.clearDismissTimeout()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.message === i().chatReplayFilterError && (e = Mt.createElement(Lt._22, {
                        type: Lt._27.Span
                    }, " ", Mt.createElement(Lt._22, {
                        type: Lt._27.Span,
                        decoration: Lt._25.Underline
                    }, Mt.createElement("a", {
                        onClick: this.props.onMessageClick
                    }, Object(De.d)("Click here to show all messages.", "CommentError"))))), Mt.createElement(Lt._18, {
                        alignItems: Lt.c.Center,
                        background: Lt.m.Base,
                        className: "anim-swoop",
                        color: Lt.F.Error,
                        "data-test-selector": "vod-chat-error",
                        display: Lt.H.Flex,
                        flexWrap: Lt.K.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        position: Lt._3.Absolute,
                        zIndex: Lt._38.Above
                    }, Mt.createElement(Lt._22, {
                        type: Lt._27.Span
                    }, this.props.message, e), Mt.createElement(Lt.U, {
                        alignSelf: Lt.d.Start
                    }, Mt.createElement(Lt.v, {
                        ariaLabel: Object(De.d)("Close", "CommentErrorComponent"),
                        icon: Lt._10.Close,
                        onClick: this.onManualErrorDismissClickHandler
                    })))
                }, t
            }(Mt.Component),
            zn = n("Lx+S"),
            qn = n("ieBa"),
            Gn = n("czpb"),
            Yn = (n("9kjL"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildModerationDashboardURL = function() {
                        return Object(Gn.a)("/" + t.props.videoOwnerLogin + "/dashboard/moderation")
                    }, t.buildModerationPrefsURL = function() {
                        return Object(Gn.a)("/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation")
                    }, t.onReplayModeChange = function(e) {
                        t.props.onReplayModeChange(e.currentTarget.checked)
                    }, t.onTimestampModeChange = function(e) {
                        t.props.onTimestampModeChange(e.currentTarget.checked)
                    }, t
                }
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.props.isUpload || (e = Mt.createElement(Lt.U, {
                        display: Lt.H.Flex,
                        flexWrap: Lt.K.NoWrap,
                        justifyContent: Lt.T.Between,
                        key: "viewerReplayOption",
                        padding: {
                            bottom: 1
                        }
                    }, Mt.createElement(Lt.U, null, Object(E.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), Mt.createElement(Lt.U, {
                        flexShrink: 0
                    }, Mt.createElement(Lt._29, {
                        checked: this.props.isReplayFilterOn,
                        "data-test-selector": "reply-mode",
                        onChange: this.onReplayModeChange
                    }))));
                    var t = [Mt.createElement(Lt._22, {
                        key: "moderationHeader",
                        bold: !0
                    }, Object(E.d)("Mod Tools", "VideoChatSettings"))];
                    return this.props.canSessionEditModerationSettings && t.push(Mt.createElement(Lt.P, {
                        key: "moderationPrefs",
                        display: Lt.H.InlineBlock
                    }, Mt.createElement("a", {
                        target: Object(Gn.b)() ? "_blank" : "",
                        href: this.buildModerationPrefsURL(),
                        "data-test-selector": "video_chat_settings_mod_prefs"
                    }, Object(E.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(Mt.createElement(Lt.P, {
                        key: "moderationDashboard",
                        display: Lt.H.InlineBlock
                    }, Mt.createElement("a", {
                        target: Object(Gn.b)() ? "_blank" : "",
                        href: this.buildModerationDashboardURL(),
                        "data-test-selector": "video_chat_settings_mod_dashboard"
                    }, Object(E.d)("Moderate messages", "VideoChatSettings")))), Mt.createElement(Lt.U, {
                        className: "video-chat__settings",
                        padding: {
                            x: 2,
                            y: 2
                        }
                    }, Mt.createElement(Lt._22, {
                        bold: !0
                    }, Object(E.d)("Viewer Settings", "VideoChatSettings")), e, Mt.createElement(Lt.U, {
                        display: Lt.H.Flex,
                        justifyContent: Lt.T.Between,
                        padding: {
                            bottom: 1
                        }
                    }, Mt.createElement(Lt.U, null, Object(E.d)("Hide timestamps", "VideoChatSettings")), Mt.createElement(Lt.U, {
                        flexShrink: 0
                    }, Mt.createElement(Lt._29, {
                        "data-test-selector": "timestamp-mode",
                        checked: this.props.hideTimestamps,
                        onChange: this.onTimestampModeChange
                    }))), t.length > 1 ? t : null)
                }, t
            }(Mt.Component)),
            Qn = Object(Pn.c)("ChatSettings")(Yn),
            Kn = Object(Mn.a)(function(e) {
                return {
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    hideTimestamps: e.vodChat.comments.hideTimestamps
                }
            }, function(e) {
                return {
                    onReplayModeChange: function(t) {
                        Jt({
                            setting: qt,
                            value: t ? Yt : Qt
                        }), e(J(t))
                    },
                    onTimestampModeChange: function(t) {
                        Jt({
                            setting: Gt,
                            value: t ? Yt : Qt
                        }), e(ee(t))
                    }
                }
            })(Qn),
            Jn = "@",
            Zn = "Enter",
            $n = "Escape",
            Xn = " ",
            ei = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case Zn:
                                e.preventDefault(), n.createComment();
                                break;
                            case Xn:
                                n.maybeUnpauseScrolling();
                                break;
                            case Jn:
                                n.setState({
                                    isMentionPaused: !n.state.isMentionPaused && n.props.isScrollingSynced || n.state.isMentionPaused
                                }), n.props.onScrollPause()
                        }
                    }, n.createComment = function() {
                        if ("" !== n.state.newCommentText) {
                            if (n.props.isPostCooldownActive) return n.setState({
                                showCoolDownState: !0
                            }), void n.props.onError(i().messageCreatedTooQuickError);
                            n.props.onCreateComment(n.state.newCommentText), n.setState({
                                newCommentText: ""
                            }), n.maybeUnpauseScrolling()
                        }
                    }, n.setTextareaRef = function(e) {
                        n.textArea = e
                    }, n.maybeUnpauseScrolling = function() {
                        n.state.isMentionPaused && (n.setState({
                            isMentionPaused: !1
                        }), n.props.onScrollResume())
                    }, n.onChange = function(e) {
                        e.preventDefault(), n.setState({
                            newCommentText: e.currentTarget.value
                        })
                    }, n.onEmoticonClick = function(e) {
                        n.setState({
                            newCommentText: n.state.newCommentText + " " + e
                        }), n.maybeUnpauseScrolling()
                    };
                    var a = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        r = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || a);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: r,
                        canSessionEditModerationSettings: a,
                        newCommentText: "",
                        showCoolDownState: !1
                    }, n
                }
                return x.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isPostCooldownActive || this.setState({
                        showCoolDownState: !1
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    return (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = Mt.createElement(zn.b, null, Mt.createElement(Kn, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    }))), Mt.createElement("div", null, Mt.createElement(Lt.U, {
                        position: Lt._3.Relative
                    }, Mt.createElement(Lt._24, {
                        "data-a-target": "video-chat-input",
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        paddingRight: 30,
                        placeholder: Object(E.d)("Post a message", "CommentInput"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newCommentText
                    }), Mt.createElement(qn.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: Lt._3.Absolute
                    })), Mt.createElement(Lt.U, {
                        margin: {
                            top: 1
                        },
                        justifyContent: Lt.T.Between,
                        display: Lt.H.Flex
                    }, e, Mt.createElement("span", null), " ", Mt.createElement(Lt.u, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, Mt.createElement(Lt.U, {
                        display: Lt.H.Flex
                    }, Mt.createElement("span", null, Object(E.d)("Post at ", "CommentInput")), Mt.createElement(Lt.U, {
                        margin: {
                            x: .5
                        },
                        display: Lt.H.Flex
                    }, Mt.createElement(Lt._9, {
                        asset: Lt._10.GlyphLength
                    })), Mt.createElement("span", null, Cn(this.props.currentVideoTime))))))
                }, t
            }(Mt.Component),
            ti = Object(Pn.c)("MessageInput", {
                autoReportInteractive: !0
            })(ei),
            ni = (n("TnID"), function(e) {
                var t = e.offset,
                    n = e.onClick;
                return Mt.createElement(Lt._30, {
                    align: Lt._31.Left,
                    direction: Lt._32.Top,
                    label: Object(E.d)("Jump to video", "TimeStamp")
                }, Mt.createElement(Lt.P, {
                    className: "vod-message__timestamp",
                    margin: {
                        right: .5
                    },
                    padding: {
                        x: .5
                    }
                }, Mt.createElement("button", {
                    onClick: n
                }, Cn(t))))
            }),
            ii = n("+V/3"),
            ai = n("5Nu7"),
            ri = n("rCmJ"),
            oi = n("2hJ3"),
            si = n("OAwv"),
            li = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                if (t) {
                    var i = si.stringify(t);
                    n.search = i
                }
                return n
            },
            ci = "ban-user",
            di = "delete-comment-button",
            ui = "reply-button",
            mi = "relative-time-title",
            pi = "share-button",
            hi = "share-button-clicked",
            fi = 3e3,
            gi = function(e) {
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
                        if ("function" == typeof t.state.confirmationAction) return Mt.createElement(Lt.U, {
                            padding: {
                                y: 1
                            }
                        }, Mt.createElement(Lt._18, {
                            display: Lt.H.Flex,
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            }
                        }, Mt.createElement(Lt._22, {
                            type: Lt._27.Span
                        }, Object(E.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction"))), Mt.createElement(Lt.U, {
                            display: Lt.H.Flex,
                            justifyContent: Lt.T.Center,
                            alignItems: Lt.c.Center
                        }, Mt.createElement(Lt.U, {
                            display: Lt.H.Inline,
                            padding: {
                                right: 1
                            }
                        }, Mt.createElement(Lt.u, {
                            type: Lt.z.Alert,
                            onClick: t.onContinueClickHandler,
                            "data-test-selector": yn
                        }, Object(E.d)("Yes", "MessageOptionsMenu"))), Mt.createElement(Lt.u, {
                            type: Lt.z.Hollow,
                            onClick: t.onCancelClickHandler,
                            "data-test-selector": Sn
                        }, Object(E.d)("No", "MessageOptionsMenu"))));
                        var e = [];
                        t.props.isExpandedLayout || e.push(Mt.createElement(Lt._18, {
                            key: t.props.context.comment.id,
                            color: Lt.F.Alt2,
                            display: Lt.H.Flex,
                            "data-test-selector": mi
                        }, Mt.createElement(Lt._18, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            },
                            fullWidth: !0,
                            borderBottom: !0
                        }, Mt.createElement(Lt._22, {
                            type: Lt._27.Span
                        }, Object(E.d)("Posted ", "MessageOptionsMenu"), Object(E.g)(t.props.context.comment.createdAt)))), Mt.createElement(Lt._18, {
                            key: t.props.context.comment.id + "2",
                            display: Lt.H.Flex,
                            color: Lt.F.Link
                        }, Mt.createElement(Lt.S, {
                            onClick: t.onReplyClickHandler,
                            "data-test-selector": ui
                        }, Mt.createElement(Lt.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Reply to {userName}", {
                            userName: An(t.props.context.author)
                        }, "MessageOptionsMenu")))));
                        var n = [];
                        t.props.isCurrentUserModerator && n.push(Mt.createElement(Lt.U, {
                            key: t.props.context.comment.id,
                            display: Lt.H.Flex
                        }, Mt.createElement(Lt.S, {
                            alert: !0,
                            onClick: t.onDeleteButtonClickHandler,
                            "data-test-selector": di
                        }, Mt.createElement(Lt._18, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                y: .5
                            },
                            borderBottom: !0
                        }, Object(E.d)("Delete", "MessageOptionsMenu")))), Mt.createElement(Lt.U, {
                            key: t.props.context.comment.id + "2",
                            display: Lt.H.Flex
                        }, Mt.createElement(Lt.S, {
                            alert: !0,
                            onClick: t.onBanUserClickHandler,
                            "data-test-selector": ci
                        }, Mt.createElement(Lt.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Ban User", "MessageOptionsMenu")))));
                        var i = Mt.createElement(Lt.S, {
                            onClick: t.onShareClick,
                            "data-test-selector": pi
                        }, Mt.createElement(Lt.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Copy Link", "MessageOptionsMenu")));
                        t.state.isLinkCopied && (i = Mt.createElement(Lt.u, {
                            fullWidth: !0,
                            icon: Lt._10.Check,
                            type: Lt.z.Success,
                            "data-test-selector": hi
                        }, Mt.createElement(Lt.U, {
                            display: Lt.H.Flex,
                            alignItems: Lt.c.Center,
                            justifyContent: Lt.T.Start
                        }, Object(E.d)("Copied to clipboard", "MessageOptionsMenu"))));
                        var a = Mt.createElement(Lt._18, {
                            display: Lt.H.Flex,
                            fullWidth: !0,
                            key: t.props.context.comment.id + "-share",
                            color: Lt.F.Link
                        }, i);
                        return Mt.createElement(Lt.U, {
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
                            i = li(n, {
                                tt_medium: "video_chat",
                                tt_content: "message_share_link",
                                t: Object(Pt.b)(e.contentOffset),
                                comment: e.id
                            });
                        return Object(oi.a)(i.toString()), t.setState({
                            isLinkCopied: !0
                        }, function() {
                            return t.dismissTimeoutID = setTimeout(function() {
                                t.setState({
                                    isLinkCopied: !1
                                })
                            }, fi)
                        }), Zt(e, i)
                    }, t.onReplyClickHandler = function() {
                        t.props.onReplyClick(An(t.props.context.author)), t.closeMenu()
                    }, t.onBanUserClickHandler = function() {
                        t.setState(function(e) {
                            return x.__assign({}, e, {
                                confirmationAction: t.props.onBanUserClick
                            })
                        })
                    }, t.onDeleteButtonClickHandler = function() {
                        t.setState(function(e) {
                            return x.__assign({}, e, {
                                confirmationAction: t.props.onDeleteCommentClick
                            })
                        })
                    }, t.onContinueClickHandler = function() {
                        "function" == typeof t.state.confirmationAction && t.state.confirmationAction(), t.closeMenu()
                    }, t.onCancelClickHandler = function() {
                        t.setState(function(e) {
                            return x.__assign({}, e, {
                                confirmationAction: null
                            })
                        })
                    }, t
                }
                return x.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.dismissTimeoutID)
                }, t.prototype.render = function() {
                    return Mt.createElement(Lt.U, {
                        position: Lt._3.Relative
                    }, Mt.createElement(ri.a, {
                        onClickOut: this.closeMenu
                    }, Mt.createElement(Lt.v, {
                        ariaLabel: Object(E.d)("Message Actions Menu", "VideoCommentsMenu"),
                        size: Lt.x.Small,
                        type: Lt.w.Secondary,
                        "data-test-selector": "menu-button",
                        icon: Lt._10.More,
                        onClick: this.onToggleMenu
                    }), Mt.createElement(Lt.p, {
                        direction: Lt.q.BottomRight,
                        show: this.state.isMenuOpen,
                        size: Lt.r.Small,
                        offsetX: "0.5rem"
                    }, this.getContent())))
                }, t
            }(Mt.Component),
            vi = (n("k2hM"), "video-chat__message-author"),
            bi = function(e) {
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
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.badgeSets,
                        i = e.currentUser,
                        a = !!i && t.comment.commenter === i.id,
                        r = void 0 !== t.comment.userBadges[ii.a],
                        o = Vn("video-chat__message-menu", {
                            "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                        }),
                        s = Mt.createElement(Lt.U, {
                            className: o,
                            "data-test-selector": "menu-options-wrapper",
                            flexShrink: 0
                        }, Mt.createElement(gi, {
                            context: t,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.onBanUserClickHandler,
                            onClose: this.onMenuCloseHandler,
                            onDeleteCommentClick: this.onDeleteCommentClickHandler,
                            onOpen: this.onMenuOpenHandler,
                            onReplyClick: this.props.onReplyClick
                        })),
                        l = Vn(vi, (u = {}, u["video-chat__message-author--me"] = a, u["video-chat__message-author--creator"] = r, u)),
                        c = a || r ? "" : t.comment.message.userColor,
                        d = Mt.createElement(Lt.P, {
                            padding: {
                                x: .5
                            }
                        }, Mt.createElement("span", null, ":"));
                    return t.comment.message.isAction && (d = Mt.createElement(Lt.P, {
                        padding: {
                            right: .5
                        }
                    }, Mt.createElement("span", null))), Mt.createElement(Lt.U, {
                        alignItems: Lt.c.Start,
                        display: Lt.H.Flex,
                        flexWrap: Lt.K.NoWrap
                    }, Mt.createElement(Lt.U, {
                        flexGrow: 1
                    }, Mt.createElement(Bn.b, {
                        badgesToRender: t.comment.userBadges,
                        badgeSets: n
                    }), Mt.createElement("a", {
                        className: l,
                        "data-test-selector": "comment-author-selector",
                        "data-tt_content": "tab_videos",
                        "data-tt_medium": "video-message-author",
                        href: "/" + t.author.name,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, Mt.createElement(ai.a, {
                        userData: function(e, t) {
                            return {
                                userID: e.id,
                                userDisplayName: e.displayName,
                                userType: Tn.a.User,
                                isIntl: Fn(e.displayName),
                                userLogin: e.name,
                                color: t
                            }
                        }(t.author, c),
                        highlighted: a || r
                    })), Mt.createElement(Lt.U, {
                        display: Lt.H.Inline,
                        className: "video-chat__message",
                        "data-test-selector": "comment-message-selector"
                    }, d, Mt.createElement(Nn, {
                        message: t.comment.message,
                        allowActionTextColors: !0
                    }))), s);
                    var u
                }, t
            }(Mt.Component),
            ki = (n("jvcJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onReplyClickHandler = function() {
                        t.props.replyCommentContext ? t.props.onReplyClick(An(t.props.replyCommentContext.author)) : t.props.onReplyClick()
                    }, t
                }
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = Object(E.d)("Reply", "DashboardModerationReplyButton");
                    return "vod-message" === this.props.context ? Mt.createElement("button", {
                        className: "video-chat-reply-button",
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "parent-reply-button"
                    }, Mt.createElement(Lt.U, {
                        display: Lt.H.Flex
                    }, Mt.createElement(Lt.U, {
                        className: "video-chat-reply-button__icon",
                        display: Lt.H.Flex,
                        padding: {
                            right: .5
                        }
                    }, Mt.createElement(Lt._9, {
                        width: 13,
                        height: 13,
                        asset: Lt._10.Conversations,
                        type: Lt._11.Inherit
                    })), Mt.createElement(Lt._22, {
                        align: Lt._37.Middle,
                        type: Lt._27.Span
                    }, e))) : "mod-dashboard" === this.props.context ? Mt.createElement(Lt.v, {
                        ariaLabel: e,
                        type: Lt.w.Hollow,
                        icon: Lt._10.Conversations,
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "moderation-reply-button",
                        "data-a-selector": "qa-vod-chat-reply-button"
                    }) : Mt.createElement(Lt._18, {
                        color: Lt.F.Link,
                        display: Lt.H.Inline,
                        margin: {
                            left: 1
                        }
                    }, Mt.createElement("button", {
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "reply-reply-button"
                    }, Mt.createElement(Lt._22, {
                        type: Lt._27.Span
                    }, e)))
                }, t
            }(Mt.Component)),
            yi = (n("OvUa"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.submitReply = function() {
                        if ("" !== n.state.newReplyText) {
                            if (n.props.isCreationCoolDownActive) return n.setState({
                                showCoolDownState: !0
                            }), void(n.props.onError && n.props.onError(i().messageCreatedTooQuickError));
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
                        e.key === Zn && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === $n && (e.preventDefault(), n.props.onReplyFormClose())
                    }, n.setTextareaRef = function(e) {
                        return n.textArea = e
                    }, n.state = {
                        newReplyText: t.replyToUserDisplayName ? "@" + t.replyToUserDisplayName + " " : "",
                        showCoolDownState: !1
                    }, n
                }
                return x.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isCreationCoolDownActive || this.setState({
                        showCoolDownState: !1
                    }), e.replyToUserDisplayName && e.replyToUserDisplayName !== this.props.replyToUserDisplayName && this.setState({
                        newReplyText: "@" + e.replyToUserDisplayName + " "
                    })
                }, t.prototype.render = function() {
                    return Mt.createElement(Lt.U, {
                        className: this.props.classNames,
                        position: Lt._3.Relative
                    }, Mt.createElement(Lt._24, {
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        placeholder: Object(E.d)("Reply", "ReplyForm"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newReplyText
                    }), Mt.createElement(qn.a, {
                        attachRight: !0,
                        attachTop: !0,
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        position: Lt._3.Absolute
                    }))
                }, t
            }(Mt.Component)),
            Si = function(e) {
                return Mt.createElement(Lt.U, {
                    padding: {
                        y: .5,
                        left: 1
                    }
                }, Mt.createElement(Lt.U, {
                    className: "vod-message__content"
                }, Mt.createElement(bi, {
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
            _i = "vod-message-reply",
            Ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.makeReplyButtonAndRelativeTime = function(e) {
                        return Mt.createElement(Lt.U, {
                            display: Lt.H.Flex,
                            alignItems: Lt.c.Center
                        }, Mt.createElement(ki, {
                            context: _i,
                            onReplyClick: t.props.onReplyClick,
                            replyCommentContext: e
                        }), Mt.createElement(Lt.P, {
                            margin: {
                                left: .5
                            }
                        }, Mt.createElement(Lt._22, {
                            color: Lt.F.Alt2,
                            fontSize: 7,
                            type: Lt._27.Span
                        }, " • " + Object(E.g)(e.comment.createdAt))))
                    }, t.makeReply = function(e) {
                        var n = null;
                        return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), Mt.createElement("li", {
                            key: e.comment.id
                        }, Mt.createElement(Si, {
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
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.replies.map(this.makeReply.bind(this));
                    return Mt.createElement("ul", null, e)
                }, t
            }(Mt.Component),
            wi = (n("PNnM"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = Mt.createElement(Lt.U, {
                        display: Lt.H.InlineBlock,
                        className: "vod-message__show-more-replies"
                    }, Mt.createElement(Rt, {
                        onClick: this.props.onLoadMoreRepliesClick
                    })));
                    var t = null;
                    this.props.showReplyForm && (t = Mt.createElement(Lt.U, {
                        margin: {
                            top: .5,
                            bottom: 1,
                            x: 1
                        }
                    }, Mt.createElement(yi, {
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                        onError: this.props.onError,
                        onReplyFormClose: this.props.onReplyFormClose,
                        onReplySubmit: this.props.onReplySubmit,
                        replyToUserDisplayName: this.props.replyToUserDisplayName,
                        videoOwnerID: this.props.parentMessage.comment.channelId
                    })));
                    var n = null;
                    return this.props.isExpandedLayout && (n = Mt.createElement(Lt.U, {
                        alignItems: Lt.c.Center,
                        display: Lt.H.Flex
                    }, Mt.createElement(ki, {
                        context: "vod-message",
                        onReplyClick: this.props.onReplyClick,
                        replyCommentContext: this.props.parentMessage
                    }), Mt.createElement(Lt.P, {
                        margin: {
                            left: .5
                        }
                    }, Mt.createElement(Lt._22, {
                        color: Lt.F.Alt2,
                        fontSize: 7,
                        type: Lt._27.Span
                    }, " • " + Object(E.g)(this.props.parentMessage.comment.createdAt))))), Mt.createElement(Lt.U, null, n, Mt.createElement(Lt.U, {
                        margin: {
                            y: .5,
                            left: .5
                        },
                        className: Vn("vod-message__reply", "qa-vod-chat-reply")
                    }, e, Mt.createElement(Ci, {
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
            }(Mt.Component)),
            Ei = (n("WULK"), function(e) {
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
                return x.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (e = Mt.createElement(wi, {
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
                    !1 === this.props.hideTimestamp && (t = Mt.createElement(Lt.U, {
                        className: "vod-message__header",
                        "data-test-selector": "message-timestamp",
                        display: Lt.H.Flex,
                        flexShrink: 0,
                        textAlign: Lt._23.Right
                    }, Mt.createElement(ni, {
                        offset: this.props.messageContext.comment.contentOffset,
                        onClick: this.onTimestampClickHandler
                    })));
                    var n = Vn("vod-message", (a = {}, a["vod-message--focused"] = this.shouldFocusMessage(), a)),
                        i = Mt.createElement(Lt.U, {
                            alignItems: Lt.c.Start,
                            className: n,
                            "data-test-selector": "message-layout",
                            display: Lt.H.Flex,
                            flexWrap: Lt.K.NoWrap,
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                left: this.props.hideTimestamp ? 2 : .5
                            },
                            refDelegate: this.refHandler
                        }, t, Mt.createElement(Lt.U, {
                            fullWidth: !0
                        }, Mt.createElement(bi, {
                            badgeSets: this.props.badgeSets,
                            context: this.props.messageContext,
                            currentUser: this.props.currentUser,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.props.onBanUserClick,
                            onDeleteCommentClick: this.props.onDeleteCommentClick,
                            onDisableSync: this.props.onDisableSync,
                            onReplyClick: this.onReplyClickHandler
                        }), e));
                    return this.props.messageContext.comment.highlight || !1 ? Mt.createElement(Lt.e, {
                        duration: Lt.g.Medium,
                        enabled: !0,
                        type: Lt.i.FadeIn
                    }, i) : i;
                    var a
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return e.highlight !== this.props.highlight || e.isReplayFilterOn !== this.props.isReplayFilterOn || e.hideTimestamp !== this.props.hideTimestamp || t.showReplyForm !== this.state.showReplyForm || e.messageContext.replies.length !== this.props.messageContext.replies.length || t.replyToUserDisplayName !== this.state.replyToUserDisplayName
                }, t.prototype.shouldFocusMessage = function() {
                    return this.props.highlight
                }, t
            }(Mt.Component)),
            xi = (n("cPfx"), function(e) {
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
                return x.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.componentDidUpdate = function() {
                    this.preventScrolling = !0, this.props.isScrollingSynced && (this.preventScrolling = !1, this.componentInitiatedScroll = !0, this.commentListRef.scrollTop = this.commentListRef.scrollHeight)
                }, t.prototype.render = function() {
                    var e = Vn("video-chat__message-list-wrapper", (n = {}, n["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, n)),
                        t = null;
                    return !1 === this.props.isScrollingSynced && (t = Mt.createElement(Lt.P, {
                        className: "video-chat__sync-button",
                        padding: {
                            x: 1
                        },
                        position: Lt._3.Absolute,
                        attachBottom: !0
                    }, Mt.createElement("button", {
                        onClick: this.syncButtonClick
                    }, Object(De.d)("Resume auto scroll", "MessageScrollArea")))), Mt.createElement(Lt._18, {
                        fullHeight: !0,
                        overflow: Lt.Z.Hidden,
                        position: Lt._3.Relative
                    }, Mt.createElement("div", {
                        className: e,
                        onKeyDown: this.allowScrolling,
                        onMouseMove: this.allowScrolling,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onScroll: this.onScroll,
                        onWheel: this.allowScrolling,
                        ref: this.bindCommentListRef,
                        tabIndex: -1
                    }, this.props.children), t);
                    var n
                }, t.prototype.shouldFireOnScroll = function() {
                    return !this.mouseDragging && this.preventScrolling ? (this.componentInitiatedScroll = !1, !1) : !(this.state.firstScroll && !this.props.startSynced) || (this.setState({
                        firstScroll: !1
                    }), !1)
                }, t
            }(Mt.Component)),
            Di = (n("PeVI"), 5e3),
            Oi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        commentAlreadyFocused: !1
                    }, t.badgeSets = new Bn.c([], [], ""), t.createComment = function(e) {
                        var n = {
                            contentId: t.props.videoID,
                            contentOffsetSeconds: t.props.currentVideoTime,
                            contentType: le,
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
                        var n = t.props.errorMessage === i().chatReplayFilterError;
                        e && t.props.shouldSendReplayFilterError && n && t.props.onErrorDismissClick()
                    }, t.onErrorMessageClickHandler = function() {
                        t.props.onError(""), t.props.onTurnOffReplayFilter()
                    }, t.onMessageScrollAreaMount = function() {
                        t.props.highlightedMessageID && "" !== t.props.highlightedMessageID && t.props.onDisableSync()
                    }, t.onError = function(e) {
                        t.props.onError(e)
                    }, t.onLoadMoreRepliesHandler = function(e, n) {
                        var i = t.props.data.video.owner.cheer && t.props.data.video.owner.cheer.emotes || [];
                        t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(Ln.a)(i))
                    }, t.focusedCommentCallback = function(e) {
                        t.setState({
                            commentToFocus: e
                        })
                    }, t.startUnfocusTimeout = function() {
                        t.focusTimer = setTimeout(function() {
                            t.setState({
                                commentAlreadyFocused: !0
                            })
                        }, Di)
                    }, t
                }
                return x.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.onWillMount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                            commentAlreadyFocused: !1
                        })),
                        function(e, t) {
                            return !(t.data.loading || t.data.error || t.data.badges === e.data.badges && t.data.video.owner === e.data.video.owner)
                        }(this.props, e) && (this.badgeSets = new Bn.c([], [], ""), e.data.loading || e.data.error || (this.badgeSets = new Bn.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login)));
                    (0, this.props.onUpdateBegan)(e, this.props)
                }, t.prototype.componentDidUpdate = function() {
                    if (this.props.data.loading || this.props.data.error || !this.props.hasFetchedComments || this.props.latencyTracking.reportInteractive(), this.state.commentToFocus) {
                        (this.state.commentToFocus.nextElementSibling || this.state.commentToFocus).scrollIntoView(!0), this.setState({
                            commentToFocus: void 0
                        }), this.startUnfocusTimeout()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimer), this.props.latencyTracking.reportInteractive(), this.props.onUnmount(), this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this,
                        n = this.props,
                        i = n.comments,
                        a = n.highlightedMessageID,
                        r = n.data;
                    if (this.props.data.loading) e = Mt.createElement(Lt.Y, {
                        fillContent: !0
                    });
                    else if (this.props.data.error) e = Mt.createElement(Lt.U, {
                        alignItems: Lt.c.Center,
                        "data-test-selector": "video-chat-error",
                        fullHeight: !0,
                        justifyContent: Lt.T.Center
                    }, Mt.createElement(Lt._22, {
                        italic: !0
                    }, Object(De.d)("Video Chat is currently unavailable.", "VideoChat")));
                    else {
                        var o = void 0;
                        o = this.props.hasFetchedComments && this.props.offsetRange === ft ? Mt.createElement(Lt.P, {
                            display: Lt.H.Flex,
                            margin: {
                                x: 1,
                                top: 2,
                                bottom: 1
                            },
                            alignItems: Lt.c.Center
                        }, Mt.createElement("li", {
                            "data-test-selector": "no-comments-cta"
                        }, Mt.createElement(Lt.P, {
                            margin: {
                                right: 1
                            }
                        }, Mt.createElement("img", {
                            src: function(e) {
                                return "" + Ze + e + "/1.0"
                            }(65),
                            srcSet: function(e) {
                                return "" + Ze + e + "/2.0 2x"
                            }(65)
                        })), Object(De.d)("Join the chat while watching the video!", "VideoChatComponent"))) : i.map(function(e, n) {
                            var i = !t.state.commentAlreadyFocused && e.comment.id === a,
                                o = n + 1 === t.props.comments.length,
                                s = !t.props.isScrollingSynced && o;
                            return Mt.createElement(Lt.P, {
                                padding: s ? {
                                    bottom: 4
                                } : {},
                                key: e.comment.id,
                                fullWidth: !0
                            }, Mt.createElement("li", null, Mt.createElement(Ei, {
                                badgeSets: t.badgeSets,
                                currentUser: r.currentUser,
                                highlight: i,
                                isCreationCoolDownActive: t.props.isCreationCoolDownActive,
                                isCurrentUserModerator: t.props.isCurrentUserModerator,
                                isExpandedLayout: r.video.broadcastType === pt.a.Upload,
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
                                hideTimestamp: t.props.hideTimestamps
                            })))
                        }), e = Mt.createElement("ul", {
                            style: {
                                minHeight: 0
                            }
                        }, o)
                    }
                    var s = void 0 === this.props.highlightedMessageID,
                        l = null;
                    "" !== this.props.errorMessage && (l = Mt.createElement(Wn, {
                        message: this.props.errorMessage,
                        onErrorDismissed: this.onErrorDismissedHandler,
                        onMessageClick: this.onErrorMessageClickHandler
                    }));
                    var c;
                    return c = this.props.data.loading || this.props.data.error ? Mt.createElement(Lt._2, {
                        "data-test-selector": "message-input-placeholder",
                        height: 90,
                        width: 340
                    }) : Mt.createElement(ti, {
                        currentUser: this.props.data.currentUser,
                        currentVideoTime: this.props.currentVideoTime,
                        onError: this.onError,
                        isModerator: !!this.props.data.video.owner.self && this.props.data.video.owner.self.isModerator,
                        isReplayMode: this.props.isReplayFilterOn,
                        isScrollingSynced: this.props.isScrollingSynced,
                        isPostCooldownActive: this.props.isCreationCoolDownActive,
                        isUpload: r.video.broadcastType === pt.a.Upload,
                        onCreateComment: this.createComment,
                        onScrollPause: this.props.onDisableSync,
                        onScrollResume: this.props.onEnableSync,
                        videoOwnerID: this.props.data.video.owner.id,
                        videoOwnerLogin: this.props.data.video.owner.login
                    }), Mt.createElement(Lt._18, {
                        className: Vn("video-chat", "qa-vod-chat"),
                        display: Lt.H.Flex,
                        background: Lt.m.Alt2,
                        borderLeft: !0,
                        color: Lt.F.Alt,
                        flexDirection: Lt.J.Column,
                        flexShrink: 0,
                        flexWrap: Lt.K.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: Lt._3.Relative
                    }, Mt.createElement(Lt.U, {
                        alignItems: Lt.c.Center,
                        className: "video-chat__header",
                        display: Lt.H.Flex,
                        flexShrink: 0,
                        justifyContent: Lt.T.Center
                    }, Mt.createElement(Lt._22, {
                        type: Lt._27.Span
                    }, Object(De.d)("Chat on Videos", "VideoChatPresentation"))), l, Mt.createElement(xi, {
                        startSynced: s,
                        isScrollingSynced: this.props.isScrollingSynced,
                        onScrollOffBottom: this.props.onDisableSync,
                        onScrollBottom: this.props.onEnableSync,
                        onMount: this.onMessageScrollAreaMount,
                        onSyncScrollClick: this.props.onEnableSync
                    }, Mt.createElement(Lt.U, {
                        display: Lt.H.Flex,
                        flexDirection: Lt.J.Column,
                        fullHeight: !0,
                        justifyContent: Lt.T.End
                    }, Mt.createElement(Lt.P, {
                        display: Lt.H.Flex,
                        alignItems: Lt.c.End,
                        fullWidth: !0
                    }, e))), Mt.createElement(Lt.U, {
                        className: "video-chat__input",
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 2
                        },
                        flexShrink: 0,
                        fullWidth: !0
                    }, c))
                }, t.prototype.onCreate = function(e) {
                    this.props.isLoggedIn ? this.props.onCreate(e) : this.props.onShowLogin()
                }, t
            }(Mt.Component),
            Ni = Object(Pn.c)("VideoChat")(Oi),
            Ti = n("0TFF"),
            Ii = 2,
            Fi = Object(Mn.a)(function(e, t) {
                var n = {
                    comments: [],
                    currentVideoTime: e.vodChat.comments.currentVideoTime,
                    cursor: e.vodChat.comments.cursor,
                    errorMessage: e.vodChat.comments.errorMessage,
                    hasFetchedComments: e.vodChat.comments.hasLoadedData,
                    hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                    isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                    isCurrentUserModerator: !1,
                    isLoggedIn: Object(Me.d)(e),
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                    offsetRange: wt(e.vodChat.comments.comments),
                    replyCursorMap: e.vodChat.comments.replyCursorMap,
                    shouldSendReplayFilterError: !1,
                    hideTimestamps: e.vodChat.comments.hideTimestamps,
                    videoID: t.videoID
                };
                if (void 0 !== t.highlightedMessageID && (n.highlightedMessageID = t.highlightedMessageID), void 0 !== t.highlightTimestamp && (n.highlightTimestamp = t.highlightTimestamp), !t.data.loading && !t.data.error) {
                    var i = t.data,
                        a = i.currentUser,
                        r = i.video;
                    null !== a && a.roles && (n.isCurrentUserModerator = function(e, t) {
                        var n = e.id === t.id,
                            i = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
                        return !!t.self && t.self.isModerator || i || n
                    }(a, r.owner)), n.comments = vt(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = jn(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== pt.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
                }
                return n
            }, function(e, t) {
                return {
                    onUpdateBegan: function(n, i) {
                        if (i.videoID === n.videoID) {
                            if (!n.hasFetchedComments) {
                                var a = {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                };
                                if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                                return n.highlightedMessageID && (a.highlightedMessageID = n.highlightedMessageID), void e(_(ln, a))
                            }
                            if (n.offsetRange !== ft) {
                                if (function(e) {
                                        return y(e.cursor) && function(e) {
                                            var t = e.offsetEndTime - e.offsetThreshold;
                                            return e.currentVideoTime >= t && e.currentVideoTime <= e.offsetEndTime
                                        }({
                                            currentVideoTime: e.currentVideoTime,
                                            offsetEndTime: e.offsetEndTime,
                                            offsetThreshold: e.offsetThreshold
                                        })
                                    }({
                                        cursor: n.cursor,
                                        currentVideoTime: n.currentVideoTime,
                                        offsetEndTime: n.offsetRange.endSec,
                                        offsetThreshold: Ii
                                    })) return void e(_(ln, {
                                    bitsConfig: t.bitsConfig,
                                    cursor: n.cursor.future,
                                    videoID: n.videoID
                                }));
                                if (function(e) {
                                        var t = e.currentVideoTime < e.offsetRange.beginSec,
                                            n = e.currentVideoTime > e.offsetRange.endSec;
                                        return t && S(e.cursor) || n && y(e.cursor)
                                    }(n)) return void e(_(ln, {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                }))
                            }
                        } else e(oe(n.videoID))
                    },
                    onCreate: function(t) {
                        if (Object(Rn.m)(t.message)) {
                            var n = Object(De.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                            e(R(n))
                        } else e(_(cn, t)), e(C(gn, t))
                    },
                    onError: function(t) {
                        e(R(t))
                    },
                    onErrorDismissClick: function() {
                        e($())
                    },
                    onUnmount: function() {
                        e(W())
                    },
                    onLoadMoreReplies: function(t, n, i, a) {
                        e(_(ln, k(t, n, i, a)))
                    },
                    onDisableSync: function() {
                        e(Q())
                    },
                    onEnableSync: function() {
                        e(G())
                    },
                    onShowLogin: t.onShowLogin,
                    onBanUser: function(t) {
                        e(_(At, t)), e(C(hn, t))
                    },
                    onDeleteComment: function(t) {
                        e(_(dn, t)), e(C(fn, t))
                    },
                    onPlayerSeekRequest: function(n, i) {
                        t.onPlayerSeekRequest(n), void 0 !== i && e(C(bn, i))
                    },
                    onTurnOffReplayFilter: function() {
                        e(J(!1))
                    },
                    onWillMount: function() {
                        e(ne())
                    }
                }
            }, function(e, t, n) {
                var a = t.onDisableSync;
                e.isScrollingSynced || (a = function() {});
                var r = t.onCreate;
                return e.shouldSendReplayFilterError && (r = function(e) {
                    t.onError(i().chatReplayFilterError), t.onCreate(e)
                }), x.__assign({}, e, t, {
                    onDisableSync: a,
                    onCreate: r,
                    data: n.data
                })
            })(Ni),
            Ai = Object(Un.graphql)(Ti, {
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
                        i = Object(Ln.a)(n && !n.loading && !n.error && n.video.owner.cheer && n.video.owner.cheer.emotes || []),
                        a = {};
                    return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (a = n.currentUser.blockedUsers.reduce(function(e, t) {
                        return e[t.id] = !0, e
                    }, {})), x.__assign({}, t, {
                        data: n,
                        bitsConfig: i,
                        blockedUsers: a
                    })
                }
            })(Fi);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return Ke
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "C", function() {
            return bt
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "p", function() {
            return W
        }), n.d(t, "r", function() {
            return se
        }), n.d(t, "w", function() {
            return y
        }), n.d(t, "x", function() {
            return S
        }), n.d(t, "o", function() {
            return k
        }), n.d(t, "n", function() {
            return At
        }), n.d(t, "z", function() {
            return Ft
        }), n.d(t, "B", function() {
            return Ut
        }), n.d(t, "D", function() {
            return _
        }), n.d(t, "E", function() {
            return C
        }), n.d(t, "l", function() {
            return Rt
        }), n.d(t, "q", function() {
            return cn
        }), n.d(t, "s", function() {
            return dn
        }), n.d(t, "A", function() {
            return ln
        }), n.d(t, "J", function() {
            return un
        }), n.d(t, "F", function() {
            return hn
        }), n.d(t, "G", function() {
            return gn
        }), n.d(t, "H", function() {
            return fn
        }), n.d(t, "I", function() {
            return vn
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return "pending_review"
        }), n.d(t, "d", function() {
            return "unpublished"
        }), n.d(t, "a", function() {
            return "pending_review_spam"
        }), n.d(t, "c", function() {
            return "published"
        }), n.d(t, !1, function() {}), n.d(t, "y", function() {
            return ue
        }), n.d(t, "e", function() {
            return _n
        }), n.d(t, !1, function() {}), n.d(t, "k", function() {
            return En
        }), n.d(t, "h", function() {
            return Nn
        }), n.d(t, "u", function() {
            return Cn
        }), n.d(t, "v", function() {
            return ht
        }), n.d(t, "t", function() {
            return An
        }), n.d(t, "f", function() {
            return "mod-dashboard"
        }), n.d(t, "g", function() {
            return "mod-comment"
        }), n.d(t, "m", function() {
            return Ai
        }), n.d(t, !1, function() {}), n.d(t, "j", function() {
            return yi
        }), n.d(t, "i", function() {
            return ki
        })
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                a = new Date(0);
            return a.setFullYear(t, n, i - 1), a.setHours(0, 0, 0, 0), a
        }
    },
    mXYp: function(e, t, n) {
        var i = n("YRFD"),
            a = n("xA5w"),
            r = n("25hp"),
            o = n("GI7G"),
            s = n("uyaC"),
            l = 1440,
            c = 2520,
            d = 43200,
            u = 86400;
        e.exports = function(e, t, n) {
            var m = n || {},
                p = i(e, t),
                h = m.locale,
                f = s.distanceInWords.localize;
            h && h.distanceInWords && h.distanceInWords.localize && (f = h.distanceInWords.localize);
            var g, v, b = {
                addSuffix: Boolean(m.addSuffix),
                comparison: p
            };
            p > 0 ? (g = a(e), v = a(t)) : (g = a(t), v = a(e));
            var k, y = r(v, g),
                S = v.getTimezoneOffset() - g.getTimezoneOffset(),
                _ = Math.round(y / 60) - S;
            if (_ < 2) return m.includeSeconds ? y < 5 ? f("lessThanXSeconds", 5, b) : y < 10 ? f("lessThanXSeconds", 10, b) : y < 20 ? f("lessThanXSeconds", 20, b) : y < 40 ? f("halfAMinute", null, b) : f(y < 60 ? "lessThanXMinutes" : "xMinutes", 1, b) : 0 === _ ? f("lessThanXMinutes", 1, b) : f("xMinutes", _, b);
            if (_ < 45) return f("xMinutes", _, b);
            if (_ < 90) return f("aboutXHours", 1, b);
            if (_ < l) return f("aboutXHours", Math.round(_ / 60), b);
            if (_ < c) return f("xDays", 1, b);
            if (_ < d) return f("xDays", Math.round(_ / l), b);
            if (_ < u) return k = Math.round(_ / d), f("aboutXMonths", k, b);
            if ((k = o(v, g)) < 12) return f("xMonths", Math.round(_ / d), b);
            var C = k % 12,
                w = Math.floor(k / 12);
            return C < 3 ? f("aboutXYears", w, b) : C < 9 ? f("overXYears", w, b) : f("almostXYears", w + 1, b)
        }
    },
    mbxv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("U7vG"),
            a = (n.n(i), n("+V/3")),
            r = n("Odds"),
            o = n("2IkU"),
            s = (n.n(o), "https://www.twitch.tv/products/turbo?ref=chat_badge"),
            l = function(e) {
                var t = e.badge,
                    n = i.createElement("img", {
                        alt: t.title,
                        className: "chat-badge",
                        src: t.image1x,
                        srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                    }),
                    o = function(e) {
                        switch (e.clickAction) {
                            case a.d:
                                return e.clickURL;
                            case a.b:
                                return e.channelName ? function(e) {
                                    return "https://www.twitch.tv/" + e + "/subscribe?ref=in_chat_subscriber_link"
                                }(e.channelName) : "";
                            case a.c:
                                return s;
                            default:
                                return ""
                        }
                    }(t);
                return "" !== o && (n = i.createElement("a", {
                    href: o,
                    target: "_blank"
                }, n)), i.createElement(r._30, {
                    key: t.image1x,
                    label: t.title,
                    display: r.H.Inline,
                    align: r._31.Left,
                    offsetY: "0.9rem",
                    "data-a-target": "chat-badge"
                }, n)
            }
    },
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                a = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(r, 2) + ":" + i(a, 2) + ":" + i(n, 2) : r ? r + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
        }
    },
    n2E0: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            switch (e) {
                case i.a.Archive:
                    return a.SpadeVideoBroadcastType.Archive;
                case i.a.Highlight:
                    return a.SpadeVideoBroadcastType.Highlight;
                case i.a.Upload:
                    return a.SpadeVideoBroadcastType.Upload;
                case i.a.WatchParty:
                    return a.SpadeVideoBroadcastType.WatchParty;
                case i.a.PastPremiere:
                    return a.SpadeVideoBroadcastType.PastPremiere;
                case i.a.PremiereUpload:
                    return a.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        }, t.a = function(e) {
            switch (e) {
                case r.b:
                    return a.PageviewContent.PopularVideos;
                case r.a:
                    return a.PageviewContent.RecentVideos;
                default:
                    return e
            }
        };
        var i = n("6WAQ"),
            a = n("vH/s"),
            r = n("3yQz")
    },
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
            a = 6e4,
            r = 864e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * a,
                l = o.getTime() - o.getTimezoneOffset() * a;
            return Math.round((s - l) / r)
        }
    },
    nk30: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = i(e),
                r = a.getDay(),
                o = 6 + (r < n ? -7 : 0) - (r - n);
            return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + o), a
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
    nrdj: function(e, t, n) {
        "use strict";
        var i, a = n("HW6M"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("iydZ"),
            l = n("CFVp"),
            c = n("qe65"),
            d = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(i || (i = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(l.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === d.H.Inline || e.display === d.H.InlineFlex || e.display === d.H.InlineBlock,
                m = null,
                p = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--extremely-small": e.size === i.ExtremelySmall
                });
            if (e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(d.P, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? d._23.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var f = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer--inline": u
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-image--extremely-small": e.size === i.ExtremelySmall
                }),
                g = r.createElement(c.a, {
                    className: f,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (g = null), r.createElement(d.U, {
                className: "cheermote-for-amount",
                display: e.display
            }, g, m)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        })
    },
    oNnY: function(e, t, n) {
        var i = n("zZbG"),
            a = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return a(e, i(e) + n)
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
                a = i(t);
            return 12 * (n.getFullYear() - a.getFullYear()) + (n.getMonth() - a.getMonth())
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
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
                                    value: "slug"
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
                                    value: "curator"
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
                                            value: "displayName"
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
                                    value: "broadcaster"
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
                                            value: "displayName"
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
                                    value: "game"
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
                                            value: "displayName"
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
                                    value: "thumbnailURL"
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
                end: 166
            }
        };
        n.loc.source = {
            body: "query ClipsChatCard_Clip($slug: ID!) {\nclip(slug: $slug) {\nid\nslug\nurl\ncurator {\ndisplayName\n}\nbroadcaster {\ndisplayName\n}\ngame {\ndisplayName\n}\ntitle\nthumbnailURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
                                    value: "recommendations"
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    q8Cw: function(e, t) {},
    qNYo: function(e, t, n) {
        var i = n("xA5w"),
            a = n("9Jn5"),
            r = n("NKE6"),
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = i(e),
                s = i(t),
                l = r(n, s),
                c = Math.abs(a(n, s));
            return n = o(n, l * c), l * (c - (r(n, s) === -l))
        }
    },
    qPxx: function(e, t, n) {
        var i = n("LLTj");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "animatedPreviewURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                directives: [],
                                selectionSet: null
                            }, {
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
                                    value: "name"
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                                    value: "viewingHistory"
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
                                            value: "position"
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 263
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\n}",
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
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Ritual = 26] = "Ritual", e[e.Notice = 27] = "Notice", e[e.Info = 28] = "Info", e[e.BadgesUpdated = 29] = "BadgesUpdated", e[e.Purchase = 30] = "Purchase", e[e.BitsCharity = 31] = "BitsCharity", e[e.CrateGift = 32] = "CrateGift"
        }(i || (i = {}))
    },
    rBmI: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                a = n - n % 3;
            return t.setMonth(a, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var i = n("xA5w"),
            a = n("Bb5e"),
            r = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = r(n, o),
                l = Math.abs(a(n, o));
            return n.setFullYear(n.getFullYear() - s * l), s * (l - (r(n, o) === -s))
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
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "publishedAt"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
    sZED: function(e, t) {},
    sdTe: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                a = i(t);
            return n.getTime() === a.getTime()
        }
    },
    sgUC: function(e, t) {},
    smiM: function(e, t) {},
    t6pj: function(e, t, n) {
        var i = n("YRFD"),
            a = n("xA5w"),
            r = n("25hp"),
            o = n("uyaC"),
            s = 1440,
            l = 43200,
            c = 525600;
        e.exports = function(e, t, n) {
            var d = n || {},
                u = i(e, t),
                m = d.locale,
                p = o.distanceInWords.localize;
            m && m.distanceInWords && m.distanceInWords.localize && (p = m.distanceInWords.localize);
            var h, f, g = {
                addSuffix: Boolean(d.addSuffix),
                comparison: u
            };
            u > 0 ? (h = a(e), f = a(t)) : (h = a(t), f = a(e));
            var v, b, k, y, S, _ = Math[d.partialMethod ? String(d.partialMethod) : "floor"],
                C = r(f, h),
                w = f.getTimezoneOffset() - h.getTimezoneOffset(),
                E = _(C / 60) - w;
            if ("s" === (v = d.unit ? String(d.unit) : E < 1 ? "s" : E < 60 ? "m" : E < s ? "h" : E < l ? "d" : E < c ? "M" : "Y")) return p("xSeconds", C, g);
            if ("m" === v) return p("xMinutes", E, g);
            if ("h" === v) return b = _(E / 60), p("xHours", b, g);
            if ("d" === v) return k = _(E / s), p("xDays", k, g);
            if ("M" === v) return y = _(E / l), p("xMonths", y, g);
            if ("Y" === v) return S = _(E / c), p("xYears", S, g);
            throw new Error("Unknown unit: " + v)
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
                        alias: null,
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
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "broadcastType"
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
                                    value: "game"
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
                                            value: "name"
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
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                a = i(e),
                r = a.getDay(),
                o = (r < n ? 7 : 0) + r - n;
            return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a
        }
    },
    uiPj: function(e, t, n) {
        "use strict";

        function i(e) {
            return f.createElement(L.P, {
                ellipsis: !0
            }, f.createElement("li", null, e.children))
        }

        function a(e) {
            switch (e.level) {
                case 4:
                    return f.createElement(L._22, {
                        type: L._27.H4,
                        ellipsis: !0
                    }, e.children);
                case 5:
                    return f.createElement(L._22, {
                        type: L._27.H5,
                        ellipsis: !0
                    }, e.children);
                case 6:
                    return f.createElement(L._22, {
                        type: L._27.H6,
                        ellipsis: !0
                    }, e.children);
                default:
                    return f.createElement(L._22, {
                        type: L._27.H3,
                        ellipsis: !0
                    }, e.children)
            }
        }

        function r(e) {
            return f.createElement(L._22, {
                type: L._27.P,
                ellipsis: !0
            }, e.children)
        }

        function o(e, t) {
            var n = this;
            return function() {
                return m.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return m.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = "kraken/videos/" + e, [4, le.a.delete(n)];
                            case 1:
                                if (200 !== (i = a.sent()).status) {
                                    if (i && i.error) throw new Error(JSON.stringify(i.error));
                                    if (i && i.requestError) throw i.requestError;
                                    throw new Error("Could not delete video. Request returned " + i.status)
                                }
                                return J.o.history.push(Object(te.d)(t)), [2]
                        }
                    })
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("RH2O"),
            l = n("2KeS"),
            c = n("+xm8"),
            d = n("f2i/"),
            u = n("m9YJ"),
            m = n("TToO"),
            p = n("HW6M"),
            h = n("OAwv"),
            f = n("U7vG"),
            g = n("BhyV"),
            v = n("6sO2"),
            b = n("yWCw"),
            k = n("j7/Y"),
            y = n("NXs7"),
            S = n("VAT8"),
            _ = n("JpYe"),
            C = n("w9tK"),
            w = n("vH/s"),
            E = n("n2E0"),
            x = n("SI0h"),
            D = n("CSlQ"),
            O = n("BC6Q"),
            N = n("RxMT"),
            T = n("WzS7"),
            I = n("Aj/L"),
            F = n("wuJz"),
            A = n("7vx8"),
            U = n("GJxf"),
            M = n("dc2a"),
            L = n("Odds"),
            R = n("VUr8"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && Object(M.a)(this.props.data.currentUser.viewedVideos) || null;
                    if (!(!this.props.data || this.props.data.loading || e && 0 !== e.length)) return null;
                    e = function(e, t) {
                        return e.filter(function(e) {
                            if (!e.self || !e.self.viewingHistory || !e.self.viewingHistory.position) return !1;
                            var n = e.self.viewingHistory.position / e.lengthSeconds;
                            return !(n <= .05 || n >= .95) && e.id !== t
                        }).sort(function(e, t) {
                            return Object(F.compareDesc)(new Date(e.publishedAt), new Date(t.publishedAt))
                        })
                    }(e || [], this.props.currentlyWatchingVideoID);
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return f.createElement(L.U, {
                        padding: {
                            bottom: 2
                        }
                    }, f.createElement(L._22, {
                        type: L._27.H4,
                        transform: L._26.Uppercase,
                        color: L.F.Alt2
                    }, Object(v.d)("Finish Watching", "ResumeWatchingVideoCarousel")), f.createElement(U.a, {
                        tracking: {
                            content: w.PageviewContent.ResumeWatchingVideos,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {
                                source_item_type: w.TwitchDataType.User,
                                source_channel: t
                            }
                        },
                        videos: e
                    }))
                }, t
            }(f.Component),
            V = Object(g.compose)(Object(A.a)(R, {
                skip: function(e) {
                    return !e.isLoggedIn || !e.firstPageLoaded
                }
            }), Object(D.c)("ResumeWatchingVideoCarousel", {
                autoReportInteractive: !0
            }))(j),
            B = Object(s.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(I.d)(e)
                }
            })(V),
            P = n("fc0G"),
            H = n("Ic9h"),
            W = n("fTsm"),
            z = n("/nNw"),
            q = n("F8kA"),
            G = (n("sZED"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(L.U, {
                        "data-test-selector": "private-video-banner-layout"
                    }, this.renderHeader())
                }, t.prototype.renderHeader = function() {
                    var e = this;
                    return f.createElement(L.e, {
                        type: L.i.SlideInBottom,
                        delay: L.f.Medium,
                        duration: L.g.Medium,
                        enabled: !0
                    }, f.createElement(L._18, {
                        className: "private-video-banner__header",
                        display: L.H.Flex,
                        background: L.m.AccentAlt2,
                        color: L.F.Overlay,
                        alignItems: L.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fontSize: L.L.Size6,
                        "data-test-selector": "private-video-banner-header"
                    }, f.createElement(L.U, {
                        display: L.H.Flex,
                        alignItems: L.c.Center,
                        justifyContent: L.T.Center
                    }, f.createElement(L._9, {
                        asset: L._10.Lock,
                        width: 20,
                        height: 20
                    })), f.createElement(L._22, null, Object(v.d)("This video is private. To Premiere or edit your video, visit your <x:link>video manager</x:link>", {
                        "x:link": function(t) {
                            return f.createElement(q.a, {
                                "data-test-selector": "private-video-banner-header-link",
                                key: "private-video-banner-" + e.props.ownerLogin,
                                to: {
                                    pathname: "/" + e.props.ownerLogin + "/manager",
                                    state: {
                                        medium: w.PageviewMedium.VideoWatchPage,
                                        content: w.PageviewContent.Video
                                    }
                                }
                            }, f.createElement(L._22, {
                                type: L._27.Span,
                                color: L.F.OverlayAlt
                            }, t))
                        }
                    }, "PrivateVideoBanner"))))
                }, t
            }(f.Component)),
            Y = n("jcM9"),
            Q = n("lfvs"),
            K = n("6WAQ"),
            J = n("J4ib"),
            Z = {
                skipHtml: !0,
                softBreak: "br",
                allowedTypes: ["Emph", "Strong", "Paragraph", "Heading", "Item", "List", "Text", "Link", "Softbreak", "Hardbreak"]
            },
            $ = "qa-description-container",
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isExpanded: !1
                    }, t.renderDescription = function() {
                        if (t.props.description) {
                            var e, n = function(e) {
                                return e ? e.split(/ {2}\n|\n(?!\d+\.)(?!\*|- )|^\n/gm) : []
                            }(t.props.description);
                            if (t.state.isExpanded) e = n.map(function(e, t) {
                                return 0 === e.length ? f.createElement("br", {
                                    key: "desc-line" + t
                                }) : f.createElement(Q, m.__assign({
                                    key: "desc-line" + t,
                                    source: e
                                }, Z))
                            });
                            else {
                                var o = n[0].split("\n")[0];
                                e = f.createElement(Q, m.__assign({
                                    source: o,
                                    renderers: {
                                        Paragraph: r,
                                        Heading: a,
                                        Item: i
                                    }
                                }, Z))
                            }
                            return f.createElement(L.U, {
                                "data-test-selector": $
                            }, f.createElement(L._36, null, e), t.state.isExpanded ? t.renderBroadcastType(t.props.broadcastType) : null)
                        }
                    }, t.toggleExpand = function() {
                        t.setState(function(e) {
                            return {
                                isExpanded: !e.isExpanded
                            }
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.props.description ? f.createElement(L._18, {
                        background: L.m.Base,
                        "data-test-selector": "qa-more-info-box"
                    }, f.createElement(L.U, {
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, this.renderDescription()), f.createElement(L._18, {
                        alignContent: L.b.Center,
                        borderTop: !0,
                        display: L.H.Flex,
                        justifyContent: L.T.Center,
                        padding: {
                            y: .5
                        }
                    }, f.createElement(L.u, {
                        "data-test-selector": "qa-toggle-expand-button",
                        type: L.z.Text,
                        onClick: this.toggleExpand
                    }, this.state.isExpanded ? Object(J.d)("Show Less", "MoreInfoBox") : Object(J.d)("Show More", "MoreInfoBox")))) : null
                }, t.prototype.renderBroadcastType = function(e) {
                    if (!e) return f.createElement(L._2, {
                        lineCount: 1,
                        width: 80
                    });
                    var t;
                    switch (e) {
                        case K.a.Archive:
                            t = Object(J.d)("Past Broadcast", "MoreInfoBox");
                            break;
                        case K.a.Upload:
                            t = Object(J.d)("Upload", "MoreInfoBox");
                            break;
                        case K.a.PastPremiere:
                            t = Object(J.d)("Past Premiere", "MoreInfoBox");
                            break;
                        case K.a.Highlight:
                            t = Object(J.d)("Highlight", "MoreInfoBox");
                            break;
                        default:
                            t = Object(J.d)("Unknown", "MoreInfoBox")
                    }
                    return f.createElement(L._22, {
                        "data-test-selector": "qa-broadcast-type-text"
                    }, Object(J.d)("Video Category: {broadcastType}", {
                        broadcastType: t
                    }, "MoreInfoBox"))
                }, t = m.__decorate([Object(D.c)("MoreInfoBox", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            ee = n("cSst"),
            te = n("NY9D"),
            ne = /\S/,
            ie = function(e) {
                var t = e.video,
                    n = !!t.publishedAt,
                    i = Object(v.g)(new Date(t.publishedAt)),
                    a = t.title && "" !== t.title && ne.test(t.title),
                    r = "";
                return a && n ? r = t.title + " · " + i : t.title && a && !n ? r = t.title : !a && n && (r = i), f.createElement(L._18, {
                    margin: {
                        bottom: .5
                    }
                }, f.createElement(L._22, {
                    ellipsis: !0,
                    title: t.title,
                    fontSize: L.L.Size4
                }, r))
            },
            ae = Object(D.c)("VideoInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.video,
                    n = null;
                if (t && t.scope === z.VideoScope.Private && (n = f.createElement(L._18, {
                        fontSize: L.L.Size4
                    }, f.createElement(L._0, {
                        label: Object(v.d)("Private", "VideoTitle")
                    }))), t && null === t.game) return f.createElement("div", null, n, f.createElement(ie, {
                    video: t
                }));
                var i = null;
                null === t ? i = f.createElement(L._2, {
                    "data-test-selector": "game-image-placeholder",
                    height: 55,
                    width: 40
                }) : null !== t.game && (i = f.createElement(q.a, {
                    to: Object(te.c)(t.game.name),
                    "data-a-target": "video-info-game-boxart-link"
                }, f.createElement(L.C, {
                    imageSrc: t.game.boxArtURL,
                    imageAlt: t.game.name,
                    aspect: L.k.BoxArt,
                    size: L.D.Size4
                })));
                var a = null;
                return null === t ? a = f.createElement(L.U, {
                    "data-test-selector": "info-placeholder",
                    display: L.H.Flex,
                    flexDirection: L.J.Column
                }, f.createElement(L._2, {
                    lineCount: 1,
                    width: 320
                }), f.createElement(L._2, {
                    lineCount: 1,
                    width: 240
                })) : null !== t.game && (a = f.createElement("div", null, n, f.createElement(ie, {
                    video: t
                }), f.createElement(ee.a, {
                    linkTo: {
                        pathname: Object(te.c)(t.game.name),
                        state: {
                            content: w.PageviewContent.Game,
                            medium: w.PageviewMedium.VideoWatchPage
                        }
                    },
                    tooltip: Object(v.d)("Game", "VideoInfo"),
                    svgAsset: L._10.NavGames,
                    title: t.game.name,
                    "data-a-target": "video-info-game-link"
                }))), f.createElement(L.A, {
                    row: !0
                }, f.createElement(L.U, {
                    flexShrink: 0,
                    margin: {
                        right: 1
                    }
                }, i), f.createElement(L.B, null, a))
            }),
            re = n("CIox"),
            oe = n("V5M+"),
            se = n("oSFp"),
            le = n("9u8h"),
            ce = n("+8VM"),
            de = n("mi6k"),
            ue = (n("8UBU"), function(e) {
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
                            return m.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return m.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.video.owner) return this.setState({
                                                errorMessage: Object(J.d)("This video is temporarily unable to be deleted.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(this.props.video.id, this.props.video.owner.login)];
                                        case 2:
                                            return t.sent(), this.props.onClose(), [3, 4];
                                        case 3:
                                            return e = t.sent(), this.setState({
                                                errorMessage: Object(J.d)("Unexpected error, please try again.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), J.j.withCategory("video delete modal").error(e, "Attempted to delete video."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(L._18, {
                        background: L.m.Base,
                        "data-test-selector": "qa-video-delete-modal",
                        className: "video-delete-modal",
                        padding: 3
                    }, f.createElement(L.U, null, f.createElement(L.U, {
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(L._22, {
                        type: L._27.H4
                    }, Object(J.d)("Delete Video", "VideoDeleteModal"))), this.renderErrorMessage(), f.createElement(L._22, {
                        type: L._27.P,
                        color: L.F.Alt2
                    }, Object(J.d)("Are you sure you want to delete this video?", "VideoDeleteModal"), f.createElement("br", null), Object(J.d)("This action cannot be undone.", "VideoDeleteModal"))), f.createElement(L._18, {
                        padding: {
                            y: 2
                        },
                        margin: {
                            y: 2
                        },
                        borderTop: !0,
                        borderBottom: !0
                    }, f.createElement(L.A, {
                        row: !0
                    }, f.createElement("img", {
                        alt: this.props.video.title || Object(J.d)("Video Thumbnail", "VideoDeleteModal"),
                        src: this.props.video.previewThumbnailURL,
                        className: "video-delete-modal__thumb"
                    }), f.createElement(L.B, null, f.createElement(L.U, {
                        margin: {
                            left: 1
                        }
                    }, f.createElement(L.U, {
                        ellipsis: !0
                    }, this.props.video.title), f.createElement(L._18, {
                        ellipsis: !0,
                        color: L.F.Alt2
                    }, Object(J.d)("{created, date, medium}", {
                        created: new Date(this.props.video.publishedAt)
                    }, "VideoDeleteModal"), " · ", Object(de.a)(this.props.video.lengthSeconds)), f.createElement(L._18, {
                        ellipsis: !0,
                        color: L.F.Alt2
                    }, Object(J.d)("{viewCount, plural, one {# View} other {# Views}}", {
                        viewCount: this.props.video.viewCount
                    }, "VideoDeleteModal")))))), f.createElement(L.U, {
                        display: L.H.Flex,
                        justifyContent: L.T.Center
                    }, f.createElement(L.U, {
                        display: L.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, f.createElement(L.u, {
                        type: L.z.Text,
                        onClick: this.onClickCancel,
                        "data-test-selector": "qa-video-delete-modal-cancel-button"
                    }, Object(J.d)("Cancel", "VideoDeleteModal"))), f.createElement(L.U, {
                        display: L.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, f.createElement(L.u, {
                        type: L.z.Alert,
                        onClick: this.onClickDelete,
                        disabled: this.state.requestInProgress,
                        "data-test-selector": "qa-video-delete-modal-delete-button"
                    }, Object(J.d)("Delete", "VideoDeleteModal")))), f.createElement(ce.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t.prototype.renderErrorMessage = function() {
                    return this.state.errorMessage ? f.createElement(L._18, {
                        className: "video-delete-modal__error-container",
                        fullWidth: !0,
                        "data-test-selector": "qa-video-delete-modal-error-container",
                        margin: {
                            bottom: 1
                        },
                        padding: 1
                    }, f.createElement(L._22, {
                        color: L.F.Error
                    }, this.state.errorMessage)) : null
                }, t
            }(f.Component)),
            me = Object(s.a)(null, function(e) {
                return Object(l.bindActionCreators)({
                    onClose: oe.c,
                    onDeleteRequest: o
                }, e)
            })(ue),
            pe = n("+Znq"),
            he = n("LjAQ"),
            fe = n("mw/a"),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement("li", null, f.createElement(L.S, m.__assign({
                        "data-test-selector": this.props.testSelector
                    }, this.props.interactableProps), f.createElement(L.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, this.props.children)))
                }, t = m.__decorate([Object(D.c)("InteractableOption", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportModalClose = function(e) {
                        (e === he.b.MutationError || e === he.b.Success) && t.props.history.push("/")
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(pe.a, null, f.createElement(L.v, {
                        "data-test-selector": "qa-video-options-button",
                        type: L.w.Hollow,
                        icon: L._10.More,
                        ariaLabel: Object(J.d)("Video Options", "VideoOptions"),
                        disabled: !this.props.video
                    }), this.props.video ? f.createElement(L.p, {
                        direction: L.q.TopRight
                    }, f.createElement(L._18, {
                        padding: {
                            y: 1
                        },
                        color: L.F.Link
                    }, f.createElement("ul", {
                        "data-test-selector": "qa-video-options-container"
                    }, this.renderReportOption(this.props.video, this.props.currentUser), this.renderHighlightOption(this.props.video, this.props.currentUser), this.renderDeleteOption(this.props.video, this.props.currentUser)))) : f.createElement(L.p, null))
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
                        return f.createElement(ge, {
                            key: "delete-option",
                            interactableProps: i,
                            testSelector: "qa-video-delete-button"
                        }, Object(J.d)("Delete", "VideoOptions"))
                    }
                }, t.prototype.renderReportOption = function(e, t) {
                    var n = this;
                    if (!this.isVODOwner(e, t)) {
                        var i = {
                            onClick: function() {
                                if (t) {
                                    var i = void 0;
                                    i = e.owner ? Object(J.d)("Report {ownerDisplayName}", {
                                        ownerDisplayName: e.owner.displayName
                                    }, "ReportVideoModal") : Object(J.d)("Report this video", "ReportVideoModal"), n.props.onShowReportUserModal({
                                        onClose: n.handleReportModalClose,
                                        reportContext: {
                                            contentType: fe.a.Vod,
                                            contentID: e.id,
                                            targetUserID: e.owner ? e.owner.id : "",
                                            extra: n.getVideoReportExtraField()
                                        },
                                        title: i
                                    })
                                } else n.props.onShowLogin()
                            }
                        };
                        return f.createElement(ge, {
                            key: "report-option",
                            interactableProps: i,
                            testSelector: "qa-video-report-button"
                        }, Object(J.d)("Report", "VideoOptions"))
                    }
                }, t.prototype.renderHighlightOption = function(e, t) {
                    if (e.broadcastType === K.a.Archive && this.isVODOwner(e, t) && e.owner) return f.createElement(ge, {
                        key: "highlight-option",
                        interactableProps: {
                            linkTo: function(e, t) {
                                return "https://twitch.tv/" + e + "/manager/v" + t + "/highlight"
                            }(e.owner.login, e.id)
                        },
                        testSelector: "qa-video-highlight-button"
                    }, Object(J.d)("Highlight", "VideoOptions"))
                }, t.prototype.isVODOwner = function(e, t) {
                    return t && e.owner && t.id === e.owner.id
                }, t.prototype.getVideoReportExtraField = function() {
                    var e = Object(_.a)(this.props),
                        t = {
                            timestamp: Object(de.a)(this.props.lastVideoOffset, {
                                zeroPadAll: !0
                            })
                        };
                    return "" !== e && (t = m.__assign({}, t, {
                        collection: e
                    })), JSON.stringify(t)
                }, t = m.__decorate([Object(D.c)("VideoOptions", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            be = Object(s.a)(null, function(e) {
                return Object(l.bindActionCreators)({
                    onShowLogin: function() {
                        return Object(d.f)(c.a.VODOptions)
                    },
                    onShowDeleteVideoModal: function(e) {
                        var t = m.__rest(e, []);
                        return Object(oe.d)(me, t)
                    },
                    onShowReportUserModal: function(e) {
                        var t = m.__rest(e, []);
                        return Object(oe.d)(se.a, t)
                    }
                }, e)
            })(Object(re.e)(ve)),
            ke = (n("YhgU"), Object(D.c)("VideoInfoBar", {
                autoReportInteractive: !0
            })(function(e) {
                var t = null;
                return e.video && e.video.description && (t = f.createElement(L._18, {
                    borderTop: !0,
                    "data-test-selector": "video-description"
                }, f.createElement(X, {
                    description: e.video.description,
                    broadcastType: e.video.broadcastType
                }))), f.createElement(L._18, {
                    background: L.m.Base,
                    border: !0
                }, f.createElement(L._18, {
                    alignItems: L.c.Center,
                    breakpointMedium: {
                        flexDirection: L.J.Row
                    },
                    display: L.H.Flex,
                    flexWrap: L.K.NoWrap,
                    flexDirection: L.J.Column,
                    justifyContent: L.T.Start
                }, f.createElement(L._18, {
                    flexGrow: 1,
                    fullHeight: !0,
                    fullWidth: !0,
                    padding: 1
                }, f.createElement(ae, {
                    video: e.video
                })), f.createElement(L._18, {
                    alignItems: L.c.Center,
                    className: "video-info-bar__action-container",
                    display: L.H.Flex,
                    flexDirection: L.J.Row,
                    flexShrink: 0,
                    fullHeight: !0,
                    padding: 1
                }, e.video && f.createElement(L._18, {
                    alignItems: L.c.Center,
                    "data-test-selector": "total-views",
                    display: L.H.Flex,
                    color: L.F.Alt2,
                    flexGrow: 1,
                    fontSize: L.L.Size5
                }, f.createElement(L._17, {
                    value: Object(v.e)(e.video.viewCount),
                    label: Object(v.d)("Total Views", "VideoInfoBar"),
                    icon: L._10.GlyphViews
                })), f.createElement(L.U, {
                    display: L.H.Flex,
                    flexGrow: 0
                }, f.createElement(L.U, {
                    padding: {
                        x: 1
                    }
                }, f.createElement(Y.a, {
                    video: e.video,
                    buttonType: L.z.Hollow,
                    balloonDirection: L.q.TopRight,
                    lastVideoOffset: e.lastVideoOffset
                })), f.createElement(be, {
                    currentUser: e.currentUser,
                    video: e.video,
                    lastVideoOffset: e.lastVideoOffset
                })))), t)
            })),
            ye = n("iOr9"),
            Se = n("bZTi"),
            _e = n("68hr"),
            Ce = function() {
                var e = {
                    assignments: {
                        fallback: function() {
                            return Se.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, "68hr"))
                            }, "PageNotFound")({})
                        },
                        recs: function() {
                            return Se.a.wrap(function() {
                                return n.e(73).then(n.bind(null, "anIY"))
                            }, "VideoNotFoundPage")({})
                        }
                    },
                    loader: function() {
                        return f.createElement(_e.PageNotFound, null)
                    },
                    name: "TWILIGHT_FENIX_DOWN"
                };
                return f.createElement(ye.a, m.__assign({}, e))
            },
            we = (n("VnsS"), n("eeM1")),
            Ee = -1,
            xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onPlayerSeekRequest = function(e) {
                        n.setState({
                            requestedVideoOffset: e
                        })
                    }, n.onShowLoginHandler = function() {
                        n.props.onLogin()
                    }, n.getInitialVideoOffsetTime = function() {
                        var e = h.parse(n.props.location.search);
                        return e.t ? function(e) {
                            var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
                            return t ? 3600 * (parseInt(t[2], 10) || 0) + 60 * (parseInt(t[4], 10) || 0) + (parseInt(t[6], 10) || 0) : 0
                        }(e.t) : Ee
                    }, n.onPlayerNavigationEvent = function(e) {
                        var t = n.getVideo(),
                            i = t ? t.id : "",
                            a = Object(_.a)(n.props);
                        Object(P.d)(e, n.props.history, {
                            currentVideoID: i,
                            currentCollectionID: a
                        })
                    }, n.onVideoTimeChange = function(e) {
                        var t = Math.floor(e);
                        t !== n.state.lastVideoOffset ? n.setState({
                            lastVideoOffset: t
                        }, function() {
                            n.props.onVideoTimeChange(t)
                        }) : n.state.requestedVideoOffset === t && n.setState({
                            requestedVideoOffset: Ee
                        })
                    }, n.getMiniPlayerTitle = function() {
                        var e = n.getVideo();
                        return e && e.title || Object(v.d)("Watching video", "VideoWatchPage")
                    }, n.getMiniPlayerURL = function(e, t) {
                        return e || t ? !e && t ? "/collections/" + t : "/videos/" + e + (t ? "?collection=" + t : "") : (v.i.withCategory("VideoWatchPage").error(new Error, "Tried to generate a mini player URL based on the current route, but critical options were missing."), "/")
                    }, n.state = {
                        requestedVideoOffset: n.getInitialVideoOffsetTime() || Ee,
                        lastVideoOffset: Ee,
                        miniPlayerRouteLink: n.getMiniPlayerURL(t.match.params.videoID, t.match.params.collectionID)
                    }, n
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState({
                        miniPlayerRouteLink: this.getMiniPlayerURL(e.match.params.videoID, e.match.params.collectionID)
                    })
                }, t.prototype.componentDidUpdate = function() {
                    if (this.props.data && !this.props.data.loading && (this.props.data.video || this.props.data.collection))
                        if (this.props.data.video && this.props.data.video.owner) v.n.setPageTitle(this.props.data.video.owner.displayName + " - " + this.props.data.video.title);
                        else if (this.props.data.collection && this.props.data.collection.items.edges.length > 0) {
                        var e = this.props.data.collection.items.edges[0].node,
                            t = e.owner ? e.owner.displayName + " - " : "";
                        v.n.setPageTitle("" + t + e.title)
                    }
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getVideo(),
                        t = Object(_.a)(this.props),
                        n = !this.props.data.loading && t && this.props.data.collection && 0 === this.props.data.collection.items.totalCount,
                        i = this.getOwner();
                    if (this.props.data.error || e && e.id && !e.owner) return f.createElement(b.a, {
                        message: Object(v.d)("Error loading data.", "VideoWatchPage")
                    });
                    if (!this.props.data.loading && (!e || e && "" === e.id) && !t) return f.createElement(Ce, null);
                    var a = p("video-watch-page__right-column", (l = {}, l[Object(S.c)(y.a.Dark)] = this.props.theatreModeEnabled, l)),
                        r = {};
                    this.state.requestedVideoOffset !== Ee && (r.nextVideoOffset = this.state.requestedVideoOffset), "" !== t && (r.collectionID = t);
                    var o = this.props.match.params.videoID;
                    o && (r.vodID = o);
                    var s = null;
                    return e && e.scope === z.VideoScope.Private && e.owner && e.owner.login && (s = f.createElement(G, {
                        ownerLogin: i.login
                    })), f.createElement(L.U, {
                        fullHeight: !0
                    }, f.createElement(H.a, {
                        currentPage: x.b.Videos,
                        "data-test-selector": "qa-video-watch-page",
                        ownerLogin: i.login,
                        theatreMode: this.props.theatreModeEnabled
                    }, s, f.createElement(W.a, null, f.createElement(O.a, {
                        playerProps: m.__assign({
                            onNavigationRequest: this.onPlayerNavigationEvent,
                            onSeek: this.onVideoTimeChange,
                            onVideoTimeChange: this.onVideoTimeChange,
                            attachToWindow: !0
                        }, r),
                        miniPlayerTitle: this.getMiniPlayerTitle(),
                        miniPlayerContentRoute: this.state.miniPlayerRouteLink
                    })), f.createElement(L.U, {
                        padding: {
                            bottom: 2
                        }
                    }, !n && f.createElement(ke, {
                        collectionID: Object(_.a)(this.props),
                        currentUser: this.props.data.currentUser || null,
                        video: e || null,
                        lastVideoOffset: this.state.lastVideoOffset
                    })), f.createElement(T.e, {
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    }), !n && f.createElement(T.b, {
                        gameName: e && e.game && e.game.name,
                        noGameSpecified: !(!e || e.game && e.game.name),
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    }), f.createElement(T.d, {
                        userID: i.id,
                        displayName: i.displayName,
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    }), f.createElement(B, {
                        currentlyWatchingVideoID: o,
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    })), !n && f.createElement(N.b, null, f.createElement(L._18, {
                        className: a,
                        background: L.m.Alt2,
                        "data-test-selector": "video-chat-wrapper",
                        display: L.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: L.K.NoWrap,
                        overflow: L.Z.Hidden,
                        fullHeight: !0
                    }, f.createElement(u.m, m.__assign({
                        onPlayerSeekRequest: this.onPlayerSeekRequest,
                        onShowLogin: this.onShowLoginHandler,
                        videoID: this.props.match.params.videoID || e && e.id || ""
                    }, this.mapQueryParamsToVideoChatProps())))));
                    var l
                }, t.prototype.mapQueryParamsToVideoChatProps = function() {
                    var e = {},
                        t = h.parse(this.props.location.search),
                        n = this.getInitialVideoOffsetTime();
                    return n !== Ee && (e.highlightTimestamp = n), t.comment && (e.highlightedMessageID = t.comment), e
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
                }, t
            }(f.Component),
            De = Object(g.compose)(Object(g.graphql)(we, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.match.params.videoID,
                            collectionID: Object(_.a)(e) || void 0,
                            useCollectionID: !!Object(_.a)(e)
                        }
                    }
                }
            }), Object(D.c)("VideoWatchPage", {
                destination: C.a.VideoWatchPage
            }), Object(k.a)({
                location: w.PageviewLocation.VideoWatchPage,
                properties: function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        a = null,
                        r = null;
                    if (e.match.params.videoID) t = e.match.params.videoID, e.data.video && e.data.video.owner && (n = e.data.video.broadcastType, i = e.data.video.game ? e.data.video.game.name : null, a = e.data.video.owner.login, r = Number(e.data.video.owner.id));
                    else if (Object(_.a)(e) && e.data.collection && e.data.collection.items.edges.length > 0) {
                        var o = e.data.collection.items.edges[0].node;
                        t = o.id, n = o.broadcastType, i = o.game ? o.game.name : null, a = o.owner ? o.owner.login : null, r = o.owner ? Number(o.owner.id) : null
                    }
                    return {
                        channel: a,
                        channel_id: r,
                        vod_type: n ? Object(E.b)(n) : null,
                        vod_id: t,
                        game: i
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(xe),
            Oe = Object(s.a)(function(e) {
                return {
                    theatreModeEnabled: e.ui.theatreModeEnabled
                }
            }, function(e) {
                return Object(l.bindActionCreators)({
                    onLogin: function() {
                        return Object(d.f)(c.a.VODComment)
                    },
                    onVideoTimeChange: u.r
                }, e)
            })(De);
        n.d(t, "VideoWatchPage", function() {
            return Oe
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
            a = n("jQas");
        e.exports = {
            distanceInWords: i(),
            format: a()
        }
    },
    vBvW: function(e, t, n) {
        var i = n("mXYp");
        e.exports = function(e, t) {
            return i(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 2 === i(e).getDay()
        }
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
                                    value: "broadcastType"
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
                                    value: "game"
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
                                            value: "name"
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
            a = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * a)
        }
    },
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
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
            DirectoryPopularByLanguage: "directory.popular.language",
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
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            SettingsChannel: "private/embed-components",
            SettingsConnections: "private/embed-components",
            SettingsNotifications: "settings.notifications",
            SettingsPrime: "settings.prime",
            SettingsProfile: "settings.profile",
            SettingsSecurity: "private/embed-components",
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
                a = Number(t);
            return n.setHours(a), n
        }
    },
    wajf: function(e, t, n) {
        var i = n("xA5w"),
            a = n("D6ie");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t),
                o = a(n) - r;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    weaG: function(e, t) {},
    wiYS: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, a, r = i(e).getTime();
            return t.forEach(function(e, t) {
                var o = i(e),
                    s = Math.abs(r - o.getTime());
                (void 0 === n || s < a) && (n = t, a = s)
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
    x583: function(e, t) {},
    xA5w: function(e, t, n) {
        function i(e, t, n) {
            t = t || 0, n = n || 0;
            var i = new Date(0);
            i.setUTCFullYear(e, 0, 4);
            var a = 7 * t + n + 1 - (i.getUTCDay() || 7);
            return i.setUTCDate(i.getUTCDate() + a), i
        }
        var a = n("607n"),
            r = 36e5,
            o = 6e4,
            s = 2,
            l = /[T ]/,
            c = /:/,
            d = /^(\d{2})$/,
            u = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            m = /^(\d{4})/,
            p = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            h = /^-(\d{2})$/,
            f = /^-?(\d{3})$/,
            g = /^-?(\d{2})-?(\d{2})$/,
            v = /^-?W(\d{2})$/,
            b = /^-?W(\d{2})-?(\d{1})$/,
            k = /^(\d{2}([.,]\d*)?)$/,
            y = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            S = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            _ = /([Z+-].*)$/,
            C = /^(Z)$/,
            w = /^([+-])(\d{2})$/,
            E = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = function(e, t) {
            if (a(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? s : Number(n);
            var x = function(e) {
                    var t, n = {},
                        i = e.split(l);
                    if (c.test(i[0]) ? (n.date = null, t = i[0]) : (n.date = i[0], t = i[1]), t) {
                        var a = _.exec(t);
                        a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                    }
                    return n
                }(e),
                D = function(e, t) {
                    var n, i = u[t],
                        a = p[t];
                    if (n = m.exec(e) || a.exec(e)) {
                        var r = n[1];
                        return {
                            year: parseInt(r, 10),
                            restDateString: e.slice(r.length)
                        }
                    }
                    if (n = d.exec(e) || i.exec(e)) {
                        var o = n[1];
                        return {
                            year: 100 * parseInt(o, 10),
                            restDateString: e.slice(o.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(x.date, n),
                O = D.year,
                N = function(e, t) {
                    if (null === t) return null;
                    var n, a, r, o;
                    if (0 === e.length) return (a = new Date(0)).setUTCFullYear(t), a;
                    if (n = h.exec(e)) return a = new Date(0), r = parseInt(n[1], 10) - 1, a.setUTCFullYear(t, r), a;
                    if (n = f.exec(e)) {
                        a = new Date(0);
                        var s = parseInt(n[1], 10);
                        return a.setUTCFullYear(t, 0, s), a
                    }
                    if (n = g.exec(e)) {
                        a = new Date(0), r = parseInt(n[1], 10) - 1;
                        var l = parseInt(n[2], 10);
                        return a.setUTCFullYear(t, r, l), a
                    }
                    if (n = v.exec(e)) return o = parseInt(n[1], 10) - 1, i(t, o);
                    if (n = b.exec(e)) {
                        o = parseInt(n[1], 10) - 1;
                        var c = parseInt(n[2], 10) - 1;
                        return i(t, o, c)
                    }
                    return null
                }(D.restDateString, O);
            if (N) {
                var T, I = N.getTime(),
                    F = 0;
                return x.time && (F = function(e) {
                    var t, n, i;
                    if (t = k.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * r;
                    if (t = y.exec(e)) return n = parseInt(t[1], 10), i = parseFloat(t[2].replace(",", ".")), n % 24 * r + i * o;
                    if (t = S.exec(e)) {
                        n = parseInt(t[1], 10), i = parseInt(t[2], 10);
                        var a = parseFloat(t[3].replace(",", "."));
                        return n % 24 * r + i * o + 1e3 * a
                    }
                    return null
                }(x.time)), x.timezone ? T = function(e) {
                    var t, n;
                    return (t = C.exec(e)) ? 0 : (t = w.exec(e)) ? (n = 60 * parseInt(t[2], 10), "+" === t[1] ? -n : n) : (t = E.exec(e)) ? (n = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -n : n) : 0
                }(x.timezone) : (T = new Date(I + F).getTimezoneOffset(), T = new Date(I + F + T * o).getTimezoneOffset()), new Date(I + F + T * o)
            }
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
            a = n("U7vG"),
            r = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.Q, {
                        readOnly: !0,
                        type: r.R.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
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
                    },
                    defaultValue: null
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPermanent"
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
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("3iBR"),
            o = n("qe65"),
            s = n("Odds"),
            l = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": r.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(s.U, {
                    display: s.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.J.Column,
                    justifyContent: s.T.Center,
                    alignItems: s.c.Center
                }, i.createElement(s._22, {
                    type: s._27.H4,
                    bold: !0
                }, i.createElement(o.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    yU6t: function(e, t) {},
    ymQ7: function(e, t, n) {
        var i = n("xA5w"),
            a = n("JURy"),
            r = n("nizW");
        e.exports = function(e) {
            var t = i(e);
            return r(t, a(t)) + 1
        }
    },
    ysVA: function(e, t) {},
    yu3m: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            return 4 === i(e).getDay()
        }
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
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return b
        });
        var i, a = n("TToO"),
            r = n("OAwv"),
            o = (n.n(r), n("U7vG")),
            s = (n.n(o), n("6sO2")),
            l = n("xX9u"),
            c = n("bhVC"),
            d = n("+Znq"),
            u = n("0i+s"),
            m = n("vH/s"),
            p = n("m9YJ"),
            h = n("Ryxq"),
            f = n("cAee"),
            g = n("Odds"),
            v = "collection-link";
        ! function(e) {
            e.Embed = "option_embed", e.Link = "option_link", e.Twitter = "twitter", e.Reddit = "reddit", e.VKontakte = "vk", e.Facebook = "fb", e.Copy = "link", e.Unknown = ""
        }(i || (i = {}));
        var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        timestampToShare: null
                    }, t.getShareText = function() {
                        if (t.props.video) {
                            var e = t.props.video.owner ? t.props.video.owner.displayName : null,
                                n = t.props.video.title;
                            return e && n ? Object(s.d)("Check out {title} from {displayName} on www.twitch.tv", {
                                displayName: e,
                                title: n
                            }, "VideoShareBox") : e && !n ? Object(s.d)("Check out this video from {displayName} on www.twitch.tv", {
                                displayName: e
                            }, "VideoShareBox") : !e && n ? Object(s.d)("Check out {title} on www.twitch.tv", {
                                title: n
                            }, "VideoShareBox") : Object(s.d)("Check out this video on www.twitch.tv", "VideoShareBox")
                        }
                    }, t.getVideoEmbedCode = function() {
                        if (!t.props.video) return "";
                        var e, n = t.props.video.owner ? t.props.video.owner.displayName : null,
                            i = t.props.video.title,
                            a = null !== t.state.timestampToShare ? t.state.timestampToShare : void 0,
                            r = _(t.props.video.id, a),
                            o = t.getVideoEmbedLink();
                        return e = n && i ? Object(s.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: i
                        }, "VideoShareBox") : n && !i ? Object(s.d)("Watch video from {displayName} on www.twitch.tv", {
                            displayName: n
                        }, "VideoShareBox") : !n && i ? Object(s.d)("Watch {title} on www.twitch.tv", {
                            title: i
                        }, "VideoShareBox") : Object(s.d)("Watch on www.twitch.tv", "VideoShareBox"), Object(u.a)(r, {
                            textLink: {
                                url: o,
                                text: e
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        })
                    }, t.getVideoEmbedLink = function() {
                        return t.props.video ? S(t.props.video.id, {
                            tt_medium: m.PageviewMedium.VideoEmbed,
                            tt_content: m.PageviewContent.TextLink,
                            t: t.state.timestampToShare ? Object(h.b)(t.state.timestampToShare) : void 0
                        }) : ""
                    }, t.getVideoLink = function() {
                        if (!t.props.video) return "";
                        var e = {
                            collection: t.props.collectionID ? t.props.collectionID : void 0,
                            t: t.state.timestampToShare ? Object(h.b)(t.state.timestampToShare) : void 0
                        };
                        return S(t.props.video.id, e)
                    }, t.renderCollectionLink = function() {
                        if (t.props.collectionID && "" !== t.props.collectionID && t.props.video) return o.createElement(g.U, {
                            padding: {
                                top: 1
                            },
                            "data-test-selector": v
                        }, o.createElement(g._22, null, Object(s.d)("Collection Link", "VideoShareBox")), o.createElement(l.a, {
                            value: y(t.props.collectionID),
                            onClick: t.onShareClickCollectionLinkHandler
                        }))
                    }, t.onShareClickEmbedHandler = function() {
                        t.props.onShareClick({
                            shareTrackingType: f.a.Video,
                            sharePlatform: i.Embed,
                            shareURL: t.getVideoEmbedLink()
                        })
                    }, t.onShareClickCollectionLinkHandler = function() {
                        t.props.collectionID && "" !== t.props.collectionID ? t.props.onShareClick({
                            shareTrackingType: f.a.Collection,
                            sharePlatform: i.Link,
                            collectionID: t.props.collectionID,
                            shareURL: y(t.props.collectionID)
                        }) : s.i.withCategory("video-share-box").error(new Error("Expected a collection ID for collection share link, got " + t.props.collectionID), "Expected a collection ID for collection share link, got " + t.props.collectionID)
                    }, t.onShareClickVideoLinkHandler = function() {
                        var e = {
                            shareTrackingType: f.a.Video,
                            sharePlatform: i.Link,
                            shareURL: t.getVideoLink()
                        };
                        t.props.collectionID && (e.collectionID = t.props.collectionID), t.props.onShareClick(e)
                    }, t.onShareClickSocialHandler = function(e) {
                        t.props.onShareClick({
                            shareTrackingType: f.a.Video,
                            sharePlatform: k(e),
                            shareURL: t.getVideoLink()
                        })
                    }, t.onShareTimestampClick = function() {
                        t.setState({
                            timestampToShare: null === t.state.timestampToShare ? t.props.lastVideoOffset || 0 : null
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.getVideoLink(),
                        n = Object(p.u)(null !== this.state.timestampToShare ? this.state.timestampToShare : this.props.lastVideoOffset || 0);
                    return o.createElement(d.a, null, o.createElement(g.u, {
                        type: this.props.buttonType,
                        "data-test-selector": "dropdown-button"
                    }, Object(s.d)("Share", "VideoShareBox")), this.props.video ? o.createElement(g.p, {
                        direction: this.props.balloonDirection,
                        size: g.r.Small
                    }, o.createElement(g.U, {
                        padding: 1
                    }, o.createElement(g.U, {
                        display: g.H.Flex,
                        justifyContent: g.T.Between
                    }, C.map(function(n) {
                        return o.createElement(c.a, {
                            key: n.type,
                            onShareClick: e.onShareClickSocialHandler,
                            type: n.type,
                            text: e.getShareText(),
                            "data-test-selector": n.selector,
                            url: t
                        })
                    })), this.renderCollectionLink(), o.createElement(g.U, {
                        "data-test-selector": "video-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(g._22, null, Object(s.d)("Video Link", "VideoShareBox")), o.createElement(l.a, {
                        value: t,
                        onClick: this.onShareClickVideoLinkHandler
                    }), void 0 !== this.props.lastVideoOffset && o.createElement(g.U, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(g.E, {
                        id: "video-share-timestamp-toggle",
                        label: Object(s.d)("Skip to {deeplinkTimestamp}", {
                            deeplinkTimestamp: n
                        }, "VideoShareBox"),
                        "data-a-target": "video-share-timestamp-toggle",
                        "data-test-selector": "video-share-timestamp-selector",
                        "data-a-value": null !== this.state.timestampToShare,
                        checked: null !== this.state.timestampToShare,
                        onChange: this.onShareTimestampClick
                    }))), o.createElement(g.U, {
                        "data-test-selector": "embed-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(g._22, null, Object(s.d)("Embed Video", "VideoShareBox")), o.createElement(l.a, {
                        value: this.getVideoEmbedCode(),
                        onClick: this.onShareClickEmbedHandler
                    })))) : o.createElement(g.p, null))
                }, t
            }(o.Component),
            k = function(e) {
                switch (e) {
                    case c.b.Twitter:
                        return i.Twitter;
                    case c.b.Reddit:
                        return i.Reddit;
                    case c.b.VKontakte:
                        return i.VKontakte;
                    case c.b.Facebook:
                        return i.Facebook;
                    case c.b.Copy:
                        return i.Copy;
                    default:
                        return s.i.withCategory("video-share-box").error(new Error("Unknown social button type: " + e), "Unknown social button type: " + e), i.Unknown
                }
            },
            y = function(e) {
                return new URL("https://www.twitch.tv/collections/" + e).toString()
            },
            S = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = r.stringify(t)), n.toString()
            },
            _ = function(e, t) {
                return "https://player.twitch.tv/?" + r.stringify({
                    video: "v" + e,
                    autoplay: !1,
                    t: t ? Object(h.b)(t) : void 0
                })
            },
            C = [{
                type: c.b.Twitter,
                selector: "twitter-button"
            }, {
                type: c.b.Facebook,
                selector: "fb-button"
            }, {
                type: c.b.VKontakte,
                selector: "vk-button"
            }, {
                type: c.b.Reddit,
                selector: "reddit-button"
            }, {
                type: c.b.Copy,
                selector: "copy-link-button"
            }]
    },
    zGmo: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Created: "created",
            Downloading: "downloading",
            Transmuxing: "transmuxing",
            Failed: "failed",
            Complete: "complete"
        }
    },
    zQFw: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e),
                n = t.getMonth(),
                a = n - n % 3 + 3;
            return t.setMonth(a, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var i = n("xA5w"),
            a = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                r = new Date(0);
            r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
            var o = a(r),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var l = a(s);
            return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1
        }
    },
    zzpv: function(e, t) {
        var n = {
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
                end: 105
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\nredeemTrueXAd(input:$input) {\ngrantedBits\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.video-watch-39d48e66670df8b74e09434d03240ed8.js.map