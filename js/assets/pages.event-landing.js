webpackJsonp([48], {
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
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var u, m = [], p = e.split(/\n/), v = function(e, v) {
                    if (e > 0 && (v += p[e - 1].length + 1), c && "" === p[e]) return m.push(i.createElement(l.O, {
                        key: e
                    }, "\n")), u = v, "continue";
                    var h = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, v)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        g = Object(o.f)(p[e], Object(s.b)(h), 0, {}, !1, n);
                    m.push(i.createElement(l.O, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var o = e[n];
                            switch (o.type) {
                                case r.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank"
                                    }, o.content.url));
                                    break;
                                case r.a.VideoLink:
                                case r.a.Link:
                                    o.content.url.match(d) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: o.content.url.replace(d, "")
                                    }, o.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: o.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, o.content.displayText));
                                    break;
                                case r.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + o.content.recipient
                                    }, o.content.recipient));
                                    break;
                                case r.a.Emote:
                                    o.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: o.content.images.sources["1x"],
                                        alt: o.content.alt
                                    }));
                                    break;
                                case r.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, o.content))
                            }
                        }
                        return t
                    }(g))), u = v
                }, h = 0, g = 0; h < p.length; h++) v(h, g), g = u;
            return m
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("mwvJ"),
            o = n("l21v"),
            s = n("dQj3"),
            l = n("Odds"),
            d = /^(https?:\/\/)?(www.)?twitch\.tv/
    },
    "1pvm": function(e, t) {},
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
    "3Fw+": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            if (e < 0) return "";
            if (0 === e) return i;
            var t = e,
                n = Math.floor(t / 3600);
            t %= 3600;
            var a = Math.floor(t / 60);
            return n + "h" + a + "m" + (t %= 60) + "s"
        };
        var i = "0h0m1s"
    },
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
    "5GFz": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            a = n("6sO2"),
            r = n("Odds"),
            o = (n("6suJ"), function(e) {
                var t = Object(a.c)(e.date, {
                        month: "short"
                    }),
                    n = Object(a.c)(e.date, {
                        day: "numeric"
                    });
                return i.createElement(r._29, {
                    background: r.m.Base,
                    elevation: 2,
                    display: r.P.Flex,
                    flexDirection: r.R.Column,
                    className: "event-calendar-date",
                    margin: {
                        top: .5,
                        left: .5
                    },
                    position: r._13.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    flexWrap: r.S.NoWrap
                }, i.createElement(r._29, {
                    className: "event-calendar-date__month",
                    display: r.P.Flex,
                    justifyContent: r._5.Center,
                    background: r.m.AccentAlt2
                }, i.createElement(r.O, {
                    fontSize: r.T.Size6,
                    transform: r._42.Uppercase,
                    color: r.J.Overlay
                }, t)), i.createElement(r._6, {
                    display: r.P.Flex,
                    justifyContent: r._5.Center
                }, i.createElement(r.O, {
                    fontSize: r.T.Size3,
                    color: r.J.Base
                }, n)))
            });
        n.d(t, "a", function() {
            return o
        })
    },
    "6Agf": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
            }(i || (i = {}))
    },
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
    "6suJ": function(e, t) {},
    "6zb9": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EventLandingPage_Schedule"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "eventID"
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
                            value: "nextCount"
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
                            value: "nextCursor"
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
                            value: "prevCount"
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
                            value: "prevCursor"
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
                            value: "EventConnectionCriteriaInput"
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
                            value: "event"
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
                                    value: "eventID"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollection"
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
                                            value: "leaves"
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
                                                    value: "nextCount"
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
                                                    value: "nextCursor"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "last"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "prevCount"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "before"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "prevCursor"
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
                                                                    value: "imageURL"
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
                                                                    value: "startAt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "endAt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "channel"
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
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "previewImageURL"
                                                                                },
                                                                                arguments: [{
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "width"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "IntValue",
                                                                                        value: "380"
                                                                                    }
                                                                                }, {
                                                                                    kind: "Argument",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "height"
                                                                                    },
                                                                                    value: {
                                                                                        kind: "IntValue",
                                                                                        value: "240"
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
                                                                            value: "displayName"
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
                                                                                value: "285"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "380"
                                                                            }
                                                                        }],
                                                                        directives: []
                                                                    }]
                                                                }
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
                                                                                        kind: "FragmentSpread",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "PreviewCardVideo"
                                                                                        },
                                                                                        directives: []
                                                                                    }]
                                                                                }
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "offsetSeconds"
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
                                                                            value: "isFollowing"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hasPreviousPage"
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
                end: 815
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery EventLandingPage_Schedule($eventID: ID! $nextCount: Int $nextCursor: Cursor $prevCount: Int $prevCursor: Cursor $criteria: EventConnectionCriteriaInput) {\nevent(id: $eventID) {\n...on EventCollection {\nid\nleaves(first: $nextCount after: $nextCursor last: $prevCount before: $prevCursor criteria: $criteria) {\nedges {\nnode {\nid\ntitle\ndescription\nimageURL(width: 320 height: 180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\nstream {\nid\npreviewImageURL(width: 380 height: 240)\n}\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 285 height: 380)\n}\nvideos(first: 1) {\nedges {\nnode {\n...PreviewCardVideo\n}\noffsetSeconds\n}\n}\nself {\nisFollowing\n}\n}\ncursor\n}\npageInfo {\nhasNextPage\nhasPreviousPage\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o._6, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.R.Column,
                justifyContent: o._5.Center,
                display: o.P.Flex
            }, i.createElement(o.O, {
                color: o.J.Link,
                fontSize: o.T.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.O, {
                color: o.J.Alt2,
                fontSize: o.T.Size4,
                noWrap: !0
            }, e.subHeader));
            e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t));
            return i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": l
            }, i.createElement(o._6, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._29, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            s = n("oHn4"),
            l = (n.n(s), "view-all-button-selector")
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
    "8Wuk": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return u
        });
        var i, a = n("TToO"),
            r = n("GiK3"),
            o = (n.n(r), n("6sO2")),
            s = n("2hJ3"),
            l = n("f6Cj"),
            d = n("Odds"),
            c = n("bdk8");
        n.n(c);
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(i || (i = {}));
        var u = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? r.createElement("a", a.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(d._56)(n.props)), n.renderIcon()) : r.createElement("button", a.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(d._56)(n.props)), n.renderIcon())
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
                    return r.createElement(d._6, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, r.createElement(d._19, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== i.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return "Twitter";
                        case i.Reddit:
                            return "Reddit";
                        case i.Facebook:
                            return "Facebook";
                        case i.VKontakte:
                            return "VKontakte";
                        case i.Copy:
                            return n.state.isCopied ? Object(o.d)("Copied", "SocialButton") : Object(o.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case i.Twitter:
                            return d._20.Twitter;
                        case i.Facebook:
                            return d._20.Facebook;
                        case i.VKontakte:
                            return d._20.VKontakte;
                        case i.Reddit:
                            return d._20.Reddit;
                        case i.Copy:
                        default:
                            return d._20.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case i.Twitter:
                            return e + "--twitter";
                        case i.Reddit:
                            return e + "--reddit";
                        case i.Facebook:
                            return e + "--facebook";
                        case i.VKontakte:
                            return e + "--vkontakte";
                        case i.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        a = e.type,
                        r = n.getUrl(),
                        o = t || "";
                    switch (a) {
                        case i.Reddit:
                            return Object(l.b)(r, o);
                        case i.VKontakte:
                            return Object(l.d)(r);
                        case i.Facebook:
                            return Object(l.a)(r);
                        case i.Twitter:
                            return Object(l.c)(r, o);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return a.__extends(t, e), t.prototype.render = function() {
                return r.createElement(d._6, {
                    className: "social-button"
                }, r.createElement(d._46, {
                    label: this.getTooltipFromType(),
                    direction: d._48.Top
                }, this.renderLink()))
            }, t
        }(r.Component)
    },
    "9SRT": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UnfollowEvent"
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
                                value: "UnfollowEventInput"
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
                            value: "unfollowEvent"
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
                                    value: "event"
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
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 199
            }
        };
        n.loc.source = {
            body: "mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9bpq": function(e, t) {},
    "9i7Z": function(e, t) {},
    AL3x: function(e, t) {},
    "Cb/j": function(e, t) {},
    CybZ: function(e, t) {},
    DP4t: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "EventLandingPage_Event"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "eventName"
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
                            value: "now"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
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
                            value: "event"
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
                                    value: "eventName"
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
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventLeaf"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "EventLeafContent"
                                        },
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "premiere"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "PremiereContent"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "EventCollection"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "EventCollectionContent"
                                        },
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
                    value: "PremiereContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Premiere"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "status"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "pastPremiere"
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
                                    value: "broadcastType"
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
                                    value: "thumbnailURLs"
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
                            }, {
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
                                                value: "285"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "380"
                                            }
                                        }],
                                        directives: []
                                    }]
                                }
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 723
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/event-landing/models/event-leaf-fragment.gql"\n#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\nquery EventLandingPage_Event($eventName: ID! $now: Time) {\nevent(id: $eventName) {\n__typename\n...on EventLeaf {\n...EventLeafContent\npremiere {\n...PremiereContent\n}\n}\n...on EventCollection {\n...EventCollectionContent\n}\n}\n}\nfragment PremiereContent on Premiere {\nstatus\npastPremiere {\nid\nbroadcastType\ndescription\nthumbnailURLs(width: 320 height: 180)\nviewCount\ntitle\nanimatedPreviewURL\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nlengthSeconds\nowner {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nself {\nviewingHistory {\nposition\n}\n}\n}\n}',
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
        i.definitions = i.definitions.concat(r(n("H0+T").definitions)), i.definitions = i.definitions.concat(r(n("KZWZ").definitions)), e.exports = i
    },
    Dpm1: function(e, t) {},
    "E+X/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            r = n("2KeS"),
            o = n("+xm8"),
            s = n("V5M+"),
            l = n("f2i/"),
            d = n("Aj/L"),
            c = n("oSFp"),
            u = n("GiK3"),
            m = n("6sO2"),
            p = n("+Znq"),
            v = n("mw/a"),
            h = n("Odds"),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportClick = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
                        if (t.props.targetUser) {
                            var e = "https://www.twitch.tv/events/" + t.props.eventID;
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: v.a.User,
                                    targetUserID: t.props.targetUser.id
                                },
                                title: Object(m.d)("Report {channelName}", {
                                    channelName: t.props.targetUser.displayName
                                }, "EventMoreMenu"),
                                defaultDescription: "Report event: " + e
                            })
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(p.a, null, u.createElement(h.u, {
                        icon: h._20.More,
                        type: h.A.Hollow
                    }), u.createElement(h.p, {
                        direction: this.props.balloonDirection,
                        tailOffset: this.props.tailOffset
                    }, u.createElement(h._6, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(h._4, {
                        disabled: !this.props.targetUser,
                        onClick: this.handleReportClick
                    }, u.createElement(h._6, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(m.d)("Report", "EventMoreMenu"))))))
                }, t
            }(u.Component);
        var f = Object(a.b)(function(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(l.f)(o.a.ReportChannel)
                },
                showReportUserModal: function(e) {
                    var t = i.__rest(e, []);
                    return Object(s.d)(c.a, t)
                }
            }, e)
        })(g);
        n.d(t, "a", function() {
            return f
        })
    },
    FsFC: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = s(e);
            return t.months ? r(i.MONTH, t.months) : t.weeks && t.days ? r(i.WEEK, t.weeks) + " " + r(i.DAY, t.days) : t.weeks ? r(i.WEEK, t.weeks) : t.days && t.hours ? r(i.DAY, t.days) + " " + r(i.HOUR, t.hours) : t.days ? r(i.DAY, t.days) : t.hours && t.minutes ? r(i.HOUR, t.hours) + " " + r(i.MINUTE, t.minutes) : t.hours ? r(i.HOUR, t.hours) : t.minutes && t.seconds ? r(i.MINUTE, t.minutes) + " " + r(i.SECOND, t.seconds) : t.minutes ? r(i.MINUTE, t.minutes) : r(i.SECOND, t.seconds || 0)
        }, t.b = function(e) {
            var t = s(e);
            return t.months ? o(i.MONTH, t.months) : t.weeks && t.days ? "" + o(i.WEEK, t.weeks) + o(i.DAY, t.days) : t.weeks ? o(i.WEEK, t.weeks) : t.days && t.hours ? "" + o(i.DAY, t.days) + o(i.HOUR, t.hours) : t.days ? o(i.DAY, t.days) : t.hours && t.minutes ? "" + o(i.HOUR, t.hours) + o(i.MINUTE, t.minutes) : t.hours ? o(i.HOUR, t.hours) : t.minutes && t.seconds ? "" + o(i.MINUTE, t.minutes) + o(i.SECOND, t.seconds) : t.minutes ? o(i.MINUTE, t.minutes) : o(i.SECOND, t.seconds || 0)
        };
        var i, a = n("6sO2");

        function r(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function o(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(a.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(a.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(a.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(a.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(a.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(a.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e) {
            if (e < 60) return {
                seconds: e
            };
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? {
                minutes: t,
                seconds: n
            } : {
                minutes: t
            };
            var i = Math.floor(t / 60);
            if (t %= 60, i < 24) return t ? {
                hours: i,
                minutes: t
            } : {
                hours: i
            };
            var a = Math.floor(i / 24);
            if (i %= 24, a < 7) return i ? {
                days: a,
                hours: i
            } : {
                days: a
            };
            if (a <= 26) {
                var r = Math.floor(a / 7);
                return (a %= 7) ? {
                    weeks: r,
                    days: a
                } : {
                    weeks: r
                }
            }
            return {
                months: Math.round((a + 3) / 30)
            }
        }! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(i || (i = {}))
    },
    "H0+T": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EventLeafContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventLeaf"
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
                            value: "imageURL"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "channel"
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
                                    value: "displayName"
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
                                        value: "285"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "380"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "parent"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "EventCollectionContent"
                                },
                                directives: []
                            }]
                        }
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
                                    value: "isFollowing"
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
                                            value: "offsetSeconds"
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
                end: 576
            }
        };
        i.loc.source = {
            body: '#import "twilight/pages/event-landing/models/event-collection-fragment.gql"\n#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment EventLeafContent on EventLeaf {\nid\ntype\nowner {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ntitle\ndescription\nimageURL(width:320 height:180)\nstartAt\nendAt\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width:285 height:380)\n}\nparent {\n...EventCollectionContent\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\n...PreviewCardVideo\n}\n}\n}\n}',
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
        i.definitions = i.definitions.concat(r(n("KZWZ").definitions)), i.definitions = i.definitions.concat(r(n("qjMx").definitions)), e.exports = i
    },
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, o = n("TToO"),
            s = n("HW6M"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), (i = {})[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = ((a = {})[c.a.Premiere] = u._20.VideoPremiere, a[c.a.Rerun] = u._20.VideoRerun, a[c.a.WatchParty] = u._20.VideoRerun, a),
            v = ((r = {})[c.a.Premiere] = u._21.Live, r[c.a.Rerun] = u._21.Inherit, r[c.a.WatchParty] = u._21.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._29, {
                        className: this.getClassNames(),
                        color: u.J.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.P.Flex
                    }, l.createElement(u._6, {
                        display: u.P.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u.O, {
                        type: u._43.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._29, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? l.createElement(u._6, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.P.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.F, {
                        status: u.H.Live,
                        size: u.G.Small
                    })) : l.createElement(u._19, {
                        asset: p[this.props.type],
                        type: v[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("LIVE", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("WxKK"),
            o = n("CSlQ"),
            s = n("81qH"),
            l = n("XYqD"),
            d = n("Odds"),
            c = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var o = void 0 === e.placeholderCount ? 20 : e.placeholderCount, c = 0; c < o; c++) t.push(a.createElement(l.a, {
                        key: c
                    }));
                else e.viewAllButtonProps && (n = a.createElement(r.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(d._6, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(s.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return a.createElement(d._49, {
                    gutterSize: d._51.Small,
                    childWidth: e.videoCardSize || d._50.Large,
                    placeholderItems: 20
                }, t, n)
            },
            u = Object(o.d)("VideoTower", {
                autoReportInteractive: !0
            })(c);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return u
        })
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
                    return a.createElement(r.Q, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r._0, {
                        position: r._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._55.Above
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
    K5Ul: function(e, t) {},
    KZWZ: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "EventCollectionContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventCollection"
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
                        alias: {
                            kind: "Name",
                            value: "collectionImageURL"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "720"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "405"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "collectionStart"
                        },
                        name: {
                            kind: "Name",
                            value: "startAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "collectionEnd"
                        },
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "nextLeaf"
                        },
                        name: {
                            kind: "Name",
                            value: "leaves"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "criteria"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "firstPageOptions"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "endsAfter"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "now"
                                                }
                                            }
                                        }]
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
                                                    value: "startAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "channel"
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
                                    value: "isFollowing"
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
                end: 358
            }
        };
        n.loc.source = {
            body: "fragment EventCollectionContent on EventCollection {\nid\ntitle\ndescription\ncollectionImageURL: imageURL(width:720 height:405)\ncollectionStart: startAt\ncollectionEnd: endAt\nnextLeaf: leaves(first: 1 criteria: { firstPageOptions: { endsAfter: $now } }) {\nedges {\nnode {\nid\nstartAt\nendAt\nchannel {\nid\nlogin\n}\n}\n}\n}\nowner {\nid\ndisplayName\n}\nself {\nisFollowing\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    MQiv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), t.c = function(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventShare, t)
        }, t.d = function(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return r.o.tracking.track(o.SpadeEventType.EventFollowing, t)
        };
        var i, a, r = n("6sO2"),
            o = n("vH/s");
        ! function(e) {
            e.ChannelEvents = "channel_events", e.EventDetails = "event_details", e.EventManagment = "event_managment", e.EventSidebar = "event_sidebar"
        }(i || (i = {})),
        function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(a || (a = {}))
    },
    NTi8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a, r, o, s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("yWCw"),
            u = n("7vx8"),
            m = n("j7/Y"),
            p = n("w9tK"),
            v = n("vH/s"),
            h = n("CSlQ"),
            g = n("zCIC"),
            f = n("eXld"),
            k = n("OFFm"),
            b = n("E+X/"),
            _ = n("QdVH"),
            y = n("MQiv"),
            E = n("1jVX"),
            S = n("Odds"),
            N = (n("9bpq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("No description listed", "EventLandingDescription");
                    return "" !== this.props.description && (e = this.props.description), l.createElement(S._6, null, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Description", "EventLandingDescription")), l.createElement(S._6, {
                        margin: {
                            top: 1
                        },
                        className: "event-landing-description__text"
                    }, Object(E.a)(e, [], "", !0)))
                }, t = s.__decorate([Object(h.d)("EventLandingDescription")], t)
            }(l.Component)),
            w = Object(h.d)("TimetableHeader", {
                autoReportInteractive: !0
            })(function(e) {
                var t = l.createElement(k.a, {
                    eventID: e.event.id,
                    eventTypename: "EventCollection",
                    areNotificationsEnabled: e.event.self.isFollowing,
                    channelID: e.event.owner && e.event.owner.id || void 0,
                    channelLogin: e.event.owner && e.event.owner.login || void 0,
                    eventLocation: y.a.EventDetails
                });
                e.event.isLive && (t = l.createElement(S.u, {
                    linkTo: {
                        pathname: "/" + e.event.liveChannelLogin,
                        state: {
                            content: "call_to_action",
                            medium: "event_page"
                        }
                    }
                }, Object(d.d)("Watch Now", "TimetableHeader")));
                var n = l.createElement(S._6, {
                        display: S.P.Flex
                    }, l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, t), l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(_.a, {
                        id: e.event.id,
                        title: e.event.title,
                        channelID: "",
                        channelLogin: "",
                        eventLocation: y.a.EventDetails
                    })), e.event.owner && l.createElement(b.a, {
                        targetUser: {
                            id: e.event.owner.id,
                            displayName: e.event.owner.displayName
                        },
                        eventID: e.event.id,
                        balloonDirection: S.q.Bottom
                    })),
                    i = l.createElement(S._6, null, Object(d.d)("To Be Announced", "TimetableHeader"));
                e.event.startAt && (i = e.event.isLive ? l.createElement(S._6, {
                    display: S.P.Flex
                }, l.createElement(S._6, null, l.createElement(S.F, {
                    status: S.H.Live
                })), l.createElement(S._29, {
                    margin: {
                        left: .5
                    }
                }, l.createElement(S.O, null, Object(d.d)("Happening Now", "TimetableHeader")))) : l.createElement(S._6, null, l.createElement(S.O, null, Object(d.i)(e.event.startAt, {
                    weekday: "long",
                    month: "short",
                    day: "numeric"
                }))));
                var a = null;
                if (e.event.startAt && e.event.endAt) {
                    var r = Object(d.i)(e.event.endAt, {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        timeZoneName: "short"
                    });
                    a = l.createElement(S._6, null, l.createElement(S.O, null, Object(d.d)("to {endDate}", {
                        endDate: r
                    }, "TimetableHeader")))
                }
                return l.createElement(S._6, {
                    margin: .5
                }, l.createElement(S._29, {
                    border: !0,
                    background: S.m.Base
                }, l.createElement(S._6, null, l.createElement("img", {
                    src: e.event.imageURL
                })), l.createElement(S._6, {
                    margin: 1
                }, l.createElement(S._29, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    }
                }, l.createElement(S.O, {
                    type: S._43.H3
                }, e.event.title)), l.createElement(S._29, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: .5
                    }
                }, i, a), l.createElement(S._6, {
                    margin: {
                        y: 1
                    }
                }, n))), l.createElement(S._29, {
                    border: !0,
                    background: S.m.Base,
                    margin: {
                        top: 1
                    }
                }, l.createElement(S._6, {
                    margin: 1
                }, l.createElement(N, {
                    description: e.event.description
                }))))
            }),
            C = n("F8kA"),
            A = n("IOwa"),
            O = n("2o2f"),
            I = n("3Fw+"),
            F = n("HW6M"),
            x = n("mi6k"),
            L = (n("9i7Z"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
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
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = "?t=";
                    return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += Object(I.a)(this.props.offsetSeconds)), l.createElement("div", s.__assign({
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(S._56)(this.props)), l.createElement(S.B, null, l.createElement(C.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            search: e,
                            state: this.props.tracking
                        },
                        title: this.props.video.title,
                        "data-test-selector": "preview-image-link"
                    }, l.createElement(S._6, {
                        fullWidth: !0
                    }, l.createElement(S.j, {
                        overflow: !0
                    }, l.createElement("div", null, l.createElement(S._29, {
                        display: S.P.InlineFlex,
                        position: S._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: S._55.Default,
                        fontSize: S.T.Size6,
                        background: S.m.Overlay,
                        color: S.J.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, l.createElement(S._28, {
                        "data-test-selector": "video-view-count",
                        icon: S._20.GlyphViews,
                        label: Object(d.d)("views", "EventVideoCard"),
                        value: Object(d.f)(this.props.video.viewCount)
                    })), l.createElement(S._29, {
                        display: S.P.InlineFlex,
                        position: S._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: S._55.Default,
                        fontSize: S.T.Size6,
                        background: S.m.Overlay,
                        color: S.J.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, l.createElement(S._28, {
                        "data-test-selector": "video-length",
                        icon: S._20.GlyphLength,
                        label: Object(d.d)("length", "EventVideoCard"),
                        value: Object(x.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage()))))))
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = F("event-video-card__image-wrapper"),
                        n = F("event-video-card__preview-image", {
                            "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return l.createElement(S.j, {
                        overflow: !0
                    }, l.createElement("div", {
                        className: t
                    }, l.createElement(S._0, {
                        flexShrink: 0
                    }, l.createElement("figure", null, l.createElement(S.j, {
                        ratio: S.k.Aspect16x9
                    }, l.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    }))))))
                }, t
            }(l.Component)),
            T = Object(h.d)("EventVideoCard")(L);

        function P(e) {
            var t = null;
            e.videos && e.videos.edges && e.videos.edges.length > 0 && (t = function(e) {
                var t = e.offsetSeconds,
                    n = null;
                if (e.node) {
                    var i = null;
                    e.node.owner && e.node.owner.displayName && e.node.owner.id && e.node.owner.login && (i = {
                        displayName: e.node.owner.displayName,
                        id: e.node.owner.id,
                        login: e.node.owner.login
                    }), n = {
                        id: e.node.id,
                        lengthSeconds: e.node.lengthSeconds || 0,
                        owner: i,
                        animatedPreviewURL: e.node.animatedPreviewURL,
                        previewThumbnailURL: e.node.previewThumbnailURL,
                        publishedAt: e.node.publishedAt || "",
                        self: null,
                        title: e.node.title || "",
                        viewCount: e.node.viewCount || 0
                    }
                }
                return {
                    offsetSeconds: t,
                    video: n
                }
            }(e.videos.edges[0]));
            var n = null;
            null !== e.channel && (n = {
                id: e.channel.id || "",
                login: e.channel.login || "",
                displayName: e.channel.displayName || "",
                profileImageURL: e.channel.profileImageURL || ""
            });
            var i = null;
            null !== e.owner && (i = {
                id: e.owner.id || "",
                login: e.owner.login || "",
                displayName: e.owner.displayName || ""
            });
            var r = null;
            null !== e.game && (r = {
                id: e.game.id,
                name: e.game.name,
                displayName: e.game.displayName || e.game.name,
                boxArtURL: e.game.boxArtURL || ""
            });
            var o = a.SINGLE;
            return "PREMIERE" === e.type && (o = a.PREMIERE), {
                id: e.id,
                type: o,
                owner: i,
                title: e.title,
                description: e.description,
                imageURL: e.imageURL,
                startAt: e.startAt,
                endAt: e.endAt,
                channel: n,
                game: r,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                },
                parent: e.parent,
                video: t,
                premiere: function(e) {
                    if (!e.premiere) return null;
                    var t = e.premiere,
                        n = null;
                    t.pastPremiere && (n = {
                        id: t.pastPremiere.id,
                        viewCount: t.pastPremiere.viewCount || 0,
                        title: t.pastPremiere.title || "",
                        animatedPreviewURL: t.pastPremiere.animatedPreviewURL || "",
                        previewThumbnailURL: t.pastPremiere.previewThumbnailURL || "",
                        publishedAt: t.pastPremiere.publishedAt || "",
                        lengthSeconds: t.pastPremiere.lengthSeconds || 0,
                        owner: {
                            id: t.pastPremiere.owner && t.pastPremiere.owner.id || "",
                            login: t.pastPremiere.owner && t.pastPremiere.owner.login || "",
                            displayName: t.pastPremiere.owner && t.pastPremiere.owner.displayName || ""
                        },
                        game: {
                            id: t.pastPremiere.game ? t.pastPremiere.game.id : "",
                            name: t.pastPremiere.game ? t.pastPremiere.game.name : "",
                            boxArtURL: t.pastPremiere.game && t.pastPremiere.game.boxArtURL || ""
                        },
                        self: {
                            viewingHistory: {
                                position: t.pastPremiere.self && t.pastPremiere.self.viewingHistory && t.pastPremiere.self.viewingHistory.position || 0
                            }
                        }
                    });
                    return {
                        status: t.status,
                        pastPremiere: n
                    }
                }(e)
            }
        }

        function D(e, t) {
            var n = new Date;
            return t && (n = t),
                function(e, t) {
                    if (t < e.endAt) return e.premiere ? e.premiere.status === r.STARTED : t > e.startAt;
                    return !1
                }(e, n) ? o.LIVE : function(e, t) {
                    if (e.premiere) return t < e.endAt;
                    return t < e.startAt
                }(e, n) ? o.FUTURE : o.PAST
        }! function(e) {
            e.EVENT_LEAF = "EventLeaf", e.EVENT_COLLECTION = "EventCollection"
        }(i || (i = {})),
        function(e) {
            e.PREMIERE = "Premiere", e.SINGLE = "Live Stream"
        }(a || (a = {})),
        function(e) {
            e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED", e.UNKNOWN = "UNKNOWN"
        }(r || (r = {})),
        function(e) {
            e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
        }(o || (o = {}));
        n("Dpm1");
        var B = Object(d.d)("Watch Now", "TimetableSegment"),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onExpandClick = function() {
                        return t.props.onExpand(t.props.event.id)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.expanded ? this.expandedSegment() : this.collapsedSegment()
                }, t.prototype.collapsedSegment = function() {
                    var e = Object(d.c)(this.props.event.startAt, {
                            month: "short"
                        }),
                        t = Object(d.c)(this.props.event.startAt, {
                            day: "numeric"
                        }),
                        n = D({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt
                        }),
                        i = null;
                    n === o.LIVE && (i = l.createElement(S._6, {
                        flexShrink: 0
                    }, l.createElement(S._10, {
                        label: Object(d.d)("Live", "EventLandingPage"),
                        type: S._11.Live
                    })));
                    var a, r, s = l.createElement(S._29, {
                        display: S.P.Flex,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, l.createElement("button", {
                        "data-test-selector": "collapsed-segment-title",
                        onClick: this.onExpandClick
                    }, l.createElement(S.O, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: S.J.Link,
                        type: S._43.H5,
                        ellipsis: !0
                    }, this.props.event.title)));
                    i && (s = l.createElement(S._29, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        display: S.P.Flex,
                        flexWrap: S.S.NoWrap,
                        alignItems: S.c.Center
                    }, i, l.createElement(S._6, {
                        display: S.P.Flex,
                        margin: {
                            left: .5
                        }
                    }, l.createElement("button", {
                        onClick: this.onExpandClick
                    }, l.createElement(S.O, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: S.J.Link,
                        type: S._43.H5,
                        ellipsis: !0
                    }, this.props.event.title))))), this.props.event.channel && (a = this.props.event.channel.id, r = this.props.event.channel.login);
                    var c = l.createElement(k.a, {
                        eventID: this.props.event.id,
                        eventTypename: "EventLeaf",
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        eventLocation: y.a.EventDetails,
                        channelID: a,
                        channelLogin: r,
                        small: !0
                    });
                    n === o.LIVE ? c = l.createElement(S._6, null, l.createElement(S.u, {
                        linkTo: {
                            pathname: "/" + r,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        },
                        size: S.y.Small
                    }, B)) : n === o.PAST && (c = null);
                    var u = null;
                    return this.props.event.game && (u = l.createElement(S._6, {
                        margin: {
                            right: 1
                        },
                        display: S.P.Flex,
                        alignItems: S.c.Center,
                        overflow: S._9.Hidden
                    }, l.createElement(S._6, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement(S._29, {
                        display: S.P.Flex,
                        alignItems: S.c.Center,
                        color: S.J.Alt2
                    }, l.createElement(S._19, {
                        asset: S._20.NavGames,
                        width: 18,
                        height: 18
                    }))), l.createElement(S.O, {
                        fontSize: S.T.Size5,
                        ellipsis: !0
                    }, l.createElement(C.a, {
                        to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                    }, this.props.event.game.displayName)))), l.createElement("div", null, l.createElement(S._29, {
                        className: "timetable-segment__row",
                        border: !0,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        display: S.P.Flex,
                        flexWrap: S.S.NoWrap,
                        alignItems: S.c.Center,
                        background: S.m.Base
                    }, l.createElement(S._6, {
                        className: "timetable-segment__calendar-date",
                        display: S.P.Flex,
                        flexShrink: 0,
                        flexDirection: S.R.Column,
                        justifyContent: S._5.Center,
                        alignItems: S.c.Center
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size6,
                        transform: S._42.Uppercase
                    }, e), l.createElement(S.O, {
                        fontSize: S.T.Size3
                    }, t)), l.createElement(S._6, {
                        overflow: S._9.Hidden,
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, s, l.createElement(S._6, {
                        display: S.P.Flex,
                        justifyContent: S._5.Between,
                        alignItems: S.c.Center,
                        flexWrap: S.S.NoWrap,
                        overflow: S._9.Hidden
                    }, l.createElement(S._6, {
                        padding: {
                            y: 1
                        },
                        display: S.P.Flex,
                        overflow: S._9.Hidden
                    }, l.createElement(S._6, {
                        flexShrink: 0
                    }, l.createElement(S.O, {
                        type: S._43.H5
                    }, Object(d.i)(this.props.event.startAt, {
                        weekday: "long",
                        timezoneName: "short"
                    }))), l.createElement(S._6, {
                        margin: {
                            x: 1
                        }
                    }, "•"), u), c))))
                }, t.prototype.expandedSegment = function() {
                    var e, t, n = {
                            backgroundImage: "url(" + this.props.event.imageURL + ")"
                        },
                        i = D({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt
                        });
                    this.props.event.channel && (e = this.props.event.channel.id, t = this.props.event.channel.login);
                    var a = l.createElement(k.a, {
                        eventID: this.props.event.id,
                        eventTypename: "EventSegment",
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        channelID: e,
                        channelLogin: t,
                        eventLocation: y.a.EventDetails
                    });
                    if (i === o.LIVE) a = l.createElement(S.u, {
                        linkTo: {
                            pathname: "/" + t,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, B);
                    else if (i === o.PAST && this.props.event.video && this.props.event.video.video) {
                        var r = "";
                        this.props.event.video.offsetSeconds && (r = "t=" + Object(I.a)(this.props.event.video.offsetSeconds)), a = l.createElement(S.u, {
                            linkTo: {
                                pathname: "/videos/" + this.props.event.video.video.id,
                                search: r,
                                state: {
                                    content: v.PageviewContent.EventPast,
                                    medium: v.PageviewMedium.EventDetails
                                }
                            }
                        }, Object(d.d)("Watch Video", "TimetableSegment"))
                    } else i === o.PAST && (a = l.createElement(S.u, {
                        disabled: !0
                    }, Object(d.d)("Past Event", "TimetableSegment")));
                    var s = this.props.event.game && this.props.event.game.boxArtURL || "",
                        c = l.createElement("img", {
                            src: s,
                            height: 130,
                            width: 93
                        });
                    if (i === o.LIVE && this.props.event.channel && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (c = l.createElement(S._6, {
                            position: S._13.Relative
                        }, l.createElement(S._6, {
                            position: S._13.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(A.a, {
                            type: O.a.Live
                        })), l.createElement("img", {
                            src: this.props.event.channel.stream.previewImageURL,
                            height: 120,
                            width: 190
                        }))), i === o.PAST && this.props.event.video && this.props.event.video.video) {
                        var u = {
                            content: v.PageviewContent.EventPast,
                            medium: v.PageviewMedium.EventDetails
                        };
                        c = l.createElement("div", {
                            className: "timetable-segment__video-embed"
                        }, l.createElement(T, {
                            video: this.props.event.video.video,
                            offsetSeconds: this.props.event.video.offsetSeconds,
                            tracking: u
                        }))
                    }
                    var m = l.createElement(S.O, {
                        color: S.J.Overlay
                    }, Object(d.i)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        timeZoneName: "short"
                    }));
                    i === o.LIVE && (m = l.createElement(S._6, {
                        position: S._13.Relative
                    }, l.createElement(S.O, {
                        color: S.J.Overlay
                    }, "" + Object(d.c)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric"
                    })), l.createElement(S.O, {
                        color: S.J.Overlay
                    }, Object(d.d)("Happening Now until", "TimeTableSegment") + " " + Object(d.i)(this.props.event.endAt, {
                        timeZoneName: "short"
                    }))));
                    var p = null;
                    return this.props.event.game && (p = l.createElement(S._6, {
                        className: "events-landing-collection__game-link",
                        margin: {
                            right: 1
                        },
                        display: S.P.Flex,
                        alignItems: S.c.Center
                    }, l.createElement(S._6, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement(S._29, {
                        display: S.P.Flex,
                        alignItems: S.c.Center,
                        color: S.J.Alt2,
                        overflow: S._9.Hidden
                    }, l.createElement(S._19, {
                        asset: S._20.NavGames,
                        width: 18,
                        height: 18
                    }))), l.createElement(S.O, {
                        fontSize: S.T.Size5,
                        ellipsis: !0
                    }, l.createElement(C.a, {
                        to: "/directory/game/" + encodeURIComponent(this.props.event.game.name)
                    }, this.props.event.game.displayName)))), l.createElement(S._29, {
                        border: !0,
                        elevation: 2,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        background: S.m.Base,
                        position: S._13.Relative
                    }, l.createElement(S._6, {
                        position: S._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: {
                            top: .5,
                            right: .5
                        }
                    }, l.createElement(S.u, {
                        overlay: !0,
                        type: S.A.Text,
                        icon: S._20.Close,
                        onClick: this.props.onDismissExpand
                    })), l.createElement(S._29, {
                        borderBottom: !0
                    }, l.createElement("div", {
                        style: n
                    }, l.createElement("div", {
                        className: "events-landing-collection__expanded-segment-header"
                    }, l.createElement(S._6, {
                        display: S.P.Flex,
                        alignItems: S.c.End,
                        flexWrap: S.S.NoWrap,
                        padding: {
                            top: 3,
                            x: 2,
                            bottom: 1
                        }
                    }, l.createElement(S._6, {
                        className: "timetable-segment__expanded-image",
                        flexShrink: 0
                    }, c), l.createElement(S._6, {
                        className: "events-landing-collection__meta",
                        flexGrow: 1,
                        margin: {
                            left: 2
                        }
                    }, l.createElement(S._6, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(S._6, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(S.O, {
                        color: S.J.Overlay,
                        type: S._43.H3
                    }, this.props.event.title)), m), l.createElement(S._6, {
                        display: S.P.Flex,
                        alignItems: S.c.Center,
                        flexWrap: S.S.NoWrap,
                        justifyContent: S._5.Between
                    }, p, l.createElement(S._6, {
                        display: S.P.Flex,
                        flexWrap: S.S.NoWrap,
                        flexShrink: 0
                    }, l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, a), l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(_.a, {
                        id: this.props.event.id,
                        title: this.props.event.title,
                        channelID: e,
                        channelLogin: t,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(b.a, {
                        targetUser: {
                            id: t || "",
                            displayName: this.props.event.channel && this.props.event.channel.displayName || "User"
                        },
                        eventID: this.props.event.id,
                        balloonDirection: S.q.BottomRight,
                        tailOffset: 10
                    })))))))), l.createElement(S._6, {
                        margin: 2
                    }, l.createElement(N, {
                        description: this.props.event.description
                    })))
                }, t
            }(l.PureComponent),
            U = Object(h.d)("EventCollectionSegment", {
                autoReportInteractive: !0
            })(j);

        function R(e) {
            return null !== e
        }
        var M = n("6zb9"),
            W = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.loadNextPage = function() {
                        return n.setState({
                            loadingForward: !0
                        }), n.props.loadNextPage()
                    }, n.loadPreviousPage = function() {
                        return n.setState({
                            loadingForward: !1
                        }), n.props.loadPreviousPage()
                    }, n.unexpand = function() {
                        n.setState({
                            expandedEvent: null
                        })
                    }, n.setExpanded = function(e) {
                        d.o.history.replace(s.__assign({}, d.o.history.location, {
                            state: s.__assign({}, d.o.history.location.state, {
                                expandedSegmentID: e
                            })
                        })), n.setState({
                            expandedEvent: e
                        })
                    };
                    var i = null;
                    return n.props.defaultLeaves && n.props.defaultLeaves.length && (i = n.props.defaultLeaves[0].id), n.state = {
                        expandedEvent: i,
                        loadingForward: !0
                    }, n
                }
                return s.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.props.eventLeaves && this.props.eventLeaves.length || null === this.state.expandedEvent && e.eventLeaves && e.eventLeaves.length && this.setState({
                        expandedEvent: e.eventLeaves[0].id
                    })
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.eventLeaves.map(function(t) {
                            return l.createElement(U, {
                                key: t.id,
                                expanded: t.id === e.state.expandedEvent,
                                event: t,
                                onDismissExpand: e.unexpand,
                                onExpand: e.setExpanded
                            })
                        }),
                        n = null;
                    this.props.hasPreviousPage && (n = l.createElement(S._6, {
                        fullWidth: !0,
                        display: S.P.Flex,
                        justifyContent: S._5.Center
                    }, l.createElement(S.u, {
                        type: S.A.Text,
                        icon: S._20.GlyphArrUp,
                        onClick: this.loadPreviousPage
                    }, Object(d.d)("Load Earlier Events", "TimetableSchedule"))));
                    var i = null;
                    return this.props.loading && (i = l.createElement(S._8, null)), l.createElement(S._6, {
                        className: "events-landing-collection__main-col",
                        position: S._13.Relative,
                        margin: {
                            left: 3
                        }
                    }, l.createElement(S._29, {
                        display: S.P.Flex,
                        justifyContent: S._5.Between,
                        margin: {
                            y: 1
                        },
                        padding: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        color: S.J.Alt2,
                        type: S._43.H5
                    }, Object(d.d)("Schedule", "TimetableSchedule"))), l.createElement(S._6, null, n, !this.state.loadingForward && i, t, this.state.loadingForward && i, l.createElement(g.a, {
                        enabled: this.props.hasNextPage,
                        loadMore: this.loadNextPage
                    })))
                }, t.prototype.onRender = function() {
                    this.props.eventLeaves.length && this.props.latencyTracking.reportInteractive()
                }, t = s.__decorate([Object(u.a)(M, {
                    options: function(e) {
                        var t = null;
                        return e.defaultLeaves && e.defaultLeaves.length && (t = e.defaultLeaves[e.defaultLeaves.length - 1].id), {
                            variables: {
                                eventID: e.event.id,
                                nextCount: 10,
                                nextCursor: "",
                                prevCount: null,
                                prevCursor: null,
                                criteria: {
                                    firstPageOptions: {
                                        eventID: t,
                                        endsAfter: e.now
                                    }
                                }
                            }
                        }
                    },
                    props: function(e) {
                        var t, n, i, a, r = e.ownProps.defaultLeaves || [];
                        return {
                            eventLeaves: (a = e.data, t = (a.event && a.event.leaves && a.event.leaves.edges || []).map(function(e) {
                                if (!e.node) return null;
                                var t;
                                if (!e.node.channel) return null;
                                var n = null;
                                e.node.channel.stream && (n = {
                                    previewImageURL: e.node.channel.stream.previewImageURL
                                }), t = {
                                    id: e.node.channel.id,
                                    login: e.node.channel.login,
                                    displayName: e.node.channel.displayName,
                                    profileImageURL: e.node.channel.profileImageURL,
                                    stream: n
                                };
                                var i = null;
                                e.node.game && (i = {
                                    id: e.node.game.id,
                                    name: e.node.game.name,
                                    displayName: e.node.game.displayName,
                                    boxArtURL: e.node.game.boxArtURL
                                });
                                var a = null;
                                return e.node.videos && e.node.videos.edges && e.node.videos.edges.length && (a = {
                                    video: e.node.videos.edges[0].node,
                                    offsetSeconds: e.node.videos.edges[0].offsetSeconds
                                }), {
                                    id: e.node.id,
                                    title: e.node.title,
                                    description: e.node.description,
                                    imageURL: e.node.imageURL,
                                    startAt: new Date(e.node.startAt),
                                    endAt: new Date(e.node.endAt),
                                    channel: t,
                                    game: i,
                                    video: a,
                                    self: {
                                        isFollowing: e.node.self && e.node.self.isFollowing || !1
                                    }
                                }
                            }).filter(R), n = r, i = new Map, t.forEach(function(e) {
                                i.set(e.id, e)
                            }), t.concat(n.filter(function(e) {
                                return !i.has(e.id)
                            }))),
                            hasNextPage: e.data.event && e.data.event.leaves && e.data.event.leaves.pageInfo.hasNextPage,
                            hasPreviousPage: e.data.event && e.data.event.leaves && e.data.event.leaves.pageInfo.hasPreviousPage,
                            loading: e.data.loading,
                            loadNextPage: function() {
                                return e.data.fetchMore({
                                    variables: {
                                        eventID: e.data.event && e.data.event.id,
                                        nextCount: 10,
                                        nextCursor: (t = e.data, t.event && t.event.leaves && t.event.leaves.edges && 0 !== t.event.leaves.edges.length ? t.event.leaves.edges[t.event.leaves.edges.length - 1].cursor : ""),
                                        prevCount: null,
                                        prevCursor: null
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return n ? s.__assign({}, e, {
                                            event: s.__assign({}, e.event, {
                                                leaves: s.__assign({}, e.event.leaves, {
                                                    edges: e.event.leaves.edges.concat(n.event.leaves.edges),
                                                    pageInfo: s.__assign({}, e.event.leaves.pageInfo, {
                                                        hasNextPage: n.event.leaves.pageInfo.hasNextPage,
                                                        hasPreviousPage: e.event.leaves.pageInfo.hasPreviousPage
                                                    })
                                                })
                                            })
                                        }) : e
                                    }
                                });
                                var t
                            },
                            loadPreviousPage: function() {
                                return e.data.fetchMore({
                                    variables: {
                                        eventID: e.data.event && e.data.event.id,
                                        nextCount: null,
                                        nextCursor: null,
                                        prevCount: 10,
                                        prevCursor: (t = e.data, t.event && t.event.leaves && t.event.leaves.edges && 0 !== t.event.leaves.edges.length ? t.event.leaves.edges[0].cursor : "")
                                    },
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return n ? s.__assign({}, e, {
                                            event: s.__assign({}, e.event, {
                                                leaves: s.__assign({}, e.event.leaves, {
                                                    edges: n.event.leaves.edges.concat(e.event.leaves.edges),
                                                    pageInfo: s.__assign({}, e.event.leaves.pageInfo, {
                                                        hasNextPage: e.event.leaves.pageInfo.hasNextPage,
                                                        hasPreviousPage: n.event.leaves.pageInfo.hasPreviousPage
                                                    })
                                                })
                                            })
                                        }) : e
                                    }
                                });
                                var t
                            }
                        }
                    }
                })], t)
            }(l.Component),
            H = Object(h.d)("EventCollectionSchedule")(W),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        now: new Date
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(H, s.__assign({}, this.props, {
                        now: this.state.now
                    }))
                }, t
            }(l.Component),
            z = (n("K5Ul"), Object(h.d)("EventCollectionPageComponent", {
                autoReportInteractive: !0
            })(function(e) {
                return l.createElement(S._6, {
                    className: "events-landing-collection",
                    margin: {
                        top: 3
                    }
                }, l.createElement(f.b, {
                    suppressScrollX: !0,
                    disableDebounce: !0
                }), l.createElement(S._6, {
                    className: "events-landing-collection__info-col"
                }, l.createElement(g.c, null, l.createElement(w, {
                    event: e.event
                }))), l.createElement(V, {
                    event: e.event,
                    defaultLeaves: e.defaultLeaves
                }))
            })),
            G = n("SI0h"),
            q = n("2aoH"),
            K = (n("ioX4"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        countdownActive: !0
                    }, t.cancelCountdown = function() {
                        t.setState({
                            countdownActive: !1
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = F({
                            "event-landing-action__progress": this.state.countdownActive
                        }),
                        t = "";
                    "function" == typeof d.d && (t = Object(d.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(d.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                    var n = l.createElement(S._6, {
                            margin: {
                                left: 1
                            }
                        }, l.createElement(S.u, {
                            linkTo: {
                                pathname: "/" + this.props.login,
                                state: {
                                    content: "cancelled_countdown",
                                    medium: "event_page"
                                }
                            }
                        }, Object(d.d)("Go to Channel", "EventLandingAction"))),
                        i = null;
                    this.state.countdownActive && (n = l.createElement(S._6, {
                        margin: {
                            left: 1
                        }
                    }, l.createElement(S.u, {
                        onClick: this.cancelCountdown
                    }, Object(d.d)("Cancel", "EventLandingAction"))), i = l.createElement(S._16, {
                        countdown: 5,
                        onCountdownEnd: this.props.onCountdownSuccess,
                        size: S._17.Small
                    }));
                    var a = l.createElement(S.F, {
                        status: S.H.Live
                    });
                    return this.props.premiere && (a = l.createElement(S._19, {
                        asset: S._20.VideoPremiere,
                        type: S._21.Live,
                        width: 10
                    })), l.createElement(S._6, null, l.createElement(S._29, {
                        display: S.P.Flex,
                        flexWrap: S.S.NoWrap,
                        border: !0,
                        margin: {
                            top: 2
                        },
                        alignItems: S.c.Center,
                        className: "event-landing-action__strip",
                        background: S.m.Base
                    }, l.createElement(S._6, {
                        display: S.P.InlineFlex,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a), l.createElement(S._6, {
                        className: "event-landing-action__message",
                        display: S.P.InlineFlex,
                        flexWrap: S.S.Wrap,
                        flexGrow: 1
                    }, t), l.createElement(S._6, {
                        display: S.P.InlineFlex,
                        flexShrink: 0
                    }, n)), l.createElement(S._6, {
                        className: e
                    }, i))
                }, t
            }(l.Component)),
            J = Object(h.d)("EventLandingAction")(K),
            $ = (n("ea40"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = D({
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: this.props.premiere ? {
                                status: this.props.premiere.status
                            } : void 0
                        }),
                        t = l.createElement(S.u, {
                            disabled: !0
                        }, Object(d.d)("Past Event", "EventLandingTitle"));
                    return e === o.LIVE ? t = l.createElement(S.u, {
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(d.d)("Watch Now", "EventLandingTitle")) : e === o.FUTURE && (t = l.createElement(k.a, {
                        eventID: this.props.id,
                        eventTypename: "EventLeaf",
                        areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(S._29, {
                        borderBottom: !0
                    }, l.createElement(S.O, {
                        type: S._43.H2,
                        className: "event-landing-title__heading"
                    }, this.props.title), l.createElement(S._6, {
                        display: S.P.Flex,
                        margin: {
                            top: 2,
                            bottom: 3
                        }
                    }, l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, t), l.createElement(S._6, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(_.a, {
                        id: this.props.id,
                        title: this.props.title,
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: y.a.EventDetails
                    })), l.createElement(b.a, {
                        targetUser: {
                            id: this.props.channel.id,
                            displayName: this.props.channel.displayName || this.props.channel.login
                        },
                        eventID: this.props.id,
                        balloonDirection: S.q.Bottom
                    })))
                }, t
            }(l.Component)),
            Q = Object(h.d)("EventLandingTitle")($),
            Y = n("ISok"),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.pastPremiere && (e = l.createElement(Y.a, {
                        trackingContent: v.PageviewContent.EventPast,
                        trackingMedium: v.PageviewMedium.EventDetails,
                        videos: [this.props.pastPremiere]
                    })), l.createElement(S._29, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Videos", "EventLandingVideos")), l.createElement(S._6, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(S._6, null, e)))
                }, t = s.__decorate([Object(h.d)("EventLandingVideos")], t)
            }(l.Component),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCountdownSuccess = function() {
                        t.props.goToVideo(t.props.channel.login)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    D({
                        startAt: new Date(this.props.startAt),
                        endAt: new Date(this.props.endAt),
                        premiere: this.props.premiere ? {
                            status: this.props.premiere.status
                        } : void 0
                    }) !== o.LIVE || this.props.noRedirect || (e = l.createElement(J, {
                        id: this.props.id,
                        login: this.props.channel.login,
                        premiere: this.props.premiere || null,
                        onCountdownSuccess: this.onCountdownSuccess
                    }));
                    var t = null;
                    return this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = l.createElement(Z, {
                        pastPremiere: this.props.premiere.pastPremiere
                    })), l.createElement(S._6, null, l.createElement(Q, {
                        id: this.props.id,
                        title: this.props.title,
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        self: this.props.self,
                        premiere: this.props.premiere
                    }), e, t, l.createElement(N, {
                        description: this.props.description
                    }))
                }, t = s.__decorate([Object(h.d)("EventLandingBody", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            ee = n("5GFz"),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = new Date(this.props.startAt);
                    return l.createElement(S.B, {
                        row: !0
                    }, l.createElement(S._0, {
                        flexShrink: 0
                    }, l.createElement(S.D, {
                        size: S.E.Size32,
                        aspect: S.k.Aspect16x9,
                        src: this.props.imageURL,
                        alt: "" !== this.props.imageURL ? this.props.title : ""
                    }, l.createElement(ee.a, {
                        date: e
                    }))))
                }, t = s.__decorate([Object(h.d)("EventLandingImage", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            ne = n("NY9D"),
            ie = n("FsFC");
        var ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGameBoxArt = function(e, t) {
                        return l.createElement(S.D, {
                            src: e,
                            alt: t,
                            aspect: S.k.Aspect3x4,
                            size: S.E.Size4
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t, n = new Date(this.props.startAt),
                        i = new Date(this.props.endAt),
                        r = null,
                        o = null,
                        c = null;
                    return t = this.props.eventType === a.PREMIERE ? Object(d.d)("Premiere", "EventLandingInfo") : Object(d.d)("Live Stream", "EventLandingInfo"), e = l.createElement(S._6, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Event Type", "EventLandingInfo")), l.createElement(S._6, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, t))), this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (o = l.createElement(S._6, {
                        display: S.P.InlineFlex
                    }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), r = l.createElement(S._6, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Streaming", "EventLandingInfo")), l.createElement(C.a, {
                        to: {
                            pathname: Object(ne.c)(this.props.game.displayName),
                            state: {
                                content: "event_game",
                                medium: "event_page"
                            }
                        }
                    }, l.createElement(S._6, {
                        display: S.P.Flex,
                        flexWrap: S.S.Wrap,
                        alignItems: S.c.Center,
                        margin: {
                            top: 1
                        }
                    }, o, l.createElement(S._6, {
                        display: S.P.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, this.props.game.displayName)))))), this.props.channel.profileImageURL && (c = l.createElement(S._6, {
                        display: S.P.InlineFlex
                    }, l.createElement(S.l, {
                        size: 40,
                        src: this.props.channel.profileImageURL,
                        alt: "User profile picture"
                    }))), l.createElement(S._6, {
                        margin: {
                            x: 3
                        },
                        padding: {
                            y: 2
                        }
                    }, l.createElement(S._6, null, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Date & Time", "EventLandingInfo")), l.createElement(S._6, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, function(e, t) {
                        var n = new Date;
                        t && (n = t);
                        var i = {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        };
                        return n.getFullYear() !== e.getFullYear() && (i = s.__assign({}, i, {
                            year: "numeric"
                        })), Object(d.c)(e, i)
                    }(n))), l.createElement(S._6, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, function(e) {
                        return Object(d.i)(e, {
                            timeZoneName: "short"
                        })
                    }(n))), l.createElement(S._6, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, function(e, t) {
                        var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                        return Object(ie.a)(n)
                    }(n, i)))), e, l.createElement(S._6, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(S.O, {
                        transform: S._42.Uppercase,
                        type: S._43.H5,
                        color: S.J.Alt2
                    }, Object(d.d)("Starring", "EventLandingInfo")), l.createElement(C.a, {
                        to: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "author_avatar",
                                medium: "event_page"
                            }
                        }
                    }, l.createElement(S._6, {
                        display: S.P.Flex,
                        flexWrap: S.S.Wrap,
                        alignItems: S.c.Center,
                        margin: {
                            top: 1
                        }
                    }, c, l.createElement(S._6, {
                        display: S.P.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, l.createElement(S.O, {
                        fontSize: S.T.Size5
                    }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), r)
                }, t = s.__decorate([Object(h.d)("EventLandingInfo")], t)
            }(l.Component),
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(S._29, {
                        background: S.m.Base
                    }, l.createElement(S._29, {
                        border: !0
                    }, l.createElement(te, {
                        title: this.props.title,
                        imageURL: this.props.imageURL,
                        startAt: this.props.startAt
                    })), l.createElement(S._29, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0
                    }, l.createElement(ae, {
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        game: this.props.game,
                        eventType: this.props.eventType
                    })))
                }, t = s.__decorate([Object(h.d)("EventLandingSidePanel")], t)
            }(l.Component),
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return this.props.eventLeaf.channel ? l.createElement(S._6, {
                        position: S._13.Relative
                    }, l.createElement(q.a, null, l.createElement(G.a, {
                        currentPage: G.b.Events,
                        channelLogin: this.props.eventLeaf.channel && this.props.eventLeaf.channel.login
                    })), l.createElement(S._6, {
                        display: S.P.Flex,
                        flexWrap: S.S.NoWrap,
                        margin: {
                            left: 3,
                            top: 3,
                            right: 3
                        }
                    }, l.createElement(S._6, {
                        flexShrink: 0,
                        flexGrow: 0,
                        margin: {
                            right: 3
                        }
                    }, l.createElement(re, {
                        title: this.props.eventLeaf.title,
                        imageURL: this.props.eventLeaf.imageURL,
                        startAt: this.props.eventLeaf.startAt,
                        endAt: this.props.eventLeaf.endAt,
                        channel: this.props.eventLeaf.channel,
                        game: this.props.eventLeaf.game,
                        eventType: this.props.eventLeaf.type
                    })), l.createElement(S._6, {
                        flexGrow: 1
                    }, l.createElement(X, {
                        id: this.props.eventLeaf.id,
                        title: this.props.eventLeaf.title,
                        description: this.props.eventLeaf.description,
                        startAt: this.props.eventLeaf.startAt,
                        endAt: this.props.eventLeaf.endAt,
                        channel: this.props.eventLeaf.channel,
                        self: this.props.eventLeaf.self,
                        premiere: this.props.eventLeaf.premiere,
                        noRedirect: this.props.noRedirect,
                        goToVideo: this.props.goToVideo
                    })))) : null
                }, t
            }(l.Component),
            se = Object(h.d)("EventLeafPageComponent", {
                autoReportInteractive: !0
            })(oe);

        function le(e) {
            var t = null;
            null !== e.owner && (t = {
                id: e.owner.id || "",
                login: e.owner.login || "",
                displayName: e.owner.displayName || ""
            });
            var n = o.FUTURE,
                i = null;
            if (e.nextLeaf && e.nextLeaf.edges && e.nextLeaf.edges.length) {
                var a = e.nextLeaf.edges[0];
                a.node && (n = D({
                    startAt: new Date(a.node.startAt),
                    endAt: new Date(a.node.endAt)
                }), i = a.node.channel && a.node.channel.login || null)
            }
            var r = null;
            e.collectionStart && (r = new Date(e.collectionStart));
            var s = null;
            return e.collectionEnd && (s = new Date(e.collectionEnd)), {
                id: e.id,
                title: e.title,
                description: e.description,
                imageURL: e.collectionImageURL,
                startAt: r,
                endAt: s,
                isLive: n === o.LIVE,
                liveChannelLogin: i,
                owner: t,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                }
            }
        }
        var de = n("DP4t"),
            ce = (n("Cb/j"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.clearExpandedSegmentHistory = function() {
                        t.props.location.state && d.o.history.replace(s.__assign({}, d.o.history.location, {
                            state: s.__assign({}, d.o.history.location.state, {
                                expandedSegmentID: void 0
                            })
                        }))
                    }, t.goToVideo = function(e) {
                        t.props.history.push("/" + e)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return this.loadingSpinner();
                    if (this.props.data.error || !this.props.data.event) return this.errorPage();
                    if (this.props.data.event.__typename === i.EVENT_LEAF) {
                        if (this.props.data.event.parent) {
                            var e = (t = P(this.props.data.event), n = null, t.channel && (n = s.__assign({}, t.channel, {
                                stream: null
                            })), {
                                id: t.id,
                                title: t.title,
                                description: t.description,
                                imageURL: t.imageURL,
                                startAt: new Date(t.startAt),
                                endAt: new Date(t.endAt),
                                channel: n,
                                game: t.game,
                                video: t.video,
                                self: {
                                    isFollowing: t.self.isFollowing
                                }
                            });
                            return this.eventCollection(le(this.props.data.event.parent), [e])
                        }
                        return this.eventLeaf(P(this.props.data.event))
                    }
                    var t, n;
                    return function(e) {
                        return e.__typename === i.EVENT_COLLECTION
                    }(this.props.data.event) ? this.eventCollection(le(this.props.data.event)) : this.errorPage()
                }, t.prototype.eventLeaf = function(e) {
                    return this.canRenderLeaf(e) ? l.createElement(S._6, {
                        position: S._13.Relative
                    }, l.createElement(se, {
                        eventLeaf: e,
                        noRedirect: this.props.location.state && this.props.location.state.noRedirect,
                        goToVideo: this.goToVideo
                    })) : this.errorPage()
                }, t.prototype.canRenderLeaf = function(e) {
                    return e.channel && e.game && e.channel.id && e.channel.login
                }, t.prototype.eventCollection = function(e, t) {
                    return l.createElement(z, {
                        event: e,
                        defaultLeaves: t
                    })
                }, t.prototype.errorPage = function() {
                    return l.createElement(c.a, {
                        message: Object(d.d)("Error loading data.", "EventLandingPage")
                    })
                }, t.prototype.loadingSpinner = function() {
                    return l.createElement(S._6, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(S._8, {
                        fillContent: !0
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && d.o.setPageTitle(this.props.data.event.title)), this.clearExpandedSegmentHistory()
                }, t = s.__decorate([Object(u.a)(de, {
                    options: function(e) {
                        return {
                            variables: {
                                eventName: e.location.state && e.location.state.expandedSegmentID || e.match.params.eventName
                            }
                        }
                    }
                }), Object(h.d)("EventLandingPage", {
                    destination: p.a.EventDetails
                }), Object(m.a)({
                    location: v.PageviewLocation.EventDetails,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    }
                })], t)
            }(l.Component)),
            ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.match.params.eventName !== this.props.match.params.eventName
                }, t.prototype.render = function() {
                    return l.createElement(ce, s.__assign({}, this.props))
                }, t
            }(l.Component);
        n.d(t, "EventLandingPage", function() {
            return ue
        })
    },
    OFFm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            s = n("Aj/L"),
            l = n("TToO"),
            d = n("GiK3"),
            c = n("3zLD"),
            u = n("6sO2"),
            m = n("oIkB"),
            p = n("MQiv"),
            v = n("Odds"),
            h = n("Ru53"),
            g = n("9SRT"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleButton = function(e) {
                        return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Remind Me", "FollowEvent"),
                        t = Object(u.d)("Reminder Set", "FollowEvent");
                    if (this.props.small) {
                        var n = e,
                            i = v._20.Heart;
                        return this.props.areNotificationsEnabled && (n = t, i = v._20.FollowCheck), d.createElement(v._46, {
                            label: n,
                            direction: this.props.tooltipDirection
                        }, d.createElement(v.v, {
                            size: v.w.Default,
                            icon: i,
                            onClick: this.handleButton,
                            ariaLabel: n
                        }))
                    }
                    return d.createElement(v.u, {
                        type: this.props.areNotificationsEnabled ? v.A.Success : v.A.Default,
                        onClick: this.handleButton,
                        icon: this.props.areNotificationsEnabled ? v._20.FollowCheck : v._20.Heart,
                        ariaLabel: this.props.areNotificationsEnabled ? t : e
                    }, this.props.areNotificationsEnabled ? t : e)
                }, t.prototype.createOptimisticResponse = function(e) {
                    var t = {
                        __typename: e ? "FollowEventPayload" : "UnfollowEventPayload",
                        event: {
                            id: this.props.eventID,
                            self: {
                                __typename: "EventSelfConnection",
                                isFollowing: e
                            },
                            __typename: this.props.eventTypename
                        }
                    };
                    return e ? {
                        __typename: "Mutation",
                        followEvent: t
                    } : {
                        __typename: "Mutation",
                        unfollowEvent: t
                    }
                }, t.prototype.toggleFollowing = function() {
                    if (!this.props.isLoggedIn) return this.props.login();
                    var e = l.__assign({}, Object(m.a)({
                        eventID: this.props.eventID
                    }), {
                        optimisticResponse: this.createOptimisticResponse(!this.props.areNotificationsEnabled)
                    });
                    this.props.areNotificationsEnabled ? this.props.unfollowEvent(e) : this.props.followEvent(e), Object(p.d)({
                        action: this.props.areNotificationsEnabled ? p.b.EmailReminderOff : p.b.EmailReminderOn,
                        channelLogin: this.props.channelLogin || "undefined",
                        channelID: this.props.channelID || "undefined",
                        eventID: this.props.eventID,
                        location: this.props.eventLocation
                    })
                }, t
            }(d.PureComponent),
            k = Object(c.compose)(Object(c.graphql)(h, {
                name: "followEvent"
            }), Object(c.graphql)(g, {
                name: "unfollowEvent"
            }))(f);
        var b = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.EventFollowButton)
                }
            }, e)
        })(k);
        n.d(t, "a", function() {
            return b
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
    QdVH: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("bhVC"),
            s = n("+Znq");
        var l = n("MQiv"),
            d = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareClicked = function(e) {
                        var n = "";
                        switch (e) {
                            case o.b.Twitter:
                                n = "twitter";
                                break;
                            case o.b.Facebook:
                                n = "facebook";
                                break;
                            case o.b.Reddit:
                                n = "reddit";
                                break;
                            case o.b.VKontakte:
                                n = "vk";
                                break;
                            default:
                                n = "unknown"
                        }
                        Object(l.c)({
                            shareMedium: n,
                            eventID: t.props.id,
                            channelLogin: t.props.channelLogin || "undefined",
                            channelID: t.props.channelID || "undefined",
                            location: t.props.eventLocation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = "https://www.twitch.tv/events/" + this.props.id;
                    return a.createElement(s.a, null, a.createElement(d.u, {
                        dropdown: !0,
                        type: d.A.Hollow
                    }, Object(r.d)("Share", "ShareEvent")), a.createElement(d.p, {
                        direction: this.props.balloonDirection
                    }, a.createElement(d._6, {
                        padding: 1
                    }, a.createElement(d._6, {
                        display: d.P.Flex,
                        flexDirection: d.R.Row,
                        flexWrap: d.S.NoWrap,
                        justifyContent: d._5.Center
                    }, a.createElement(o.a, {
                        type: o.b.Twitter,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Facebook,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Reddit,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.VKontakte,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(o.a, {
                        type: o.b.Copy,
                        text: this.props.title,
                        url: e
                    })))))
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return c
        })
    },
    Ru53: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_FollowEvent"
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
                                value: "FollowEventInput"
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
                            value: "followEvent"
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
                                    value: "event"
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
                                                value: "EventCollection"
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
                                                            value: "isFollowing"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "EventLeaf"
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
                                                            value: "isFollowing"
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
                end: 193
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("hdYS"),
            d = n("DtWM"),
            c = n("+Znq"),
            u = n("7vx8"),
            m = n("czpb"),
            p = n("RH2O"),
            v = n("Aj/L"),
            h = n("N221"),
            g = n("jF7o"),
            f = n("iMOk"),
            k = n("WVx7"),
            b = n("ySfT"),
            _ = n("ZJYd"),
            y = n("/LBW"),
            E = n("Odds"),
            S = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(_.b)({
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
                    var e = r.createElement(E._6, null, r.createElement(E._6, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: E._39.Center
                    }, r.createElement(E.O, {
                        type: E._43.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), r.createElement(E._6, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, r.createElement(E.O, {
                        type: E._43.Span,
                        color: E.J.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), r.createElement(E._0, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), r.createElement(E._6, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: E._39.Center
                    }, r.createElement(E._0, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(E.O, {
                        type: E._43.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), r.createElement(E.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? r.createElement(E._6, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, r.createElement(E._6, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, r.createElement(E.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: E.A.Text
                    }, r.createElement(E._19, {
                        asset: E._20.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), r.createElement(E._6, {
                        textAlign: E._39.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, r.createElement(E.e, {
                        type: E.i.SlideInLeft,
                        duration: E.g.Long,
                        enabled: !0
                    }, r.createElement(b.a, null)))) : this.props.animateFirstTimeUserIntro ? r.createElement(E._0, {
                        className: "bits-first-time-user-prompt"
                    }, r.createElement(E.e, {
                        type: E.i.SlideInRight,
                        duration: E.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : r.createElement(E._6, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(r.Component)),
            N = n("jxGs"),
            w = n("bkpq"),
            C = n("CSlQ"),
            A = n("annQ"),
            O = (n("lGVF"), function(e) {
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
                        Object(g.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return r.createElement(E._29, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: E.P.Flex,
                        flexDirection: E.R.Column,
                        alignItems: E.c.Center,
                        justifyContent: E._5.Center,
                        textAlign: E._39.Center,
                        padding: {
                            y: 5
                        }
                    }, r.createElement(E._8, {
                        delay: 0
                    }), r.createElement(E._6, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(E.O, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(_.c)(e)
                        });
                        t && t.type === N.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = r.createElement(S, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = r.createElement(E._29, {
                        borderBottom: !0,
                        textAlign: E._39.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(E.O, {
                        type: E._43.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: r.createElement(f.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = r.createElement(E._29, {
                        borderBottom: !0,
                        textAlign: E._39.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(E.O, {
                        type: E._43.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: r.createElement(f.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = r.createElement(k.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: y.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), r.createElement(h.b, {
                        className: "get-bits-button-content"
                    }, r.createElement(E._6, null, n, e, i))
                }, t = i.__decorate([Object(C.d)("GetBitsButtonContent"), Object(u.a)(A, {
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
        var I = function(e) {
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
                    return this.props.channelLogin && (e = r.createElement(O, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), r.createElement(c.a, {
                        onToggle: this.toggleBalloon
                    }, r.createElement(E.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), r.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.Large
                    }, e))
                }, t = i.__decorate([Object(C.d)("GetBitsButton")], t)
            }(r.Component),
            F = Object(p.b)(function(e) {
                return {
                    isLoggedIn: Object(v.d)(e)
                }
            })(I),
            x = n("2KeS"),
            L = n("V5M+"),
            T = n("E9Qg"),
            P = n("ebTC"),
            D = n("4Q9N"),
            B = (n("4Jix"), n("Ojfd")),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.user;
                        e && t.props.showModal(P.a, {
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
                    if (i && i.loading || !this.props.firstPageLoaded) e = r.createElement(E._12, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    });
                    else {
                        i && i.user && i.user.bannerImageURL ? t = {
                            backgroundImage: "url(" + i.user.bannerImageURL + ")"
                        } : (n["channel-banner--default"] = !0, t = {
                            backgroundImage: "url(" + T + ")"
                        });
                        var o = null;
                        this.props.canEdit && (o = r.createElement(E._29, {
                            className: "channel-banner__edit-overlay",
                            background: E.m.Overlay,
                            position: E._13.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0
                        }, r.createElement("button", {
                            className: "channel-banner__edit-overlay__button",
                            "data-test-selector": "channel-banner__edit-overlay-interactable",
                            onClick: this.openModal
                        }, r.createElement(E._6, {
                            display: E.P.Flex,
                            alignItems: E.c.Center,
                            flexDirection: E.R.Column,
                            justifyContent: E._5.Center
                        }, r.createElement(E._6, null, r.createElement(E._19, {
                            asset: E._20.Edit
                        })), Object(s.d)("Update Profile Banner", "ChannelBanner"))))), e = r.createElement("div", {
                            className: "channel-banner__image",
                            "data-test-selector": "channel-banner",
                            style: t
                        }, o)
                    }
                    return r.createElement("div", {
                        className: a("channel-banner", n),
                        onTransitionEnd: this.props.onTransitionEnd
                    }, r.createElement(E._0, {
                        fullWidth: !0
                    }, e))
                }, t.prototype.componentWillUnmount = function() {
                    this.props.closeModal()
                }, t
            }(r.Component),
            U = Object(u.a)(B, {
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
            })(j);
        var R = Object(p.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            }, function(e) {
                return Object(x.b)({
                    closeModal: L.c,
                    showModal: L.d
                }, e)
            })(U),
            M = n("x9n8"),
            W = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(M.a, {
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
                    return r.createElement(E._6, {
                        className: "edit-profile-overlay",
                        display: E.P.Flex,
                        justifyContent: E._5.Center,
                        alignContent: E.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(E.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: E._20.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(C.d)("EditProfileOverlay")], t)
            }(r.Component));
        var H = Object(p.b)(null, function(e) {
                return Object(x.b)({
                    showModal: L.d
                }, e)
            })(W),
            V = n("70dR"),
            z = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return G
        }), n.d(t, "a", function() {
            return $
        });
        var G, q = "channel-header__edit-profile-overlay",
            K = "channel-header__verified-badge",
            J = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(G || (G = {}));
        var $ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = r.createElement(E._46, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: E._48.Right
                }, r.createElement(E._6, {
                    className: "channel-header__verified",
                    "data-target": K,
                    display: E.P.Flex,
                    alignItems: E.c.Center,
                    margin: {
                        left: 1
                    }
                }, r.createElement(E._19, {
                    asset: E._20.Verified
                }))), t.ChannelStatusIndicatorElement = r.createElement(E._6, {
                    margin: {
                        left: 1
                    },
                    "data-target": J
                }, r.createElement(E._46, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: E._48.Right
                }, r.createElement(E.F, {
                    status: E.H.Live,
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    return t.props.data && t.props.data.user && t.isChannelEditor() ? r.createElement(E._29, {
                        className: q,
                        background: E.m.Overlay,
                        position: E._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: E.P.InlineFlex,
                        alignItems: E.c.Center,
                        justifyContent: E._5.Center
                    }, r.createElement(H, {
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
                var p = this.state.live && !this.isActiveTab(G.Channel),
                    v = this.createChannelLinks(n, i, u),
                    h = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(G.Channel)
                    },
                    g = null;
                this.canRenderBitsButton() && (g = r.createElement(E._6, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(F, {
                    channelLogin: this.props.channelLogin
                })));
                var f, k = r.createElement(E._6, {
                    display: E.P.Flex,
                    flexWrap: E.S.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, r.createElement(E._6, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: E.P.Flex,
                    flexShrink: 0,
                    alignItems: E.c.Stretch
                }, r.createElement(E._6, {
                    position: E._13.Relative
                }, r.createElement(E.l, {
                    size: 36,
                    src: m,
                    alt: e || ""
                }), this.renderAvatarEditButton())), e ? r.createElement(E.O, {
                    type: E._43.H5
                }, e) : r.createElement(E._6, {
                    alignItems: E.c.Center
                }, r.createElement(E._12, {
                    lineCount: 1,
                    width: 120
                })), p && this.ChannelStatusIndicatorElement, t && this.verifiedBadgeElement);
                f = this.isActiveTab(G.Channel) ? r.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, k) : this.props.data && this.props.data.user && this.props.data.user.login ? r.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": "channel-header__channel-link",
                    "data-a-target": "user-channel-header-item"
                }, k) : k;
                var b = this.state.bannerHidden ? E.P.HideAccessible : E.P.Block,
                    _ = null;
                return this.isActiveTab(G.Channel) && (_ = r.createElement(E._6, {
                    display: b
                }, r.createElement(R, {
                    channelLogin: this.props.channelLogin,
                    canEdit: this.isChannelEditor(),
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), r.createElement(E._6, {
                    className: "channel-header",
                    flexShrink: 0
                }, _, r.createElement(E._6, {
                    display: E.P.Flex,
                    justifyContent: E._5.Between,
                    flexWrap: E.S.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, r.createElement(E._6, {
                    display: E.P.Flex,
                    alignItems: E.c.Stretch,
                    flexShrink: 0,
                    flexWrap: E.S.NoWrap,
                    "data-target": "channel-header-left"
                }, r.createElement(E._0, {
                    className: a(h),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: E.P.Flex,
                    flexWrap: E.S.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, f), this.renderTabs(v), r.createElement(E._6, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: E.d.Center,
                    "data-target": "channel-header-button"
                }, r.createElement(c.a, {
                    alwaysMountBalloonContent: !0
                }, r.createElement(E.v, {
                    icon: E._20.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), r.createElement(E.p, {
                    direction: E.q.Bottom,
                    noTail: !0
                }, r.createElement(E._6, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(v)))))), r.createElement(E._6, {
                    display: E.P.Flex,
                    flexWrap: E.S.NoWrap,
                    flexShrink: 0,
                    alignItems: E.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, r.createElement(E._6, {
                    className: "channel-header__follow-button",
                    display: E.P.Flex,
                    alignItems: E.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, r.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin,
                    followUIType: l.b.IconAndText,
                    unfollowUIType: l.b.IconOnly
                })), r.createElement(E._6, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(V.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), g)), r.createElement(d.a, {
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
                    var n = e.count ? r.createElement(E._6, {
                            className: "channel-header__item-count",
                            display: E.P.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(E.O, {
                            type: E._43.Span,
                            fontSize: E.T.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), r.createElement(E._0, {
                        key: "channel-header__item--" + e.label,
                        alignItems: E.c.Center,
                        flexShrink: 0
                    }, r.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), r.createElement(E._6, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: E.P.Flex
                    }, r.createElement(E.O, {
                        type: E._43.Span,
                        fontSize: E.T.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(E._6, {
                            className: "channel-header__item-count",
                            display: E.P.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(E.O, {
                            type: E._43.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), r.createElement(E._6, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, r.createElement(E._4, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, o), r.createElement(E._6, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: E.P.Flex
                    }, r.createElement(E.O, {
                        type: E._43.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !1,
                    isSelected: this.isActiveTab(G.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return G[this.props.currentPage] === G[e]
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
                        var d = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (d) {
                            var c = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            d.classList.toggle("channel-header__item--hide", c)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== G.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(z, {
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
            }), Object(C.d)("ChannelHeader")], t)
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
            d = n("GiK3"),
            c = n("2KeS"),
            u = n("6sO2"),
            m = n("+8VM"),
            p = n("7vx8"),
            v = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(i || (i = {}));
        var h = n("4JjK"),
            g = n("/LBW"),
            f = n("Odds"),
            k = n("zzpv"),
            b = (n("x583"), function(e) {
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
                                            case h.a.Ready:
                                                return [3, 1];
                                            case h.a.RequestAd:
                                                return [3, 2];
                                            case h.a.Dimensions:
                                                return [3, 3];
                                            case h.a.OnStart:
                                                return [3, 4];
                                            case h.a.OnCredit:
                                                return [3, 5];
                                            case h.a.OnClose:
                                            case h.a.OnFinish:
                                            case h.a.LimitReached:
                                            case h.a.Adblock:
                                            case h.a.OnError:
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
                                            Object(g.g)({
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
                                            Object(g.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
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
                                        return o = s.sent(), u.j.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(i.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === h.a.LimitReached ? this.props.onError(i.LimitReached) : t.type === h.a.Adblock ? this.props.onError(i.Adblock) : t.type === h.a.OnError ? this.props.onError(i.Unknown) : this.hasAwarded || this.props.onError(i.ExitEarly)), this.props.closeModal(), [3, 10];
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
                    return d.createElement(f._29, {
                        background: f.m.Base
                    }, d.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, d.createElement(m.a, null), d.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = l.__decorate([Object(p.a)(k, {
                    name: "redeemTrueXAd"
                })], t)
            }(d.Component));
        var _, y = Object(a.b)(null, function(e) {
                return Object(c.b)({
                    closeModal: r.c
                }, e)
            })(b),
            E = n("HW6M"),
            S = n("3zLD"),
            N = n("jF7o"),
            w = n("w9tK"),
            C = n("zCIC");

        function A(e) {
            return l.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return l.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = u.b.get("bits_truex_partner_hash", ""), !(n = u.b.get("bits_truex_api_url", "")) || !t) return u.j.warn("Truex API info missing from dynamic settings"), [2, _.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = o.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = o.sent()) && Array.isArray(a) && a.length) return [2, _.Available];
                            o.label = 4;
                        case 4:
                            return [2, _.Unavailable];
                        case 5:
                            return r = o.sent(), u.j.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, _.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(_ || (_ = {}));
        var O, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(u.d)("Try again later", "Bits--WatchAdOffer")), d.createElement(f._29, {
                    className: "bits-buy-card__offer-row",
                    display: f.P.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: f._5.Between,
                    flexWrap: f.S.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, d.createElement(f._6, {
                    padding: {
                        right: 4
                    }
                }, d.createElement("strong", null, Object(u.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), d.createElement(f._6, {
                    flexShrink: 0,
                    display: f.P.Flex,
                    flexDirection: f.R.Column,
                    alignItems: f.c.End
                }, d.createElement(f.u, {
                    type: f.A.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(u.d)("Watch Ad", "Bits--WatchAdOffer")), t && d.createElement(f._6, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: f.d.Stretch,
                    textAlign: f._39.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            F = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            x = function(e) {
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
                                    return [4, A(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(g.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === _.Available
                                    }), e !== _.Available && e !== _.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return F.test(navigator.userAgent) ? null : d.createElement(I, l.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(d.Component),
            L = n("jxGs"),
            T = n("3iBR"),
            P = n("iydZ"),
            D = n("ZJYd"),
            B = n("CFVp"),
            j = n("qe65"),
            U = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(D.b)({
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
                    if (this.props.offer.type === L.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return d.createElement(x, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(D.c)(this.props.offer) ? t = d.createElement(f._6, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, d.createElement(f.O, {
                        type: f._43.Strong,
                        fontSize: f.T.Size6
                    }, Object(u.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(D.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === L.c && (t = d.createElement(f._6, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, d.createElement(f.O, {
                        type: f._43.Strong,
                        fontSize: f.T.Size6
                    }, Object(u.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = d.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(u.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(D.c)(this.props.offer) || Object(D.e)(this.props.offer)) && (i = d.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(u.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? f._29 : f._6;
                    return d.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: f.P.Flex,
                        justifyContent: f._5.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: f.R.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, d.createElement(f._6, {
                        display: f.P.Flex,
                        justifyContent: f._5.Between,
                        alignItems: f.c.Center
                    }, d.createElement(f._6, {
                        flexGrow: 1
                    }, d.createElement(f.O, {
                        type: f._43.H5,
                        color: f.J.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), d.createElement(f._6, {
                        flexShrink: 0,
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.End
                    }, d.createElement(f.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && d.createElement(f._6, {
                        alignSelf: f.d.Stretch,
                        textAlign: f._39.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[T.g];
                    t || (t = Object(B.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return d.createElement(f._6, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return d.createElement(j.a, {
                            key: e.bits,
                            sources: Object(P.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(d.Component)),
            R = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var o = d.createElement(U, {
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
                        s = Object(D.d)(a),
                        l = Object(D.c)(a),
                        c = a.type === L.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? i = o : c || s || n.push(o)
                }), e.fullsize ? d.createElement(f._6, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: f.S.NoWrap,
                    display: f.P.Flex,
                    flexDirection: f.R.Column
                }, i, t, n) : d.createElement(C.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, d.createElement(f._6, {
                    flexGrow: 1,
                    flexWrap: f.S.NoWrap,
                    display: f.P.Flex,
                    flexDirection: f.R.Column
                }, i, t, n))
            }),
            M = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = d.createElement(f.O, {
                    italic: !0,
                    type: f._43.P,
                    color: f.J.Alt
                }, Object(u.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = d.createElement(f.O, {
                    color: f.J.Alt
                }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = d.createElement(f.O, {
                    color: f.J.Alt
                }, Object(u.d)("You have {totalBits} Bits", {
                    totalBits: d.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), d.createElement(f._29, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, d.createElement(f._6, {
                    margin: {
                        bottom: 1
                    }
                }, d.createElement(f.O, {
                    type: f._43.H4,
                    color: f.J.Alt
                }, Object(u.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            W = n("nrdj"),
            H = function(e) {
                return d.createElement(f._6, {
                    display: f.P.Flex,
                    flexGrow: 1,
                    flexDirection: f.R.Column,
                    alignItems: f.c.Center,
                    fullWidth: !0,
                    flexWrap: f.S.NoWrap,
                    padding: {
                        y: 1
                    }
                }, d.createElement(W.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), d.createElement(f._6, {
                    display: f.P.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: f.R.Column,
                    alignItems: f.c.Center,
                    flexWrap: f.S.NoWrap
                }, d.createElement(f.O, {
                    type: f._43.H4,
                    bold: !0
                }, Object(u.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), d.createElement(f._0, {
                    padding: {
                        top: 1
                    }
                }, d.createElement(f.O, {
                    color: f.J.Alt2
                }, Object(u.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), d.createElement("br", null), Object(u.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), d.createElement(f._6, {
                    display: f.P.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: f.d.Stretch,
                    justifyContent: f._5.Between
                }, d.createElement(f.u, {
                    onClick: e.onStartCheering
                }, Object(u.d)("Start Cheering", "Bits--WatchAdAward")), d.createElement(f.u, {
                    type: f.A.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(u.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            V = function(e) {
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
                                    return [4, A(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== _.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return d.createElement(H, l.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(d.Component),
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
                var r = d.createElement(f._6, {
                    className: "watch-ad-error__footer",
                    display: f.P.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: f.d.Stretch,
                    justifyContent: f._5.Center
                }, d.createElement(f.u, {
                    onClick: e.onTryAgain
                }, Object(u.d)("Try Again", "Bits--WatchAdError")));
                return e.type === i.LimitReached && (r = d.createElement(f._6, {
                    className: "watch-ad-error__footer",
                    display: f.P.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: f.d.Stretch,
                    justifyContent: f._5.Between
                }, d.createElement(f.u, {
                    onClick: e.onClose
                }, Object(u.d)("Got It", "Bits--WatchAdError")), d.createElement(f.u, {
                    onClick: e.onTryAgain,
                    type: f.A.Hollow
                }, Object(u.d)("Buy Bits", "Bits--WatchAdError")))), d.createElement(f._6, {
                    padding: {
                        x: 1
                    },
                    display: f.P.Flex,
                    flexGrow: 1,
                    flexDirection: f.R.Column,
                    alignItems: f.c.Center,
                    fullWidth: !0,
                    flexWrap: f.S.NoWrap
                }, d.createElement(f._6, {
                    padding: {
                        y: 2
                    }
                }, d.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: T.b + "/light/static/1/" + a + ".png"
                })), d.createElement(f._6, {
                    padding: {
                        bottom: 1
                    }
                }, d.createElement(f.O, {
                    type: f._43.H4,
                    bold: !0
                }, t)), d.createElement(f.O, {
                    color: f.J.Alt2
                }, n), r)
            }),
            G = n("CSlQ"),
            q = n("aqNN"),
            K = (n("6Rwu"), "storage.wateb.agreedToWatebTerms.v1"),
            J = "bits-show-wateb-terms",
            $ = "bits-agree-wateb-terms";
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(O || (O = {}));
        var Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: O.Inactive,
                        watebError: null,
                        bitsAwarded: 0,
                        showWatebTerms: !1,
                        agreedToWatebTerms: u.l.get(K, !1)
                    }, t.onBuyPopupClose = function(e) {
                        Object(N.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: O.Awarded,
                            bitsAwarded: e
                        })
                    }, t.renderWatebTerms = function(e, n) {
                        return d.createElement(f._29, l.__assign({
                            className: E(e),
                            display: f.P.Flex,
                            flexDirection: f.R.Column,
                            justifyContent: f._5.Center,
                            padding: {
                                bottom: 2,
                                x: 2
                            },
                            textAlign: f._39.Left,
                            "data-a-target": J
                        }, n), d.createElement(f._29, {
                            margin: {
                                top: 2,
                                bottom: 2,
                                left: 0
                            },
                            alignItems: f.c.Baseline
                        }, d.createElement("div", {
                            key: "Bits--back-edit",
                            style: {
                                cursor: "pointer"
                            },
                            onClick: t.onCloseWatebTerms
                        }, d.createElement(f.O, {
                            color: f.J.Link,
                            type: f._43.Span
                        }, d.createElement(f._19, {
                            asset: f._20.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(u.d)("Back", "Bits--Watch-Ad-Terms")))), d.createElement(f._6, {
                            padding: {
                                bottom: 2
                            }
                        }, d.createElement(f.O, {
                            type: f._43.Span
                        }, Object(u.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                            "x:link": function(e) {
                                return d.createElement("span", {
                                    key: "helplink"
                                }, d.createElement("a", {
                                    href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, e))
                            }
                        }, "Bits--Watch-Ad-Terms")), d.createElement(f._6, {
                            margin: {
                                y: 1
                            }
                        }, d.createElement("li", null, Object(u.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), d.createElement("li", null, Object(u.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), d.createElement(f._6, {
                            display: f.P.Flex,
                            justifyContent: f._5.Center
                        }, d.createElement(f.u, {
                            size: f.y.Small,
                            onClick: t.onAgreeToWatebTerms,
                            "data-a-target": $
                        }, Object(u.d)("Continue", "Bits--Watch-Ad-Terms"))))
                    }, t.onAgreeToWatebTerms = function() {
                        u.l.set(K, !0), t.setState({
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
                            background: f.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = E({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === g.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === g.b.ChatTooltip && (n = d.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, d.createElement(f._19, {
                            asset: f._20.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return d.createElement(f._29, l.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.Center,
                        justifyContent: f._5.Center,
                        textAlign: f._39.Center
                    }, e), d.createElement(f._8, {
                        delay: 0
                    }), d.createElement(f._6, {
                        padding: {
                            top: 2
                        }
                    }, d.createElement(f.O, {
                        italic: !0
                    }, Object(u.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return d.createElement(f._6, l.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.Center,
                        justifyContent: f._5.Center,
                        padding: 2,
                        textAlign: f._39.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, d.createElement(f.O, {
                        italic: !0
                    }, Object(u.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    if (this.state.showWatebTerms) return this.renderWatebTerms(t, e);
                    var i = this.renderWatebCard();
                    if (i) return d.createElement(f._29, l.__assign({
                        className: E(t, "bits-buy-card--shorter"),
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        alignItems: f.c.Center,
                        justifyContent: f._5.Center,
                        textAlign: f._39.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === L.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = d.createElement(R, {
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
                        c = null;
                    return this.props.location === g.b.ChatTooltip && (c = d.createElement(M, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), d.createElement(f._29, l.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: f.P.Flex,
                        flexDirection: f.R.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, c, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case O.Awarded:
                            return d.createElement(V, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case O.Error:
                            return d.createElement(z, {
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
                        requestRef: g.c.ShowAdButton,
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
            }(d.Component),
            Y = Object(S.compose)(Object(G.d)("BitsBuyCard", {
                autoReportInteractive: !0,
                destination: w.a.BitsBuyCard
            }))(Q);

        function Z(e) {
            return {
                adModalOpen: Object(o.b)(e, y),
                isLoggedIn: Object(s.d)(e)
            }
        }

        function X(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(r.d)(y, t))
                }
            }
        }
        var ee = Object(a.b)(Z, X)(Y);
        n.d(t, !1, function() {
            return Z
        }), n.d(t, !1, function() {
            return X
        }), n.d(t, "a", function() {
            return ee
        })
    },
    WxKK: function(e, t, n) {
        "use strict";
        var i = n("7FW4");
        n.d(t, "a", function() {
            return i.a
        })
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.B, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._12, null)), i.createElement(a.C, null, i.createElement(a._6, {
                    display: a.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._12, {
                    width: 40,
                    height: 56
                })), i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.O, null, i.createElement(a._12, {
                    width: 150
                })), i.createElement(a.O, {
                    fontSize: a.T.Size7
                }, i.createElement(a._12, {
                    width: 100
                }))))))
            }
    },
    ZJYd: function(e, t, n) {
        "use strict";
        t.c = function(e) {
            if (e.type === r.a) return !1;
            return l(e) && null !== e.promotion && e.promotion.type === r.d
        }, t.e = function(e) {
            if (e.type === r.a) return !1;
            return l(e) && null !== e.promotion && e.promotion.type === r.e
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
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            s = (n.n(o), n("F8kA")),
            l = n("6sO2"),
            d = n("SZoP"),
            c = n("mi6k"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            v = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.onClickHandler = function() {
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
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(m._6, {
                        position: m._13.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._16, {
                        size: m._17.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._56)(this.props)), o.createElement(m.B, null, o.createElement(m._6, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._29, {
                        display: m.P.InlineFlex,
                        position: m._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._55.Default,
                        fontSize: m.T.Size6,
                        background: m.m.Overlay,
                        color: m.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._28, {
                        "data-test-selector": "video-view-count",
                        icon: m._20.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(m._29, {
                        display: m.P.InlineFlex,
                        position: m._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._55.Default,
                        fontSize: m.T.Size6,
                        background: m.m.Overlay,
                        color: m.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(m._28, {
                        "data-test-selector": "video-length",
                        icon: m._20.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.C, null, o.createElement(m._6, {
                        display: m.P.Flex,
                        flexDirection: m.R.Row,
                        flexWrap: m.S.NoWrap,
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
                    }, o.createElement(m._0, {
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
                    return o.createElement(m._6, {
                        "data-test-selector": "game-box-art",
                        display: m.P.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m._0, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._46, {
                        display: m.P.Block,
                        direction: m._48.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.D, {
                        aspect: m.k.BoxArt,
                        alt: e.name,
                        src: e.boxArtURL || l.a.defaultBoxArtURL
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
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(m._6, {
                        display: m.P.Flex,
                        flexDirection: m.R.Column,
                        overflow: m._9.Hidden
                    }, o.createElement(m._6, {
                        "data-test-selector": "video-title",
                        overflow: m._9.Hidden,
                        position: m._13.Relative
                    }, o.createElement(m.O, {
                        color: m.J.Base,
                        fontSize: m.T.Size5,
                        lineHeight: m._7.Heading
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m._6, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(m.O, {
                        type: m._43.Span,
                        color: m.J.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(m._0, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component)),
            h = Object(u.d)("VideoPreviewCard")(v)
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
        t.a = function(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var s, l, d, c = e.tiers.map(function(e) {
                    return o(e)
                });
                "Cheer" === e.prefix && c.push((s = ["DARK", "LIGHT"], l = ["static", "animated"], d = [], [1, 1.5, 2, 3, 4].forEach(function(e) {
                    s.forEach(function(t) {
                        l.forEach(function(n) {
                            d.push({
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
                    images: d
                }))), c.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var u = i.__assign({}, e, {
                    indexedTiers: new Map(c.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: c
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
    dQj3: function(e, t, n) {
        "use strict";
        t.b = l, t.a = function(e, t, n) {
            if (!e.author) return null;
            var d = l(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: r.b.Message,
                messageType: r.c.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: i.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: a.a.User,
                    color: e.authorColor
                }, Object(s.a)(e.authorName, e.author.login)),
                messageParts: Object(o.f)(e.body.content, d, e.bitsUsed, t, n, e.authorName)
            }
        }, t.c = function(e) {
            if (null === e.tags || null === e.message || null === e.bits_used) return null;
            var t = "ChatMessage:" + e.tags.msg_id;
            return {
                __typename: "ChatMessage",
                "Symbol(id)": t,
                id: e.tags.msg_id,
                authorName: e.tags.display_name,
                authorColor: e.tags.color,
                author: {
                    __typename: "User",
                    "Symbol(id)": "User:" + e.user_id,
                    id: e.user_id,
                    login: e.username
                },
                body: {
                    __typename: "MessageBody",
                    "Symbol(id)": "$" + t + ".body",
                    content: e.message,
                    emotes: e.tags.emotes.map(function(e, n) {
                        return {
                            __typename: "EmbeddedEmote",
                            "Symbol(id)": t + ".body.emotes." + n,
                            emoteID: e.id.toString(),
                            from: e.start,
                            to: e.end,
                            setID: e.set
                        }
                    })
                },
                badges: e.tags.badges.map(function(e, n) {
                    return {
                        __typename: "Badge",
                        "Symbol(id)": t + ".badges." + n,
                        setID: e.badge_set_id,
                        version: e.badge_set_version
                    }
                }),
                bitsUsed: e.bits_used
            }
        };
        var i = n("TToO"),
            a = n("6Agf"),
            r = n("qkCi"),
            o = n("l21v"),
            s = n("e1CU");

        function l(e) {
            var t = [];
            return e.forEach(function(e) {
                t[e.from] = {
                    startIndex: e.from,
                    endIndex: e.to + 1,
                    data: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(o.e)(e.emoteID, 1),
                                "2x": Object(o.e)(e.emoteID, 2),
                                "4x": Object(o.e)(e.emoteID, 4)
                            }
                        }
                    }
                }
            }), t
        }
    },
    ea40: function(e, t) {},
    ebTC: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("GiK3"),
            d = n("6sO2"),
            c = n("J8WN"),
            u = n("+8VM"),
            m = n("7vx8"),
            p = n("HZww"),
            v = n("4Q9N"),
            h = n("Tt3k"),
            g = n("W6ca"),
            f = n("xgnX"),
            k = n("CSlQ"),
            b = n("Odds"),
            _ = (n("+Aaf"), n("0H+u")),
            y = ["image/*"],
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = d.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(h.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: f.b.BadSizeError
                            }) : Object(h.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, r, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(g.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                            case 3:
                                                return r = s.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: f.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = d.k.subscribe({
                                                    topic: Object(p.j)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(g.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: f.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: f.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === a) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === f.a.Success ? t = f.b.Success : e.status === f.a.BadSize ? (t = f.b.BadSizeError, o.currentImage = null) : e.status === f.a.NonImage ? (t = f.b.NonImageError, o.currentImage = null) : e.status === f.a.WrongFormat ? (t = f.b.WrongFormatError, o.currentImage = null) : (t = f.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === f.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: f.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: f.b.TimeoutError
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
                    var t = Object(d.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === v.a.ChannelOfflineImage && (t = Object(d.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = l.createElement(b._6, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: b._13.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(b._19, {
                        asset: b._20.Upload,
                        type: b._21.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(d.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === v.a.ChannelOfflineImage && (i = Object(d.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(b._6, null, l.createElement(b._6, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(b._6, null, l.createElement(b._19, {
                            asset: b._20.Plus,
                            type: b._21.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(b.O, {
                            type: b._43.H3,
                            color: b.J.Alt2,
                            fontSize: b.T.Size4
                        }, Object(d.d)("Upload a Photo", "User Image Uploader"))), l.createElement(b._6, {
                            className: "user-image-uploader__upload-recommendation",
                            position: b._13.Absolute,
                            textAlign: b._39.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(b.O, {
                            type: b._43.H6,
                            color: b.J.Alt2,
                            fontSize: b.T.Size8,
                            align: b._53.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = l.createElement(u.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(f.c)(this.state.statusMessage);
                        r = l.createElement(b._10, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(b._6, {
                        className: "user-image-uploader",
                        position: b._13.Relative,
                        fullHeight: !0
                    }, l.createElement(b._29, {
                        className: "user-image-uploader__background-container",
                        background: b.m.Base,
                        fullWidth: !0
                    }, l.createElement(b._6, {
                        padding: 2,
                        display: b.P.InlineBlock,
                        position: b._13.Relative,
                        textAlign: b._39.Center,
                        fullWidth: !0
                    }, l.createElement(b._29, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(b.O, {
                        type: b._43.H3,
                        fontSize: b.T.Size4
                    }, t)), l.createElement(b._6, {
                        className: "user-image-uploader__upload-container",
                        display: b.P.InlineBlock,
                        position: b._13.Relative,
                        textAlign: b._39.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(b._6, {
                        className: "user-image-uploader__upload",
                        display: b.P.InlineBlock,
                        position: b._13.Relative,
                        textAlign: b._39.Center
                    }, l.createElement(c.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(b._29, {
                        "data-test-selector": "status-message",
                        fontSize: b.T.Size4,
                        position: b._13.Relative,
                        textAlign: b._39.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
                }, t = s.__decorate([Object(m.a)(_, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            S = Object(k.d)("User Image Upload")(E);
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
        })(S);
        n.d(t, "a", function() {
            return N
        })
    },
    f6Cj: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return Object(i.a)(a, {
                u: e
            })
        }, t.c = function(e, t) {
            return Object(i.a)(r, {
                url: e,
                text: t
            })
        }, t.b = function(e, t) {
            return Object(i.a)(o, {
                url: e,
                title: t
            })
        }, t.d = function(e) {
            return Object(i.a)(s, {
                url: e
            })
        };
        var i = n("yDzg"),
            a = "https://www.facebook.com/sharer/sharer.php",
            r = "https://www.twitter.com/share",
            o = "https://www.reddit.com/submit",
            s = "https://vk.com/share.php"
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
            d = n("qe65");
        n("1pvm");

        function c(e) {
            var t, n = Object(a.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var c = e.bitsConfig.indexedActions[o.g];
                c || (c = Object(l.b)());
                var u = c.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(s.b)(u, void 0, e.animated);
                    return void 0 !== e.themeOverride && (e.themeOverride === r.a.Light ? m.dark = m.light : m.light = m.dark), t = i.createElement(d.a, {
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
            return c
        })
    },
    ioX4: function(e, t) {},
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
            d = n("qe65"),
            c = n("Odds");
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
            var u = e.display === c.P.Inline || e.display === c.P.InlineFlex || e.display === c.P.InlineBlock,
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
                var v = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(c._0, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? c._39.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, v))
            }
            var h = a("cheermote-for-amount__cheer-image", {
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
                g = r.createElement(d.a, {
                    className: h,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (g = null), r.createElement(c._0, {
                className: "cheermote-for-amount",
                alignItems: e.alignItems,
                display: e.display
            }, r.createElement("span", null, g, m))
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        })
    },
    oHn4: function(e, t) {},
    q8Cw: function(e, t) {},
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
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i, a, r, o, s = n("aMxy");
        n.o(s, "ModerationActions") && n.d(t, "d", function() {
                return s.ModerationActions
            }),
            function(e) {
                e[e.Message = 0] = "Message", e[e.Moderation = 1] = "Moderation", e[e.ModerationAction = 2] = "ModerationAction", e[e.TargetedModerationAction = 3] = "TargetedModerationAction", e[e.AutoMod = 4] = "AutoMod", e[e.Connected = 5] = "Connected", e[e.Disconnected = 6] = "Disconnected", e[e.Reconnect = 7] = "Reconnect", e[e.Hosting = 8] = "Hosting", e[e.Unhost = 9] = "Unhost", e[e.Hosted = 10] = "Hosted", e[e.Subscription = 11] = "Subscription", e[e.Resubscription = 12] = "Resubscription", e[e.SubGift = 13] = "SubGift", e[e.Clear = 14] = "Clear", e[e.SubscriberOnlyMode = 15] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 16] = "FollowerOnlyMode", e[e.SlowMode = 17] = "SlowMode", e[e.EmoteOnlyMode = 18] = "EmoteOnlyMode", e[e.RoomMods = 19] = "RoomMods", e[e.RoomState = 20] = "RoomState", e[e.Raid = 21] = "Raid", e[e.Unraid = 22] = "Unraid", e[e.Ritual = 23] = "Ritual", e[e.Notice = 24] = "Notice", e[e.Info = 25] = "Info", e[e.BadgesUpdated = 26] = "BadgesUpdated", e[e.Purchase = 27] = "Purchase", e[e.BitsCharity = 28] = "BitsCharity", e[e.CrateGift = 29] = "CrateGift"
            }(i || (i = {})),
            function(e) {
                e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention"
            }(a || (a = {})),
            function(e) {
                e[e.Ban = 0] = "Ban", e[e.Timeout = 1] = "Timeout"
            }(r || (r = {})),
            function(e) {
                e[e.MessageRejectedPrompt = 0] = "MessageRejectedPrompt", e[e.MessageRejected = 1] = "MessageRejected", e[e.MessageAllowed = 2] = "MessageAllowed", e[e.MessageDenied = 3] = "MessageDenied"
            }(o || (o = {}))
    },
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
            d = n("GiK3"),
            c = n("6sO2"),
            u = n("J8WN"),
            m = n("+8VM"),
            p = n("7vx8"),
            v = n("puy8"),
            h = n("HZww"),
            g = n("Odds"),
            f = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return d.createElement(g._6, {
                    padding: {
                        bottom: 1
                    }
                }, d.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(c.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, d.createElement(g._29, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: g._13.Relative,
                    className: l(t)
                }, d.createElement("img", {
                    alt: Object(c.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            k = n("4Q9N"),
            b = n("Tt3k"),
            _ = n("W6ca"),
            y = n("xgnX"),
            E = n("CSlQ"),
            S = (n("AL3x"), n("nmDn")),
            N = ["image/*"],
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = c.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
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
                                        return o.trys.push([1, 3, , 4]), [4, Object(_.a)(this.props.userID, this.props.authToken, k.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = o.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: y.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = c.k.subscribe({
                                            topic: Object(h.j)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(_.c)(n, r.currentImage)
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
                            imagePreviewURL: Object(v.a)(v.b[e], 300)
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
                        t = v.b.map(function(t, n) {
                            return d.createElement(f, {
                                key: t.id,
                                imageSrc: Object(v.a)(t, 300),
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
                        n = d.createElement(g._6, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: g._13.Relative
                        }, d.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = d.createElement(g._6, {
                        className: "profile-edit__upload-info"
                    }, d.createElement(g._6, null, d.createElement(g._19, {
                        asset: g._20.Plus,
                        type: g._21.Alt2,
                        height: 20,
                        width: 20
                    })), d.createElement(g.O, {
                        type: g._43.H3,
                        color: g.J.Alt2,
                        fontSize: g.T.Size4
                    }, Object(c.d)("Upload a Photo", "Profile Edit"))));
                    var r = null;
                    this.props.showCloser && (r = d.createElement(m.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(y.c)(this.state.statusMessage),
                            p = s.message,
                            h = s.type;
                        o = d.createElement(g._10, {
                            label: p,
                            type: h
                        })
                    }
                    var k = this.props.login;
                    return this.props.displayName && (k = this.props.displayName), d.createElement(g._6, {
                        className: "profile-edit",
                        position: g._13.Relative,
                        fullHeight: !0
                    }, d.createElement(g._29, {
                        className: "profile-edit__background-container",
                        background: g.m.Base,
                        fullWidth: !0
                    }, d.createElement(g._6, {
                        padding: 2,
                        display: g.P.InlineBlock,
                        position: g._13.Relative,
                        textAlign: g._39.Center,
                        fullWidth: !0
                    }, d.createElement(g._29, {
                        textAlign: g._39.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(g.O, {
                        type: g._43.H3,
                        color: g.J.Alt2,
                        fontSize: g.T.Size4
                    }, Object(c.d)("Edit Profile Picture for {userName}", {
                        userName: k
                    }, "Profile Edit"), " ")), d.createElement(g._6, {
                        className: "profile-edit__upload-container",
                        display: g.P.InlineBlock,
                        position: g._13.Relative,
                        textAlign: g._39.Center,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(g._6, {
                        className: "profile-edit__upload",
                        display: g.P.InlineBlock,
                        position: g._13.Relative,
                        textAlign: g._39.Center
                    }, d.createElement(u.a, {
                        allowedFileTypes: N,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), d.createElement(g._29, {
                        "data-test-selector": "status-message",
                        fontSize: g.T.Size4,
                        position: g._13.Relative,
                        textAlign: g._39.Center,
                        className: "profile-edit__status-message"
                    }, o), d.createElement(g._29, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(g._6, {
                        textAlign: g._39.Left,
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(g.O, {
                        type: g._43.H3,
                        color: g.J.Alt2,
                        fontSize: g.T.Size5
                    }, Object(c.d)("Or select one of these", "Profile Edit"))), d.createElement(g._49, {
                        childWidth: g._50.ExtraSmall,
                        gutterSize: g._51.ExtraSmall,
                        placeholderItems: 3
                    }, t)), d.createElement(g._6, {
                        display: g.P.Flex,
                        justifyContent: g._5.Center
                    }, d.createElement(g.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: g.y.Large
                    }, Object(c.d)("Update", "Profile Edit"))))), r)
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
                                    return i.trys.push([1, 3, , 4]), [4, Object(_.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
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
                }, t = s.__decorate([Object(p.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(d.Component),
            C = Object(E.d)("Profile Edit")(w);
        var A = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(a.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(r.c)()
                }
            }, e)
        })(C);
        n.d(t, "a", function() {
            return A
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
                        type: o._11.Success
                    };
                case a.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._11.Alert
                    };
                case a.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._11.Alert
                    };
                case a.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: o._11.Alert
                    };
                case a.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._11.Alert
                    };
                case a.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._11.Alert
                    };
                case a.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: o._11.Brand
                    };
                case a.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: o._11.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: o._11.Alert
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
            d = function() {
                return i.createElement(s._6, {
                    display: s.P.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.R.Column,
                    justifyContent: s._5.Center,
                    alignItems: s.c.Center
                }, i.createElement(s.O, {
                    type: s._43.H4,
                    bold: !0
                }, i.createElement(o.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return d
        })
    },
    yU6t: function(e, t) {},
    z4Db: function(e, t) {},
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
//# sourceMappingURL=pages.event-landing-177cf33b2ec36598d26f530161c5c522.js.map