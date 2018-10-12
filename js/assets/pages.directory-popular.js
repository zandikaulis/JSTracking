(window.webpackJsonp = window.webpackJsonp || []).push([
    [128], {
        "0INk": function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return l
            }), a.d(t, "c", function() {
                return d
            }), a.d(t, "a", function() {
                return c
            });
            var n = a("mrSG"),
                r = a("/7QA"),
                i = a("2xye"),
                o = a("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || i.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: i.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: i.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: i.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        var t, a, l, d, c, u = this;
                        return n.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return n.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return n.__generator(this, function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, r.o.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = a.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return a = m.sent(), l = a.filter(function(e) {
                                        return !!e
                                    }), d = l.map(function() {
                                        return i.TwitchDataType.Game
                                    }), c = l.map(function() {
                                        return null
                                    }), r.n.trackItemSectionLoad({
                                        carousel_content: i.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: d,
                                        rendered_items_viewcounts: c,
                                        location: s()
                                    }), [3, 3];
                                case 2:
                                    return m.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "5NSO": function(e, t, a) {},
        "5myU": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = 10;

            function r(e, t, a) {
                if (void 0 === a && (a = 1), !t || !e) return -1;
                var r = window.getComputedStyle(document.documentElement).fontSize || n.toString(),
                    i = parseFloat(r) / n;
                return Math.floor(e / (t * i)) * a
            }
        },
        "5zf8": function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            }), a.d(t, "b", function() {
                return l
            });
            var n, r, i = a("/7QA");

            function o(e, t) {
                switch (e) {
                    case n.Second:
                        return Object(i.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case n.Minute:
                        return Object(i.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case n.Hour:
                        return Object(i.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case n.Day:
                        return Object(i.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case n.Week:
                        return Object(i.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case n.Month:
                        return Object(i.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case n.Second:
                        return Object(i.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case n.Minute:
                        return Object(i.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case n.Hour:
                        return Object(i.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case n.Day:
                        return Object(i.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case n.Week:
                        return Object(i.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case n.Month:
                        return Object(i.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var a;
                switch (void 0 === t && (t = r.Humanized), t === r.ClockAuto && (t = e >= 3600 ? r.ClockHMS : r.ClockMS), t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        a = n.Hour;
                        break;
                    case r.ClockMS:
                        a = n.Minute
                }
                var l = 2;
                t === r.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = n.Month);
                        var a = {};
                        return a.seconds = e, e < 60 || t === n.Second ? a : (a.minutes = Math.floor(e / 60), a.seconds = e % 60, a.minutes < 60 || t === n.Minute ? a : (a.hours = Math.floor(a.minutes / 60), a.minutes = a.minutes % 60, a.hours < 24 || t === n.Hour ? a : (a.days = Math.floor(a.hours / 24), a.hours = a.hours % 24, a.days < 7 || t === n.Day ? a : a.days <= 26 || t === n.Week ? (a.weeks = Math.floor(a.days / 7), a.days = a.days % 7, a) : (a.months = Math.round((a.days + 3) / 30), a))))
                    }(e, a),
                    u = Object.keys(c);
                if (u.forEach(function(e, a) {
                        t !== r.Humanized && t !== r.HumanizedShort || c[e] || delete c[e], a < u.length - l && delete c[e]
                    }), t === r.Humanized) return function(e) {
                    return e.months ? o(n.Month, e.months) : e.weeks && e.days ? o(n.Week, e.weeks) + " " + o(n.Day, e.days) : e.weeks ? o(n.Week, e.weeks) : e.days && e.hours ? o(n.Day, e.days) + " " + o(n.Hour, e.hours) : e.days ? o(n.Day, e.days) : e.hours && e.minutes ? o(n.Hour, e.hours) + " " + o(n.Minute, e.minutes) : e.hours ? o(n.Hour, e.hours) : e.minutes && e.seconds ? o(n.Minute, e.minutes) + " " + o(n.Second, e.seconds) : e.minutes ? o(n.Minute, e.minutes) : o(n.Second, e.seconds || 0)
                }(c);
                if (t === r.HumanizedShort) return function(e) {
                    return e.months ? s(n.Month, e.months) : e.weeks && e.days ? "" + s(n.Week, e.weeks) + s(n.Day, e.days) : e.weeks ? s(n.Week, e.weeks) : e.days && e.hours ? "" + s(n.Day, e.days) + s(n.Hour, e.hours) : e.days ? s(n.Day, e.days) : e.hours && e.minutes ? "" + s(n.Hour, e.hours) + s(n.Minute, e.minutes) : e.hours ? s(n.Hour, e.hours) : e.minutes && e.seconds ? "" + s(n.Minute, e.minutes) + s(n.Second, e.seconds) : e.minutes ? s(n.Minute, e.minutes) : s(n.Second, e.seconds || 0)
                }(c);
                var m = ":",
                    p = !1;
                switch (i.o.intl.getLanguageCode()) {
                    case "cy":
                    case "da":
                    case "fi":
                    case "id":
                    case "nb":
                    case "si":
                        m = ".";
                        break;
                    case "af":
                    case "fr":
                    case "lt":
                        p = !0
                }
                var g = c.seconds || 0,
                    h = c.minutes || 0,
                    v = c.hours || 0;
                switch (t) {
                    case r.ClockHM:
                    case r.ClockHMS:
                        var f = (p ? d(v, 2) : v) + m + d(h, 2);
                        return t === r.ClockHMS && (f += m + d(g, 2)), f;
                    case r.ClockMS:
                        return (p ? d(h, 2) : h) + m + d(g, 2)
                }
            }

            function d(e, t) {
                var a = e.toString();
                return a.length < t ? "0".repeat(t - a.length) + a : a
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(n || (n = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(r || (r = {}))
        },
        "6H22": function(e, t, a) {
            e.exports = a.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "80G/": function(e, t, a) {},
        "8rUg": function(e, t, a) {
            e.exports = a.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        B3R5: function(e, t, a) {},
        CCqK: function(e, t, a) {},
        Fj9y: function(e, t, a) {},
        GFmA: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("/7QA"),
                o = a("/MKj"),
                s = a("TSYQ"),
                l = a("YhoA"),
                d = a("Ue10"),
                c = (a("lRiI"), function(e) {
                    var t, a = e.spriteDetails,
                        n = e.game.toLowerCase(),
                        i = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = n === l.a.CounterStrike, t)),
                        o = n === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(d.Va, {
                        className: i
                    }, r.createElement("div", {
                        style: {
                            backgroundImage: "url(" + a.spriteURL + ")",
                            backgroundPositionX: a.spriteOffsetX ? -1 * a.spriteOffsetX : 0,
                            backgroundPositionY: a.spriteOffsetY ? -1 * a.spriteOffsetY : 0,
                            width: a.imageWidth ? a.imageWidth + "px" : "2rem",
                            height: a.imageWidth ? a.imageHeight + "px" : "2rem",
                            transform: "scale(" + (a.imageWidth > 0 ? o / a.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                u = a("On2s"),
                m = (a("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Object(u.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = a.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = a.sent(), i.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(d.Va, {
                            className: "preview-card-appendage",
                            display: d.W.Flex
                        }, r.createElement(d.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: d.W.Flex,
                            alignItems: d.f.Center,
                            justifyContent: d.Ua.End
                        }, r.createElement("div", null, r.createElement(c, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), r.createElement(d.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: d.W.Flex,
                            overflow: d.Ya.Hidden
                        }, r.createElement(d.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: d.Ya.Hidden
                        }, r.createElement(d.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), r.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(d.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(r.Component));
            var p = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(m),
                g = a("5zf8"),
                h = (a("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return r.createElement(d.Va, {
                            className: "preview-card-game-balloon-row",
                            display: d.W.Flex,
                            flexWrap: d.Z.NoWrap
                        }, r.createElement(d.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Row,
                            padding: .5
                        }, r.createElement(d.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: d.x.Small,
                            overflow: d.Ya.Hidden,
                            position: d.db.Relative
                        }, r.createElement(d.o, {
                            align: d.d.Center,
                            ratio: d.p.BoxArt
                        }, r.createElement(d.S, n.__assign({}, e))), r.createElement(d.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: d.f.Center,
                            background: d.r.Overlay,
                            color: d.O.Overlay,
                            display: d.W.Flex,
                            justifyContent: d.Ua.Center,
                            position: d.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, r.createElement(d.mb, {
                            asset: d.nb.Play,
                            type: d.ob.Inherit
                        }))), r.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(d.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(d.V, null, this.props.gameChange.label)), r.createElement(d.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(d.V, null, Object(g.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                v = a("0INk"),
                f = a("8/mp"),
                b = a("eJ65"),
                k = (a("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(v.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(d.Va, {
                            className: "preview-card-game-balloon",
                            display: d.W.InlineBlock,
                            position: d.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(b.a, {
                            key: "game-balloon",
                            display: d.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(d.z, {
                            type: d.F.Hollow,
                            icon: d.nb.ViewerList
                        }, r.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Row
                        }, r.createElement(d.V, null, Object(i.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(d.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(d.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(d.u, {
                            direction: d.v.TopLeft,
                            size: d.w.Medium
                        }, r.createElement(d.Va, {
                            overflow: d.Ya.Hidden,
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexWrap: d.Z.NoWrap
                        }, r.createElement(d.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(d.V, {
                            color: d.O.Alt2
                        }, Object(i.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(d.Va, {
                            className: "preview-card-game-balloon__content",
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: d.Z.NoWrap
                        }, r.createElement(f.b, null, r.createElement(d.Va, {
                            display: d.W.Flex,
                            flexDirection: d.Y.Column,
                            flexWrap: d.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, a) {
                            return r.createElement(h, {
                                index: a,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                y = a("kduP"),
                C = a("2xye"),
                w = function(e) {
                    return r.createElement(d.Va, null, r.createElement(d.V, {
                        color: d.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, a, n) {
                        return r.createElement(d.Na, {
                            key: a
                        }, r.createElement(d.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: C.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: d.U.Inherit
                        }, t.label, S(a, n.length - 1) ? null : ", "))
                    })))
                },
                S = function(e, t) {
                    return e === t
                },
                x = a("N0BP"),
                T = (a("XA5B"), function(e) {
                    var t = r.createElement(d.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: d.x.Small,
                        overflow: d.Ya.Hidden
                    }, r.createElement(d.o, {
                        ratio: e.aspect || d.p.BoxArt,
                        align: d.d.Center
                    }, r.createElement(d.S, n.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(d.T, n.__assign({}, Object(x.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            T.displayName = "PreviewCardIconicImage";
            a("cRsL");
            var N, O = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(d.Va, {
                        display: d.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: d.Ua.Between,
                        alignItems: d.f.Center,
                        className: t
                    }, r.createElement(d.Va, {
                        display: d.W.InlineFlex
                    }, r.createElement(d.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: d.O.Overlay,
                        bold: !0,
                        transform: d.Mb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(d.Va, {
                        display: d.W.InlineFlex
                    }, r.createElement(d.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: d.O.Overlay
                    }, e.subTitle)))
                },
                E = (a("m493"), function(e) {
                    var t = .5,
                        a = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (a = r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(d.gb, {
                        borderRadius: d.x.None,
                        size: d.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var i = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(O, n.__assign({}, e.topBar))), i = 3), r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, a, r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: i
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(d.Va, {
                        position: d.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                L = (a("kF1+"), function(e) {
                    var t = e.icon && r.createElement(d.Va, {
                        display: d.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(d.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(d.xb, {
                        alignItems: d.f.Center,
                        background: d.r.Overlay,
                        borderRadius: d.x.Small,
                        className: "preview-card-stat",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        fontSize: d.Aa.Size6,
                        justifyContent: d.Ua.Center
                    }, t, r.createElement(d.V, null, e.value)) : r.createElement(d.xb, {
                        className: "preview-card-stat",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(d.V, null, e.value))
                }),
                I = a("GnwI"),
                P = (a("B3R5"), function(e) {
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
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), r.createElement("div", n.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(d.xb, {
                            background: d.r.Alt2,
                            overflow: d.Ya.Hidden
                        }, r.createElement(d.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            a = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: a
                        }, r.createElement(d.S, n.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: a
                        }, r.createElement(d.S, n.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                D = Object(I.c)("PreviewCardThumbnail")(P),
                _ = (a("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(d.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(d.V, {
                            color: d.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(d.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: d.U.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(d.T, n.__assign({}, Object(x.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: d.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(d.V, {
                        type: d.Nb.H3,
                        fontSize: d.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(d.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                j = a("H1ft"),
                V = a("ZbA5"),
                A = a("QVaV"),
                F = a("hyVY"),
                R = a("MXoD"),
                H = a("0LAi"),
                M = a("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(N || (N = {}));
            var G, B, W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(i.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        a = t ? Object(i.d)("unlocked", "VideoPreviewCardRestriction") : Object(i.d)("locked", "VideoPreviewCardRestriction"),
                        n = t ? d.nb.Unlock : d.nb.Lock;
                    return r.createElement(d.Va, null, !t && r.createElement(d.xb, {
                        background: d.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: d.O.Overlay,
                        display: d.W.Flex,
                        position: d.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: d.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: d.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: d.f.Center,
                        alignContent: d.e.Center,
                        flexDirection: d.Y.Column,
                        flexWrap: d.Z.Wrap,
                        justifyContent: d.Ua.Center,
                        "data-test-selector": N.LockSelector
                    }, r.createElement(d.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(d.V, {
                        color: d.O.Overlay,
                        fontSize: d.Aa.Size5,
                        "data-test-selector": N.UpsellSelector
                    }, Object(i.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(d.Va, null, r.createElement(d.z, {
                        type: d.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(d.xb, {
                        display: d.W.InlineFlex,
                        position: d.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: d.ac.Default,
                        fontSize: d.Aa.Size6,
                        background: d.r.Overlay,
                        borderRadius: d.x.Medium,
                        color: d.O.Overlay
                    }, r.createElement(d.Qb, {
                        direction: this.props.attachTop ? d.Sb.Bottom : d.Sb.Top,
                        align: d.Rb.Right,
                        label: a
                    }, r.createElement(d.mb, {
                        asset: n,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            a("5NSO");

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function z(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(G || (G = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var q = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(M.b)(), t.getTrackingContext = function(e) {
                            var a = t.props.trackingContext;
                            return {
                                content: a && a.content ? a.content : e,
                                medium: a && a.medium
                            }
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", n.__assign({
                            className: "preview-card"
                        }, Object(x.a)(this.props)), r.createElement(d.xb, {
                            position: d.db.Relative,
                            borderRadius: d.x.Medium,
                            overflow: d.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(d.T, {
                            to: Object(R.a)(this.getTrackingContext(C.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(D, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: U(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(d.Va, {
                            display: d.W.Flex,
                            flexWrap: d.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(d.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(d.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, n.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(E, {
                            topLeft: r.createElement(V.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(L, {
                                value: Object(i.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? r.createElement(E, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(L, {
                                value: Object(F.b)(this.props.durationInSeconds),
                                icon: d.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(L, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(L, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(L, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : z(this.props) ? r.createElement(E, {
                            topLeft: r.createElement(L, {
                                value: Object(F.b)(this.props.durationInSeconds),
                                icon: d.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(L, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(L, {
                                value: Object(i.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(i.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || z(this.props) ? Object(i.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(d.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(T, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: d.p.BoxArt,
                            "data-test-selector": G.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(d.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(T, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: d.p.Aspect1x1,
                            "data-test-selector": G.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(A.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), z(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(i.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(_, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(d.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(H.a, n.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(d.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, r.createElement(p, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(W, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === j.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, a, n) {
                        switch (e) {
                            case j.a.Balloon:
                                return r.createElement(k, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: a,
                                    onBalloonItemClick: n
                                });
                            case j.a.Inline:
                                return r.createElement(w, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case j.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                $ = Object(I.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(q);
            a.d(t, !1, function() {
                return G
            }), a.d(t, "b", function() {
                return B
            }), a.d(t, !1, function() {
                return q
            }), a.d(t, "a", function() {
                return $
            })
        },
        H1ft: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return o
            });
            var n, r = a("/7QA"),
                i = a("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(n || (n = {}));
            var o = function() {
                switch (r.o.experiments.getAssignment(i.b.Archer)) {
                    case "balloon":
                        return n.Balloon;
                    case "inline":
                        return n.Inline;
                    case "control":
                    default:
                        return n.None
                }
            }
        },
        HrG3: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return l
            });
            var n = a("q1tI"),
                r = a("2iEm"),
                i = a("/7QA"),
                o = a("Ue10"),
                s = (a("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = n.createElement(o.Va, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: o.Y.Column,
                    justifyContent: o.Ua.Center,
                    display: o.W.Flex
                }, n.createElement(o.V, {
                    color: o.O.Link,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, Object(i.d)("View All", "Following--ViewAllButton")), n.createElement(o.V, {
                    color: o.O.Alt2,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = n.createElement(r.a, {
                    to: e.linkTo,
                    className: "following__view-all__link"
                }, t)), n.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": s
                }, n.createElement(o.Va, {
                    margin: {
                        bottom: 5
                    }
                }, n.createElement(o.o, {
                    ratio: e.aspectRatio
                }, n.createElement(o.xb, {
                    background: o.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        JTXL: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("/MKj"),
                r = a("fvjX"),
                i = a("kRBY"),
                o = a("oA7Y"),
                s = a("WRGI"),
                l = a("moLQ"),
                d = a("mrSG"),
                c = a("17x9"),
                u = a("q1tI"),
                m = a("oJmH"),
                p = a("/7QA"),
                g = a("ZDlU"),
                h = a("GFmA"),
                v = a("MJbm"),
                f = a("8/mp"),
                b = a("yR8l"),
                k = a("V+GM"),
                y = a("oB8h"),
                C = a("geRD"),
                w = a("kduP"),
                S = a("NvVO"),
                x = a("MPw5"),
                T = a("2xye"),
                N = a("Uive"),
                O = a("cTNz"),
                E = a("GnwI"),
                L = a("Bh3T"),
                I = a("bUox"),
                P = a("TCeE"),
                D = a("fVj5"),
                _ = a("AZIu"),
                j = a("x/sq"),
                V = a("HrG3"),
                A = a("5myU"),
                F = a("rShu"),
                R = a("VW9G"),
                H = a("hX9f"),
                M = a("coeN"),
                G = a("QV0j"),
                B = a("Ue10"),
                W = a("YGU1"),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(D.b)(), t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                        var t, a = Object(M.b)(this.props.languageCode),
                            n = this.props.directoryWidth,
                            r = T.PageviewMedium.Browse,
                            i = T.PageviewContent.LocalPopularChannel,
                            o = this.props.data.streams.edges || [];
                        if (n && n > 0) {
                            var s = Object(A.a)(n, 300, 1);
                            if (s - 1 < o.length) {
                                var l = this.isTagsExperiment ? 0 : 1;
                                o = o.slice(0, s - l)
                            }
                            this.isTagsExperiment || (t = u.createElement("div", {
                                style: {
                                    order: o.length
                                }
                            }, u.createElement(V.a, {
                                subHeader: a,
                                linkTo: {
                                    pathname: "/directory/all/" + this.props.languageCode,
                                    state: {
                                        medium: r,
                                        content: i
                                    }
                                }
                            })))
                        }
                        var d = o.filter(function(e) {
                            return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                        }).map(function(t, a) {
                            if (!t || !t.node) return null;
                            var n = t.node,
                                o = Object(j.a)({
                                    tags: n.tags,
                                    section: _.a.LiveChannels,
                                    onClickTag: e.props.addTagFilter,
                                    tagFilters: e.props.tagFilters,
                                    scrollToTop: e.props.scrollToTop
                                });
                            return u.createElement(H.b, {
                                directoryType: F.a.Communities,
                                streamIndex: a,
                                streamNode: {
                                    id: n.id,
                                    title: n.title || "",
                                    viewersCount: n.viewersCount || 0,
                                    previewImageURL: n.previewImageURL || p.a.defaultStreamPreviewURL,
                                    broadcaster: n.broadcaster ? {
                                        id: n.broadcaster.id,
                                        login: n.broadcaster.login,
                                        displayName: n.broadcaster.displayName,
                                        roles: null,
                                        profileImageURL: n.broadcaster.profileImageURL || p.a.defaultAvatarURL
                                    } : null,
                                    game: n.game ? {
                                        id: n.game.id,
                                        boxArtURL: n.game.boxArtURL || p.a.defaultBoxArtURL,
                                        name: n.game.name
                                    } : null,
                                    type: Object(G.a)(n.type) || y.a.Live,
                                    streamMetadata: null
                                },
                                key: n.id,
                                trackingMedium: r,
                                trackingContent: i,
                                tagListProps: o
                            })
                        });
                        return d.length > 0 ? u.createElement("div", null, u.createElement(R.a, {
                            languageCode: this.props.languageCode
                        }), u.createElement(B.Tb, {
                            gutterSize: B.Vb.Small,
                            childWidth: B.Ub.Large,
                            placeholderItems: 20
                        }, d, t)) : null
                    }, t
                }(u.Component),
                z = Object(m.compose)(Object(b.a)(W, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                languages: [e.languageCode],
                                platformType: e.platformType,
                                isTagsExperiment: Object(D.a)()
                            }
                        }
                    }
                }), Object(E.c)("PopularInternationalSection", {
                    autoReportInteractive: !0
                }))(U),
                q = a("xktb"),
                $ = a("yI6f"),
                Y = a("T2RZ"),
                Q = a("V6sb"),
                X = "directory-first-item",
                Z = "directory-container",
                K = Object(Y.a)(T.PageviewMedium.Browse, $.b.Live, $.c.BrowseLiveChannels)(h.a);

            function J(e) {
                var t = e.streams && e.streams.edges;
                return t ? t.filter(function(e) {
                    return e && e.node && e.node.id
                }) : []
            }
            var ee = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0,
                            directoryWidth: -1
                        }, t.isTagsExperiment = Object(D.b)(), t.onResize = function(e) {
                            t.setState({
                                directoryWidth: e
                            })
                        }, t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + Z + '"]'),
                                t = document.querySelector('[data-target="' + X + '"]'),
                                a = document.querySelector("#" + O.b.directory.rectangle);
                            if (t && e && a) {
                                var n = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                a.style.order !== n && "0" !== n && (a.style.order = n)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            t.props.removeTagFilter(e);
                            var a = {
                                section: _.a.LiveChannels,
                                tagPosition: t.props.tagFilters.length - 1,
                                searchEvent: !0,
                                tagId: e.id,
                                dismiss: !0
                            };
                            Object(_.b)(a)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(O.b.directory).length && x.a.display(O.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentWillMount = function() {
                        O.g.addListener(O.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        p.o.setPageTitle(Object(p.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), O.g.removeListener(O.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.isTagsExperiment && this.props.tagFilters.length > P.a) return u.createElement(I.a, {
                            errorType: I.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading && !this.props.data.streams) return u.createElement(B.Xa, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return u.createElement(g.a, {
                            message: Object(p.d)("Error loading data.", "DirectoryPopularPage")
                        });
                        if (this.isTagsExperiment && this.props.data.streams && this.props.data.streams.edges && 0 === this.props.data.streams.edges.length) return u.createElement(I.a, {
                            errorType: I.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = null,
                            a = null;
                        if ("en" !== this.props.languageCode) {
                            var n = this.isTagsExperiment ? {
                                color: B.O.Base
                            } : {
                                color: B.O.Alt2,
                                fontSize: B.Aa.Size5,
                                transform: B.Mb.Uppercase
                            };
                            a = u.createElement(B.Va, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(B.V, d.__assign({
                                type: B.Nb.H4
                            }, n), Object(p.d)("All Channels", "PopularInternationalSection"))), this.props.tagFilters.length || (t = u.createElement(z, {
                                directoryWidth: this.state.directoryWidth,
                                languageCode: this.props.languageCode,
                                platformType: q.a[decodeURIComponent(this.props.match.path)] || "all",
                                addTagFilter: this.props.addTagFilter,
                                tagFilters: this.props.tagFilters,
                                scrollToTop: this.context.scrollToTop
                            }))
                        }
                        var r = T.PageviewMedium.Browse,
                            i = J(this.props.data).map(function(t, a) {
                                var n = t && t.node;
                                return n && n.broadcaster && n.broadcaster.id ? u.createElement("div", {
                                    key: n.id,
                                    "data-target": a ? "" : X,
                                    style: {
                                        order: a
                                    }
                                }, u.createElement(B.Va, {
                                    margin: {
                                        bottom: 2
                                    },
                                    "data-target": "directory-game__card_container"
                                }, u.createElement(K, {
                                    context: h.b.MixedGameAndChannelList,
                                    title: n.title || Object(p.d)("Untitled Broadcast", "DirectoryGamePage"),
                                    linkTo: {
                                        pathname: "/" + n.broadcaster.login,
                                        state: {
                                            content: T.PageviewContent.Live,
                                            content_index: a,
                                            medium: r
                                        }
                                    },
                                    thumbnailImageProps: {
                                        src: n.previewImageURL || p.a.defaultStreamPreviewURL,
                                        alt: Object(p.d)("{displayName} cover image", {
                                            displayName: n.broadcaster.login || ""
                                        }, "DirectoryGamePage")
                                    },
                                    currentViewerCount: n.viewersCount || 0,
                                    channelDisplayName: n.broadcaster.displayName || "",
                                    channelLinkTo: {
                                        pathname: "/" + n.broadcaster.login + "/videos",
                                        state: {
                                            medium: r,
                                            content: T.PageviewContent.Live,
                                            content_index: a
                                        }
                                    },
                                    channelLogin: n.broadcaster.login || "",
                                    gameTitle: n.game && n.game.name || "",
                                    gameTitleLinkTo: {
                                        pathname: Object(w.c)(n.game && n.game.name || ""),
                                        state: {
                                            medium: r,
                                            content: T.PageviewContent.Live,
                                            content_index: a
                                        }
                                    },
                                    gameBoxArtImageProps: {
                                        src: n.game && n.game.boxArtURL || p.a.defaultBoxArtURL,
                                        alt: n.game && n.game.name || ""
                                    },
                                    "data-a-target": "card-" + a,
                                    "data-a-id": "card-" + (n.broadcaster.login || "").replace(/ /g, ""),
                                    streamType: Object(G.a)(n.type) || y.a.Live,
                                    channelImageProps: {
                                        src: n.broadcaster.profileImageURL || "",
                                        alt: n.broadcaster.displayName || ""
                                    },
                                    tagListProps: Object(j.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: _.a.LiveChannels,
                                        scrollToTop: e.context.scrollToTop
                                    }),
                                    trackingProps: {
                                        category: n.game ? n.game.id : void 0,
                                        categoryName: n.game ? n.game.displayName : void 0,
                                        itemPosition: a,
                                        rowPosition: 0,
                                        channelID: n.broadcaster.id || void 0
                                    }
                                }))) : null
                            }),
                            o = !(this.props.data.loading || this.props.data.error || !this.props.data.streams || !this.props.data.streams.pageInfo || !this.props.data.streams.pageInfo.hasNextPage);
                        return u.createElement(B.Va, {
                            flexShrink: 0,
                            "data-target": Z
                        }, u.createElement(L.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), t, a, u.createElement(B.Tb, {
                            gutterSize: B.Vb.Small,
                            childWidth: B.Ub.Large,
                            placeholderItems: 20
                        }, u.createElement(N.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: O.d.directory,
                            slotID: O.b.directory.rectangle,
                            adSize: O.c.directory.rectangle,
                            targeting: {
                                pagetype: O.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), i), u.createElement(f.a, {
                            enabled: o,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }), u.createElement(v.a, {
                            onResize: this.onResize
                        }))
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                    }, t.contextTypes = {
                        scrollToTop: c.func
                    }, t
                }(u.Component),
                te = Object(m.compose)(Object(b.a)(Q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: q.a[decodeURIComponent(e.match.path)] || "all",
                                languages: Object(D.b)() ? [] : e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                }),
                                tags: e.languageTags.concat(e.tagFilters.map(function(e) {
                                    return e.id
                                })),
                                isTagsExperiment: Object(D.b)()
                            }
                        }
                    },
                    props: function(e) {
                        return d.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    a = t.fetchMore,
                                    n = t.variables,
                                    r = t.streams,
                                    i = r && r.edges && r.edges[r.edges.length - 5];
                                return a({
                                    query: Q,
                                    variables: d.__assign({}, n, {
                                        cursor: i ? i.cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var a = t.fetchMoreResult;
                                        return {
                                            streams: d.__assign({}, a.streams, {
                                                edges: Object(C.c)(J(e), J(a))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularPage", {
                    destination: S.a.DirectoryPopular
                }), Object(k.a)({
                    location: T.PageviewLocation.DirectoryPopular
                }))(ee);
            var ae = Object(n.connect)(function(e) {
                    return {
                        languageCode: Object(i.b)(e),
                        languagePreferences: e.userPreferences.languagePreferences,
                        languageTags: Object(l.b)(e),
                        lastBrowsePath: e.browse.lastBrowsePath,
                        sideNavExpanded: e.ui.sideNavExpanded,
                        tagFilters: Object(s.a)(e)
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        addTagFilter: o.f,
                        changeLastBrowsePath: o.h,
                        removeTagFilter: o.j
                    }, e)
                })(te),
                ne = a("Zx5c"),
                re = "directory-container";

            function ie(e) {
                var t = e.streams && e.streams.edges;
                return Object(D.b)() && (t = e.streams && e.streams.edges), t ? t.filter(function(e) {
                    return e && e.node && e.node.id
                }) : []
            }
            var oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsCreated: 0
                        }, t.isTagsExperiment = Object(D.b)(), t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + re + '"]'),
                                t = document.querySelector('[data-target="' + H.a + '"]'),
                                a = document.querySelector("#" + O.b.directory.rectangle);
                            if (t && e && a) {
                                var n = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                a.style.order !== n && "0" !== n && (a.style.order = n)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            t.props.removeTagFilter(e)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsCreated + 1;
                                return t === Object.keys(O.b.directory).length && x.a.display(O.b.directory.banner), {
                                    numSlotsCreated: t
                                }
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentWillMount = function() {
                        O.g.addListener(O.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        O.g.removeListener(O.e, this.onSlotAdded)
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.isTagsExperiment && this.props.tagFilters.length > P.a) return u.createElement(I.a, {
                            errorType: I.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading && !this.props.data.streams) return u.createElement(B.Xa, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return u.createElement(g.a, {
                            message: Object(p.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                        });
                        if (!this.props.data.streams) return u.createElement(g.a, {
                            message: Object(p.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                        });
                        if (this.isTagsExperiment && this.props.data.streams.edges && 0 === this.props.data.streams.edges.length) return u.createElement(I.a, {
                            errorType: I.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t, a = ie(this.props.data).filter(function(e) {
                            var t = e.node;
                            return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                        }).map(function(t, a) {
                            var n = t && t.node;
                            if (n) {
                                var r = {
                                    id: n.id,
                                    title: n.title || "",
                                    viewersCount: n.viewersCount || 0,
                                    previewImageURL: n.previewImageURL || p.a.defaultStreamPreviewURL,
                                    broadcaster: n.broadcaster ? {
                                        id: n.broadcaster.id,
                                        login: n.broadcaster.login,
                                        displayName: n.broadcaster.displayName,
                                        roles: null,
                                        profileImageURL: n.broadcaster.profileImageURL
                                    } : null,
                                    game: n.game ? {
                                        id: n.game.id,
                                        boxArtURL: n.game.boxArtURL || p.a.defaultBoxArtURL,
                                        name: n.game.name
                                    } : null,
                                    type: Object(G.a)(n.type) || y.a.Live,
                                    streamMetadata: null
                                };
                                return u.createElement(H.b, {
                                    directoryType: F.a.Communities,
                                    streamIndex: a,
                                    streamNode: r,
                                    key: n.id,
                                    trackingMedium: T.PageviewMedium.Browse,
                                    tagListProps: Object(j.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: _.a.LiveChannels,
                                        scrollToTop: e.context.scrollToTop
                                    })
                                })
                            }
                        });
                        if (a.length > 0) {
                            var n = B.Ub.Large,
                                r = !(this.props.data.loading || this.props.data.error || !this.props.data.streams.pageInfo || !this.props.data.streams.pageInfo.hasNextPage);
                            t = u.createElement(B.Va, null, u.createElement(B.Tb, {
                                gutterSize: B.Vb.Small,
                                childWidth: n,
                                placeholderItems: 20
                            }, u.createElement(N.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 20,
                                    order: 999,
                                    width: 300,
                                    height: 250
                                },
                                adUnit: O.d.directory,
                                slotID: O.b.directory.rectangle,
                                adSize: O.c.directory.rectangle,
                                targeting: {
                                    pagetype: O.a.games
                                },
                                key: -1,
                                autoEnable: !1
                            }), a), u.createElement(f.a, {
                                enabled: r,
                                loadMore: this.props.loadMore,
                                pixelThreshold: 200
                            }))
                        } else {
                            var i = Object(p.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                            t = u.createElement(B.Va, {
                                display: B.W.Flex,
                                alignItems: B.f.Center,
                                justifyContent: B.Ua.Center,
                                fullWidth: !0,
                                padding: {
                                    y: 3
                                }
                            }, u.createElement(B.V, {
                                color: B.O.Alt2,
                                fontSize: B.Aa.Size4,
                                italic: !0
                            }, i))
                        }
                        return u.createElement(B.Va, {
                            "data-target": re
                        }, u.createElement(L.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), u.createElement(N.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 30
                            },
                            adUnit: O.d.directory,
                            slotID: O.b.directory.banner,
                            adSize: O.c.directory.banner,
                            targeting: {
                                pagetype: O.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), u.createElement(R.a, {
                            languageCode: this.props.match.params.encodedLanguage
                        }), t)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.contextTypes = {
                        scrollToTop: c.func
                    }, t
                }(u.Component),
                se = Object(m.compose)(Object(b.a)(ne, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage],
                                tags: e.tagFilters.map(function(e) {
                                    return e.id
                                }),
                                isTagsExperiment: Object(D.b)()
                            }
                        }
                    },
                    props: function(e) {
                        return d.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    a = t.fetchMore,
                                    n = t.streams,
                                    r = t.variables,
                                    i = n && n.edges && n.edges[n.edges.length - 5];
                                return a({
                                    query: ne,
                                    variables: d.__assign({}, r, {
                                        cursor: i ? i.cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var a = t.fetchMoreResult;
                                        return {
                                            streams: d.__assign({}, a.streams, {
                                                edges: Object(C.c)(ie(e), ie(a))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularByLanguagePage", {
                    destination: S.a.DirectoryPopularByLanguage
                }), Object(k.a)({
                    location: T.PageviewLocation.DirectoryPopular,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                }))(oe);
            var le = Object(n.connect)(function(e) {
                return {
                    tagFilters: Object(s.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    addTagFilter: o.f,
                    removeTagFilter: o.j
                }, e)
            })(se);
            a.d(t, "DirectoryPopularPage", function() {
                return ae
            }), a.d(t, "DirectoryPopularByLanguagePage", function() {
                return le
            })
        },
        MJbm: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("/7QA"),
                o = (a("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = i.o.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                a = e.offsetWidth,
                                n = e.offsetHeight,
                                r = e.offsetLeft,
                                i = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), a === t.width && n === t.height && i === t.top && r === t.left || (t.width = a, t.height = n, t.props.onResize(a, n, i, r)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", {
                            className: "resize-detector"
                        }, r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), r.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, r.createElement("div", {
                            className: "resize-detector__shrink"
                        })))
                    }, t.prototype.componentDidMount = function() {
                        if (this.growDiv) {
                            this.growDiv.parentElement || this.logger.warn("growDiv.parentElement is undefined!"), this.container = this.growDiv.parentElement.parentElement;
                            var e = this.container.style.position;
                            if ("relative" !== e && "absolute" !== e && "fixed" !== e) {
                                var t = window.getComputedStyle(this.container);
                                t && "static" === t.getPropertyValue("position") && (this.container.style.position = "relative")
                            }
                            this.onScroll(), this.growDiv.addEventListener("scroll", this.onScroll), this.shrinkDiv.addEventListener("scroll", this.onScroll)
                        } else this.logger.warn("growDiv is undefined!")
                    }, t.prototype.componentWillUnmount = function() {
                        this.growDiv.removeEventListener("scroll", this.onScroll), this.shrinkDiv.removeEventListener("scroll", this.onScroll)
                    }, t.prototype.reset = function() {
                        var e = this.growDiv,
                            t = this.shrinkDiv,
                            a = this.growChildDiv.style;
                        a.width = "100000px", a.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(r.Component));
            a.d(t, "a", function() {
                return o
            })
        },
        On2s: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return f
            });
            var n, r = a("mrSG"),
                i = a("/7QA"),
                o = a("8rUg"),
                s = a.n(o),
                l = a("ZrRH"),
                d = a.n(l),
                c = a("6H22"),
                u = a.n(c),
                m = a("X7a7"),
                p = a("YhoA"),
                g = a("Pcnk"),
                h = a("mz1O"),
                v = i.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(n || (n = {}));
            var f = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var a, n, o, s, l, d;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return a = t.toLowerCase(), n = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, n && a === p.a.CounterStrike ? [4, b(n)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return o && a === p.a.Hearthstone ? [4, k(o)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && a === p.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && a === p.a.LeagueOfLegends && (d = i.o.store.getState()).directory)
                                        if (d.directory.leagueOfLegends.championsMap) {
                                            if (d.directory.leagueOfLegends.championsMap) return [2, C(s, d.directory.leagueOfLegends.championsMap, d.directory.leagueOfLegends.version)]
                                        } else i.o.store.dispatch(Object(m.b)());
                                    r.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var t, a, n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.a)()];
                                case 1:
                                    return t = r.sent(), (a = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: a[e].display_name,
                                        label: Object(g.b)(g.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: a[e].image_width,
                                            imageHeight: a[e].image_height,
                                            spriteOffsetX: a[e].sprite_x_offset,
                                            spriteOffsetY: a[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return n = r.sent(), v.error(n, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, a, n;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.b)()];
                                case 1:
                                    return t = r.sent(), a = {}, t[0].Class.forEach(function(e) {
                                        a[e.class] = e
                                    }), [2, {
                                        name: a[e].display_name,
                                        label: Object(g.b)(g.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: a[e].image_width,
                                            imageHeight: a[e].image_height,
                                            spriteOffsetX: a[e].sprite_x_offset,
                                            spriteOffsetY: a[e].sprite_y_offset,
                                            spriteURL: d.a
                                        }
                                    }];
                                case 2:
                                    return n = r.sent(), v.error(n, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, a, n, i, o, s, l, d, c, m, p, f;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(h.d)()];
                                case 1:
                                    for (a = r.sent(), n = void 0, i = 0, o = a; i < o.length; i++)
                                        for (s in n = o[i])
                                            if (n.hasOwnProperty(s))
                                                for (l = n[s], d = 0, c = l; d < c.length; d++)
                                                    if ((m = c[d]).character === e) return (t = {})[m.character] = m, [2, {
                                                        name: (p = t)[e].display_name,
                                                        label: Object(g.b)(g.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: p[e].image_width,
                                                            imageHeight: p[e].image_height,
                                                            spriteOffsetX: p[e].sprite_x_offset,
                                                            spriteOffsetY: p[e].sprite_y_offset,
                                                            spriteURL: u.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return f = r.sent(), v.error(f, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e, t, a) {
                    if (!t || !e) return null;
                    var n = t[e],
                        r = "https://ddragon.leagueoflegends.com/cdn/" + a + "/img/sprite/" + n.image.sprite;
                    return {
                        name: n.name,
                        label: Object(g.b)(g.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: n.image.w,
                            imageHeight: n.image.h,
                            spriteOffsetX: n.image.x,
                            spriteOffsetY: n.image.y,
                            spriteURL: r
                        }
                    }
                }
        },
        Pcnk: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return i
            });
            var n, r = a("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(n || (n = {}));
            var i = function(e) {
                switch (e) {
                    case n.CSGOMap:
                        return Object(r.d)("Map", "CSGOMapFilter");
                    case n.CSGOSkillGroup:
                        return Object(r.d)("Rank", "CSGORankFilter");
                    case n.HearthstoneClass:
                        return Object(r.d)("Class", "HearthstoneClassFilter");
                    case n.HearthstoneMode:
                        return Object(r.d)("Mode", "HearthstoneModeFilter");
                    case n.LeagueChampion:
                        return Object(r.d)("Champion", "LeagueFilter");
                    case n.OverwatchCharacter:
                        return Object(r.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        QV0j: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a("oB8h"),
                r = function(e) {
                    switch (e) {
                        case n.a.Live:
                            return n.a.Live;
                        case n.a.Premiere:
                            return n.a.Premiere;
                        case n.a.Rerun:
                            return n.a.Rerun;
                        case n.a.WatchParty:
                            return n.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        RFKy: function(e, t, a) {},
        V6sb: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BrowsePage_Popular"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "PlatformType"
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
                                        value: "Language"
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tags"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
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
                                    value: "platformType"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platformType"
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
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
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
                                                value: "browsePagePopularStreamsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "browsePagePopularStreamsWithTagsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
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
                }],
                loc: {
                    start: 0,
                    end: 502
                }
            };
            n.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery BrowsePage_Popular($limit: Int $cursor: Cursor $platformType: PlatformType $languages: [Language!] $tags: [String!] $isTagsExperiment: Boolean!) {\nstreams(first: $limit after: $cursor platformType: $platformType languages: $languages tags: $tags) {\nedges {\n...browsePagePopularStreamsEdge @skip(if: $isTagsExperiment)\n...browsePagePopularStreamsWithTagsEdge @include(if: $isTagsExperiment)\n}\npageInfo {\nhasNextPage\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("hKEm").definitions)), e.exports = n
        },
        VW9G: function(e, t, a) {
            "use strict";
            var n = a("/MKj"),
                r = a("fvjX"),
                i = a("oA7Y"),
                o = a("Igt5"),
                s = a("mrSG"),
                l = a("q1tI"),
                d = a("yR8l"),
                c = a("fVj5"),
                u = a("coeN"),
                m = a("Ue10"),
                p = a("fbOE"),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.wrapText = function(e) {
                            var a = t.props,
                                n = a.addTagFilterDirectory,
                                r = a.addTagFilterBrowse,
                                i = a.data,
                                o = a.directoryName,
                                s = i && i.contentTag;
                            if (!s) return e;
                            return l.createElement(m.T, {
                                onClick: function() {
                                    return o ? n(s, o) : r(s)
                                },
                                "data-test-selector": "international-section-header-link"
                            }, l.createElement("strong", null, e))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.languageCode;
                        return Object(c.a)() ? l.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(m.V, {
                            type: m.Nb.H4,
                            color: m.O.Base,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header-tags"
                        }, Object(u.a)(e, this.wrapText))) : l.createElement(m.Va, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(m.V, {
                            type: m.Nb.H4,
                            color: m.O.Alt2,
                            fontSize: m.Aa.Size5,
                            transform: m.Mb.Uppercase,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header"
                        }, Object(u.b)(e)))
                    }, t
                }(l.Component),
                h = Object(d.a)(p, {
                    options: function(e) {
                        var t = Object(u.c)(e.languageCode);
                        return {
                            skip: !Object(c.a)() || !t,
                            variables: {
                                id: t
                            }
                        }
                    }
                })(g);
            var v = Object(n.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    addTagFilterBrowse: i.f,
                    addTagFilterDirectory: o.h
                }, e)
            })(h);
            a.d(t, "a", function() {
                return v
            })
        },
        XA5B: function(e, t, a) {},
        YGU1: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BrowsePopular_InternationalStreams"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "PlatformType"
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
                                        value: "Language"
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
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
                                value: "streams"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platformType"
                                    }
                                }
                            }, {
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
                                                value: "browsePagePopularStreamsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "browsePagePopularStreamsWithTagsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 433
                }
            };
            n.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!] $isTagsExperiment: Boolean!) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\n...browsePagePopularStreamsEdge @skip(if: $isTagsExperiment)\n...browsePagePopularStreamsWithTagsEdge @include(if: $isTagsExperiment)\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("hKEm").definitions)), e.exports = n
        },
        YhoA: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(n || (n = {}))
        },
        ZbA5: function(e, t, a) {
            "use strict";
            var n, r, i, o, s = a("mrSG"),
                l = a("TSYQ"),
                d = a("q1tI"),
                c = a("/7QA"),
                u = a("oB8h"),
                m = a("Ue10");
            a("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((n = {})[u.a.Live] = "stream-type-indicator--live", n[u.a.Premiere] = "stream-type-indicator--premiere", n[u.a.Rerun] = "stream-type-indicator--rerun", n[u.a.WatchParty] = "stream-type-indicator--rerun", n),
                g = ((r = {})[u.a.Premiere] = m.nb.VideoPremiere, r[u.a.Rerun] = m.nb.VideoRerun, r[u.a.WatchParty] = m.nb.VideoRerun, r),
                h = ((i = {})[u.a.Premiere] = m.ob.Live, i[u.a.Rerun] = m.ob.Inherit, i[u.a.WatchParty] = m.ob.Inherit, i),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(m.xb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.W.Flex
                        }, d.createElement(m.Va, {
                            display: m.W.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(m.V, {
                            type: m.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(m.xb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? d.createElement(m.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.W.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.mb, {
                            asset: g[this.props.type],
                            type: h[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case u.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case u.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case u.a.Rerun:
                            case u.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            a.d(t, !1, function() {
                return o
            }), a.d(t, "a", function() {
                return v
            })
        },
        ZrRH: function(e, t, a) {
            e.exports = a.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        Zx5c: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "PopularPage_StreamsByLanguage"
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
                                        value: "Language"
                                    }
                                }
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "tags"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "isTagsExperiment"
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
                                    value: "languages"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "languages"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
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
                                                value: "browsePagePopularStreamsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "browsePagePopularStreamsWithTagsEdge"
                                            },
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
                                                            value: "isTagsExperiment"
                                                        }
                                                    }
                                                }]
                                            }]
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
                }],
                loc: {
                    start: 0,
                    end: 457
                }
            };
            n.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery PopularPage_StreamsByLanguage($limit: Int $languages: [Language!] $cursor: Cursor $tags: [String!] $isTagsExperiment: Boolean!) {\nstreams(first: $limit after: $cursor languages: $languages tags: $tags) {\nedges {\n...browsePagePopularStreamsEdge @skip(if: $isTagsExperiment)\n...browsePagePopularStreamsWithTagsEdge @include(if: $isTagsExperiment)\n}\npageInfo {\nhasNextPage\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("hKEm").definitions)), e.exports = n
        },
        cRsL: function(e, t, a) {},
        coeN: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return r
            }), a.d(t, "c", function() {
                return i
            }), a.d(t, "a", function() {
                return s
            });
            var n = a("/7QA"),
                r = function(e) {
                    switch (e) {
                        case "ar":
                            return Object(n.d)("Channels in Arabic", "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(n.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(n.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(n.d)("Channels in Czech", "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(n.d)("Channels in Danish", "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(n.d)("Channels in German", "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(n.d)("Channels in Greek", "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(n.d)("Channels in Spanish", "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(n.d)("Channels in Finnish", "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(n.d)("Channels in French", "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(n.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(n.d)("Channels in Italian", "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(n.d)("Channels in Japanese", "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(n.d)("Channels in Korean", "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(n.d)("Channels in Dutch", "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(n.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(n.d)("Channels in Polish", "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(n.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(n.d)("Channels in Russian", "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(n.d)("Channels in Slovak", "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(n.d)("Channels in Swedish", "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(n.d)("Channels in Thai", "DirectoryInternationalSectionHeader");
                        case "tr":
                            return Object(n.d)("Channels in Turkish", "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(n.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(n.d)("Channels in Chinese", "DirectoryInternationalSectionHeader");
                        default:
                            return Object(n.d)("Channels in English", "DirectoryInternationalSectionHeader")
                    }
                };

            function i(e) {
                switch (e) {
                    case "en":
                        return "6ea6bca4-4712-4ab9-a906-e3336a9d8039";
                    case "it":
                        return "5b9935eb-1e9a-4217-98ad-62bda5cff0d1";
                    case "es":
                        return "d4bb9c58-2141-4881-bcdc-3fe0505457d1";
                    case "ko":
                        return "ab2975e3-b9ca-4b1a-a93e-fb61a5d5c3a4";
                    case "ru":
                        return "0569b171-2a2b-476e-a596-5bdfb45a1327";
                    case "fi":
                        return "220eb274-ab25-425b-8a9b-826103404997";
                    case "fr":
                        return "6f655045-9989-4ef7-8f85-1edcec42d648";
                    case "hu":
                        return "a298cca5-d408-47c7-a1e7-0c76ca878bc6";
                    case "sv":
                        return "145b073b-cb70-4e91-b170-f5fab2ebba05";
                    case "pt":
                        return "39ee8140-901a-4762-bfca-8260dea1310f";
                    case "de":
                        return "9166ad14-41f1-4b04-a3b8-c8eb838c6be6";
                    case "ja":
                        return "6ba1d230-e52f-4d81-b1e0-41f25a8a9f5d";
                    case "nl":
                        return "e13e6734-37ae-4d85-897b-3015f0168355";
                    case "pl":
                        return "f9d04efa-6e25-49bf-bf0a-da3e2addaf1b";
                    case "cs":
                        return "a6cddaba-f0ce-4526-9087-6de2f603a24d";
                    case "no":
                        return "5647bf35-f99e-49aa-8578-0e07d936188c";
                    case "tr":
                        return "f08d5873-f0c7-4912-94ba-a41933b4c141";
                    case "sk":
                        return "9b773670-05f8-4c06-ac99-e6649f906171";
                    case "th":
                        return "f19c7524-c18d-41af-9f39-034c8d0b0fee";
                    case "ar":
                        return "73cc486a-e56b-41ed-a1df-7afedbc84f6f";
                    case "da":
                        return "43e598cc-918b-4247-b02c-b13543a1eac9";
                    case "el":
                        return "902f6815-a655-4918-99e7-48c74a71feac";
                    case "zh":
                        return "74c92063-a389-4fd2-8460-b1bb82b04ec7";
                    case "ro":
                        return "75a99c80-0f15-4159-b1fd-3812c25b4aca";
                    case "bg":
                        return "21d85c73-701f-4259-8c4e-4321265847b5";
                    case "asl":
                        return "5ad4b978-495f-4093-9461-c194f58201ab";
                    case "zh-hk":
                        return "0c8c6543-4019-47d0-9b8a-57a81ee6ace5";
                    case "vi":
                        return "ba3b69fe-899c-4518-ac46-707275e3eba1";
                    case "other":
                        return "fd76c790-0505-4c4c-865a-d6bd139c0901";
                    default:
                        return null
                }
            }
            var o = function(e) {
                    return e
                },
                s = function(e, t) {
                    switch (void 0 === t && (t = o), e) {
                        case "ar":
                            return Object(n.d)("Channels in <x:bold>Arabic</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(n.d)("Channels in <x:bold>American Sign Language</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(n.d)("Channels in <x:bold>Bulgarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(n.d)("Channels in <x:bold>Czech</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(n.d)("Channels in <x:bold>Danish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(n.d)("Channels in <x:bold>German</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(n.d)("Channels in <x:bold>Greek</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(n.d)("Channels in <x:bold>Spanish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(n.d)("Channels in <x:bold>Finnish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(n.d)("Channels in <x:bold>French</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(n.d)("Channels in <x:bold>Hungarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(n.d)("Channels in <x:bold>Italian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(n.d)("Channels in <x:bold>Japanese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(n.d)("Channels in <x:bold>Korean</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(n.d)("Channels in <x:bold>Dutch</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(n.d)("Channels in <x:bold>Norwegian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(n.d)("Channels in <x:bold>Polish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(n.d)("Channels in <x:bold>Portuguese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(n.d)("Channels in <x:bold>Russian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(n.d)("Channels in <x:bold>Slovak</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(n.d)("Channels in <x:bold>Swedish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(n.d)("Channels in <x:bold>Thai</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeaer");
                        case "tr":
                            return Object(n.d)("Channels in <x:bold>Turkish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(n.d)("Channels in <x:bold>Vietnamese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(n.d)("Channels in <x:bold>Chinese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        default:
                            return Object(n.d)("Channels in <x:bold>English</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader")
                    }
                }
        },
        efEE: function(e, t, a) {},
        fbOE: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "InternationalHeader_Tag"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "id"
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
                                value: "contentTag"
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
                                        value: "id"
                                    }
                                }
                            }],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 139
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery InternationalHeader_Tag($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("iiOx").definitions)), e.exports = n
        },
        gAd6: function(e, t) {
            var a = {
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
            a.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = a
        },
        hKEm: function(e, t, a) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsEdge"
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
                                                    value: "50"
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
                                        }]
                                    }
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
                }, {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsWithTagsEdge"
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
                                                    value: "50"
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
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "tags"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "tagFragment"
                                            },
                                            directives: []
                                        }]
                                    }
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
                }],
                loc: {
                    start: 0,
                    end: 616
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\nfragment browsePagePopularStreamsWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(a("iiOx").definitions)), e.exports = n
        },
        hX9f: function(e, t, a) {
            "use strict";
            var n = a("mrSG"),
                r = a("q1tI"),
                i = a("9C/b"),
                o = a("fvjX"),
                s = a("/7QA"),
                l = a("GFmA"),
                d = a("kduP"),
                c = a("2xye"),
                u = a("fVj5"),
                m = a("rShu"),
                p = a("yI6f"),
                g = a("T2RZ"),
                h = a("Ue10"),
                v = (a("zrz1"), Object(g.a)(c.PageviewMedium.Game, p.b.Live, p.c.BrowseInCategoryChannels)(l.a)),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(u.b)(), t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, a) {
                            var r = t.props.trackingContent ? t.props.trackingContent : c.PageviewContent.Live,
                                i = c.PageviewMedium.Game;
                            t.props.trackingMedium && (i = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: n.__assign({}, o, {
                                    medium: i,
                                    content: r,
                                    content_index: a
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== m.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t.onClick = function(e) {
                            t.props.onClick && t.props.onClick(e, t.props.streamNode.broadcaster && t.props.streamNode.broadcaster.id)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var a = {
                            context: this.props.directoryType === m.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            onVideoTitleClick: this.onClick,
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
                                alt: "" + e.broadcaster.login
                            },
                            onThumbnailClick: this.onClick,
                            channelDisplayName: e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster.login || "",
                            channelLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                            onChannelLoginClick: this.onClick,
                            channelImageProps: {
                                src: e.broadcaster.profileImageURL || "",
                                alt: "" + e.broadcaster.login
                            },
                            gameTitle: this.shouldShowGame("name"),
                            gameTitleLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            playerMetadata: !this.isTagsExperiment && e.streamMetadata || void 0,
                            playerMetadataGame: e.streamMetadata ? this.props.directoryName : void 0,
                            streamType: e.type,
                            currentViewerCount: e.viewersCount || 0,
                            trackImageLatency: this.props.trackImageLatency,
                            tagListProps: this.props.tagListProps
                        };
                        return r.createElement("div", {
                            className: "stream-thumbnail",
                            "data-target": t ? "" : "directory-first-item",
                            style: {
                                order: t
                            }
                        }, r.createElement(h.Va, {
                            className: "stream-thumbnail__card",
                            position: h.db.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, r.createElement(v, n.__assign({}, a, {
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
                }(r.Component),
                b = Object(o.compose)(i.a)(f);
            a.d(t, "a", function() {
                return "directory-first-item"
            }), a.d(t, !1, function() {
                return "directory-game__card_container"
            }), a.d(t, !1, function() {
                return f
            }), a.d(t, "b", function() {
                return b
            })
        },
        "kF1+": function(e, t, a) {},
        kVMo: function(e, t, a) {},
        lRiI: function(e, t, a) {},
        m493: function(e, t, a) {},
        mz1O: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            }), a.d(t, "b", function() {
                return i
            }), a.d(t, "c", function() {
                return o
            }), a.d(t, "d", function() {
                return s
            }), a.d(t, "e", function() {
                return l
            }), a.d(t, "f", function() {
                return d
            });
            var n = a("mrSG"),
                r = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(172).then(function() {
                                        var e = a("vrl6");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                i = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(171).then(function() {
                                        var e = a("+4ZJ");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                o = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(170).then(function() {
                                        var e = a("nSs0");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                s = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(169).then(function() {
                                        var e = a("1Bro");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                l = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(168).then(function() {
                                        var e = a("Dpq/");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                },
                d = function() {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        return n.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, a.e(167).then(function() {
                                        var e = a("bVYI");
                                        return Object.assign({}, e, {
                                            default: e
                                        })
                                    })];
                                case 1:
                                    return [2, e.sent().items]
                            }
                        })
                    })
                }
        },
        vDRX: function(e, t, a) {},
        zrz1: function(e, t, a) {}
    }
]);