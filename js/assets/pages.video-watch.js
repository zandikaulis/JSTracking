webpackJsonp([35, 76], {
    "+/J2": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setMilliseconds(r), n
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
                                    value: "userLogin"
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
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
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            a = "visit_url",
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
            r.m.track(a.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            return e && l[e] ? l[e] : (r.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            r.m.track(a.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: r.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            r.m.track(a.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return i
        }), t.g = function(e) {
            var t = r.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: r.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            r.m.track(a.SpadeEventType.BitsAdsRequest, n)
        };
        var i, r = n("6sO2"),
            a = n("vH/s"),
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
                r = Number(t);
            return n.setDate(r), n
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
        var r = n("Rv0e");
        n.n(r);
        n.o(r, "EditModalErrorOrigin") && n.d(t, "EditModalErrorOrigin", function() {
            return r.EditModalErrorOrigin
        }), n.o(r, "NotificationType") && n.d(t, "NotificationType", function() {
            return r.NotificationType
        });
        var a = n("Ydo4");
        n.d(t, "NotificationType", function() {
            return a.a
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
                return !a[t] && (a[t] = !0, !0)
            })
        }
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
                end: 449
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery VideoComments($videoID: ID!) {\nbadges {\n...badge\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\nisGlobalMod\n}\nblockedUsers {\nid\n}\nemoteSets {\nid\nemotes {\nid\ntoken\n}\n}\n}\nvideo(id: $videoID options: { includePrivate: true }) {\nid\nbroadcastType\nowner {\nid\nlogin\nbroadcastBadges {\n...badge\n}\n...cheer\nself {\nisModerator\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("QU+n").definitions)), r.definitions = r.definitions.concat(i(n("576g").definitions)), e.exports = r
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
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(23, 59, 59, 999), r
        }
    },
    "0aH9": function(e, t, n) {
        var i = n("3znZ"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                l = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - l) / a)
        }
    },
    "0i+s": function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            void 0 === t && (t = r);
            var n = i.__assign({}, r, t),
                a = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (a += function(e, t) {
                return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
            }(n.textLink.url, n.textLink.text)), a
        };
        var i = n("TToO"),
            r = {
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
        e.exports = function(e, t, n, r) {
            var a = i(e).getTime(),
                o = i(t).getTime(),
                s = i(n).getTime(),
                l = i(r).getTime();
            if (a > o || s > l) throw new Error("The start of the range cannot be after the end of the range");
            return a < l && s < o
        }
    },
    "3EIC": function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getMonth() + a,
                s = new Date(0);
            s.setFullYear(n.getFullYear(), o, 1), s.setHours(0, 0, 0, 0);
            var l = r(s);
            return n.setMonth(o, Math.min(l, n.getDate())), n
        }
    },
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("mbxv"),
            a = n("+V/3"),
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
                        n && e.clickAction === a.b && (e = o.__assign({}, e, {
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
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    "3Ybq": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
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
        var i, r = "generated",
            a = "custom";
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
            r = 6e4;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        });
        var i, r = "VIEWS",
            a = "TIME";
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
    "4Jix": function(e, t) {},
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
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Q9N": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(i || (i = {}))
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
            var r = i(e).getTime(),
                a = i(t).getTime(),
                o = i(n).getTime();
            if (a > o) throw new Error("The start of the range cannot be after the end of the range");
            return r >= a && r <= o
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
                                            value: "prefix"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
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
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
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
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
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
            r = (n.n(i), n("U7vG")),
            a = (n.n(r), n("ysVA")),
            o = (n.n(a), "chat-author__intl-login"),
            s = function(e) {
                var t = [r.createElement("span", {
                    key: "username-display",
                    className: "chat-author__display-name",
                    "data-a-target": "chat-message-username",
                    "data-test-selector": "message-username",
                    style: {
                        color: e.userData.color
                    }
                }, e.userData.userDisplayName)];
                if (e.userData.isIntl) {
                    var n = i((a = {}, a[o] = !e.highlighted, a["chat-author__intl-login--highlighted"] = e.highlighted, a));
                    t.push(r.createElement("span", {
                        key: "username-login",
                        style: {
                            color: e.userData.color
                        },
                        className: n,
                        "data-test-selector": "message-username-canonical"
                    }, " (" + e.userData.userLogin + ")"))
                }
                return r.createElement("span", {
                    key: e.userData.userID + "-authorlabel"
                }, t);
                var a
            }
    },
    "5qwL": function(e, t, n) {
        var i = n("VaeB");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "5vPJ": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
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
                    return n || this.state.isTimedOut ? r.createElement(s.a, {
                        error: {
                            title: Object(a.d)("Something went wrong", "ClipsChatCard"),
                            description: Object(a.d)("We couldn't find that Clip", "ClipsChatCard")
                        }
                    }) : i || !t ? r.createElement(s.a, null) : r.createElement(s.a, {
                        data: {
                            title: t.title ? t.title : Object(a.d)("Clip of {broadcaster}", {
                                broadcaster: t.broadcaster.displayName
                            }, "ClipsChatCard"),
                            description: Object(a.d)("Clipped by {curator}", {
                                curator: t.curator.displayName
                            }, "ClipsChatCard"),
                            previewImageURL: t.thumbnailURL,
                            contentURL: t.url
                        }
                    })
                }, t
            }(r.Component),
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
                r = Number(t);
            return new Date(n + r)
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
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var r = n("a4C9"),
            a = (n.n(r), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return a.a
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
            var r = i(e, n),
                a = i(t, n);
            return r.getTime() === a.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var i = n("xA5w"),
            r = 864e5;
        e.exports = function(e, t, n, a) {
            var o = i(e).getTime(),
                s = i(t).getTime(),
                l = i(n).getTime(),
                c = i(a).getTime();
            if (o > s || l > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(o < c && l < s)) return 0;
            var d = (c > s ? s : c) - (l < o ? o : l);
            return Math.ceil(d / r)
        }
    },
    "8UBU": function(e, t) {},
    "8Wuk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
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
                    return n.isLink() ? r.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(m._40)(n.props)), n.renderIcon()) : r.createElement("button", i.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(m._40)(n.props)), n.renderIcon())
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
                    return r.createElement(m.V, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(m._10, {
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
                            return n.state.isCopied ? Object(a.d)("Copied", "SocialButton") : Object(a.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case p.Twitter:
                            return m._11.Twitter;
                        case p.Facebook:
                            return m._11.Facebook;
                        case p.VKontakte:
                            return m._11.VKontakte;
                        case p.Reddit:
                            return m._11.Reddit;
                        case p.Copy:
                        default:
                            return m._11.Copy
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
                        r = n.getUrl(),
                        a = t || "";
                    switch (i) {
                        case p.Reddit:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    title: t
                                })
                            }(r, a);
                        case p.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(r);
                        case p.Facebook:
                            return function(e) {
                                return Object(s.a)(l, {
                                    u: e
                                })
                            }(r);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    text: t
                                })
                            }(r, a);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return r.createElement(m.V, {
                    className: "social-button"
                }, r.createElement(m._31, {
                    label: this.getTooltipFromType(),
                    direction: m._33.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
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
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        });
        var i = "BROADCAST_TYPE_ALL",
            r = "broadcaster_id",
            a = "BROADCAST_LENGTH_ANY",
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
            r = n("6sO2"),
            a = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return a = i.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
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
                                    return r = i.sent(), t.requestError = r, [3, 4];
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
                    var n = r.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var s = Object(a.c)(n);
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
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
    B0KL: function(e, t) {
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
    Bb5e: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getFullYear() - r.getFullYear()
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
                r = Number(t);
            return n.setMonth(0), n.setDate(r), n
        }
    },
    D6ie: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ"),
            a = n("iRXW"),
            o = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = r(t).getTime() - a(t).getTime();
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
                n = e.broadcastSort === r.c,
                a = [];
            return "broadcastType" in e && e.broadcastType !== r.d && void 0 !== e.broadcastType && a.push(e.broadcastType), "broadcasterId" in e && a.push(r.a + ":" + e.broadcasterId), t.facetFilters = function(e) {
                return e.join(",")
            }(a), "broadcastLength" in e && e.broadcastLength !== r.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]), {
                typeID: n ? i.a.VideosNewest : i.a.Videos,
                params: t
            }
        };
        var i = n("5LoI"),
            r = n("9m97")
    },
    "Eoz/": function(e, t, n) {
        function i(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                i = Math.abs(e),
                a = i % 60;
            return n + r(Math.floor(i / 60), 2) + t + r(a, 2)
        }

        function r(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        var a = n("ymQ7"),
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
                    return r(e.getMonth() + 1, 2)
                },
                Q: function(e) {
                    return Math.ceil((e.getMonth() + 1) / 3)
                },
                D: function(e) {
                    return e.getDate()
                },
                DD: function(e) {
                    return r(e.getDate(), 2)
                },
                DDD: function(e) {
                    return a(e)
                },
                DDDD: function(e) {
                    return r(a(e), 3)
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
                    return r(o(e), 2)
                },
                YY: function(e) {
                    return r(e.getFullYear(), 4).substr(2)
                },
                YYYY: function(e) {
                    return r(e.getFullYear(), 4)
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
                    return r(e.getHours(), 2)
                },
                h: function(e) {
                    var t = e.getHours();
                    return 0 === t ? 12 : t > 12 ? t % 12 : t
                },
                hh: function(e) {
                    return r(u.h(e), 2)
                },
                m: function(e) {
                    return e.getMinutes()
                },
                mm: function(e) {
                    return r(e.getMinutes(), 2)
                },
                s: function(e) {
                    return e.getSeconds()
                },
                ss: function(e) {
                    return r(e.getSeconds(), 2)
                },
                S: function(e) {
                    return Math.floor(e.getMilliseconds() / 100)
                },
                SS: function(e) {
                    return r(Math.floor(e.getMilliseconds() / 10), 2)
                },
                SSS: function(e) {
                    return r(e.getMilliseconds(), 3)
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
                r = (n || {}).locale,
                a = d.format.formatters,
                o = d.format.formattingTokensRegExp;
            r && r.format && r.format.formatters && (a = r.format.formatters, r.format.formattingTokensRegExp && (o = r.format.formattingTokensRegExp));
            var s = l(e);
            return c(s) ? function(e, t, n) {
                var i, r, a = e.match(n),
                    o = a.length;
                for (i = 0; i < o; i++) r = t[a[i]] || u[a[i]], a[i] = r || function(e) {
                    return e.match(/\[[\s\S]/) ? e.replace(/^\[|]$/g, "") : e.replace(/\\/g, "")
                }(a[i]);
                return function(e) {
                    for (var t = "", n = 0; n < o; n++) a[n] instanceof Function ? t += a[n](e, u) : t += a[n];
                    return t
                }
            }(i, a, o)(s) : "Invalid Date"
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
            return e === r.SECOND ? Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === r.MINUTE ? Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === r.DAY ? Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === r.HOUR ? Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === r.WEEK ? Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === r.MONTH ? Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }
        t.a = function(e) {
            if (e < 60) return i(r.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(r.MINUTE, t) + " " + i(r.SECOND, n) : i(r.MINUTE, t);
            var a = Math.floor(t / 60);
            if (t %= 60, a < 24) return t ? i(r.HOUR, a) + " " + i(r.MINUTE, t) : i(r.HOUR, a);
            var o = Math.floor(a / 24);
            if (a %= 24, o < 7) return a ? i(r.DAY, o) + " " + i(r.HOUR, a) : i(r.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return (o %= 7) ? i(r.WEEK, s) + " " + i(r.DAY, o) : i(r.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return i(r.MONTH, l)
        };
        var r, a = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(r || (r = {}))
    },
    G7No: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() - r.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var i = n("xA5w"),
            r = n("orNa"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setMonth(n.getMonth() - s * l), s * (l - (a(n, o) === -s))
        }
    },
    GJxf: function(e, t, n) {
        "use strict";
        var i, r, a = n("RH2O"),
            o = n("TToO"),
            s = n("HW6M"),
            l = n("KSGD"),
            c = n("U7vG"),
            d = n("6sO2"),
            u = n("vH/s"),
            m = n("CSlQ"),
            p = n("81qH"),
            h = n("Odds"),
            f = (n("yF7E"), "carousel-content"),
            g = 10,
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        hasTrackedItemSectionLoad: !1
                    }, t.onPreviewCardClick = function(e) {
                        if (t.props.videos) {
                            var n = t.props.videos[e];
                            d.m.trackItemSectionClick(o.__assign({
                                carousel_content: t.props.tracking.content,
                                item_id: n.id,
                                item_index: e,
                                item_type: u.TwitchDataType.Video,
                                item_viewcount: n.viewCount,
                                location: t.props.tracking.location
                            }, t.props.tracking.source))
                        }
                    }, t.getVideoCards = function() {
                        var e = t.props.videos;
                        if (null === e) {
                            for (var n = [], i = 0; i < g; i++) n.push(c.createElement(p.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        for (var r = [], a = 0; a < e.length; a++)
                            if (a < g || t.props.firstPageLoaded) {
                                if (e[a].id === t.props.currentlyWatchingVideoID) continue;
                                r.push(c.createElement(p.VideoPreviewCard, {
                                    collectionID: t.props.collectionID,
                                    onClick: t.onPreviewCardClick,
                                    key: "video-" + a,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: a,
                                        medium: t.props.tracking.medium
                                    },
                                    overrideImageInteractivity: t.props.overrideCardImageInteractivity,
                                    video: e[a]
                                }))
                            } else r.push(c.createElement(p.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + a
                            }));
                        return r
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
                                n = t.carouselContainerRef.querySelector("[data-js-selector=" + f + "]");
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
                            r = t.getVideoCardEndPadding();
                        return Math.floor((i + r) / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + f + "]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.getVideoCardEndPadding = function() {
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=" + f + "]");
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
                    var e = this.context.registerReceiver;
                    e && (this.unregisterScrollHandler = e(this)), null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.videos && this.props.videos && this.onDataLoaded()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregisterScrollHandler && this.unregisterScrollHandler()
                }, t.prototype.render = function() {
                    return c.createElement(h.Q, o.__assign({}, this.props, {
                        margin: {
                            bottom: 2,
                            top: 1
                        },
                        position: h._4.Relative
                    }), c.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, c.createElement(h.V, {
                        className: "video-carousel__child-container",
                        overflow: h._0.Hidden,
                        position: h._4.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, c.createElement(h.Q, {
                        margin: {
                            bottom: 3
                        }
                    }, c.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, c.createElement(h._34, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || h._35.Large,
                        gutterSize: h._36.Small,
                        "data-js-selector": f
                    }, this.getVideoCards())))), c.createElement(h.V, {
                        className: "video-carousel__nav",
                        display: h.H.Flex,
                        alignItems: h.c.Center,
                        position: h._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, c.createElement(_, {
                        direction: b.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), c.createElement(h.V, {
                        className: "video-carousel__nav",
                        display: h.H.Flex,
                        alignItems: h.c.Center,
                        position: h._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, c.createElement(_, {
                        direction: b.DirectionNext,
                        disabled: !this.state.childrenRendered || this.isForwardButtonDisabled(),
                        onClickHandler: this.moveCarouselForward
                    }))))
                }, t.prototype.checkVisible = function(e) {
                    this.props.videos && this.props.videos.length > 0 && !1 === this.state.hasTrackedItemSectionLoad && function(e) {
                        if (!e) return !1;
                        var t = e.getBoundingClientRect(),
                            n = window.innerWidth,
                            i = window.innerHeight;
                        return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                    }(this.carouselContainerRef) && this.trackSectionLoad()
                }, t.prototype.trackSectionLoad = function() {
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, r = e; i < r.length; i++) {
                        var a = r[i];
                        t.push(a.id), n.push(a.viewCount)
                    }
                    d.m.trackItemSectionLoad(o.__assign({
                        carousel_content: this.props.tracking.content,
                        location: this.props.tracking.location,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [u.TwitchDataType.Video],
                        rendered_items_viewcounts: n
                    }, this.props.tracking.source)), this.setState({
                        hasTrackedItemSectionLoad: !0
                    })
                }, t.prototype.onDataLoaded = function() {
                    var e = this;
                    this.state.childrenRendered || this.setState({
                        childrenRendered: !0
                    }, function() {
                        e.checkVisible()
                    })
                }, t.contextTypes = {
                    registerReceiver: l.func
                }, t
            }(c.Component),
            b = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            k = (i = {}, i[b.DirectionPrevious] = "previous", i[b.DirectionNext] = "next", i),
            y = (r = {}, r[b.DirectionPrevious] = h._11.AngleLeft, r[b.DirectionNext] = h._11.AngleRight, r),
            _ = function(e) {
                var t = k[e.direction],
                    n = (r = {}, r[b.DirectionPrevious] = Object(d.d)("previous", "CarouselNavButton"), r[b.DirectionNext] = Object(d.d)("next", "CarouselNavButton"), r),
                    i = s("video-carousel__button", "video-carousel__button--" + t, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return c.createElement(h.V, {
                    className: i,
                    position: h._4.Relative,
                    display: h.H.Flex,
                    alignItems: h.c.Stretch
                }, c.createElement(h.v, {
                    "data-test-selector": t + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: n[e.direction],
                    icon: y[e.direction],
                    size: h.x.Large
                }));
                var r
            },
            S = Object(m.d)("VideoCarousel", {
                autoReportInteractive: !0
            })(v);
        n.d(t, "a", function() {
            return C
        });
        var C = Object(a.b)(function(e) {
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
            r = n("U7vG"),
            a = n("F8kA"),
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
                    return !this.state.hasImageLoadingError && this.props.imageURL && (e = this.props.imageURL), r.createElement(c.C, {
                        aspect: c.k.Aspect16x9,
                        imageAlt: this.props.altText,
                        imageSrc: e,
                        onImageError: this.handleImageError
                    })
                }, t
            }(r.Component),
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
                        var e = r.createElement("img", {
                            "data-test-selector": m.ERROR,
                            src: u,
                            className: "chat-card__error-img"
                        });
                        return t.renderCardContent(e, t.props.error)
                    }, t.renderCardContent = function(e, t) {
                        var n, i;
                        return t ? (n = r.createElement(c._23, {
                            type: c._28.Span,
                            fontSize: c.L.Size5,
                            "data-test-selector": m.TITLE,
                            title: t.title
                        }, t.title), i = r.createElement(c._23, {
                            type: c._28.Span,
                            fontSize: c.L.Size6,
                            color: c.F.Alt2,
                            "data-test-selector": m.DESCRIPTION
                        }, t.description)) : (e = r.createElement(c._3, {
                            overlay: !0
                        }), n = r.createElement(c._3, {
                            width: 180
                        }), i = r.createElement(c._3, {
                            width: 120
                        })), r.createElement(c._19, {
                            background: c.m.Base,
                            display: c.H.Flex,
                            flexWrap: c.K.NoWrap,
                            padding: .5
                        }, r.createElement(c._19, {
                            className: "chat-card__preview-img",
                            background: c.m.Alt2,
                            display: c.H.Flex,
                            alignItems: c.c.Center,
                            justifyContent: c.U.Center,
                            flexShrink: 0
                        }, e), r.createElement(c.V, {
                            display: c.H.Flex,
                            alignItems: c.c.Center
                        }, r.createElement(c.V, {
                            margin: {
                                left: 1
                            },
                            fullWidth: !0
                        }, r.createElement(c.V, {
                            className: "chat-card__title",
                            ellipsis: !0
                        }, n), r.createElement(c.V, {
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
                            n = r.createElement(d, {
                                altText: this.props.data.title,
                                imageURL: this.props.data.previewImageURL
                            });
                        e = r.createElement(a.a, {
                            className: "chat-card__link",
                            to: t,
                            target: "_blank"
                        }, this.renderCardContent(n, {
                            title: this.props.data.title,
                            description: this.props.data.description
                        }))
                    } else e = this.renderCardContent();
                    return r.createElement(c._19, {
                        elevation: 1,
                        margin: {
                            top: .5
                        }
                    }, e)
                }, t
            }(r.Component),
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
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(23, 59, 59, 999), r
        }
    },
    I7cV: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setDate(r.getDate() + o), r.setHours(23, 59, 59, 999), r
        }
    },
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var i = n("TToO"),
            r = n("HW6M"),
            a = (n.n(r), n("KSGD")),
            o = (n.n(a), n("U7vG")),
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
                    var e = r((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return o.createElement(m.V, i.__assign({
                        className: "chennel-page-layout",
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), o.createElement(d.b, {
                        className: e,
                        suppressScrollX: !0,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), o.createElement(u.a, null, o.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), o.createElement(m.V, {
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
                    scrollToTop: a.func
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
            r = n("U7vG"),
            a = (n.n(r), n("3zLD")),
            o = (n.n(a), n("6sO2")),
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
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement(u.V, null, r.createElement(u.V, {
                        padding: {
                            bottom: 1
                        }
                    }, r.createElement(u._23, {
                        type: u._28.H4,
                        fontSize: u.L.Size5,
                        transform: u._27.Uppercase,
                        color: u.F.Alt2
                    }, Object(o.d)("Latest videos", "LatestVideosFromFollowedCarousel"))), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        overrideCardImageInteractivity: !0,
                        tracking: {
                            content: this.props.tracking.content,
                            location: this.props.tracking.location,
                            medium: this.props.tracking.medium,
                            source: {}
                        },
                        videoCardSize: u._35.Medium,
                        videos: e
                    })) : null
                }, t
            }(r.Component)),
            h = Object(a.compose)(Object(s.a)(m), Object(l.d)("LatestVideosFromFollowedCarousel"))(p)
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("U7vG"),
            a = (n.n(r), n("Odds")),
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
                    return r.createElement(a.I, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a.Q, {
                        position: a._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._39.Above
                    }, r.createElement("input", {
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
            }(r.Component))
    },
    J92i: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("U7vG"),
            o = n("6sO2"),
            s = n("J8WN"),
            l = n("+8VM"),
            c = n("7vx8"),
            d = n("HZww"),
            u = n("Odds"),
            m = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return a.createElement(u.V, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(o.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, a.createElement(u._19, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: u._4.Relative,
                    className: r(t)
                }, a.createElement("img", {
                    alt: Object(o.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            p = n("4Q9N"),
            h = n("Tt3k"),
            f = n("W6ca"),
            g = n("xgnX"),
            v = n("CSlQ"),
            b = (n("AL3x"), n("nmDn"));
        n.d(t, "b", function() {
            return k
        }), n.d(t, "a", function() {
            return S
        });
        var k = [{
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
            y = ["image/*"],
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = o.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(h.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: g.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(h.b)(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    r = !1;
                                n.onload = function() {
                                    n.width < n.height && (r = !0), t.setState({
                                        currentImageHasTallAspectRatio: r
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: i
                                })
                            }))
                        } else t.setState({
                            statusMessage: g.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, s = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: g.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: g.b.Uploading
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(f.a)(this.props.userID, this.props.authToken, p.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = i.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return a = i.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: g.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = o.j.subscribe({
                                            topic: Object(d.d)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(f.c)(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: g.b.UnexpectedError,
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
                                                    statusMessage: g.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === g.a.Success ? g.b.Success : e.status === g.a.BadSize ? g.b.BadSizeError : e.status === g.a.NonImage ? g.b.NonImageError : e.status === g.a.WrongFormat ? g.b.WrongFormatError : g.b.UnexpectedError, s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t
                                                    }), s.state.statusMessage === g.b.Success ? s.setState({
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
                            imagePreviewURL: k[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: g.b.TimeoutError
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = k.map(function(t, n) {
                            return a.createElement(m, {
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
                        n = a.createElement(u.V, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: u._4.Relative
                        }, a.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var c = null;
                    "" === this.state.imagePreviewURL && (c = a.createElement(u.V, {
                        className: "profile-edit__upload-info"
                    }, a.createElement(u.V, null, a.createElement(u._10, {
                        asset: u._11.Plus,
                        type: u._12.Alt2,
                        height: 20,
                        width: 20
                    })), a.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size4
                    }, Object(o.d)("Upload a Photo", "Profile Edit"))));
                    var d = null;
                    this.props.showCloser && (d = a.createElement(l.a, null));
                    var p = null;
                    if (null !== this.state.statusMessage) {
                        var h = Object(g.c)(this.state.statusMessage),
                            f = h.message,
                            v = h.type;
                        p = a.createElement(u._1, {
                            label: f,
                            type: v
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), a.createElement(u.V, {
                        className: "profile-edit",
                        position: u._4.Relative,
                        fullHeight: !0
                    }, a.createElement(u._19, {
                        className: "profile-edit__background-container",
                        background: u.m.Base,
                        fullWidth: !0
                    }, a.createElement(u.V, {
                        padding: 2,
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        fullWidth: !0
                    }, a.createElement(u._19, {
                        textAlign: u._24.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size4
                    }, Object(o.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), a.createElement(u.V, {
                        className: "profile-edit__upload-container",
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(u.V, {
                        className: "profile-edit__upload",
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center
                    }, a.createElement(s.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, c), n)), a.createElement(u._19, {
                        "data-test-selector": "status-message",
                        fontSize: u.L.Size4,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        className: "profile-edit__status-message"
                    }, p), a.createElement(u._19, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u.V, {
                        textAlign: u._24.Left,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size5
                    }, Object(o.d)("Or select one of these", "Profile Edit"))), a.createElement(u._34, {
                        childWidth: u._35.ExtraSmall,
                        gutterSize: u._36.ExtraSmall,
                        placeholderItems: 3
                    }, t)), a.createElement(u.V, {
                        display: u.H.Flex,
                        justifyContent: u.U.Center
                    }, a.createElement(u.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: u.x.Large
                    }, Object(o.d)("Update", "Profile Edit"))))), d)
                }, t.prototype.setDefaultAvatar = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: g.b.Uploading
                                    }), e = g.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(f.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = g.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === g.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(c.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(a.Component),
            S = Object(v.d)("Profile Edit")(_)
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
            return a(s.parse(e.location.search).sort || "")
        }

        function r(e) {
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

        function a(e) {
            switch (e.toUpperCase()) {
                case d.b:
                    return d.b;
                case d.a:
                    return d.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, a) {
            var s = a || i(t),
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
                var t = r(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            l.n.history.push(e + "/" + u + c)
        }, t.c = i, t.b = r, t.a = function(e) {
            var t = s.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = a;
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
            r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                a = r(t);
            return 4 * (n.getFullYear() - a.getFullYear()) + (i(n) - i(a))
        }
    },
    Jvcu: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = Number(t);
            return n.setDate(n.getDate() + r), n
        }
    },
    K7ZZ: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setMilliseconds(a.getMilliseconds() - 1), a
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
            var t = a.createElement(T._23, {
                    bold: !0,
                    type: T._28.Span
                }, a.createElement("span", {
                    style: {
                        color: e.chatColor
                    },
                    "data-a-target": H
                }, Object(R.a)(e.login, e.displayName))),
                n = null;
            return e.editAppearance || (n = a.createElement(T.V, {
                margin: {
                    top: 1
                }
            }, a.createElement("div", {
                className: "chat-settings__edit-button",
                onClick: e.onClickEdit,
                "data-a-target": B,
                "data-test-selector": j
            }, Object(w.d)("Edit Appearance", "ChatSettings")))), a.createElement(T._19, {
                background: T.m.Base,
                color: T.F.Base,
                display: T.H.InlineFlex,
                flexDirection: T.J.Column,
                fullWidth: !0
            }, a.createElement(T._23, {
                color: T.F.Alt2,
                transform: T._27.Uppercase
            }, Object(w.d)("Name Display", "ChatSettings")), a.createElement(T.V, {
                margin: {
                    top: 2
                }
            }, e.userBadges && e.userBadges.map(function(e) {
                return a.createElement(U.a, {
                    key: e.id,
                    badge: e
                })
            }), t), n)
        }
        var r = n("TToO"),
            a = n("U7vG"),
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
            _ = n("O0Qc"),
            S = n("VsL1"),
            C = n("Umoc"),
            w = n("6sO2"),
            E = n("zCIC"),
            O = n("+Znq"),
            D = n("7vx8"),
            x = n("HW6M"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = N.map(function(t) {
                            var n = {
                                "color-chooser": !0,
                                "color-chooser--selected": t === e.props.selectedColor
                            };
                            return a.createElement("div", {
                                key: t,
                                "data-color": t,
                                onClick: e.onColorSelected,
                                className: x(n),
                                style: {
                                    backgroundColor: t
                                },
                                "data-test-selector": "color_swatch_" + t,
                                "data-a-target": "color_swatch_" + t
                            })
                        }),
                        n = a.createElement(T._23, {
                            transform: T._27.Uppercase,
                            color: T.F.Alt2
                        }, Object(w.d)("Name Color", "ChatSettings"));
                    return this.props.borderTop && (n = a.createElement(T._19, {
                        margin: {
                            top: 2
                        },
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, n)), a.createElement("div", null, a.createElement(T._19, {
                        margin: {
                            bottom: 1
                        },
                        background: T.m.Base,
                        color: T.F.Base,
                        display: T.H.InlineFlex,
                        flexDirection: T.J.Column,
                        fullWidth: !0
                    }, n), a.createElement(T.V, {
                        margin: {
                            y: 1
                        },
                        display: T.H.Flex
                    }, t, a.createElement(T._23, {
                        fontSize: T.L.Size7
                    }, a.createElement("a", {
                        href: "https://twitch.tv/products/turbo?ref=more_colors_direct"
                    }, Object(w.d)("more colors →", "ChatSettings")))))
                }, t
            }(a.Component)),
            A = n("OAwv"),
            F = n("AaXK"),
            M = (n("7LVu"), "channel_badge"),
            L = "global_badge",
            V = function(e) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? a.createElement("div", null, a.createElement(I, {
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
                            r = this.props.data.currentUser.selectedBadge;
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
                            return a.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onChannelBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: x(i),
                                "data-test-selector": M + "_" + t.setID,
                                "data-a-target": M + "_" + t.setID
                            }, a.createElement(T._31, {
                                label: t.title
                            }, a.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(a.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onChannelBadgeClicked,
                            className: x(s),
                            "data-test-selector": M + "_none",
                            "data-a-target": M + "_none"
                        }, a.createElement(T._31, {
                            label: Object(w.d)("Same as Global", "ChatSettings")
                        }, a.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, a.createElement(T._10, {
                            asset: T._11.Global
                        })))));
                        var c = void 0 === this.state.globalBadgeID && r ? r.setID : this.state.globalBadgeID,
                            d = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": !c
                            },
                            u = Object(w.d)("No global badges :(", "ChatSettings");
                        return i && i.length > 0 && (u = i.map(function(t) {
                            var n = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": r && t.setID === c
                            };
                            return a.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onGlobalBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: x(n),
                                "data-test-selector": L + "_" + t.setID,
                                "data-a-target": L + "_" + t.setID
                            }, a.createElement(T._31, {
                                label: t.title
                            }, a.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        })).push(a.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onGlobalBadgeClicked,
                            className: x(d),
                            "data-test-selector": L + "_none",
                            "data-a-target": L + "_none"
                        }, a.createElement(T._31, {
                            label: Object(w.d)("None", "ChatSettings")
                        }, a.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, a.createElement(T._10, {
                            asset: T._11.Ban
                        }))))), a.createElement("div", null, a.createElement(T._19, {
                            background: T.m.Base,
                            color: T.F.Base,
                            display: T.H.InlineFlex,
                            flexDirection: T.J.Column,
                            fullWidth: !0
                        }, a.createElement(T._19, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, a.createElement(T._31, {
                            align: T._32.Left,
                            label: Object(w.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                            width: 175
                        }, a.createElement(T._23, {
                            color: T.F.Alt2,
                            transform: T._27.Uppercase
                        }, Object(w.d)("Global Badge [?]", "ChatSettings")))), a.createElement(T.V, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: T.H.Flex,
                            "data-a-target": "global-badge-selector"
                        }, u)), a.createElement(T._19, {
                            background: T.m.Base,
                            color: T.F.Base,
                            display: T.H.InlineFlex,
                            flexDirection: T.J.Column,
                            fullWidth: !0
                        }, a.createElement(T._19, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, a.createElement(T._31, {
                            align: T._32.Left,
                            label: Object(w.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                            width: 175
                        }, a.createElement(T._23, {
                            color: T.F.Alt2,
                            transform: T._27.Uppercase
                        }, Object(w.d)("Channel Badge [?]", "ChatSettings")))), a.createElement(T.V, {
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
                    return r.__awaiter(this, void 0, void 0, function() {
                        var i, a, o;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return i = {
                                        "Client-ID": w.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, a = "https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", [4, fetch(a, {
                                        method: "PUT",
                                        body: A.stringify({
                                            selected_badge: n
                                        }),
                                        headers: i
                                    })];
                                case 1:
                                    return (o = r.sent()) && o.ok && (this.props.onBadgesChanged(), this.setState({
                                        channelBadgeID: n
                                    })), [2]
                            }
                        })
                    })
                }, t.prototype.setGlobalBadge = function(e, t) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var n, i, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = {
                                        "Client-ID": w.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, i = "https://api.twitch.tv/kraken/users/" + e + "/chat/badges", [4, fetch(i, {
                                        method: "PUT",
                                        body: A.stringify({
                                            selected_badge: t
                                        }),
                                        headers: n
                                    }).catch(console.error)];
                                case 1:
                                    return (a = r.sent()) && a.ok && (this.props.onBadgesChanged(), this.setState({
                                        globalBadgeID: t
                                    })), [2]
                            }
                        })
                    })
                }, t = r.__decorate([Object(D.a)(F, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(a.Component),
            R = n("SZoP"),
            U = n("3T7g"),
            j = "edit-appearance-button",
            B = "edit-appearance-button",
            H = "edit-display-name",
            P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(T.V, {
                        "data-toggle-balloon-id": "raids-follower-only-tooltip",
                        margin: {
                            left: .5
                        },
                        position: T._4.Relative
                    }, a.createElement(T._31, {
                        align: T._32.Right,
                        direction: T._33.Top,
                        display: T.H.InlineFlex,
                        label: this.props.text,
                        width: 175,
                        show: !0
                    }, a.createElement(T.Q, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.H.InlineFlex,
                        justifyContent: T.U.Center
                    }, a.createElement(T._23, {
                        color: T.F.Overlay,
                        fontSize: T.L.Size8,
                        type: T._28.Span,
                        "data-test-selector": "raids-follower-only-tooltip"
                    }, "i"))))
                }, t
            }(a.Component),
            W = n("V5M+"),
            z = n("oSFp"),
            q = n("F8kA"),
            G = n("9u8h"),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetChannelID = t.props.targetChannelID, t
                }
                return r.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return r.__generator(this, function(i) {
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
            }(a.Component),
            Q = n("oIkB"),
            K = n("g7wA"),
            J = n("O9wU"),
            $ = n("jPU6"),
            Z = n("y1/w"),
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
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(T.V, {
                        key: "recent-raids-layout2-" + this.props.raiderUserID,
                        className: "recent-raids-item",
                        flexDirection: T.J.Row,
                        display: T.H.Flex,
                        fullWidth: !0
                    }, a.createElement(T.V, {
                        flexDirection: T.J.Row,
                        display: T.H.Flex,
                        fullWidth: !0,
                        justifyContent: T.U.Between
                    }, a.createElement(T._23, {
                        bold: !0
                    }, a.createElement("a", {
                        className: "recent-raids-item__name",
                        "data-username": this.props.channelLogin,
                        "data-raid-id": this.props.raidID,
                        onClick: this.onUsernameClick,
                        href: "#"
                    }, this.props.channelLogin)), a.createElement(T.V, {
                        position: T._4.Relative
                    }, a.createElement(T.V, {
                        className: "recent-raids-item__timestamp"
                    }, Object(K.t)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                }, t.prototype.getCardSlideInContent = function() {
                    if (!this.props.slideInContent) return null;
                    var e = null;
                    return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? a.createElement(T.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.x.Small,
                        type: T.z.Text,
                        onClick: this.onUnbanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(w.d)("Unban", "RecentRaid")) : a.createElement(T.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: T.x.Small,
                        type: T.z.Text,
                        onClick: this.onBanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(w.d)("Ban", "RecentRaid")), a.createElement(T.V, {
                        key: "recent-raids-layout-" + this.props.raiderUserID,
                        className: "recent-raids-item__hover-content",
                        zIndex: T._39.Above,
                        "data-a-target": "recent-raids-item-hover"
                    }, this.props.slideInContent, e)
                }, t = r.__decorate([Object(D.a)(Z, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.raiderUserID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(D.a)($, {
                    name: "banUser",
                    options: function(e) {
                        return {
                            update: function(t, n) {
                                ! function(e, t, n) {
                                    var i = e.readQuery({
                                        query: Z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        }
                                    });
                                    i && (t && t.data && (i.chatRoomBanStatus = {
                                        isPermanent: !0,
                                        __typename: "ChatRoomBanStatus"
                                    }), e.writeQuery({
                                        query: Z,
                                        variables: {
                                            targetUserID: n.raiderUserID,
                                            channelID: n.channelID
                                        },
                                        data: i
                                    }))
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
                                        query: Z,
                                        variables: {
                                            targetUserID: t.raiderUserID,
                                            channelID: t.channelID
                                        }
                                    });
                                    if (n) {
                                        var i = r.__assign({}, n, {
                                            chatRoomBanStatus: null
                                        });
                                        e.writeQuery({
                                            query: Z,
                                            variables: {
                                                targetUserID: t.raiderUserID,
                                                channelID: t.channelID
                                            },
                                            data: i
                                        })
                                    }
                                }(t, e)
                            }
                        }
                    }
                })], t)
            }(a.Component),
            te = n("mw/a"),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onReportButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-raid-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-id") || "",
                            r = e.currentTarget.getAttribute("data-target-user-login") || "";
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
                                channelDisplayName: r
                            }, "ReportUserModal")
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
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
                        0 === this.state.raidChannels.length && e.push(a.createElement(T._23, {
                            key: "recent-raids-no-raids",
                            type: T._28.P
                        }, Object(w.d)("You have no recent raids", "RecentRaids")));
                        for (var i in this.state.raidChannels)
                            if (i.hasOwnProperty) {
                                var r = this.state.raidChannels[i];
                                this.state.raidChannels.hasOwnProperty(i) && void 0 === n[r.userID] && (t.push(a.createElement(ee, {
                                    key: "recent-raids-item-" + r.userID,
                                    slideInContent: [a.createElement(T._19, {
                                        key: "recent-raids-item-report-area-" + r.userID,
                                        color: T.F.Alt2,
                                        display: T.H.InlineFlex
                                    }, a.createElement(T.u, {
                                        key: "recent-raid-report-button",
                                        size: T.x.Small,
                                        type: T.z.Text,
                                        onClick: this.onReportButtonClick,
                                        "data-a-target": "recent-raid-item-button",
                                        "data-raid-id": r.raidID,
                                        "data-target-user-login": r.name,
                                        "data-target-user-id": r.userID
                                    }, Object(w.d)("Report", "RecentRaid")), a.createElement(T._31, {
                                        align: T._32.Right,
                                        width: 150,
                                        label: Object(w.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                                    }))],
                                    timestamp: r.raidAt,
                                    channelLogin: r.name,
                                    raiderUserID: r.userID,
                                    channelID: this.props.targetChannelID,
                                    raiderLogin: r.name,
                                    raidID: r.raidID,
                                    onUsernameClick: this.props.onUsernameClick,
                                    showReportUserModal: this.props.showReportUserModal
                                })), n[r.userID] = !0)
                            }
                    }
                    var o = null;
                    return this.props.recentRaids ? a.createElement(T.V, {
                        key: "recent-raids"
                    }, a.createElement(T.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(T._23, {
                        color: T.F.Link,
                        type: T._28.Span
                    }, a.createElement(q.a, {
                        to: {
                            pathname: "/broadcast/dashboard/settings/raids"
                        }
                    }, Object(w.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (o = a.createElement(T.V, {
                        key: "recent-raids",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: T.H.Flex,
                        justifyContent: T.U.Between,
                        alignItems: T.c.Center
                    }, a.createElement("span", {
                        className: "chat-settings__edit-button",
                        onClick: this.props.onClickRecentRaids,
                        "data-test-selector": "recent-raids-button"
                    }, Object(w.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && a.createElement(T.V, {
                        position: T._4.Relative
                    }, a.createElement(T._31, {
                        align: T._32.Right,
                        direction: T._33.Top,
                        display: T.H.InlineFlex,
                        label: this.props.tooltipText,
                        width: 175,
                        show: !0
                    }, a.createElement(T.Q, {
                        alignItems: T.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: T.H.InlineFlex,
                        justifyContent: T.U.Center,
                        margin: {
                            left: .5
                        }
                    }, a.createElement(T._23, {
                        color: T.F.Overlay,
                        fontSize: T.L.Size8,
                        type: T._28.Span
                    }, "i"))))), a.createElement(T.V, null, o))
                }, t
            }(a.Component),
            ie = Object(o.b)(function() {
                return {}
            }, function(e) {
                return Object(l.b)({
                    showReportUserModal: function(e) {
                        var t = r.__rest(e, []);
                        return Object(W.d)(z.a, t)
                    }
                }, e)
            })(ne),
            re = n("pg5l"),
            ae = (n("Vaxm"), "chat-settings-back-button"),
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return r.__generator(this, function(i) {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    var e = null;
                    if (this.props.isLoggedIn && this.props.data.currentUser) {
                        var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                        e = a.createElement(i, {
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
                    return this.props.isLoggedIn ? this.props.editAppearance ? n = [a.createElement(T.Q, {
                        margin: {
                            bottom: 2
                        },
                        key: "chat-settings-edit-inject"
                    }, a.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__edit-button",
                        onClick: this.onClickBack,
                        "data-test-selector": ae
                    }, a.createElement(T._23, {
                        color: T.F.Link,
                        type: T._28.Span
                    }, a.createElement(T._10, {
                        asset: T._11.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(w.d)("Back", "ChatSettingsAppearance")))), e, a.createElement(V, {
                        key: "edit-appearance",
                        onColorSelected: this.onColorSelected,
                        editAppearance: this.props.editAppearance,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                        userLogin: this.props.data.currentUser.login,
                        onBadgesChanged: this.onBadgesChanged
                    })] : this.state.recentRaids ? n = [a.createElement(T.Q, {
                        key: "chat-settings-recent-raids"
                    }, a.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__recent-raids-button",
                        onClick: this.onClickBack,
                        "data-test-selector": ae
                    }, a.createElement(T._23, {
                        color: T.F.Link,
                        type: T._28.Span
                    }, a.createElement(T._10, {
                        asset: T._11.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(w.d)("Back", "ChatSettingsRecentRaids")), a.createElement(T.V, {
                        margin: {
                            top: 2
                        }
                    }, a.createElement(T._23, {
                        key: "recent-raids-title",
                        color: T.F.Alt2,
                        transform: T._27.Uppercase
                    }, Object(w.d)("Recent Raids", "ChatSettings"))))), a.createElement(ie, {
                        key: "recent-raids",
                        targetChannelID: this.props.channelID,
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard
                    })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && n.push(this.renderModTools())) : n = [a.createElement(I, {
                        key: "color-chooser",
                        onColorSelected: this.props.onColorSelected
                    }), this.renderUniversalOptions()], a.createElement(E.b, {
                        className: "chat-settings",
                        suppressScrollX: !0
                    }, a.createElement("div", {
                        onClick: this.dismissRaidsTooltip
                    }, a.createElement(T._19, {
                        key: "chat-settings",
                        className: "chat-settings__content",
                        background: T.m.Base,
                        color: T.F.Base,
                        padding: 2
                    }, n)))
                }, t.prototype.renderUniversalOptions = function() {
                    if (!this.props.data) return null;
                    var e = this.props.isPopout && a.createElement(T.E, {
                            checked: this.props.darkModeEnabled,
                            "data-a-target": "darkmode-checkbox",
                            "data-test-selector": "dark-mode-checkbox",
                            id: "chat-settings-dark-mode",
                            label: Object(w.d)("Dark Mode", "ChatSettings"),
                            onChange: this.props.onDarkModeToggle
                        }),
                        t = !this.props.isPopout && a.createElement("button", {
                            onClick: this.props.onChatPopout,
                            "data-a-target": "popout-chat-button",
                            "data-test-selector": "popout-button"
                        }, Object(w.d)("Popout", "ChatSettings")),
                        n = !this.props.isPopout && (window.BetterTTV || window.FrankerFaceZ) && a.createElement("button", {
                            onClick: this.props.onLegacyChatPopout,
                            "data-test-selector": "legacy-popout-button"
                        }, Object(w.d)("Legacy Popout", "ChatSettings"));
                    return a.createElement(T.V, {
                        key: "chat-options"
                    }, a.createElement(T._19, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(T._23, {
                        color: T.F.Alt2,
                        transform: T._27.Uppercase
                    }, Object(w.d)("Chat Options", "ChatSettings"))), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(T.E, {
                        checked: this.props.showTimestamps,
                        "data-a-target": "timestamp-checkbox",
                        "data-test-selector": "timestamps-selector",
                        id: "chat-settings-timestamp",
                        label: Object(w.d)("Timestamps", "ChatSettings"),
                        onChange: this.props.onTimestampToggle
                    })), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, e), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement("button", {
                        onClick: this.props.onChatHide,
                        "data-a-target": "hide-chat-button",
                        "data-test-selector": "hide-chat-button"
                    }, Object(w.d)("Hide Chat", "ChatSettings"))), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, t), n && a.createElement(T.V, null, n))
                }, Object.defineProperty(t.prototype, "showRaidsTooltip", {
                    get: function() {
                        return this.props.sawFirstRaidPrompt && !this.state.raidsTooltipDismissed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderModTools = function() {
                    return a.createElement(T._19, {
                        key: "mod-tools",
                        borderTop: !0,
                        "data-test-selector": "mod-tools",
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, a.createElement(T.V, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(T._23, {
                        color: T.F.Alt2,
                        transform: T._27.Uppercase
                    }, Object(w.d)("Mod Tools", "ChatSettings"))), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(T.E, {
                        checked: this.props.showModerationIcons,
                        "data-a-target": "mod-icons-checkbox",
                        "data-test-selector": "mod-icons-checkbox",
                        id: "chat-settings-mod-icons",
                        label: Object(w.d)("Mod Icons", "ChatSettings"),
                        onChange: this.props.onModIconsToggle
                    })), a.createElement(T._19, {
                        margin: {
                            bottom: 1
                        },
                        display: T.H.Flex,
                        justifyContent: T.U.Between
                    }, a.createElement(T.E, {
                        checked: this.props.followerModeEnabled,
                        "data-a-target": "follower-mode-checkbox",
                        "data-test-selector": "follower-mode-checkbox",
                        id: "chat-settings-followers-only",
                        label: Object(w.d)("Followers-Only Chat", "ChatSettings"),
                        onChange: this.props.onFollowerModeToggle
                    }), this.showRaidsTooltip ? a.createElement(P, {
                        text: Object(w.d)("Prevent offensive raiders from chatting.", "RaidReportingChat")
                    }) : null, a.createElement(T.V, {
                        alignItems: T.c.Center,
                        display: T.H.Flex,
                        flexWrap: T.K.NoWrap,
                        justifyContent: T.U.Between
                    }, a.createElement(T.V, {
                        margin: {
                            right: .5
                        }
                    }, a.createElement(T._23, {
                        color: T.F.Alt2,
                        fontSize: T.L.Size7,
                        type: T._28.Span
                    }, Object(w.d)("Must have followed for", "ChatSettings"))), a.createElement(T.V, {
                        className: "chat-settings__mod-tools-follower-button",
                        flexShrink: 0
                    }, a.createElement(O.a, {
                        display: T.H.InlineBlock
                    }, a.createElement(T.u, {
                        size: T.x.Small,
                        type: T.z.Text,
                        "data-a-target": "follower-mode-dropdown",
                        "data-test-selector": "follower-mode-duration-menu",
                        dropdown: !0
                    }, Object(k.d)(this.props.selectedFollowerModeDuration)), a.createElement(T.p, {
                        direction: T.q.TopRight
                    }, a.createElement(T.V, {
                        padding: .5
                    }, a.createElement(T._23, {
                        color: T.F.Alt2
                    }, Object(w.d)("Followers can chat if they have followed for at least", "ChatSettings"))), a.createElement(T._19, {
                        color: T.F.Link
                    }, this.renderFollowerModeOptions())))))), a.createElement(T.V, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(T.E, {
                        checked: this.props.slowModeEnabled,
                        "data-a-target": "slow-mode-checkbox",
                        "data-test-selector": "slow-mode-checkbox",
                        id: "chat-settings-slow-mode",
                        label: Object(w.d)("Slow Mode", "ChatSettings"),
                        onChange: this.props.onSlowModeToggle
                    })), a.createElement(ie, {
                        key: "recent-raids",
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: b.d,
                        targetChannelID: this.props.channelID,
                        tooltipText: this.showRaidsTooltip ? Object(w.d)("View recent raids with option to report or ban.", "RaidReportingChat") : ""
                    }), a.createElement("button", {
                        onClick: this.props.onChatClear,
                        "data-a-target": "clear-chat-button",
                        "data-test-selector": "clear-chat-button"
                    }, Object(w.d)("Clear Chat", "ChatSettings")))
                }, t.prototype.renderFollowerModeOptions = function() {
                    var e = this;
                    return k.b.map(function(t) {
                        return a.createElement(T.T, {
                            "data-duration": t,
                            key: t,
                            onClick: e.handleFollowerDurationClick,
                            selected: t === e.props.selectedFollowerModeDuration
                        }, a.createElement(T.V, {
                            padding: .5
                        }, Object(k.c)(t)))
                    })
                }, t = r.__decorate([Object(D.a)(re, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(a.Component),
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
                        Object(S.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(C.a)({
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
                        Object(S.b)("showModIcons", !t.props.showModerationIcons), t.props.showModerationIcons ? t.props.onModIconsDisable() : t.props.onModIconsEnable(), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showModerationIcons,
                            settingName: y.a.ShowModIcons
                        })
                    }, t.onFollowerModeToggle = function() {
                        if (t.props.followerModeEnabled) t.props.onChatCommand(Object(_.d)()), t.props.onFollowerModeDisable();
                        else {
                            var e = t.getSelectedFollowerDuration();
                            t.props.onChatCommand(Object(_.f)(e)), t.props.onFollowerModeDurationChange(e), t.props.onFollowerModeEnable()
                        }
                        Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.followerModeEnabled,
                            settingName: y.a.FollowerMode
                        })
                    }, t.onFollowerDurationChange = function(e) {
                        Object(S.c)(t.props.channelLogin, e), t.props.onFollowerModeDurationPreferenceChange(t.props.channelLogin, e), t.props.followerModeEnabled && (t.props.onChatCommand(Object(_.f)(e)), t.props.onFollowerModeDurationChange(e)), Object(C.c)({
                            channelLogin: t.props.channelLogin,
                            followerModeOn: t.props.followerModeEnabled,
                            isHostMode: t.props.isHostMode,
                            newValue: e
                        })
                    }, t.onSlowModeToggle = function() {
                        t.props.slowModeEnabled ? (t.props.onChatCommand(Object(_.e)()), t.props.onSlowModeDisable()) : (t.props.onChatCommand(Object(_.g)()), t.props.onSlowModeEnable()), Object(C.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.slowModeEnabled,
                            settingName: y.a.SlowMode
                        })
                    }, t.onChatClear = function() {
                        t.props.onChatCommand(Object(_.c)())
                    }, t.getSelectedFollowerDuration = function() {
                        if (t.props.followerModeEnabled) return t.props.followerModeDuration;
                        var e = t.props.lastUsedFollowerDurations[t.props.channelLogin];
                        return "number" == typeof e ? e : k.a
                    }, t.onColorSelected = function(e) {
                        t.props.isLoggedIn ? t.props.onChatCommand(Object(_.b)(e)) : t.props.login()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(de, {
                        disabled: this.props.disabled,
                        onToggle: this.handleSettingsToggle
                    }, a.createElement(oe, {
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
            }(a.Component),
            le = Object(o.b)(function(e) {
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
                return Object(l.b)({
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
                return a.createElement(O.a, {
                    onToggle: e.onToggle
                }, a.createElement(T.v, {
                    icon: T._11.Gear,
                    ariaLabel: Object(w.d)("Chat settings", "ChatInput"),
                    "data-a-target": "chat-settings",
                    disabled: !!e.disabled
                }), a.createElement(T.p, {
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
                r = i(t).getTime();
            if (n.getTime() > r) throw new Error("The first date cannot be after the second date");
            var a = [],
                o = n;
            for (o.setHours(0, 0, 0, 0); o.getTime() <= r;) a.push(i(o)), o.setDate(o.getDate() + 1);
            return a
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
            r = n("OAwv"),
            a = n("U7vG"),
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
                                    var i = "" !== e.search ? r.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var a = r.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + a;
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
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = r.stringify(t),
                                    a = "";
                                i.length > 0 && (a = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: a
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
                        var r = i[n];
                        try {
                            var a = new RegExp(r, "i");
                            t.push(a)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(a.Component);
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
                r = t.getMonth(),
                a = new Date(0);
            return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var i = n("M5Oo");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n < r ? -1 : n > r ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var i = n("6Zhv"),
            r = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
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
                id: Object(a.b)(),
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
            return c.includes(e.type) || t.push(new Error(Object(r.d)("File type {filetype} is not currently supported", {
                filetype: e.type
            }, "VideoUploadModel"))), e.size > o && t.push(new Error(Object(r.d)("File too large. The maximum file size is {maxFileSizeLabel}", {
                maxFileSizeLabel: s
            }, "VideoUploadModel"))), t
        };
        var i, r = n("6sO2"),
            a = n("HM6l"),
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
            return a
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
            var a = n[1],
                o = i.n.store.getState().chat.commandHandlers[n[1].toLowerCase()];
            if (!o) return {
                command: a,
                handled: !1
            };
            var s = (n[2] || "").trim(),
                c = {
                    channelLogin: t
                };
            try {
                return {
                    command: a,
                    handled: !0,
                    result: o(s, c)
                }
            } catch (e) {
                return r.warn("Exception thrown from chat command handler", {
                    command: n[1],
                    err: e
                }), {
                    handled: !1
                }
            }
        };
        var i = n("6sO2"),
            r = i.n.logger.withCategory("chat-commands"),
            a = "/unraid",
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
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: []
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
                                name: {
                                    kind: "Name",
                                    value: "price"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "discount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                            value: "type"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\nbannerImageURL\n}\n}",
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
                    var r;
                    return r = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), i.addSuffix ? i.comparison > 0 ? "in " + r : r + " ago" : r
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var i = n("u/4p"),
            r = 6e4,
            a = 6048e5;
        e.exports = function(e, t, n) {
            var o = i(e, n),
                s = i(t, n),
                l = o.getTime() - o.getTimezoneOffset() * r,
                c = s.getTime() - s.getTimezoneOffset() * r;
            return Math.round((l - c) / a)
        }
    },
    QFW6: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            r = n("vH/s"),
            a = "public";
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
                    room_type: a
                }
            },
            s = function(e) {
                i.m.track(r.SpadeEventType.ChatRoomJoined, o(e))
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
                r = i(t);
            return n.getFullYear() === r.getFullYear()
        }
    },
    R9op: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return e.chat && e.chat.messages ? e.chat.messages[t] || [] : []
        };
        var i = n("TToO"),
            r = n("LIeg"),
            a = (n.n(r), n("6sO2")),
            o = n("vh75"),
            s = n("UzRK"),
            l = n("VsL1");
        a.n.store.registerReducer("chat", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = Object(l.a)();
                return i.__assign({}, e, {
                    commandHandlers: {},
                    emoteSets: [],
                    followerDuration: s.a,
                    followerMode: !1,
                    isHidden: !1,
                    messages: {},
                    slowMode: !1,
                    subsOnlyMode: !1
                })
            }()), t.type) {
                case o.b:
                    return i.__assign({}, e, {
                        isHidden: !0
                    });
                case o.c:
                    return i.__assign({}, e, {
                        emoteSets: [],
                        messages: {}
                    });
                case o.d:
                    return i.__assign({}, e, {
                        isHidden: !1
                    });
                case o.e:
                    return i.__assign({}, e, {
                        emoteSets: t.emoteSets
                    });
                case o.f:
                    return i.__assign({}, e, {
                        followerMode: !1
                    });
                case o.g:
                    return i.__assign({}, e, {
                        followerDuration: t.duration
                    });
                case o.h:
                    return i.__assign({}, e, {
                        lastUsedFollowerDurations: i.__assign({}, e.lastUsedFollowerDurations, (n = {}, n[t.channelLogin] = t.duration, n))
                    });
                case o.i:
                    return i.__assign({}, e, {
                        followerMode: !0
                    });
                case o.j:
                    return r(e, function(e) {
                        return e.messages
                    }, function(e) {
                        return e[t.channel] = t.messages, e
                    });
                case o.k:
                    return i.__assign({}, e, {
                        showModIcons: !1
                    });
                case o.l:
                    return i.__assign({}, e, {
                        showModIcons: !0
                    });
                case o.n:
                    return i.__assign({}, e, {
                        slowMode: !1
                    });
                case o.o:
                    return i.__assign({}, e, {
                        slowMode: !0
                    });
                case o.p:
                    return i.__assign({}, e, {
                        subsOnlyMode: !1
                    });
                case o.q:
                    return i.__assign({}, e, {
                        subsOnlyMode: !0
                    });
                case o.r:
                    return i.__assign({}, e, {
                        showTimestamps: !1
                    });
                case o.s:
                    return i.__assign({}, e, {
                        showTimestamps: !0
                    });
                case o.a:
                    return r(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return e[t.command] = t.handler, e
                    });
                case o.m:
                    return r(e, function(e) {
                        return e.commandHandlers
                    }, function(e) {
                        return delete e[t.command], e
                    });
                default:
                    return e
            }
            var n
        })
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("U7vG"),
            r = (n.n(i), n("mbxv")),
            a = function(e) {
                var t = Object.keys(e.badgesToRender).map(function(t) {
                    var n = e.badgesToRender[t],
                        a = e.badgeSets.getBadge(t, n);
                    return null === a ? null : i.createElement(r.a, {
                        key: a.setID + "/" + a.version,
                        badge: a
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
            r = n("Jvcu");
        e.exports = function(e, t, n) {
            var a = n ? Number(n.weekStartsOn) || 0 : 0,
                o = i(e),
                s = Number(t),
                l = o.getDay();
            return r(o, ((s % 7 + 7) % 7 < a ? 7 : 0) + s - l)
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
            var r = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + r.join("|") + "|.)", "g")
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
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("hdYS"),
            c = n("DtWM"),
            d = n("+Znq"),
            u = n("7vx8"),
            m = n("czpb"),
            p = n("RH2O"),
            h = n("Aj/L"),
            f = n("N221"),
            g = n("jF7o"),
            v = n("iMOk"),
            b = n("WVx7"),
            k = n("ySfT"),
            y = n("ZJYd"),
            _ = n("/LBW"),
            S = n("Odds"),
            C = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(y.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: _.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a.createElement(S.V, null, a.createElement(S.V, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: S._24.Center
                    }, a.createElement(S._23, {
                        type: S._28.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), a.createElement(S.V, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, a.createElement(S._23, {
                        type: S._28.Span,
                        color: S.F.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), a.createElement(S.Q, {
                        margin: {
                            left: .5
                        }
                    }, a.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), a.createElement(S.V, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: S._24.Center
                    }, a.createElement(S.Q, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(S._23, {
                        type: S._28.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), a.createElement(S.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? a.createElement(S.V, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, a.createElement(S.V, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, a.createElement(S.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: S.z.Text
                    }, a.createElement(S._10, {
                        asset: S._11.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), a.createElement(S.V, {
                        textAlign: S._24.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, a.createElement(S.e, {
                        type: S.i.SlideInLeft,
                        duration: S.g.Long,
                        enabled: !0
                    }, a.createElement(k.a, null)))) : this.props.animateFirstTimeUserIntro ? a.createElement(S.Q, {
                        className: "bits-first-time-user-prompt"
                    }, a.createElement(S.e, {
                        type: S.i.SlideInRight,
                        duration: S.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : a.createElement(S.V, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(a.Component)),
            w = n("jxGs"),
            E = n("bkpq"),
            O = n("CSlQ"),
            D = n("annQ"),
            x = (n("lGVF"), function(e) {
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
                        Object(g.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return a.createElement(S._19, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: S.H.Flex,
                        flexDirection: S.J.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.U.Center,
                        textAlign: S._24.Center,
                        padding: {
                            y: 5
                        }
                    }, a.createElement(S.Z, {
                        delay: 0
                    }), a.createElement(S.V, {
                        padding: {
                            top: 2
                        }
                    }, a.createElement(S._23, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(y.c)(e)
                        });
                        t && t.type === w.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = a.createElement(C, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = a.createElement(S._19, {
                        borderBottom: !0,
                        textAlign: S._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, a.createElement(S._23, {
                        type: S._28.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: a.createElement(v.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = a.createElement(S._19, {
                        borderBottom: !0,
                        textAlign: S._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, a.createElement(S._23, {
                        type: S._28.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: a.createElement(v.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = a.createElement(b.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: _.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), a.createElement(f.b, {
                        className: "get-bits-button-content"
                    }, a.createElement(S.V, null, n, e, i))
                }, t = i.__decorate([Object(O.d)("GetBitsButtonContent"), Object(u.a)(D, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(E.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, r;
                        return e.data && e.data.currentUser ? (r = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: r,
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
            }(a.Component)),
            N = function(e) {
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = a.createElement(x, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), a.createElement(d.a, {
                        onToggle: this.toggleBalloon
                    }, a.createElement(S.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), a.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.Large
                    }, e))
                }, t = i.__decorate([Object(O.d)("GetBitsButton")], t)
            }(a.Component),
            T = Object(p.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e)
                }
            })(N),
            I = n("E9Qg"),
            A = (n("4Jix"), n("Ojfd")),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        i = this.props.data;
                    return i && i.loading || !this.props.firstPageLoaded ? e = a.createElement(S._3, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    }) : (i && i.user && i.user.bannerImageURL ? t = {
                        backgroundImage: "url(" + i.user.bannerImageURL + ")"
                    } : (n["channel-banner--default"] = !0, t = {
                        backgroundImage: "url(" + I + ")"
                    }), e = a.createElement("div", {
                        className: "channel-banner__image",
                        style: t
                    })), a.createElement("div", {
                        className: r("channel-banner", n),
                        "data-test-selector": "channel-banner",
                        onTransitionEnd: this.props.onTransitionEnd
                    }, a.createElement(S.Q, {
                        fullWidth: !0
                    }, e))
                }, t
            }(a.Component),
            M = Object(u.a)(A, {
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
            })(F),
            L = Object(p.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(M),
            V = n("2KeS"),
            R = n("V5M+"),
            U = n("x9n8"),
            j = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(U.a, {
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
                    return a.createElement(S.V, {
                        className: "edit-profile-overlay",
                        display: S.H.Flex,
                        justifyContent: S.U.Center,
                        alignContent: S.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, a.createElement(S.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: S._11.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(O.d)("EditProfileOverlay")], t)
            }(a.Component)),
            B = Object(p.b)(null, function(e) {
                return Object(V.b)({
                    showModal: R.d
                }, e)
            })(j),
            H = n("70dR"),
            P = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return W
        }), n.d(t, "a", function() {
            return K
        });
        var W, z = "channel-header__edit-profile-overlay",
            q = "user-channel-header-item",
            G = "channel-header__verified-badge",
            Y = "channel-header__live-indicator",
            Q = "channel-header__channel-link";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(W || (W = {}));
        var K = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = a.createElement(S._31, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: S._33.Right
                }, a.createElement(S.V, {
                    className: "channel-header__verified",
                    "data-target": G,
                    display: S.H.Flex,
                    alignItems: S.c.Center,
                    margin: {
                        left: 1
                    }
                }, a.createElement(S._10, {
                    asset: S._11.Verified
                }))), t.liveIndicatorElement = a.createElement(S.V, {
                    margin: {
                        left: 1
                    },
                    "data-target": Y
                }, a.createElement(S._31, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: S._33.Right
                }, a.createElement(S.X, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? a.createElement(S._19, {
                        className: z,
                        background: S.m.Overlay,
                        position: S._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: S.H.InlineFlex,
                        alignItems: S.c.Center,
                        justifyContent: S.U.Center
                    }, a.createElement(B, {
                        userID: t.props.data.user.id,
                        login: t.props.data.user.login,
                        displayName: t.props.data.user.displayName
                    })) : null
                }, t.toggleChannelBanner = function() {
                    t.setState(function(e) {
                        var t = !e.bannerSlideIn;
                        return t ? {
                            bannerHidden: !e.bannerHidden,
                            bannerSlideIn: t
                        } : {
                            bannerSlideIn: t
                        }
                    })
                }, t.completedBannerAnimation = function() {
                    t.setState(function(e) {
                        if (!e.bannerSlideIn) return {
                            bannerHidden: !0
                        }
                    })
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
                    m = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && !this.isActiveTab(W.Channel),
                    h = this.createChannelLinks(n, i, u),
                    f = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(W.Channel)
                    },
                    g = null;
                this.canRenderBitsButton() && (g = a.createElement(S.V, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(T, {
                    channelLogin: this.props.channelLogin
                })));
                var v, b = a.createElement(S.V, {
                    display: S.H.Flex,
                    flexWrap: S.K.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, a.createElement(S.V, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: S.H.Flex,
                    flexShrink: 0,
                    alignItems: S.c.Stretch
                }, a.createElement(S.V, {
                    position: S._4.Relative
                }, a.createElement(S.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? a.createElement(S._23, {
                    type: S._28.H5
                }, e) : a.createElement(S.V, {
                    alignItems: S.c.Center
                }, a.createElement(S._3, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                v = this.isActiveTab(W.Channel) ? a.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": Q,
                    "data-a-target": q
                }, b) : this.props.data && this.props.data.user && this.props.data.user.login ? a.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": Q,
                    "data-a-target": q
                }, b) : b;
                var k = this.state.bannerHidden ? S.H.HideAccessible : S.H.Block,
                    y = null;
                return this.isActiveTab(W.Channel) && (y = a.createElement(S.V, {
                    display: k
                }, a.createElement(L, {
                    channelLogin: this.props.channelLogin,
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), a.createElement(S.V, {
                    className: "channel-header",
                    flexShrink: 0
                }, y, a.createElement(S.V, {
                    display: S.H.Flex,
                    justifyContent: S.U.Between,
                    flexWrap: S.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, a.createElement(S.V, {
                    display: S.H.Flex,
                    alignItems: S.c.Stretch,
                    flexShrink: 0,
                    flexWrap: S.K.NoWrap,
                    "data-target": "channel-header-left"
                }, a.createElement(S.Q, {
                    className: r(f),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: S.H.Flex,
                    flexWrap: S.K.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(h), a.createElement(S.V, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: S.d.Center,
                    "data-target": "channel-header-button"
                }, a.createElement(d.a, {
                    alwaysMountBalloonContent: !0
                }, a.createElement(S.v, {
                    icon: S._11.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), a.createElement(S.p, {
                    direction: S.q.Bottom,
                    noTail: !0
                }, a.createElement(S.V, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), a.createElement(S.V, {
                    display: S.H.Flex,
                    flexWrap: S.K.NoWrap,
                    flexShrink: 0,
                    alignItems: S.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, a.createElement(S.V, {
                    className: "channel-header__follow-button",
                    display: S.H.Flex,
                    alignItems: S.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, a.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), a.createElement(S.V, {
                    margin: {
                        left: 1
                    }
                }, a.createElement(H.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), g)), a.createElement(c.a, {
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
                return t ? Object(m.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? a.createElement(S.V, {
                            className: "channel-header__item-count",
                            display: S.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(S._23, {
                            type: S._28.Span,
                            fontSize: S.L.Size5
                        }, e.count)) : null,
                        r = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), a.createElement(S.Q, {
                        key: "channel-header__item--" + e.label,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, a.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: r,
                        disabled: "#" === r,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), a.createElement(S.V, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: S.H.Flex
                    }, a.createElement(S._23, {
                        type: S._28.Span,
                        fontSize: S.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? a.createElement(S.V, {
                            className: "channel-header__item-count",
                            display: S.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(S._23, {
                            type: S._28.Span
                        }, e.count)) : null,
                        r = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), a.createElement(S.V, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, a.createElement(S.T, i.__assign({
                        linkTo: r,
                        disabled: "#" === r
                    }, o), a.createElement(S.V, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: S.H.Flex
                    }, a.createElement(S._23, {
                        type: S._28.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(W.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(W.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(W.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(W.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(W.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: this.isActiveTab(W.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return W[this.props.currentPage] === W[e]
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var r = this.getWidth(this.channelHeader).width,
                            a = this.getWidth(e).width + this.getWidth(t).width + 20 - r;
                        if (a > 0)
                            for (var o = n.length - 1; o >= 0; o--) {
                                if (!(l = n[o]).classList.contains("channel-header__item--hide")) {
                                    var s = this.getWidth(l);
                                    if (l.classList.add("channel-header__item--hide"), i[o].classList.remove("channel-header__item--hide"), (a -= s.width) <= 0) break
                                }
                            } else
                                for (o = 0; o < n.length; o++) {
                                    var l;
                                    if ((l = n[o]).classList.contains("channel-header__item--hide")) {
                                        l.classList.remove("channel-header__item--hide");
                                        if ((s = this.getWidth(l)).width >= Math.abs(a)) {
                                            l.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        l.classList.remove("channel-header__item--hide"), i[o].classList.add("channel-header__item--hide"), a += s.width
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== W.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(P, {
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
            }), Object(O.d)("ChannelHeader")], t)
        }(a.Component)
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
                r = Number(t);
            return n.setSeconds(r), n
        }
    },
    Tt3k: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var r = new FileReader;
            r.onloadend = function() {
                t(r.result)
            }, r.readAsArrayBuffer(e)
        }, t.a = function(e) {
            var t = "";
            if (e && e.name) {
                var n = e.name;
                t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
            }
            return "" === t && (t = "png"), t
        }
    },
    Tv4R: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e) {
                var t = i(e),
                    o = Math.abs(a - t.getTime());
                (void 0 === n || o < r) && (n = t, r = o)
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
            r = n("6sO2"),
            a = n("vH/s"),
            o = n("TnJK"),
            s = n("QFW6"),
            l = function(e) {
                r.m.track(a.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
            },
            c = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: e.settingName,
                    new_value: e.newValue.toString()
                });
                r.m.track(a.SpadeEventType.ChatSettingsChanged, t)
            },
            d = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: o.a.FollowerDuration,
                    new_value: e.newValue.toString(),
                    follower_mode_on: e.followerModeOn
                });
                r.m.track(a.SpadeEventType.ChatSettingsChanged, t)
            }
    },
    Utj3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("Etzl"),
            r = function() {
                function e(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = {
                        splitValues: !1
                    });
                    var n = this;
                    if (this.headersMap = {}, e)
                        if ("undefined" != typeof Headers && e instanceof Headers) {
                            i.getHeaderKeys(e).forEach(function(r) {
                                i.getHeaderValues(e, r).forEach(function(e) {
                                    t.splitValues ? n.append(r, i.splitHeaderValue(e)) : n.append(r, e)
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
                            r = i.indexOf(": ");
                        if (r > 0) {
                            var a = i.substring(0, r),
                                o = i.substring(r + 2);
                            this.append(a, o)
                        }
                    }
                }, e.prototype.delete = function(e, t) {
                    var n = i.normalizeName(e);
                    if (void 0 === t) delete this.headersMap[n];
                    else {
                        var r = this.headersMap[n];
                        if (r) {
                            var a = r.indexOf(t);
                            a >= 0 && r.splice(a, 1), 0 === r.length && delete this.headersMap[n]
                        }
                    }
                }, e.prototype.append = function(e, t) {
                    var n = this,
                        r = i.normalizeName(e);
                    Array.isArray(this.headersMap[r]) || (this.headersMap[r] = []), Array.isArray(t) ? t.forEach(function(e) {
                        n.headersMap[r].push(i.normalizeValue(e))
                    }) : this.headersMap[r].push(i.normalizeValue(t))
                }, e.prototype.set = function(e, t) {
                    var n = i.normalizeName(e);
                    if (Array.isArray(t)) {
                        var r = [];
                        t.forEach(function(e) {
                            r.push(i.normalizeValue(e))
                        }), this.headersMap[n] = r
                    } else this.headersMap[n] = [i.normalizeValue(t)]
                }, e.prototype.has = function(e, t) {
                    var n = this.headersMap[i.normalizeName(e)];
                    if (!Array.isArray(n)) return !1;
                    if (void 0 !== t) {
                        var r = i.normalizeValue(t);
                        return n.indexOf(r) >= 0
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
        t.BrowserHeaders = r
    },
    "Uu+E": function(e, t, n) {
        var i = n("xA5w"),
            r = n("iRXW"),
            a = n("nizW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n, r(n)),
                l = new Date(0);
            return l.setFullYear(o, 0, 4), l.setHours(0, 0, 0, 0), (n = r(l)).setDate(n.getDate() + s), n
        }
    },
    UzRK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
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
            r = 30,
            a = [0, 10, 30, 60, 1440, 10080, 43200, 129600]
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
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
            var e = a.k.get(s, {});
            return r.__assign({
                lastUsedFollowerDurations: {},
                showAutoModActions: !0,
                showMessageFlags: !0,
                showModerationActions: !0,
                showModIcons: !1,
                showTimestamps: !1,
                zachModeStatus: o
            }, e)
        }
        var r = n("TToO"),
            a = n("6sO2"),
            o = "control";
        t.a = i, t.b = function(e, t) {
            var n = i();
            n[e] = t, a.k.set(s, n)
        }, t.c = function(e, t) {
            var n = i();
            n.lastUsedFollowerDurations[e] = t, a.k.set(s, n)
        };
        var s = "chatSettings"
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
            return fetch(r.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + r.a.authClientID + "&api_version=" + r.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: a.b[n].id
                })
            })
        }, t.a = function(e, t, n, a) {
            return i.__awaiter(this, void 0, void 0, function() {
                var o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(r.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + r.a.authClientID + "&api_version=" + r.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return o = i.sent(), [2, o.json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("J92i")
    },
    WClm: function(e, t) {},
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
    WULK: function(e, t) {},
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, r, a;
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
                            if ((r = o.sent()) && Array.isArray(r) && r.length) return [2, b.Available];
                            o.label = 4;
                        case 4:
                            return [2, b.Unavailable];
                        case 5:
                            return a = o.sent(), h.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", a), [2, b.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(c.b)(e, w),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function a(e) {
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
            _ = n("Odds"),
            S = n("zzpv"),
            C = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a;
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
                                        return r = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return a = s.sent(), h.i.warn("Error while redeeming bits for truex ad", a), this.props.onError && this.props.onError(o.Unknown), [3, 8];
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
                    return m.createElement(_._19, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(f.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(g.a)(S, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            w = Object(s.b)(null, function(e) {
                return Object(p.b)({
                    closeModal: l.c
                }, e)
            })(C),
            E = n("HW6M"),
            O = n("3zLD"),
            D = n("jF7o"),
            x = n("w9tK"),
            N = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(b || (b = {}));
        var T, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(h.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._19, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.U.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.V, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(h.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.V, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(h.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.V, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._24.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            A = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            F = function(e) {
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
                    return A.test(navigator.userAgent) ? null : m.createElement(I, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            M = n("jxGs"),
            L = n("3iBR"),
            V = n("iydZ"),
            R = n("ZJYd"),
            U = n("CFVp"),
            j = n("qe65"),
            B = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(R.b)({
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
                    if (this.props.offer.type === M.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(F, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(R.c)(this.props.offer) ? t = m.createElement(_.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._23, {
                        type: _._28.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(R.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === M.c && (t = m.createElement(_.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._23, {
                        type: _._28.Strong,
                        fontSize: _.L.Size6
                    }, Object(h.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(R.c)(this.props.offer) || Object(R.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("one per account", "Bits--BuyCard")));
                    var r = this.props.isLastRow ? _._19 : _.V;
                    return m.createElement(r, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.U.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.V, {
                        display: _.H.Flex,
                        justifyContent: _.U.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.V, {
                        flexGrow: 1
                    }, m.createElement(_._23, {
                        type: _._28.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.V, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(_.V, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._24.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[L.f];
                    t || (t = Object(U.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.V, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(j.a, {
                            key: e.bits,
                            sources: Object(V.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            H = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(r, a) {
                    var o = m.createElement(B, {
                            key: r.id,
                            offer: r,
                            isLastRow: a + 1 < e.offers.length,
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
                        s = Object(R.d)(r),
                        l = Object(R.c)(r),
                        c = r.type === M.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? i = o : c || s || n.push(o)
                }), e.fullsize ? m.createElement(_.V, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n) : m.createElement(N.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.V, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n))
            }),
            P = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._23, {
                    italic: !0,
                    type: _._28.P,
                    color: _.F.Alt
                }, Object(h.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._23, {
                    color: _.F.Alt
                }, Object(h.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(_._23, {
                    color: _.F.Alt
                }, Object(h.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._19, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.V, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    color: _.F.Alt
                }, Object(h.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            W = n("nrdj"),
            z = function(e) {
                return m.createElement(_.V, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(W.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(_.V, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    bold: !0
                }, Object(h.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.Q, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._23, {
                    color: _.F.Alt2
                }, Object(h.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(h.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.V, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(h.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(h.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            q = function(e) {
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
                    return m.createElement(z, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            G = (n("q8Cw"), function(e) {
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
                var r = m.createElement(_.V, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(h.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (r = m.createElement(_.V, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.U.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(h.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(h.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.V, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.V, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: L.b + "/light/static/1/" + i + ".png"
                })), m.createElement(_.V, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._23, {
                    type: _._28.H4,
                    bold: !0
                }, t)), m.createElement(_._23, {
                    color: _.F.Alt2
                }, n), r)
            }),
            Y = n("CSlQ"),
            Q = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(T || (T = {}));
        var K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: T.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(D.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: T.Awarded,
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
                            wateb: T.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === T.Error && (t.setState({
                            wateb: T.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
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
                        }, m.createElement(_._10, {
                            asset: _._11.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._19, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        textAlign: _._24.Center
                    }, e), m.createElement(_.Z, {
                        delay: 0
                    }), m.createElement(_.V, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._23, {
                        italic: !0
                    }, Object(h.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.V, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        padding: 2,
                        textAlign: _._24.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._23, {
                        italic: !0
                    }, Object(h.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(_._19, u.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.U.Center,
                        textAlign: _._24.Center,
                        padding: 1
                    }, e), n, i);
                    var r = [];
                    this.props.data.currentUser ? r = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (r = this.props.data.bitsOffers);
                    var a = r.filter(function(e) {
                            return e.type === M.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(H, {
                            offers: r,
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
                    return this.props.location === y.b.ChatTooltip && (l = m.createElement(P, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: a
                    })), m.createElement(_._19, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case T.Awarded:
                            return m.createElement(q, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case T.Error:
                            return m.createElement(G, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(g.a)(Q, {
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
            J = Object(O.compose)(Object(Y.d)("BitsBuyCard", {
                autoReportInteractive: !0,
                destination: x.a.BitsBuyCard
            }))(K),
            $ = Object(s.b)(r, a)(J);
        n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return a
        }), n.d(t, "a", function() {
            return $
        })
    },
    WzS7: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
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
                    if (this.props.data && this.props.data.user && this.props.data.user.collections) {
                        var n = this.props.data.user.collections.edges;
                        if (0 === n.length) return null;
                        if (e = n[0].node, 0 === (t = Object(d.a)(e.videos)).length) return null
                    }
                    return r.createElement(u.V, {
                        padding: {
                            top: 3
                        }
                    }, this.renderCarouselHeader(), r.createElement(c.a, {
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
                    if (this.props.data && this.props.data.loading || !this.props.data.user || !this.props.data.user.collections) return r.createElement(u._3, {
                        width: 250,
                        lineCount: 1
                    });
                    var e = this.props.data.user.collections.edges[0].node,
                        t = Object(a.d)("Recently updated collection", "LatestCollectionCarousel"),
                        n = Object(a.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                            videoCountText: e.videos.totalCount
                        }, "LatestCollectionCarousel");
                    return r.createElement(u.V, {
                        display: u.H.Flex,
                        alignItems: u.c.Baseline
                    }, r.createElement(u.V, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, r.createElement(u._23, {
                        type: u._28.H4,
                        "data-test-selector": "collection-title"
                    }, e.title || Object(a.d)("Latest Collection", "LatestCollectionCarousel"))), r.createElement(u.V, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, r.createElement(u._23, {
                        color: u.F.Alt2,
                        type: u._28.Span,
                        "data-test-selector": "collection-metadata"
                    }, "· ", t, " · ", n)), r.createElement(u.u, {
                        type: u.z.Hollow,
                        size: u.x.Small,
                        icon: u._11.Play,
                        linkTo: "/collections/" + e.id,
                        "data-test-selector": "play-all-button"
                    }, Object(a.d)("Play all", "LatestCollectionCarousel")))
                }, t = i.__decorate([Object(o.a)(m), Object(l.d)("LatestCollectionCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
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
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? r.createElement(u.V, null, r.createElement(u._23, {
                        type: u._28.H4,
                        transform: u._27.Uppercase,
                        color: u.F.Alt2
                    }, this.props.gameName ? Object(a.d)("Popular videos from {game}", {
                        game: this.props.gameName
                    }, "PopularVideosByGameCarousel") : r.createElement(u._3, {
                        width: 200
                    })), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
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
                }, t = i.__decorate([Object(l.d)("PopularVideosByGameCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(g, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.gameName
                    }
                })], t)
            }(r.Component),
            b = Object(f.b)(function(e) {
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
                    return !this.props.data || this.props.data.loading || this.props.data.videos ? this.props.data && this.props.data.videos && 0 === (e = Object(d.a)(this.props.data.videos)).length ? null : r.createElement(u.V, null, r.createElement(u._23, {
                        type: u._28.H4,
                        transform: u._27.Uppercase,
                        color: u.F.Alt2
                    }, Object(a.d)("Popular Videos On Twitch", "PopularVideosCarousel")), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                        tracking: {
                            content: s.PageviewContent.PopularOverallVideos,
                            medium: this.props.tracking.medium,
                            location: this.props.tracking.location,
                            source: {}
                        },
                        videos: e
                    })) : null
                }, t = i.__decorate([Object(l.d)("PopularVideosCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(k)], t)
            }(r.Component),
            _ = n("f5HX"),
            S = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && (this.props.data.error || !this.props.data.user)) return null;
                    var e = !this.props.data || this.props.data.loading ? null : Object(d.a)(this.props.data.user.videos);
                    return e && 0 === e.length ? null : r.createElement(u.V, null, r.createElement(u._23, {
                        type: u._28.H4,
                        transform: u._27.Uppercase,
                        color: u.F.Alt2
                    }, this.props.displayName ? Object(a.d)("Recent videos from {displayName}", {
                        displayName: this.props.displayName
                    }, "RecentVideosFromUserCarousel") : r.createElement(u._3, {
                        width: 200
                    })), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
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
                }, t = i.__decorate([Object(l.d)("RecentVideosFromUserCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(_, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.userID
                    }
                })], t)
            }(r.Component),
            C = Object(f.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(S),
            w = n("Aj/L"),
            E = n("pwi9"),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && this.props.data.currentUser.recommendations && Object(d.a)(this.props.data.currentUser.recommendations.videos) || null;
                    if (this.props.data && !this.props.data.loading && (!e || 0 === e.length)) return null;
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return r.createElement(u.V, null, r.createElement(u._23, {
                        type: u._28.H4,
                        transform: u._27.Uppercase,
                        color: u.F.Alt2
                    }, Object(a.d)("Based On Your Viewing History", "RecommendedVideoCarousel")), r.createElement(c.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
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
                }, t = i.__decorate([Object(l.d)("RecommendedVideoCarousel", {
                    autoReportInteractive: !0
                }), Object(o.a)(E, {
                    skip: function(e) {
                        return !e.isLoggedIn || !e.firstPageLoaded
                    }
                })], t)
            }(r.Component),
            D = Object(f.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(w.d)(e)
                }
            })(O);
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
            return a
        });
        var i = n("U7vG"),
            r = (n.n(i), n("Odds")),
            a = function() {
                return i.createElement(r.A, null, i.createElement(r.j, {
                    ratio: r.k.Aspect16x9
                }, i.createElement(r._3, null)), i.createElement(r.B, null, i.createElement(r.V, {
                    display: r.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(r.V, {
                    display: r.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(r._3, {
                    width: 40,
                    height: 56
                })), i.createElement(r.V, {
                    display: r.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(r._23, null, i.createElement(r._3, {
                    width: 150
                })), i.createElement(r._23, {
                    fontSize: r.L.Size7
                }, i.createElement(r._3, {
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
            r = n("Jvcu"),
            a = n("AZvW");
        e.exports = function(e, t) {
            var n = i(e),
                o = Number(t),
                s = a(n);
            return r(n, o - s)
        }
    },
    YRFD: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e).getTime(),
                r = i(t).getTime();
            return n > r ? -1 : n < r ? 1 : 0
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
                a = t.smallestCheermote;
            if (n) {
                var o = {
                    cheerAboveMaxBitsPerEmote: i > s.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > s.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(o).some(function(e) {
                        return o[e]
                    })) return r.__assign({
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
                return !i || Object(a.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(l.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var r = n("TToO"),
            a = n("Ouuk"),
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
                r = Number(t);
            return n.setFullYear(r), n
        }
    },
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var i = n("TToO"),
            r = n("HW6M"),
            a = (n.n(r), n("OAwv")),
            o = (n.n(a), n("U7vG")),
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
                    return null !== t && (e = o.createElement(m.V, {
                        position: m._4.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._7, {
                        size: m._8.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._40)(this.props)), o.createElement(m.A, null, o.createElement(m.V, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-view-count",
                        icon: m._11.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(m._19, {
                        display: m.H.InlineFlex,
                        position: m._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._39.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._18, {
                        "data-test-selector": "video-length",
                        icon: m._11.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(d.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.V, {
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
                    var t = a.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = r("video-preview-card__preview-image", {
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
                    }, o.createElement(m.Q, {
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
                        n = r("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(m.V, {
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
                    }, o.createElement(m.Q, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._31, {
                        display: m.H.Block,
                        direction: m._33.Bottom,
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
                    return o.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m.V, {
                        "data-test-selector": "video-title",
                        overflow: m._0.Hidden,
                        position: m._4.Relative
                    }, o.createElement(m._23, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.W.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.V, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m._23, {
                        type: m._28.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m.Q, {
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
            f = Object(u.d)("VideoPreviewCard")(h)
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
                return !a[t] && (a[t] = !0, !0)
            })
        }
        var r = {
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
                    }
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
                    }
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
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
        r.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n("OcEY").definitions)), r.definitions = r.definitions.concat(i(n("576g").definitions)), e.exports = r
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
                    }
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
                    }
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "cheerMinimumBits"
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = i
    },
    ass3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function() {
            return {
                type: i
            }
        }, t.d = function(e, t, n) {
            return {
                type: r,
                viewerCardOptions: {
                    targetLogin: e,
                    sourceType: t,
                    sourceID: n
                }
            }
        };
        var i = "viewer-card.VIEWER_CARD_HIDDEN",
            r = "viewer-card.VIEWER_CARD_SHOWN"
    },
    b7g8: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e) {
            var t = i(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    balU: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Mdww");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = n.getFullYear(),
                s = n.getDate(),
                l = new Date(0);
            l.setFullYear(o, a, 15), l.setHours(0, 0, 0, 0);
            var c = r(l);
            return n.setMonth(a, Math.min(s, c)), n
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
                a = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? a.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
            }), r.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: i,
                        animated: a
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
                        color: o.e[a.a.Yellow],
                        images: n
                    })
                }()), s.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var l = r.__assign({}, e, {
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
        }, t.b = function(e) {
            return {
                cursor: e.entry_key,
                node: {
                    id: e.entry_key,
                    rank: e.rank,
                    score: e.score,
                    __typename: "BitsLeaderboardEntry"
                },
                __typename: "BitsLeaderboardEdge"
            }
        };
        var r = n("TToO"),
            a = n("I89S"),
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
            return r
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "b", function() {
            return m
        });
        var r, a = n("TToO"),
            o = n("6sO2"),
            s = n("vH/s"),
            l = n("xrVp"),
            c = n("164Z"),
            d = (n.n(c), this);
        ! function(e) {
            e.Video = "video", e.Collection = "collection"
        }(r || (r = {}));
        var u = function(e, t, n) {
                return a.__awaiter(d, void 0, void 0, function() {
                    var r, d, m, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!e) return [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return r = a.sent().data, d = i(e, r.video), m = {
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
                                return p = a.sent(), o.i.error(p.toString(), u.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            m = function(e, t, n) {
                return a.__awaiter(d, void 0, void 0, function() {
                    var r, d, u, p;
                    return a.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!e || !t.collectionID) return [2];
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return r = a.sent().data, d = i(e, r.video), u = {
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
                                return p = a.sent(), o.i.error(p.toString(), m.name), [3, 4];
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
            r = n("U7vG"),
            a = n("F8kA"),
            o = n("Odds"),
            s = function(e) {
                return r.createElement(o.V, {
                    margin: {
                        right: 1
                    },
                    display: o.H.Flex,
                    alignItems: o.c.Center
                }, r.createElement(o._31, {
                    align: o._32.Left,
                    label: e.tooltip,
                    direction: o._33.Bottom
                }, r.createElement(o.V, {
                    margin: {
                        right: .5
                    }
                }, r.createElement(o._19, {
                    display: o.H.Flex,
                    alignItems: o.c.Center,
                    color: o.F.Alt2
                }, r.createElement(o._10, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), r.createElement(o._23, {
                    fontSize: o.L.Size5,
                    ellipsis: !0
                }, r.createElement(a.a, i.__assign({
                    to: e.linkTo
                }, Object(o._40)(e), {
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
            r = n("Ejve"),
            a = n("MSvX");
        t.a = function(e) {
            return i.b.get(a.a, !1) || i.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(a.a, !1) && i.a.buildType === r.a.Production
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
                r = Number(t);
            return n.setMinutes(r), n
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
                    }
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
                    }
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
                                            value: "displayName"
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
                            value: "description"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                            value: "scope"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
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
                            value: "language"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 846
            }
        };
        n.loc.source = {
            body: "query VideoWatchPage_Video($videoID: ID $collectionID: ID! $useCollectionID: Boolean!) {\ncurrentUser {\nid\ndisplayName\n}\n# If the page specifies a video ID query it directly.\nvideo(id: $videoID options: { includePrivate: true }) @skip(if: $useCollectionID) {\n...videoFields\n}\n# If the page is a collection page grab the first video from the collection.\ncollection(id: $collectionID) @include(if: $useCollectionID) {\nitems(first: 1) {\ntotalCount\nedges {\nnode {\n... on Video {\n...videoFields\n}\n}\n}\n}\nowner {\nid\nlogin\ndisplayName\n}\n}\n}\n# These are the fields used by the watch page.\nfragment videoFields on Video {\nid\nbroadcastType\ntitle\ndescription\nlengthSeconds\npublishedAt\nviewCount\nscope\npreviewThumbnailURL(width: 126 height: 71)\ngame {\nid\nboxArtURL(width: 138 height: 190)\nname\n}\nowner {\nid\ndisplayName\nlogin\nchatSettings {\nrules\n}\n}\nlanguage\n}",
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
                r = i(t);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var i = n("WNGz");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
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
                                    value: "userID"
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    fHoP: function(e, t) {},
    fK0I: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() > r.getTime()
        }
    },
    fKKh: function(e, t) {},
    fTsm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("7enT"),
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
                    return c.createElement(d.V, {
                        className: e,
                        flexWrap: d.K.NoWrap,
                        fullHeight: this.props.theatreModeEnabled,
                        fullWidth: !this.props.rightColumnExpanded,
                        position: this.props.theatreModeEnabled ? d._4.Fixed : d._4.Relative
                    }, c.createElement(d.j, null, this.props.children))
                }, t
            }(c.Component));
        n.d(t, "a", function() {
            return m
        });
        var m = Object(i.b)(function(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded
            }
        }, function(e) {
            return Object(r.b)({
                onTheatreModeDisabled: a.n,
                onTheatreModeEnabled: a.o
            }, e)
        })(u)
    },
    fUo1: function(e, t, n) {
        var i = n("iRXW"),
            r = n("7EGB"),
            a = 6048e5;
        e.exports = function(e) {
            var t = i(e),
                n = i(r(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / a)
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
            return s.createElement("a", {
                key: e,
                className: "chat-line__message--link",
                href: t.content.url,
                target: "_blank",
                rel: "noreferrer noopener"
            }, t.content.displayText)
        }

        function r(e) {
            var t = Object(m.a)("https://twitch.amazon.com/prime", {
                ref: "subscriptionMessage",
                channel: e
            });
            return s.createElement("a", {
                className: "chat-line__subscribe--prime",
                href: t,
                target: "_blank",
                rel: "noopener"
            }, Object(l.d)("Twitch Prime", "ChatLine"))
        }

        function a(e, t) {
            return Object(l.d)("{userLogin} just subscribed with {service}!", {
                userLogin: e,
                service: t
            }, "ChatLine")
        }

        function o(e, t) {
            return Object(l.d)("{userLogin} just subscribed with a {subTier} sub!", {
                userLogin: e,
                subTier: t
            }, "ChatLine")
        }
        t.g = function() {
            return s.createElement("span", {
                key: "thankyou"
            }, Object(l.d)("Thank you for your feedback!", "ChatLine"))
        }, t.j = function(e, t, n) {
            var r = null,
                a = e.reduce(function(a, o, l) {
                    switch (o.type) {
                        case b.a.Text:
                            var c = l > 0;
                            return a.concat(function(e, t, n, i, r) {
                                var a = [],
                                    o = "";
                                i && (o = o.concat(" "));
                                var l = e.content.split(/\s+/);
                                return l.forEach(function(e, i) {
                                    if ("" !== e) {
                                        var r = i < l.length - 1 ? e + " " : e;
                                        (t || n) && function(e, t, n) {
                                            var i = e.trim().toLowerCase();
                                            return t && i === t.toLowerCase() || n && i === n.toLowerCase()
                                        }(e, t, n) ? (a = (a = a.concat(o)).concat(s.createElement(k.V, {
                                            className: "chat-line__message--mention-recipient",
                                            display: k.H.InlineFlex,
                                            key: "" + e + i,
                                            "data-a-target": "chat-message-mention"
                                        }, r)), o = "") : o = o.concat(r)
                                    }
                                }), a = a.concat(o), s.createElement("span", {
                                    key: "chat-line__message-text-" + r,
                                    "data-a-target": "chat-message-text"
                                }, a)
                            }(o, t, n, c, l));
                        case b.a.Mention:
                            var d = "";
                            return function(e) {
                                return e.content && e.content.sender
                            }(o) && t && o.content.sender.toLowerCase() === t.toLowerCase() ? d = "chat-line__message--mention-sender" : function(e) {
                                return e.content && e.content.recipient
                            }(o) && t && o.content.recipient.toLowerCase() === t.toLowerCase() && (d = "chat-line__message--mention-recipient"), a.concat(s.createElement(k.V, {
                                className: d,
                                display: k.H.InlineFlex,
                                key: l,
                                "data-a-target": "chat-message-mention"
                            }, "@" + o.content.recipient));
                        case b.a.Link:
                            return a = a.concat(i(l, o)), e.length > l + 1 && e[l + 1].type === b.a.Link && a.push(" "), a;
                        case b.a.Emote:
                            return a = a.concat(s.createElement(h.a, {
                                key: l,
                                emote: o.content
                            })), e.length > l + 1 && e[l + 1].type === b.a.Emote && a.push(" "), a;
                        case b.a.ClipLink:
                            return r ? a.concat(i(l, o)) : (r = s.createElement(f.a, {
                                key: l,
                                slug: o.content.slug
                            }), a);
                        case b.a.VideoLink:
                            return r ? a.concat(i(l, o)) : (r = s.createElement(g.a, {
                                key: l,
                                id: o.content.id,
                                url: o.content.url
                            }), a);
                        default:
                            return a.concat(s.createElement("span", {
                                key: l
                            }))
                    }
                }, []);
            return r && (a = a.concat(r)), a
        }, t.k = function(e) {
            if (e.type === v.a.Ban) return e.reason ? s.createElement("span", {
                className: "chat-line__moderation--ban-with-reason"
            }, Object(l.d)("{userLogin} has been banned. Reason: {reason}", {
                userLogin: e.userLogin,
                reason: e.reason
            }, "ChatLine")) : s.createElement("span", {
                className: "chat-line__moderation--ban"
            }, Object(l.d)("{userLogin}  is now banned from this room.", {
                userLogin: e.userLogin
            }, "ChatLine"));
            if (e.reason && e.duration) {
                var t = Object(l.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                    duration: e.duration,
                    reason: e.reason,
                    userLogin: e.userLogin
                }, "ChatLine");
                return s.createElement("span", {
                    className: "chat-line__moderation--timeout-with-reason"
                }, t)
            }
            return e.duration ? s.createElement("span", {
                className: "chat-line__moderation--timeout"
            }, Object(l.d)("{userLogin} has been timed out for {duration} seconds.", {
                userLogin: e.userLogin,
                duration: e.duration
            }, "ChatLine")) : void 0
        }, t.u = r, t.a = a, t.b = o, t.r = function(e) {
            return e.isPrime ? s.createElement("span", null, a(e.userLogin, r(e.channel))) : s.createElement("span", null, o(e.userLogin, e.tier))
        }, t.q = function(e) {
            return "custom" === e.tier ? s.createElement("span", null, function(e, t) {
                return Object(l.d)("{userLogin} gifted a subscription to {recipient}!", {
                    userLogin: e,
                    recipient: t
                }, "ChatLine")
            }(e.userLogin, e.recipient)) : s.createElement("span", null, function(e, t, n) {
                return Object(l.d)("{userLogin} gifted a {subTier} sub to {recipient}!", {
                    userLogin: e,
                    subTier: t,
                    recipient: n
                }, "ChatLine")
            }(e.userLogin, e.tier, e.recipient))
        }, t.c = function(e) {
            var t = e.daysLeft;
            0 === t && (t = e.hoursLeft);
            var n = {
                bitsTotal: s.createElement("strong", null, Object(p.e)(e.total, {
                    style: "currency",
                    currency: "USD"
                })),
                charityName: s.createElement("strong", null, e.charityName),
                learnMoreURL: s.createElement("a", {
                    href: e.learnMore,
                    target: "_blank"
                }, e.learnMore),
                hashtag: s.createElement("strong", null, e.hashtag),
                timeRemaining: Object(p.e)(t)
            };
            return s.createElement("span", null, 0 === e.daysLeft ? function(e) {
                return Object(l.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more hours to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n) : function(e) {
                return Object(l.d)("{bitsTotal} total raised so far for {charityName}! {timeRemaining} more days to show support. Cheer and include {hashtag}. Learn More at {learnMoreURL}", {
                    bitsTotal: e.bitsTotal,
                    charityName: e.charityName,
                    timeRemaining: e.timeRemaining,
                    hashtag: e.hashtag,
                    learnMoreURL: e.learnMoreURL
                }, "ChatLine")
            }(n))
        }, t.o = function(e) {
            var t = e.enabled ? Object(l.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                length: e.length
            }, "ChatLine") : Object(l.d)("This room is no longer in slow mode.", "ChatLine");
            return s.createElement("span", null, t)
        }, t.l = function(e) {
            return s.createElement("span", null, e.message)
        }, t.i = function(e) {
            return s.createElement("span", null, e.message)
        }, t.n = function(e) {
            var t;
            if (e.length > 0) {
                var n = e.join(", ");
                t = Object(l.d)("The moderators of this room are: {moderatorList}", {
                    moderatorList: n
                }, "ChatLine")
            } else t = Object(l.d)("There are no moderators of this room.", "ChatLine");
            return s.createElement("span", null, t)
        }, t.h = function(e) {
            if (e.enabled) {
                var t = 0 === e.length ? Object(l.d)("This room is in followers-only mode.", "ChatLine") : Object(l.d)("This room is now in {length} followers-only mode.", {
                    length: Object(u.a)(60 * e.length)
                }, "ChatLine");
                return s.createElement("span", null, t)
            }
            return s.createElement("span", null, Object(l.d)("This room is no longer in followers-only mode.", "ChatLine"))
        }, t.f = function(e) {
            return e.enabled ? s.createElement("span", null, Object(l.d)("This room is now in emote-only mode.", "ChatLine")) : s.createElement("span", null, Object(l.d)("This room is no longer in emote-only mode.", "ChatLine"))
        }, t.p = function(e) {
            var t = e.enabled ? Object(l.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(l.d)("This room is no longer in subscriber-only mode.", "ChatLine");
            return s.createElement("span", null, t)
        }, t.d = function() {
            return s.createElement("span", null, Object(l.d)("Chat was cleared by a moderator", "ChatLine"))
        }, t.s = function(e) {
            return s.createElement("span", {
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
        }, t.t = function(e) {
            return s.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, function(e, t) {
                void 0 === t && (t = {});
                var n = l.n.intl.getLanguageCode() || "en";
                return Intl.DateTimeFormat(n, t).format(e)
            }(new Date(e), {
                hour: "numeric",
                minute: "numeric"
            }))
        }, t.v = function() {
            return s.createElement("span", null, Object(l.d)("The raid has been cancelled.", "RaidCancelMessage"))
        }, t.e = function(e) {
            return s.createElement(k._19, {
                borderMarked: !0,
                borderBottom: !1
            }, s.createElement(k.V, {
                className: "chat-line__status",
                display: k.H.Flex,
                alignItems: k.c.Center,
                flexWrap: k.K.NoWrap
            }, s.createElement(k.Q, {
                flexShrink: 0
            }, s.createElement("img", {
                src: d.a,
                height: "32",
                width: "32"
            })), s.createElement(k.V, {
                margin: {
                    left: .5
                }
            }, Object(l.d)("<x:boldpurple>{userName}</x:boldpurple>'s Cheer unlocked gifts for <x:bold>{numberOfGifts, number} others</x:bold>!", {
                userName: e.message.user.userDisplayName,
                numberOfGifts: e.selectedCount,
                "x:boldpurple": function(e) {
                    return s.createElement(k._23, {
                        type: k._28.Span,
                        bold: !0,
                        color: k.F.Link
                    }, e)
                },
                "x:bold": function(e) {
                    return s.createElement("strong", null, e)
                }
            }, "Crates"))), s.createElement(k._19, {
                className: "chat-line__status",
                background: k.m.Alt2
            }, s.createElement(k._23, {
                bold: !0,
                color: k.F.Link
            }, Object(l.d)("Cheer 250+ to unlock gifts for others in chat!", "Crates"))))
        }, t.m = function(e, t, n) {
            return 0 === n ? Object(l.d)("<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}!</x:bold>", {
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return s.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage") : Object(l.d)("{numCrates, plural, one {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened a <x:bold>Twitch Crate!</x:bold>} other {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened # <x:bold>Twitch Crates!</x:bold>}}", {
                numCrates: n,
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return s.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage")
        };
        var s = n("U7vG"),
            l = (n.n(s), n("6sO2")),
            c = n("cv4W"),
            d = n.n(c),
            u = n("FsFC"),
            m = n("yDzg"),
            p = n("J4ib"),
            h = n("hXeO"),
            f = n("5vPJ"),
            g = n("kBA+"),
            v = n("qkCi"),
            b = n("mwvJ"),
            k = n("Odds")
    },
    gAt4: function(e, t, n) {
        var i = n("xA5w"),
            r = n("nizW"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setDate(n.getDate() - s * l), s * (l - (a(n, o) === -s))
        }
    },
    gDPd: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() < r.getTime()
        }
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i + 1), r.setHours(0, 0, 0, 0), r
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
            return a
        });
        var i = n("U7vG"),
            r = (n.n(i), n("8RKZ")),
            a = function(e) {
                var t, n = e.emote,
                    a = n.alt || "";
                return n.cheerAmount && (a += " " + n.cheerAmount.toString(), t = i.createElement("strong", {
                    className: "chat-line__message--cheer-amount",
                    style: {
                        color: n.cheerColor
                    }
                }, n.cheerAmount)), i.createElement(r.a, {
                    alt: a,
                    cheerText: t,
                    className: "chat-line__message--emote",
                    srcKey: "1x",
                    srcSet: n.images
                })
            }
    },
    hico: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = r(n);
            return a.setDate(a.getDate() - 1), a
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
            var t, n = Object(a.d)("{bitsAmount} Bits", {
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
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? m.dark = m.light : m.light = m.dark), t = r.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), r.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, r.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return r.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, r.createElement("span", null, n))
        }
        var r = n("U7vG"),
            a = n("6sO2"),
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
    iRXW: function(e, t, n) {
        var i = n("zZbG"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), r(n)
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
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = i.referenceTracking,
                                    o = a.content,
                                    s = a.medium,
                                    c = a.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
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
                    }, i
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var r = n("TToO"),
            a = n("OAwv"),
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
                    r = !1;
                try {
                    i = e.closed, r = !!e.success
                } catch (e) {}
                if (i || r) {
                    t(r);
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
                r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
                        return r[e.getDay()]
                    },
                    dddd: function(e) {
                        return a[e.getDay()]
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
            r = n("U7vG"),
            a = n("6sO2"),
            o = n("cAee"),
            s = n("zAjo"),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTrackHandler = function(e) {
                        switch (e.shareTrackingType) {
                            case o.a.Video:
                                return Object(o.c)(t.props.video, e, a.n.apollo.client);
                            case o.a.Collection:
                                return Object(o.b)(t.props.video, e, a.n.apollo.client);
                            default:
                                return e.shareTrackingType
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.b, {
                        collectionID: this.props.collectionID,
                        video: this.props.video,
                        buttonType: this.props.buttonType,
                        balloonDirection: this.props.balloonDirection,
                        onShareClick: this.onTrackHandler,
                        lastVideoOffset: this.props.lastVideoOffset
                    })
                }, t
            }(r.Component);
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
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var i = "AD",
            r = "BUNDLE",
            a = "first_time_purchase",
            o = "single_purchase",
            s = "black_friday_2017"
    },
    jy2q: function(e, t, n) {
        var i = n("xA5w"),
            r = n("balU");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return r(n, n.getMonth() + 3 * a)
        }
    },
    k2hM: function(e, t) {},
    "kBA+": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
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
                    if (n || t && !t.owner) return r.createElement(l.a, {
                        error: {
                            title: Object(a.d)("Something went wrong", "VideoChatCard"),
                            description: Object(a.d)("We couldn't find that video", "VideoChatCard")
                        }
                    });
                    if (i || !t) return r.createElement(l.a, null);
                    var o = r.createElement(c._23, null, Object(a.c)(new Date(t.publishedAt), "medium"), r.createElement("span", null, " · "), Object(s.a)(t.owner.login, t.owner.displayName));
                    return r.createElement(l.a, {
                        data: {
                            title: t.title,
                            description: o,
                            previewImageURL: t.previewThumbnailURL,
                            contentURL: this.props.url
                        }
                    })
                }, t
            }(r.Component),
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
            r = n("MIQa"),
            a = n("xKy+");
        e.exports = function(e) {
            var t = i(e);
            return r(t).getTime() === a(t).getTime()
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
    kRs6: function(e, t, n) {
        var i = n("Qxz6");
        e.exports = function(e) {
            return i(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var i = n("G7No"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = i(e, t) / r;
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

        function r(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return O.__assign({}, e, n)
        }

        function a(e, t) {
            return fetch(e, t).then(function(e) {
                return e.status >= 300 ? Promise.reject(e) : e
            })
        }

        function o(e) {
            void 0 === e && (e = "");
            var t = {};
            return "" !== e && (t[Ue] = "OAuth " + e), t
        }

        function s(e) {
            return ze.getClient(Object(Le.a)(e.getState()))
        }

        function l(e) {
            return e.reduce(function(e, t) {
                return e[t._id] = t.version, e
            }, {})
        }

        function c(e) {
            var t = function(e) {
                return new URL(je + "/videos/" + e)
            }(e);
            return new URL(t.toString() + "/comments")
        }

        function d(e) {
            var t = u(e).toString();
            return new URL(t + "/replies")
        }

        function u(e) {
            return new URL(je + "/videos/comments/" + e)
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
                r = {
                    method: Be,
                    body: JSON.stringify(i)
                };
            return e.doAuthRequest(n, r).then(function(e) {
                return Xe(e)
            })
        }

        function p(e, t) {
            try {
                if (function(e) {
                        return "commentID" in e
                    }(t)) return function(e, t) {
                    var n, i = new URLSearchParams;
                    void 0 !== t.cursor && i.append(ot, t.cursor);
                    return n = new URL("?" + i.toString(), d(t.commentID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                        return nt(e)
                    })
                }(e, t);
                var n = void 0,
                    i = new URLSearchParams;
                return f(t) ? i.append(ot, t.cursor) : g(t) && (i.append(at, "" + t.offset), void 0 !== t.highlightedMessageID && i.append(st, t.highlightedMessageID)), n = new URL("?" + i.toString(), c(t.videoID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                    return tt(e, t.bitsConfig)
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
                var t = new URL(je + "/videos/comments/"),
                    n = new URLSearchParams;
                return n.append(ut, pt.toString()), n.append(dt, e.userId), void 0 !== e.cursor && n.append(ot, e.cursor), t.search = "?" + n, t
            }(e) : function(e) {
                var t = new URL(je + "/videos/comments/"),
                    n = new URLSearchParams;
                return n.append(ut, pt.toString()), n.append(mt, e.videoId), void 0 !== e.cursor && n.append(ot, e.cursor), t.search = "?" + n, t
            }(e), t.doAuthRequest(n, {}).then(function(t) {
                return lt(t, e.bitsConfig)
            })
        }

        function b(e, t) {
            var n = new URL(function(e) {
                    return new URL(je + "/videos/channels/" + e.targetChannel + "/bans")
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

        function _(e) {
            return e.past !== de
        }

        function S(e, t) {
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
        n("R9op");
        var w = n("2KeS"),
            E = n("6sO2"),
            O = n("TToO"),
            D = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
            x = "vodChat.channel-moderation-comments.RESULTS_FAILED",
            N = "vodChat.channel-moderation-comments.BAN_SUCCESS",
            T = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
            I = "videoChat.is_replay_mode",
            A = "videoChat.hide_timestamps",
            F = "vodChat.comments.DELETED_SUCCESS",
            M = "vodChat.comments.CREATED_SUCCESS",
            L = "vodChat.comments.CREATE_FAILED",
            V = "vodChat.comments.DISPLAY_ERROR",
            R = function(e) {
                return {
                    type: V,
                    errorMessage: e
                }
            },
            U = "vodChat.comments.UPDATED_SUCCESS",
            j = "vodChat.comments.CURSOR_RECEIVED",
            B = "vodChat.comments.OFFSET_RECEIVED",
            H = "vodChat.comments.QUERY_FAILED",
            P = "vodChat.comments.CLEARED",
            W = function() {
                return {
                    type: P
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
            $ = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
            Z = function() {
                return {
                    type: $
                }
            },
            X = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
            ee = function(e) {
                return E.k.set(A, e), {
                    type: X,
                    hideTimestamps: e
                }
            },
            te = "vodChat.comments.REQUEST_CHAT_SETTINGS",
            ne = function() {
                return {
                    type: te,
                    isReplayFilterOn: E.k.get(I, !1),
                    hideTimestamps: E.k.get(A, !1)
                }
            },
            ie = function(e) {
                return O.__assign({
                    searchHits: [],
                    videos: {}
                }, e)
            },
            re = "vodChat.video.CURRENT_VIDEO_CHANGED",
            ae = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
            oe = function(e) {
                return {
                    type: re,
                    id: e
                }
            },
            se = function(e) {
                return {
                    type: ae,
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
                return O.__assign({
                    commentCount: 0,
                    maxOffset: pe,
                    minOffset: me,
                    parentComments: {},
                    offsets: {},
                    replies: {}
                }, e)
            },
            fe = function(e, t) {
                var n = _e(e);
                return t.forEach(function(e) {
                    var t = e.id,
                        i = e.contentOffset,
                        r = e.parentId;
                    if ("" === r) {
                        n.minOffset = Math.min(n.minOffset, i), n.maxOffset = Math.max(n.maxOffset, i), n.parentComments = O.__assign({}, n.parentComments, (l = {}, l[t] = e, l));
                        var a = n.offsets[i];
                        Array.isArray(a) ? a.includes(t) || (n.offsets[i] = a.concat(t), n.commentCount++) : (n.offsets[i] = [t], n.commentCount++)
                    } else {
                        var o = n.replies[r];
                        if (Array.isArray(o)) {
                            var s = o.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 !== s ? o[s] = e : (n.replies[r] = o.concat(e), n.commentCount++)
                        } else n.replies[r] = [e], n.commentCount++
                    }
                    var l
                }), n
            },
            ge = function(e, t) {
                if (t in e.parentComments) return e.parentComments[t]
            },
            ve = function(e, t) {
                var n = _e(e);
                return ue(t) ? we(n, t.parentId, t.id) : Ce(n, t.id)
            },
            be = function(e, t) {
                if (e.commentCount < t || ye(e)) return e;
                for (var n = e; n.commentCount > t && !ye(e);) n = Ee(n, n.minOffset);
                return n
            },
            ke = function(e, t) {
                var n = _e(e);
                return Object.keys(e.parentComments).forEach(function(i) {
                    var r = e.parentComments[i];
                    t(r) || (n = Ce(n, r.id))
                }), Object.keys(e.replies).forEach(function(i) {
                    e.replies[i].forEach(function(e) {
                        t(e) || (n = we(n, e.id, e.parentId))
                    })
                }), n
            },
            ye = function(e) {
                return e.minOffset === e.maxOffset
            },
            _e = function(e) {
                return {
                    commentCount: e.commentCount,
                    maxOffset: e.maxOffset,
                    minOffset: e.minOffset,
                    offsets: Se(e.offsets),
                    parentComments: O.__assign({}, e.parentComments),
                    replies: O.__assign({}, e.replies)
                }
            },
            Se = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[Number(n)] = e[Number(n)].slice(), t
                }, {})
            },
            Ce = function(e, t) {
                if (!(t in e.parentComments)) return e;
                var n = e.parentComments[t].contentOffset,
                    i = e.offsets[n],
                    r = [];
                if (i && (r = i.filter(function(e) {
                        return e !== t
                    })), e.offsets[n] = r, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                    var a = e.replies[t].length;
                    delete e.replies[t], e.commentCount -= a
                }
                return e
            },
            we = function(e, t, n) {
                if (!(t in e.replies)) return e;
                var i = e.replies[t].length,
                    r = e.replies[t].filter(function(e) {
                        if (e.id !== n) return e
                    });
                e.replies[t] = r, 0 === r.length && delete e.replies[t];
                var a = i - r.length;
                return e.commentCount -= a, e
            },
            Ee = function(e, t) {
                return t >= e.minOffset && t <= e.maxOffset && !ye(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                    e = Ce(e, t)
                }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
            },
            Oe = function() {
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
            xe = function(e) {
                return O.__assign({
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
            Ae = function(e) {
                return O.__assign({
                    users: {}
                }, e)
            },
            Fe = Object(w.c)({
                comments: function(e, t) {
                    switch (void 0 === e && (e = xe()), t.type) {
                        case M:
                            var n = O.__assign({}, t.comments[0], {
                                highlight: !0,
                                source: ce
                            });
                            return O.__assign({}, e, {
                                comments: fe(e.comments, [n]),
                                isPostCooldownActive: !0
                            });
                        case L:
                            return O.__assign({}, e, {
                                errorMessage: t.createError
                            });
                        case V:
                            return O.__assign({}, e, {
                                errorMessage: t.errorMessage
                            });
                        case j:
                            var r = t.comments[0].parentId,
                                a = e.cursor,
                                o = e.replyCursorMap,
                                s = t.comments.slice();
                            if ("" === r) a = t.cursor;
                            else if (o = O.__assign({}, e.replyCursorMap, (p = {}, p[r] = t.cursor.future, p)), t.cursor.future === de) {
                                var l = ge(e.comments, r);
                                if (l) {
                                    var c = O.__assign({}, l, {
                                        moreReplies: !1
                                    });
                                    s.push(c)
                                }
                            }
                            var d = fe(e.comments, s);
                            return e.isScrollingSynced && (d = be(d, Ne)), O.__assign({}, e, {
                                comments: d,
                                cursor: a,
                                hasLoadedData: !0,
                                replyCursorMap: o
                            });
                        case B:
                            return O.__assign({}, e, {
                                comments: fe(he(), t.comments),
                                hasLoadedData: !0,
                                cursor: t.cursor,
                                replyCursorMap: {}
                            });
                        case H:
                            return O.__assign({}, e, {
                                hasLoadedData: !0
                            });
                        case D:
                            return O.__assign({}, e, {
                                comments: fe(he(), t.comments),
                                cursor: t.cursor,
                                hasLoadedData: !0,
                                errorMessage: ""
                            });
                        case x:
                            return O.__assign({}, xe(), {
                                hasLoadedData: !0,
                                errorMessage: t.error
                            });
                        case ae:
                            return O.__assign({}, e, {
                                currentVideoTime: Math.floor(t.updatedTime)
                            });
                        case re:
                        case P:
                            return O.__assign({}, xe());
                        case F:
                            return O.__assign({}, e, {
                                comments: ve(e.comments, t.comment)
                            });
                        case z:
                            var u = e.errorMessage;
                            return u === i().messageCreatedTooQuickError && (u = ""), O.__assign({}, e, {
                                isPostCooldownActive: !1,
                                errorMessage: u
                            });
                        case Y:
                            return O.__assign({}, e, {
                                isScrollingSynced: !1
                            });
                        case q:
                            return O.__assign({}, e, {
                                comments: be(e.comments, Ne),
                                isScrollingSynced: !0
                            });
                        case N:
                            var m = function(e) {
                                return e.commenter !== t.user
                            };
                            return O.__assign({}, e, {
                                comments: ke(e.comments, m)
                            });
                        case U:
                            return O.__assign({}, e, {
                                comments: fe(e.comments, t.comments)
                            });
                        case K:
                            return O.__assign({}, e, {
                                isReplayFilterOn: t.isReplayFilterOn
                            });
                        case $:
                            return O.__assign({}, e, {
                                hasDismissedChatReplayError: !0
                            });
                        case X:
                            return O.__assign({}, e, {
                                hideTimestamps: t.hideTimestamps
                            });
                        case te:
                            return O.__assign({}, e, {
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
                        case j:
                        case B:
                        case D:
                        case M:
                            return {
                                users: r(e.users, t.users)
                            };
                        case P:
                            return O.__assign({}, Ae());
                        default:
                            return e
                    }
                },
                moderation: function(e, t) {
                    switch (void 0 === e && (e = ie()), t.type) {
                        case D:
                            return O.__assign({}, e, {
                                videos: function(e, t) {
                                    var n = t.reduce(function(e, t) {
                                        return e[t.id] = t, e
                                    }, {});
                                    return O.__assign({}, e, n)
                                }(e.videos, t.videos)
                            });
                        case T:
                            return t.hits && t.hits.results.length > 0 ? O.__assign({}, e, {
                                searchHits: t.hits.results
                            }) : O.__assign({}, e, {
                                searchHits: []
                            });
                        case P:
                            return O.__assign({}, ie());
                        default:
                            return e
                    }
                }
            });
        E.n.store.registerReducer("vodChat", Fe);
        var Me, Le = n("Aj/L"),
            Ve = n("i5XQ"),
            Re = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = new Ve.BrowserHeaders(t),
                    i = new Ve.BrowserHeaders(e);
                return n.forEach(function(e, t) {
                    i.set(e, t)
                }), i
            },
            Ue = "Authorization",
            je = "https://api.twitch.tv/v5",
            Be = "POST",
            He = "PUT",
            Pe = "DELETE",
            We = (Me = {}, Me.Accept = "application/vnd.twitchtv.v5+json", Me["Content-Type"] = "application/json", Me["CLIENT-ID"] = "jzkbprff40iqj646a697cyrvl0zt2m6", Me),
            ze = function() {
                function e(e) {
                    this.chatOAuthToken = e
                }
                return e.getClient = function(t) {
                    return void 0 === t && (t = ""), new e(t)
                }, e.prototype.doRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = O.__assign({}, t, {
                        headers: Re(We, t.headers).toHeaders()
                    });
                    return function(e, t) {
                        return a(e, t).then(function(e) {
                            return e.json()
                        })
                    }(new Request(e.toString(), n))
                }, e.prototype.doAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = O.__assign({}, t, {
                        headers: Re(o(this.chatOAuthToken), t.headers)
                    });
                    return this.doRequest(e, n)
                }, e.prototype.doRawRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = O.__assign({}, t, {
                        headers: Re(We, t.headers).toHeaders()
                    });
                    return a(new Request(e.toString(), n))
                }, e.prototype.doRawAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = O.__assign({}, t, {
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
                    r = e.emoticons || [],
                    a = [];
                return a = 0 === r.length ? e.bits_spent ? a.concat(Object(qe.c)(i, n)) : a.concat(Object(Ye.c)(i, t, !1)) : function(e, t, n, i) {
                    var r, a = 0,
                        o = Array.from(t);
                    return r = e.reduce(function(e, t) {
                        var n = t.begin,
                            i = t.end,
                            r = o.slice(a, n),
                            s = o.slice(n, i + 1);
                        return 0 !== r.length && (e = e.concat(Object(Ye.c)(r.join(""), "", !1))), e.push({
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
                        }), a = i + 1, e
                    }, []), a < t.length && (r = r.concat(Object(Ye.c)(o.slice(a).join(""), "", !1))), i ? r.reduce(function(e, t) {
                        return t.type === Ge.a.Text ? e.concat(Object(qe.c)(t.content, n)) : (e.push(t), e)
                    }, []) : r
                }(r, i, n, void 0 !== e.bits_spent), {
                    id: "1",
                    isAction: e.is_action,
                    tokens: a,
                    userColor: e.user_color ? e.user_color : Object(Ye.b)(t)
                }
            },
            Ke = function() {
                return function(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
            }(),
            Je = "https://static-cdn.jtvnw.net",
            $e = Je + "/emoticons/v1/",
            Ze = function(e) {
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
                    comments: [it.normalizeRecord(e, qe.a)],
                    users: [Ze(e.commenter)]
                }
            },
            et = function(e, t) {
                var n = O.__assign({}, e, {
                    more_replies: t.moreReplies
                });
                return {
                    comments: [it.normalizeRecord(n, qe.a)],
                    users: [Ze(e.commenter)]
                }
            },
            tt = function(e, t) {
                var n = e.comments.map(function(e) {
                        return Ze(e.commenter)
                    }),
                    i = {
                        past: de,
                        future: de
                    };
                void 0 !== e._next && (i.future = e._next), void 0 !== e._prev && (i.past = e._prev);
                return {
                    comments: e.comments.reduce(function(e, i) {
                        return i.replies && i.replies.map(function(e) {
                            n.push(Ze(e.commenter))
                        }), e.concat(it.normalizeRecords(i, t))
                    }, []),
                    cursor: i,
                    users: n
                }
            },
            nt = function(e) {
                var t = e.comments.map(function(e) {
                    return Ze(e.commenter)
                });
                return {
                    comments: e.comments.map(function(e) {
                        return it.normalizeRecord(e, qe.a)
                    }),
                    cursor: {
                        future: e._next || de
                    },
                    users: t
                }
            },
            it = {
                normalizeRecords: function(e, t) {
                    var n = [it.normalizeRecord(e, t)];
                    return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                        n.push(rt.normalizeRecord(e, t))
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
            rt = {
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
            ot = "cursor",
            st = "comment_id",
            lt = function(e, t) {
                var n = tt(e, t),
                    i = e.comments.reduce(function(e, t) {
                        return void 0 === t.video ? e : e.concat([ct(t.video)])
                    }, []);
                return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                    n.comments.push(it.normalizeRecord(e, t)), n.users.push(Ze(e.commenter))
                }), O.__assign({}, n, {
                    videos: i
                })
            },
            ct = function(e) {
                return {
                    id: e._id,
                    title: e.title,
                    preview: e.preview
                }
            },
            dt = "channel_id",
            ut = "limit",
            mt = "video_id",
            pt = 50,
            ht = (function() {}(), n("6WAQ")),
            ft = function(e) {
                return e + "s"
            },
            gt = {
                beginSec: Number.MIN_VALUE,
                endSec: Number.MAX_VALUE
            },
            vt = function(e, t) {
                return t.commenter in e
            },
            bt = function(e, t, n, i) {
                var r = e.vodChat.comments,
                    a = r.currentVideoTime,
                    o = r.comments;
                if (0 === o.commentCount) return [];
                return Array.from(new Oe(o)).reduce(function(r, s) {
                    return s.offset > a ? r : (s.comments.forEach(function(a) {
                        var s = ge(o, a);
                        if (void 0 !== s && (n || !vt(i, s))) return "comment" === s.source && Ot(e.vodChat.comments.isReplayFilterOn, t) ? r : r.push(St(s, e, n, i, t))
                    }), r)
                }, []).sort(yt)
            },
            kt = function(e) {
                var t = function(e) {
                    return e.vodChat.comments.comments
                }(e);
                return Object.keys(t.parentComments).map(function(n) {
                    return wt(t.parentComments[n], e)
                }).filter(function(e) {
                    return void 0 !== e.video
                }).sort(_t)
            },
            yt = function(e, t) {
                return e.comment.contentOffset === t.comment.contentOffset ? e.comment.createdAt.getTime() - t.comment.createdAt.getTime() : e.comment.contentOffset - t.comment.contentOffset
            },
            _t = function(e, t) {
                return e.comment.createdAt.getTime() === t.comment.createdAt.getTime() ? t.comment.contentOffset - e.comment.contentOffset : t.lastUpdated.getTime() - e.lastUpdated.getTime()
            },
            St = function(e, t, n, i, r) {
                var a = new Array,
                    o = new Array,
                    s = t.vodChat.comments.comments.replies[e.id],
                    l = e.createdAt;
                return Array.isArray(s) && s.forEach(function(e) {
                    !n && vt(i, e) || (e.source === ce && Ot(t.vodChat.comments.isReplayFilterOn, r) ? (o.push(St(e, t, n, i)), l = Dt(l, e.createdAt)) : (a.push(St(e, t, n, i)), l = Dt(l, e.createdAt)))
                }), Ot(t.vodChat.comments.isReplayFilterOn, r) ? {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: o.sort(yt)
                } : {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: a.sort(yt)
                }
            },
            Ct = function(e, t) {
                var n = new Array,
                    i = t.vodChat.comments.comments.replies[e.id],
                    r = e.createdAt;
                return Array.isArray(i) && i.forEach(function(e) {
                    n.push(Ct(e, t)), r = Dt(r, e.createdAt)
                }), {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: r,
                    replies: n.sort(yt)
                }
            },
            wt = function(e, t) {
                var n = Ct(e, t);
                return O.__assign({}, n, {
                    video: t.vodChat.moderation.videos[function(e) {
                        return "v" + e
                    }(e.contentId)]
                })
            },
            Et = function(e) {
                return 0 === e.commentCount ? gt : {
                    beginSec: e.minOffset,
                    endSec: e.maxOffset
                }
            },
            Ot = function(e, t) {
                return !!t && (e && (t === ht.a.Archive || t === ht.a.Highlight))
            },
            Dt = function(e, t) {
                return e.getTime() > t.getTime() ? e : t
            },
            xt = n("HM6l"),
            Nt = n("9m97"),
            Tt = n("MAZT"),
            It = n("uTyw"),
            At = n("E8Jt"),
            Ft = function(e, t) {
                var n = s(e);
                return v(t, n).then(function(n) {
                    e.dispatch(function(e, t) {
                        return O.__assign({
                            type: D
                        }, e, {
                            bitsConfig: t
                        })
                    }(n, t.bitsConfig))
                }, function() {
                    e.dispatch(function(e) {
                        return {
                            type: x,
                            error: e
                        }
                    }(Object(De.d)("Unable to retrieve messages, please try again.", "routines-moderation")))
                })
            },
            Mt = function(e, t) {
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
            Lt = function(e, t) {
                var n = new Tt.a(E.a.algoliaApplicationID, E.a.algoliaAPIKey),
                    i = xt.a(),
                    r = Object(At.b)({
                        broadcastType: Nt.d,
                        broadcasterId: t.creatorId
                    }),
                    a = r.typeID,
                    o = r.params;
                return n.queryForType(a, t.searchTerm, i, o).then(function(t) {
                    var n = Object(It.b)({
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
            Vt = n("U7vG"),
            Rt = n("Odds"),
            Ut = function(e) {
                return Vt.createElement(Rt.u, {
                    type: Rt.z.Text,
                    onClick: e.onClick
                }, Object(E.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
            },
            jt = n("vH/s"),
            Bt = n("IWpL"),
            Ht = n("xrVp"),
            Pt = n("Ryxq"),
            Wt = n("zAjo"),
            zt = n("B0KL"),
            qt = this,
            Gt = "replay_mode",
            Yt = "timestamp_mode",
            Qt = "on",
            Kt = "off",
            Jt = "frontend",
            $t = function(e) {
                E.m.track(Bt.SpadeEventType.VideoChatSettingChanged, e)
            },
            Zt = function(e, t) {
                return O.__awaiter(qt, void 0, void 0, function() {
                    var n, i, r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, E.n.apollo.client.query({
                                    query: zt,
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
                                    share_platform: Wt.a.Link,
                                    share_context: jt.ShareItemContext.Chomment,
                                    shared_item_id: Object(Pt.a)(e.contentId),
                                    shared_item_type: Object(Ht.a)(n.video.broadcastType),
                                    shared_item_url: t.toString(),
                                    partner: n.video.owner.roles.isPartner,
                                    source_item_id: e.id,
                                    source_item_type: jt.ShareItemSourceItemType.Chomment
                                }, r = Xt(e, n, Wt.a.Link), E.m.track(Bt.SpadeEventType.ChommentUIAction, r), E.m.track(Bt.SpadeEventType.ShareItem, i), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), Zt.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Xt = function(e, t, n) {
                return {
                    action: "share",
                    author_id: Number(e.commenter),
                    channel: t.video.owner.login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: Jt,
                    game: t.video.game ? t.video.game.name : null,
                    login: t.currentUser ? t.currentUser.login : null,
                    user_id: t.currentUser ? Number(t.currentUser.id) : null,
                    vod_id: Number(e.contentId),
                    vod_title: t.video.title,
                    vod_ts: e.contentOffset,
                    vod_type: Object(Ht.a)(t.video.broadcastType),
                    share_platform: n
                }
            },
            en = n("WNf4"),
            tn = n("tSZx"),
            nn = n("vjRp"),
            rn = this,
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
            on = "",
            sn = -1,
            ln = !1,
            cn = function(e, t) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var n;
                    return O.__generator(this, function(i) {
                        if (ln) return [2, Promise.resolve()];
                        if (g(t)) {
                            if (t.offset === sn) return [2, Promise.resolve()];
                            sn = t.offset
                        }
                        if (f(t)) {
                            if (t.cursor === on) return [2, Promise.resolve()];
                            on = t.cursor
                        }
                        return n = s(e), ln = !0, [2, p(n, t).then(function(n) {
                            ln = !1, g(t) && t.offset === sn ? e.dispatch(function(e) {
                                return O.__assign({
                                    type: B
                                }, e)
                            }(n)) : e.dispatch(function(e) {
                                return O.__assign({
                                    type: j
                                }, e)
                            }(n))
                        }, function(t) {
                            ln = !1, E.n.logger.error(t, "VideoChat: unable to fetch messages"), e.dispatch({
                                type: H
                            })
                        })]
                    })
                })
            },
            dn = function(e, t) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var n;
                    return O.__generator(this, function(i) {
                        return n = s(e), [2, m(n, t).then(function(t) {
                            e.dispatch(function(e) {
                                return O.__assign({
                                    type: M
                                }, e)
                            }(t)), e.dispatch(C(pn, t)), setTimeout(function() {
                                e.dispatch({
                                    type: z
                                })
                            }, 5e3)
                        }, function(t) {
                            return t.json().then(function(t) {
                                e.dispatch(function(e) {
                                    return {
                                        type: L,
                                        createError: e
                                    }
                                }(an(t.message)))
                            })
                        })]
                    })
                })
            },
            un = function(e, t) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var n, i;
                    return O.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                n = s(e), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, function(e, t) {
                                    var n = u(t.id),
                                        i = {
                                            method: Pe
                                        };
                                    return e.doRawAuthRequest(n, i)
                                }(n, t)];
                            case 2:
                                return r.sent(), e.dispatch(function(e) {
                                    return O.__assign({
                                        type: F
                                    }, e)
                                }({
                                    comment: t
                                })), e.dispatch(C(hn, {
                                    comment: t
                                })), [3, 4];
                            case 3:
                                return i = r.sent(), E.i.error(i.toString(), un.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            mn = function(e, t) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var n, i, r;
                    return O.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                n = s(e), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, function(e, t) {
                                    var n = u(t.comment.id),
                                        i = {
                                            method: He,
                                            body: JSON.stringify({
                                                state: t.state
                                            })
                                        };
                                    return e.doAuthRequest(n, i).then(function(e) {
                                        return et(e, t.comment)
                                    }, function(e) {
                                        return Promise.reject(e)
                                    })
                                }(n, t)];
                            case 2:
                                return i = a.sent(), e.dispatch(function(e) {
                                    return O.__assign({
                                        type: U
                                    }, e)
                                }(i)), [3, 4];
                            case 3:
                                return r = a.sent(), E.i.error(r.toString(), mn.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            pn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var e, r;
                    return O.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 2, , 3]), [4, n.query({
                                    query: en,
                                    variables: {
                                        videoCreatorID: t.comments[0].channelId,
                                        videoID: t.comments[0].contentId
                                    }
                                })];
                            case 1:
                                return e = a.sent().data, i.track(jt.SpadeEventType.ChommentCreated, function(e, t) {
                                    var n = e.users[0],
                                        i = e.comments[0];
                                    return {
                                        channel: t.user.login,
                                        channel_id: Number(i.channelId),
                                        comment_id: i.id,
                                        comment_state: i.state,
                                        event_source: Jt,
                                        game: t.video.game ? t.video.game.name : null,
                                        login: n.name,
                                        play_session_id: E.m.getVideoPlayerTrackingData().playSessionID,
                                        reply_to_comment_id: ue(i) ? i.parentId : null,
                                        user_id: Number(n.id),
                                        vod_id: Number(i.contentId),
                                        vod_title: t.video.title,
                                        vod_ts: i.contentOffset,
                                        vod_type: Object(Ht.a)(t.video.broadcastType)
                                    }
                                }(t, e)), [3, 3];
                            case 2:
                                return r = a.sent(), E.i.error(r.toString(), pn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            hn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: tn,
                                    variables: {
                                        videoCreatorID: t.comment.channelId,
                                        commentCreator: t.comment.commenter,
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, i.track(jt.SpadeEventType.ChommentDeleted, function(e, t, n) {
                                    return {
                                        author_id: Number(e.comment.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.comment.channelId),
                                        comment_id: e.comment.id,
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.comment.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(Ht.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), r)), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), hn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            fn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: nn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "ban_user",
                                        author_id: Number(e.bannedUser),
                                        channel_id: Number(e.targetChannel),
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        target_user_id: Number(e.bannedUser),
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_type: Object(Ht.a)(n.video.broadcastType),
                                        vod_ts: e.comment.contentOffset
                                    }
                                }(t, e.getState(), r)), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), fn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            gn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: tn,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        commentCreator: t.commenter,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "delete",
                                        author_id: Number(e.commenter),
                                        author_login: n.users[1].login,
                                        channel: n.users[0].login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        reply_to_comment_id: e.parentId ? e.parentId : null,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_type: Object(Ht.a)(n.video.broadcastType),
                                        vod_ts: e.contentOffset
                                    }
                                }(t, e.getState(), r)), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), gn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            vn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a, o, s;
                    return O.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return l.trys.push([0, 2, , 3]), r = e.getState(), a = h(t) ? r.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                    query: nn,
                                    variables: {
                                        videoID: a
                                    }
                                })];
                            case 1:
                                return o = l.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = null,
                                        r = Object.keys(t.vodChat.comments.comments.parentComments);
                                    if (r.length > 0) {
                                        var a = r[0];
                                        i = t.vodChat.comments.comments.parentComments[a].channelId
                                    }
                                    return {
                                        action: "create",
                                        channel_id: i ? Number(i) : null,
                                        comment_body: e.message,
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        reply_to_comment_id: h(e) ? e.parentId : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: h(e) ? null : Number(e.contentOffsetSeconds),
                                        vod_type: Object(Ht.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = l.sent(), E.i.error(s.toString(), vn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            bn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: nn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    var i = e.comment.id,
                                        r = e.comment.channelId;
                                    return {
                                        action: "published" === e.state ? "publish" : "unpublish",
                                        channel_id: Number(r),
                                        comment_id: i,
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user.login,
                                        user_id: Number(t.session.user.id),
                                        vod_id: Number(n.video.id),
                                        vod_title: n.video.title,
                                        vod_ts: e.comment.contentOffset,
                                        vod_type: Object(Ht.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), r)), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), bn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            kn = function(e, t, n, i) {
                return O.__awaiter(rn, void 0, void 0, function() {
                    var r, a;
                    return O.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: en,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return r = o.sent().data, i.track(jt.SpadeEventType.ChommentUIAction, function(e, t, n) {
                                    return {
                                        action: "sync_vod_to_time",
                                        author_id: Number(e.commenter),
                                        channel: n.user.login,
                                        channel_id: Number(e.channelId),
                                        comment_id: e.id,
                                        event_source: Jt,
                                        game: n.video.game ? n.video.game.name : null,
                                        login: t.session.user ? t.session.user.login : null,
                                        user_id: t.session.user ? Number(t.session.user.id) : null,
                                        vod_id: Number(e.contentId),
                                        vod_title: n.video.title,
                                        vod_ts: e.contentOffset,
                                        vod_type: Object(Ht.a)(n.video.broadcastType)
                                    }
                                }(t, e.getState(), r)), [3, 3];
                            case 2:
                                return a = o.sent(), E.i.error(a.toString(), kn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            yn = (n("FKWv"), n("+8VM")),
            _n = (n("smiM"), "confirm-button"),
            Sn = "deny-button",
            Cn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return O.__extends(t, e), t.prototype.render = function() {
                    return Vt.createElement(Rt._19, {
                        className: "twp-modal",
                        background: Rt.m.Base,
                        color: Rt.F.Alt,
                        padding: 3
                    }, Vt.createElement("h3", null, this.props.title), Vt.createElement(Rt.V, {
                        className: "twp-modal__message",
                        margin: {
                            bottom: 2
                        }
                    }, this.props.children), Vt.createElement(Rt.V, {
                        display: Rt.H.Flex,
                        justifyContent: Rt.U.End
                    }, Vt.createElement(Rt.V, {
                        margin: {
                            right: 1
                        }
                    }, Vt.createElement(Rt.u, {
                        onClick: this.props.onDenyClick,
                        type: Rt.z.Hollow,
                        "data-test-selector": Sn
                    }, Object(E.d)("Cancel", "ConfirmationModal"))), Vt.createElement(Rt.u, {
                        onClick: this.props.onConfirmClick,
                        type: Rt.z.Alert,
                        disabled: this.props.isConfirmDisabled,
                        "data-test-selector": _n
                    }, Object(E.d)("Ok", "ConfirmationModal"))), Vt.createElement(yn.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(Vt.Component),
            wn = function(e) {
                var t = e,
                    n = Math.floor(t / 3600);
                t -= 3600 * n;
                var i = Math.floor(t / 60);
                t -= 60 * i;
                var r = Math.floor(t);
                return n > 0 ? n + ":" + En(i) + ":" + En(r) : i + ":" + En(r)
            },
            En = function(e) {
                return e < 10 ? "0" + e : "" + e
            },
            On = (n("9CWX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function() {
                        t.props.onClick(t.props.video.id)
                    }, t
                }
                return O.__extends(t, e), t.prototype.render = function() {
                    return Vt.createElement(Rt.T, {
                        onClick: this.onClickHandler,
                        "data-ts_selectable": !0,
                        "data-tt_content": !0
                    }, Vt.createElement(Rt.V, {
                        className: "search-card-row",
                        fullWidth: !0,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Vt.createElement(Rt.A, {
                        row: !0
                    }, Vt.createElement(Rt.C, {
                        imageSrc: this.props.video.previewImageSrc,
                        imageAlt: this.props.video.title,
                        size: Rt.D.Size8,
                        aspect: Rt.k.Aspect16x9
                    }), Vt.createElement(Rt.B, null, Vt.createElement(Rt.Q, {
                        margin: {
                            left: 1
                        }
                    }, Vt.createElement(Rt._23, {
                        type: Rt._28.H5,
                        ellipsis: !0
                    }, this.props.video.title)), Vt.createElement(Rt.Q, {
                        margin: {
                            left: 1
                        }
                    }, Vt.createElement(Rt._23, {
                        className: "search-card-row__link",
                        ellipsis: !0
                    }, Object(E.c)(new Date(1e3 * this.props.video.publishedAt), "medium"), Vt.createElement("span", null, " · "), wn(this.props.video.lengthSeconds)))))))
                }, t
            }(Vt.Component)),
            Dn = n("hXeO"),
            xn = n("5vPJ"),
            Nn = n("kBA+"),
            Tn = function(e) {
                var t = e.message,
                    n = null,
                    i = t.tokens.map(function(e, t) {
                        switch (e.type) {
                            case Ge.a.Text:
                                return [Vt.createElement("span", {
                                    key: t
                                }, e.content)];
                            case Ge.a.Emote:
                                return [Vt.createElement(Dn.a, {
                                    key: t,
                                    emote: e.content
                                }), " "];
                            case Ge.a.Link:
                                return [Vt.createElement("span", {
                                    key: t
                                }, e.content.displayText)];
                            case Ge.a.VideoLink:
                                return n ? [Vt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = Vt.createElement(Nn.a, {
                                    key: t,
                                    id: e.content.id,
                                    url: e.content.url
                                }));
                            case Ge.a.ClipLink:
                                return n ? [Vt.createElement("span", {
                                    key: t
                                }, e.content.displayText)] : void(n = Vt.createElement(xn.a, {
                                    key: t,
                                    slug: e.content.slug,
                                    forceNetworkRequest: !0
                                }));
                            case Ge.a.Mention:
                                return [Vt.createElement("span", {
                                    key: t
                                }, "@", e.content.recipient)];
                            default:
                                return null
                        }
                    });
                return i.push(n), Vt.createElement("span", {
                    key: t.id,
                    className: "qa-mod-message",
                    style: {
                        color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                    }
                }, Array.prototype.concat.apply([], i))
            },
            In = n("6Agf"),
            An = /^[\x00-\x7F]*$/,
            Fn = function(e) {
                return !An.test(e)
            },
            Mn = function(e) {
                return Fn(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
            },
            Ln = n("3zLD"),
            Vn = n("RH2O"),
            Rn = n("bkpq"),
            Un = n("O0Qc"),
            jn = function(e, t, n) {
                return e && t && !n
            },
            Bn = n("HW6M"),
            Hn = n("3T7g"),
            Pn = n("CSlQ"),
            Wn = 15e3,
            zn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.autoDismissErrorTimeoutId = 0, t.clearDismissTimeout = function() {
                        window.clearTimeout(t.autoDismissErrorTimeoutId)
                    }, t.onManualErrorDismissClickHandler = function() {
                        t.props.onErrorDismissed(!0)
                    }, t.setAutoDismissTimeout = function() {
                        t.autoDismissErrorTimeoutId = window.setTimeout(function() {
                            t.props.onErrorDismissed()
                        }, Wn)
                    }, t
                }
                return O.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setAutoDismissTimeout()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.props.message !== e.message && (this.clearDismissTimeout(), this.setAutoDismissTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    this.clearDismissTimeout()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.message === i().chatReplayFilterError && (e = Vt.createElement(Rt._23, {
                        type: Rt._28.Span
                    }, " ", Vt.createElement(Rt._23, {
                        type: Rt._28.Span,
                        decoration: Rt._26.Underline
                    }, Vt.createElement("a", {
                        onClick: this.props.onMessageClick
                    }, Object(De.d)("Click here to show all messages.", "CommentError"))))), Vt.createElement(Rt._19, {
                        alignItems: Rt.c.Center,
                        background: Rt.m.Base,
                        className: "anim-swoop",
                        color: Rt.F.Error,
                        "data-test-selector": "vod-chat-error",
                        display: Rt.H.Flex,
                        flexWrap: Rt.K.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        position: Rt._4.Absolute,
                        zIndex: Rt._39.Above
                    }, Vt.createElement(Rt._23, {
                        type: Rt._28.Span
                    }, this.props.message, e), Vt.createElement(Rt.V, {
                        alignSelf: Rt.d.Start
                    }, Vt.createElement(Rt.v, {
                        ariaLabel: Object(De.d)("Close", "CommentErrorComponent"),
                        icon: Rt._11.Close,
                        onClick: this.onManualErrorDismissClickHandler
                    })))
                }, t
            }(Vt.Component),
            qn = n("c3pS"),
            Gn = n("Lx+S"),
            Yn = n("YhVV"),
            Qn = n("ieBa"),
            Kn = n("Tzcg"),
            Jn = n("czpb"),
            $n = (n("9kjL"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildModerationDashboardURL = function() {
                        return Object(Jn.a)("/" + t.props.videoOwnerLogin + "/dashboard/moderation")
                    }, t.buildModerationPrefsURL = function() {
                        return Object(Jn.a)("/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation")
                    }, t.onReplayModeChange = function(e) {
                        t.props.onReplayModeChange(e.currentTarget.checked)
                    }, t.onTimestampModeChange = function(e) {
                        t.props.onTimestampModeChange(e.currentTarget.checked)
                    }, t
                }
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.props.isUpload || (e = Vt.createElement(Rt.V, {
                        display: Rt.H.Flex,
                        flexWrap: Rt.K.NoWrap,
                        justifyContent: Rt.U.Between,
                        key: "viewerReplayOption",
                        padding: {
                            bottom: 1
                        }
                    }, Vt.createElement(Rt.V, null, Object(E.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), Vt.createElement(Rt.V, {
                        flexShrink: 0
                    }, Vt.createElement(Rt._30, {
                        checked: this.props.isReplayFilterOn,
                        "data-test-selector": "reply-mode",
                        onChange: this.onReplayModeChange
                    }))));
                    var t = [Vt.createElement(Rt._23, {
                        key: "moderationHeader",
                        bold: !0
                    }, Object(E.d)("Mod Tools", "VideoChatSettings"))];
                    return this.props.canSessionEditModerationSettings && t.push(Vt.createElement(Rt.Q, {
                        key: "moderationPrefs",
                        display: Rt.H.InlineBlock
                    }, Vt.createElement("a", {
                        target: Object(Jn.b)() ? "_blank" : "",
                        href: this.buildModerationPrefsURL(),
                        "data-test-selector": "video_chat_settings_mod_prefs"
                    }, Object(E.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(Vt.createElement(Rt.Q, {
                        key: "moderationDashboard",
                        display: Rt.H.InlineBlock
                    }, Vt.createElement("a", {
                        target: Object(Jn.b)() ? "_blank" : "",
                        href: this.buildModerationDashboardURL(),
                        "data-test-selector": "video_chat_settings_mod_dashboard"
                    }, Object(E.d)("Moderate messages", "VideoChatSettings")))), Vt.createElement(Rt.V, {
                        className: "video-chat__settings",
                        padding: {
                            x: 2,
                            y: 2
                        }
                    }, Vt.createElement(Rt._23, {
                        bold: !0
                    }, Object(E.d)("Viewer Settings", "VideoChatSettings")), e, Vt.createElement(Rt.V, {
                        display: Rt.H.Flex,
                        justifyContent: Rt.U.Between,
                        padding: {
                            bottom: 1
                        }
                    }, Vt.createElement(Rt.V, null, Object(E.d)("Hide timestamps", "VideoChatSettings")), Vt.createElement(Rt.V, {
                        flexShrink: 0
                    }, Vt.createElement(Rt._30, {
                        "data-test-selector": "timestamp-mode",
                        checked: this.props.hideTimestamps,
                        onChange: this.onTimestampModeChange
                    }))), t.length > 1 ? t : null)
                }, t
            }(Vt.Component)),
            Zn = Object(Pn.d)("ChatSettings")($n),
            Xn = Object(Vn.b)(function(e) {
                return {
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    hideTimestamps: e.vodChat.comments.hideTimestamps
                }
            }, function(e) {
                return {
                    onReplayModeChange: function(t) {
                        $t({
                            setting: Gt,
                            value: t ? Qt : Kt
                        }), e(J(t))
                    },
                    onTimestampModeChange: function(t) {
                        $t({
                            setting: Yt,
                            value: t ? Qt : Kt
                        }), e(ee(t))
                    }
                }
            })(Zn),
            ei = "@",
            ti = "Enter",
            ni = "Escape",
            ii = " ",
            ri = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case ti:
                                e.preventDefault(), n.createComment();
                                break;
                            case ii:
                                n.maybeUnpauseScrolling();
                                break;
                            case ei:
                                n.setState({
                                    isMentionPaused: !n.state.isMentionPaused && n.props.isScrollingSynced || n.state.isMentionPaused
                                }), n.props.onScrollPause()
                        }
                    }, n.createComment = function() {
                        if ("" !== n.state.newMessageText) {
                            if (n.props.isPostCooldownActive) return n.setState({
                                showCoolDownState: !0
                            }), void n.props.onError(i().messageCreatedTooQuickError);
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
                        var e = Object(Yn.a)(n.props.currentUser.emoteSets);
                        return Object.keys(e).map(function(t) {
                            return {
                                id: t,
                                emotes: Object(Kn.b)([e[t]])
                            }
                        })
                    };
                    var r = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        a = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || r);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: a,
                        canSessionEditModerationSettings: r,
                        newMessageText: "",
                        showCoolDownState: !1
                    }, n
                }
                return O.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isPostCooldownActive || this.setState({
                        showCoolDownState: !1
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = Vt.createElement(Gn.b, null, Vt.createElement(Xn, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    })));
                    var t = null;
                    return this.props.currentUser && (t = Vt.createElement(qn.d, {
                        emotes: this.getSessionSpecificEmotes()
                    })), Vt.createElement("div", null, Vt.createElement(Rt.V, {
                        position: Rt._4.Relative
                    }, Vt.createElement(qn.b, {
                        componentType: qn.a.TextArea,
                        suggestionSource: qn.c.Chat,
                        onValueUpdate: this.onChange,
                        onKeyDown: this.onKeyDown,
                        componentRefDelegate: this.setTextareaRef,
                        refDelegate: this.setAutocompleteInputRef,
                        paddingRight: 30,
                        placeholder: Object(E.d)("Post a message", "VideoChatInput"),
                        noResize: !0,
                        "data-a-target": "video-chat-input",
                        disabled: this.state.showCoolDownState
                    }, t), Vt.createElement(Qn.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: Rt._4.Absolute
                    })), Vt.createElement(Rt.V, {
                        margin: {
                            top: 1
                        },
                        justifyContent: Rt.U.Between,
                        display: Rt.H.Flex
                    }, e, Vt.createElement("span", null), " ", Vt.createElement(Rt.u, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, Vt.createElement(Rt.V, {
                        display: Rt.H.Flex
                    }, Vt.createElement("span", null, Object(E.d)("Post at ", "CommentInput")), Vt.createElement(Rt.V, {
                        margin: {
                            x: .5
                        },
                        display: Rt.H.Flex
                    }, Vt.createElement(Rt._10, {
                        asset: Rt._11.GlyphLength
                    })), Vt.createElement("span", null, wn(this.props.currentVideoTime))))))
                }, t
            }(Vt.Component),
            ai = Object(Pn.d)("MessageInput", {
                autoReportInteractive: !0
            })(ri),
            oi = (n("TnID"), function(e) {
                var t = e.offset,
                    n = e.onClick;
                return Vt.createElement(Rt._31, {
                    align: Rt._32.Left,
                    direction: Rt._33.Top,
                    label: Object(E.d)("Jump to video", "TimeStamp")
                }, Vt.createElement(Rt.Q, {
                    className: "vod-message__timestamp",
                    margin: {
                        right: .5
                    },
                    padding: {
                        x: .5
                    }
                }, Vt.createElement("button", {
                    onClick: n
                }, wn(t))))
            }),
            si = n("+V/3"),
            li = n("5Nu7"),
            ci = n("rCmJ"),
            di = n("2hJ3"),
            ui = n("OAwv"),
            mi = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                if (t) {
                    var i = ui.stringify(t);
                    n.search = i
                }
                return n
            },
            pi = "ban-user",
            hi = "delete-comment-button",
            fi = "reply-button",
            gi = "relative-time-title",
            vi = "share-button",
            bi = "share-button-clicked",
            ki = 3e3,
            yi = function(e) {
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
                        if ("function" == typeof t.state.confirmationAction) return Vt.createElement(Rt.V, {
                            padding: {
                                y: 1
                            }
                        }, Vt.createElement(Rt._19, {
                            display: Rt.H.Flex,
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            }
                        }, Vt.createElement(Rt._23, {
                            type: Rt._28.Span
                        }, Object(E.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction"))), Vt.createElement(Rt.V, {
                            display: Rt.H.Flex,
                            justifyContent: Rt.U.Center,
                            alignItems: Rt.c.Center
                        }, Vt.createElement(Rt.V, {
                            display: Rt.H.Inline,
                            padding: {
                                right: 1
                            }
                        }, Vt.createElement(Rt.u, {
                            type: Rt.z.Alert,
                            onClick: t.onContinueClickHandler,
                            "data-test-selector": _n
                        }, Object(E.d)("Yes", "MessageOptionsMenu"))), Vt.createElement(Rt.u, {
                            type: Rt.z.Hollow,
                            onClick: t.onCancelClickHandler,
                            "data-test-selector": Sn
                        }, Object(E.d)("No", "MessageOptionsMenu"))));
                        var e = [];
                        t.props.isExpandedLayout || e.push(Vt.createElement(Rt._19, {
                            key: t.props.context.comment.id,
                            color: Rt.F.Alt2,
                            display: Rt.H.Flex,
                            "data-test-selector": gi
                        }, Vt.createElement(Rt._19, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                bottom: .5
                            },
                            fullWidth: !0,
                            borderBottom: !0
                        }, Vt.createElement(Rt._23, {
                            type: Rt._28.Span
                        }, Object(E.d)("Posted ", "MessageOptionsMenu"), Object(E.g)(t.props.context.comment.createdAt)))), Vt.createElement(Rt._19, {
                            key: t.props.context.comment.id + "2",
                            display: Rt.H.Flex,
                            color: Rt.F.Link
                        }, Vt.createElement(Rt.T, {
                            onClick: t.onReplyClickHandler,
                            "data-test-selector": fi
                        }, Vt.createElement(Rt.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Reply to {userName}", {
                            userName: Mn(t.props.context.author)
                        }, "MessageOptionsMenu")))));
                        var n = [];
                        t.props.isCurrentUserModerator && n.push(Vt.createElement(Rt.V, {
                            key: t.props.context.comment.id,
                            display: Rt.H.Flex
                        }, Vt.createElement(Rt.T, {
                            alert: !0,
                            onClick: t.onDeleteButtonClickHandler,
                            "data-test-selector": hi
                        }, Vt.createElement(Rt._19, {
                            margin: {
                                x: 1
                            },
                            padding: {
                                y: .5
                            },
                            borderBottom: !0
                        }, Object(E.d)("Delete", "MessageOptionsMenu")))), Vt.createElement(Rt.V, {
                            key: t.props.context.comment.id + "2",
                            display: Rt.H.Flex
                        }, Vt.createElement(Rt.T, {
                            alert: !0,
                            onClick: t.onBanUserClickHandler,
                            "data-test-selector": pi
                        }, Vt.createElement(Rt.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Ban User", "MessageOptionsMenu")))));
                        var i = Vt.createElement(Rt.T, {
                            onClick: t.onShareClick,
                            "data-test-selector": vi
                        }, Vt.createElement(Rt.V, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(E.d)("Copy Link", "MessageOptionsMenu")));
                        t.state.isLinkCopied && (i = Vt.createElement(Rt.u, {
                            fullWidth: !0,
                            icon: Rt._11.Check,
                            type: Rt.z.Success,
                            "data-test-selector": bi
                        }, Vt.createElement(Rt.V, {
                            display: Rt.H.Flex,
                            alignItems: Rt.c.Center,
                            justifyContent: Rt.U.Start
                        }, Object(E.d)("Copied to clipboard", "MessageOptionsMenu"))));
                        var r = Vt.createElement(Rt._19, {
                            display: Rt.H.Flex,
                            fullWidth: !0,
                            key: t.props.context.comment.id + "-share",
                            color: Rt.F.Link
                        }, i);
                        return Vt.createElement(Rt.V, {
                            padding: {
                                y: 1
                            }
                        }, e, r, n)
                    }, t.closeMenu = function() {
                        t.setState({
                            isMenuOpen: !1,
                            confirmationAction: null,
                            isLinkCopied: !1
                        }), t.props.onClose()
                    }, t.onShareClick = function() {
                        var e = t.props.context.comment,
                            n = e.contentId,
                            i = mi(n, {
                                tt_medium: "video_chat",
                                tt_content: "message_share_link",
                                t: Object(Pt.b)(e.contentOffset),
                                comment: e.id
                            });
                        return Object(di.a)(i.toString()), t.setState({
                            isLinkCopied: !0
                        }, function() {
                            return t.dismissTimeoutID = setTimeout(function() {
                                t.setState({
                                    isLinkCopied: !1
                                })
                            }, ki)
                        }), Zt(e, i)
                    }, t.onReplyClickHandler = function() {
                        t.props.onReplyClick(Mn(t.props.context.author)), t.closeMenu()
                    }, t.onBanUserClickHandler = function() {
                        t.setState(function(e) {
                            return O.__assign({}, e, {
                                confirmationAction: t.props.onBanUserClick
                            })
                        })
                    }, t.onDeleteButtonClickHandler = function() {
                        t.setState(function(e) {
                            return O.__assign({}, e, {
                                confirmationAction: t.props.onDeleteCommentClick
                            })
                        })
                    }, t.onContinueClickHandler = function() {
                        "function" == typeof t.state.confirmationAction && t.state.confirmationAction(), t.closeMenu()
                    }, t.onCancelClickHandler = function() {
                        t.setState(function(e) {
                            return O.__assign({}, e, {
                                confirmationAction: null
                            })
                        })
                    }, t
                }
                return O.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.dismissTimeoutID)
                }, t.prototype.render = function() {
                    return Vt.createElement(Rt.V, {
                        position: Rt._4.Relative
                    }, Vt.createElement(ci.a, {
                        onClickOut: this.closeMenu
                    }, Vt.createElement(Rt.v, {
                        ariaLabel: Object(E.d)("Message Actions Menu", "VideoCommentsMenu"),
                        size: Rt.x.Small,
                        type: Rt.w.Secondary,
                        "data-test-selector": "menu-button",
                        icon: Rt._11.More,
                        onClick: this.onToggleMenu
                    }), Vt.createElement(Rt.p, {
                        direction: Rt.q.BottomRight,
                        show: this.state.isMenuOpen,
                        size: Rt.r.Small,
                        offsetX: "0.5rem"
                    }, this.getContent())))
                }, t
            }(Vt.Component),
            _i = (n("k2hM"), "video-chat__message-author"),
            Si = function(e) {
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
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.badgeSets,
                        i = e.currentUser,
                        r = !!i && t.comment.commenter === i.id,
                        a = void 0 !== t.comment.userBadges[si.a],
                        o = Bn("video-chat__message-menu", {
                            "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                        }),
                        s = Vt.createElement(Rt.V, {
                            className: o,
                            "data-test-selector": "menu-options-wrapper",
                            flexShrink: 0
                        }, Vt.createElement(yi, {
                            context: t,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.onBanUserClickHandler,
                            onClose: this.onMenuCloseHandler,
                            onDeleteCommentClick: this.onDeleteCommentClickHandler,
                            onOpen: this.onMenuOpenHandler,
                            onReplyClick: this.props.onReplyClick
                        })),
                        l = Bn(_i, (u = {}, u["video-chat__message-author--me"] = r, u["video-chat__message-author--creator"] = a, u)),
                        c = r || a ? "" : t.comment.message.userColor,
                        d = Vt.createElement(Rt.Q, {
                            padding: {
                                x: .5
                            }
                        }, Vt.createElement("span", null, ":"));
                    return t.comment.message.isAction && (d = Vt.createElement(Rt.Q, {
                        padding: {
                            right: .5
                        }
                    }, Vt.createElement("span", null))), Vt.createElement(Rt.V, {
                        alignItems: Rt.c.Start,
                        display: Rt.H.Flex,
                        flexWrap: Rt.K.NoWrap
                    }, Vt.createElement(Rt.V, {
                        flexGrow: 1
                    }, Vt.createElement(Hn.b, {
                        badgesToRender: t.comment.userBadges,
                        badgeSets: n
                    }), Vt.createElement("a", {
                        className: l,
                        "data-test-selector": "comment-author-selector",
                        "data-tt_content": "tab_videos",
                        "data-tt_medium": "video-message-author",
                        href: "/" + t.author.name,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, Vt.createElement(li.a, {
                        userData: function(e, t) {
                            return {
                                userID: e.id,
                                userDisplayName: e.displayName,
                                userType: In.a.User,
                                isIntl: Fn(e.displayName),
                                userLogin: e.name,
                                color: t
                            }
                        }(t.author, c),
                        highlighted: r || a
                    })), Vt.createElement(Rt.V, {
                        display: Rt.H.Inline,
                        className: "video-chat__message",
                        "data-test-selector": "comment-message-selector"
                    }, d, Vt.createElement(Tn, {
                        message: t.comment.message,
                        allowActionTextColors: !0
                    }))), s);
                    var u
                }, t
            }(Vt.Component),
            Ci = (n("jvcJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onReplyClickHandler = function() {
                        t.props.replyCommentContext ? t.props.onReplyClick(Mn(t.props.replyCommentContext.author)) : t.props.onReplyClick()
                    }, t
                }
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = Object(E.d)("Reply", "DashboardModerationReplyButton");
                    return "vod-message" === this.props.context ? Vt.createElement("button", {
                        className: "video-chat-reply-button",
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "parent-reply-button"
                    }, Vt.createElement(Rt.V, {
                        display: Rt.H.Flex
                    }, Vt.createElement(Rt.V, {
                        className: "video-chat-reply-button__icon",
                        display: Rt.H.Flex,
                        padding: {
                            right: .5
                        }
                    }, Vt.createElement(Rt._10, {
                        width: 13,
                        height: 13,
                        asset: Rt._11.Conversations,
                        type: Rt._12.Inherit
                    })), Vt.createElement(Rt._23, {
                        align: Rt._38.Middle,
                        type: Rt._28.Span
                    }, e))) : "mod-dashboard" === this.props.context ? Vt.createElement(Rt.v, {
                        ariaLabel: e,
                        type: Rt.w.Hollow,
                        icon: Rt._11.Conversations,
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "moderation-reply-button",
                        "data-a-selector": "qa-vod-chat-reply-button"
                    }) : Vt.createElement(Rt._19, {
                        color: Rt.F.Link,
                        display: Rt.H.Inline,
                        margin: {
                            left: 1
                        }
                    }, Vt.createElement("button", {
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "reply-reply-button"
                    }, Vt.createElement(Rt._23, {
                        type: Rt._28.Span
                    }, e)))
                }, t
            }(Vt.Component)),
            wi = (n("OvUa"), function(e) {
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
                        e.key === ti && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === ni && (e.preventDefault(), n.props.onReplyFormClose())
                    }, n.setTextareaRef = function(e) {
                        return n.textArea = e
                    }, n.state = {
                        newReplyText: t.replyToUserDisplayName ? "@" + t.replyToUserDisplayName + " " : "",
                        showCoolDownState: !1
                    }, n
                }
                return O.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isCreationCoolDownActive || this.setState({
                        showCoolDownState: !1
                    }), e.replyToUserDisplayName && e.replyToUserDisplayName !== this.props.replyToUserDisplayName && this.setState({
                        newReplyText: "@" + e.replyToUserDisplayName + " "
                    })
                }, t.prototype.render = function() {
                    return Vt.createElement(Rt.V, {
                        className: this.props.classNames,
                        position: Rt._4.Relative
                    }, Vt.createElement(Rt._25, {
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        placeholder: Object(E.d)("Reply", "ReplyForm"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newReplyText
                    }), Vt.createElement(Qn.a, {
                        attachRight: !0,
                        attachTop: !0,
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        position: Rt._4.Absolute
                    }))
                }, t
            }(Vt.Component)),
            Ei = function(e) {
                return Vt.createElement(Rt.V, {
                    padding: {
                        y: .5,
                        left: 1
                    }
                }, Vt.createElement(Rt.V, {
                    className: "vod-message__content"
                }, Vt.createElement(Si, {
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
            Oi = "vod-message-reply",
            Di = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.makeReplyButtonAndRelativeTime = function(e) {
                        return Vt.createElement(Rt.V, {
                            display: Rt.H.Flex,
                            alignItems: Rt.c.Center
                        }, Vt.createElement(Ci, {
                            context: Oi,
                            onReplyClick: t.props.onReplyClick,
                            replyCommentContext: e
                        }), Vt.createElement(Rt.Q, {
                            margin: {
                                left: .5
                            }
                        }, Vt.createElement(Rt._23, {
                            color: Rt.F.Alt2,
                            fontSize: 7,
                            type: Rt._28.Span
                        }, " • " + Object(E.g)(e.comment.createdAt))))
                    }, t.makeReply = function(e) {
                        var n = null;
                        return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), Vt.createElement("li", {
                            key: e.comment.id
                        }, Vt.createElement(Ei, {
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
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.replies.map(this.makeReply.bind(this));
                    return Vt.createElement("ul", null, e)
                }, t
            }(Vt.Component),
            xi = (n("PNnM"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = Vt.createElement(Rt.V, {
                        display: Rt.H.InlineBlock,
                        className: "vod-message__show-more-replies"
                    }, Vt.createElement(Ut, {
                        onClick: this.props.onLoadMoreRepliesClick
                    })));
                    var t = null;
                    this.props.showReplyForm && (t = Vt.createElement(Rt.V, {
                        margin: {
                            top: .5,
                            bottom: 1,
                            x: 1
                        }
                    }, Vt.createElement(wi, {
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                        onError: this.props.onError,
                        onReplyFormClose: this.props.onReplyFormClose,
                        onReplySubmit: this.props.onReplySubmit,
                        replyToUserDisplayName: this.props.replyToUserDisplayName,
                        videoOwnerID: this.props.parentMessage.comment.channelId
                    })));
                    var n = null;
                    return this.props.isExpandedLayout && (n = Vt.createElement(Rt.V, {
                        alignItems: Rt.c.Center,
                        display: Rt.H.Flex
                    }, Vt.createElement(Ci, {
                        context: "vod-message",
                        onReplyClick: this.props.onReplyClick,
                        replyCommentContext: this.props.parentMessage
                    }), Vt.createElement(Rt.Q, {
                        margin: {
                            left: .5
                        }
                    }, Vt.createElement(Rt._23, {
                        color: Rt.F.Alt2,
                        fontSize: 7,
                        type: Rt._28.Span
                    }, " • " + Object(E.g)(this.props.parentMessage.comment.createdAt))))), Vt.createElement(Rt.V, null, n, Vt.createElement(Rt.V, {
                        margin: {
                            y: .5,
                            left: .5
                        },
                        className: Bn("vod-message__reply", "qa-vod-chat-reply")
                    }, e, Vt.createElement(Di, {
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
            }(Vt.Component)),
            Ni = (n("WULK"), function(e) {
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
                return O.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (e = Vt.createElement(xi, {
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
                    !1 === this.props.hideTimestamp && (t = Vt.createElement(Rt.V, {
                        className: "vod-message__header",
                        "data-test-selector": "message-timestamp",
                        display: Rt.H.Flex,
                        flexShrink: 0,
                        textAlign: Rt._24.Right
                    }, Vt.createElement(oi, {
                        offset: this.props.messageContext.comment.contentOffset,
                        onClick: this.onTimestampClickHandler
                    })));
                    var n = Bn("vod-message", (r = {}, r["vod-message--focused"] = this.shouldFocusMessage(), r)),
                        i = Vt.createElement(Rt.V, {
                            alignItems: Rt.c.Start,
                            className: n,
                            "data-test-selector": "message-layout",
                            display: Rt.H.Flex,
                            flexWrap: Rt.K.NoWrap,
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                left: this.props.hideTimestamp ? 2 : .5
                            },
                            refDelegate: this.refHandler
                        }, t, Vt.createElement(Rt.V, {
                            fullWidth: !0
                        }, Vt.createElement(Si, {
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
                    return this.props.messageContext.comment.highlight || !1 ? Vt.createElement(Rt.e, {
                        duration: Rt.g.Medium,
                        enabled: !0,
                        type: Rt.i.FadeIn
                    }, i) : i;
                    var r
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return e.highlight !== this.props.highlight || e.isReplayFilterOn !== this.props.isReplayFilterOn || e.hideTimestamp !== this.props.hideTimestamp || t.showReplyForm !== this.state.showReplyForm || e.messageContext.replies.length !== this.props.messageContext.replies.length || t.replyToUserDisplayName !== this.state.replyToUserDisplayName
                }, t.prototype.shouldFocusMessage = function() {
                    return this.props.highlight
                }, t
            }(Vt.Component)),
            Ti = (n("cPfx"), function(e) {
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
                return O.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.componentDidUpdate = function() {
                    this.preventScrolling = !0, this.props.isScrollingSynced && (this.preventScrolling = !1, this.componentInitiatedScroll = !0, this.commentListRef.scrollTop = this.commentListRef.scrollHeight)
                }, t.prototype.render = function() {
                    var e = Bn("video-chat__message-list-wrapper", (n = {}, n["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, n)),
                        t = null;
                    return !1 === this.props.isScrollingSynced && (t = Vt.createElement(Rt.Q, {
                        className: "video-chat__sync-button",
                        padding: {
                            x: 1
                        },
                        position: Rt._4.Absolute,
                        attachBottom: !0
                    }, Vt.createElement("button", {
                        onClick: this.syncButtonClick
                    }, Object(De.d)("Resume auto scroll", "MessageScrollArea")))), Vt.createElement(Rt._19, {
                        fullHeight: !0,
                        overflow: Rt._0.Hidden,
                        position: Rt._4.Relative
                    }, Vt.createElement("div", {
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
            }(Vt.Component)),
            Ii = (n("PeVI"), 5e3),
            Ai = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        commentAlreadyFocused: !1
                    }, t.badgeSets = new Hn.c([], [], ""), t.createComment = function(e) {
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
                        t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(Rn.a)(i))
                    }, t.focusedCommentCallback = function(e) {
                        t.setState({
                            commentToFocus: e
                        })
                    }, t.startUnfocusTimeout = function() {
                        t.focusTimer = setTimeout(function() {
                            t.setState({
                                commentAlreadyFocused: !0
                            })
                        }, Ii)
                    }, t
                }
                return O.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.onWillMount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                            commentAlreadyFocused: !1
                        })),
                        function(e, t) {
                            return !(t.data.loading || t.data.error || t.data.badges === e.data.badges && t.data.video.owner === e.data.video.owner)
                        }(this.props, e) && (this.badgeSets = new Hn.c([], [], ""), e.data.loading || e.data.error || (this.badgeSets = new Hn.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login)));
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
                        r = n.highlightedMessageID,
                        a = n.data;
                    if (this.props.data.loading) e = Vt.createElement(Rt.Z, {
                        fillContent: !0
                    });
                    else if (this.props.data.error) e = Vt.createElement(Rt.V, {
                        alignItems: Rt.c.Center,
                        "data-test-selector": "video-chat-error",
                        fullHeight: !0,
                        justifyContent: Rt.U.Center
                    }, Vt.createElement(Rt._23, {
                        italic: !0
                    }, Object(De.d)("Video Chat is currently unavailable.", "VideoChat")));
                    else {
                        var o = void 0;
                        o = this.props.hasFetchedComments && this.props.offsetRange === gt ? Vt.createElement(Rt.Q, {
                            display: Rt.H.Flex,
                            margin: {
                                x: 1,
                                top: 2,
                                bottom: 1
                            },
                            alignItems: Rt.c.Center
                        }, Vt.createElement("li", {
                            "data-test-selector": "no-comments-cta"
                        }, Vt.createElement(Rt.Q, {
                            margin: {
                                right: 1
                            }
                        }, Vt.createElement("img", {
                            src: function(e) {
                                return "" + $e + e + "/1.0"
                            }(65),
                            srcSet: function(e) {
                                return "" + $e + e + "/2.0 2x"
                            }(65)
                        })), Object(De.d)("Join the chat while watching the video!", "VideoChatComponent"))) : i.map(function(e, n) {
                            var i = !t.state.commentAlreadyFocused && e.comment.id === r,
                                o = n + 1 === t.props.comments.length,
                                s = !t.props.isScrollingSynced && o;
                            return Vt.createElement(Rt.Q, {
                                padding: s ? {
                                    bottom: 4
                                } : {},
                                key: e.comment.id,
                                fullWidth: !0
                            }, Vt.createElement("li", null, Vt.createElement(Ni, {
                                badgeSets: t.badgeSets,
                                currentUser: a.currentUser,
                                highlight: i,
                                isCreationCoolDownActive: t.props.isCreationCoolDownActive,
                                isCurrentUserModerator: t.props.isCurrentUserModerator,
                                isExpandedLayout: a.video.broadcastType === ht.a.Upload,
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
                        }), e = Vt.createElement("ul", {
                            style: {
                                minHeight: 0
                            }
                        }, o)
                    }
                    var s = void 0 === this.props.highlightedMessageID,
                        l = null;
                    "" !== this.props.errorMessage && (l = Vt.createElement(zn, {
                        message: this.props.errorMessage,
                        onErrorDismissed: this.onErrorDismissedHandler,
                        onMessageClick: this.onErrorMessageClickHandler
                    }));
                    var c;
                    return c = this.props.data.loading || this.props.data.error ? Vt.createElement(Rt._3, {
                        "data-test-selector": "message-input-placeholder",
                        height: 90,
                        width: 340
                    }) : Vt.createElement(ai, {
                        currentUser: this.props.data.currentUser,
                        currentVideoTime: this.props.currentVideoTime,
                        onError: this.onError,
                        isModerator: !!this.props.data.video.owner.self && this.props.data.video.owner.self.isModerator,
                        isReplayMode: this.props.isReplayFilterOn,
                        isScrollingSynced: this.props.isScrollingSynced,
                        isPostCooldownActive: this.props.isCreationCoolDownActive,
                        isUpload: a.video.broadcastType === ht.a.Upload,
                        onCreateComment: this.createComment,
                        onScrollPause: this.props.onDisableSync,
                        onScrollResume: this.props.onEnableSync,
                        videoOwnerID: this.props.data.video.owner.id,
                        videoOwnerLogin: this.props.data.video.owner.login
                    }), Vt.createElement(Rt._19, {
                        className: Bn("video-chat", "qa-vod-chat"),
                        display: Rt.H.Flex,
                        background: Rt.m.Alt2,
                        borderLeft: !0,
                        color: Rt.F.Alt,
                        flexDirection: Rt.J.Column,
                        flexShrink: 0,
                        flexWrap: Rt.K.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: Rt._4.Relative
                    }, Vt.createElement(Rt.V, {
                        alignItems: Rt.c.Center,
                        className: "video-chat__header",
                        display: Rt.H.Flex,
                        flexShrink: 0,
                        justifyContent: Rt.U.Center
                    }, Vt.createElement(Rt._23, {
                        type: Rt._28.Span
                    }, Object(De.d)("Chat on Videos", "VideoChatPresentation"))), l, Vt.createElement(Ti, {
                        startSynced: s,
                        isScrollingSynced: this.props.isScrollingSynced,
                        onScrollOffBottom: this.props.onDisableSync,
                        onScrollBottom: this.props.onEnableSync,
                        onMount: this.onMessageScrollAreaMount,
                        onSyncScrollClick: this.props.onEnableSync
                    }, Vt.createElement(Rt.V, {
                        display: Rt.H.Flex,
                        flexDirection: Rt.J.Column,
                        fullHeight: !0,
                        justifyContent: Rt.U.End
                    }, Vt.createElement(Rt.Q, {
                        display: Rt.H.Flex,
                        alignItems: Rt.c.End,
                        fullWidth: !0
                    }, e))), Vt.createElement(Rt.V, {
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
            }(Vt.Component),
            Fi = Object(Pn.d)("VideoChat")(Ai),
            Mi = n("0TFF"),
            Li = 2,
            Vi = Object(Vn.b)(function(e, t) {
                var n = {
                    comments: [],
                    currentVideoTime: e.vodChat.comments.currentVideoTime,
                    cursor: e.vodChat.comments.cursor,
                    errorMessage: e.vodChat.comments.errorMessage,
                    hasFetchedComments: e.vodChat.comments.hasLoadedData,
                    hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                    isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                    isCurrentUserModerator: !1,
                    isLoggedIn: Object(Le.d)(e),
                    isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                    isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                    offsetRange: Et(e.vodChat.comments.comments),
                    replyCursorMap: e.vodChat.comments.replyCursorMap,
                    shouldSendReplayFilterError: !1,
                    hideTimestamps: e.vodChat.comments.hideTimestamps,
                    videoID: t.videoID
                };
                if (void 0 !== t.highlightedMessageID && (n.highlightedMessageID = t.highlightedMessageID), void 0 !== t.highlightTimestamp && (n.highlightTimestamp = t.highlightTimestamp), !t.data.loading && !t.data.error) {
                    var i = t.data,
                        r = i.currentUser,
                        a = i.video;
                    null !== r && r.roles && (n.isCurrentUserModerator = function(e, t) {
                        var n = e.id === t.id,
                            i = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
                        return !!t.self && t.self.isModerator || i || n
                    }(r, a.owner)), n.comments = bt(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = jn(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== ht.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
                }
                return n
            }, function(e, t) {
                return {
                    onUpdateBegan: function(n, i) {
                        if (i.videoID === n.videoID) {
                            if (!n.hasFetchedComments) {
                                var r = {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                };
                                if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                                return n.highlightedMessageID && (r.highlightedMessageID = n.highlightedMessageID), void e(S(cn, r))
                            }
                            if (n.offsetRange !== gt) {
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
                                        offsetThreshold: Li
                                    })) return void e(S(cn, {
                                    bitsConfig: t.bitsConfig,
                                    cursor: n.cursor.future,
                                    videoID: n.videoID
                                }));
                                if (function(e) {
                                        var t = e.currentVideoTime < e.offsetRange.beginSec,
                                            n = e.currentVideoTime > e.offsetRange.endSec;
                                        return t && _(e.cursor) || n && y(e.cursor)
                                    }(n)) return void e(S(cn, {
                                    bitsConfig: t.bitsConfig,
                                    offset: n.currentVideoTime,
                                    videoID: n.videoID
                                }))
                            }
                        } else e(oe(n.videoID))
                    },
                    onCreate: function(t) {
                        if (Object(Un.m)(t.message)) {
                            var n = Object(De.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                            e(R(n))
                        } else e(S(dn, t)), e(C(vn, t))
                    },
                    onError: function(t) {
                        e(R(t))
                    },
                    onErrorDismissClick: function() {
                        e(Z())
                    },
                    onUnmount: function() {
                        e(W())
                    },
                    onLoadMoreReplies: function(t, n, i, r) {
                        e(S(cn, k(t, n, i, r)))
                    },
                    onDisableSync: function() {
                        e(Q())
                    },
                    onEnableSync: function() {
                        e(G())
                    },
                    onShowLogin: t.onShowLogin,
                    onBanUser: function(t) {
                        e(S(Mt, t)), e(C(fn, t))
                    },
                    onDeleteComment: function(t) {
                        e(S(un, t)), e(C(gn, t))
                    },
                    onPlayerSeekRequest: function(n, i) {
                        t.onPlayerSeekRequest(n), void 0 !== i && e(C(kn, i))
                    },
                    onTurnOffReplayFilter: function() {
                        e(J(!1))
                    },
                    onWillMount: function() {
                        e(ne())
                    }
                }
            }, function(e, t, n) {
                var r = t.onDisableSync;
                e.isScrollingSynced || (r = function() {});
                var a = t.onCreate;
                return e.shouldSendReplayFilterError && (a = function(e) {
                    t.onError(i().chatReplayFilterError), t.onCreate(e)
                }), O.__assign({}, e, t, {
                    onDisableSync: r,
                    onCreate: a,
                    data: n.data
                })
            })(Fi),
            Ri = Object(Ln.graphql)(Mi, {
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
                        i = Object(Rn.a)(n && !n.loading && !n.error && n.video.owner.cheer && n.video.owner.cheer.emotes || []),
                        r = {};
                    return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (r = n.currentUser.blockedUsers.reduce(function(e, t) {
                        return e[t.id] = !0, e
                    }, {})), O.__assign({}, t, {
                        data: n,
                        bitsConfig: i,
                        blockedUsers: r
                    })
                }
            })(Vi);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return Ke
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "C", function() {
            return kt
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "p", function() {
            return W
        }), n.d(t, "r", function() {
            return se
        }), n.d(t, "w", function() {
            return y
        }), n.d(t, "x", function() {
            return _
        }), n.d(t, "o", function() {
            return k
        }), n.d(t, "n", function() {
            return Mt
        }), n.d(t, "z", function() {
            return Ft
        }), n.d(t, "B", function() {
            return Lt
        }), n.d(t, "D", function() {
            return S
        }), n.d(t, "E", function() {
            return C
        }), n.d(t, "l", function() {
            return Ut
        }), n.d(t, "q", function() {
            return dn
        }), n.d(t, "s", function() {
            return un
        }), n.d(t, "A", function() {
            return cn
        }), n.d(t, "J", function() {
            return mn
        }), n.d(t, "F", function() {
            return fn
        }), n.d(t, "G", function() {
            return vn
        }), n.d(t, "H", function() {
            return gn
        }), n.d(t, "I", function() {
            return bn
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
            return Cn
        }), n.d(t, !1, function() {}), n.d(t, "k", function() {
            return On
        }), n.d(t, "h", function() {
            return Tn
        }), n.d(t, "u", function() {
            return wn
        }), n.d(t, "v", function() {
            return ft
        }), n.d(t, "t", function() {
            return Mn
        }), n.d(t, "f", function() {
            return "mod-dashboard"
        }), n.d(t, "g", function() {
            return "mod-comment"
        }), n.d(t, "m", function() {
            return Ri
        }), n.d(t, !1, function() {}), n.d(t, "j", function() {
            return wi
        }), n.d(t, "i", function() {
            return Ci
        })
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                i = e.getDate(),
                r = new Date(0);
            return r.setFullYear(t, n, i - 1), r.setHours(0, 0, 0, 0), r
        }
    },
    mXYp: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
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
            p > 0 ? (g = r(e), v = r(t)) : (g = r(t), v = r(e));
            var k, y = a(v, g),
                _ = v.getTimezoneOffset() - g.getTimezoneOffset(),
                S = Math.round(y / 60) - _;
            if (S < 2) return m.includeSeconds ? y < 5 ? f("lessThanXSeconds", 5, b) : y < 10 ? f("lessThanXSeconds", 10, b) : y < 20 ? f("lessThanXSeconds", 20, b) : y < 40 ? f("halfAMinute", null, b) : f(y < 60 ? "lessThanXMinutes" : "xMinutes", 1, b) : 0 === S ? f("lessThanXMinutes", 1, b) : f("xMinutes", S, b);
            if (S < 45) return f("xMinutes", S, b);
            if (S < 90) return f("aboutXHours", 1, b);
            if (S < l) return f("aboutXHours", Math.round(S / 60), b);
            if (S < c) return f("xDays", 1, b);
            if (S < d) return f("xDays", Math.round(S / l), b);
            if (S < u) return k = Math.round(S / d), f("aboutXMonths", k, b);
            if ((k = o(v, g)) < 12) return f("xMonths", Math.round(S / d), b);
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
            r = (n.n(i), n("+V/3")),
            a = n("Odds"),
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
                            case r.d:
                                return e.clickURL;
                            case r.b:
                                return e.channelName ? function(e) {
                                    return "https://www.twitch.tv/" + e + "/subscribe?ref=in_chat_subscriber_link"
                                }(e.channelName) : "";
                            case r.c:
                                return s;
                            default:
                                return ""
                        }
                    }(t);
                return "" !== o && (n = i.createElement("a", {
                    href: o,
                    target: "_blank"
                }, n)), i.createElement(a._31, {
                    key: t.image1x,
                    label: t.title,
                    display: a.H.Inline,
                    align: a._32.Left,
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
                r = Math.floor(e % 3600 / 60),
                a = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
        }
    },
    n2E0: function(e, t, n) {
        "use strict";
        t.b = function(e) {
            switch (e) {
                case i.a.Archive:
                    return r.SpadeVideoBroadcastType.Archive;
                case i.a.Highlight:
                    return r.SpadeVideoBroadcastType.Highlight;
                case i.a.Upload:
                    return r.SpadeVideoBroadcastType.Upload;
                case i.a.WatchParty:
                    return r.SpadeVideoBroadcastType.WatchParty;
                case i.a.PastPremiere:
                    return r.SpadeVideoBroadcastType.PastPremiere;
                case i.a.PremiereUpload:
                    return r.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        }, t.a = function(e) {
            switch (e) {
                case a.b:
                    return r.PageviewContent.PopularVideos;
                case a.a:
                    return r.PageviewContent.RecentVideos;
                default:
                    return e
            }
        };
        var i = n("6WAQ"),
            r = n("vH/s"),
            a = n("3yQz")
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
            r = 6e4,
            a = 864e5;
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = n.getTime() - n.getTimezoneOffset() * r,
                l = o.getTime() - o.getTimezoneOffset() * r;
            return Math.round((s - l) / a)
        }
    },
    nk30: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = i(e),
                a = r.getDay(),
                o = 6 + (a < n ? -7 : 0) - (a - n);
            return r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + o), r
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
    nrdj: function(e, t, n) {
        "use strict";
        var i, r = n("HW6M"),
            a = n("U7vG"),
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
                p = r("cheermote-for-amount__cheer-amount", {
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
                m = a.createElement(d.Q, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? d._24.Center : void 0
                }, a.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var f = r("cheermote-for-amount__cheer-image", {
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
                g = a.createElement(c.a, {
                    className: f,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (g = null), a.createElement(d.V, {
                className: "cheermote-for-amount",
                alignItems: e.alignItems,
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
            r = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, i(e) + n)
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
                r = i(t);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
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
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "thumbnailURL"
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
    pg5l: function(e, t, n) {
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatColor"
                                },
                                arguments: [],
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
                                    value: "channelLogin"
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("QU+n").definitions)), e.exports = i
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
                                    value: "recommendations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    q8Cw: function(e, t) {},
    qNYo: function(e, t, n) {
        var i = n("xA5w"),
            r = n("9Jn5"),
            a = n("NKE6"),
            o = n("MKc+");
        e.exports = function(e, t) {
            var n = i(e),
                s = i(t),
                l = a(n, s),
                c = Math.abs(r(n, s));
            return n = o(n, l * c), l * (c - (a(n, s) === -l))
        }
    },
    qPxx: function(e, t, n) {
        var i = n("LLTj");
        e.exports = function(e, t) {
            var n = i(e),
                r = i(t);
            return n.getTime() === r.getTime()
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
                        name: {
                            kind: "Name",
                            value: "animatedPreviewURL"
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
                                directives: []
                            }, {
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
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "lengthSeconds"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
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
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
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
                                    value: "viewingHistory"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "position"
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
                r = n - n % 3;
            return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var i = n("xA5w"),
            r = n("Bb5e"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = i(e),
                o = i(t),
                s = a(n, o),
                l = Math.abs(r(n, o));
            return n.setFullYear(n.getFullYear() - s * l), s * (l - (a(n, o) === -s))
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
                                    value: "title"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
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
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "publishedAt"
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
                                            value: "displayName"
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
                r = i(t);
            return n.getTime() === r.getTime()
        }
    },
    sgUC: function(e, t) {},
    smiM: function(e, t) {},
    t6pj: function(e, t, n) {
        var i = n("YRFD"),
            r = n("xA5w"),
            a = n("25hp"),
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
            u > 0 ? (h = r(e), f = r(t)) : (h = r(t), f = r(e));
            var v, b, k, y, _, S = Math[d.partialMethod ? String(d.partialMethod) : "floor"],
                C = a(f, h),
                w = f.getTimezoneOffset() - h.getTimezoneOffset(),
                E = S(C / 60) - w;
            if ("s" === (v = d.unit ? String(d.unit) : E < 1 ? "s" : E < 60 ? "m" : E < s ? "h" : E < l ? "d" : E < c ? "M" : "Y")) return p("xSeconds", C, g);
            if ("m" === v) return p("xMinutes", E, g);
            if ("h" === v) return b = S(E / 60), p("xHours", b, g);
            if ("d" === v) return k = S(E / s), p("xDays", k, g);
            if ("M" === v) return y = S(E / l), p("xMonths", y, g);
            if ("Y" === v) return _ = S(E / c), p("xYears", _, g);
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
        var r = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
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
    "u/4p": function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            var n = t ? Number(t.weekStartsOn) || 0 : 0,
                r = i(e),
                a = r.getDay(),
                o = (a < n ? 7 : 0) + a - n;
            return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r
        }
    },
    uiPj: function(e, t, n) {
        "use strict";

        function i(e) {
            return f.createElement(V.Q, {
                ellipsis: !0
            }, f.createElement("li", null, e.children))
        }

        function r(e) {
            switch (e.level) {
                case 4:
                    return f.createElement(V._23, {
                        type: V._28.H4,
                        ellipsis: !0
                    }, e.children);
                case 5:
                    return f.createElement(V._23, {
                        type: V._28.H5,
                        ellipsis: !0
                    }, e.children);
                case 6:
                    return f.createElement(V._23, {
                        type: V._28.H6,
                        ellipsis: !0
                    }, e.children);
                default:
                    return f.createElement(V._23, {
                        type: V._28.H3,
                        ellipsis: !0
                    }, e.children)
            }
        }

        function a(e) {
            return f.createElement(V._23, {
                type: V._28.P,
                ellipsis: !0
            }, e.children)
        }

        function o(e, t) {
            var n = this;
            return function() {
                return m.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return m.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n = "kraken/videos/" + e, [4, le.a.delete(n)];
                            case 1:
                                if (200 !== (i = r.sent()).status) {
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
            g = n("3zLD"),
            v = n("6sO2"),
            b = n("yWCw"),
            k = n("j7/Y"),
            y = n("NXs7"),
            _ = n("VAT8"),
            S = n("JpYe"),
            C = n("w9tK"),
            w = n("vH/s"),
            E = n("n2E0"),
            O = n("SI0h"),
            D = n("CSlQ"),
            x = n("BC6Q"),
            N = n("RxMT"),
            T = n("WzS7"),
            I = n("Aj/L"),
            A = n("wuJz"),
            F = n("7vx8"),
            M = n("GJxf"),
            L = n("dc2a"),
            V = n("Odds"),
            R = n("VUr8"),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && Object(L.a)(this.props.data.currentUser.viewedVideos) || null;
                    if (!(!this.props.data || this.props.data.loading || e && 0 !== e.length)) return null;
                    e = function(e) {
                        return e.filter(function(e) {
                            if (!e.self || !e.self.viewingHistory || !e.self.viewingHistory.position) return !1;
                            var t = e.self.viewingHistory.position / e.lengthSeconds;
                            return !(t <= .05 || t >= .95)
                        }).sort(function(e, t) {
                            return Object(A.compareDesc)(new Date(e.publishedAt), new Date(t.publishedAt))
                        })
                    }(e || []);
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return f.createElement(V.V, {
                        padding: {
                            bottom: 2
                        }
                    }, f.createElement(V._23, {
                        type: V._28.H4,
                        transform: V._27.Uppercase,
                        color: V.F.Alt2
                    }, Object(v.d)("Finish Watching", "ResumeWatchingVideoCarousel")), f.createElement(M.a, {
                        currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
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
            j = Object(g.compose)(Object(F.a)(R, {
                skip: function(e) {
                    return !e.isLoggedIn || !e.firstPageLoaded
                }
            }), Object(D.d)("ResumeWatchingVideoCarousel", {
                autoReportInteractive: !0
            }))(U),
            B = Object(s.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded,
                    isLoggedIn: Object(I.d)(e)
                }
            })(j),
            H = n("fc0G"),
            P = n("Ic9h"),
            W = n("fTsm"),
            z = n("/nNw"),
            q = n("F8kA"),
            G = (n("sZED"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.createElement(V.V, {
                        "data-test-selector": "private-video-banner-layout"
                    }, this.renderHeader())
                }, t.prototype.renderHeader = function() {
                    var e = this;
                    return f.createElement(V.e, {
                        type: V.i.SlideInBottom,
                        delay: V.f.Medium,
                        duration: V.g.Medium,
                        enabled: !0
                    }, f.createElement(V._19, {
                        className: "private-video-banner__header",
                        display: V.H.Flex,
                        background: V.m.AccentAlt2,
                        color: V.F.Overlay,
                        alignItems: V.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        fontSize: V.L.Size6,
                        "data-test-selector": "private-video-banner-header"
                    }, f.createElement(V.V, {
                        display: V.H.Flex,
                        alignItems: V.c.Center,
                        justifyContent: V.U.Center
                    }, f.createElement(V._10, {
                        asset: V._11.Lock,
                        width: 20,
                        height: 20
                    })), f.createElement(V._23, null, Object(v.d)("This video is private. To Premiere or edit your video, visit your <x:link>video manager</x:link>", {
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
                            }, f.createElement(V._23, {
                                type: V._28.Span,
                                color: V.F.OverlayAlt
                            }, t))
                        }
                    }, "PrivateVideoBanner"))))
                }, t
            }(f.Component)),
            Y = n("jcM9"),
            Q = n("lfvs"),
            K = n("6WAQ"),
            J = n("J4ib"),
            $ = {
                skipHtml: !0,
                softBreak: "br",
                allowedTypes: ["Emph", "Strong", "Paragraph", "Heading", "Item", "List", "Text", "Link", "Softbreak", "Hardbreak"]
            },
            Z = "qa-description-container",
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
                                }, $))
                            });
                            else {
                                var o = n[0].split("\n")[0];
                                e = f.createElement(Q, m.__assign({
                                    source: o,
                                    renderers: {
                                        Paragraph: a,
                                        Heading: r,
                                        Item: i
                                    }
                                }, $))
                            }
                            return f.createElement(V.V, {
                                "data-test-selector": Z
                            }, f.createElement(V._37, null, e), t.state.isExpanded ? t.renderBroadcastType(t.props.broadcastType) : null)
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
                    return this.props.description ? f.createElement(V._19, {
                        background: V.m.Base,
                        "data-test-selector": "qa-more-info-box"
                    }, f.createElement(V.V, {
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, this.renderDescription()), f.createElement(V._19, {
                        alignContent: V.b.Center,
                        borderTop: !0,
                        display: V.H.Flex,
                        justifyContent: V.U.Center,
                        padding: {
                            y: .5
                        }
                    }, f.createElement(V.u, {
                        "data-test-selector": "qa-toggle-expand-button",
                        type: V.z.Text,
                        onClick: this.toggleExpand
                    }, this.state.isExpanded ? Object(J.d)("Show Less", "MoreInfoBox") : Object(J.d)("Show More", "MoreInfoBox")))) : null
                }, t.prototype.renderBroadcastType = function(e) {
                    if (!e) return f.createElement(V._3, {
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
                    return f.createElement(V._23, {
                        "data-test-selector": "qa-broadcast-type-text"
                    }, Object(J.d)("Video Category: {broadcastType}", {
                        broadcastType: t
                    }, "MoreInfoBox"))
                }, t = m.__decorate([Object(D.d)("MoreInfoBox", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            ee = n("cSst"),
            te = n("NY9D"),
            ne = /\S/,
            ie = function(e) {
                var t = e.video,
                    n = "",
                    i = "",
                    r = !!t.publishedAt;
                r && (n = Object(v.g)(new Date(t.publishedAt)));
                var a = t.title && "" !== t.title && ne.test(t.title);
                return a && r ? i = t.title + " · " + n : t.title && a && !r ? i = t.title : !a && r && (i = n), f.createElement(V._19, {
                    margin: {
                        bottom: .5
                    }
                }, f.createElement(V._23, {
                    ellipsis: !0,
                    title: t.title,
                    fontSize: V.L.Size4
                }, i))
            },
            re = Object(D.d)("VideoInfo", {
                autoReportInteractive: !0
            })(function(e) {
                var t = e.video,
                    n = null;
                if (t && t.scope === z.VideoScope.Private && (n = f.createElement(V._19, {
                        fontSize: V.L.Size4
                    }, f.createElement(V._1, {
                        label: Object(v.d)("Private", "VideoTitle")
                    }))), t && null === t.game) return f.createElement("div", null, n, f.createElement(ie, {
                    video: t
                }));
                var i = null;
                null === t ? i = f.createElement(V._3, {
                    "data-test-selector": "game-image-placeholder",
                    height: 55,
                    width: 40
                }) : null !== t.game && (i = f.createElement(q.a, {
                    to: Object(te.c)(t.game.name),
                    "data-a-target": "video-info-game-boxart-link"
                }, f.createElement(V.C, {
                    imageSrc: t.game.boxArtURL,
                    imageAlt: t.game.name,
                    aspect: V.k.BoxArt,
                    size: V.D.Size4
                })));
                var r = null;
                return null === t ? r = f.createElement(V.V, {
                    "data-test-selector": "info-placeholder",
                    display: V.H.Flex,
                    flexDirection: V.J.Column
                }, f.createElement(V._3, {
                    lineCount: 1,
                    width: 320
                }), f.createElement(V._3, {
                    lineCount: 1,
                    width: 240
                })) : null !== t.game && (r = f.createElement("div", null, n, f.createElement(ie, {
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
                    svgAsset: V._11.NavGames,
                    title: t.game.name,
                    "data-a-target": "video-info-game-link"
                }))), f.createElement(V.A, {
                    row: !0
                }, f.createElement(V.V, {
                    flexShrink: 0,
                    margin: {
                        right: 1
                    }
                }, i), f.createElement(V.B, null, r))
            }),
            ae = n("CIox"),
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
                    return f.createElement(V._19, {
                        background: V.m.Base,
                        "data-test-selector": "qa-video-delete-modal",
                        className: "video-delete-modal",
                        padding: 3
                    }, f.createElement(V.V, null, f.createElement(V.V, {
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(V._23, {
                        type: V._28.H4
                    }, Object(J.d)("Delete Video", "VideoDeleteModal"))), this.renderErrorMessage(), f.createElement(V._23, {
                        type: V._28.P,
                        color: V.F.Alt2
                    }, Object(J.d)("Are you sure you want to delete this video?", "VideoDeleteModal"), f.createElement("br", null), Object(J.d)("This action cannot be undone.", "VideoDeleteModal"))), f.createElement(V._19, {
                        padding: {
                            y: 2
                        },
                        margin: {
                            y: 2
                        },
                        borderTop: !0,
                        borderBottom: !0
                    }, f.createElement(V.A, {
                        row: !0
                    }, f.createElement("img", {
                        alt: this.props.video.title || Object(J.d)("Video Thumbnail", "VideoDeleteModal"),
                        src: this.props.video.previewThumbnailURL,
                        className: "video-delete-modal__thumb"
                    }), f.createElement(V.B, null, f.createElement(V.V, {
                        margin: {
                            left: 1
                        }
                    }, f.createElement(V.V, {
                        ellipsis: !0
                    }, this.props.video.title), f.createElement(V._19, {
                        ellipsis: !0,
                        color: V.F.Alt2
                    }, Object(J.d)("{created, date, medium}", {
                        created: new Date(this.props.video.publishedAt)
                    }, "VideoDeleteModal"), " · ", Object(de.a)(this.props.video.lengthSeconds)), f.createElement(V._19, {
                        ellipsis: !0,
                        color: V.F.Alt2
                    }, Object(J.d)("{viewCount, plural, one {# View} other {# Views}}", {
                        viewCount: this.props.video.viewCount
                    }, "VideoDeleteModal")))))), f.createElement(V.V, {
                        display: V.H.Flex,
                        justifyContent: V.U.Center
                    }, f.createElement(V.V, {
                        display: V.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, f.createElement(V.u, {
                        type: V.z.Text,
                        onClick: this.onClickCancel,
                        "data-test-selector": "qa-video-delete-modal-cancel-button"
                    }, Object(J.d)("Cancel", "VideoDeleteModal"))), f.createElement(V.V, {
                        display: V.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, f.createElement(V.u, {
                        type: V.z.Alert,
                        onClick: this.onClickDelete,
                        disabled: this.state.requestInProgress,
                        "data-test-selector": "qa-video-delete-modal-delete-button"
                    }, Object(J.d)("Delete", "VideoDeleteModal")))), f.createElement(ce.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t.prototype.renderErrorMessage = function() {
                    return this.state.errorMessage ? f.createElement(V._19, {
                        className: "video-delete-modal__error-container",
                        fullWidth: !0,
                        "data-test-selector": "qa-video-delete-modal-error-container",
                        margin: {
                            bottom: 1
                        },
                        padding: 1
                    }, f.createElement(V._23, {
                        color: V.F.Error
                    }, this.state.errorMessage)) : null
                }, t
            }(f.Component)),
            me = Object(s.b)(null, function(e) {
                return Object(l.b)({
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
                    return f.createElement("li", null, f.createElement(V.T, m.__assign({
                        "data-test-selector": this.props.testSelector
                    }, this.props.interactableProps), f.createElement(V.V, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, this.props.children)))
                }, t = m.__decorate([Object(D.d)("InteractableOption", {
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
                    return f.createElement(pe.a, null, f.createElement(V.v, {
                        "data-test-selector": "qa-video-options-button",
                        type: V.w.Hollow,
                        icon: V._11.More,
                        ariaLabel: Object(J.d)("Video Options", "VideoOptions"),
                        disabled: !this.props.video
                    }), this.props.video ? f.createElement(V.p, {
                        direction: V.q.TopRight
                    }, f.createElement(V._19, {
                        padding: {
                            y: 1
                        },
                        color: V.F.Link
                    }, f.createElement("ul", {
                        "data-test-selector": "qa-video-options-container"
                    }, this.renderReportOption(this.props.video, this.props.currentUser), this.renderHighlightOption(this.props.video, this.props.currentUser), this.renderDeleteOption(this.props.video, this.props.currentUser)))) : f.createElement(V.p, null))
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
                    var e = Object(S.a)(this.props),
                        t = {
                            timestamp: Object(de.a)(this.props.lastVideoOffset, {
                                zeroPadAll: !0
                            })
                        };
                    return "" !== e && (t = m.__assign({}, t, {
                        collection: e
                    })), JSON.stringify(t)
                }, t = m.__decorate([Object(D.d)("VideoOptions", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            be = Object(s.b)(null, function(e) {
                return Object(l.b)({
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
            })(Object(ae.e)(ve)),
            ke = (n("YhgU"), Object(D.d)("VideoInfoBar", {
                autoReportInteractive: !0
            })(function(e) {
                var t = null;
                return e.video && e.video.description && (t = f.createElement(V._19, {
                    borderTop: !0,
                    "data-test-selector": "video-description"
                }, f.createElement(X, {
                    description: e.video.description,
                    broadcastType: e.video.broadcastType
                }))), f.createElement(V._19, {
                    background: V.m.Base,
                    border: !0
                }, f.createElement(V._19, {
                    alignItems: V.c.Center,
                    breakpointMedium: {
                        flexDirection: V.J.Row
                    },
                    display: V.H.Flex,
                    flexWrap: V.K.NoWrap,
                    flexDirection: V.J.Column,
                    justifyContent: V.U.Start
                }, f.createElement(V._19, {
                    flexGrow: 1,
                    fullHeight: !0,
                    fullWidth: !0,
                    padding: 1
                }, f.createElement(re, {
                    video: e.video
                })), f.createElement(V._19, {
                    alignItems: V.c.Center,
                    className: "video-info-bar__action-container",
                    display: V.H.Flex,
                    flexDirection: V.J.Row,
                    flexShrink: 0,
                    fullHeight: !0,
                    padding: 1
                }, e.video && f.createElement(V._19, {
                    alignItems: V.c.Center,
                    "data-test-selector": "total-views",
                    display: V.H.Flex,
                    color: V.F.Alt2,
                    flexGrow: 1,
                    fontSize: V.L.Size5
                }, f.createElement(V._18, {
                    value: Object(v.e)(e.video.viewCount),
                    label: Object(v.d)("Total Views", "VideoInfoBar"),
                    icon: V._11.GlyphViews
                })), f.createElement(V.V, {
                    display: V.H.Flex,
                    flexGrow: 0
                }, f.createElement(V.V, {
                    padding: {
                        x: 1
                    }
                }, f.createElement(Y.a, {
                    collectionID: e.collectionID,
                    video: e.video,
                    buttonType: V.z.Hollow,
                    balloonDirection: V.q.TopRight,
                    lastVideoOffset: e.lastVideoOffset
                })), f.createElement(be, {
                    currentUser: e.currentUser,
                    video: e.video,
                    lastVideoOffset: e.lastVideoOffset
                })))), t)
            })),
            ye = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(I.d)(e)
                }
            })(function(e) {
                var t;
                return t = e.isLoggedIn ? f.createElement(T.e, {
                    tracking: {
                        medium: w.PageviewMedium.VideoNotFoundPage,
                        location: w.PageviewLocation.VideoWatchPage
                    }
                }) : f.createElement(T.c, {
                    tracking: {
                        medium: w.PageviewMedium.VideoNotFoundPage,
                        location: w.PageviewLocation.VideoWatchPage
                    }
                }), f.createElement(V._19, {
                    display: V.H.Flex,
                    color: V.F.Alt2,
                    justifyContent: V.U.Center,
                    fullWidth: !0,
                    fullHeight: !0
                }, f.createElement(V.V, {
                    display: V.H.InlineFlex,
                    alignItems: V.c.Center,
                    flexWrap: V.K.NoWrap,
                    padding: {
                        x: 5
                    }
                }, f.createElement(V._19, {
                    margin: {
                        right: 2
                    },
                    flexShrink: 0,
                    color: V.F.Alt2
                }, f.createElement(V._10, {
                    asset: V._11.DeadGlitch,
                    width: 92,
                    height: 96
                })), f.createElement(V.V, {
                    display: V.H.Flex,
                    flexDirection: V.J.Column
                }, f.createElement(V._23, {
                    fontSize: V.L.Size4,
                    "data-test-selector": "video-error-message"
                }, Object(v.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "VideoNotFoundPage")), f.createElement(V._23, {
                    fontSize: V.L.Size4,
                    "data-test-selector": "video-error-cta"
                }, Object(v.d)("In the meantime, take a look at these other videos instead.", "VideoNotFoundPage")))), f.createElement(V.V, {
                    fullWidth: !0,
                    padding: {
                        x: 5
                    }
                }, t))
            }),
            _e = (n("VnsS"), n("eeM1")),
            Se = -1,
            Ce = function(e) {
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
                        }(e.t) : Se
                    }, n.onPlayerNavigationEvent = function(e) {
                        var t = n.getVideo(),
                            i = t ? t.id : "",
                            r = Object(S.a)(n.props);
                        Object(H.d)(e, n.props.history, {
                            currentVideoID: i,
                            currentCollectionID: r
                        })
                    }, n.onVideoTimeChange = function(e) {
                        var t = Math.floor(e);
                        t !== n.state.lastVideoOffset ? n.setState({
                            lastVideoOffset: t
                        }, function() {
                            n.props.onVideoTimeChange(t)
                        }) : n.state.requestedVideoOffset === t && n.setState({
                            requestedVideoOffset: Se
                        })
                    }, n.getMiniPlayerTitle = function() {
                        var e = n.getVideo();
                        return e && e.title || Object(v.d)("Watching video", "VideoWatchPage")
                    }, n.getMiniPlayerURL = function(e, t) {
                        return e || t ? !e && t ? "/collections/" + t : "/videos/" + e + (t ? "?collection=" + t : "") : (v.i.withCategory("VideoWatchPage").error(new Error, "Tried to generate a mini player URL based on the current route, but critical options were missing."), "/")
                    }, n.state = {
                        requestedVideoOffset: n.getInitialVideoOffsetTime(),
                        lastVideoOffset: Se,
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
                        t = Object(S.a)(this.props),
                        n = !this.props.data.loading && t && this.props.data.collection && 0 === this.props.data.collection.items.totalCount,
                        i = this.getOwner();
                    if (this.props.data.error || e && e.id && !e.owner) return f.createElement(b.a, {
                        message: Object(v.d)("Error loading data.", "VideoWatchPage")
                    });
                    if (!this.props.data.loading && (!e || e && "" === e.id) && !t) return f.createElement(ye, null);
                    var r = p("video-watch-page__right-column", (l = {}, l[Object(_.c)(y.a.Dark)] = this.props.theatreModeEnabled, l)),
                        a = {};
                    this.state.requestedVideoOffset !== Se && (a.nextVideoOffset = this.state.requestedVideoOffset), "" !== t && (a.collectionID = t);
                    var o = this.props.match.params.videoID;
                    o && (a.vodID = o);
                    var s = null;
                    return e && e.scope === z.VideoScope.Private && e.owner && e.owner.login && (s = f.createElement(G, {
                        ownerLogin: i.login
                    })), f.createElement(V.V, {
                        fullHeight: !0
                    }, f.createElement(P.a, {
                        currentPage: O.b.Videos,
                        "data-test-selector": "qa-video-watch-page",
                        ownerLogin: i.login,
                        theatreMode: this.props.theatreModeEnabled
                    }, s, f.createElement(W.a, null, f.createElement(x.a, {
                        playerProps: m.__assign({
                            onNavigationRequest: this.onPlayerNavigationEvent,
                            onSeek: this.onVideoTimeChange,
                            onVideoTimeChange: this.onVideoTimeChange,
                            attachToWindow: !0
                        }, a),
                        miniPlayerTitle: this.getMiniPlayerTitle(),
                        miniPlayerContentRoute: this.state.miniPlayerRouteLink
                    })), f.createElement(V.V, {
                        padding: {
                            bottom: 2
                        }
                    }, !n && f.createElement(ke, {
                        collectionID: Object(S.a)(this.props),
                        currentUser: this.props.data.currentUser || null,
                        video: e || null,
                        lastVideoOffset: this.state.lastVideoOffset
                    })), f.createElement(T.e, {
                        currentlyWatchingVideoID: o,
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    }), !n && f.createElement(T.b, {
                        currentlyWatchingVideoID: o,
                        gameName: e && e.game && e.game.name,
                        noGameSpecified: !(!e || e.game && e.game.name),
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    }), f.createElement(T.d, {
                        currentlyWatchingVideoID: o,
                        displayName: i.displayName,
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        },
                        userID: i.id
                    }), f.createElement(B, {
                        currentlyWatchingVideoID: o,
                        tracking: {
                            medium: w.PageviewMedium.VideoWatchPage,
                            location: w.PageviewLocation.VideoWatchPage
                        }
                    })), !n && f.createElement(N.b, null, f.createElement(V._19, {
                        className: r,
                        background: V.m.Alt2,
                        "data-test-selector": "video-chat-wrapper",
                        display: V.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: V.K.NoWrap,
                        overflow: V._0.Hidden,
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
                    return n !== Se && (e.highlightTimestamp = n), t.comment && (e.highlightedMessageID = t.comment), e
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
            we = Object(g.compose)(Object(g.graphql)(_e, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.match.params.videoID,
                            collectionID: Object(S.a)(e) || void 0,
                            useCollectionID: !!Object(S.a)(e) && !e.match.params.videoID
                        }
                    }
                }
            }), Object(D.d)("VideoWatchPage", {
                destination: C.a.VideoWatchPage
            }), Object(k.a)({
                location: w.PageviewLocation.VideoWatchPage,
                properties: function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        r = null,
                        a = null,
                        o = null;
                    if (e.match.params.videoID) t = e.match.params.videoID, e.data.video && e.data.video.owner && (n = e.data.video.broadcastType, i = e.data.video.game ? e.data.video.game.name : null, r = e.data.video.language, a = e.data.video.owner.login, o = Number(e.data.video.owner.id));
                    else if (Object(S.a)(e) && e.data.collection && e.data.collection.items.edges.length > 0) {
                        var s = e.data.collection.items.edges[0].node;
                        t = s.id, n = s.broadcastType, i = s.game ? s.game.name : null, r = s.language, a = s.owner ? s.owner.login : null, o = s.owner ? Number(s.owner.id) : null
                    }
                    return {
                        channel: a,
                        channel_id: o,
                        vod_type: n ? Object(E.b)(n) : null,
                        vod_id: t,
                        game: i,
                        language: r
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(Ce),
            Ee = Object(s.b)(function(e) {
                return {
                    theatreModeEnabled: e.ui.theatreModeEnabled
                }
            }, function(e) {
                return Object(l.b)({
                    onLogin: function() {
                        return Object(d.f)(c.a.VODComment)
                    },
                    onVideoTimeChange: u.r
                }, e)
            })(we);
        n.d(t, "VideoWatchPage", function() {
            return Ee
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
            r = n("jQas");
        e.exports = {
            distanceInWords: i(),
            format: r()
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
    vh75: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "i", function() {
            return s
        }), n.d(t, "f", function() {
            return l
        }), n.d(t, "g", function() {
            return c
        }), n.d(t, "h", function() {
            return d
        }), n.d(t, "j", function() {
            return u
        }), n.d(t, "l", function() {
            return m
        }), n.d(t, "k", function() {
            return p
        }), n.d(t, "o", function() {
            return h
        }), n.d(t, "n", function() {
            return f
        }), n.d(t, "q", function() {
            return g
        }), n.d(t, "p", function() {
            return v
        }), n.d(t, "s", function() {
            return b
        }), n.d(t, "r", function() {
            return k
        }), n.d(t, "a", function() {
            return y
        }), n.d(t, "m", function() {
            return _
        }), t.I = function(e, t) {
            return {
                type: u,
                channel: e,
                messages: t
            }
        }, t.w = function() {
            return {
                type: r
            }
        }, t.G = function() {
            return {
                type: b
            }
        }, t.B = function() {
            return {
                type: k
            }
        }, t.K = function() {
            return {
                type: a
            }
        }, t.H = function() {
            return {
                type: i
            }
        }, t.D = function() {
            return {
                type: m
            }
        }, t.y = function() {
            return {
                type: p
            }
        }, t.C = function() {
            return {
                type: s
            }
        }, t.v = function(e, t) {
            return {
                type: d,
                channelLogin: e,
                duration: t
            }
        }, t.u = function(e) {
            return {
                type: c,
                duration: e
            }
        }, t.x = function() {
            return {
                type: l
            }
        }, t.E = function() {
            return {
                type: h
            }
        }, t.z = function() {
            return {
                type: f
            }
        }, t.F = function() {
            return {
                type: g
            }
        }, t.A = function() {
            return {
                type: v
            }
        }, t.t = function(e, t) {
            return {
                type: y,
                command: e.toLowerCase(),
                handler: t
            }
        }, t.J = function(e) {
            return {
                type: _,
                command: e.toLowerCase()
            }
        };
        var i = "chat.CHAT_HIDDEN",
            r = "chat.CHAT_RESET",
            a = "chat.CHAT_SHOWN",
            o = "chat.EMOTE_SETS_UPDATED",
            s = "chat.FOLLOWER_MODE_ENABLED",
            l = "chat.FOLLOWER_MODE_DISABLED",
            c = "chat.FOLLOWER_MODE_DURATION_CHANGED",
            d = "chat.FOLLOWER_MODE_DURATION_PREFERENCE_CHANGED",
            u = "chat.MESSAGES_UPDATED",
            m = "chat.MODICONS_ENABLED",
            p = "chat.MOD_ICONS_DISABLED",
            h = "chat.SLOW_MODE_ENABLED",
            f = "chat.SLOW_MODE_DISABLED",
            g = "chat.SUBS_ONLY_MODE_ENABLED",
            v = "chat.SUBS_ONLY_MODE_DISABLED",
            b = "chat.TIMESTAMPS_ENABLED",
            k = "chat.TIMESTAMPS_DISABLED",
            y = "chat.ADD_COMMAND",
            _ = "chat.REMOVE_COMMAND"
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
    vv3i: function(e, t) {},
    w4by: function(e, t, n) {
        var i = n("6Zhv"),
            r = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return i(e, n * r)
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
                r = Number(t);
            return n.setHours(r), n
        }
    },
    wajf: function(e, t, n) {
        var i = n("xA5w"),
            r = n("D6ie");
        e.exports = function(e, t) {
            var n = i(e),
                a = Number(t),
                o = r(n) - a;
            return n.setDate(n.getDate() - 7 * o), n
        }
    },
    weaG: function(e, t) {},
    wiYS: function(e, t, n) {
        var i = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, r, a = i(e).getTime();
            return t.forEach(function(e, t) {
                var o = i(e),
                    s = Math.abs(a - o.getTime());
                (void 0 === n || s < r) && (n = t, r = s)
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
    x9n8: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("J92i"),
            l = Object(i.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(r.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(a.c)()
                    }
                }, e)
            })(s.a);
        n.d(t, "a", function() {
            return l
        })
    },
    xA5w: function(e, t, n) {
        function i(e, t, n) {
            t = t || 0, n = n || 0;
            var i = new Date(0);
            i.setUTCFullYear(e, 0, 4);
            var r = 7 * t + n + 1 - (i.getUTCDay() || 7);
            return i.setUTCDate(i.getUTCDate() + r), i
        }
        var r = n("607n"),
            a = 36e5,
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
            _ = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            S = /([Z+-].*)$/,
            C = /^(Z)$/,
            w = /^([+-])(\d{2})$/,
            E = /^([+-])(\d{2}):?(\d{2})$/;
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? s : Number(n);
            var O = function(e) {
                    var t, n = {},
                        i = e.split(l);
                    if (c.test(i[0]) ? (n.date = null, t = i[0]) : (n.date = i[0], t = i[1]), t) {
                        var r = S.exec(t);
                        r ? (n.time = t.replace(r[1], ""), n.timezone = r[1]) : n.time = t
                    }
                    return n
                }(e),
                D = function(e, t) {
                    var n, i = u[t],
                        r = p[t];
                    if (n = m.exec(e) || r.exec(e)) {
                        var a = n[1];
                        return {
                            year: parseInt(a, 10),
                            restDateString: e.slice(a.length)
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
                }(O.date, n),
                x = D.year,
                N = function(e, t) {
                    if (null === t) return null;
                    var n, r, a, o;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = h.exec(e)) return r = new Date(0), a = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, a), r;
                    if (n = f.exec(e)) {
                        r = new Date(0);
                        var s = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, s), r
                    }
                    if (n = g.exec(e)) {
                        r = new Date(0), a = parseInt(n[1], 10) - 1;
                        var l = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, a, l), r
                    }
                    if (n = v.exec(e)) return o = parseInt(n[1], 10) - 1, i(t, o);
                    if (n = b.exec(e)) {
                        o = parseInt(n[1], 10) - 1;
                        var c = parseInt(n[2], 10) - 1;
                        return i(t, o, c)
                    }
                    return null
                }(D.restDateString, x);
            if (N) {
                var T, I = N.getTime(),
                    A = 0;
                return O.time && (A = function(e) {
                    var t, n, i;
                    if (t = k.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * a;
                    if (t = y.exec(e)) return n = parseInt(t[1], 10), i = parseFloat(t[2].replace(",", ".")), n % 24 * a + i * o;
                    if (t = _.exec(e)) {
                        n = parseInt(t[1], 10), i = parseInt(t[2], 10);
                        var r = parseFloat(t[3].replace(",", "."));
                        return n % 24 * a + i * o + 1e3 * r
                    }
                    return null
                }(O.time)), O.timezone ? T = function(e) {
                    var t, n;
                    return (t = C.exec(e)) ? 0 : (t = w.exec(e)) ? (n = 60 * parseInt(t[2], 10), "+" === t[1] ? -n : n) : (t = E.exec(e)) ? (n = 60 * parseInt(t[2], 10) + parseInt(t[3], 10), "+" === t[1] ? -n : n) : 0
                }(O.timezone) : (T = new Date(I + A).getTimezoneOffset(), T = new Date(I + A + T * o).getTimezoneOffset()), new Date(I + A + T * o)
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
            r = n("U7vG"),
            a = n("Odds"),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a.R, {
                        readOnly: !0,
                        type: a.S.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), t.c = function(e) {
            switch (e) {
                case o.Success:
                    return {
                        message: Object(r.d)("Success!", "Profile Edit"),
                        type: a._2.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: a._2.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: a._2.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: a._2.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: a._2.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: a._2.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: a._2.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: a._2.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: a._2.Alert
                    }
            }
        };
        var i, r = n("6sO2"),
            a = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(o || (o = {}))
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
            r = n("6sO2"),
            a = n("3iBR"),
            o = n("qe65"),
            s = n("Odds"),
            l = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": a.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": a.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(s.V, {
                    display: s.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.J.Column,
                    justifyContent: s.U.Center,
                    alignItems: s.c.Center
                }, i.createElement(s._23, {
                    type: s._28.H4,
                    bold: !0
                }, i.createElement(o.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(r.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(r.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    yU6t: function(e, t) {},
    ymQ7: function(e, t, n) {
        var i = n("xA5w"),
            r = n("JURy"),
            a = n("nizW");
        e.exports = function(e) {
            var t = i(e);
            return a(t, r(t)) + 1
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
        var i, r = n("TToO"),
            a = n("OAwv"),
            o = (n.n(a), n("U7vG")),
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
                            r = null !== t.state.timestampToShare ? t.state.timestampToShare : void 0,
                            a = S(t.props.video.id, r),
                            o = t.getVideoEmbedLink();
                        return e = n && i ? Object(s.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: i
                        }, "VideoShareBox") : n && !i ? Object(s.d)("Watch video from {displayName} on www.twitch.tv", {
                            displayName: n
                        }, "VideoShareBox") : !n && i ? Object(s.d)("Watch {title} on www.twitch.tv", {
                            title: i
                        }, "VideoShareBox") : Object(s.d)("Watch on www.twitch.tv", "VideoShareBox"), Object(u.a)(a, {
                            textLink: {
                                url: o,
                                text: e
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        })
                    }, t.getVideoEmbedLink = function() {
                        return t.props.video ? _(t.props.video.id, {
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
                        return _(t.props.video.id, e)
                    }, t.renderCollectionLink = function() {
                        if (t.props.collectionID && "" !== t.props.collectionID && t.props.video) return o.createElement(g.V, {
                            padding: {
                                top: 1
                            },
                            "data-test-selector": v
                        }, o.createElement(g._23, null, Object(s.d)("Collection Link", "VideoShareBox")), o.createElement(l.a, {
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
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.getVideoLink(),
                        n = Object(p.u)(null !== this.state.timestampToShare ? this.state.timestampToShare : this.props.lastVideoOffset || 0);
                    return o.createElement(d.a, null, o.createElement(g.u, {
                        type: this.props.buttonType,
                        "data-test-selector": "dropdown-button",
                        icon: g._11.Share
                    }, Object(s.d)("Share", "VideoShareBox")), this.props.video ? o.createElement(g.p, {
                        direction: this.props.balloonDirection,
                        size: g.r.Small
                    }, o.createElement(g.V, {
                        padding: 1
                    }, o.createElement(g.V, {
                        display: g.H.Flex,
                        justifyContent: g.U.Between
                    }, C.map(function(n) {
                        return o.createElement(c.a, {
                            key: n.type,
                            onShareClick: e.onShareClickSocialHandler,
                            type: n.type,
                            text: e.getShareText(),
                            "data-test-selector": n.selector,
                            url: t
                        })
                    })), this.renderCollectionLink(), o.createElement(g.V, {
                        "data-test-selector": "video-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(g._23, null, Object(s.d)("Video Link", "VideoShareBox")), o.createElement(l.a, {
                        value: t,
                        onClick: this.onShareClickVideoLinkHandler
                    }), void 0 !== this.props.lastVideoOffset && o.createElement(g.V, {
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
                    }))), o.createElement(g.V, {
                        "data-test-selector": "embed-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(g._23, null, Object(s.d)("Embed Video", "VideoShareBox")), o.createElement(l.a, {
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
            _ = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = a.stringify(t)), n.toString()
            },
            S = function(e, t) {
                return "https://player.twitch.tv/?" + a.stringify({
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
                r = n - n % 3 + 3;
            return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var i = n("xA5w"),
            r = n("3znZ");
        e.exports = function(e) {
            var t = i(e),
                n = t.getFullYear(),
                a = new Date(0);
            a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var o = r(a),
                s = new Date(0);
            s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
            var l = r(s);
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
                    }
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
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
//# sourceMappingURL=pages.video-watch-6bdfe153ceb211a1443e542c0d2023c8.js.map