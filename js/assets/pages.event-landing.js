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
                bits_location: e.location || r.ChatTooltip
            };
            a.m.track(l.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            return e && o[e] ? o[e] : (a.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            a.m.track(l.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: a.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            a.m.track(l.SpadeEventType.BitsAdsImpression, t)
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
            a.m.track(l.SpadeEventType.BitsAdsRequest, n)
        };
        var i, a = n("6sO2"),
            l = n("vH/s"),
            r = {
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
            o = {
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
    "1jVX": function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, c) {
            void 0 === t && (t = []);
            for (var u, m = [], p = e.split(/\n/), v = function(e, v) {
                    if (e > 0 && (v += p[e - 1].length + 1), c && "" === p[e]) return m.push(i.createElement(o._23, {
                        key: e
                    }, "\n")), u = v, "continue";
                    var g = t.map(function(e) {
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
                        h = Object(r.f)(p[e], Object(s.b)(g), 0, {}, !1, n);
                    m.push(i.createElement(o._23, {
                        key: e
                    }, function(e) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var r = e[n];
                            switch (r.type) {
                                case l.a.ClipLink:
                                    t.push(i.createElement("a", {
                                        key: n,
                                        href: r.content.url,
                                        target: "_blank"
                                    }, r.content.url));
                                    break;
                                case l.a.VideoLink:
                                case l.a.Link:
                                    r.content.url.match(d) ? t.push(i.createElement(a.a, {
                                        key: n,
                                        to: r.content.url.replace(d, "")
                                    }, r.content.displayText)) : t.push(i.createElement("a", {
                                        key: n,
                                        href: r.content.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, r.content.displayText));
                                    break;
                                case l.a.Mention:
                                    t.push(i.createElement(a.a, {
                                        key: n,
                                        to: "/" + r.content.recipient
                                    }, r.content.recipient));
                                    break;
                                case l.a.Emote:
                                    r.content.images.themed || t.push(i.createElement("img", {
                                        key: n,
                                        src: r.content.images.sources["1x"],
                                        alt: r.content.alt
                                    }));
                                    break;
                                case l.a.Text:
                                    t.push(i.createElement("span", {
                                        key: n
                                    }, r.content))
                            }
                        }
                        return t
                    }(h))), u = v
                }, g = 0, h = 0; g < p.length; g++) v(g, h), h = u;
            return m
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            l = n("mwvJ"),
            r = n("l21v"),
            s = n("dQj3"),
            o = n("Odds"),
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
            l = n("Odds"),
            r = (n("6suJ"), function(e) {
                var t = Object(a.c)(e.date, {
                        month: "short"
                    }),
                    n = Object(a.c)(e.date, {
                        day: "numeric"
                    });
                return i.createElement(l._19, {
                    background: l.m.Base,
                    elevation: 2,
                    display: l.H.Flex,
                    flexDirection: l.J.Column,
                    className: "event-calendar-date",
                    margin: {
                        top: .5,
                        left: .5
                    },
                    position: l._4.Absolute,
                    attachTop: !0,
                    attachLeft: !0,
                    flexWrap: l.K.NoWrap
                }, i.createElement(l._19, {
                    className: "event-calendar-date__month",
                    display: l.H.Flex,
                    justifyContent: l.U.Center,
                    background: l.m.AccentAlt2
                }, i.createElement(l._23, {
                    fontSize: l.L.Size6,
                    transform: l._27.Uppercase,
                    color: l.F.Overlay
                }, t)), i.createElement(l.V, {
                    display: l.H.Flex,
                    justifyContent: l.U.Center
                }, i.createElement(l._23, {
                    fontSize: l.L.Size3,
                    color: l.F.Base
                }, n)))
            });
        n.d(t, "a", function() {
            return r
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
            l = (n.n(a), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return l.a
        })
    },
    "8Wuk": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            l = n("6sO2"),
            r = n("2hJ3"),
            s = n("yDzg"),
            o = "https://www.facebook.com/sharer/sharer.php",
            d = "https://www.twitter.com/share",
            c = "https://www.reddit.com/submit",
            u = "https://vk.com/share.php",
            m = n("Odds");
        n("bdk8");
        n.d(t, "b", function() {
            return p
        }), n.d(t, "a", function() {
            return v
        });
        var p;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(p || (p = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? a.createElement("a", i.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(m._40)(n.props)), n.renderIcon()) : a.createElement("button", i.__assign({
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
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(r.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return a.createElement(m.V, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, a.createElement(m._10, {
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
                            return n.state.isCopied ? Object(l.d)("Copied", "SocialButton") : Object(l.d)("Copy to clipboard", "SocialButton");
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
                        a = n.getUrl(),
                        l = t || "";
                    switch (i) {
                        case p.Reddit:
                            return function(e, t) {
                                return Object(s.a)(c, {
                                    url: e,
                                    title: t
                                })
                            }(a, l);
                        case p.VKontakte:
                            return function(e) {
                                return Object(s.a)(u, {
                                    url: e
                                })
                            }(a);
                        case p.Facebook:
                            return function(e) {
                                return Object(s.a)(o, {
                                    u: e
                                })
                            }(a);
                        case p.Twitter:
                            return function(e, t) {
                                return Object(s.a)(d, {
                                    url: e,
                                    text: t
                                })
                            }(a, l);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return i.__extends(t, e), t.prototype.render = function() {
                return a.createElement(m.V, {
                    className: "social-button"
                }, a.createElement(m._31, {
                    label: this.getTooltipFromType(),
                    direction: m._33.Top
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
                            value: "visibleChildren"
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
                            value: "visibleChildren"
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
                end: 2912
            }
        };
        n.loc.source = {
            body: "fragment TimetableLanding on TimetableEvent {\n...TimetableCommon\nvisibleChildren: children(first: $afterLimit after: $afterCursor last: $beforeLimit before: $beforeCursor criteria: { firstPageOptions: { endsAfter: $endsAfter } }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n__typename\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\nupcomingChildren: children(first: 1 criteria: { endsAfter: $endsAfter }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\n}\nfragment TimetableFromSegmentLanding on TimetableEvent {\n...TimetableCommon\nvisibleChildren: children(first: $afterLimit after: $afterCursor last: $beforeLimit before: $beforeCursor criteria: { firstPageOptions: { eventID: $eventName } }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\nupcomingChildren: children(first: 1 criteria: { endsAfter: $endsAfter }) {\npageInfo {\nhasPreviousPage\nhasNextPage\n}\nedges {\ncursor\nnode {\n...on SegmentEvent {\nid\ntitle\ndescription\nstartAt\nendAt\nimageURL(width:600 height: 337)\ngame {\nid\nname\ndisplayName\nboxArtURL(width:97 height:130)\n}\nchannel {\nid\nlogin\ndisplayName\nstream {\nid\npreviewImageURL(width:320 height:180)\n}\n}\nself {\nisFollowing\n}\nvideos {\nedges {\noffsetSeconds\nnode {\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\nanimatedPreviewURL\npreviewThumbnailURL(width:320 height:180)\npublishedAt\ntitle\nviewCount\n}\n}\n}\n}\n}\n}\n}\n}\nfragment TimetableCommon on TimetableEvent {\nid\ntitle\ndescription\nbannerImageURL: imageURL(width:360 height:202)\nthumbImageURL: imageURL(width:160 height: 90)\ntimetableStart: startAt\ntimetableEnd: endAt\nowner {\nid\ndisplayName\n}\nself {\nisFollowing\n}\n}",
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
                return !l[t] && (l[t] = !0, !0)
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
        var l = {};
        a.definitions = a.definitions.concat(i(n("8naI").definitions)), a.definitions = a.definitions.concat(i(n("thRY").definitions)), a.definitions = a.definitions.concat(i(n("qdmu").definitions)), e.exports = a
    },
    "E+X/": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("RH2O"),
            l = n("2KeS"),
            r = n("+xm8"),
            s = n("V5M+"),
            o = n("f2i/"),
            d = n("Aj/L"),
            c = n("oSFp"),
            u = n("U7vG"),
            m = n("6sO2"),
            p = n("+Znq"),
            v = n("mw/a"),
            g = n("Odds"),
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportClick = function() {
                        if (!t.props.isLoggedIn) return t.props.login();
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
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(p.a, null, u.createElement(g.u, {
                        icon: g._11.More,
                        type: g.z.Hollow
                    }), u.createElement(g.p, {
                        direction: this.props.balloonDirection,
                        tailOffset: this.props.tailOffset
                    }, u.createElement(g.V, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(g.T, {
                        onClick: this.handleReportClick
                    }, u.createElement(g.V, {
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
                return Object(l.bindActionCreators)({
                    login: function() {
                        return Object(o.f)(r.a.ReportChannel)
                    },
                    showReportUserModal: function(e) {
                        var t = i.__rest(e, []);
                        return Object(s.d)(c.a, t)
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
            return e === a.SECOND ? Object(l.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === a.MINUTE ? Object(l.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === a.DAY ? Object(l.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === a.HOUR ? Object(l.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === a.WEEK ? Object(l.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === a.MONTH ? Object(l.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }
        t.a = function(e) {
            if (e < 60) return i(a.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(a.MINUTE, t) + " " + i(a.SECOND, n) : i(a.MINUTE, t);
            var l = Math.floor(t / 60);
            if (t %= 60, l < 24) return t ? i(a.HOUR, l) + " " + i(a.MINUTE, t) : i(a.HOUR, l);
            var r = Math.floor(l / 24);
            if (l %= 24, r < 7) return l ? i(a.DAY, r) + " " + i(a.HOUR, l) : i(a.DAY, r);
            if (r <= 26) {
                var s = Math.floor(r / 7);
                return (r %= 7) ? i(a.WEEK, s) + " " + i(a.DAY, r) : i(a.WEEK, s)
            }
            var o = Math.round((r + 3) / 30);
            return i(a.MONTH, o)
        };
        var a, l = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(a || (a = {}))
    },
    IOwa: function(e, t, n) {
        "use strict";
        var i, a, l, r = n("TToO"),
            s = n("HW6M"),
            o = n("U7vG"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), i = {}, i[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[c.a.Premiere] = u._11.VideoPremiere, a[c.a.Rerun] = u._11.VideoRerun, a[c.a.WatchParty] = u._11.VideoRerun, a),
            v = (l = {}, l[c.a.Premiere] = u._12.Live, l[c.a.Rerun] = u._12.Inherit, l[c.a.WatchParty] = u._12.Inherit, l),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(u._19, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, o.createElement(u.V, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), o.createElement(u._23, {
                        type: u._28.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? o.createElement(u._19, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? o.createElement(u.V, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, o.createElement(u.X, {
                        size: u.Y.Small
                    })) : o.createElement(u._10, {
                        asset: p[this.props.type],
                        type: v[this.props.type],
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
            }(o.Component);
        n.d(t, "a", function() {
            return g
        })
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("CSlQ"),
            l = n("81qH"),
            r = n("XYqD"),
            s = n("Odds"),
            o = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(r.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(s.V, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, i.createElement(l.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(s._34, {
                    gutterSize: s._36.Small,
                    childWidth: e.videoCardSize || s._35.Large,
                    placeholderItems: 20
                }, t)
            },
            d = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(o);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return d
        })
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
            l = (n.n(a), n("Odds")),
            r = n("yU6t"),
            s = (n.n(r), function(e) {
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
                    return a.createElement(l.I, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(l.Q, {
                        position: l._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: l._39.Above
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
    J92i: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            l = n("U7vG"),
            r = n("6sO2"),
            s = n("J8WN"),
            o = n("+8VM"),
            d = n("7vx8"),
            c = n("HZww"),
            u = n("Odds"),
            m = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return l.createElement(u.V, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(r.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, l.createElement(u._19, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: u._4.Relative,
                    className: a(t)
                }, l.createElement("img", {
                    alt: Object(r.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            p = n("4Q9N"),
            v = n("Tt3k"),
            g = n("W6ca"),
            h = n("xgnX"),
            f = n("CSlQ"),
            k = (n("AL3x"), n("nmDn"));
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return E
        });
        var b = [{
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
            S = ["image/*"],
            y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = r.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(v.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: h.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(v.b)(n, function(e) {
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
                            statusMessage: h.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, l, s = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: h.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: h.b.Uploading
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(g.a)(this.props.userID, this.props.authToken, p.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = i.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                    case 3:
                                        return l = i.sent(), this.logger.error(l, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: h.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = r.j.subscribe({
                                            topic: Object(c.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(g.c)(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: h.b.UnexpectedError,
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
                                                    statusMessage: h.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === a) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === h.a.Success ? h.b.Success : e.status === h.a.BadSize ? h.b.BadSizeError : e.status === h.a.NonImage ? h.b.NonImageError : e.status === h.a.WrongFormat ? h.b.WrongFormatError : h.b.UnexpectedError, s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t
                                                    }), s.state.statusMessage === h.b.Success ? s.setState({
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
                            imagePreviewURL: b[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: h.b.TimeoutError
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
                        t = b.map(function(t, n) {
                            return l.createElement(m, {
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
                        n = l.createElement(u.V, {
                            className: a(i),
                            "data-test-selector": "preview-image",
                            position: u._4.Relative
                        }, l.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var d = null;
                    "" === this.state.imagePreviewURL && (d = l.createElement(u.V, {
                        className: "profile-edit__upload-info"
                    }, l.createElement(u.V, null, l.createElement(u._10, {
                        asset: u._11.Plus,
                        type: u._12.Alt2,
                        height: 20,
                        width: 20
                    })), l.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size4
                    }, Object(r.d)("Upload a Photo", "Profile Edit"))));
                    var c = null;
                    this.props.showCloser && (c = l.createElement(o.a, null));
                    var p = null;
                    if (null !== this.state.statusMessage) {
                        var v = Object(h.c)(this.state.statusMessage),
                            g = v.message,
                            f = v.type;
                        p = l.createElement(u._1, {
                            label: g,
                            type: f
                        })
                    }
                    var k = this.props.login;
                    return this.props.displayName && (k = this.props.displayName), l.createElement(u.V, {
                        className: "profile-edit",
                        position: u._4.Relative,
                        fullHeight: !0
                    }, l.createElement(u._19, {
                        className: "profile-edit__background-container",
                        background: u.m.Base,
                        fullWidth: !0
                    }, l.createElement(u.V, {
                        padding: 2,
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        fullWidth: !0
                    }, l.createElement(u._19, {
                        textAlign: u._24.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size4
                    }, Object(r.d)("Edit Profile Picture for {userName}", {
                        userName: k
                    }, "Profile Edit"), " ")), l.createElement(u.V, {
                        className: "profile-edit__upload-container",
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(u.V, {
                        className: "profile-edit__upload",
                        display: u.H.InlineBlock,
                        position: u._4.Relative,
                        textAlign: u._24.Center
                    }, l.createElement(s.a, {
                        allowedFileTypes: S,
                        onFilesSubmitted: this.onImageInputChange
                    }, d), n)), l.createElement(u._19, {
                        "data-test-selector": "status-message",
                        fontSize: u.L.Size4,
                        position: u._4.Relative,
                        textAlign: u._24.Center,
                        className: "profile-edit__status-message"
                    }, p), l.createElement(u._19, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(u.V, {
                        textAlign: u._24.Left,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(u._23, {
                        type: u._28.H3,
                        color: u.F.Alt2,
                        fontSize: u.L.Size5
                    }, Object(r.d)("Or select one of these", "Profile Edit"))), l.createElement(u._34, {
                        childWidth: u._35.ExtraSmall,
                        gutterSize: u._36.ExtraSmall,
                        placeholderItems: 3
                    }, t)), l.createElement(u.V, {
                        display: u.H.Flex,
                        justifyContent: u.U.Center
                    }, l.createElement(u.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: u.x.Large
                    }, Object(r.d)("Update", "Profile Edit"))))), c)
                }, t.prototype.setDefaultAvatar = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: h.b.Uploading
                                    }), e = h.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(g.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = h.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === h.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(d.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            E = Object(f.c)("Profile Edit")(y)
    },
    MQiv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            var t = {
                share_medium: e.shareMedium,
                event_id: e.eventID,
                channel: e.channelLogin,
                channel_id: e.channelID,
                location: e.location
            };
            return a.n.tracking.track(l.SpadeEventType.EventShare, t)
        }, t.d = function(e) {
            var t = {
                action: e.action,
                channel: e.channelLogin,
                channel_id: e.channelID,
                event_id: e.eventID,
                location: e.location
            };
            return a.n.tracking.track(l.SpadeEventType.EventFollowing, t)
        };
        var i, a = n("6sO2"),
            l = n("vH/s");
        ! function(e) {
            e.ChannelEvents = "channel_events", e.EventDetails = "event_details", e.EventManagment = "event_managment"
        }(i || (i = {}));
        var r;
        ! function(e) {
            e.RemindMeOpen = "remind_me_open_modal", e.EmailReminderOn = "email_reminder_on", e.EmailReminderOff = "email_reminder_off"
        }(r || (r = {}))
    },
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            l = n("U7vG"),
            r = n("6sO2"),
            s = n("Ejve"),
            o = "legacy_routes_enabled",
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
                                    var l = a.stringify(i),
                                        o = r.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + o + e.pathname + "?" + l;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                r.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
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
                                    l = "";
                                i.length > 0 && (l = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: l
                                })
                            }
                        }
                    }, n.isEnabled = r.b.get(o, !1), n.logger = r.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = r.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var l = new RegExp(a, "i");
                            t.push(l)
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
            }(l.Component);
        n.d(t, "a", function() {
            return o
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
                        if (e.eventType === A.PREMIERE_EVENT) return !!e.premiere && e.premiere.status === m.STARTED;
                        if (e.eventType === A.SINGLE_EVENT) return t > e.startAt;
                        if (e.eventType === A.SEGMENT_EVENT) return t > e.startAt
                    }
                    return !1
                }(e, n) ? w.LIVE : function(e, t) {
                    if (e.eventType === A.PREMIERE_EVENT) return t < e.endAt;
                    if (e.eventType === A.SINGLE_EVENT) return t < e.startAt;
                    if (e.eventType === A.SEGMENT_EVENT) return t < e.startAt;
                    return !1
                }(e, n) ? w.FUTURE : w.PAST
        }

        function a(e) {
            if (e < 0) return "";
            if (0 === e) return Z;
            var t = e,
                n = Math.floor(t / 3600);
            t %= 3600;
            return n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
        }

        function l(e) {
            return null !== e
        }

        function r(e) {
            var t = [];
            e.upcomingChildren && e.upcomingChildren.edges && (t = e.upcomingChildren.edges.map(function(e) {
                var t = e.node;
                if (!(t && t.game && t.channel && t.channel.id && t.channel.login)) return null;
                var n = null;
                if (t && t.videos && t.videos.edges && t.videos.edges.length > 0) {
                    n = o(t.videos.edges[0])
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
            }).filter(l));
            var n = null;
            e.visibleChildren && e.visibleChildren.edges && (n = [], n = e.visibleChildren.edges.map(function(e) {
                var t = e.node;
                if (!(t && t.game && t.channel && t.channel.id && t.channel.login)) return null;
                var n = null;
                if (t && t.videos && t.videos.edges && t.videos.edges.length > 0) {
                    n = o(t.videos.edges[0])
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
            }).filter(l));
            var i = null,
                a = null;
            null !== e.timetableStart && (i = new Date(e.timetableStart)), null !== e.timetableEnd && (a = new Date(e.timetableEnd));
            var r = null;
            null !== e.owner && (r = {
                id: e.owner.id || "",
                displayName: e.owner.displayName || "-"
            });
            var s = e.upcomingChildren && e.upcomingChildren.pageInfo && e.upcomingChildren.pageInfo.hasPreviousPage || !1,
                d = e.upcomingChildren && e.upcomingChildren.pageInfo && e.upcomingChildren.pageInfo.hasNextPage || !1;
            return n && (s = e.visibleChildren && e.visibleChildren.pageInfo && e.visibleChildren.pageInfo.hasPreviousPage || !1, d = e.visibleChildren && e.visibleChildren.pageInfo && e.visibleChildren.pageInfo.hasNextPage || !1), {
                id: e.id,
                title: e.title,
                description: e.description,
                imageURL: e.bannerImageURL,
                thumbImageURL: e.thumbImageURL,
                startAt: i,
                endAt: a,
                owner: r,
                self: {
                    isFollowing: e.self && e.self.isFollowing || !1
                },
                visibleChildren: n,
                upcomingChildren: t,
                hasPreviousPage: s,
                hasNextPage: d
            }
        }

        function s(e, t, n) {
            var i = e && e.visibleChildren && e.visibleChildren.edges || [],
                a = t && t.visibleChildren && t.visibleChildren.edges || [],
                l = [];
            l = n ? a.concat(i) : i.concat(a);
            var r = null;
            e && e.visibleChildren && e.visibleChildren.pageInfo && (r = Object.assign({}, e.visibleChildren.pageInfo)), r && t && t.visibleChildren && t.visibleChildren.pageInfo && (r.hasNextPage = !!r.hasNextPage && t.visibleChildren.pageInfo.hasNextPage, r.hasPreviousPage = !!r.hasPreviousPage && t.visibleChildren.pageInfo.hasPreviousPage);
            var s = Object.assign({}, e.visibleChildren, {
                edges: l,
                pageInfo: r
            });
            return p.__assign({}, e, {
                visibleChildren: s
            })
        }

        function o(e) {
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

        function d(e) {
            return !!e && e.__typename === A.TIMETABLE_EVENT
        }

        function c(e) {
            return !!e && e.__typename === A.SEGMENT_EVENT
        }

        function u(e, t) {
            for (var n = e, i = 0, a = t.split("."); i < a.length; i++) {
                var l = a[i];
                if (!n || null === n[l]) return null;
                n = n[l]
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m, p = n("TToO"),
            v = n("U7vG"),
            g = n("6sO2"),
            h = n("yWCw"),
            f = n("7vx8"),
            k = n("j7/Y"),
            b = n("w9tK"),
            S = n("vH/s"),
            y = n("SI0h"),
            E = n("CSlQ"),
            N = n("2aoH"),
            _ = n("HW6M");
        ! function(e) {
            e.UNSCHEDULED = "UNSCHEDULED", e.SCHEDULED = "SCHEDULED", e.CANCELLED = "CANCELLED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.FAILED = "FAILED"
        }(m || (m = {}));
        var w;
        ! function(e) {
            e.LIVE = "LIVE", e.FUTURE = "FUTURE", e.PAST = "PAST"
        }(w || (w = {}));
        var A;
        ! function(e) {
            e.SINGLE_EVENT = "SingleEvent", e.PREMIERE_EVENT = "PremiereEvent", e.TIMETABLE_EVENT = "TimetableEvent", e.SEGMENT_EVENT = "SegmentEvent"
        }(A || (A = {}));
        var F = n("Odds"),
            C = (n("ioX4"), function(e) {
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
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = _({
                            "event-landing-action__progress": this.state.countdownActive
                        }),
                        t = "";
                    "function" == typeof g.d && (t = Object(g.d)("This event is Live! Head to the channel page to watch and chat.", "EventLandingAction"), this.state.countdownActive && (t = Object(g.d)("This event is Live! Redirecting to the channel page in 5 seconds.", "EventLandingAction")));
                    var n = v.createElement(F.V, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(F.u, {
                            linkTo: {
                                pathname: "/" + this.props.login,
                                state: {
                                    content: "cancelled_countdown",
                                    medium: "event_page"
                                }
                            }
                        }, Object(g.d)("Go to Channel", "EventLandingAction"))),
                        i = null;
                    this.state.countdownActive && (n = v.createElement(F.V, {
                        margin: {
                            left: 1
                        }
                    }, v.createElement(F.u, {
                        onClick: this.cancelCountdown
                    }, Object(g.d)("Cancel", "EventLandingAction"))), i = v.createElement(F._7, {
                        countdown: 5,
                        onCountdownEnd: this.props.onCountdownSuccess,
                        size: F._8.Small
                    }));
                    var a = v.createElement(F.X, null);
                    return this.props.eventType === A.PREMIERE_EVENT && (a = v.createElement(F._10, {
                        asset: F._11.VideoPremiere,
                        type: F._12.Live,
                        width: 10
                    })), v.createElement(F.V, null, v.createElement(F._19, {
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        border: !0,
                        margin: {
                            top: 2
                        },
                        alignItems: F.c.Center,
                        className: "event-landing-action__strip",
                        background: F.m.Base
                    }, v.createElement(F.V, {
                        display: F.H.InlineFlex,
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, a), v.createElement(F.V, {
                        className: "event-landing-action__message",
                        display: F.H.InlineFlex,
                        flexWrap: F.K.Wrap,
                        flexGrow: 1
                    }, t), v.createElement(F.V, {
                        display: F.H.InlineFlex,
                        flexShrink: 0
                    }, n)), v.createElement(F.V, {
                        className: e
                    }, i))
                }, t
            }(v.Component)),
            I = Object(E.c)("EventLandingAction")(C),
            L = n("1jVX"),
            O = (n("9bpq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(g.d)("No description listed", "EventLandingDescription");
                    return "" !== this.props.description && (e = this.props.description), v.createElement(F.V, null, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        type: F._28.H5,
                        color: F.F.Alt2
                    }, Object(g.d)("Description", "EventLandingDescription")), v.createElement(F.V, {
                        margin: {
                            top: 1
                        },
                        className: "event-landing-description__text"
                    }, Object(L.a)(e, [], "", !0)))
                }, t = p.__decorate([Object(E.c)("EventLandingDescription")], t)
            }(v.Component)),
            T = n("OFFm"),
            x = n("E+X/"),
            V = n("QdVH"),
            U = n("MQiv"),
            B = (n("ea40"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = v.createElement(F.u, {
                            disabled: !0
                        }, Object(g.d)("Past Event", "EventLandingTitle"));
                    return e === w.LIVE ? t = v.createElement(F.u, {
                        linkTo: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, Object(g.d)("Watch Now", "EventLandingTitle")) : e === w.FUTURE && (t = v.createElement(T.a, {
                        eventID: this.props.id,
                        areNotificationsEnabled: !(!this.props.self || !this.props.self.isFollowing),
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: U.a.EventDetails
                    })), v.createElement(F._19, {
                        borderBottom: !0
                    }, v.createElement(F._23, {
                        type: F._28.H2,
                        className: "event-landing-title__heading"
                    }, this.props.title), v.createElement(F.V, {
                        display: F.H.Flex,
                        margin: {
                            top: 2,
                            bottom: 3
                        }
                    }, v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, t), v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V.a, {
                        id: this.props.id,
                        title: this.props.title,
                        channelID: this.props.channel.id,
                        channelLogin: this.props.channel.login,
                        eventLocation: U.a.EventDetails
                    })), v.createElement(x.a, {
                        targetUser: {
                            id: this.props.channel.id,
                            displayName: this.props.channel.displayName || this.props.channel.login
                        },
                        eventID: this.props.id,
                        balloonDirection: F.q.Bottom
                    })))
                }, t
            }(v.Component)),
            D = Object(E.c)("EventLandingTitle")(B),
            j = n("ISok"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pastPremiereToPreviewCardVideo = function(e) {
                        return {
                            id: e.id,
                            viewCount: e.viewCount ? e.viewCount : 0,
                            title: e.title || "",
                            animatedPreviewURL: e.animatedPreviewURL || "",
                            previewThumbnailURL: e.previewThumbnailURL || "",
                            publishedAt: e.publishedAt || "",
                            lengthSeconds: e.lengthSeconds ? e.lengthSeconds : 0,
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
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.pastPremiere && (e = v.createElement(j.a, {
                        trackingContent: S.PageviewContent.EventPast,
                        trackingMedium: S.PageviewMedium.EventDetails,
                        videos: [this.pastPremiereToPreviewCardVideo(this.props.pastPremiere)]
                    })), v.createElement(F._19, {
                        padding: {
                            top: 2
                        }
                    }, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        type: F._28.H5,
                        color: F.F.Alt2
                    }, Object(g.d)("Videos", "EventLandingVideos")), v.createElement(F.V, {
                        margin: {
                            top: 1
                        }
                    }, v.createElement(F.V, null, e)))
                }, t = p.__decorate([Object(E.c)("EventLandingVideos")], t)
            }(v.Component),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onCountdownSuccess = function() {
                        t.props.goToVideo(t.props.channel.login)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    i({
                        startAt: new Date(this.props.startAt),
                        endAt: new Date(this.props.endAt),
                        premiere: {
                            status: this.props.premiere ? this.props.premiere.status : ""
                        },
                        eventType: this.props.eventType
                    }) === w.LIVE && (e = v.createElement(I, {
                        id: this.props.id,
                        login: this.props.channel.login,
                        eventType: this.props.eventType,
                        onCountdownSuccess: this.onCountdownSuccess
                    }));
                    var t = null;
                    return this.props.eventType === A.PREMIERE_EVENT && this.props.premiere && this.props.premiere.pastPremiere && this.props.premiere.pastPremiere.id && (t = v.createElement(R, {
                        pastPremiere: this.props.premiere.pastPremiere
                    })), v.createElement(F.V, null, v.createElement(D, {
                        id: this.props.id,
                        title: this.props.title,
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        self: this.props.self,
                        premiere: this.props.premiere,
                        eventType: this.props.eventType
                    }), e, t, v.createElement(O, {
                        description: this.props.description
                    }))
                }, t = p.__decorate([Object(E.c)("EventLandingBody", {
                    autoReportInteractive: !0
                })], t)
            }(v.Component),
            H = n("5GFz"),
            M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = new Date(this.props.startAt);
                    return v.createElement(F.A, {
                        row: !0
                    }, v.createElement(F.Q, {
                        flexShrink: 0
                    }, v.createElement(F.C, {
                        size: F.D.Size32,
                        aspect: F.k.Aspect16x9,
                        imageSrc: this.props.imageURL,
                        imageAlt: "" !== this.props.imageURL ? this.props.title : ""
                    }, v.createElement(H.a, {
                        date: e
                    }))))
                }, t = p.__decorate([Object(E.c)("EventLandingImage", {
                    autoReportInteractive: !0
                })], t)
            }(v.Component),
            W = n("F8kA"),
            z = n("NY9D"),
            G = n("FsFC"),
            q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderGameBoxArt = function(e, t) {
                        return v.createElement(F.C, {
                            imageSrc: e,
                            imageAlt: t,
                            aspect: F.k.Aspect3x4,
                            size: F.D.Size4
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = new Date(this.props.startAt),
                        t = new Date(this.props.endAt),
                        n = null,
                        i = null,
                        a = null,
                        l = null;
                    if (function(e) {
                            for (var t in A)
                                if (isNaN(Number(t)) && A[t] === e) return !0;
                            return !1
                        }(this.props.eventType)) {
                        var r = void 0;
                        switch (this.props.eventType) {
                            case A.PREMIERE_EVENT:
                                r = Object(g.d)("Premiere", "EventLandingInfo");
                                break;
                            default:
                                r = Object(g.d)("Live Stream", "EventLandingInfo")
                        }
                        n = v.createElement(F.V, {
                            margin: {
                                top: 3
                            }
                        }, v.createElement(F._23, {
                            transform: F._27.Uppercase,
                            type: F._28.H5,
                            color: F.F.Alt2
                        }, Object(g.d)("Event Type", "EventLandingInfo")), v.createElement(F.V, {
                            margin: {
                                top: 1
                            }
                        }, v.createElement(F._23, {
                            fontSize: F.L.Size5
                        }, r)))
                    }
                    return this.props.game && (this.props.game.boxArtURL && this.props.game.displayName && (a = v.createElement(F.V, {
                        display: F.H.InlineFlex
                    }, this.renderGameBoxArt(this.props.game.boxArtURL, this.props.game.displayName))), i = v.createElement(F.V, {
                        margin: {
                            top: 3
                        }
                    }, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        type: F._28.H5,
                        color: F.F.Alt2
                    }, Object(g.d)("Streaming", "EventLandingInfo")), v.createElement(W.a, {
                        to: {
                            pathname: Object(z.c)(this.props.game.displayName),
                            state: {
                                content: "event_game",
                                medium: "event_page"
                            }
                        }
                    }, v.createElement(F.V, {
                        display: F.H.Flex,
                        flexWrap: F.K.Wrap,
                        alignItems: F.c.Center,
                        margin: {
                            top: 1
                        }
                    }, a, v.createElement(F.V, {
                        display: F.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size5
                    }, this.props.game.displayName)))))), this.props.channel.profileImageURL && (l = v.createElement(F.V, {
                        display: F.H.InlineFlex
                    }, v.createElement(F.l, {
                        size: 40,
                        imageSrc: this.props.channel.profileImageURL,
                        imageAlt: "User profile picture"
                    }))), v.createElement(F.V, {
                        margin: {
                            x: 3
                        },
                        padding: {
                            y: 2
                        }
                    }, v.createElement(F.V, null, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        type: F._28.H5,
                        color: F.F.Alt2
                    }, Object(g.d)("Date & Time", "EventLandingInfo")), v.createElement(F.V, {
                        margin: {
                            top: 1
                        }
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size5
                    }, function(e, t) {
                        var n = new Date;
                        t && (n = t);
                        var i = {
                            weekday: "long",
                            month: "short",
                            day: "numeric"
                        };
                        return n.getFullYear() !== e.getFullYear() && (i = p.__assign({}, i, {
                            year: "numeric"
                        })), Object(g.c)(e, i)
                    }(e))), v.createElement(F.V, {
                        margin: {
                            top: 1
                        }
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size5
                    }, function(e) {
                        return Object(g.h)(e, {
                            timeZoneName: "short"
                        })
                    }(e))), v.createElement(F.V, {
                        margin: {
                            top: 1
                        }
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size5
                    }, function(e, t) {
                        var n = Math.abs(e.getTime() / 1e3 - t.getTime() / 1e3);
                        return Object(G.a)(n)
                    }(e, t)))), n, v.createElement(F.V, {
                        margin: {
                            top: 3
                        }
                    }, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        type: F._28.H5,
                        color: F.F.Alt2
                    }, Object(g.d)("Starring", "EventLandingInfo")), v.createElement(W.a, {
                        to: {
                            pathname: "/" + this.props.channel.login,
                            state: {
                                content: "author_avatar",
                                medium: "event_page"
                            }
                        }
                    }, v.createElement(F.V, {
                        display: F.H.Flex,
                        flexWrap: F.K.Wrap,
                        alignItems: F.c.Center,
                        margin: {
                            top: 1
                        }
                    }, l, v.createElement(F.V, {
                        display: F.H.InlineFlex,
                        margin: {
                            left: 1
                        }
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size5
                    }, "" !== this.props.channel.displayName ? this.props.channel.displayName : this.props.channel.login))))), i)
                }, t = p.__decorate([Object(E.c)("EventLandingInfo")], t)
            }(v.Component),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return v.createElement(F._19, {
                        background: F.m.Base
                    }, v.createElement(F._19, {
                        border: !0
                    }, v.createElement(M, {
                        title: this.props.title,
                        imageURL: this.props.imageURL,
                        startAt: this.props.startAt
                    })), v.createElement(F._19, {
                        borderRight: !0,
                        borderLeft: !0,
                        borderBottom: !0
                    }, v.createElement(q, {
                        startAt: this.props.startAt,
                        endAt: this.props.endAt,
                        channel: this.props.channel,
                        game: this.props.game,
                        eventType: this.props.eventType
                    })))
                }, t = p.__decorate([Object(E.c)("EventLandingSidePanel")], t)
            }(v.Component),
            Q = n("zCIC"),
            $ = Object(E.c)("TimetableHeader", {
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
                    a = w.FUTURE;
                e.upcomingSegment && (a = i({
                    startAt: e.upcomingSegment.startAt,
                    endAt: e.upcomingSegment.endAt,
                    eventType: A.SEGMENT_EVENT
                }));
                var l = v.createElement(T.a, {
                    eventID: e.id,
                    areNotificationsEnabled: e.isFollowing,
                    channelID: "",
                    channelLogin: "",
                    eventLocation: U.a.EventDetails
                });
                e.upcomingSegment && a === w.LIVE ? l = v.createElement(F.u, {
                    linkTo: {
                        pathname: "/" + e.upcomingSegment.channel.login,
                        state: {
                            content: "call_to_action",
                            medium: "event_page"
                        }
                    }
                }, Object(g.d)("Watch Now", "TimetableHeader")) : e.upcomingSegment && a !== w.PAST || (l = v.createElement(F.u, {
                    disabled: !0
                }, Object(g.d)("Past Event", "TimetableHeader")));
                var r = v.createElement(F.V, {
                        display: F.H.Flex
                    }, v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, l), v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V.a, {
                        id: e.id,
                        title: e.title,
                        channelID: "",
                        channelLogin: "",
                        eventLocation: U.a.EventDetails
                    })), e.owner && v.createElement(x.a, {
                        targetUser: e.owner,
                        eventID: e.id,
                        balloonDirection: F.q.Bottom
                    })),
                    s = v.createElement(F.V, null, Object(g.d)("To Be Announced", "TimetableHeader"));
                e.startAt && (s = a === w.LIVE ? v.createElement(F.V, {
                    display: F.H.Flex
                }, v.createElement(F.V, null, v.createElement(F.X, null)), v.createElement(F._19, {
                    margin: {
                        left: .5
                    }
                }, v.createElement(F._23, null, Object(g.d)("Happening Now", "TimetableHeader")))) : v.createElement(F.V, null, v.createElement(F._23, null, Object(g.h)(e.startAt, t))));
                var o = null;
                if (e.startAt && e.endAt) {
                    var d = Object(g.h)(e.endAt, n);
                    o = v.createElement(F.V, null, v.createElement(F._23, null, Object(g.d)("to {endDate}", {
                        endDate: d
                    }, "TimetableHeader")))
                }
                return v.createElement(F.V, {
                    margin: .5
                }, v.createElement(F._19, {
                    border: !0,
                    background: F.m.Base
                }, v.createElement(F.V, null, v.createElement("img", {
                    src: e.imageURL
                })), v.createElement(F.V, {
                    margin: 1
                }, v.createElement(F._19, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    }
                }, v.createElement(F._23, {
                    type: F._28.H3
                }, e.title)), v.createElement(F._19, {
                    borderBottom: !0,
                    padding: {
                        y: 1
                    },
                    margin: {
                        y: .5
                    }
                }, s, o), v.createElement(F.V, {
                    margin: {
                        y: 1
                    }
                }, r))), v.createElement(F._19, {
                    border: !0,
                    background: F.m.Base,
                    margin: {
                        top: 1
                    }
                }, v.createElement(F.V, {
                    margin: 1
                }, v.createElement(O, {
                    description: e.description
                }))))
            }),
            J = n("cSst"),
            Y = n("IOwa"),
            X = n("2o2f"),
            Z = "0h0m1s",
            ee = n("mi6k"),
            te = (n("9i7Z"), function(e) {
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
                return p.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = "?t=";
                    return this.props.offsetSeconds && this.props.offsetSeconds > 0 && (e += a(this.props.offsetSeconds)), v.createElement("div", p.__assign({
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(F._40)(this.props)), v.createElement(F.A, null, v.createElement(W.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            search: e,
                            state: this.props.tracking
                        },
                        title: this.props.video.title,
                        "data-test-selector": "preview-image-link"
                    }, v.createElement(F.V, {
                        fullWidth: !0
                    }, v.createElement(F.j, {
                        overflow: !0
                    }, v.createElement("div", null, v.createElement(F._19, {
                        display: F.H.InlineFlex,
                        position: F._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: F._39.Default,
                        fontSize: F.L.Size6,
                        background: F.m.Overlay,
                        color: F.F.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, v.createElement(F._18, {
                        "data-test-selector": "video-view-count",
                        icon: F._11.GlyphViews,
                        label: Object(g.d)("views", "EventVideoCard"),
                        value: Object(g.f)(this.props.video.viewCount)
                    })), v.createElement(F._19, {
                        display: F.H.InlineFlex,
                        position: F._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: F._39.Default,
                        fontSize: F.L.Size6,
                        background: F.m.Overlay,
                        color: F.F.Overlay,
                        className: "event-video-card__preview-overlay-stat"
                    }, v.createElement(F._18, {
                        "data-test-selector": "video-length",
                        icon: F._11.GlyphLength,
                        label: Object(g.d)("length", "EventVideoCard"),
                        value: Object(ee.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage()))))))
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = _("event-video-card__image-wrapper"),
                        n = _("event-video-card__preview-image", {
                            "event-video-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return v.createElement(F.j, {
                        overflow: !0
                    }, v.createElement("div", {
                        className: t
                    }, v.createElement(F.Q, {
                        flexShrink: 0
                    }, v.createElement("figure", null, v.createElement(F.j, {
                        ratio: F.k.Aspect16x9
                    }, v.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    }))))))
                }, t
            }(v.Component)),
            ne = Object(E.c)("EventVideoCard")(te),
            ie = (n("EKvq"), Object(g.d)("Watch Now", "TimetableSegment")),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.localizedGame = function() {
                        return Object(g.d)("Game", "TimetableSegment")
                    }, t.onExpandClick = function() {
                        return t.props.onExpand(t.props.event.id)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
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
                            eventType: A.SEGMENT_EVENT
                        }),
                        a = null;
                    n === w.LIVE && (a = v.createElement(F.V, {
                        flexShrink: 0
                    }, v.createElement(F._1, {
                        label: Object(g.d)("Live", "EventLandingPage"),
                        type: F._2.Live
                    })));
                    var l = v.createElement(F._19, {
                        display: F.H.Flex,
                        borderBottom: !0,
                        padding: {
                            y: 1
                        }
                    }, v.createElement("button", {
                        "data-test-selector": "collapsed-segment-title",
                        onClick: this.onExpandClick
                    }, v.createElement(F._23, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: F.F.Link,
                        type: F._28.H5,
                        ellipsis: !0
                    }, this.props.event.title)));
                    a && (l = v.createElement(F._19, {
                        borderBottom: !0,
                        padding: {
                            y: 1
                        },
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        alignItems: F.c.Center
                    }, a, v.createElement(F.V, {
                        display: F.H.Flex,
                        margin: {
                            left: .5
                        }
                    }, v.createElement("button", {
                        onClick: this.onExpandClick
                    }, v.createElement(F._23, {
                        className: "timetable-segment__title-link",
                        bold: !0,
                        color: F.F.Link,
                        type: F._28.H5,
                        ellipsis: !0
                    }, this.props.event.title)))));
                    var r = v.createElement(T.a, {
                        eventID: this.props.event.id,
                        areNotificationsEnabled: this.props.event.self.isFollowing,
                        channelID: this.props.event.channel.id,
                        channelLogin: this.props.event.channel.login,
                        eventLocation: U.a.EventDetails,
                        small: !0
                    });
                    return n === w.LIVE ? r = v.createElement(F.V, null, v.createElement(F.u, {
                        linkTo: {
                            pathname: "/" + this.props.event.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        },
                        size: F.x.Small
                    }, ie)) : n === w.PAST && (r = null), v.createElement("div", null, v.createElement(F._19, {
                        className: "timetable-segment__row",
                        border: !0,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        alignItems: F.c.Center,
                        background: F.m.Base
                    }, v.createElement(F.V, {
                        className: "timetable-segment__calendar-date",
                        display: F.H.Flex,
                        flexShrink: 0,
                        flexDirection: F.J.Column,
                        justifyContent: F.U.Center,
                        alignItems: F.c.Center
                    }, v.createElement(F._23, {
                        fontSize: F.L.Size6,
                        transform: F._27.Uppercase
                    }, e), v.createElement(F._23, {
                        fontSize: F.L.Size3
                    }, t)), v.createElement(F.V, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, l, v.createElement(F.V, {
                        display: F.H.Flex,
                        justifyContent: F.U.Between,
                        alignItems: F.c.Center,
                        flexWrap: F.K.NoWrap
                    }, v.createElement(F.V, {
                        padding: {
                            y: 1
                        },
                        display: F.H.Flex
                    }, v.createElement(F.V, {
                        flexShrink: 0
                    }, v.createElement(F._23, {
                        type: F._28.H5
                    }, Object(g.h)(this.props.event.startAt, {
                        weekday: "long",
                        timezoneName: "short"
                    }))), v.createElement(F.V, {
                        margin: {
                            x: 1
                        }
                    }, "•"), v.createElement(J.a, {
                        linkTo: "/directory/game/" + encodeURIComponent(this.props.event.game.name),
                        tooltip: this.localizedGame(),
                        svgAsset: F._11.NavGames,
                        title: this.props.event.game.displayName
                    })), r))))
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
                        l = i({
                            startAt: this.props.event.startAt,
                            endAt: this.props.event.endAt,
                            eventType: A.SEGMENT_EVENT
                        }),
                        r = v.createElement(T.a, {
                            eventID: this.props.event.id,
                            areNotificationsEnabled: this.props.event.self.isFollowing,
                            channelID: this.props.event.channel.id,
                            channelLogin: this.props.event.channel.login,
                            eventLocation: U.a.EventDetails
                        });
                    if (l === w.LIVE) r = v.createElement(F.u, {
                        linkTo: {
                            pathname: "/" + this.props.event.channel.login,
                            state: {
                                content: "call_to_action",
                                medium: "event_page"
                            }
                        }
                    }, ie);
                    else if (l === w.PAST && this.props.event.video && this.props.event.video.video) {
                        var s = "";
                        this.props.event.video.offsetSeconds && (s = "t=" + a(this.props.event.video.offsetSeconds)), r = v.createElement(F.u, {
                            linkTo: {
                                pathname: "/videos/" + this.props.event.video.video.id,
                                search: s,
                                state: {
                                    content: S.PageviewContent.EventPast,
                                    medium: S.PageviewMedium.EventDetails
                                }
                            }
                        }, Object(g.d)("Watch Video", "TimetableSegment"))
                    } else l === w.PAST && (r = v.createElement(F.u, {
                        disabled: !0
                    }, Object(g.d)("Past Event", "TimetableSegment")));
                    var o = v.createElement("img", {
                        src: this.props.event.game.boxArtURL,
                        height: 130,
                        width: 93
                    });
                    if (l === w.LIVE && this.props.event.channel.stream && this.props.event.channel.stream.previewImageURL && (o = v.createElement(F.V, {
                            position: F._4.Relative
                        }, v.createElement(F.V, {
                            position: F._4.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, v.createElement(Y.a, {
                            type: X.a.Live
                        })), v.createElement("img", {
                            src: this.props.event.channel.stream.previewImageURL,
                            height: 120,
                            width: 190
                        }))), l === w.PAST && this.props.event.video && this.props.event.video.video) {
                        var d = {
                            content: S.PageviewContent.EventPast,
                            medium: S.PageviewMedium.EventDetails
                        };
                        o = v.createElement("div", {
                            className: "timetable-segment__video-embed"
                        }, v.createElement(ne, {
                            video: this.props.event.video.video,
                            offsetSeconds: this.props.event.video.offsetSeconds,
                            tracking: d
                        }))
                    }
                    var c = v.createElement(F._23, {
                        color: F.F.Overlay
                    }, Object(g.h)(this.props.event.startAt, {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        timeZoneName: "short"
                    }));
                    return l === w.LIVE && (c = v.createElement(F.V, {
                        position: F._4.Relative
                    }, v.createElement(F._23, {
                        color: F.F.Overlay
                    }, "" + Object(g.c)(this.props.event.startAt, t)), v.createElement(F._23, {
                        color: F.F.Overlay
                    }, Object(g.d)("Happening Now until", "TimeTableSegment") + " " + Object(g.h)(this.props.event.endAt, n)))), v.createElement(F._19, {
                        border: !0,
                        elevation: 2,
                        fullWidth: !0,
                        margin: {
                            y: 1
                        },
                        background: F.m.Base,
                        position: F._4.Relative
                    }, v.createElement(F.V, {
                        position: F._4.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        padding: {
                            top: .5,
                            right: .5
                        }
                    }, v.createElement(F.u, {
                        overlay: !0,
                        type: F.z.Text,
                        icon: F._11.Close,
                        onClick: this.props.onDismissExpand
                    })), v.createElement(F._19, {
                        borderBottom: !0
                    }, v.createElement("div", {
                        style: e
                    }, v.createElement("div", {
                        className: "events-landing__expanded-segment-header"
                    }, v.createElement(F.V, {
                        display: F.H.Flex,
                        alignItems: F.c.End,
                        flexWrap: F.K.NoWrap,
                        padding: {
                            top: 3,
                            x: 2,
                            bottom: 1
                        }
                    }, v.createElement(F.V, {
                        className: "timetable-segment__expanded-image",
                        flexShrink: 0
                    }, o), v.createElement(F.V, {
                        flexGrow: 1,
                        margin: {
                            left: 2
                        }
                    }, v.createElement(F.V, {
                        margin: {
                            bottom: 2
                        }
                    }, v.createElement(F.V, {
                        margin: {
                            bottom: .5
                        }
                    }, v.createElement(F._23, {
                        color: F.F.Overlay,
                        type: F._28.H3
                    }, this.props.event.title)), c), v.createElement(F.V, {
                        display: F.H.Flex,
                        alignItems: F.c.Center,
                        flexWrap: F.K.NoWrap,
                        justifyContent: F.U.Between
                    }, v.createElement(J.a, {
                        linkTo: "/directory/game/" + encodeURIComponent(this.props.event.game.name),
                        tooltip: this.localizedGame(),
                        svgAsset: F._11.NavGames,
                        title: this.props.event.game.displayName
                    }), v.createElement(F.V, {
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        flexShrink: 0
                    }, v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, r), v.createElement(F.V, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(V.a, {
                        id: this.props.event.id,
                        title: this.props.event.title,
                        channelID: this.props.event.channel.id,
                        channelLogin: this.props.event.channel.login,
                        eventLocation: U.a.EventDetails
                    })), v.createElement(x.a, {
                        targetUser: this.props.event.channel,
                        eventID: this.props.event.id,
                        balloonDirection: F.q.BottomRight,
                        tailOffset: 10
                    })))))))), v.createElement(F.V, {
                        margin: 2
                    }, v.createElement(O, {
                        description: this.props.event.description
                    })))
                }, t
            }(v.PureComponent),
            le = Object(E.c)("TimetableSegment", {
                autoReportInteractive: !0
            })(ae),
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
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.segments.map(function(t) {
                            return v.createElement(le, {
                                key: t.id,
                                event: t,
                                expanded: t.id === e.state.expandedEvent,
                                onDismissExpand: e.unexpand,
                                onExpand: e.setExpanded
                            })
                        }),
                        n = null;
                    return this.props.hasPreviousPage && (n = v.createElement(F.V, {
                        fullWidth: !0,
                        display: F.H.Flex,
                        justifyContent: F.U.Center
                    }, v.createElement(F.u, {
                        type: F.z.Text,
                        icon: F._11.GlyphArrUp,
                        onClick: this.loadPrevious
                    }, Object(g.d)("Load Earlier Events", "TimetableSchedule")))), v.createElement(F.V, {
                        className: "events-landing__main-col",
                        position: F._4.Relative,
                        margin: {
                            left: 3
                        }
                    }, v.createElement(F._19, {
                        display: F.H.Flex,
                        justifyContent: F.U.Between,
                        margin: {
                            y: 1
                        },
                        padding: {
                            bottom: 1
                        },
                        borderBottom: !0
                    }, v.createElement(F._23, {
                        transform: F._27.Uppercase,
                        color: F.F.Alt2,
                        type: F._28.H5
                    }, Object(g.d)("Schedule", "TimetableSchedule"))), v.createElement(F.V, null, n, t, v.createElement(Q.a, {
                        enabled: this.props.hasNextPage,
                        loadMore: this.props.loadMore
                    })))
                }, t
            }(v.PureComponent),
            se = Object(E.c)("TimetableSchedule", {
                autoReportInteractive: !0
            })(re),
            oe = (n("ynGC"), Object(E.c)("TimeablePageComponent", {
                autoReportInteractive: !0
            })(function(e) {
                var t = null;
                return e.event.upcomingChildren && e.event.upcomingChildren.length > 0 && (t = e.event.upcomingChildren[0]), v.createElement(F.V, {
                    display: F.H.Flex,
                    justifyContent: F.U.Center,
                    margin: {
                        top: 3
                    }
                }, v.createElement(F.V, {
                    className: "events-landing__info-col"
                }, v.createElement(Q.c, null, v.createElement($, {
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
                }))), v.createElement(se, {
                    parentID: e.event.id,
                    segments: e.event.visibleChildren || e.event.upcomingChildren,
                    hasPreviousPage: e.event.hasPreviousPage,
                    hasNextPage: e.event.hasNextPage,
                    focusedSegmentID: e.event.visibleChildren && e.event.visibleChildren.length > 0 && e.event.visibleChildren[0].id || null,
                    loadMore: e.loadMore
                }))
            })),
            de = n("DP4t"),
            ce = (n("Cb/j"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goToVideo = function(e) {
                        t.props.history.push("/" + e)
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return this.loadingSpinner();
                    if (this.props.data.error || !this.props.data.loading && !this.props.data.event) return this.errorPage();
                    if (c(this.props.data.event)) {
                        if (!this.props.data.event.parent) return this.errorPage();
                        return (e = r(this.props.data.event.parent)) ? v.createElement(oe, {
                            event: e,
                            loadMore: this.props.loadMore
                        }) : this.errorPage()
                    }
                    if (d(this.props.data.event)) {
                        var e;
                        return (e = r(this.props.data.event)) ? v.createElement(oe, {
                            event: e,
                            loadMore: this.props.loadMore
                        }) : this.errorPage()
                    }
                    var t = this.cleanEvent(this.props.data.event);
                    return t ? v.createElement(F.V, {
                        position: F._4.Relative
                    }, v.createElement(N.a, null, v.createElement(y.a, {
                        currentPage: y.b.Events,
                        channelLogin: t.channel.login
                    })), v.createElement(F.V, {
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        margin: {
                            left: 3,
                            top: 3,
                            right: 3
                        },
                        className: "event-landing-page__wrapper"
                    }, v.createElement(F.V, {
                        flexShrink: 0,
                        flexGrow: 0,
                        margin: {
                            right: 3
                        }
                    }, v.createElement(K, {
                        title: t.title,
                        imageURL: t.imageURL,
                        startAt: t.startAt,
                        endAt: t.endAt,
                        channel: t.channel,
                        game: t.game,
                        eventType: t.eventType
                    })), v.createElement(F.V, {
                        flexGrow: 1
                    }, v.createElement(P, {
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
                    return v.createElement(h.a, {
                        message: Object(g.d)("Error loading data.", "EventLandingPage")
                    })
                }, t.prototype.loadingSpinner = function() {
                    return v.createElement(F.V, {
                        margin: {
                            top: 3
                        }
                    }, v.createElement(F.Z, {
                        fillContent: !0
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.event && (this.props.latencyTracking.reportInteractive(), this.props.data.event.title && g.n.setPageTitle(this.props.data.event.title))
                }, t.prototype.cleanEvent = function(e) {
                    if (d(e) || c(e)) return null;
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
                }, t = p.__decorate([Object(f.a)(de, {
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
                        return p.__assign({}, e, {
                            loadMore: function(t) {
                                var n = null,
                                    i = null;
                                if (d(e.data.event)) i = u(e, "data.event.visibleChildren.edges");
                                else {
                                    if (!c(e.data.event)) return;
                                    i = u(e, "data.event.parent.visibleChildren.edges")
                                }
                                n = i && i.length > 0 && i[t ? 0 : i.length - 1].cursor || null;
                                var a = {
                                    eventName: e.data.event.id,
                                    afterLimit: t ? null : 10,
                                    afterCursor: t ? null : n,
                                    beforeLimit: t ? 5 : null,
                                    beforeCursor: t ? n : null
                                };
                                return e.data.fetchMore({
                                    query: de,
                                    variables: p.__assign({}, a, {
                                        endsAfter: c(e.data.event) ? e.data.variables.endsAfter : null
                                    }),
                                    updateQuery: function(e, n) {
                                        var i = n.fetchMoreResult;
                                        return d(e.event) && d(i.event) ? {
                                            event: s(e.event, i.event, t)
                                        } : c(e.event) && c(i.event) ? {
                                            event: function(e, t, n) {
                                                var i = e.parent;
                                                return i && t.parent && (i = s(i, t.parent, n)), p.__assign({}, e, {
                                                    parent: i
                                                })
                                            }(e.event, i.event, t)
                                        } : e
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("EventLandingPage", {
                    destination: b.a.EventDetails
                }), Object(k.a)({
                    location: S.PageviewLocation.EventDetails,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    }
                })], t)
            }(v.Component)),
            ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return e.match.params.eventName !== this.props.match.params.eventName
                }, t.prototype.render = function() {
                    return v.createElement(ce, p.__assign({}, this.props))
                }, t
            }(v.Component);
        n.d(t, "EventLandingPage", function() {
            return ue
        })
    },
    OFFm: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            l = n("+xm8"),
            r = n("f2i/"),
            s = n("Aj/L"),
            o = n("TToO"),
            d = n("U7vG"),
            c = n("BhyV"),
            u = n("6sO2"),
            m = n("oIkB"),
            p = n("MQiv"),
            v = n("Odds"),
            g = n("Ru53"),
            h = n("9SRT"),
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleButton = function(e) {
                        return e && (e.stopPropagation(), e.preventDefault()), t.toggleFollowing()
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    var e = Object(u.d)("Remind Me", "FollowEvent"),
                        t = Object(u.d)("Reminder Set", "FollowEvent");
                    if (this.props.small) {
                        var n = e,
                            i = v._11.Heart;
                        return this.props.areNotificationsEnabled && (n = t, i = v._11.FollowCheck), d.createElement(v._31, {
                            label: n
                        }, d.createElement(v.v, {
                            size: v.x.Default,
                            icon: i,
                            onClick: this.handleButton,
                            ariaLabel: n
                        }))
                    }
                    return d.createElement(v.u, {
                        type: this.props.areNotificationsEnabled ? v.z.Success : v.z.Default,
                        onClick: this.handleButton,
                        icon: this.props.areNotificationsEnabled ? v._11.FollowCheck : v._11.Heart,
                        ariaLabel: this.props.areNotificationsEnabled ? t : e
                    }, this.props.areNotificationsEnabled ? t : e)
                }, t.prototype.toggleFollowing = function() {
                    if (!this.props.isLoggedIn) return this.props.login();
                    if (this.props.areNotificationsEnabled) {
                        var e = o.__assign({}, Object(m.a)({
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
                        e = o.__assign({}, Object(m.a)({
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
            k = Object(c.compose)(Object(c.graphql)(g, {
                name: "followEvent"
            }), Object(c.graphql)(h, {
                name: "unfollowEvent"
            }))(f),
            b = Object(i.a)(function(e) {
                return {
                    isLoggedIn: Object(s.d)(e)
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    login: function() {
                        return Object(r.f)(l.a.EventFollowButton)
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
            l = n("6sO2"),
            r = n("bhVC"),
            s = n("+Znq"),
            o = n("MQiv"),
            d = n("Odds"),
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onShareClicked = function(e) {
                        var n = "";
                        switch (e) {
                            case r.b.Twitter:
                                n = "twitter";
                                break;
                            case r.b.Facebook:
                                n = "facebook";
                                break;
                            case r.b.Reddit:
                                n = "reddit";
                                break;
                            case r.b.VKontakte:
                                n = "vk";
                                break;
                            default:
                                n = "unknown"
                        }
                        Object(o.c)({
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
                    return a.createElement(s.a, null, a.createElement(d.u, {
                        dropdown: !0,
                        type: d.z.Hollow
                    }, Object(l.d)("Share", "ShareEvent")), a.createElement(d.p, {
                        direction: this.props.balloonDirection
                    }, a.createElement(d.V, {
                        padding: 1
                    }, a.createElement(d.V, {
                        display: d.H.Flex,
                        flexDirection: d.J.Row,
                        flexWrap: d.K.NoWrap,
                        justifyContent: d.U.Center
                    }, a.createElement(r.a, {
                        type: r.b.Twitter,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(r.a, {
                        type: r.b.Facebook,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(r.a, {
                        type: r.b.Reddit,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(r.a, {
                        type: r.b.VKontakte,
                        text: this.props.title,
                        url: e,
                        onShareClick: this.onShareClicked
                    }), a.createElement(r.a, {
                        type: r.b.Copy,
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
        var i = n("TToO"),
            a = n("HW6M"),
            l = n("U7vG"),
            r = n("F8kA"),
            s = n("6sO2"),
            o = n("hdYS"),
            d = n("DtWM"),
            c = n("+Znq"),
            u = n("7vx8"),
            m = n("czpb"),
            p = n("RH2O"),
            v = n("Aj/L"),
            g = n("N221"),
            h = n("jF7o"),
            f = n("iMOk"),
            k = n("WVx7"),
            b = n("ySfT"),
            S = n("ZJYd"),
            y = n("/LBW"),
            E = n("Odds"),
            N = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(S.b)({
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
                    var e = l.createElement(E.V, null, l.createElement(E.V, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: E._24.Center
                    }, l.createElement(E._23, {
                        type: E._28.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), l.createElement(E.V, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span,
                        color: E.F.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), l.createElement(E.Q, {
                        margin: {
                            left: .5
                        }
                    }, l.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), l.createElement(E.V, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: E._24.Center
                    }, l.createElement(E.Q, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(E._23, {
                        type: E._28.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), l.createElement(E.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? l.createElement(E.V, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, l.createElement(E.V, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, l.createElement(E.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: E.z.Text
                    }, l.createElement(E._10, {
                        asset: E._11.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), l.createElement(E.V, {
                        textAlign: E._24.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, l.createElement(E.e, {
                        type: E.i.SlideInLeft,
                        duration: E.g.Long,
                        enabled: !0
                    }, l.createElement(b.a, null)))) : this.props.animateFirstTimeUserIntro ? l.createElement(E.Q, {
                        className: "bits-first-time-user-prompt"
                    }, l.createElement(E.e, {
                        type: E.i.SlideInRight,
                        duration: E.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : l.createElement(E.V, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(l.Component)),
            _ = n("jxGs"),
            w = n("bkpq"),
            A = n("CSlQ"),
            F = n("annQ"),
            C = (n("lGVF"), function(e) {
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
                        Object(h.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return l.createElement(E._19, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
                        alignItems: E.c.Center,
                        justifyContent: E.U.Center,
                        textAlign: E._24.Center,
                        padding: {
                            y: 5
                        }
                    }, l.createElement(E.Z, {
                        delay: 0
                    }), l.createElement(E.V, {
                        padding: {
                            top: 2
                        }
                    }, l.createElement(E._23, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(S.c)(e)
                        });
                        t && t.type === _.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = l.createElement(N, {
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
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = l.createElement(E._19, {
                        borderBottom: !0,
                        textAlign: E._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: l.createElement(f.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = l.createElement(E._19, {
                        borderBottom: !0,
                        textAlign: E._24.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: l.createElement(f.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = l.createElement(k.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: y.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), l.createElement(g.b, {
                        className: "get-bits-button-content"
                    }, l.createElement(E.V, null, n, e, i))
                }, t = i.__decorate([Object(A.c)("GetBitsButtonContent"), Object(u.a)(F, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(w.a)(e.data.user.cheer.emotes), n = e.data.user.id);
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
            I = function(e) {
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
                    return this.props.channelLogin && (e = l.createElement(C, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), l.createElement(c.a, {
                        onToggle: this.toggleBalloon
                    }, l.createElement(E.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), l.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.Large
                    }, e))
                }, t = i.__decorate([Object(A.c)("GetBitsButton")], t)
            }(l.Component),
            L = Object(p.a)(function(e) {
                return {
                    isLoggedIn: Object(v.d)(e)
                }
            })(I),
            O = n("E9Qg"),
            T = (n("4Jix"), n("Ojfd")),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        i = this.props.data;
                    return i && i.loading || !this.props.firstPageLoaded ? e = l.createElement(E._3, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    }) : (i && i.user && i.user.bannerImageURL ? t = {
                        backgroundImage: "url(" + i.user.bannerImageURL + ")"
                    } : (n["channel-banner--default"] = !0, t = {
                        backgroundImage: "url(" + O + ")"
                    }), e = l.createElement("div", {
                        className: "channel-banner__image",
                        style: t
                    })), l.createElement("div", {
                        className: a("channel-banner", n),
                        "data-test-selector": "channel-banner",
                        onTransitionEnd: this.props.onTransitionEnd
                    }, l.createElement(E.Q, {
                        fullWidth: !0
                    }, e))
                }, t
            }(l.Component),
            V = Object(u.a)(T, {
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
            })(x),
            U = Object(p.a)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(V),
            B = n("2KeS"),
            D = n("V5M+"),
            j = n("J92i"),
            R = Object(p.a)(function(e) {
                return {
                    authToken: Object(v.a)(e)
                }
            }, function(e, t) {
                return Object(B.bindActionCreators)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(D.c)()
                    }
                }, e)
            })(j.a),
            P = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(R, {
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
                    return l.createElement(E.V, {
                        className: "edit-profile-overlay",
                        display: E.H.Flex,
                        justifyContent: E.U.Center,
                        alignContent: E.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, l.createElement(E.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: E._11.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(A.c)("EditProfileOverlay")], t)
            }(l.Component)),
            H = Object(p.a)(null, function(e) {
                return Object(B.bindActionCreators)({
                    showModal: D.d
                }, e)
            })(P),
            M = n("70dR"),
            W = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return z
        }), n.d(t, "a", function() {
            return J
        });
        var z, G = "channel-header__edit-profile-overlay",
            q = "user-channel-header-item",
            K = "channel-header__verified-badge",
            Q = "channel-header__live-indicator",
            $ = "channel-header__channel-link";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(z || (z = {}));
        var J = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = l.createElement(E._31, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: E._33.Right
                }, l.createElement(E.V, {
                    className: "channel-header__verified",
                    "data-target": K,
                    display: E.H.Flex,
                    alignItems: E.c.Center,
                    margin: {
                        left: 1
                    }
                }, l.createElement(E._10, {
                    asset: E._11.Verified
                }))), t.liveIndicatorElement = l.createElement(E.V, {
                    margin: {
                        left: 1
                    },
                    "data-target": Q
                }, l.createElement(E._31, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: E._33.Right
                }, l.createElement(E.X, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? l.createElement(E._19, {
                        className: G,
                        background: E.m.Overlay,
                        position: E._4.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: E.H.InlineFlex,
                        alignItems: E.c.Center,
                        justifyContent: E.U.Center
                    }, l.createElement(H, {
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
                var p = this.state.live && !this.isActiveTab(z.Channel),
                    v = this.createChannelLinks(n, i, u),
                    g = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(z.Channel)
                    },
                    h = null;
                this.canRenderBitsButton() && (h = l.createElement(E.V, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(L, {
                    channelLogin: this.props.channelLogin
                })));
                var f, k = l.createElement(E.V, {
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, l.createElement(E.V, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: E.H.Flex,
                    flexShrink: 0,
                    alignItems: E.c.Stretch
                }, l.createElement(E.V, {
                    position: E._4.Relative
                }, l.createElement(E.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? l.createElement(E._23, {
                    type: E._28.H5
                }, e) : l.createElement(E.V, {
                    alignItems: E.c.Center
                }, l.createElement(E._3, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                f = this.isActiveTab(z.Channel) ? l.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": $,
                    "data-a-target": q
                }, k) : this.props.data && this.props.data.user && this.props.data.user.login ? l.createElement(r.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": $,
                    "data-a-target": q
                }, k) : k;
                var b = this.state.bannerHidden ? E.H.HideAccessible : E.H.Block,
                    S = null;
                return this.isActiveTab(z.Channel) && (S = l.createElement(E.V, {
                    display: b
                }, l.createElement(U, {
                    channelLogin: this.props.channelLogin,
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), l.createElement(E.V, {
                    className: "channel-header",
                    flexShrink: 0
                }, S, l.createElement(E.V, {
                    display: E.H.Flex,
                    justifyContent: E.U.Between,
                    flexWrap: E.K.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, l.createElement(E.V, {
                    display: E.H.Flex,
                    alignItems: E.c.Stretch,
                    flexShrink: 0,
                    flexWrap: E.K.NoWrap,
                    "data-target": "channel-header-left"
                }, l.createElement(E.Q, {
                    className: a(g),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    alignItems: E.c.Center,
                    flexShrink: 0
                }, f), this.renderTabs(v), l.createElement(E.V, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: E.d.Center,
                    "data-target": "channel-header-button"
                }, l.createElement(c.a, {
                    alwaysMountBalloonContent: !0
                }, l.createElement(E.v, {
                    icon: E._11.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), l.createElement(E.p, {
                    direction: E.q.Bottom,
                    noTail: !0
                }, l.createElement(E.V, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(v)))))), l.createElement(E.V, {
                    display: E.H.Flex,
                    flexWrap: E.K.NoWrap,
                    flexShrink: 0,
                    alignItems: E.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, l.createElement(E.V, {
                    className: "channel-header__follow-button",
                    display: E.H.Flex,
                    alignItems: E.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, l.createElement(o.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), l.createElement(E.V, {
                    margin: {
                        left: 1
                    }
                }, l.createElement(M.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), h)), l.createElement(d.a, {
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
                    var n = e.count ? l.createElement(E.V, {
                            className: "channel-header__item-count",
                            display: E.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(E._23, {
                            type: E._28.Span,
                            fontSize: E.L.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), l.createElement(E.Q, {
                        key: "channel-header__item--" + e.label,
                        alignItems: E.c.Center,
                        flexShrink: 0
                    }, l.createElement(r.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        disabled: "#" === a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), l.createElement(E.V, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: E.H.Flex
                    }, l.createElement(E._23, {
                        type: E._28.Span,
                        fontSize: E.L.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? l.createElement(E.V, {
                            className: "channel-header__item-count",
                            display: E.H.Flex,
                            margin: {
                                left: .5
                            }
                        }, l.createElement(E._23, {
                            type: E._28.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        r = {};
                    return e.isExternal && (r.targetBlank = !0), l.createElement(E.V, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, l.createElement(E.T, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, r), l.createElement(E.V, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: E.H.Flex
                    }, l.createElement(E._23, {
                        type: E._28.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(z.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(z.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(z.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(z.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(z.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: this.isActiveTab(z.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return z[this.props.currentPage] === z[e]
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var a = this.getWidth(this.channelHeader).width,
                            l = this.getWidth(e).width + this.getWidth(t).width + 20 - a;
                        if (l > 0)
                            for (var r = n.length - 1; r >= 0; r--) {
                                if (!(o = n[r]).classList.contains("channel-header__item--hide")) {
                                    var s = this.getWidth(o);
                                    if (o.classList.add("channel-header__item--hide"), i[r].classList.remove("channel-header__item--hide"), (l -= s.width) <= 0) break
                                }
                            } else
                                for (r = 0; r < n.length; r++) {
                                    var o;
                                    if ((o = n[r]).classList.contains("channel-header__item--hide")) {
                                        o.classList.remove("channel-header__item--hide");
                                        if ((s = this.getWidth(o)).width >= Math.abs(l)) {
                                            o.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        o.classList.remove("channel-header__item--hide"), i[r].classList.add("channel-header__item--hide"), l += s.width
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
                return this.props.data && !this.props.data.loading && this.props.currentPage !== z.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(W, {
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
            return "" === t && (t = "png"), t
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
            return fetch(a.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + a.a.authClientID + "&api_version=" + a.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: l.b[n].id
                })
            })
        }, t.a = function(e, t, n, l) {
            return i.__awaiter(this, void 0, void 0, function() {
                var r;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(a.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + a.a.authClientID + "&api_version=" + a.a.defaultAPIVersion + "&image_type=" + n + "&format=" + l, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return r = i.sent(), [2, r.json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            a = n("6sO2"),
            l = n("J92i")
    },
    WClm: function(e, t) {},
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, l;
                return u.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            if (t = v.b.get("bits_truex_partner_hash", ""), !(n = v.b.get("bits_truex_api_url", "")) || !t) return v.i.warn("Truex API info missing from dynamic settings"), [2, k.Error];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = r.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = r.sent()) && Array.isArray(a) && a.length) return [2, k.Available];
                            r.label = 4;
                        case 4:
                            return [2, k.Unavailable];
                        case 5:
                            return l = r.sent(), v.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", l), [2, k.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function a(e) {
            return {
                adModalOpen: Object(d.b)(e, _),
                isLoggedIn: Object(c.d)(e)
            }
        }

        function l(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(o.d)(_, t))
                }
            }
        }
        var r, s = n("RH2O"),
            o = n("V5M+"),
            d = n("Iw4B"),
            c = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            v = n("6sO2"),
            g = n("+8VM"),
            h = n("7vx8"),
            f = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(r || (r = {}));
        var k, b = n("4JjK"),
            S = n("/LBW"),
            y = n("Odds"),
            E = n("zzpv"),
            N = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, l;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
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
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(f.a)({
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
                                        return l = s.sent(), v.i.warn("Error while redeeming bits for truex ad", l), this.props.onError && this.props.onError(r.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === b.a.LimitReached ? this.props.onError(r.LimitReached) : t.type === b.a.Adblock ? this.props.onError(r.Adblock) : t.type === b.a.OnError ? this.props.onError(r.Unknown) : this.hasAwarded || this.props.onError(r.ExitEarly)), this.props.closeModal(), [3, 10];
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
                    return m.createElement(y._19, {
                        background: y.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(g.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(h.a)(E, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            _ = Object(s.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    closeModal: o.c
                }, e)
            })(N),
            w = n("HW6M"),
            A = n("BhyV"),
            F = n("jF7o"),
            C = n("w9tK"),
            I = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(k || (k = {}));
        var L, O = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(v.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(y._19, {
                    className: "bits-buy-card__offer-row",
                    display: y.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: y.U.Between,
                    flexWrap: y.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(y.V, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(v.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(y.V, {
                    flexShrink: 0,
                    display: y.H.Flex,
                    flexDirection: y.J.Column,
                    alignItems: y.c.End
                }, m.createElement(y.u, {
                    type: y.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(v.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(y.V, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: y.d.Stretch,
                    textAlign: y._24.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            T = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            x = function(e) {
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
                    return T.test(navigator.userAgent) ? null : m.createElement(O, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            V = n("jxGs"),
            U = n("3iBR"),
            B = n("iydZ"),
            D = n("ZJYd"),
            j = n("CFVp"),
            R = n("qe65"),
            P = (n("OLKT"), function(e) {
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
                    if (this.props.offer.type === V.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(x, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(D.c)(this.props.offer) ? t = m.createElement(y.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(y._23, {
                        type: y._28.Strong,
                        fontSize: y.L.Size6
                    }, Object(v.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(D.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === V.c && (t = m.createElement(y.V, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(y._23, {
                        type: y._28.Strong,
                        fontSize: y.L.Size6
                    }, Object(v.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(v.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(D.c)(this.props.offer) || Object(D.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(v.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? y._19 : y.V;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: y.H.Flex,
                        justifyContent: y.U.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: y.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(y.V, {
                        display: y.H.Flex,
                        justifyContent: y.U.Between,
                        alignItems: y.c.Center
                    }, m.createElement(y.V, {
                        flexGrow: 1
                    }, m.createElement(y._23, {
                        type: y._28.H5,
                        color: y.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(y.V, {
                        flexShrink: 0,
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.End
                    }, m.createElement(y.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(y.V, {
                        alignSelf: y.d.Stretch,
                        textAlign: y._24.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[U.f];
                    t || (t = Object(j.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(y.V, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(R.a, {
                            key: e.bits,
                            sources: Object(B.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            H = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, l) {
                    var r = m.createElement(P, {
                            key: a.id,
                            offer: a,
                            isLastRow: l + 1 < e.offers.length,
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
                        o = Object(D.c)(a),
                        d = a.type === V.a;
                    o && !e.hidePromos ? t.push(r) : s && !o ? t.push(r) : d && !e.hideWateb ? i = r : d || s || n.push(r)
                }), e.fullsize ? m.createElement(y.V, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: y.K.NoWrap,
                    display: y.H.Flex,
                    flexDirection: y.J.Column
                }, i, t, n) : m.createElement(I.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(y.V, {
                    flexGrow: 1,
                    flexWrap: y.K.NoWrap,
                    display: y.H.Flex,
                    flexDirection: y.J.Column
                }, i, t, n))
            }),
            M = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(y._23, {
                    italic: !0,
                    type: y._28.P,
                    color: y.F.Alt
                }, Object(v.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(y._23, {
                    color: y.F.Alt
                }, Object(v.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(y._23, {
                    color: y.F.Alt
                }, Object(v.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(y._19, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(y.V, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(y._23, {
                    type: y._28.H4,
                    color: y.F.Alt
                }, Object(v.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            W = n("nrdj"),
            z = function(e) {
                return m.createElement(y.V, {
                    display: y.H.Flex,
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    fullWidth: !0,
                    flexWrap: y.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(W.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(y.V, {
                    display: y.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    flexWrap: y.K.NoWrap
                }, m.createElement(y._23, {
                    type: y._28.H4,
                    bold: !0
                }, Object(v.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(y.Q, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(y._23, {
                    color: y.F.Alt2
                }, Object(v.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(v.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(y.V, {
                    display: y.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.U.Between
                }, m.createElement(y.u, {
                    onClick: e.onStartCheering
                }, Object(v.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(y.u, {
                    type: y.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(v.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            G = function(e) {
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
                    return m.createElement(z, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            q = (n("q8Cw"), function(e) {
                var t = Object(v.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(v.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case r.Adblock:
                        i = "adserroradblock", n = Object(v.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case r.LimitReached:
                        i = "adserrorlimit", t = Object(v.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(v.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case r.ExitEarly:
                        n = Object(v.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(y.V, {
                    className: "watch-ad-error__footer",
                    display: y.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.U.Center
                }, m.createElement(y.u, {
                    onClick: e.onTryAgain
                }, Object(v.d)("Try Again", "Bits--WatchAdError")));
                return e.type === r.LimitReached && (a = m.createElement(y.V, {
                    className: "watch-ad-error__footer",
                    display: y.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: y.d.Stretch,
                    justifyContent: y.U.Between
                }, m.createElement(y.u, {
                    onClick: e.onClose
                }, Object(v.d)("Got It", "Bits--WatchAdError")), m.createElement(y.u, {
                    onClick: e.onTryAgain,
                    type: y.z.Hollow
                }, Object(v.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(y.V, {
                    padding: {
                        x: 1
                    },
                    display: y.H.Flex,
                    flexGrow: 1,
                    flexDirection: y.J.Column,
                    alignItems: y.c.Center,
                    fullWidth: !0,
                    flexWrap: y.K.NoWrap
                }, m.createElement(y.V, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: U.b + "/light/static/1/" + i + ".png"
                })), m.createElement(y.V, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(y._23, {
                    type: y._28.H4,
                    bold: !0
                }, t)), m.createElement(y._23, {
                    color: y.F.Alt2
                }, n), a)
            }),
            K = n("CSlQ"),
            Q = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(L || (L = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: L.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(F.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: L.Awarded,
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
                            wateb: L.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === L.Error && (t.setState({
                            wateb: L.Inactive
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
                        }, m.createElement(y._10, {
                            asset: y._11.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(y._19, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.U.Center,
                        textAlign: y._24.Center
                    }, e), m.createElement(y.Z, {
                        delay: 0
                    }), m.createElement(y.V, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(y._23, {
                        italic: !0
                    }, Object(v.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(y.V, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.U.Center,
                        padding: 2,
                        textAlign: y._24.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(y._23, {
                        italic: !0
                    }, Object(v.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(y._19, u.__assign({
                        className: w(t, "bits-buy-card--shorter"),
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        alignItems: y.c.Center,
                        justifyContent: y.U.Center,
                        textAlign: y._24.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var l = a.filter(function(e) {
                            return e.type === V.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        r = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(H, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: r,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        o = null;
                    return this.props.location === S.b.ChatTooltip && (o = m.createElement(M, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: l
                    })), m.createElement(y._19, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: y.H.Flex,
                        flexDirection: y.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, o, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case L.Awarded:
                            return m.createElement(G, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case L.Error:
                            return m.createElement(q, {
                                type: this.state.watebError || r.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(h.a)(Q, {
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
            J = Object(A.compose)(Object(K.c)("BitsBuyCard", {
                autoReportInteractive: !0,
                destination: C.a.BitsBuyCard
            }))($),
            Y = Object(s.a)(a, l)(J);
        n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return Y
        })
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            l = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._3, null)), i.createElement(a.B, null, i.createElement(a.V, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._3, {
                    width: 40,
                    height: 56
                })), i.createElement(a.V, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._23, null, i.createElement(a._3, {
                    width: 150
                })), i.createElement(a._23, {
                    fontSize: a.L.Size7
                }, i.createElement(a._3, {
                    width: 100
                }))))))
            }
    },
    ZJYd: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type === r.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== r.a && i(e) && null !== e.promotion && e.promotion.type === r.d
        }, t.e = function(e) {
            return e.type !== r.a && i(e) && null !== e.promotion && e.promotion.type === r.e
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
                l = t.smallestCheermote;
            if (n) {
                var r = {
                    cheerAboveMaxBitsPerEmote: i > s.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: l < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > s.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return a.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(o.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(l.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(o.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var a = n("TToO"),
            l = n("Ouuk"),
            r = n("jxGs"),
            s = n("3iBR"),
            o = n("/LBW")
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var i = n("TToO"),
            a = n("HW6M"),
            l = (n.n(a), n("OAwv")),
            r = (n.n(l), n("U7vG")),
            s = (n.n(r), n("F8kA")),
            o = n("6sO2"),
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
                    return null !== t && (e = r.createElement(m.V, {
                        position: m._4.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(m._7, {
                        size: m._8.Small,
                        value: t,
                        mask: !0
                    }))), r.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._40)(this.props)), r.createElement(m.A, null, r.createElement(m.V, {
                        fullWidth: !0
                    }, r.createElement(m.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(m._19, {
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
                    }, r.createElement(m._18, {
                        "data-test-selector": "video-view-count",
                        icon: m._11.GlyphViews,
                        label: Object(o.d)("views", "VideoPreviewCard"),
                        value: Object(o.f)(this.props.video.viewCount)
                    })), r.createElement(m._19, {
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
                    }, r.createElement(m._18, {
                        "data-test-selector": "video-length",
                        icon: m._11.GlyphLength,
                        label: Object(o.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), r.createElement(m.B, null, r.createElement(m.V, {
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
                    var t = l.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return r.createElement(m.j, {
                        overflow: !0
                    }, r.createElement(s.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, r.createElement("div", {
                        className: t,
                        "data-test-selector": "preview-image-wrapper"
                    }, r.createElement(m.Q, {
                        flexShrink: 0
                    }, r.createElement("figure", null, r.createElement(m.j, {
                        ratio: m.k.Aspect16x9
                    }, r.createElement("img", {
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
                    return r.createElement(m.V, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, r.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, r.createElement(m.Q, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, r.createElement(m._31, {
                        display: m.H.Block,
                        direction: m._33.Bottom,
                        label: e.name
                    }, r.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, r.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || o.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(o.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = r.createElement(s.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return r.createElement(m.V, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, r.createElement(m.V, {
                        "data-test-selector": "video-title",
                        overflow: m._0.Hidden,
                        position: m._4.Relative
                    }, r.createElement(m._23, {
                        color: m.F.Base,
                        fontSize: m.L.Size5,
                        lineHeight: m.W.Heading
                    }, r.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), r.createElement(m.V, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, r.createElement(m._23, {
                        type: m._28.Span,
                        color: m.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, r.createElement(m.Q, {
                        padding: {
                            x: .5
                        }
                    }, r.createElement("span", null, "·")), t)))
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
            }(r.Component)),
            g = Object(u.c)("VideoPreviewCard")(v)
    },
    annQ: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !l[t] && (l[t] = !0, !0)
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
        var l = {};
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
                l = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? l.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
            }), a.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: i,
                        animated: l
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
                                    url: r.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: i
                                })
                            })
                        })
                    }), i({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: r.e[l.a.Yellow],
                        images: n
                    })
                }()), s.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var o = a.__assign({}, e, {
                    indexedTiers: new Map(s.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: s
                });
                t.push(o), n[o.prefix.toLowerCase()] = o
            }), {
                indexedActions: n,
                orderedActions: t
            }
        };
        var a = n("TToO"),
            l = n("I89S"),
            r = n("3iBR")
    },
    cSst: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            l = n("F8kA"),
            r = n("Odds"),
            s = function(e) {
                return a.createElement(r.V, {
                    margin: {
                        right: 1
                    },
                    display: r.H.Flex,
                    alignItems: r.c.Center
                }, a.createElement(r._31, {
                    align: r._32.Left,
                    label: e.tooltip,
                    direction: r._33.Bottom
                }, a.createElement(r.V, {
                    margin: {
                        right: .5
                    }
                }, a.createElement(r._19, {
                    display: r.H.Flex,
                    alignItems: r.c.Center,
                    color: r.F.Alt2
                }, a.createElement(r._10, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), a.createElement(r._23, {
                    fontSize: r.L.Size5,
                    ellipsis: !0
                }, a.createElement(l.a, i.__assign({
                    to: e.linkTo
                }, Object(r._40)(e), {
                    target: e.target
                }), e.title))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            l = n("MSvX");
        t.a = function(e) {
            return i.b.get(l.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? r + e : r + e.pathname
        }, t.b = function() {
            return !i.b.get(l.a, !1) && i.a.buildType === a.a.Production
        };
        var r = "https://www.twitch.tv"
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
                                "1x": Object(s.e)(e.emoteID, 1),
                                "2x": Object(s.e)(e.emoteID, 2),
                                "4x": Object(s.e)(e.emoteID, 4)
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
                type: r.a.Post,
                id: e.id,
                badges: c,
                bits: e.bitsUsed,
                timestamp: 0,
                deleted: !1,
                user: a.__assign({
                    userID: e.author.id,
                    userLogin: e.author.login,
                    userType: l.a.User,
                    color: e.authorColor
                }, Object(o.a)(e.authorName, e.author.login)),
                messageParts: Object(s.f)(e.body.content, d, e.bitsUsed, t, n, e.authorName)
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
            l = n("6Agf"),
            r = n("qkCi"),
            s = n("l21v"),
            o = n("e1CU")
    },
    ea40: function(e, t) {},
    fHoP: function(e, t) {},
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(l.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(d.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(o.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === r.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(c.a, {
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
            l = n("6sO2"),
            r = n("NXs7"),
            s = n("3iBR"),
            o = n("iydZ"),
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
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var l = i.referenceTracking,
                                    r = l.content,
                                    s = l.medium,
                                    d = l.content_index;
                                o.n.tracking.trackPageview(a.__assign({
                                    content: r,
                                    medium: s,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, o.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? l.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = l.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(r.Component);
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            l = n("OAwv"),
            r = n("U7vG"),
            s = n("F8kA"),
            o = n("6sO2");
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
            return l
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "c", function() {
            return s
        });
        var i = "AD",
            a = "BUNDLE",
            l = "first_time_purchase",
            r = "single_purchase",
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
                l = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(l, 2) + ":" + i(a, 2) + ":" + i(n, 2) : l ? l + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
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
            l = n("U7vG"),
            r = n("6sO2"),
            s = n("iydZ"),
            o = n("CFVp"),
            d = n("qe65"),
            c = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(i || (i = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(o.b)());
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
                var v = e.formattedNumber ? Object(r.e)(e.amount) : e.amount;
                m = l.createElement(c.Q, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? c._24.Center : void 0
                }, l.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, v))
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
                h = l.createElement(d.a, {
                    className: g,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (h = null), l.createElement(c.V, {
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
    weaG: function(e, t) {},
    x583: function(e, t) {},
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            switch (e) {
                case r.Success:
                    return {
                        message: Object(a.d)("Success!", "Profile Edit"),
                        type: l._2.Success
                    };
                case r.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: l._2.Alert
                    };
                case r.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: l._2.Alert
                    };
                case r.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: l._2.Alert
                    };
                case r.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: l._2.Alert
                    };
                case r.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: l._2.Alert
                    };
                case r.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: l._2.Brand
                    };
                case r.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: l._2.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: l._2.Alert
                    }
            }
        };
        var i, a = n("6sO2"),
            l = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {}));
        var r;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(r || (r = {}))
    },
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            l = n("3iBR"),
            r = n("qe65"),
            s = n("Odds"),
            o = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": l.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": l.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            d = function() {
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
                }, i.createElement(r.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: o
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
//# sourceMappingURL=pages.event-landing-f0022c067282105d8b81f918feaa956b.js.map