(window.webpackJsonp = window.webpackJsonp || []).push([
    [128], {
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return c
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = i.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    i.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                d = function(e) {
                    i.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, d, c, u = this;
                        return a.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(u, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
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
                                    return n = m.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), d = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), c = l.map(function() {
                                        return null
                                    }), i.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
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
        "5NSO": function(e, t, n) {},
        "5myU": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = 10;

            function i(e, t, n) {
                if (void 0 === n && (n = 1), !t || !e) return -1;
                var i = window.getComputedStyle(document.documentElement).fontSize || a.toString(),
                    r = parseFloat(i) / a;
                return Math.floor(e / (t * r)) * n
            }
        },
        "5zf8": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return l
            });
            var a, i, r = n("/7QA");

            function o(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function s(e, t) {
                switch (e) {
                    case a.Second:
                        return Object(r.d)("{secondCount}s", {
                            secondCount: t
                        }, "formatDuration");
                    case a.Minute:
                        return Object(r.d)("{minuteCount}m", {
                            minuteCount: t
                        }, "formatDuration");
                    case a.Hour:
                        return Object(r.d)("{hourCount}h", {
                            hourCount: t
                        }, "formatDuration");
                    case a.Day:
                        return Object(r.d)("{dayCount}d", {
                            dayCount: t
                        }, "formatDuration");
                    case a.Week:
                        return Object(r.d)("{weekCount}w", {
                            weekCount: t
                        }, "formatDuration");
                    case a.Month:
                        return Object(r.d)("{monthCount}mo", {
                            monthCount: t
                        }, "formatDuration");
                    default:
                        return ""
                }
            }

            function l(e, t) {
                var n;
                switch (void 0 === t && (t = i.Humanized), t === i.ClockAuto && (t = e >= 3600 ? i.ClockHMS : i.ClockMS), t) {
                    case i.ClockHM:
                    case i.ClockHMS:
                        n = a.Hour;
                        break;
                    case i.ClockMS:
                        n = a.Minute
                }
                var l = 2;
                t === i.ClockHMS && (l = 3);
                var c = function(e, t) {
                        void 0 === t && (t = a.Month);
                        var n = {};
                        return n.seconds = e, e < 60 || t === a.Second ? n : (n.minutes = Math.floor(e / 60), n.seconds = e % 60, n.minutes < 60 || t === a.Minute ? n : (n.hours = Math.floor(n.minutes / 60), n.minutes = n.minutes % 60, n.hours < 24 || t === a.Hour ? n : (n.days = Math.floor(n.hours / 24), n.hours = n.hours % 24, n.days < 7 || t === a.Day ? n : n.days <= 26 || t === a.Week ? (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7, n) : (n.months = Math.round((n.days + 3) / 30), n))))
                    }(e, n),
                    u = Object.keys(c);
                if (u.forEach(function(e, n) {
                        t !== i.Humanized && t !== i.HumanizedShort || c[e] || delete c[e], n < u.length - l && delete c[e]
                    }), t === i.Humanized) return function(e) {
                    return e.months ? o(a.Month, e.months) : e.weeks && e.days ? o(a.Week, e.weeks) + " " + o(a.Day, e.days) : e.weeks ? o(a.Week, e.weeks) : e.days && e.hours ? o(a.Day, e.days) + " " + o(a.Hour, e.hours) : e.days ? o(a.Day, e.days) : e.hours && e.minutes ? o(a.Hour, e.hours) + " " + o(a.Minute, e.minutes) : e.hours ? o(a.Hour, e.hours) : e.minutes && e.seconds ? o(a.Minute, e.minutes) + " " + o(a.Second, e.seconds) : e.minutes ? o(a.Minute, e.minutes) : o(a.Second, e.seconds || 0)
                }(c);
                if (t === i.HumanizedShort) return function(e) {
                    return e.months ? s(a.Month, e.months) : e.weeks && e.days ? "" + s(a.Week, e.weeks) + s(a.Day, e.days) : e.weeks ? s(a.Week, e.weeks) : e.days && e.hours ? "" + s(a.Day, e.days) + s(a.Hour, e.hours) : e.days ? s(a.Day, e.days) : e.hours && e.minutes ? "" + s(a.Hour, e.hours) + s(a.Minute, e.minutes) : e.hours ? s(a.Hour, e.hours) : e.minutes && e.seconds ? "" + s(a.Minute, e.minutes) + s(a.Second, e.seconds) : e.minutes ? s(a.Minute, e.minutes) : s(a.Second, e.seconds || 0)
                }(c);
                var m = ":",
                    p = !1;
                switch (r.p.intl.getLanguageCode()) {
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
                    case i.ClockHM:
                    case i.ClockHMS:
                        var b = (p ? d(v, 2) : v) + m + d(h, 2);
                        return t === i.ClockHMS && (b += m + d(g, 2)), b;
                    case i.ClockMS:
                        return (p ? d(h, 2) : h) + m + d(g, 2)
                }
            }

            function d(e, t) {
                var n = e.toString();
                return n.length < t ? "0".repeat(t - n.length) + n : n
            }! function(e) {
                e[e.Second = 0] = "Second", e[e.Minute = 1] = "Minute", e[e.Hour = 2] = "Hour", e[e.Day = 3] = "Day", e[e.Week = 4] = "Week", e[e.Month = 5] = "Month"
            }(a || (a = {})),
            function(e) {
                e[e.Humanized = 0] = "Humanized", e[e.HumanizedShort = 1] = "HumanizedShort", e[e.ClockAuto = 2] = "ClockAuto", e[e.ClockHM = 3] = "ClockHM", e[e.ClockMS = 4] = "ClockMS", e[e.ClockHMS = 5] = "ClockHMS"
            }(i || (i = {}))
        },
        "80G/": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                s = n("Ue10"),
                l = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return i.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap
                        }, i.createElement(s.Ta, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row,
                            padding: .5
                        }, i.createElement(s.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.Za.Hidden,
                            position: s.eb.Relative
                        }, i.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, i.createElement(s.S, a.__assign({}, e))), i.createElement(s.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Va.Center,
                            position: s.eb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(s.nb, {
                            asset: s.ob.Play,
                            type: s.pb.Inherit
                        }))), i.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(s.W, null, this.props.gameChange.label)), i.createElement(s.Wa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                d = n("0INk"),
                c = n("8/mp"),
                u = n("eJ65"),
                m = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(d.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(s.Wa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.eb.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.ob.ViewerList
                        }, i.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Row
                        }, i.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(s.Wa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(s.bb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, i.createElement(s.Wa, {
                            overflow: s.Za.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap
                        }, i.createElement(s.Wa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(s.Wa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Aa.NoWrap
                        }, i.createElement(c.b, null, i.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexDirection: s.Z.Column,
                            flexWrap: s.Aa.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(l, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                p = n("kduP"),
                g = n("2xye"),
                h = function(e) {
                    return i.createElement(s.Wa, null, i.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return i.createElement(s.Oa, {
                            key: n
                        }, i.createElement(s.U, {
                            to: {
                                pathname: Object(p.c)(t.label),
                                state: {
                                    content: g.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, v(n, a.length - 1) ? null : ", "))
                    })))
                },
                v = function(e, t) {
                    return e === t
                },
                b = n("N0BP"),
                f = (n("XA5B"), function(e) {
                    var t = i.createElement(s.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.Za.Hidden
                    }, i.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, i.createElement(s.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(s.U, a.__assign({}, Object(b.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            f.displayName = "PreviewCardIconicImage";
            var k, y = n("TSYQ"),
                C = (n("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(s.Wa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Va.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, i.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Mb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(s.Wa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                S = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(s.hb, {
                        borderRadius: s.x.None,
                        size: s.jb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(C, a.__assign({}, e.topBar))), r = 3), i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(s.Wa, {
                        position: s.eb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                w = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(s.Wa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s.nb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(s.xb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ba.Size6,
                        justifyContent: s.Va.Center
                    }, t, i.createElement(s.W, null, e.value)) : i.createElement(s.xb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(s.W, null, e.value))
                }),
                N = n("GnwI"),
                x = (n("B3R5"), function(e) {
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
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), i.createElement("div", a.__assign({}, e, {
                            onClick: this.props.onClick
                        }), i.createElement(s.xb, {
                            background: s.r.Alt2,
                            overflow: s.Za.Hidden
                        }, i.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(s.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(s.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                T = Object(N.b)("PreviewCardThumbnail")(x),
                I = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(s.Wa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(s.U, a.__assign({}, Object(b.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(s.W, {
                        type: s.Nb.H3,
                        fontSize: s.Ba.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(s.Wa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                E = n("H1ft"),
                L = n("ZbA5"),
                P = n("QVaV"),
                D = n("hyVY"),
                O = n("MXoD"),
                j = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var F, A, _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? s.ob.Unlock : s.ob.Lock;
                    return i.createElement(s.Wa, null, !t && i.createElement(s.xb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.eb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Z.Column,
                        flexWrap: s.Aa.Wrap,
                        justifyContent: s.Va.Center,
                        "data-test-selector": k.LockSelector
                    }, i.createElement(s.Oa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ba.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(s.Wa, null, i.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(s.xb, {
                        display: s.X.InlineFlex,
                        position: s.eb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.ac.Default,
                        fontSize: s.Ba.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, i.createElement(s.Qb, {
                        direction: this.props.attachTop ? s.Sb.Bottom : s.Sb.Top,
                        align: s.Rb.Right,
                        label: n
                    }, i.createElement(s.nb, {
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function R(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function W(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(F || (F = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", a.__assign({
                            className: "preview-card"
                        }, Object(b.a)(this.props)), i.createElement(s.xb, {
                            position: s.eb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.Za.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(s.U, {
                            to: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(T, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: R(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(s.Wa, {
                            display: s.X.Flex,
                            flexWrap: s.Aa.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(s.Wa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(s.Wa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(S, {
                            topLeft: i.createElement(L.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(w, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : R(this.props) ? i.createElement(S, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.ob.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(w, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(w, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : W(this.props) ? i.createElement(S, {
                            topLeft: i.createElement(w, {
                                value: Object(D.b)(this.props.durationInSeconds),
                                icon: s.ob.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(w, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(w, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return R(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return R(this.props) || W(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(f, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": F.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(s.Wa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(f, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": F.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(P.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), W(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : R(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(O.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(s.Wa, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(j.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return R(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(_, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!R(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === E.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case E.a.Balloon:
                                return i.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case E.a.Inline:
                                return i.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case E.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                B = Object(N.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(V);
            n.d(t, !1, function() {
                return F
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return V
            }), n.d(t, "a", function() {
                return B
            })
        },
        H1ft: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            var a, i = n("/7QA"),
                r = n("D7An");
            ! function(e) {
                e.None = "None", e.Inline = "Inline", e.Balloon = "Balloon"
            }(a || (a = {}));
            var o = function() {
                switch (i.p.experiments.getAssignment(r.b.Archer)) {
                    case "balloon":
                        return a.Balloon;
                    case "inline":
                        return a.Inline;
                    case "control":
                    default:
                        return a.None
                }
            }
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("q1tI"),
                i = n("/7QA"),
                r = n("Ue10"),
                o = (n("RFKy"), "view-all-button-selector");

            function s(e) {
                var t = a.createElement(r.Wa, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Z.Column,
                    justifyContent: r.Va.Center,
                    display: r.X.Flex
                }, a.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ba.Size4,
                    noWrap: !0
                }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ba.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = a.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), a.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, a.createElement(r.Wa, {
                    margin: {
                        bottom: 5
                    }
                }, a.createElement(r.o, {
                    ratio: e.aspectRatio
                }, a.createElement(r.xb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        JTXL: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("kRBY"),
                o = n("oA7Y"),
                s = n("WRGI"),
                l = n("moLQ"),
                d = n("mrSG"),
                c = n("17x9"),
                u = n("q1tI"),
                m = n("oJmH"),
                p = n("/7QA"),
                g = n("ZDlU"),
                h = n("GFmA"),
                v = n("MJbm"),
                b = n("8/mp"),
                f = n("yR8l"),
                k = n("V+GM"),
                y = n("oB8h"),
                C = n("geRD"),
                S = n("kduP"),
                w = n("NvVO"),
                N = n("MPw5"),
                x = n("2xye"),
                T = n("Uive"),
                I = n("cTNz"),
                E = n("GnwI"),
                L = n("Bh3T"),
                P = n("bUox"),
                D = n("TCeE"),
                O = n("AZIu"),
                j = n("x/sq"),
                F = n("HrG3"),
                A = n("5myU"),
                _ = n("fVj5"),
                R = n("rShu"),
                W = n("VW9G"),
                V = n("hX9f"),
                B = n("coeN"),
                H = n("QV0j"),
                G = n("Ue10"),
                M = n("YGU1"),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(_.b)(), t
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                        var t, n = Object(B.b)(this.props.languageCode),
                            a = this.props.directoryWidth,
                            i = x.PageviewMedium.Browse,
                            r = x.PageviewContent.LocalPopularChannel,
                            o = this.props.data.streams.edges || [];
                        if (a && a > 0) {
                            var s = Object(A.a)(a, 300, 1);
                            if (s - 1 < o.length) {
                                var l = this.isTagsExperiment ? 0 : 1;
                                o = o.slice(0, s - l)
                            }
                            this.isTagsExperiment || (t = u.createElement("div", {
                                style: {
                                    order: o.length
                                }
                            }, u.createElement(F.a, {
                                subHeader: n,
                                linkTo: {
                                    pathname: "/directory/all/" + this.props.languageCode,
                                    state: {
                                        medium: i,
                                        content: r
                                    }
                                }
                            })))
                        }
                        var d = o.filter(function(e) {
                            return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                        }).map(function(t, n) {
                            if (!t || !t.node) return null;
                            var a = t.node,
                                o = Object(j.a)({
                                    tags: a.tags,
                                    section: O.a.LiveChannels,
                                    onClickTag: e.props.addTagFilter,
                                    tagFilters: e.props.tagFilters,
                                    scrollToTop: e.props.scrollToTop
                                });
                            return u.createElement(V.b, {
                                directoryType: R.a.Communities,
                                streamIndex: n,
                                streamNode: {
                                    id: a.id,
                                    title: a.title || "",
                                    viewersCount: a.viewersCount || 0,
                                    previewImageURL: a.previewImageURL || p.a.defaultStreamPreviewURL,
                                    broadcaster: a.broadcaster ? {
                                        id: a.broadcaster.id,
                                        login: a.broadcaster.login,
                                        displayName: a.broadcaster.displayName,
                                        roles: null,
                                        profileImageURL: a.broadcaster.profileImageURL || p.a.defaultAvatarURL
                                    } : null,
                                    game: a.game ? {
                                        id: a.game.id,
                                        boxArtURL: a.game.boxArtURL || p.a.defaultBoxArtURL,
                                        name: a.game.name
                                    } : null,
                                    type: Object(H.a)(a.type) || y.a.Live
                                },
                                key: a.id,
                                trackingMedium: i,
                                trackingContent: r,
                                tagListProps: o
                            })
                        });
                        return d.length > 0 ? u.createElement("div", null, u.createElement(W.a, {
                            languageCode: this.props.languageCode
                        }), u.createElement(G.Tb, {
                            gutterSize: G.Vb.Small,
                            childWidth: G.Ub.Large,
                            placeholderItems: 20
                        }, d, t)) : null
                    }, t
                }(u.Component),
                z = Object(m.compose)(Object(f.a)(M, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                languages: [e.languageCode],
                                platformType: e.platformType,
                                isTagsExperiment: Object(_.a)()
                            }
                        }
                    }
                }), Object(E.b)("PopularInternationalSection", {
                    autoReportInteractive: !0
                }))(U),
                q = {
                    "/directory/all": "all",
                    "/directory/all/:encodedLanguage": "all",
                    "/directory/all/xbox": "xbox",
                    "/directory/all/xb1": "xbox",
                    "/directory/all/ps4": "ps4"
                },
                X = n("yI6f"),
                $ = n("T2RZ"),
                Q = n("V6sb"),
                Z = "directory-first-item",
                J = "directory-container",
                K = Object($.a)(x.PageviewMedium.Browse, X.b.Live, X.c.BrowseLiveChannels)(h.a);

            function Y(e) {
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
                        }, t.onResize = function(e) {
                            t.setState({
                                directoryWidth: e
                            })
                        }, t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + J + '"]'),
                                t = document.querySelector('[data-target="' + Z + '"]'),
                                n = document.querySelector("#" + I.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            t.props.removeTagFilter(e);
                            var n = {
                                section: O.a.LiveChannels,
                                tagPosition: t.props.tagFilters.length - 1,
                                searchEvent: !0,
                                tagId: e.id,
                                dismiss: !0
                            };
                            Object(O.b)(n)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(I.b.directory).length && N.a.display(I.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentWillMount = function() {
                        I.g.addListener(I.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), I.g.removeListener(I.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.tagFilters.length > D.a) return u.createElement(P.a, {
                            errorType: P.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading && !this.props.data.streams) return u.createElement(G.Ya, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return u.createElement(g.a, {
                            message: Object(p.d)("Error loading data.", "DirectoryPopularPage")
                        });
                        if (this.props.data.streams && this.props.data.streams.edges && 0 === this.props.data.streams.edges.length) return u.createElement(P.a, {
                            errorType: P.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = null,
                            n = null;
                        if ("en" !== this.props.languageCode) {
                            var a = {
                                color: G.O.Base
                            };
                            n = u.createElement(G.Wa, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(G.W, d.__assign({
                                type: G.Nb.H4
                            }, a), Object(p.d)("All Channels", "PopularInternationalSection"))), this.props.tagFilters.length || this.props.languageTags.length || (t = u.createElement(z, {
                                directoryWidth: this.state.directoryWidth,
                                languageCode: this.props.languageCode,
                                platformType: q[decodeURIComponent(this.props.match.path)] || "all",
                                addTagFilter: this.props.addTagFilter,
                                tagFilters: this.props.tagFilters,
                                scrollToTop: this.context.scrollToTop
                            }))
                        }
                        var i = x.PageviewMedium.Browse,
                            r = Y(this.props.data).map(function(t, n) {
                                var a = t && t.node;
                                return a && a.broadcaster && a.broadcaster.id ? u.createElement("div", {
                                    key: a.id,
                                    "data-target": n ? "" : Z,
                                    style: {
                                        order: n
                                    }
                                }, u.createElement(G.Wa, {
                                    margin: {
                                        bottom: 2
                                    },
                                    "data-target": "directory-game__card_container"
                                }, u.createElement(K, {
                                    context: h.b.MixedGameAndChannelList,
                                    title: a.title || Object(p.d)("Untitled Broadcast", "DirectoryGamePage"),
                                    linkTo: {
                                        pathname: "/" + a.broadcaster.login,
                                        state: {
                                            content: x.PageviewContent.Live,
                                            content_index: n,
                                            medium: i
                                        }
                                    },
                                    thumbnailImageProps: {
                                        src: a.previewImageURL || p.a.defaultStreamPreviewURL,
                                        alt: Object(p.d)("{displayName} cover image", {
                                            displayName: a.broadcaster.login || ""
                                        }, "DirectoryGamePage")
                                    },
                                    currentViewerCount: a.viewersCount || 0,
                                    channelDisplayName: a.broadcaster.displayName || "",
                                    channelLinkTo: {
                                        pathname: "/" + a.broadcaster.login + "/videos",
                                        state: {
                                            medium: i,
                                            content: x.PageviewContent.Live,
                                            content_index: n
                                        }
                                    },
                                    channelLogin: a.broadcaster.login || "",
                                    gameTitle: a.game && a.game.name || "",
                                    gameTitleLinkTo: {
                                        pathname: Object(S.c)(a.game && a.game.name || ""),
                                        state: {
                                            medium: i,
                                            content: x.PageviewContent.Live,
                                            content_index: n
                                        }
                                    },
                                    gameBoxArtImageProps: {
                                        src: a.game && a.game.boxArtURL || p.a.defaultBoxArtURL,
                                        alt: a.game && a.game.name || ""
                                    },
                                    "data-a-target": "card-" + n,
                                    "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                    streamType: Object(H.a)(a.type) || y.a.Live,
                                    channelImageProps: {
                                        src: a.broadcaster.profileImageURL || "",
                                        alt: a.broadcaster.displayName || ""
                                    },
                                    tagListProps: Object(j.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: O.a.LiveChannels,
                                        scrollToTop: e.context.scrollToTop
                                    }),
                                    trackingProps: {
                                        category: a.game ? a.game.id : void 0,
                                        categoryName: a.game ? a.game.displayName : void 0,
                                        itemPosition: n,
                                        rowPosition: 0,
                                        channelID: a.broadcaster.id || void 0
                                    }
                                }))) : null
                            }),
                            o = !(this.props.data.loading || this.props.data.error || !this.props.data.streams || !this.props.data.streams.pageInfo || !this.props.data.streams.pageInfo.hasNextPage);
                        return u.createElement(G.Wa, {
                            flexShrink: 0,
                            "data-target": J
                        }, u.createElement(L.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), t, n, u.createElement(G.Tb, {
                            gutterSize: G.Vb.Small,
                            childWidth: G.Ub.Large,
                            placeholderItems: 20
                        }, u.createElement(T.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: I.d.directory,
                            slotID: I.b.directory.rectangle,
                            adSize: I.c.directory.rectangle,
                            targeting: {
                                pagetype: I.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), r), u.createElement(b.a, {
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
                te = Object(m.compose)(Object(f.a)(Q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: q[decodeURIComponent(e.match.path)] || "all",
                                languages: [],
                                tags: e.languageTags.concat(e.tagFilters.map(function(e) {
                                    return e.id
                                }))
                            }
                        }
                    },
                    props: function(e) {
                        return d.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    i = t.streams,
                                    r = i && i.edges && i.edges[i.edges.length - 5];
                                return n({
                                    query: Q,
                                    variables: d.__assign({}, a, {
                                        cursor: r ? r.cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: d.__assign({}, n.streams, {
                                                edges: Object(C.c)(Y(e), Y(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.b)("DirectoryPopularPage", {
                    destination: w.a.DirectoryPopular
                }), Object(k.a)({
                    location: x.PageviewLocation.DirectoryPopular
                }))(ee);
            var ne = Object(a.connect)(function(e) {
                    return {
                        languageCode: Object(r.b)(e),
                        languageTags: Object(l.b)(e),
                        lastBrowsePath: e.browse.lastBrowsePath,
                        sideNavExpanded: e.ui.sideNavExpanded,
                        tagFilters: Object(s.a)(e)
                    }
                }, function(e) {
                    return Object(i.bindActionCreators)({
                        addTagFilter: o.f,
                        changeLastBrowsePath: o.h,
                        removeTagFilter: o.j
                    }, e)
                })(te),
                ae = n("Zx5c"),
                ie = "directory-container";

            function re(e) {
                var t = e.streams && e.streams.edges;
                return t ? t.filter(function(e) {
                    return e && e.node && e.node.id
                }) : []
            }
            var oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsCreated: 0
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + ie + '"]'),
                                t = document.querySelector('[data-target="' + V.a + '"]'),
                                n = document.querySelector("#" + I.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            t.props.removeTagFilter(e)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsCreated + 1;
                                return t === Object.keys(I.b.directory).length && N.a.display(I.b.directory.banner), {
                                    numSlotsCreated: t
                                }
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentWillMount = function() {
                        I.g.addListener(I.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        I.g.removeListener(I.e, this.onSlotAdded)
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.tagFilters.length > D.a) return u.createElement(P.a, {
                            errorType: P.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (this.props.data.loading && !this.props.data.streams) return u.createElement(G.Ya, {
                            fillContent: !0
                        });
                        if (this.props.data.error) return u.createElement(g.a, {
                            message: Object(p.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                        });
                        if (!this.props.data.streams) return u.createElement(g.a, {
                            message: Object(p.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                        });
                        if (this.props.data.streams.edges && 0 === this.props.data.streams.edges.length) return u.createElement(P.a, {
                            errorType: P.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t, n = re(this.props.data).filter(function(e) {
                            var t = e.node;
                            return t && t.broadcaster && t.broadcaster.login && t.broadcaster.id
                        }).map(function(t, n) {
                            var a = t && t.node;
                            if (a) {
                                var i = {
                                    id: a.id,
                                    title: a.title || "",
                                    viewersCount: a.viewersCount || 0,
                                    previewImageURL: a.previewImageURL || p.a.defaultStreamPreviewURL,
                                    broadcaster: a.broadcaster ? {
                                        id: a.broadcaster.id,
                                        login: a.broadcaster.login,
                                        displayName: a.broadcaster.displayName,
                                        roles: null,
                                        profileImageURL: a.broadcaster.profileImageURL
                                    } : null,
                                    game: a.game ? {
                                        id: a.game.id,
                                        boxArtURL: a.game.boxArtURL || p.a.defaultBoxArtURL,
                                        name: a.game.name
                                    } : null,
                                    type: Object(H.a)(a.type) || y.a.Live
                                };
                                return u.createElement(V.b, {
                                    directoryType: R.a.Communities,
                                    streamIndex: n,
                                    streamNode: i,
                                    key: a.id,
                                    trackingMedium: x.PageviewMedium.Browse,
                                    tagListProps: Object(j.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.props.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: O.a.LiveChannels,
                                        scrollToTop: e.context.scrollToTop
                                    })
                                })
                            }
                        });
                        if (n.length > 0) {
                            var a = G.Ub.Large,
                                i = !(this.props.data.loading || this.props.data.error || !this.props.data.streams.pageInfo || !this.props.data.streams.pageInfo.hasNextPage);
                            t = u.createElement(G.Wa, null, u.createElement(G.Tb, {
                                gutterSize: G.Vb.Small,
                                childWidth: a,
                                placeholderItems: 20
                            }, u.createElement(T.a, {
                                injectStyles: {
                                    textAlign: "center",
                                    marginBottom: 20,
                                    order: 999,
                                    width: 300,
                                    height: 250
                                },
                                adUnit: I.d.directory,
                                slotID: I.b.directory.rectangle,
                                adSize: I.c.directory.rectangle,
                                targeting: {
                                    pagetype: I.a.games
                                },
                                key: -1,
                                autoEnable: !1
                            }), n), u.createElement(b.a, {
                                enabled: i,
                                loadMore: this.props.loadMore,
                                pixelThreshold: 200
                            }))
                        } else {
                            var r = Object(p.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                            t = u.createElement(G.Wa, {
                                display: G.X.Flex,
                                alignItems: G.f.Center,
                                justifyContent: G.Va.Center,
                                fullWidth: !0,
                                padding: {
                                    y: 3
                                }
                            }, u.createElement(G.W, {
                                color: G.O.Alt2,
                                fontSize: G.Ba.Size4,
                                italic: !0
                            }, r))
                        }
                        return u.createElement(G.Wa, {
                            "data-target": ie
                        }, u.createElement(L.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), u.createElement(T.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 30
                            },
                            adUnit: I.d.directory,
                            slotID: I.b.directory.banner,
                            adSize: I.c.directory.banner,
                            targeting: {
                                pagetype: I.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), u.createElement(W.a, {
                            languageCode: this.props.match.params.encodedLanguage
                        }), t)
                    }, t.prototype.onRender = function() {
                        this.props.data.loading || this.props.latencyTracking.reportInteractive()
                    }, t.contextTypes = {
                        scrollToTop: c.func
                    }, t
                }(u.Component),
                se = Object(m.compose)(Object(f.a)(ae, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage],
                                tags: e.tagFilters.map(function(e) {
                                    return e.id
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return d.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.streams,
                                    i = t.variables,
                                    r = a && a.edges && a.edges[a.edges.length - 5];
                                return n({
                                    query: ae,
                                    variables: d.__assign({}, i, {
                                        cursor: r ? r.cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: d.__assign({}, n.streams, {
                                                edges: Object(C.c)(re(e), re(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.b)("DirectoryPopularByLanguagePage", {
                    destination: w.a.DirectoryPopularByLanguage
                }), Object(k.a)({
                    location: x.PageviewLocation.DirectoryPopular,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                }))(oe);
            var le = Object(a.connect)(function(e) {
                return {
                    tagFilters: Object(s.a)(e)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    addTagFilter: o.f,
                    removeTagFilter: o.j
                }, e)
            })(se);
            n.d(t, "DirectoryPopularPage", function() {
                return ne
            }), n.d(t, "DirectoryPopularByLanguagePage", function() {
                return le
            })
        },
        MJbm: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = (n("efEE"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.logger = r.p.logger.withCategory("resize-detector"), t.onScroll = function() {
                            var e = t.container,
                                n = e.offsetWidth,
                                a = e.offsetHeight,
                                i = e.offsetLeft,
                                r = e.offsetTop;
                            t.logger.debug("Resize Detector -- onScroll"), n === t.width && a === t.height && r === t.top && i === t.left || (t.width = n, t.height = a, t.props.onResize(n, a, r, i)), t.reset()
                        }, t.setGrowDivRef = function(e) {
                            return t.growDiv = e
                        }, t.setGrowChildDivRef = function(e) {
                            return t.growChildDiv = e
                        }, t.setShrinkDivRef = function(e) {
                            return t.shrinkDiv = e
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement("div", {
                            className: "resize-detector"
                        }, i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setGrowDivRef
                        }, i.createElement("div", {
                            className: "resize-detector__grow",
                            ref: this.setGrowChildDivRef
                        })), i.createElement("div", {
                            className: "resize-detector",
                            ref: this.setShrinkDivRef
                        }, i.createElement("div", {
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
                            n = this.growChildDiv.style;
                        n.width = "100000px", n.height = "100000px", e.scrollLeft = 1e5, e.scrollTop = 1e5, t.scrollLeft = 1e5, t.scrollTop = 1e5
                    }, t
                }(i.Component));
            n.d(t, "a", function() {
                return o
            })
        },
        QV0j: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n("oB8h"),
                i = function(e) {
                    switch (e) {
                        case a.a.Live:
                            return a.a.Live;
                        case a.a.Premiere:
                            return a.a.Premiere;
                        case a.a.Rerun:
                            return a.a.Rerun;
                        case a.a.WatchParty:
                            return a.a.WatchParty;
                        default:
                            return null
                    }
                }
        },
        RFKy: function(e, t, n) {},
        V6sb: function(e, t, n) {
            var a = {
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
                                                value: "browsePagePopularStreamsWithTagsEdge2"
                                            },
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 392
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-with-tags-edge.gql"\nquery BrowsePage_Popular($limit: Int $cursor: Cursor $platformType: PlatformType $languages: [Language!] $tags: [String!]) {\nstreams(first: $limit after: $cursor platformType: $platformType languages: $languages tags: $tags) {\nedges {\n...browsePagePopularStreamsWithTagsEdge2\n}\npageInfo {\nhasNextPage\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("zXFg").definitions)), e.exports = a
        },
        VW9G: function(e, t, n) {
            "use strict";
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("oA7Y"),
                o = n("Igt5"),
                s = n("X7a7"),
                l = n("mrSG"),
                d = n("q1tI"),
                c = n("yR8l"),
                u = n("fVj5"),
                m = n("coeN"),
                p = n("Ue10"),
                g = n("fbOE"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.wrapText = function(e) {
                            var n = t.props,
                                a = n.addTagFilterDirectory,
                                i = n.updateLanguageTags,
                                r = n.addTagFilterBrowse,
                                o = n.data,
                                s = n.directoryName,
                                l = o && o.contentTag;
                            if (!l) return e;
                            var c = function() {
                                s ? a(l, s) : r(l)
                            };
                            return l.isLanguageTag && (c = function() {
                                i(l.id, !0)
                            }), d.createElement(p.U, {
                                onClick: c,
                                "data-test-selector": "international-section-header-link"
                            }, d.createElement("strong", null, e))
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.languageCode;
                        return Object(u.a)() ? d.createElement(p.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(p.W, {
                            type: p.Nb.H4,
                            color: p.O.Base,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header-tags"
                        }, Object(m.a)(e, this.wrapText))) : d.createElement(p.Wa, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(p.W, {
                            type: p.Nb.H4,
                            color: p.O.Alt2,
                            fontSize: p.Ba.Size5,
                            transform: p.Mb.Uppercase,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header"
                        }, Object(m.b)(e)))
                    }, t
                }(d.Component),
                v = Object(c.a)(g, {
                    options: function(e) {
                        var t = Object(m.c)(e.languageCode);
                        return {
                            skip: !Object(u.a)() || !t,
                            variables: {
                                id: t
                            }
                        }
                    }
                })(h);
            var b = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    addTagFilterBrowse: r.f,
                    addTagFilterDirectory: o.e,
                    updateLanguageTags: s.c
                }, e)
            })(v);
            n.d(t, "a", function() {
                return b
            })
        },
        XA5B: function(e, t, n) {},
        YGU1: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!] $isTagsExperiment: Boolean!) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\n...browsePagePopularStreamsEdge @skip(if: $isTagsExperiment)\n...browsePagePopularStreamsWithTagsEdge @include(if: $isTagsExperiment)\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("hKEm").definitions)), e.exports = a
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var a, i, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                d = n("q1tI"),
                c = n("/7QA"),
                u = n("oB8h"),
                m = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var p = ((a = {})[u.a.Live] = "stream-type-indicator--live", a[u.a.Premiere] = "stream-type-indicator--premiere", a[u.a.Rerun] = "stream-type-indicator--rerun", a[u.a.WatchParty] = "stream-type-indicator--rerun", a),
                g = ((i = {})[u.a.Premiere] = m.ob.VideoPremiere, i[u.a.Rerun] = m.ob.VideoRerun, i[u.a.WatchParty] = m.ob.VideoRerun, i),
                h = ((r = {})[u.a.Premiere] = m.pb.Live, r[u.a.Rerun] = m.pb.Inherit, r[u.a.WatchParty] = m.pb.Inherit, r),
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
                            display: m.X.Flex
                        }, d.createElement(m.Wa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(m.W, {
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
                        }) : this.props.type === u.a.Live ? d.createElement(m.Wa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.nb, {
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
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return v
            })
        },
        Zx5c: function(e, t, n) {
            var a = {
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
                                                value: "browsePagePopularStreamsWithTagsEdge"
                                            },
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
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 336
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery PopularPage_StreamsByLanguage($limit: Int $languages: [Language!] $cursor: Cursor $tags: [String!]) {\nstreams(first: $limit after: $cursor languages: $languages tags: $tags) {\nedges {\n...browsePagePopularStreamsWithTagsEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("hKEm").definitions)), e.exports = a
        },
        cRsL: function(e, t, n) {},
        coeN: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return i
            }), n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return s
            });
            var a = n("/7QA"),
                i = function(e) {
                    switch (e) {
                        case "ar":
                            return Object(a.d)("Channels in Arabic", "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(a.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(a.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(a.d)("Channels in Czech", "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(a.d)("Channels in Danish", "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(a.d)("Channels in German", "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(a.d)("Channels in Greek", "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(a.d)("Channels in Spanish", "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(a.d)("Channels in Finnish", "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(a.d)("Channels in French", "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(a.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(a.d)("Channels in Italian", "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(a.d)("Channels in Japanese", "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(a.d)("Channels in Korean", "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(a.d)("Channels in Dutch", "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(a.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(a.d)("Channels in Polish", "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(a.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(a.d)("Channels in Russian", "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(a.d)("Channels in Slovak", "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(a.d)("Channels in Swedish", "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(a.d)("Channels in Thai", "DirectoryInternationalSectionHeader");
                        case "tr":
                            return Object(a.d)("Channels in Turkish", "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(a.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(a.d)("Channels in Chinese", "DirectoryInternationalSectionHeader");
                        default:
                            return Object(a.d)("Channels in English", "DirectoryInternationalSectionHeader")
                    }
                };

            function r(e) {
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
                            return Object(a.d)("Channels in <x:bold>Arabic</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "asl":
                            return Object(a.d)("Channels in <x:bold>American Sign Language</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "bg":
                            return Object(a.d)("Channels in <x:bold>Bulgarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "cs":
                            return Object(a.d)("Channels in <x:bold>Czech</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "da":
                            return Object(a.d)("Channels in <x:bold>Danish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "de":
                            return Object(a.d)("Channels in <x:bold>German</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "el":
                            return Object(a.d)("Channels in <x:bold>Greek</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "es":
                            return Object(a.d)("Channels in <x:bold>Spanish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fi":
                            return Object(a.d)("Channels in <x:bold>Finnish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "fr":
                            return Object(a.d)("Channels in <x:bold>French</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "hu":
                            return Object(a.d)("Channels in <x:bold>Hungarian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "it":
                            return Object(a.d)("Channels in <x:bold>Italian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ja":
                            return Object(a.d)("Channels in <x:bold>Japanese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ko":
                            return Object(a.d)("Channels in <x:bold>Korean</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "nl":
                            return Object(a.d)("Channels in <x:bold>Dutch</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "no":
                            return Object(a.d)("Channels in <x:bold>Norwegian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pl":
                            return Object(a.d)("Channels in <x:bold>Polish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "pt":
                            return Object(a.d)("Channels in <x:bold>Portuguese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "ru":
                            return Object(a.d)("Channels in <x:bold>Russian</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sk":
                            return Object(a.d)("Channels in <x:bold>Slovak</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "sv":
                            return Object(a.d)("Channels in <x:bold>Swedish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "th":
                            return Object(a.d)("Channels in <x:bold>Thai</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeaer");
                        case "tr":
                            return Object(a.d)("Channels in <x:bold>Turkish</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "vi":
                            return Object(a.d)("Channels in <x:bold>Vietnamese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        case "zh":
                            return Object(a.d)("Channels in <x:bold>Chinese</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader");
                        default:
                            return Object(a.d)("Channels in <x:bold>English</x:bold>", {
                                "x:bold": t
                            }, "DirectoryInternationalSectionHeader")
                    }
                }
        },
        efEE: function(e, t, n) {},
        fbOE: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nquery InternationalHeader_Tag($id: ID!) {\ncontentTag(id: $id) {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
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
        hKEm: function(e, t, n) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\nfragment browsePagePopularStreamsWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        hX9f: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9C/b"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("GFmA"),
                d = n("kduP"),
                c = n("2xye"),
                u = n("rShu"),
                m = n("yI6f"),
                p = n("T2RZ"),
                g = n("Ue10"),
                h = (n("zrz1"), Object(p.a)(c.PageviewMedium.Game, m.b.Live, m.c.BrowseInCategoryChannels)(l.a)),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var i = t.props.trackingContent ? t.props.trackingContent : c.PageviewContent.Live,
                                r = c.PageviewMedium.Game;
                            t.props.trackingMedium && (r = t.props.trackingMedium);
                            var o = t.props.history.location && t.props.history.location.state || {};
                            return {
                                pathname: e,
                                state: a.__assign({}, o, {
                                    medium: r,
                                    content: i,
                                    content_index: n
                                })
                            }
                        }, t.shouldShowGame = function(e) {
                            return t.props.directoryType !== u.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: this.props.directoryType === u.a.Games ? l.b.SingleGameList : l.b.MixedGameAndChannelList,
                            title: e.title || this.untitledBroadcastString,
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            thumbnailImageProps: {
                                src: e.previewImageURL || s.a.defaultStreamPreviewURL,
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
                            gameTitleLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: e.type,
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
                        }, i.createElement(g.Wa, {
                            className: "stream-thumbnail__card",
                            position: g.eb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, i.createElement(h, a.__assign({}, n, {
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
                b = Object(o.compose)(r.a)(v);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, "b", function() {
                return b
            })
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        m493: function(e, t, n) {},
        vDRX: function(e, t, n) {},
        zXFg: function(e, t, n) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "browsePagePopularStreamsWithTagsEdge2"
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
                    end: 353
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsWithTagsEdge2 on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var i = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !i[t] && (i[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = a
        },
        zrz1: function(e, t, n) {}
    }
]);