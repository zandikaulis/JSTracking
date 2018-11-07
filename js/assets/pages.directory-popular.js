(window.webpackJsonp = window.webpackJsonp || []).push([
    [129], {
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
                        return i.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, i.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.hb.Relative
                        }, i.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, i.createElement(s.S, a.__assign({}, e))), i.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: s.f.Center,
                            background: s.r.Overlay,
                            color: s.O.Overlay,
                            display: s.X.Flex,
                            justifyContent: s.Wa.Center,
                            position: s.hb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(s.qb, {
                            asset: s.rb.Play,
                            type: s.sb.Inherit
                        }))), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(s.W, null, this.props.gameChange.label)), i.createElement(s.Xa, {
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
                        return i.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(u.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.rb.ViewerList
                        }, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, i.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(s.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, i.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, i.createElement(c.b, null, i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
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
                    return i.createElement(s.Xa, null, i.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return i.createElement(s.Pa, {
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
                    var t = i.createElement(s.Cb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
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
                    return i.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, i.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Sb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, i.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                w = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(s.kb, {
                        borderRadius: s.x.None,
                        size: s.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(C, a.__assign({}, e.topBar))), r = 3), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                x = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(s.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(s.Cb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, i.createElement(s.W, null, e.value)) : i.createElement(s.Cb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(s.W, null, e.value))
                }),
                S = n("GnwI"),
                T = (n("B3R5"), function(e) {
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
                        }), i.createElement(s.Cb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
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
                N = Object(S.b)("PreviewCardThumbnail")(T),
                I = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(s.Xa, {
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
                        type: s.Tb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                L = n("H1ft"),
                P = n("ZbA5"),
                E = n("QVaV"),
                O = n("hyVY"),
                D = n("MXoD"),
                _ = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(k || (k = {}));
            var F, A, j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? s.rb.Unlock : s.rb.Lock;
                    return i.createElement(s.Xa, null, !t && i.createElement(s.Cb, {
                        background: s.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: s.gc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: s.Pb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: s.f.Center,
                        alignContent: s.e.Center,
                        flexDirection: s.Aa.Column,
                        flexWrap: s.Ba.Wrap,
                        justifyContent: s.Wa.Center,
                        "data-test-selector": k.LockSelector
                    }, i.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": k.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(s.Xa, null, i.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(s.Cb, {
                        display: s.X.InlineFlex,
                        position: s.hb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: s.gc.Default,
                        fontSize: s.Ca.Size6,
                        background: s.r.Overlay,
                        borderRadius: s.x.Medium,
                        color: s.O.Overlay
                    }, i.createElement(s.Wb, {
                        direction: this.props.attachTop ? s.Yb.Bottom : s.Yb.Top,
                        align: s.Xb.Right,
                        label: n
                    }, i.createElement(s.qb, {
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

            function B(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(F || (F = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
            var G = function(e) {
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
                        }, Object(b.a)(this.props)), i.createElement(s.Cb, {
                            position: s.hb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(s.U, {
                            to: Object(D.a)(this.getTrackingContext(g.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: R(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(w, {
                            topLeft: i.createElement(P.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(x, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : R(this.props) ? i.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(x, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(x, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(x, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(x, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : B(this.props) ? i.createElement(w, {
                            topLeft: i.createElement(x, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: s.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(x, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? i.createElement(x, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return R(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return R(this.props) || B(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(f, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(g.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": F.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(f, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(g.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": F.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(E.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(D.a)(this.getTrackingContext(g.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), B(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : R(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(D.a)(this.getTrackingContext(g.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(D.a)(this.getTrackingContext(g.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(_.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return R(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(j, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!R(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === L.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case L.a.Balloon:
                                return i.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case L.a.Inline:
                                return i.createElement(h, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case L.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                V = Object(S.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(G);
            n.d(t, !1, function() {
                return F
            }), n.d(t, "b", function() {
                return A
            }), n.d(t, !1, function() {
                return G
            }), n.d(t, "a", function() {
                return V
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
        JTXL: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("/MKj"),
                i = n("fvjX"),
                r = n("kRBY"),
                o = n("oA7Y"),
                s = n("Igt5"),
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
                C = n("Bk78"),
                w = n("geRD"),
                x = n("kduP"),
                S = n("NvVO"),
                T = n("MPw5"),
                N = n("2xye"),
                I = n("Uive"),
                L = n("cTNz"),
                P = n("GnwI"),
                E = n("Bh3T"),
                O = n("bUox"),
                D = n("TCeE"),
                _ = n("AZIu"),
                F = n("x/sq"),
                A = n("vuN2"),
                j = n("5myU"),
                R = n("rShu"),
                B = n("VW9G"),
                G = n("hX9f"),
                V = n("QV0j"),
                M = n("Ue10"),
                H = n("YGU1"),
                W = Object(C.a)(3e5),
                X = Object(A.a)();
            var U = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return d.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                        var t = this.props.directoryWidth,
                            n = N.PageviewMedium.Browse,
                            a = N.PageviewContent.LocalPopularChannel,
                            i = this.props.data.streams.edges || [];
                        if (t && t > 0) {
                            var r = Object(j.a)(t, 300, 1);
                            if (r - 1 < i.length) {
                                i = i.slice(0, r - 0)
                            }
                        }
                        var o = i.filter(function(e) {
                            return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                        }).map(function(t, i) {
                            if (!t || !t.node) return null;
                            var r = t.node,
                                o = Object(F.a)({
                                    tags: r.tags,
                                    section: _.a.LiveChannels,
                                    onClickTag: e.props.addTagFilter,
                                    tagFilters: e.props.tagFilters,
                                    scrollToTop: e.props.scrollToTop
                                });
                            return u.createElement(G.b, {
                                directoryType: R.a.Communities,
                                streamIndex: i,
                                streamNode: {
                                    __typename: "Stream",
                                    id: r.id,
                                    title: r.title || "",
                                    viewersCount: r.viewersCount || 0,
                                    previewImageURL: r.previewImageURL || p.a.defaultStreamPreviewURL,
                                    broadcaster: r.broadcaster ? {
                                        __typename: "User",
                                        id: r.broadcaster.id,
                                        login: r.broadcaster.login,
                                        displayName: r.broadcaster.displayName,
                                        roles: null,
                                        profileImageURL: r.broadcaster.profileImageURL || p.a.defaultAvatarURL
                                    } : null,
                                    game: r.game ? {
                                        __typename: "Game",
                                        id: r.game.id,
                                        boxArtURL: r.game.boxArtURL || p.a.defaultBoxArtURL,
                                        name: r.game.name
                                    } : null,
                                    type: Object(V.a)(r.type) || y.a.Live
                                },
                                key: r.id,
                                trackingMedium: n,
                                trackingContent: a,
                                tagListProps: o
                            })
                        });
                        return o.length > 0 ? u.createElement("div", null, u.createElement(B.a, {
                            languageCode: this.props.languageCode
                        }), u.createElement(M.Zb, {
                            gutterSize: M.bc.Small,
                            childWidth: M.ac.Large,
                            placeholderItems: 20
                        }, o)) : null
                    }, t
                }(u.Component),
                z = Object(m.compose)(Object(f.a)(H, {
                    options: function(e) {
                        return {
                            fetchPolicy: X() ? W() : "network-only",
                            variables: {
                                limit: 10,
                                languages: [e.languageCode],
                                platformType: e.platformType
                            }
                        }
                    }
                }), Object(P.b)("PopularInternationalSection", {
                    autoReportInteractive: !0
                }))(U),
                q = {
                    "/directory/all": "all",
                    "/directory/all/:encodedLanguage": "all",
                    "/directory/all/xbox": "xbox",
                    "/directory/all/xb1": "xbox",
                    "/directory/all/ps4": "ps4"
                },
                Q = n("yI6f"),
                $ = n("T2RZ"),
                Y = n("V6sb"),
                J = "directory-first-item",
                Z = "directory-container",
                K = Object($.a)(N.PageviewMedium.Browse, Q.b.Live, Q.c.BrowseLiveChannels)(h.a),
                ee = 0;

            function te(e) {
                var t = e.streams && e.streams.edges;
                return t ? t.filter(function(e) {
                    return e && e.node && e.node.id
                }) : []
            }
            var ne = Object(C.a)(3e5),
                ae = Object(A.a)();
            var ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            numSlotsAdded: 0,
                            directoryWidth: -1
                        }, t.onResize = function(e) {
                            e !== t.state.directoryWidth && (clearTimeout(ee), ee = setTimeout(function() {
                                t.setState({
                                    directoryWidth: e
                                })
                            }, 50))
                        }, t.onWindowResize = function() {
                            return requestAnimationFrame(t.updateDisplayAdOrder)
                        }, t.updateDisplayAdOrder = function() {
                            var e = document.querySelector('[data-target="' + Z + '"]'),
                                t = document.querySelector('[data-target="' + J + '"]'),
                                n = document.querySelector("#" + L.b.directory.rectangle);
                            if (t && e && n) {
                                var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                                n.style.order !== a && "0" !== a && (n.style.order = a)
                            }
                        }, t.addTagFilter = function(e) {
                            t.props.addTagFilter(e, l.a.LiveChannels)
                        }, t.removeLastTag = function() {
                            var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                            t.props.removeTagFilter(e, l.a.LiveChannels);
                            var n = {
                                section: _.a.LiveChannels,
                                tagPosition: t.props.tagFilters.length - 1,
                                searchEvent: !0,
                                tagId: e.id,
                                dismiss: !0
                            };
                            Object(_.b)(n)
                        }, t.onSlotAdded = function() {
                            t.setState(function(e) {
                                var t = e.numSlotsAdded + 1;
                                return t === Object.keys(L.b.directory).length && T.a.display(L.b.directory.banner), {
                                    numSlotsAdded: t
                                }
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentWillMount = function() {
                        L.g.addListener(L.e, this.onSlotAdded)
                    }, t.prototype.componentDidMount = function() {
                        p.p.setPageTitle(Object(p.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                    }, t.prototype.componentDidUpdate = function() {
                        this.onRender()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onWindowResize), L.g.removeListener(L.e, this.onSlotAdded)
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.tagFilters.length > D.a) return u.createElement(O.a, {
                            errorType: O.b.TooManyTags,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        if (!this.props.data.loading && !this.props.data.streams || this.props.data.error) return u.createElement(g.a, {
                            message: Object(p.d)("Error loading data.", "DirectoryPopularPage")
                        });
                        if (this.props.data.streams && this.props.data.streams.edges && 0 === this.props.data.streams.edges.length) return u.createElement(O.a, {
                            errorType: O.b.NoResults,
                            onClickRemoveLastTag: this.removeLastTag,
                            tagFilters: this.props.tagFilters
                        });
                        var t = null,
                            n = null,
                            a = this.props.languageCode.split("-")[0];
                        if ("en" !== a) {
                            var i = {
                                color: M.O.Base
                            };
                            n = u.createElement(M.Xa, {
                                margin: {
                                    bottom: 2
                                }
                            }, u.createElement(M.W, d.__assign({
                                type: M.Tb.H4
                            }, i), Object(p.d)("All Channels", "PopularInternationalSection"))), this.props.tagFilters.length || this.props.languageTagFilters.length || (t = u.createElement(z, {
                                directoryWidth: this.state.directoryWidth,
                                languageCode: a,
                                platformType: q[decodeURIComponent(this.props.match.path)] || "all",
                                addTagFilter: this.addTagFilter,
                                tagFilters: this.props.tagFilters,
                                scrollToTop: this.context.scrollToTop
                            }))
                        }
                        var r = N.PageviewMedium.Browse,
                            o = te(this.props.data).map(function(t, n) {
                                var a = t && t.node;
                                return a && a.broadcaster && a.broadcaster.id ? u.createElement("div", {
                                    key: a.id,
                                    "data-target": n ? "" : J,
                                    style: {
                                        order: n
                                    }
                                }, u.createElement(M.Xa, {
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
                                            content: N.PageviewContent.Live,
                                            content_index: n,
                                            medium: r
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
                                            medium: r,
                                            content: N.PageviewContent.Live,
                                            content_index: n
                                        }
                                    },
                                    channelLogin: a.broadcaster.login || "",
                                    gameTitle: a.game && a.game.name || "",
                                    gameTitleLinkTo: {
                                        pathname: Object(x.c)(a.game && a.game.name || ""),
                                        state: {
                                            medium: r,
                                            content: N.PageviewContent.Live,
                                            content_index: n
                                        }
                                    },
                                    gameBoxArtImageProps: {
                                        src: a.game && a.game.boxArtURL || p.a.defaultBoxArtURL,
                                        alt: a.game && a.game.name || ""
                                    },
                                    "data-a-target": "card-" + n,
                                    "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                    streamType: Object(V.a)(a.type) || y.a.Live,
                                    channelImageProps: {
                                        src: a.broadcaster.profileImageURL || "",
                                        alt: a.broadcaster.displayName || ""
                                    },
                                    tagListProps: Object(F.a)({
                                        tags: t && t.node && t.node.tags,
                                        onClickTag: e.addTagFilter,
                                        tagFilters: e.props.tagFilters,
                                        section: _.a.LiveChannels,
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
                            s = !(this.props.data.loading || this.props.data.error || !this.props.data.streams || !this.props.data.streams.pageInfo || !this.props.data.streams.pageInfo.hasNextPage);
                        return u.createElement(M.Xa, {
                            flexShrink: 0,
                            "data-target": Z
                        }, u.createElement(E.b, {
                            addPaddingWhenPlayerIsPersisting: !0
                        }), t, n, u.createElement(M.Zb, {
                            gutterSize: M.bc.Small,
                            childWidth: M.ac.Large,
                            placeholderItems: 20
                        }, u.createElement(I.a, {
                            key: -1,
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: L.d.directory,
                            slotID: L.b.directory.rectangle,
                            adSize: L.c.directory.rectangle,
                            targeting: {
                                pagetype: L.a.games
                            },
                            slotRendered: this.updateDisplayAdOrder,
                            autoEnable: !1
                        }), o), u.createElement(b.a, {
                            enabled: s,
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
                re = Object(m.compose)(Object(f.a)(Y, {
                    options: function(e) {
                        return {
                            fetchPolicy: ae() ? ne() : "network-only",
                            variables: {
                                limit: 30,
                                platformType: q[decodeURIComponent(e.match.path)] || "all",
                                languages: [],
                                tags: e.languageTagFilters.concat(e.tagFilters.map(function(e) {
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
                                    query: Y,
                                    variables: d.__assign({}, a, {
                                        cursor: r ? r.cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: d.__assign({}, n.streams, {
                                                edges: Object(w.c)(te(e), te(n))
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(P.b)("DirectoryPopularPage", {
                    destination: S.a.DirectoryPopular
                }), Object(k.a)({
                    location: N.PageviewLocation.DirectoryPopular
                }))(ie);
            var oe = Object(a.connect)(function(e) {
                return {
                    languageCode: Object(r.b)(e),
                    languageTagFilters: Object(l.c)(e),
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    tagFilters: Object(l.b)(e, l.a.LiveChannels)
                }
            }, function(e) {
                return Object(i.bindActionCreators)({
                    addTagFilter: s.e,
                    changeLastBrowsePath: o.d,
                    removeTagFilter: s.h
                }, e)
            })(re);
            n.d(t, "DirectoryPopularPage", function() {
                return oe
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
                r = n("Igt5"),
                o = n("X7a7"),
                s = n("mrSG"),
                l = n("q1tI"),
                d = n("yR8l"),
                c = n("moLQ"),
                u = n("/7QA");
            var m = function(e) {
                    return e
                },
                p = n("Ue10"),
                g = n("fbOE"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.wrapText = function(e) {
                            var n = t.props,
                                a = n.addTagFilter,
                                i = n.data,
                                r = n.directoryName,
                                o = n.updateLanguageTags,
                                s = i && i.contentTag;
                            if (!s) return e;
                            var d = function() {
                                return a(s, r || c.a.LiveChannels)
                            };
                            return s.isLanguageTag && (d = function() {
                                o(s.id, !0)
                            }), l.createElement(p.U, {
                                onClick: d,
                                "data-test-selector": "international-section-header-link"
                            }, l.createElement("strong", null, e))
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.languageCode;
                        return l.createElement(p.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(p.W, {
                            type: p.Tb.H4,
                            color: p.O.Base,
                            "data-a-target": "international-section-header",
                            "data-test-selector": "international-section-header-tags"
                        }, function(e, t) {
                            switch (void 0 === t && (t = m), e) {
                                case "ar":
                                    return Object(u.d)("Channels in <x:bold>Arabic</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "asl":
                                    return Object(u.d)("Channels in <x:bold>American Sign Language</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "bg":
                                    return Object(u.d)("Channels in <x:bold>Bulgarian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "cs":
                                    return Object(u.d)("Channels in <x:bold>Czech</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "da":
                                    return Object(u.d)("Channels in <x:bold>Danish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "de":
                                    return Object(u.d)("Channels in <x:bold>German</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "el":
                                    return Object(u.d)("Channels in <x:bold>Greek</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "es":
                                    return Object(u.d)("Channels in <x:bold>Spanish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "fi":
                                    return Object(u.d)("Channels in <x:bold>Finnish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "fr":
                                    return Object(u.d)("Channels in <x:bold>French</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "hu":
                                    return Object(u.d)("Channels in <x:bold>Hungarian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "it":
                                    return Object(u.d)("Channels in <x:bold>Italian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ja":
                                    return Object(u.d)("Channels in <x:bold>Japanese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ko":
                                    return Object(u.d)("Channels in <x:bold>Korean</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "nl":
                                    return Object(u.d)("Channels in <x:bold>Dutch</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "no":
                                    return Object(u.d)("Channels in <x:bold>Norwegian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "pl":
                                    return Object(u.d)("Channels in <x:bold>Polish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "pt":
                                    return Object(u.d)("Channels in <x:bold>Portuguese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "ru":
                                    return Object(u.d)("Channels in <x:bold>Russian</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "sk":
                                    return Object(u.d)("Channels in <x:bold>Slovak</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "sv":
                                    return Object(u.d)("Channels in <x:bold>Swedish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "th":
                                    return Object(u.d)("Channels in <x:bold>Thai</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeaer");
                                case "tr":
                                    return Object(u.d)("Channels in <x:bold>Turkish</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "vi":
                                    return Object(u.d)("Channels in <x:bold>Vietnamese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                case "zh":
                                    return Object(u.d)("Channels in <x:bold>Chinese</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader");
                                default:
                                    return Object(u.d)("Channels in <x:bold>English</x:bold>", {
                                        "x:bold": t
                                    }, "DirectoryInternationalSectionHeader")
                            }
                        }(e, this.wrapText)))
                    }, t
                }(l.Component),
                v = Object(d.a)(g, {
                    options: function(e) {
                        var t = function(e) {
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
                        }(e.languageCode);
                        return {
                            skip: !t,
                            variables: {
                                id: t
                            }
                        }
                    }
                })(h);
            var b = Object(a.connect)(null, function(e) {
                return Object(i.bindActionCreators)({
                    addTagFilter: r.e,
                    updateLanguageTags: o.c
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
                                                value: "browsePagePopularStreamsWithTagsEdge"
                                            },
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
                    end: 312
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/directory-popular/queries/popular-streams-edge.gql"\nquery BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!]) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\n...browsePagePopularStreamsWithTagsEdge\n}\n}\n}',
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
                g = ((i = {})[u.a.Premiere] = m.rb.VideoPremiere, i[u.a.Rerun] = m.rb.VideoRerun, i[u.a.WatchParty] = m.rb.VideoRerun, i),
                h = ((r = {})[u.a.Premiere] = m.sb.Live, r[u.a.Rerun] = m.sb.Inherit, r[u.a.WatchParty] = m.sb.Inherit, r),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return d.createElement(m.Cb, {
                            className: this.getClassNames(),
                            color: m.O.Overlay,
                            background: m.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: m.x.Small,
                            display: m.X.Flex
                        }, d.createElement(m.Xa, {
                            display: m.X.Flex,
                            alignItems: m.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), d.createElement(m.W, {
                            type: m.Tb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[p[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(m.Cb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === u.a.Live ? d.createElement(m.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.qb, {
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
        cRsL: function(e, t, n) {},
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
                    end: 352
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment browsePagePopularStreamsWithTagsEdge on StreamEdge {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\ngame {\nid\nname\ndisplayName\nboxArtURL(width: 40 height: 56)\n}\ntags {\n...tagFragment\n}\ntype\n}\n}',
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
                d = n("oB8h"),
                c = n("kduP"),
                u = n("2xye"),
                m = n("rShu"),
                p = n("QV0j"),
                g = n("yI6f"),
                h = n("T2RZ"),
                v = n("Ue10"),
                b = (n("zrz1"), Object(h.a)(u.PageviewMedium.Game, g.b.Live, g.c.BrowseInCategoryChannels)(l.a)),
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.untitledBroadcastString = Object(s.d)("Untitled Broadcast", "StreamThumbnail"), t.getLinkTo = function(e, n) {
                            var i = t.props.trackingContent ? t.props.trackingContent : u.PageviewContent.Live,
                                r = u.PageviewMedium.Game;
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
                            if (t.props.directoryType !== m.a.Games && t.props.streamNode.game) {
                                var n = t.props.streamNode.game[e];
                                if (n) return n
                            }
                            return ""
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.streamNode,
                            t = this.props.streamIndex;
                        if (!e.broadcaster) return null;
                        var n = {
                            context: l.b.SingleGameList,
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
                            gameTitleLinkTo: this.getLinkTo(Object(c.c)(this.shouldShowGame("name")), t),
                            gameBoxArtImageProps: {
                                src: this.shouldShowGame("boxArtURL") || s.a.defaultBoxArtURL,
                                alt: this.shouldShowGame("name")
                            },
                            streamType: Object(p.a)(e.type) || d.a.Live,
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
                        }, i.createElement(v.Xa, {
                            className: "stream-thumbnail__card",
                            position: v.hb.Relative,
                            margin: {
                                bottom: 2
                            },
                            "data-target": "directory-game__card_container"
                        }, i.createElement(b, a.__assign({}, n, {
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
                k = Object(o.compose)(r.a)(f);
            n.d(t, "a", function() {
                return "directory-first-item"
            }), n.d(t, !1, function() {
                return "directory-game__card_container"
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, "b", function() {
                return k
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