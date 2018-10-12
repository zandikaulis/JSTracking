(window.webpackJsonp = window.webpackJsonp || []).push([
    [121], {
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return p
            });
            var a = n("mrSG"),
                i = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = i.n.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    i.n.trackItemSectionClick({
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
                c = function(e) {
                    i.n.trackItemSectionClick({
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
                p = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, p, d = this;
                        return a.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return a.__awaiter(d, void 0, void 0, function() {
                                            var t;
                                            return a.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, i.o.apollo.client.query({
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
                                    return n = u.sent(), l = n.filter(function(e) {
                                        return !!e
                                    }), c = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), p = l.map(function() {
                                        return null
                                    }), i.n.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: p,
                                        location: s()
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
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "6mes": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("9C/b"),
                o = n("vRsq"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("ZDlU"),
                p = n("8/mp"),
                d = n("yR8l"),
                u = n("geRD"),
                m = n("GnwI"),
                h = n("FUtE"),
                g = n("Ue10"),
                f = (n("nadk"), n("RFZc")),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            leftEdge: 0,
                            containerWidth: 0
                        }, t.loadMoreTopClips = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                                })
                            })
                        }, t.canLoadMore = function() {
                            var e = t.props.data;
                            return !(e.loading || e.error || !e.user || !e.user.clips || !e.user.clips.pageInfo.hasNextPage)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.channelName,
                            n = e.data,
                            a = n.user,
                            r = [];
                        !n.loading && !n.error && a && a.clips && (r = a.clips.edges.map(function(e) {
                            return e.node
                        }));
                        var o = i.createElement(g.Xa, {
                            fillContent: !0
                        });
                        return o = n.error ? i.createElement(c.a, {
                            message: Object(l.d)("Error loading data.", "ChannelClipsContent")
                        }) : n.loading || a && (!a || a.clips) ? i.createElement("div", null, i.createElement(h.a, {
                            channelLogin: t,
                            clips: r,
                            isLoading: n.loading,
                            loadMoreClips: this.loadMoreTopClips,
                            timeRange: this.props.timeRange
                        }), i.createElement(p.a, {
                            loadMore: this.props.loadMore,
                            enabled: this.canLoadMore()
                        })) : i.createElement(c.a, {
                            message: Object(l.d)("User does not exist", "ChannelClipsContent")
                        }), i.createElement(g.Va, {
                            fullHeight: !0
                        }, o)
                    }, t
                }(i.Component),
                b = Object(s.compose)(Object(m.c)("ChannelClipsContent", {
                    autoReportInteractive: !0
                }), Object(d.a)(f, {
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
                        return a.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: f,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: e.data.user && e.data.user.clips && e.data.user.clips.edges.length ? e.data.user.clips.edges[e.data.user.clips.edges.length - 1].cursor : null
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = e.user && e.user.clips && n.user && n.user.clips ? Object(u.c)(e.user.clips.edges, n.user.clips.edges) : [];
                                        return {
                                            user: a.__assign({}, n.user, {
                                                clips: a.__assign({}, n.user && n.user.clips ? n.user.clips : {}, {
                                                    edges: i
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }))(v),
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(o.v)(this.props.location.search) || o.b.Week;
                        return i.createElement(b, {
                            channelName: this.props.channelName,
                            timeRange: e
                        })
                    }, t
                }(i.PureComponent),
                k = Object(r.a)(C);
            n.d(t, "ChannelClipsContentComponent", function() {
                return C
            }), n.d(t, "ChannelClipsContent", function() {
                return k
            })
        },
        "80G/": function(e, t, n) {},
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "9a8W": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        FUtE: function(e, t, n) {
            "use strict";
            var a, i = n("mrSG"),
                r = n("q1tI"),
                o = n("9C/b"),
                s = n("GFmA"),
                l = n("+GjP"),
                c = n("vRsq"),
                p = n("tuvy"),
                d = n("/MKj"),
                u = n("fvjX"),
                m = n("aCAx"),
                h = n("MdYN"),
                g = n("MLDe"),
                f = n("2xye"),
                v = n("4rCz"),
                b = n("GnwI"),
                C = n("bdIb"),
                k = n("Ue10");
            ! function(e) {
                e.AllClipsUpsell = "all-clips-upsell", e.CreateAClipUpsell = "create-clip-upsell"
            }(a || (a = {}));
            var y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.cardClickHandler = function(e, n, a) {
                            a.preventDefault(), t.props.onCardClick(e, n, function() {
                                return t.props.clips
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return 0 === this.props.clips.length ? r.createElement("div", null, this.renderEmpty()) : r.createElement(k.Va, {
                            fullWidth: !0
                        }, r.createElement(k.Tb, {
                            gutterSize: k.Vb.Small,
                            childWidth: k.Ub.Large,
                            placeholderItems: 20
                        }, this.props.clips.map(function(t, n) {
                            return r.createElement(k.Va, {
                                "data-a-target": "clips-card-" + n,
                                margin: {
                                    bottom: 2
                                },
                                key: n
                            }, Object(p.b)() || Object(p.a)() ? e.renderClipCardForPage(t, n) : e.renderClipCardForModal(t, n))
                        })))
                    }, t.prototype.renderClipCardForModal = function(e, t) {
                        return r.createElement(s.a, {
                            context: this.props.context,
                            title: e.title,
                            linkTo: e.url,
                            onClick: this.cardClickHandler.bind(this, e, t),
                            thumbnailImageProps: {
                                src: e.thumbnailURL || v.p.config.defaultStreamPreviewURL,
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
                                src: e.game.boxArtURL || v.a.defaultBoxArtURL,
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
                        return r.createElement(C.a, {
                            context: this.props.context,
                            key: "video-" + t,
                            tracking: {
                                content: f.PageviewContent.TopClips,
                                content_index: t,
                                medium: f.PageviewMedium.TopClips
                            },
                            clip: e
                        })
                    }, t.prototype.renderEmpty = function() {
                        var e = this.props.timeRange === c.b.All ? r.createElement(k.Va, {
                            "data-test-selector": a.CreateAClipUpsell
                        }, r.createElement(k.V, {
                            fontSize: k.Aa.Size4
                        }, Object(v.d)("No Clips Found", "ClipsCards")), r.createElement(k.Va, {
                            margin: 3
                        }, Object(v.d)("<x:link>Learn how</x:link> to make and share clips of this channel", {
                            "x:link": function(e) {
                                return r.createElement("a", {
                                    href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                                    target: "_blank"
                                }, e)
                            }
                        }, "ClipsCards"))) : r.createElement(k.Va, {
                            "data-test-selector": a.AllClipsUpsell
                        }, r.createElement(k.V, {
                            fontSize: k.Aa.Size4
                        }, Object(v.d)("No clips were created in this time period.", "ClipsCards"), r.createElement("br", null), Object(v.d)("Check out all popular clips from this channel instead.", "ClipsCards")), r.createElement(k.Va, {
                            margin: 3
                        }, r.createElement(k.z, {
                            type: k.F.Hollow,
                            onClick: this.props.onShowAllClipsClick
                        }, Object(v.d)("See all popular clips", "ClipCards"))));
                        return r.createElement(k.Va, {
                            fullWidth: !0
                        }, r.createElement(k.Ha, null, r.createElement(k.P, {
                            cols: 3
                        }), r.createElement(k.P, {
                            cols: 6
                        }, r.createElement(k.Va, {
                            textAlign: k.Jb.Center
                        }, e)), r.createElement(k.P, {
                            cols: 3
                        })))
                    }, t
                }(r.Component),
                w = Object(b.c)("ClipCards", {
                    autoReportInteractive: !0
                })(y);
            var _, E = Object(d.connect)(null, function(e, t) {
                    return Object.assign(Object(u.bindActionCreators)({
                        onCardClick: function(e, n, a) {
                            var i = t.context === s.b.SingleChannelList ? g.b.Channel : g.b.Game;
                            return Object(m.d)(h.a, {
                                clip: e,
                                clipIndex: n,
                                getClips: a,
                                loadMoreClips: t.loadMoreClips,
                                pageType: i
                            })
                        }
                    }, e), t)
                })(w),
                x = n("L4bB"),
                S = n("0Rl0"),
                O = n("cERj"),
                L = n("mHR/");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(_ || (_ = {}));
            var I = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.showAllClipsHandler = function() {
                            var e, n = ((e = {})[c.a] = c.b.All, e);
                            t.props.history.push(Object(l.d)(t.props.location, n))
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.channelLogin;
                        if (this.props.isLoading) {
                            for (var n = [], a = 0; a < 20; a++) n.push(r.createElement(S.a, {
                                key: a
                            }));
                            e = r.createElement(k.Tb, {
                                gutterSize: k.Vb.Small,
                                childWidth: k.Ub.Large,
                                placeholderItems: 20
                            }, n)
                        } else e = r.createElement(E, {
                            clips: this.props.clips || [],
                            context: t ? s.b.SingleChannelList : s.b.SingleGameList,
                            loadMoreClips: this.props.loadMoreClips,
                            onShowAllClipsClick: this.showAllClipsHandler,
                            timeRange: this.props.timeRange
                        });
                        var i = null;
                        if (!Object(L.a)(this.props.match.path)) {
                            var o = null;
                            t && Object(p.b)() && (o = r.createElement(O.a, {
                                channelLogin: t
                            })), i = r.createElement(k.Va, {
                                "data-test-selector": _.Filters,
                                display: k.W.Flex,
                                flexDirection: k.Y.Row,
                                fullWidth: !0,
                                margin: {
                                    bottom: 2
                                }
                            }, o, r.createElement(x.a, {
                                hideLanguageFilter: !!t
                            }))
                        }
                        return r.createElement(k.Va, {
                            fullWidth: !0
                        }, i, r.createElement("div", null, e))
                    }, t
                }(r.Component),
                V = Object(o.a)(I);
            n.d(t, !1, function() {
                return _
            }), n.d(t, !1, function() {
                return 20
            }), n.d(t, !1, function() {
                return I
            }), n.d(t, "a", function() {
                return V
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                p = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        a = e.game.toLowerCase(),
                        r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = a === l.a.CounterStrike, t)),
                        o = a === l.a.CounterStrike ? 40 : 20;
                    return i.createElement(c.Va, {
                        className: r
                    }, i.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? o / n.imageWidth : 1) + ")",
                            transformOrigin: "0 0"
                        }
                    }))
                }),
                d = n("On2s"),
                u = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return a.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(d.b)(this.props.streamMetadata, this.props.game)];
                                        case 2:
                                            if (e = n.sent()) {
                                                if (this.didUnmount) return [2];
                                                this.setState({
                                                    metadataDetails: e
                                                })
                                            }
                                            return [3, 4];
                                        case 3:
                                            return t = n.sent(), r.j.error(t, "Failed to get metadata details."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? i.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, i.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, i.createElement("div", null, i.createElement(p, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), i.createElement(c.xb, {
                            flexGrow: 1,
                            flexShrink: 1,
                            borderTop: !0,
                            padding: {
                                y: .5
                            },
                            margin: {
                                left: 1
                            },
                            display: c.W.Flex,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(i.Component));
            var m = Object(o.connect)(function(e) {
                    return {
                        leagueOfLegends: {
                            championsMap: e.directory.leagueOfLegends.championsMap
                        }
                    }
                })(u),
                h = n("5zf8"),
                g = (n("Fj9y"), function(e) {
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
                        return i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, i.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, i.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, i.createElement(c.S, a.__assign({}, e))), i.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-play-overlay",
                            alignItems: c.f.Center,
                            background: c.r.Overlay,
                            color: c.O.Overlay,
                            display: c.W.Flex,
                            justifyContent: c.Ua.Center,
                            position: c.db.Absolute,
                            attachTop: !0,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, i.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, i.createElement(c.V, null, this.props.gameChange.label)), i.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, i.createElement(c.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(i.Component)),
                f = n("0INk"),
                v = n("8/mp"),
                b = n("eJ65"),
                C = (n("vDRX"), function(e) {
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
                            Object(f.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return i.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, i.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, i.createElement(c.V, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), i.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), i.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, i.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, i.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), i.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, i.createElement(v.b, null, i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return i.createElement(g, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(i.Component)),
                k = n("kduP"),
                y = n("2xye"),
                w = function(e) {
                    return i.createElement(c.Va, null, i.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, a) {
                        return i.createElement(c.Na, {
                            key: n
                        }, i.createElement(c.T, {
                            to: {
                                pathname: Object(k.c)(t.label),
                                state: {
                                    content: y.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, _(n, a.length - 1) ? null : ", "))
                    })))
                },
                _ = function(e, t) {
                    return e === t
                },
                E = n("N0BP"),
                x = (n("XA5B"), function(e) {
                    var t = i.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, i.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, i.createElement(c.S, a.__assign({}, e.imageProps))));
                    return e.linkTo && (t = i.createElement(c.T, a.__assign({}, Object(E.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            x.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var S, O = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return i.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, i.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, i.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && i.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, i.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                L = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, i.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, i.createElement(O, a.__assign({}, e.topBar))), r = 3), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), i.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-right-selector"
                    }, e.bottomRight))
                }),
                I = (n("kF1+"), function(e) {
                    var t = e.icon && i.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, i.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? i.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, i.createElement(c.V, null, e.value)) : i.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, i.createElement(c.V, null, e.value))
                }),
                V = n("GnwI"),
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
                        }), i.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, i.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, a.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : i.createElement("div", {
                            className: n
                        }, i.createElement(c.S, a.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(i.Component)),
                N = Object(V.c)("PreviewCardThumbnail")(T),
                A = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return i.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, i.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : i.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), i.createElement("div", null, i.createElement(c.T, a.__assign({}, Object(E.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), i.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), i.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                M = n("H1ft"),
                P = n("ZbA5"),
                j = n("QVaV"),
                R = n("hyVY"),
                D = n("MXoD"),
                F = n("0LAi"),
                G = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(S || (S = {}));
            var B, U, W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        a = t ? c.nb.Unlock : c.nb.Lock;
                    return i.createElement(c.Va, null, !t && i.createElement(c.xb, {
                        background: c.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: c.ac.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: c.Jb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: c.f.Center,
                        alignContent: c.e.Center,
                        flexDirection: c.Y.Column,
                        flexWrap: c.Z.Wrap,
                        justifyContent: c.Ua.Center,
                        "data-test-selector": S.LockSelector
                    }, i.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": S.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), i.createElement(c.Va, null, i.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), i.createElement(c.xb, {
                        display: c.W.InlineFlex,
                        position: c.db.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: c.ac.Default,
                        fontSize: c.Aa.Size6,
                        background: c.r.Overlay,
                        borderRadius: c.x.Medium,
                        color: c.O.Overlay
                    }, i.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, i.createElement(c.mb, {
                        asset: a,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(i.PureComponent);
            n("5NSO");

            function H(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function z(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(B || (B = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(U || (U = {}));
            var Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(G.b)(), t.getTrackingContext = function(e) {
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
                        }, Object(E.a)(this.props)), i.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), i.createElement(c.T, {
                            to: Object(D.a)(this.getTrackingContext(y.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && i.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: H(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), i.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), i.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && i.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, i.createElement(this.props.contextualCardActionProps.component, a.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? i.createElement(L, {
                            topLeft: i.createElement(P.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(I, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : H(this.props) ? i.createElement(L, {
                            topLeft: void 0 !== this.props.durationInSeconds && i.createElement(I, {
                                value: Object(R.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && i.createElement(I, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: i.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(I, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : z(this.props) ? i.createElement(L, {
                            topLeft: i.createElement(I, {
                                value: Object(R.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: i.createElement(I, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: i.createElement(I, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return H(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return H(this.props) || z(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === U.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? i.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(x, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(y.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": B.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === U.SingleGameList || this.props.context === U.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? i.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, i.createElement(x, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(D.a)(this.getTrackingContext(y.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": B.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(j.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(D.a)(this.getTrackingContext(y.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), z(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : H(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== U.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(D.a)(this.getTrackingContext(y.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), i.createElement(i.Fragment, null, i.createElement(A, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(D.a)(this.getTrackingContext(y.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? i.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, i.createElement(F.a, a.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return i.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, i.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return H(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? i.createElement(W, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!H(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === M.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, a) {
                        switch (e) {
                            case M.a.Balloon:
                                return i.createElement(C, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: a
                                });
                            case M.a.Inline:
                                return i.createElement(w, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case M.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(i.Component),
                q = Object(V.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(Y);
            n.d(t, !1, function() {
                return B
            }), n.d(t, "b", function() {
                return U
            }), n.d(t, !1, function() {
                return Y
            }), n.d(t, "a", function() {
                return q
            })
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "e", function() {
                return s
            }), n.d(t, "f", function() {
                return l
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "i", function() {
                return p
            }), n.d(t, "j", function() {
                return d
            }), n.d(t, "k", function() {
                return u
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            });
            var a = "directory.LANGUAGE_TAGS_UPDATED",
                i = "directory.LOL_CHAMPIONS_CHANGED",
                r = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function p(e) {
                return {
                    type: a,
                    languageTags: e
                }
            }

            function d(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function u(e) {
                return {
                    type: r,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function m(e) {
                var t = {},
                    n = e.data;
                for (var a in n) n.hasOwnProperty(a) && (t[n[a].id] = n[a]);
                return {
                    type: i,
                    apiData: e,
                    championsMap: t,
                    apiVersion: e.version
                }
            }

            function h(e, t) {
                return {
                    type: s,
                    addedTag: e,
                    categoryName: t
                }
            }

            function g(e, t) {
                return {
                    type: c,
                    categoryName: t,
                    removedTag: e
                }
            }
        },
        MdYN: function(e, t, n) {
            "use strict";
            var a, i = n("/MKj"),
                r = n("fvjX"),
                o = n("aCAx"),
                s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                p = n("/7QA"),
                d = n("cZKs"),
                u = n("jsEL"),
                m = n("GnwI"),
                h = n("/HY+"),
                g = n("4qQ0"),
                f = n("8Ad5"),
                v = n("2iEm"),
                b = n("u5aL"),
                C = n("uX80"),
                k = n("wbMx"),
                y = n("Jxh/"),
                w = n("kduP"),
                _ = n("f00E"),
                E = n("vhpE"),
                x = n("bq0i"),
                S = n("yR8l"),
                O = n("4rCz"),
                L = n("ndwU");
            ! function(e) {
                e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
            }(a || (a = {}));
            var I = n("Ue10"),
                V = n("WsU7"),
                T = [a.Delete, a.DeleteAll],
                N = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.clipsMaintenance = Object(L.a)(), n.renderMenuItem = function(e) {
                            var t = n.menuData.get(e);
                            return e && t ? c.createElement(I.Sa, {
                                key: t.display,
                                onClick: t.destinationHandler,
                                "data-a-target": "clip-moderation-button-" + t.display,
                                disabled: n.clipsMaintenance && T.includes(e)
                            }, c.createElement(I.Va, {
                                padding: {
                                    x: 1,
                                    y: .5
                                }
                            }, t.display)) : null
                        }, n.menuData = new Map([
                            [a.Report, {
                                display: Object(O.d)("Report", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(a.Report)
                                }
                            }],
                            [a.Delete, {
                                display: Object(O.d)("Delete", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(a.Delete)
                                }
                            }],
                            [a.DeleteAll, {
                                display: Object(O.d)("Delete All Clips from Video", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(a.DeleteAll)
                                }
                            }],
                            [a.Ban, {
                                display: Object(O.d)("Ban User", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(a.Ban)
                                }
                            }],
                            [a.Timeout, {
                                display: Object(O.d)("Timeout User (24 hr)", "ModerationMenu"),
                                destinationHandler: function() {
                                    return n.props.updateModalViewState(a.Timeout)
                                }
                            }]
                        ]), n
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this.props.data,
                            t = this.props.clip;
                        if (!e || !e.currentUser) return null;
                        var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                            i = !!t.curator && e.currentUser.id === t.curator.id,
                            r = !!t.broadcaster && e.currentUser.id === t.broadcaster.id,
                            o = i || r || n,
                            s = r || n,
                            l = [a.Report];
                        return o && l.push(a.Delete), s && (l.push(a.DeleteAll), t.curator && t.broadcaster && (l.push(a.Ban), l.push(a.Timeout))), c.createElement(I.Va, {
                            className: "moderation-menu"
                        }, c.createElement(x.a, null, c.createElement(I.z, {
                            type: I.F.Hollow,
                            icon: I.nb.More,
                            ariaLabel: Object(O.d)("More Options", "ModerationMenu"),
                            "data-a-target": "moderation-menu-button"
                        }), c.createElement(I.u, {
                            direction: I.v.TopRight
                        }, c.createElement(I.Va, {
                            padding: {
                                y: .5
                            }
                        }, this.moderationMenuRender(l)))))
                    }, t.prototype.moderationMenuRender = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.renderMenuItem(e)
                        })
                    }, t = s.__decorate([Object(S.a)(V), Object(m.c)("ModerationMenu")], t)
                }(c.Component),
                A = n("MLDe"),
                M = (n("n/Dx"), 2e3),
                P = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isShowingBalloon: !1,
                            playerRefID: Object(_.a)()
                        }, t.timeoutID = null, t.copyClipURL = function() {
                            var e;
                            try {
                                e = Object(y.a)(t.props.clip.url)
                            } catch (e) {
                                return void p.j.warn("Failed to copy", e)
                            }
                            e && (t.setState({
                                isShowingBalloon: !0
                            }), t.timeoutID = setTimeout(function() {
                                t.setState({
                                    isShowingBalloon: !1
                                })
                            }, M), Object(A.c)(t.props.clip.id, t.props.clip.game && t.props.clip.game.name, t.props.clip.broadcaster && t.props.clip.broadcaster.id, t.props.clip.broadcaster && t.props.clip.broadcaster.login, t.props.pageType)(k.b.CopyInput))
                        }, t.dismissBalloon = function() {
                            t.setState({
                                isShowingBalloon: !1
                            }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.reportPlayerInstanceStarted(this.state.playerRefID)
                    }, t.prototype.render = function() {
                        var e, t = this.props.clip.broadcaster && c.createElement(v.a, {
                            to: "/" + this.props.clip.broadcaster.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-broadcaster-link"
                        }, this.props.clip.broadcaster.login);
                        return e = this.props.clip.game && t ? Object(p.d)("{broadcaster} playing {game}", {
                            broadcaster: t,
                            game: c.createElement(v.a, {
                                to: "" + Object(w.c)(this.props.clip.game.name),
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-game-link"
                            }, this.props.clip.game.name)
                        }, "ClipsViewModalContent") : t, c.createElement(I.xb, {
                            className: "clips-view-modal-content",
                            background: I.r.Base
                        }, c.createElement(I.Va, {
                            padding: {
                                bottom: 2
                            }
                        }, c.createElement(I.o, {
                            ratio: I.p.Aspect16x9
                        }, c.createElement("iframe", {
                            src: this.props.clip.embedURL,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0
                        }))), c.createElement(I.Va, {
                            padding: {
                                x: 2,
                                bottom: 2
                            }
                        }, c.createElement(I.Va, {
                            display: I.W.Flex,
                            flexWrap: I.Z.NoWrap
                        }, c.createElement(I.Va, {
                            flexGrow: 1,
                            margin: {
                                right: 1
                            }
                        }, c.createElement(b.a, {
                            onClickOut: this.dismissBalloon
                        }, c.createElement(C.a, {
                            text: this.props.clip.url,
                            icon: !0,
                            iconAsset: I.nb.Link,
                            onSelection: this.copyClipURL,
                            "data-a-target": "clip-share-input"
                        }, c.createElement(I.u, {
                            show: this.state.isShowingBalloon,
                            direction: I.v.TopRight
                        }, c.createElement(I.Sa, {
                            onClick: this.dismissBalloon
                        }, c.createElement(I.Va, {
                            padding: 1
                        }, c.createElement(I.V, {
                            bold: !0
                        }, Object(p.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), c.createElement(E.a, {
                            clip: this.props.clip,
                            pageType: this.props.pageType
                        }), c.createElement(N, {
                            clip: this.props.clip,
                            updateModalViewState: this.props.updateModalViewState
                        }))), c.createElement(I.Va, {
                            padding: {
                                x: 2,
                                bottom: 2
                            },
                            display: I.W.Flex,
                            flexWrap: I.Z.NoWrap,
                            justifyContent: I.Ua.Between,
                            fullWidth: !0,
                            overflow: I.Ya.Hidden
                        }, c.createElement(I.Va, {
                            flexGrow: 1,
                            ellipsis: !0
                        }, c.createElement(I.Na, {
                            ellipsis: !0
                        }, c.createElement(I.xb, {
                            display: I.W.Flex,
                            fontSize: I.Aa.Size5
                        }, c.createElement(I.Va, {
                            ellipsis: !0
                        }, this.props.clip.title), c.createElement(I.Va, {
                            flexShrink: 0
                        }, c.createElement(I.V, {
                            type: I.Nb.Span,
                            color: I.O.Alt2
                        }, " • ", Object(p.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsViewModalContent"))))), c.createElement(I.Na, {
                            ellipsis: !0
                        }, c.createElement(I.xb, {
                            color: I.O.Alt2
                        }, e, e && !!this.props.clip.curator && c.createElement("span", null, " • "), this.props.clip.curator && Object(p.d)("Clipped by {curator}", {
                            curator: c.createElement(v.a, {
                                to: "/" + this.props.clip.curator.login,
                                onClick: this.props.closeModal,
                                "data-a-target": "clip-modal-curator-link"
                            }, this.props.clip.curator.login)
                        }, "ClipsViewModalContent")))), c.createElement(I.xb, {
                            display: I.W.Flex,
                            padding: {
                                bottom: 2,
                                left: 2
                            },
                            fontSize: I.Aa.Size5,
                            color: I.O.Alt2,
                            flexShrink: 0
                        }, c.createElement(I.Va, {
                            margin: {
                                right: .5
                            },
                            alignItems: I.f.Center,
                            display: I.W.Flex
                        }, c.createElement(I.mb, {
                            asset: I.nb.GlyphViews
                        })), Object(p.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsViewModalContent"))))
                    }, t = s.__decorate([Object(m.c)("ClipsViewModalContent")], t)
                }(c.Component),
                j = n("S1Za");
            var R = Object(i.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        reportPlayerInstanceStarted: j.b
                    }, e)
                })(P),
                D = (n("9a8W"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onKeyDown = function(e) {
                            var n = e.charCode || e.keyCode;
                            n === f.a.Left ? t.updateClipBackward() : n === f.a.Right && t.updateClipForward()
                        }, t.updateClipForward = function() {
                            t.updateClipIndex(t.props.clipIndex + 1)
                        }, t.updateClipBackward = function() {
                            t.updateClipIndex(t.props.clipIndex - 1)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = null;
                        this.props.clipIndex > 0 && (e = c.createElement(I.Va, {
                            position: I.db.Absolute,
                            display: I.W.Flex,
                            alignItems: I.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--left"
                        }, c.createElement(I.A, {
                            ariaLabel: Object(p.d)("Previous clip", "ClipsViewModalNavigation"),
                            type: I.C.Primary,
                            icon: I.nb.AngleLeft,
                            onClick: this.updateClipBackward,
                            "data-test-selector": "clips-view-modal-navigation-back"
                        })));
                        var n = this.props.getClips();
                        return this.props.loadMoreClips && n.length - this.props.clipIndex < 4 && this.props.loadMoreClips(), this.props.clipIndex < n.length - 1 && (t = c.createElement(I.Va, {
                            position: I.db.Absolute,
                            display: I.W.Flex,
                            alignItems: I.f.Stretch,
                            className: "clip-carousel-button clip-carousel-button--right"
                        }, c.createElement(I.A, {
                            ariaLabel: Object(p.d)("Next clip", "ClipsViewModalNavigation"),
                            type: I.C.Primary,
                            icon: I.nb.AngleRight,
                            onClick: this.updateClipForward,
                            "data-test-selector": "clips-view-modal-navigation-forward"
                        }))), c.createElement(I.Va, {
                            className: "clips-view-modal-navigation"
                        }, e, c.createElement(R, {
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
                        n.length - t < 4 && this.props.loadMoreClips && this.props.loadMoreClips(), t < n.length && this.props.showModal(W, {
                            getClips: this.props.getClips,
                            clip: n[t],
                            clipIndex: t,
                            loadMoreClips: this.props.loadMoreClips,
                            pageType: this.props.pageType
                        })
                    }, t
                }(c.Component)),
                F = Object(m.c)("ClipsViewModalNavigation")(D);
            var G = Object(i.connect)(null, function(e) {
                    return Object(r.bindActionCreators)({
                        showModal: o.d,
                        closeModal: o.c
                    }, e)
                })(F),
                B = (n("ygyh"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            modalView: a.View
                        }, t.setToViewState = function() {
                            t.updateClipsModalViewState(a.View)
                        }, t.updateClipsModalViewState = function(e) {
                            t.setState({
                                modalView: e
                            })
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e, t, n = ((e = {})["clips-modal-view"] = !0, e["clips-modal-view--wide"] = !1, e);
                        switch (this.state.modalView) {
                            case a.Report:
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
                            case a.Delete:
                                t = c.createElement(u.d, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case a.DeleteAll:
                                t = c.createElement(u.e, {
                                    slug: this.props.clip.slug,
                                    onClose: this.setToViewState
                                });
                                break;
                            case a.Ban:
                            case a.Timeout:
                                if (this.props.clip.curator && this.props.clip.broadcaster) {
                                    t = c.createElement(u.b, {
                                        targetUser: {
                                            displayName: this.props.clip.curator.displayName || "",
                                            login: this.props.clip.curator.login || ""
                                        },
                                        broadcasterID: this.props.clip.broadcaster.id || "",
                                        isTemporary: this.state.modalView === a.Timeout,
                                        onClose: this.setToViewState
                                    });
                                    break
                                }
                            default:
                                t = c.createElement(G, {
                                    getClips: this.props.getClips,
                                    clip: this.props.clip,
                                    clipIndex: this.props.clipIndex,
                                    updateModalViewState: this.updateClipsModalViewState,
                                    loadMoreClips: this.props.loadMoreClips,
                                    pageType: this.props.pageType
                                }), n["clips-modal-view--wide"] = !0
                        }
                        return c.createElement(I.Va, {
                            className: l(n)
                        }, t, c.createElement(d.a, {
                            closeOnBackdropClick: !0,
                            closeOnPageNavigation: !0
                        }))
                    }, t
                }(c.Component)),
                U = Object(m.c)("ClipsViewModal")(B);
            var W = Object(i.connect)(null, function(e) {
                return Object(r.bindActionCreators)({
                    showModal: o.d
                }, e)
            })(U);
            n.d(t, "a", function() {
                return W
            }), n.d(t, !1, function() {})
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return v
            });
            var a, i = n("mrSG"),
                r = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                c = n.n(l),
                p = n("6H22"),
                d = n.n(p),
                u = n("X7a7"),
                m = n("YhoA"),
                h = n("Pcnk"),
                g = n("mz1O"),
                f = r.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(a || (a = {}));
            var v = function(e, t) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var n, a, o, s, l, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = t.toLowerCase(), a = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, a && n === m.a.CounterStrike ? [4, b(a)] : [3, 2];
                                case 1:
                                    return [2, i.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, C(o)] : [3, 4];
                                case 3:
                                    return [2, i.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, k(l)] : [3, 6];
                                case 5:
                                    return [2, i.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = r.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, y(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else r.o.store.dispatch(Object(u.b)());
                                    i.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                b = function(e) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                                case 1:
                                    return t = i.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.CSGOSkillGroup),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: s.a
                                        }
                                    }];
                                case 2:
                                    return a = i.sent(), f.error(a, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                                case 1:
                                    return t = i.sent(), n = {}, t[0].Class.forEach(function(e) {
                                        n[e.class] = e
                                    }), [2, {
                                        name: n[e].display_name,
                                        label: Object(h.b)(h.a.HearthstoneClass),
                                        spriteDetails: {
                                            imageWidth: n[e].image_width,
                                            imageHeight: n[e].image_height,
                                            spriteOffsetX: n[e].sprite_x_offset,
                                            spriteOffsetY: n[e].sprite_y_offset,
                                            spriteURL: c.a
                                        }
                                    }];
                                case 2:
                                    return a = i.sent(), f.error(a, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                k = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, a, r, o, s, l, c, p, u, m, v;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = i.sent(), a = void 0, r = 0, o = n; r < o.length; r++)
                                        for (s in a = o[r])
                                            if (a.hasOwnProperty(s))
                                                for (l = a[s], c = 0, p = l; c < p.length; c++)
                                                    if ((u = p[c]).character === e) return (t = {})[u.character] = u, [2, {
                                                        name: (m = t)[e].display_name,
                                                        label: Object(h.b)(h.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: m[e].image_width,
                                                            imageHeight: m[e].image_height,
                                                            spriteOffsetX: m[e].sprite_x_offset,
                                                            spriteOffsetY: m[e].sprite_y_offset,
                                                            spriteURL: d.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return v = i.sent(), f.error(v, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e, t, n) {
                    if (!t || !e) return null;
                    var a = t[e],
                        i = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + a.image.sprite;
                    return {
                        name: a.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: a.image.w,
                            imageHeight: a.image.h,
                            spriteOffsetX: a.image.x,
                            spriteOffsetY: a.image.y,
                            spriteURL: i
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return r
            });
            var a, i = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(a || (a = {}));
            var r = function(e) {
                switch (e) {
                    case a.CSGOMap:
                        return Object(i.d)("Map", "CSGOMapFilter");
                    case a.CSGOSkillGroup:
                        return Object(i.d)("Rank", "CSGORankFilter");
                    case a.HearthstoneClass:
                        return Object(i.d)("Class", "HearthstoneClassFilter");
                    case a.HearthstoneMode:
                        return Object(i.d)("Mode", "HearthstoneModeFilter");
                    case a.LeagueChampion:
                        return Object(i.d)("Champion", "LeagueFilter");
                    case a.OverwatchCharacter:
                        return Object(i.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
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
        X7a7: function(e, t, n) {
            "use strict";
            var a = n("mrSG"),
                i = n("cr+I"),
                r = n("/7QA"),
                o = n("b6Yk"),
                s = {
                    en: "en_US",
                    de: "de_DE",
                    es: "es_ES",
                    "es-mx": "es_ES",
                    fr: "fr_FR",
                    it: "it_IT",
                    hu: "hu_HU",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    "pt-br": "pt_BR",
                    vi: "vn_VN",
                    tr: "tr_TR",
                    ro: "ro_RO",
                    cs: "cs_CZ",
                    el: "el_GR",
                    ru: "ru_RU",
                    th: "th_TH",
                    "zh-cn": "zh_CN",
                    "zh-tw": "zh_TW",
                    ja: "ja_JP",
                    ko: "ko_KR"
                },
                l = function(e) {
                    return e && s[e] || "en_US"
                },
                c = n("Igt5");
            n.d(t, "b", function() {
                return m
            }), n.d(t, "d", function() {
                return h
            }), n.d(t, "c", function() {
                return g
            }), n.d(t, "a", function() {
                return f
            });
            var p = "languageTags",
                d = 0,
                u = 350;

            function m() {
                var e = this;
                return function(t) {
                    clearTimeout(d), d = setTimeout(function() {
                        return a.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, p, d, u;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), p = o.a.getAPIURL("/api/lol/champions?" + i.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(p)];
                                    case 2:
                                        return (d = a.sent()).body ? t(Object(c.l)(d.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw u = a.sent(), t(Object(c.j)(!0)), e.error(u, "Failed to load LoL champion data"), u;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, u)
                }
            }

            function h(e, t) {
                var n = this;
                return function(i) {
                    return a.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return a.__generator(this, function(a) {
                            return n = new Set(f()), t ? n.add(e) : n.delete(e), o = Array.from(n), r.l.set(p, o), i(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return a.__awaiter(t, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            return r.l.set(p, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function f() {
                return r.l.get(p, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", function() {
                    return a
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(a || (a = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var a, i, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                p = n("/7QA"),
                d = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((a = {})[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
                h = ((i = {})[d.a.Premiere] = u.nb.VideoPremiere, i[d.a.Rerun] = u.nb.VideoRerun, i[d.a.WatchParty] = u.nb.VideoRerun, i),
                g = ((r = {})[d.a.Premiere] = u.ob.Live, r[d.a.Rerun] = u.ob.Inherit, r[d.a.WatchParty] = u.ob.Inherit, r),
                f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(u.xb, {
                            className: this.getClassNames(),
                            color: u.O.Overlay,
                            background: u.r.Overlay,
                            padding: {
                                x: .5
                            },
                            borderRadius: u.x.Small,
                            display: u.W.Flex
                        }, c.createElement(u.Va, {
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            margin: {
                                right: .5
                            }
                        }, this.getIcon()), c.createElement(u.V, {
                            type: u.Nb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(u.xb, {
                            borderRadius: u.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === d.a.Live ? c.createElement(u.Va, {
                            className: "stream-type-indicator__live-wrapper",
                            display: u.W.Flex,
                            alignItems: u.f.Center
                        }, c.createElement(u.K, {
                            status: u.M.Live,
                            size: u.L.Small
                        })) : c.createElement(u.mb, {
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
                return f
            })
        },
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("/7QA"),
                o = n("GFmA"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return i.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || r.o.config.defaultStreamPreviewURL,
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
                }(i.Component)
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
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        "mHR/": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return a
            }), n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            });
            var a = function(e) {
                    return "/communities/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName" === e || "/directory/game/:encodedCommunityName/:encodedLanguage" === e
                },
                i = function(e) {
                    return "/directory/game/:encodedCommunityName/clips" === e
                },
                r = function(e) {
                    return "/communities/:encodedCommunityName/details" === e || "/directory/game/:encodedCommunityName/details" === e
                },
                o = function(e) {
                    return "/directory/game/:encodedCommunityName/videos/:filter" === e
                }
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var a = n("mrSG"),
                i = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(172).then(function() {
                                        var e = n("vrl6");
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
                r = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(171).then(function() {
                                        var e = n("+4ZJ");
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(170).then(function() {
                                        var e = n("nSs0");
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(169).then(function() {
                                        var e = n("1Bro");
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
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(168).then(function() {
                                        var e = n("Dpq/");
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
                c = function() {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, n.e(167).then(function() {
                                        var e = n("bVYI");
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
        "n/Dx": function(e, t, n) {},
        nadk: function(e, t, n) {},
        uX80: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var a = n("mrSG"),
                i = n("q1tI"),
                r = n("fvjX"),
                o = n("GnwI"),
                s = n("Ue10"),
                l = (n("TVuH"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.selectOnFocus = function(e) {
                            e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return i.createElement(s.Va, a.__assign({
                            position: s.db.Relative,
                            className: "selectable-input-wrapper"
                        }, Object(s.bc)(this.props)), i.createElement(s.Pa, {
                            type: s.Ra.Text,
                            value: this.props.text,
                            readOnly: !0,
                            onFocus: this.selectOnFocus,
                            icon: this.props.iconAsset,
                            id: this.props.id
                        }), this.props.children)
                    }, t
                }(i.Component)),
                c = Object(r.compose)(Object(o.c)("SelectableInput"))(l)
        },
        vDRX: function(e, t, n) {},
        ygyh: function(e, t, n) {}
    }
]);