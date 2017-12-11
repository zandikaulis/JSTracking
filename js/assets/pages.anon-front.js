webpackJsonp([48], {
    1e3: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: o,
                player: e
            }
        }

        function a() {
            return {
                type: s
            }
        }

        function r() {
            return {
                type: l
            }
        }
        n.d(t, "b", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "a", function() {
            return l
        }), t.e = i, t.f = a, t.d = r;
        var o = "carouselPlayer.CAROUSEL_REGISTERED",
            s = "carouselPlayer.CAROUSEL_UNREGISTERED",
            l = "carouselPlayer.CAROUSEL_PAUSED"
    },
    1006: function(e, t) {},
    1007: function(e, t) {},
    1027: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            a = n(1),
            r = n(912),
            o = n(113),
            s = n(1028),
            l = function(e) {
                var t = {
                    name: "TWILIGHT_EXPANDO_FEATURO",
                    assignments: {
                        fallback: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 1028))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 6,
                                showCounts: !1
                            }))
                        },
                        expanded: function() {
                            return o.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 1028))
                            }, "FeaturedBroadcasters")(i.__assign({}, e, {
                                streamCount: 8,
                                showCounts: !0
                            }))
                        }
                    },
                    loader: function() {
                        return Object(s.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return a.createElement(r.a, i.__assign({}, t))
            };
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return s.FeaturedBroadcastersRenderContext
        }), n.d(t, "FeaturedBroadcasters", function() {
            return l
        })
    },
    1028: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            switch (t) {
                case r.AnonFront:
                    return s.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: u.c.Horizontal,
                        showCounts: i,
                        darkTheme: !0
                    });
                default:
                    return s.createElement(g._17, {
                        className: "featured-broadcasters",
                        background: g.m.Base,
                        elevation: 1
                    }, s.createElement(g.U, {
                        padding: 1
                    }, s.createElement(g._21, {
                        fontSize: g.L.Size5,
                        color: g.F.Alt2
                    }, Object(l.d)("Featured Broadcasters", "FeaturedBroadcastersComponent"))), s.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: u.c.Vertical,
                        showCounts: i
                    }))
            }
        }

        function a(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return r
        }), t.placeholderFeaturedBroadcasters = a, n.d(t, "FeaturedBroadcasters", function() {
            return v
        });
        var r, o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            c = n(7),
            d = n(1056),
            u = n(871),
            m = n(1057),
            p = n(5),
            g = n(3),
            f = n(1291);
        n.n(f);
        ! function(e) {
            e[e.AnonFront = 1] = "AnonFront", e[e.Front = 2] = "Front"
        }(r || (r = {}));
        var h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getRender = function(e) {
                        var n = !(!t.props.data.loading && !t.props.data.error);
                        return i(e, t.props.renderContext, n, t.props.showCounts)
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(m.a)(e);
                    return this.getRender(t)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(c.a)(f, {
                    options: function(e) {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode(),
                                first: e.streamCount || 6
                            }
                        }
                    }
                }), Object(p.c)("FeaturedBroadcasters")], t)
            }(s.Component),
            v = h
    },
    1056: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isPlayerInitialized: !1
            }
        }

        function a(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case h.b:
                    return p = t.player, g.__assign({}, e, {
                        isPlayerInitialized: !0
                    });
                case h.c:
                    return p = null, g.__assign({}, e, {
                        isPlayerInitialized: !1
                    });
                case h.a:
                    return e.isPlayerInitialized && p && p.pause(), e;
                default:
                    return e
            }
        }

        function r(e) {
            switch (e.type) {
                case b.b.Stream:
                    return _.createElement(D.c, {
                        channelLogin: e.id,
                        vodID: "",
                        disableTheatreButton: !0,
                        playerTypeOverride: D.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy
                    });
                case b.b.Vod:
                    return _.createElement(D.c, {
                        channelLogin: "",
                        vodID: e.id,
                        disableTheatreButton: !0,
                        playerTypeOverride: D.b.Frontpage,
                        onInit: e.onPlayerInit,
                        onDestroy: e.onPlayerDestroy,
                        onVideoTimeChange: e.onVideoTimeChange
                    });
                default:
                    return null
            }
        }

        function o(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function s(e) {
            var t = {};
            e.forEach(function(e, n) {
                t["carousel_slot_" + n + "_channel"] = e.broadcaster.login, t["carousel_slot_" + n + "_priority"] = e.priorityLevel, t["carousel_slot_" + n + "_game"] = e.content.gameName
            }), f.m.track(j.SpadeEventType.FrontPageCarouselDisplay, t)
        }

        function l(e) {
            f.m.track(j.SpadeEventType.FrontPageCarouselClick, e)
        }

        function c(e, t) {
            var n = g.__assign({
                clicked_element: t
            }, e);
            f.m.track(j.SpadeEventType.FrontPageCarouselPromotionCardClick, n)
        }

        function d(e) {
            f.m.track(j.SpadeEventType.FrontPageCarouselPromotionCardView, e)
        }

        function u(e) {
            f.m.track(j.SpadeEventType.FrontPageCarouselNavButtonClick, {
                direction: e
            })
        }

        function m(e) {
            return Object(y.bindActionCreators)({
                registerCarousel: h.e,
                unregisterCarousel: h.f
            }, e)
        }
        var p, g = n(0),
            f = n(2),
            h = n(1e3);
        f.n.store.registerReducer("carouselPlayer", a);
        var v = n(6),
            y = n(9),
            k = n(4),
            _ = n(1),
            b = n(871),
            S = n(5),
            N = n(3),
            E = (n(1287), "carousel-card-live"),
            C = "carousel-card-vod",
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLiveCounts = function() {
                        return t.props.showCounts ? _.createElement(N.U, {
                            className: "carousel-nav__meta",
                            alignItems: N.c.Center,
                            attachBottom: !0,
                            margin: {
                                left: .5
                            },
                            zIndex: N._38.Above
                        }, t.renderIndicator(), _.createElement(N.U, {
                            display: N.H.InlineFlex,
                            margin: {
                                left: .5
                            }
                        }, _.createElement(N._21, {
                            color: N.F.Overlay,
                            type: N._26.Span
                        }, Object(f.e)(t.props.item.content.viewersCount)))) : null
                    }, t.renderIndicator = function() {
                        return t.props.item.content.type === b.b.Stream ? _.createElement(N.V, {
                            size: N.W.Small,
                            "data-test-selector": E
                        }) : _.createElement(N._8, {
                            asset: N._9.GlyphViews,
                            "data-test-selector": C
                        })
                    }, t.itemClick = function() {
                        t.props.itemClick(t.props.item)
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = k({
                        "carousel-nav__item": !0,
                        "carousel-nav__item--active": this.props.itemActive
                    });
                    return _.createElement(N.U, {
                        className: e,
                        margin: {
                            x: .5
                        },
                        padding: {
                            bottom: .5
                        },
                        flexGrow: 1,
                        position: N._2.Relative
                    }, _.createElement(N._30, {
                        label: (this.props.item.isSponsored ? Object(f.d)("Sponsored", "CarouselCardComponent") : "") + " " + this.props.item.broadcaster.displayName,
                        direction: N._32.Top,
                        display: N.H.Block
                    }, _.createElement(N.S, g.__assign({
                        onClick: this.itemClick
                    }, Object(N._39)(this.props)), _.createElement(N.j, {
                        ratio: N.k.Aspect16x9
                    }, this.renderLiveCounts(), _.createElement(N.U, {
                        className: "carousel-nav__img-container"
                    }, _.createElement("img", {
                        className: "carousel-nav__img",
                        "data-content-id": this.props.item.content.id,
                        src: this.props.item.imageURL,
                        alt: this.props.item.broadcaster.displayName,
                        "data-a-target": "carousel-image"
                    }), this.props.item.isSponsored ? _.createElement(N.U, {
                        position: N._2.Absolute,
                        attachRight: !0,
                        attachTop: !0
                    }, _.createElement(N._8, {
                        asset: N._9.Featured,
                        type: N._10.Brand,
                        width: 20,
                        height: 20
                    })) : "")))))
                }, t = g.__decorate([Object(S.c)("CarouselCard")], t)
            }(_.Component),
            O = w,
            x = n(65),
            U = n(10),
            F = n(48),
            D = n(272),
            R = (n(1288), {
                content: "carousel",
                medium: "twitch_home"
            }),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = k("horizontal-carousel-player__details", {
                                "horizontal-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(f.d)("playing {game}", {
                                game: _.createElement(U.a, {
                                    to: {
                                        pathname: "/directory/game/" + t.props.item.content.gameName,
                                        state: R
                                    }
                                }, t.props.item.content.gameName)
                            }, "HorizontalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy,
                                onVideoTimeChange: t.onVideoTimeChange
                            };
                        return _.createElement(N._17, {
                            className: "horizontal-carousel-player",
                            margin: {
                                bottom: 2
                            },
                            display: N.H.Flex,
                            flexDirection: N.J.Row,
                            color: N.F.Alt
                        }, _.createElement(N.U, {
                            flexGrow: 1,
                            flexShrink: 0
                        }, _.createElement(N.U, {
                            className: "horizontal-carousel-player__video",
                            position: N._2.Relative,
                            overflow: N.Y.Hidden
                        }, r(i))), _.createElement(N.U, {
                            className: e,
                            flexGrow: 0,
                            padding: 2
                        }, _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Start
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, _.createElement(U.a, {
                            to: {
                                pathname: "/" + t.props.item.broadcaster.login,
                                state: R
                            },
                            "data-a-target": "carousel-profile-image"
                        }, _.createElement(N.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(f.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "HorizontalCarouselPlayer"),
                            size: 40
                        })))), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, {
                            fontSize: N.L.Size4,
                            color: N.F.Base,
                            "data-a-target": "carousel-broadcaster-displayname"
                        }, Object(F.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName)), _.createElement(N._21, {
                            fontSize: N.L.Size6,
                            color: N.F.Base,
                            "data-a-target": "carousel-user-playing-message"
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "game_name")
                        }, n)))), _.createElement(N.U, {
                            margin: {
                                y: 1
                            }
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "stream_title")
                        }, _.createElement(U.a, {
                            to: t.getLinkForTitle()
                        }, _.createElement(N._21, {
                            type: N._26.Span,
                            "data-a-target": b.a,
                            fontSize: N.L.Size3
                        }, t.props.item.title)))), _.createElement(x, {
                            source: t.props.item.description || ""
                        })))
                    }, t.getLinkForTitle = function() {
                        if (t.props.item.content.type === b.b.Stream) return {
                            pathname: "/" + t.props.item.broadcaster.login,
                            state: R
                        };
                        var e = t.state ? t.state.videoOffset || 0 : 0;
                        return {
                            pathname: "/videos/" + t.props.item.content.id + "?t=" + e,
                            state: R
                        }
                    }, t.getPlaceholderRender = function() {
                        var e = k("horizontal-carousel-player__details", {
                            "horizontal-carousel-player__details--overlay": t.props.darkTheme
                        });
                        return _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            flexShrink: 0,
                            margin: {
                                bottom: 2
                            }
                        }, _.createElement(N.U, {
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        }))), _.createElement(N.U, {
                            className: k(e),
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: 2
                        }, _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Start
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 40,
                            height: 40
                        })), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            width: 70
                        })), _.createElement(N._21, null, _.createElement(N._1, {
                            width: 70
                        })))), _.createElement(N.U, {
                            margin: {
                                y: 1
                            }
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            lineCount: 1
                        })), _.createElement(N._21, null, _.createElement(N._1, {
                            lineCount: 4
                        })))))
                    }, t.onVideoTimeChange = function(e) {
                        t.setState({
                            videoOffset: e
                        })
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentWillUpdate = function(e) {
                    e.item !== this.props.item && this.props.onPromotionCardView(e.item)
                }, t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(_.Component),
            I = n(111),
            P = (n(1289), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getContentRender = function() {
                        var e = k("vertical-carousel-player__details", {
                                "vertical-carousel-player__details--overlay": t.props.darkTheme
                            }),
                            n = Object(f.d)("{login} playing {game}", {
                                login: _.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "display_name")
                                }, _.createElement(U.a, {
                                    to: "/" + t.props.item.broadcaster.login,
                                    "data-a-target": "carousel-broadcaster-displayname"
                                }, Object(F.a)(t.props.item.broadcaster.login, t.props.item.broadcaster.displayName))),
                                game: _.createElement("span", {
                                    onClick: t.promotionCardClick.bind(t, "game_name")
                                }, _.createElement(U.a, {
                                    to: "/directory/game/" + t.props.item.content.gameName,
                                    "data-a-target": "carousel-broadcaster-game-name"
                                }, t.props.item.content.gameName))
                            }, "VerticalCarouselPlayer"),
                            i = {
                                type: t.props.item.content.type,
                                id: t.props.item.content.id,
                                onPlayerInit: t.props.onPlayerInit,
                                onPlayerDestroy: t.props.onPlayerDestroy
                            };
                        return _.createElement(N._17, {
                            className: "vertical-carousel-player",
                            padding: {
                                bottom: 1,
                                x: 1
                            },
                            color: N.F.Alt
                        }, _.createElement(N.U, {
                            className: "vertical-carousel-player__video",
                            position: N._2.Relative,
                            overflow: N.Y.Hidden
                        }, r(i)), _.createElement(N.U, {
                            className: k(e),
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Center,
                            padding: {
                                y: 1
                            }
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement("span", {
                            onClick: t.promotionCardClick.bind(t, "thumbnail")
                        }, _.createElement(U.a, {
                            to: "/" + t.props.item.broadcaster.login,
                            "data-a-target": "carousel-avatar-link"
                        }, _.createElement(N.l, {
                            imageSrc: t.props.item.broadcaster.profileImageURL,
                            imageAlt: Object(f.d)("Profile Picture for {login}", {
                                login: t.props.item.broadcaster.login
                            }, "VerticalCarouselPlayer"),
                            size: 40
                        })))), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, {
                            "data-a-target": b.a,
                            fontSize: N.L.Size5,
                            color: N.F.Base,
                            bold: !0
                        }, t.props.item.title), _.createElement(N._21, {
                            fontSize: N.L.Size6,
                            color: N.F.Base
                        }, n)), _.createElement(N.U, {
                            flexShrink: 0
                        }, t.props.firstPageLoaded ? _.createElement(I.a, {
                            showLoadingPlaceholder: !0,
                            channelLogin: t.props.item.broadcaster.login,
                            "data-a-target": "carousel-follow-button"
                        }) : _.createElement(N._1, {
                            width: 70,
                            height: 30
                        }))), _.createElement(x, {
                            source: t.props.item.description || ""
                        }))
                    }, t.getPlaceholderRender = function() {
                        return _.createElement(N.U, {
                            padding: {
                                bottom: 1,
                                x: 1
                            }
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, {
                            "data-test-selector": "carousel-player-placeholder"
                        })), _.createElement(N.U, {
                            display: N.H.Flex,
                            flexWrap: N.K.NoWrap,
                            textAlign: N._22.Left,
                            alignItems: N.c.Center,
                            padding: {
                                y: 1
                            }
                        }, _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 40,
                            height: 40
                        })), _.createElement(N.U, {
                            margin: {
                                right: 1
                            },
                            flexGrow: 1
                        }, _.createElement(N._21, null, _.createElement(N._1, {
                            width: 150
                        })), _.createElement(N._21, null, _.createElement(N._1, {
                            width: 100
                        }))), _.createElement(N.U, {
                            flexShrink: 0
                        }, _.createElement(N._1, {
                            width: 70,
                            height: 30
                        }))), _.createElement(N._21, null, _.createElement(N._1, {
                            lineCount: 3
                        })))
                    }, t.promotionCardClick = function(e) {
                        t.props.onPromotionCardClick(t.props.item, e)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return this.props.item ? this.getContentRender() : this.getPlaceholderRender()
                }, t
            }(_.Component)),
            L = Object(v.a)(o)(P),
            j = n(13),
            A = (n(1290), 6),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeItem: t.props.items[0],
                        startingIndex: 0
                    }, t.displayEventFired = !1, t.renderLeftButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.state.startingIndex > 0;
                            return _.createElement(N.U, {
                                display: N.H.Flex,
                                alignItems: N.c.Stretch
                            }, _.createElement(N.v, {
                                ariaLabel: Object(f.d)("Page Left", "CarouselPlayerComponent"),
                                icon: N._9.AngleLeft,
                                onClick: t.handlePageLeft,
                                "data-test-selector": b.d,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.renderRightButton = function() {
                        if (t.props.items.length > A) {
                            var e = t.props.items.length > t.state.startingIndex + A;
                            return _.createElement(N.U, {
                                display: N.H.Flex,
                                alignItems: N.c.Stretch
                            }, _.createElement(N.v, {
                                ariaLabel: Object(f.d)("Page Right", "CarouselPlayerComponent"),
                                icon: N._9.AngleRight,
                                onClick: t.handlePageRight,
                                "data-test-selector": b.e,
                                disabled: !e
                            }))
                        }
                        return null
                    }, t.getCardsRender = function() {
                        if (t.state.activeItem) {
                            t.displayEventFired || (s(t.props.items), t.displayEventFired = !0);
                            return t.props.items.slice(t.state.startingIndex, t.state.startingIndex + A).map(function(e, n) {
                                return _.createElement(O, {
                                    key: e.content.id,
                                    item: e,
                                    itemClick: t.selectContent,
                                    itemActive: e.content.id === t.state.activeItem.content.id,
                                    showCounts: t.props.showCounts,
                                    "data-a-target": "carousel-card-" + n
                                })
                            })
                        }
                        for (var e = [], n = 0; n < A; n++) e.push(_.createElement(N.U, {
                            key: n,
                            margin: {
                                x: .5
                            },
                            flexGrow: 1
                        }, _.createElement(N.j, {
                            ratio: N.k.Aspect16x9
                        }, _.createElement(N._1, null)), _.createElement(N.U, {
                            margin: {
                                top: .5
                            }
                        }, _.createElement(N._1, {
                            height: 4
                        }))));
                        return e
                    }, t.getLayoutRender = function() {
                        var e = {
                            darkTheme: t.props.darkTheme || !1,
                            item: t.state.activeItem,
                            onPromotionCardClick: t.trackPromotionClick,
                            onPromotionCardView: t.trackPromotionView,
                            onPlayerInit: t.registerCarousel,
                            onPlayerDestroy: t.unregisterCarousel
                        };
                        switch (t.props.layout) {
                            case b.c.Vertical:
                                return _.createElement(L, g.__assign({}, e));
                            default:
                                return _.createElement(T, g.__assign({}, e))
                        }
                    }, t.registerCarousel = function(e) {
                        t.props.registerCarousel && t.props.registerCarousel(e)
                    }, t.unregisterCarousel = function() {
                        t.props.unregisterCarousel && t.props.unregisterCarousel()
                    }, t.selectContent = function(e) {
                        t.setState({
                            activeItem: e
                        }), l({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.trackPromotionClick = function(e, n) {
                        var i = e.broadcaster,
                            a = e.content,
                            r = e.isScheduled;
                        c({
                            broadcast_type: a.subType,
                            carousel_index: t.props.items.indexOf(t.state.activeItem),
                            channel: i.displayName,
                            game: a.gameName,
                            promotion_was_scheduled: r,
                            views: a.viewersCount
                        }, n)
                    }, t.trackPromotionView = function(e) {
                        d({
                            broadcast_type: e.content.subType,
                            carousel_index: t.props.items.indexOf(e),
                            channel: e.broadcaster.login,
                            game: e.content.gameName,
                            promotion_was_scheduled: e.isScheduled,
                            views: e.content.viewersCount
                        })
                    }, t.handlePageRight = function() {
                        var e = t.props.items.length - A;
                        e !== t.state.startingIndex && (u("next"), t.setState({
                            startingIndex: e
                        }))
                    }, t.handlePageLeft = function() {
                        t.state.startingIndex > 0 && (u("prev"), t.setState({
                            startingIndex: 0
                        }))
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUpdate = function(e) {
                    !this.state.activeItem && e.items.length > 0 && this.setState({
                        activeItem: e.items[0]
                    })
                }, t.prototype.render = function() {
                    return _.createElement(N.U, {
                        className: k("carousel-player", {
                            "theme--dark": this.props.darkTheme
                        })
                    }, this.getLayoutRender(), _.createElement(N._17, {
                        background: N.m.Alt
                    }, _.createElement(N.U, {
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        padding: {
                            x: .5,
                            y: 1
                        }
                    }, this.renderLeftButton(), this.getCardsRender(), this.renderRightButton())))
                }, t = g.__decorate([Object(S.c)("CarouselPlayer")], t)
            }(_.Component),
            B = H,
            V = Object(v.a)(null, m)(B);
        n.d(t, "a", function() {
            return V
        })
    },
    1057: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.stream && e.stream.game && null !== e.stream.game.name && (t = e.stream.game.name), e.stream && e.stream.broadcaster && (n = e.stream.broadcaster), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: n ? n.login : "",
                        gameName: t,
                        type: o.b.Stream,
                        subType: e.stream ? e.stream.type : "",
                        viewersCount: e.stream ? e.stream.viewersCount : 0
                    },
                    description: r(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }

        function a(e) {
            return e.map(function(e) {
                var t = "",
                    n = null;
                return e.video && e.video.game && null !== e.video.game.name && (t = e.video.game.name), e.video && e.video.owner && (n = e.video.owner), {
                    broadcaster: {
                        displayName: n ? n.displayName : "",
                        id: n ? n.id : "",
                        login: n ? n.login : "",
                        profileImageURL: n ? n.profileImageURL : ""
                    },
                    content: {
                        id: e.video ? e.video.id : "",
                        gameName: t,
                        type: o.b.Vod,
                        subType: "",
                        viewersCount: e.video ? e.video.viewCount : 0
                    },
                    description: r(e.description || ""),
                    imageURL: e.imageURL || "",
                    isScheduled: e.isScheduled || !1,
                    isSponsored: e.isSponsored || !1,
                    priorityLevel: e.priorityLevel,
                    title: e.title || ""
                }
            })
        }

        function r(e) {
            return e.replace(/\[\]\(.+\)/, "")
        }
        t.a = i, t.b = a;
        var o = n(871)
    },
    1286: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(912),
            s = n(113),
            l = n(1027),
            c = n(1028),
            d = n(1292),
            u = function(e) {
                var t = {
                    name: "TWILIGHT_VIDEO_FEATURO_EN",
                    assignments: {
                        fallback: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 1027))
                            }, "FeaturedBroadcasters")(i.__assign({}, e))
                        },
                        mixed: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 1292))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !0
                            }))
                        },
                        last: function() {
                            return s.a.wrap(function() {
                                return new Promise(function(e) {
                                    e()
                                }).then(n.bind(null, 1292))
                            }, "FeaturedContent")(i.__assign({}, e, {
                                shouldMixContent: !1
                            }))
                        }
                    },
                    loader: function() {
                        return Object(c.placeholderFeaturedBroadcasters)(e.renderContext)
                    }
                };
                return "en" === r.n.intl.getLanguageCode() ? a.createElement(o.a, i.__assign({}, t)) : a.createElement(l.FeaturedBroadcasters, {
                    renderContext: e.renderContext
                })
            };
        n.d(t, "a", function() {
            return d.FeaturedBroadcastersRenderContext
        }), n.d(t, "b", function() {
            return u
        })
    },
    1287: function(e, t) {},
    1288: function(e, t) {},
    1289: function(e, t) {},
    1290: function(e, t) {},
    1291: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "first"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
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
                                    value: "first"
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                            value: "broadcaster"
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
                                                        value: "150"
                                                    }
                                                }],
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
                                            }]
                                        }
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
                                            value: "viewersCount"
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
                                    value: "title"
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
                end: 419
            }
        };
        n.loc.source = {
            body: "query FeaturedStreams($language: String, $first: Int) {\n  featuredStreams(language: $language, first: $first) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1292: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            switch (t) {
                case m.FeaturedBroadcastersRenderContext.AnonFront:
                    return s.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: u.c.Horizontal,
                        showCounts: !0,
                        darkTheme: !0
                    });
                default:
                    return s.createElement(h._17, {
                        className: "featured-content",
                        background: h.m.Base,
                        elevation: 1
                    }, s.createElement(h.U, {
                        padding: 1
                    }, a(n)), s.createElement(d.a, {
                        items: e,
                        isLoading: n,
                        layout: u.c.Vertical,
                        showCounts: !0
                    }))
            }
        }

        function a(e) {
            return e ? s.createElement(h._21, {
                fontSize: h.L.Size5,
                color: h.F.Alt2
            }, s.createElement(h._1, {
                width: 100
            })) : s.createElement(h._21, {
                fontSize: h.L.Size5,
                color: h.F.Alt2
            }, Object(l.d)("Featured", "FeaturedContentComponent"))
        }

        function r(e) {
            return i([], e, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.placeholderFeaturedBroadcasters = r, n.d(t, "FeaturedContent", function() {
            return y
        });
        var o = n(0),
            s = n(1),
            l = (n.n(s), n(2)),
            c = n(7),
            d = n(1056),
            u = n(871),
            m = n(1027),
            p = n(1293),
            g = (n.n(p), n(1057)),
            f = n(5),
            h = n(3);
        n.d(t, "FeaturedBroadcastersRenderContext", function() {
            return m.FeaturedBroadcastersRenderContext
        });
        var v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = this.props.data.featuredStreams || [],
                        t = Object(g.a)(e),
                        n = this.props.data.featuredVideos || [],
                        a = Object(g.b)(n);
                    if (t.length > 0 && t.splice(t.length - a.length), this.props.shouldMixContent && a.length > 0) {
                        var r = 6 - a.length,
                            o = t.splice(r);
                        t = t.concat(a).concat(o)
                    } else t = t.concat(a);
                    var s = !(!this.props.data.loading && !this.props.data.error);
                    return i(t, this.props.renderContext, s)
                }, t.prototype.postRender = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t = o.__decorate([Object(c.a)(p, {
                    options: function() {
                        return {
                            variables: {
                                language: l.n.intl.getLanguageCode()
                            }
                        }
                    }
                }), Object(f.c)("FeaturedContent")], t)
            }(s.Component),
            y = v
    },
    1293: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FeaturedContent"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
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
                            value: "featuredStreams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "8"
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                            value: "broadcaster"
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
                                                        value: "150"
                                                    }
                                                }],
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
                                            }]
                                        }
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
                                            value: "viewersCount"
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
                                    value: "title"
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
                            value: "featuredVideos"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "language"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "2"
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isScheduled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isSponsored"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priorityLevel"
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
                                    value: "video"
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
                                            }]
                                        }
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
                                                        value: "150"
                                                    }
                                                }],
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
            }],
            loc: {
                start: 0,
                end: 1047
            }
        };
        n.loc.source = {
            body: "# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\nquery FeaturedContent($language: String!) {\n  featuredStreams(language: $language, first: 8) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    stream {\n      broadcaster {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      game {\n        id\n        name\n      }\n      id\n      type\n      viewersCount\n    }\n    title\n  }\n  featuredVideos(language: $language, first: 2) {\n    description\n    imageURL\n    isScheduled\n    isSponsored\n    priorityLevel\n    title\n    video {\n      game {\n        id\n        name\n      }\n      id\n      owner {\n        displayName\n        id\n        profileImageURL(width: 150)\n        login\n      }\n      viewCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    130: function(e, t, n) {
        "use strict";

        function i(e) {
            return r.b.get(s.a, !1) || r.a.buildType !== o.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? l + e : l + e.pathname
        }

        function a() {
            return !r.b.get(s.a, !1) && r.a.buildType === o.a.Production
        }
        var r = n(2),
            o = n(15),
            s = n(264);
        t.a = i, t.b = a;
        var l = "https://www.twitch.tv"
    },
    133: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = a.b.get(l, "https://twitch.amazon.com/prime"),
                i = "";
            try {
                i = btoa(t)
            } catch (e) {
                c.error(e, "Could not decode location pathname substring for redirect")
            }
            return i ? n + "?ref_=" + e + "&redirectRoute=" + i : n + "?ref_=" + e
        }
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        }), t.d = i;
        var a = n(2),
            r = "sm_tw_tup_ntp_t_all",
            o = "sm_tw_thp_blue_t_all",
            s = "sm_w_tup_ntp_t_c",
            l = "prime_landing_page_base_url",
            c = a.i.withCategory("PrimeUtilsLogger")
    },
    137: function(e, t, n) {
        "use strict";

        function i(e) {
            return S.debug("Updating activity", e), E = g.__assign({}, E, {
                activity: e
            }), m()
        }

        function a(e) {
            S.debug("Updating visibility", e), p(e)
        }

        function r(e) {
            S.debug("Saving current availability", e), E = g.__assign({}, E, {
                availability: e
            })
        }

        function o() {
            r(h.a.Online)
        }

        function s() {
            r(h.a.Idle)
        }

        function l() {
            S.debug("Clearing activity"), E = g.__assign({}, E, {
                activity: null
            }), m()
        }

        function c() {
            return g.__awaiter(this, void 0, void 0, function() {
                var e;
                return g.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            S.debug("Clearing previous session"), E = {
                                sessionID: d(),
                                availability: h.a.Online,
                                activity: null
                            }, t.label = 1;
                        case 1:
                            return t.trys.push([1, 4, , 5]), [4, m()];
                        case 2:
                            return t.sent(), S.debug("Setting new session"), E = g.__assign({}, E, {
                                sessionID: f.n.session.tabID
                            }), u(f.n.session.tabID), [4, m()];
                        case 3:
                            return [2, t.sent()];
                        case 4:
                            return e = t.sent(), [2, e];
                        case 5:
                            return [2]
                    }
                })
            })
        }

        function d() {
            return f.k.get(_, "")
        }

        function u(e) {
            f.k.set(_, e)
        }

        function m() {
            return g.__awaiter(this, void 0, void 0, function() {
                return g.__generator(this, function(e) {
                    return Object(v.d)(f.n.store.getState()) ? (S.debug("Setting status on server", {
                        state: E
                    }), b && clearTimeout(b), [2, f.n.apollo.client.mutate({
                        mutation: y,
                        variables: {
                            input: E
                        }
                    }).then(function(e) {
                        S.debug("Status scheduled to be set again", {
                            seconds: e.data.setSessionStatus.setAgainInSeconds
                        }), b = setTimeout(m, 1e3 * e.data.setSessionStatus.setAgainInSeconds)
                    }, function(e) {
                        S.warn("Failed to update status. Trying again in 60 seconds.", e), b = setTimeout(m, 6e4)
                    })]) : [2]
                })
            })
        }

        function p(e) {
            Object(v.d)(f.n.store.getState()) && (S.debug("Setting visibility on server", {
                visibility: e
            }), f.n.apollo.client.mutate({
                mutation: k,
                variables: {
                    input: {
                        visibility: e
                    }
                }
            }).then(function(e) {
                S.debug("Visibility set", {
                    visibility: e.data.updateVisibility.user.availability
                })
            }, function(e) {
                S.warn("Failed to update visibility.", e)
            }))
        }
        t.f = i, t.e = a, t.c = r, t.b = o, t.d = s, t.a = l, t.g = c;
        var g = n(0),
            f = n(2),
            h = n(50),
            v = n(17),
            y = n(417),
            k = (n.n(y), n(418)),
            _ = (n.n(k), "twilight.sessionID"),
            b = 0,
            S = f.i.withCategory("Session Status"),
            N = {
                sessionID: f.n.session.tabID,
                availability: "",
                activity: null
            },
            E = N
    },
    1685: function(e, t) {},
    1686: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFront_FeaturedGames"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "games"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "11"
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
                                                    value: "viewersCount"
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
            body: "query AnonFront_FeaturedGames {\n  games(first: 11) {\n    edges {\n      node {\n        id\n        name\n        viewersCount\n        boxArtURL(width: 285 height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1687: function(e, t) {},
    1688: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnonFrontPage_TopChannels"
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
                            value: "streams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "IntValue",
                                value: "6"
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
                        }],
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
                                                    value: "viewersCount"
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
                                                    value: "broadcaster"
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
                end: 433
            }
        };
        n.loc.source = {
            body: "query AnonFrontPage_TopChannels($platformType: PlatformType) {\n  streams(first: 6, platformType: $platformType) {\n    edges {\n      node {\n        id\n        game {\n          id\n          name\n          boxArtURL(width: 285 height: 380)\n        }\n        viewersCount\n        title\n        previewImageURL(width: 320 height: 180)\n        broadcaster {\n          id\n          login\n          displayName\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1689: function(e, t) {},
    1690: function(e, t) {},
    2055: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = n(0),
            r = n(1),
            o = n(2),
            s = n(389),
            l = n(47),
            c = n(5),
            d = n(3),
            u = (n(1685), function() {
                return r.createElement(d.U, {
                    className: "footer",
                    padding: {
                        y: 3
                    }
                }, r.createElement(d.U, {
                    className: "footer__link-container",
                    display: d.H.Flex,
                    alignItems: d.c.Center,
                    justifyContent: d.T.Center,
                    margin: "auto",
                    padding: {
                        y: 3
                    }
                }, r.createElement(d.U, {
                    className: "footer__glitch",
                    display: d.H.Flex,
                    alignItems: d.c.Center,
                    margin: {
                        right: 2
                    }
                }, r.createElement(d._8, {
                    asset: d._9.LogoGlitch,
                    width: 30,
                    height: 30
                })), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/about/"
                }, Object(o.d)("About", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://blog.twitch.tv/"
                }, Object(o.d)("Blog", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/products/turbo/ticket?ref=footer"
                }, Object(o.d)("Turbo", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://music.twitch.tv/"
                }, Object(o.d)("Music", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "http://twitchadvertising.tv/"
                }, Object(o.d)("Advertise", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://dev.twitch.tv/"
                }, Object(o.d)("Developers", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/partners/"
                }, Object(o.d)("Partners", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/platforms/"
                }, Object(o.d)("Mobile", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/jobs/"
                }, Object(o.d)("Jobs", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://help.twitch.tv/"
                }, Object(o.d)("Help", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/terms-of-service/"
                }, Object(o.d)("Terms", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/privacy-policy/"
                }, Object(o.d)("Privacy Policy", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/ad-choices/"
                }, Object(o.d)("Ad Choices", "Footer"))), r.createElement(d.U, {
                    margin: {
                        right: 1
                    }
                }, r.createElement("a", {
                    target: "_blank",
                    className: "footer__link",
                    href: "https://www.twitch.tv/p/legal/cookie-policy/"
                }, Object(o.d)("Cookie Policy", "Footer"))), r.createElement(d.U, {
                    margin: {
                        left: 5
                    }
                }, r.createElement(l.a, null, r.createElement("span", {
                    className: "footer__link"
                }, Object(o.d)("Language", "Footer")), r.createElement(d.p, {
                    size: d.r.Medium,
                    direction: d.q.TopRight
                }, r.createElement(s.a, null))))))
            }),
            m = Object(c.c)("Footer", {
                autoReportInteractive: !0
            })(u),
            p = n(911),
            g = n(819),
            f = n(817),
            h = n(112),
            v = n(13),
            y = n(882),
            k = n(382),
            _ = n(1286),
            b = n(387),
            S = n(10),
            N = n(7),
            E = n(377),
            C = n(1686),
            w = (n(1687), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        adDisplayed: !1
                    }, t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 12; n++) e.push(r.createElement(d.G, {
                                cols: 2,
                                key: "placeholder-" + n
                            }, r.createElement(d.U, {
                                key: n,
                                margin: {
                                    bottom: n < 6 ? 4 : 0
                                }
                            }, r.createElement(d.U, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(d.j, {
                                ratio: d.k.Aspect3x4
                            }, r.createElement(d._1, null))), r.createElement(d._21, null, r.createElement(d._1, {
                                width: 120
                            })), r.createElement(d._21, {
                                fontSize: d.L.Size7
                            }, r.createElement(d._1, {
                                width: 80
                            })))));
                            return e
                        }
                        var i = t.props.data.games.edges.slice(0, t.state.adDisplayed ? 10 : 12).map(function(e, t) {
                                var n = e.node;
                                return r.createElement(d.G, {
                                    cols: 2,
                                    key: "game-" + n.id
                                }, r.createElement(d.U, {
                                    margin: {
                                        bottom: t < 6 ? 4 : 0
                                    }
                                }, r.createElement(d.t, {
                                    linkTo: Object(E.d)(n.name),
                                    title: n.name,
                                    imageAlt: n.name + " cover image",
                                    imageSrc: n.boxArtURL,
                                    info: Object(o.d)("{viewerCount,number} viewers", {
                                        viewerCount: n.viewersCount
                                    }, "FeaturedGames"),
                                    "data-a-target": "card-" + t,
                                    "data-a-id": "card-" + n.name.replace(/ /g, "")
                                })))
                            }),
                            a = r.createElement(d.U, {
                                display: d.H.Flex,
                                flexGrow: 1,
                                justifyContent: d.T.Center,
                                key: "ad"
                            }, r.createElement(y.a, {
                                adSize: k.c.anonFront.rect,
                                adUnit: k.d.frontpage,
                                slotID: k.b.anonFront.rect,
                                targeting: {
                                    pagetype: k.a.frontpage
                                },
                                slotRendered: t.onSlotRendered,
                                autoEnable: !1
                            }));
                        return i.splice(4, 0, a), i
                    }, t.onSlotRendered = function() {
                        t.state.adDisplayed || t.setState({
                            adDisplayed: !0
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = r.createElement(d.U, {
                            display: d.H.Flex,
                            flexDirection: d.J.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size2,
                            color: d.F.Base
                        }, Object(o.d)("Featured Games", "FeaturedGames")), r.createElement(d.U, {
                            className: "anon-featured-games__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size3,
                            color: d.F.Alt2
                        }, Object(o.d)("Games people are watching now", "FeaturedGames")))),
                        t = r.createElement(d.U, {
                            display: d.H.Flex,
                            justifyContent: d.T.End
                        }, r.createElement(d.P, {
                            display: d.H.Flex,
                            alignItems: d.c.Center
                        }, r.createElement(S.a, {
                            to: "/directory",
                            "data-a-target": "see-all-live-games-link"
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size4
                        }, Object(o.d)("See all live games", "FeaturedGames")), r.createElement(d._17, {
                            color: d.F.Link,
                            margin: {
                                left: .5
                            },
                            display: d.H.InlineFlex,
                            alignItems: d.c.Center
                        }, r.createElement(d._8, {
                            asset: d._9.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return r.createElement(d._17, {
                        className: "anon-featured-games",
                        background: d.m.Base
                    }, e, r.createElement(d.N, null, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = a.__decorate([Object(N.a)(C), Object(c.c)("FeaturedGames")], t)
            }(r.Component)),
            O = w,
            x = n(913),
            U = n(48);
        ! function(e) {
            e[e.All = 1] = "All", e[e.Xbox = 2] = "Xbox", e[e.PS4 = 3] = "PS4"
        }(i || (i = {}));
        var F = n(1688),
            D = (n(1689), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getItems = function() {
                        if (t.props.data.loading || t.props.data.error) {
                            for (var e = [], n = 0; n < 6; n++) e.push(r.createElement(d.U, {
                                key: n,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(d.U, {
                                margin: {
                                    bottom: .5
                                }
                            }, r.createElement(d.j, {
                                ratio: d.k.Aspect16x9
                            }, r.createElement(d._1, null))), r.createElement(d._21, null, r.createElement(d._1, {
                                width: 150
                            })), r.createElement(d._21, {
                                fontSize: d.L.Size7
                            }, r.createElement(d._1, {
                                width: 100
                            }))));
                            return e
                        }
                        return t.props.data.streams.edges.map(function(e, n) {
                            var i = e.node,
                                a = Object(U.a)(i.broadcaster.login, i.broadcaster.displayName),
                                s = {
                                    medium: v.PageviewMedium.Following,
                                    content: v.PageviewContent.Live,
                                    content_index: n
                                };
                            return r.createElement(d.U, {
                                className: "anon-top-channels",
                                key: i.broadcaster.id,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(x.a, {
                                imageSrc: i && i.previewImageURL || o.a.defaultStreamPreviewURL,
                                imageAlt: i && i.title || "",
                                viewerCount: i && i.viewersCount || 0,
                                title: i && i.title || "",
                                channelName: a,
                                gameImageSrc: i && i.game && i.game.boxArtURL || o.a.defaultBoxArtURL,
                                gameTitle: i && i.game ? i.game.name : "",
                                gameLinkTo: {
                                    pathname: "/directory/game/" + (i && i.game ? i.game.name : ""),
                                    state: s
                                },
                                linkTo: {
                                    pathname: "/" + i.broadcaster.login,
                                    state: s
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + i.broadcaster.login + "/videos",
                                    state: s
                                },
                                "data-a-target": "top-" + t.getDataProp() + "-channel-" + n
                            }))
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.postRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.postRender()
                }, t.prototype.render = function() {
                    var e = r.createElement(d.U, {
                            display: d.H.Flex,
                            flexDirection: d.J.Row,
                            alignItems: d.c.Baseline,
                            margin: {
                                bottom: 1
                            }
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size2,
                            color: d.F.Base
                        }, this.getTitle()), r.createElement(d.U, {
                            className: "anon-top-channels__subheader",
                            margin: {
                                left: 2
                            }
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size3,
                            color: d.F.Alt2
                        }, this.getSubtitle()))),
                        t = r.createElement(d.U, {
                            className: "anon-top-channels__footer",
                            display: d.H.Flex,
                            justifyContent: d.T.End
                        }, r.createElement(d.P, {
                            display: d.H.Flex,
                            alignItems: d.c.Center
                        }, r.createElement(S.a, {
                            to: this.getLink(),
                            "data-a-target": "see-all-" + this.getDataProp() + "-channels-link"
                        }, r.createElement(d._21, {
                            fontSize: d.L.Size4
                        }, this.getFooter()), r.createElement(d._17, {
                            color: d.F.Link,
                            margin: {
                                left: .5
                            },
                            display: d.H.InlineFlex,
                            alignItems: d.c.Center
                        }, r.createElement(d._8, {
                            asset: d._9.AngleRight,
                            width: 14,
                            height: 14
                        })))));
                    return r.createElement("div", null, e, r.createElement(d._33, {
                        gutterSize: d._35.Small,
                        childWidth: d._34.Large,
                        placeholderItems: 6
                    }, this.getItems()), t)
                }, t.prototype.postRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getFooter = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(o.d)("See all live Channels", "TopChannels");
                        case i.PS4:
                            return Object(o.d)("See all PS4 Channels", "TopChannels");
                        case i.Xbox:
                            return Object(o.d)("See all Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getSubtitle = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(o.d)("Broadcasters people are watching now", "TopChannels");
                        case i.PS4:
                            return Object(o.d)("Channels broadcasted from Playstation 4", "TopChannels");
                        case i.Xbox:
                            return Object(o.d)("Channels broadcasted from Xbox one", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getTitle = function() {
                    switch (this.props.type) {
                        case i.All:
                            return Object(o.d)("Top Live Channels", "TopChannels");
                        case i.PS4:
                            return Object(o.d)("Top PS4 Channels", "TopChannels");
                        case i.Xbox:
                            return Object(o.d)("Top Xbox One Channels", "TopChannels");
                        default:
                            return ""
                    }
                }, t.prototype.getDataProp = function() {
                    switch (this.props.type) {
                        case i.All:
                            return "live";
                        case i.PS4:
                            return "ps4";
                        case i.Xbox:
                            return "xbox";
                        default:
                            return ""
                    }
                }, t.prototype.getLink = function() {
                    switch (this.props.type) {
                        case i.All:
                            return "/directory/all";
                        case i.PS4:
                            return "/directory/all/ps4";
                        case i.Xbox:
                            return "/directory/all/xbox";
                        default:
                            return ""
                    }
                }, t = a.__decorate([Object(N.a)(F, {
                    options: function(e) {
                        var t = "";
                        switch (e.type) {
                            case i.PS4:
                                t = "ps4";
                                break;
                            case i.Xbox:
                                t = "xbox";
                                break;
                            default:
                                t = "all"
                        }
                        return {
                            variables: {
                                platformType: t
                            }
                        }
                    }
                }), Object(c.c)("TopChannels")], t)
            }(r.Component)),
            R = D,
            T = (n(1690), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        takeoverRendered: !1,
                        numSlotsAdded: 0
                    }, t.onTakeoverRendered = function() {
                        t.setState({
                            takeoverRendered: !0
                        })
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(k.b.anonFront).length && h.a.display(k.b.anonFront.takeover), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    k.g.addListener(k.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), o.n.setPageTitle()
                }, t.prototype.render = function() {
                    return r.createElement(d.U, {
                        fullHeight: !0
                    }, r.createElement(p.a, null, r.createElement(b.a, null)), r.createElement(d._17, {
                        className: "anon-front",
                        background: d.m.Base,
                        position: d._2.Relative,
                        fullHeight: !0
                    }, r.createElement("div", {
                        id: "mantle_skin",
                        className: this.state.takeoverRendered ? "anon-front__takeover" : ""
                    }, r.createElement(y.a, {
                        adSize: k.c.anonFront.takeover,
                        adUnit: k.d.frontpage,
                        slotID: k.b.anonFront.takeover,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        slotRendered: this.onTakeoverRendered,
                        autoEnable: !1
                    }), r.createElement(d.U, {
                        className: "anon-front__featured-section",
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, r.createElement(d.U, {
                        className: "anon-front__banner"
                    }, r.createElement(y.a, {
                        adSize: k.c.anonFront.banner,
                        adUnit: k.d.frontpage,
                        slotID: k.b.anonFront.banner,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), r.createElement(d.U, {
                        className: "anon-front__content-section",
                        padding: this.state.takeoverRendered ? 2 : 0
                    }, r.createElement(_.b, {
                        renderContext: _.a.AnonFront
                    })), r.createElement(d.U, {
                        className: "anon-front__sizzle-strip",
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, r.createElement(y.a, {
                        adSize: k.c.anonFront.sizzle,
                        adUnit: k.d.sizzle,
                        slotID: k.b.anonFront.sizzle,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        autoEnable: !1
                    }))), r.createElement(d._17, {
                        background: d.m.Base,
                        margin: {
                            x: "auto"
                        },
                        padding: {
                            x: 1,
                            top: 5,
                            bottom: 3
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(O, null)), r.createElement(d._17, {
                        className: "anon-front__social-container",
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center,
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3,
                            x: 2
                        }
                    }, r.createElement(d._21, {
                        fontSize: d.L.Size3
                    }, Object(o.d)("Follow the latest Twitch news", "AnonFrontPage")), r.createElement(d.U, {
                        margin: {
                            top: 1
                        },
                        display: d.H.Flex,
                        flexDirection: d.J.Row
                    }, r.createElement(d.u, {
                        linkTo: "https://www.facebook.com/twitch",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-facebook-link"
                    }, Object(o.d)("Facebook", "AnonFrontPage")), r.createElement(d.U, {
                        margin: {
                            x: .5
                        }
                    }, r.createElement(d.u, {
                        linkTo: "https://www.twitter.com/twitch",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-twitter-link"
                    }, Object(o.d)("Twitter", "AnonFrontPage"))), r.createElement(d.u, {
                        linkTo: "https://blog.twitch.tv/",
                        targetBlank: !0,
                        size: d.x.Large,
                        "data-a-target": "frontpage-blog-link"
                    }, Object(o.d)("Official Blog", "AnonFrontPage")))), r.createElement(d._17, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            top: 3,
                            bottom: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(R, {
                        type: i.All,
                        key: "channels.all"
                    })), r.createElement(d._17, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(R, {
                        type: i.PS4,
                        key: "channels.ps4"
                    })), r.createElement(d._17, {
                        background: d.m.Base,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        margin: {
                            x: "auto"
                        },
                        className: "anon-front__content-section"
                    }, r.createElement(R, {
                        type: i.Xbox,
                        key: "channels.xbox"
                    })), r.createElement(d.U, {
                        className: "anon-front__bottom",
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, r.createElement(y.a, {
                        adSize: k.c.anonFront.bottom,
                        adUnit: k.d.frontpage,
                        slotID: k.b.anonFront.bottom,
                        targeting: {
                            pagetype: k.a.frontpage
                        },
                        injectStyles: {
                            display: "flex"
                        },
                        autoEnable: !1
                    })), r.createElement(m, null))))
                }, t.prototype.componentWillUnmount = function() {
                    k.g.removeListener(k.e, this.onSlotAdded)
                }, t = a.__decorate([Object(c.c)("AnonFrontPage", {
                    destination: f.a.Index
                }), Object(g.a)({
                    location: v.PageviewLocation.FrontPage
                })], t)
            }(r.Component)),
            I = T;
        n.d(t, "AnonFrontPage", function() {
            return I
        })
    },
    264: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(21),
            r = n(1),
            o = n(2),
            s = n(15),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        return n.isEnabled ? "REPLACE" === t ? void n.logger.debug("Skipping legacy route processing, due to history replace.") : e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), void n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
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
                    }, n.isEnabled = o.b.get(l, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
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
            }(r.Component),
            d = c;
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    380: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? a(r, 2) + ":" + a(i, 2) + ":" + a(n, 2) : r ? r + ":" + a(i, 2) + ":" + a(n, 2) : i + ":" + a(n, 2)
        }

        function a(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = i
    },
    382: function(e, t, n) {
        "use strict";

        function i(e) {
            p.emit(u, e)
        }

        function a(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), t.i = i, t.h = a;
        var r = n(24),
            o = (n.n(r), n(2)),
            s = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            l = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            c = {
                directory: "/" + o.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + o.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + o.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + o.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            d = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            u = "ads.slot-render-end",
            m = "ads.slot-ready",
            p = new r.EventEmitter
    },
    386: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(7),
            s = n(56),
            l = n(3),
            c = n(407),
            d = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l.S, i.__assign({
                        onClick: this.props.onClick,
                        linkTo: this.props.linkTo,
                        hover: this.props.hover,
                        tabIndex: -1,
                        key: this.props.id
                    }, Object(s.a)(this.props)), a.createElement(l.U, {
                        className: "search-game-result-card",
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a.createElement(l.A, {
                        row: !0
                    }, a.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.data && !this.props.data.loading && this.props.data.game ? this.props.data.game.boxArtURL : r.a.defaultBoxArtURL,
                        size: l.D.Size4,
                        aspect: l.k.BoxArt
                    }), a.createElement(l.B, null, a.createElement(l.P, {
                        padding: {
                            x: 1
                        }
                    }, a.createElement(l._21, {
                        type: l._26.H5,
                        ellipsis: !0
                    }, this.props.title))))))
                }, t = i.__decorate([Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(a.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    387: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: !!e.session.firstPageLoaded
            }
        }
        var a = n(6),
            r = n(0),
            o = n(21),
            s = n(1),
            l = n(2),
            c = n(47),
            d = n(7),
            u = n(106),
            m = n(5),
            p = n(3),
            g = (n(422), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, null, s.createElement(p._17, {
                        className: "prime-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("Free with Prime", "PrimeOfferHeader")))), this.getNumOfUnseenOffersDisplay())
                }, t.prototype.getNumOfUnseenOffersDisplay = function() {
                    var e = this.props.numOfUnseenOffers;
                    if (e) return s.createElement(p._17, {
                        className: "prime-offer__new-offer-header",
                        borderBottom: !0,
                        background: p.m.Alt2,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        fullWidth: !0,
                        display: p.H.Flex
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.H6
                    }, Object(l.d)("New Prime Loot", "PrimeOfferHeader"))), s.createElement(p.U, {
                        className: "prime-offer__new-offer-header-count",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        textAlign: p._22.Center
                    }, s.createElement(p._17, {
                        className: "prime-offer__new-offer-header-count__text",
                        background: p.m.Base,
                        color: p.F.Base
                    }, s.createElement(p._21, null, e.toString())))))
                }, t = r.__decorate([Object(m.c)("PrimeOfferHeader")], t)
            }(s.Component)),
            f = g,
            h = n(28),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(l.d)("You'll get characters, vehicles, skins, and boosts for games like {hearthstone} and {smite}, plus surprises like a rotating selection of indie games.", {
                        hearthstone: s.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Hearthstone", "PrimeEmpty")),
                        smite: s.createElement(p._21, {
                            italic: !0,
                            type: p._26.Span
                        }, Object(l.d)("Smite", "PrimeEmpty"))
                    }, "PrimeEmpty");
                    return s.createElement(p.U, {
                        className: "prime-empty",
                        margin: 2
                    }, s.createElement(p.U, {
                        textAlign: p._22.Center,
                        margin: 2
                    }, s.createElement("img", {
                        className: "prime-empty__image",
                        src: "https://m.media-amazon.com/images/G/01/sm/landing/Trunk_w_Star_transparent._V530838660_.png",
                        alt: Object(l.d)("Prime Treasure Chest", "PrimeEmpty")
                    })), s.createElement(p._21, {
                        type: p._26.P,
                        bold: !0
                    }, Object(l.d)("Free in-game loot every month, plus surprises", "PrimeEmpty")), s.createElement("div", null, e))
                }, t = r.__decorate([Object(m.c)("PrimeEmpty")], t)
            }(s.Component),
            y = v,
            k = n(65),
            _ = n(20),
            b = {
                DIRECT_ENTITLEMENT: "DIRECT_ENTITLEMENT",
                CLAIM_CODE: "CLAIM_CODE",
                EXTERNAL_OFFER: "EXTERNAL_OFFER"
            },
            S = function(e, t) {
                return e + "-" + t
            },
            N = function() {
                return x("claimedOffers")
            },
            E = function(e) {
                l.k.set("claimedOffers", e)
            },
            C = function() {
                return x("seenOffers")
            },
            w = function(e) {
                l.k.set("seenOffers", e)
            },
            O = function(e, t) {
                return (e && (e.priority || 0 === e.priority) ? e.priority : 99999) - (t && (t.priority || 0 === t.priority) ? t.priority : 99999)
            },
            x = function(e) {
                return l.k.get(e, [])
            },
            U = function() {
                var e = location.search,
                    t = o.parse(e);
                return t && t.dateOverride || void 0
            },
            F = (n(423), n(424)),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-claim-button"
                    }, this.getClaimButton())
                }, t.prototype.getClaimButton = function() {
                    var e = this.props,
                        t = this.getButtonText(),
                        n = s.createElement(p.u, {
                            fullWidth: !0,
                            state: this.props.claiming ? p.y.Loading : p.y.Default,
                            disabled: this.props.claiming,
                            onClick: this.props.claimCallback,
                            "data-a-target": "prime-claim-button"
                        }, t);
                    return e.offerType === b.EXTERNAL_OFFER ? s.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: e.offerLinkUri,
                        targetBlank: !0
                    }, t) : s.createElement(p.U, {
                        position: p._2.Relative
                    }, n)
                }, t.prototype.getButtonText = function() {
                    return this.props.offerType === b.CLAIM_CODE ? Object(l.d)("Get Code", "PrimeClaimButton") : this.props.offerType === b.EXTERNAL_OFFER ? Object(l.d)("Learn More", "PrimeClaimButton") : Object(l.d)("Claim Offer", "PrimeClaimButton")
                }, t = r.__decorate([Object(d.a)(F), Object(m.c)("PrimeClaimButton")], t)
            }(s.Component),
            R = D,
            T = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.toggleShowDescription = function() {
                        t.setState({
                            showDescription: !t.state.showDescription
                        })
                    }, t.state = {
                        showDescription: !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-claim-description",
                        margin: {
                            top: 1
                        }
                    }, s.createElement(p.u, {
                        fullWidth: !0,
                        type: p.z.Hollow,
                        onClick: this.toggleShowDescription
                    }, this.getDescriptionButtonText()), this.getDescriptionBlock())
                }, t.prototype.getDescriptionButtonText = function() {
                    return this.state.showDescription ? Object(l.d)("Close Info", "PrimeClaimDescription") : Object(l.d)("More Info", "PrimeClaimDescription")
                }, t.prototype.getDescriptionBlock = function() {
                    var e = null;
                    return this.state.showDescription && (e = s.createElement(p._17, {
                        className: "prime-claim-description__body",
                        background: p.m.Alt2,
                        border: !0
                    }, s.createElement(p.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, s.createElement(k, {
                        source: this.props.description || ""
                    })))), e
                }, t = r.__decorate([Object(m.c)("PrimeClaimDescription")], t)
            }(s.Component),
            I = T,
            P = n(133),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.getLink = function() {
                    return this.props.externalUri ? this.props.externalUri : Object(P.d)(P.c, window.location.pathname.substring(1))
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-upsell-button",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(p.u, {
                        fullWidth: !0,
                        linkTo: this.getLink(),
                        targetBlank: !0
                    }, Object(l.d)("Start Your Free Trial", "PrimeUpsellButton")))
                }, t = r.__decorate([Object(m.c)("PrimeUpsellButton")], t)
            }(s.Component),
            j = L,
            A = n(425),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, this.getCallToAction(), this.getClaimDescriptionSection())
                }, t.prototype.getCallToAction = function() {
                    var e = this.props.data;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.hasPrime ? s.createElement(R, {
                        offerType: this.props.offerType,
                        offerId: this.props.offerId,
                        claimCallback: this.props.claimCallback,
                        claiming: this.props.claiming,
                        offerLinkUri: this.props.externalUri
                    }) : s.createElement(j, {
                        externalUri: this.props.externalUri
                    })
                }, t.prototype.getClaimDescriptionSection = function() {
                    return this.props.offerType === b.EXTERNAL_OFFER ? null : s.createElement(I, {
                        description: this.props.offerDescription
                    })
                }, t = r.__decorate([Object(d.a)(A), Object(m.c)("PrimeInstructions")], t)
            }(s.Component),
            B = H,
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: p._22.Center
                    }, s.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, s.createElement(p._17, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        fontSize: this.props.fontSize ? this.props.fontSize : p.L.Size5,
                        "data-a-target": "prime-error-glitch"
                    }, s.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, s.createElement(p._8, {
                        asset: p._9.DeadGlitch,
                        type: p._10.Alert,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Something has gone wrong. Please try again later.", "PrimeError"))))
                }, t = r.__decorate([Object(m.c)("PrimeError")], t)
            }(s.Component),
            q = V,
            M = (n(426), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.setRef = function(e) {
                        t.setState({
                            clipboardInput: e
                        })
                    }, t.copy = function() {
                        var e;
                        try {
                            t.state.clipboardInput && t.state.clipboardInput.select(), e = document.execCommand("copy")
                        } catch (t) {
                            e = !1
                        }
                        return t.setState({
                            copied: e
                        }), e
                    }, t.state = {
                        copied: !1,
                        clipboardInput: void 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.state.copied ? Object(l.d)("copied", "CopyButton") : Object(l.d)("copy", "CopyButton");
                    return s.createElement(p.U, {
                        className: "copy-button copy-btn",
                        display: p.H.Flex
                    }, s.createElement(p.P, {
                        className: "copy-button__btn"
                    }, s.createElement(p.u, {
                        onClick: this.copy,
                        type: this.state.copied ? p.z.Success : p.z.Default
                    }, e)), s.createElement("input", {
                        className: "copy-button__copy-input",
                        ref: this.setRef,
                        value: this.props.clipboardText,
                        readOnly: !0
                    }))
                }, t = r.__decorate([Object(m.c)("CopyButton")], t)
            }(s.Component)),
            z = M,
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        t.setState({
                            value: e.currentTarget.value,
                            copied: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillMount = function() {
                    this.props.initialText && this.setState({
                        value: this.props.initialText,
                        copied: !1
                    })
                }, t.prototype.render = function() {
                    return this.state && this.state.value ? s.createElement(p.U, {
                        className: "copyable-item",
                        display: p.H.Flex,
                        flexGrow: 1
                    }, s.createElement(p.U, {
                        flexGrow: 1
                    }, s.createElement(p.Q, {
                        type: p.R.Text,
                        onChange: this.onChange,
                        value: this.state.value,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly
                    })), s.createElement(p.U, null, s.createElement(z, {
                        clipboardText: this.state.value
                    }))) : null
                }, t = r.__decorate([Object(m.c)("CopyableItem")], t)
            }(s.Component),
            G = W,
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "prime-claim-instructions",
                        background: p.m.Alt2,
                        border: !0,
                        padding: 1,
                        fontSize: p.L.Size6
                    }, s.createElement(p._36, null, s.createElement(k, {
                        source: this.props.claimInstructions || "",
                        escapeHtml: !0
                    })))
                }, t = r.__decorate([Object(m.c)("PrimeClaimInstructions")], t)
            }(s.Component),
            Q = K,
            $ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p.U, {
                        className: "prime-redeem",
                        margin: {
                            top: 1
                        }
                    }, this.getCodeOrConfirmation(), this.getPrimeClaimInstructions())
                }, t.prototype.getCodeOrConfirmation = function() {
                    return this.props.code && this.props.deliveryMethod === b.CLAIM_CODE ? s.createElement(p.U, null, s.createElement(G, {
                        initialText: this.props.code,
                        readOnly: !0,
                        textCenter: !0
                    })) : s.createElement(p._17, {
                        background: p.m.Alt2,
                        display: p.H.Flex,
                        justifyContent: p.T.Center,
                        padding: {
                            y: 1
                        },
                        margin: {
                            bottom: 1
                        }
                    }, s.createElement(p._21, {
                        type: p._26.H4,
                        align: p._37.Middle
                    }, s.createElement(p.U, {
                        padding: 1,
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center,
                        "data-a-target": "prime-redeem-check"
                    }, s.createElement(p.U, {
                        margin: {
                            right: 1
                        },
                        display: p.H.InlineFlex,
                        flexGrow: 1,
                        flexWrap: p.K.NoWrap,
                        alignItems: p.c.Center
                    }, s.createElement(p._8, {
                        asset: p._9.Check,
                        type: p._10.Success,
                        width: 20,
                        height: 20
                    })), Object(l.d)("Added To Your Twitch Account", "PrimeRedeem"))))
                }, t.prototype.getPrimeClaimInstructions = function() {
                    if (this.props.claimInstructions) return s.createElement(Q, {
                        claimInstructions: this.props.claimInstructions || ""
                    })
                }, t = r.__decorate([Object(m.c)("PrimeRedeem")], t)
            }(s.Component),
            X = $,
            J = n(427),
            Y = (n(428), n(429)),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        claimed: !1,
                        claiming: !1,
                        error: !1,
                        claimData: ""
                    }, t.renderRedeemUpsellOrClaimSection = function(e) {
                        var n = e.content || {},
                            i = e.self || {
                                claimData: ""
                            },
                            a = t.props.data || {},
                            r = a.currentUser || {};
                        if (t.state.error) return s.createElement(q, {
                            fontSize: p.L.Size6
                        });
                        if ((t.isCurrentOfferClaimed(e) || t.state.claimed) && r && r.hasPrime) {
                            var o = t.state.claimData || i.claimData;
                            return s.createElement(X, {
                                claimInstructions: e.claimInstructions,
                                code: o,
                                deliveryMethod: e.deliveryMethod
                            })
                        }
                        return s.createElement(B, {
                            offerId: e.id,
                            offerDescription: e.description || "",
                            offerType: e.deliveryMethod || "",
                            externalUri: n.externalURL || "",
                            claimCallback: t.claimOffer,
                            claiming: t.state.claiming
                        })
                    }, t.claimOffer = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            claiming: !0
                        });
                        var n = t.props.data;
                        if (!n.loading && !n.error && n.currentUser.id) {
                            var i = n.currentUser.id,
                                a = t.props.offer,
                                r = Object(_.a)({
                                    offerID: a.id
                                });
                            t.props.claimPrimeOffer(r).then(function(e) {
                                var n = e.data || {},
                                    r = n.claimPrimeOffer || {},
                                    o = r.self || {};
                                o && a && t.setState({
                                    claimData: o.claimData
                                }), t.markAsClaimedInLocalStorage(i)
                            }).catch(function() {
                                t.setState({
                                    claiming: !1,
                                    claimed: !1,
                                    error: !0
                                })
                            })
                        }
                    }, t.markAsClaimedInLocalStorage = function(e) {
                        var n = t.props.offer,
                            i = S(n.id, e),
                            a = N();
                        a.push(i), E(a), t.setState({
                            claiming: !1,
                            claimed: !0,
                            error: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.offer,
                        t = this.props.isLast || !1;
                    if (e) {
                        var n = e.content || {},
                            i = n.game || {},
                            a = n.categories || [];
                        return s.createElement(p._17, {
                            className: "prime-offer",
                            alignItems: p.c.Center,
                            borderBottom: !t,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, s.createElement(p.U, {
                            className: "prime-offer__title",
                            padding: {
                                y: .5
                            }
                        }, s.createElement(k, {
                            className: "prime-offer__title__markdown",
                            containerTagName: "h4",
                            source: e.title || ""
                        })), s.createElement("img", {
                            src: e.imageURL
                        }), s.createElement(p.U, {
                            className: "prime-offer__description",
                            padding: {
                                top: .5
                            }
                        }, s.createElement(p._21, {
                            type: p._26.P
                        }, i.name, " ", a[0])), s.createElement(p.U, {
                            className: "prime-offer__publisher"
                        }, s.createElement(p._21, {
                            type: p._26.P,
                            color: p.F.Alt2,
                            fontSize: p.L.Size7
                        }, n.publisher)), this.renderRedeemUpsellOrClaimSection(e))
                    }
                    return null
                }, t.prototype.isCurrentOfferClaimed = function(e) {
                    return (e.self || {
                        hasEntitlement: !1
                    }).hasEntitlement || this.isCurrentOfferClaimedInLocalStorage()
                }, t.prototype.isCurrentOfferClaimedInLocalStorage = function() {
                    var e = this.props.data,
                        t = this.props.offer;
                    if (!e.loading && !e.error && e.currentUser) {
                        var n = e.currentUser.id,
                            i = S(t.id, n);
                        return N().includes(i)
                    }
                }, t = r.__decorate([Object(d.a)(Y, {
                    name: "data"
                }), Object(d.a)(J, {
                    name: "claimPrimeOffer"
                }), Object(m.c)("PrimeOffer")], t)
            }(s.Component),
            ee = Z,
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        className: "prime-offer-placeholder",
                        alignItems: p.c.Center,
                        borderBottom: !0,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, s.createElement(p.U, {
                        className: "prime-offer-placeholder__title",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(p._1, {
                        height: 20
                    })), s.createElement(p._1, {
                        height: 160
                    }), s.createElement(p.U, {
                        className: "prime-offer-placeholder__description",
                        padding: {
                            y: .5
                        }
                    }, s.createElement(p._1, {
                        height: 20,
                        width: 160
                    })), s.createElement(p.U, {
                        className: "prime-offer-placeholder__publisher"
                    }, s.createElement(p._1, {
                        height: 20,
                        width: 80
                    })), s.createElement(p.U, {
                        className: "prime-offer-placeholder__claim",
                        margin: {
                            top: 2,
                            bottom: 1
                        }
                    }, s.createElement(p._1, {
                        height: 40
                    })))
                }, t = r.__decorate([Object(m.c)("PrimeOfferPlaceholder")], t)
            }(s.Component),
            ne = te,
            ie = (n(430), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(p._17, {
                        "data-a-target": "prime-offers-upsell",
                        className: "prime-offers-upsell",
                        alignItems: p.c.Center,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, s.createElement(p._21, {
                        type: p._26.H4
                    }, Object(l.d)("Claim With Twitch Prime", "PrimeUpsell")), s.createElement(p.U, {
                        className: "prime-upsell__logo-container",
                        fullWidth: !0,
                        margin: {
                            y: 2
                        },
                        textAlign: p._22.Center
                    }, s.createElement(p._8, {
                        asset: p._9.LogoTwitchPrime,
                        width: 330,
                        height: 150,
                        type: p._10.Brand
                    })), s.createElement(p._21, {
                        type: p._26.P
                    }, Object(l.d)("Get free game loot like this every month plus surprises, ad-free viewing, and loads more with Twitch Prime.", "PrimeUpsell")), s.createElement(j, null))
                }, t = r.__decorate([Object(m.c)("PrimeUpsell")], t)
            }(s.Component)),
            ae = ie,
            re = n(431),
            oe = (n(432), n(433)),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.shouldShowPlaceholders = function() {
                        var e = t.props.offersData,
                            n = e.primeOffers,
                            i = void 0 === n || null === n;
                        return e.loading || !e.error && i && t.props.showByDefault
                    }, t.renderOfferPlaceholders = function() {
                        for (var e = [], t = 0; t < 3; ++t) e.push(s.createElement(ne, {
                            key: t
                        }));
                        return e
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props.offersData;
                    e && e.primeOffers && this.props.latencyTracking.reportInteractive(e.primeOffers.length)
                }, t.prototype.render = function() {
                    return s.createElement(h.b, {
                        className: "prime-offer-listing"
                    }, s.createElement(p.U, {
                        className: "prime-offer-listing__content",
                        alignItems: p.c.Center,
                        padding: {
                            top: 1,
                            bottom: 2,
                            left: 1,
                            right: 1
                        }
                    }, this.renderUpsell(), this.renderOfferExperience()))
                }, t.prototype.renderUpsell = function() {
                    var e = this.props.userData;
                    if (!e.loading && !e.error && !this.currentUserHasPrime(e)) return s.createElement(ae, null)
                }, t.prototype.renderOfferExperience = function() {
                    var e = this.props.offersData;
                    if (this.shouldShowPlaceholders()) return this.renderOfferPlaceholders();
                    if (!e.error && e.primeOffers && e.primeOffers.length) {
                        var t = this.getSortedOffers(),
                            n = t[t.length - 1];
                        return t.map(function(e) {
                            return s.createElement(ee, {
                                key: e.id,
                                offer: e,
                                isLast: n.id === e.id
                            })
                        })
                    }
                    return s.createElement(y, null)
                }, t.prototype.getSortedOffers = function() {
                    var e = this.props.offersData.primeOffers,
                        t = this.getUserId();
                    if (t) {
                        var n = N(),
                            i = e.filter(function(e) {
                                return !n.includes(S(e.id, t))
                            }).sort(O),
                            a = e.filter(function(e) {
                                return !i.includes(e)
                            }).sort(O);
                        return i.concat(a)
                    }
                    return e.slice().sort(O)
                }, t.prototype.getUserId = function() {
                    var e = this.props.userData;
                    return !e.loading && !e.error && e.currentUser && e.currentUser.id ? e.currentUser.id : ""
                }, t.prototype.currentUserHasPrime = function(e) {
                    var t = e.currentUser;
                    return t && t.hasPrime
                }, t = r.__decorate([Object(d.a)(re, {
                    name: "offersData"
                }), Object(d.a)(oe, {
                    name: "userData"
                }), Object(m.c)("PrimeOfferList")], t)
            }(s.Component),
            le = se,
            ce = n(434),
            de = (n(435), n(436)),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numOfUnseenOffers: 0
                    }, t.showOffersByDefault = function() {
                        var e = location.search,
                            n = o.parse(e);
                        return n && !!n.expandoffers || t.props.openByDefault
                    }, t.onToggleMenu = function(e) {
                        t.seeOffers(), e && t.setState({
                            numOfUnseenOffers: 0
                        })
                    }, t.getUnseenOffers = function(e) {
                        var n = e.offersData;
                        if (n && !n.loading && !n.error) {
                            var i = n.primeOffers || [],
                                a = C();
                            t.setState({
                                numOfUnseenOffers: i.filter(function(e) {
                                    return !(a.includes(e.id) || t.offerIsClaimed(e))
                                }).length
                            })
                        }
                    }, t.offerIsClaimed = function(e) {
                        return e.self && e.self.hasEntitlement
                    }, t.seeOffers = function() {
                        var e = t.props.offersData;
                        if (e && !e.loading && !e.error) {
                            var n = e.primeOffers || [],
                                i = n.map(function(e) {
                                    return "" + e.id
                                });
                            w(i)
                        }
                    }, t.renderOfferList = function() {
                        var e = t.props.offersData,
                            n = t.showOffersByDefault() || !1;
                        return e && !e.loading && !e.error || n ? s.createElement(p.U, {
                            "data-a-target": "offers-list",
                            className: "prime-offers__list"
                        }, s.createElement(f, {
                            numOfUnseenOffers: t.state.numOfUnseenOffers
                        }), s.createElement(le, {
                            showByDefault: n
                        })) : null
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getUnseenOffers(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.getUnseenOffers(e)
                }, t.prototype.render = function() {
                    var e = this.props.userData && this.props.userData.requestInfo && Object(u.b)(this.props.userData.requestInfo.countryCode),
                        t = this.props.userData && this.props.userData.currentUser && this.props.userData.currentUser.hasPrime;
                    if (!e && !t) return null;
                    var n = {
                        align: p._31.Center,
                        direction: p._32.Bottom,
                        label: ""
                    };
                    return this.state.numOfUnseenOffers > 0 ? n.label = Object(l.d)("New Prime Loot", "PrimeOffers") : n.label = Object(l.d)("Prime Loot", "PrimeOffers"), s.createElement(p.U, {
                        className: "prime-offers",
                        position: p._2.Relative
                    }, s.createElement(c.a, {
                        onToggle: this.onToggleMenu,
                        openByDefault: this.showOffersByDefault(),
                        tooltipProps: n
                    }, s.createElement(p.v, {
                        ariaLabel: Object(l.d)("Prime offers", "PrimeOffers"),
                        overlay: !0,
                        size: p.x.Large,
                        icon: p._9.Crown,
                        "data-a-target": "prime-offers-icon",
                        "data-target": "prime-offers-icon"
                    }), s.createElement(p.p, {
                        direction: p.q.BottomRight,
                        size: p.r.Large,
                        offsetX: "9px"
                    }, this.renderOfferList())), this.renderUnseenOffersDisplay())
                }, t.prototype.renderUnseenOffersDisplay = function() {
                    var e = this.state.numOfUnseenOffers;
                    if (e) return s.createElement(p.U, {
                        className: "prime-offers__pill",
                        position: p._2.Absolute
                    }, s.createElement(p.e, {
                        type: p.i.BounceIn,
                        duration: p.g.Medium,
                        timing: p.h.EaseIn,
                        enabled: e > 0
                    }, s.createElement(p.Z, {
                        label: e.toString(),
                        type: p._0.Notification
                    })))
                }, t = r.__decorate([Object(d.a)(ce, {
                    name: "offersData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(d.a)(de, {
                    name: "userData"
                }), Object(m.c)("PrimeOffers", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            me = ue,
            pe = Object(a.a)(i)(me),
            ge = (n(437), n(438)),
            fe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.requestInfo && Object(u.b)(this.props.data.requestInfo.countryCode);
                    if (this.props.data.currentUser && this.props.data.currentUser.hasPrime || !e) return null;
                    if (this.props.data.loading) return null;
                    var t = Object(P.d)(P.a, ""),
                        n = Object(l.d)("Twitch Prime", "BlueBar"),
                        i = s.createElement("span", null, Object(l.d)("Free loot every month, plus exclusives and surprises, ad-free viewing, and loads more.", "BlueBar")),
                        a = Object(P.d)(P.a, ""),
                        r = Object(l.d)("Start Your Free Trial", "BlueBar");
                    if (!this.props.data.loading && !this.props.data.error) {
                        var o = this.props.data;
                        o && o.primePromotions && o.primePromotions.forEach(function(e) {
                            switch (e.id) {
                                case "twitch.prime.bluebar.left1":
                                    t = e.externalURL, n = e.text;
                                    break;
                                case "twitch.prime.bluebar.center1":
                                    i = s.createElement(k, {
                                        source: e.text,
                                        renderers: {
                                            Link: function(e) {
                                                return s.createElement("a", {
                                                    href: e.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer"
                                                }, e.children)
                                            }
                                        }
                                    });
                                    break;
                                case "twitch.prime.bluebar.right1":
                                    a = e.externalURL, r = e.text
                            }
                        })
                    }
                    return s.createElement(p._17, {
                        color: p.F.Base,
                        className: "blue-bar",
                        position: p._2.Relative,
                        fullWidth: !0
                    }, s.createElement(p.U, {
                        className: "blue-bar__bar",
                        display: p.H.Flex,
                        alignItems: p.c.Center,
                        justifyContent: p.T.Between,
                        flexWrap: p.K.NoWrap,
                        margin: "auto",
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, s.createElement(p.U, {
                        display: p.H.InlineFlex,
                        alignItems: p.c.Center,
                        padding: {
                            right: .5
                        }
                    }, s.createElement(p.U, {
                        className: "blue-bar__logo",
                        display: p.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        flexShrink: 0
                    }, s.createElement(p._8, {
                        asset: p._9.Crown,
                        width: 20,
                        height: 13
                    })), s.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6
                    }, s.createElement(p.P, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, n))), s.createElement(p._21, {
                        className: "blue-bar__headline",
                        type: p._26.Span,
                        fontSize: p.L.Size6
                    }, i)), s.createElement(p.U, {
                        display: p.H.InlineFlex,
                        flexShrink: 0
                    }, s.createElement(p._21, {
                        bold: !0,
                        type: p._26.Span,
                        noWrap: !0,
                        fontSize: p.L.Size6,
                        color: p.F.Base
                    }, s.createElement("a", {
                        className: "blue-bar__link",
                        href: a,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r)))))
                }, t = r.__decorate([Object(d.a)(ge, {
                    options: function() {
                        return {
                            variables: {
                                stringIds: ["twitch.prime.bluebar.left1", "twitch.prime.bluebar.center1", "twitch.prime.bluebar.right1"],
                                dateOverride: U()
                            }
                        }
                    }
                }), Object(m.c)("BlueBarComponent")], t)
            }(s.Component),
            he = fe;
        n.d(t, "b", function() {
            return pe
        }), n.d(t, "a", function() {
            return he
        }), n.d(t, "c", function() {
            return U
        })
    },
    389: function(e, t, n) {
        "use strict";

        function i(e) {
            return function() {
                Object(l.c)(e), window.location.reload(!0)
            }
        }

        function a() {
            return {}
        }

        function r(e) {
            return Object(s.bindActionCreators)({
                changeLanguage: i
            }, e)
        }
        var o = n(6),
            s = n(9),
            l = n(73),
            c = n(0),
            d = n(1),
            u = n(2),
            m = n(3),
            p = (n(397), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderLink = function(e) {
                        var n = function() {
                            return t.props.changeLanguage(e.languageCode)
                        };
                        return d.createElement(m.S, {
                            key: e.languageCode,
                            onClick: n,
                            "data-target": "language-selector-link"
                        }, d.createElement(m.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, e.name))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Math.floor(u.a.locales.length / 2);
                    return d.createElement(m.U, {
                        className: "language-selector",
                        display: m.H.Flex,
                        padding: {
                            y: 1
                        }
                    }, d.createElement("div", {
                        className: "language-selector__list language-selector__list--border-right"
                    }, u.a.locales.slice(0, e).map(this.renderLink)), d.createElement("div", {
                        className: "language-selector__list"
                    }, u.a.locales.slice(e).map(this.renderLink)))
                }, t
            }(d.Component)),
            g = Object(o.a)(a, r)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    390: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {},
                i = o(e);
            if (!i) return n;
            var s;
            try {
                s = new URL(i)
            } catch (t) {
                return b.i.error(t.toString(), i + " was malformed from notification id:[" + e.id + "]"), n
            }
            return r(e.type, s) ? n.linkTo = {
                pathname: s.pathname,
                search: s.search,
                state: {
                    content: e.type,
                    medium: t
                }
            } : (n.linkTo = a(s.toString(), e.type, t), n.targetBlank = !0), n
        }

        function a(e, t, n) {
            var i = e.split("?");
            if (1 === i.length) return e + "?tt_content=" + t + "&tt_medium=" + n;
            var a = k.parse(i[1]);
            return a.tt_content = a.tt_content ? a.tt_content : t, a.tt_medium = a.tt_medium ? a.tt_medium : n, [i[0], k.stringify(a, {
                encode: !1
            })].join("?")
        }

        function r(e, t) {
            return !j.has(e) && "https://www.twitch.tv" === t.origin
        }

        function o(e) {
            var t = e.actions.filter(function(e) {
                return "click" === e.type
            });
            return t.length > 0 ? t[0].url : ""
        }

        function s(e, t) {
            return {
                id: e.id,
                body: e.body_md,
                type: e.type,
                thumbnailURL: e.thumbnail_url,
                createdAt: e.created_at,
                updatedAt: e.updated_at,
                isRead: e.read,
                actions: e.actions.map(function(e) {
                    return {
                        body: e.body,
                        type: e.type,
                        url: e.url,
                        __typename: "OnsiteNotificationAction"
                    }
                }),
                isTransient: !t,
                __typename: "OnsiteNotification"
            }
        }

        function l(e) {
            return {
                currentUser: Object(oe.c)(e)
            }
        }

        function c(e, t) {
            for (var n = [], i = 0; i < e.length; i += t) {
                var a = e.slice(i, i + t);
                n.push(a)
            }
            return n
        }

        function d(e) {
            return e.type === w.c.OnsiteNotificationsRead
        }

        function u(e) {
            return e.type === w.c.OnsiteNotificationCreate || e.type === w.c.OnsiteNotificationUpdate
        }

        function m(e) {
            return e.type === w.c.OnsiteNotificationDelete
        }

        function p(e, t) {
            return ge.debug("Received pubsub summary update", e), t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.summary && e.data.summary ? (t.currentUser.notifications.summary.lastSeenAt = e.data.summary.last_seen_at, t.currentUser.notifications.summary.unseenCount = e.data.summary.unseen_view_count, t) : t
        }

        function g(e, t) {
            if (ge.debug("Received pubsub notification update", e), !(t && t.currentUser && t.currentUser.notifications && t.currentUser.notifications.edges && t.currentUser.notifications.edges)) return t;
            if (d(e)) {
                var n = new Set(e.data.notification_ids),
                    i = t.currentUser.notifications.edges.map(function(e) {
                        return n.has(e.node.id) ? y.__assign({}, e, {
                            node: y.__assign({}, e.node, {
                                isRead: !0
                            })
                        }) : e
                    });
                t.currentUser.notifications.edges = i
            } else if (u(e)) {
                if (e.data.persistent) {
                    var a = s(e.data.notification, !0),
                        i = f(t.currentUser.notifications.edges, a.id);
                    i.unshift({
                        cursor: null,
                        node: a,
                        __typename: "OnsiteNotificationEdge"
                    }), t.currentUser.notifications.edges = i
                }
            } else m(e) && (t.currentUser.notifications.edges = f(t.currentUser.notifications.edges, e.data.notification_id));
            return t
        }

        function f(e, t) {
            return e.filter(function(e) {
                return e.node.id !== t
            })
        }

        function h() {
            return function(e) {
                return function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            shouldDefer: !0
                        }, e.stopDeferring = function() {
                            e.state.shouldDefer && e.setState({
                                shouldDefer: !1
                            })
                        }, e
                    }
                    return y.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            shouldDefer: this.state.shouldDefer,
                            stopDeferring: this.stopDeferring
                        };
                        return _.createElement(e, y.__assign({}, this.props, t))
                    }, n
                }(_.Component)
            }
        }
        var v, y = n(0),
            k = n(21),
            _ = n(1),
            b = n(2),
            S = n(47),
            N = n(7),
            E = n(107),
            C = n(15),
            w = n(38),
            O = n(20),
            x = n(30),
            U = n(5),
            F = n(28),
            D = n(32),
            R = n(399),
            T = n.n(R),
            I = n(11),
            P = n(65),
            L = n(13),
            j = new Set(["affiliateinvite", "feedcomment", "friendrequests", "partneragreementupdate", "partnerinvite"]),
            A = {
                Center: "center",
                Toast: "toast",
                Browser: "browser"
            },
            H = {
                Open: "open",
                Close: "close",
                MarkAllRead: "mark_all_read"
            },
            B = {
                PrimaryCta: "primary_cta",
                Dismiss: "dismiss"
            },
            V = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext
                };
                b.m.track(L.SpadeEventType.NotificationImpression, t)
            },
            q = function(e) {
                var t = {
                    unseen_view_count: e.unseenCount,
                    action: e.action
                };
                b.m.track(L.SpadeEventType.NotificationCenterInteraction, t)
            },
            M = function(e) {
                var t = {
                    notification_id: e.notification.id,
                    notification_type: e.notification.type,
                    ui_context: e.uiContext,
                    action: e.action
                };
                b.m.track(L.SpadeEventType.NotificationInteraction, t)
            },
            z = n(3),
            W = (n(400), "persistent-notification__delete"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.top < e.bottom && n.bottom > e.top
                        }
                        return !1
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t.deleteNotification = function() {
                        M({
                            uiContext: A.Center,
                            notification: t.props.data,
                            action: B.Dismiss
                        }), t.props.onDeleteNotification(t.props.data.id)
                    }, t.clickNotification = function() {
                        M({
                            uiContext: A.Center,
                            notification: t.props.data,
                            action: B.PrimaryCta
                        }), t.props.onViewNotification(t.props.data.id)
                    }, t.renderDeleteNotification = function() {
                        return _.createElement(z.U, {
                            className: "persistent-notification__delete",
                            padding: {
                                top: 1,
                                left: 1,
                                right: .5
                            },
                            position: z._2.Absolute
                        }, _.createElement(z.U, {
                            display: z.H.Flex,
                            flexWrap: z.K.NoWrap,
                            alignItems: z.c.Start
                        }, _.createElement(z.v, {
                            ariaLabel: "delete-notification",
                            "data-test-selector": W,
                            icon: z._9.Close,
                            size: z.x.Small,
                            onClick: t.deleteNotification
                        })))
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive();
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : b.i.warn("<PersistentNotification /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return _.createElement(z.U, {
                        className: "persistent-notification",
                        position: z._2.Relative,
                        refDelegate: this.setRef,
                        "data-test-selector": "persistent-notification"
                    }, _.createElement(z._17, {
                        display: z.H.Flex,
                        className: this.props.data.isRead ? "persistent-notification__read" : "persistent-notification__unread",
                        borderBottom: !0,
                        flexWrap: z.K.NoWrap
                    }, _.createElement(z.S, y.__assign({
                        "data-test-selector": "persistent-notification__click",
                        onClick: this.clickNotification
                    }, i(this.props.data, L.PageviewMedium.NotificationCenter), {
                        alpha: !0
                    }), _.createElement(z.U, {
                        className: "persistent-notification__area",
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        padding: {
                            top: 1,
                            bottom: 1,
                            left: 1,
                            right: 3
                        }
                    }, _.createElement(z.C, {
                        aspect: z.k.Aspect1x1,
                        imageSrc: this.props.data.thumbnailURL,
                        imageAlt: Object(b.d)("Notification center item thumbnail", "OnsiteNotifications"),
                        size: z.D.Size4
                    }), _.createElement(z.U, {
                        display: z.H.Flex,
                        flexDirection: z.J.Column,
                        flexWrap: z.K.NoWrap,
                        margin: {
                            x: 1
                        }
                    }, _.createElement(z.U, {
                        className: "persistent-notification__body",
                        overflow: z.Y.Hidden,
                        "data-test-selector": "persistent-notification__body"
                    }, _.createElement(z._21, {
                        type: z._26.Span,
                        color: z.F.Alt
                    }, _.createElement(P, {
                        source: this.props.data.body || ""
                    }))), _.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        flexShrink: 0,
                        margin: {
                            top: .5
                        }
                    }, _.createElement(z._8, {
                        asset: z._9.MessagesSC,
                        height: 12,
                        width: 12,
                        type: z._10.Alt2
                    }), _.createElement(z.U, {
                        margin: {
                            left: .5
                        }
                    }, _.createElement(z._21, {
                        type: z._26.Span,
                        color: z.F.Alt2
                    }, Object(b.g)(new Date(this.props.data.updatedAt)))))))), this.renderDeleteNotification()))
                }, t.prototype.checkVisible = function(e) {
                    return y.__awaiter(this, void 0, void 0, function() {
                        return y.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (V({
                                uiContext: A.Center,
                                notification: this.props.data
                            }), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: I.func
                }, t = y.__decorate([Object(U.c)("PersistentNotification")], t)
            }(_.Component),
            K = G,
            Q = n(401),
            $ = n(402),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isRead: !1
                    }, t.createNotificationData = function() {
                        return {
                            id: "friendrequests",
                            type: "friendrequests",
                            body: Object(b.d)("{count, plural, one {You have # new friend request} other {You have # new friend requests}}", {
                                count: t.props.count
                            }, "FriendRequestsNotification"),
                            createdAt: t.props.date,
                            updatedAt: t.props.date,
                            isRead: t.props.isOldNotification || t.state.isRead,
                            thumbnailURL: T.a,
                            actions: [{
                                body: "View",
                                type: "click",
                                url: "https://www.twitch.tv/friends/requests"
                            }]
                        }
                    }, t.clearUnseenCount = function() {
                        Object(O.d)($, {}, function(e) {
                            return e.currentUser.incomingFriendRequests.totalUnreadCount = 0, e
                        }), t.props.clearUnreadFriendRequests().then(function() {}).catch(function(e) {
                            return b.i.error(e, "[FriendRequestsNotification] Failed to clear unread requests.")
                        })
                    }, t.viewFriendRequests = function() {
                        t.setState({
                            isRead: !0
                        })
                    }, t
                }
                return y.__extends(t, e), t.prototype.render = function() {
                    return _.createElement(K, {
                        key: "friendRequestsNotification",
                        data: this.createNotificationData(),
                        onDeleteNotification: this.clearUnseenCount,
                        onViewNotification: this.viewFriendRequests
                    })
                }, t
            }(_.Component),
            J = Object(D.compose)(Object(N.a)(Q, {
                name: "clearUnreadFriendRequests"
            }))(X),
            Y = (n(403), "center-window__empty"),
            Z = "center-window__content-footer",
            ee = "center-window__footer__text",
            te = "center-window__read-all",
            ne = b.i.withCategory("onsite-notifications-center-window"),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoadingMore: !1
                    }, t.renderContent = function() {
                        if (!t.props.hasInitiallyLoaded || t.props.data.length || t.props.friendRequestsData) {
                            return [t.mapPersistentNotificationElements(), t.renderContentFooter()]
                        }
                        return t.renderEmptyCenterWindowElement()
                    }, t.renderContentFooter = function() {
                        var e = !t.props.hasInitiallyLoaded || t.state.isLoadingMore ? _.createElement(z.X, {
                            delay: 0,
                            fillContent: !0
                        }) : _.createElement(z._8, {
                            asset: z._9.LogoGlitch,
                            width: 24,
                            height: 24,
                            type: z._10.Alt2
                        });
                        return _.createElement(z.U, {
                            className: "center-window__content-footer",
                            key: "center-window__content-footer",
                            "data-test-selector": Z,
                            display: z.H.Flex,
                            flexDirection: z.J.Column,
                            justifyContent: z.T.Center,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            padding: 1,
                            flexGrow: 1
                        }, e)
                    }, t.mapPersistentNotificationElements = function() {
                        var e = t.props.data.map(function(e) {
                            return _.createElement(K, {
                                key: "onsite-notification-" + e.node.id,
                                data: e.node,
                                onDeleteNotification: t.props.onDeleteNotification,
                                onViewNotification: t.props.onViewNotification
                            })
                        });
                        return t.props.friendRequestsData && e.unshift(_.createElement(J, y.__assign({}, t.props.friendRequestsData))), e
                    }, t.renderEmptyCenterWindowElement = function() {
                        return _.createElement(z._17, {
                            "data-test-selector": Y,
                            className: "center-window__empty-state",
                            background: z.m.Alt,
                            display: z.H.Flex,
                            justifyContent: z.T.Center,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            flexDirection: z.J.Column,
                            padding: 2,
                            fullWidth: !0
                        }, _.createElement(z._8, {
                            asset: z._9.LogoGlitch,
                            width: 100,
                            height: 100,
                            type: z._10.Placeholder
                        }), _.createElement(z.U, {
                            margin: {
                                top: 1
                            }
                        }, _.createElement(z._21, {
                            type: z._26.H5,
                            color: z.F.Alt2
                        }, Object(b.d)("Hooray! You're in the clear!", "OnsiteNotifications"))))
                    }, t.renderMarkAsRead = function() {
                        return 0 !== t.props.data.length || t.props.friendRequestsData ? _.createElement(z.u, {
                            "data-test-selector": te,
                            type: z.z.Text,
                            size: z.x.Small,
                            disabled: 0 === t.props.data.length && !t.props.friendRequestsData,
                            onClick: t.props.onReadAllNotifications
                        }, Object(b.d)("Mark All as Read", "OnsiteNotifications")) : null
                    }, t.renderNotificationsHeaderElement = function() {
                        return _.createElement(z._17, {
                            className: "center-window__header",
                            background: z.m.Alt,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: z.H.Flex,
                            alignItems: z.c.Center,
                            justifyContent: z.T.Between,
                            borderBottom: !0
                        }, _.createElement(z._21, {
                            type: z._26.H6,
                            color: z.F.Alt2,
                            bold: !0
                        }, Object(b.d)("Notifications", "OnsiteNotifications")), t.renderMarkAsRead())
                    }, t.renderUnreadNotificationsFooterElement = function() {
                        var e = 0 === t.props.newNotificationsCount ? null : _.createElement(z._21, {
                            "data-test-selector": ee,
                            type: z._26.H6,
                            color: z.F.Alt2
                        }, Object(b.d)("{num, plural, one {1 New Notification} other {{num, number} New Notifications} }", {
                            num: t.props.newNotificationsCount
                        }, "OnsiteNotifications"));
                        return _.createElement(z._17, {
                            className: "center-window__footer",
                            background: z.m.Alt,
                            padding: .5,
                            alignItems: z.c.Center,
                            textAlign: z._22.Center,
                            borderTop: !0
                        }, e)
                    }, t.loadMore = function() {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return y.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.state.isLoadingMore) return [3, 5];
                                        this.setState({
                                            isLoadingMore: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onLoadMore()];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return e = t.sent(), ne.error(e, "unexpected loadMore failure"), [3, 4];
                                    case 4:
                                        this.setState({
                                            isLoadingMore: !1
                                        }), t.label = 5;
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return _.createElement(z._17, {
                        className: "center-window",
                        "data-test-selector": "center-window",
                        background: z.m.Alt
                    }, this.renderNotificationsHeaderElement(), _.createElement(F.b, {
                        className: "center-window__scroll",
                        contentClassName: "center-window__scroll-container"
                    }, _.createElement(z.U, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        flexDirection: z.J.Column,
                        flexGrow: 1,
                        flexWrap: z.K.NoWrap
                    }, this.renderContent(), _.createElement(F.a, {
                        enabled: this.props.data.length > 0 && !!this.props.data[this.props.data.length - 1].cursor,
                        contentLength: this.props.data.length,
                        loadMore: this.loadMore,
                        pixelThreshold: 200
                    }))), this.renderUnreadNotificationsFooterElement())
                }, t = y.__decorate([Object(U.c)("OnsiteNotificationsCenterWindow")], t)
            }(_.Component),
            ae = ie,
            re = n(6),
            oe = n(17),
            se = n(87),
            le = (n(404), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.closeTimeout = 0, t.close = function() {
                        M({
                            uiContext: A.Toast,
                            notification: t.props.item,
                            action: B.Dismiss
                        }), t.props.close(t.props.index)
                    }, t.onMouseEnter = function() {
                        t.cancelCloseTimer()
                    }, t.onMouseLeave = function() {
                        t.scheduleCloseTimer()
                    }, t.view = function() {
                        M({
                            uiContext: A.Toast,
                            notification: t.props.item,
                            action: B.PrimaryCta
                        }), t.props.view(t.props.index)
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.scheduleCloseTimer()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), V({
                        uiContext: A.Toast,
                        notification: this.props.item
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.cancelCloseTimer()
                }, t.prototype.render = function() {
                    return _.createElement(z.e, {
                        type: z.i.BounceIn,
                        duration: z.g.Medium,
                        enabled: !0
                    }, _.createElement("div", {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        "data-test-selector": "onsite-notification-toast__mouse-enter-detector"
                    }, _.createElement(z._17, {
                        className: "onsite-notification-toast",
                        background: z.m.Base,
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap,
                        margin: {
                            bottom: 1
                        },
                        border: !0
                    }, _.createElement(z.S, y.__assign({
                        onClick: this.view,
                        alpha: !0
                    }, i(this.props.item, L.PageviewMedium.NotificationToast)), _.createElement(z.U, {
                        className: "onsite-notification-toast__container",
                        display: z.H.Flex,
                        flexWrap: z.K.NoWrap
                    }, _.createElement(z.U, {
                        padding: {
                            y: 1,
                            left: 1
                        },
                        display: z.H.Flex,
                        flexShrink: 0
                    }, _.createElement(z.C, {
                        aspect: z.k.Aspect1x1,
                        imageSrc: this.props.item.thumbnailURL,
                        imageAlt: Object(b.d)("Notification toast thumbnail", "OnsiteNotifications"),
                        size: z.D.Size4
                    })), _.createElement(z.U, {
                        display: z.H.Flex,
                        flexDirection: z.J.Column,
                        flexWrap: z.K.NoWrap,
                        flexGrow: 1,
                        padding: 1
                    }, _.createElement(z.U, {
                        className: "onsite-notification-toast__body",
                        overflow: z.Y.Hidden
                    }, _.createElement(z._17, {
                        color: z.F.Alt
                    }, _.createElement(P, {
                        source: this.props.item.body
                    }))), _.createElement(z.U, {
                        margin: {
                            top: .5
                        },
                        flexShrink: 0
                    }, _.createElement(z._17, {
                        color: z.F.Alt2
                    }, Object(b.g)(new Date(this.props.item.updatedAt))))))), this.renderActions())))
                }, t.prototype.renderActions = function() {
                    return _.createElement(z._17, {
                        className: "onsite-notification-toast__action-wrapper",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexDirection: z.J.Column,
                        borderLeft: !0
                    }, _.createElement(z._17, {
                        className: "onsite-notification-toast__action",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 1,
                        borderBottom: !0
                    }, _.createElement(z.S, y.__assign({
                        onClick: this.view,
                        "data-test-selector": "onsite-notification-toast__view",
                        alpha: !0
                    }, i(this.props.item, L.PageviewMedium.NotificationToast)), _.createElement(z._17, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, _.createElement(z._21, {
                        color: z.F.Link
                    }, this.primaryCTAText())))), _.createElement(z._17, {
                        className: "onsite-notification-toast__action",
                        display: z.H.Flex,
                        alignContent: z.b.Stretch,
                        flexGrow: 1
                    }, _.createElement(z.S, {
                        onClick: this.close,
                        "data-test-selector": "onsite-notification-toast__close",
                        alpha: !0
                    }, _.createElement(z._17, {
                        display: z.H.Flex,
                        alignItems: z.c.Center,
                        justifyContent: z.T.Center,
                        fullHeight: !0,
                        flexGrow: 1,
                        padding: .5
                    }, _.createElement(z._21, {
                        color: z.F.Alt2
                    }, Object(b.d)("Close", "OnsiteNotifications"))))))
                }, t.prototype.primaryCTAText = function() {
                    var e = this.props.item.actions.find(function(e) {
                        return "click" === e.type
                    });
                    return e ? e.body : Object(b.d)("View", "OnsiteNotifications")
                }, t.prototype.scheduleCloseTimer = function() {
                    var e = this;
                    this.cancelCloseTimer(), this.closeTimeout = setTimeout(function() {
                        e.props.close(e.props.index), e.closeTimeout = 0
                    }, 1e4)
                }, t.prototype.cancelCloseTimer = function() {
                    this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = 0)
                }, t
            }(_.Component)),
            ce = Object(U.c)("OnsiteNotificationToast")(le),
            de = ce,
            ue = (n(405), b.i.withCategory("toast-manager")),
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        notifications: []
                    }, t.view = function(e) {
                        var n = t.state.notifications[e];
                        t.props.onViewNotification(n.id, !n.isTransient), t.close(e)
                    }, t.close = function(e) {
                        var n = t.state.notifications.slice();
                        n.splice(e, 1), t.setState({
                            notifications: n
                        })
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.conditionallyInsertTestData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.pubsub.messages.info,
                        n = e.pubsub.messages.info;
                    if (n && n.data.toast && (!t || n.data.notification.id !== t.data.notification.id || n.data.notification.updated_at !== t.data.notification.updated_at)) {
                        ue.debug("Received pubsub update", e.pubsub.messages.info);
                        var i = s(n.data.notification, n.data.persistent);
                        this.onNewNotification(i)
                    }
                }, t.prototype.render = function() {
                    return _.createElement(z.U, {
                        className: "onsite-notifications-toast-manager",
                        position: z._2.Absolute,
                        margin: {
                            top: 5
                        },
                        "data-test-selector": "onsite-notifications-toast-manager"
                    }, this.renderToasts())
                }, t.prototype.conditionallyInsertTestData = function() {
                    return y.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return y.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return b.a.buildType !== C.a.Production && k.parse(window.location.search).onsite_test_data ? [4, n.e(35).then(n.bind(null, 2054))] : [3, 2];
                                case 1:
                                    e = i.sent().MockOnsiteNotifications, t = e.getMockOnsiteNotificationModels(3), this.setState({
                                        notifications: t
                                    }), i.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.renderToasts = function() {
                    var e = this,
                        t = this.state.notifications.map(function(t, n) {
                            return _.createElement(de, {
                                key: t.id,
                                item: t,
                                index: n,
                                view: e.view,
                                close: e.close
                            })
                        });
                    return 0 === t.length ? null : t
                }, t.prototype.onNewNotification = function(e) {
                    var t = this.state.notifications.slice(),
                        n = t.findIndex(function(t) {
                            return t.id === e.id
                        });
                    n > -1 && t.splice(n, 1), t.unshift(e), t.length > 3 && t.pop(), this.setState({
                        notifications: t
                    })
                }, t = y.__decorate([Object(U.c)("OnsiteNotificationToastManager"), Object(se.a)([{
                    topic: function(e) {
                        return Object(x.e)("" + (e.currentUser && e.currentUser.id))
                    },
                    mapMessageTypesToProps: (v = {}, v[w.c.OnsiteNotificationCreate] = "info", v[w.c.OnsiteNotificationUpdate] = "info", v),
                    skip: function(e) {
                        return !e.currentUser
                    }
                }])], t)
            }(_.Component),
            pe = Object(re.a)(l)(me),
            ge = b.i.withCategory("onsite-pubsub-mutators"),
            fe = n(391),
            he = n(392),
            ve = n(393),
            ye = n(394),
            ke = n(395);
        n(406);
        n.d(t, "a", function() {
            return Ee
        }), n.d(t, "b", function() {
            return Ue
        });
        var _e = b.i.withCategory("onsite-notifications"),
            be = "onsite-notifications__badge",
            Se = "99+",
            Ne = 5e3,
            Ee = 10,
            Ce = 100,
            we = {
                align: z._31.Center,
                direction: z._32.Bottom,
                label: ""
            },
            Oe = {
                limit: Ee,
                cursor: ""
            },
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        newNotificationsCount: 0,
                        newFriendRequestsBadgeCount: 0,
                        isFriendRequestsNotificationUnread: !1
                    }, t.newNotificationsCountTimer = 0, t.hasInsertedSummaryData = !1, t.hasInsertedListNotificationsData = !1, t.viewNotification = function(e, n) {
                        void 0 === n && (n = !0), t.centerWindowToggleBalloon.toggleBalloon(!1), n && t.readNotification(e)
                    }, t.conditionallyInsertSummaryTestData = function() {
                        t.summaryDataLoaded(t.props) && !t.hasInsertedSummaryData && b.a.buildType !== C.a.Production && k.parse(window.location.search).onsite_test_data && (t.hasInsertedSummaryData = !0, Object(O.d)(ye, y.__assign({}, t.props.summaryData.variables), function(e) {
                            return e.currentUser.notifications.summary.unseenCount = k.parse(window.location.search).onsite_test_data, e
                        }))
                    }, t.conditionallyInsertListNotificationsTestData = function() {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return y.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.listDataLoaded() && !this.hasInsertedListNotificationsData && b.a.buildType !== C.a.Production && k.parse(window.location.search).onsite_test_data ? (this.hasInsertedListNotificationsData = !0, [4, n.e(35).then(n.bind(null, 2054))]) : [3, 2];
                                    case 1:
                                        e = t.sent().MockOnsiteNotifications, Object(O.d)(he, y.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = e.getMockOnsiteNotificationEdges(k.parse(window.location.search).onsite_test_data), t
                                        }), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t.summaryDataLoaded = function(e) {
                        return e.summaryData && !e.summaryData.loading && !e.summaryData.error && e.summaryData.currentUser && e.summaryData.currentUser.notifications && e.summaryData.currentUser.notifications.summary && e.summaryData.currentUser.incomingFriendRequests
                    }, t.listDataLoaded = function() {
                        return t.props.listData && t.props.listData.currentUser && t.props.listData.currentUser.notifications && void 0 !== t.props.listData.currentUser.notifications.edges
                    }, t.hasNewFriendRequests = function(e) {
                        var t = e.summaryData.currentUser;
                        if (t.incomingFriendRequests && t.incomingFriendRequests.newestEdge && t.incomingFriendRequests.newestEdge.createdAt) {
                            var n = new Date(t.incomingFriendRequests.newestEdge.createdAt),
                                i = new Date(t.notifications.summary.lastSeenAt);
                            return t.incomingFriendRequests.totalUnreadCount > 0 && n > i
                        }
                        return !1
                    }, t.getFriendRequestsData = function() {
                        if (t.summaryDataLoaded(t.props)) {
                            var e = t.props.summaryData.currentUser;
                            if (e.incomingFriendRequests && e.incomingFriendRequests.newestEdge) {
                                var n = e.incomingFriendRequests.totalUnreadCount,
                                    i = e.incomingFriendRequests.newestEdge.createdAt;
                                return n && i ? {
                                    count: n,
                                    date: i,
                                    isOldNotification: !t.state.isFriendRequestsNotificationUnread
                                } : void 0
                            }
                        }
                    }, t.toggleCenter = function(e) {
                        e || (t.props.stopDeferring(), t.getUnseenNotificationsAndApplyTimer(), t.viewNotifications()), q({
                            unseenCount: t.getUnseenNotificationsCount(t.props),
                            action: e ? H.Close : H.Open
                        })
                    }, t.getUnseenNotificationsAndApplyTimer = function() {
                        var e = t.state.newNotificationsCount;
                        t.summaryDataLoaded(t.props) && (e = t.getUnseenNotificationsCount(t.props), t.setState({
                            newNotificationsCount: e
                        })), t.clearTimeout(), e > 0 && (t.newNotificationsCountTimer = setTimeout(function() {
                            t.setState({
                                newNotificationsCount: 0
                            }), t.clearTimeout()
                        }, Ne))
                    }, t.viewNotifications = function() {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return y.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.summaryDataLoaded(this.props)) return [2];
                                        this.setState({
                                            newFriendRequestsBadgeCount: 0
                                        }), e = y.__assign({}, Object(O.a)({}), {
                                            optimisticResponse: {
                                                viewedNotifications: {
                                                    user: {
                                                        notifications: {
                                                            summary: {
                                                                unseenCount: 0,
                                                                lastSeenAt: new Date,
                                                                __typename: "OnsiteNotificationsSummary"
                                                            },
                                                            __typename: "OnsiteNotificationConnection"
                                                        },
                                                        __typename: "User"
                                                    },
                                                    __typename: "ViewedNotificationsPayload"
                                                }
                                            }
                                        }), Object(O.d)(ye, y.__assign({}, this.props.summaryData.variables), function(e) {
                                            return e.currentUser.notifications.summary.unseenCount = 0, e
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.props.viewNotifications(e)];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return t = n.sent(), _e.error(t, "failure to read message..."), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.getUnseenNotificationsCount = function(e) {
                        return t.summaryDataLoaded(e) ? e.summaryData.currentUser.notifications.summary.unseenCount + t.state.newFriendRequestsBadgeCount : 0
                    }, t.renderUnseenNotificationsBadge = function() {
                        var e = t.getUnseenNotificationsCount(t.props);
                        if (e > 0) {
                            var n = e >= 100 ? Se : e.toString();
                            return _.createElement(z.U, {
                                className: "onsite-notifications__badge",
                                "data-test-selector": be,
                                position: z._2.Absolute
                            }, _.createElement(z.Z, {
                                label: n,
                                type: z._0.Notification
                            }))
                        }
                    }, t.deleteNotification = function(e) {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return y.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = y.__assign({}, Object(O.a)({
                                            id: e
                                        }), {
                                            optimisticResponse: {
                                                deleteNotification: {
                                                    __typename: "DeleteNotificationPayload",
                                                    notification: {
                                                        __typename: "OnsiteNotification",
                                                        id: e
                                                    }
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(O.d)(he, y.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.filter(function(t) {
                                                return t.node.id !== e
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.deleteOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), _e.error(n, "Unable to delete notification " + e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readAllNotifications = function() {
                        if (t.setState({
                                isFriendRequestsNotificationUnread: !1
                            }), t.listDataLoaded()) {
                            q({
                                unseenCount: t.getUnseenNotificationsCount(t.props),
                                action: H.MarkAllRead
                            });
                            var e = t.props.listData.currentUser.notifications.edges.filter(function(e) {
                                return !e.node.isRead
                            }).map(function(e) {
                                return e.node.id
                            });
                            if (0 !== e.length) {
                                var n = c(e, Ce);
                                Object(O.d)(he, y.__assign({}, t.props.listData.variables), function(e) {
                                    return e.currentUser.notifications.edges = e.currentUser.notifications.edges.map(function(e) {
                                        return y.__assign({}, e, {
                                            node: y.__assign({}, e.node, {
                                                isRead: !0
                                            })
                                        })
                                    }), e
                                });
                                for (var i = 0, a = n; i < a.length; i++) {
                                    var r = a[i];
                                    t.markIDsAsRead(r)
                                }
                            }
                        }
                    }, t.markIDsAsRead = function(e) {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return y.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = e.map(function(e) {
                                            return {
                                                id: e,
                                                isRead: !0,
                                                __typename: "OnsiteNotification"
                                            }
                                        }), n = y.__assign({}, Object(O.a)({
                                            ids: e
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: t,
                                                    count: e.length
                                                }
                                            }
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(n)];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), _e.error(i, "Unable to read notifications", {
                                            ids: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.readNotification = function(e) {
                        return y.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return y.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = y.__assign({}, Object(O.a)({
                                            ids: [e]
                                        }), {
                                            optimisticResponse: {
                                                readNotifications: {
                                                    __typename: "ReadNotificationsPayload",
                                                    notifications: [{
                                                        id: e,
                                                        isRead: !0,
                                                        __typename: "OnsiteNotification"
                                                    }],
                                                    count: 1
                                                }
                                            }
                                        }), this.listDataLoaded() && Object(O.d)(he, y.__assign({}, this.props.listData.variables), function(t) {
                                            return t.currentUser.notifications.edges = t.currentUser.notifications.edges.map(function(t) {
                                                return t.node.id === e ? y.__assign({}, t, {
                                                    node: y.__assign({}, t.node, {
                                                        isRead: !0
                                                    })
                                                }) : t
                                            }), t
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.readOnsiteNotification(t)];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        return n = i.sent(), _e.error(n, "Unable to read notification", {
                                            id: e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.loadMore = function() {
                        return y.__awaiter(t, void 0, void 0, function() {
                            return y.__generator(this, function(e) {
                                return this.props.listData.loading ? [2] : [2, this.props.loadMore()]
                            })
                        })
                    }, t.clearTimeout = function() {
                        t.newNotificationsCountTimer && (clearTimeout(t.newNotificationsCountTimer), t.newNotificationsCountTimer = 0)
                    }, t.saveCenterWindowToggleBalloonRef = function(e) {
                        return t.centerWindowToggleBalloon = e
                    }, t
                }
                return y.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.conditionallyInsertSummaryTestData(), this.conditionallyInsertListNotificationsTestData()
                }, t.prototype.componentWillUnmount = function() {
                    this.clearTimeout()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.summaryDataLoaded(e)) {
                        var t = this.hasNewFriendRequests(e);
                        this.setState({
                            newFriendRequestsBadgeCount: t ? 1 : 0
                        }), this.summaryDataLoaded(this.props) || this.setState({
                            isFriendRequestsNotificationUnread: t
                        }), b.n.setBadgeCount(this.getUnseenNotificationsCount(e))
                    }
                }, t.prototype.render = function() {
                    var e = this.props.shouldDefer || !this.listDataLoaded() ? [] : this.props.listData.currentUser.notifications.edges;
                    return we.label = Object(b.d)("Notifications", "OnsiteNotificationsToolTip"), _.createElement(z.U, {
                        className: "onsite-notifications"
                    }, _.createElement(pe, {
                        onViewNotification: this.viewNotification
                    }), _.createElement(z.U, {
                        position: z._2.Relative
                    }, _.createElement(S.a, {
                        onToggle: this.toggleCenter,
                        ref: this.saveCenterWindowToggleBalloonRef,
                        tooltipProps: we
                    }, _.createElement(z.v, {
                        ariaLabel: Object(b.d)("Open Notifications", "OnsiteNotifications"),
                        size: z.x.Large,
                        icon: z._9.NotificationBell,
                        overlay: !0
                    }), _.createElement(z.p, {
                        "data-test-selector": "center-window__balloon",
                        direction: z.q.BottomRight,
                        size: z.r.Large,
                        offsetX: "10px"
                    }, _.createElement(ae, {
                        newNotificationsCount: this.state.newNotificationsCount,
                        hasInitiallyLoaded: this.listDataLoaded(),
                        data: e,
                        friendRequestsData: this.getFriendRequestsData(),
                        onLoadMore: this.loadMore,
                        onViewNotification: this.viewNotification,
                        onReadAllNotifications: this.readAllNotifications,
                        onDeleteNotification: this.deleteNotification
                    }))), this.renderUnseenNotificationsBadge()))
                }, t = y.__decorate([h(), Object(N.a)(ye, {
                    name: "summaryData",
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                }), Object(N.a)(ke, {
                    name: "viewNotifications"
                }), Object(N.a)(he, {
                    name: "listData",
                    options: function(e) {
                        return {
                            variables: y.__assign({}, Oe, {
                                language: e.languageCode
                            })
                        }
                    },
                    skip: function(e) {
                        return e.shouldDefer
                    },
                    props: function(e) {
                        return y.__assign({}, e, {
                            loadMore: function() {
                                return e.listData.fetchMore({
                                    query: he,
                                    variables: y.__assign({}, e.listData.variables, {
                                        cursor: e.listData.currentUser ? e.listData.currentUser.notifications.edges[e.listData.currentUser.notifications.edges.length - 1].cursor : ""
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            currentUser: y.__assign({}, i.currentUser, {
                                                notifications: y.__assign({}, i.currentUser.notifications, {
                                                    edges: e.currentUser.notifications.edges.concat(i.currentUser.notifications.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(N.a)(fe, {
                    name: "deleteOnsiteNotification"
                }), Object(N.a)(ve, {
                    name: "readOnsiteNotification"
                }), Object(E.a)(function(e) {
                    return {
                        query: ye,
                        skip: !e.currentUser,
                        topic: Object(x.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [w.c.OnsiteNotificationSummaryUpdate, w.c.OnsiteNotificationUpdate, w.c.OnsiteNotificationCreate, w.c.OnsiteNotificationDelete],
                        mutator: p
                    }
                }), Object(E.a)(function(e) {
                    return {
                        query: he,
                        variables: y.__assign({}, Oe, {
                            language: e.languageCode
                        }),
                        skip: !e.currentUser,
                        topic: Object(x.e)("" + (e.currentUser && e.currentUser.id)),
                        types: [w.c.OnsiteNotificationsRead, w.c.OnsiteNotificationUpdate, w.c.OnsiteNotificationCreate, w.c.OnsiteNotificationDelete],
                        mutator: g
                    }
                }), Object(U.c)("OnsiteNotifications", {
                    autoReportInteractive: !0
                })], t)
            }(_.Component),
            Ue = xe
    },
    391: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_DeleteNotification"
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
                                value: "DeleteNotificationInput"
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
                            value: "deleteNotification"
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
                                    value: "notification"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 162
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_DeleteNotification($input: DeleteNotificationInput!) {\n  deleteNotification(input: $input) {\n    notification {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    392: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ListNotifications"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "language"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
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
                                    value: "notifications"
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
                                        value: "language"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "language"
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
                                                            value: "body"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "updatedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isRead"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "actions"
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
                                                                    value: "body"
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
                                                                    value: "url"
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
            }],
            loc: {
                start: 0,
                end: 514
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_ListNotifications($limit: Int, $cursor: Cursor, $language: String) {\n  currentUser {\n    id\n    notifications(first: $limit, after: $cursor, language: $language) {\n      pageInfo {\n        hasNextPage\n      }\n      edges {\n        cursor\n        node {\n          id\n          type\n          body\n          createdAt\n          updatedAt\n          isRead\n          thumbnailURL\n          actions {\n            body\n            type\n            url\n          }\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    393: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_ReadNotifications"
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
                                value: "ReadNotificationsInput"
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
                            value: "readNotifications"
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
                                    value: "notifications"
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
                                            value: "isRead"
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
                end: 167
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_ReadNotifications($input: ReadNotificationsInput!) {\n readNotifications(input: $input) {\n   notifications {\n     id\n     isRead\n   }\n }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    394: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_Summary"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "notifications"
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
                                            value: "summary"
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
                                                    value: "unseenCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "lastSeenAt"
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
                                    value: "incomingFriendRequests"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "newestEdge"
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
                                                    value: "createdAt"
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
                end: 267
            }
        };
        n.loc.source = {
            body: "query OnsiteNotifications_Summary {\n  currentUser {\n    id\n    notifications {\n      summary {\n        unseenCount\n        lastSeenAt\n      }\n    }\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n      newestEdge {\n        createdAt\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    395: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "OnsiteNotifications_View"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "viewedNotifications"
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
                                    value: "user"
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
                                            value: "notifications"
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
                                                    value: "summary"
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
                                                            value: "unseenCount"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "lastSeenAt"
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
                end: 184
            }
        };
        n.loc.source = {
            body: "mutation OnsiteNotifications_View {\n  viewedNotifications {\n    user {\n      notifications {\n        summary {\n          unseenCount\n          lastSeenAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    396: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                languageCode: e.session.languageCode,
                currentUser: Object(f.c)(e)
            }
        }

        function a(e) {
            return {
                isLoggedIn: Object(f.d)(e)
            }
        }

        function r(e) {
            return {
                theme: Object(_e.a)(e),
                firstPageLoaded: e.session.firstPageLoaded,
                initialUserAvailabilityIsSet: e.session.initialUserAvailabilityIsSet
            }
        }

        function o(e) {
            return Object(m.bindActionCreators)({
                changeTheme: ke.b,
                initialUserAvailabilitySet: ye.g
            }, e)
        }

        function s(e) {
            return Object(m.bindActionCreators)({
                login: function() {
                    return Object(g.f)(p.a.TopNavSignupButton)
                },
                logout: g.g,
                signup: function() {
                    return Object(g.h)(p.a.TopNavSignupButton)
                }
            }, e)
        }

        function l(e) {
            return {
                isLoggedIn: Object(f.d)(e)
            }
        }
        var c, d = n(6),
            u = n(10),
            m = n(9),
            p = n(54),
            g = n(39),
            f = n(17),
            h = n(0),
            v = n(1),
            y = n(2),
            k = n(389),
            _ = n(47),
            b = n(13),
            S = n(5),
            N = n(390),
            E = Object(d.a)(i)(N.b),
            C = n(22),
            w = n(40),
            O = n(18),
            x = n(108),
            U = n(267),
            F = n(64),
            D = n(4),
            R = n(28),
            T = n(130),
            I = n(48),
            P = n(380),
            L = n(386),
            j = n(7),
            A = n(56),
            H = n(3),
            B = (n(408), n(409)),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "search-live-result-card": !0,
                        "search-live-result-card--hover": this.props.borderHover
                    };
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.user.stream && (e = this.props.data.user.stream.previewImageURL), v.createElement(H.U, {
                        className: D(t),
                        key: this.props.id,
                        fullWidth: !0
                    }, v.createElement(H.S, h.__assign({
                        linkTo: this.props.linkTo,
                        hover: this.props.borderHover,
                        tabIndex: -1,
                        "data-a-target": "search-live-result-card-link"
                    }, Object(A.a)(this.props)), v.createElement(H.A, null, v.createElement(H.U, {
                        className: "search-live-result-card__wrapper",
                        position: H._2.Relative,
                        overflow: H.Y.Hidden,
                        fullWidth: !0
                    }, v.createElement(H.C, {
                        imageSrc: e || y.a.defaultStreamPreviewURL,
                        imageAlt: this.props.imageAlt,
                        aspect: H.k.Aspect16x9
                    }), v.createElement(H._17, {
                        className: "search-live-result-card__overlay",
                        position: H._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.End,
                        overflow: H.Y.Hidden,
                        color: H.F.Overlay
                    }, v.createElement(H.B, null, v.createElement(H.U, {
                        className: "search-live-result-card__body",
                        padding: .5
                    }, v.createElement(H._21, {
                        type: H._26.H5,
                        ellipsis: !0,
                        className: "search-live-result-card__title"
                    }, this.props.channelName), v.createElement(H.U, {
                        className: "search-live-result-card__viewer-count-container",
                        display: H.H.Flex,
                        alignItems: H.c.Center
                    }, v.createElement(H.U, {
                        margin: {
                            right: .5
                        },
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        flexShrink: 0
                    }, v.createElement(H._8, {
                        asset: H._9.GlyphLive,
                        type: H._10.Live,
                        width: 14,
                        height: 14
                    })), v.createElement(H._21, {
                        className: "search-live-result-card__viewer-count",
                        ellipsis: !0
                    }, Object(y.e)(this.props.viewerCount))), v.createElement(H._21, {
                        className: "search-live-result-card__info",
                        ellipsis: !0
                    }, this.props.title))))))))
                }, t = h.__decorate([Object(j.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(v.Component),
            q = (n(410), function(e) {
                var t, n, i;
                e.title && (e.hitsCount && e.hitsCount > 0 ? t = Object(y.d)("more", "SearchResultSection") : e.totalHitsCount && e.totalHitsCount > 0 && (t = Object(y.d)("Show", "SearchResultSection")), void 0 !== e.totalHitsCount && (i = v.createElement(H.Z, {
                    type: H._0.Brand,
                    label: e.totalHitsCount < 100 ? Object(y.e)(e.totalHitsCount) : "99+"
                })), n = v.createElement(H.S, h.__assign({
                    onClick: e.onHeaderClick,
                    tabIndex: -1
                }, Object(H._39)(e), {
                    "data-ts_selectable": !0
                }), v.createElement(H.U, {
                    className: "search-result-view__titlesep search-result-view--no-hover",
                    display: H.H.Flex,
                    justifyContent: H.T.Between
                }, v.createElement("div", null, v.createElement(H.U, {
                    display: H.H.Inline,
                    margin: {
                        right: 1
                    }
                }, v.createElement(H._21, {
                    type: H._26.Span,
                    color: H.F.Link,
                    fontSize: H.L.Size7,
                    transform: H._25.Uppercase
                }, e.title)), i), v.createElement(H._21, {
                    fontSize: H.L.Size7,
                    transform: H._25.Uppercase
                }, t))));
                var a;
                return (Array.isArray(e.children) && e.children.length > 0 || e.children && !Array.isArray(e.children)) && (a = v.createElement(H.U, {
                    className: "search-result-view__listing-wrapper",
                    margin: {
                        top: .5,
                        bottom: .5
                    }
                }, e.children)), v.createElement("div", {
                    className: "search-result-view__block"
                }, n, a)
            }),
            M = (n(411), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(H.U, {
                        className: "search-title-bar " + (this.props.showBack ? "search-title-bar--show" : ""),
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        "data-a-target": "nav-search-title-bar"
                    }, v.createElement(H._17, {
                        className: "search-title-bar__back-container",
                        display: H.H.Flex,
                        alignItems: H.c.Stretch,
                        borderRight: !0
                    }, v.createElement(H.v, {
                        icon: H._9.AngleLeft,
                        type: H.w.Secondary,
                        size: H.x.Large,
                        onClick: this.props.onBackClick,
                        ariaLabel: Object(y.d)("Back button", "SearchTitleBar"),
                        "data-ts_selectable": this.props.showBack,
                        "data-a-target": "nav-search-back"
                    })), v.createElement(H.U, {
                        className: "search-title-bar__title"
                    }, v.createElement(H._21, {
                        fontSize: H.L.Size5
                    }, this.props.title)))
                }, t
            }(v.Component)),
            z = n(271),
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptionChange = function(e) {
                        var n = e.currentTarget.elements;
                        t.props.onOptionsChange({
                            type: +n.type.value,
                            length: +n.video_length.value,
                            sort: +n.sort.value
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement(H._17, {
                        className: "search__video-filters",
                        background: H.m.Alt,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, v.createElement(H.P, {
                        display: H.H.Flex,
                        justifyContent: H.T.Between
                    }, v.createElement("form", {
                        onInput: this.handleOptionChange
                    }, v.createElement(H.U, {
                        flexShrink: 0
                    }, v.createElement(H.U, {
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._14, {
                        name: "type"
                    }, v.createElement("option", {
                        value: z.c.AllVideos
                    }, Object(y.d)("All Videos", "search__video-filters")), v.createElement("option", {
                        value: z.c.PastBroadcasts
                    }, Object(y.d)("Past Broadcasts", "search__video-filters")), v.createElement("option", {
                        value: z.c.Uploads
                    }, Object(y.d)("Uploads", "search__video-filters")), v.createElement("option", {
                        value: z.c.Highlights
                    }, Object(y.d)("Highlights", "search__video-filters")))), v.createElement(H.U, {
                        display: H.H.InlineFlex
                    }, v.createElement(H._14, {
                        name: "video_length"
                    }, v.createElement("option", {
                        value: z.a.AnyLength
                    }, Object(y.d)("Any Length", "search__video-filters")), v.createElement("option", {
                        value: z.a.Short
                    }, Object(y.d)("Short", "search__video-filters")), v.createElement("option", {
                        value: z.a.Long
                    }, Object(y.d)("Long", "search__video-filters"))))), v.createElement(H.U, {
                        display: H.H.InlineFlex,
                        flexShrink: 0
                    }, v.createElement(H._14, {
                        name: "sort"
                    }, v.createElement("option", {
                        value: z.b.Popular
                    }, Object(y.d)("Popular", "search__video-filters")), v.createElement("option", {
                        value: z.b.Newest
                    }, Object(y.d)("Newest", "search__video-filters")))))))
                }, t
            }(v.Component),
            G = n(66),
            K = (n(412), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBackClick = function() {
                        return t.headerSelect(null)
                    }, t.gameHeaderSelect = function() {
                        return t.headerSelect(G.a.Games)
                    }, t.liveHeaderSelect = function() {
                        return t.headerSelect(G.a.Channels)
                    }, t.userHeaderSelect = function() {
                        return t.headerSelect(G.a.Users)
                    }, t.videoHeaderSelect = function() {
                        return t.headerSelect(G.a.Videos)
                    }, t.communityHeaderSelect = function() {
                        return t.headerSelect(G.a.Communities)
                    }, t.headerSelect = function(e) {
                        t.props.onCategorySelected(e)
                    }, t.onClick = function(e) {
                        if (e.nativeEvent.stopImmediatePropagation(), e.target !== e.currentTarget) {
                            var n = e.target,
                                i = n.querySelector("a"),
                                a = i ? i.querySelector("[data-tt_content]") : null;
                            a || (i = n.closest("a")), a = i && i.dataset.tt_content ? i : null, a && t.props.onResultSelected()
                        }
                    }, t.setScrollRef = function(e) {
                        return t.scroll = e
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.previousCategory !== this.props.currentCategory && (this.previousCategory = this.props.currentCategory, this.scroll.scrollToTop())
                }, t.prototype.render = function() {
                    var e, t = {
                        "search-result-view": !0,
                        "search-result-view--active": !0,
                        "search-result-view--filtered": this.props.currentCategory === G.a.Videos
                    };
                    e = this.props.currentCategory && null !== this.props.currentCategory ? v.createElement(M, {
                        title: this.getCategoryTitle(this.props.currentCategory),
                        showBack: !0,
                        onBackClick: this.onBackClick
                    }) : v.createElement(M, {
                        title: Object(y.d)("Top Results", "SearchResultPanel__titlebar"),
                        showBack: !1
                    });
                    var n;
                    n = this.props.isWaiting ? v.createElement(H.X, {
                        fillContent: !0
                    }) : this.props.isErrored ? this.getErrorMessage() : this.props.currentCategory && null !== this.props.currentCategory ? this.getCategoryDrillDown(this.props.currentCategory) : this.props.gameResults && this.props.gameResults.totalHits > 0 || this.props.userResults && this.props.userResults.totalHits > 0 || this.props.communityResults && this.props.communityResults.totalHits > 0 || this.props.videoResults && this.props.videoResults.totalHits > 0 || this.props.liveResults && this.props.liveResults.totalHits > 0 ? this.getResultSections() : this.getNoResultsMessage();
                    var i;
                    return this.props.currentCategory === G.a.Videos && (i = v.createElement(W, {
                        key: "video-filters",
                        onOptionsChange: this.props.onVideoOptionsChange
                    })), v.createElement("div", {
                        className: "search-panel " + (this.props.isOpen ? "" : "search-panel--closed"),
                        tabIndex: 0,
                        onKeyDown: this.props.onKeyDown
                    }, e, i, v.createElement(H._17, {
                        className: D(t),
                        background: H.m.Base,
                        position: H._2.Absolute,
                        overflow: H.Y.Hidden,
                        display: H.H.Block
                    }, v.createElement(R.b, {
                        className: "search-result-view__wrapper",
                        contentClassName: "search-result-view__scroll-container",
                        onClick: this.onClick,
                        scrollRef: this.setScrollRef,
                        suppressScrollX: !0,
                        "data-a-target": "search-scroller"
                    }, v.createElement(H.U, {
                        fullWidth: !0
                    }, n, v.createElement(R.a, {
                        key: this.props.currentCategory || "none",
                        enabled: !this.props.isWaiting && this.props.isOpen,
                        loadMore: this.props.loadMore
                    })))))
                }, t.prototype.getResultSections = function() {
                    var e, t = [],
                        n = [],
                        i = this.getGameCards(),
                        a = this.getUserCards(),
                        r = this.getCommunityCards(),
                        o = this.getVideoCards(),
                        s = this.getLiveCards();
                    return s.length > 0 && (e = v.createElement(H.U, {
                        className: "search-result-view__live",
                        margin: {
                            y: 1,
                            x: 1
                        }
                    }, v.createElement(H.N, null, s))), this.getResultSection("games-section", G.a.Games, this.gameHeaderSelect, this.props.gameResults, i.length, i, n, t), this.getResultSection("live-section", G.a.Channels, this.liveHeaderSelect, this.props.liveResults, s.length, e, n, t), this.getResultSection("channels-section", G.a.Users, this.userHeaderSelect, this.props.userResults, a.length, a, n, t), this.getResultSection("videos-section", G.a.Videos, this.videoHeaderSelect, this.props.videoResults, o.length, o, n, t), this.getResultSection("communities-section", G.a.Communities, this.communityHeaderSelect, this.props.communityResults, r.length, r, n, t), t.concat(n)
                }, t.prototype.getResultSection = function(e, t, n, i, a, r, o, s) {
                    var l = v.createElement(q, {
                        key: e,
                        totalHitsCount: i ? i.totalHits : 0,
                        hitsCount: a,
                        title: this.getCategoryTitle(t),
                        onHeaderClick: n,
                        "data-a-target": e
                    }, r);
                    0 === a ? o.push(l) : s.push(l)
                }, t.prototype.getGameCards = function() {
                    return this.props.gameResults ? this.props.gameResults.results.map(function(e) {
                        return v.createElement(L.a, {
                            id: "game_" + e.id,
                            key: "game_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.title,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })
                    }) : []
                }, t.prototype.getLiveCards = function() {
                    return this.props.liveResults ? this.props.liveResults.results.map(function(e) {
                        var t = Object(I.a)(e.login || "", e.name || "");
                        return v.createElement(H.G, {
                            key: "live_" + e.id,
                            cols: 6
                        }, v.createElement(H.U, {
                            margin: {
                                bottom: 1
                            }
                        }, v.createElement(V, {
                            id: "live_" + e.id,
                            imageAlt: e.thumbnailAltText,
                            linkTo: e.linkTo,
                            title: e.status || "",
                            login: e.login ? e.login : "",
                            channelName: t,
                            viewerCount: e.viewerCount || 0,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        })))
                    }) : []
                }, t.prototype.getUserCards = function() {
                    return this.props.userResults ? this.props.userResults.results.map(function(e) {
                        var t = Object(I.a)(e.login || "", e.name || "");
                        return v.createElement(H.S, {
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: e.id
                        }, v.createElement(H.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageAlt: e.thumbnailAltText,
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            size: H.D.Size4,
                            aspect: H.k.Aspect1x1
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            padding: {
                                x: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, t))))))
                    }) : []
                }, t.prototype.getVideoCards = function() {
                    return this.props.videoResults ? this.props.videoResults.results.map(function(e) {
                        var t = Object(I.a)(e.login || "", e.name || ""),
                            n = Object(P.a)(e.length || 0);
                        return v.createElement(H.S, {
                            key: "video_" + e.id,
                            linkTo: e.linkTo,
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(H.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: H.D.Size8,
                            aspect: H.k.Aspect16x9
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, e.title)), v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, e.createdAt ? Object(y.c)(new Date(1e3 * e.createdAt), "medium") : "", " · ", n || "", " · ", v.createElement(H._21, {
                            className: "search-pannel__highlight-link",
                            type: H._26.Span
                        }, t)))))))
                    }) : []
                }, t.prototype.getCommunityCards = function() {
                    return this.props.communityResults ? this.props.communityResults.results.map(function(e) {
                        return v.createElement(H.S, {
                            key: "community_" + e.id,
                            targetBlank: Object(T.b)(),
                            linkTo: Object(T.a)(e.linkTo),
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0
                        }, v.createElement(H.U, {
                            className: "search-panel__card",
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, v.createElement(H.A, {
                            row: !0
                        }, v.createElement(H.C, {
                            imageSrc: e.thumbnail ? e.thumbnail : "",
                            imageAlt: e.thumbnailAltText,
                            size: H.D.Size4,
                            aspect: H.k.BoxArt
                        }), v.createElement(H.B, null, v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            type: H._26.H5,
                            ellipsis: !0
                        }, e.name)), v.createElement(H.P, {
                            margin: {
                                left: 1
                            }
                        }, v.createElement(H._21, {
                            className: "search-panel__link",
                            ellipsis: !0
                        }, Object(y.d)("{viewerCount,number} Viewers", {
                            viewerCount: e.viewerCount || 0
                        }, "SearchResultPanel")))))))
                    }) : []
                }, t.prototype.getCategoryDrillDown = function(e) {
                    var t;
                    switch (e) {
                        case G.a.Games:
                            if (!this.props.gameResults || 0 === this.props.gameResults.totalHits) return this.getNoResultsMessage();
                            t = this.getGameCards();
                            break;
                        case G.a.Users:
                            if (!this.props.userResults || 0 === this.props.userResults.totalHits) return this.getNoResultsMessage();
                            t = this.getUserCards();
                            break;
                        case G.a.Communities:
                            if (!this.props.communityResults || 0 === this.props.communityResults.totalHits) return this.getNoResultsMessage();
                            t = this.getCommunityCards();
                            break;
                        case G.a.Videos:
                            if (!this.props.videoResults || 0 === this.props.videoResults.totalHits) return this.getNoResultsMessage();
                            t = this.getVideoCards();
                            break;
                        case G.a.Channels:
                            if (!this.props.liveResults || 0 === this.props.liveResults.totalHits) return this.getNoResultsMessage();
                            t = [v.createElement(H.U, {
                                className: "search-result-view__live",
                                margin: {
                                    x: 1
                                },
                                key: "live_drill-down-container"
                            }, v.createElement(H.N, null, this.getLiveCards()))];
                            break;
                        default:
                            return this.getNoResultsMessage()
                    }
                    return v.createElement(q, null, t)
                }, t.prototype.getCategoryTitle = function(e) {
                    switch (e) {
                        case G.a.Games:
                            return Object(y.d)("Games", "SearchResultPanel");
                        case G.a.Users:
                            return Object(y.d)("Channels", "SearchResultPanel");
                        case G.a.Communities:
                            return Object(y.d)("Communities", "SearchResultPanel");
                        case G.a.Videos:
                            return Object(y.d)("Videos", "SearchResultPanel");
                        case G.a.Channels:
                            return Object(y.d)("Live", "SearchResultPanel");
                        default:
                            return Object(y.d)("Top Results", "SearchResultPanel")
                    }
                }, t.prototype.getNoResultsMessage = function() {
                    return v.createElement(H.U, {
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.Center,
                        alignItems: H.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(H.U, {
                        className: "notice-wrap__visual",
                        textAlign: H._22.Center,
                        flexShrink: 1
                    }, v.createElement(H._8, {
                        asset: H._9.SearchNoResults,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        className: "notice-wrap__title flex__item",
                        "data-test-selector": "panel-body-no-results"
                    }, Object(y.d)("No results found", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(y.d)("They're probably in another castle", "SearchResultPanel")))
                }, t.prototype.getErrorMessage = function() {
                    return v.createElement(H.U, {
                        display: H.H.Flex,
                        flexDirection: H.J.Column,
                        justifyContent: H.T.Center,
                        alignItems: H.c.Center,
                        className: "notice-wrap aspect__fill"
                    }, v.createElement(H.U, {
                        className: "notice-wrap__visual",
                        textAlign: H._22.Center,
                        flexShrink: 1
                    }, v.createElement(H._8, {
                        asset: H._9.DeadGlitch,
                        width: 46,
                        height: 48
                    })), v.createElement("h4", {
                        "data-test-selector": "search-error-message",
                        className: "notice-wrap__title flex__item"
                    }, Object(y.d)("Search is not available at this time", "SearchResultPanel")), v.createElement("p", {
                        className: "notice-wrap__text flex__item"
                    }, Object(y.d)("Please try again later", "SearchResultPanel")))
                }, t
            }(v.Component)),
            Q = (n(413), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isAnimating: !1,
                        currentCategory: t.currentCategory
                    }, n
                }
                return h.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this;
                    e.currentCategory && e.currentCategory !== this.props.currentCategory && this.setState({
                        currentCategory: e.currentCategory
                    }), this.props.isVisible !== e.isVisible && (this.animationTimeout && window.clearTimeout(this.animationTimeout), this.setState({
                        isAnimating: !0
                    }), this.animationTimeout = window.setTimeout(function() {
                        t.setState({
                            isAnimating: !1
                        })
                    }, 300))
                }, t.prototype.componentWillUnmount = function() {
                    this.animationTimeout && window.clearTimeout(this.animationTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.currentCategory) return null;
                    var e = this.getAssetName(this.state.currentCategory);
                    return this.props.isVisible || this.state.isAnimating ? v.createElement(H.U, {
                        className: "search-tag"
                    }, v.createElement(H.e, {
                        enabled: !0,
                        type: this.props.isVisible ? H.i.BounceIn : H.i.BounceOut
                    }, v.createElement(H._20, {
                        label: this.state.currentCategory,
                        icon: e,
                        onClose: this.props.onClick,
                        "data-test-selector": "filter-icon",
                        "data-a-target": "nav-search-clear"
                    }))) : null
                }, t.prototype.getAssetName = function(e) {
                    switch (e) {
                        case G.a.Games:
                            return H._9.NavGames;
                        case G.a.Users:
                            return H._9.NavProfile;
                        case G.a.Communities:
                            return H._9.Communities;
                        case G.a.Videos:
                            return H._9.NavVideos;
                        case G.a.Channels:
                        default:
                            return H._9.NavChannels
                    }
                }, t
            }(v.Component)),
            $ = (n(414), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.categoryTagClicked = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onCategorySelected(null)
                    }, t
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return v.createElement("div", null, v.createElement("div", {
                        className: "top-nav__search-container",
                        "data-click-out-id": "nav-search-balloon"
                    }, v.createElement(F.a, {
                        onClickOut: this.props.onClickOut
                    }, v.createElement(H._11, {
                        onChange: this.handleChange,
                        onFocus: this.props.onFocus,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: Object(y.d)("Search", "NavSearch"),
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1
                    }), v.createElement(H.p, {
                        direction: H.q.Bottom,
                        noTail: !0,
                        size: H.r.Large,
                        show: this.props.isOpen,
                        offsetY: "5px",
                        "data-a-target": "nav-search-balloon"
                    }, v.createElement(K, {
                        isOpen: this.props.isOpen,
                        gameResults: this.props.gameResults,
                        userResults: this.props.userResults,
                        communityResults: this.props.communityResults,
                        videoResults: this.props.videoResults,
                        liveResults: this.props.liveResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        onResultSelected: this.props.onResultSelected,
                        onCategorySelected: this.props.onCategorySelected,
                        currentCategory: this.props.currentCategory,
                        onVideoOptionsChange: this.props.onVideoOptionsChange,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown
                    })), v.createElement(Q, {
                        isVisible: this.props.isOpen && !!this.props.currentCategory,
                        currentCategory: this.props.currentCategory,
                        onClick: this.categoryTagClicked
                    }))))
                }, t
            }(v.Component)),
            X = 50,
            J = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onCategorySelected = function(e) {
                        t.setState(h.__assign({}, t.getEmptyState(), {
                            term: t.state.term,
                            currentCategory: e,
                            isOpen: !0,
                            isWaiting: !0
                        }), function() {
                            t.doSearch(t.state.term)
                        })
                    }, t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            topGameResults: null,
                            topUserResults: null,
                            topLiveResults: null,
                            topVideoResults: null,
                            topCommunityResults: null,
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, X)
                    }, t.onHistoryChange = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        })
                    }, t.onFocus = function() {
                        t.state.term && !t.state.isOpen && t.setState({
                            isOpen: !0
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === w.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === w.a.Up ? t.focusNext(-1) : e.keyCode === w.a.Down && t.focusNext(1))
                    }, t.onResultSelected = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.loadMore = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return h.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || null === this.state.currentCategory || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(this.state.currentCategory, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), y.i.error(n, "Algolia page search failed"), this.setState(h.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(U.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentGameResults: this.state.currentGameResults,
                                            currentUserResults: this.state.currentUserResults,
                                            currentCommunityResults: this.state.currentCommunityResults,
                                            currentVideoResults: this.state.currentVideoResults,
                                            currentLiveResults: this.state.currentLiveResults
                                        }), this.setState(h.__assign({}, i, {
                                            term: this.state.term,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        })), [2]) : (this.setState(h.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            isOpen: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.changeVideoOptions = function(e) {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return h.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        t = O.a(), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryVideos(this.state.term, t, e)];
                                    case 2:
                                        return n = a.sent(), n.hits && this.setState({
                                            currentVideoResults: {
                                                totalHits: n.totalHits,
                                                results: n.hits.map(U.a)
                                            },
                                            queryID: ""
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), y.i.error(i, "Algolia video search failed"), this.setState({
                                            isErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.searchClient = new x.a(y.a.algoliaApplicationID, y.a.algoliaAPIKey), t.state = t.getEmptyState(), t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentDidUpdate = function() {
                    !this.state.focusSelectable || this.state.queryID || this.inputTimer || (this.focusNext(1), this.setState({
                        focusSelectable: !1
                    }))
                }, t.prototype.render = function() {
                    return v.createElement($, {
                        onChange: this.onChange,
                        onClickOut: this.onClickOut,
                        onFocus: this.onFocus,
                        onKeyDown: this.onKeyDown,
                        onResultSelected: this.onResultSelected,
                        gameResults: this.state.currentGameResults,
                        userResults: this.state.currentUserResults,
                        communityResults: this.state.currentCommunityResults,
                        videoResults: this.state.currentVideoResults,
                        liveResults: this.state.currentLiveResults,
                        isOpen: this.state.isOpen,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onCategorySelected: this.onCategorySelected,
                        currentCategory: this.state.currentCategory,
                        onVideoOptionsChange: this.changeVideoOptions,
                        loadMore: this.loadMore
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        a = Array.prototype.indexOf.call(n, i);
                    if (t = a < 0 ? e > 0 ? 0 : n.length - 1 : a + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var r = n.item(t);
                        r.focus(), r.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: r
                        })
                    }
                }, t.prototype.doSearch = function(e) {
                    return h.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, r, o;
                        return h.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = O.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 6, , 7]), this.state.currentCategory && null !== this.state.currentCategory ? (t = 0, [4, this.searchClient.queryForType(this.state.currentCategory, e, n)]) : [3, 3];
                                case 2:
                                    return a = s.sent(), [3, 5];
                                case 3:
                                    return this.state.topGameResults && this.state.topUserResults && this.state.topLiveResults && this.state.topVideoResults && this.state.topCommunityResults ? (this.setState({
                                        currentGameResults: this.state.topGameResults,
                                        currentUserResults: this.state.topUserResults,
                                        currentLiveResults: this.state.topLiveResults,
                                        currentVideoResults: this.state.topVideoResults,
                                        currentCommunityResults: this.state.topCommunityResults,
                                        queryID: "",
                                        term: e,
                                        isOpen: !0,
                                        isWaiting: !1,
                                        currentPage: t
                                    }), [2]) : [4, this.searchClient.queryTopResults(e, n)];
                                case 4:
                                    a = s.sent(), s.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return r = s.sent(), y.i.error(r, "Algolia top results search failed"), this.setState(h.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2];
                                case 7:
                                    return a ? this.state.queryID !== a.id ? [2] : (o = Object(U.b)({
                                        searchResults: a,
                                        append: !1,
                                        currentGameResults: this.state.currentGameResults,
                                        currentUserResults: this.state.currentUserResults,
                                        currentCommunityResults: this.state.currentCommunityResults,
                                        currentVideoResults: this.state.currentVideoResults,
                                        currentLiveResults: this.state.currentLiveResults
                                    }), this.state.currentCategory && null === this.state.currentCategory && (o = h.__assign({}, o, {
                                        topGameResults: o.currentGameResults,
                                        topUserResults: o.currentUserResults,
                                        topLiveResults: o.currentLiveResults,
                                        topVideoResults: o.currentVideoResults,
                                        topCommunityResults: o.currentCommunityResults,
                                        exhaustedHits: o.exhaustedHits
                                    })), this.setState(function(n) {
                                        return h.__assign({}, n, o, {
                                            queryID: "",
                                            term: e,
                                            isOpen: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(h.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        isOpen: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        term: "",
                        currentGameResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentLiveResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentCommunityResults: {
                            totalHits: 0,
                            results: []
                        },
                        currentVideoResults: {
                            totalHits: 0,
                            results: []
                        },
                        isOpen: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentCategory: null,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t = h.__decorate([Object(S.c)("NavSearch")], t)
            }(v.Component),
            Y = Object(C.e)(J),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return v.createElement(H.U, {
                        className: "anon-user",
                        flexWrap: H.K.NoWrap,
                        display: H.H.Flex,
                        margin: {
                            left: 1
                        },
                        "data-a-target": "user-card"
                    }, v.createElement(H.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H.u, {
                        onClick: this.onLoginClick,
                        "data-a-target": "login-button"
                    }, Object(y.d)("Log in", "top-nav"))), v.createElement(H.U, {
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H.u, {
                        onClick: this.onSignUpClick,
                        "data-a-target": "signup-button"
                    }, Object(y.d)("Sign up", "top-nav"))))
                }, t = h.__decorate([Object(S.c)("AnonUser")], t)
            }(v.Component),
            ee = Z,
            te = n(415),
            ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    var e = !1;
                    if (this.props.data) {
                        if (this.props.data.loading || this.props.data.error) return null;
                        e = !!this.props.data.currentUser && this.props.data.currentUser.hasPrime
                    }
                    return !this.props.isLoggedIn || e ? v.createElement(u.b, {
                        to: {
                            pathname: "/store/merch",
                            state: {
                                medium: b.PageviewMedium.TopNav,
                                content: b.PageviewContent.Games
                            }
                        },
                        className: "top-nav__nav-link",
                        "data-a-target": "store-link",
                        activeClassName: "active"
                    }, Object(y.d)("Store", "TopNavStore")) : null
                }, t = h.__decorate([Object(j.a)(te, {
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(S.c)("TopNavStoreComponent", {
                    autoReportInteractive: !0
                })], t)
            }(v.Component),
            ie = ne,
            ae = Object(d.a)(a)(ie),
            re = n(106),
            oe = n(133),
            se = n(416),
            le = Object(T.a)("/products/turbo?ref=top_nav"),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return null;
                    var e = this.props.data.requestInfo && !Object(re.b)(this.props.data.requestInfo.countryCode),
                        t = !this.props.data.currentUser || !this.props.data.currentUser.hasTurbo;
                    if (e && t) return v.createElement("a", {
                        href: le,
                        target: "_blank",
                        className: "top-nav__nav-link",
                        "data-a-target": "try-prime-link"
                    }, Object(y.d)("Go Turbo", "TopNavUpsell"));
                    if (!this.props.data.currentUser || !this.props.data.currentUser.hasPrime) {
                        var n = Object(oe.d)(oe.b, window.location.pathname.substring(1));
                        return v.createElement("a", {
                            href: n,
                            target: "_blank",
                            className: "top-nav__nav-link",
                            "data-a-target": "try-prime-link"
                        }, Object(y.d)("Try Prime", "TopNavUpsell"))
                    }
                    return null
                }, t = h.__decorate([Object(j.a)(se), Object(S.c)("TopNavUpsellComponent")], t)
            }(v.Component),
            de = ce,
            ue = n(87),
            me = n(107),
            pe = n(50),
            ge = n(38),
            fe = n(20),
            he = n(30),
            ve = n(137),
            ye = n(52),
            ke = n(132),
            _e = n(51),
            be = function() {
                return v.createElement(H.U, {
                    display: H.H.Flex,
                    flexGrow: 1,
                    alignItems: H.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card",
                    "data-a-target": "user-card"
                }, v.createElement(H.U, {
                    display: H.H.Flex,
                    flexWrap: H.K.NoWrap,
                    alignItems: H.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(H.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement(S.a, {
                    size: 30,
                    imageSrc: y.a.defaultAvatarURL,
                    imageAlt: Object(y.d)("User Avatar", "UserError"),
                    "data-a-target": "top-nav-avatar"
                })), v.createElement(H.U, {
                    flexGrow: 1
                }, v.createElement(H._17, {
                    color: H.F.Base,
                    className: "top-nav__username"
                }, ""))))
            },
            Se = function() {
                return v.createElement(H.U, {
                    display: H.H.Flex,
                    flexGrow: 1,
                    alignItems: H.c.Center,
                    fullHeight: !0,
                    className: "top-nav__user-card top-nav__user-card--placeholder",
                    "data-a-target": "user-card"
                }, v.createElement(H.U, {
                    display: H.H.Flex,
                    flexWrap: H.K.NoWrap,
                    alignItems: H.c.Center,
                    flexGrow: 1,
                    padding: {
                        right: 1
                    },
                    fullHeight: !0,
                    className: "top-nav__user-card-wrapper"
                }, v.createElement(H.U, {
                    margin: {
                        x: 1
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-avatar"
                })), v.createElement(H.U, {
                    flexGrow: 1,
                    display: H.H.Flex,
                    flexDirection: H.J.Column,
                    justifyContent: H.T.Center
                }, v.createElement(H._17, {
                    color: H.F.Base,
                    className: "top-nav__username"
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-name"
                })), v.createElement(H.U, {
                    className: "top-nav__user-status"
                }, v.createElement(H.U, {
                    ellipsis: !0,
                    display: H.H.Flex,
                    alignItems: H.c.Center
                }, v.createElement(H.U, {
                    display: H.H.InlineFlex,
                    margin: {
                        right: .5
                    }
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-presence"
                })), v.createElement(H._17, {
                    display: H.H.InlineFlex,
                    color: H.F.Alt
                }, v.createElement("div", {
                    className: "top-nav__user-card-placeholder-status"
                }))))), v.createElement(H.U, {
                    display: H.H.Flex,
                    flexShrink: 0,
                    className: "top-nav__user-card-dropdown-arrow top-nav__user-card-dropdown-arrow--presence",
                    "data-a-target": "top-nav-dropdown-arrow"
                }, v.createElement(H._8, {
                    asset: H._9.GlyphArrDown
                }))))
            },
            Ne = n(31),
            Ee = n(71),
            Ce = (n(419), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onCardClick = function() {
                        n.setState({
                            dropdownOpen: !n.state.dropdownOpen
                        })
                    }, n.onClickOut = function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }, n.onLogoutClick = function(e) {
                        e.preventDefault(), n.props.logout()
                    }, n.onShareCheckboxClick = function() {
                        n.props.toggleShareActivity()
                    }, n.onDarkModeCheckboxClick = function() {
                        var e = n.props.theme === Ne.a.Dark ? Ne.a.Light : Ne.a.Dark;
                        n.props.changeTheme(e, ke.a.UserMenu)
                    }, n.onOnlineClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(pe.a.Online)
                    }, n.onInvisibleClick = function(e) {
                        e && e.stopPropagation(), n.props.toggleVisibility(pe.a.Offline)
                    }, n.unsubscribeFromHistory = n.props.history.listen(function() {
                        n.setState({
                            dropdownOpen: !1
                        })
                    }), n.state = {
                        dropdownOpen: !1
                    }, n
                }
                return h.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.prototype.render = function() {
                    var e = this.props.gqlData.currentUser.profileImageURL || y.a.defaultAvatarURL,
                        t = D("top-nav__dropdown-wrapper", {
                            toggled: this.state.dropdownOpen
                        }),
                        n = D("top-nav__user-card", "theme--dark", {
                            "top-nav__dropdown-open": this.state.dropdownOpen
                        }),
                        i = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        a = this.state.dropdownOpen ? "dropdown-down" : "dropdown-up",
                        r = this.props.gqlData.currentUser.availability === pe.a.Offline ? H.F.Base : H.F.Alt2,
                        o = this.props.gqlData.currentUser.availability === pe.a.Online ? H.F.Base : H.F.Alt2,
                        s = this.props.gqlData.currentUser.settings.isSharingActivity,
                        l = this.props.gqlData.currentUser.availability || this.props.gqlData.currentUser.settings.visibility,
                        c = v.createElement(H.U, {
                            margin: {
                                x: 2,
                                bottom: 1
                            }
                        }, v.createElement(H.E, {
                            id: "dark-mode-toggle",
                            label: Object(y.d)("Dark Mode", "TopNavUser"),
                            "data-a-target": "dark-mode-toggle",
                            "data-test-selector": "dark-mode-toggle",
                            "data-a-value": this.props.theme,
                            checked: this.props.theme === Ne.a.Dark,
                            onChange: this.onDarkModeCheckboxClick
                        }));
                    return v.createElement(H.U, {
                        position: H._2.Relative,
                        display: H.H.Flex,
                        flexGrow: 1,
                        alignItems: H.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(F.a, {
                        onClickOut: this.onClickOut,
                        className: n
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexGrow: 1,
                        alignItems: H.c.Stretch,
                        fullHeight: !0
                    }, v.createElement(H.S, {
                        onClick: this.onCardClick,
                        "data-a-target": "user-menu-toggle",
                        "data-test-selector": "user-menu-toggle"
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        alignItems: H.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0,
                        className: "top-nav__user-card-wrapper"
                    }, v.createElement(H.U, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, v.createElement(H.U, {
                        className: "top-nav__user-card-avatar-container"
                    }, v.createElement(S.a, {
                        size: 30,
                        imageSrc: e,
                        imageAlt: "User avatar",
                        "data-a-target": "top-nav-avatar"
                    }))), v.createElement(H.U, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: H.J.Column
                    }, v.createElement(H._17, {
                        color: H.F.Base,
                        className: "top-nav__username",
                        "data-a-target": "user-display-name"
                    }, this.props.gqlData.currentUser.displayName), v.createElement(H.U, {
                        className: "top-nav__user-status",
                        ellipsis: !0,
                        fullWidth: !0,
                        alignItems: H.c.Center,
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        flexShrink: 0,
                        margin: {
                            right: .5
                        }
                    }, v.createElement(Ee.a, {
                        availability: l
                    })), v.createElement(H._17, {
                        ellipsis: !0,
                        color: H.F.Alt
                    }, v.createElement(H._21, {
                        type: H._26.Span,
                        noWrap: !0,
                        "data-a-target": "online-status"
                    }, this.props.gqlData.currentUser && v.createElement(Ee.b, {
                        activity: this.props.gqlData.currentUser.activity,
                        availability: l === pe.a.Offline ? pe.a.Invisible : l
                    }))))), v.createElement(H._17, {
                        display: H.H.Flex,
                        flexShrink: 0,
                        color: H.F.Base,
                        className: "user-card-wrapper__dropdown-arrow",
                        "data-a-target": "top-nav-dropdown-arrow"
                    }, v.createElement(H._8, {
                        asset: H._9.GlyphArrDown
                    }))))), v.createElement(H._17, {
                        fullWidth: !0,
                        overflow: H.Y.Hidden,
                        position: H._2.Absolute,
                        className: t,
                        background: H.m.Base,
                        color: H.F.Base,
                        "data-a-target": i,
                        "data-test-selector": a
                    }, v.createElement(H._17, {
                        padding: {
                            y: 1
                        },
                        background: H.m.Alt
                    }, v.createElement(H.S, {
                        onClick: this.onOnlineClick,
                        "data-a-target": "online-dropdown-button",
                        "data-test-selector": "online-dropdown-button"
                    }, v.createElement(H._17, {
                        color: H.F.Alt2,
                        display: H.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        alignItems: H.c.Center,
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._3, {
                        status: H._4.Online
                    })), v.createElement(H._21, {
                        bold: this.props.gqlData.currentUser.availability === pe.a.Online,
                        color: o
                    }, Object(y.d)("Online", "TopNavUser")))), v.createElement(H.S, {
                        onClick: this.onInvisibleClick,
                        "data-a-target": "invisible-dropdown-button",
                        "data-test-selector": "invisible-dropdown-button"
                    }, v.createElement(H._17, {
                        color: H.F.Base,
                        display: H.H.Flex,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        alignItems: H.c.Center,
                        display: H.H.InlineFlex,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._3, {
                        status: H._4.Invisible
                    })), v.createElement(H._21, {
                        bold: this.props.gqlData.currentUser.availability === pe.a.Offline,
                        color: r
                    }, Object(y.d)("Invisible", "TopNavUser")))), v.createElement(H.U, {
                        margin: {
                            x: 2,
                            bottom: 1,
                            top: .5
                        }
                    }, v.createElement(H.E, {
                        id: "share-activity-toggle",
                        label: Object(y.d)("Share my activity", "TopNavUser"),
                        "data-a-target": "share-activity-toggle",
                        "data-test-selector": "share-activity-toggle",
                        "data-a-value": s,
                        checked: s,
                        onChange: this.onShareCheckboxClick,
                        disabled: this.props.gqlData.currentUser.availability === pe.a.Offline
                    }), v.createElement(H._21, {
                        type: H._26.Span,
                        color: H.F.Alt
                    }, Object(y.d)("Share what you're watching, playing, or streaming with your friends.", "TopNavUser"))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), c), v.createElement(H.U, {
                        margin: {
                            y: 1
                        }
                    }, v.createElement(H.S, {
                        linkTo: {
                            pathname: "/" + this.props.gqlData.currentUser.login,
                            state: {
                                content: "self-channel",
                                medium: "twitch-topnav"
                            }
                        },
                        "data-a-target": "channel-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavMyChannel,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Channel", "TopNavUser")))), v.createElement(H.S, {
                        linkTo: Object(T.a)("/" + this.props.gqlData.currentUser.login + "/manager/past_broadcasts"),
                        "data-a-target": "video-manager-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavManager,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Video Manager", "TopNavUser")))), v.createElement(H.S, {
                        linkTo: Object(T.a)("/" + this.props.gqlData.currentUser.login + "/dashboard"),
                        "data-a-target": "dashboard-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavDashboard,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Dashboard", "TopNavUser")))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(H.S, {
                        targetBlank: Object(T.b)(),
                        linkTo: Object(T.a)("/friends"),
                        "data-a-target": "friends-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.Friends,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Friends", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(T.b)(),
                        linkTo: Object(T.a)("/messages/inbox"),
                        "data-a-target": "inbox-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavMessages,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Messages", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(T.b)(),
                        linkTo: Object(T.a)("/subscriptions"),
                        "data-a-target": "subscriptions-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavBackpack,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Subscriptions", "TopNavUser")))), v.createElement(H.S, {
                        targetBlank: Object(T.b)(),
                        linkTo: Object(T.a)("/inventory"),
                        "data-a-target": "inventory-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.Crate,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Inventory", "TopNavUser")))), v.createElement(H._17, {
                        borderBottom: !0,
                        margin: {
                            x: 2,
                            y: 1
                        }
                    }), v.createElement(H.S, {
                        targetBlank: Object(T.b)(),
                        linkTo: Object(T.a)("/settings/profile"),
                        "data-a-target": "settings-dropdown-link"
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavSettings,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Settings", "TopNavUser")))), v.createElement(H.S, {
                        "data-a-target": "dropdown-logout",
                        onClick: this.onLogoutClick
                    }, v.createElement(H._17, {
                        color: H.F.Alt,
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        padding: {
                            x: 2,
                            y: .5
                        }
                    }, v.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        margin: {
                            right: 1
                        }
                    }, v.createElement(H._8, {
                        asset: H._9.NavLogout,
                        height: 18,
                        width: 18
                    })), v.createElement(H._21, null, Object(y.d)("Log Out", "TopNavUser"))))))))
                }, t
            }(v.Component)),
            we = Object(C.e)(Ce),
            Oe = n(420),
            xe = n(421),
            Ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSettingNewSession = !1, t.dataIsReady = function(e) {
                        return e.data && !e.data.loading && !e.data.error
                    }, t.setUserToOffline = function() {
                        Object(ve.c)(pe.a.Offline), Object(ve.a)()
                    }, t.toggleShareActivity = function() {
                        var e = !t.props.data.currentUser.settings.isSharingActivity,
                            n = h.__assign({}, Object(fe.a)({
                                isSharingActivity: e
                            }), {
                                optimisticResponse: {
                                    updateIsSharingActivity: {
                                        __typename: "UpdateIsSharingActivityPayload",
                                        user: {
                                            __typename: "User",
                                            id: t.props.data.currentUser.id,
                                            settings: {
                                                isSharingActivity: e,
                                                __typename: "UserSettings"
                                            }
                                        }
                                    }
                                }
                            });
                        t.props.updateIsSharingActivity(n)
                    }, t.toggleVisibility = function(e) {
                        t.dataIsReady(t.props) && Object(ve.e)(e)
                    }, t.setNewSession = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return h.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSettingNewSession) return [2];
                                        this.isSettingNewSession = !0, t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, 4, 5]), [4, Object(ve.g)()];
                                    case 2:
                                        return t.sent(), this.props.initialUserAvailabilitySet(), [3, 5];
                                    case 3:
                                        return e = t.sent(), y.i.warn("Failed to set new user availability session.", e), [3, 5];
                                    case 4:
                                        return this.isSettingNewSession = !1, [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t.maybeRefetchData = function(e) {
                        var n = e.pubsub.messages.presence;
                        n && e.data.currentUser.id && n.data.user_id === +e.data.currentUser.id && t.props.pubsub.messages.presence !== n && e.data.refetch()
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.maybeRefetchData(this.props), this.props.firstPageLoaded && this.dataIsReady(this.props) && !this.props.initialUserAvailabilityIsSet && this.setNewSession(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.maybeRefetchData(e), e.firstPageLoaded && this.dataIsReady(e) && !e.initialUserAvailabilityIsSet && this.setNewSession()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.setUserToOffline()
                }, t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.currentUser ? this.props.data.error ? v.createElement(be, null) : v.createElement(we, {
                        gqlData: this.props.data,
                        toggleShareActivity: this.toggleShareActivity,
                        toggleVisibility: this.toggleVisibility,
                        changeTheme: this.props.changeTheme,
                        firstPageLoaded: this.props.firstPageLoaded,
                        logout: this.props.logout,
                        theme: this.props.theme
                    }) : v.createElement(Se, null)
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(j.a)(Oe), Object(j.a)(xe, {
                    name: "updateIsSharingActivity"
                }), Object(me.a)(function(e) {
                    return {
                        query: Oe,
                        topic: e.data.currentUser ? Object(he.f)(e.data.currentUser.id) : "",
                        skip: !(e.data && !e.data.loading && !e.data.error && e.data.currentUser),
                        type: ge.c.PresenceSettings,
                        mutator: function(e, t) {
                            return t.currentUser.settings.visibility = e.data.availability_override.toUpperCase(), t.currentUser.settings.isSharingActivity = e.data.share_activity, t
                        }
                    }
                }), Object(ue.a)([{
                    topic: function(e) {
                        return Object(he.f)(e.data.currentUser.id)
                    },
                    mapMessageTypesToProps: (c = {}, c[ge.c.Presence] = "presence", c),
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }]), Object(S.c)("User")], t)
            }(v.Component),
            Fe = Object(d.a)(r, o)(Object(u.f)(Ue)),
            De = n(387),
            Re = (n(439), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOnsiteNotifications = function() {
                        return t.props.isLoggedIn ? v.createElement(H.U, {
                            flexGrow: 0,
                            alignSelf: H.d.Center,
                            flexWrap: H.K.NoWrap,
                            padding: {
                                left: .5,
                                right: 1
                            },
                            flexShrink: 0
                        }, v.createElement(E, null)) : null
                    }, t.renderTwitchPrimeCrown = function(e) {
                        return v.createElement(H.U, {
                            className: "top-nav__prime",
                            flexGrow: 0,
                            flexShrink: 0,
                            padding: {
                                x: .5
                            },
                            alignSelf: H.d.Center,
                            flexWrap: H.K.NoWrap
                        }, !e && v.createElement(De.b, null))
                    }, t.saveEllipsisRef = function(e) {
                        return t.ellipsisMenu = e
                    }, t.onNavigationClicked = function() {
                        t.ellipsisMenu.toggleBalloon(!1)
                    }, t.renderBrowseLink = function(e) {
                        var t = e.match,
                            n = t && "following" !== t.params.subpage,
                            i = Object(y.d)("Browse", "TopNav");
                        return v.createElement(u.a, {
                            className: "top-nav__nav-link" + (n ? " active" : ""),
                            "data-a-target": "browse-link",
                            title: i,
                            to: {
                                pathname: "/directory",
                                state: {
                                    medium: b.PageviewMedium.TopNav,
                                    content: b.PageviewContent.Games
                                }
                            }
                        }, i)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.props.isLoggedIn) {
                        var t = Object(y.d)("Following", "TopNav");
                        e = v.createElement(u.b, {
                            activeClassName: "active",
                            to: {
                                pathname: "/directory/following",
                                state: {
                                    medium: b.PageviewMedium.TopNav,
                                    content: b.PageviewContent.Following
                                }
                            },
                            className: "top-nav__nav-link",
                            "data-a-target": "following-link",
                            title: t
                        }, t)
                    }
                    return v.createElement(H.P, {
                        position: H._2.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, v.createElement("nav", {
                        className: "top-nav",
                        "data-a-target": "top-nav-container",
                        style: {
                            height: "5rem"
                        }
                    }, v.createElement(H.U, {
                        className: "top-nav__menu",
                        display: H.H.Flex,
                        alignItems: H.c.Stretch,
                        flexWrap: H.K.NoWrap
                    }, v.createElement(H.P, {
                        display: H.H.InlineFlex,
                        alignItems: H.c.Center,
                        flexShrink: 0
                    }, v.createElement(u.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: b.PageviewMedium.TopNav,
                                content: b.PageviewContent.Logo
                            }
                        },
                        className: "top-nav__home-link",
                        "data-a-target": "home-link"
                    }, v.createElement(H._8, {
                        asset: H._9.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), v.createElement(H.U, {
                        className: "top-nav__nav-items-container",
                        display: H.H.Flex,
                        flexGrow: 1,
                        flexWrap: H.K.NoWrap,
                        flexShrink: 0
                    }, e, v.createElement(u.d, {
                        path: "/directory/:subpage?",
                        children: this.renderBrowseLink
                    }), v.createElement("a", {
                        href: "https://app.twitch.tv/download",
                        "data-a-target": "get-desktop-link",
                        className: "top-nav__nav-link"
                    }, Object(y.d)("Get Desktop", "TopNav")), v.createElement(de, null), v.createElement(ae, null), v.createElement(H.U, {
                        className: "top-nav__ellipsis-button",
                        display: H.H.Flex,
                        alignItems: H.c.Center
                    }, v.createElement(_.a, {
                        ref: this.saveEllipsisRef
                    }, v.createElement(H.v, {
                        icon: H._9.NavMore,
                        overlay: !0,
                        ariaLabel: Object(y.d)("More nav items", "TopNav"),
                        "data-a-target": "ellipsis-button"
                    }), v.createElement(H.p, {
                        direction: H.q.Bottom,
                        tailOffset: 7,
                        size: H.r.Small,
                        "data-a-target": "overflow-menu"
                    }, v.createElement(H.U, {
                        padding: 1
                    }, v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/about",
                        "data-a-target": "about-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("About", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "http://twitchadvertising.tv/",
                        "data-a-target": "advertisers-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Advertisers", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://blog.twitch.tv/",
                        "data-a-target": "blog-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Blog", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/legal/community-guidelines",
                        "data-a-target": "community-guidelines-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Community Guidelines", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/cookie-policy",
                        "data-a-target": "cookie-policy-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Cookie Policy", "TopNav"))), v.createElement(H.S, {
                        onClick: this.onNavigationClicked,
                        linkTo: "/directory/game/Creative",
                        "data-a-target": "creative-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Creative", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://dev.twitch.tv/",
                        "data-a-target": "developers-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Developers", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://help.twitch.tv/",
                        "data-a-target": "help-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Help", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/jobs",
                        "data-a-target": "jobs-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Jobs", "TopNav"))), v.createElement(_.a, {
                        display: H.H.Block
                    }, v.createElement(H.S, {
                        "data-target": "language-selector-click",
                        "data-a-target": "language-selector"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Language", "TopNav"))), v.createElement(H.p, {
                        size: H.r.Small,
                        direction: H.q.Right,
                        offsetY: "4px",
                        offsetX: "20px",
                        "data-target": "language-selector",
                        "data-a-target": "language-selector-menu"
                    }, v.createElement(k.a, null))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://music.twitch.tv/",
                        "data-a-target": "music-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Music", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/partners",
                        "data-a-target": "partners-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Partners", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/press",
                        "data-a-target": "press-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Press", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://twitch.tv/p/security",
                        "data-a-target": "security-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Security", "TopNav"))), v.createElement(H.S, {
                        targetBlank: !0,
                        linkTo: "https://www.twitch.tv/p/terms-of-service",
                        "data-a-target": "terms-link"
                    }, v.createElement(H.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(y.d)("Terms", "TopNav"))))))), v.createElement(H.U, {
                        className: "top-nav__search",
                        flexGrow: 1,
                        alignSelf: H.d.Center
                    }, v.createElement(Y, null))), this.renderTwitchPrimeCrown(), this.renderOnsiteNotifications(), v.createElement(H.U, {
                        className: "top-nav__nav-items-container",
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        flexWrap: H.K.NoWrap,
                        flexGrow: 0,
                        flexShrink: 0
                    }, this.props.isLoggedIn ? v.createElement(Fe, {
                        logout: this.props.logout
                    }) : v.createElement(ee, {
                        login: this.props.login,
                        signup: this.props.signup
                    })))))
                }, t = h.__decorate([Object(S.c)("TopNav")], t)
            }(v.Component)),
            Te = Re,
            Ie = Object(u.f)(Object(d.a)(l, s)(Te));
        n.d(t, "a", function() {
            return "5rem"
        }), n.d(t, "b", function() {
            return Ie
        })
    },
    397: function(e, t) {},
    399: function(e, t, n) {
        e.exports = n.p + "assets/friend_requests-aec9595d7e19764bc23d982c8c0f43d9.png"
    },
    400: function(e, t) {},
    401: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Clear"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clearUnreadFriendRequests"
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
                                    value: "user"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 106
            }
        };
        n.loc.source = {
            body: "mutation FriendRequestsNotification_Clear {\n  clearUnreadFriendRequests {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    402: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FriendRequestsNotification_Query"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "incomingFriendRequests"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalUnreadCount"
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
                end: 138
            }
        };
        n.loc.source = {
            body: "query FriendRequestsNotification_Query {\n  currentUser {\n    id\n    incomingFriendRequests(first: 1) {\n      totalUnreadCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    403: function(e, t) {},
    404: function(e, t) {},
    405: function(e, t) {},
    406: function(e, t) {},
    407: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchGameResultCard_Game"
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
                                        value: "55"
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
                end: 128
            }
        };
        n.loc.source = {
            body: "query Search_SearchGameResultCard_Game($name: String!) {\n  game(name: $name) {\n    id\n    boxArtURL(width: 40 height: 55)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    408: function(e, t) {},
    409: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Search_SearchLiveResultCard_UserStream"
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
                                                value: "156"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "88"
                                            }
                                        }],
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
                end: 174
            }
        };
        n.loc.source = {
            body: "query Search_SearchLiveResultCard_UserStream($login: String!) {\n  user(login: $login) {\n    id\n    stream {\n      id\n      previewImageURL(width: 156 height: 88)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    410: function(e, t) {},
    411: function(e, t) {},
    412: function(e, t) {},
    413: function(e, t) {},
    414: function(e, t) {},
    415: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_Store_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                end: 75
            }
        };
        n.loc.source = {
            body: "query TopNav_Store_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    416: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_PrimeUpsell_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "query TopNav_PrimeUpsell_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n    hasTurbo\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    417: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SetSessionStatus"
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
                                value: "SetSessionStatusInput"
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
                            value: "setSessionStatus"
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
                                    value: "setAgainInSeconds"
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
                end: 136
            }
        };
        n.loc.source = {
            body: "mutation ChannelPage_SetSessionStatus($input: SetSessionStatusInput!) {\n  setSessionStatus(input: $input) {\n    setAgainInSeconds\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    418: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateVisibility"
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
                                value: "UpdateVisibilityInput"
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
                            value: "updateVisibility"
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
                                    value: "user"
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
                                            value: "availability"
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
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateVisibility($input: UpdateVisibilityInput!) {\n  updateVisibility(input: $input) {\n    user {\n      id\n      availability\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    419: function(e, t) {},
    420: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TopNav_User_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "availability"
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
                                            value: "isSharingActivity"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "visibility"
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
                                    value: "activity"
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
                                            value: "type"
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
                                                value: "Watching"
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
                                                    value: "user"
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
                                                                            value: "name"
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
                                                            value: "hosting"
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
                                                                                    value: "name"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Streaming"
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
                                                                    value: "name"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "Playing"
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
                                                            value: "name"
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
                end: 710
            }
        };
        n.loc.source = {
            body: "query TopNav_User_User {\n  currentUser {\n    id\n    displayName\n    profileImageURL(width: 70)\n    login\n    availability\n    settings {\n      isSharingActivity\n      visibility\n    }\n    activity {\n      type\n      ... on Watching {\n        user {\n          displayName\n          stream {\n            game {\n              name\n            }\n          }\n          hosting {\n            displayName\n            stream {\n              game {\n                name\n              }\n            }\n          }\n        }\n      }\n      ... on Streaming {\n        stream {\n          game {\n            name\n          }\n        }\n      }\n      ... on Playing {\n        game {\n          name\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    421: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "TopNav_User_UpdateIsSharingActivity"
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
                                value: "UpdateIsSharingActivityInput"
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
                            value: "updateIsSharingActivity"
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
                                    value: "user"
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
                                                    value: "isSharingActivity"
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
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation TopNav_User_UpdateIsSharingActivity($input: UpdateIsSharingActivityInput!) {\n  updateIsSharingActivity(input: $input) {\n    user {\n      id\n      settings {\n        isSharingActivity\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    422: function(e, t) {},
    423: function(e, t) {},
    424: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 50
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    425: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    426: function(e, t) {},
    427: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "claimPrimeOffer"
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
                                value: "ClaimPrimeOfferInput"
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
                            value: "claimPrimeOffer"
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
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation claimPrimeOffer($input: ClaimPrimeOfferInput!) {\n  claimPrimeOffer(input: $input) {\n    self {\n      claimData\n      hasEntitlement\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    428: function(e, t) {},
    429: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    430: function(e, t) {},
    431: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOfferList_PrimeOffers"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
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
                                    value: "imageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "claimInstructions"
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
                                    value: "deliveryMethod"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "priority"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "externalURL"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "publisher"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "categories"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 333
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOfferList_PrimeOffers {\n  primeOffers {\n    id\n    title\n    imageURL\n    claimInstructions\n    description\n    deliveryMethod\n    priority\n    content {\n      game {\n        id\n        name\n      }\n      externalURL\n      publisher\n      categories\n    }\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    432: function(e, t) {},
    433: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Current_User"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                end: 63
            }
        };
        n.loc.source = {
            body: "query Current_User {\n  currentUser {\n    id\n    hasPrime\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    434: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_PrimeOfferIds"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 123
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_PrimeOfferIds {\n  primeOffers {\n    id\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    435: function(e, t) {},
    436: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_PrimeOffers_CurrentUser"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 116
            }
        };
        n.loc.source = {
            body: "query Prime_PrimeOffers_CurrentUser {\n  currentUser {\n    id\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    437: function(e, t) {},
    438: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Prime_BlueBar_CurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "stringIds"
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
                                    value: "ID"
                                }
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
                            value: "dateOverride"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                                    value: "hasPrime"
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
                            value: "primePromotions"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "stringIds"
                                }
                            }
                        }, {
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
                                    value: "text"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "externalURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternalLink"
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
                            value: "requestInfo"
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
                                    value: "countryCode"
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
                end: 274
            }
        };
        n.loc.source = {
            body: "query Prime_BlueBar_CurrentUser($stringIds: [ID!], $dateOverride: Time) {\n  currentUser {\n    id\n    hasPrime\n  }\n  primePromotions (ids: $stringIds, dateOverride: $dateOverride) {\n    id\n    text\n    externalURL\n    isExternalLink\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    439: function(e, t) {},
    452: function(e, t) {
        function n(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function a(e) {
            if (!i(e) || u.call(e) != r || n(e)) return !1;
            var t = m(e);
            if (null === t) return !0;
            var a = c.call(t, "constructor") && t.constructor;
            return "function" == typeof a && a instanceof a && l.call(a) == d
        }
        var r = "[object Object]",
            o = Function.prototype,
            s = Object.prototype,
            l = o.toString,
            c = s.hasOwnProperty,
            d = l.call(Object),
            u = s.toString,
            m = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.getPrototypeOf, Object);
        e.exports = a
    },
    817: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseForYou: "browse.for-you",
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
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    819: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
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
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var a = n(0),
            r = n(21),
            o = n(1),
            s = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    871: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "b", function() {
            return s
        });
        var i, a = "carousel-player__main-description",
            r = "carousel-player-left-button",
            o = "carousel-player-right-button";
        ! function(e) {
            e[e.Horizontal = 1] = "Horizontal", e[e.Vertical = 2] = "Vertical"
        }(i || (i = {}));
        var s;
        ! function(e) {
            e[e.Stream = 1] = "Stream", e[e.Vod = 2] = "Vod"
        }(s || (s = {}))
    },
    882: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var a = n(6),
            r = n(0),
            o = n(1),
            s = n(2),
            l = n(112),
            c = n(382),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = s.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = i.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === c.b.directory.banner) {
                                var i = n.slotRef.querySelector(d);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === c.b.directory.rectangle) {
                                var i = n.slotRef.querySelector(u);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            p = m,
            g = Object(a.a)(i)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    911: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sideNavCollapsed: !e.ui.sideNavExpanded,
                rightColumnCollapsed: !e.ui.rightColumnExpanded
            }
        }
        var a = n(6),
            r = n(0),
            o = n(11),
            s = n(1),
            l = n(381),
            c = n(143),
            d = n(144),
            u = n(396),
            m = n(449),
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.resizeAnimationFrame = 0, t.collapseOnBreakpoint = function() {
                        var e = window.innerWidth,
                            n = {
                                sideNavCollapsedFromCSS: e < d.d,
                                rightColumnCollapsedFromCSS: e < c.b
                            };
                        t.state.sideNavCollapsedFromCSS === n.sideNavCollapsedFromCSS && t.state.rightColumnCollapsedFromCSS === n.rightColumnCollapsedFromCSS || t.setState(n), t.resizeAnimationFrame = 0
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.collapseOnBreakpoint))
                    }, t.onInnerChildrenResize = function(e, n) {
                        t.context.setRootScrollableOffsetHeight(n / 10 + "rem")
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.handleWindowResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.handleWindowResize), this.context.resetRootScrollableOffsetHeight(), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                }, t.prototype.render = function() {
                    var e = document.querySelector("." + m.b),
                        t = 0,
                        n = 0;
                    e ? (t = e.getBoundingClientRect().left, n = window.innerWidth - e.getBoundingClientRect().right) : n = window.innerWidth;
                    var i = {
                        position: "fixed",
                        top: u.a,
                        left: t,
                        right: n,
                        zIndex: 500
                    };
                    return s.createElement("div", {
                        style: i
                    }, s.createElement(l.a, {
                        onResize: this.onInnerChildrenResize
                    }), this.props.children)
                }, t.contextTypes = {
                    setRootScrollableOffsetHeight: o.func,
                    resetRootScrollableOffsetHeight: o.func
                }, t
            }(s.Component),
            g = Object(a.a)(i)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    912: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(a.Component),
            s = o;
        n.d(t, "a", function() {
            return s
        })
    },
    913: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(10),
            o = n(2),
            s = n(914),
            l = n(3),
            c = (n(1007), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = a.createElement(l.U, {
                        display: l.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, a.createElement(l.Z, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: a.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return a.createElement("div", i.__assign({
                        className: "live-channel-card"
                    }, Object(l._39)(this.props)), a.createElement(l.A, {
                        key: this.props.title
                    }, a.createElement(l.U, {
                        fullWidth: !0
                    }, a.createElement(l.j, {
                        overflow: !0
                    }, a.createElement("div", null, a.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, a.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: l.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), a.createElement(l.B, null, a.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, a.createElement(l.P, {
                        margin: {
                            top: .5
                        }
                    }, a.createElement(l._21, {
                        type: l._26.H3,
                        fontSize: l.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), a.createElement(l.U, {
                        className: "live-channel-card__meta",
                        display: l.H.Flex,
                        flexWrap: l.K.NoWrap
                    }, e, a.createElement(l._21, {
                        type: l._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? a.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, a.createElement(l._17, {
                        className: "live-channel-card__boxart",
                        position: l._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(l._30, {
                        display: l.H.Block,
                        direction: l._32.Bottom,
                        label: t
                    }, a.createElement(l.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: l.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? a.createElement(l.U, {
                        position: l._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, a.createElement(s.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(a.Component)),
            d = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return d
        })
    },
    914: function(e, t, n) {
        "use strict";
        var i, a, r, o = n(0),
            s = n(4),
            l = n(1),
            c = n(2),
            d = n(145),
            u = n(3),
            m = (n(1006), i = {}, i[d.a.Live] = "stream-type-indicator--live", i[d.a.Premiere] = "stream-type-indicator--premiere", i[d.a.Rerun] = "stream-type-indicator--rerun", i[d.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[d.a.Premiere] = u._9.VideoPremiere, a[d.a.Rerun] = u._9.VideoRerun, a[d.a.WatchParty] = u._9.VideoRerun, a),
            g = (r = {}, r[d.a.Premiere] = u._10.Live, r[d.a.Rerun] = u._10.Inherit, r[d.a.WatchParty] = u._10.Inherit, r),
            f = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._17, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, l.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u._21, {
                        type: u._26.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._17, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.V, {
                        size: u.W.Small
                    })) : l.createElement(u._8, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("Live", "StreamTypeIndicator");
                        case d.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case d.a.Rerun:
                        case d.a.WatchParty:
                            return Object(c.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(l.Component);
        n.d(t, "a", function() {
            return f
        })
    }
});
//# sourceMappingURL=pages.anon-front-1658fc99ce4c502ddef2c064267b98c8.js.map