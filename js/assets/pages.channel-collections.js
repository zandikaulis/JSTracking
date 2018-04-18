webpackJsonp([53], {
    "+Aaf": function(e, t) {},
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
            i.n.track(a.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            if (e && l[e]) return l[e];
            return i.j.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            i.n.track(a.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: i.o.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            i.n.track(a.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return r
        }), t.g = function(e) {
            var t = i.n.getLastPageview(),
                n = {
                    location: t && t.location || "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: i.o.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            i.n.track(a.SpadeEventType.BitsAdsRequest, n)
        };
        var i = n("6sO2"),
            a = n("vH/s");
        var r, o = {
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
                WatchAnotherAd: "watch_another_ad",
                CheeringInRoom: "cheering_in_room"
            },
            l = {
                100: s.Buy100,
                500: s.Buy500,
                1000: s.Buy1000,
                1500: s.Buy1500,
                5000: s.Buy5000,
                10000: s.Buy10000,
                25000: s.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(r || (r = {}))
    },
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
    "1pvm": function(e, t) {},
    "4Jix": function(e, t) {},
    "4JjK": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
            }(i || (i = {}))
    },
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
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
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
            return m
        }), n.d(t, "c", function() {
            return p
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
                                    type: m,
                                    containingCollections: Object(l.c)(s.body),
                                    videoID: t
                                }), [3, 4];
                            case 3:
                                return c = i.sent(), a.j.error(c, "Failed to fetch collections"), r.store.dispatch({
                                    type: p,
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
                    var o, d, p, g, v, b, _, k, y;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                o = c.store.getState(), d = o.collections, p = Object(s.c)(o), g = p ? p.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, , 5]), v = {
                                    title: encodeURIComponent(t)
                                }, [4, f("/v5/channels/" + e + "/collections/", v)];
                            case 2:
                                return b = i.sent(), _ = Object(l.b)(b.body), d.collections = [_].concat(d.collections), c.store.dispatch({
                                    type: u,
                                    collections: d.collections
                                }), Object(r.b)({
                                    channelID: e,
                                    playlistID: _.id,
                                    userID: g,
                                    title: _.title
                                }), k = {
                                    type: l.a.Video,
                                    id: n
                                }, [4, f("/v5/collections/" + _.id + "/items", k)];
                            case 3:
                                return i.sent(), d.containingCollections = [_].concat(d.containingCollections), c.store.dispatch({
                                    type: m,
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
                                return y = i.sent(), a.j.error(y, "Failed to add new collection with video"), c.store.dispatch({
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
                    var u, p, h, v, b, _, k, y, S;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                u = d.store.getState(), p = Object(c.a)(u), h = Object(s.c)(u), v = h ? h.id : "", i.label = 1;
                            case 1:
                                return i.trys.push([1, 6, , 7]), p.map(function(e) {
                                    return e.id
                                }).includes(e.id) ? (b = JSON.stringify({
                                    type: l.a.Video,
                                    id: t
                                }), _ = btoa(b), [4, o.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + _)]) : [3, 3];
                            case 2:
                                return i.sent(), y = p.filter(function(t) {
                                    return t.id !== e.id
                                }), d.store.dispatch({
                                    type: m,
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
                                i.sent(), y = p.concat([e]), d.store.dispatch({
                                    type: m,
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
            m = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
            p = "collections.COLLECTIONS_FETCH_FAILED",
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
                    var e, t = a(((e = {})["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, e));
                    return o.createElement(m._7, i.__assign({
                        className: "chennel-page-layout",
                        display: m.Q.Flex,
                        flexDirection: m.S.Column,
                        flexWrap: m.T.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), o.createElement(d.b, {
                        className: t,
                        suppressScrollX: !0,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), o.createElement(u.a, null, o.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), o.createElement(m._7, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children))
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
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
                    return a.createElement(r.R, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r._1, {
                        position: r._14.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._57.Above
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
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            e || (e = navigator.userAgent);
            return !!i.exec(e)
        };
        var i = /\scurse\/\d/
    },
    PPK2: function(e, t) {},
    PelN: function(e, t) {},
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
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
            m = n("czpb"),
            p = n("RH2O"),
            h = n("Aj/L"),
            g = n("N221"),
            f = n("jF7o"),
            v = n("iMOk"),
            b = n("WVx7"),
            _ = n("ySfT"),
            k = n("ZJYd"),
            y = n("/LBW"),
            S = n("Odds"),
            E = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(k.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: y.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(S._7, null, r.createElement(S._7, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: S._40.Center
                    }, r.createElement(S.P, {
                        type: S._44.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), r.createElement(S._7, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, r.createElement(S.P, {
                        type: S._44.Span,
                        color: S.J.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), r.createElement(S._1, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), r.createElement(S._7, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: S._40.Center
                    }, r.createElement(S._1, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S.P, {
                        type: S._44.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), r.createElement(S.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? r.createElement(S._7, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, r.createElement(S._7, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, r.createElement(S.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: S.A.Text
                    }, r.createElement(S._20, {
                        asset: S._21.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), r.createElement(S._7, {
                        textAlign: S._40.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, r.createElement(S.e, {
                        type: S.i.SlideInLeft,
                        duration: S.g.Long,
                        enabled: !0
                    }, r.createElement(_.a, null)))) : this.props.animateFirstTimeUserIntro ? r.createElement(S._1, {
                        className: "bits-first-time-user-prompt"
                    }, r.createElement(S.e, {
                        type: S.i.SlideInRight,
                        duration: S.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : r.createElement(S._7, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(r.Component)),
            C = n("jxGs"),
            w = n("bkpq"),
            N = n("CSlQ"),
            O = n("annQ"),
            I = (n("lGVF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: y.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(y.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(f.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return r.createElement(S._30, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: S.Q.Flex,
                        flexDirection: S.S.Column,
                        alignItems: S.c.Center,
                        justifyContent: S._6.Center,
                        textAlign: S._40.Center,
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._9, {
                        delay: 0
                    }), r.createElement(S._7, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(S.P, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(k.c)(e)
                        });
                        t && t.type === C.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = r.createElement(E, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = r.createElement(S._30, {
                        borderBottom: !0,
                        textAlign: S._40.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(S.P, {
                        type: S._44.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: r.createElement(v.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = r.createElement(S._30, {
                        borderBottom: !0,
                        textAlign: S._40.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(S.P, {
                        type: S._44.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: r.createElement(v.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = r.createElement(b.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: y.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), r.createElement(g.b, {
                        className: "get-bits-button-content"
                    }, r.createElement(S._7, null, n, e, i))
                }, t = i.__decorate([Object(N.d)("GetBitsButtonContent"), Object(u.a)(O, {
                    name: "data",
                    props: function(e) {
                        var t, n, i, a;
                        return e.data && e.data.user && e.data.user.cheer && (t = Object(w.a)(e.data.user.cheer.emotes), n = e.data.user.id), e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
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
            }(r.Component));
        var A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(y.h)({
                            actionName: y.a.BuyMain,
                            location: y.b.GetBitsButton,
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
                    return this.props.channelLogin && (e = r.createElement(I, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), r.createElement(d.a, {
                        onToggle: this.toggleBalloon
                    }, r.createElement(S.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), r.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.Large
                    }, e))
                }, t = i.__decorate([Object(N.d)("GetBitsButton")], t)
            }(r.Component),
            T = Object(p.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e)
                }
            })(A),
            B = n("2KeS"),
            x = n("V5M+"),
            F = n("E9Qg"),
            j = n("ebTC"),
            D = n("4Q9N"),
            L = (n("4Jix"), n("Ojfd")),
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.user;
                        e && t.props.showModal(j.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: D.a.ProfileBanner,
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
                    if (i && i.loading || !this.props.firstPageLoaded) e = r.createElement(S._13, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    });
                    else {
                        i && i.user && i.user.bannerImageURL ? t = {
                            backgroundImage: "url(" + i.user.bannerImageURL + ")"
                        } : (n["channel-banner--default"] = !0, t = {
                            backgroundImage: "url(" + F + ")"
                        });
                        var o = null;
                        this.props.canEdit && (o = r.createElement(S._30, {
                            className: "channel-banner__edit-overlay",
                            background: S.m.Overlay,
                            position: S._14.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0
                        }, r.createElement("button", {
                            className: "channel-banner__edit-overlay__button",
                            "data-test-selector": "channel-banner__edit-overlay-interactable",
                            onClick: this.openModal
                        }, r.createElement(S._7, {
                            display: S.Q.Flex,
                            alignItems: S.c.Center,
                            flexDirection: S.S.Column,
                            justifyContent: S._6.Center
                        }, r.createElement(S._7, null, r.createElement(S._20, {
                            asset: S._21.Edit
                        })), Object(s.d)("Update Profile Banner", "ChannelBanner"))))), e = r.createElement("div", {
                            className: "channel-banner__image",
                            "data-test-selector": "channel-banner",
                            style: t
                        }, o)
                    }
                    return r.createElement("div", {
                        className: a("channel-banner", n),
                        onTransitionEnd: this.props.onTransitionEnd
                    }, r.createElement(S._1, {
                        fullWidth: !0
                    }, e))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.closeModal()
                }, t
            }(r.Component),
            P = Object(u.a)(L, {
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
            })(U);
        var W = Object(p.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(B.b)({
                    closeModal: x.c,
                    showModal: x.d
                }, e)
            })(P),
            H = n("x9n8"),
            M = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(H.a, {
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
                    return r.createElement(S._7, {
                        className: "edit-profile-overlay",
                        display: S.Q.Flex,
                        justifyContent: S._6.Center,
                        alignContent: S.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(S.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: S._21.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(N.d)("EditProfileOverlay")], t)
            }(r.Component));
        var R = Object(p.b)(null, function(e) {
                return Object(B.b)({
                    showModal: x.d
                }, e)
            })(M),
            z = n("70dR"),
            V = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return q
        }), n.d(t, "a", function() {
            return $
        });
        var q, Q = "channel-header__edit-profile-overlay",
            G = "channel-header__verified-badge",
            J = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(q || (q = {}));
        var $ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = r.createElement(S._47, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: S._49.Right
                }, r.createElement(S._7, {
                    className: "channel-header__verified",
                    "data-target": G,
                    display: S.Q.Flex,
                    alignItems: S.c.Center,
                    margin: {
                        left: 1
                    }
                }, r.createElement(S._20, {
                    asset: S._21.Verified
                }))), t.ChannelStatusIndicatorElement = r.createElement(S._7, {
                    margin: {
                        left: 1
                    },
                    "data-target": J
                }, r.createElement(S._47, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: S._49.Right
                }, r.createElement(S.F, {
                    status: S.H.Live,
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    return t.props.data && t.props.data.user && t.isChannelEditor() ? r.createElement(S._30, {
                        className: Q,
                        background: S.m.Overlay,
                        position: S._14.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: S.Q.InlineFlex,
                        alignItems: S.c.Center,
                        justifyContent: S._6.Center
                    }, r.createElement(R, {
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
                        return e.bannerSlideIn ? e : {
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
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles && this.props.data.user.roles.isPartner);
                var p = this.state.live && !this.isActiveTab(q.Channel),
                    h = this.createChannelLinks(n, i, u),
                    g = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(q.Channel)
                    },
                    f = null;
                this.canRenderBitsButton() && (f = r.createElement(S._7, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(T, {
                    channelLogin: this.props.channelLogin
                })));
                var v, b = r.createElement(S._7, {
                    display: S.Q.Flex,
                    flexWrap: S.T.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, r.createElement(S._7, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: S.Q.Flex,
                    flexShrink: 0,
                    alignItems: S.c.Stretch
                }, r.createElement(S._7, {
                    position: S._14.Relative
                }, r.createElement(S.l, {
                    size: 36,
                    src: m,
                    alt: e || ""
                }), this.renderAvatarEditButton())), e ? r.createElement(S.P, {
                    type: S._44.H5
                }, e) : r.createElement(S._7, {
                    alignItems: S.c.Center
                }, r.createElement(S._13, {
                    lineCount: 1,
                    width: 120
                })), p && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                v = this.isActiveTab(q.Channel) ? r.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, b) : this.props.data && this.props.data.user && this.props.data.user.login ? r.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, b) : b;
                var _ = this.state.bannerHidden ? S.Q.HideAccessible : S.Q.Block,
                    k = null;
                return this.isActiveTab(q.Channel) && (k = r.createElement(S._7, {
                    display: _
                }, r.createElement(W, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), r.createElement(S._7, {
                    className: "channel-header",
                    flexShrink: 0
                }, k, r.createElement(S._7, {
                    display: S.Q.Flex,
                    justifyContent: S._6.Between,
                    flexWrap: S.T.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, r.createElement(S._7, {
                    display: S.Q.Flex,
                    alignItems: S.c.Stretch,
                    flexShrink: 0,
                    flexWrap: S.T.NoWrap,
                    "data-target": "channel-header-left"
                }, r.createElement(S._1, {
                    className: a(g),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: S.Q.Flex,
                    flexWrap: S.T.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(h), r.createElement(S._7, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: S.d.Center,
                    "data-target": "channel-header-button"
                }, r.createElement(d.a, {
                    alwaysMountBalloonContent: !0
                }, r.createElement(S.v, {
                    icon: S._21.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), r.createElement(S.p, {
                    direction: S.q.Bottom,
                    noTail: !0
                }, r.createElement(S._7, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), r.createElement(S._7, {
                    display: S.Q.Flex,
                    flexWrap: S.T.NoWrap,
                    flexShrink: 0,
                    alignItems: S.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, r.createElement(S._7, {
                    className: "channel-header__follow-button",
                    display: S.Q.Flex,
                    alignItems: S.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, r.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin,
                    followUIType: l.b.IconAndText,
                    unfollowUIType: l.b.IconOnly
                })), r.createElement(S._7, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(z.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin,
                    hideEsportsSubscription: this.props.hideEsportsSubscription
                })), f)), r.createElement(c.a, {
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
                return t ? Object(m.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S._7, {
                            className: "channel-header__item-count",
                            display: S.Q.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S.P, {
                            type: S._44.Span,
                            fontSize: S.U.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), r.createElement(S._1, {
                        key: "channel-header__item--" + e.label,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, r.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), r.createElement(S._7, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: S.Q.Flex
                    }, r.createElement(S.P, {
                        type: S._44.Span,
                        fontSize: S.U.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S._7, {
                            className: "channel-header__item-count",
                            display: S.Q.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S.P, {
                            type: S._44.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), r.createElement(S._7, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, r.createElement(S._5, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, o), r.createElement(S._7, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: S.Q.Flex
                    }, r.createElement(S.P, {
                        type: S._44.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !1,
                    isSelected: this.isActiveTab(q.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return q[this.props.currentPage] === q[e]
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== q.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(V, {
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
            }), Object(N.d)("ChannelHeader")], t)
        }(r.Component)
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
    WVx7: function(e, t, n) {
        "use strict";
        var i, a = n("RH2O"),
            r = n("V5M+"),
            o = n("Iw4B"),
            s = n("Aj/L"),
            l = n("TToO"),
            c = n("GiK3"),
            d = n("2KeS"),
            u = n("6sO2"),
            m = n("+8VM"),
            p = n("7vx8"),
            h = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(i || (i = {}));
        var g = n("4JjK"),
            f = n("/LBW"),
            v = n("Odds"),
            b = n("zzpv"),
            _ = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, r, o;
                            return l.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case g.a.Ready:
                                                return [3, 1];
                                            case g.a.RequestAd:
                                                return [3, 2];
                                            case g.a.Dimensions:
                                                return [3, 3];
                                            case g.a.OnStart:
                                                return [3, 4];
                                            case g.a.OnCredit:
                                                return [3, 5];
                                            case g.a.OnClose:
                                            case g.a.OnFinish:
                                            case g.a.LimitReached:
                                            case g.a.Adblock:
                                            case g.a.OnError:
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
                                            Object(f.g)({
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
                                            Object(f.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(h.a)({
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
                                        return o = s.sent(), u.j.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(i.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === g.a.LimitReached ? this.props.onError(i.LimitReached) : t.type === g.a.Adblock ? this.props.onError(i.Adblock) : t.type === g.a.OnError ? this.props.onError(i.Unknown) : this.hasAwarded || this.props.onError(i.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return c.createElement(v._30, {
                        background: v.m.Base
                    }, c.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, c.createElement(m.a, null), c.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = l.__decorate([Object(p.a)(b, {
                    name: "redeemTrueXAd"
                })], t)
            }(c.Component));
        var k, y = Object(a.b)(null, function(e) {
                return Object(d.b)({
                    closeModal: r.c
                }, e)
            })(_),
            S = n("HW6M"),
            E = n("3zLD"),
            C = n("jF7o"),
            w = n("zCIC");

        function N(e) {
            return l.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return l.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = u.b.get("bits_truex_partner_hash", ""), !(n = u.b.get("bits_truex_api_url", "")) || !t) return u.j.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = o.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = o.sent()) && Array.isArray(a) && a.length) return [2, k.Available];
                            o.label = 4;
                        case 4:
                            return [2, k.Unavailable];
                        case 5:
                            return r = o.sent(), u.j.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, k.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(k || (k = {}));
        var O, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(u.d)("Try again later", "Bits--WatchAdOffer")), c.createElement(v._30, {
                    className: "bits-buy-card__offer-row",
                    display: v.Q.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: v._6.Between,
                    flexWrap: v.T.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, c.createElement(v._7, {
                    padding: {
                        right: 4
                    }
                }, c.createElement("strong", null, Object(u.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), c.createElement(v._7, {
                    flexShrink: 0,
                    display: v.Q.Flex,
                    flexDirection: v.S.Column,
                    alignItems: v.c.End
                }, c.createElement(v.u, {
                    type: v.A.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(u.d)("Watch Ad", "Bits--WatchAdOffer")), t && c.createElement(v._7, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: v.d.Stretch,
                    textAlign: v._40.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            A = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, N(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(f.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === k.Available
                                    }), e !== k.Available && e !== k.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return A.test(navigator.userAgent) ? null : c.createElement(I, l.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(c.Component),
            B = n("jxGs"),
            x = n("3iBR"),
            F = n("iydZ"),
            j = n("ZJYd"),
            D = n("CFVp"),
            L = n("qe65"),
            U = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(j.b)({
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
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === B.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return c.createElement(T, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(j.c)(this.props.offer) ? t = c.createElement(v._7, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "first-time-promo-form"
                    }, c.createElement(v.P, {
                        type: v._44.Strong,
                        fontSize: v.U.Size6
                    }, Object(u.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(j.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === B.c ? t = c.createElement(v._7, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "black-friday-promo-form"
                    }, c.createElement(v.P, {
                        type: v._44.Strong,
                        fontSize: v.U.Size6
                    }, Object(u.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))) : Object(j.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === B.d && (t = c.createElement(v._7, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                        "data-test-selector": "prime-promo-promo-form"
                    }, c.createElement(v.P, {
                        type: v._44.Strong,
                        fontSize: v.U.Size6
                    }, Object(u.d)("Twitch Prime Bits Discount", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = c.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text",
                        "data-test-selector": "discount-subtext-form"
                    }, Object(u.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(j.c)(this.props.offer) || Object(j.e)(this.props.offer)) && (i = c.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text",
                        "data-test-selector": "one-per-account-form"
                    }, Object(u.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? v._30 : v._7;
                    return c.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: v.Q.Flex,
                        justifyContent: v._6.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: v.S.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, c.createElement(v._7, {
                        display: v.Q.Flex,
                        justifyContent: v._6.Between,
                        alignItems: v.c.Center
                    }, c.createElement(v._7, {
                        flexGrow: 1
                    }, c.createElement(v.P, {
                        type: v._44.H5,
                        color: v.J.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), c.createElement(v._7, {
                        flexShrink: 0,
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        alignItems: v.c.End
                    }, c.createElement(v.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && c.createElement(v._7, {
                        alignSelf: v.d.Stretch,
                        textAlign: v._40.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[x.g];
                    t || (t = Object(D.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return c.createElement(v._7, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return c.createElement(L.a, {
                            key: e.bits,
                            sources: Object(F.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(c.Component)),
            P = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var o = c.createElement(U, {
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
                        s = Object(j.d)(a),
                        l = Object(j.c)(a),
                        d = a.type === B.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : d && !e.hideWateb ? i = o : d || s || n.push(o)
                }), e.fullsize ? c.createElement(v._7, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: v.T.NoWrap,
                    display: v.Q.Flex,
                    flexDirection: v.S.Column
                }, i, t, n) : c.createElement(w.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, c.createElement(v._7, {
                    flexGrow: 1,
                    flexWrap: v.T.NoWrap,
                    display: v.Q.Flex,
                    flexDirection: v.S.Column
                }, i, t, n))
            }),
            W = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = c.createElement(v.P, {
                    "data-test-selector": "prices-include-vat-selector",
                    italic: !0,
                    type: v._44.P,
                    color: v.J.Alt
                }, Object(u.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = c.createElement(v.P, {
                    "data-test-selector": "min-bits-to-cheer-selector",
                    color: v.J.Alt
                }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = c.createElement(v.P, {
                    "data-test-selector": "bits-balance-header-selector",
                    color: v.J.Alt
                }, Object(u.d)("You have {totalBits} Bits", {
                    totalBits: c.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), c.createElement(v._30, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, c.createElement(v._7, {
                    margin: {
                        bottom: 1
                    }
                }, c.createElement(v.P, {
                    type: v._44.H4,
                    color: v.J.Alt
                }, Object(u.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            H = n("nrdj"),
            M = function(e) {
                return c.createElement(v._7, {
                    display: v.Q.Flex,
                    flexGrow: 1,
                    flexDirection: v.S.Column,
                    alignItems: v.c.Center,
                    fullWidth: !0,
                    flexWrap: v.T.NoWrap,
                    padding: {
                        y: 1
                    }
                }, c.createElement(H.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), c.createElement(v._7, {
                    display: v.Q.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: v.S.Column,
                    alignItems: v.c.Center,
                    flexWrap: v.T.NoWrap
                }, c.createElement(v.P, {
                    type: v._44.H4,
                    bold: !0
                }, Object(u.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), c.createElement(v._1, {
                    padding: {
                        top: 1
                    }
                }, c.createElement(v.P, {
                    color: v.J.Alt2
                }, Object(u.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), c.createElement("br", null), Object(u.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), c.createElement(v._7, {
                    display: v.Q.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: v.d.Stretch,
                    justifyContent: v._6.Between
                }, c.createElement(v.u, {
                    onClick: e.onStartCheering
                }, Object(u.d)("Start Cheering", "Bits--WatchAdAward")), c.createElement(v.u, {
                    type: v.A.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(u.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        return l.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, N(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== k.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return c.createElement(M, l.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(c.Component),
            z = (n("q8Cw"), function(e) {
                var t = Object(u.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(u.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    a = "adserrorgeneric";
                switch (e.type) {
                    case i.Adblock:
                        a = "adserroradblock", n = Object(u.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case i.LimitReached:
                        a = "adserrorlimit", t = Object(u.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(u.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case i.ExitEarly:
                        n = Object(u.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var r = c.createElement(v._7, {
                    className: "watch-ad-error__footer",
                    display: v.Q.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: v.d.Stretch,
                    justifyContent: v._6.Center
                }, c.createElement(v.u, {
                    onClick: e.onTryAgain
                }, Object(u.d)("Try Again", "Bits--WatchAdError")));
                return e.type === i.LimitReached && (r = c.createElement(v._7, {
                    className: "watch-ad-error__footer",
                    display: v.Q.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: v.d.Stretch,
                    justifyContent: v._6.Between
                }, c.createElement(v.u, {
                    onClick: e.onClose
                }, Object(u.d)("Got It", "Bits--WatchAdError")), c.createElement(v.u, {
                    onClick: e.onTryAgain,
                    type: v.A.Hollow
                }, Object(u.d)("Buy Bits", "Bits--WatchAdError")))), c.createElement(v._7, {
                    padding: {
                        x: 1
                    },
                    display: v.Q.Flex,
                    flexGrow: 1,
                    flexDirection: v.S.Column,
                    alignItems: v.c.Center,
                    fullWidth: !0,
                    flexWrap: v.T.NoWrap
                }, c.createElement(v._7, {
                    padding: {
                        y: 2
                    }
                }, c.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: x.b + "/light/static/1/" + a + ".png"
                })), c.createElement(v._7, {
                    padding: {
                        bottom: 1
                    }
                }, c.createElement(v.P, {
                    type: v._44.H4,
                    bold: !0
                }, t)), c.createElement(v.P, {
                    color: v.J.Alt2
                }, n), r)
            }),
            V = n("CSlQ"),
            q = n("aqNN"),
            Q = (n("6Rwu"), "storage.wateb.agreedToWatebTerms.v1"),
            G = "bits-show-wateb-terms",
            J = "bits-agree-wateb-terms";
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(O || (O = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: O.Inactive,
                        watebError: null,
                        bitsAwarded: 0,
                        showWatebTerms: !1,
                        agreedToWatebTerms: u.l.get(Q, !1)
                    }, t.onBuyPopupClose = function(e) {
                        Object(C.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: O.Awarded,
                            bitsAwarded: e
                        })
                    }, t.renderWatebTerms = function(e, n) {
                        return c.createElement(v._30, l.__assign({
                            className: S(e),
                            display: v.Q.Flex,
                            flexDirection: v.S.Column,
                            justifyContent: v._6.Center,
                            padding: {
                                bottom: 2,
                                x: 2
                            },
                            textAlign: v._40.Left,
                            "data-a-target": G
                        }, n), c.createElement(v._30, {
                            margin: {
                                top: 2,
                                bottom: 2,
                                left: 0
                            },
                            alignItems: v.c.Baseline
                        }, c.createElement("div", {
                            key: "Bits--back-edit",
                            style: {
                                cursor: "pointer"
                            },
                            onClick: t.onCloseWatebTerms
                        }, c.createElement(v.P, {
                            color: v.J.Link,
                            type: v._44.Span
                        }, c.createElement(v._20, {
                            asset: v._21.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(u.d)("Back", "Bits--Watch-Ad-Terms")))), c.createElement(v._7, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(v.P, {
                            type: v._44.Span
                        }, Object(u.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                            "x:link": function(e) {
                                return c.createElement("span", {
                                    key: "helplink"
                                }, c.createElement("a", {
                                    href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, e))
                            }
                        }, "Bits--Watch-Ad-Terms")), c.createElement(v._7, {
                            margin: {
                                y: 1
                            }
                        }, c.createElement("li", null, Object(u.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), c.createElement("li", null, Object(u.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), c.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.Center
                        }, c.createElement(v.u, {
                            size: v.y.Small,
                            onClick: t.onAgreeToWatebTerms,
                            "data-a-target": J
                        }, Object(u.d)("Continue", "Bits--Watch-Ad-Terms"))))
                    }, t.onAgreeToWatebTerms = function() {
                        u.l.set(Q, !0), t.setState({
                            agreedToWatebTerms: !0,
                            showWatebTerms: !1
                        }), t.showWatchAdModal()
                    }, t.onCloseWatebTerms = function() {
                        t.setState({
                            showWatebTerms: !1
                        })
                    }, t.handleWatchAdClick = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.state.agreedToWatebTerms ? (this.showWatchAdModal(), [2]) : (this.setState({
                                    showWatebTerms: !0
                                }), [2])
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
                return l.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: v.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = S({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === f.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === f.b.ChatTooltip && (n = c.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, c.createElement(v._20, {
                            asset: v._21.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return c.createElement(v._30, l.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        alignItems: v.c.Center,
                        justifyContent: v._6.Center,
                        textAlign: v._40.Center
                    }, e), c.createElement(v._9, {
                        delay: 0
                    }), c.createElement(v._7, {
                        padding: {
                            top: 2
                        }
                    }, c.createElement(v.P, {
                        italic: !0
                    }, Object(u.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return c.createElement(v._7, l.__assign({
                        className: S(t, "bits-buy-card--shorter"),
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        alignItems: v.c.Center,
                        justifyContent: v._6.Center,
                        padding: 2,
                        textAlign: v._40.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, c.createElement(v.P, {
                        italic: !0
                    }, Object(u.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    if (this.state.showWatebTerms) return this.renderWatebTerms(t, e);
                    var i = this.renderWatebCard();
                    if (i) return c.createElement(v._30, l.__assign({
                        className: S(t, "bits-buy-card--shorter"),
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        alignItems: v.c.Center,
                        justifyContent: v._6.Center,
                        textAlign: v._40.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === B.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = c.createElement(P, {
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
                        d = null;
                    return this.props.location === f.b.ChatTooltip && (d = c.createElement(W, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), c.createElement(v._30, l.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, d, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case O.Awarded:
                            return c.createElement(R, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case O.Error:
                            return c.createElement(z, {
                                type: this.state.watebError || i.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t.prototype.showWatchAdModal = function() {
                    this.props.data && this.props.data.currentUser && this.props.data.user && this.props.showWatchAdModal({
                        tuid: this.props.data.currentUser.idSHA1,
                        onBitsAwarded: this.onAdBitsAwarded,
                        onError: this.receiveAdErrorState,
                        requestRef: f.c.ShowAdButton,
                        channelID: this.props.data.user.id
                    })
                }, t = l.__decorate([Object(p.a)(q, {
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
            }(c.Component),
            K = Object(E.compose)(Object(V.d)("BitsBuyCard", {
                autoReportInteractive: !0
            }))($);

        function X(e) {
            return {
                adModalOpen: Object(o.b)(e, y),
                isLoggedIn: Object(s.d)(e)
            }
        }

        function Y(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(r.d)(y, t))
                }
            }
        }
        var Z = Object(a.b)(X, Y)(K);
        n.d(t, !1, function() {
            return X
        }), n.d(t, !1, function() {
            return Y
        }), n.d(t, "a", function() {
            return Z
        })
    },
    ZJYd: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            if (e.type === r.a) return !1;
            return l(e) && null !== e.promotion && e.promotion.type === r.e
        }, t.e = function(e) {
            if (e.type === r.a) return !1;
            return l(e) && null !== e.promotion && (e.promotion.type === r.g || e.promotion.type === r.f)
        }, t.d = l, t.a = function(e) {
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
                a = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var s = {
                        cheerAboveMaxBitsPerEmote: a > o.k,
                        totalAboveBalance: n > e.balance,
                        totalBelowCheerMinimum: n < e.cheerMinimumBits,
                        totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                        inputLongerThanMaxBitsMessage: e.inputValue.length > o.j,
                        inputStartsWithCommand: e.inputValue.startsWith("/")
                    },
                    l = Object.keys(s).some(function(e) {
                        return s[e]
                    });
                if (l) return i.__assign({
                    canSpend: !1
                }, s)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (!t) return;
            e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                location: e.location
            });
            var n = t.replace("{channelID}", e.channelID),
                i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
            if (!i || Object(a.a)()) return e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                location: e.location
            });
            return i.focus(), i
        };
        var i = n("TToO"),
            a = n("Ouuk"),
            r = n("jxGs"),
            o = n("3iBR"),
            s = n("/LBW");

        function l(e) {
            return e.type === r.b && null !== e.promotion && !!e.promotion
        }
    },
    annQ: function(e, t, n) {
        var i = {
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
        i.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};

        function r(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(r(n("OcEY").definitions)), i.definitions = i.definitions.concat(r(n("576g").definitions)), e.exports = i
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
        var a = {};
        i.definitions = i.definitions.concat(n("OcEY").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    bKut: function(e, t, n) {
        "use strict";
        n("dL0Y")
    },
    bkpq: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var s, l, c, d = e.tiers.map(function(e) {
                    return o(e)
                });
                "Cheer" === e.prefix && d.push((s = ["DARK", "LIGHT"], l = ["static", "animated"], c = [], [1, 1.5, 2, 3, 4].forEach(function(e) {
                    s.forEach(function(t) {
                        l.forEach(function(n) {
                            c.push({
                                url: r.a + "/cheer/" + t.toLowerCase() + "/" + n + "/100000/" + e + "." + ("static" === n ? "png" : "gif"),
                                isAnimated: "animated" === n,
                                theme: t,
                                dpiScale: e
                            })
                        })
                    })
                }), o({
                    id: "Cheer:100000",
                    bits: 1e5,
                    color: r.f[a.a.Yellow],
                    images: c
                }))), d.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var u = i.__assign({}, e, {
                    indexedTiers: new Map(d.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: d
                });
                t.push(u), n[u.prefix.toLowerCase()] = u
            }), {
                indexedActions: n,
                orderedActions: t
            }
        }, t.b = function(e, t) {
            return {
                cursor: "" + e.rank,
                node: {
                    id: t + "_" + e.entry_key,
                    entryKey: e.entry_key,
                    rank: e.rank,
                    score: e.score,
                    __typename: "BitsLeaderboardItem"
                },
                __typename: "BitsLeaderboardItemEdge"
            }
        };
        var i = n("TToO"),
            a = n("I89S"),
            r = n("3iBR");

        function o(e) {
            var t = new Map,
                n = new Map,
                a = new Map,
                r = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : a.set(e.dpiScale, e.url)
            }), i.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: a,
                        animated: r
                    }
                }
            }, e)
        }
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
            m = n("7vx8"),
            p = n("HZww"),
            h = n("4Q9N"),
            g = n("Tt3k"),
            f = n("W6ca"),
            v = n("xgnX"),
            b = n("CSlQ"),
            _ = n("Odds"),
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
                                                    topic: Object(p.j)(this.props.userID),
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
                    if (this.state.loading) n = l.createElement(_._7, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: _._14.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(_._20, {
                        asset: _._21.Upload,
                        type: _._22.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === h.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(_._7, null, l.createElement(_._7, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(_._7, null, l.createElement(_._20, {
                            asset: _._21.Plus,
                            type: _._22.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(_.P, {
                            type: _._44.H3,
                            color: _.J.Alt2,
                            fontSize: _.U.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(_._7, {
                            className: "user-image-uploader__upload-recommendation",
                            position: _._14.Absolute,
                            textAlign: _._40.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(_.P, {
                            type: _._44.H6,
                            color: _.J.Alt2,
                            fontSize: _.U.Size8,
                            align: _._54.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = l.createElement(u.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        r = l.createElement(_._11, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(_._7, {
                        className: "user-image-uploader",
                        position: _._14.Relative,
                        fullHeight: !0
                    }, l.createElement(_._30, {
                        className: "user-image-uploader__background-container",
                        background: _.m.Base,
                        fullWidth: !0
                    }, l.createElement(_._7, {
                        padding: 2,
                        display: _.Q.InlineBlock,
                        position: _._14.Relative,
                        textAlign: _._40.Center,
                        fullWidth: !0
                    }, l.createElement(_._30, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_.P, {
                        type: _._44.H3,
                        fontSize: _.U.Size4
                    }, t)), l.createElement(_._7, {
                        className: "user-image-uploader__upload-container",
                        display: _.Q.InlineBlock,
                        position: _._14.Relative,
                        textAlign: _._40.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_._7, {
                        className: "user-image-uploader__upload",
                        display: _.Q.InlineBlock,
                        position: _._14.Relative,
                        textAlign: _._40.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(_._30, {
                        "data-test-selector": "status-message",
                        fontSize: _.U.Size4,
                        position: _._14.Relative,
                        textAlign: _._40.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
                }, t = s.__decorate([Object(m.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            E = Object(b.d)("User Image Upload")(S);
        var C = Object(i.b)(function(e) {
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
            return C
        })
    },
    fHoP: function(e, t) {},
    iMOk: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("NXs7"),
            o = n("3iBR"),
            s = n("iydZ"),
            l = n("CFVp"),
            c = n("qe65");
        n("1pvm");

        function d(e) {
            var t, n = Object(a.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var d = e.bitsConfig.indexedActions[o.g];
                d || (d = Object(l.b)());
                var u = d.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(s.b)(u, void 0, e.animated);
                    return void 0 !== e.themeOverride && (e.themeOverride === r.a.Light ? m.dark = m.light : m.light = m.dark), t = i.createElement(c.a, {
                        className: "bits-count--img",
                        sources: m
                    }), i.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, i.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return i.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, i.createElement("span", null, n))
        }
        n.d(t, "a", function() {
            return d
        })
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void i.j.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
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
            }, 500)
        };
        var i = n("6sO2")
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
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "g", function() {
            return o
        }), n.d(t, "f", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return c
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "prime_single_purchase",
            l = "black_friday_2017",
            c = "twitch_prime_2018"
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
            m = n("Odds"),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChangeHandler = function() {
                        return t.props.onSelected(t.props.collection)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(m._7, {
                        display: m.Q.Flex
                    }, l.createElement(m._7, {
                        padding: 2
                    }, l.createElement(m.I, {
                        label: "",
                        onChange: this.onChangeHandler,
                        checked: this.props.videoIsInCollection
                    })), l.createElement(m._7, {
                        padding: 1
                    }, l.createElement(m.D, {
                        aspect: m.k.Aspect16x9,
                        alt: this.props.collection.title,
                        src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                        size: m.E.Size8
                    })), l.createElement(m._7, {
                        padding: 1,
                        display: m.Q.Flex,
                        flexDirection: m.S.Column
                    }, l.createElement(m._7, null, l.createElement(m.P, {
                        ellipsis: !0
                    }, this.props.collection.title)), l.createElement(m._7, {
                        display: m.Q.Flex
                    }, l.createElement(m._7, {
                        padding: {
                            right: 1
                        }
                    }, l.createElement(m.P, null, Object(c.d)("{videoCount} video", {
                        videoCount: this.props.collection.itemsCount
                    }, "CollectionRowPresentation"))), l.createElement(m._7, {
                        padding: {
                            x: 1
                        }
                    }, l.createElement(m.P, null, "·")), l.createElement(m._7, {
                        padding: {
                            left: 1
                        }
                    }, l.createElement(m.P, null, Object(d.a)(this.props.collection.totalDuration))))))
                }, t
            }(l.Component),
            h = Object(u.d)("CollectionRow")(p),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.handleCreate = function(e) {
                        t.props.createCollectionWithVideo(t.props.channelID, e, t.props.videoID)
                    }, t.onCollectionRowChange = function(e) {
                        t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(m._7, null, this.props.collections.map(function(t) {
                        return l.createElement(h, {
                            key: t.id,
                            collection: t,
                            videoIsInCollection: e.props.containingCollections.map(function(e) {
                                return e.id
                            }).indexOf(t.id) > -1,
                            onSelected: e.onCollectionRowChange
                        })
                    })) : l.createElement(m._7, null)
                }, t
            }(l.Component),
            f = Object(u.d)("CollectionsListPresentation")(g);
        var v, b = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(r.d)(e),
                collections: e.collections.collections,
                containingCollections: e.collections.containingCollections
            }
        }, function(e) {
            return Object(a.b)({
                fetchCollectionsForVideo: o.e,
                createCollectionWithVideo: o.d,
                updateItemInCollection: o.f
            }, e)
        })(f);
        n("PelN");
        ! function(e) {
            e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
        }(v || (v = {}));
        var _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onErrorHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.onLoadHandler = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return "number" == typeof this.props.videoCount && (e = l.createElement(m._7, {
                        position: m._14.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, l.createElement(m._30, {
                        alignItems: m.c.Center,
                        attachRight: !0,
                        className: "collection-preview-image__wrapper",
                        color: m.J.Overlay,
                        display: m.Q.InlineFlex,
                        flexDirection: m.S.Column,
                        fontSize: m.U.Size5,
                        fullHeight: !0,
                        justifyContent: m._6.Center,
                        position: m._14.Absolute,
                        textAlign: m._40.Center
                    }, l.createElement(m._20, {
                        asset: m._21.Collections,
                        height: 19,
                        width: 19
                    }), l.createElement(m.P, {
                        "data-test-selector": v.VideoCountOverlayText
                    }, Object(c.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount.toString()
                    }, "CollectionCard"))))), l.createElement(m._7, {
                        position: m._14.Relative
                    }, l.createElement(m.M, {
                        alt: this.props.alt,
                        onError: this.onErrorHandler,
                        onLoad: this.onLoadHandler,
                        src: this.props.src ? this.props.src : c.a.defaultCollectionPreviewURL,
                        srcSet: this.props.src ? this.props.srcSet : {
                            "320w": c.a.defaultCollectionPreviewURL
                        },
                        sizes: this.props.sizes
                    }), e)
                }, t
            }(l.Component),
            k = Object(u.d)("CollectionPreviewImage")(_);
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return k
        })
    },
    lGVF: function(e, t) {},
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
        var i, a = n("HW6M"),
            r = n("GiK3"),
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
            var u = e.display === d.Q.Inline || e.display === d.Q.InlineFlex || e.display === d.Q.InlineBlock,
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
            if (void 0 !== e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(d._1, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? d._40.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var g = a("cheermote-for-amount__cheer-image", {
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
                f = r.createElement(c.a, {
                    className: g,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (f = null), r.createElement(d._1, {
                className: "cheermote-for-amount",
                alignItems: e.alignItems,
                display: e.display
            }, r.createElement("span", null, f, m))
        };
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        })
    },
    q8Cw: function(e, t) {},
    sgUC: function(e, t) {},
    weaG: function(e, t) {},
    x583: function(e, t) {},
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
            m = n("+8VM"),
            p = n("7vx8"),
            h = n("puy8"),
            g = n("HZww"),
            f = n("Odds"),
            v = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return c.createElement(f._7, {
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
                }, c.createElement(f._30, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._14.Relative,
                    className: l(t)
                }, c.createElement("img", {
                    alt: Object(d.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            b = n("4Q9N"),
            _ = n("Tt3k"),
            k = n("W6ca"),
            y = n("xgnX"),
            S = n("CSlQ"),
            E = (n("AL3x"), n("nmDn")),
            C = ["image/*"],
            w = function(e) {
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
                            var i = Object(_.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: y.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(_.b)(n, function(e) {
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
                                        return o.trys.push([1, 3, , 4]), [4, Object(k.a)(this.props.userID, this.props.authToken, b.a.ProfileImage, this.state.imageFormat)];
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
                        n = c.createElement(f._7, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: f._14.Relative
                        }, c.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = c.createElement(f._7, {
                        className: "profile-edit__upload-info"
                    }, c.createElement(f._7, null, c.createElement(f._20, {
                        asset: f._21.Plus,
                        type: f._22.Alt2,
                        height: 20,
                        width: 20
                    })), c.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size4
                    }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                    var r = null;
                    this.props.showCloser && (r = c.createElement(m.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(y.c)(this.state.statusMessage),
                            p = s.message,
                            g = s.type;
                        o = c.createElement(f._11, {
                            label: p,
                            type: g
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), c.createElement(f._7, {
                        className: "profile-edit",
                        position: f._14.Relative,
                        fullHeight: !0
                    }, c.createElement(f._30, {
                        className: "profile-edit__background-container",
                        background: f.m.Base,
                        fullWidth: !0
                    }, c.createElement(f._7, {
                        padding: 2,
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        fullWidth: !0
                    }, c.createElement(f._30, {
                        textAlign: f._40.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size4
                    }, Object(d.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), c.createElement(f._7, {
                        className: "profile-edit__upload-container",
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f._7, {
                        className: "profile-edit__upload",
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center
                    }, c.createElement(u.a, {
                        allowedFileTypes: C,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), c.createElement(f._30, {
                        "data-test-selector": "status-message",
                        fontSize: f.U.Size4,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        className: "profile-edit__status-message"
                    }, o), c.createElement(f._30, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f._7, {
                        textAlign: f._40.Left,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size5
                    }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(f._50, {
                        childWidth: f._51.ExtraSmall,
                        gutterSize: f._52.ExtraSmall,
                        placeholderItems: 3
                    }, t)), c.createElement(f._7, {
                        display: f.Q.Flex,
                        justifyContent: f._6.Center
                    }, c.createElement(f.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: f.y.Large
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
                }, t = s.__decorate([Object(p.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            N = Object(S.d)("Profile Edit")(w);
        var O = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(N);
        n.d(t, "a", function() {
            return O
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
                        type: o._12.Success
                    };
                case a.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case a.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case a.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case a.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case a.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case a.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: o._12.Brand
                    };
                case a.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: o._12.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: o._12.Alert
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
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
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
                return i.createElement(s._7, {
                    display: s.Q.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.S.Column,
                    justifyContent: s._6.Center,
                    alignItems: s.c.Center
                }, i.createElement(s.P, {
                    type: s._44.H4,
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
    z4Db: function(e, t) {},
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
            m = n("vH/s"),
            p = n("SI0h"),
            h = n("CSlQ"),
            g = n("F8kA"),
            f = n("kk4f"),
            v = n("Odds"),
            b = 0,
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.computeViewsMessage = function() {
                        var e = t.props.totalViews || b;
                        return 0 === e || 1 === e ? Object(o.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(o.d)("{viewCount} views", {
                            viewCount: Object(o.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.d)("By {channelName}", {
                        channelName: a.createElement(v.N, {
                            "data-test-selector": "collection-card-channel-link",
                            to: this.props.channelLinkTo,
                            hoverUnderlineNone: !0
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(v.B, i.__assign({
                        key: this.props.title
                    }, Object(v._58)(this.props)), a.createElement(v._1, {
                        position: v._14.Relative
                    }, a.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: m.PageviewContent.CollectionCard,
                                medium: m.PageviewMedium.ChannelCollections
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
                    }))), a.createElement(v.C, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(v._7, {
                        display: v.Q.Flex,
                        flexDirection: v.S.Column,
                        flexWrap: v.T.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(v.P, {
                        fontSize: v.U.Size5,
                        ellipsis: !0
                    }, a.createElement(v.N, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: m.PageviewContent.CollectionCard,
                                medium: m.PageviewMedium.ChannelCollections
                            }
                        },
                        "data-test-selector": "collection-card-title-link",
                        hoverUnderlineNone: !0
                    }, this.props.title)), a.createElement(v.P, {
                        color: v.J.Alt2,
                        ellipsis: !0
                    }, a.createElement(v.P, {
                        type: v._44.Span
                    }, e), a.createElement(v.P, {
                        type: v._44.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            k = Object(h.d)("CollectionCard", {
                autoReportInteractive: !0
            })(_),
            y = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(v.P, {
                    type: v._44.H4,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("Create a collection of your videos from Video Producer.", "collection-page")), a.createElement(v._7, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(v.u, {
                    type: v.A.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(o.d)("Go to Video Producer", "collection-page")))) : a.createElement(v.P, {
                    type: v._44.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("No collections found.", "collection-page")), a.createElement(v._30, {
                    color: v.J.Alt2,
                    textAlign: v._40.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            S = n("Ic9h"),
            E = n("4Uxc"),
            C = function(e) {
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
                        0 !== n.length && this.showCollectionManagerButton() && (c = a.createElement(v._7, {
                            display: v.Q.Flex,
                            justifyContent: v._6.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(v.u, {
                            type: v.A.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(o.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return a.createElement(v._7, {
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
                        e = a.createElement("div", null, c, r, a.createElement(v._50, {
                            gutterSize: v._52.Small,
                            childWidth: v._51.Large,
                            placeholderItems: 20
                        }, u), a.createElement(l.a, {
                            enabled: i,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var m = [], h = 0; h < 12; h++) m.push(a.createElement(v._7, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(v._7, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(v.j, {
                            ratio: v.k.Aspect16x9
                        }, a.createElement(v._13, null))), a.createElement(v.P, null, a.createElement(v._13, {
                            width: 150
                        })), a.createElement(v.P, {
                            fontSize: v.U.Size7
                        }, a.createElement(v._13, {
                            width: 100
                        }))));
                        e = a.createElement(v._50, {
                            gutterSize: v._52.Small,
                            childWidth: v._51.Medium,
                            placeholderItems: 20
                        }, m)
                    } else e = a.createElement(v._7, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(s.a, {
                        message: Object(o.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(v._7, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(S.a, {
                        currentPage: p.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            w = {
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
            N = Object(r.compose)(Object(r.graphql)(E, w), Object(h.d)("ChannelCollectionsPage", {
                destination: u.a.ChannelCollections
            }), Object(c.a)({
                location: m.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(C);
        n.d(t, "ChannelCollectionsPage", function() {
            return N
        })
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
//# sourceMappingURL=pages.channel-collections-a60d72d11d0c035afe4e39f8d69417ac.js.map