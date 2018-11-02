(window.webpackJsonp = window.webpackJsonp || []).push([
    [121], {
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return p
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                l = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                s = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                c = function(e) {
                    a.o.trackItemSectionClick({
                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: r.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: r.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                p = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, s, c, p, d = this;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(d, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
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
                                    return n = u.sent(), s = n.filter(function(e) {
                                        return !!e
                                    }), c = s.map(function() {
                                        return r.TwitchDataType.Game
                                    }), p = s.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: s.length,
                                        rendered_item_list: s,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: p,
                                        location: l()
                                    }), [3, 3];
                                case 2:
                                    return u.sent(), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
        },
        "5NSO": function(e, t, n) {},
        "6mes": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("9C/b"),
                o = n("vRsq"),
                l = n("fvjX"),
                s = n("/7QA"),
                c = n("ZDlU"),
                p = n("8/mp"),
                d = n("yR8l"),
                u = n("geRD"),
                m = n("GnwI"),
                h = n("FUtE"),
                g = n("Ue10"),
                v = (n("nadk"), n("RFZc")),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            leftEdge: 0,
                            containerWidth: 0
                        }, t.loadMoreTopClips = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                                })
                            })
                        }, t.canLoadMore = function() {
                            var e = t.props.data;
                            return !(e.loading || e.error || !e.user || !e.user.clips || !e.user.clips.pageInfo.hasNextPage)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.channelName,
                            n = e.data,
                            i = n.user,
                            r = [];
                        !n.loading && !n.error && i && i.clips && (r = i.clips.edges.map(function(e) {
                            return e.node
                        }));
                        var o = a.createElement(g.Za, {
                            fillContent: !0
                        });
                        return o = n.error ? a.createElement(c.a, {
                            message: Object(s.d)("Error loading data.", "ChannelClipsContent")
                        }) : n.loading || i && (!i || i.clips) ? a.createElement("div", null, a.createElement(h.a, {
                            channelLogin: t,
                            clips: r,
                            isLoading: n.loading,
                            loadMoreClips: this.loadMoreTopClips,
                            timeRange: this.props.timeRange
                        }), a.createElement(p.a, {
                            loadMore: this.props.loadMore,
                            enabled: this.canLoadMore()
                        })) : a.createElement(c.a, {
                            message: Object(s.d)("User does not exist", "ChannelClipsContent")
                        }), a.createElement(g.Xa, {
                            fullHeight: !0
                        }, o)
                    }, t
                }(a.Component),
                C = Object(l.compose)(Object(m.b)("ChannelClipsContent", {
                    autoReportInteractive: !0
                }), Object(d.a)(v, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelName,
                                limit: 20,
                                criteria: {
                                    filter: Object(o.l)(e.timeRange)
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: v,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.user && e.data.user.clips && e.data.user.clips.edges.length ? e.data.user.clips.edges[e.data.user.clips.edges.length - 1].cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = e.user && e.user.clips && n.user && n.user.clips ? Object(u.c)(e.user.clips.edges, n.user.clips.edges) : [];
                                        return {
                                            user: i.__assign({}, n.user, {
                                                clips: i.__assign({}, n.user && n.user.clips ? n.user.clips : {}, {
                                                    edges: a
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(b),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.v)(this.props.location.search) || o.b.Week;
                        return a.createElement(C, {
                            channelName: this.props.channelName,
                            timeRange: e
                        })
                    }, t
                }(a.PureComponent),
                k = Object(r.a)(f);
            n.d(t, "ChannelClipsContentComponent", function() {
                return f
            }), n.d(t, "ChannelClipsContent", function() {
                return k
            })
        },
        "80G/": function(e, t, n) {},
        "9a8W": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        FUtE: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("9C/b"),
                l = n("GFmA"),
                s = n("+GjP"),
                c = n("vRsq"),
                p = n("tuvy"),
                d = n("/MKj"),
                u = n("fvjX"),
                m = n("aCAx"),
                h = n("MdYN"),
                g = n("MLDe"),
                v = n("2xye"),
                b = n("4rCz"),
                C = n("GnwI"),
                f = n("bdIb"),
                k = n("Ue10");
            ! function(e) {
                e.AllClipsUpsell = "all-clips-upsell", e.CreateAClipUpsell = "create-clip-upsell"
            }(i || (i = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.cardClickHandler = function(e, n, i) {
                            i.preventDefault(), t.props.onCardClick(e, n, function() {
                                return t.props.clips
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return 0 === this.props.clips.length ? r.createElement("div", null, this.renderEmpty()) : r.createElement(k.Xa, {
                            fullWidth: !0
                        }, r.createElement(k.Zb, {
                            gutterSize: k.bc.Small,
                            childWidth: k.ac.Large,
                            placeholderItems: 20
                        }, this.props.clips.map(function(t, n) {
                            return r.createElement(k.Xa, {
                                "data-a-target": "clips-card-" + n,
                                margin: {
                                    bottom: 2
                                },
                                key: n
                            }, Object(p.b)() || Object(p.a)() ? e.renderClipCardForPage(t, n) : e.renderClipCardForModal(t, n))
                        })))
                    }, t.prototype.renderClipCardForModal = function(e, t) {
                        return r.createElement(l.a, {
                            context: this.props.context,
                            title: e.title,
                            linkTo: e.url,
                            onClick: this.cardClickHandler.bind(this, e, t),
                            thumbnailImageProps: {
                                src: e.thumbnailURL || b.q.config.defaultStreamPreviewURL,
                                alt: e.title
                            },
                            channelDisplayName: e.broadcaster && e.broadcaster.displayName || "",
                            channelLogin: e.broadcaster && e.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: e.broadcaster ? "/" + e.broadcaster.login : ""
                            },
                            channelImageProps: {
                                src: e.broadcaster && e.broadcaster.profileImageURL || "",
                                alt: e.broadcaster && e.broadcaster.login || ""
                            },
                            gameTitle: e.game && e.game.name || void 0,
                            gameTitleLinkTo: e.game ? {
                                pathname: "/directory/game/" + encodeURI(e.game.name)
                            } : void 0,
                            gameBoxArtImageProps: e.game ? {
                                src: e.game.boxArtURL || b.a.defaultBoxArtURL,
                                alt: e.game.name
                            } : void 0,
                            datePublished: e.createdAt,
                            viewCount: e.viewCount,
                            durationInSeconds: e.durationSeconds,
                            clipCreatedByChannelLogin: e.curator && e.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: e.curator ? "/" + e.curator.login : "",
                            trackImageLatency: 0 === t
                        })
                    }, t.prototype.renderClipCardForPage = function(e, t) {
                        return r.createElement(f.a, {
                            context: this.props.context,
                            key: "video-" + t,
                            tracking: {
                                content: v.PageviewContent.TopClips,
                                content_index: t,
                                medium: v.PageviewMedium.TopClips
                            },
                            clip: e
                        })
                    }, t.prototype.renderEmpty = function() {
                        var e = this.props.timeRange === c.b.All ? r.createElement(k.Xa, {
                            "data-test-selector": i.CreateAClipUpsell
                        }, r.createElement(k.W, {
                            fontSize: k.Ca.Size4
                        }, Object(b.d)("No Clips Found", "ClipsCards")), r.createElement(k.Xa, {
                            margin: 3
                        }, Object(b.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                            "x:link": function(e) {
                                return r.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                    target: "_blank"
                                }, e)
                            }
                        }, "ClipsCards"))) : r.createElement(k.Xa, {
                            "data-test-selector": i.AllClipsUpsell
                        }, r.createElement(k.W, {
                            fontSize: k.Ca.Size4
                        }, Object(b.d)("No clips were created in this time period.", "ClipsCards"), r.createElement("br", null), Object(b.d)("Check out all popular clips from this channel instead.", "ClipsCards")), r.createElement(k.Xa, {
                            margin: 3
                        }, r.createElement(k.z, {
                            type: k.F.Hollow,
                            onClick: this.props.onShowAllClipsClick
                        }, Object(b.d)("See all popular clips", "ClipCards"))));
                        return r.createElement(k.Xa, {
                            fullWidth: !0
                        }, r.createElement(k.Ja, null, r.createElement(k.P, {
                            cols: 3
                        }), r.createElement(k.P, {
                            cols: 6
                        }, r.createElement(k.Xa, {
                            textAlign: k.Pb.Center
                        }, e)), r.createElement(k.P, {
                            cols: 3
                        })))
                    }, t
                }(r.Component),
                w = Object(C.b)("ClipCards", {
                    autoReportInteractive: !0
                })(y);
            var E, x = Object(d.connect)(null, function(e, t) {
                    return Object.assign(Object(u.bindActionCreators)({
                        onCardClick: function(e, n, i) {
                            var a = t.context === l.b.SingleChannelList ? g.b.Channel : g.b.Game;
                            return Object(m.d)(h.a, {
                                clip: e,
                                clipIndex: n,
                                getClips: i,
                                loadMoreClips: t.loadMoreClips,
                                pageType: a
                            })
                        }
                    }, e), t)
                })(w),
                S = n("L4bB"),
                I = n("0Rl0"),
                L = n("cERj"),
                N = n("mHR/");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(E || (E = {}));
            var T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showAllClipsHandler = function() {
                            var e, n = ((e = {})[c.a] = c.b.All, e);
                            t.props.history.push(Object(s.d)(t.props.location, n))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.channelLogin;
                        if (this.props.isLoading) {
                            for (var n = [], i = 0; i < 20; i++) n.push(r.createElement(I.a, {
                                key: i
                            }));
                            e = r.createElement(k.Zb, {
                                gutterSize: k.bc.Small,
                                childWidth: k.ac.Large,
                                placeholderItems: 20
                            }, n)
                        } else e = r.createElement(x, {
                            clips: this.props.clips || [],
                            context: t ? l.b.SingleChannelList : l.b.SingleGameList,
                            loadMoreClips: this.props.loadMoreClips,
                            onShowAllClipsClick: this.showAllClipsHandler,
                            timeRange: this.props.timeRange
                        });
                        var a = null;
                        if (!Object(N.a)(this.props.match.path)) {
                            var o = null;
                            t && Object(p.b)() && (o = r.createElement(L.a, {
                                channelLogin: t
                            })), Object(p.a)() || (a = r.createElement(k.Xa, {
                                "data-test-selector": E.Filters,
                                display: k.X.Flex,
                                flexDirection: k.Aa.Row,
                                fullWidth: !0,
                                margin: {
                                    bottom: 2
                                }
                            }, o, r.createElement(S.a, {
                                hideLanguageFilter: !!t
                            })))
                        }
                        return r.createElement(k.Xa, {
                            fullWidth: !0
                        }, a, r.createElement("div", null, e))
                    }, t
                }(r.Component),
                _ = Object(o.a)(T);
            n.d(t, !1, function() {
                return E
            }), n.d(t, !1, function() {
                return 20
            }), n.d(t, !1, function() {
                return T
            }), n.d(t, "a", function() {
                return _
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("5zf8"),
                l = n("Ue10"),
                s = (n("Fj9y"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonItemClick = function() {
                            t.props.onBalloonItemClick && t.props.onBalloonItemClick(t.props.videoID, t.props.index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(l.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row,
                            padding: .5
                        }, a.createElement(l.Cb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: l.x.Small,
                            overflow: l.cb.Hidden,
                            position: l.hb.Relative
                        }, a.createElement(l.o, {
                            align: l.d.Center,
                            ratio: l.p.BoxArt
                        }, a.createElement(l.S, i.__assign({}, e))), a.createElement(l.Cb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: l.f.Center,
                            background: l.r.Overlay,
                            color: l.O.Overlay,
                            display: l.X.Flex,
                            justifyContent: l.Wa.Center,
                            position: l.hb.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(l.qb, {
                            asset: l.rb.Play,
                            type: l.sb.Inherit
                        }))), a.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(l.W, null, this.props.gameChange.label)), a.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(l.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                c = n("0INk"),
                p = n("8/mp"),
                d = n("eJ65"),
                u = (n("vDRX"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onBalloonToggle = function(e) {
                            t.props.onBalloonClick && !e && t.props.onBalloonClick(t.props.videoID)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.props.videoGameChanges.length > 0) {
                            var e = this.props.videoGameChanges.map(function(e) {
                                return e.label
                            });
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(l.Xa, {
                            className: "preview-card-game-balloon",
                            display: l.X.InlineBlock,
                            position: l.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(d.a, {
                            key: "game-balloon",
                            display: l.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(l.z, {
                            type: l.F.Hollow,
                            icon: l.rb.ViewerList
                        }, a.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row
                        }, a.createElement(l.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(l.Xa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(l.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(l.u, {
                            direction: l.v.TopLeft,
                            size: l.w.Medium
                        }, a.createElement(l.Xa, {
                            overflow: l.cb.Hidden,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(l.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(l.W, {
                            color: l.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(l.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: l.Ba.NoWrap
                        }, a.createElement(p.b, null, a.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(s, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                m = n("kduP"),
                h = n("2xye"),
                g = function(e) {
                    return a.createElement(l.Xa, null, a.createElement(l.W, {
                        color: l.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(l.Pa, {
                            key: n
                        }, a.createElement(l.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: l.V.Inherit
                        }, t.label, v(n, i.length - 1) ? null : ", "))
                    })))
                },
                v = function(e, t) {
                    return e === t
                },
                b = n("N0BP"),
                C = (n("XA5B"), function(e) {
                    var t = a.createElement(l.Cb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: l.x.Small,
                        overflow: l.cb.Hidden
                    }, a.createElement(l.o, {
                        ratio: e.aspect || l.p.BoxArt,
                        align: l.d.Center
                    }, a.createElement(l.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(l.U, i.__assign({}, Object(b.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            C.displayName = "PreviewCardIconicImage";
            var f, k = n("TSYQ"),
                y = (n("cRsL"), function(e) {
                    var t = k("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(l.Xa, {
                        display: l.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: l.Wa.Between,
                        alignItems: l.f.Center,
                        className: t
                    }, a.createElement(l.Xa, {
                        display: l.X.InlineFlex
                    }, a.createElement(l.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: l.O.Overlay,
                        bold: !0,
                        transform: l.Sb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(l.Xa, {
                        display: l.X.InlineFlex
                    }, a.createElement(l.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: l.O.Overlay
                    }, e.subTitle)))
                }),
                w = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(l.kb, {
                        borderRadius: l.x.None,
                        size: l.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(y, i.__assign({}, e.topBar))), r = 3), a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                E = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(l.Xa, {
                        display: l.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(l.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(l.Cb, {
                        alignItems: l.f.Center,
                        background: l.r.Overlay,
                        borderRadius: l.x.Small,
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        fontSize: l.Ca.Size6,
                        justifyContent: l.Wa.Center
                    }, t, a.createElement(l.W, null, e.value)) : a.createElement(l.Cb, {
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(l.W, null, e.value))
                }),
                x = n("GnwI"),
                S = (n("B3R5"), function(e) {
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), a.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(l.Cb, {
                            background: l.r.Alt2,
                            overflow: l.cb.Hidden
                        }, a.createElement(l.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = k("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(l.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(l.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                I = Object(x.b)("PreviewCardThumbnail")(S),
                L = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(l.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(l.W, {
                            color: l.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(l.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: l.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(l.U, i.__assign({}, Object(b.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: l.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(l.W, {
                        type: l.Tb.H3,
                        fontSize: l.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(l.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                N = n("H1ft"),
                T = n("ZbA5"),
                _ = n("QVaV"),
                O = n("hyVY"),
                P = n("MXoD"),
                A = n("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(f || (f = {}));
            var M, R, B = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? l.rb.Unlock : l.rb.Lock;
                    return a.createElement(l.Xa, null, !t && a.createElement(l.Cb, {
                        background: l.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: l.gc.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: l.Pb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: l.f.Center,
                        alignContent: l.e.Center,
                        flexDirection: l.Aa.Column,
                        flexWrap: l.Ba.Wrap,
                        justifyContent: l.Wa.Center,
                        "data-test-selector": f.LockSelector
                    }, a.createElement(l.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(l.W, {
                        color: l.O.Overlay,
                        fontSize: l.Ca.Size5,
                        "data-test-selector": f.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(l.Xa, null, a.createElement(l.z, {
                        type: l.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(l.Cb, {
                        display: l.X.InlineFlex,
                        position: l.hb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: l.gc.Default,
                        fontSize: l.Ca.Size6,
                        background: l.r.Overlay,
                        borderRadius: l.x.Medium,
                        color: l.O.Overlay
                    }, a.createElement(l.Wb, {
                        direction: this.props.attachTop ? l.Yb.Bottom : l.Yb.Top,
                        align: l.Xb.Right,
                        label: n
                    }, a.createElement(l.qb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function j(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function X(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(M || (M = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(R || (R = {}));
            var F = function(e) {
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(b.a)(this.props)), a.createElement(l.Cb, {
                            position: l.hb.Relative,
                            borderRadius: l.x.Medium,
                            overflow: l.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(l.U, {
                            to: Object(P.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(I, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: j(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(l.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(l.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1,
                            fullWidth: !0
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(l.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(w, {
                            topLeft: a.createElement(T.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(E, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : j(this.props) ? a.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(E, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: l.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(E, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(E, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(E, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : X(this.props) ? a.createElement(w, {
                            topLeft: a.createElement(E, {
                                value: Object(O.b)(this.props.durationInSeconds),
                                icon: l.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(E, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(E, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return j(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return j(this.props) || X(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === R.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(l.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(C, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(P.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": M.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === R.SingleGameList || this.props.context === R.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(l.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(C, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(P.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": M.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(_.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(P.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), X(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : j(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== R.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(P.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(L, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(P.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(l.Xa, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(A.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return j(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(B, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!j(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === N.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case N.a.Balloon:
                                return a.createElement(u, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case N.a.Inline:
                                return a.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case N.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                V = Object(x.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(F);
            n.d(t, !1, function() {
                return M
            }), n.d(t, "b", function() {
                return R
            }), n.d(t, !1, function() {
                return F
            }), n.d(t, "a", function() {
                return V
            })
        },
        MdYN: function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("aCAx"),
                l = n("mrSG"),
                s = n("TSYQ"),
                c = n("q1tI"),
                p = n("/7QA"),
                d = n("cZKs"),
                u = n("jsEL"),
                m = n("GnwI"),
                h = n("/HY+"),
                g = n("4qQ0"),
                v = n("8Ad5"),
                b = n("u5aL"),
                C = n("uX80"),
                f = n("wbMx"),
                k = n("Jxh/"),
                y = n("kduP"),
                w = n("f00E"),
                E = n("vhpE"),
                x = n("bq0i"),
                S = n("yR8l"),
                I = n("4rCz"),
                L = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(i || (i = {}));
            var N = n("Ue10"),
                T = n("WsU7"),
                _ = [i.Delete, i.DeleteAll],
                O = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(L.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(N.Ua, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && _.includes(e)
                            }, c.createElement(N.Xa, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [i.Report, {
                                display: Object(I.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Report)
                                }
                            }],
                            [i.Delete, {
                                display: Object(I.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Delete)
                                }
                            }],
                            [i.DeleteAll, {
                                display: Object(I.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.DeleteAll)
                                }
                            }],
                            [i.Ban, {
                                display: Object(I.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Ban)
                                }
                            }],
                            [i.Timeout, {
                                display: Object(I.d)("Timeout User (24 hr)", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(i.Timeout)
                                }
                            }]
                        ]), n
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.props.clip;
                        if (!e || !e.currentUser) return null;
                        var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                            a = !!t.curator && e.currentUser.id === t.curator.id,
                            r = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = a || r || n,
                            l = r || n,
                            s = [i.Report];
                        return o && s.push(i.Delete), l && (s.push(i.DeleteAll), t.curator && t.broadcaster && (s.push(i.Ban), s.push(i.Timeout))), c.createElement(N.Xa, {
                            className: "moderation-menu"
                        }, c.createElement(x.a, null, c.createElement(N.z, {
                            type: N.F.Hollow,
                            icon: N.rb.More,
                            ariaLabel: Object(I.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(N.u, {
                            direction: N.v.TopRight
                        }, c.createElement(N.Xa, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(s)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = l.__decorate([Object(S.a)(T), Object(m.b)("ModerationMenu")], t)
                }(c.Component),
                P = n("MLDe"),
                A = (n("n/Dx"), 2e3),
                M = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingBalloon: !1,
                            playerRefID: Object(w.a)()
                        }, t.timeoutID = null, t.copyClipURL = function() {
                            var e;
                            try {
                                e = Object(k.a)(t.props.clip.url)
                            } catch (e) {
                                return void p.k.warn("Failed to copy", e)
                            }
                            e && (t.setState({
                                isShowingBalloon: !0
                            }), t.timeoutID = setTimeout(function() {
                                t.setState({
                                    isShowingBalloon: !1
                                })
                            }, A), Object(P.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(f.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(N.U, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(p.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(N.U, {
                                to: "" + Object(y.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(N.Cb, {
                            className: "clips-view-modal-content",
                            background: N.r.Base
                        }, c.createElement(N.Xa, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(N.o, {
                            ratio: N.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(N.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(N.Xa, {
                            display: N.X.Flex,
                            flexWrap: N.Ba.NoWrap
                        }, c.createElement(N.Xa, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(b.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(C.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: N.rb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(N.u, {
                            show: this.state.isShowingBalloon,
                            direction: N.v.TopRight
                        }, c.createElement(N.Ua, {
                            onClick: this.dismissBalloon
                        }, c.createElement(N.Xa, {
                            padding: 1
                        }, c.createElement(N.W, {
                            bold: !0
                        }, Object(p.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(E.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(O, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(N.Xa, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: N.X.Flex,
                            flexWrap: N.Ba.NoWrap,
                            justifyContent: N.Wa.Between,
                            fullWidth: !0,
                            overflow: N.cb.Hidden
                        }, c.createElement(N.Xa, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(N.Pa, {
                            ellipsis: !0
                        }, c.createElement(N.Cb, {
                            display: N.X.Flex,
                            fontSize: N.Ca.Size5
                        }, c.createElement(N.Xa, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(N.Xa, {
                            flexShrink: 0
                        }, c.createElement(N.W, {
                            type: N.Tb.Span,
                            color: N.O.Alt2
                        }, " • ", Object(p.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(N.Pa, {
                            ellipsis: !0
                        }, c.createElement(N.Cb, {
                            color: N.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(p.d)("Clipped by {curator}", {
                            curator: c.createElement(N.U, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(N.Cb, {
                            display: N.X.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: N.Ca.Size5,
                            color: N.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(N.Xa, {
                            margin: {
                                right: .5
                            },
                            alignItems: N.f.Center,
                            display: N.X.Flex
                        }, c.createElement(N.qb, {
                            asset: N.rb.GlyphViews
                        })), Object(p.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = l.__decorate([Object(m.b)("ClipsViewModalContent")], t)
                }(c.Component),
                R = n("S1Za");
            var B = Object(a.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        reportPlayerInstanceStarted: R.b
                    }, e)
                })(M),
                j = (n("9a8W"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onKeyDown = function(e) {
                            var n = e.charCode || e.keyCode;
                            n === v.a.Left ? t.updateClipBackward() : n === v.a.Right && t.updateClipForward()
                        }, t.updateClipForward = function() {
                            t.updateClipIndex(t.props.clipIndex + 1)
                        }, t.updateClipBackward = function() {
                            t.updateClipIndex(t.props.clipIndex - 1)
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = null;
                        this.props.clipIndex > 0 && (e = c.createElement(N.Xa, {
                            position: N.hb.Absolute,
                            display: N.X.Flex,
                            alignItems: N.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(N.A, {
                            ariaLabel: Object(p.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: N.C.Primary,
                            icon: N.rb.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(N.Xa, {
                            position: N.hb.Absolute,
                            display: N.X.Flex,
                            alignItems: N.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(N.A, {
                            ariaLabel: Object(p.d)("Next clip", "ClipsViewModalNavigation"),
                            type: N.C.Primary,
                            icon: N.rb.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(N.Xa, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(B, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState,
                            pageType: this.props.pageType,
                            closeModal: this.props.closeModal
                        }), t)
                    }, t.prototype.componentWillUnmount = function() {
                        document.removeEventListener("keydown", this.onKeyDown)
                    }, t.prototype.setUpArrowListeners = function() {
                        document.addEventListener("keydown", this.onKeyDown)
                    }, t.prototype.updateClipIndex = function(e) {
                        var t = Math.max(0, e),
                            n = this.props.getClips();
                        n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(G, {
                            getClips: this.props.getClips,
                            clip: n[t],
                            clipIndex: t,
                            loadMoreClips: this.props.loadMoreClips,
                            pageType: this.props.pageType
                        })
                    }, t
                }(c.Component)),
                X = Object(m.b)("ClipsViewModalNavigation")(j);
            var F = Object(a.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        showModal: o.d,
                        closeModal: o.c
                    }, e)
                })(X),
                V = (n("ygyh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            modalView: i.View
                        }, t.setToViewState = function() {
                            t.updateClipsModalViewState(i.View)
                        }, t.updateClipsModalViewState = function(e) {
                            t.setState({
                                modalView: e
                            })
                        }, t
                    }
                    return l.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = ((e = {})["clips-modal-view"] = !0, e["clips-modal-view--wide"] = !1, e);
                        switch (this.state.modalView) {
                            case i.Report:
                                t = c.createElement(h.a, {
                                    title: Object(p.d)("Report this Clip", "ClipsViewModal"),
                                    reportContext: {
                                        contentType: g.a.Clip,
                                        contentID: this.props.clip.slug,
                                        targetUserID: this.props.clip.broadcaster && this.props.clip.broadcaster.id || "",
                                        additionalTrackingID: this.props.clip.curator && this.props.clip.curator.id || ""
                                    },
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.Delete:
                                t = c.createElement(u.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.DeleteAll:
                                t = c.createElement(u.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case i.Ban:
                            case i.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(u.b, {
                                        targetUser: {
                                            displayName: this.props.clip.curator.displayName || "",
                                            login: this.props.clip.curator.login || ""
                                        },
                                        broadcasterID: this.props.clip.broadcaster.id || "",
                                        isTemporary: this.state.modalView === i.Timeout,
                                        onClose: this.setToViewState
                                    });
                                    break
                                }
                            default:
                                t = c.createElement(F, {
                                    getClips: this.props.getClips,
                                    clip: this.props.clip,
                                    clipIndex: this.props.clipIndex,
                                    updateModalViewState: this.updateClipsModalViewState,
                                    loadMoreClips: this.props.loadMoreClips,
                                    pageType: this.props.pageType
                                }), n["clips-modal-view--wide"] = !0
                        }
                        return c.createElement(N.Xa, {
                            className: s(n)
                        }, t, c.createElement(d.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                D = Object(m.b)("ClipsViewModal")(V);
            var G = Object(a.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    showModal: o.d
                }, e)
            })(D);
            n.d(t, "a", function() {
                return G
            }), n.d(t, !1, function() {})
        },
        RFZc: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ClipsCards__User"
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
                                value: "criteria"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UserClipsInput"
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
                                        value: "clips"
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
                                            value: "criteria"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "criteria"
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
                                        }, {
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
                                                                value: "slug"
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
                                                                value: "embedURL"
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
                                                                value: "viewCount"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "language"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "curator"
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
                                                                            value: "52"
                                                                        }
                                                                    }, {
                                                                        kind: "Argument",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "height"
                                                                        },
                                                                        value: {
                                                                            kind: "IntValue",
                                                                            value: "72"
                                                                        }
                                                                    }],
                                                                    directives: []
                                                                }]
                                                            }
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
                                                                value: "thumbnailURL"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "createdAt"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "durationSeconds"
                                                            },
                                                            arguments: [],
                                                            directives: []
                                                        }, {
                                                            kind: "Field",
                                                            name: {
                                                                kind: "Name",
                                                                value: "champBadge"
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
                    end: 484
                }
            };
            n.loc.source = {
                body: "query ClipsCards__User($login: String! $limit: Int $cursor: Cursor $criteria: UserClipsInput) {\nuser(login: $login) {\nid\nclips(first: $limit after: $cursor criteria: $criteria) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nslug\nurl\nembedURL\ntitle\nviewCount\nlanguage\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\nchampBadge {\nid\n}\n}\n}\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        TVuH: function(e, t, n) {},
        WsU7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ModerationMenu_CurrentUser"
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
                                        value: "isSiteAdmin"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isStaff"
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
                    end: 75
                }
            };
            n.loc.source = {
                body: "query ModerationMenu_CurrentUser {\ncurrentUser {\nid\nisSiteAdmin\nisStaff\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        XA5B: function(e, t, n) {},
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, l = n("mrSG"),
                s = n("TSYQ"),
                c = n("q1tI"),
                p = n("/7QA"),
                d = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[d.a.Live] = "stream-type-indicator--live", i[d.a.Premiere] = "stream-type-indicator--premiere", i[d.a.Rerun] = "stream-type-indicator--rerun", i[d.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((a = {})[d.a.Premiere] = u.rb.VideoPremiere, a[d.a.Rerun] = u.rb.VideoRerun, a[d.a.WatchParty] = u.rb.VideoRerun, a),
                g = ((r = {})[d.a.Premiere] = u.sb.Live, r[d.a.Rerun] = u.sb.Inherit, r[d.a.WatchParty] = u.sb.Inherit, r),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(u.Cb, {
                            className: this.getClassNames(),
                            color: u.O.Overlay,
                            background: u.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: u.x.Small,
                            display: u.X.Flex
                        }, c.createElement(u.Xa, {
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(u.W, {
                            type: u.Tb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(u.Cb, {
                            borderRadius: u.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === d.a.Live ? c.createElement(u.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: u.X.Flex,
                            alignItems: u.f.Center
                        }, c.createElement(u.K, {
                            status: u.M.Live,
                            size: u.L.Small
                        })) : c.createElement(u.qb, {
                            asset: h[this.props.type],
                            type: g[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(p.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case d.a.Live:
                                return Object(p.d)("LIVE", "StreamTypeIndicator");
                            case d.a.Premiere:
                                return Object(p.d)("Premiere", "StreamTypeIndicator");
                            case d.a.Rerun:
                            case d.a.WatchParty:
                                return Object(p.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(c.Component);
            n.d(t, !1, function() {
                return o
            }), n.d(t, "a", function() {
                return v
            })
        },
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("GFmA"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || r.p.config.defaultStreamPreviewURL,
                                alt: this.props.clip.title
                            },
                            channelDisplayName: this.props.clip.broadcaster && this.props.clip.broadcaster.displayName || "",
                            channelLogin: this.props.clip.broadcaster && this.props.clip.broadcaster.login || "",
                            channelLinkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login : "",
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.clip.broadcaster && this.props.clip.broadcaster.profileImageURL || "",
                                alt: this.props.clip.broadcaster && this.props.clip.broadcaster.login || ""
                            },
                            gameTitle: this.props.clip.game && this.props.clip.game.name || void 0,
                            gameTitleLinkTo: this.props.clip.game ? {
                                pathname: "/directory/game/" + encodeURI(this.props.clip.game.name),
                                state: this.getLinkState()
                            } : void 0,
                            gameBoxArtImageProps: this.props.clip.game ? {
                                src: this.props.clip.game.boxArtURL || r.a.defaultBoxArtURL,
                                alt: this.props.clip.game.name
                            } : void 0,
                            datePublished: this.props.clip.createdAt,
                            viewCount: this.props.clip.viewCount,
                            durationInSeconds: this.props.clip.durationSeconds,
                            clipCreatedByChannelLogin: this.props.clip.curator && this.props.clip.curator.login || "",
                            clipCreatedByChannelLoginLinkTo: this.props.clip.curator ? "/" + this.props.clip.curator.login : ""
                        })
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component)
        },
        cRsL: function(e, t, n) {},
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
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        m493: function(e, t, n) {},
        "mHR/": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return i
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            });
            var i = function(e) {
                    return "/communities/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName/:encodedLanguage" === e
                },
                a = function(e) {
                    return "/directory/game/:encodedCommunityName/clips" === e
                },
                r = function(e) {
                    return "/communities/:encodedCommunityName/details" === e || "/directory/game/:encodedCommunityName/details" === e
                },
                o = function(e) {
                    return "/directory/game/:encodedCommunityName/videos/:filter" === e
                }
        },
        "n/Dx": function(e, t, n) {},
        nadk: function(e, t, n) {},
        uX80: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("fvjX"),
                o = n("GnwI"),
                l = n("Ue10"),
                s = (n("TVuH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectOnFocus = function(e) {
                            e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(l.Xa, i.__assign({
                            position: l.hb.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(l.hc)(this.props)), a.createElement(l.Ra, {
                            type: l.Ta.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(a.Component)),
                c = Object(r.compose)(Object(o.b)("SelectableInput"))(s)
        },
        vDRX: function(e, t, n) {},
        ygyh: function(e, t, n) {}
    }
]);