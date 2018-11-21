(window.webpackJsonp = window.webpackJsonp || []).push([
    [187], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function i(e) {
                return {
                    type: r,
                    languagePreferences: e
                }
            }
        },
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "a", function() {
                return u
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("2xye"),
                o = n("gAd6"),
                c = function() {
                    var e = i.o.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                s = function(e) {
                    i.o.trackItemSectionClick({
                        carousel_content: a.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: c()
                    })
                },
                l = function(e) {
                    i.o.trackItemSectionClick({
                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: c()
                    })
                },
                u = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, s, l, u, E = this;
                        return r.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return d.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return r.__awaiter(E, void 0, void 0, function() {
                                            var t;
                                            return r.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, i.p.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = n.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return n = d.sent(), s = n.filter(function(e) {
                                        return !!e
                                    }), l = s.map(function() {
                                        return a.TwitchDataType.Game
                                    }), u = s.map(function() {
                                        return null
                                    }), i.o.trackItemSectionLoad({
                                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: s.length,
                                        rendered_item_list: s,
                                        rendered_item_types: l,
                                        rendered_items_viewcounts: u,
                                        location: c()
                                    }), [3, 3];
                                case 2:
                                    return d.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "0LAi": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("MXoD"),
                o = n("2xye"),
                c = n("GnwI"),
                s = n("Ue10"),
                l = function(e) {
                    var t = e.tags;
                    return void 0 !== e.tagNumberLimit && e.tagNumberLimit > 0 && (t = t.slice(0, e.tagNumberLimit)), i.createElement(s.Ya, {
                        display: s.X.InlineBlock
                    }, t.map(function(t) {
                        var n = r.__assign({}, e.linkTo);
                        e.linkPath && (n.pathname = e.linkPath), n.pathname && (n.pathname = n.pathname.replace(":tagID", t.id));
                        return i.createElement(s.Fb, {
                            key: t.id,
                            fontSize: s.Ca.Size7,
                            display: s.X.InlineBlock,
                            margin: {
                                right: .5,
                                bottom: .5
                            }
                        }, i.createElement(s.Pb, {
                            label: t.localizedName,
                            type: e.style,
                            linkTo: e.linkTo || e.linkPath ? Object(a.a)({
                                content: o.PageviewContent.Tag
                            }, n) : void 0,
                            onClick: function() {
                                e.callback && e.callback(t)
                            },
                            "data-a-target": t.localizedName
                        }))
                    }))
                },
                u = Object(c.b)("TagList", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return u
            })
        },
        "1mcJ": function(e, t, n) {},
        "2MIk": function(e, t, n) {},
        "3lt/": function(e, t, n) {
            "use strict";
            n("mrSG"), n("uhBA");
            var r = n("L9xt");
            n.o(r, "PageviewContent") && n.d(t, "PageviewContent", function() {
                return r.PageviewContent
            }), n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
                return r.PageviewLocation
            }), n.o(r, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
                return r.PageviewMedium
            }), n.o(r, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
                return r.SpadeEventType
            }), n.o(r, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
                return r.TwitchDataType
            })
        },
        "3sMy": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.GreatNewClipsYouMayHaveMissed = "GreatNewClipsYouMayHaveMissed", e.PopularClips = "PopularClips", e.PopularVideos = "PopularVideos", e.RecommendedBecauseYouWatchX = "RecommendedBecauseYouWatchX", e.RecommendedBecauseYouFollowX = "RecommendedBecauseYouFollowX", e.TopChannelsPlayingGame = "TopChannelsPlayingGame", e.TopGames = "TopGames", e.TopGamesForYou = "TopGamesForYou", e.TopLiveChannels = "TopLiveChannels", e.TopLiveChannelsYouMayLike = "TopLiveChannelsYouMayLike", e.TopNewVideosYouMayHaveMissed = "TopNewVideosYouMayHaveMissed"
                }(r || (r = {}))
        },
        "4KoZ": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("/7QA");

            function i() {
                return Object(r.d)("Untitled Broadcast", "StreamThumbnail")
            }
        },
        "5NSO": function(e, t, n) {},
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("HSqT"),
                o = n("+U0Y"),
                c = "languageDirectoryFilters";

            function s(e, t) {
                var n = this;
                return function(a) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return r.__generator(this, function(r) {
                            return n = new Set(u()), t ? n.add(e) : n.delete(e), s = Array.from(n), i.m.set(c, s), a(Object(o.b)(s)), [2]
                        })
                    })
                }
            }

            function l() {
                var e = this;
                return function(t) {
                    return r.__awaiter(e, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            return i.m.set(c, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function u() {
                return i.m.get(c, []).filter(function(e) {
                    return a.a.has(e)
                })
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return s
            });
            var r, i, a = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function c(e, t) {
                switch (e) {
                    case r.Second:
                        return Object(a.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case r.Minute:
                        return Object(a.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case r.Hour:
                        return Object(a.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case r.Day:
                        return Object(a.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case r.Week:
                        return Object(a.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case r.Month:
                        return Object(a.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = r.Hour;
                        break;
                    case i.ClockMS:
                        n = r.Minute
                }
                var s = 2;
                t === i.ClockHMS && (s = 3);
                var u = function(e, t) {
                        void 0 === t && (t = r.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === r.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === r.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === r.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === r.Day ? n : n.days <= 26 || t === r.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    E = Object.keys(u);
                if (E.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || u[e] || delete u[e], n < E.length - s && delete u[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(r.Month, e.months) : e.weeks && e.days ? o(r.Week, e.weeks) + " " + o(r.Day, e.days) : e.weeks ? o(r.Week, e.weeks) : e.days && e.hours ? o(r.Day, e.days) + " " + o(r.Hour, e.hours) : e.days ? o(r.Day, e.days) : e.hours && e.minutes ? o(r.Hour, e.hours) + " " + o(r.Minute, e.minutes) : e.hours ? o(r.Hour, e.hours) : e.minutes && e.seconds ? o(r.Minute, e.minutes) + " " + o(r.Second, e.seconds) : e.minutes ? o(r.Minute, e.minutes) : o(r.Second, e.seconds || 0)
                }(u);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? c(r.Month, e.months) : e.weeks && e.days ? "" + c(r.Week, e.weeks) + c(r.Day, e.days) : e.weeks ? c(r.Week, e.weeks) : e.days && e.hours ? "" + c(r.Day, e.days) + c(r.Hour, e.hours) : e.days ? c(r.Day, e.days) : e.hours && e.minutes ? "" + c(r.Hour, e.hours) + c(r.Minute, e.minutes) : e.hours ? c(r.Hour, e.hours) : e.minutes && e.seconds ? "" + c(r.Minute, e.minutes) + c(r.Second, e.seconds) : e.minutes ? c(r.Minute, e.minutes) : c(r.Second, e.seconds || 0)
                }(u);
                var d = ":",
                    m = !1;
                switch (a.p.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        d = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        m = !0
                }
                var p = u.seconds || 0,
                    T = u.minutes || 0,
                    _ = u.hours || 0;
                switch (t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        var N = (m ? l(_, 2) : _) + d + l(T, 2);
                        return t === i.ClockHMS && (N += d + l(p, 2)), N;
                    case i.ClockMS:
                        return (m ? l(T, 2) : T) + d + l(p, 2)
                }
            }

            function l(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(r || (r = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "80G/": function(e, t, n) {},
        A65o: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("yI6f"),
                o = n("x75U");

            function c() {
                return function(e) {
                    return function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.trackImpression = function(t) {
                                e.context.trackImpression(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t)
                            }, e.trackClick = function(t, n, r) {
                                "string" != typeof r && (r = void 0), e.context.trackClick(e.props.shelf, e.props.contentEdge, e.props.itemPosition, t, n, r)
                            }, e
                        }
                        return r.__extends(n, t), n.prototype.render = function() {
                            var t = this.context.cardIDtoItemTrackingIDMap && this.props.contentEdge.node && this.context.cardIDtoItemTrackingIDMap[this.props.contentEdge.node.id],
                                n = this.context.cardIDtoRequestIDMap && this.props.contentEdge.node && this.context.cardIDtoRequestIDMap[this.props.contentEdge.node.id],
                                o = this.props,
                                c = o.itemPosition,
                                s = o.rowPosition,
                                l = o.shelf,
                                u = Object(a.g)(l.title).rowName,
                                E = {
                                    trackImpression: this.trackImpression,
                                    trackRecFeedbackPreModalClick: this.context.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: this.context.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.context.trackRecFeedbackClickStepPostSubmit,
                                    trackClick: this.trackClick,
                                    itemRequestID: n,
                                    shelfCardTrackingProps: {
                                        item_tracking_id: t || null,
                                        item_position: c,
                                        row_name: u,
                                        row_position: s
                                    }
                                };
                            return i.createElement(e, r.__assign({}, this.props, E))
                        }, n.contextTypes = o.a, n
                    }(i.Component)
                }
            }
        },
        B3R5: function(e, t, n) {},
        DMoW: function(e, t, n) {
            "use strict";
            var r, i, a, o, c, s, l, u, E, d, m, p, T, _, N, I, A, R, O, f, h, g, D, C, S, k, L, P, b, v, y, w, M, U, F, G, V, B, H, x, Y, W, j, Q, X, K, q, z, Z, J, $, ee, te, ne, re, ie, ae, oe, ce, se, le, ue, Ee, de, me, pe, Te, _e, Ne, Ie, Ae, Re, Oe, fe, he, ge, De, Ce, Se, ke, Le, Pe, be, ve, ye, we, Me, Ue, Fe, Ge, Ve, Be, He, xe, Ye, We, je, Qe, Xe, Ke, qe, ze, Ze, Je, $e, et, tt, nt, rt, it, at, ot, ct, st, lt, ut, Et, dt, mt, pt, Tt, _t, Nt, It, At;
            n.d(t, "N", function() {
                    return r
                }), n.d(t, "e", function() {
                    return i
                }), n.d(t, "O", function() {
                    return c
                }), n.d(t, "B", function() {
                    return s
                }), n.d(t, "b", function() {
                    return u
                }), n.d(t, "i", function() {
                    return T
                }), n.d(t, "d", function() {
                    return N
                }), n.d(t, "g", function() {
                    return R
                }), n.d(t, "h", function() {
                    return O
                }), n.d(t, "Z", function() {
                    return h
                }), n.d(t, "n", function() {
                    return g
                }), n.d(t, "Ba", function() {
                    return D
                }), n.d(t, "R", function() {
                    return C
                }), n.d(t, "s", function() {
                    return S
                }), n.d(t, "l", function() {
                    return P
                }), n.d(t, "P", function() {
                    return b
                }), n.d(t, "C", function() {
                    return F
                }), n.d(t, "c", function() {
                    return G
                }), n.d(t, "u", function() {
                    return V
                }), n.d(t, "Aa", function() {
                    return B
                }), n.d(t, "t", function() {
                    return H
                }), n.d(t, "T", function() {
                    return x
                }), n.d(t, "V", function() {
                    return Y
                }), n.d(t, "G", function() {
                    return W
                }), n.d(t, "W", function() {
                    return j
                }), n.d(t, "F", function() {
                    return Q
                }), n.d(t, "E", function() {
                    return X
                }), n.d(t, "q", function() {
                    return K
                }), n.d(t, "U", function() {
                    return q
                }), n.d(t, "a", function() {
                    return z
                }), n.d(t, "x", function() {
                    return Z
                }), n.d(t, "z", function() {
                    return J
                }), n.d(t, "I", function() {
                    return ee
                }), n.d(t, "J", function() {
                    return te
                }), n.d(t, "H", function() {
                    return re
                }), n.d(t, "K", function() {
                    return ie
                }), n.d(t, "Y", function() {
                    return ce
                }), n.d(t, "X", function() {
                    return _e
                }), n.d(t, "p", function() {
                    return De
                }), n.d(t, "o", function() {
                    return Ce
                }), n.d(t, "Da", function() {
                    return Pe
                }), n.d(t, "D", function() {
                    return Fe
                }), n.d(t, "Ca", function() {
                    return Ge
                }), n.d(t, "k", function() {
                    return He
                }), n.d(t, "w", function() {
                    return xe
                }), n.d(t, "m", function() {
                    return We
                }), n.d(t, "j", function() {
                    return je
                }), n.d(t, "y", function() {
                    return Qe
                }), n.d(t, "S", function() {
                    return Ke
                }), n.d(t, "r", function() {
                    return qe
                }), n.d(t, "Q", function() {
                    return $e
                }), n.d(t, "A", function() {
                    return ct
                }), n.d(t, "L", function() {
                    return st
                }), n.d(t, "M", function() {
                    return lt
                }), n.d(t, "f", function() {
                    return Nt
                }), n.d(t, "v", function() {
                    return It
                }),
                function(e) {
                    e.CHANNEL_FEED_COMMENT_REPORT = "CHANNEL_FEED_COMMENT_REPORT", e.CHANNEL_FEED_POST_REPORT = "CHANNEL_FEED_POST_REPORT", e.CHAT_REPORT = "CHAT_REPORT", e.CLIP_REPORT = "CLIP_REPORT", e.COLLECTION_REPORT = "COLLECTION_REPORT", e.CURSE_PRIVATE_GROUP = "CURSE_PRIVATE_GROUP", e.CURSE_PUBLIC_GROUP = "CURSE_PUBLIC_GROUP", e.CURSE_WHISPER = "CURSE_WHISPER", e.EVENT_REPORT = "EVENT_REPORT", e.EXTENSION_REPORT = "EXTENSION_REPORT", e.LIVE_UP_REPORT = "LIVE_UP_REPORT", e.RAID_REPORT = "RAID_REPORT", e.ROOM_REPORT = "ROOM_REPORT", e.SINGS_DUET_SEED_REPORT = "SINGS_DUET_SEED_REPORT", e.SINGS_GROUP_BIO_REPORT = "SINGS_GROUP_BIO_REPORT", e.SINGS_GROUP_CHAT_REPORT = "SINGS_GROUP_CHAT_REPORT", e.SINGS_GROUP_NAME_REPORT = "SINGS_GROUP_NAME_REPORT", e.SINGS_VOD_COMMENT_REPORT = "SINGS_VOD_COMMENT_REPORT", e.USER_REPORT = "USER_REPORT", e.VOD_COMMENT_REPORT = "VOD_COMMENT_REPORT", e.VOD_REPORT = "VOD_REPORT", e.WHISPER_REPORT = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.CHAT = "CHAT", e.WHISPER = "WHISPER"
                }(i || (i = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_MOD = "TARGET_ALREADY_MOD", e.TARGET_IS_CHAT_BANNED = "TARGET_IS_CHAT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(a || (a = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND", e.TARGET_NOT_MOD = "TARGET_NOT_MOD"
                }(o || (o = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.REVOKEE_NOT_FOUND = "REVOKEE_NOT_FOUND", e.REVOKEE_NOT_VIP = "REVOKEE_NOT_VIP"
                }(c || (c = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.FORBIDDEN = "FORBIDDEN", e.GRANTEE_ALREADY_VIP = "GRANTEE_ALREADY_VIP", e.GRANTEE_CHAT_BANNED = "GRANTEE_CHAT_BANNED", e.GRANTEE_NOT_FOUND = "GRANTEE_NOT_FOUND", e.MAX_VIPS_REACHED = "MAX_VIPS_REACHED", e.VIP_ACHIEVEMENT_INCOMPLETE = "VIP_ACHIEVEMENT_INCOMPLETE"
                }(s || (s = {})),
                function(e) {
                    e.PLAYING = "PLAYING", e.STREAMING = "STREAMING", e.WATCHING = "WATCHING"
                }(l || (l = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(u || (u = {})),
                function(e) {
                    e.IDLE = "IDLE", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(E || (E = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(d || (d = {})),
                function(e) {
                    e.AR = "AR", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.EN_GB = "EN_GB", e.ES = "ES", e.ES_MX = "ES_MX", e.FI = "FI", e.FR = "FR", e.HI = "HI", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.PL = "PL", e.PT = "PT", e.PT_BR = "PT_BR", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_CN = "ZH_CN", e.ZH_TW = "ZH_TW"
                }(m || (m = {})),
                function(e) {
                    e.AR = "AR", e.ASL = "ASL", e.BG = "BG", e.CS = "CS", e.DA = "DA", e.DE = "DE", e.EL = "EL", e.EN = "EN", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.HU = "HU", e.IT = "IT", e.JA = "JA", e.KO = "KO", e.NL = "NL", e.NO = "NO", e.OTHER = "OTHER", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.RU = "RU", e.SK = "SK", e.SV = "SV", e.TH = "TH", e.TR = "TR", e.VI = "VI", e.ZH = "ZH", e.ZH_HK = "ZH_HK"
                }(p || (p = {})),
                function(e) {
                    e.ARCHIVE = "ARCHIVE", e.HIGHLIGHT = "HIGHLIGHT", e.PAST_PREMIERE = "PAST_PREMIERE", e.PREMIERE_UPLOAD = "PREMIERE_UPLOAD", e.UPLOAD = "UPLOAD"
                }(T || (T = {})),
                function(e) {
                    e.GET_BITS = "GET_BITS", e.GET_TURBO = "GET_TURBO", e.SUBSCRIBE = "SUBSCRIBE", e.VISIT_URL = "VISIT_URL"
                }(_ || (_ = {})),
                function(e) {
                    e.ACQUIRED = "ACQUIRED", e.CHEERED = "CHEERED", e.NEW_USER = "NEW_USER", e.SKIPPED = "SKIPPED", e.UNKNOWN = "UNKNOWN"
                }(N || (N = {})),
                function(e) {
                    e.ALLTIME = "ALLTIME", e.MONTH = "MONTH", e.WEEK = "WEEK"
                }(I || (I = {})),
                function(e) {
                    e.AD = "AD", e.BUNDLE = "BUNDLE"
                }(A || (A = {})),
                function(e) {
                    e.GAME_TRAILER = "GAME_TRAILER", e.MISC_TRAILER = "MISC_TRAILER", e.PAY_TO_STREAM = "PAY_TO_STREAM"
                }(R || (R = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.CANCELLED = "CANCELLED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE"
                }(O || (O = {})),
                function(e) {
                    e.FIXED_VALUE_OFF = "FIXED_VALUE_OFF", e.NONE = "NONE", e.PERCENT_OFF = "PERCENT_OFF"
                }(f || (f = {})),
                function(e) {
                    e.CHEER = "CHEER"
                }(h || (h = {})),
                function(e) {
                    e.CREATED = "CREATED", e.CREATING = "CREATING", e.FAILED = "FAILED"
                }(g || (g = {})),
                function(e) {
                    e.PRIVATE = "PRIVATE", e.PUBLIC = "PUBLIC"
                }(D || (D = {})),
                function(e) {
                    e.ENDED = "ENDED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.UNKNOWN = "UNKNOWN"
                }(C || (C = {})),
                function(e) {
                    e.ARCHIVES_DISABLED = "ARCHIVES_DISABLED", e.BROADCASTER_NOT_LIVE = "BROADCASTER_NOT_LIVE", e.BROADCAST_FORMAT_INVALID_PREMIERE = "BROADCAST_FORMAT_INVALID_PREMIERE", e.BROADCAST_FORMAT_INVALID_RERUN = "BROADCAST_FORMAT_INVALID_RERUN", e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.MAX_DESCRIPTION_LENGTH_EXCEEDED = "MAX_DESCRIPTION_LENGTH_EXCEEDED", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED", e.VOD_NOT_READY = "VOD_NOT_READY"
                }(S || (S = {})),
                function(e) {
                    e.DARK = "DARK", e.LIGHT = "LIGHT"
                }(k || (k = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.DISPLAY_ONLY = "DISPLAY_ONLY", e.FIRST_PARTY = "FIRST_PARTY", e.RENDER_ONLY = "RENDER_ONLY", e.SPONSORED = "SPONSORED", e.THIRD_PARTY = "THIRD_PARTY", e.UNKNOWN = "UNKNOWN"
                }(L || (L = {})),
                function(e) {
                    e.FOLLOWERS_ONLY = "FOLLOWERS_ONLY", e.SLOW_MODE = "SLOW_MODE", e.SUBSCRIBERS_ONLY = "SUBSCRIBERS_ONLY", e.VERIFIED_ONLY = "VERIFIED_ONLY"
                }(P || (P = {})),
                function(e) {
                    e.AMOUNT_BELOW_MIN_BITS = "AMOUNT_BELOW_MIN_BITS", e.AUTO_MOD_MESSAGE = "AUTO_MOD_MESSAGE", e.AUTO_MOD_PENDING = "AUTO_MOD_PENDING", e.CHANNEL_BLOCKED_TERMS = "CHANNEL_BLOCKED_TERMS", e.CHANNEL_INELIGIBLE = "CHANNEL_INELIGIBLE", e.EMOTE_AMOUNT_BELOW_MIN_BITS = "EMOTE_AMOUNT_BELOW_MIN_BITS", e.INSUFFICIENT_BALANCE = "INSUFFICIENT_BALANCE", e.INVALID_BITS_AMOUNT = "INVALID_BITS_AMOUNT", e.INVALID_BITS_MESSAGE = "INVALID_BITS_MESSAGE", e.INVALID_EVENT_ID = "INVALID_EVENT_ID", e.MESSAGE_LENGTH_EXCEEDED = "MESSAGE_LENGTH_EXCEEDED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.TOO_LARGE_BITS_EMOTE = "TOO_LARGE_BITS_EMOTE", e.TOO_LARGE_CHEER = "TOO_LARGE_CHEER", e.UNKNOWN = "UNKNOWN", e.USER_BANNED = "USER_BANNED", e.USER_INELIGIBLE = "USER_INELIGIBLE", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_MESSAGE = "ZALGO_MESSAGE"
                }(b || (b = {})),
                function(e) {
                    e.NEW_CHATTER = "NEW_CHATTER"
                }(v || (v = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(y || (y = {})),
                function(e) {
                    e.FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED = "FOLLOWER_ONLY_MODE_ENFORCEMENT_FAILED", e.SUB_ONLY_MODE_ENFORCEMENT_FAILED = "SUB_ONLY_MODE_ENFORCEMENT_FAILED", e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT"
                }(w || (w = {})),
                function(e) {
                    e.TOKEN_NOT_AVAILABLE = "TOKEN_NOT_AVAILABLE", e.TOKEN_NOT_FOUND = "TOKEN_NOT_FOUND"
                }(M || (M = {})),
                function(e) {
                    e.AVAILABLE = "AVAILABLE", e.DISMISSED = "DISMISSED", e.ELIGIBLE = "ELIGIBLE", e.REDEEMED = "REDEEMED"
                }(U || (U = {})),
                function(e) {
                    e.NONE = "NONE", e.READ = "READ", e.WRITE = "WRITE"
                }(F || (F = {})),
                function(e) {
                    e.DURATION_INVALID = "DURATION_INVALID", e.FORBIDDEN = "FORBIDDEN", e.TARGET_ALREADY_BANNED = "TARGET_ALREADY_BANNED", e.TARGET_IS_ADMIN = "TARGET_IS_ADMIN", e.TARGET_IS_ANONYMOUS = "TARGET_IS_ANONYMOUS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_GLOBAL_MOD = "TARGET_IS_GLOBAL_MOD", e.TARGET_IS_MOD = "TARGET_IS_MOD", e.TARGET_IS_SELF = "TARGET_IS_SELF", e.TARGET_IS_STAFF = "TARGET_IS_STAFF", e.TARGET_IS_VIP = "TARGET_IS_VIP", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(G || (G = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.SUCCESS = "SUCCESS", e.TARGET_IS_BROADCASTER = "TARGET_IS_BROADCASTER", e.TARGET_IS_MODERATOR = "TARGET_IS_MODERATOR"
                }(V || (V = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.TARGET_NOT_BANNED = "TARGET_NOT_BANNED", e.TARGET_NOT_FOUND = "TARGET_NOT_FOUND"
                }(B || (B = {})),
                function(e) {
                    e.EUR = "EUR", e.GBP = "GBP", e.USD = "USD"
                }(H || (H = {})),
                function(e) {
                    e.MONTH = "MONTH", e.ONE_TIME = "ONE_TIME", e.WEEK = "WEEK", e.YEAR = "YEAR"
                }(x || (x = {})),
                function(e) {
                    e.CHANSUB = "CHANSUB", e.TEAMSUB = "TEAMSUB", e.TURBO = "TURBO"
                }(Y || (Y = {})),
                function(e) {
                    e.GOOGLE_IAB = "GOOGLE_IAB", e.PRIME = "PRIME", e.RECURLY = "RECURLY", e.XSOLLA_V3 = "XSOLLA_V3", e.ZUORA = "ZUORA"
                }(W || (W = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.CANCELLED = "CANCELLED", e.INACTIVE = "INACTIVE"
                }(j || (j = {})),
                function(e) {
                    e.AMAZON = "AMAZON", e.CREDIT_CARD = "CREDIT_CARD", e.GOOGLE_IAB = "GOOGLE_IAB", e.PAYPAL = "PAYPAL"
                }(Q || (Q = {})),
                function(e) {
                    e.AMERICAN_EXPRESS = "AMERICAN_EXPRESS", e.DISCOVER = "DISCOVER", e.MASTERCARD = "MASTERCARD", e.VISA = "VISA"
                }(X || (X = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CLIP = "CLIP", e.LIVE_CHANNEL = "LIVE_CHANNEL", e.VOD = "VOD"
                }(K || (K = {})),
                function(e) {
                    e.ANDROID = "ANDROID", e.IOS = "IOS", e.WEB = "WEB"
                }(q || (q = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.INACTIVE = "INACTIVE", e.REJECTED_PERMISSIONS = "REJECTED_PERMISSIONS"
                }(z || (z = {})),
                function(e) {
                    e.COMPONENT = "COMPONENT", e.HIDDEN = "HIDDEN", e.PANEL = "PANEL", e.VIDEO_OVERLAY = "VIDEO_OVERLAY"
                }(Z || (Z = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.ASSETS_UPLOADED = "ASSETS_UPLOADED", e.DELETED = "DELETED", e.DEPRECATED = "DEPRECATED", e.IN_REVIEW = "IN_REVIEW", e.IN_TEST = "IN_TEST", e.PENDING_ACTION = "PENDING_ACTION", e.READY_FOR_REVIEW = "READY_FOR_REVIEW", e.REJECTED = "REJECTED", e.RELEASED = "RELEASED", e.UPLOADING = "UPLOADING"
                }(J || (J = {})),
                function(e) {
                    e.GAME_COMMERCE = "GAME_COMMERCE", e.GAME_COMMERCE_V2 = "GAME_COMMERCE_V2"
                }($ || ($ = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.CUSTOM_PARTNER = "CUSTOM_PARTNER", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PREMIUM_PARTNER = "PREMIUM_PARTNER", e.STANDARD_PARTNER = "STANDARD_PARTNER", e.UNPAID_PARTNER = "UNPAID_PARTNER"
                }(ee || (ee = {})),
                function(e) {
                    e.AGREEMENT_NOT_STARTED = "AGREEMENT_NOT_STARTED", e.AGREEMENT_PENDING_UPGRADE = "AGREEMENT_PENDING_UPGRADE", e.CANCELED = "CANCELED", e.COMPLETED = "COMPLETED", e.PAYOUT_METHOD_NOT_STARTED = "PAYOUT_METHOD_NOT_STARTED", e.PAYOUT_METHOD_PENDING = "PAYOUT_METHOD_PENDING", e.REGISTRATION_NOT_STARTED = "REGISTRATION_NOT_STARTED", e.REVIEW_PENDING = "REVIEW_PENDING", e.ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED = "ROYALTY_TAX_INTERVIEW_ACTION_REQUIRED", e.ROYALTY_TAX_INTERVIEW_FAILED = "ROYALTY_TAX_INTERVIEW_FAILED", e.ROYALTY_TAX_INTERVIEW_MISMATCH = "ROYALTY_TAX_INTERVIEW_MISMATCH", e.ROYALTY_TAX_INTERVIEW_NOT_STARTED = "ROYALTY_TAX_INTERVIEW_NOT_STARTED", e.ROYALTY_TAX_INTERVIEW_PENDING = "ROYALTY_TAX_INTERVIEW_PENDING", e.SERVICE_TAX_INTERVIEW_ACTION_REQUIRED = "SERVICE_TAX_INTERVIEW_ACTION_REQUIRED", e.SERVICE_TAX_INTERVIEW_FAILED = "SERVICE_TAX_INTERVIEW_FAILED", e.SERVICE_TAX_INTERVIEW_MISMATCH = "SERVICE_TAX_INTERVIEW_MISMATCH", e.SERVICE_TAX_INTERVIEW_NOT_STARTED = "SERVICE_TAX_INTERVIEW_NOT_STARTED", e.SERVICE_TAX_INTERVIEW_PENDING = "SERVICE_TAX_INTERVIEW_PENDING"
                }(te || (te = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_AGREEMENT_VERSION = "INVALID_AGREEMENT_VERSION", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ne || (ne = {})),
                function(e) {
                    e.AFFILIATE = "AFFILIATE", e.EXTENSIONS_DEVELOPER = "EXTENSIONS_DEVELOPER", e.PARTNER = "PARTNER"
                }(re || (re = {})),
                function(e) {
                    e.CUSTOM = "CUSTOM", e.LEGACY = "LEGACY", e.PREMIUM = "PREMIUM", e.STANDARD = "STANDARD"
                }(ie || (ie = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.INTERNAL_ERROR = "INTERNAL_ERROR", e.INVALID_FORMAT = "INVALID_FORMAT", e.UNAUTHENTICATED = "UNAUTHENTICATED"
                }(ae || (ae = {})),
                function(e) {
                    e.BIRTHDATE = "BIRTHDATE", e.CITY = "CITY", e.COMPANY_NAME = "COMPANY_NAME", e.COUNTRY_CODE = "COUNTRY_CODE", e.EMAIL = "EMAIL", e.FIRST_NAME = "FIRST_NAME", e.LAST_NAME = "LAST_NAME", e.MIDDLE_NAME = "MIDDLE_NAME", e.PARENT_EMAIL = "PARENT_EMAIL", e.PARENT_NAME = "PARENT_NAME", e.POSTAL = "POSTAL", e.STATE_CODE = "STATE_CODE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(oe || (oe = {})),
                function(e) {
                    e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.EMAIL = "EMAIL", e.NAME = "NAME", e.POSTAL = "POSTAL", e.STATE = "STATE", e.STREET_ADDRESS = "STREET_ADDRESS", e.STREET_ADDRESS_2 = "STREET_ADDRESS_2"
                }(ce || (ce = {})),
                function(e) {
                    e.ROYALTY = "ROYALTY", e.SERVICE = "SERVICE"
                }(se || (se = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EVERYONE = "EVERYONE", e.MODERATOR = "MODERATOR", e.SUBSCRIBER = "SUBSCRIBER"
                }(le || (le = {})),
                function(e) {
                    e.MAX_ROOMS_LIMIT_EXCEEDED = "MAX_ROOMS_LIMIT_EXCEEDED", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(ue || (ue = {})),
                function(e) {
                    e.ADMIN = "ADMIN", e.BROADCASTER = "BROADCASTER", e.GLOBALMOD = "GLOBALMOD", e.MOD = "MOD", e.REGULAR = "REGULAR", e.STAFF = "STAFF"
                }(Ee || (Ee = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.NAME_CONTAINS_INVALID_CHARACTERS = "NAME_CONTAINS_INVALID_CHARACTERS", e.NAME_INAPPROPRIATE = "NAME_INAPPROPRIATE", e.NAME_LENGTH_INVALID = "NAME_LENGTH_INVALID", e.NAME_NOT_UNIQUE = "NAME_NOT_UNIQUE", e.ROLES_INVALID = "ROLES_INVALID", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.TOPIC_INAPPROPRIATE = "TOPIC_INAPPROPRIATE", e.TOPIC_LENGTH_INVALID = "TOPIC_LENGTH_INVALID"
                }(de || (de = {})),
                function(e) {
                    e.AUTO_MOD_ENFORCEMENT_FAILED = "AUTO_MOD_ENFORCEMENT_FAILED", e.EMOTE_ONLY_MODE_ENFORCEMENT_FAILED = "EMOTE_ONLY_MODE_ENFORCEMENT_FAILED", e.FORBIDDEN = "FORBIDDEN", e.R9K_MODE_ENFORCEMENT_FAILED = "R9K_MODE_ENFORCEMENT_FAILED", e.RATE_LIMIT_FAILED = "RATE_LIMIT_FAILED", e.SLOW_MODE_ENFORCEMENT_FAILED = "SLOW_MODE_ENFORCEMENT_FAILED", e.SPAM_ENFORCEMENT_FAILED = "SPAM_ENFORCEMENT_FAILED", e.USER_CHAT_BANNED = "USER_CHAT_BANNED", e.USER_CHAT_TIMED_OUT = "USER_CHAT_TIMED_OUT", e.USER_SUSPENDED = "USER_SUSPENDED", e.ZALGO_ENFORCEMENT_FAILED = "ZALGO_ENFORCEMENT_FAILED"
                }(me || (me = {})),
                function(e) {
                    e.FORBIDDEN = "FORBIDDEN", e.ROOM_NOT_FOUND = "ROOM_NOT_FOUND", e.SLOW_MODE_DURATION_INVALID = "SLOW_MODE_DURATION_INVALID"
                }(pe || (pe = {})),
                function(e) {
                    e.DNR_TO_RESUB_NONRECURRING = "DNR_TO_RESUB_NONRECURRING", e.DNR_TO_RESUB_RECURRING = "DNR_TO_RESUB_RECURRING", e.GIFT_TO_PAID = "GIFT_TO_PAID"
                }(Te || (Te = {})),
                function(e) {
                    e.CONTENT = "CONTENT", e.TOP = "TOP"
                }(_e || (_e = {})),
                function(e) {
                    e.AWAY = "AWAY", e.BUSY = "BUSY", e.OFFLINE = "OFFLINE", e.ONLINE = "ONLINE"
                }(Ne || (Ne = {})),
                function(e) {
                    e.CLAIMABLE_GIFT_CREATION_ERROR = "CLAIMABLE_GIFT_CREATION_ERROR", e.GIFT_CREATION_ERROR = "GIFT_CREATION_ERROR", e.MAX_GIFTS_FOR_OFFER_EXCEEDED = "MAX_GIFTS_FOR_OFFER_EXCEEDED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ie || (Ie = {})),
                function(e) {
                    e.CLAIM_CODE = "CLAIM_CODE", e.DIRECT_ENTITLEMENT = "DIRECT_ENTITLEMENT", e.EXTERNAL = "EXTERNAL"
                }(Ae || (Ae = {})),
                function(e) {
                    e.ERROR_STATUS = "ERROR_STATUS", e.GIFT_CLAIMED = "GIFT_CLAIMED", e.GIFT_CLAIM_PENDING = "GIFT_CLAIM_PENDING"
                }(Re || (Re = {})),
                function(e) {
                    e.GIFT_NOT_CLAIMABLE = "GIFT_NOT_CLAIMABLE", e.NON_EXISTENT_GIFT = "NON_EXISTENT_GIFT", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.USER_DOES_NOT_OWN_GIFT = "USER_DOES_NOT_OWN_GIFT"
                }(Oe || (Oe = {})),
                function(e) {
                    e.OFFERS_FAILED_TO_UPDATE = "OFFERS_FAILED_TO_UPDATE", e.UNKNOWN = "UNKNOWN"
                }(fe || (fe = {})),
                function(e) {
                    e.TOO_MANY_RECENT_SPENDS = "TOO_MANY_RECENT_SPENDS", e.UNABLE_TO_SPEND = "UNABLE_TO_SPEND"
                }(he || (he = {})),
                function(e) {
                    e.OFFER_ALREADY_CLAIMED = "OFFER_ALREADY_CLAIMED", e.UNKNOWN = "UNKNOWN"
                }(ge || (ge = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.SERIES = "SERIES"
                }(De || (De = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK", e.TRENDING = "TRENDING"
                }(Ce || (Ce = {})),
                function(e) {
                    e.ALL_TIME = "ALL_TIME", e.LAST_DAY = "LAST_DAY", e.LAST_MONTH = "LAST_MONTH", e.LAST_WEEK = "LAST_WEEK"
                }(Se || (Se = {})),
                function(e) {
                    e.CREATED_AT_ASC = "CREATED_AT_ASC", e.CREATED_AT_DESC = "CREATED_AT_DESC", e.TRENDING = "TRENDING", e.VIEWS_ASC = "VIEWS_ASC", e.VIEWS_DESC = "VIEWS_DESC"
                }(ke || (ke = {})),
                function(e) {
                    e.HIGH = "HIGH", e.LOW = "LOW", e.MEDIUM = "MEDIUM"
                }(Le || (Le = {})),
                function(e) {
                    e.NOT_PERMITTED = "NOT_PERMITTED", e.NOT_RESTRICTED = "NOT_RESTRICTED", e.PERMITTED = "PERMITTED", e.TEMPORARY = "TEMPORARY"
                }(Pe || (Pe = {})),
                function(e) {
                    e.BODY_EMPTY = "BODY_EMPTY", e.NOT_DELIVERED = "NOT_DELIVERED", e.TARGET_BANNED = "TARGET_BANNED", e.TARGET_RESTRICTED = "TARGET_RESTRICTED"
                }(be || (be = {})),
                function(e) {
                    e.ALREADY_LINKED = "ALREADY_LINKED", e.CODE_EXPIRED = "CODE_EXPIRED", e.CODE_INCORRECT = "CODE_INCORRECT"
                }(ve || (ve = {})),
                function(e) {
                    e.all = "all", e.ps4 = "ps4", e.xbox = "xbox"
                }(ye || (ye = {})),
                function(e) {
                    e.COMMUNITY = "COMMUNITY", e.GAME = "GAME"
                }(we || (we = {})),
                function(e) {
                    e.ASC = "ASC", e.DESC = "DESC"
                }(Me || (Me = {})),
                function(e) {
                    e.TIME = "TIME", e.VIEWS = "VIEWS"
                }(Ue || (Ue = {})),
                function(e) {
                    e.DEFAULT = "DEFAULT", e.EXTENSION = "EXTENSION"
                }(Fe || (Fe = {})),
                function(e) {
                    e.ALL_VIDEOS = "ALL_VIDEOS", e.COLLECTION = "COLLECTION", e.GAME_VIDEOS = "GAME_VIDEOS", e.LATEST_BROADCASTS = "LATEST_BROADCASTS", e.LATEST_NON_BROADCASTS = "LATEST_NON_BROADCASTS", e.LONG_VIDEOS = "LONG_VIDEOS", e.SHORT_VIDEOS = "SHORT_VIDEOS", e.TOP_CLIPS = "TOP_CLIPS"
                }(Ge || (Ge = {})),
                function(e) {
                    e.ALREADY_CLAIMED = "ALREADY_CLAIMED", e.REQUEST_THROTTLED = "REQUEST_THROTTLED", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
                }(Ve || (Ve = {})),
                function(e) {
                    e.BITS_KEY_CODE = "BITS_KEY_CODE"
                }(Be || (Be = {})),
                function(e) {
                    e.BROADCASTER = "BROADCASTER", e.EDITOR = "EDITOR", e.MODERATOR = "MODERATOR", e.REGULAR = "REGULAR", e.SUBSCRIBER = "SUBSCRIBER"
                }(He || (He = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN", e.UNSET = "UNSET"
                }(xe || (xe = {})),
                function(e) {
                    e.ACTIVE = "ACTIVE", e.PENDING = "PENDING"
                }(Ye || (Ye = {})),
                function(e) {
                    e.BOUNTY_ALREADY_CLAIMED = "BOUNTY_ALREADY_CLAIMED", e.BOUNTY_LIMIT_REACHED = "BOUNTY_LIMIT_REACHED", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(We || (We = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(je || (je = {})),
                function(e) {
                    e.PROMPT_FOR_PERMISSIONS = "PROMPT_FOR_PERMISSIONS", e.REQUIRES_CONFIGURATION = "REQUIRES_CONFIGURATION"
                }(Qe || (Qe = {})),
                function(e) {
                    e.INVALID_PARAMETER = "INVALID_PARAMETER", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Xe || (Xe = {})),
                function(e) {
                    e.BOUNTY_NOT_LIVE = "BOUNTY_NOT_LIVE", e.INVALID_PARAMETER = "INVALID_PARAMETER", e.STREAM_TITLE_BANNED_WORDS = "STREAM_TITLE_BANNED_WORDS", e.STREAM_TITLE_TOO_LONG = "STREAM_TITLE_TOO_LONG", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN_ERROR = "UNKNOWN_ERROR"
                }(Ke || (Ke = {})),
                function(e) {
                    e.INVITATION_ALREADY_EXISTS = "INVITATION_ALREADY_EXISTS", e.INVITATION_INVALID = "INVITATION_INVALID", e.SQUAD_FULL = "SQUAD_FULL", e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_ALREADY_IN_SQUAD = "USER_ALREADY_IN_SQUAD"
                }(qe || (qe = {})),
                function(e) {
                    e.SQUAD_CANNOT_BE_UPDATED = "SQUAD_CANNOT_BE_UPDATED", e.SQUAD_NOT_FOUND = "SQUAD_NOT_FOUND", e.SQUAD_TOO_FEW_MEMBERS = "SQUAD_TOO_FEW_MEMBERS", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(ze || (ze = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(Ze || (Ze = {})),
                function(e) {
                    e.UNAUTHORIZED = "UNAUTHORIZED", e.USER_NOT_IN_SQUAD = "USER_NOT_IN_SQUAD"
                }(Je || (Je = {})),
                function(e) {
                    e.ACCEPTED = "ACCEPTED", e.DELETED = "DELETED", e.PENDING = "PENDING", e.REJECTED = "REJECTED", e.UNKNOWN = "UNKNOWN"
                }($e || ($e = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_ALREADY_EDITOR = "TARGET_USER_ALREADY_EDITOR", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(et || (et = {})),
                function(e) {
                    e.CHANNEL_NOT_FOUND = "CHANNEL_NOT_FOUND", e.TARGET_USER_NOT_FOUND = "TARGET_USER_NOT_FOUND"
                }(tt || (tt = {})),
                function(e) {
                    e.BASELINE = "BASELINE", e.HIGH = "HIGH", e.MAIN = "MAIN"
                }(nt || (nt = {})),
                function(e) {
                    e.CSGO_SKILL = "CSGO_SKILL", e.LOL_SUMMONER_RANK = "LOL_SUMMONER_RANK", e.RELEVANCE = "RELEVANCE", e.VIEWER_COUNT = "VIEWER_COUNT"
                }(rt || (rt = {})),
                function(e) {
                    e.HYPE = "HYPE", e.STARTTIME = "STARTTIME"
                }(it || (it = {})),
                function(e) {
                    e.PREMIERE = "PREMIERE", e.SEGMENT = "SEGMENT", e.SINGLE = "SINGLE", e.TIMETABLE = "TIMETABLE"
                }(at || (at = {})),
                function(e) {
                    e.CANCELLED = "CANCELLED", e.FAILED = "FAILED", e.SCHEDULED = "SCHEDULED", e.STARTED = "STARTED", e.SUCCESS = "SUCCESS", e.UNKNOWN = "UNKNOWN", e.UNSCHEDULED = "UNSCHEDULED"
                }(ot || (ot = {})),
                function(e) {
                    e.ALL = "ALL", e.LIVE = "LIVE"
                }(ct || (ct = {})),
                function(e) {
                    e.ALREADY_WATCHED = "ALREADY_WATCHED", e.NOT_INTERESTED = "NOT_INTERESTED", e.OFFENSIVE = "OFFENSIVE", e.OTHER = "OTHER", e.UNSPECIFIED = "UNSPECIFIED"
                }(st || (st = {})),
                function(e) {
                    e.CATEGORY = "CATEGORY", e.CHANNEL = "CHANNEL", e.SHELF = "SHELF", e.UNSPECIFIED = "UNSPECIFIED", e.VOD = "VOD"
                }(lt || (lt = {})),
                function(e) {
                    e.PRICE_ASC = "PRICE_ASC", e.PRICE_DESC = "PRICE_DESC", e.PURCHASE_DATE_ASC = "PURCHASE_DATE_ASC", e.PURCHASE_DATE_DESC = "PURCHASE_DATE_DESC"
                }(ut || (ut = {})),
                function(e) {
                    e.ALL = "ALL", e.SUBSCRIPTIONS = "SUBSCRIPTIONS"
                }(Et || (Et = {})),
                function(e) {
                    e.SUBSCRIPTION = "SUBSCRIPTION"
                }(dt || (dt = {})),
                function(e) {
                    e.MONKEYS = "MONKEYS", e.PURPLE = "PURPLE", e.ROBOTS = "ROBOTS"
                }(mt || (mt = {})),
                function(e) {
                    e.ALL = "ALL", e.GIFT = "GIFT", e.PLATFORM = "PLATFORM"
                }(pt || (pt = {})),
                function(e) {
                    e.INVALID_USER_ID = "INVALID_USER_ID", e.UNAUTHORIZED = "UNAUTHORIZED"
                }(Tt || (Tt = {})),
                function(e) {
                    e.DELETED = "DELETED", e.PENDING_REVIEW = "PENDING_REVIEW", e.PENDING_REVIEW_SPAM = "PENDING_REVIEW_SPAM", e.PUBLISHED = "PUBLISHED", e.UNPUBLISHED = "UNPUBLISHED"
                }(_t || (_t = {})),
                function(e) {
                    e.APPROVED = "APPROVED", e.COMPLETED = "COMPLETED", e.LIVE = "LIVE", e.PENDING = "PENDING", e.REJECTED = "REJECTED"
                }(Nt || (Nt = {})),
                function(e) {
                    e.ITEM = "ITEM", e.LINK_NOTIFICATION = "LINK_NOTIFICATION"
                }(It || (It = {})),
                function(e) {
                    e.SERVICE_DEPENDENCY_FAILURE = "SERVICE_DEPENDENCY_FAILURE", e.UNKNOWN = "UNKNOWN", e.USER_UNAUTHORIZED = "USER_UNAUTHORIZED"
                }(At || (At = {}))
        },
        E8KT: function(e, t, n) {},
        ER97: function(e, t, n) {},
        FXNN: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("5zf8"),
                c = n("Ue10"),
                s = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return i.createElement(c.Ya, {
                            className: "preview-card-game-balloon-row",
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap
                        }, i.createElement(c.Va, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Row,
                            padding: .5
                        }, i.createElement(c.Fb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.db.Hidden,
                            position: c.kb.Relative
                        }, i.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, i.createElement(c.S, r.__assign({}, e))), i.createElement(c.Fb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: c.f.Center,
                            background: c.r.Overlay,
                            color: c.O.Overlay,
                            display: c.X.Flex,
                            justifyContent: c.Xa.Center,
                            position: c.kb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(c.tb, {
                            asset: c.ub.Play,
                            type: c.vb.Inherit
                        }))), i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(c.Ya, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(c.W, null, this.props.gameChange.label)), i.createElement(c.Ya, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(c.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                l = n("0INk"),
                u = n("8/mp"),
                E = n("eJ65"),
                d = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(l.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(c.Ya, {
                            className: "preview-card-game-balloon",
                            display: c.X.InlineBlock,
                            position: c.kb.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(E.a, {
                            key: "game-balloon",
                            display: c.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.ub.ViewerList
                        }, i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Row
                        }, i.createElement(c.W, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(c.Ya, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(c.hb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, i.createElement(c.Ya, {
                            overflow: c.db.Hidden,
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            flexWrap: c.Ba.NoWrap
                        }, i.createElement(c.Ya, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(c.W, {
                            color: c.O.Alt2
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(c.Ya, {
                            className: "preview-card-game-balloon__content",
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Ba.NoWrap
                        }, i.createElement(u.b, null, i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexDirection: c.Aa.Column,
                            flexWrap: c.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(s, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                m = n("kduP"),
                p = n("2xye"),
                T = function(e) {
                    return i.createElement(c.Ya, null, i.createElement(c.W, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, r) {
                        return i.createElement(c.Qa, {
                            key: n
                        }, i.createElement(c.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: p.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.V.Inherit
                        }, t.label, _(n, r.length - 1) ? null : ", "))
                    })))
                },
                _ = function(e, t) {
                    return e === t
                },
                N = n("N0BP"),
                I = (n("XA5B"), function(e) {
                    var t = i.createElement(c.Fb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.db.Hidden
                    }, i.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, i.createElement(c.S, r.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(c.U, r.__assign({}, Object(N.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            I.displayName = "PreviewCardIconicImage";
            var A, R = n("TSYQ"),
                O = (n("cRsL"), function(e) {
                    var t = R("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(c.Ya, {
                        display: c.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Xa.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, i.createElement(c.Ya, {
                        display: c.X.InlineFlex
                    }, i.createElement(c.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Vb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(c.Ya, {
                        display: c.X.InlineFlex
                    }, i.createElement(c.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                }),
                f = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(c.nb, {
                        borderRadius: c.x.None,
                        size: c.pb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(O, r.__assign({}, e.topBar))), a = 3), i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(c.Ya, {
                        position: c.kb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                h = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(c.Ya, {
                        display: c.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(c.tb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(c.Fb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.X.Flex,
                        fontSize: c.Ca.Size6,
                        justifyContent: c.Xa.Center
                    }, t, i.createElement(c.W, null, e.value)) : i.createElement(c.Fb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(c.W, null, e.value))
                }),
                g = n("GnwI"),
                D = (n("B3R5"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            didAnimatedPreviewLoad: !1,
                            didAnimatedPreviewFailToLoad: !1,
                            isHovered: !1
                        }, t.onImageError = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onImageLoad = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t.onAnimatedImageLoad = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewLoad: !0
                            })
                        }, t.onAnimatedImageLoadError = function(e) {
                            void 0 !== t.props.animatedImageProps && e.currentTarget.src === t.props.animatedImageProps.src && t.setState({
                                didAnimatedPreviewFailToLoad: !0
                            })
                        }, t.handleFocus = function() {
                            t.setState({
                                isHovered: !0
                            })
                        }, t.handleBlur = function() {
                            t.setState({
                                isHovered: !1
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), i.createElement("div", r.__assign({}, e, {
                            onClick: this.props.onClick
                        }), i.createElement(c.Fb, {
                            background: c.r.Alt2,
                            overflow: c.db.Hidden
                        }, i.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = R("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, r.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, r.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                C = Object(g.b)("PreviewCardThumbnail")(D),
                S = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(c.Ya, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(c.W, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(c.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.V.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(c.U, r.__assign({}, Object(N.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(c.W, {
                        type: c.Wb.H3,
                        fontSize: c.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(c.Ya, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                k = n("H1ft"),
                L = n("ZbA5"),
                P = n("QVaV"),
                b = n("hyVY"),
                v = n("MXoD"),
                y = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(A || (A = {}));
            var w, M, U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        r = t ? c.ub.Unlock : c.ub.Lock;
                    return i.createElement(c.Ya, null, !t && i.createElement(c.Fb, {
                        background: c.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: c.O.Overlay,
                        display: c.X.Flex,
                        position: c.kb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: c.jc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: c.Sb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: c.f.Center,
                        alignContent: c.e.Center,
                        flexDirection: c.Aa.Column,
                        flexWrap: c.Ba.Wrap,
                        justifyContent: c.Xa.Center,
                        "data-test-selector": A.LockSelector
                    }, i.createElement(c.Qa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c.W, {
                        color: c.O.Overlay,
                        fontSize: c.Ca.Size5,
                        "data-test-selector": A.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(c.Ya, null, i.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(c.Fb, {
                        display: c.X.InlineFlex,
                        position: c.kb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: c.jc.Default,
                        fontSize: c.Ca.Size6,
                        background: c.r.Overlay,
                        borderRadius: c.x.Medium,
                        color: c.O.Overlay
                    }, i.createElement(c.Zb, {
                        direction: this.props.attachTop ? c.bc.Bottom : c.bc.Top,
                        align: c.ac.Right,
                        label: n
                    }, i.createElement(c.tb, {
                        asset: r,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function F(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function G(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(w || (w = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var V = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", r.__assign({
                            className: "preview-card"
                        }, Object(N.a)(this.props)), i.createElement(c.Fb, {
                            position: c.kb.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.db.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(c.U, {
                            to: Object(v.a)(this.getTrackingContext(p.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(C, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: F(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(c.Ya, {
                            display: c.X.Flex,
                            flexWrap: c.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(c.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(c.Ya, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(c.Ya, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, r.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(f, {
                            topLeft: i.createElement(L.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(h, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : F(this.props) ? i.createElement(f, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(h, {
                                value: Object(b.b)(this.props.durationInSeconds),
                                icon: c.ub.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(h, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(h, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(h, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : G(this.props) ? i.createElement(f, {
                            topLeft: i.createElement(h, {
                                value: Object(b.b)(this.props.durationInSeconds),
                                icon: c.ub.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(h, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(h, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return F(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return F(this.props) || G(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(c.Ya, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(I, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(v.a)(this.getTrackingContext(p.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": w.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(c.Ya, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(I, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(v.a)(this.getTrackingContext(p.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": w.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(P.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(v.a)(this.getTrackingContext(p.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), G(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : F(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(v.a)(this.getTrackingContext(p.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(S, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(v.a)(this.getTrackingContext(p.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(c.Ya, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(y.a, r.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return F(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(U, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!F(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === k.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, r) {
                        switch (e) {
                            case k.a.Balloon:
                                return i.createElement(d, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: r
                                });
                            case k.a.Inline:
                                return i.createElement(T, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case k.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                B = Object(g.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(V);
            n.d(t, !1, function() {
                return w
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return V
            }), n.d(t, "a", function() {
                return B
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            });
            var r, i = n("/7QA"),
                a = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(r || (r = {}));
            var o = function() {
                switch (i.p.experiments.getAssignment(a.b.Archer)) {
                    case "balloon":
                        return r.Balloon;
                    case "inline":
                        return r.Inline;
                    case "control":
                    default:
                        return r.None
                }
            }
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("/7QA"),
                i = [{
                    code: "ar",
                    label: "العربية"
                }, {
                    code: "bg",
                    label: "Български"
                }, {
                    code: "cs",
                    label: "Čeština"
                }, {
                    code: "da",
                    label: "Dansk"
                }, {
                    code: "de",
                    label: "Deutsch"
                }, {
                    code: "el",
                    label: "Ελληνικά"
                }, {
                    code: "en",
                    label: "English"
                }, {
                    code: "es",
                    label: "Español"
                }, {
                    code: "fi",
                    label: "Suomi"
                }, {
                    code: "fr",
                    label: "Français"
                }, {
                    code: "hu",
                    label: "Magyar"
                }, {
                    code: "it",
                    label: "Italiano"
                }, {
                    code: "ja",
                    label: "日本語"
                }, {
                    code: "ko",
                    label: "한국어"
                }, {
                    code: "nl",
                    label: "Nederlands"
                }, {
                    code: "no",
                    label: "Norsk"
                }, {
                    code: "pl",
                    label: "Polski"
                }, {
                    code: "pt",
                    label: "Português"
                }, {
                    code: "ro",
                    label: "Română"
                }, {
                    code: "ru",
                    label: "Русский"
                }, {
                    code: "sk",
                    label: "Slovenčina"
                }, {
                    code: "sv",
                    label: "Svenska"
                }, {
                    code: "th",
                    label: "ภาษาไทย"
                }, {
                    code: "tr",
                    label: "Türkçe"
                }, {
                    code: "vi",
                    label: "Tiếng Việt"
                }, {
                    code: "zh-hk",
                    label: "中文(粵語)"
                }, {
                    code: "zh",
                    label: "中文"
                }];

            function a(e) {
                return void 0 === e && (e = !1), [{
                    code: "asl",
                    label: "American Sign Language"
                }, {
                    code: "other",
                    label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
                }]
            }
            var o = new Set(i.concat(a()).map(function(e) {
                return e.code
            }));

            function c() {
                var e = r.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return i.slice().sort(function(e, n) {
                    var r = t(e),
                        i = t(n);
                    return r !== i ? r - i : r + ":" + e.label < i + ":" + n.label ? -1 : 1
                }).concat(a(!0))
            }
        },
        HieK: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_PrimeOffers_ClaimedPrimeOffer"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "countryCode"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
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
                                value: "primeOffers"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                                                value: "hasEntitlement"
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
                    end: 185
                }
            };
            n.loc.source = {
                body: "query Prime_PrimeOffers_ClaimedPrimeOffer($dateOverride: Time $countryCode: String) {\nprimeOffers(dateOverride: $dateOverride countryCode: $countryCode) {\nid\nself {\nhasEntitlement\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "h", function() {
                return u
            });
            var r = "directory.LANGUAGE_TAGS_UPDATED",
                i = "directory.TAG_FILTER_ADDED",
                a = "directory.TAG_FILTER_CHANGED",
                o = "directory.TAG_FILTER_REMOVED";

            function c(e) {
                return {
                    type: r,
                    languageTagFilters: e
                }
            }

            function s(e, t) {
                return {
                    type: i,
                    addedTag: e,
                    categoryName: t
                }
            }

            function l(e, t) {
                return {
                    type: a,
                    categoryName: t,
                    tagFilters: e
                }
            }

            function u(e, t) {
                return {
                    type: o,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        MXoD: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("mrSG"),
                i = n("cr+I"),
                a = function(e, t) {
                    if (!(e.content || e.content_index || e.medium) || !t) return t;
                    if ("string" == typeof t && (/^\w+:\/\//.test(t) || t.startsWith("//"))) {
                        var n = new URL(t),
                            a = "" !== n.search ? i.parse(n.search) : {};
                        return e.content && (a.tt_content = e.content), e.content_index && (a.tt_content_index = e.content_index), e.medium && (a.tt_medium = e.medium), n.search = i.stringify(a), n.toString()
                    }
                    var o = "string" == typeof t ? {
                        pathname: t
                    } : t;
                    return r.__assign({}, o, {
                        state: r.__assign({}, o.state, {
                            content: e.content || o.state && o.state.content,
                            content_index: e.content_index || o.state && o.state.content_index,
                            medium: e.medium || o.state && o.state.medium
                        })
                    })
                }
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("+U0Y"),
                o = n("5xw2");

            function c(e) {
                return e.userPreferences.languagePreferences
            }
            i.p.store.registerReducer("userPreferences", function(e, t) {
                switch (void 0 === e && (e = {
                    languagePreferences: Object(o.b)()
                }), t.type) {
                    case a.a:
                        return r.__assign({}, e, {
                            languagePreferences: t.languagePreferences
                        });
                    default:
                        return e
                }
            })
        },
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("oB8h"),
                i = function(e) {
                    switch (e) {
                        case r.a.Live:
                            return r.a.Live;
                        case r.a.Premiere:
                            return r.a.Premiere;
                        case r.a.Rerun:
                            return r.a.Rerun;
                        case r.a.WatchParty:
                            return r.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("q1tI"),
                i = /^[\x00-\x7F]*$/,
                a = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return i.test(e)
            }
        },
        QkMI: function(e, t, n) {},
        T2RZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return N
            });
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/MKj"),
                o = n("fvjX"),
                c = n("/7QA"),
                s = n("2Ygb"),
                l = n("2xye"),
                u = n("oJov"),
                E = n("JVUd"),
                d = n("moLQ"),
                m = n("yI6f");

            function p(e, t) {
                if (t) {
                    var n = {};
                    return n = "string" == typeof t ? {
                        pathname: t
                    } : t, r.__assign({}, n, {
                        state: r.__assign({}, n.state, e)
                    })
                }
            }

            function T(e, t, n) {
                return n || (n = function() {}),
                    function(i) {
                        n && n(i), c.o.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: t
                        }))
                    }
            }

            function _(e, t) {
                return r.__assign({}, t, {
                    callback: function(n) {
                        t.callback && t.callback(n), c.o.track(l.SpadeEventType.ItemClick, r.__assign({}, e, {
                            item_subsection: l.PageviewContent.Tag,
                            tag_id: n.id
                        }))
                    }
                })
            }

            function N(e, t, n) {
                return function(N) {
                    var I = function(a) {
                        function o() {
                            var e = null !== a && a.apply(this, arguments) || this;
                            return e.itemTrackingID = Object(m.f)(), e.trackImpression = function() {
                                c.o.track(l.SpadeEventType.ItemDisplay, e.getCommonTrackingParams())
                            }, e
                        }
                        return r.__extends(o, a), o.prototype.componentDidMount = function() {
                            this.props.impressionListener.registerImpressionCallback(this.trackImpression)
                        }, o.prototype.render = function() {
                            if (N === u.a) {
                                var e = this.props;
                                return i.createElement(N, r.__assign({}, e, this.wrapGameCardPropsWithTracking(e)))
                            }
                            e = this.props;
                            return i.createElement(N, r.__assign({}, e, this.wrapPreviewCardPropsWithTracking(e)))
                        }, o.prototype.getTrackingLocationState = function() {
                            var t = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [],
                                n = this.props.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                r = e;
                            this.props.tagFilters.length > 0 && (r === l.PageviewMedium.Browse ? r = l.PageviewMedium.BrowseDirectoryTags : r === l.PageviewMedium.Game && (r = l.PageviewMedium.GameDirectoryTags));
                            var i = {
                                tag_set: JSON.stringify(t),
                                tag_filter_set: JSON.stringify(n),
                                tag_streamer_set: "[]",
                                medium: r
                            };
                            return "POP" === c.p.history.action ? i : (c.p.history.location.state && c.p.history.location.state.medium === l.PageviewMedium.TwitchHome && (i.item_tracking_id = c.p.history.location.state.item_tracking_id, i.medium = c.p.history.location.state.medium, i.content = c.p.history.location.state.content), i)
                        }, o.prototype.getCommonTrackingParams = function() {
                            var r = this.props.trackingProps || {},
                                i = r.itemID,
                                a = r.category,
                                o = r.channelID,
                                c = r.itemPosition,
                                s = r.rowPosition,
                                l = this.props.tagListProps ? this.props.tagListProps.tags.map(function(e) {
                                    return e.id
                                }) : [];
                            return {
                                channel_id: void 0 !== o ? Number(o) : null,
                                component: null,
                                content_type: t,
                                item_tracking_id: this.itemTrackingID,
                                item_id: void 0 !== i ? i : null,
                                item_position: void 0 !== c ? c : null,
                                item_subsection: null,
                                item_page: e,
                                reason_target: null,
                                reason_target_type: null,
                                reason_type: null,
                                request_id: null,
                                row_name: null,
                                row_position: void 0 !== s ? s : null,
                                section: void 0 !== n ? n : null,
                                model_tracking_id: null,
                                tag_set: JSON.stringify(l),
                                tag_streamer_set: "[]",
                                filtered: this.props.tagFilters.length > 0,
                                category: void 0 !== a ? a : null,
                                tag_id: null
                            }
                        }, o.prototype.wrapPreviewCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return r.__assign({
                                onVideoTitleClick: T(t, l.PageviewContent.VideoTitle, e.onVideoTitleClick),
                                linkTo: p(n, this.props.linkTo),
                                onThumbnailClick: T(t, l.PageviewContent.VideoThumbnail, e.onThumbnailClick),
                                channelLinkTo: p(n, e.channelLinkTo),
                                onChannelLoginClick: T(t, l.PageviewContent.ChannelMetadata, e.onChannelLoginClick),
                                onChannelImageClick: T(t, l.PageviewContent.UserThumbnail, e.onChannelImageClick),
                                gameTitleLinkTo: p(n, e.gameTitleLinkTo),
                                onGameTitleClick: T(t, l.PageviewContent.GameName, e.onGameTitleClick)
                            }, e.tagListProps && {
                                tagListProps: _(t, e.tagListProps)
                            }, n.medium && {
                                trackingContext: {
                                    medium: n.medium,
                                    content: n.content
                                }
                            })
                        }, o.prototype.wrapGameCardPropsWithTracking = function(e) {
                            var t = this.getCommonTrackingParams(),
                                n = this.getTrackingLocationState();
                            return r.__assign({
                                linkTo: p(n, e.linkTo),
                                onClick: T(t, l.PageviewContent.GameBoxart, this.props.onClick)
                            }, e.tagListProps && {
                                tagListProps: _(t, e.tagListProps)
                            })
                        }, o.displayName = Object(s.a)(o.name, N), o
                    }(i.Component);
                    return Object(o.compose)(Object(E.a)("PreviewCard-" + e + "-" + t, {
                        percentage: 75
                    }), Object(a.connect)(function(n, r) {
                        var i = [];
                        if (e === l.PageviewMedium.Game) {
                            var a = r.trackingProps && r.trackingProps.categoryName;
                            i = a ? Object(d.b)(n, a) : []
                        } else i = t === m.b.Live ? Object(d.b)(n, d.a.LiveChannels) : Object(d.b)(n, d.a.Categories);
                        return {
                            tagFilters: i
                        }
                    }))(I)
                }
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                c = n("/7QA");

            function s(e) {
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
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = i.referenceTracking,
                                        o = a.content,
                                        s = a.medium,
                                        l = a.content_index,
                                        u = a.email_id;
                                    c.p.tracking.trackPageview(r.__assign({
                                        content: o,
                                        medium: s,
                                        content_index: l,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, c.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : c.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
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
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return s
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return c
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                a = n("Igt5"),
                o = "languageTags";

            function c(e, t) {
                var n = this;
                return function(c) {
                    return r.__awaiter(n, void 0, void 0, function() {
                        var n, s;
                        return r.__generator(this, function(r) {
                            return n = new Set(l()), t ? n.add(e) : n.delete(e), s = Array.from(n), i.m.set(o, s), c(Object(a.g)(s)), [2]
                        })
                    })
                }
            }

            function s(e) {
                var t = this;
                return function(n) {
                    return r.__awaiter(t, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            return i.m.set(o, e), n(Object(a.g)(e)), [2]
                        })
                    })
                }
            }

            function l() {
                return i.m.get(o, [])
            }
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var r, i, a, o, c = n("mrSG"),
                s = n("TSYQ"),
                l = n("q1tI"),
                u = n("/7QA"),
                E = n("oB8h"),
                d = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((r = {})[E.a.Live] = "stream-type-indicator--live", r[E.a.Premiere] = "stream-type-indicator--premiere", r[E.a.Rerun] = "stream-type-indicator--rerun", r[E.a.WatchParty] = "stream-type-indicator--rerun", r),
                p = ((i = {})[E.a.Premiere] = d.ub.VideoPremiere, i[E.a.Rerun] = d.ub.VideoRerun, i[E.a.WatchParty] = d.ub.VideoRerun, i),
                T = ((a = {})[E.a.Premiere] = d.vb.Live, a[E.a.Rerun] = d.vb.Inherit, a[E.a.WatchParty] = d.vb.Inherit, a),
                _ = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(d.Fb, {
                            className: this.getClassNames(),
                            color: d.O.Overlay,
                            background: d.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: d.x.Small,
                            display: d.X.Flex
                        }, l.createElement(d.Ya, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), l.createElement(d.W, {
                            type: d.Wb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? l.createElement(d.Fb, {
                            borderRadius: d.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === E.a.Live ? l.createElement(d.Ya, {
                            className: "stream-type-indicator__live-wrapper",
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, l.createElement(d.K, {
                            status: d.M.Live,
                            size: d.L.Small
                        })) : l.createElement(d.tb, {
                            asset: p[this.props.type],
                            type: T[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(u.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case E.a.Live:
                                return Object(u.d)("LIVE", "StreamTypeIndicator");
                            case E.a.Premiere:
                                return Object(u.d)("Premiere", "StreamTypeIndicator");
                            case E.a.Rerun:
                            case E.a.WatchParty:
                                return Object(u.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(l.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return _
            })
        },
        bk9Q: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PrimePage_Streams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                value: "languages"
                            }
                        },
                        type: {
                            kind: "ListType",
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
                                        value: "name"
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
                                        value: "viewersCount"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "streams"
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
                                            value: "languages"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "languages"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "primePageGameStreamEdge"
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
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "primePageGameStreamEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamEdge"
                        }
                    },
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
                                        value: "viewersCount"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 390
                }
            };
            n.loc.source = {
                body: "query PrimePage_Streams($name: String! $limit: Int $languages: [String!]) {\ngame(name:$name) {\nid\ndisplayName\nviewersCount\nstreams(first: $limit languages:$languages) {\nedges {\n...primePageGameStreamEdge\n}\n}\n}\n}\nfragment primePageGameStreamEdge on StreamEdge {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nroles {\nisPartner\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        cRsL: function(e, t, n) {},
        di4w: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("oJmH"),
                o = n("mLw1"),
                c = n("/7QA"),
                s = n("yR8l"),
                l = n("V+GM"),
                u = n("NvVO"),
                E = n("2xye"),
                d = n("GnwI"),
                m = n("igVx"),
                p = n("jmDq"),
                T = n("O4UZ"),
                _ = n("uzin"),
                N = n("/MKj"),
                I = n("OhOW"),
                A = n("oB8h"),
                R = n("hX9f"),
                O = n("Ue10"),
                f = n("bk9Q"),
                h = (n("ER97"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (e.error) return null;
                        if (e.loading) return i.createElement(O.Ya, null, i.createElement(O.ab, {
                            fillContent: !0
                        }));
                        var t = e.game,
                            n = (t && t.streams && t.streams.edges || []).filter(function(e) {
                                var t = e.node;
                                return t && t.id && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                            }).map(function(e, t) {
                                var n = g(e);
                                if (n) return i.createElement(R.b, {
                                    directoryName: "fortnite",
                                    shouldShowGame: !1,
                                    streamIndex: t,
                                    streamNode: n,
                                    key: n.id
                                })
                            });
                        return i.createElement(O.Ya, {
                            className: "twitch-prime-streamers__tower",
                            flexShrink: 0,
                            "data-target": "twitch-prime-streamers",
                            "data-test-selector": "twitch-prime-streamers-grid",
                            padding: {
                                x: 2
                            },
                            margin: {
                                x: "auto"
                            }
                        }, i.createElement(O.Ya, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__count"
                        }, i.createElement(O.W, {
                            type: O.Wb.H3,
                            color: O.O.Link,
                            bold: !0
                        }, Object(c.d)("Check out Fortnite on Twitch.tv", "TwitchPrimeStreamers")), i.createElement(O.W, {
                            type: O.Wb.H4,
                            color: O.O.Link
                        }, Object(c.d)("{viewers, number} viewers right now", {
                            viewers: e.game && e.game.viewersCount || 0
                        }, "TwitchPrimeStreamers"))), i.createElement(O.cc, {
                            gutterSize: O.ec.Small,
                            childWidth: O.dc.Large,
                            children: n,
                            "data-test-selector": "twitch-prime-streamers-tower",
                            center: !0
                        }), i.createElement(O.Ya, {
                            margin: {
                                y: 1
                            },
                            className: "twitch-prime-streamers__game-page",
                            textAlign: O.Sb.Center
                        }, i.createElement(O.U, {
                            to: "/directory/game/Fortnite",
                            hoverUnderlineNone: !0,
                            type: O.V.Default
                        }, Object(c.d)("View more Fortnite on Twitch.tv >", "TwitchPrimeStreamers"))))
                    }, t
                }(i.Component)),
                g = function(e) {
                    var t = null,
                        n = e.node;
                    return n && (t = {
                        __typename: "Stream",
                        id: n.id,
                        title: n.title || "",
                        viewersCount: n.viewersCount || 0,
                        previewImageURL: n.previewImageURL || "",
                        broadcaster: n.broadcaster ? {
                            __typename: "User",
                            id: n.broadcaster.id,
                            login: n.broadcaster.login,
                            displayName: n.broadcaster.displayName,
                            roles: null,
                            profileImageURL: ""
                        } : null,
                        game: null,
                        tags: null,
                        type: A.a.Live
                    }), t
                },
                D = Object(a.compose)(Object(d.b)("TwitchPrimeStreamers"), Object(s.a)(f, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent("fortnite"),
                                limit: 4,
                                languages: e.languagePreferences
                            }
                        }
                    }
                }))(h);
            var C = Object(N.connect)(function(e) {
                    return {
                        languagePreferences: Object(I.a)(e)
                    }
                }, null)(D),
                S = n("nNY8"),
                k = n("HieK"),
                L = (n("FXNN"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getFortniteOffer = function() {
                            var e = t.props.data,
                                n = e && e.primeOffers,
                                r = c.b.get(S.b, S.a),
                                i = n && n.filter(function(e) {
                                    return e && e.id === r
                                });
                            return i && i[0]
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data;
                        if (e && e.loading) return i.createElement(O.ab, {
                            fillContent: !0
                        });
                        var t = this.getFortniteOffer();
                        return e && e.error || !t || !t.self || !t.self.hasEntitlement ? i.createElement(o.a, {
                            to: "/prime/fortnite"
                        }) : i.createElement(O.Ya, {
                            className: "twitch-prime-fortnite-success",
                            "data-test-selector": "twitch-prime-fortnite-success"
                        }, i.createElement(O.Ya, {
                            textAlign: O.Sb.Center,
                            className: "twitch-prime-fortnite-success__header"
                        }, i.createElement(_.a, {
                            renderOfferImage: !0
                        }, i.createElement(O.Ya, null, i.createElement(O.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(O.W, {
                            type: O.Wb.H1,
                            color: O.O.Overlay,
                            transform: O.Vb.Uppercase,
                            bold: !0
                        }, Object(c.d)("Loot acquired!", "FortniteSuccess"))), i.createElement(O.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(O.W, {
                            type: O.Wb.H3,
                            color: O.O.Overlay,
                            transform: O.Vb.Uppercase,
                            bold: !0
                        }, Object(c.d)("Load up Fortnite and your rewards will be waiting for you!", "FortniteSuccess")))), i.createElement(O.Ya, {
                            padding: {
                                y: 2
                            }
                        }, i.createElement(O.W, {
                            type: O.Wb.H3,
                            color: O.O.Overlay,
                            bold: !0
                        }, Object(c.d)("Problems? <x:link>Click here ›</x:link>", {
                            "x:link": function(e) {
                                return i.createElement(O.U, {
                                    to: "#faq",
                                    hoverUnderlineNone: !1,
                                    type: O.V.Overlay
                                }, e)
                            }
                        }, "FortniteSuccess"))))), i.createElement(C, null), i.createElement(m.a, {
                            hash: this.props.location.hash.replace("#", "")
                        }), i.createElement(p.a, {
                            partnerSocialLink: "https://twitter.com/FortniteGame",
                            partnerSocialText: "@FortniteGame"
                        }))
                    }, t
                }(i.Component)),
                P = Object(a.compose)(Object(s.a)(k, {
                    options: function() {
                        return {
                            variables: {
                                dateOverride: Object(T.i)(T.f.DateOverride),
                                countryCode: Object(T.i)(T.f.CountryCode)
                            }
                        }
                    }
                }), Object(d.b)("TwitchPrimeFortniteSuccessPage", {
                    destination: u.a.TwitchPrimeFortniteSuccessPage
                }), Object(l.a)({
                    location: E.PageviewLocation.TwitchPrimeFortniteSuccessPage
                }))(L);
            n.d(t, "TEST_SELECTOR", function() {
                return "twitch-prime-fortnite-success"
            }), n.d(t, "TwitchPrimeFortniteSuccessPageComponent", function() {
                return L
            }), n.d(t, "TwitchPrimeFortniteSuccessPage", function() {
                return P
            })
        },
        gAd6: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoPreviewCardGameID"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "name"
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
                                        value: "name"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 73
                }
            };
            n.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hX9f: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("9C/b"),
                o = n("fvjX"),
                c = n("/7QA"),
                s = n("GFmA"),
                l = n("oB8h"),
                u = n("kduP"),
                E = n("2xye"),
                d = n("4KoZ"),
                m = n("QV0j"),
                p = n("yI6f"),
                T = n("T2RZ"),
                _ = n("Ue10"),
                N = (n("zrz1"), Object(T.a)(E.PageviewMedium.Game, p.b.Live, p.c.BrowseInCategoryChannels)(s.a)),
                I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getLinkTo = function(e, n) {
                            var i = t.props.trackingContent ? t.props.trackingContent : E.PageviewContent.Live,
                                a = E.PageviewMedium.Game;
                            t.props.trackingMedium && (a = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: r.__assign({}, o, {
                                    medium: a,
                                    content: i,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            if (t.props.shouldShowGame && t.props.streamNode.game) {
                                var n = t.props.streamNode.game[e];
                                if (n) return n
                            }
                            return ""
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.shouldShowGame ? s.b.MixedGameAndChannelList : s.b.SingleGameList,
                            title: e.title || Object(d.a)(),
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || c.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: this.shouldShowGame("name"),
                            gameTitleLinkTo: this.getLinkTo(Object(u.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || c.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: Object(m.a)(e.type) || l.a.Live,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return i.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, i.createElement(_.Ya, {
                            className: "stream-thumbnail__card",
                            position: _.kb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, i.createElement(N, r.__assign({}, n, {
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, ""),
                            trackingProps: {
                                category: e.game ? e.game.id : void 0,
                                categoryName: e.game ? e.game.name : void 0,
                                itemPosition: t,
                                rowPosition: 0,
                                channelID: e.broadcaster.id || void 0
                            }
                        }))))
                    }, t
                }(i.Component),
                A = Object(o.compose)(a.a)(I);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return I
            }), n.d(t, "b", function() {
                return A
            })
        },
        hyVY: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Math.floor(e % 60),
                    r = Math.floor(e % 3600 / 60),
                    a = Math.floor(e / 3600);
                return t && t.zeroPadAll ? i(a, 2) + ":" + i(r, 2) + ":" + i(n, 2) : a ? a + ":" + i(r, 2) + ":" + i(n, 2) : r + ":" + i(n, 2)
            }

            function i(e, t) {
                return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
            }

            function a(e) {
                if ("" === e) return 0;
                var t = e.split(":");
                return t.length > 3 ? NaN : t.reduce(function(e, t) {
                    return 60 * e + ("-" === t[0] ? NaN : Math.round(parseInt(t, 10)))
                }, 0)
            }
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            })
        },
        igVx: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("i8i4"),
                o = n("/7QA"),
                c = n("Ue10"),
                s = (n("2MIk"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.scrollToFaqQuestionId()
                    }, t.prototype.componentDidMount = function() {
                        this.scrollToFaqQuestionId()
                    }, t.prototype.render = function() {
                        return i.createElement("div", {
                            id: "faq",
                            ref: "faq"
                        }, i.createElement(c.Fb, {
                            className: "twitch-prime-faq",
                            padding: {
                                x: 1,
                                y: 5
                            }
                        }, i.createElement(c.sb, {
                            centered: !0
                        }, i.createElement(c.Ja, {
                            justifyContent: c.Xa.Center
                        }, i.createElement(c.P, {
                            cols: {
                                default: 12,
                                sm: 10,
                                md: 8,
                                lg: 7,
                                xl: 6
                            }
                        }, i.createElement(c.Ya, {
                            margin: {
                                bottom: 2
                            },
                            textAlign: c.Sb.Center,
                            fullWidth: !0
                        }, i.createElement(c.W, {
                            type: c.Wb.H2,
                            bold: !0
                        }, Object(o.d)("FAQ/Help", "PrimeFAQComponent"))), this.renderQuestion(Object(o.d)("Do I need a Twitch Prime membership to get Fortnite content?", "PrimeFAQComponent"), "membership"), this.renderAnswer(Object(o.d)("Yes.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("What exactly will I get in the Twitch Prime Pack #2?", "PrimeFAQComponent"), "loot"), this.renderAnswer(Object(o.d)("This pack includes 4 distinct items, all of which are exclusively available to Twitch Prime members:", "PrimeFAQComponent")), this.renderAnswers(Object(o.d)("Battle Royale Trailblazer Outfit: On the forefront of victory.", "PrimeFAQComponent"), Object(o.d)("Battle Royale True North Back Bling: Find your way.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Tenderizer Pickaxe: Leave a good first impression.", "PrimeFAQComponent"), Object(o.d)("Battle Royale Freestylin’ Emote: Tear up the dance floor.", "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("Note: All items are cosmetic only and provide no competitive advantage. All items for Twitch Prime Pack #2 are for Battle Royale only.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "content"), this.renderAnswer(Object(o.d)("If you already have an active Twitch Prime membership (either paid or free trial), log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I already linked my Twitch and Epic account when I claimed the first Twitch Prime Pack. Do I need to claim again to get the current Twitch Prime content?", "PrimeFAQComponent"), "linkedaccount"), this.renderAnswer(Object(o.d)("YES. You must claim each Twitch Prime Pack individually. If you already linked your Twitch and Epic accounts for the previous Twitch Prime loot in Fortnite, log in above to begin the claim process for this content.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How do I become a Twitch Prime member?", "PrimeFAQComponent"), "signup"), this.renderAnswerWithLink(Object(o.d)("Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at <x:link>http://www.twitchprime.com</x:link>.", {
                            "x:link": function(e) {
                                return i.createElement(c.U, {
                                    to: "http://www.twitchprime.com"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderAnswer(Object(o.d)("If you are not already an Amazon Prime member, you may start your free trial (if available) above. Follow all of the steps and the content that is currently available will be sent directly to your game account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("When will I get my Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "when"), this.renderAnswer(Object(o.d)("If you've followed all of the steps in the claim process for this offer, your content will be waiting for you in your locker the next time you log in to Fortnite!", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I change which Epic account my Fortnite content is delivered to?", "PrimeFAQComponent"), "changeaccount"), this.renderAnswerWithLink(Object(o.d)("If you claimed the first Fortnite Twitch Prime Pack and would like to use a different Epic account for this offer, you may unlink your previous Epic account from Twitch and link a new one to receive content on that account after completing the claim process above. You can manage your connected accounts at <x:link>https://www.epicgames.com/account/connected</x:link>.", {
                            "x:link": function(e) {
                                return i.createElement(c.U, {
                                    to: "https://www.epicgames.com/account/connected"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I received an error that my Twitch or Amazon account has already claimed this content. What do I do?", "PrimeFAQComponent"), "alreadyclaimed"), this.renderAnswer(Object(o.d)("This happens when a different Twitch account was linked to your Amazon account (or vice versa) and claimed the current Twitch Prime Pack. Please check that the same Twitch account is linked to the Amazon account that was originally used to claim this Twitch Prime Pack.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("I play Fortnite on my PS4/Xbox One/PC primarily, but also play on mobile. Will I be able to access the Twitch Prime content everywhere that I play?", "PrimeFAQComponent"), "mobile"), this.renderAnswer(Object(o.d)("As long as you use the same Epic account to play on each platform, you will be able to access your Twitch Prime content across PC/console and mobile. Content is not shared between Xbox One and PS4, however.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I link multiple Twitch Prime accounts to my Epic account and get additional content?", "PrimeFAQComponent"), "multiple"), this.renderAnswer(Object(o.d)("No. Each offer can only be applied once to a single Epic account.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("How long do I have to claim Twitch Prime Pack #2?", "PrimeFAQComponent"), "duration"), this.renderAnswer(Object(o.d)("You'll have until July 11, 2018 at 9 AM PST to claim the Twitch Prime Pack #2.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Can I still get previous Twitch Prime content for Fortnite?", "PrimeFAQComponent"), "pack1"), this.renderAnswer(Object(o.d)("You will only receive content that is currently available. However, if you have successfully claimed the first Twitch Prime pack but not completed the account linking flow prior to May 9, 2018 at 9 AM PST, you will receive that content after completing the current offer claim flow above.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Do I continue to receive content if my free trial expires? What happens to my content if I no longer have a Prime membership or my free trial expires?", "PrimeFAQComponent"), "freetrial"), this.renderAnswer(Object(o.d)("You need to have an active Twitch Prime membership to receive content that is currently available. Once you claim your Fortnite content, all content that is delivered to your game is yours to keep, subject to any Epic Games rules or policies that apply to the content. However, you will not receive future content without an active Twitch Prime membership.", "PrimeFAQComponent")), this.renderQuestion(Object(o.d)("Where can I get Fortnite?", "PrimeFAQComponent"), "fortnite"), this.renderAnswerWithLink(Object(o.d)("Fortnite: Battle Royale is free! Visit <x:link>https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale</x:link> to find out how to start playing on PC, Xbox One, PS4, and iOS.", {
                            "x:link": function(e) {
                                return i.createElement(c.U, {
                                    to: "https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale"
                                }, e)
                            }
                        }, "PrimeFAQComponent")), i.createElement(c.Ya, {
                            margin: {
                                y: 2
                            }
                        }, i.createElement(c.z, {
                            linkTo: "https://help.twitch.tv/customer/portal/articles/2572060-twitch-prime-guide#HelpContact",
                            fullWidth: !0
                        }, Object(o.d)("Need help? Contact Us", "PrimeFAQComponent"))))))))
                    }, t.prototype.renderQuestion = function(e, t) {
                        return i.createElement("div", {
                            id: t,
                            ref: t
                        }, i.createElement(c.Ya, {
                            margin: {
                                top: 2
                            }
                        }, i.createElement(c.W, {
                            type: c.Wb.H4,
                            bold: !0
                        }, e)))
                    }, t.prototype.renderAnswer = function(e) {
                        return i.createElement(c.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.W, null, e))
                    }, t.prototype.renderAnswers = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return i.createElement(c.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.fc, null, i.createElement("ul", null, e.map(function(e) {
                            return i.createElement("li", {
                                key: e
                            }, i.createElement(c.W, null, e))
                        }))))
                    }, t.prototype.renderAnswerWithLink = function(e) {
                        return i.createElement(c.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(c.W, null, e))
                    }, t.prototype.scrollToFaqQuestionId = function() {
                        var e = this.props.hash,
                            t = e && a.findDOMNode(this.refs[e]);
                        t && t.scrollIntoView()
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return s
            })
        },
        jmDq: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("GnwI"),
                c = n("Ue10"),
                s = (n("QkMI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                        return i.createElement(c.Ya, {
                            className: "prime-footer",
                            position: c.kb.Relative
                        }, i.createElement(c.Fb, {
                            position: c.kb.Absolute,
                            justifyContent: c.Xa.Center,
                            alignItems: c.f.Center,
                            className: "twitter-container"
                        }, i.createElement(c.tb, {
                            asset: c.ub.Twitter,
                            width: 40,
                            height: 40,
                            type: c.vb.Prime
                        })), i.createElement(c.Fb, {
                            display: c.X.Flex,
                            justifyContent: c.Xa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, i.createElement(c.Ya, {
                            className: "prime-footer__twitter-links",
                            display: c.X.Flex,
                            justifyContent: e ? c.Xa.Between : c.Xa.Center
                        }, i.createElement(c.U, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, i.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(a.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && i.createElement(c.U, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, i.createElement(c.W, {
                            bold: !0,
                            fontSize: c.Ca.Size5
                        }, this.props.partnerSocialText)))), i.createElement(c.Fb, {
                            display: c.X.Flex,
                            justifyContent: c.Xa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, i.createElement(c.Fb, {
                            padding: 2
                        }, i.createElement(c.U, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(a.d)("Terms", "PrimeSubsiteFooter"))), i.createElement(c.Fb, {
                            padding: 2
                        }, i.createElement(c.U, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(a.d)("Privacy Policy", "PrimeSubsiteFooter"))), i.createElement(c.Fb, {
                            padding: 2
                        }, i.createElement(c.U, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-guide-link"
                        }, Object(a.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                    }, t
                }(i.Component)),
                l = Object(o.b)("PrimeFooter", {
                    autoReportInteractive: !0
                })(s);
            n.d(t, "a", function() {
                return l
            })
        },
        "kF1+": function(e, t, n) {},
        "kRI/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "d", function() {
                return m
            }), n.d(t, "e", function() {
                return p
            });
            var r, i, a, o = n("mrSG"),
                c = n("/7QA"),
                s = n("DMoW"),
                l = n("yI6f"),
                u = n("3lt/");

            function E(e) {
                c.p.tracking.track(u.SpadeEventType.RecFeedbackClick, o.__assign({}, e))
            }

            function d(e) {
                E({
                    section: a.TwitchHome,
                    item_page: u.PageviewMedium.TwitchHome,
                    feedback_type: null,
                    feedbacked_item_id: null,
                    feedback_action: null,
                    feedback_reason: null,
                    click_step: e.clickStep,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType,
                    item_name: e.itemName
                })
            }

            function m(e) {
                E({
                    section: e.clickStep === r.SettingsChange ? null : a.TwitchHome,
                    item_page: e.clickStep === r.SettingsChange ? u.PageviewMedium.Settings : u.PageviewMedium.TwitchHome,
                    click_step: e.clickStep,
                    feedback_type: e.feedbackType,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_action: e.feedbackAction,
                    feedback_reason: e.feedbackReason,
                    clicked_item_id: e.clickedItemID,
                    item_tracking_id: e.itemTrackingID,
                    item_position: e.itemPosition,
                    row_position: e.rowPosition,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    model_tracking_id: e.modelTrackingID,
                    clicked_content_type: e.clickedContentType,
                    item_name: e.itemName
                })
            }

            function p(e) {
                E({
                    click_step: r.SettingsChange,
                    item_page: u.PageviewMedium.Settings,
                    feedback_action: i.Remove,
                    feedback_type: function(e) {
                        switch (e) {
                            case s.M.CATEGORY:
                                return l.b.Game;
                            case s.M.CHANNEL:
                                return l.b.Live;
                            case s.M.SHELF:
                                return l.b.Shelf;
                            case s.M.VOD:
                                return l.b.Vod;
                            case s.M.UNSPECIFIED:
                                return null;
                            default:
                                return e
                        }
                    }(e.feedbackType),
                    section: null,
                    clicked_item_id: null,
                    item_tracking_id: null,
                    item_position: null,
                    row_position: null,
                    reason_type: null,
                    reason_target: null,
                    reason_target_type: null,
                    row_name: null,
                    model_tracking_id: null,
                    clicked_content_type: null,
                    item_name: e.itemName,
                    feedbacked_item_id: e.feedbackedItemID,
                    feedback_reason: e.feedbackReason
                })
            }! function(e) {
                e.Ellipsis = "ellipsis", e.NotInterested = "not_interested", e.Close = "close", e.Submit = "submit", e.PostSubmit = "post_submit", e.SettingsChange = "settings_change"
            }(r || (r = {})),
            function(e) {
                e.Add = "add", e.Remove = "remove", e.Undo = "undo", e.Manage = "manage"
            }(i || (i = {})),
            function(e) {
                e.LeftNav = "leftnav", e.Carousel = "carousel", e.TwitchHome = "twitch_home"
            }(a || (a = {}))
        },
        kVMo: function(e, t, n) {},
        kduP: function(e, t, n) {
            "use strict";

            function r(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function a(e) {
                return "/events/" + encodeURIComponent(e)
            }

            function o(e) {
                return "/" + encodeURIComponent(e) + "/manager"
            }
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            })
        },
        m493: function(e, t, n) {},
        moLQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            });
            var r, i = n("mrSG"),
                a = n("/7QA"),
                o = n("Igt5"),
                c = n("X7a7");

            function s(e, t) {
                return t = t.toLowerCase(), e.directory.tagFilters[t] || []
            }

            function l(e) {
                return e.directory.languageTagFilters
            }! function(e) {
                e.Categories = "browse-categories", e.LiveChannels = "browse-live-channels"
            }(r || (r = {})), a.p.store.registerReducer("directory", function(e, t) {
                switch (void 0 === e && (e = {
                    languageTagFilters: Object(c.a)(),
                    tagFilters: {}
                }), t.type) {
                    case o.a:
                        return i.__assign({}, e, {
                            languageTagFilters: t.languageTagFilters
                        });
                    case o.b:
                        var n = i.__assign({}, e.tagFilters),
                            r = t.categoryName.toLowerCase(),
                            a = n[r];
                        return (void 0 === a || a.every(function(e) {
                            return e.id !== t.addedTag.id
                        })) && (n[r] = (n[r] || []).concat([t.addedTag])), i.__assign({}, e, {
                            tagFilters: n
                        });
                    case o.c:
                        var s = t.categoryName.toLowerCase();
                        return e.tagFilters[s] = t.tagFilters.slice(), i.__assign({}, e);
                    case o.d:
                        var l = t.categoryName.toLowerCase();
                        if (void 0 === e.tagFilters[l]) return i.__assign({}, e);
                        var u = e.tagFilters[l].filter(function(e) {
                            return e.id !== t.removedTag.id
                        });
                        return e.tagFilters[l] = u, i.__assign({}, e);
                    default:
                        return e
                }
            })
        },
        nNY8: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            });
            n("/7QA");
            var r = "twitch_prime_fortnite_offer_id",
                i = "c0b1816d-300b-d234-828e-59e76119bffe"
        },
        oB8h: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Live = "live", e.WatchParty = "watch_party", e.Premiere = "premiere", e.Rerun = "rerun"
                }(r || (r = {}))
        },
        oJov: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("q1tI"),
                a = n("/7QA"),
                o = n("Ue10"),
                c = (n("1mcJ"), function(e) {
                    return i.createElement(o.Ya, r.__assign({
                        className: "drops-badge",
                        position: o.kb.Absolute,
                        attachTop: !0,
                        attachRight: !0
                    }, Object(o.kc)(e)), i.createElement(o.Zb, {
                        direction: o.bc.Top,
                        align: o.ac.Right,
                        label: Object(a.d)("Offers in-game Drops", "DropsBadge")
                    }, i.createElement(o.Fb, {
                        className: "drops-badge__drops-icon",
                        position: o.kb.Relative,
                        padding: {
                            top: .5,
                            right: .5,
                            bottom: 3,
                            left: 3
                        },
                        overflow: o.db.Hidden,
                        color: o.O.Overlay,
                        zIndex: o.jc.Default
                    }, i.createElement(o.U, {
                        type: o.V.Inherit,
                        hoverColorInherit: !0,
                        to: "https://help.twitch.tv/customer/en/portal/articles/2754380-how-to-earn-drops"
                    }, i.createElement(o.tb, {
                        asset: o.ub.Drops
                    })))))
                }),
                s = n("0LAi"),
                l = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);

            function u(e) {
                for (var t = {}, n = 0, r = Object.keys(e); n < r.length; n++) {
                    var i = r[n];
                    l.has(i) && (t[i] = e[i])
                }
                return t
            }
            var E = function(e) {
                var t;
                return e.placeholder ? i.createElement(i.Fragment, null, i.createElement(o.Ya, {
                    margin: {
                        bottom: .5
                    }
                }, i.createElement(o.o, {
                    ratio: o.p.Aspect3x4
                }, i.createElement(o.jb, null))), i.createElement(o.W, null, i.createElement(o.jb, {
                    width: 150
                })), i.createElement(o.W, {
                    fontSize: o.Ca.Size7
                }, i.createElement(o.jb, {
                    width: 100
                }))) : (t = i.createElement(i.Fragment, null, i.createElement(o.Ya, {
                    className: "tw-box-art-card__image " + (e.unavailable && !e.disabled ? "tw-box-art-card__image--unavailable" : ""),
                    "data-test-selector": "tw-card-image",
                    "data-a-target": "tw-card-image"
                }, i.createElement(o.I, r.__assign({
                    aspect: o.p.BoxArt,
                    borderRadius: o.x.Medium
                }, u(e)))), i.createElement(o.H, null, i.createElement(o.Ya, {
                    display: o.X.Flex
                }, i.createElement(o.Ya, {
                    "data-test-selector": "tw-card-title",
                    "data-a-target": "tw-card-title",
                    flexGrow: 1,
                    flexShrink: 1,
                    margin: {
                        top: .5
                    },
                    ellipsis: !0
                }, i.createElement(o.W, {
                    className: "tw-box-art-card__title",
                    type: o.Wb.H3,
                    fontSize: o.Ca.Size5,
                    lineHeight: o.Za.Body,
                    ellipsis: !0
                }, e.title)), e.contextualCardActionProps && i.createElement(o.Ya, {
                    margin: {
                        top: .5
                    },
                    flexGrow: 0,
                    flexShrink: 0
                }, i.createElement(e.contextualCardActionProps.component, r.__assign({}, e.contextualCardActionProps.props)))), i.createElement(o.W, {
                    color: o.O.Alt2,
                    ellipsis: !0
                }, e.info))), (e.linkTo || e.onClick || e.disabled) && (t = i.createElement(o.T, {
                    className: "tw-box-art-card__link " + (e.disabled ? "tw-box-art-card__link--disabled" : ""),
                    "data-a-target": "tw-box-art-card-link",
                    disabled: e.disabled,
                    download: e.download,
                    linkTo: e.linkTo,
                    ariaLabel: e.title,
                    blurAfterClick: e.blurAfterClick,
                    onClick: e.onClick,
                    renderLink: e.renderLink,
                    targetBlank: e.targetBlank,
                    tabIndex: e.tabIndex
                }, t)), i.createElement("div", r.__assign({
                    className: "tw-box-art-card"
                }, Object(o.kc)(e)), i.createElement(o.G, {
                    key: e.title
                }, t), e.tagListProps && 0 !== e.tagListProps.tags.length && i.createElement(o.Ya, {
                    margin: {
                        top: .5
                    }
                }, i.createElement(s.a, r.__assign({}, e.tagListProps, {
                    tagNumberLimit: 3
                }))), !0 === e.showDropsBadge && i.createElement(c, null)))
            };
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return E
            })
        },
        uzin: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                c = n("GnwI"),
                s = n("Ue10"),
                l = (n("E8KT"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOfferImage = function() {
                            return a.createElement(s.Ya, {
                                textAlign: s.Sb.Center,
                                breakpointMedium: {
                                    textAlign: s.Sb.Right
                                },
                                className: "twitch-prime-fortnite__offer-image twitch-prime-fortnite__offer-image--desktop"
                            }, a.createElement(s.S, {
                                alt: Object(o.d)("Offer items", "TwitchPrimeBrandedHeader"),
                                src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/LandingPage_OfferComp_934x730.png"
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = i({
                                "twitch-prime-fortnite-header": !0,
                                "twitch-prime-fortnite-header--centered": this.props.alwaysCentered
                            }),
                            t = i({
                                "twitch-prime-fortnite__header__logo": !0,
                                "twitch-prime-fortnite__header__logo--centered": this.props.alwaysCentered
                            });
                        return a.createElement(s.Ya, {
                            className: "twitch-prime-fortnite__header__container",
                            padding: {
                                x: 1,
                                top: 1
                            }
                        }, a.createElement(s.Ya, {
                            className: e
                        }, a.createElement(s.Ya, {
                            className: "twitch-prime-fortnite__header",
                            display: s.X.Flex,
                            alignItems: s.f.End,
                            justifyContent: s.Xa.Center,
                            flexWrap: s.Ba.Wrap,
                            textAlign: s.Sb.Left,
                            "data-test-selector": "twitch-prime-fortnite-header",
                            margin: {
                                y: 0,
                                x: "auto"
                            },
                            padding: {
                                x: 1
                            }
                        }, a.createElement(s.Ya, {
                            textAlign: s.Sb.Center,
                            breakpointMedium: {
                                textAlign: s.Sb.Left
                            },
                            breakpointLarge: {
                                margin: {
                                    bottom: 5
                                },
                                padding: {
                                    left: 5
                                }
                            },
                            alignSelf: s.g.Center,
                            className: "twitch-prime-fortnite__header__section"
                        }, a.createElement(s.Ya, {
                            className: t,
                            margin: {
                                y: 2
                            }
                        }, a.createElement("img", {
                            src: "https://m.media-amazon.com/images/G/01/sm/epic/fortnite/logo.png"
                        })), this.props.children), this.props.renderOfferImage && this.renderOfferImage())))
                    }, t
                }(a.Component)),
                u = Object(c.b)("TwitchPrimeBrandedHeader", {
                    autoReportInteractive: !0
                })(l);
            n.d(t, !1, function() {
                return "twitch-prime-fortnite-header"
            }), n.d(t, !1, function() {
                return l
            }), n.d(t, "a", function() {
                return u
            })
        },
        vDRX: function(e, t, n) {},
        x75U: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var r = n("mrSG"),
                i = n("17x9"),
                a = n("q1tI"),
                o = n("2xye"),
                c = n("yI6f"),
                s = n("kRI/"),
                l = {
                    cardIDtoItemTrackingIDMap: i.object,
                    cardIDtoRequestIDMap: i.object,
                    trackTitleClick: i.func,
                    trackTitleImpression: i.func,
                    trackImpression: i.func,
                    trackClick: i.func,
                    trackRecFeedbackPreModalClick: i.func,
                    trackRecFeedbackClickStep: i.func,
                    trackRecFeedbackClickStepPostSubmit: i.func
                };

            function u() {
                return function(e) {
                    return function(t) {
                        function n(e) {
                            var n = t.call(this, e) || this;
                            return n.feedbackDataMap = {}, n.getChildContext = function() {
                                return {
                                    trackTitleClick: n.trackTitleClick,
                                    trackTitleImpression: n.trackTitleImpression,
                                    trackRecFeedbackPreModalClick: n.trackRecFeedbackPreModalClick,
                                    trackRecFeedbackClickStep: n.trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: n.trackRecFeedbackClickStepPostSubmit,
                                    trackImpression: n.trackImpression,
                                    trackClick: n.trackClick,
                                    cardIDtoItemTrackingIDMap: n.state.cardIDtoItemTrackingIDMap,
                                    cardIDtoRequestIDMap: n.state.cardIDtoRequestIDMap
                                }
                            }, n.mapShelfCardsToRequestIDs = function(e, t, n) {
                                return void 0 === n && (n = {}), e.reduce(function(e, n) {
                                    return n.node && !e[n.node.id] && (e[n.node.id] = t), e
                                }, n)
                            }, n.trackTitleImpression = function(e) {
                                var t = Object(c.g)(e.title),
                                    r = t.reasonType,
                                    i = t.reasonTarget,
                                    a = t.rowName,
                                    s = Object(c.f)(),
                                    l = {
                                        component: c.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: s,
                                        itemPosition: null,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: null,
                                        requestID: n.props.requestID,
                                        rowName: a,
                                        rowPosition: n.props.position,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(c.i)(l, o.PageviewContent.HeaderGameName), n.setState({
                                    headerImpressionID: s
                                })
                            }, n.trackTitleClick = function() {
                                var e = n.props.shelf,
                                    t = Object(c.g)(e.title),
                                    r = t.reasonType,
                                    i = t.reasonTarget,
                                    a = t.reasonTargetType,
                                    s = t.rowName,
                                    l = {
                                        component: c.a.Header,
                                        contentEdge: null,
                                        itemTrackingID: n.state.headerImpressionID,
                                        requestID: n.state.headerRequestID,
                                        itemPosition: null,
                                        rowPosition: n.props.position,
                                        reasonType: r,
                                        reasonTarget: i,
                                        reasonTargetType: a,
                                        rowName: s,
                                        tagID: null,
                                        filtered: !1,
                                        tagSet: "[]",
                                        tagStreamerSet: "[]"
                                    };
                                Object(c.h)(l, o.PageviewContent.HeaderGameName)
                            }, n.trackImpression = function(e, t, r, i) {
                                if (t.node && !n.state.cardIDtoItemTrackingIDMap[t.node.id]) {
                                    var a = Object(c.f)(),
                                        o = Object(c.g)(e.title),
                                        s = o.reasonType,
                                        l = o.reasonTarget,
                                        u = o.reasonTargetType,
                                        E = o.rowName,
                                        d = {
                                            component: c.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: a,
                                            itemPosition: r,
                                            reasonType: s,
                                            reasonTarget: l,
                                            reasonTargetType: u,
                                            requestID: n.state.cardIDtoRequestIDMap[t.node.id],
                                            rowName: E,
                                            rowPosition: n.props.position,
                                            tagID: null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(i),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(c.i)(d), n.setState(function(e) {
                                        var n = e.cardIDtoItemTrackingIDMap;
                                        return n[t.node.id] = a, {
                                            cardIDtoItemTrackingIDMap: n
                                        }
                                    })
                                }
                            }, n.trackClick = function(e, t, r, i, a, o) {
                                if (t.node) {
                                    var s = n.state,
                                        l = s.cardIDtoRequestIDMap,
                                        u = s.cardIDtoItemTrackingIDMap,
                                        E = Object(c.g)(e.title),
                                        d = E.reasonType,
                                        m = E.reasonTarget,
                                        p = E.reasonTargetType,
                                        T = E.rowName,
                                        _ = {
                                            component: c.a.Card,
                                            contentEdge: t,
                                            itemTrackingID: u[t.node.id] || null,
                                            requestID: l[t.node.id],
                                            itemPosition: r,
                                            rowPosition: n.props.position,
                                            reasonType: d,
                                            reasonTarget: m,
                                            reasonTargetType: p,
                                            rowName: T,
                                            tagID: void 0 !== o ? o : null,
                                            filtered: !1,
                                            tagSet: JSON.stringify(a),
                                            tagStreamerSet: "[]"
                                        };
                                    Object(c.h)(_, i)
                                }
                            }, n.trackRecFeedbackPreModalClick = function(e, t, i, a, o) {
                                var l, u = n.state.cardIDtoItemTrackingIDMap,
                                    E = Object(c.g)(t.title),
                                    d = E.reasonType,
                                    m = E.reasonTarget,
                                    p = E.reasonTargetType,
                                    T = E.rowName,
                                    _ = Object(c.e)(i),
                                    N = _.itemID,
                                    I = _.contentType,
                                    A = N || t.id,
                                    R = {
                                        clickStep: e,
                                        itemTrackingID: i && i.node ? u[i.node.id] : null,
                                        itemPosition: a,
                                        rowPosition: n.props.position,
                                        reasonType: d,
                                        reasonTarget: m,
                                        reasonTargetType: p,
                                        rowName: T,
                                        itemName: o,
                                        modelTrackingID: i ? i.trackingID : null,
                                        clickedContentType: I || c.b.Shelf,
                                        clickedItemID: N || t.id
                                    };
                                n.feedbackDataMap = r.__assign({}, n.feedbackDataMap, ((l = {})[A] = R, l)), Object(s.c)(R)
                            }, n.trackRecFeedbackClickStep = function(e, t) {
                                var i, a = r.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: t.clickStep,
                                    feedbackAction: t.feedbackAction,
                                    feedbackType: t.feedbackType,
                                    feedbackedItemID: t.feedbackedItemID,
                                    feedbackReason: t.feedbackReason
                                });
                                n.feedbackDataMap = r.__assign({}, n.feedbackDataMap, ((i = {})[e] = a, i)), Object(s.d)(a)
                            }, n.trackRecFeedbackClickStepPostSubmit = function(e, t) {
                                Object(s.d)(r.__assign({}, n.feedbackDataMap[e], {
                                    clickStep: s.a.PostSubmit,
                                    feedbackAction: t
                                }))
                            }, n.state = {
                                cardIDtoItemTrackingIDMap: {},
                                cardIDtoRequestIDMap: n.mapShelfCardsToRequestIDs(e.shelf.content.edges || [], e.requestID, {}),
                                headerImpressionID: null,
                                headerRequestID: e.requestID
                            }, n
                        }
                        return r.__extends(n, t), n.prototype.componentWillReceiveProps = function(e) {
                            var t = this,
                                n = e.shelf,
                                r = e.requestID;
                            n.content.edges !== this.props.shelf.content.edges && this.setState(function(e) {
                                return {
                                    cardIDtoRequestIDMap: t.mapShelfCardsToRequestIDs(n.content.edges || [], r, e.cardIDtoRequestIDMap)
                                }
                            })
                        }, n.prototype.render = function() {
                            var t = Object(c.g)(this.props.shelf.title).rowName,
                                n = {
                                    trackTitleClick: this.getChildContext().trackTitleClick,
                                    trackTitleImpression: this.getChildContext().trackTitleImpression,
                                    trackRecFeedbackPreModalClick: this.getChildContext().trackRecFeedbackPreModalClick,
                                    trackImpression: this.getChildContext().trackImpression,
                                    trackClick: this.getChildContext().trackClick,
                                    trackRecFeedbackClickStep: this.getChildContext().trackRecFeedbackClickStep,
                                    trackRecFeedbackClickStepPostSubmit: this.getChildContext().trackRecFeedbackClickStepPostSubmit,
                                    shelfTrackingProps: {
                                        item_tracking_id: this.state.headerImpressionID,
                                        item_position: null,
                                        row_name: t,
                                        row_position: this.props.position
                                    }
                                };
                            return a.createElement(e, r.__assign({}, this.props, n))
                        }, n.childContextTypes = l, n
                    }(a.Component)
                }
            }
        },
        yI6f: function(e, t, n) {
            "use strict";
            var r, i, a, o, c, s, l = n("/7QA"),
                u = n("f00E"),
                E = n("2xye"),
                d = n("3sMy"),
                m = function() {
                    return Object(u.b)().substring(0, 16)
                };
            ! function(e) {
                e.TwitchHome = "twitch_home", e.BrowseLiveChannels = "browse_livechannels", e.BrowseCategories = "browse_categories", e.BrowseInCategoryChannels = "browse_incategory_channels", e.LeftNav = "leftnav"
            }(i || (i = {})),
            function(e) {
                e.Live = "live", e.Clip = "clip", e.Vod = "vod", e.Game = "game", e.Shelf = "shelf"
            }(a || (a = {})),
            function(e) {
                e.Card = "card", e.Header = "header"
            }(o || (o = {})),
            function(e) {
                e.Followed = "followed", e.Watched = "watched", e.Popularity = "popularity", e.Personalized = "personalized"
            }(c || (c = {})),
            function(e) {
                e.Live = "recs_live", e.Vod = "recs_vod", e.Clip = "recs_clip"
            }(s || (s = {}));
            var p = ((r = {})[d.a.TopLiveChannels] = function(e) {
                return {
                    reasonType: c.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, r[d.a.TopGames] = function(e) {
                return {
                    reasonType: c.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, r[d.a.TopChannelsPlayingGame] = function(e, t) {
                return {
                    reasonType: c.Popularity,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, r[d.a.TopLiveChannelsYouMayLike] = function(e) {
                return {
                    reasonType: c.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Live,
                    rowName: e
                }
            }, r[d.a.TopGamesForYou] = function(e) {
                return {
                    reasonType: c.Personalized,
                    reasonTarget: null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, r[d.a.RecommendedBecauseYouWatchX] = function(e, t) {
                return {
                    reasonType: c.Watched,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: a.Game,
                    rowName: e
                }
            }, r[d.a.RecommendedBecauseYouFollowX] = function(e, t) {
                return {
                    reasonType: c.Followed,
                    reasonTarget: t.context && t.context.id || null,
                    reasonTargetType: null,
                    rowName: e
                }
            }, r[d.a.GreatNewClipsYouMayHaveMissed] = function(e) {
                return {
                    reasonType: c.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Clip,
                    rowName: e
                }
            }, r[d.a.TopNewVideosYouMayHaveMissed] = function(e) {
                return {
                    reasonType: c.Popularity,
                    reasonTarget: null,
                    reasonTargetType: a.Vod,
                    rowName: e
                }
            }, r);

            function T(e) {
                var t = e.key;
                return p[t] ? p[t](t, e) : {
                    reasonType: null,
                    reasonTarget: "",
                    reasonTargetType: null,
                    rowName: t
                }
            }

            function _(e, t) {
                var n = N(e.contentEdge),
                    r = n.itemID,
                    a = n.channelID,
                    o = n.category,
                    c = n.contentType;
                return {
                    component: e.component,
                    request_id: e.requestID,
                    section: i.TwitchHome,
                    model_tracking_id: e.contentEdge && e.contentEdge.trackingID,
                    item_tracking_id: e.itemTrackingID,
                    item_id: r,
                    channel_id: null === a ? null : Number(a),
                    item_position: e.itemPosition,
                    item_subsection: t || null,
                    item_page: E.PageviewMedium.TwitchHome,
                    row_position: e.rowPosition,
                    content_type: c,
                    reason_type: e.reasonType,
                    reason_target: e.reasonTarget,
                    reason_target_type: e.reasonTargetType,
                    row_name: e.rowName,
                    tag_set: e.tagSet,
                    tag_streamer_set: e.tagStreamerSet,
                    filtered: e.filtered,
                    category: o,
                    tag_id: e.tagID
                }
            }

            function N(e) {
                var t, n = null,
                    r = null,
                    i = null,
                    o = e && e.node && e.node.id || "";
                if (e) switch (e.node && e.node.__typename) {
                    case "Stream":
                        n = (t = e.node).broadcaster && t.broadcaster.id, r = a.Live, o = String(t.broadcaster && t.broadcaster.id), i = t.game ? t.game.id : null;
                        break;
                    case "Clip":
                        n = (t = e.node).broadcaster && t.broadcaster.id, r = a.Clip, i = t.game ? t.game.id : null;
                        break;
                    case "Video":
                        n = (t = e.node).owner && t.owner.id, r = a.Vod, i = t.game ? t.game.id : null;
                        break;
                    case "Game":
                        t = e.node, n = null, r = a.Game, i = t.id
                }
                return {
                    itemID: o,
                    channelID: n,
                    category: i,
                    contentType: r
                }
            }

            function I(e, t) {
                var n = _(e, t);
                l.o.track(E.SpadeEventType.ItemClick, n)
            }

            function A(e, t) {
                var n = _(e, t);
                l.o.track(E.SpadeEventType.ItemDisplay, n)
            }

            function R(e) {
                var t = {
                    endpoint: e.endpoint,
                    request_id: e.requestID,
                    section: e.section
                };
                l.o.track(E.SpadeEventType.RecRequestClient, t)
            }
            var O = n("x75U"),
                f = n("A65o");
            n.d(t, "f", function() {
                return m
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return c
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "g", function() {
                return T
            }), n.d(t, "e", function() {
                return N
            }), n.d(t, "h", function() {
                return I
            }), n.d(t, "i", function() {
                return A
            }), n.d(t, "j", function() {
                return R
            }), n.d(t, !1, function() {
                return O.a
            }), n.d(t, "k", function() {
                return O.b
            }), n.d(t, !1, function() {
                return f.a
            })
        },
        zrz1: function(e, t, n) {}
    }
]);