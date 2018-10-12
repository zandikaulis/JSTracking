(window.webpackJsonp = window.webpackJsonp || []).push([
    [97], {
        "0FG4": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return u
            });
            var r, i = n("RcPG"),
                o = n("a1OF");
            ! function(e) {
                e[e.Position = 0] = "Position", e[e.Token = 1] = "Token"
            }(r || (r = {}));
            var a = "0";

            function c(e, t, n) {
                var a = n.type === r.Position ? t : e,
                    c = n.map[a];
                if (c) {
                    var s = function(e, t) {
                        return {
                            images: {
                                sources: {
                                    "1x": Object(o.e)(t, 1),
                                    "2x": Object(o.e)(t, 2),
                                    "4x": Object(o.e)(t, 4)
                                },
                                themed: !1
                            },
                            alt: e
                        }
                    }(e, c.id);
                    return {
                        type: i.a.Emote,
                        content: s
                    }
                }
                return null
            }
            var s = {
                "\\:\\&gt\\;": [":>"],
                "\\&gt\\;\\(": [">("],
                "\\&lt\\;\\]": ["<]"],
                "\\&lt\\;3": ["<3"],
                ":-?(?:7|L)": [":-7", ":-L", ":7", ":L"],
                "[oO](_|\\.)[oO]": ["o_o", "O_O", "o_O", "O_o", "o.o", "O.O", "o.O", "O.o"],
                "\\;-?(p|P)": [";-p", ";-P", ";p", ";P"],
                "\\;-?\\)": [";-)", ";)"],
                "\\:-?(o|O)": [":-o", ":-O", ":o", ":O"],
                "\\:-?(p|P)": [":-p", ":-P", ":p", ":P"],
                "\\:-?(S|s)": [":-S", ":-s", ":s", ":S"],
                "\\:-?[\\\\/]": [":-/", ":-\\", ":/", ":\\"],
                "\\:-?[z|Z|\\|]": [":-|", ":-Z", ":-z", ":|", ":Z", ":z"],
                "\\:-?\\(": [":-(", ":("],
                "\\:-?\\)": [":-)", ":)"],
                "\\:-?D": [":-D", ":D"],
                "#-?[\\\\/]": ["#-/", "#-\\", "#/", "#\\"],
                "B-?\\)": ["B-)", "B)"],
                "R-?\\)": ["R-)", "R)"]
            };

            function u(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var i = r[n];
                    if (i && i.emotes)
                        for (var o = 0, c = i.emotes; o < c.length; o++) {
                            var u = c[o];
                            if (u && u.id && u.token)
                                for (var l = 0, d = s[u.token] || [u.token]; l < d.length; l++) {
                                    var p = d[l];
                                    t[p] && i.id === a || (t[p] = {
                                        id: u.id,
                                        token: p
                                    })
                                }
                        }
                }
                return t
            }
        },
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return o
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "b", function() {
                return c
            }), n.d(t, "a", function() {
                return s
            }), n.d(t, "t", function() {
                return u
            }), n.d(t, "n", function() {
                return l
            }), n.d(t, "p", function() {
                return d
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return f
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "g", function() {
                return b
            }), n.d(t, "e", function() {
                return O
            }), n.d(t, "i", function() {
                return x
            }), n.d(t, "h", function() {
                return y
            }), n.d(t, "f", function() {
                return E
            }), n.d(t, "k", function() {
                return C
            }), n.d(t, "u", function() {
                return w
            }), n.d(t, "s", function() {
                return k
            }), n.d(t, "d", function() {
                return _
            });
            var r, i = n("uYEN"),
                o = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                a = "https://d3aqoihi2n8ty8.cloudfront.net",
                c = a + "/cheer",
                s = a + "/actions",
                u = "bonus",
                l = 8e5,
                d = 1e5,
                p = 25e4,
                f = 500,
                h = 1e3,
                m = "cheer",
                g = i.a.Purple,
                v = "UNKNOWN",
                b = "FIRST_PARTY",
                O = "CUSTOM",
                x = "SPONSORED",
                y = "THIRD_PARTY",
                E = "DISPLAY_ONLY",
                C = ((r = {})[i.a.Gray] = "#979797", r[i.a.Purple] = "#9c3ee8", r[i.a.Green] = "#1db2a5", r[i.a.Blue] = "#0099fe", r[i.a.Red] = "#f43021", r[i.a.Yellow] = "#f3a71a", r),
                w = "bits_sponsored_cheermotes",
                k = "bits_sponsored_cheermotes_announcement",
                _ = "bits_charity_event"
        },
        "60o1": function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = e,
                    r = !1;
                return n ? function(e) {
                    return e.split("").map(function(e) {
                        return e.charCodeAt(0) > 127
                    }).reduce(function(e, t) {
                        return e || t
                    })
                }(n) && (r = !0) : n = t, {
                    userDisplayName: n,
                    isIntl: r
                }
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "6j5V": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("RcPG");

            function i(e) {
                return {
                    type: r.a.Text,
                    content: e
                }
            }
        },
        RcPG: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(r || (r = {}))
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("cr+I"),
                o = n("q1tI"),
                a = n("wIs1"),
                c = n("/7QA");

            function s(e) {
                return function(t) {
                    var n = function(n) {
                        function a(t) {
                            var i = n.call(this, t) || this;
                            return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                                if (!(i.tracked || e.skip && e.skip(i.props))) {
                                    i.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = r.__assign({}, e.properties));
                                    var n = r.__assign({}, i.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var o = i.referenceTracking,
                                        a = o.content,
                                        s = o.medium,
                                        u = o.content_index,
                                        l = o.email_id;
                                    c.o.tracking.trackPageview(r.__assign({
                                        content: a,
                                        medium: s,
                                        content_index: u,
                                        email_id: l,
                                        location: e.location
                                    }, t))
                                }
                            }, c.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                        }
                        return r.__extends(a, n), a.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, a.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, a.prototype.render = function() {
                            return o.createElement(t, r.__assign({}, this.props))
                        }, a.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? i.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var r = "",
                                    o = i.stringify(t);
                                o.length > 0 && (r = "?" + o), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, a
                    }(o.Component);
                    return Object(a.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return l
            });
            var r = n("5zXJ"),
                i = n("RcPG"),
                o = {
                    indexedActions: {},
                    orderedActions: []
                },
                a = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function c(e, t) {
                var n = [],
                    r = e.split(/\s+/);
                return r.forEach(function(e, o) {
                    var a = s(e, t);
                    if (a) n.push(a);
                    else {
                        var c = n.length && n[n.length - 1],
                            u = "";
                        if (o < r.length - 1 && (u = " "), c && c.type === i.a.Text) c.content += e + u;
                        else {
                            var l = "";
                            o && (l = " "), n.push({
                                type: i.a.Text,
                                content: l + e + u
                            })
                        }
                    }
                }), n
            }

            function s(e, t) {
                var n = e.match(a);
                if (!n) return null;
                var r = n[1].toLowerCase(),
                    o = Number(n[2]),
                    c = t.indexedActions[r];
                if (c) {
                    var s = c.orderedTiers.find(function(e) {
                        return e.bits <= o
                    });
                    if (!s && o && (s = c.orderedTiers[0]), s) return {
                        type: i.a.Emote,
                        content: {
                            images: l(s),
                            alt: c.prefix,
                            cheerAmount: o,
                            cheerColor: s.color
                        }
                    }
                }
                return null
            }

            function u(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    i = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (i.has(e.alt)) {
                            (r = i.get(e.alt)) && (r.total += e.cheerAmount || 0, r.lastAppearance = t)
                        } else {
                            var r = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            i.set(e.alt, r)
                        }
                });
                var o = 1;
                return i.forEach(function(n) {
                    var i = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (i = e.matchedPercent)
                    });
                    var a = Math.trunc(n.total * i);
                    if (a > 0) {
                        var c = s(r.t + a, t);
                        c && e.splice(n.lastAppearance + o++, 0, c.content)
                    }
                }), e
            }

            function l(e, t, n) {
                var r, i;
                void 0 === n && (n = !0);
                var o = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (r = {}, r[t + "x"] = e.indexedImages.DARK[o].get(t), r),
                    light: (i = {}, i[t + "x"] = e.indexedImages.LIGHT[o].get(t), i)
                } : {
                    themed: !0,
                    dark: {
                        "1x": e.indexedImages.DARK[o].get(1),
                        "1.5x": e.indexedImages.DARK[o].get(1.5),
                        "2x": e.indexedImages.DARK[o].get(2),
                        "3x": e.indexedImages.DARK[o].get(3),
                        "4x": e.indexedImages.DARK[o].get(4)
                    },
                    light: {
                        "1x": e.indexedImages.LIGHT[o].get(1),
                        "1.5x": e.indexedImages.LIGHT[o].get(1.5),
                        "2x": e.indexedImages.LIGHT[o].get(2),
                        "3x": e.indexedImages.LIGHT[o].get(3),
                        "4x": e.indexedImages.LIGHT[o].get(4)
                    }
                }
            }
        },
        a1OF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return d
            }), n.d(t, "b", function() {
                return p
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "c", function() {
                return h
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "d", function() {
                return g
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                o = n("oe5X"),
                a = n("0FG4"),
                c = n("kRBY"),
                s = n("60o1"),
                u = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
                l = {};

            function d(e, t, n, i, o, a) {
                void 0 === o && (o = !1), void 0 === a && (a = !1);
                var c = Object(s.a)(t.displayName, t.username);
                return {
                    badges: t.badges || {},
                    bits: t.bits,
                    user: r.__assign({}, c, {
                        userLogin: t.username,
                        userID: t.userID,
                        userType: t.userType,
                        color: t.color || p(t.userID)
                    }),
                    messageParts: f(e, t.emotes || {}, t.bits, n, i, t.username),
                    deleted: o,
                    hidden: a,
                    timestamp: Date.now()
                }
            }

            function p(e, t) {
                return void 0 === t && (t = 15), "number" != typeof l[e] && (l[e] = Math.floor(Math.random() * t)), u[l[e]]
            }

            function f(e, t, n, r, s, u) {
                var l = Object(c.e)(i.o.store.getState()),
                    d = {
                        cheers: n ? r : void 0,
                        emotes: {
                            type: a.a.Position,
                            map: t
                        },
                        links: {
                            blockLinks: s,
                            parseClips: !0,
                            parseVods: !0
                        },
                        mentions: {
                            senderLogin: u,
                            sessionUser: l
                        }
                    };
                return Object(o.a)(e, d)
            }

            function h(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
            }

            function m(e, t) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
            }

            function g(e) {
                return {
                    src: m(e, 1),
                    srcSet: m(e, 1) + " 1x, " + m(e, 2) + " 2x, " + m(e, 3) + " 4x"
                }
            }
        },
        gTu3: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Default = 0] = "Default", e[e.Recipient = 1] = "Recipient", e[e.Sender = 2] = "Sender"
                }(r || (r = {}))
        },
        i6WW: function(e, t, n) {
            "use strict";
            var r = n("/7QA"),
                i = n("RcPG"),
                o = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?"),
                a = new RegExp("(?:^|\\s)(?:https?:\\/\\/)?(?:www\\.)?twitch\\.tv\\/(\\w+)\\/clip\\/(\\w+)(?:$|\\s)?");
            var c = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?");
            n.d(t, "a", function() {
                return u
            });
            var s = /^(?:(https?:\/\/)?((?:[\w#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./#%&()\-+=:?~]*)?))$/;

            function u(e, t) {
                var n = e.match(s);
                if (!n) return null;
                if (t.blockLinks) return {
                    type: i.a.Text,
                    content: " <" + Object(r.d)("deleted link", "CreateMessageData") + "> "
                };
                var u = n[1],
                    l = n[2],
                    d = "" + (u || "https://") + l;
                if (t.parseClips && function(e) {
                        void 0 === e && (e = "");
                        var t = o.test(e) && !e.includes("clips.twitch.tv/2017/"),
                            n = a.test(e);
                        return t || n
                    }(d)) {
                    var p = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(o);
                        if (t && t.length > 0 && void 0 !== t.index) return t[1];
                        var n = e.match(a);
                        return n && n.length > 0 && void 0 !== n.index ? n[2] : ""
                    }(d);
                    return {
                        type: i.a.ClipLink,
                        content: {
                            slug: p,
                            url: d,
                            displayText: e
                        }
                    }
                }
                if (t.parseVods && function(e) {
                        return void 0 === e && (e = ""), c.test(e)
                    }(d)) {
                    var f = function(e) {
                        void 0 === e && (e = "");
                        var t = e.match(c);
                        return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                    }(d);
                    return {
                        type: i.a.VideoLink,
                        content: {
                            id: f,
                            url: d,
                            displayText: e
                        }
                    }
                }
                return {
                    type: i.a.Link,
                    content: {
                        displayText: e,
                        url: d
                    }
                }
            }
        },
        jNLW: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                o = n("/7QA"),
                a = n("V+GM"),
                c = n("NvVO"),
                s = n("2xye"),
                u = n("a1OF"),
                l = n("GnwI"),
                d = n("rwoo"),
                p = n("Ue10"),
                f = (n("znYQ"), "https://help.twitch.tv/customer/portal/emails/new");
            var h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = function(e) {
                        switch (e) {
                            case d.a.ChannelNotLive:
                                return {
                                    title: Object(o.d)("Darn. Clipping is currently unavailable for this channel.", "ClipsError"),
                                    subtitle: Object(o.d)("This channel is offline. Try again when the channel goes live!", "ClipsError")
                                };
                            case d.a.UserBanned:
                                return {
                                    title: Object(o.d)("Darn. We can’t let you clip this channel because you’re banned from its chat.", "ClipsError"),
                                    subtitle: Object(o.d)("Please contact the channel owner or a moderator if you think there’s been a mistake.", "ClipsError")
                                };
                            case d.a.UserTimedOut:
                                return {
                                    title: Object(o.d)("Darn. We can’t let you clip this channel because you’re timed out from its chat.", "ClipsError"),
                                    subtitle: Object(o.d)("Please try again later or contact the channel owner or a moderator if you think there’s been a mistake.", "ClipsError")
                                };
                            case d.a.ChannelBanned:
                                return {
                                    title: Object(o.d)("Uh-oh, this clip isn’t available right now.", "ClipsError"),
                                    subtitle: Object(o.d)("That channel has been closed due to terms of service violations.", "ClipsError")
                                };
                            case d.a.ChannelNotClippable:
                                return {
                                    title: Object(o.d)("Darn. Clipping is currently disabled on this channel.", "ClipsError"),
                                    subtitle: Object(o.d)("Try again on another channel.", "ClipsError")
                                };
                            case d.a.NotLoggedIn:
                                return {
                                    title: Object(o.d)("Hm. Looks like you’re not logged in.", "ClipsError"),
                                    subtitle: Object(o.d)("Log in and try again.", "ClipsError")
                                };
                            case d.a.VideoNotAvailable:
                                return {
                                    title: Object(o.d)("Darn. We can’t create a clip for that video.", "ClipsError"),
                                    subtitle: Object(o.d)("That video is no longer available. Try clipping another video!", "ClipsError")
                                };
                            case d.a.SubOnlyVod:
                                return {
                                    title: Object(o.d)("Darn. Subscriber-only videos are not clippable.", "ClipsError"),
                                    subtitle: Object(o.d)("Try clipping another video!", "ClipsError")
                                };
                            case d.a.ClipMissing:
                                return {
                                    title: Object(o.d)("Whoops. Something went wrong.", "ClipsError"),
                                    subtitle: Object(o.d)("We could not find that clip", "ClipsError")
                                };
                            case d.a.ClipMaintenance:
                                return {
                                    title: Object(o.d)("Clips is under maintenance.", "ClipsError"),
                                    subtitle: Object(o.d)("We will be back in a few hours.", "ClipsError")
                                };
                            default:
                                return {
                                    title: Object(o.d)("Well this is awkward… Something went wrong.", "ClipsError"),
                                    subtitle: Object(o.d)("Refresh the stream and try again, or tell us what happened.", "ClipsError"),
                                    link: f
                                }
                        }
                    }(this.props.match.params.error);
                    return i.createElement(p.xb, {
                        className: "clips-error-page",
                        background: p.r.Base,
                        margin: {
                            y: 2
                        },
                        elevation: 3,
                        color: p.O.Base,
                        textAlign: p.Jb.Center
                    }, i.createElement(p.o, {
                        ratio: p.p.Aspect16x9
                    }, i.createElement(p.Va, {
                        display: p.W.Flex,
                        justifyContent: p.Ua.Center,
                        alignItems: p.f.Center,
                        flexDirection: p.Y.Column,
                        padding: 1
                    }, i.createElement(p.S, {
                        src: Object(u.e)("58765", 2),
                        alt: Object(o.d)("Not like this... not like this", "ClipsError")
                    }), i.createElement(p.V, {
                        fontSize: p.Aa.Size4
                    }, e.title), i.createElement(p.V, {
                        fontSize: p.Aa.Size5
                    }, e.subtitle), e.link && i.createElement(p.V, {
                        fontSize: p.Aa.Size5
                    }, i.createElement("a", {
                        href: e.link
                    }, Object(o.d)("Report Issue", "ClipsError"))))))
                }, t = r.__decorate([Object(l.c)("ClipsErrorPage", {
                    destination: c.a.ClipsError,
                    autoReportInteractive: !0
                }), Object(a.a)({
                    location: s.PageviewLocation.ClipsError
                })], t)
            }(i.Component);
            n.d(t, "ClipsError", function() {
                return h
            })
        },
        oe5X: function(e, t, n) {
            "use strict";
            var r = n("XmgI"),
                i = n("RcPG"),
                o = n("0FG4"),
                a = n("i6WW"),
                c = n("gTu3"),
                s = n("6j5V"),
                u = /^(['"*([{</]*)@((?:[^\u0000-\u007F]|[\w-])+)/;

            function l(e, t) {
                if (!t) return !1;
                var n = t.displayName,
                    r = t.login;
                return e === n || e.toLowerCase() === r
            }

            function d(e, t) {
                void 0 === t && (t = {});
                var n = t.cheers,
                    d = t.emotes,
                    m = t.links,
                    g = t.mentions,
                    v = f(e),
                    b = "",
                    O = 0;
                return p(v.reduce(function(e, t, p) {
                    if (h(t)) return b = "", e;
                    if (0 === b.length && (O = p), b += t, p !== v.length - 1 && !h(v[p + 1])) return e;
                    var f = d && Object(o.c)(b, O, d);
                    if (f) return e.concat(f);
                    var x = n && Object(r.d)(b, n);
                    if (x) return e.concat(x);
                    var y = m && Object(a.a)(b, m);
                    if (y) return e.concat(y);
                    var E = g && function(e, t) {
                        var n = e.match(u);
                        if (!n) return l(e, t.sessionUser) ? [{
                            type: i.a.CurrentUserHighlight,
                            content: e
                        }] : null;
                        var r = [],
                            o = n[1],
                            a = n[2],
                            d = e.slice(n[0].length);
                        o.length && r.push(Object(s.a)(o));
                        var p = c.a.Default;
                        return l(a, t.sessionUser) ? p = c.a.Recipient : t.sessionUser && t.sessionUser.login === t.senderLogin && (p = c.a.Sender), r.push({
                            type: i.a.Mention,
                            content: {
                                recipient: a,
                                currentUserMentionRelation: p
                            }
                        }), d.length && r.push(Object(s.a)(d)), r
                    }(b, g);
                    return E ? e.concat([E]) : e.concat(Object(s.a)(b))
                }, []))
            }

            function p(e) {
                return e.reduce(function(e, t, n) {
                    return 0 === n ? [].concat.call(e, t) : [].concat.call(e, Object(s.a)(" "), t)
                }, []).reduce(function(e, t, n) {
                    if (0 === n) return e.concat(t);
                    var r = e[e.length - 1];
                    return t.type === i.a.Text && r.type === i.a.Text ? (r.content = "" + r.content + t.content, e) : e.concat(t)
                }, [])
            }

            function f(e) {
                return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
            }

            function h(e) {
                return /\s/.test(e)
            }
            n.d(t, "a", function() {
                return d
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, !1, function() {
                return f
            })
        },
        uYEN: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(r || (r = {}))
        },
        znYQ: function(e, t, n) {}
    }
]);