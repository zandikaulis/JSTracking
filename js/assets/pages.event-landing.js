webpackJsonp([45], {
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
                bits_location: e.location || l.ChatTooltip
            };
            a.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return o
        }), t.d = function(e) {
            return e && s[e] ? s[e] : (a.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), o.Buy100)
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
            l = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            o = {
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
            s = {
                100: o.Buy100,
                500: o.Buy500,
                1e3: o.Buy1000,
                1500: o.Buy1500,
                5e3: o.Buy5000,
                1e4: o.Buy10000,
                25e3: o.Buy25000
            };
        (i || (i = {})).ShowAdButton = "show_ad_button"
    },
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var u, m = [], p = e.split(/\n/), g = function(e, g) {
                    if (e > 0 && (g += p[e - 1].length + 1), c && "" === p[e]) return m.push(i.createElement(s._22, {
                        key: e
                    }, "\n")), u = g, "continue";
                    var v = t.map(function(e) {
                            return function(e, t) {
                                return {
                                    emoteID: e.emoteID,
                                    from: e.from - t,
                                    to: e.to - t,
                                    setID: e.setID
                                }
                            }(e, g)
                        }).filter(function(t) {
                            return ! function(e, t) {
                                return e.from < 0 || e.from >= t || e.to < 0 || e.to >= t
                            }(t, p[e].length)
                        }),
                        h = Object(l.f)(p[e], Object(o.b)(v), 0, {}, !1, n);
                    m.push(i.createElement(s._22, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var l = e[n];
                            switch (l.type) {
                                case r.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: l.content.url,
                                        target: "_blank"
                                    }, l.content.url));
                                    break;
                                case r.a.VideoLink:
                                case r.a.Link:
                                    l.content.url.match(d) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: l.content.url.replace(d, "")
                                    }, l.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: l.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, l.content.displayText));
                                    break;
                                case r.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + l.content.recipient
                                    }, l.content.recipient));
                                    break;
                                case r.a.Emote:
                                    l.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: l.content.images.sources["1x"],
                                        alt: l.content.alt
                                    }));
                                    break;
                                case r.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, l.content))
                            }
                        }
                        return t
                    }(h))), u = g
                }, v = 0, h = 0; v < p.length; v++) g(v, h), h = u;
            return m
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            r = n("mwvJ"),
            l = n("l21v"),
            o = n("dQj3"),
            s = n("Odds"),
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
    "5GFz": function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("Odds"),
            l = (n("6suJ"), function(e) {
                var t = Object(a.c)(e.date, {
                        month: "short"
                    }),
                    n = Object(a.c)(e.date, {
                        day: "numeric"
                    });
                return i.createElement(r._18, {
                    background: r.m.Base,
                    elevation: 2,
                    display: r.H.Flex,
                    flexDirection: r.J.Column,
                    className: "event-calendar-date",
                    margin: {
                        top: .5,
                        left: .5
                    },
                    position: r._3.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    flexWrap: r.K.NoWrap
                }, i.createElement(r._18, {
                    className: "event-calendar-date__month",
                    display: r.H.Flex,
                    justifyContent: r.T.Center,
                    background: r.m.AccentAlt2
                }, i.createElement(r._22, {
                    fontSize: r.L.Size6,
                    transform: r._26.Uppercase,
                    color: r.F.Overlay
                }, t)), i.createElement(r.U, {
                    display: r.H.Flex,
                    justifyContent: r.T.Center
                }, i.createElement(r._22, {
                    fontSize: r.L.Size3,
                    color: r.F.Base
                }, n)))
            });
        n.d(t, "a", function() {
            return l
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
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
    "6suJ": function(e, t) {},
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
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            l = n("2hJ3"),
            o = n("yDzg"),
            s = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            m = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return g
        });
        var p;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(p || (p = {}));
        var g = function(e) {
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
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(l.a)(n.getUrl()), n.setState({
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
                                return Object(o.a)(c, {
                                    url: e,
                                    title: t
                                })
                            }(a, r);
                        case p.VKontakte:
                            return function(e) {
                                return Object(o.a)(u, {
                                    url: e
                                })
                            }(a);
                        case p.Facebook:
                            return function(e) {
                                return Object(o.a)(s, {
                                    u: e
                                })
                            }(a);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(o.a)(d, {
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
    "8naI": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TimetableLanding"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "TimetableEvent"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "TimetableCommon"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "upcomingChildren"
                        },
                        name: {
                            kind: "Name",
                            value: "children"
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
                                    value: "afterLimit"
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
                                    value: "afterCursor"
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
                                    value: "beforeLimit"
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
                                    value: "beforeCursor"
                                }
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
                                                    value: "endsAfter"
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
                                            value: "hasPreviousPage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SegmentEvent"
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
                                                            value: "startAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "endAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "337"
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
                                                                        value: "97"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "130"
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
                                                            value: "channel"
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
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: null,
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
                                                                            value: "__typename"
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
                                                                    value: "isFollowing"
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
                                                                            value: "offsetSeconds"
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
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TimetableFromSegmentLanding"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "TimetableEvent"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "TimetableCommon"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "deepLinkedChildren"
                        },
                        name: {
                            kind: "Name",
                            value: "children"
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
                                    value: "afterLimit"
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
                                    value: "afterCursor"
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
                                    value: "beforeLimit"
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
                                    value: "beforeCursor"
                                }
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
                                                value: "eventID"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "eventName"
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
                                            value: "hasPreviousPage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SegmentEvent"
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
                                                            value: "startAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "endAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "337"
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
                                                                        value: "97"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "130"
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
                                                            value: "channel"
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
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: null,
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
                                                                    value: "isFollowing"
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
                                                                            value: "offsetSeconds"
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
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "upcomingChildren"
                        },
                        name: {
                            kind: "Name",
                            value: "children"
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
                                        value: "endsAfter"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "endsAfter"
                                        }
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
                                            value: "hasPreviousPage"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "SegmentEvent"
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
                                                            value: "startAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "endAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "337"
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
                                                                        value: "97"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "130"
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
                                                            value: "channel"
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
                                                                    }, {
                                                                        kind: "Field",
                                                                        alias: null,
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
                                                                    value: "isFollowing"
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
                                                                            value: "offsetSeconds"
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
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TimetableCommon"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "TimetableEvent"
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
                        alias: {
                            kind: "Name",
                            value: "bannerImageURL"
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
                                value: "360"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "202"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "thumbImageURL"
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
                                value: "160"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "90"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "timetableStart"
                        },
                        name: {
                            kind: "Name",
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "timetableEnd"
                        },
                        name: {
                            kind: "Name",
                            value: "endAt"
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
                                    value: "isFollowing"
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
                end: 2335
            }
        };
        n.loc.source = {
            body: "fragment TimetableLanding on TimetableEvent {\n...TimetableCommon\nupcomingChildren: children(first: $afterLimit after: $afterCursor last: $beforeLimit before: $beforeCursor criteria: { firstPageOptions: { endsAfter: $endsAfter } }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n__typename\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\n}\nfragment TimetableFromSegmentLanding on TimetableEvent {\n...TimetableCommon\ndeepLinkedChildren: children(first: $afterLimit after: $afterCursor last: $beforeLimit before: $beforeCursor criteria: { firstPageOptions: { eventID: $eventName } }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\nupcomingChildren: children(first: 1 criteria: { endsAfter: $endsAfter }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\n}\nfragment TimetableCommon on TimetableEvent {\nid\ntitle\ndescription\nbannerImageURL: imageURL(width:360 height:202)\nthumbImageURL: imageURL(width:160 height: 90)\ntimetableStart: startAt\ntimetableEnd: endAt\nowner {\nid\ndisplayName\n}\nself {\nisFollowing\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "9SRT": function(e, t) {
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
                                value: "UnfollowEventInput"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "event"
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
                                                    value: "isFollowing"
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
                end: 127
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\nid\nself {\nisFollowing\n}\n}\n}\n}",
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "endsAfter"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Time"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "afterLimit"
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
                            value: "afterCursor"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "beforeLimit"
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
                            value: "beforeCursor"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "__typename"
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
                                        value: "SingleEvent"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "SingleLanding"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "PremiereEvent"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "PremiereLanding"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "TimetableEvent"
                                    }
                                },
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "TimetableLanding"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "SegmentEvent"
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
                                            value: "parent"
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
                                                        value: "TimetableEvent"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "TimetableFromSegmentLanding"
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
                end: 604
            }
        };
        a.loc.source = {
            body: '#import "twilight/pages/event-landing/models/_timetable-event.gql"\n#import "twilight/pages/event-landing/models/_single-event.gql"\n#import "twilight/pages/event-landing/models/_premiere-event.gql"\nquery EventLandingPage_Event($eventName: ID! $endsAfter: Time $afterLimit: Int $afterCursor: Cursor $beforeLimit: Int $beforeCursor: Cursor) {\nevent(id: $eventName) {\n__typename\n...on SingleEvent {\n...SingleLanding\n}\n...on PremiereEvent {\n...PremiereLanding\n}\n...on TimetableEvent {\n...TimetableLanding\n}\n...on SegmentEvent {\nid\ntitle\nparent {\n...on TimetableEvent {\n...TimetableFromSegmentLanding\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("8naI").definitions)), a.definitions = a.definitions.concat(i(n("thRY").definitions)), a.definitions = a.definitions.concat(i(n("qdmu").definitions)), e.exports = a
    },
    "E+X/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            r = n("2KeS"),
            l = n("+xm8"),
            o = n("V5M+"),
            s = n("f2i/"),
            d = n("Aj/L"),
            c = n("oSFp"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("+Znq"),
            g = n("mw/a"),
            v = n("Odds"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportClick = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
                        var e = "https://www.twitch.tv/events/" + t.props.eventID;
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: g.a.User,
                                targetUserID: t.props.targetUser.id
                            },
                            title: Object(m.d)("Report {channelName}", {
                                channelName: t.props.targetUser.displayName
                            }, "EventMoreMenu"),
                            defaultDescription: "Report event: " + e
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(p.a, null, u.createElement(v.u, {
                        icon: v._10.More,
                        type: v.z.Hollow
                    }), u.createElement(v.p, {
                        direction: this.props.balloonDirection,
                        tailOffset: this.props.tailOffset
                    }, u.createElement(v.U, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(v.S, {
                        onClick: this.handleReportClick
                    }, u.createElement(v.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(m.d)("Report", "EventMoreMenu"))))))
                }, t
            }(u.Component),
            f = Object(a.a)(function(e) {
                return {
                    isLoggedIn: Object(d.d)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(s.f)(l.a.ReportChannel)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(o.d)(c.a, t)
                    }
                }, e)
            })(h);
        n.d(t, "a", function() {
            return f
        })
    },
    EKvq: function(e, t) {},
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
            var l = Math.floor(r / 24);
            if (r %= 24, l < 7) return r ? i(a.DAY, l) + " " + i(a.HOUR, r) : i(a.DAY, l);
            if (l <= 26) {
                var o = Math.floor(l / 7);
                return (l %= 7) ? i(a.WEEK, o) + " " + i(a.DAY, l) : i(a.WEEK, o)
            }
            var s = Math.round((l + 3) / 30);
            return i(a.MONTH, s)
        };
        var a, r = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(a || (a = {}))
    },
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, r, l = n("TToO"),
            o = n("HW6M"),
            s = n("U7vG"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), i = {}, i[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[c.a.Premiere] = u._10.VideoPremiere, a[c.a.Rerun] = u._10.VideoRerun, a[c.a.WatchParty] = u._10.VideoRerun, a),
            g = (r = {}, r[c.a.Premiere] = u._11.Live, r[c.a.Rerun] = u._11.Inherit, r[c.a.WatchParty] = u._11.Inherit, r),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._18, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, s.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(u._22, {
                        type: u._27.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, o(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._18, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? s.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.W, {
                        size: u.X.Small
                    })) : s.createElement(u._9, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("Live", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return v
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("CSlQ"),
            r = n("81qH"),
            l = n("XYqD"),
            o = n("Odds"),
            s = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(l.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(o.U, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(r.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(o._33, {
                    gutterSize: o._35.Small,
                    childWidth: e.videoCardSize || o._34.Large,
                    placeholderItems: 20
                }, t)
            },
            d = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return d
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("Odds")),
            l = n("yU6t"),
            o = (n.n(l), function(e) {
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
    MQiv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return l
        }), t.c = function(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return a.n.tracking.track(r.SpadeEventType.EventShare, t)
        }, t.d = function(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return a.n.tracking.track(r.SpadeEventType.EventFollowing, t)
        };
        var i, a = n("6sO2"),
            r = n("vH/s");
        ! function(e) {
            e.ChannelEvents = "channel_events", e.EventDetails = "event_details", e.EventManagment = "event_managment"
        }(i || (i = {}));
        var l;
        ! function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(l || (l = {}))
    },
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            l = n("6sO2"),
            o = n("Ejve"),
            s = "legacy_routes_enabled",
            d = function(e) {
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
                                        s = l.a.buildType === o.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                l.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
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
                    }, n.isEnabled = l.b.get(s, !1), n.logger = l.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = l.b.get("legacy_routes", []),
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
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    NTi8: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = new Date;
            return t && (n = t),
                function(e, t) {
                    if (t < e.endAt) {
                        if (e.eventType === w.PREMIERE_EVENT) return !!e.premiere && e.premiere.status === u.STARTED;
                        if (e.eventType === w.SINGLE_EVENT) return t > e.startAt;
                        if (e.eventType === w.SEGMENT_EVENT) return t > e.startAt
                    }
                    return !1
                }(e, n) ? N.LIVE : function(e, t) {
                    if (e.eventType === w.PREMIERE_EVENT) return t < e.endAt;
                    if (e.eventType === w.SINGLE_EVENT) return t < e.startAt;
                    if (e.eventType === w.SEGMENT_EVENT) return t < e.startAt;
                    return !1
                }(e, n) ? N.FUTURE : N.PAST
        }

        function a(e) {
            return null !== e
        }

        function r(e) {
            var t = [];
            e.upcomingChildren && e.upcomingChildren.edges && (t = e.upcomingChildren.edges.map(function(e) {
                var t = e.node;
                if (!(t && t.game && t.channel && t.channel.id && t.channel.login)) return null;
                var n = null;
                if (t && t.videos && t.videos.edges && t.videos.edges.length > 0) {
                    n = l(t.videos.edges[0])
                }
                return {
                    id: t.id,
                    title: t.title,
                    description: t.description,
                    startAt: new Date(t.startAt),
                    endAt: new Date(t.endAt),
                    game: {
                        id: t.game.id,
                        name: t.game.name,
                        displayName: t.game.displayName,
                        boxArtURL: t.game.boxArtURL || ""
                    },
                    imageURL: t.imageURL,
                    channel: {
                        id: t.channel.id,
                        login: t.channel.login,
                        displayName: t.channel.displayName || t.channel.login,
                        stream: {
                            previewImageURL: t.channel.stream && t.channel.stream.previewImageURL ? t.channel.stream.previewImageURL : ""
                        }
                    },
                    self: {
                        isFollowing: t.self && t.self.isFollowing || !1
                    },
                    video: n
                }
            }).filter(a));
            var n = null;
            e.deepLinkedChildren && e.deepLinkedChildren.edges && (n = [], n = e.deepLinkedChildren.edges.map(function(e) {
                var t = e.node;
                if (!(t && t.game && t.channel && t.channel.id && t.channel.login)) return null;
                var n = null;
                if (t && t.videos && t.videos.edges && t.videos.edges.length > 0) {
                    n = l(t.videos.edges[0])
                }
                return {
                    id: t.id,
                    title: t.title,
                    description: t.description,
                    startAt: new Date(t.startAt),
                    endAt: new Date(t.endAt),
                    game: {
                        id: t.game.id,
                        name: t.game.name,
                        displayName: t.game.displayName,
                        boxArtURL: t.game.boxArtURL || ""
                    },
                    imageURL: t.imageURL,
                    channel: {
                        id: t.channel.id,
                        login: t.channel.login,
                        displayName: t.channel.displayName || t.channel.login,
                        stream: {
                            previewImageURL: t.channel.stream && t.channel.stream.previewImageURL ? t.channel.stream.previewImageURL : ""
                        }
                    },
                    self: {
                        isFollowing: t.self && t.self.isFollowing || !1
                    },
                    video: n
                }
            }).filter(a));
            var i = null,
                r = null;
            null !== e.timetableStart && (i = new Date(e.timetableStart)), null !== e.timetableEnd && (r = new Date(e.timetableEnd));
            var o = null;
            null !== e.owner && (o = {
                id: e.owner.id || "",
                displayName: e.owner.displayName || "-"
            });
            var s = !1;
            s = n ? e.deepLinkedChildren && e.deepLinkedChildren.pageInfo && e.deepLinkedChildren.pageInfo.hasPreviousPage || !1 : e.upcomingChildren && e.upcomingChildren.pageInfo && e.upcomingChildren.pageInfo.hasPreviousPage || !1;
            var d = !1;
            return d = n ? e.deepLinkedChildren && e.deepLinkedChildren.pageInfo && e.deepLinkedChildren.pageInfo.hasNextPage || !1 : e.upcomingChildren && e.upcomingChildren.pageInfo && e.upcomingChildren.pageInfo.hasNextPage || !1, {
                id: e.id,
                title: e.title,
                description: e.description,
                imageURL: e.bannerImageURL,
                thumbImageURL: e.thumbImageURL,
                startAt: i,
                endAt: r,
                owner: o,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                },
                deepLinkedChildren: n,
                upcomingChildren: t,
                hasPreviousPage: s,
                hasNextPage: d
            }
        }

        function l(e) {
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
                    lengthSeconds: e.node.lengthSeconds ? e.node.lengthSeconds : 0,
                    owner: i,
                    animatedPreviewURL: e.node.animatedPreviewURL,
                    previewThumbnailURL: e.node.previewThumbnailURL,
                    publishedAt: e.node.publishedAt ? e.node.publishedAt : "",
                    self: null,
                    title: e.node.title ? e.node.title : "",
                    viewCount: e.node.viewCount ? e.node.viewCount : 0
                }
            }
            return {
                offsetSeconds: t,
                video: n
            }
        }

        function o(e, t) {
            var n = e.parent;
            return n && t.parent && (n = function(e, t) {
                var n = e && e.deepLinkedChildren && e.deepLinkedChildren.edges || [];
                t && t.deepLinkedChildren && t.deepLinkedChildren.edges && (n = n.concat(t.deepLinkedChildren.edges));
                var i = Object.assign({}, e.deepLinkedChildren, {
                    edges: n
                });
                return m.__assign({}, e, {
                    deepLinkedChildren: i
                })
            }(n, t.parent)), m.__assign({}, e, {
                parent: n
            })
        }

        function s(e) {
            return !!e && e.__typename === w.TIMETABLE_EVENT
        }

        function d(e) {
            return !!e && e.__typename === w.SEGMENT_EVENT
        }

        function c(e, t) {
            for (var n = e, i = 0, a = t.split("."); i < a.length; i++) {
                var r = a[i];
                if (!n || null === n[r]) return null;
                n = n[r]
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u, m = n("TToO"),
            p = n("U7vG"),
            g = n("6sO2"),
            v = n("yWCw"),
            h = n("7vx8"),
            f = n("j7/Y"),
            k = n("w9tK"),
            b = n("vH/s"),
            S = n("SI0h"),
            y = n("CSlQ"),
            E = n("2aoH"),
            _ = n("HW6M");
        ! function(e) {
            e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED"
        }(u || (u = {}));
        var N;
        ! function(e) {
            e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
        }(N || (N = {}));
        var w;
        ! function(e) {
            e.SINGLE_EVENT = "SingleEvent", e.PREMIERE_EVENT = "PremiereEvent", e.TIMETABLE_EVENT = "TimetableEvent", e.SEGMENT_EVENT = "SegmentEvent"
        }(w || (w = {}));
        var C = n("Odds"),
            A = (n("ioX4"), function(e) {
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = _({
                            "event-landing-action__progress": this.state.countdownActive
                        }),
                        t = "";
                    "function" == typeof g.d && (t = Object(g.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(g.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                    var n = p.createElement(C.U, {
                            margin: {
                                left: 1
                            }
                        }, p.createElement(C.u, {
                            linkTo: {
                                pathname: "/" + this.props.login,
                                state: {
                                    content: "cancelled_countdown",
                                    medium: "event_page"
                                }
                            }
                        }, Object(g.d)("Go to Channel", "EventLandingAction"))),
                        i = null;
                    this.state.countdownActive && (n = p.createElement(C.U, {
                        margin: {
                            left: 1
                        }
                    }, p.createElement(C.u, {
                        onClick: this.cancelCountdown
                    }, Object(g.d)("Cancel", "EventLandingAction"))), i = p.createElement(C._6, {
                        countdown: 5,
                        onCountdownEnd: this.props.onCountdownSuccess,
                        size: C._7.Small
                    }));
                    var a = p.createElement(C.W, null);
                    return this.props.eventType === w.PREMIERE_EVENT && (a = p.createElement(C._9, {
                        asset: C._10.VideoPremiere,
                        type: C._11.Live,
                        width: 10
                    })), p.createElement(C.U, null, p.createElement(C._18, {
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        border: !0,
                        margin: {
                            top: 2
                        },
                        alignItems: C.c.Center,
                        className: "event-landing-action__strip",
                        background: C.m.Base
                    }, p.createElement(C.U, {
                        display: C.H.InlineFlex,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a), p.createElement(C.U, {
                        className: "event-landing-action__message",
                        display: C.H.InlineFlex,
                        flexWrap: C.K.Wrap,
                        flexGrow: 1
                    }, t), p.createElement(C.U, {
                        display: C.H.InlineFlex,
                        flexShrink: 0
                    }, n)), p.createElement(C.U, {
                        className: e
                    }, i))
                }, t
            }(p.Component)),
            F = Object(y.c)("EventLandingAction")(A),
            I = n("1jVX"),
            L = (n("9bpq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(g.d)("No description listed", "EventLandingDescription");
                    return "" !== this.props.description && (e = this.props.description), p.createElement(C.U, null, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        type: C._27.H5,
                        color: C.F.Alt2
                    }, Object(g.d)("Description", "EventLandingDescription")), p.createElement(C.U, {
                        margin: {
                            top: 1
                        },
                        className: "event-landing-description__text"
                    }, Object(I.a)(e, [], "", !0)))
                }, t = m.__decorate([Object(y.c)("EventLandingDescription")], t)
            }(p.Component)),
            U = n("OFFm"),
            T = n("E+X/"),
            x = n("QdVH"),
            O = n("MQiv"),
            D = (n("ea40"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = i({
                            startAt: new Date(this.props.startAt),
                            endAt: new Date(this.props.endAt),
                            premiere: {
                                status: this.props.premiere ? this.props.premiere.status : ""
                            },
                            eventType: this.props.eventType
                        }),
                        t = p.createElement(C.u, {
                            disabled: !0
                        }, Object(g.d)("Past Event", "EventLandingTitle"));
                    return e === N.LIVE ? t = p.createElement(C.u, {
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(g.d)("Watch Now", "EventLandingTitle")) : e === N.FUTURE && (t = p.createElement(U.a, {
                        eventID: this.props.id,
                        areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: O.a.EventDetails
                    })), p.createElement(C._18, {
                        borderBottom: !0
                    }, p.createElement(C._22, {
                        type: C._27.H2,
                        className: "event-landing-title__heading"
                    }, this.props.title), p.createElement(C.U, {
                        display: C.H.Flex,
                        margin: {
                            top: 2,
                            bottom: 3
                        }
                    }, p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, t), p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(x.a, {
                        id: this.props.id,
                        title: this.props.title,
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: O.a.EventDetails
                    })), p.createElement(T.a, {
                        targetUser: {
                            id: this.props.channel.id,
                            displayName: this.props.channel.displayName || this.props.channel.login
                        },
                        eventID: this.props.id,
                        balloonDirection: C.q.Bottom
                    })))
                }, t
            }(p.Component)),
            B = Object(y.c)("EventLandingTitle")(D),
            P = n("ISok"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pastPremiereToPreviewCardVideo = function(e) {
                        return {
                            id: e.id,
                            viewCount: e.viewCount ? e.viewCount : -1,
                            title: e.title || "",
                            animatedPreviewURL: e.animatedPreviewURL || "",
                            previewThumbnailURL: e.previewThumbnailURL || "",
                            publishedAt: e.publishedAt || "",
                            lengthSeconds: e.lengthSeconds ? e.lengthSeconds : -1,
                            owner: {
                                id: e.owner && e.owner.id ? e.owner.id : "",
                                login: e.owner && e.owner.login ? e.owner.login : "",
                                displayName: e.owner && e.owner.displayName ? e.owner.displayName : ""
                            },
                            game: {
                                id: e.game ? e.game.id : "",
                                name: e.game ? e.game.name : "",
                                boxArtURL: e.game && e.game.boxArtURL ? e.game.boxArtURL : ""
                            },
                            self: {
                                viewingHistory: {
                                    position: e.self && e.self.viewingHistory && e.self.viewingHistory.position ? e.self.viewingHistory.position : 0
                                }
                            }
                        }
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.pastPremiere && (e = p.createElement(P.a, {
                        trackingContent: b.PageviewContent.EventPast,
                        trackingMedium: b.PageviewMedium.EventDetails,
                        videos: [this.pastPremiereToPreviewCardVideo(this.props.pastPremiere)]
                    })), p.createElement(C._18, {
                        padding: {
                            top: 2
                        }
                    }, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        type: C._27.H5,
                        color: C.F.Alt2
                    }, Object(g.d)("Videos", "EventLandingVideos")), p.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(C.U, null, e)))
                }, t = m.__decorate([Object(y.c)("EventLandingVideos")], t)
            }(p.Component),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCountdownSuccess = function() {
                        t.props.goToVideo(t.props.channel.login)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    i({
                        startAt: new Date(this.props.startAt),
                        endAt: new Date(this.props.endAt),
                        premiere: {
                            status: this.props.premiere ? this.props.premiere.status : ""
                        },
                        eventType: this.props.eventType
                    }) === N.LIVE && (e = p.createElement(F, {
                        id: this.props.id,
                        login: this.props.channel.login,
                        eventType: this.props.eventType,
                        onCountdownSuccess: this.onCountdownSuccess
                    }));
                    var t = null;
                    return this.props.eventType === w.PREMIERE_EVENT && this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = p.createElement(R, {
                        pastPremiere: this.props.premiere.pastPremiere
                    })), p.createElement(C.U, null, p.createElement(B, {
                        id: this.props.id,
                        title: this.props.title,
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        self: this.props.self,
                        premiere: this.props.premiere,
                        eventType: this.props.eventType
                    }), e, t, p.createElement(L, {
                        description: this.props.description
                    }))
                }, t = m.__decorate([Object(y.c)("EventLandingBody", {
                    autoReportInteractive: !0
                })], t)
            }(p.Component),
            H = n("5GFz"),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = new Date(this.props.startAt);
                    return p.createElement(C.A, {
                        row: !0
                    }, p.createElement(C.P, {
                        flexShrink: 0
                    }, p.createElement(C.C, {
                        size: C.D.Size32,
                        aspect: C.k.Aspect16x9,
                        imageSrc: this.props.imageURL,
                        imageAlt: "" !== this.props.imageURL ? this.props.title : ""
                    }, p.createElement(H.a, {
                        date: e
                    }))))
                }, t = m.__decorate([Object(y.c)("EventLandingImage", {
                    autoReportInteractive: !0
                })], t)
            }(p.Component),
            M = n("F8kA"),
            W = n("NY9D"),
            z = n("FsFC"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGameBoxArt = function(e, t) {
                        return p.createElement(C.C, {
                            imageSrc: e,
                            imageAlt: t,
                            aspect: C.k.Aspect3x4,
                            size: C.D.Size4
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = new Date(this.props.startAt),
                        t = new Date(this.props.endAt),
                        n = null,
                        i = null,
                        a = null,
                        r = null;
                    if (function(e) {
                            for (var t in w)
                                if (isNaN(Number(t)) && w[t] === e) return !0;
                            return !1
                        }(this.props.eventType)) {
                        var l = void 0;
                        switch (this.props.eventType) {
                            case w.PREMIERE_EVENT:
                                l = Object(g.d)("Premiere", "EventLandingInfo");
                                break;
                            default:
                                l = Object(g.d)("Live Stream", "EventLandingInfo")
                        }
                        n = p.createElement(C.U, {
                            margin: {
                                top: 3
                            }
                        }, p.createElement(C._22, {
                            transform: C._26.Uppercase,
                            type: C._27.H5,
                            color: C.F.Alt2
                        }, Object(g.d)("Event Type", "EventLandingInfo")), p.createElement(C.U, {
                            margin: {
                                top: 1
                            }
                        }, p.createElement(C._22, {
                            fontSize: C.L.Size5
                        }, l)))
                    }
                    return this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (a = p.createElement(C.U, {
                        display: C.H.InlineFlex
                    }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), i = p.createElement(C.U, {
                        margin: {
                            top: 3
                        }
                    }, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        type: C._27.H5,
                        color: C.F.Alt2
                    }, Object(g.d)("Streaming", "EventLandingInfo")), p.createElement(M.a, {
                        to: {
                            pathname: Object(W.c)(this.props.game.displayName),
                            state: {
                                content: "event_game",
                                medium: "event_page"
                            }
                        }
                    }, p.createElement(C.U, {
                        display: C.H.Flex,
                        flexWrap: C.K.Wrap,
                        alignItems: C.c.Center,
                        margin: {
                            top: 1
                        }
                    }, a, p.createElement(C.U, {
                        display: C.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, this.props.game.displayName)))))), this.props.channel.profileImageURL && (r = p.createElement(C.U, {
                        display: C.H.InlineFlex
                    }, p.createElement(C.l, {
                        size: 40,
                        imageSrc: this.props.channel.profileImageURL,
                        imageAlt: "User profile picture"
                    }))), p.createElement(C.U, {
                        margin: {
                            x: 3
                        },
                        padding: {
                            y: 2
                        }
                    }, p.createElement(C.U, null, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        type: C._27.H5,
                        color: C.F.Alt2
                    }, Object(g.d)("Date & Time", "EventLandingInfo")), p.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, function(e, t) {
                        var n = new Date;
                        t && (n = t);
                        var i = {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        };
                        return n.getFullYear() !== e.getFullYear() && (i = m.__assign({}, i, {
                            year: "numeric"
                        })), Object(g.c)(e, i)
                    }(e))), p.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, function(e) {
                        return Object(g.h)(e, {
                            timeZoneName: "short"
                        })
                    }(e))), p.createElement(C.U, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, function(e, t) {
                        var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                        return Object(z.a)(n)
                    }(e, t)))), n, p.createElement(C.U, {
                        margin: {
                            top: 3
                        }
                    }, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        type: C._27.H5,
                        color: C.F.Alt2
                    }, Object(g.d)("Starring", "EventLandingInfo")), p.createElement(M.a, {
                        to: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "author_avatar",
                                medium: "event_page"
                            }
                        }
                    }, p.createElement(C.U, {
                        display: C.H.Flex,
                        flexWrap: C.K.Wrap,
                        alignItems: C.c.Center,
                        margin: {
                            top: 1
                        }
                    }, r, p.createElement(C.U, {
                        display: C.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size5
                    }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), i)
                }, t = m.__decorate([Object(y.c)("EventLandingInfo")], t)
            }(p.Component),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return p.createElement(C._18, {
                        background: C.m.Base
                    }, p.createElement(C._18, {
                        border: !0
                    }, p.createElement(V, {
                        title: this.props.title,
                        imageURL: this.props.imageURL,
                        startAt: this.props.startAt
                    })), p.createElement(C._18, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0
                    }, p.createElement(G, {
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        game: this.props.game,
                        eventType: this.props.eventType
                    })))
                }, t = m.__decorate([Object(y.c)("EventLandingSidePanel")], t)
            }(p.Component),
            K = n("zCIC"),
            $ = Object(y.c)("TimetableHeader", {
                autoReportInteractive: !0
            })(function(e) {
                var t = {
                        weekday: "long",
                        month: "short",
                        day: "numeric"
                    },
                    n = {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        timeZoneName: "short"
                    },
                    a = N.FUTURE;
                e.upcomingSegment && (a = i({
                    startAt: e.upcomingSegment.startAt,
                    endAt: e.upcomingSegment.endAt,
                    eventType: w.SEGMENT_EVENT
                }));
                var r = p.createElement(U.a, {
                    eventID: e.id,
                    areNotificationsEnabled: e.isFollowing,
                    channelID: "",
                    channelLogin: "",
                    eventLocation: O.a.EventDetails
                });
                e.upcomingSegment && a === N.LIVE && (r = p.createElement(C.u, {
                    linkTo: {
                        pathname: "/" + e.upcomingSegment.channel.login,
                        state: {
                            content: "call_to_action",
                            medium: "event_page"
                        }
                    }
                }, Object(g.d)("Watch Now", "EventLandingPage")));
                var l = p.createElement(C.U, {
                        display: C.H.Flex
                    }, p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, r), p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(x.a, {
                        id: e.id,
                        title: e.title,
                        channelID: "",
                        channelLogin: "",
                        eventLocation: O.a.EventDetails
                    })), e.owner && p.createElement(T.a, {
                        targetUser: e.owner,
                        eventID: e.id,
                        balloonDirection: C.q.Bottom
                    })),
                    o = p.createElement(C.U, null, Object(g.d)("To Be Announced", "EventLandingPage"));
                e.startAt && (o = a === N.LIVE ? p.createElement(C.U, {
                    display: C.H.Flex
                }, p.createElement(C.U, null, p.createElement(C.W, null)), p.createElement(C._18, {
                    margin: {
                        left: .5
                    }
                }, p.createElement(C._22, null, Object(g.d)("Happening Now", "EventLandingPage")))) : p.createElement(C.U, null, p.createElement(C._22, null, Object(g.h)(e.startAt, t))));
                var s = null;
                if (e.startAt && e.endAt) {
                    var d = Object(g.h)(e.endAt, n);
                    s = p.createElement(C.U, null, p.createElement(C._22, null, Object(g.d)("to {endDate}", {
                        endDate: d
                    }, "EventLandingPage")))
                }
                return p.createElement(C.U, {
                    margin: .5
                }, p.createElement(C._18, {
                    border: !0,
                    background: C.m.Base
                }, p.createElement(C.U, null, p.createElement("img", {
                    src: e.imageURL
                })), p.createElement(C.U, {
                    margin: 1
                }, p.createElement(C._18, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    }
                }, p.createElement(C._22, {
                    type: C._27.H3
                }, e.title)), p.createElement(C._18, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: .5
                    }
                }, o, s), p.createElement(C.U, {
                    margin: {
                        y: 1
                    }
                }, l))), p.createElement(C._18, {
                    border: !0,
                    background: C.m.Base,
                    margin: {
                        top: 1
                    }
                }, p.createElement(C.U, {
                    margin: 1
                }, p.createElement(L, {
                    description: e.description
                }))))
            }),
            J = n("cSst"),
            Y = n("IOwa"),
            Q = n("2o2f"),
            X = n("mi6k"),
            Z = "0h0m1s",
            ee = (n("9i7Z"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.onMouseEnterHandler = function() {
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
                return m.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = "?t=";
                    return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += function(e) {
                        if (e < 0) return "";
                        if (0 === e) return Z;
                        var t = e,
                            n = Math.floor(t / 3600);
                        return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
                    }(this.props.offsetSeconds)), p.createElement("div", m.__assign({
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(C._39)(this.props)), p.createElement(C.A, null, p.createElement(M.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id + e,
                            state: this.props.tracking
                        },
                        title: this.props.video.title,
                        "data-test-selector": "preview-image-link"
                    }, p.createElement(C.U, {
                        fullWidth: !0
                    }, p.createElement(C.j, {
                        overflow: !0
                    }, p.createElement("div", null, p.createElement(C._18, {
                        display: C.H.InlineFlex,
                        position: C._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: C._38.Default,
                        fontSize: C.L.Size6,
                        background: C.m.Overlay,
                        color: C.F.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, p.createElement(C._17, {
                        "data-test-selector": "video-view-count",
                        icon: C._10.GlyphViews,
                        label: Object(g.d)("views", "EventVideoCard"),
                        value: Object(g.f)(this.props.video.viewCount)
                    })), p.createElement(C._18, {
                        display: C.H.InlineFlex,
                        position: C._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: C._38.Default,
                        fontSize: C.L.Size6,
                        background: C.m.Overlay,
                        color: C.F.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, p.createElement(C._17, {
                        "data-test-selector": "video-length",
                        icon: C._10.GlyphLength,
                        label: Object(g.d)("length", "EventVideoCard"),
                        value: Object(X.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage()))))))
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = _("event-video-card__image-wrapper"),
                        n = _("event-video-card__preview-image", {
                            "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return p.createElement(C.j, {
                        overflow: !0
                    }, p.createElement("div", {
                        className: t
                    }, p.createElement(C.P, {
                        flexShrink: 0
                    }, p.createElement("figure", null, p.createElement(C.j, {
                        ratio: C.k.Aspect16x9
                    }, p.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    }))))))
                }, t
            }(p.Component)),
            te = Object(y.c)("EventVideoCard")(ee),
            ne = (n("EKvq"), Object(g.d)("Watch Now", "TimetableSegment")),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.localizedGame = function() {
                        return Object(g.d)("Game", "TimetableSegment")
                    }, t.onExpandClick = function() {
                        return t.props.onExpand(t.props.event.id)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.props.expanded ? this.expandedSegment() : this.collapsedSegment()
                }, t.prototype.collapsedSegment = function() {
                    var e = Object(g.c)(this.props.event.startAt, {
                            month: "short"
                        }),
                        t = Object(g.c)(this.props.event.startAt, {
                            day: "numeric"
                        }),
                        n = i({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt,
                            eventType: w.SEGMENT_EVENT
                        }),
                        a = null;
                    n === N.LIVE && (a = p.createElement(C.U, {
                        flexShrink: 0
                    }, p.createElement(C._0, {
                        label: Object(g.d)("Live", "EventLandingPage"),
                        type: C._1.Live
                    })));
                    var r = p.createElement(C._18, {
                        display: C.H.Flex,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, p.createElement("button", {
                        "data-test-selector": "collapsed-segment-title",
                        onClick: this.onExpandClick
                    }, p.createElement(C._22, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: C.F.Link,
                        type: C._27.H5,
                        ellipsis: !0
                    }, this.props.event.title)));
                    a && (r = p.createElement(C._18, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        alignItems: C.c.Center
                    }, a, p.createElement(C.U, {
                        display: C.H.Flex,
                        margin: {
                            left: .5
                        }
                    }, p.createElement("button", {
                        onClick: this.onExpandClick
                    }, p.createElement(C._22, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: C.F.Link,
                        type: C._27.H5,
                        ellipsis: !0
                    }, this.props.event.title)))));
                    var l = p.createElement(U.a, {
                        eventID: this.props.event.id,
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        channelID: this.props.event.channel.id,
                        channelLogin: this.props.event.channel.login,
                        eventLocation: O.a.EventDetails,
                        small: !0
                    });
                    return n === N.LIVE ? l = p.createElement(C.U, null, p.createElement(C.u, {
                        linkTo: {
                            pathname: "/" + this.props.event.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        },
                        size: C.x.Small
                    }, ne)) : n === N.PAST && (l = null), p.createElement("div", null, p.createElement(C._18, {
                        className: "timetable-segment__row",
                        border: !0,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        alignItems: C.c.Center,
                        background: C.m.Base
                    }, p.createElement(C.U, {
                        className: "timetable-segment__calendar-date",
                        display: C.H.Flex,
                        flexShrink: 0,
                        flexDirection: C.J.Column,
                        justifyContent: C.T.Center,
                        alignItems: C.c.Center
                    }, p.createElement(C._22, {
                        fontSize: C.L.Size6,
                        transform: C._26.Uppercase
                    }, e), p.createElement(C._22, {
                        fontSize: C.L.Size3
                    }, t)), p.createElement(C.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, r, p.createElement(C.U, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        alignItems: C.c.Center,
                        flexWrap: C.K.NoWrap
                    }, p.createElement(C.U, {
                        padding: {
                            y: 1
                        },
                        display: C.H.Flex
                    }, p.createElement(C.U, {
                        flexShrink: 0
                    }, p.createElement(C._22, {
                        type: C._27.H5
                    }, Object(g.h)(this.props.event.startAt, {
                        weekday: "long",
                        timezoneName: "short"
                    }))), p.createElement(C.U, {
                        margin: {
                            x: 1
                        }
                    }, "•"), p.createElement(J.a, {
                        linkTo: "/directory/game/" + encodeURIComponent(this.props.event.game.name),
                        tooltip: this.localizedGame(),
                        svgAsset: C._10.NavGames,
                        title: this.props.event.game.displayName
                    })), l))))
                }, t.prototype.expandedSegment = function() {
                    var e = {
                            backgroundImage: "url(" + this.props.event.imageURL + ")"
                        },
                        t = {
                            weekday: "long",
                            month: "long",
                            day: "numeric"
                        },
                        n = {
                            timeZoneName: "short"
                        },
                        a = i({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt,
                            eventType: w.SEGMENT_EVENT
                        }),
                        r = p.createElement(U.a, {
                            eventID: this.props.event.id,
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            channelID: this.props.event.channel.id,
                            channelLogin: this.props.event.channel.login,
                            eventLocation: O.a.EventDetails
                        });
                    a === N.LIVE ? r = p.createElement(C.u, {
                        linkTo: {
                            pathname: "/" + this.props.event.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, ne) : a === N.PAST && (r = p.createElement(C.u, {
                        disabled: !0
                    }, Object(g.d)("Past Event", "TimetableSegment")));
                    var l = p.createElement("img", {
                        src: this.props.event.game.boxArtURL,
                        height: 130,
                        width: 93
                    });
                    if (a === N.LIVE && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (l = p.createElement(C.U, {
                            position: C._3.Relative
                        }, p.createElement(C.U, {
                            position: C._3.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, p.createElement(Y.a, {
                            type: Q.a.Live
                        })), p.createElement("img", {
                            src: this.props.event.channel.stream.previewImageURL,
                            height: 120,
                            width: 190
                        }))), a === N.PAST && this.props.event.video && this.props.event.video.video) {
                        var o = {
                            content: b.PageviewContent.EventPast,
                            medium: b.PageviewMedium.EventDetails
                        };
                        l = p.createElement("div", {
                            className: "timetable-segment__video-embed"
                        }, p.createElement(te, {
                            video: this.props.event.video.video,
                            offsetSeconds: this.props.event.video.offsetSeconds,
                            tracking: o
                        }))
                    }
                    var s = p.createElement(C._22, {
                        color: C.F.Overlay
                    }, Object(g.h)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        timeZoneName: "short"
                    }));
                    return a === N.LIVE && (s = p.createElement(C.U, {
                        position: C._3.Relative
                    }, p.createElement(C._22, {
                        color: C.F.Overlay
                    }, "" + Object(g.c)(this.props.event.startAt, t)), p.createElement(C._22, {
                        color: C.F.Overlay
                    }, Object(g.d)("Happening Now until", "TimeTableSegment") + " " + Object(g.h)(this.props.event.endAt, n)))), p.createElement(C._18, {
                        border: !0,
                        elevation: 2,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        background: C.m.Base,
                        position: C._3.Relative
                    }, p.createElement(C.U, {
                        position: C._3.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: {
                            top: .5,
                            right: .5
                        }
                    }, p.createElement(C.u, {
                        overlay: !0,
                        type: C.z.Text,
                        icon: C._10.Close,
                        onClick: this.props.onDismissExpand
                    })), p.createElement(C._18, {
                        borderBottom: !0
                    }, p.createElement("div", {
                        style: e
                    }, p.createElement("div", {
                        className: "events-landing__expanded-segment-header"
                    }, p.createElement(C.U, {
                        display: C.H.Flex,
                        alignItems: C.c.End,
                        flexWrap: C.K.NoWrap,
                        padding: {
                            top: 3,
                            x: 2,
                            bottom: 1
                        }
                    }, p.createElement(C.U, {
                        className: "timetable-segment__expanded-image",
                        flexShrink: 0
                    }, l), p.createElement(C.U, {
                        flexGrow: 1,
                        margin: {
                            left: 2
                        }
                    }, p.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, p.createElement(C.U, {
                        margin: {
                            bottom: .5
                        }
                    }, p.createElement(C._22, {
                        color: C.F.Overlay,
                        type: C._27.H3
                    }, this.props.event.title)), s), p.createElement(C.U, {
                        display: C.H.Flex,
                        alignItems: C.c.Center,
                        flexWrap: C.K.NoWrap,
                        justifyContent: C.T.Between
                    }, p.createElement(J.a, {
                        linkTo: "/directory/game/" + encodeURIComponent(this.props.event.game.name),
                        tooltip: this.localizedGame(),
                        svgAsset: C._10.NavGames,
                        title: this.props.event.game.displayName
                    }), p.createElement(C.U, {
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        flexShrink: 0
                    }, p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, r), p.createElement(C.U, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(x.a, {
                        id: this.props.event.id,
                        title: this.props.event.title,
                        channelID: this.props.event.channel.id,
                        channelLogin: this.props.event.channel.login,
                        eventLocation: O.a.EventDetails
                    })), p.createElement(T.a, {
                        targetUser: this.props.event.channel,
                        eventID: this.props.event.id,
                        balloonDirection: C.q.BottomRight,
                        tailOffset: 10
                    })))))))), p.createElement(C.U, {
                        margin: 2
                    }, p.createElement(L, {
                        description: this.props.event.description
                    })))
                }, t
            }(p.PureComponent),
            ae = Object(y.c)("TimetableSegment", {
                autoReportInteractive: !0
            })(ie),
            re = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.unexpand = function() {
                        n.setState({
                            expandedEvent: null
                        })
                    }, n.setExpanded = function(e) {
                        n.setState({
                            expandedEvent: e
                        })
                    }, n.loadPrevious = function() {
                        n.props.loadMore(!0)
                    }, n.state = {
                        expandedEvent: n.props.focusedSegmentID || null
                    }, n
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.segments.map(function(t) {
                            return p.createElement(ae, {
                                key: t.id,
                                event: t,
                                expanded: t.id === e.state.expandedEvent,
                                onDismissExpand: e.unexpand,
                                onExpand: e.setExpanded
                            })
                        }),
                        n = null;
                    return this.props.hasPreviousPage && (n = p.createElement(C.U, {
                        fullWidth: !0,
                        display: C.H.Flex,
                        justifyContent: C.T.Center
                    }, p.createElement(C.u, {
                        type: C.z.Text,
                        icon: C._10.GlyphArrUp,
                        onClick: this.loadPrevious
                    }, Object(g.d)("Load Earlier Events", "TimetableSchedule")))), p.createElement(C.U, {
                        className: "events-landing__main-col",
                        position: C._3.Relative,
                        margin: {
                            left: 3
                        }
                    }, p.createElement(C._18, {
                        display: C.H.Flex,
                        justifyContent: C.T.Between,
                        margin: {
                            y: 1
                        },
                        padding: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, p.createElement(C._22, {
                        transform: C._26.Uppercase,
                        color: C.F.Alt2,
                        type: C._27.H5
                    }, Object(g.d)("Schedule", "TimetableSchedule"))), p.createElement(C.U, null, n, t, p.createElement(K.a, {
                        enabled: this.props.hasNextPage,
                        loadMore: this.props.loadMore
                    })))
                }, t
            }(p.PureComponent),
            le = Object(y.c)("TimetableSchedule", {
                autoReportInteractive: !0
            })(re),
            oe = (n("ynGC"), Object(y.c)("TimeablePageComponent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = null;
                if (e.event.upcomingChildren && e.event.upcomingChildren.length > 0)
                    for (var n = new Date, i = 0, a = e.event.upcomingChildren; i < a.length; i++) {
                        var r = a[i];
                        if (r.endAt > n) {
                            t = r;
                            break
                        }
                    }
                return p.createElement(C.U, {
                    display: C.H.Flex,
                    justifyContent: C.T.Center,
                    margin: {
                        top: 3
                    }
                }, p.createElement(C.U, {
                    className: "events-landing__info-col"
                }, p.createElement(K.c, null, p.createElement($, {
                    id: e.event.id,
                    title: e.event.title,
                    description: e.event.description,
                    startAt: e.event.startAt,
                    endAt: e.event.endAt,
                    imageURL: e.event.imageURL,
                    thumbImageURL: e.event.thumbImageURL,
                    owner: e.event.owner,
                    isFollowing: e.event.self.isFollowing,
                    upcomingSegment: t
                }))), p.createElement(le, {
                    parentID: e.event.id,
                    segments: e.event.deepLinkedChildren || e.event.upcomingChildren,
                    hasPreviousPage: e.event.hasPreviousPage,
                    hasNextPage: e.event.hasNextPage,
                    focusedSegmentID: e.event.deepLinkedChildren && e.event.deepLinkedChildren.length > 0 && e.event.deepLinkedChildren[0].id || t && t.id,
                    loadMore: e.loadMore
                }))
            })),
            se = n("DP4t"),
            de = (n("Cb/j"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToVideo = function(e) {
                        t.props.history.push("/" + e)
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return this.loadingSpinner();
                    if (this.props.data.error || !this.props.data.loading && !this.props.data.event) return this.errorPage();
                    if (d(this.props.data.event)) {
                        if (!this.props.data.event.parent) return this.errorPage();
                        return (e = r(this.props.data.event.parent)) ? p.createElement(oe, {
                            event: e,
                            loadMore: this.props.loadMore
                        }) : this.errorPage()
                    }
                    if (s(this.props.data.event)) {
                        var e;
                        return (e = r(this.props.data.event)) ? p.createElement(oe, {
                            event: e,
                            loadMore: this.props.loadMore
                        }) : this.errorPage()
                    }
                    var t = this.cleanEvent(this.props.data.event);
                    return t ? p.createElement(C.U, {
                        position: C._3.Relative
                    }, p.createElement(E.a, null, p.createElement(S.a, {
                        currentPage: S.b.Events,
                        channelLogin: t.channel.login
                    })), p.createElement(C.U, {
                        display: C.H.Flex,
                        flexWrap: C.K.NoWrap,
                        margin: {
                            left: 3,
                            top: 3,
                            right: 3
                        },
                        className: "event-landing-page__wrapper"
                    }, p.createElement(C.U, {
                        flexShrink: 0,
                        flexGrow: 0,
                        margin: {
                            right: 3
                        }
                    }, p.createElement(q, {
                        title: t.title,
                        imageURL: t.imageURL,
                        startAt: t.startAt,
                        endAt: t.endAt,
                        channel: t.channel,
                        game: t.game,
                        eventType: t.eventType
                    })), p.createElement(C.U, {
                        flexGrow: 1
                    }, p.createElement(j, {
                        id: t.id,
                        title: t.title,
                        description: t.description,
                        startAt: t.startAt,
                        endAt: t.endAt,
                        channel: t.channel,
                        self: t.self,
                        eventType: t.eventType,
                        premiere: t.premiere,
                        goToVideo: this.goToVideo
                    })))) : this.errorPage()
                }, t.prototype.errorPage = function() {
                    return p.createElement(v.a, {
                        message: Object(g.d)("Error loading data.", "EventLandingPage")
                    })
                }, t.prototype.loadingSpinner = function() {
                    return p.createElement(C.U, {
                        margin: {
                            top: 3
                        }
                    }, p.createElement(C.Y, {
                        fillContent: !0
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && g.n.setPageTitle(this.props.data.event.title))
                }, t.prototype.cleanEvent = function(e) {
                    if (s(e) || d(e)) return null;
                    var t = null;
                    return e && "PremiereEvent" === e.__typename && (t = e.premiere), e && e.channel && e.game && e.channel.id && e.channel.login ? {
                        id: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        description: e.description,
                        startAt: e.startAt,
                        endAt: e.endAt,
                        channel: {
                            id: e.channel.id,
                            login: e.channel.login,
                            displayName: e.channel.displayName || e.channel.login,
                            profileImageURL: e.channel.profileImageURL || ""
                        },
                        game: {
                            displayName: e.game.displayName,
                            boxArtURL: e.game.boxArtURL || ""
                        },
                        eventType: e.__typename,
                        premiere: t,
                        self: {
                            isFollowing: e.self && e.self.isFollowing || !1
                        }
                    } : null
                }, t = m.__decorate([Object(h.a)(se, {
                    options: function(e) {
                        return {
                            variables: {
                                eventName: e.match.params.eventName,
                                endsAfter: (new Date).toISOString(),
                                afterLimit: 10,
                                afterCursor: null
                            }
                        }
                    },
                    props: function(e) {
                        return m.__assign({}, e, {
                            loadMore: function(t) {
                                var n = null;
                                if (s(e.data.event)) {
                                    n = (i = c(e, "data.event.upcomingChildren.edges")) && i.length > 0 && i[t ? 0 : i.length - 1].cursor || null
                                } else {
                                    if (!d(e.data.event)) return;
                                    var i;
                                    n = (i = c(e, "data.event.parent.deepLinkedChildren.edges")) && i.length > 0 && i[t ? 0 : i.length - 1].cursor || null
                                }
                                var a = {
                                    eventName: e.data.event.id,
                                    afterLimit: t ? null : 10,
                                    afterCursor: t ? null : n,
                                    beforeLimit: t ? 5 : null,
                                    beforeCursor: t ? n : null
                                };
                                return e.data.fetchMore({
                                    query: se,
                                    variables: m.__assign({}, a, {
                                        endsAfter: d(e.data.event) ? (new Date).toISOString() : null
                                    }),
                                    updateQuery: function(e, n) {
                                        var i = n.fetchMoreResult,
                                            a = t ? i.event : e.event,
                                            r = t ? e.event : i.event;
                                        return s(a) && s(r) ? {
                                            event: function(e, t) {
                                                var n = e && e.upcomingChildren && e.upcomingChildren.edges || [];
                                                t && t.upcomingChildren && t.upcomingChildren.edges && (n = n.concat(t.upcomingChildren.edges));
                                                var i = Object.assign({}, e.upcomingChildren, {
                                                    edges: n
                                                });
                                                return m.__assign({}, e, {
                                                    upcomingChildren: i
                                                })
                                            }(a, r)
                                        } : d(a) && d(r) ? {
                                            event: o(a, r)
                                        } : e
                                    }
                                })
                            }
                        })
                    }
                }), Object(y.c)("EventLandingPage", {
                    destination: k.a.EventDetails
                }), Object(f.a)({
                    location: b.PageviewLocation.EventDetails,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    }
                })], t)
            }(p.Component));
        n.d(t, "EventLandingPage", function() {
            return de
        })
    },
    OFFm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            l = n("f2i/"),
            o = n("Aj/L"),
            s = n("TToO"),
            d = n("U7vG"),
            c = n("BhyV"),
            u = n("6sO2"),
            m = n("oIkB"),
            p = n("MQiv"),
            g = n("Odds"),
            v = n("Ru53"),
            h = n("9SRT"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleButton = function(e) {
                        return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Remind Me", "FollowEvent"),
                        t = Object(u.d)("Reminder Set", "FollowEvent");
                    if (this.props.small) {
                        var n = e,
                            i = g._10.Heart;
                        return this.props.areNotificationsEnabled && (n = t, i = g._10.FollowCheck), d.createElement(g._30, {
                            label: n
                        }, d.createElement(g.v, {
                            size: g.x.Default,
                            icon: i,
                            onClick: this.handleButton,
                            ariaLabel: n
                        }))
                    }
                    return d.createElement(g.u, {
                        type: this.props.areNotificationsEnabled ? g.z.Success : g.z.Default,
                        onClick: this.handleButton,
                        icon: this.props.areNotificationsEnabled ? g._10.FollowCheck : g._10.Heart,
                        ariaLabel: this.props.areNotificationsEnabled ? t : e
                    }, this.props.areNotificationsEnabled ? t : e)
                }, t.prototype.toggleFollowing = function() {
                    if (!this.props.isLoggedIn) return this.props.login();
                    if (this.props.areNotificationsEnabled) {
                        var e = s.__assign({}, Object(m.a)({
                            eventID: this.props.eventID
                        }), {
                            optimisticResponse: {
                                unfollowEvent: {
                                    __typename: "UnfollowEventPayload",
                                    event: {
                                        __typename: "Event",
                                        id: this.props.eventID,
                                        self: {
                                            __typename: "EventSelfConnection",
                                            isFollowing: !1
                                        }
                                    }
                                }
                            }
                        });
                        this.props.unfollowEvent(e)
                    } else {
                        e = s.__assign({}, Object(m.a)({
                            eventID: this.props.eventID
                        }), {
                            optimisticResponse: {
                                followEvent: {
                                    __typename: "FollowEventPayload",
                                    event: {
                                        __typename: "Event",
                                        id: this.props.eventID,
                                        self: {
                                            __typename: "EventSelfConnection",
                                            isFollowing: !0
                                        }
                                    }
                                }
                            }
                        });
                        this.props.followEvent(e)
                    }
                    Object(p.d)({
                        action: this.props.areNotificationsEnabled ? p.b.EmailReminderOff : p.b.EmailReminderOn,
                        channelLogin: this.props.channelLogin,
                        channelID: this.props.channelID,
                        eventID: this.props.eventID,
                        location: this.props.eventLocation
                    })
                }, t
            }(d.PureComponent),
            k = Object(c.compose)(Object(c.graphql)(v, {
                name: "followEvent"
            }), Object(c.graphql)(h, {
                name: "unfollowEvent"
            }))(f),
            b = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(o.d)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(l.f)(r.a.EventFollowButton)
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
                                    value: "bannerImageURL"
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
    PPK2: function(e, t) {},
    QdVH: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            l = n("bhVC"),
            o = n("+Znq"),
            s = n("MQiv"),
            d = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareClicked = function(e) {
                        var n = "";
                        switch (e) {
                            case l.b.Twitter:
                                n = "twitter";
                                break;
                            case l.b.Facebook:
                                n = "facebook";
                                break;
                            case l.b.Reddit:
                                n = "reddit";
                                break;
                            case l.b.VKontakte:
                                n = "vk";
                                break;
                            default:
                                n = "unknown"
                        }
                        Object(s.c)({
                            shareMedium: n,
                            eventID: t.props.id,
                            channelLogin: t.props.channelLogin,
                            channelID: t.props.channelID,
                            location: t.props.eventLocation
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                        return "https://www.twitch.tv/events/" + e
                    }(this.props.id);
                    return a.createElement(o.a, null, a.createElement(d.u, {
                        dropdown: !0,
                        type: d.z.Hollow
                    }, Object(r.d)("Share", "ShareEvent")), a.createElement(d.p, {
                        direction: this.props.balloonDirection
                    }, a.createElement(d.U, {
                        padding: 1
                    }, a.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Row,
                        flexWrap: d.K.NoWrap,
                        justifyContent: d.T.Center
                    }, a.createElement(l.a, {
                        type: l.b.Twitter,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(l.a, {
                        type: l.b.Facebook,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(l.a, {
                        type: l.b.Reddit,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(l.a, {
                        type: l.b.VKontakte,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(l.a, {
                        type: l.b.Copy,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "event"
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
                                                    value: "isFollowing"
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
                end: 123
            }
        };
        n.loc.source = {
            body: "mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\nid\nself {\nisFollowing\n}\n}\n}\n}",
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
        var i, a = n("TToO"),
            r = n("HW6M"),
            l = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            d = n("hdYS"),
            c = n("DtWM"),
            u = n("+Znq"),
            m = n("7vx8"),
            p = n("czpb"),
            g = n("RH2O"),
            v = n("Aj/L"),
            h = n("N221"),
            f = n("jF7o"),
            k = n("iMOk"),
            b = n("WVx7"),
            S = n("ySfT"),
            y = n("ZJYd"),
            E = n("/LBW"),
            _ = n("Odds"),
            N = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(y.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: E.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = l.createElement(_.U, null, l.createElement(_.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: _._23.Center
                    }, l.createElement(_._22, {
                        type: _._27.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), l.createElement(_.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, l.createElement(_._22, {
                        type: _._27.Span,
                        color: _.F.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), l.createElement(_.P, {
                        margin: {
                            left: .5
                        }
                    }, l.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), l.createElement(_.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: _._23.Center
                    }, l.createElement(_.P, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_._22, {
                        type: _._27.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), l.createElement(_.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? l.createElement(_.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, l.createElement(_.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, l.createElement(_.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: _.z.Text
                    }, l.createElement(_._9, {
                        asset: _._10.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), l.createElement(_.U, {
                        textAlign: _._23.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, l.createElement(_.e, {
                        type: _.i.SlideInLeft,
                        duration: _.g.Long,
                        enabled: !0
                    }, l.createElement(S.a, null)))) : this.props.animateFirstTimeUserIntro ? l.createElement(_.P, {
                        className: "bits-first-time-user-prompt"
                    }, l.createElement(_.e, {
                        type: _.i.SlideInRight,
                        duration: _.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : l.createElement(_.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(l.Component)),
            w = n("jxGs"),
            C = n("bkpq"),
            A = n("CSlQ"),
            F = n("annQ"),
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
                            location: E.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(E.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(f.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return l.createElement(_._18, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._23.Center,
                        padding: {
                            y: 5
                        }
                    }, l.createElement(_.Y, {
                        delay: 0
                    }), l.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(_._22, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(y.c)(e)
                        });
                        t && t.type === w.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = l.createElement(N, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = l.createElement(_._18, {
                        borderBottom: !0,
                        textAlign: _._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(_._22, {
                        type: _._27.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: l.createElement(k.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = l.createElement(_._18, {
                        borderBottom: !0,
                        textAlign: _._23.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(_._22, {
                        type: _._27.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: l.createElement(k.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = l.createElement(b.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: E.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), l.createElement(h.b, {
                        className: "get-bits-button-content"
                    }, l.createElement(_.U, null, n, e, i))
                }, t = a.__decorate([Object(A.c)("GetBitsButtonContent"), Object(m.a)(F, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(C.a)(e.data.user.cheer.emotes), n = e.data.user.id);
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
            }(l.Component)),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(E.h)({
                            actionName: E.a.BuyMain,
                            location: E.b.GetBitsButton,
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
                    return this.props.channelLogin && (e = l.createElement(I, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), l.createElement(u.a, {
                        onToggle: this.toggleBalloon
                    }, l.createElement(_.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), l.createElement(_.p, {
                        direction: _.q.BottomRight,
                        size: _.r.Large
                    }, e))
                }, t = a.__decorate([Object(A.c)("GetBitsButton")], t)
            }(l.Component),
            U = Object(g.a)(function(e) {
                return {
                    isLoggedIn: Object(v.d)(e)
                }
            })(L),
            T = n("E9Qg"),
            x = (n("4Jix"), n("Ojfd")),
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        i = this.props.data;
                    return i && i.loading || !this.props.firstPageLoaded ? e = l.createElement(_._2, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    }) : (i && i.user && i.user.bannerImageURL ? t = {
                        backgroundImage: "url(" + i.user.bannerImageURL + ")"
                    } : (n["channel-banner--default"] = !0, t = {
                        backgroundImage: "url(" + T + ")"
                    }), e = l.createElement("div", {
                        className: "channel-banner__image",
                        style: t
                    })), l.createElement("div", {
                        className: r("channel-banner", n),
                        "data-test-selector": "channel-banner",
                        onTransitionEnd: this.props.onTransitionEnd
                    }, l.createElement(_.P, {
                        fullWidth: !0
                    }, e))
                }, t
            }(l.Component),
            D = Object(m.a)(x, {
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
            })(O),
            B = Object(g.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(D),
            P = n("2KeS"),
            R = n("V5M+"),
            j = n("J8WN"),
            H = n("+8VM"),
            V = n("HZww"),
            M = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return l.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(s.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, l.createElement(_._18, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: _._3.Relative,
                    className: r(t)
                }, l.createElement("img", {
                    alt: Object(s.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(i || (i = {}));
        var W;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(W || (W = {}));
        var z;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(z || (z = {}));
        n("AL3x");
        var G = n("nmDn"),
            q = [{
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
            K = ["image/*"],
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = s.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
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
                                statusMessage: z.BadSizeError
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
                            statusMessage: z.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, l, o = this;
                            return a.__generator(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: z.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: z.Uploading
                                        }), d.label = 1;
                                    case 1:
                                        return d.trys.push([1, 3, , 4]), [4, function(e, t, n, i) {
                                            return a.__awaiter(this, void 0, void 0, function() {
                                                var r;
                                                return a.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, fetch(s.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + s.a.authClientID + "&api_version=" + s.a.defaultAPIVersion + "&image_type=" + n + "&format=" + i, {
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
                                        return t = d.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return l = d.sent(), this.logger.error(l, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: z.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = s.j.subscribe({
                                            topic: Object(V.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    ! function(e, t) {
                                                        if (!t) throw new Error("Attempted to upload an empty file object.");
                                                        var n = decodeURI(e);
                                                        fetch(n, {
                                                            method: "PUT",
                                                            body: new Blob([t])
                                                        })
                                                    }(n, o.currentImage)
                                                } catch (e) {
                                                    o.logger.error(e, "Profile Image upload failed."), o.unsubscribe(), o.setState({
                                                        statusMessage: z.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                o.timeoutHandle = setTimeout(function() {
                                                    return o.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                o.setState({
                                                    statusMessage: z.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === r) {
                                                    clearTimeout(o.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === W.Success ? z.Success : e.status === W.BadSize ? z.BadSizeError : e.status === W.NonImage ? z.NonImageError : e.status === W.WrongFormat ? z.WrongFormatError : z.UnexpectedError, o.unsubscribe && o.unsubscribe(), o.setState({
                                                        statusMessage: t
                                                    }), o.state.statusMessage === z.Success ? o.setState({
                                                        profileUpdated: !0
                                                    }) : (o.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), o.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: q[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: z.TimeoutError
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
                        t = q.map(function(t, n) {
                            return l.createElement(M, {
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
                        n = l.createElement(_.U, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: _._3.Relative
                        }, l.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = l.createElement(_.U, {
                        className: "profile-edit__upload-info"
                    }, l.createElement(_.U, null, l.createElement(_._9, {
                        asset: _._10.Plus,
                        type: _._11.Alt2,
                        height: 20,
                        width: 20
                    })), l.createElement(_._22, {
                        type: _._27.H3,
                        color: _.F.Alt2,
                        fontSize: _.L.Size4
                    }, Object(s.d)("Upload a Photo", "Profile Edit"))));
                    var o = null;
                    this.props.showCloser && (o = l.createElement(H.a, null));
                    var d = null;
                    if (null !== this.state.statusMessage) {
                        var c = function(e) {
                                switch (e) {
                                    case z.Success:
                                        return {
                                            message: Object(s.d)("Success!", "Profile Edit"),
                                            type: _._1.Success
                                        };
                                    case z.UnexpectedError:
                                        return {
                                            message: Object(s.d)("Unexpected error, please try again.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    case z.BadSizeError:
                                        return {
                                            message: Object(s.d)("Image might exceed 10MB.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    case z.NonImageError:
                                        return {
                                            message: Object(s.d)("You must upload an image.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    case z.WrongFormatError:
                                        return {
                                            message: Object(s.d)("You must select a valid image type.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    case z.TimeoutError:
                                        return {
                                            message: Object(s.d)("Upload timed-out. Please try again.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    case z.Uploading:
                                        return {
                                            message: Object(s.d)("Uploading....", "Profile Edit"),
                                            type: _._1.Brand
                                        };
                                    case z.ImageNotSelected:
                                        return {
                                            message: Object(s.d)("Select a image first.", "Profile Edit"),
                                            type: _._1.Alert
                                        };
                                    default:
                                        return {
                                            message: Object(s.d)("Please try again.", "Profile Edit"),
                                            type: _._1.Alert
                                        }
                                }
                            }(this.state.statusMessage),
                            u = c.message,
                            m = c.type;
                        d = l.createElement(_._0, {
                            label: u,
                            type: m
                        })
                    }
                    var p = this.props.login;
                    return this.props.displayName && (p = this.props.displayName), l.createElement(_.U, {
                        className: "profile-edit",
                        position: _._3.Relative,
                        fullHeight: !0
                    }, l.createElement(_._18, {
                        className: "profile-edit__background-container",
                        background: _.m.Base,
                        fullWidth: !0
                    }, l.createElement(_.U, {
                        padding: 2,
                        display: _.H.InlineBlock,
                        position: _._3.Relative,
                        textAlign: _._23.Center,
                        fullWidth: !0
                    }, l.createElement(_._18, {
                        textAlign: _._23.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_._22, {
                        type: _._27.H3,
                        color: _.F.Alt2,
                        fontSize: _.L.Size4
                    }, Object(s.d)("Edit Profile Picture for {userName}", {
                        userName: p
                    }, "Profile Edit"), " ")), l.createElement(_.U, {
                        className: "profile-edit__upload-container",
                        display: _.H.InlineBlock,
                        position: _._3.Relative,
                        textAlign: _._23.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_.U, {
                        className: "profile-edit__upload",
                        display: _.H.InlineBlock,
                        position: _._3.Relative,
                        textAlign: _._23.Center
                    }, l.createElement(j.a, {
                        allowedFileTypes: K,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), l.createElement(_._18, {
                        "data-test-selector": "status-message",
                        fontSize: _.L.Size4,
                        position: _._3.Relative,
                        textAlign: _._23.Center,
                        className: "profile-edit__status-message"
                    }, d), l.createElement(_._18, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(_.U, {
                        textAlign: _._23.Left,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(_._22, {
                        type: _._27.H3,
                        color: _.F.Alt2,
                        fontSize: _.L.Size5
                    }, Object(s.d)("Or select one of these", "Profile Edit"))), l.createElement(_._33, {
                        childWidth: _._34.ExtraSmall,
                        gutterSize: _._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), l.createElement(_.U, {
                        display: _.H.Flex,
                        justifyContent: _.T.Center
                    }, l.createElement(_.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: _.x.Large
                    }, Object(s.d)("Update", "Profile Edit"))))), o)
                }, t.prototype.setDefaultAvatar = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return a.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: z.Uploading
                                    }), e = z.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                        if (void 0 === n) throw new Error("No default avatar selected.");
                                        return fetch(s.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + s.a.authClientID + "&api_version=" + s.a.defaultAPIVersion, {
                                            method: "PUT",
                                            headers: {
                                                Authorization: "OAuth " + t,
                                                "Content-Type": "application/json",
                                                Accept: "application/json"
                                            },
                                            body: JSON.stringify({
                                                default_profile_image: q[n].id
                                            })
                                        })
                                    }(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = z.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === z.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = a.__decorate([Object(m.a)(G, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            J = Object(A.c)("Profile Edit")($),
            Y = Object(g.a)(function(e) {
                return {
                    authToken: Object(v.a)(e)
                }
            }, function(e, t) {
                return Object(P.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(R.c)()
                    }
                }, e)
            })(J),
            Q = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(Y, {
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
                    return l.createElement(_.U, {
                        className: "edit-profile-overlay",
                        display: _.H.Flex,
                        justifyContent: _.T.Center,
                        alignContent: _.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, l.createElement(_.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: _._10.Edit,
                        onClick: this.openModal
                    }))
                }, t = a.__decorate([Object(A.c)("EditProfileOverlay")], t)
            }(l.Component)),
            X = Object(g.a)(null, function(e) {
                return Object(P.bindActionCreators)({
                    showModal: R.d
                }, e)
            })(Q),
            Z = n("70dR"),
            ee = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return te
        }), n.d(t, "a", function() {
            return oe
        });
        var te, ne = "channel-header__edit-profile-overlay",
            ie = "user-channel-header-item",
            ae = "channel-header__verified-badge",
            re = "channel-header__live-indicator",
            le = "channel-header__channel-link";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(te || (te = {}));
        var oe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = l.createElement(_._30, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: _._32.Right
                }, l.createElement(_.U, {
                    className: "channel-header__verified",
                    "data-target": ae,
                    display: _.H.Flex,
                    alignItems: _.c.Center,
                    margin: {
                        left: 1
                    }
                }, l.createElement(_._9, {
                    asset: _._10.Verified
                }))), t.liveIndicatorElement = l.createElement(_.U, {
                    margin: {
                        left: 1
                    },
                    "data-target": re
                }, l.createElement(_._30, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: _._32.Right
                }, l.createElement(_.W, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? l.createElement(_._18, {
                        className: ne,
                        background: _.m.Overlay,
                        position: _._3.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: _.H.InlineFlex,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center
                    }, l.createElement(X, {
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
                    m = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && !this.isActiveTab(te.Channel),
                    g = this.createChannelLinks(n, i, a),
                    v = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(te.Channel)
                    },
                    h = null;
                this.canRenderBitsButton() && (h = l.createElement(_.U, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(U, {
                    channelLogin: this.props.channelLogin
                })));
                var f, k = l.createElement(_.U, {
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap,
                    alignItems: _.c.Center,
                    flexShrink: 0
                }, l.createElement(_.U, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: _.H.Flex,
                    flexShrink: 0,
                    alignItems: _.c.Stretch
                }, l.createElement(_.U, {
                    position: _._3.Relative
                }, l.createElement(_.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? l.createElement(_._22, {
                    type: _._27.H5
                }, e) : l.createElement(_.U, {
                    alignItems: _.c.Center
                }, l.createElement(_._2, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                f = this.isActiveTab(te.Channel) ? l.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": le,
                    "data-a-target": ie
                }, k) : this.props.data && this.props.data.user && this.props.data.user.login ? l.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": le,
                    "data-a-target": ie
                }, k) : k;
                var b = this.state.bannerHidden ? _.H.HideAccessible : _.H.Block,
                    S = null;
                return this.isActiveTab(te.Channel) && (S = l.createElement(_.U, {
                    display: b
                }, l.createElement(B, {
                    channelLogin: this.props.channelLogin,
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), l.createElement(_.U, {
                    className: "channel-header",
                    flexShrink: 0
                }, S, l.createElement(_.U, {
                    display: _.H.Flex,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, l.createElement(_.U, {
                    display: _.H.Flex,
                    alignItems: _.c.Stretch,
                    flexShrink: 0,
                    flexWrap: _.K.NoWrap,
                    "data-target": "channel-header-left"
                }, l.createElement(_.P, {
                    className: r(v),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap,
                    alignItems: _.c.Center,
                    flexShrink: 0
                }, f), this.renderTabs(g), l.createElement(_.U, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: _.d.Center,
                    "data-target": "channel-header-button"
                }, l.createElement(u.a, {
                    alwaysMountBalloonContent: !0
                }, l.createElement(_.v, {
                    icon: _._10.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), l.createElement(_.p, {
                    direction: _.q.Bottom,
                    noTail: !0
                }, l.createElement(_.U, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(g)))))), l.createElement(_.U, {
                    display: _.H.Flex,
                    flexWrap: _.K.NoWrap,
                    flexShrink: 0,
                    alignItems: _.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, l.createElement(_.U, {
                    className: "channel-header__follow-button",
                    display: _.H.Flex,
                    alignItems: _.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, l.createElement(d.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), l.createElement(_.U, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(Z.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), h)), l.createElement(c.a, {
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
                    var n = e.count ? l.createElement(_.U, {
                            className: "channel-header__item-count",
                            display: _.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(_._22, {
                            type: _._27.Span,
                            fontSize: _.L.Size5
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.target = Object(p.b)() ? "_blank" : ""), l.createElement(_.P, {
                        key: "channel-header__item--" + e.label,
                        alignItems: _.c.Center,
                        flexShrink: 0
                    }, l.createElement(o.a, a.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, r, {
                        to: i,
                        disabled: "#" === i,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), l.createElement(_.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: _.H.Flex
                    }, l.createElement(_._22, {
                        type: _._27.Span,
                        fontSize: _.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? l.createElement(_.U, {
                            className: "channel-header__item-count",
                            display: _.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(_._22, {
                            type: _._27.Span
                        }, e.count)) : null,
                        i = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), l.createElement(_.U, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, l.createElement(_.S, a.__assign({
                        linkTo: i,
                        disabled: "#" === i
                    }, r), l.createElement(_.U, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: _.H.Flex
                    }, l.createElement(_._22, {
                        type: _._27.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(te.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !0,
                    isSelected: this.isActiveTab(te.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: this.isActiveTab(te.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return te[this.props.currentPage] === te[e]
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
                            for (var l = n.length - 1; l >= 0; l--) {
                                if (!(s = n[l]).classList.contains("channel-header__item--hide")) {
                                    var o = this.getWidth(s);
                                    if (s.classList.add("channel-header__item--hide"), i[l].classList.remove("channel-header__item--hide"), (r -= o.width) <= 0) break
                                }
                            } else
                                for (l = 0; l < n.length; l++) {
                                    var s;
                                    if ((s = n[l]).classList.contains("channel-header__item--hide")) {
                                        s.classList.remove("channel-header__item--hide");
                                        if ((o = this.getWidth(s)).width >= Math.abs(r)) {
                                            s.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        s.classList.remove("channel-header__item--hide"), i[l].classList.add("channel-header__item--hide"), r += o.width
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== te.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = a.__decorate([Object(m.a)(ee, {
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
            }), Object(A.c)("ChannelHeader")], t)
        }(l.Component)
    },
    WClm: function(e, t) {},
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return u.__generator(this, function(l) {
                    switch (l.label) {
                        case 0:
                            if (t = g.b.get("bits_truex_partner_hash", ""), !(n = g.b.get("bits_truex_api_url", "")) || !t) return g.i.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                            l.label = 1;
                        case 1:
                            return l.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = l.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = l.sent()) && Array.isArray(a) && a.length) return [2, k.Available];
                            l.label = 4;
                        case 4:
                            return [2, k.Unavailable];
                        case 5:
                            return r = l.sent(), g.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, k.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function a(e) {
            return {
                adModalOpen: Object(d.b)(e, N),
                isLoggedIn: Object(c.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(s.d)(N, t))
                }
            }
        }
        var l, o = n("RH2O"),
            s = n("V5M+"),
            d = n("Iw4B"),
            c = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            g = n("6sO2"),
            v = n("+8VM"),
            h = n("7vx8"),
            f = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(l || (l = {}));
        var k, b = n("4JjK"),
            S = n("/LBW"),
            y = n("Odds"),
            E = n("zzpv"),
            _ = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, r;
                            return u.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case b.a.Ready:
                                                return [3, 1];
                                            case b.a.RequestAd:
                                                return [3, 2];
                                            case b.a.Dimensions:
                                                return [3, 3];
                                            case b.a.OnStart:
                                                return [3, 4];
                                            case b.a.OnCredit:
                                                return [3, 5];
                                            case b.a.OnClose:
                                            case b.a.OnFinish:
                                            case b.a.LimitReached:
                                            case b.a.Adblock:
                                            case b.a.OnError:
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
                                            Object(S.g)({
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
                                            Object(S.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return o.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(f.a)({
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
                                        return a = o.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = o.sent(), g.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(l.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === b.a.LimitReached ? this.props.onError(l.LimitReached) : t.type === b.a.Adblock ? this.props.onError(l.Adblock) : t.type === b.a.OnError ? this.props.onError(l.Unknown) : this.hasAwarded || this.props.onError(l.ExitEarly)), this.props.closeModal(), [3, 10];
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
                    return m.createElement(y._18, {
                        background: y.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(v.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(h.a)(E, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            N = Object(o.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: s.c
                }, e)
            })(_),
            w = n("HW6M"),
            C = n("jF7o"),
            A = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(k || (k = {}));
        var F, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(g.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(y._18, {
                    className: "bits-buy-card__offer-row",
                    display: y.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: y.T.Between,
                    flexWrap: y.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(y.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(g.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(y.U, {
                    flexShrink: 0,
                    display: y.H.Flex,
                    flexDirection: y.J.Column,
                    alignItems: y.c.End
                }, m.createElement(y.u, {
                    type: y.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(g.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(y.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: y.d.Stretch,
                    textAlign: y._23.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            L = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            U = function(e) {
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
                                    return e = t.sent(), Object(S.e)({
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
                    return L.test(navigator.userAgent) ? null : m.createElement(I, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            T = n("jxGs"),
            x = n("3iBR"),
            O = n("iydZ"),
            D = n("ZJYd"),
            B = n("CFVp"),
            P = n("qe65"),
            R = (n("OLKT"), function(e) {
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
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === T.a) {
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
                    Object(D.c)(this.props.offer) ? t = m.createElement(y.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(y._22, {
                        type: y._27.Strong,
                        fontSize: y.L.Size6
                    }, Object(g.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(D.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === T.c && (t = m.createElement(y.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(y._22, {
                        type: y._27.Strong,
                        fontSize: y.L.Size6
                    }, Object(g.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(g.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(D.c)(this.props.offer) || Object(D.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(g.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? y._18 : y.U;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: y.H.Flex,
                        justifyContent: y.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: y.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(y.U, {
                        display: y.H.Flex,
                        justifyContent: y.T.Between,
                        alignItems: y.c.Center
                    }, m.createElement(y.U, {
                        flexGrow: 1
                    }, m.createElement(y._22, {
                        type: y._27.H5,
                        color: y.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(y.U, {
                        flexShrink: 0,
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.End
                    }, m.createElement(y.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(y.U, {
                        alignSelf: y.d.Stretch,
                        textAlign: y._23.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[x.f];
                    t || (t = Object(B.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(y.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(P.a, {
                            key: e.bits,
                            sources: Object(O.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            j = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var l = m.createElement(R, {
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
                        o = Object(D.d)(a),
                        s = Object(D.c)(a),
                        d = a.type === T.a;
                    s && !e.hidePromos ? t.push(l) : o && !s ? t.push(l) : d && !e.hideWateb ? i = l : d || o || n.push(l)
                }), e.fullsize ? m.createElement(y.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: y.K.NoWrap,
                    display: y.H.Flex,
                    flexDirection: y.J.Column
                }, i, t, n) : m.createElement(A.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(y.U, {
                    flexGrow: 1,
                    flexWrap: y.K.NoWrap,
                    display: y.H.Flex,
                    flexDirection: y.J.Column
                }, i, t, n))
            }),
            H = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(y._22, {
                    italic: !0,
                    type: y._27.P,
                    color: y.F.Alt
                }, Object(g.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(y._22, {
                    color: y.F.Alt
                }, Object(g.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(y._22, {
                    color: y.F.Alt
                }, Object(g.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(y._18, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(y.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(y._22, {
                    type: y._27.H4,
                    color: y.F.Alt
                }, Object(g.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            V = n("nrdj"),
            M = function(e) {
                return m.createElement(y.U, {
                    display: y.H.Flex,
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    fullWidth: !0,
                    flexWrap: y.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(V.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(y.U, {
                    display: y.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    flexWrap: y.K.NoWrap
                }, m.createElement(y._22, {
                    type: y._27.H4,
                    bold: !0
                }, Object(g.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(y.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(y._22, {
                    color: y.F.Alt2
                }, Object(g.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(g.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(y.U, {
                    display: y.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.T.Between
                }, m.createElement(y.u, {
                    onClick: e.onStartCheering
                }, Object(g.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(y.u, {
                    type: y.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(g.d)("Watch Another", "Bits--WatchAdAward"))))
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
                                    return e.sent() !== k.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(M, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            z = (n("q8Cw"), function(e) {
                var t = Object(g.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(g.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case l.Adblock:
                        i = "adserroradblock", n = Object(g.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case l.LimitReached:
                        i = "adserrorlimit", t = Object(g.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(g.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case l.ExitEarly:
                        n = Object(g.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(y.U, {
                    className: "watch-ad-error__footer",
                    display: y.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.T.Center
                }, m.createElement(y.u, {
                    onClick: e.onTryAgain
                }, Object(g.d)("Try Again", "Bits--WatchAdError")));
                return e.type === l.LimitReached && (a = m.createElement(y.U, {
                    className: "watch-ad-error__footer",
                    display: y.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.T.Between
                }, m.createElement(y.u, {
                    onClick: e.onClose
                }, Object(g.d)("Got It", "Bits--WatchAdError")), m.createElement(y.u, {
                    onClick: e.onTryAgain,
                    type: y.z.Hollow
                }, Object(g.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(y.U, {
                    padding: {
                        x: 1
                    },
                    display: y.H.Flex,
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    fullWidth: !0,
                    flexWrap: y.K.NoWrap
                }, m.createElement(y.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: x.b + "/light/static/1/" + i + ".png"
                })), m.createElement(y.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(y._22, {
                    type: y._27.H4,
                    bold: !0
                }, t)), m.createElement(y._22, {
                    color: y.F.Alt2
                }, n), a)
            }),
            G = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(F || (F = {}));
        var q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: F.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(C.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: F.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: S.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: F.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === F.Error && (t.setState({
                            wateb: F.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: y.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = w({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === S.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === S.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(y._9, {
                            asset: y._10.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(y._18, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.T.Center,
                        textAlign: y._23.Center
                    }, e), m.createElement(y.Y, {
                        delay: 0
                    }), m.createElement(y.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(y._22, {
                        italic: !0
                    }, Object(g.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(y.U, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.T.Center,
                        padding: 2,
                        textAlign: y._23.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(y._22, {
                        italic: !0
                    }, Object(g.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(y._18, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.T.Center,
                        textAlign: y._23.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === T.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        l = this.props.data.user ? this.props.data.user.id : "",
                        o = m.createElement(j, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: l,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        s = null;
                    return this.props.location === S.b.ChatTooltip && (s = m.createElement(H, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(y._18, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, s, o)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case F.Awarded:
                            return m.createElement(W, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case F.Error:
                            return m.createElement(z, {
                                type: this.state.watebError || l.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(h.a)(G, {
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
            K = Object(o.a)(a, r)(q);
        n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return K
        })
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
    ZJYd: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type === l.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== l.a && i(e) && null !== e.promotion && e.promotion.type === l.d
        }, t.e = function(e) {
            return e.type !== l.a && i(e) && null !== e.promotion && e.promotion.type === l.e
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
                var l = {
                    cheerAboveMaxBitsPerEmote: i > o.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > o.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(l).some(function(e) {
                        return l[e]
                    })) return a.__assign({
                    canSpend: !1
                }, l)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(s.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(s.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var a = n("TToO"),
            r = n("Ouuk"),
            l = n("jxGs"),
            o = n("3iBR"),
            s = n("/LBW")
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            l = (n.n(r), n("U7vG")),
            o = (n.n(l), n("F8kA")),
            s = n("6sO2"),
            d = n("SZoP"),
            c = n("mi6k"),
            u = n("CSlQ"),
            m = n("Odds"),
            p = n("a0ve"),
            g = (n.n(p), function(e) {
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
                    return null !== t && (e = l.createElement(m.U, {
                        position: m._3.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, l.createElement(m._6, {
                        size: m._7.Small,
                        value: t,
                        mask: !0
                    }))), l.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._39)(this.props)), l.createElement(m.A, null, l.createElement(m.U, {
                        fullWidth: !0
                    }, l.createElement(m.j, {
                        overflow: !0
                    }, l.createElement("div", null, l.createElement(m._18, {
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
                    }, l.createElement(m._17, {
                        "data-test-selector": "video-view-count",
                        icon: m._10.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), l.createElement(m._18, {
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
                    }, l.createElement(m._17, {
                        "data-test-selector": "video-length",
                        icon: m._10.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), l.createElement(m.B, null, l.createElement(m.U, {
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
                    return l.createElement(m.j, {
                        overflow: !0
                    }, l.createElement(o.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, l.createElement("div", {
                        className: t,
                        "data-test-selector": "preview-image-wrapper"
                    }, l.createElement(m.P, {
                        flexShrink: 0
                    }, l.createElement("figure", null, l.createElement(m.j, {
                        ratio: m.k.Aspect16x9
                    }, l.createElement("img", {
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
                    return l.createElement(m.U, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, l.createElement(o.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, l.createElement(m.P, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, l.createElement(m._30, {
                        display: m.H.Block,
                        direction: m._32.Bottom,
                        label: e.name
                    }, l.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, l.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || s.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(s.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = l.createElement(o.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return l.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, l.createElement(m.U, {
                        "data-test-selector": "video-title",
                        overflow: m.Z.Hidden,
                        position: m._3.Relative
                    }, l.createElement(m._22, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.V.Heading
                    }, l.createElement(o.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), l.createElement(m.U, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, l.createElement(m._22, {
                        type: m._27.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, l.createElement(m.P, {
                        padding: {
                            x: .5
                        }
                    }, l.createElement("span", null, "·")), t)))
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
            }(l.Component)),
            v = Object(u.c)("VideoPreviewCard")(g)
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
                var o = e.tiers.map(function(e) {
                    return i(e)
                });
                "Cheer" === e.prefix && o.push(function() {
                    var e = ["DARK", "LIGHT"],
                        t = ["static", "animated"],
                        n = [];
                    return [1, 1.5, 2, 3, 4].forEach(function(i) {
                        e.forEach(function(e) {
                            t.forEach(function(t) {
                                n.push({
                                    url: l.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: i
                                })
                            })
                        })
                    }), i({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: l.e[r.a.Yellow],
                        images: n
                    })
                }()), o.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var s = a.__assign({}, e, {
                    indexedTiers: new Map(o.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: o
                });
                t.push(s), n[s.prefix.toLowerCase()] = s
            }), {
                indexedActions: n,
                orderedActions: t
            }
        };
        var a = n("TToO"),
            r = n("I89S"),
            l = n("3iBR")
    },
    cSst: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("F8kA"),
            l = n("Odds"),
            o = function(e) {
                return a.createElement(l.U, {
                    margin: {
                        right: 1
                    },
                    display: l.H.Flex,
                    alignItems: l.c.Center
                }, a.createElement(l._30, {
                    align: l._31.Left,
                    label: e.tooltip,
                    direction: l._32.Bottom
                }, a.createElement(l.U, {
                    margin: {
                        right: .5
                    }
                }, a.createElement(l._18, {
                    display: l.H.Flex,
                    alignItems: l.c.Center,
                    color: l.F.Alt2
                }, a.createElement(l._9, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), a.createElement(l._22, {
                    fontSize: l.L.Size5,
                    ellipsis: !0
                }, a.createElement(r.a, i.__assign({
                    to: e.linkTo
                }, Object(l._39)(e), {
                    target: e.target
                }), e.title))))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return i.b.get(r.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? l + e : l + e.pathname
        }, t.b = function() {
            return !i.b.get(r.a, !1) && i.a.buildType === a.a.Production
        };
        var l = "https://www.twitch.tv"
    },
    dQj3: function(e, t, n) {
        "use strict";

        function i(e) {
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
        t.b = i, t.a = function(e, t, n) {
            var d = i(e.body.emotes),
                c = e.badges.reduce(function(e, t) {
                    return e[t.setID] = t.version, e
                }, {});
            return {
                type: l.a.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: a.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: r.a.User,
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
        var a = n("TToO"),
            r = n("6Agf"),
            l = n("qkCi"),
            o = n("l21v"),
            s = n("e1CU")
    },
    ea40: function(e, t) {},
    fHoP: function(e, t) {},
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[o.f];
                i || (i = Object(d.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(s.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === l.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(c.a, {
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
            l = n("NXs7"),
            o = n("3iBR"),
            s = n("iydZ"),
            d = n("CFVp"),
            c = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return i
        })
    },
    ioX4: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    l = r.content,
                                    o = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: l,
                                    medium: o,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return l.createElement(t, a.__assign({}, this.props))
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
                }(l.Component);
                return Object(o.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            l = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2");
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
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return l
        }), n.d(t, "c", function() {
            return o
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            l = "single_purchase",
            o = "black_friday_2017"
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
    lGVF: function(e, t) {},
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
            l = n("6sO2"),
            o = n("iydZ"),
            s = n("CFVp"),
            d = n("qe65"),
            c = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(i || (i = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(s.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === c.H.Inline || e.display === c.H.InlineFlex || e.display === c.H.InlineBlock,
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
                var g = e.formattedNumber ? Object(l.e)(e.amount) : e.amount;
                m = r.createElement(c.P, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? c._23.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, g))
            }
            var v = a("cheermote-for-amount__cheer-image", {
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
                h = r.createElement(d.a, {
                    className: v,
                    sources: Object(o.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (h = null), r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: e.display
            }, h, m)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        })
    },
    q8Cw: function(e, t) {},
    qdmu: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PremiereLanding"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PremiereEvent"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "endAt"
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                            value: "premiere"
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
                                    value: "status"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                                directives: [],
                                                selectionSet: null
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
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "isFollowing"
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
                end: 576
            }
        };
        n.loc.source = {
            body: "fragment PremiereLanding on PremiereEvent {\nid\ntitle\ndescription\nstartAt\nendAt\ngame {\nid\ndisplayName\nboxArtURL(width:285 height:380)\n}\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\npremiere {\nstatus\npastPremiere {\nid\nbroadcastType\ndescription\nthumbnailURLs(width: 320 height: 180)\nviewCount\ntitle\nanimatedPreviewURL\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nlengthSeconds\nowner {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 285 height: 380)\n}\nself {\nviewingHistory {\nposition\n}\n}\n}\n}\nimageURL(width:320 height:180)\nself {\nisFollowing\n}\n}",
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
    sgUC: function(e, t) {},
    thRY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "SingleLanding"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SingleEvent"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "endAt"
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
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                    value: "isFollowing"
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
                end: 244
            }
        };
        n.loc.source = {
            body: "fragment SingleLanding on SingleEvent {\nid\ntitle\ndescription\nstartAt\nendAt\ngame {\nid\ndisplayName\nboxArtURL(width:285 height:380)\n}\nchannel {\nid\nlogin\ndisplayName\nprofileImageURL(width:300)\n}\nimageURL(width:320 height:180)\nself {\nisFollowing\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
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
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardSettings: "teams.dashboard.settings",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    weaG: function(e, t) {},
    x583: function(e, t) {},
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("3iBR"),
            l = n("qe65"),
            o = n("Odds"),
            s = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": r.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            d = function() {
                return i.createElement(o.U, {
                    display: o.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: o.J.Column,
                    justifyContent: o.T.Center,
                    alignItems: o.c.Center
                }, i.createElement(o._22, {
                    type: o._27.H4,
                    bold: !0
                }, i.createElement(l.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: s
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return d
        })
    },
    yU6t: function(e, t) {},
    ynGC: function(e, t) {},
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
//# sourceMappingURL=pages.event-landing-9f1c43c5c1eccdd0e8a3f85ce31014d1.js.map