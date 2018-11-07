(window.webpackJsonp = window.webpackJsonp || []).push([
    [185], {
        "+Mtq": function(e, t, n) {},
        "0iXB": function(e, t, n) {},
        "3CMh": function(e, t, n) {
            "use strict";
            var i, r = n("TSYQ"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("XmgI"),
                c = n("4h+t"),
                l = n("x1M1"),
                d = n("Ue10");
            n("0iXB");
            ! function(e) {
                e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
            }(i || (i = {}));
            var u = function(e) {
                var t = e.bitsConfig && e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
                t || (t = Object(c.b)());
                var n = t.orderedTiers.find(function(t) {
                    return t.bits <= (e.amount || 100)
                });
                n || (n = t.orderedTiers[0]);
                var u = e.display === d.X.Inline || e.display === d.X.InlineFlex || e.display === d.X.InlineBlock,
                    p = null,
                    m = r("cheermote-for-amount__cheer-amount", {
                        "cheermote-for-amount__display--table-cell": !u
                    }, {
                        "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                    }, {
                        "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                    }, {
                        "cheermote-for-amount__cheer-amount--extremely-small": e.size === i.ExtremelySmall
                    });
                if (void 0 !== e.amount && e.showAmount) {
                    var h = e.formattedNumber ? Object(o.f)(e.amount) : e.amount;
                    p = a.createElement(d.Pa, {
                        padding: e.size === i.Small ? 0 : void 0,
                        textAlign: e.size === i.Small ? d.Rb.Center : void 0
                    }, a.createElement("strong", {
                        className: m,
                        style: {
                            color: n.color
                        }
                    }, h))
                }
                var f = r("cheermote-for-amount__cheer-image", {
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
                    g = a.createElement(l.a, {
                        className: f,
                        sources: Object(s.d)(n, e.size || i.Large, e.animated)
                    });
                return e.showImage || (g = null), a.createElement(d.Pa, {
                    className: "cheermote-for-amount",
                    alignItems: e.alignItems,
                    display: e.display
                }, a.createElement("span", null, g, p))
            };
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return u
            })
        },
        "3qL/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, r = n("mrSG"),
                a = n("/7QA");

            function o(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, s, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (t = a.b.get("bits_truex_partner_hash", ""), !(n = a.b.get("bits_truex_api_url", "")) || !t) return a.k.warn("Truex API info missing from dynamic settings"), [2, i.Error];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                            case 2:
                                return (o = r.sent()).ok ? [4, o.json()] : [3, 4];
                            case 3:
                                if ((s = r.sent()) && Array.isArray(s) && s.length) return [2, i.Available];
                                r.label = 4;
                            case 4:
                                return [2, i.Unavailable];
                            case 5:
                                return c = r.sent(), a.k.warn("Failed checking ad availability from TrueX, probably due to AdBlock", c), [2, i.AdBlocked];
                            case 6:
                                return [2]
                        }
                    })
                })
            }! function(e) {
                e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
            }(i || (i = {}))
        },
        "4VQm": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("17x9"),
                s = n("q1tI"),
                c = n("GxwZ"),
                l = n("N0BP"),
                d = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(i || (i = {}));
            var u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.root = null, n.scrollContent = null, n.xScrollContent = null, n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                        return {
                            registerReceiver: n.registerReceiver,
                            requestVisibilityCheck: n.requestVisibilityCheck,
                            getScrollContent: n.getScrollContent,
                            scrollToTop: n.scrollToTop,
                            yScrollTo: n.yScrollTo
                        }
                    }, n.scrollToBottom = function() {
                        n.scrollContent && n.yScrollTo(n.scrollContent.scrollHeight)
                    }, n.scrollToTop = function() {
                        n.yScrollTo(0)
                    }, n.notifyReceivers = function(e) {
                        requestAnimationFrame(function() {
                            if (n.scrollContent) {
                                var t = n.scrollContent.getBoundingClientRect();
                                e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                    n.checkVisible(t, e)
                                })
                            }
                        })
                    }, n.onResize = function() {
                        if (!n.resizeTimeout && n.scrollContent) {
                            var e = {
                                type: i.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, d)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: i.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, d)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: i.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, d)
                        }
                    }, n.registerReceiver = function(e) {
                        return n.scrollContext && n.scrollContext.registerReceiver && n.scrollContext.registerReceiver(e), n.receivers.push(e), n.requestVisibilityCheck(e),
                            function() {
                                var t = n.receivers.indexOf(e);
                                n.receivers.splice(t, 1)
                            }
                    }, n.requestVisibilityCheck = function(e) {
                        requestAnimationFrame(function() {
                            var t = n.scrollContent;
                            if (t) {
                                var i = t.getBoundingClientRect();
                                e.checkVisible(i)
                            }
                        })
                    }, n.setRef = function(e) {
                        return n.root = e
                    }, n.yScrollTo = function(e) {
                        n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                    }, n.getScrollContent = function() {
                        return n.scrollContent
                    }, n.createSimpleBarOptions = function() {
                        return {
                            autoHide: void 0 === n.props.autoHide || n.props.autoHide
                        }
                    }, t.scrollRef && t.scrollRef(n), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new c(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, r.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return s.createElement("div", r.__assign({
                        className: a(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(l.a)(this.props), {
                        style: this.props.style
                    }), s.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: o.func
                }, t.childContextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func,
                    getScrollContent: o.func,
                    scrollToTop: o.func,
                    yScrollTo: o.func
                }, t
            }(s.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return u
            })
        },
        "4h+t": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return u
            });
            var i = n("uYEN"),
                r = n("5zXJ"),
                a = {
                    Cheer: r.g,
                    Kreygasm: r.g,
                    Kappa: r.g,
                    Muxy: r.h,
                    Streamlabs: r.h,
                    SwiftRage: r.g,
                    VoHiYo: r.g
                },
                o = ["LIGHT", "DARK"],
                s = [1, 1.5, 2, 3, 4],
                c = null;

            function l() {
                if (!c) {
                    var e = [],
                        t = {};
                    Object.keys(a).forEach(function(n) {
                        var i = p(n, a[n]);
                        e.push(i), t[n.toLowerCase()] = i
                    }), c = {
                        orderedActions: e,
                        indexedActions: t
                    }
                }
                return c
            }
            var d = null;

            function u() {
                return d || (d = function(e) {
                    if (c) return c.indexedActions[e.toLowerCase()];
                    return p(e, a[e])
                }("Cheer")), d
            }

            function p(e, t) {
                var n = [i.a.Red, i.a.Blue, i.a.Green, i.a.Purple, i.a.Gray],
                    r = new Map,
                    a = [];
                if ("Cheer" === e) {
                    var o = m(e, i.a.Yellow);
                    r.set(i.a.Yellow, o), a.push(o)
                }
                return a.push.apply(a, n.map(function(t) {
                    var n = m(e, t);
                    return r.set(t, n), n
                })), {
                    prefix: e,
                    type: t,
                    tiers: a,
                    orderedTiers: a,
                    indexedTiers: r
                }
            }

            function m(e, t) {
                for (var n = [], i = {}, a = 0, c = o; a < c.length; a++)
                    for (var l = c[a], d = 0, u = s; d < u.length; d++) {
                        var p = u[d];
                        i[l] || (i[l] = {
                            animated: new Map,
                            static: new Map
                        });
                        var m = h(e, l, !0, t, p);
                        n.push(m), i[l].animated.set(p, m.url);
                        var f = h(e, l, !1, t, p);
                        n.push(f), i[l].static.set(p, f.url)
                    }
                return {
                    id: e + ";" + t,
                    canCheer: t <= r.p,
                    canShowInBitsCard: !0,
                    bits: t,
                    color: r.k[t],
                    images: n,
                    indexedImages: i
                }
            }

            function h(e, t, n, i, r) {
                var a = n ? "gif" : "png";
                return {
                    theme: t,
                    isAnimated: n,
                    dpiScale: r,
                    url: "https://d3aqoihi2n8ty8.cloudfront.net/actions/" + e.toLowerCase() + "/" + t.toLowerCase() + "/" + (n ? "animated" : "static") + "/" + i + "/" + r + "." + a
                }
            }
        },
        "5cw2": function(e, t, n) {},
        "5zXJ": function(e, t, n) {
            "use strict";
            n.d(t, "v", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "t", function() {
                return l
            }), n.d(t, "n", function() {
                return d
            }), n.d(t, "p", function() {
                return u
            }), n.d(t, "q", function() {
                return p
            }), n.d(t, "o", function() {
                return m
            }), n.d(t, "r", function() {
                return h
            }), n.d(t, "l", function() {
                return f
            }), n.d(t, "m", function() {
                return g
            }), n.d(t, "j", function() {
                return b
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "i", function() {
                return C
            }), n.d(t, "h", function() {
                return B
            }), n.d(t, "f", function() {
                return k
            }), n.d(t, "k", function() {
                return E
            }), n.d(t, "u", function() {
                return w
            }), n.d(t, "s", function() {
                return A
            }), n.d(t, "d", function() {
                return _
            });
            var i, r = n("uYEN"),
                a = {
                    ERROR_DISPLAY_TIMEOUT: 5e3,
                    GET_BALANCE_RATE_LIMIT: 5e3,
                    UNDO_PROMPT_DURATION: 5e3
                },
                o = "https://d3aqoihi2n8ty8.cloudfront.net",
                s = o + "/cheer",
                c = o + "/actions",
                l = "bonus",
                d = 8e5,
                u = 1e5,
                p = 25e4,
                m = 500,
                h = 1e3,
                f = "cheer",
                g = r.a.Purple,
                b = "UNKNOWN",
                y = "FIRST_PARTY",
                v = "CUSTOM",
                C = "SPONSORED",
                B = "THIRD_PARTY",
                k = "DISPLAY_ONLY",
                E = ((i = {})[r.a.Gray] = "#979797", i[r.a.Purple] = "#9c3ee8", i[r.a.Green] = "#1db2a5", i[r.a.Blue] = "#0099fe", i[r.a.Red] = "#f43021", i[r.a.Yellow] = "#f3a71a", i),
                w = "bits_sponsored_cheermotes",
                A = "bits_sponsored_cheermotes_announcement",
                _ = "bits_charity_event"
        },
        "7APm": function(e, t, n) {},
        "8/mp": function(e, t, n) {
            "use strict";
            var i = n("4VQm"),
                r = n("HAa/"),
                a = n("/MKj"),
                o = n("mrSG"),
                s = n("17x9"),
                c = n("q1tI"),
                l = n("/7QA"),
                d = n("Ue10"),
                u = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                i = e.anchoredTop,
                                r = e.top,
                                a = e.width,
                                o = t || i,
                                s = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (s = "inherit", o = !1) : o && (s = "fixed"), {
                                position: s,
                                top: i ? "inherit" : r,
                                width: o ? a : "inherit"
                            }
                        }, n.lockBottom = function(e) {
                            n.element && n.setState({
                                anchoredBottom: !0,
                                top: window.innerHeight - e,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.lockTop = function() {
                            n.element && n.setState({
                                anchoredTop: !0,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.resizeStickyColumn = function() {
                            n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                        }, n.setRef = function(e) {
                            return n.element = e
                        }, n.state = {
                            anchoredBottom: !1,
                            anchoredTop: !1,
                            lastOffset: void 0,
                            offsetTop: void 0,
                            top: void 0,
                            width: void 0
                        }, n
                    }
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.element) {
                            var e = this.element.getBoundingClientRect();
                            this.setState({
                                offsetTop: e.top
                            })
                        }
                        var t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : l.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return c.createElement(d.Xa, {
                            position: d.jb.Relative,
                            fullWidth: !0
                        }, c.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, n, r, a, s;
                            return o.__generator(this, function(o) {
                                return !t || t.type !== i.a.Resize && t.type !== i.a.Wheel && t.type !== i.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === i.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === i.a.Wheel && e ? (r = t.wheelEvent, a = void 0, a = 0 === r.deltaMode ? r.deltaY || r.wheelDelta : 16 * r.deltaY, s = a + t.offset, this.context.yScrollTo(s), this.checkBounding(a > 0, t.offset)) : t.type !== i.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                            })
                        })
                    }, t.prototype.checkBounding = function(e, t) {
                        e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                            lastOffset: t
                        })
                    }, t.prototype.shouldLock = function(e) {
                        if (this.element) {
                            var t = this.element.getBoundingClientRect(),
                                n = this.state.offsetTop || 0;
                            if (t.height < window.innerHeight - n) this.lockTop();
                            else {
                                var i = t.top < n,
                                    r = t.top >= window.innerHeight,
                                    a = t.bottom < n,
                                    o = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    s = !r && !i,
                                    c = !o && !a;
                                !s && !c || s && c || (!e && s && this.lockTop(), e && c && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), i && a && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), r && o && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                i = n.offsetTop,
                                r = n.width,
                                a = this.element.getBoundingClientRect(),
                                o = window.innerHeight - (i || 0),
                                s = r;
                            t = "inherit", a.height <= o ? s = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - a.height + o - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: s,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: s.func,
                        yScrollTo: s.func
                    }, t
                }(c.Component);
            var p = Object(a.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(u);
            n.d(t, "b", function() {
                return i.b
            }), n.d(t, "a", function() {
                return r.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        EzP7: function(e, t, n) {},
        FD0w: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                r = n("fvjX"),
                a = n("1/iK"),
                o = n("y5D0"),
                s = n("kRBY"),
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("/7QA"),
                u = n("8/mp"),
                p = n("yR8l"),
                m = n("V+GM"),
                h = n("2xye"),
                f = n("4h+t"),
                g = n("GnwI"),
                b = n("3CMh"),
                y = n("Ue10"),
                v = (n("hG/x"), function(e) {
                    return l.createElement(y.Pa, {
                        className: "bits-landing-page-text-section",
                        margin: {
                            top: 2
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.P,
                        color: y.O.Base
                    }, e.text))
                }),
                C = (n("pN/j"), function(e) {
                    var t = e.additionInfo.map(function(e, t) {
                        return l.createElement(v, {
                            key: "additionInfo:" + t,
                            text: e
                        })
                    });
                    return l.createElement(y.Xa, {
                        textAlign: y.Rb.Center,
                        className: "bits-landing-page-cheermote-description"
                    }, l.createElement(y.Pa, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.H3,
                        fontSize: y.Ca.Size4,
                        color: y.O.Link,
                        bold: !0
                    }, e.title)), t, l.createElement(y.Xa, {
                        className: "bits-landing-page-cheermote-description__cheermotes",
                        display: y.X.Flex,
                        alignContent: y.e.Center,
                        textAlign: y.Rb.Center,
                        padding: {
                            y: 2
                        },
                        margin: "auto"
                    }, e.cheermoteImaages))
                }),
                B = (n("Hin6"), function(e) {
                    var t = null;
                    return e.additionalInfo && (t = l.createElement(v, {
                        text: e.additionalInfo
                    })), l.createElement(y.Xa, {
                        className: "bits-landing-page-section-header"
                    }, l.createElement(y.Pa, {
                        className: "bits-landing-page-section-header--title",
                        margin: {
                            top: 3
                        },
                        textAlign: y.Rb.Center,
                        breakpointSmall: {
                            textAlign: y.Rb.Left
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.H3,
                        color: y.O.Link,
                        bold: !0
                    }, e.title)), t)
                }),
                k = function(e) {
                    var t = ["Cheer", "Kappa", "Kreygasm", "VoHiYo"].map(function(t) {
                            return l.createElement(b.a, {
                                key: t,
                                bitsConfig: e.bitsConfig,
                                prefix: t,
                                amount: 100,
                                showAmount: !1,
                                showImage: !0
                            })
                        }),
                        n = ["https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/1.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/2.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/5.gif", "https://d3aqoihi2n8ty8.cloudfront.net/landing-page/custom-partner-cheermotes/4.gif"].map(function(e, t) {
                            return l.createElement(y.Pa, {
                                key: "partnerCheermote:" + t,
                                className: "cheermote-for-amount"
                            }, l.createElement("img", {
                                className: "cheermote-for-amount__cheer-image",
                                src: e
                            }))
                        });
                    return l.createElement("div", {
                        id: "how-to-cheer"
                    }, l.createElement(y.Xa, {
                        className: "bits-landing-page-cheermote-intro"
                    }, l.createElement(B, {
                        title: Object(d.d)("How to Cheer", "BitsLandingPage"),
                        additionalInfo: Object(d.d)('To Cheer, type "cheer" in chat followed by the number of Bits you want to use. More Bits shows more support and activates cooler animated emotes. You earn Bit badges the more you Cheer. You can also earn Top Cheerers badges on channels where it is enabled.', "BitsLandingPage")
                    }), l.createElement(B, {
                        title: Object(d.d)("Express yourself with Cheermotes", "BitsLandingPage"),
                        additionalInfo: Object(d.d)("When you Cheer, you choose whether your message will include the animated Bit gem emotes, or Cheermotes, which are animated versions of popular global emotes, or custom emotes in Partner channels.", "BitsLandingPage")
                    }), l.createElement(C, {
                        title: Object(d.d)("Twitch Cheermotes", "BitsLandingPage"),
                        additionInfo: [Object(d.d)("Here are some examples. There are many more to choose from!", "BitsLandingPage")],
                        cheermoteImaages: t
                    }), l.createElement(C, {
                        title: Object(d.d)("Custom Partner Cheermotes", "BitsLandingPage"),
                        additionInfo: [Object(d.d)("Thousands of Twitch Partners have their own Cheermotes in their channel.", "BitsLandingPage"), Object(d.d)("Here are some examples:", "BitsLandingPage")],
                        cheermoteImaages: n
                    })))
                },
                E = function(e) {
                    return l.createElement(y.Xa, {
                        className: "bits-landing-page-faq-section"
                    }, l.createElement(y.Pa, {
                        margin: {
                            top: 3
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.H3,
                        fontSize: y.Ca.Size4,
                        color: y.O.Link,
                        bold: !0
                    }, e.question)), l.createElement(v, {
                        text: e.answer
                    }), e.additionalContent)
                },
                w = (n("sRTl"), function(e) {
                    var t = [1, 100, 1e3, 5e3, 1e4].map(function(t) {
                            return l.createElement(y.Xa, {
                                display: y.X.Block,
                                key: "cheer:" + t,
                                padding: {
                                    x: 1
                                }
                            }, l.createElement(b.a, {
                                bitsConfig: e.bitsConfig,
                                prefix: "Cheer",
                                amount: t,
                                showImage: !0,
                                showAmount: !1,
                                animated: !0,
                                size: b.b.Large
                            }), l.createElement(y.Xa, {
                                padding: {
                                    top: 1
                                },
                                margin: {
                                    right: .5
                                }
                            }, l.createElement(b.a, {
                                bitsConfig: e.bitsConfig,
                                prefix: "Cheer",
                                amount: t,
                                showImage: !1,
                                showAmount: !0,
                                animated: !1,
                                size: b.b.Large
                            })))
                        }),
                        n = l.createElement(y.Xa, {
                            className: "bits-landing-page-faq__bits-gem-examples",
                            justifyContent: y.Wa.Center,
                            display: y.X.Flex,
                            padding: {
                                top: 3,
                                bottom: 2
                            },
                            margin: "auto"
                        }, t),
                        i = [{
                            question: Object(d.d)("What payment methods can I use to buy Bits?", "BitsLandingPage"),
                            answer: Object(d.d)("Bits are purchased via Amazon Payments and PayPal.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("How do I Cheer?", "BitsLandingPage"),
                            answer: Object(d.d)('Once you have purchased Bits, and you are in the chat entry window on a channel page, type "cheer" and the number of Bits you want to use. Or click the Bit gem icon at the bottom right of chat, and choose the Bit gem emote or other Cheermote from the menu displayed.', "BitsLandingPage")
                        }, {
                            question: Object(d.d)("How exactly does Cheering support streamers?", "BitsLandingPage"),
                            answer: Object(d.d)("Cheering makes Twitch chat more engaging for everyone. It shows streamers who their most enthusiastic fans are, and makes it easy to thank them with overlays and shoutouts. In addition, Twitch provides participating streamers a share of the revenue Twitch receives from Bits used to Cheer for them. The standard share for Partners and Affiliates is 1 cent per Bit used to Cheer for them. In some special cases, like esports tournaments or charity events, there may be different revenue sharing arrangements.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("What are Bit gem emotes?", "BitsLandingPage"),
                            answer: Object(d.d)("Bit gem emotes are animated gems that make your Cheer message stand out in chat. The more Bits you use, the more animated the gem.", "BitsLandingPage"),
                            additionalContent: n
                        }, {
                            question: Object(d.d)("What are Cheermotes?", "BitsLandingPage"),
                            answer: Object(d.d)("Cheermotes are animated versions of popular global emotes, or custom animated emotes in Partner channels, that use Bits. The more Bits used, the cooler the animation. You can see all the Cheermotes available in any channel by clicking the Bit icon at the bottom of chat.", "BitsLandingPage")
                        }, {
                            question: Object(d.d)("Have questions that weren't answered here?", "BitsLandingPage"),
                            answer: Object(d.d)("Visit our <x:link>Help Center article on Cheering.</x:link>", {
                                "x:link": function(e) {
                                    return l.createElement("span", {
                                        key: "helplink"
                                    }, l.createElement("a", {
                                        href: "https://help.twitch.tv/customer/portal/articles/2449458"
                                    }, e))
                                }
                            }, "BitsLandingPage")
                        }].map(function(e, t) {
                            return l.createElement(E, {
                                key: "faqsection:" + t,
                                question: e.question,
                                answer: e.answer,
                                additionalContent: e.additionalContent
                            })
                        });
                    return l.createElement(y.Xa, {
                        className: "bits-landing-page-faq"
                    }, l.createElement(B, {
                        title: Object(d.d)("FAQs", "BitsLandingPage")
                    }), l.createElement(y.Xa, {
                        className: "bits-landing-page-faq__content"
                    }, i))
                }),
                A = n("4rCz"),
                _ = (n("hcvC"), function(e) {
                    var t = l.createElement(y.Xa, {
                            margin: {
                                left: .5
                            },
                            display: y.X.Inline,
                            breakpointSmall: {
                                display: y.X.Hide
                            }
                        }, l.createElement("a", {
                            href: "#how-to-cheer"
                        }, Object(d.d)("Learn More", "BitsLandingPage"))),
                        n = null;
                    if (e.additionalInfo) {
                        var i = l.createElement(y.Xa, {
                            display: y.X.Inline
                        }, e.additionalInfo, t);
                        n = l.createElement(v, {
                            text: i
                        })
                    }
                    return l.createElement(y.Xa, {
                        className: "bits-landing-page-title"
                    }, l.createElement(y.Pa, {
                        className: "bits-landing-page-title--text",
                        margin: {
                            top: 3
                        },
                        textAlign: y.Rb.Center,
                        breakpointSmall: {
                            textAlign: y.Rb.Left
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.H1,
                        color: y.O.Link,
                        bold: !0
                    }, e.text)), n)
                }),
                x = function() {
                    return l.createElement(y.Xa, {
                        className: "bits-landing-page-intro"
                    }, l.createElement(_, {
                        text: Object(A.d)("Cheer with Bits to celebrate and show support!", "BitsLandingPage"),
                        additionalInfo: Object(A.d)("Bits are a virtual good you can buy and use to Cheer. A Cheer is a chat message that uses Bits, and includes animated emotes to amplify your voice in chat and celebrate the moment. Cheering is another way to support Partners and Affiliates, similar to subscribing.", "BitsLandingPage")
                    }))
                },
                S = n("opIq"),
                O = n("bYOw"),
                T = n("RiD7"),
                N = function(e) {
                    if (!e.isLoggedIn) return l.createElement(y.Xa, {
                        display: y.X.Inline,
                        alignItems: y.f.Center
                    }, l.createElement(y.W, {
                        color: y.O.Base,
                        type: y.Vb.Span
                    }, Object(d.d)("<x:link>Log in</x:link> to see your Bits Balance", {
                        "x:link": function(t) {
                            return l.createElement(y.z, {
                                type: y.F.Text,
                                onClick: e.login
                            }, t)
                        }
                    }, "BitsLandingPage")));
                    var t = "0";
                    return void 0 !== e.bitsBalance && e.bitsBalance > 1 && (t = l.createElement(b.a, {
                        bitsConfig: e.bitsConfig,
                        prefix: "Cheer",
                        amount: e.bitsBalance,
                        size: b.b.ExtraSmall,
                        display: y.X.Inline,
                        showAmount: !0,
                        showImage: !0,
                        animated: !1
                    })), l.createElement(y.Xa, {
                        alignSelf: y.g.End,
                        className: "bits-landing-page-balance-header"
                    }, l.createElement(y.Pa, {
                        alignItems: y.f.Center
                    }, l.createElement(y.W, {
                        type: y.Vb.H5,
                        color: y.O.Base
                    }, Object(d.d)("You have {amount} Bits", {
                        amount: t
                    }, "BitsLandingPage"))))
                },
                I = (n("XKsl"), function(e) {
                    return l.createElement(y.Xa, {
                        className: "bits-landing-page-right-pane",
                        padding: {
                            top: 2
                        },
                        breakpointSmall: {
                            padding: {
                                top: 3
                            }
                        }
                    }, l.createElement(y.Xa, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: y.Rb.Center,
                        className: "bits-landing-page-right-pane__buy-bits-title-container",
                        breakpointSmall: {
                            textAlign: y.Rb.Left,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Row
                        },
                        alignItems: y.f.Center
                    }, l.createElement(y.Pa, {
                        className: "bits-landing-page-right-pane__buy-bits-title",
                        flexGrow: 1,
                        padding: {
                            bottom: 1
                        },
                        breakpointSmall: {
                            padding: {
                                bottom: 0
                            }
                        }
                    }, l.createElement(y.W, {
                        type: y.Vb.H3,
                        color: y.O.Link,
                        bold: !0
                    }, Object(d.d)("Buy Bits", "BitsLandingPage"))), l.createElement(N, {
                        bitsBalance: e.bitsBalance,
                        bitsConfig: e.bitsConfig,
                        isLoggedIn: e.isLoggedIn,
                        login: e.login
                    })), l.createElement(S.a, {
                        bitsConfig: e.bitsConfig,
                        closeAllBits: W,
                        onClose: W,
                        trackBitsCardInteraction: W,
                        location: T.b.BitsLandingPage,
                        hideWateb: !0,
                        size: O.b.Fullsize
                    }))
                }),
                W = function() {},
                L = n("U+cV"),
                R = (n("EzP7"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.bitsConfig = Object(f.a)(), t
                    }
                    return c.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), d.p.setPageTitle("Purchase Bits")
                    }, t.prototype.render = function() {
                        return l.createElement(y.Eb, {
                            background: y.r.Base,
                            className: "bits-landing-page",
                            fullWidth: !0,
                            alignContent: y.e.Center
                        }, l.createElement(u.b, {
                            className: "bits-landing-page__scroll-area"
                        }, l.createElement(y.Xa, {
                            className: "bits-landing-page__scroll-container",
                            padding: {
                                bottom: 5
                            }
                        }, l.createElement(y.Xa, {
                            className: "bits-landing-page__gems-banner"
                        }), l.createElement(y.Xa, {
                            className: "bits-landing-page__content",
                            textAlign: y.Rb.Left,
                            padding: {
                                x: 2
                            },
                            breakpointSmall: {
                                margin: {
                                    x: "auto"
                                }
                            }
                        }, l.createElement(y.Xa, {
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(y.Xa, {
                            className: "bits-landing-page__content--left-pane",
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(x, null)), l.createElement(y.Xa, {
                            className: "bits-landing-page__content--right-pane"
                        }, l.createElement(I, {
                            bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                            bitsConfig: this.bitsConfig,
                            isLoggedIn: this.props.isLoggedIn,
                            login: this.props.login
                        })), l.createElement(y.Xa, {
                            className: "bits-landing-page__content--left-pane",
                            breakpointSmall: {
                                display: y.X.InlineBlock
                            }
                        }, l.createElement(k, {
                            bitsConfig: this.bitsConfig
                        }), l.createElement(w, {
                            bitsConfig: this.bitsConfig
                        })))))))
                    }, t = c.__decorate([Object(g.b)("Bits"), Object(m.a)({
                        location: h.PageviewLocation.BitsLandingPage
                    }), Object(p.a)(L, {
                        name: "data",
                        skip: function(e) {
                            return !e.isLoggedIn
                        }
                    })], t)
                }(l.Component));
            var j = Object(i.connect)(function(e) {
                return {
                    isLoggedIn: Object(s.f)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(o.e)(a.a.BitsLandingPage)
                    }
                }, e)
            })(R);
            n.d(t, "BitsLandingPage", function() {
                return j
            })
        },
        "HAa/": function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("TSYQ"),
                o = n("17x9"),
                s = n("q1tI"),
                c = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            i = t.top + t.height;
                        return !(e.bottom < n || e.top > i)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? i.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = a({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === i.Up,
                            "scrollable-trigger__trigger-area--down": e === i.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return s.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, s.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : c.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, i, a, o, s = this;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), i = this.props.contentLength, a = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return r.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        s.element && (t = void 0 !== s.props.contentLength && void 0 !== i ? s.props.contentLength > i : s.wrapElement.offsetTop > a, s.setState({
                                            loadedMore: t
                                        }), n && (t || s.props.forceLoadMoreContent) && s.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw o = r.sent(), this.element && this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), o;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func
                }, t
            }(s.Component);
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        Hin6: function(e, t, n) {},
        N0BP: function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = {}, n = 0, i = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < i.length; n++) {
                    var r = i[n];
                    t[r] = e[r]
                }
                return t
            }
            n.d(t, "a", function() {
                return i
            })
        },
        NvZ5: function(e, t, n) {},
        RcPG: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Text = 0] = "Text", e[e.ModeratedText = 1] = "ModeratedText", e[e.CurrentUserHighlight = 2] = "CurrentUserHighlight", e[e.Mention = 3] = "Mention", e[e.Link = 4] = "Link", e[e.Emote = 5] = "Emote", e[e.ClipLink = 6] = "ClipLink", e[e.VideoLink = 7] = "VideoLink"
                }(i || (i = {}))
        },
        RiD7: function(e, t, n) {
            "use strict";
            n.d(t, "h", function() {
                return a
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "d", function() {
                return d
            }), n.d(t, "e", function() {
                return u
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "g", function() {
                return m
            }), n.d(t, "i", function() {
                return h
            });
            var i = n("/7QA"),
                r = n("2xye");

            function a(e) {
                var t = {
                    action_name: e.actionName,
                    action_type: "click",
                    displayed_balance: e.displayedBalance,
                    emote_level: e.emoteLevel,
                    emote_type: e.emoteType,
                    bits_location: e.location || s.ChatTooltip
                };
                i.o.track(r.SpadeEventType.BitsCardInteraction, t)
            }
            var o, s = {
                    ChatTooltip: "card",
                    GetBitsButton: "get_bits_button",
                    GetBitsButtonTopNav: "topnav",
                    BitsLandingPage: "bits_landing_page"
                },
                c = {
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
                    100: c.Buy100,
                    500: c.Buy500,
                    1000: c.Buy1000,
                    1500: c.Buy1500,
                    5000: c.Buy5000,
                    10000: c.Buy10000,
                    25000: c.Buy25000
                };

            function d(e) {
                return e && l[e] ? l[e] : (i.k.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), c.Buy100)
            }

            function u(e) {
                var t = {
                    channel: e.channel,
                    channel_id: e.channelID,
                    available: e.available,
                    host: "twitch.tv"
                };
                i.o.track(r.SpadeEventType.BitsAdsAvailability, t)
            }

            function p(e) {
                var t = {
                    distinct_id: i.p.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    campaign_id: e.campaignID,
                    adblock: e.adblock
                };
                i.o.track(r.SpadeEventType.BitsAdsImpression, t)
            }

            function m(e) {
                var t = i.o.getLastPageview(),
                    n = {
                        location: t && t.location || "",
                        ad_returned: null,
                        campaign_id: e.campaignID,
                        distinct_id: i.p.session.deviceID,
                        host: "twitch.tv",
                        request_id: e.requestID,
                        request_method: e.requestMethod
                    };
                i.o.track(r.SpadeEventType.BitsAdsRequest, n)
            }

            function h(e) {
                var t = {
                    leaderboard_size: e.leaderboardSize,
                    leaderboard_mode: e.leaderboardMode,
                    user_present_in_leaderboard: e.userPresentInLeaderboard,
                    user_id: e.userID,
                    channel_id: e.channelID
                };
                i.o.track(r.SpadeEventType.LeaderboardExpandClick, t)
            }! function(e) {
                e.ShowAdButton = "show_ad_button"
            }(o || (o = {}))
        },
        SDEh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = /\scurse\/\d/;

            function r(e) {
                return e || (e = navigator.userAgent), !!i.exec(e)
            }
        },
        T3bn: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                s = n("VeT4"),
                c = n("Ue10");
            ! function(e) {
                e.BitsBalanceHeader = "bits-balance-header-selector", e.BitsBalanceLoggedOutHeader = "bits-balance-logged-out-header-selector"
            }(i || (i = {}));
            var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return void 0 !== this.props.bitsBalance ? a.createElement(c.Xa, {
                        "data-test-selector": i.BitsBalanceHeader,
                        textAlign: c.Rb.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, a.createElement(c.W, {
                        type: c.Vb.Span
                    }, Object(o.d)("You have {bitsBalance}", {
                        bitsBalance: a.createElement(s.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : a.createElement(c.Xa, {
                        "data-test-selector": i.BitsBalanceLoggedOutHeader,
                        textAlign: c.Rb.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, a.createElement(c.W, {
                        type: c.Vb.Span
                    }, Object(o.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: a.createElement(s.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton")))
                }, t
            }(a.Component);
            n.d(t, !1, function() {
                return i
            }), n.d(t, "a", function() {
                return l
            })
        },
        "U+cV": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "BitsLandingPage"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                        value: "bitsBalance"
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
                    end: 56
                }
            };
            n.loc.source = {
                body: "query BitsLandingPage {\ncurrentUser {\nid\nbitsBalance\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("q1tI"),
                o = n("wIs1"),
                s = n("/7QA");

            function c(e) {
                return function(t) {
                    var n = function(n) {
                        function o(t) {
                            var r = n.call(this, t) || this;
                            return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                                if (!(r.tracked || e.skip && e.skip(r.props))) {
                                    r.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                    var n = i.__assign({}, r.props);
                                    n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index, t.email_id = n.location.state.email_id);
                                    var a = r.referenceTracking,
                                        o = a.content,
                                        c = a.medium,
                                        l = a.content_index,
                                        d = a.email_id;
                                    s.p.tracking.trackPageview(i.__assign({
                                        content: o,
                                        medium: c,
                                        content_index: l,
                                        email_id: d,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                        }
                        return i.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return a.createElement(t, i.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? r.parse(e.search) : {},
                                n = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, n.medium || n.content || n.email_id) {
                                var i = "",
                                    a = r.stringify(t);
                                a.length > 0 && (i = "?" + a), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                            return n
                        }, o
                    }(a.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return c
            })
        },
        VR5Q: function(e, t) {
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
        },
        VeT4: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("/0dD"),
                o = n("5zXJ"),
                s = n("XmgI"),
                c = n("4h+t"),
                l = n("x1M1");
            n("5cw2");

            function d(e) {
                var t, n = Object(r.d)("{bitsAmount} Bits", {
                    bitsAmount: e.count.toString()
                }, "Bits--BitsCount");
                if (e.withImage) {
                    var d = e.bitsConfig && e.bitsConfig.indexedActions[o.l];
                    d || (d = Object(c.b)());
                    var u = void 0;
                    if (u = 0 === e.count ? d.orderedTiers.find(function(e) {
                            return e.bits === o.m
                        }) : d.orderedTiers.find(function(t) {
                            return t.bits <= e.count
                        })) {
                        var p = Object(s.d)(u, void 0, e.animated);
                        return void 0 !== e.themeOverride && (e.themeOverride === a.a.Light ? p.dark = p.light : p.light = p.dark), t = i.createElement(l.a, {
                            className: "bits-count--img",
                            sources: p
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
        XKsl: function(e, t, n) {},
        XmgI: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "e", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            });
            var i = n("5zXJ"),
                r = n("RcPG"),
                a = {
                    indexedActions: {},
                    orderedActions: []
                },
                o = /^((?:[A-Za-z0-9]+)(?:[A-Za-z]))([\d]+)$/;

            function s(e, t, n) {
                void 0 === n && (n = !1);
                var i = [],
                    a = e.split(/\s+/);
                return a.forEach(function(e, o) {
                    var s = c(e, t, n);
                    if (s) i.push(s);
                    else {
                        var l = i.length && i[i.length - 1],
                            d = "";
                        if (o < a.length - 1 && (d = " "), l && l.type === r.a.Text) l.content += e + d;
                        else {
                            var u = "";
                            o && (u = " "), i.push({
                                type: r.a.Text,
                                content: u + e + d
                            })
                        }
                    }
                }), i
            }

            function c(e, t, n) {
                void 0 === n && (n = !1);
                var a = e.match(o);
                if (!a) return null;
                var s = a[1].toLowerCase(),
                    c = Number(a[2]),
                    l = t.indexedActions[s];
                if (l && (l.type !== i.f || n)) {
                    var d = l.orderedTiers.find(function(e) {
                        return e.bits <= c
                    });
                    if (!d && c && (d = l.orderedTiers[0]), d) return {
                        type: r.a.Emote,
                        content: {
                            images: u(d),
                            alt: l.prefix,
                            cheerAmount: c,
                            cheerColor: d.color
                        }
                    }
                }
                return null
            }

            function l(e, t) {
                var n = function(e) {
                        var t = new Map;
                        return e.orderedActions.forEach(function(e) {
                            e.campaign && t.set(e.prefix, e.campaign)
                        }), t
                    }(t),
                    r = new Map;
                e.forEach(function(e, t) {
                    if (e.alt && n.has(e.alt))
                        if (r.has(e.alt)) {
                            (i = r.get(e.alt)) && (i.total += e.cheerAmount || 0, i.lastAppearance = t)
                        } else {
                            var i = {
                                total: e.cheerAmount || 0,
                                lastAppearance: t,
                                campaign: n.get(e.alt)
                            };
                            r.set(e.alt, i)
                        }
                });
                var a = 1;
                return r.forEach(function(n) {
                    var r = 0;
                    n.campaign.thresholds.forEach(function(e) {
                        n.total >= e.minimumBits && (r = e.matchedPercent)
                    });
                    var o = Math.trunc(n.total * r);
                    if (o > 0) {
                        var s = c(i.t + o, t, !0);
                        s && e.splice(n.lastAppearance + a++, 0, s.content)
                    }
                }), e
            }

            function d(e, t) {
                return s(e, t, !0).reduce(function(e, t) {
                    return t.type === r.a.Emote && e.push(t.content), e
                }, []).some(function(e) {
                    var n = t.orderedActions.find(function(t) {
                        return !!e.alt && e.alt === t.prefix
                    });
                    return !!n && n.type === i.f
                })
            }

            function u(e, t, n) {
                var i, r;
                void 0 === n && (n = !0);
                var a = n ? "animated" : "static";
                return t ? {
                    themed: !0,
                    dark: (i = {}, i[t + "x"] = e.indexedImages.DARK[a].get(t), i),
                    light: (r = {}, r[t + "x"] = e.indexedImages.LIGHT[a].get(t), r)
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
        bYOw: function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                a = n("8/mp"),
                o = n("mrSG"),
                s = n("/7QA"),
                c = n("lB7/"),
                l = n("3CMh"),
                d = n("3qL/"),
                u = n("RiD7"),
                p = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAdClick = function() {
                            t.props.trackBitsCardInteraction(u.a.WatchAd), t.props.onWatchAdClick()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = null;
                        return this.props.disableWatchAd && (e = Object(s.d)("Try again later", "Bits--WatchAdOffer")), r.createElement(p.Eb, {
                            className: "bits-buy-card__offer-row",
                            display: p.X.Flex,
                            flexShrink: 0,
                            borderBottom: !0,
                            justifyContent: p.Wa.Between,
                            flexWrap: p.Ba.NoWrap,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, r.createElement(p.Xa, {
                            padding: {
                                right: 4
                            }
                        }, r.createElement("strong", null, Object(s.d)("Get {minBitsCount} or more Bits by watching short ads", {
                            minBitsCount: this.props.minPayout
                        }, "Bits--WatchAdOffer"))), r.createElement(p.Xa, {
                            flexShrink: 0,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            alignItems: p.f.End
                        }, r.createElement(p.z, {
                            type: p.F.Hollow,
                            "data-a-target": "bits-watch-ad",
                            onClick: this.onWatchAdClick,
                            disabled: this.props.disableWatchAd
                        }, Object(s.d)("Watch Ad", "Bits--WatchAdOffer")), e && r.createElement(p.Xa, {
                            className: "bits-buy-card__sub-text",
                            alignSelf: p.g.Stretch,
                            textAlign: p.Rb.Center,
                            margin: {
                                top: .5
                            }
                        }, e)))
                    }, t
                }(r.Component),
                h = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
                f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            enableWatchAd: !0
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillMount = function() {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return o.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, Object(d.b)(this.props.truexUserID)];
                                    case 1:
                                        return e = t.sent(), Object(u.e)({
                                            channel: this.props.channelLogin,
                                            channelID: this.props.channelID,
                                            available: e === d.a.Available
                                        }), e !== d.a.Available && e !== d.a.AdBlocked && this.setState({
                                            enableWatchAd: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return h.test(navigator.userAgent) ? null : r.createElement(m, o.__assign({}, this.props, {
                            disableWatchAd: !this.state.enableWatchAd
                        }))
                    }, t
                }(r.Component),
                g = n("lhih"),
                b = n("ebRM"),
                y = (n("byRF"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleBuyClick = function(e) {
                            var n = t.props.channelID || "",
                                i = Object(b.b)({
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        if (this.props.offer.type === g.a) {
                            if (!this.props.channelLogin) return null;
                            var e = this.props.currentUserSHA || "";
                            return r.createElement(f, {
                                key: "wateb",
                                minPayout: this.props.offer.bits,
                                onWatchAdClick: this.props.handleWatchAdClick,
                                truexUserID: e,
                                channelID: this.props.channelID || "",
                                channelLogin: this.props.channelLogin,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            })
                        }
                        var t = null;
                        if (Object(b.c)(this.props.offer)) t = r.createElement(p.Xa, {
                            className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                            "data-test-selector": "first-time-promo-form"
                        }, r.createElement(p.W, {
                            type: p.Vb.Strong,
                            fontSize: p.Ca.Size6
                        }, Object(s.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard")));
                        else if (Object(b.d)(this.props.offer) && null !== this.props.offer.promotion) switch (this.props.offer.promotion.id) {
                            case g.c:
                                var n = "";
                                n = this.props.email && this.props.isEmailVerified ? Object(s.d)("200 Bits code will be sent to {email}", {
                                    email: void 0 !== this.props.email ? this.props.email : ""
                                }, "Bits--BuyCard") : Object(s.d)("There is no verified email for this account. Please add an email.", "Bits--BuyCard"), t = r.createElement(r.Fragment, null, r.createElement(p.Xa, {
                                    className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                                    "data-test-selector": "black-friday-promo-form"
                                }, r.createElement(p.W, {
                                    type: p.Vb.Strong,
                                    fontSize: p.Ca.Size6
                                }, Object(s.d)("Black Friday Sale!", "Bits--BuyCard"))), r.createElement(p.Xa, null, r.createElement(p.W, {
                                    fontSize: p.Ca.Size8
                                }, n)));
                                break;
                            case g.d:
                                t = r.createElement(p.Xa, {
                                    className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline",
                                    "data-test-selector": "prime-promo-promo-form"
                                }, r.createElement(p.W, {
                                    type: p.Vb.Strong,
                                    fontSize: p.Ca.Size6
                                }, Object(s.d)("Twitch Prime Bits Discount", "Bits--BuyCard")))
                        }
                        var i = null;
                        this.props.offer.discount && (i = r.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "discount-subtext-form"
                        }, Object(s.d)("{percentOff,number,percent} discount", {
                            percentOff: this.props.offer.discount
                        }, "Bits--BuyCard")));
                        var a = null;
                        (Object(b.c)(this.props.offer) || Object(b.e)(this.props.offer)) && (a = r.createElement("div", {
                            className: "bits-buy-card-offer-row__sub-text",
                            "data-test-selector": "one-per-account-form"
                        }, Object(s.d)("one per account", "Bits--BuyCard")));
                        var d = {
                                className: "bits-buy-card-offer-row",
                                flexShrink: 0,
                                display: p.X.Flex,
                                justifyContent: p.Wa.Center,
                                flexDirection: p.Aa.Column,
                                padding: {
                                    x: 2,
                                    y: 1
                                }
                            },
                            u = r.createElement(r.Fragment, null, t, r.createElement(p.Xa, {
                                display: p.X.Flex,
                                justifyContent: p.Wa.Between,
                                alignItems: p.f.Center
                            }, r.createElement(p.Xa, {
                                flexGrow: 1
                            }, r.createElement(p.W, {
                                type: p.Vb.H5,
                                color: p.O.Base,
                                bold: !0
                            }, Object(s.d)("{bits} Bits", {
                                bits: this.props.offer.bits
                            }, "Bits--BuyCard")), r.createElement(c.a, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.props.offer.bits,
                                size: l.b.ExtraSmall
                            })), r.createElement(p.Xa, {
                                flexShrink: 0,
                                display: p.X.Flex,
                                flexDirection: p.Aa.Column,
                                alignItems: p.f.End
                            }, r.createElement(p.z, {
                                onClick: this.handleBuyClick,
                                "data-purchase-url": this.props.offer.url,
                                "data-bits-amount": this.props.offer.bits,
                                "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                            }, this.props.offer.price), (i || a) && r.createElement(p.Xa, {
                                alignSelf: p.g.Stretch,
                                textAlign: p.Rb.Right,
                                margin: {
                                    top: .5
                                }
                            }, i, a))));
                        return r.createElement(r.Fragment, null, this.props.isLastRow ? r.createElement(p.Xa, o.__assign({}, d), u) : r.createElement(p.Eb, o.__assign({}, d, {
                            borderBottom: !0
                        }), u))
                    }, t
                }(r.Component));
            n("mHh5");
            ! function(e) {
                e.Fullsize = "full-size", e.Smallnoscroll = "no-scroll--small", e.Scrollview = "scroll-view"
            }(i || (i = {}));
            var v = function(e) {
                var t = [],
                    n = [],
                    o = null;
                switch (e.offers.forEach(function(i, a) {
                    var s = r.createElement(y, {
                            key: i.id,
                            offer: i,
                            isLastRow: a >= e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction,
                            email: e.email,
                            isEmailVerified: e.isEmailVerified
                        }),
                        c = Object(b.d)(i),
                        l = Object(b.c)(i),
                        d = i.type === g.a;
                    l && !e.hidePromos ? t.push(s) : c && !l ? t.push(s) : d && !e.hideWateb ? o = s : d || c || n.push(s)
                }), e.size) {
                    case i.Scrollview:
                        return r.createElement(a.b, {
                            className: "bits-buy-card-offers__scroll-view"
                        }, r.createElement(p.Xa, {
                            flexGrow: 1,
                            flexWrap: p.Ba.NoWrap,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, o, t, n));
                    case i.Smallnoscroll:
                        return r.createElement(p.Xa, {
                            className: "bits-buy-card-offers__no-scroll--small",
                            flexGrow: 1,
                            flexWrap: p.Ba.NoWrap,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column
                        }, o, t, n);
                    default:
                        return r.createElement(p.Xa, {
                            className: "bits-buy-card-offers__full-size",
                            flexGrow: 1,
                            flexWrap: p.Ba.NoWrap,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Column,
                            fullWidth: !0
                        }, o, t, n)
                }
            };
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return v
            })
        },
        byRF: function(e, t, n) {},
        ebRM: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return l
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "a", function() {
                return p
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "b", function() {
                return h
            });
            var i = n("mrSG"),
                r = n("SDEh"),
                a = n("lhih"),
                o = n("5zXJ"),
                s = n("XmgI"),
                c = n("RiD7");

            function l(e) {
                return e.type !== a.a && (u(e) && null !== e.promotion && e.promotion.type === a.e)
            }

            function d(e) {
                return e.type !== a.a && (u(e) && null !== e.promotion && (e.promotion.type === a.g || e.promotion.type === a.f))
            }

            function u(e) {
                return e.type === a.b && null !== e.promotion && !!e.promotion
            }

            function p(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                return e.forEach(function(e) {
                    e.cheerAmount && (e.alt !== o.t ? (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount) : r += e.cheerAmount)
                }), {
                    total: i,
                    bonus: r,
                    smallestCheermote: n,
                    largestCheermote: t
                }
            }

            function m(e) {
                var t = e.messageBits,
                    n = t.total,
                    r = t.largestCheermote,
                    a = t.smallestCheermote;
                if (n) {
                    var c = {
                        cheerAboveMaxBitsPerEmote: r > o.p,
                        totalAboveBalance: n > e.balance,
                        totalBelowCheerMinimum: n < e.cheerMinimumBits,
                        totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                        inputLongerThanMaxBitsMessage: e.inputValue.length > o.o,
                        inputStartsWithCommand: e.inputValue.startsWith("/"),
                        cheerContainsInvalidDisplayOnlyCheermotes: Object(s.c)(e.inputValue, e.bitsConfig)
                    };
                    if (Object.keys(c).some(function(e) {
                            return c[e]
                        })) return i.__assign({
                        canSpend: !1
                    }, c)
                }
                return {
                    canSpend: !0
                }
            }

            function h(e) {
                var t = e.purchaseUrl;
                if (t) {
                    e.trackBitsCardInteraction(Object(c.d)(e.bitsAmount), {
                        location: e.location
                    });
                    var n = t.replace("{channelID}", e.channelID),
                        i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                    return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(c.a.CloseCard, {
                        location: e.location
                    })) : (i.focus(), i)
                }
            }
        },
        "hG/x": function(e, t, n) {},
        hWzS: function(e, t) {
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
                                        value: "currencyCode"
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
                    end: 158
                }
            };
            n.loc.source = {
                body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\ncurrencyCode\npromotion {\nid\ntype\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        hcvC: function(e, t, n) {},
        jv9u: function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("/7QA"),
                a = n("Ue10"),
                o = function() {
                    return i.createElement(a.Xa, {
                        padding: 1,
                        display: a.X.Flex,
                        alignItems: a.f.Center,
                        justifyContent: a.Wa.Center,
                        flexDirection: a.Aa.Column,
                        fullWidth: !0
                    }, i.createElement(a.Za, {
                        delay: 0
                    }), i.createElement(a.Xa, {
                        padding: {
                            top: 2
                        }
                    }, i.createElement(a.W, {
                        italic: !0
                    }, Object(r.d)("Fetching Bits", "BitsCard"))))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        "lB7/": function(e, t, n) {
            "use strict";
            var i = n("q1tI"),
                r = n("3CMh"),
                a = n("5zXJ"),
                o = n("4h+t"),
                s = n("Ue10");
            n("rAoL");

            function c(e) {
                var t = (e.bitsConfig && e.bitsConfig.indexedActions[a.l] || Object(o.b)()).orderedTiers.filter(function(t) {
                    return t.bits <= e.amount
                }).reverse().map(function(t) {
                    return i.createElement(s.Xa, {
                        display: s.X.Block,
                        className: "bits-available-tiers__tier-bits-image",
                        key: t.id
                    }, i.createElement(r.a, {
                        size: e.size,
                        amount: t.bits,
                        bitsConfig: e.bitsConfig,
                        prefix: a.l,
                        showImage: !0,
                        showAmount: !1,
                        animated: !1
                    }))
                });
                return i.createElement(s.Xa, {
                    display: s.X.Flex,
                    padding: {
                        y: .5
                    },
                    className: "bits-available-tiers__tier-bits-images"
                }, t)
            }
            n.d(t, "a", function() {
                return c
            })
        },
        lhih: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "e", function() {
                return a
            }), n.d(t, "g", function() {
                return o
            }), n.d(t, "f", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "d", function() {
                return l
            });
            var i = "AD",
                r = "BUNDLE",
                a = "first_time_purchase",
                o = "single_purchase",
                s = "prime_single_purchase",
                c = "black_friday_2018",
                l = "twitch_prime_2018"
        },
        mHh5: function(e, t, n) {},
        mZsS: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
                }(i || (i = {}))
        },
        miXC: function(e, t, n) {},
        opIq: function(e, t, n) {
            "use strict";
            var i, r = n("/MKj"),
                a = n("aCAx"),
                o = n("YV3K"),
                s = n("kRBY"),
                c = n("mrSG"),
                l = n("q1tI"),
                d = n("fvjX"),
                u = n("/7QA"),
                p = n("cZKs"),
                m = n("yR8l"),
                h = n("geRD");
            ! function(e) {
                e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
            }(i || (i = {}));
            var f = n("mZsS"),
                g = n("RiD7"),
                b = n("Ue10"),
                y = n("VR5Q"),
                v = (n("yGGv"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var t, n, r, a, o;
                                return c.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (e.origin !== window.location.origin) return [2];
                                            if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                            switch (t.type) {
                                                case f.a.Ready:
                                                    return [3, 1];
                                                case f.a.RequestAd:
                                                    return [3, 2];
                                                case f.a.Dimensions:
                                                    return [3, 3];
                                                case f.a.OnStart:
                                                    return [3, 4];
                                                case f.a.OnCredit:
                                                    return [3, 5];
                                                case f.a.OnClose:
                                                case f.a.OnFinish:
                                                case f.a.LimitReached:
                                                case f.a.Adblock:
                                                case f.a.OnError:
                                                    return [3, 9]
                                            }
                                            return [3, 10];
                                        case 1:
                                            return n = {
                                                msgSrc: "wateb-ad-modal",
                                                tuid: this.props.tuid
                                            }, e.source && e.source.postMessage(n, "*"), [2];
                                        case 2:
                                            try {
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.g)({
                                                    campaignID: r.campaign_id.toString(),
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
                                                if (!(r = JSON.parse(t.activityJSON))) return [2];
                                                Object(g.f)({
                                                    requestID: t.requestID,
                                                    adblock: !1,
                                                    campaignID: r.campaign_id.toString()
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
                                            return a = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                        case 7:
                                            return o = s.sent(), u.k.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(i.Unknown), [3, 8];
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            return this.props.onError && (t.type === f.a.LimitReached ? this.props.onError(i.LimitReached) : t.type === f.a.Adblock ? this.props.onError(i.Adblock) : t.type === f.a.OnError ? this.props.onError(i.Unknown) : this.hasAwarded || this.props.onError(i.ExitEarly)), this.props.closeModal(), [3, 10];
                                        case 10:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        window.addEventListener("message", this.messageHandler)
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("message", this.messageHandler)
                    }, t.prototype.render = function() {
                        return l.createElement(b.Eb, {
                            background: b.r.Base
                        }, l.createElement("div", {
                            className: "t-watch-ads-modal",
                            style: this.state.customDimensions
                        }, l.createElement(p.a, null), l.createElement("iframe", {
                            src: "/products/bits/ad"
                        })))
                    }, t = c.__decorate([Object(m.a)(y, {
                        name: "redeemTrueXAd"
                    })], t)
                }(l.Component));
            var C, B = Object(r.connect)(null, function(e) {
                    return Object(d.bindActionCreators)({
                        closeModal: a.c
                    }, e)
                })(v),
                k = n("TSYQ"),
                E = n("oJmH"),
                w = n("8/mp"),
                A = n("edgk"),
                _ = n("jv9u"),
                x = n("bYOw"),
                S = function(e) {
                    var t = l.createElement(b.W, {
                        type: b.Vb.P,
                        color: b.O.Alt
                    }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(b.W, {
                                type: b.Vb.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard"));
                    e.pricesIncludeVAT && (t = l.createElement(b.W, {
                        "data-test-selector": "prices-include-vat-selector",
                        type: b.Vb.P,
                        color: b.O.Alt
                    }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold> and <x:bold>include VAT</x:bold>", {
                        "x:bold": function(e) {
                            return l.createElement(b.W, {
                                type: b.Vb.Span,
                                bold: !0
                            }, e)
                        },
                        currencyCode: e.currencyCode
                    }, "Bits--BuyCard")));
                    var n = null;
                    e.minBitsToCheer && e.minBitsToCheer > 1 && (n = l.createElement(b.W, {
                        "data-test-selector": "min-bits-to-cheer-selector",
                        color: b.O.Alt
                    }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                        displayName: e.displayName,
                        minBits: e.minBitsToCheer
                    }, "Bits--BuyCard")));
                    var i = null;
                    return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = l.createElement(b.W, {
                        "data-test-selector": "bits-balance-header-selector",
                        color: b.O.Alt
                    }, Object(u.d)("You have {totalBits} Bits", {
                        totalBits: l.createElement("strong", {
                            "data-a-target": "buy-card-bits-count"
                        }, e.bitsBalance)
                    }, "Bits--BuyCard"))), l.createElement(b.Eb, {
                        className: "bits-buy-card-header",
                        padding: 1,
                        borderBottom: !0,
                        flexShrink: 0,
                        fullWidth: !0
                    }, l.createElement(b.Xa, null, e.location === g.b.ChatTooltip && l.createElement(b.W, {
                        type: b.Vb.H4,
                        color: b.O.Alt
                    }, Object(u.d)("Purchase Bits", "Bits--BuyCard")), t), e.location === g.b.ChatTooltip && l.createElement(b.Xa, {
                        margin: {
                            top: 1
                        }
                    }, i, n))
                },
                O = n("lB7/"),
                T = n("3CMh"),
                N = n("T3bn"),
                I = n("ebRM"),
                W = "min-bits-to-cheer-selector",
                L = "prices-include-vat-selector",
                R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleBuyClick = function(e) {
                            var n = t.props.displayName || "",
                                i = Object(I.b)({
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
                    return c.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderCurrencyDisclaimer(this.props.pricesIncludeVAT, this.props.currencyCode),
                            t = this.renderMinBitsToCheerInChannel(this.props.displayName, this.props.minBitsToCheer),
                            n = l.createElement(N.a, {
                                bitsConfig: this.props.bitsConfig,
                                bitsBalance: this.props.bitsBalance
                            }),
                            i = null,
                            r = null,
                            a = null;
                        return void 0 !== this.props.specialOffer && null !== this.props.specialOffer && (i = l.createElement(b.W, {
                            type: b.Vb.H4,
                            color: b.O.Base,
                            bold: !0
                        }, Object(u.d)("Special offer, {percent} off for first-time Bits buyers!", {
                            percent: Object(u.f)(this.props.specialOffer.discount, "percent")
                        }, "Bits--NewUserCheerHeader")), r = l.createElement(b.Xa, {
                            display: b.X.Flex
                        }, l.createElement(O.a, {
                            amount: this.props.specialOffer.bits,
                            bitsConfig: this.props.bitsConfig,
                            size: T.b.Small
                        })), a = l.createElement(b.z, {
                            onClick: this.handleBuyClick,
                            "data-purchase-url": this.props.specialOffer.url,
                            "data-bits-amount": this.props.specialOffer.bits,
                            "data-a-target": "bits-purchase-button-" + this.props.specialOffer.bits
                        }, Object(u.d)("Buy {amount} Bits for {price}", {
                            amount: this.props.specialOffer.bits,
                            price: this.props.specialOffer.price
                        }, "Bits--NewUserCheerHeader"))), l.createElement(b.Eb, {
                            className: "bits-buy-card-header",
                            padding: 1,
                            borderBottom: !0,
                            flexShrink: 0,
                            fullWidth: !0,
                            textAlign: b.Rb.Center
                        }, l.createElement(b.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n), l.createElement(b.Xa, {
                            margin: {
                                x: 2
                            }
                        }, i, t), l.createElement(b.Xa, {
                            justifyContent: b.Wa.Center,
                            display: b.X.Flex,
                            margin: {
                                y: 1
                            },
                            fullWidth: !0
                        }, r), a, l.createElement(b.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t.prototype.renderCurrencyDisclaimer = function(e, t) {
                        return e ? l.createElement(b.W, {
                            "data-test-selector": L,
                            type: b.Vb.P,
                            color: b.O.Alt
                        }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold> and <x:bold>include VAT</x:bold>", {
                            "x:bold": function(e) {
                                return l.createElement(b.W, {
                                    type: b.Vb.Span,
                                    bold: !0
                                }, e)
                            },
                            currencyCode: t
                        }, "Bits--NewUserCheerHeader")) : l.createElement(b.W, {
                            type: b.Vb.P,
                            color: b.O.Alt
                        }, Object(u.d)("Prices are shown in <x:bold>{currencyCode}</x:bold>", {
                            "x:bold": function(e) {
                                return l.createElement(b.W, {
                                    type: b.Vb.Span,
                                    bold: !0
                                }, e)
                            },
                            currencyCode: t
                        }, "Bits--NewUserCheerHeader"))
                    }, t.prototype.renderMinBitsToCheerInChannel = function(e, t) {
                        return t && t > 1 ? l.createElement(b.W, {
                            "data-test-selector": W,
                            color: b.O.Alt,
                            italic: !0
                        }, Object(u.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                            displayName: e,
                            minBits: t
                        }, "BBits--NewUserCheerHeader")) : null
                    }, t
                }(l.Component),
                j = n("3qL/"),
                X = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onWatchAnother = function() {
                            t.props.trackBitsCardInteraction(g.a.WatchAnotherAd), t.props.onWatchAnother && t.props.onWatchAnother()
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(b.Xa, {
                            display: b.X.Flex,
                            flexGrow: 1,
                            flexDirection: b.Aa.Column,
                            alignItems: b.f.Center,
                            fullWidth: !0,
                            flexWrap: b.Ba.NoWrap,
                            padding: {
                                y: 1
                            }
                        }, l.createElement(T.a, {
                            prefix: "cheer",
                            amount: this.props.amount,
                            bitsConfig: this.props.bitsConfig,
                            showAmount: !0,
                            showImage: !0
                        }), l.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                top: 1
                            },
                            flexGrow: 1,
                            flexDirection: b.Aa.Column,
                            alignItems: b.f.Center,
                            flexWrap: b.Ba.NoWrap
                        }, l.createElement(b.W, {
                            type: b.Vb.H4,
                            bold: !0
                        }, Object(u.d)("You got {bitsAmount,number} Bits!", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward")), l.createElement(b.Pa, {
                            padding: {
                                top: 1
                            }
                        }, l.createElement(b.W, {
                            color: b.O.Alt2
                        }, Object(u.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                            bitsAmount: this.props.amount
                        }, "Bits--WatchAdAward"), l.createElement("br", null), Object(u.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), l.createElement(b.Xa, {
                            display: b.X.Flex,
                            padding: {
                                x: 1,
                                top: 3
                            },
                            alignSelf: b.g.Stretch,
                            justifyContent: b.Wa.Between
                        }, l.createElement(b.z, {
                            onClick: this.props.onStartCheering
                        }, Object(u.d)("Start Cheering", "Bits--WatchAdAward")), l.createElement(b.z, {
                            type: b.F.Hollow,
                            "data-a-target": "bits-watch-another-ad",
                            onClick: this.onWatchAnother,
                            disabled: !this.props.hasAdAvailable
                        }, Object(u.d)("Watch Another", "Bits--WatchAdAward"))))
                    }, t
                }(l.Component),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasAdAvailable: !0
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.componentWillMount = function() {
                        return c.__awaiter(this, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Object(j.b)(this.props.truexUserID)];
                                    case 1:
                                        return e.sent() !== j.a.Available && this.setState({
                                            hasAdAvailable: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        return l.createElement(X, c.__assign({}, this.props, {
                            hasAdAvailable: this.state.hasAdAvailable
                        }))
                    }, t
                }(l.Component),
                D = n("5zXJ"),
                V = (n("7APm"), function(e) {
                    var t = Object(u.d)("Something's wrong!", "Bits--WatchAdError"),
                        n = Object(u.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                        r = "adserrorgeneric";
                    switch (e.type) {
                        case i.Adblock:
                            r = "adserroradblock", n = Object(u.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                            break;
                        case i.LimitReached:
                            r = "adserrorlimit", t = Object(u.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(u.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                            break;
                        case i.ExitEarly:
                            n = Object(u.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                    }
                    var a = l.createElement(b.Xa, {
                        className: "watch-ad-error__footer",
                        display: b.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: b.g.Stretch,
                        justifyContent: b.Wa.Center
                    }, l.createElement(b.z, {
                        onClick: e.onTryAgain
                    }, Object(u.d)("Try Again", "Bits--WatchAdError")));
                    return e.type === i.LimitReached && (a = l.createElement(b.Xa, {
                        className: "watch-ad-error__footer",
                        display: b.X.Flex,
                        padding: {
                            top: 2
                        },
                        alignSelf: b.g.Stretch,
                        justifyContent: b.Wa.Between
                    }, l.createElement(b.z, {
                        onClick: e.onClose
                    }, Object(u.d)("Got It", "Bits--WatchAdError")), l.createElement(b.z, {
                        onClick: e.onTryAgain,
                        type: b.F.Hollow
                    }, Object(u.d)("Buy Bits", "Bits--WatchAdError")))), l.createElement(b.Xa, {
                        padding: {
                            x: 1
                        },
                        display: b.X.Flex,
                        flexGrow: 1,
                        flexDirection: b.Aa.Column,
                        alignItems: b.f.Center,
                        fullWidth: !0,
                        flexWrap: b.Ba.NoWrap
                    }, l.createElement(b.Xa, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement("img", {
                        className: "watch-ad-error__error-image",
                        src: D.b + "/light/static/1/" + r + ".png"
                    })), l.createElement(b.Xa, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(b.W, {
                        type: b.Vb.H4,
                        bold: !0
                    }, t)), l.createElement(b.W, {
                        color: b.O.Alt2
                    }, n), a)
                }),
                M = n("lhih"),
                F = n("GnwI"),
                q = n("zmay"),
                z = (n("NvZ5"), "storage.wateb.agreedToWatebTerms.v1"),
                U = "bits-show-wateb-terms",
                H = "bits-agree-wateb-terms";
            ! function(e) {
                e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
            }(C || (C = {}));
            var G = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            wateb: C.Inactive,
                            watebError: null,
                            bitsAwarded: 0,
                            showWatebTerms: !1,
                            agreedToWatebTerms: u.m.get(z, !1)
                        }, t.onBuyPopupClose = function(e) {
                            Object(A.a)(e, function() {
                                t.props.data && t.props.data.refetch()
                            })
                        }, t.onAdBitsAwarded = function(e) {
                            t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                                wateb: C.Awarded,
                                bitsAwarded: e
                            })
                        }, t.renderWatebTerms = function(e) {
                            return l.createElement(b.Xa, {
                                className: e,
                                textAlign: b.Rb.Left,
                                fullWidth: !0,
                                padding: {
                                    x: 2,
                                    bottom: 2,
                                    top: 5
                                },
                                "data-a-target": U
                            }, l.createElement(b.Xa, {
                                position: b.jb.Absolute,
                                padding: {
                                    top: .5,
                                    left: .5
                                },
                                attachLeft: !0,
                                attachTop: !0
                            }, l.createElement("div", {
                                key: "Bits--back-edit",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: t.onCloseWatebTerms
                            }, l.createElement(b.W, {
                                color: b.O.Link,
                                type: b.Vb.Span
                            }, l.createElement(b.sb, {
                                asset: b.tb.ChatSettingsBack,
                                height: 10,
                                width: 10
                            }), Object(u.d)("Back", "Bits--Watch-Ad-Terms")))), l.createElement(b.Xa, {
                                padding: {
                                    bottom: 2
                                }
                            }, l.createElement(b.W, {
                                type: b.Vb.Span
                            }, Object(u.d)("Before continuing to watch ads to earn Bits, we remind you that the <x:link>Bits Acceptable Use Policy</x:link> applies to your participation with this feature and any Bits you may obtain. As a reminder, you may not:", {
                                "x:link": function(e) {
                                    return l.createElement("a", {
                                        href: "https://www.twitch.tv/p/legal/bits-acceptable-use/",
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    }, e)
                                }
                            }, "Bits--Watch-Ad-Terms")), l.createElement(b.Xa, {
                                margin: {
                                    y: 1
                                }
                            }, l.createElement("li", null, Object(u.d)("Obtain Bits to Cheer on your own channel via this feature", "Bits--Watch-Ad-Terms")), l.createElement("li", null, Object(u.d)("Collect Bits via this feature through the use of multiple accounts, robots, or other automated means", "Bits--Watch-Ad-Terms")))), l.createElement(b.Xa, {
                                display: b.X.Flex,
                                justifyContent: b.Wa.Center
                            }, l.createElement(b.z, {
                                size: b.D.Small,
                                onClick: t.onAgreeToWatebTerms,
                                "data-a-target": H
                            }, Object(u.d)("Continue", "Bits--Watch-Ad-Terms"))))
                        }, t.onAgreeToWatebTerms = function() {
                            u.m.set(z, !0), t.setState({
                                agreedToWatebTerms: !0,
                                showWatebTerms: !1
                            }), t.showWatchAdModal()
                        }, t.onCloseWatebTerms = function() {
                            t.setState({
                                showWatebTerms: !1
                            })
                        }, t.handleWatchAdClick = function() {
                            return c.__awaiter(t, void 0, void 0, function() {
                                return c.__generator(this, function(e) {
                                    return this.state.agreedToWatebTerms ? (this.showWatchAdModal(), [2]) : (this.setState({
                                        showWatebTerms: !0
                                    }), [2])
                                })
                            })
                        }, t.receiveAdErrorState = function(e) {
                            t.setState({
                                wateb: C.Error,
                                watebError: e
                            })
                        }, t.resetAdErrorState = function() {
                            t.state.wateb === C.Error && (t.setState({
                                wateb: C.Inactive
                            }), t.props.data && t.props.data.refetch())
                        }, t
                    }
                    return c.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !e.adModalOpen
                    }, t.prototype.render = function() {
                        var e = this.props.location === g.b.ChatTooltip,
                            t = k({
                                "bits-buy-card": !0,
                                "bits-buy-card__chat-tooltip": e
                            });
                        if (!this.props.data || this.props.data.loading) return l.createElement(_.a, null);
                        if (this.props.data.error) return l.createElement(b.Xa, {
                            className: k(t, "bits-buy-card--shorter"),
                            textAlign: b.Rb.Center,
                            "data-a-target": "bits-buy-card-error",
                            alignItems: b.f.Center,
                            justifyContent: b.Wa.Center,
                            display: b.X.Flex,
                            padding: 1,
                            fullWidth: !0
                        }, l.createElement(b.W, {
                            italic: !0
                        }, Object(u.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                        if (this.state.showWatebTerms) return this.renderWatebTerms(t);
                        var n = this.renderWatebCard();
                        if (n) return l.createElement(b.Xa, {
                            textAlign: b.Rb.Center,
                            className: k(t, "bits-buy-card--shorter"),
                            fullWidth: !0
                        }, n);
                        var i = [];
                        return this.props.data.currentUser && this.props.data.currentUser.bitsOffers ? i = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (i = this.props.data.bitsOffers), this.props.shouldShowNewUserCheerUX ? this.renderNewUserCheerBuyCard(t, i) : this.renderDefaultBuyCard(t, i)
                    }, t.prototype.renderDefaultBuyCard = function(e, t) {
                        var n = this.doPricesIncludeVAT(t),
                            i = this.getCurrencyCode(t),
                            r = this.props.data && this.props.data.currentUser,
                            a = this.props.data && this.props.data.user,
                            o = l.createElement(S, {
                                bitsBalance: r && r.bitsBalance,
                                displayName: a && a.displayName || this.props.channelLogin || "",
                                minBitsToCheer: a && a.cheer && a.cheer.settings && a.cheer.settings.cheerMinimumBits,
                                pricesIncludeVAT: n,
                                currencyCode: i,
                                location: this.props.location
                            }),
                            s = this.renderBitsOffers(t, {
                                hidePromos: this.props.hidePromos,
                                hideWateb: this.props.hideWateb,
                                size: this.props.size
                            });
                        return l.createElement(b.Xa, {
                            className: e,
                            "data-a-target": "bits-buy-card",
                            fullWidth: !0
                        }, o, s)
                    }, t.prototype.renderNewUserCheerBuyCard = function(e, t) {
                        var n = this.getSpecialOffer(t),
                            i = this.doPricesIncludeVAT(t),
                            r = this.getCurrencyCode(t),
                            a = null;
                        this.props.onBack && (a = l.createElement(b.Xa, {
                            position: b.jb.Absolute,
                            padding: {
                                top: .5,
                                left: .5
                            },
                            attachLeft: !0,
                            attachTop: !0
                        }, l.createElement("div", {
                            key: "Bits--back-edit",
                            "data-a-target": "bits-buy-card--back",
                            style: {
                                cursor: "pointer"
                            },
                            onClick: this.props.onBack
                        }, l.createElement(b.W, {
                            color: b.O.Link,
                            type: b.Vb.Span
                        }, l.createElement(b.sb, {
                            asset: b.tb.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(u.d)("Back", "Bits--Buy-Card")))));
                        var o = l.createElement(R, {
                                bitsConfig: this.props.bitsConfig,
                                bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                                displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                                minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                                pricesIncludeVAT: i,
                                currencyCode: r,
                                closeAllBits: this.props.closeAllBits,
                                location: this.props.location,
                                specialOffer: n,
                                onBuyPopupClose: this.onBuyPopupClose,
                                onClose: this.props.onClose,
                                trackBitsCardInteraction: this.props.trackBitsCardInteraction
                            }),
                            s = this.renderBitsOffers(t, {
                                hidePromos: !0,
                                hideWateb: !1,
                                size: x.b.Smallnoscroll
                            });
                        return l.createElement(w.b, {
                            "data-a-target": "bits-buy-card",
                            className: e
                        }, l.createElement(l.Fragment, null, a, o, s))
                    }, t.prototype.renderBitsOffers = function(e, t) {
                        var n = t.hidePromos,
                            i = t.hideWateb,
                            r = t.size;
                        if (!this.props || !this.props.data) return null;
                        var a = this.props.data.user ? this.props.data.user.id : "";
                        return l.createElement(x.a, {
                            offers: e,
                            size: r,
                            hidePromos: n,
                            hideWateb: i,
                            bitsConfig: this.props.bitsConfig,
                            channelID: a,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction,
                            email: this.props.data.currentUser && this.props.data.currentUser.email,
                            isEmailVerified: this.props.data.currentUser && this.props.data.currentUser.isEmailVerified
                        })
                    }, t.prototype.doPricesIncludeVAT = function(e) {
                        return e.filter(function(e) {
                            return e.type === M.b
                        }).some(function(e) {
                            return e.includesVAT
                        })
                    }, t.prototype.getCurrencyCode = function(e) {
                        var t = "",
                            n = e.filter(function(e) {
                                return e.type === M.b
                            }).pop();
                        return n && n.type === M.b && (t = n.currencyCode), t
                    }, t.prototype.getSpecialOffer = function(e) {
                        return e.filter(function(e) {
                            return e.type === M.b
                        }).find(function(e) {
                            return e.isPromo && null !== e.promotion && e.promotion.id === M.e
                        })
                    }, t.prototype.renderWatebCard = function() {
                        if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                            case C.Awarded:
                                return l.createElement(P, {
                                    bitsConfig: this.props.bitsConfig,
                                    amount: this.state.bitsAwarded,
                                    onStartCheering: this.props.onClose,
                                    onWatchAnother: this.handleWatchAdClick,
                                    truexUserID: this.props.data.currentUser.idSHA1,
                                    trackBitsCardInteraction: this.props.trackBitsCardInteraction
                                });
                            case C.Error:
                                return l.createElement(V, {
                                    type: this.state.watebError || i.Unknown,
                                    onClose: this.props.onClose,
                                    onTryAgain: this.resetAdErrorState
                                });
                            default:
                                return
                        }
                    }, t.prototype.showWatchAdModal = function() {
                        this.props.data && this.props.data.currentUser && this.props.data.user && this.props.showWatchAdModal({
                            tuid: this.props.data.currentUser.idSHA1,
                            onBitsAwarded: this.onAdBitsAwarded,
                            onError: this.receiveAdErrorState,
                            requestRef: g.c.ShowAdButton,
                            channelID: this.props.data.user.id
                        })
                    }, t.defaultProps = {
                        hidePromos: !1,
                        hideWateb: !1
                    }, t
                }(l.Component),
                Y = Object(E.compose)(Object(m.a)(q, {
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
                }), Object(F.b)("BitsBuyCard", {
                    autoReportInteractive: !0
                }))(G);

            function Q(e) {
                return {
                    adModalOpen: Object(o.b)(e, B),
                    isLoggedIn: Object(s.f)(e)
                }
            }

            function K(e) {
                return {
                    showWatchAdModal: function(t) {
                        return e(Object(a.d)(B, t))
                    }
                }
            }
            var J = Object(r.connect)(Q, K)(Y);
            n.d(t, !1, function() {
                return Q
            }), n.d(t, !1, function() {
                return K
            }), n.d(t, "a", function() {
                return J
            })
        },
        "pN/j": function(e, t, n) {},
        rAoL: function(e, t, n) {},
        sRTl: function(e, t, n) {},
        uYEN: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.Gray = 1] = "Gray", e[e.Purple = 100] = "Purple", e[e.Green = 1e3] = "Green", e[e.Blue = 5e3] = "Blue", e[e.Red = 1e4] = "Red", e[e.Yellow = 1e5] = "Yellow"
                }(i || (i = {}))
        },
        x1M1: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/MKj"),
                o = n("/0dD"),
                s = n("XDQu"),
                c = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = (e.defaultRes, e.sources),
                            n = (e.darkModeEnabled, i.__rest(e, ["defaultRes", "sources", "darkModeEnabled"])),
                            a = this.props.darkModeEnabled ? t.dark : t.light,
                            o = Object.keys(a);
                        delete n.dispatch;
                        var s = i.__assign({}, n, {
                            src: a[this.props.defaultRes || o[0]],
                            srcSet: o.map(function(e) {
                                return a[e] + " " + e
                            }).join(",")
                        });
                        return r.createElement("img", i.__assign({}, s, {
                            onLoad: this.props.onLoad
                        }))
                    }, t
                }(r.Component);
            var l = Object(a.connect)(function(e) {
                return {
                    darkModeEnabled: Object(s.a)(e) === o.a.Dark
                }
            })(c);
            n.d(t, "a", function() {
                return l
            })
        },
        yGGv: function(e, t, n) {},
        zmay: function(e, t, n) {
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "email"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isEmailVerified"
                                    },
                                    arguments: [],
                                    directives: []
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
                    end: 462
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\nemail\nisEmailVerified\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("hWzS").definitions)), e.exports = i
        }
    }
]);