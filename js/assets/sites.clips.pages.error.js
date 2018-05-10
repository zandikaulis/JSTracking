webpackJsonp([67], {
    "/7qn": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("6sO2"),
            o = n("j7/Y"),
            s = n("w9tK"),
            c = n("vH/s"),
            l = n("l21v"),
            u = n("CSlQ"),
            d = n("YV3U"),
            p = n("Odds"),
            h = (n("Ua7p"), "https://help.twitch.tv/customer/portal/emails/new");
        var f = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = function(e) {
                    switch (e) {
                        case d.a.ChannelNotLive:
                            return {
                                title: Object(a.d)("Darn. Clipping is currently unavailable for this channel.", "ClipsError"),
                                subtitle: Object(a.d)("This channel is offline. Try again when the channel goes live!", "ClipsError")
                            };
                        case d.a.UserBanned:
                            return {
                                title: Object(a.d)("Darn. We can’t let you clip this channel because you’re banned from its chat.", "ClipsError"),
                                subtitle: Object(a.d)("Please contact the channel owner or a moderator if you think there’s been a mistake.", "ClipsError")
                            };
                        case d.a.UserTimedOut:
                            return {
                                title: Object(a.d)("Darn. We can’t let you clip this channel because you’re timed out from its chat.", "ClipsError"),
                                subtitle: Object(a.d)("Please try again later or contact the channel owner or a moderator if you think there’s been a mistake.", "ClipsError")
                            };
                        case d.a.ChannelBanned:
                            return {
                                title: Object(a.d)("Uh-oh, this clip isn’t available right now.", "ClipsError"),
                                subtitle: Object(a.d)("That channel has been closed due to terms of service violations.", "ClipsError")
                            };
                        case d.a.ChannelNotClippable:
                            return {
                                title: Object(a.d)("Darn. Clipping is currently disabled on this channel.", "ClipsError"),
                                subtitle: Object(a.d)("Try again on another channel.", "ClipsError")
                            };
                        case d.a.NotLoggedIn:
                            return {
                                title: Object(a.d)("Hm. Looks like you’re not logged in.", "ClipsError"),
                                subtitle: Object(a.d)("Log in and try again.", "ClipsError")
                            };
                        case d.a.VideoNotAvailable:
                            return {
                                title: Object(a.d)("Darn. We can’t create a clip for that video.", "ClipsError"),
                                subtitle: Object(a.d)("That video is no longer available. Try clipping another video!", "ClipsError")
                            };
                        case d.a.SubOnlyVod:
                            return {
                                title: Object(a.d)("Darn. Subscriber-only videos are not clippable.", "ClipsError"),
                                subtitle: Object(a.d)("Try clipping another video!", "ClipsError")
                            };
                        case d.a.ClipMissing:
                            return {
                                title: Object(a.d)("Whoops. Something went wrong.", "ClipsError"),
                                subtitle: Object(a.d)("We could not find that clip", "ClipsError")
                            };
                        case d.a.ClipMaintenance:
                            return {
                                title: Object(a.d)("Clips is under maintenance.", "ClipsError"),
                                subtitle: Object(a.d)("We will be back in a few hours.", "ClipsError")
                            };
                        default:
                            return {
                                title: Object(a.d)("Well this is awkward… Something went wrong.", "ClipsError"),
                                subtitle: Object(a.d)("Refresh the stream and try again, or tell us what happened.", "ClipsError"),
                                link: h
                            }
                    }
                }(this.props.match.params.error);
                return i.createElement(p._35, {
                    className: "clips-error-page",
                    background: p.n.Base,
                    margin: {
                        y: 2
                    },
                    elevation: 3,
                    color: p.K.Base,
                    textAlign: p._45.Center
                }, i.createElement(p.k, {
                    ratio: p.l.Aspect16x9
                }, i.createElement(p._8, {
                    display: p.R.Flex,
                    justifyContent: p._7.Center,
                    alignItems: p.c.Center,
                    flexDirection: p.T.Column,
                    padding: 1
                }, i.createElement(p.N, {
                    src: Object(l.f)("58765", 2),
                    alt: Object(a.d)("Not like this... not like this", "ClipsError")
                }), i.createElement(p.Q, {
                    fontSize: p.V.Size4
                }, e.title), i.createElement(p.Q, {
                    fontSize: p.V.Size5
                }, e.subtitle), e.link && i.createElement(p.Q, {
                    fontSize: p.V.Size5
                }, i.createElement("a", {
                    href: e.link
                }, Object(a.d)("Report Issue", "ClipsError"))))))
            }, t = r.__decorate([Object(u.d)("ClipsErrorPage", {
                destination: s.a.ClipsError,
                autoReportInteractive: !0
            }), Object(o.a)({
                location: c.PageviewLocation.ClipsError
            })], t)
        }(i.Component);
        n.d(t, "ClipsError", function() {
            return f
        })
    },
    "3KVC": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            void 0 === e && (e = "");
            return r.test(e)
        }, t.b = function(e) {
            void 0 === e && (e = "");
            var t = e.match(r);
            if (null === t) return "";
            if (t && t.length > 0 && void 0 !== t.index) {
                var n = t[1];
                return n
            }
            return ""
        };
        var r = new RegExp("(?:^|\\s)(?:https?://)?(?:(?:www|go).)?twitch.tv/videos/(\\d+)(?:$|\\s)?")
    },
    "3iBR": function(e, t, n) {
        "use strict";
        n.d(t, "m", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "k", function() {
            return u
        }), n.d(t, "j", function() {
            return d
        }), n.d(t, "l", function() {
            return p
        }), n.d(t, "g", function() {
            return h
        }), n.d(t, "h", function() {
            return f
        }), n.d(t, "d", function() {
            return g
        }), n.d(t, "e", function() {
            return v
        }), n.d(t, "f", function() {
            return m
        });
        var r, i = n("I89S"),
            a = {
                ERROR_DISPLAY_TIMEOUT: 5e3,
                GET_BALANCE_RATE_LIMIT: 5e3,
                UNDO_PROMPT_DURATION: 5e3
            },
            o = "https://d3aqoihi2n8ty8.cloudfront.net",
            s = o + "/cheer",
            c = o + "/actions",
            l = 8e5,
            u = 1e4,
            d = 500,
            p = 1e3,
            h = "cheer",
            f = i.a.Purple,
            g = "FIRST_PARTY",
            v = "THIRD_PARTY",
            m = ((r = {})[i.a.Gray] = "#979797", r[i.a.Purple] = "#9c3ee8", r[i.a.Green] = "#1db2a5", r[i.a.Blue] = "#0099fe", r[i.a.Red] = "#f43021", r[i.a.Yellow] = "#f3a71a", r)
    },
    CFVp: function(e, t, n) {
        "use strict";
        t.a = function() {
            if (!c) {
                var e = [],
                    t = {};
                Object.keys(a).forEach(function(n) {
                    var r = u(n, a[n]);
                    e.push(r), t[n.toLowerCase()] = r
                }), c = {
                    orderedActions: e,
                    indexedActions: t
                }
            }
            return c
        }, t.b = function() {
            l || (l = function(e) {
                if (c) return c.indexedActions[e.toLowerCase()];
                return u(e, a[e])
            }("Cheer"));
            return l
        };
        var r = n("I89S"),
            i = n("3iBR"),
            a = {
                Cheer: i.d,
                Kreygasm: i.d,
                Kappa: i.d,
                Muxy: i.e,
                Streamlabs: i.e,
                SwiftRage: i.d,
                VoHiYo: i.d
            },
            o = ["LIGHT", "DARK"],
            s = [1, 1.5, 2, 3, 4],
            c = null;
        var l = null;

        function u(e, t) {
            var n = [r.a.Red, r.a.Blue, r.a.Green, r.a.Purple, r.a.Gray],
                i = new Map,
                a = [];
            if ("Cheer" === e) {
                var o = d(e, r.a.Yellow);
                i.set(r.a.Yellow, o), a.push(o)
            }
            return a.push.apply(a, n.map(function(t) {
                var n = d(e, t);
                return i.set(t, n), n
            })), {
                prefix: e,
                type: t,
                tiers: a,
                orderedTiers: a,
                indexedTiers: i
            }
        }

        function d(e, t) {
            for (var n = [], r = {}, a = 0, c = o; a < c.length; a++)
                for (var l = c[a], u = 0, d = s; u < d.length; u++) {
                    var h = d[u];
                    r[l] || (r[l] = {
                        animated: new Map,
                        static: new Map
                    });
                    var f = p(e, l, !0, t, h);
                    n.push(f), r[l].animated.set(h, f.url);
                    var g = p(e, l, !1, t, h);
                    n.push(g), r[l].static.set(h, g.url)
                }
            return {
                id: e + ";" + t,
                canCheer: t <= i.k,
                bits: t,
                color: i.f[t],
                images: n,
                indexedImages: r
            }
        }

        function p(e, t, n, r, i) {
            var a = n ? "gif" : "png";
            return {
                theme: t,
                isAnimated: n,
                dpiScale: i,
                url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + r + "/" + i + "." + a
            }
        }
    },
    I89S: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
            }(r || (r = {}))
    },
    Ua7p: function(e, t) {},
    YhVV: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = [];
            if (!e || !t) return n;
            var i = /[^\s\.,\!]+/g,
                a = i.exec(e);
            for (; a;) {
                var o = a[0],
                    s = t[o];
                if (s && "function" != typeof s) {
                    var c = Object(r.d)(e.slice(0, a.index)),
                        l = c ? c.length : a.index;
                    n[l] = {
                        startIndex: l,
                        endIndex: l + o.length,
                        data: {
                            alt: o,
                            images: {
                                themed: !1,
                                sources: {
                                    "1x": Object(r.f)(s.id, 1),
                                    "2x": Object(r.f)(s.id, 2),
                                    "4x": Object(r.f)(s.id, 4)
                                }
                            }
                        }
                    }
                }
                a = i.exec(e)
            }
            return n
        }, t.a = function(e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++)
                for (var o = r[n], s = 0, c = o.emotes; s < c.length; s++)
                    for (var l = c[s], u = i[l.token] || [l.token], d = 0, p = u; d < p.length; d++) {
                        var h = p[d];
                        t[h] && o.id === a || (t[h] = {
                            id: l.id,
                            token: h
                        })
                    }
            return t
        };
        var r = n("l21v");
        var i = {
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
            },
            a = "0"
    },
    e1CU: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            var n = e,
                r = !1;
            n ? n.split("").map(function(e) {
                return e.charCodeAt(0) > 127
            }).reduce(function(e, t) {
                return e || t
            }) && (r = !0) : n = t;
            return {
                userDisplayName: n,
                isIntl: r
            }
        }
    },
    iydZ: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.c = function(e, t) {
            var n = [],
                o = t.indexedActions,
                c = new RegExp("^(" + Object.keys(o).join("|") + ")(\\d+)$", "i"),
                l = e.split(/\s+/);
            return l.forEach(function(e, t) {
                var u = c.exec(e);
                if (u) {
                    var d = u[1].toLowerCase(),
                        p = +u[2],
                        h = o[d];
                    if (h || d !== r.g || (h = Object(i.b)()), h) {
                        var f = h.orderedTiers.find(function(e) {
                            return e.bits <= p
                        });
                        !f && p && (f = h.orderedTiers[0]), f && n.push({
                            type: a.a.Emote,
                            content: {
                                images: s(f),
                                alt: h.prefix,
                                cheerAmount: p,
                                cheerColor: f.color
                            }
                        })
                    }
                } else {
                    var g = n.length && n[n.length - 1],
                        v = "";
                    if (t < l.length - 1 && (v = " "), g && g.type === a.a.Text) g.content += e + v;
                    else {
                        var m = "";
                        t && (m = " "), n.push({
                            type: a.a.Text,
                            content: m + e + v
                        })
                    }
                }
            }), n
        }, t.b = s;
        var r = n("3iBR"),
            i = n("CFVp"),
            a = n("mwvJ"),
            o = {
                indexedActions: {},
                orderedActions: []
            };

        function s(e, t, n) {
            void 0 === n && (n = !0);
            var r, i, a = n ? "animated" : "static";
            return t ? {
                themed: !0,
                dark: (r = {}, r[t + "x"] = e.indexedImages.DARK[a].get(t), r),
                light: (i = {}, i[t + "x"] = e.indexedImages.LIGHT[a].get(t), i)
            } : {
                themed: !0,
                dark: {
                    "1x": e.indexedImages.DARK[a].get(1),
                    "1.5x": e.indexedImages.DARK[a].get(1.5),
                    "2x": e.indexedImages.DARK[a].get(2),
                    "3x": e.indexedImages.DARK[a].get(3),
                    "4x": e.indexedImages.DARK[a].get(4)
                },
                light: {
                    "1x": e.indexedImages.LIGHT[a].get(1),
                    "1.5x": e.indexedImages.LIGHT[a].get(1.5),
                    "2x": e.indexedImages.LIGHT[a].get(2),
                    "3x": e.indexedImages.LIGHT[a].get(3),
                    "4x": e.indexedImages.LIGHT[a].get(4)
                }
            }
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("GiK3"),
            o = n("F8kA"),
            s = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function o(t) {
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
                                    c = a.medium,
                                    l = a.content_index;
                                s.o.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: c,
                                    content_index: l,
                                    location: e.location
                                }, t))
                            }
                        }, s.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return r.__extends(o, n), o.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, o.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, o.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, o.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                a = i.stringify(t);
                            a.length > 0 && (r = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, o
                }(a.Component);
                return Object(o.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    l21v: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            o = n("iydZ"),
            s = n("mwvJ"),
            c = new RegExp("(?:^|\\s)(?:https?://)?clips.twitch.tv/(\\w+)(?:/)?(\\w+)?(?:/edit)?(?:$|\\s)?");
        var l = n("YhVV"),
            u = n("3KVC"),
            d = n("e1CU");
        t.a = function(e, t, n, i, a, o) {
            void 0 === o && (o = !1);
            var s;
            s = a ? Object(l.b)(e, a) : function(e) {
                var t = [];
                e && Object.keys(e).forEach(function(n) {
                    var r = e[n];
                    r.forEach(function(e) {
                        t[e.startIndex] = {
                            startIndex: e.startIndex,
                            endIndex: e.endIndex + 1,
                            data: {
                                images: {
                                    themed: !1,
                                    sources: {
                                        "1x": O(n, 1),
                                        "2x": O(n, 2),
                                        "4x": O(n, 4)
                                    }
                                }
                            }
                        }
                    })
                });
                return t
            }(t.emotes);
            var c = Object(d.a)(t.displayName, t.username);
            return {
                badges: t.badges || {},
                bits: t.bits,
                user: r.__assign({}, c, {
                    userLogin: t.username,
                    userID: t.userID,
                    userType: t.userType,
                    color: t.color || m(t.userID)
                }),
                messageParts: e ? x(e, s, t.bits, n, i, t.username) : [],
                deleted: o,
                timestamp: Date.now()
            }
        }, t.b = m, t.g = x, t.d = b, t.c = C, t.f = O, t.e = function(e) {
            return {
                src: O(e, 1),
                srcSet: O(e, 1) + " 1x, " + O(e, 2) + " 2x, " + O(e, 3) + " 4x"
            }
        };
        var p = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            h = {},
            f = /^(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,8}(?:\/[\w./@#%&()\-+=:?~]*)?)$/g,
            g = /@([^\u0000-\u007F]|[\w-])+/,
            v = /['"*([{</]+/;

        function m(e, t) {
            return void 0 === t && (t = 15), "number" != typeof h[e] && (h[e] = Math.floor(Math.random() * t)), p[h[e]]
        }

        function x(e, t, n, i, a, o) {
            void 0 === t && (t = []);
            var c = [],
                l = 0,
                u = b(e);
            t.forEach(function(t) {
                var d = u ? u.slice(l, t.startIndex).join("") : e.slice(l, t.startIndex);
                d && (c = n ? c.concat(y(d, o, a, i)) : c.concat(C(d, o, a))), c.push({
                    type: s.a.Emote,
                    content: r.__assign({
                        alt: u ? u.slice(t.startIndex, t.endIndex).join("") : e.slice(t.startIndex, t.endIndex)
                    }, t.data)
                }), l = t.endIndex
            });
            var d = u ? u.slice(l).join("") : e.slice(l);
            return d && (c = n ? c.concat(y(d, o, a, i)) : c.concat(C(d, o, a))), c
        }

        function b(e) {
            return e.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g)
        }

        function y(e, t, n, r) {
            if (!r) return C(e, t, n);
            var i = Object(o.c)(e, r).map(function(e) {
                return e.type === s.a.Text ? C(e.content, t, n) : e
            });
            return [].concat.apply([], i)
        }

        function C(e, t, n) {
            var r = [],
                o = e.split(/\s+/),
                l = Object(a.c)(i.o.store.getState());
            return o.forEach(function(e, a) {
                f.lastIndex = 0, g.lastIndex = 0;
                var d = f.exec(e),
                    p = 0 === a,
                    h = a === o.length - 1,
                    m = function(e, t, n, r, i) {
                        var a = [],
                            o = e.indexOf("@"),
                            c = e.match(g),
                            l = e.slice(0, o),
                            u = 0 === l.length || v.test(l);
                        if (!c || c.length < 1 || !u) return a;
                        var d = c[0].slice(1);
                        o > 0 && a.push({
                            type: s.a.Text,
                            content: (n ? "" : " ") + e.slice(0, o)
                        });
                        a.push({
                            type: s.a.Mention,
                            content: {
                                sender: t,
                                recipient: d,
                                isCurrentUserRecipient: T(d, i)
                            }
                        });
                        var p = o + d.length + 1;
                        p < e.length && a.push({
                            type: s.a.Text,
                            content: e.slice(p) + (r ? "" : " ")
                        });
                        return a
                    }(e, t, p, h, l);
                if (d) {
                    var x = d.index;
                    0 !== x && r.push({
                        type: s.a.Text,
                        content: "" + e.slice(0, x)
                    });
                    var b = f.lastIndex;
                    if (n) r.push({
                        type: s.a.Text,
                        content: " <" + Object(i.d)("deleted link", "CreateMessageData") + "> "
                    });
                    else {
                        var y = (d[1] ? "" : "https://") + e.slice(x, b);
                        if (function(e) {
                                return void 0 === e && (e = ""), c.test(e) && !e.includes("clips.twitch.tv/2017/")
                            }(y)) {
                            var C = function(e) {
                                void 0 === e && (e = "");
                                var t = e.match(c);
                                return null === t ? "" : t && t.length > 0 && void 0 !== t.index ? t[1] : ""
                            }(y);
                            r.push({
                                type: s.a.ClipLink,
                                content: {
                                    slug: C,
                                    url: y,
                                    displayText: e.slice(x, b)
                                }
                            })
                        } else if (Object(u.a)(y)) {
                            var O = Object(u.b)(y);
                            r.push({
                                type: s.a.VideoLink,
                                content: {
                                    id: O,
                                    url: y,
                                    displayText: e.slice(x, b)
                                }
                            })
                        } else r.push({
                            type: s.a.Link,
                            content: {
                                displayText: e.slice(x, b),
                                url: y
                            }
                        })
                    }
                    var E = e.slice(b),
                        w = "";
                    a < o.length - 1 && (w = " "), E && r.push({
                        type: s.a.Text,
                        content: "" + E + w
                    })
                } else if (m.length > 0) r.push.apply(r, m);
                else if (T(e, l)) r.push({
                    type: s.a.CurrentUserHighlight,
                    content: e
                });
                else {
                    var j = r.length && r[r.length - 1];
                    w = h ? "" : " ";
                    if (j && j.type === s.a.Text) j.content += e + w;
                    else {
                        var k = p ? "" : " ";
                        r.push({
                            type: s.a.Text,
                            content: k + e + w
                        })
                    }
                }
            }), r
        }

        function O(e, t) {
            return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/" + Math.min(Math.ceil(t), 3) + ".0"
        }

        function T(e, t) {
            if (!t) return !1;
            var n = t.displayName,
                r = t.login;
            return e === n || e.toLowerCase() === r
        }
    },
    mwvJ: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e[e.Text = 0] = "Text", e[e.CurrentUserHighlight = 1] = "CurrentUserHighlight", e[e.Mention = 2] = "Mention", e[e.Link = 3] = "Link", e[e.Emote = 4] = "Emote", e[e.ClipLink = 5] = "ClipLink", e[e.VideoLink = 6] = "VideoLink"
            }(r || (r = {}))
    }
});
//# sourceMappingURL=sites.clips.pages.error-7c2a4d302a6e3e64d8d05fa4a41f043c.js.map