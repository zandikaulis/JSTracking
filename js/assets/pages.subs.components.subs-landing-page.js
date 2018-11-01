(window.webpackJsonp = window.webpackJsonp || []).push([
    [173], {
        "+Mtq": function(e, t, n) {},
        "3GEC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return a
            });
            var r = n("mrSG"),
                i = n("/7QA"),
                s = n("2xye");

            function o(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return r.__generator(this, function(n) {
                        return t = {
                            channel: e.channel,
                            channel_id: e.channelId,
                            clickthrough_location: e.clickthroughLocation
                        }, i.o.track(s.SpadeEventType.SubsLandingStreamerClick, t), [2]
                    })
                })
            }

            function a(e) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return r.__generator(this, function(r) {
                        if (t = null, e.isSubscribedCurrentTier) switch (e.isSubscribedCurrentTier) {
                            case "1000":
                                t = "$4.99";
                                break;
                            case "2000":
                                t = "$9.99";
                                break;
                            case "3000":
                                t = "$24.99"
                        }
                        return n = {
                            action: e.action,
                            can_subscribe: e.canSubscribe,
                            channel: e.channelLogin,
                            channel_id: e.channelID,
                            checkout_button_tier: e.checkoutButtonTier,
                            has_sub_credit: e.hasSubCredit,
                            host_channel: e.hostChannelLogin,
                            host_channel_id: e.hostChannelID,
                            is_menu_open: e.isMenuOpen,
                            is_subscribed: e.isSubscribed,
                            is_subscribed_current_tier: t,
                            sub_location: e.sub_location,
                            modal: e.modal,
                            modal_level: "",
                            show_prime_content: e.showPrimeContent,
                            show_resub: e.showResub,
                            vod_id: "",
                            vod_type: "",
                            viewport_height: window.innerHeight,
                            viewport_width: window.innerWidth
                        }, i.o.track(s.SpadeEventType.Subscription, n), [2]
                    })
                })
            }
        },
        "4VQm": function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                s = n("TSYQ"),
                o = n("17x9"),
                a = n("q1tI"),
                l = n("GxwZ"),
                c = n("N0BP"),
                u = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(r || (r = {}));
            var d = function(e) {
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
                                type: r.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: r.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: r.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, u)
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
                                var r = t.getBoundingClientRect();
                                e.checkVisible(r)
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new l(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, i.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return a.createElement("div", i.__assign({
                        className: s(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(c.a)(this.props), {
                        style: this.props.style
                    }), a.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: o.func
                }, t.childContextTypes = {
                    registerReceiver: o.func,
                    requestVisibilityCheck: o.func,
                    getScrollContent: o.func,
                    scrollToTop: o.func,
                    yScrollTo: o.func
                }, t
            }(a.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return d
            })
        },
        "8/mp": function(e, t, n) {
            "use strict";
            var r = n("4VQm"),
                i = n("HAa/"),
                s = n("/MKj"),
                o = n("mrSG"),
                a = n("17x9"),
                l = n("q1tI"),
                c = n("/7QA"),
                u = n("Ue10"),
                d = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                r = e.anchoredTop,
                                i = e.top,
                                s = e.width,
                                o = t || r,
                                a = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (a = "inherit", o = !1) : o && (a = "fixed"), {
                                position: a,
                                top: r ? "inherit" : i,
                                width: o ? s : "inherit"
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
                        t ? this.unregister = t(this) : c.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return l.createElement(u.Xa, {
                            position: u.hb.Relative,
                            fullWidth: !0
                        }, l.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var e, n, i, s, a;
                            return o.__generator(this, function(o) {
                                return !t || t.type !== r.a.Resize && t.type !== r.a.Wheel && t.type !== r.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === r.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === r.a.Wheel && e ? (i = t.wheelEvent, s = void 0, s = 0 === i.deltaMode ? i.deltaY || i.wheelDelta : 16 * i.deltaY, a = s + t.offset, this.context.yScrollTo(a), this.checkBounding(s > 0, t.offset)) : t.type !== r.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
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
                                var r = t.top < n,
                                    i = t.top >= window.innerHeight,
                                    s = t.bottom < n,
                                    o = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    a = !i && !r,
                                    l = !o && !s;
                                !a && !l || a && l || (!e && a && this.lockTop(), e && l && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), r && s && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), i && o && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                r = n.offsetTop,
                                i = n.width,
                                s = this.element.getBoundingClientRect(),
                                o = window.innerHeight - (r || 0),
                                a = i;
                            t = "inherit", s.height <= o ? a = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - s.height + o - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: a,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: a.func,
                        yScrollTo: a.func
                    }, t
                }(l.Component);
            var p = Object(s.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(d);
            n.d(t, "b", function() {
                return r.b
            }), n.d(t, "a", function() {
                return i.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        "9kXc": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "a", function() {
                return c
            });
            var r = n("/7QA"),
                i = n("yLwq"),
                s = n("kduP"),
                o = n("2xye"),
                a = n("sLmD");

            function l(e) {
                var t, n, a, l, d = e.append,
                    p = void 0 !== d && d,
                    h = e.searchResults,
                    m = e.currentGameResults,
                    g = e.currentUserResults,
                    f = e.currentVideoResults,
                    b = e.currentLiveResults;
                if (h.games && (t = {
                        totalHits: h.games.totalHits,
                        results: p && m ? m.results : []
                    }, p && h.exhaustedHits && m && !h.games.totalHits && (t.totalHits = m.totalHits), t.results = t.results.concat(h.games.hits.map(function(e, t) {
                        var n, i = r.p.intl.getLanguageCode();
                        n = i && void 0 !== e.localizations && i in e.localizations ? e.localizations[i] : e.name;
                        var a = u(e.tags);
                        return {
                            title: n,
                            thumbnailAltText: e.name,
                            linkTo: {
                                pathname: Object(s.c)(e.name),
                                state: {
                                    content: o.PageviewContent.Game,
                                    content_index: t,
                                    medium: o.PageviewMedium.NavSearch
                                }
                            },
                            id: e.objectID,
                            popularity: e.popularity,
                            tags: a
                        }
                    }))), h.videos) {
                    var v = p && f ? f.results : [],
                        y = h.videos.totalHits;
                    p && h.exhaustedHits && f && !h.videos.totalHits && (y = f.totalHits), a = function(e, t, n) {
                        return {
                            results: e.concat(t.hits.map(c)),
                            totalHits: t.totalHits || n
                        }
                    }(v, h.videos, y)
                }
                return h.users && (n = {
                    totalHits: p && g ? g.totalHits : h.users.totalHits,
                    results: p && g ? g.results : []
                }, p && h.exhaustedHits && g && !h.users.totalHits && (n.totalHits = g.totalHits), n.results = n.results.concat(h.users.hits.map(function(e, t) {
                    return {
                        login: e.login,
                        name: e.name,
                        thumbnail: e.profile_image || Object(i.c)(e.objectID, 64),
                        thumbnailAltText: e.name,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.User,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        followers: e.followers
                    }
                }))), h.channels && ((l = {
                    totalHits: p && b ? b.totalHits : h.channels.totalHits,
                    results: p && b ? b.results : []
                }).results = l.results.concat(h.channels.hits.map(function(e, t) {
                    var n = u(e.graffiti);
                    return {
                        viewerCount: e.channel_count,
                        login: e.login,
                        name: e.name,
                        thumbnailAltText: e.status,
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                content: o.PageviewContent.Live,
                                content_index: t,
                                medium: o.PageviewMedium.NavSearch
                            }
                        },
                        id: e.objectID,
                        status: e.status,
                        tags: n
                    }
                }))), {
                    currentGameResults: t,
                    currentUserResults: n,
                    currentLiveResults: l,
                    currentVideoResults: a,
                    exhaustedHits: h.exhaustedHits
                }
            }

            function c(e, t) {
                return {
                    title: e.title,
                    thumbnail: e.thumbnail,
                    thumbnailAltText: e.title,
                    linkTo: {
                        pathname: "/videos/" + e.objectID,
                        state: {
                            content: o.PageviewContent.Video,
                            content_index: t,
                            medium: o.PageviewMedium.NavSearch
                        }
                    },
                    login: e.broadcaster_login,
                    name: e.broadcaster_name,
                    createdAt: e.created_at,
                    length: e.length,
                    id: e.objectID
                }
            }

            function u(e) {
                if (e) return e.map(function(e) {
                    var t, n = Object(a.a)();
                    return t = n && void 0 !== e.localizations && n in e.localizations ? e.localizations[n] : e.name, {
                        id: e.id,
                        isLanguageTag: e.name.includes("auto___lang"),
                        localizedName: t,
                        tagName: e.name
                    }
                })
            }
        },
        BSTw: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Algolia_RequestInfo"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "requestInfo"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "countryCode"
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
                    end: 57
                }
            };
            n.loc.source = {
                body: "query Algolia_RequestInfo {\nrequestInfo {\ncountryCode\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "H/lO": function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", function() {
                    return r
                }),
                function(e) {
                    e.Games = "game", e.Videos = "vod", e.Users = "user", e.Channels = "live_channel", e.StreamTags = "stream_tag", e.Tags = "tag"
                }(r || (r = {}))
        },
        "HAa/": function(e, t, n) {
            "use strict";
            var r, i = n("mrSG"),
                s = n("TSYQ"),
                o = n("17x9"),
                a = n("q1tI"),
                l = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(r || (r = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            r = t.top + t.height;
                        return !(e.bottom < n || e.top > r)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? r.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = s({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === r.Up,
                            "scrollable-trigger__trigger-area--down": e === r.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return a.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, a.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : l.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, r, s, o, a = this;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), r = this.props.contentLength, s = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return i.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        a.element && (t = void 0 !== a.props.contentLength && void 0 !== r ? a.props.contentLength > r : a.wrapElement.offsetTop > s, a.setState({
                                            loadedMore: t
                                        }), n && (t || a.props.forceLoadMoreContent) && a.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw o = i.sent(), this.element && this.setState({
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
            }(a.Component);
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return c
            })
        },
        N0BP: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = {}, n = 0, r = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < r.length; n++) {
                    var i = r[n];
                    t[i] = e[i]
                }
                return t
            }
            n.d(t, "a", function() {
                return r
            })
        },
        NZDK: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return p
            });
            var r = n("mrSG"),
                i = n("hnrd"),
                s = n("/7QA"),
                o = n("D7An"),
                a = n("H/lO"),
                l = n("vR4/"),
                c = n("BSTw"),
                u = n("Z9JJ"),
                d = {
                    games: {
                        indexName: a.a.Games,
                        hitsPerPage: 2,
                        topNumericFilters: ["popularity>1"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    videos: {
                        indexName: a.a.Videos,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["created_at>" + m(function() {
                                var e = new Date;
                                return e.setMonth(e.getMonth() - 1), Math.floor(e.getTime() / 1e3)
                            }())]
                        },
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    users: {
                        indexName: a.a.Users,
                        hitsPerPage: 2,
                        topNumericFilters: ["followers>50"],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    channels: {
                        indexName: a.a.Channels,
                        hitsPerPage: 6,
                        get topNumericFilters() {
                            return ["channel_count>10", "updated_on>" + m(h())]
                        },
                        get singleTypeNumericFilters() {
                            return ["updated_on>" + m(h())]
                        },
                        optionalFacetFilters: ""
                    },
                    streamTags: {
                        indexName: a.a.StreamTags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    },
                    tags: {
                        indexName: a.a.Tags,
                        hitsPerPage: 2,
                        topNumericFilters: [],
                        singleTypeNumericFilters: [],
                        optionalFacetFilters: ""
                    }
                },
                p = function() {
                    function e(e) {
                        this.apolloClient = e.apolloClient, this.client = i(e.appId, e.apiKey), this.stats = e.stats, this.logger = e.logger.withCategory("search-client"), this.sendSearchRequestToForage = "variant" === s.p.experiments.getAssignment(o.b.NewSearchBackend), this.getCountryCode()
                    }
                    return e.prototype.queryTopResults = function(e, t) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n, i, s, o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return i = [], (n = []).push(this.getTopResult(d.games, e)), n.push(this.getTopResult(d.videos, e)), n.push(this.getTopResult(d.users, e)), n.push(this.getTopResult(d.channels, e)), i.push(this.getTotalResult(d.games, e)), i.push(this.getTotalResult(d.videos, e)), i.push(this.getTotalResult(d.users, e)), i.push(this.getTotalResult(d.channels, e)), [4, this.query(n.concat(i))];
                                    case 1:
                                        return (s = r.sent()) ? (o = s.results, [2, {
                                            id: t,
                                            games: {
                                                totalHits: o[4].nbHits,
                                                hits: o[0].hits
                                            },
                                            videos: {
                                                totalHits: o[5].nbHits,
                                                hits: o[1].hits
                                            },
                                            users: {
                                                totalHits: o[6].nbHits,
                                                hits: o[2].hits
                                            },
                                            channels: {
                                                totalHits: o[7].nbHits,
                                                hits: o[3].hits
                                            }
                                        }]) : [2, function(e) {
                                            return {
                                                id: e,
                                                games: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                videos: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                users: {
                                                    totalHits: 0,
                                                    hits: []
                                                },
                                                channels: {
                                                    totalHits: 0,
                                                    hits: []
                                                }
                                            }
                                        }(t)]
                                }
                            })
                        })
                    }, e.prototype.queryForType = function(e, t, n, i) {
                        var s = void 0 === i ? {} : i,
                            o = s.page,
                            l = void 0 === o ? 0 : o,
                            c = s.hitsPerPage,
                            u = void 0 === c ? 50 : c,
                            p = s.facetFilters,
                            h = void 0 === p ? "" : p,
                            m = s.numericFilters,
                            g = s.restrictSearchableAttributes,
                            f = void 0 === g ? [] : g;
                        return r.__awaiter(this, void 0, void 0, function() {
                            var i, s, o, c, p, g, b, v, y = this;
                            return r.__generator(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        switch (i = {
                                            id: n,
                                            currentPage: l
                                        }, s = function(e) {
                                            return r.__awaiter(y, void 0, void 0, function() {
                                                var n, s;
                                                return r.__generator(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return n = {
                                                                indexName: e.indexName,
                                                                query: t,
                                                                params: {
                                                                    page: l,
                                                                    hitsPerPage: u,
                                                                    numericFilters: m || e.singleTypeNumericFilters,
                                                                    facets: "*",
                                                                    facetFilters: h,
                                                                    restrictSearchableAttributes: f
                                                                }
                                                            }, [4, this.query([n])];
                                                        case 1:
                                                            return (s = r.sent()) ? (i.exhaustedHits = !s.results[0].nbHits || s.results[0].hits.length < u, [2, {
                                                                totalHits: s.results[0].nbHits,
                                                                hits: s.results[0].hits
                                                            }]) : (i.exhaustedHits = !0, [2, {
                                                                totalHits: 0,
                                                                hits: []
                                                            }])
                                                    }
                                                })
                                            })
                                        }, e) {
                                            case a.a.Games:
                                                return [3, 1];
                                            case a.a.Users:
                                                return [3, 3];
                                            case a.a.Channels:
                                                return [3, 5];
                                            case a.a.Videos:
                                                return [3, 7];
                                            case a.a.StreamTags:
                                                return [3, 9];
                                            case a.a.Tags:
                                                return [3, 11]
                                        }
                                        return [3, 13];
                                    case 1:
                                        return o = i, [4, s(d.games)];
                                    case 2:
                                        return o.games = _.sent(), [3, 14];
                                    case 3:
                                        return c = i, [4, s(d.users)];
                                    case 4:
                                        return c.users = _.sent(), [3, 14];
                                    case 5:
                                        return p = i, [4, s(d.channels)];
                                    case 6:
                                        return p.channels = _.sent(), [3, 14];
                                    case 7:
                                        return g = i, [4, s(d.videos)];
                                    case 8:
                                        return g.videos = _.sent(), [3, 14];
                                    case 9:
                                        return b = i, [4, s(d.streamTags)];
                                    case 10:
                                        return b.streamTags = _.sent(), [3, 14];
                                    case 11:
                                        return v = i, [4, s(d.tags)];
                                    case 12:
                                        return v.tags = _.sent(), [3, 14];
                                    case 13:
                                        return [2, null];
                                    case 14:
                                        return [2, i]
                                }
                            })
                        })
                    }, e.prototype.queryVideos = function(e, t, n) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var i, s, o, c;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        switch (i = a.a.Videos, s = [], n.length) {
                                            case l.a.Short:
                                                s.push("length<=900");
                                                break;
                                            case l.a.Long:
                                                s.push("length>900")
                                        }
                                        switch (o = {
                                            indexName: i,
                                            query: e,
                                            params: {
                                                page: 0,
                                                hitsPerPage: 50,
                                                numericFilters: s,
                                                facets: "*",
                                                facetFilters: ""
                                            }
                                        }, n.type) {
                                            case l.b.PastBroadcasts:
                                                o.params.facetFilters = "broadcast_type:archive";
                                                break;
                                            case l.b.Uploads:
                                                o.params.facetFilters = "broadcast_type:upload";
                                                break;
                                            case l.b.Highlights:
                                                o.params.facetFilters = "broadcast_type:highlight"
                                        }
                                        return [4, this.query([o])];
                                    case 1:
                                        return (c = r.sent()) ? [2, {
                                            id: t,
                                            totalHits: c.results[0].nbHits,
                                            hits: c.results[0].hits
                                        }] : [2, {
                                            id: t,
                                            totalHits: 0,
                                            hits: []
                                        }]
                                }
                            })
                        })
                    }, e.prototype.getCountryCode = function() {
                        var e = this;
                        this.apolloClient.query({
                            query: c
                        }).then(function(t) {
                            e.countryCode = t.data.requestInfo.countryCode
                        }).catch(function(t) {
                            e.logger.warn(t, "Failed to get country code")
                        })
                    }, e.prototype.getSearchResults = function(e) {
                        var t = this,
                            n = {
                                query: e,
                                platform: "web"
                            };
                        return this.apolloClient.query({
                            query: u,
                            variables: n,
                            fetchPolicy: "network-only"
                        }).then(function(e) {
                            if (e.data.search) return {
                                results: JSON.parse(e.data.search.result)
                            }
                        }).catch(function(e) {
                            return t.logger.warn(e, "Failed to get search results"), e
                        })
                    }, e.prototype.getTopResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                page: 0,
                                hitsPerPage: e.hitsPerPage,
                                numericFilters: e.topNumericFilters
                            }
                        }
                    }, e.prototype.getTotalResult = function(e, t) {
                        return {
                            indexName: e.indexName,
                            query: t,
                            params: {
                                hitsPerPage: 0,
                                numericFilters: e.singleTypeNumericFilters
                            }
                        }
                    }, e.prototype.query = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var t, n, i, s, o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        n = Date.now(), s = !1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 6, , 7]), this.sendSearchRequestToForage && e.length > 7 ? (o = e[0].query, [4, this.getSearchResults(o)]) : [3, 3];
                                    case 2:
                                        return t = r.sent(), [3, 5];
                                    case 3:
                                        return [4, this.client.search(e)];
                                    case 4:
                                        t = r.sent(), r.label = 5;
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return r.sent(), s = !0, t = null, [3, 7];
                                    case 7:
                                        return i = Date.now(), this.countryCode && (s ? this.stats.recordSearchError(this.countryCode, i - n) : this.stats.recordSearchSuccess(this.countryCode, i - n)), [2, t]
                                }
                            })
                        })
                    }, e
                }();

            function h() {
                return Math.floor(((new Date).getTime() - 6e5) / 1e3)
            }

            function m(e) {
                return e <= 100 ? e : 100 * Math.round(e / 100)
            }
        },
        QVaV: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return o
            });
            var r = n("q1tI"),
                i = /^[\x00-\x7F]*$/,
                s = function(e, t, n) {
                    return void 0 === n && (n = !1), t && e && !o(t) ? n ? t + " (" + e + ")" : r.createElement("span", null, t, " ", r.createElement("span", {
                        className: "intl-login"
                    }, "(" + e + ")")) : t || (e || "")
                };

            function o(e) {
                return i.test(e)
            }
        },
        "V+GM": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                i = n("cr+I"),
                s = n("q1tI"),
                o = n("wIs1"),
                a = n("/7QA");

            function l(e) {
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
                                    var s = i.referenceTracking,
                                        o = s.content,
                                        l = s.medium,
                                        c = s.content_index,
                                        u = s.email_id;
                                    a.p.tracking.trackPageview(r.__assign({
                                        content: o,
                                        medium: l,
                                        content_index: c,
                                        email_id: u,
                                        location: e.location
                                    }, t))
                                }
                            }, a.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : a.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                        }
                        return r.__extends(o, n), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                                "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return s.createElement(t, r.__assign({}, this.props))
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
                                    s = i.stringify(t);
                                s.length > 0 && (r = "?" + s), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                            return n
                        }, o
                    }(s.Component);
                    return Object(o.a)(n)
                }
            }
            n.d(t, "a", function() {
                return l
            })
        },
        Z9JJ: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "NavSearch"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "query"
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
                                value: "platform"
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
                                value: "search"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "query"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "platform"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "platform"
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
                                        value: "result"
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
                    end: 112
                }
            };
            n.loc.source = {
                body: "query NavSearch($query: String! $platform: String!) {\nsearch(userQuery: $query platform: $platform) {\nresult\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        bfDQ: function(e, t, n) {},
        d2d0: function(e, t, n) {},
        dNH5: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("/MKj"),
                i = n("mrSG"),
                s = n("q1tI"),
                o = n("/7QA"),
                a = n("lT7W"),
                l = n.n(a),
                c = n("iDlv"),
                u = n.n(c),
                d = n("8/mp"),
                p = n("V+GM"),
                h = n("NvVO"),
                m = n("2xye"),
                g = n("GnwI"),
                f = n("fvjX"),
                b = n("1/iK"),
                v = n("y5D0"),
                y = n("kRBY"),
                _ = n("yR8l"),
                k = n("geRD"),
                S = n("Ue10"),
                w = (n("tftU"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.handleClick = function() {
                            t.props.onClick(t.props.followedChannel.id, t.props.followedChannel.login)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.followedChannel.profileImageURL;
                        return e || (e = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"), s.createElement(S.U, {
                            className: "followed-channel-link",
                            to: "/subs/" + this.props.followedChannel.login,
                            onClick: this.handleClick
                        }, s.createElement(S.Xa, {
                            textAlign: S.Pb.Center,
                            padding: {
                                bottom: 1
                            }
                        }, s.createElement(S.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement("img", {
                            className: "followed-channel-link__avatar",
                            src: e,
                            alt: this.props.followedChannel.displayName
                        })), s.createElement(S.Pa, {
                            margin: {
                                top: 0,
                                bottom: 1
                            }
                        }, s.createElement(S.W, {
                            className: "followed-channel-link__name",
                            color: S.O.Link,
                            ellipsis: !0,
                            noWrap: !0
                        }, this.props.followedChannel.displayName))))
                    }, t = i.__decorate([Object(g.b)("FollowedChannelLink")], t)
                }(s.Component)),
                C = n("3GEC"),
                T = n("jv6/"),
                N = (n("iajy"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.messages = {
                            title: Object(o.d)("Streamers You Follow", "SubsLandingFollowing"),
                            login: Object(o.d)("Log in", "SubsLandingFollowing"),
                            loginTitle: Object(o.d)("Log in to see a list of Streamers you follow", "SubsLandingFollowing"),
                            showMore: Object(o.d)("Show More", "SubsLandingFollowing"),
                            emptyFollows: Object(o.d)("No followed channels to show", "SubsLandingFollowing")
                        }, t.onLoginClick = function(e) {
                            e.preventDefault(), t.props.login()
                        }, t.renderFollowedChannels = function() {
                            var e = t.props.data;
                            if (e.loading || e.error) return s.createElement(S.gb, {
                                key: "followed-channels-placeholder-1",
                                height: 96
                            });
                            var n = [];
                            return e.currentUser && e.currentUser.follows && e.currentUser.follows.edges && (n = e.currentUser.follows.edges.filter(function(e) {
                                return e
                            }).map(function(e) {
                                return e.node
                            }).filter(function(e) {
                                return e
                            }).map(function(e) {
                                return s.createElement(w, {
                                    followedChannel: e,
                                    key: "followed-channel-link-" + e.id,
                                    onClick: t.onFollowClick
                                })
                            })), n.length > 0 ? n : s.createElement(S.W, {
                                key: "followed-channels_empty"
                            }, t.messages.emptyFollows)
                        }, t.onFollowClick = function(e, t) {
                            Object(C.a)({
                                channel: t,
                                channelId: e,
                                clickthroughLocation: "followed"
                            })
                        }, t.getShowMore = function() {
                            return !t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo && t.props.data.currentUser.follows.pageInfo.hasNextPage ? s.createElement(S.Xa, {
                                className: "subs-landing-followed-channels__show-more",
                                margin: {
                                    top: 1
                                }
                            }, s.createElement(S.z, {
                                fullWidth: !0,
                                onClick: t.onShowMore
                            }, t.messages.showMore)) : null
                        }, t.onShowMore = function() {
                            if (!t.props.data.loading && !t.props.data.error && t.props.data.currentUser && t.props.data.currentUser.follows && t.props.data.currentUser.follows.pageInfo && t.props.data.currentUser.follows.pageInfo.hasNextPage) return t.props.loadMore()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return this.props.isLoggedIn ? s.createElement(S.Xa, {
                            className: "subs-landing-followed-channels",
                            display: S.X.Flex,
                            alignItems: S.f.Center,
                            flexDirection: S.Aa.Column,
                            fullWidth: !0
                        }, s.createElement(S.Pa, {
                            margin: {
                                top: 3,
                                bottom: 2
                            }
                        }, s.createElement(S.W, {
                            bold: !0,
                            className: "subs-landing-followed-channels__title",
                            color: S.O.Link,
                            type: S.Tb.H3
                        }, this.messages.title)), s.createElement(S.Zb, {
                            center: !0,
                            gutterSize: S.bc.Small
                        }, this.renderFollowedChannels()), this.getShowMore()) : s.createElement(S.Xa, {
                            textAlign: S.Pb.Center,
                            margin: {
                                top: 3
                            }
                        }, s.createElement(S.z, {
                            onClick: this.onLoginClick,
                            "data-a-target": "login-button"
                        }, this.messages.login), s.createElement(S.W, null, this.messages.loginTitle))
                    }, t = i.__decorate([Object(_.a)(T, {
                        options: function() {
                            return {
                                variables: {
                                    limit: 12,
                                    cursor: ""
                                }
                            }
                        },
                        props: function(e) {
                            return i.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: T,
                                        variables: i.__assign({}, e.data.variables, {
                                            cursor: e.data.currentUser && e.data.currentUser.follows && e.data.currentUser.follows.edges ? e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor : ""
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult,
                                                r = [];
                                            return e.currentUser && n.currentUser ? (e.currentUser.follows && e.currentUser.follows.edges && n.currentUser.follows && n.currentUser.follows.edges ? r = Object(k.c)(e.currentUser.follows.edges, n.currentUser.follows.edges) : !e.currentUser.follows && n.currentUser.follows && n.currentUser.follows.edges ? r = n.currentUser.follows.edges : e.currentUser.follows && e.currentUser.follows.edges && !n.currentUser.follows && (r = e.currentUser.follows.edges), {
                                                currentUser: i.__assign({}, n.currentUser, {
                                                    follows: i.__assign({}, n.currentUser.follows, {
                                                        edges: r
                                                    })
                                                })
                                            }) : null
                                        }
                                    })
                                }
                            })
                        }
                    })], t)
                }(s.Component));
            var E = Object(r.connect)(function(e) {
                    return {
                        isLoggedIn: Object(y.f)(e)
                    }
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        login: function() {
                            return v.e(b.a.SubsLandingPage)
                        }
                    }, e)
                })(N),
                x = n("8Ad5"),
                R = n("f00E"),
                P = n("H/lO"),
                F = n("NZDK"),
                O = n("9kXc"),
                L = n("u5aL"),
                H = n("QVaV"),
                U = (n("d2d0"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onStreamerClick = function(e) {
                            for (var n = e.target; n.parentElement && !n.dataset.streamer_id;) n = n.parentElement;
                            n.dataset.streamer_login && n.dataset.streamer_id && t.props.onResultSelected({
                                channel: n.dataset.streamer_login,
                                channelId: n.dataset.streamer_id
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e;
                        return e = this.props.isWaiting ? s.createElement(S.Za, {
                            fillContent: !0
                        }) : this.props.isErrored ? this.getErrorMessage() : this.props.streamerResults && this.props.streamerResults.totalHits > 0 ? this.getStreamerResultContent() : this.getNoResultsMessage(), s.createElement(S.Cb, {
                            elevation: 4
                        }, s.createElement("div", {
                            className: "streamer-search-panel " + (this.props.isOpen ? "" : "streamer-search-panel--closed"),
                            tabIndex: 0,
                            onKeyDown: this.props.onKeyDown
                        }, s.createElement(S.Cb, {
                            className: "streamer-search-panel__results",
                            background: S.r.Base,
                            position: S.hb.Relative,
                            overflow: S.cb.Hidden,
                            display: S.X.Block,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0,
                            fullHeight: !0
                        }, s.createElement(S.Pa, {
                            overflow: S.cb.Hidden,
                            position: S.hb.Relative,
                            fullHeight: !0
                        }, s.createElement(d.b, {
                            suppressScrollX: !0
                        }, s.createElement(S.Xa, null, e, s.createElement(d.a, {
                            enabled: !this.props.isWaiting && this.props.isOpen,
                            loadMore: this.props.loadMore
                        })))))))
                    }, t.prototype.getStreamerResultContent = function() {
                        var e = this;
                        if (!this.props.streamerResults) return s.createElement(S.Xa, null);
                        var t = this.props.streamerResults.results.map(function(t) {
                            var n = Object(H.a)(t.login || "", t.name || "");
                            return s.createElement(S.Ua, {
                                linkTo: "/subs/" + t.login,
                                tabIndex: -1,
                                "data-ts_selectable": !0,
                                "data-tt_content": !0,
                                key: "streamer-search-result-" + t.id,
                                "data-streamer_id": t.id,
                                "data-streamer_login": t.login,
                                onClick: e.onStreamerClick
                            }, s.createElement(S.Xa, {
                                padding: {
                                    y: .5,
                                    x: 1
                                }
                            }, s.createElement(S.G, {
                                row: !0
                            }, s.createElement(S.I, {
                                alt: t.thumbnailAltText,
                                src: t.thumbnail ? t.thumbnail : "",
                                size: S.J.Size4,
                                aspect: S.p.Aspect1x1
                            }), s.createElement(S.H, {
                                overflow: S.cb.Hidden
                            }, s.createElement(S.Pa, {
                                padding: {
                                    x: 1
                                }
                            }, s.createElement(S.W, {
                                type: S.Tb.H5,
                                ellipsis: !0
                            }, n))))))
                        });
                        return s.createElement(S.Xa, null, t)
                    }, t.prototype.getErrorMessage = function() {
                        return s.createElement(S.W, null, Object(o.d)("Error", "StreamerSearchResultPanel"))
                    }, t.prototype.getNoResultsMessage = function() {
                        return s.createElement(S.W, null, Object(o.d)("No Results", "StreamerSearchResultPanel"))
                    }, t
                }(s.Component)),
                I = (n("bfDQ"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange(e.target.value)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return s.createElement(S.Xa, {
                            margin: {
                                top: 2
                            },
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            fullWidth: !0
                        }, s.createElement(S.Pa, {
                            fullWidth: !0,
                            zIndex: S.gc.Above,
                            position: S.hb.Relative
                        }, s.createElement("div", {
                            className: this.props.isOpen ? "streamer-search__container streamer-search__container--open" : "streamer-search__container"
                        }, s.createElement(L.a, {
                            onClickOut: this.props.onClickOut
                        }, s.createElement(S.tb, {
                            onChange: this.handleChange,
                            onFocus: this.props.onFocus,
                            onKeyDown: this.props.onKeyDown,
                            placeholder: Object(o.d)("Search for a Streamer", "StreamerSearch"),
                            id: "streamer-search-input"
                        }), s.createElement(S.u, {
                            direction: S.v.BottomCenter,
                            noTail: !0,
                            size: S.w.ExtraLarge,
                            show: this.props.isOpen
                        }, s.createElement(U, {
                            isOpen: this.props.isOpen,
                            streamerResults: this.props.userResults,
                            isErrored: this.props.isErrored,
                            isWaiting: this.props.isWaiting,
                            onResultSelected: this.props.onResultSelected,
                            loadMore: this.props.loadMore,
                            onKeyDown: this.props.onKeyDown
                        }))))))
                    }, t
                }(s.Component)),
                D = 50;
            var q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.onChange = function(e) {
                            n.inputTimer && (clearTimeout(n.inputTimer), n.inputTimer = 0), e ? (n.setState({
                                isWaiting: !0
                            }), n.inputTimer = setTimeout(function() {
                                return n.doSearch(e)
                            }, D)) : n.setState(n.getEmptyState())
                        }, n.onClickOut = function() {
                            n.state.isOpen && n.setState({
                                isOpen: !1
                            })
                        }, n.onFocus = function() {
                            n.state.term && !n.state.isOpen && n.setState({
                                isOpen: !0
                            })
                        }, n.onKeyDown = function(e) {
                            n.state.term && (e.keyCode === x.a.Esc ? n.setState({
                                isOpen: !1
                            }) : e.keyCode === x.a.Up ? n.focusNext(-1) : e.keyCode === x.a.Down && n.focusNext(1))
                        }, n.onResultSelected = function(e) {
                            n.setState({
                                isOpen: !1
                            });
                            var t = Object.assign({
                                channel: e.channel,
                                channelId: e.channelId,
                                clickthroughLocation: "search"
                            }, e);
                            Object(C.a)(t)
                        }, n.loadMore = function() {
                            return i.__awaiter(n, void 0, void 0, function() {
                                var e, t, n, r;
                                return i.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                            e = this.state.currentPage + 1, s.label = 1;
                                        case 1:
                                            return s.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(P.a.Users, this.state.term, "", {
                                                page: e,
                                                facetFilters: "has_subscription_products:true"
                                            })];
                                        case 2:
                                            return t = s.sent(), [3, 4];
                                        case 3:
                                            return n = s.sent(), o.k.error(n, "Algolia page search failed"), this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2];
                                        case 4:
                                            return t ? (r = Object(O.b)({
                                                searchResults: t,
                                                append: e > 0,
                                                currentUserResults: this.state.currentUserResults
                                            }), this.setState({
                                                currentUserResults: r.currentUserResults,
                                                term: this.state.term,
                                                isOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: r.exhaustedHits
                                            }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                                isErrored: !0,
                                                isOpen: !0
                                            })), [2])
                                    }
                                })
                            })
                        }, n.state = n.getEmptyState(), n.searchClient = new F.a({
                            appId: o.a.algoliaApplicationID,
                            apiKey: o.a.algoliaAPIKey,
                            apolloClient: o.p.apollo.client,
                            logger: o.k,
                            config: o.a,
                            stats: o.p.stats
                        }), n
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return s.createElement(I, {
                            onChange: this.onChange,
                            onClickOut: this.onClickOut,
                            onFocus: this.onFocus,
                            loadMore: this.loadMore,
                            onResultSelected: this.onResultSelected,
                            onKeyDown: this.onKeyDown,
                            userResults: this.state.currentUserResults,
                            isOpen: this.state.isOpen,
                            isErrored: this.state.isErrored,
                            isWaiting: this.state.isWaiting
                        })
                    }, t.prototype.focusNext = function(e) {
                        var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                            r = document.activeElement,
                            i = Array.prototype.indexOf.call(n, r);
                        if ((t = i < 0 ? e > 0 ? 0 : n.length - 1 : i + e) < 0 && (t = 0), !(t >= n.length)) {
                            var s = n.item(t);
                            s.focus(), s.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                                currentFocus: s
                            })
                        }
                    }, t.prototype.getEmptyState = function() {
                        return {
                            currentUserResults: {
                                totalHits: 0,
                                results: []
                            },
                            term: "",
                            isOpen: !1,
                            isErrored: !1,
                            queryID: "",
                            isWaiting: !1,
                            currentPage: -1,
                            focusSelectable: !1,
                            exhaustedHits: !1
                        }
                    }, t.prototype.doSearch = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, s, a, l;
                            return i.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        this.inputTimer = 0, t = -1, n = R.a(), r = "INPUT" === document.activeElement.tagName, this.setState({
                                            queryID: n,
                                            focusSelectable: !r && !!this.state.currentFocus
                                        }), c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(P.a.Users, e, n, {
                                            facetFilters: "has_subscription_products:true"
                                        })];
                                    case 2:
                                        return s = c.sent(), [3, 4];
                                    case 3:
                                        return a = c.sent(), o.k.error(a, "Algolia top results search failed"), this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2];
                                    case 4:
                                        return s ? this.state.queryID !== s.id ? [2] : (l = Object(O.b)({
                                            searchResults: s,
                                            append: !1
                                        }), this.setState(function(n) {
                                            return i.__assign({}, n, l, {
                                                queryID: "",
                                                term: e,
                                                isOpen: !0,
                                                isWaiting: !1,
                                                currentPage: t
                                            })
                                        }), [2]) : (this.setState(i.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0,
                                            term: e
                                        })), [2])
                                }
                            })
                        })
                    }, t = i.__decorate([Object(g.b)("StreamerSearch")], t)
                }(s.Component),
                j = Object(r.connect)(function(e) {
                    return {
                        user: Object(y.e)(e)
                    }
                })(q),
                W = (n("nfEO"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.messages = {
                            title: Object(o.d)("Subscriptions", "SubsLandingPage"),
                            info: Object(o.d)("Subscribe to a streamer to enjoy exclusive emotes, badges and more!", "SubsLandingPage"),
                            searchTitle: Object(o.d)("Search For Streamer", "SubsLandingPage"),
                            searchInfo: Object(o.d)("Find a streamer you're thinking of subbing to, then click on their name to go to their page and subscribe.", "SubsLandingPage"),
                            perksTitle: Object(o.d)("Subscriber Perks", "SubsLandingPage"),
                            perksInfo: Object(o.d)("Subscriptions let Partners and Affiliates interact with their most passionate fans. Subscribing unlocks exclusive chat badges, plus many streamers host sub-only games or events too.", "SubsLandingPage"),
                            emotesTitle: Object(o.d)("Emotes", "SubsLandingPage"),
                            emotesInfo: Object(o.d)("Subscribing to a streamer unlocks custom emotes, usable on any channel on Twitch. The more subs a streamer has, the more custom emotes slots will be unlocked, so more support equals more rewards for everyone.", "SubsLandingPage")
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), o.p.setPageTitle("Subscriptions")
                    }, t.prototype.render = function() {
                        return s.createElement(S.Xa, {
                            className: "subs-landing-page",
                            fullHeight: !0,
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center
                        }, s.createElement(S.Pa, {
                            fullWidth: !0
                        }, s.createElement(d.b, {
                            suppressScrollX: !0
                        }, s.createElement(S.Xa, {
                            fullWidth: !0,
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center
                        }, s.createElement(S.Xa, {
                            className: "subs-landing-page-contents",
                            textAlign: S.Pb.Center,
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center,
                            flexWrap: S.Ba.NoWrap,
                            flexDirection: S.Aa.Column,
                            padding: {
                                x: 2
                            },
                            fullHeight: !0
                        }, s.createElement(S.Pa, {
                            margin: {
                                top: 4
                            }
                        }, s.createElement(S.W, {
                            type: S.Tb.H2,
                            color: S.O.Link,
                            bold: !0
                        }, this.messages.title)), s.createElement(S.Pa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, s.createElement(S.W, {
                            type: S.Tb.P,
                            fontSize: S.Ca.Size5
                        }, this.messages.info)), s.createElement(S.Pa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, s.createElement(S.W, {
                            type: S.Tb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, this.messages.searchTitle)), s.createElement(S.Pa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, s.createElement(S.W, {
                            type: S.Tb.P,
                            fontSize: S.Ca.Size5
                        }, this.messages.searchInfo)), s.createElement(j, null), s.createElement(E, null), s.createElement(S.Xa, {
                            className: "subs-landing-page-contents__section",
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            flexWrap: S.Ba.Wrap
                        }, s.createElement(S.Xa, {
                            className: "subs-landing-page-contents__section-info",
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center,
                            flexDirection: S.Aa.Column,
                            margin: {
                                x: 3
                            }
                        }, s.createElement(S.Pa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, s.createElement(S.W, {
                            type: S.Tb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, this.messages.perksTitle)), s.createElement(S.Pa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, s.createElement(S.W, {
                            type: S.Tb.P,
                            fontSize: S.Ca.Size5
                        }, this.messages.perksInfo))), s.createElement(S.Xa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, s.createElement("img", {
                            src: l.a
                        }))), s.createElement(S.Xa, {
                            className: "subs-landing-page-contents__section",
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            flexWrap: S.Ba.Wrap,
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(S.Xa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__image"
                        }, s.createElement("img", {
                            src: u.a
                        })), s.createElement(S.Xa, {
                            className: "subs-landing-page__section-info",
                            display: S.X.Flex,
                            justifyContent: S.Wa.Center,
                            alignItems: S.f.Center,
                            flexDirection: S.Aa.Column,
                            margin: {
                                x: 3
                            }
                        }, s.createElement(S.Pa, {
                            margin: {
                                top: 3
                            },
                            className: "subs-landing-page-contents__heading"
                        }, s.createElement(S.W, {
                            type: S.Tb.H3,
                            color: S.O.Link,
                            bold: !0,
                            fontSize: S.Ca.Size4
                        }, this.messages.emotesTitle)), s.createElement(S.Pa, {
                            margin: {
                                top: 2
                            },
                            className: "subs-landing-page-contents__paragraph"
                        }, s.createElement(S.W, {
                            type: S.Tb.P,
                            fontSize: S.Ca.Size5
                        }, this.messages.emotesInfo)))))))))
                    }, t = i.__decorate([Object(g.b)("SubsLandingPage", {
                        destination: h.a.SubsLandingPage
                    }), Object(p.a)({
                        location: m.PageviewLocation.SubsLandingPage
                    })], t)
                }(s.Component)),
                z = Object(r.connect)()(W);
            n.d(t, "SubsLandingPage", function() {
                return z
            })
        },
        iDlv: function(e, t, n) {
            e.exports = n.p + "assets/emotes-e2efaf11b6d1b3db4fe5.png"
        },
        iajy: function(e, t, n) {},
        "jv6/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Following_CurrentUser"
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
                    }],
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
                                        value: "login"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "follows"
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
                                            value: "filter"
                                        },
                                        value: {
                                            kind: "EnumValue",
                                            value: "SUBBABLE"
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
                    end: 239
                }
            };
            n.loc.source = {
                body: "query Following_CurrentUser($limit: Int $cursor: Cursor){\ncurrentUser{\nid\nlogin\nfollows(first: $limit after: $cursor filter: SUBBABLE){\nedges{\nnode{\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\ncursor\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        kduP: function(e, t, n) {
            "use strict";

            function r(e) {
                return "/directory/game/" + encodeURIComponent(e)
            }

            function i(e) {
                return "/communities/" + encodeURIComponent(e)
            }

            function s(e) {
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
                return s
            }), n.d(t, "d", function() {
                return o
            })
        },
        lT7W: function(e, t, n) {
            e.exports = n.p + "assets/chat-badges-4b67550d7a270b216efd.png"
        },
        miXC: function(e, t, n) {},
        nfEO: function(e, t, n) {},
        sLmD: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("/7QA"),
                i = "en-us",
                s = {
                    bg: "bg-bg",
                    cs: "cs-cz",
                    da: "da-dk",
                    de: "de-de",
                    el: "el-gr",
                    en: i,
                    "en-gb": i,
                    es: "es-es",
                    "es-mx": "es-mx",
                    fi: "fi-fi",
                    fr: "fr-fr",
                    hu: "hu-hu",
                    it: "it-it",
                    ja: "ja-jp",
                    ko: "ko-kr",
                    nl: "nl-nl",
                    no: "no-no",
                    pl: "pl-pl",
                    "pt-br": "pt-br",
                    pt: "pt-pt",
                    ro: "ro-ro",
                    ru: "ru-ru",
                    sk: "sk-sk",
                    sv: "sv-se",
                    th: "th-th",
                    tr: "tr-tr",
                    vi: "vi-vn",
                    "zh-cn": "zh-cn",
                    "zh-tw": "zh-tw"
                },
                o = function(e, t) {
                    var n, r = l();
                    return n = t ? {
                        id: a(e) ? e.tag_id : e.objectID,
                        tagName: e.tag_name,
                        isAutomated: e.automated || !1,
                        localizedDescription: a(e) ? "" : e.description_localizations && e.description_localizations[r] || "",
                        localizedName: ""
                    } : {
                        id: a(e) ? e.tag_id : e.objectID,
                        isLanguageTag: e.tag_name.includes("auto___lang"),
                        localizedName: "",
                        tagName: e.tag_name
                    }, e.localizations && e.localizations[r] ? n.localizedName = e.localizations[r] : e.localizations && e.localizations[i] ? n.localizedName = e.localizations[i] : n.localizedName = n.tagName, n
                };

            function a(e) {
                return void 0 !== e.tag_id
            }

            function l() {
                return s[r.p.intl.getLanguageCode() || ""] || i
            }
        },
        tftU: function(e, t, n) {},
        "vR4/": function(e, t, n) {
            "use strict";
            var r, i;
            n.d(t, "b", function() {
                    return r
                }), n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e[e.AllVideos = 0] = "AllVideos", e[e.PastBroadcasts = 1] = "PastBroadcasts", e[e.Uploads = 2] = "Uploads", e[e.Highlights = 3] = "Highlights"
                }(r || (r = {})),
                function(e) {
                    e[e.AnyLength = 0] = "AnyLength", e[e.Short = 1] = "Short", e[e.Long = 2] = "Long"
                }(i || (i = {}))
        },
        yLwq: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "c", function() {
                return s
            });
            var r = [{
                id: "profile_image_001",
                urlSlug: "bb97f7e6-f11a-4194-9708-52bf5a5125e8"
            }, {
                id: "profile_image_002",
                urlSlug: "27103734-3cda-44d6-a384-f2ab71e4bb85"
            }, {
                id: "profile_image_003",
                urlSlug: "49988c7b-57bc-4dee-bd4f-6df4ad215d3a"
            }, {
                id: "profile_image_004",
                urlSlug: "0ecbb6c3-fecb-4016-8115-aa467b7c36ed"
            }, {
                id: "profile_image_005",
                urlSlug: "cd618d3e-f14d-4960-b7cf-094231b04735"
            }, {
                id: "profile_image_006",
                urlSlug: "4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5"
            }, {
                id: "profile_image_007",
                urlSlug: "b83b1794-7df9-4878-916c-88c2ad2e4f9f"
            }];

            function i(e, t) {
                var n = 70;
                return 300 === t ? n = 300 : 96 !== t && 80 !== t || (n = 150), "https://static-cdn.jtvnw.net/user-default-pictures/" + e.urlSlug + "-profile_image-" + n + "x" + n + ".jpg"
            }

            function s(e, t) {
                var n = parseInt(e, 10) % r.length;
                return i(r[n], t)
            }
        }
    }
]);