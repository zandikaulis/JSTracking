webpackJsonp([43], {
    1017: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return m
        });
        var i = n(0),
            a = n(4),
            r = (n.n(a), n(1)),
            o = (n.n(r), n(11)),
            s = n(29),
            l = n(54),
            c = n(854),
            d = n(3),
            u = n(1018),
            p = (n.n(u), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.scrollAreaRef = null, t.onHistoryChange = function(e) {
                        null !== t.scrollAreaRef && e.pathname !== t.currentPath && t.scrollAreaRef.scrollToTop(), t.currentPath = e.pathname
                    }, t.scrollRefHandler = function(e) {
                        t.scrollAreaRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return r.createElement(d.U, i.__assign({
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        flexWrap: d.K.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), r.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    }), r.createElement(s.b, {
                        className: e,
                        scrollRef: this.scrollRefHandler
                    }, r.createElement(d.U, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children)));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t
            }(r.Component)),
            m = Object(o.f)(p)
    },
    1018: function(e, t) {},
    1020: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(62),
            o = n(3),
            s = function() {
                return i.createElement(r.a, {
                    message: Object(a.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.U, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(a.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    1022: function(e, t, n) {
        "use strict";

        function i(e, t) {
            void 0 === t && (t = o);
            var n = r.__assign({}, o, t),
                i = '<iframe src="' + e + '" frameborder="0" ' + (n.allowFullscreen ? 'allowfullscreen="true" ' : "") + (n.allowScrolling ? "" : 'scrolling="no" ') + 'height="' + n.height + '" width="' + n.width + '"></iframe>';
            return n.textLink && (i += a(n.textLink.url, n.textLink.text)), i
        }

        function a(e, t) {
            return '<a href="' + e + '" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">' + t + "</a>"
        }
        t.a = i;
        var r = n(0),
            o = {
                height: 378,
                width: 620,
                allowScrolling: !0,
                allowFullscreen: !0
            }
    },
    1064: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(3),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClickHandler = function(e) {
                        t.props.onClick && t.props.onClick(), e.currentTarget.select()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.Q, {
                        readOnly: !0,
                        type: r.R.Text,
                        value: this.props.value,
                        onClick: this.handleClickHandler
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    1073: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case r.a.Archive:
                    return o.SpadeVideoBroadcastType.Archive;
                case r.a.Highlight:
                    return o.SpadeVideoBroadcastType.Highlight;
                case r.a.Upload:
                    return o.SpadeVideoBroadcastType.Upload;
                case r.a.WatchParty:
                    return o.SpadeVideoBroadcastType.WatchParty;
                case r.a.PastPremiere:
                    return o.SpadeVideoBroadcastType.PastPremiere;
                case r.a.PremiereUpload:
                    return o.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        }

        function a(e) {
            switch (e) {
                case s.b:
                    return o.PageviewContent.PopularVideos;
                case s.a:
                    return o.PageviewContent.RecentVideos;
                default:
                    return e
            }
        }
        t.b = i, t.a = a;
        var r = n(251),
            o = n(13),
            s = n(820)
    },
    1076: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return o
        });
        var i = "BROADCAST_TYPE_ALL",
            a = "broadcaster_id",
            r = "BROADCAST_LENGTH_ANY",
            o = "BROADCAST_SORT_POPULAR"
    },
    1077: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return v
        });
        var i, a = n(0),
            r = n(20),
            o = (n.n(r), n(1)),
            s = (n.n(o), n(2)),
            l = n(1064),
            c = n(969),
            d = n(60),
            u = n(1022),
            p = n(13),
            m = n(822),
            h = n(806),
            g = n(1078),
            f = n(3),
            b = "collection-link";
        ! function(e) {
            e.Embed = "option_embed", e.Link = "option_link", e.Twitter = "twitter", e.Reddit = "reddit", e.VKontakte = "vk", e.Facebook = "fb", e.Copy = "link", e.Unknown = ""
        }(i || (i = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        timestampToShare: null
                    }, t.getVideoEmbedCode = function() {
                        if (!t.props.video) return "";
                        var e, n = t.props.video.owner ? t.props.video.owner.displayName : null,
                            i = t.props.video.title,
                            a = null !== t.state.timestampToShare ? t.state.timestampToShare : void 0,
                            r = _(t.props.video.id, a),
                            o = t.getVideoEmbedLink();
                        return e = n && i ? Object(s.d)("Watch {title} from {displayName} on www.twitch.tv", {
                            displayName: n,
                            title: i
                        }, "VideoShareBox") : n && !i ? Object(s.d)("Watch video from {displayName} on www.twitch.tv", {
                            displayName: n
                        }, "VideoShareBox") : !n && i ? Object(s.d)("Watch {title} on www.twitch.tv", {
                            title: i
                        }, "VideoShareBox") : Object(s.d)("Watch on www.twitch.tv", "VideoShareBox"), Object(u.a)(r, {
                            textLink: {
                                url: o,
                                text: e
                            },
                            allowScrolling: !1,
                            allowFullscreen: !0
                        })
                    }, t.getVideoEmbedLink = function() {
                        return t.props.video ? S(t.props.video.id, {
                            tt_medium: p.PageviewMedium.VideoEmbed,
                            tt_content: p.PageviewContent.TextLink,
                            t: t.state.timestampToShare ? Object(h.b)(t.state.timestampToShare) : void 0
                        }) : ""
                    }, t.getVideoLink = function() {
                        if (!t.props.video) return "";
                        var e = {
                            collection: t.props.collectionID ? t.props.collectionID : void 0,
                            t: t.state.timestampToShare ? Object(h.b)(t.state.timestampToShare) : void 0
                        };
                        return S(t.props.video.id, e)
                    }, t.renderCollectionLink = function() {
                        if (t.props.collectionID && "" !== t.props.collectionID && t.props.video) return o.createElement(f.U, {
                            padding: {
                                top: 1
                            },
                            "data-test-selector": b
                        }, o.createElement(f._21, null, Object(s.d)("Collection Link", "VideoShareBox")), o.createElement(l.a, {
                            value: k(t.props.collectionID),
                            onClick: t.onShareClickCollectionLinkHandler
                        }))
                    }, t.onShareClickEmbedHandler = function() {
                        t.props.onShareClick({
                            shareTrackingType: g.a.Video,
                            sharePlatform: i.Embed,
                            shareURL: t.getVideoEmbedLink()
                        })
                    }, t.onShareClickCollectionLinkHandler = function() {
                        t.props.collectionID && "" !== t.props.collectionID ? t.props.onShareClick({
                            shareTrackingType: g.a.Collection,
                            sharePlatform: i.Link,
                            collectionID: t.props.collectionID,
                            shareURL: k(t.props.collectionID)
                        }) : s.i.withCategory("video-share-box").error(new Error("Expected a collection ID for collection share link, got " + t.props.collectionID), "Expected a collection ID for collection share link, got " + t.props.collectionID)
                    }, t.onShareClickVideoLinkHandler = function() {
                        var e = {
                            shareTrackingType: g.a.Video,
                            sharePlatform: i.Link,
                            shareURL: t.getVideoLink()
                        };
                        t.props.collectionID && (e.collectionID = t.props.collectionID), t.props.onShareClick(e)
                    }, t.onShareClickSocialHandler = function(e) {
                        t.props.onShareClick({
                            shareTrackingType: g.a.Video,
                            sharePlatform: y(e),
                            shareURL: t.getVideoLink()
                        })
                    }, t.onShareTimestampClick = function() {
                        t.setState({
                            timestampToShare: null === t.state.timestampToShare ? t.props.lastVideoOffset || 0 : null
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.getVideoLink(),
                        n = Object(m.u)(null !== this.state.timestampToShare ? this.state.timestampToShare : this.props.lastVideoOffset || 0);
                    return o.createElement(d.a, null, o.createElement(f.u, {
                        type: this.props.buttonType,
                        "data-test-selector": "dropdown-button"
                    }, Object(s.d)("Share", "VideoShareBox")), this.props.video ? o.createElement(f.p, {
                        direction: this.props.balloonDirection,
                        size: f.r.Small
                    }, o.createElement(f.U, {
                        padding: 1
                    }, o.createElement(f.U, {
                        display: f.H.Flex,
                        justifyContent: f.T.Between
                    }, C.map(function(n) {
                        return o.createElement(c.a, {
                            key: n.type,
                            onShareClick: e.onShareClickSocialHandler,
                            type: n.type,
                            text: e.props.video.title,
                            "data-test-selector": n.selector,
                            url: t
                        })
                    })), this.renderCollectionLink(), o.createElement(f.U, {
                        "data-test-selector": "video-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(f._21, null, Object(s.d)("Video Link", "VideoShareBox")), o.createElement(l.a, {
                        value: t,
                        onClick: this.onShareClickVideoLinkHandler
                    }), void 0 !== this.props.lastVideoOffset && o.createElement(f.U, {
                        padding: {
                            top: .5
                        }
                    }, o.createElement(f.E, {
                        id: "video-share-timestamp-toggle",
                        label: Object(s.d)("Skip to {deeplinkTimestamp}", {
                            deeplinkTimestamp: n
                        }, "VideoShareBox"),
                        "data-a-target": "video-share-timestamp-toggle",
                        "data-test-selector": "video-share-timestamp-selector",
                        "data-a-value": null !== this.state.timestampToShare,
                        checked: null !== this.state.timestampToShare,
                        onChange: this.onShareTimestampClick
                    }))), o.createElement(f.U, {
                        "data-test-selector": "embed-link",
                        padding: {
                            top: 1
                        }
                    }, o.createElement(f._21, null, Object(s.d)("Embed Video", "VideoShareBox")), o.createElement(l.a, {
                        value: this.getVideoEmbedCode(),
                        onClick: this.onShareClickEmbedHandler
                    })))) : o.createElement(f.p, null))
                }, t
            }(o.Component),
            y = function(e) {
                switch (e) {
                    case c.b.Twitter:
                        return i.Twitter;
                    case c.b.Reddit:
                        return i.Reddit;
                    case c.b.VKontakte:
                        return i.VKontakte;
                    case c.b.Facebook:
                        return i.Facebook;
                    case c.b.Copy:
                        return i.Copy;
                    default:
                        return s.i.withCategory("video-share-box").error(new Error("Unknown social button type: " + e), "Unknown social button type: " + e), i.Unknown
                }
            },
            k = function(e) {
                return new URL("https://www.twitch.tv/collections/" + e).toString()
            },
            S = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                return t && (n.search = r.stringify(t)), n.toString()
            },
            _ = function(e, t) {
                return "https://player.twitch.tv/?" + r.stringify({
                    video: "v" + e,
                    autoplay: !1,
                    t: t ? Object(h.b)(t) : void 0
                })
            },
            C = [{
                type: c.b.Twitter,
                selector: "twitter-button"
            }, {
                type: c.b.Facebook,
                selector: "fb-button"
            }, {
                type: c.b.VKontakte,
                selector: "vk-button"
            }, {
                type: c.b.Reddit,
                selector: "reddit-button"
            }, {
                type: c.b.Copy,
                selector: "copy-link-button"
            }]
    },
    1078: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return {
                id: e.id,
                owner: t.owner || null,
                broadcastType: t.broadcastType,
                game: t.game
            }
        }
        n.d(t, "a", function() {
            return a
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "b", function() {
            return p
        });
        var a, r = n(0),
            o = n(2),
            s = n(13),
            l = n(129),
            c = n(1359),
            d = (n.n(c), this);
        ! function(e) {
            e.Video = "video", e.Collection = "collection"
        }(a || (a = {}));
        var u = function(e, t, n) {
                return r.__awaiter(d, void 0, void 0, function() {
                    var a, d, p, m;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) return [2];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return a = r.sent().data, d = i(e, a.video), p = {
                                    channel: d.owner ? d.owner.login : null,
                                    channel_id: d.owner ? Number(d.owner.id) : null,
                                    game: d.game ? d.game.name : null,
                                    partner: !!d.owner && d.owner.roles.isPartner,
                                    location: s.PageviewLocation.VideoWatchPage,
                                    share_context: t.collectionID ? s.ShareItemContext.Collection : null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: d.id,
                                    shared_item_type: Object(l.a)(d.broadcastType),
                                    shared_item_url: t.shareURL,
                                    source_item_id: d.id,
                                    source_item_type: Object(l.a)(d.broadcastType)
                                }, o.n.tracking.track(s.SpadeEventType.ShareItem, p), [3, 4];
                            case 3:
                                return m = r.sent(), o.i.error(m.toString(), u.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            p = function(e, t, n) {
                return r.__awaiter(d, void 0, void 0, function() {
                    var a, d, u, m;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e || !t.collectionID) return [2];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, n.query({
                                    query: c,
                                    variables: {
                                        videoID: e.id
                                    }
                                })];
                            case 2:
                                return a = r.sent().data, d = i(e, a.video), u = {
                                    channel: d.owner ? d.owner.login : null,
                                    channel_id: d.owner ? Number(d.owner.id) : null,
                                    game: null,
                                    partner: !!d.owner && d.owner.roles.isPartner,
                                    location: s.PageviewLocation.VideoWatchPage,
                                    share_context: null,
                                    share_platform: t.sharePlatform,
                                    shared_item_id: t.collectionID,
                                    shared_item_type: s.ShareItemType.Collection,
                                    shared_item_url: t.shareURL,
                                    source_item_id: d.id,
                                    source_item_type: Object(l.a)(d.broadcastType)
                                }, o.n.tracking.track(s.SpadeEventType.ShareItem, u), [3, 4];
                            case 3:
                                return m = r.sent(), o.i.error(m.toString(), p.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }
    },
    1252: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1356);
        t.BrowserHeaders = i.BrowserHeaders
    },
    1253: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.map(function(e) {
                return {
                    title: e.title || "",
                    thumbnail: e.thumbnail || "",
                    thumbnailAltText: e.thumbnailAltText || "",
                    linkTo: e.linkTo || "",
                    login: e.login || "",
                    name: e.name || "",
                    createdAt: e.createdAt || 0,
                    length: e.length || 0,
                    id: e.id || ""
                }
            })
        }

        function a(e) {
            var t = {},
                n = e.broadcastSort === s.c,
                i = [];
            return "broadcastType" in e && e.broadcastType !== s.d && void 0 !== e.broadcastType && i.push(e.broadcastType), "broadcasterId" in e && i.push(s.a + ":" + e.broadcasterId), t.facetFilters = r(i), "broadcastLength" in e && e.broadcastLength !== s.b && void 0 !== e.broadcastLength && (t.numericFilters = [e.broadcastLength]), {
                typeID: n ? o.a.VideosNewest : o.a.Videos,
                params: t
            }
        }

        function r(e) {
            return e.join(",")
        }
        t.a = i, t.b = a;
        var o = n(83),
            s = n(1076)
    },
    1313: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(11),
            o = n(3),
            s = function(e) {
                return a.createElement(o.U, {
                    margin: {
                        right: 1
                    },
                    display: o.H.Flex,
                    alignItems: o.c.Center
                }, a.createElement(o._30, {
                    align: o._31.Left,
                    label: e.tooltip,
                    direction: o._32.Bottom
                }, a.createElement(o.U, {
                    margin: {
                        right: .5
                    }
                }, a.createElement(o._17, {
                    display: o.H.Flex,
                    alignItems: o.c.Center,
                    color: o.F.Alt2
                }, a.createElement(o._8, {
                    asset: e.svgAsset,
                    width: 18,
                    height: 18
                }))), a.createElement(o._21, {
                    fontSize: o.L.Size5,
                    ellipsis: !0
                }, a.createElement(r.a, i.__assign({
                    to: e.linkTo
                }, Object(o._39)(e), {
                    target: e.target
                }), e.title))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    1345: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(o.bindActionCreators)({
                onTheatreModeDisabled: s.j,
                onTheatreModeEnabled: s.k
            }, e)
        }

        function a(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                rightColumnExpanded: e.ui.rightColumnExpanded
            }
        }
        var r = n(8),
            o = n(10),
            s = n(65),
            l = n(0),
            c = n(4),
            d = n(372),
            u = n(1),
            p = n(3),
            m = (n(1346), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.toggleTheatreMode = function() {
                        t.props.theatreModeEnabled ? t.props.onTheatreModeDisabled() : t.props.onTheatreModeEnabled()
                    }, t.disableTheatreMode = function() {
                        t.props.theatreModeEnabled && t.props.onTheatreModeDisabled()
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.bind("alt+t", this.toggleTheatreMode), d.bind("esc", this.disableTheatreMode)
                }, t.prototype.componentWillUnmount = function() {
                    d.unbind("alt+t"), d.unbind("esc")
                }, t.prototype.render = function() {
                    var e = c("channel-page__video-player", {
                        "channel-page__video-player--theatre-mode": this.props.theatreModeEnabled || !1
                    });
                    return u.createElement(p.U, {
                        className: e,
                        flexWrap: p.K.NoWrap,
                        fullHeight: this.props.theatreModeEnabled,
                        fullWidth: !this.props.rightColumnExpanded,
                        position: this.props.theatreModeEnabled ? p._2.Fixed : p._2.Relative
                    }, u.createElement(p.j, null, this.props.children))
                }, t
            }(u.Component));
        n.d(t, "a", function() {
            return h
        });
        var h = Object(r.a)(a, i)(m)
    },
    1346: function(e, t) {},
    1347: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && 0 !== e.edges.length ? e.edges.map(function(e) {
                return e.node
            }) : []
        }

        function a(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function r(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function o(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(A.d)(e)
            }
        }
        var s, l, c = n(0),
            d = n(1),
            u = n(2),
            p = n(7),
            m = n(13),
            h = n(5),
            g = n(4),
            f = n(983),
            b = n(3),
            v = (n(1348), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1
                    }, t.getVideoCards = function(e) {
                        if (null === e) {
                            for (var n = [], i = 0; i < 10; i++) n.push(d.createElement(f.VideoPreviewCardPlaceholder, {
                                key: "carousel-placeholder-" + i
                            }));
                            return n
                        }
                        return e.filter(function(e) {
                            return !!e.id
                        }).map(function(e, n) {
                            return d.createElement(f.VideoPreviewCard, {
                                collectionID: t.props.collectionID,
                                key: "video-" + n,
                                tracking: {
                                    content: t.props.trackingContent,
                                    content_index: n,
                                    medium: t.props.trackingMedium
                                },
                                video: e
                            })
                        })
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.videos) {
                            var e = t.getNumberOfVisibleElements();
                            t.state.currentElementIndex + 2 * e > t.props.videos.length ? t.setState({
                                currentElementIndex: t.props.videos.length - e
                            }) : t.setState({
                                currentElementIndex: t.state.currentElementIndex + e
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            var e = t.getNumberOfVisibleElements();
                            t.setState({
                                currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        return !!t.carouselContainerRef && (!t.props.videos || t.getLastVisibleIndex() >= t.props.videos.length)
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getLastVisibleIndex = function() {
                        return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                    }, t.getNumberOfVisibleElements = function() {
                        var e = t.carouselContainerRef.getBoundingClientRect().left,
                            n = t.carouselContainerRef.getBoundingClientRect().right,
                            i = n - e;
                        return Math.round(i / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=carousel-content]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.pixelOffset = function() {
                        return t.getChildWidth() * t.state.currentElementIndex * -1
                    }, t.transformString = function() {
                        return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    null !== this.props.videos && this.onDataLoaded()
                }, t.prototype.componentDidUpdate = function(e) {
                    var t = null === e.videos && null !== this.props.videos,
                        n = e.videos && this.props.videos && e.videos !== this.props.videos;
                    (t || n) && this.onDataLoaded()
                }, t.prototype.render = function() {
                    return d.createElement(b.P, c.__assign({}, this.props, {
                        margin: {
                            bottom: 3,
                            top: 1
                        },
                        position: b._2.Relative
                    }), d.createElement("div", {
                        className: "video-carousel",
                        ref: this.refHandler
                    }, d.createElement(b.U, {
                        className: "video-carousel__child-container",
                        overflow: b.Y.Hidden,
                        position: b._2.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, d.createElement("div", {
                        className: "video-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, d.createElement(b._33, {
                        noWrap: !0,
                        noGrow: !0,
                        childWidth: this.props.videoCardSize || b._34.Large,
                        gutterSize: b._35.Small,
                        "data-js-selector": "carousel-content"
                    }, this.getVideoCards(this.props.videos)))), d.createElement(b.U, {
                        className: "video-carousel__nav",
                        display: b.H.Flex,
                        alignItems: b.c.Center,
                        position: b._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, d.createElement(_, {
                        direction: y.DirectionPrevious,
                        disabled: !this.state.childrenRendered || this.isBackButtonDisabled(),
                        onClickHandler: this.moveCarouselBackward
                    })), d.createElement(b.U, {
                        className: "video-carousel__nav",
                        display: b.H.Flex,
                        alignItems: b.c.Center,
                        position: b._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, d.createElement(_, {
                        direction: y.DirectionNext,
                        disabled: !this.state.childrenRendered || this.isForwardButtonDisabled(),
                        onClickHandler: this.moveCarouselForward
                    }))))
                }, t.prototype.trackSectionLoad = function() {
                    for (var e = this.props.videos ? this.props.videos : [], t = [], n = [], i = 0, a = e; i < a.length; i++) {
                        var r = a[i];
                        t.push(r.id), n.push(r.viewCount)
                    }
                    u.m.trackItemSectionLoad(c.__assign({
                        carousel_content: this.props.trackingContent,
                        rendered_item_count: e.length,
                        rendered_item_list: t,
                        rendered_item_types: [m.TwitchDataType.Video],
                        rendered_items_viewcounts: n
                    }, this.props.trackingSource))
                }, t.prototype.onDataLoaded = function() {
                    this.trackSectionLoad(), this.state.childrenRendered || this.setState({
                        childrenRendered: !0
                    })
                }, t
            }(d.Component)),
            y = {
                DirectionPrevious: "previous",
                DirectionNext: "next"
            },
            k = (s = {}, s[y.DirectionPrevious] = "previous", s[y.DirectionNext] = "next", s),
            S = (l = {}, l[y.DirectionPrevious] = b._9.AngleLeft, l[y.DirectionNext] = b._9.AngleRight, l),
            _ = function(e) {
                var t = k[e.direction],
                    n = (a = {}, a[y.DirectionPrevious] = Object(u.d)("previous", "CarouselNavButton"), a[y.DirectionNext] = Object(u.d)("next", "CarouselNavButton"), a),
                    i = g("video-carousel__button", "video-carousel__button--" + t, {
                        "video-carousel__button--disabled": e.disabled
                    });
                return d.createElement(b.U, {
                    className: i,
                    position: b._2.Relative,
                    display: b.H.Flex,
                    alignItems: b.c.Stretch
                }, d.createElement(b.v, {
                    "data-test-selector": t + "-button",
                    onClick: e.onClickHandler,
                    disabled: e.disabled,
                    ariaLabel: n[e.direction],
                    icon: S[e.direction],
                    size: b.x.Large
                }));
                var a
            },
            C = Object(h.c)("VideoCarousel", {
                autoReportInteractive: !0
            })(v),
            E = n(1349),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && !this.props.data.loading && !this.props.data.user) return null;
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user) {
                        var n = this.props.data.user.collections.edges;
                        if (0 === n.length) return null;
                        if (e = n[0].node, t = i(e.videos), 0 === t.length) return null
                    }
                    return d.createElement(b.U, {
                        padding: {
                            y: 3
                        }
                    }, this.renderCarouselHeader(), d.createElement(C, {
                        videos: t,
                        collectionID: e ? e.id : void 0,
                        trackingContent: m.PageviewContent.LatestCollection,
                        trackingMedium: this.props.trackingMedium,
                        trackingSource: {
                            source_channel: this.props.userLogin,
                            source_item_type: m.TwitchDataType.Channel
                        }
                    }))
                }, t.prototype.renderCarouselHeader = function() {
                    if (this.props.data && this.props.data.loading) return d.createElement(b._1, {
                        width: 250,
                        lineCount: 1
                    });
                    var e = this.props.data.user.collections.edges[0].node,
                        t = Object(u.d)("By {displayName}", {
                            displayName: this.props.data.user.displayName
                        }, "LatestCollectionCarousel"),
                        n = Object(u.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                            videoCountText: e.videos.totalCount
                        }, "LatestCollectionCarousel");
                    return d.createElement(b.U, {
                        display: b.H.Flex,
                        alignItems: b.c.Baseline
                    }, d.createElement(b.U, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, d.createElement(b._21, {
                        type: b._26.H4,
                        "data-test-selector": "collection-title"
                    }, e.title || Object(u.d)("Latest Collection", "LatestCollectionCarousel"))), d.createElement(b.U, {
                        margin: {
                            bottom: 1,
                            right: 1
                        }
                    }, d.createElement(b._21, {
                        color: b.F.Alt2,
                        type: b._26.Span,
                        "data-test-selector": "collection-metadata"
                    }, t, " · ", n)), d.createElement(b.u, {
                        type: b.z.Hollow,
                        size: b.x.Small,
                        icon: b._9.Play,
                        linkTo: "/collections/" + e.id,
                        "data-test-selector": "play-all-button"
                    }, Object(u.d)("Play all", "LatestCollectionCarousel")))
                }, t = c.__decorate([Object(p.a)(E), Object(h.c)("LatestCollectionCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            T = w,
            N = n(8),
            O = n(1350),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.noGameSpecified) return null;
                    var e = this.props.data && !this.props.data.loading && this.props.data.game && i(this.props.data.game.videos) || null;
                    return !this.props.data || this.props.data.loading || e && 0 !== e.length ? d.createElement(b.U, {
                        padding: {
                            bottom: 2
                        }
                    }, d.createElement(b._21, {
                        type: b._26.H4,
                        transform: b._25.Uppercase,
                        color: b.F.Alt2
                    }, this.props.gameName ? Object(u.d)("Popular videos from {game}", {
                        game: this.props.gameName
                    }, "PopularVideosByGameCarousel") : d.createElement(b._1, {
                        width: 200
                    })), d.createElement(C, {
                        trackingContent: m.PageviewContent.PopularVideos,
                        trackingMedium: this.props.trackingMedium,
                        trackingSource: {
                            source_item_type: m.TwitchDataType.Game,
                            source_game: this.props.gameName || void 0
                        },
                        videos: e
                    })) : null
                }, t = c.__decorate([Object(h.c)("PopularVideosByGameCarousel", {
                    autoReportInteractive: !0
                }), Object(p.a)(O, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.gameName
                    }
                })], t)
            }(d.Component),
            I = D,
            U = Object(N.a)(a)(I),
            P = n(1351),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data && (this.props.data.error || !this.props.data.user)) return null;
                    var e = !this.props.data || this.props.data.loading ? null : i(this.props.data.user.videos);
                    return e && 0 === e.length ? null : d.createElement(b.U, {
                        padding: {
                            bottom: 2
                        }
                    }, d.createElement(b._21, {
                        type: b._26.H4,
                        transform: b._25.Uppercase,
                        color: b.F.Alt2
                    }, this.props.displayName ? Object(u.d)("Recent videos from {displayName}", {
                        displayName: this.props.displayName
                    }, "RecentVideosFromUserCarousel") : d.createElement(b._1, {
                        width: 200
                    })), d.createElement(C, {
                        videos: e,
                        trackingContent: m.PageviewContent.RecentVideos,
                        trackingMedium: this.props.trackingMedium,
                        trackingSource: {
                            source_item_type: m.TwitchDataType.Channel,
                            source_channel: this.props.data ? this.props.data.user.login : ""
                        }
                    }))
                }, t = c.__decorate([Object(h.c)("RecentVideosFromUserCarousel", {
                    autoReportInteractive: !0
                }), Object(p.a)(P, {
                    skip: function(e) {
                        return !e.firstPageLoaded || !e.userID
                    }
                })], t)
            }(d.Component),
            F = x,
            R = Object(N.a)(r)(F),
            A = n(18),
            M = n(1352),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.isLoggedIn || !this.props.data || this.props.data.error) return null;
                    var e = this.props.data && this.props.data.currentUser && i(this.props.data.currentUser.recommendations.videos) || null;
                    if (this.props.data && !this.props.data.loading && (!e || 0 === e.length)) return null;
                    var t = this.props.data.currentUser ? this.props.data.currentUser.login : "";
                    return d.createElement(b.U, {
                        padding: {
                            bottom: 2
                        }
                    }, d.createElement(b._21, {
                        type: b._26.H4,
                        transform: b._25.Uppercase,
                        color: b.F.Alt2
                    }, Object(u.d)("Based On Your Viewing History", "RecommendedVideoCarousel")), d.createElement(C, {
                        trackingContent: m.PageviewContent.RecommendedVideos,
                        trackingMedium: this.props.trackingMedium,
                        trackingSource: {
                            source_item_type: m.TwitchDataType.User,
                            source_channel: t
                        },
                        videos: e
                    }))
                }, t = c.__decorate([Object(h.c)("RecommendedVideoCarousel", {
                    autoReportInteractive: !0
                }), Object(p.a)(M, {
                    skip: function(e) {
                        return !e.isLoggedIn || !e.firstPageLoaded
                    }
                })], t)
            }(d.Component),
            j = L,
            B = Object(N.a)(o)(j);
        n.d(t, "a", function() {
            return T
        }), n.d(t, "b", function() {
            return U
        }), n.d(t, "c", function() {
            return R
        }), n.d(t, "d", function() {
            return B
        })
    },
    1348: function(e, t) {},
    1349: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LatestCollectionCarousel_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userLogin"
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
                                    value: "userLogin"
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
                                    value: "collections"
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "videos"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "first"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "30"
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
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                                                                            value: "node"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "FragmentSpread",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "PreviewCardVideo"
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
                end: 489
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery LatestCollectionCarousel_User($userLogin:String!) {\n  user(login:$userLogin) {\n    id\n    displayName\n    collections(first:1) {\n      edges {\n        node {\n          id\n          title\n          videos: items(first: 30) {\n            totalCount\n            edges {\n              node {\n                ...PreviewCardVideo\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(883).definitions)), e.exports = i
    },
    1350: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularVideosByGameCarousel_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "gameName"
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
                                    value: "gameName"
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
                                    value: "videos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "30"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "VIEWS"
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PreviewCardVideo"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 307
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery PopularVideosByGameCarousel_Game($gameName: String!) {\n  game(name: $gameName) {\n    id\n    videos(first: 30, sort: VIEWS) {\n      edges {\n        node {\n          ...PreviewCardVideo\n        }\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(883).definitions)), e.exports = i
    },
    1351: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecentVideosFromUser_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userID"
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
                                    value: "videos"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "30"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "sort"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "TIME"
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PreviewCardVideo"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 298
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery RecentVideosFromUser_User($userID: ID) {\n  user(id: $userID) {\n    id\n    login\n    videos(first: 30, sort: TIME) {\n      edges {\n        node {\n          ...PreviewCardVideo\n        }\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(883).definitions)), e.exports = i
    },
    1352: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecommendedVideoCarousel_CurrentUser"
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
                                    value: "recommendations"
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
                                            value: "videos"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "first"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "30"
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
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "PreviewCardVideo"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 320
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery RecommendedVideoCarousel_CurrentUser {\n  currentUser {\n    id\n    login\n    recommendations {\n      videos(first: 30) {\n        edges {\n          node {\n            ...PreviewCardVideo\n          }\n        }\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(883).definitions)), e.exports = i
    },
    1356: function(e, t, n) {
        "use strict";

        function i(e) {
            return "object" == typeof e && "object" == typeof e.headersMap && "function" == typeof e.forEach
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(1357),
            r = function() {
                function e(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = {
                        splitValues: !1
                    });
                    var n = this;
                    if (this.headersMap = {}, e)
                        if ("undefined" != typeof Headers && e instanceof Headers) {
                            var r = a.getHeaderKeys(e);
                            r.forEach(function(i) {
                                a.getHeaderValues(e, i).forEach(function(e) {
                                    t.splitValues ? n.append(i, a.splitHeaderValue(e)) : n.append(i, e)
                                })
                            })
                        } else if (i(e)) e.forEach(function(e, t) {
                        n.append(e, t)
                    });
                    else if ("undefined" != typeof Map && e instanceof Map) {
                        var o = e;
                        o.forEach(function(e, t) {
                            n.append(t, e)
                        })
                    } else "string" == typeof e ? this.appendFromString(e) : "object" == typeof e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        var i = e,
                            a = i[t];
                        Array.isArray(a) ? a.forEach(function(e) {
                            n.append(t, e)
                        }) : n.append(t, a)
                    })
                }
                return e.prototype.appendFromString = function(e) {
                    for (var t = e.split("\r\n"), n = 0; n < t.length; n++) {
                        var i = t[n],
                            a = i.indexOf(": ");
                        if (a > 0) {
                            var r = i.substring(0, a),
                                o = i.substring(a + 2);
                            this.append(r, o)
                        }
                    }
                }, e.prototype.delete = function(e, t) {
                    var n = a.normalizeName(e);
                    if (void 0 === t) delete this.headersMap[n];
                    else {
                        var i = this.headersMap[n];
                        if (i) {
                            var r = i.indexOf(t);
                            r >= 0 && i.splice(r, 1), 0 === i.length && delete this.headersMap[n]
                        }
                    }
                }, e.prototype.append = function(e, t) {
                    var n = this,
                        i = a.normalizeName(e);
                    Array.isArray(this.headersMap[i]) || (this.headersMap[i] = []), Array.isArray(t) ? t.forEach(function(e) {
                        n.headersMap[i].push(a.normalizeValue(e))
                    }) : this.headersMap[i].push(a.normalizeValue(t))
                }, e.prototype.set = function(e, t) {
                    var n = a.normalizeName(e);
                    if (Array.isArray(t)) {
                        var i = [];
                        t.forEach(function(e) {
                            i.push(a.normalizeValue(e))
                        }), this.headersMap[n] = i
                    } else this.headersMap[n] = [a.normalizeValue(t)]
                }, e.prototype.has = function(e, t) {
                    var n = this.headersMap[a.normalizeName(e)];
                    if (!Array.isArray(n)) return !1;
                    if (void 0 !== t) {
                        var i = a.normalizeValue(t);
                        return n.indexOf(i) >= 0
                    }
                    return !0
                }, e.prototype.get = function(e) {
                    var t = this.headersMap[a.normalizeName(e)];
                    return void 0 !== t ? t.concat() : []
                }, e.prototype.forEach = function(e) {
                    var t = this;
                    Object.getOwnPropertyNames(this.headersMap).forEach(function(n) {
                        e(n, t.headersMap[n])
                    }, this)
                }, e.prototype.toHeaders = function() {
                    if ("undefined" != typeof Headers) {
                        var e = new Headers;
                        return this.forEach(function(t, n) {
                            n.forEach(function(n) {
                                e.append(t, n)
                            })
                        }), e
                    }
                    throw new Error("Headers class is not defined")
                }, e
            }();
        t.BrowserHeaders = r
    },
    1357: function(e, t, n) {
        "use strict";

        function i(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function a(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function r(e, t) {
            if (e instanceof Headers && e.getAll) return e.getAll(t);
            var n = e.get(t);
            return n && "string" == typeof n ? [n] : n
        }

        function o(e) {
            var t = {},
                n = [];
            return e.keys ? l.iterateHeadersKeys(e, function(e) {
                t[e] || (t[e] = !0, n.push(e))
            }) : e.forEach ? e.forEach(function(e, i) {
                t[i] || (t[i] = !0, n.push(i))
            }) : l.iterateHeaders(e, function(e) {
                var i = e[0];
                t[i] || (t[i] = !0, n.push(i))
            }), n
        }

        function s(e) {
            var t = [];
            return e.split(", ").forEach(function(e) {
                e.split(",").forEach(function(e) {
                    t.push(e)
                })
            }), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(1358);
        t.normalizeName = i, t.normalizeValue = a, t.getHeaderValues = r, t.getHeaderKeys = o, t.splitHeaderValue = s
    },
    1358: function(e, t) {
        function n(e, t) {
            for (var n = e[Symbol.iterator](), i = n.next(); !i.done;) t(i.value[0]), i = n.next()
        }

        function i(e, t) {
            for (var n = e.keys(), i = n.next(); !i.done;) t(i.value), i = n.next()
        }
        e.exports = {
            iterateHeaders: n,
            iterateHeadersKeys: i
        }
    },
    1359: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoShareBox_Tracking_Video"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
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
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                                            value: "roles"
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
                                                    value: "isPartner"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 223
            }
        };
        n.loc.source = {
            body: "query VideoShareBox_Tracking_Video($videoID: ID!) {\n  video(id: $videoID) {\n    id\n    broadcastType\n    owner {\n      id\n      login\n      roles {\n        isPartner\n      }\n    }\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1360: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChat_TrackingContext_VideoAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                                            value: "roles"
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
                                                    value: "isPartner"
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
                                    value: "login"
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
                end: 308
            }
        };
        n.loc.source = {
            body: "query VideoChat_TrackingContext_VideoAndCurrentUser($videoCreatorID: ID, $videoID: ID) {\n  video(id: $videoID) {\n    id\n    broadcastType\n    title\n    game {\n      id\n      name\n    }\n    owner {\n      id\n      login\n      roles {\n        isPartner\n      }\n    }\n  },\n  currentUser {\n    id\n    login\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1361: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatChannelAndVideoTrackingContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                            }]
                        }
                    }, {
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "videoCreatorID"
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
                                    value: "login"
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
                end: 237
            }
        };
        n.loc.source = {
            body: "query VideoChatChannelAndVideoTrackingContext($videoCreatorID: ID, $videoID: ID) {\n  video(id: $videoID) {\n    id\n    broadcastType\n    title\n    game {\n      id\n      name\n    }\n  },\n  user(id: $videoCreatorID) {\n    id\n    login\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1362: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatChannelAndCommentCreatorAndVideoTrackingContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoCreatorID"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "commentCreator"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "users"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "ids"
                            },
                            value: {
                                kind: "ListValue",
                                values: [{
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "videoCreatorID"
                                    }
                                }, {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "commentCreator"
                                    }
                                }]
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
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 298
            }
        };
        n.loc.source = {
            body: "query VideoChatChannelAndCommentCreatorAndVideoTrackingContext($videoCreatorID: ID!, $commentCreator: ID!, $videoID: ID) {\n  users(ids: [$videoCreatorID, $commentCreator]) {\n    id\n    login\n  },\n  video(id: $videoID) {\n    id\n    broadcastType\n    title\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1363: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoChatVideoTrackingContext"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 154
            }
        };
        n.loc.source = {
            body: "query VideoChatVideoTrackingContext($videoID: ID) {\n  video(id: $videoID) {\n    id\n    broadcastType\n    title\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1364: function(e, t) {},
    1365: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            l = n(1),
            c = i(l),
            d = n(107),
            u = i(d),
            p = n(14),
            m = i(p),
            h = {
                ESCAPE: 27
            },
            g = function(e) {
                function t() {
                    a(this, t);
                    var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.state = {
                        active: !1
                    }, e.handleWrapperClick = e.handleWrapperClick.bind(e), e.closePortal = e.closePortal.bind(e), e.handleOutsideMouseClick = e.handleOutsideMouseClick.bind(e), e.handleKeydown = e.handleKeydown.bind(e), e.portal = null, e.node = null, e
                }
                return o(t, e), s(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.closeOnEsc && document.addEventListener("keydown", this.handleKeydown), this.props.closeOnOutsideClick && (document.addEventListener("mouseup", this.handleOutsideMouseClick), document.addEventListener("touchstart", this.handleOutsideMouseClick)), this.props.isOpened && this.openPortal()
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        void 0 !== e.isOpened && (e.isOpened && (this.state.active ? this.renderPortal(e) : this.openPortal(e)), !e.isOpened && this.state.active && this.closePortal()), void 0 === e.isOpened && this.state.active && this.renderPortal(e)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.closeOnEsc && document.removeEventListener("keydown", this.handleKeydown), this.props.closeOnOutsideClick && (document.removeEventListener("mouseup", this.handleOutsideMouseClick), document.removeEventListener("touchstart", this.handleOutsideMouseClick)), this.closePortal(!0)
                    }
                }, {
                    key: "handleWrapperClick",
                    value: function(e) {
                        e.preventDefault(), e.stopPropagation(), this.state.active || this.openPortal()
                    }
                }, {
                    key: "openPortal",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        this.setState({
                            active: !0
                        }), this.renderPortal(e), this.props.onOpen(this.node)
                    }
                }, {
                    key: "closePortal",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = function() {
                                e.node && (u.default.unmountComponentAtNode(e.node), document.body.removeChild(e.node)), e.portal = null, e.node = null, !0 !== t && e.setState({
                                    active: !1
                                })
                            };
                        this.state.active && (this.props.beforeClose ? this.props.beforeClose(this.node, n) : n(), this.props.onClose())
                    }
                }, {
                    key: "handleOutsideMouseClick",
                    value: function(e) {
                        if (this.state.active) {
                            (0, d.findDOMNode)(this.portal).contains(e.target) || e.button && 0 !== e.button || (e.stopPropagation(), this.closePortal())
                        }
                    }
                }, {
                    key: "handleKeydown",
                    value: function(e) {
                        e.keyCode === h.ESCAPE && this.state.active && this.closePortal()
                    }
                }, {
                    key: "renderPortal",
                    value: function(e) {
                        this.node || (this.node = document.createElement("div"), document.body.appendChild(this.node));
                        var t = e.children;
                        "function" == typeof e.children.type && (t = c.default.cloneElement(e.children, {
                            closePortal: this.closePortal
                        })), this.portal = u.default.unstable_renderSubtreeIntoContainer(this, t, this.node, this.props.onUpdate)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.openByClickOn ? c.default.cloneElement(this.props.openByClickOn, {
                            onClick: this.handleWrapperClick
                        }) : null
                    }
                }]), t
            }(c.default.Component);
        t.default = g, g.propTypes = {
            children: m.default.element.isRequired,
            openByClickOn: m.default.element,
            closeOnEsc: m.default.bool,
            closeOnOutsideClick: m.default.bool,
            isOpened: m.default.bool,
            onOpen: m.default.func,
            onClose: m.default.func,
            beforeClose: m.default.func,
            onUpdate: m.default.func
        }, g.defaultProps = {
            onOpen: function() {},
            onClose: function() {},
            onUpdate: function() {}
        }, e.exports = t.default
    },
    1366: function(e, t) {},
    1367: function(e, t) {},
    1368: function(e, t) {},
    1369: function(e, t) {},
    1370: function(e, t) {},
    1371: function(e, t) {},
    1372: function(e, t) {},
    1373: function(e, t) {},
    1374: function(e, t) {},
    1375: function(e, t) {},
    1376: function(e, t) {},
    1377: function(e, t) {},
    1378: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoComments"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
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
                            value: "badges"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "badge"
                                },
                                directives: []
                            }]
                        }
                    }, {
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
                                    value: "roles"
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
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isGlobalMod"
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
                                    value: "blockedUsers"
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
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "video"
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
                                    value: "videoID"
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
                                    value: "broadcastType"
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
                                            value: "broadcastBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "cheer"
                                        },
                                        directives: []
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
                                                    value: "isModerator"
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
                end: 516
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\n\nquery VideoComments($videoID: ID!) {\n  badges {\n    ...badge\n  },\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n      isGlobalMod\n    }\n    blockedUsers {\n      id\n    }\n  },\n  video(id: $videoID) {\n    id\n    broadcastType\n    owner {\n      id\n      login\n      broadcastBadges {\n        ...badge\n      }\n      ...cheer\n      self {\n        isModerator\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(782).definitions)), a.definitions = a.definitions.concat(i(n(807).definitions)), e.exports = a
    },
    1379: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(1078),
            s = n(1077),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onTrackHandler = function(e) {
                        switch (e.shareTrackingType) {
                            case o.a.Video:
                                return Object(o.c)(t.props.video, e, r.n.apollo.client);
                            case o.a.Collection:
                                return Object(o.b)(t.props.video, e, r.n.apollo.client);
                            default:
                                return e.shareTrackingType
                        }
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(s.b, {
                        collectionID: this.props.collectionID,
                        video: this.props.video,
                        buttonType: this.props.buttonType,
                        balloonDirection: this.props.balloonDirection,
                        onShareClick: this.onTrackHandler,
                        lastVideoOffset: this.props.lastVideoOffset
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    1894: function(e, t) {},
    1895: function(e, t) {},
    1896: function(e, t) {},
    1897: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "VideoWatchPage_Video"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "videoID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "collectionID"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "useCollectionID"
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
                                    value: "displayName"
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
                            value: "video"
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
                                    value: "videoID"
                                }
                            }
                        }],
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
                                        value: "useCollectionID"
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
                                    value: "videoFields"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "collection"
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
                                    value: "collectionID"
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
                                        value: "useCollectionID"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "items"
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
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "Video"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "videoFields"
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
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "videoFields"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                            value: "broadcastType"
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publishedAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
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
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "126"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "71"
                            }
                        }],
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
                                        value: "138"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "190"
                                    }
                                }],
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
                                    value: "chatSettings"
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
                                            value: "rules"
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
                end: 921
            }
        };
        n.loc.source = {
            body: "query VideoWatchPage_Video($videoID: ID, $collectionID: ID!, $useCollectionID: Boolean!) {\n  currentUser {\n    id\n    displayName\n  }\n  # If the page specifies a video ID, query it directly.\n  video(id: $videoID) @skip(if: $useCollectionID) {\n    ...videoFields\n  }\n  # If the page is a collection page, grab the first video from the collection.\n  collection(id: $collectionID) @include(if: $useCollectionID) {\n    items(first: 1) {\n      edges {\n        node {\n          ... on Video {\n            ...videoFields\n          }\n        }\n      }\n    }\n  }\n}\n\n# These are the fields used by the watch page.\nfragment videoFields on Video {\n  id\n  broadcastType\n  title\n  description\n  lengthSeconds\n  publishedAt\n  viewCount\n  previewThumbnailURL(width: 126, height: 71)\n  game {\n    id\n    boxArtURL(width: 138, height: 190)\n    name\n  }\n  owner {\n    id\n    displayName\n    login\n    chatSettings {\n      rules\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2045: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
            return t ? 3600 * (parseInt(t[2], 10) || 0) + 60 * (parseInt(t[4], 10) || 0) + (parseInt(t[6], 10) || 0) : 0
        }

        function a(e) {
            return e ? e.split(/ {2}\n|\n(?!\d+\.)(?!\*|- )|^\n/gm) : []
        }

        function r(e) {
            return S.createElement("li", {
                className: "ellipsis"
            }, e.children)
        }

        function o(e) {
            switch (e.level) {
                case 4:
                    return S.createElement(q._21, {
                        type: q._26.H4,
                        ellipsis: !0
                    }, e.children);
                case 5:
                    return S.createElement(q._21, {
                        type: q._26.H5,
                        ellipsis: !0
                    }, e.children);
                case 6:
                    return S.createElement(q._21, {
                        type: q._26.H6,
                        ellipsis: !0
                    }, e.children);
                default:
                    return S.createElement(q._21, {
                        type: q._26.H3,
                        ellipsis: !0
                    }, e.children)
            }
        }

        function s(e) {
            return S.createElement(q._21, {
                type: q._26.P,
                ellipsis: !0
            }, e.children)
        }

        function l(e, t) {
            var n = this;
            return function() {
                return v.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return v.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = "kraken/videos/" + e, [4, re.a.delete(n)];
                            case 1:
                                if (i = a.sent(), 200 !== i.status) {
                                    if (i && i.error) throw new Error(JSON.stringify(i.error));
                                    if (i && i.requestError) throw i.requestError;
                                    throw new Error("Could not delete video. Request returned " + i.status)
                                }
                                return W.o.history.push(se(t)), [2]
                        }
                    })
                })
            }
        }

        function c(e) {
            return Object(h.bindActionCreators)({
                onClose: ie.c,
                onDeleteRequest: l
            }, e)
        }

        function d(e) {
            return Object(h.bindActionCreators)({
                onShowLogin: function() {
                    return Object(f.f)(g.a.VODOptions)
                },
                onShowDeleteVideoModal: function(e) {
                    var t = v.__rest(e, []);
                    return Object(ie.d)(ue, t)
                },
                onShowReportUserModal: function(e) {
                    var t = v.__rest(e, []);
                    return Object(ie.d)(ae.a, t)
                }
            }, e)
        }

        function u(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled
            }
        }

        function p(e) {
            return Object(h.bindActionCreators)({
                onLogin: function() {
                    return Object(f.f)(g.a.VODComment)
                },
                onVideoTimeChange: b.r
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var m = n(8),
            h = n(10),
            g = n(50),
            f = n(34),
            b = n(822),
            v = n(0),
            y = n(4),
            k = n(20),
            S = n(1),
            _ = n(30),
            C = n(2),
            E = n(62),
            w = n(1020),
            T = n(764),
            N = n(36),
            O = n(45),
            D = n(982),
            I = n(761),
            U = n(13),
            P = n(1073),
            x = n(854),
            F = n(5),
            R = n(404),
            A = n(1347),
            M = n(886),
            L = n(1017),
            j = n(1345),
            B = n(1379),
            V = n(64),
            H = n(251),
            W = n(63),
            G = {
                skipHtml: !0,
                softBreak: "br",
                allowedTypes: ["Emph", "Strong", "Paragraph", "Heading", "Item", "List", "Text", "Link", "Softbreak", "Hardbreak"]
            },
            q = n(3),
            z = "qa-description-container",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isExpanded: !1
                    }, t.renderDescription = function() {
                        if (t.props.description) {
                            var e, n = a(t.props.description);
                            if (t.state.isExpanded) e = n.map(function(e, t) {
                                return 0 === e.length ? S.createElement("br", {
                                    key: "desc-line" + t
                                }) : S.createElement(V, v.__assign({
                                    key: "desc-line" + t,
                                    source: e
                                }, G))
                            });
                            else {
                                var i = n[0].split("\n")[0];
                                e = S.createElement(V, v.__assign({
                                    source: i,
                                    renderers: {
                                        Paragraph: s,
                                        Heading: o,
                                        Item: r
                                    }
                                }, G))
                            }
                            return S.createElement(q.U, {
                                "data-test-selector": z
                            }, S.createElement(q._36, null, e), t.state.isExpanded ? t.renderBroadcastType(t.props.broadcastType) : null)
                        }
                    }, t.toggleExpand = function() {
                        t.setState(function(e) {
                            return {
                                isExpanded: !e.isExpanded
                            }
                        })
                    }, t
                }
                return v.__extends(t, e), t.prototype.render = function() {
                    return this.props.description ? S.createElement(q._17, {
                        background: q.m.Base,
                        "data-test-selector": "qa-more-info-box"
                    }, S.createElement(q.U, {
                        padding: {
                            x: 1,
                            top: 1
                        }
                    }, this.renderDescription()), S.createElement(q._17, {
                        alignContent: q.b.Center,
                        borderTop: !0,
                        display: q.H.Flex,
                        justifyContent: q.T.Center,
                        padding: {
                            y: .5
                        }
                    }, S.createElement(q.u, {
                        "data-test-selector": "qa-toggle-expand-button",
                        type: q.z.Text,
                        onClick: this.toggleExpand
                    }, this.state.isExpanded ? Object(W.d)("Show Less", "MoreInfoBox") : Object(W.d)("Show More", "MoreInfoBox")))) : null
                }, t.prototype.renderBroadcastType = function(e) {
                    if (!e) return S.createElement(q._1, {
                        lineCount: 1,
                        width: 80
                    });
                    var t;
                    switch (e) {
                        case H.a.Archive:
                            t = Object(W.d)("Past Broadcast", "MoreInfoBox");
                            break;
                        case H.a.Upload:
                            t = Object(W.d)("Upload", "MoreInfoBox");
                            break;
                        case H.a.PastPremiere:
                            t = Object(W.d)("Past Premiere", "MoreInfoBox");
                            break;
                        case H.a.Highlight:
                            t = Object(W.d)("Highlight", "MoreInfoBox");
                            break;
                        default:
                            t = Object(W.d)("Unknown", "MoreInfoBox")
                    }
                    return S.createElement(q._21, {
                        "data-test-selector": "qa-broadcast-type-text"
                    }, Object(W.d)("Video Category: {broadcastType}", {
                        broadcastType: t
                    }, "MoreInfoBox"))
                }, t = v.__decorate([Object(F.c)("MoreInfoBox", {
                    autoReportInteractive: !0
                })], t)
            }(S.Component),
            K = $,
            Q = n(11),
            Y = n(1313),
            J = n(352),
            X = /\S/,
            Z = function(e) {
                var t = e.video,
                    n = Object(C.g)(new Date(t.publishedAt)),
                    i = t.title && "" !== t.title && X.test(t.title),
                    a = i ? t.title + " · " + n : n;
                return S.createElement(q.U, {
                    margin: {
                        bottom: .5
                    }
                }, S.createElement(q._21, {
                    fontSize: q.L.Size4,
                    ellipsis: !0,
                    title: t.title
                }, a))
            },
            ee = function(e) {
                var t = e.video;
                if (t && null === t.game) return S.createElement(Z, {
                    video: t
                });
                var n = null;
                null === t ? n = S.createElement(q._1, {
                    "data-test-selector": "game-image-placeholder",
                    height: 55,
                    width: 40
                }) : null !== t.game && (n = S.createElement(Q.a, {
                    to: Object(J.d)(t.game.name),
                    "data-a-target": "video-info-game-boxart-link"
                }, S.createElement(q.C, {
                    imageSrc: t.game.boxArtURL,
                    imageAlt: t.game.name,
                    aspect: q.k.BoxArt,
                    size: q.D.Size4
                })));
                var i = null;
                return null === t ? i = S.createElement(q.U, {
                    "data-test-selector": "info-placeholder",
                    display: q.H.Flex,
                    flexDirection: q.J.Column
                }, S.createElement(q._1, {
                    lineCount: 1,
                    width: 320
                }), S.createElement(q._1, {
                    lineCount: 1,
                    width: 240
                })) : null !== t.game && (i = S.createElement("div", null, S.createElement(Z, {
                    video: t
                }), S.createElement(Y.a, {
                    linkTo: {
                        pathname: Object(J.d)(t.game.name),
                        state: {
                            content: U.PageviewContent.Game,
                            medium: U.PageviewMedium.VideoWatchPage
                        }
                    },
                    tooltip: Object(C.d)("Game", "VideoInfo"),
                    svgAsset: q._9.NavGames,
                    title: t.game.name,
                    "data-a-target": "video-info-game-link"
                }))), S.createElement(q.A, {
                    row: !0
                }, S.createElement(q.U, {
                    flexShrink: 0,
                    margin: {
                        right: 1
                    }
                }, n), S.createElement(q.B, null, i))
            },
            te = Object(F.c)("VideoInfo", {
                autoReportInteractive: !0
            })(ee),
            ne = n(21),
            ie = n(49),
            ae = n(772),
            re = n(760),
            oe = function(e, t) {
                return "https://twitch.tv/" + e + "/manager/v" + t + "/highlight"
            },
            se = function(e) {
                return "/" + e + "/manager_v2"
            },
            le = n(123),
            ce = n(364),
            de = (n(1894), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        requestInProgress: !1,
                        errorMessage: ""
                    }, t.onClickCancel = function() {
                        return t.props.onClose()
                    }, t.onClickDelete = function() {
                        t.setState({
                            errorMessage: "",
                            requestInProgress: !0
                        }, function() {
                            return v.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return v.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if (!this.props.video.owner) return this.setState({
                                                errorMessage: Object(W.d)("This video is temporarily unable to be deleted.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), [2];
                                            t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 3, , 4]), [4, this.props.onDeleteRequest(this.props.video.id, this.props.video.owner.login)];
                                        case 2:
                                            return t.sent(), this.props.onClose(), [3, 4];
                                        case 3:
                                            return e = t.sent(), this.setState({
                                                errorMessage: Object(W.d)("Unexpected error, please try again.", "VideoDeleteModal"),
                                                requestInProgress: !1
                                            }), W.j.withCategory("video delete modal").error(e, "Attempted to delete video."), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return v.__extends(t, e), t.prototype.render = function() {
                    return S.createElement(q._17, {
                        background: q.m.Base,
                        "data-test-selector": "qa-video-delete-modal",
                        className: "video-delete-modal",
                        padding: 3
                    }, S.createElement(q.U, null, S.createElement(q.U, {
                        margin: {
                            bottom: 1
                        }
                    }, S.createElement(q._21, {
                        type: q._26.H4
                    }, Object(W.d)("Delete Video", "VideoDeleteModal"))), this.renderErrorMessage(), S.createElement(q._21, {
                        type: q._26.P,
                        color: q.F.Alt2
                    }, Object(W.d)("Are you sure you want to delete this video?", "VideoDeleteModal"), S.createElement("br", null), Object(W.d)("This action cannot be undone.", "VideoDeleteModal"))), S.createElement(q._17, {
                        padding: {
                            y: 2
                        },
                        margin: {
                            y: 2
                        },
                        borderTop: !0,
                        borderBottom: !0
                    }, S.createElement(q.A, {
                        row: !0
                    }, S.createElement("img", {
                        alt: this.props.video.title || Object(W.d)("Video Thumbnail", "VideoDeleteModal"),
                        src: this.props.video.previewThumbnailURL,
                        className: "video-delete-modal__thumb"
                    }), S.createElement(q.B, null, S.createElement(q.U, {
                        margin: {
                            left: 1
                        }
                    }, S.createElement(q.U, {
                        ellipsis: !0
                    }, this.props.video.title), S.createElement(q._17, {
                        ellipsis: !0,
                        color: q.F.Alt2
                    }, Object(W.d)("{created, date, medium}", {
                        created: new Date(this.props.video.publishedAt)
                    }, "VideoDeleteModal"), " · ", Object(ce.a)(this.props.video.lengthSeconds)), S.createElement(q._17, {
                        ellipsis: !0,
                        color: q.F.Alt2
                    }, Object(W.d)("{viewCount, plural, one {# View} other {# Views}}", {
                        viewCount: this.props.video.viewCount
                    }, "VideoDeleteModal")))))), S.createElement(q.U, {
                        display: q.H.Flex,
                        justifyContent: q.T.Center
                    }, S.createElement(q.U, {
                        display: q.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, S.createElement(q.u, {
                        type: q.z.Text,
                        onClick: this.onClickCancel,
                        "data-test-selector": "qa-video-delete-modal-cancel-button"
                    }, Object(W.d)("Cancel", "VideoDeleteModal"))), S.createElement(q.U, {
                        display: q.H.InlineBlock,
                        margin: {
                            x: 1
                        }
                    }, S.createElement(q.u, {
                        type: q.z.Alert,
                        onClick: this.onClickDelete,
                        disabled: this.state.requestInProgress,
                        "data-test-selector": "qa-video-delete-modal-delete-button"
                    }, Object(W.d)("Delete", "VideoDeleteModal")))), S.createElement(le.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t.prototype.renderErrorMessage = function() {
                    return this.state.errorMessage ? S.createElement(q._17, {
                        className: "video-delete-modal__error-container",
                        fullWidth: !0,
                        "data-test-selector": "qa-video-delete-modal-error-container",
                        margin: {
                            bottom: 1
                        },
                        padding: 1
                    }, S.createElement(q._21, {
                        color: q.F.Error
                    }, this.state.errorMessage)) : null
                }, t
            }(S.Component)),
            ue = Object(m.a)(null, c)(de),
            pe = n(60),
            me = n(765),
            he = n(762),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return v.__extends(t, e), t.prototype.render = function() {
                    return S.createElement("li", null, S.createElement(q.S, v.__assign({
                        "data-test-selector": this.props.testSelector
                    }, this.props.interactableProps), S.createElement(q.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, this.props.children)))
                }, t = v.__decorate([Object(F.c)("InteractableOption", {
                    autoReportInteractive: !0
                })], t)
            }(S.Component),
            fe = ge,
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportModalClose = function(e) {
                        (e === me.b.MutationError || e === me.b.Success) && t.props.history.push("/")
                    }, t
                }
                return v.__extends(t, e), t.prototype.render = function() {
                    return S.createElement(pe.a, null, S.createElement(q.v, {
                        "data-test-selector": "qa-video-options-button",
                        type: q.w.Hollow,
                        icon: q._9.More,
                        ariaLabel: Object(W.d)("Video Options", "VideoOptions"),
                        disabled: !this.props.video
                    }), this.props.video ? S.createElement(q.p, {
                        direction: q.q.TopRight
                    }, S.createElement(q._17, {
                        padding: {
                            y: 1
                        },
                        color: q.F.Link
                    }, S.createElement("ul", {
                        "data-test-selector": "qa-video-options-container"
                    }, this.renderReportOption(this.props.video, this.props.currentUser), this.renderHighlightOption(this.props.video, this.props.currentUser), this.renderDeleteOption(this.props.video, this.props.currentUser)))) : S.createElement(q.p, null))
                }, t.prototype.renderDeleteOption = function(e, t) {
                    var n = this;
                    if (this.isVODOwner(e, t)) {
                        var i = {
                            alert: !0,
                            onClick: function() {
                                n.props.onShowDeleteVideoModal({
                                    video: e
                                })
                            }
                        };
                        return S.createElement(fe, {
                            key: "delete-option",
                            interactableProps: i,
                            testSelector: "qa-video-delete-button"
                        }, Object(W.d)("Delete", "VideoOptions"))
                    }
                }, t.prototype.renderReportOption = function(e, t) {
                    var n = this;
                    if (!this.isVODOwner(e, t)) {
                        var i = {
                            onClick: function() {
                                if (t) {
                                    var i = void 0;
                                    i = e.owner ? Object(W.d)("Report {ownerDisplayName}", {
                                        ownerDisplayName: e.owner.displayName
                                    }, "ReportVideoModal") : Object(W.d)("Report this video", "ReportVideoModal"), n.props.onShowReportUserModal({
                                        onClose: n.handleReportModalClose,
                                        reportContext: {
                                            contentType: he.a.Vod,
                                            contentID: e.id,
                                            targetUserID: e.owner ? e.owner.id : "",
                                            extra: n.getVideoReportExtraField()
                                        },
                                        title: i
                                    })
                                } else n.props.onShowLogin()
                            }
                        };
                        return S.createElement(fe, {
                            key: "report-option",
                            interactableProps: i,
                            testSelector: "qa-video-report-button"
                        }, Object(W.d)("Report", "VideoOptions"))
                    }
                }, t.prototype.renderHighlightOption = function(e, t) {
                    if (e.broadcastType === H.a.Archive && this.isVODOwner(e, t) && e.owner) return S.createElement(fe, {
                        key: "highlight-option",
                        interactableProps: {
                            linkTo: oe(e.owner.login, e.id)
                        },
                        testSelector: "qa-video-highlight-button"
                    }, Object(W.d)("Highlight", "VideoOptions"))
                }, t.prototype.isVODOwner = function(e, t) {
                    return t && e.owner && t.id === e.owner.id
                }, t.prototype.getVideoReportExtraField = function() {
                    var e = Object(D.a)(this.props),
                        t = Object(ce.a)(this.props.lastVideoOffset, {
                            zeroPadAll: !0
                        }),
                        n = {
                            timestamp: t
                        };
                    return "" !== e && (n = v.__assign({}, n, {
                        collection: e
                    })), JSON.stringify(n)
                }, t = v.__decorate([Object(F.c)("VideoOptions", {
                    autoReportInteractive: !0
                })], t)
            }(S.Component),
            ve = be,
            ye = Object(m.a)(null, d)(Object(ne.e)(ve)),
            ke = (n(1895), function(e) {
                var t = null;
                return e.video && e.video.description && (t = S.createElement(q._17, {
                    borderTop: !0,
                    "data-test-selector": "video-description"
                }, S.createElement(K, {
                    description: e.video.description,
                    broadcastType: e.video.broadcastType
                }))), S.createElement(q._17, {
                    background: q.m.Base,
                    border: !0
                }, S.createElement(q._17, {
                    alignItems: q.c.Center,
                    breakpointMedium: {
                        flexDirection: q.J.Row
                    },
                    display: q.H.Flex,
                    flexWrap: q.K.NoWrap,
                    flexDirection: q.J.Column,
                    justifyContent: q.T.Start
                }, S.createElement(q._17, {
                    flexGrow: 1,
                    fullHeight: !0,
                    fullWidth: !0,
                    padding: 1
                }, S.createElement(te, {
                    video: e.video
                })), S.createElement(q._17, {
                    alignItems: q.c.Center,
                    className: "video-info-bar__action-container",
                    display: q.H.Flex,
                    flexDirection: q.J.Row,
                    flexShrink: 0,
                    fullHeight: !0,
                    padding: 1
                }, e.video && S.createElement(q._17, {
                    alignItems: q.c.Center,
                    "data-test-selector": "total-views",
                    display: q.H.Flex,
                    color: q.F.Alt2,
                    flexGrow: 1,
                    fontSize: q.L.Size5
                }, S.createElement(q._16, {
                    value: Object(C.e)(e.video.viewCount),
                    label: Object(C.d)("Total Views", "VideoInfoBar"),
                    icon: q._9.GlyphViews
                })), S.createElement(q.U, {
                    display: q.H.Flex,
                    flexGrow: 0
                }, S.createElement(q.U, {
                    padding: {
                        x: 1
                    }
                }, S.createElement(B.a, {
                    video: e.video,
                    buttonType: q.z.Hollow,
                    balloonDirection: q.q.TopRight,
                    lastVideoOffset: e.lastVideoOffset
                })), S.createElement(ye, {
                    currentUser: e.currentUser,
                    video: e.video,
                    lastVideoOffset: e.lastVideoOffset
                })))), t)
            }),
            Se = Object(F.c)("VideoInfoBar", {
                autoReportInteractive: !0
            })(ke),
            _e = (n(1896), n(1897)),
            Ce = -1,
            Ee = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onPlayerSeekRequest = function(e) {
                        n.setState({
                            requestedVideoOffset: e
                        })
                    }, n.onShowLoginHandler = function() {
                        n.props.onLogin()
                    }, n.getInitialVideoOffsetTime = function() {
                        var e = k.parse(n.props.location.search);
                        return e.t ? i(e.t) : Ce
                    }, n.onPlayerNavigationEvent = function(e) {
                        var t = n.getVideo(),
                            i = t ? t.id : "",
                            a = Object(D.a)(n.props);
                        Object(M.d)(e, n.props.history, {
                            currentVideoID: i,
                            currentCollectionID: a
                        })
                    }, n.onVideoTimeChange = function(e) {
                        var t = Math.floor(e);
                        if (t === n.state.lastVideoOffset) return void(n.state.requestedVideoOffset === t && n.setState({
                            requestedVideoOffset: Ce
                        }));
                        n.setState({
                            lastVideoOffset: t
                        }, function() {
                            n.props.onVideoTimeChange(t)
                        })
                    }, n.state = {
                        requestedVideoOffset: n.getInitialVideoOffsetTime() || Ce,
                        lastVideoOffset: Ce
                    }, n
                }
                return v.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    if (this.props.data && !this.props.data.loading && (this.props.data.video || this.props.data.collection))
                        if (this.props.data.video && this.props.data.video.owner) C.n.setPageTitle(this.props.data.video.owner.displayName + " - " + this.props.data.video.title);
                        else if (this.props.data.collection && this.props.data.collection.items.edges.length > 0) {
                        var e = this.props.data.collection.items.edges[0].node,
                            t = e.owner ? e.owner.displayName + " - " : "";
                        C.n.setPageTitle("" + t + e.title)
                    }
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.getVideo();
                    if (this.props.data.error || e && !e.owner) return S.createElement(E.a, {
                        message: Object(C.d)("Error loading data.", "VideoWatchPage")
                    });
                    if (!this.props.data.loading && (!e || e && "" === e.id)) return S.createElement(w.a, null);
                    var t = y("video-watch-page__right-column", (r = {}, r[Object(O.b)(N.a.Dark)] = this.props.theatreModeEnabled, r)),
                        n = {};
                    this.state.requestedVideoOffset !== Ce && (n.nextVideoOffset = this.state.requestedVideoOffset);
                    var i = Object(D.a)(this.props);
                    "" !== i && (n.collectionID = i);
                    var a = this.props.match.params.videoID;
                    return a && (n.vodID = a), S.createElement(q.U, {
                        fullHeight: !0
                    }, S.createElement(L.a, {
                        currentPage: x.b.Videos,
                        "data-test-selector": "qa-video-watch-page",
                        ownerLogin: e && e.owner && e.owner.login || void 0,
                        theatreMode: this.props.theatreModeEnabled
                    }, S.createElement(j.a, null, S.createElement(M.c, v.__assign({
                        onNavigationRequest: this.onPlayerNavigationEvent,
                        onSeek: this.onVideoTimeChange,
                        onVideoTimeChange: this.onVideoTimeChange,
                        attachToWindow: !0
                    }, n))), S.createElement(q.U, {
                        padding: {
                            bottom: 2
                        }
                    }, S.createElement(Se, {
                        collectionID: Object(D.a)(this.props),
                        currentUser: this.props.data.currentUser || null,
                        video: e || null,
                        lastVideoOffset: this.state.lastVideoOffset
                    })), S.createElement(A.d, {
                        trackingMedium: U.PageviewMedium.VideoWatchPage
                    }), S.createElement(A.b, {
                        gameName: e && e.game && e.game.name,
                        noGameSpecified: !(!e || e.game && e.game.name),
                        trackingMedium: U.PageviewMedium.VideoWatchPage
                    }), S.createElement(A.c, {
                        userID: e && e.owner && e.owner.id,
                        displayName: e && e.owner && e.owner.displayName,
                        trackingMedium: U.PageviewMedium.VideoWatchPage
                    })), S.createElement(R.b, null, S.createElement(q._17, {
                        className: t,
                        background: q.m.Alt2,
                        "data-test-selector": "video-chat-wrapper",
                        display: q.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: q.K.NoWrap,
                        overflow: q.Y.Hidden,
                        fullHeight: !0
                    }, S.createElement(b.m, v.__assign({
                        onPlayerSeekRequest: this.onPlayerSeekRequest,
                        onShowLogin: this.onShowLoginHandler,
                        videoID: this.props.match.params.videoID || e && e.id || ""
                    }, this.mapQueryParamsToVideoChatProps())))));
                    var r
                }, t.prototype.mapQueryParamsToVideoChatProps = function() {
                    var e = {},
                        t = k.parse(this.props.location.search),
                        n = this.getInitialVideoOffsetTime();
                    return n !== Ce && (e.highlightTimestamp = n), t.comment && (e.highlightedMessageID = t.comment), e
                }, t.prototype.reportInteractive = function() {
                    this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.getVideo = function() {
                    return this.props.data.video ? this.props.data.video : this.props.data.collection && this.props.data.collection.items.edges[0] ? this.props.data.collection.items.edges[0].node : null
                }, t
            }(S.Component),
            we = Object(_.compose)(Object(_.graphql)(_e, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.match.params.videoID,
                            collectionID: e.match.params.collectionID,
                            useCollectionID: !e.match.params.videoID && !!e.match.params.collectionID
                        }
                    }
                }
            }), Object(F.c)("VideoWatchPage", {
                destination: I.a.VideoWatchPage
            }), Object(T.a)({
                location: U.PageviewLocation.VideoWatchPage,
                properties: function(e) {
                    var t = null,
                        n = null,
                        i = null,
                        a = null,
                        r = null;
                    if (e.match.params.videoID) t = e.match.params.videoID, e.data.video && e.data.video.owner && (n = e.data.video.broadcastType, i = e.data.video.game ? e.data.video.game.name : null, a = e.data.video.owner.login, r = Number(e.data.video.owner.id));
                    else if (e.match.params.collectionID && e.data.collection && e.data.collection.items.edges.length > 0) {
                        var o = e.data.collection.items.edges[0].node;
                        t = o.id, n = o.broadcastType, i = o.game ? o.game.name : null, a = o.owner ? o.owner.login : null, r = o.owner ? Number(o.owner.id) : null
                    }
                    return {
                        channel: a,
                        channel_id: r,
                        vod_type: n ? Object(P.b)(n) : null,
                        vod_id: t,
                        game: i
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(Ee),
            Te = Object(m.a)(u, p)(we);
        n.d(t, "VideoWatchPage", function() {
            return Te
        })
    },
    357: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
    },
    757: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.RoomMods = 21] = "RoomMods", e[e.RoomState = 22] = "RoomState", e[e.Raid = 23] = "Raid", e[e.Unraid = 24] = "Unraid", e[e.Notice = 25] = "Notice", e[e.Info = 26] = "Info", e[e.BadgesUpdated = 27] = "BadgesUpdated", e[e.Purchase = 28] = "Purchase"
        }(i || (i = {}))
    },
    758: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || u.ChatTooltip
            };
            c.m.track(d.SpadeEventType.BitsCardInteraction, t)
        }

        function a(e) {
            return e && m[e] ? m[e] : (c.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), p.Buy100)
        }

        function r(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            c.m.track(d.SpadeEventType.BitsAdsAvailability, t)
        }

        function o(e) {
            var t = {
                distinct_id: c.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            c.m.track(d.SpadeEventType.BitsAdsImpression, t)
        }

        function s(e) {
            var t = c.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: c.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            c.m.track(d.SpadeEventType.BitsAdsRequest, n)
        }
        t.h = i, n.d(t, "b", function() {
            return u
        }), n.d(t, "a", function() {
            return p
        }), t.d = a, t.e = r, t.f = o, n.d(t, "c", function() {
            return l
        }), t.g = s;
        var l, c = n(2),
            d = n(13),
            u = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            p = {
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
                WatchAnotherAd: "watch_another_ad"
            },
            m = {
                100: p.Buy100,
                500: p.Buy500,
                1e3: p.Buy1000,
                1500: p.Buy1500,
                5e3: p.Buy5000,
                1e4: p.Buy10000,
                25e3: p.Buy25000
            };
        ! function(e) {
            e.ShowAdButton = "show_ad_button"
        }(l || (l = {}))
    },
    760: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            a = n(2),
            r = n(18),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return r = i.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return a = i.sent(), t.requestError = a, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(r.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    761: function(e, t, n) {
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
    762: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    764: function(e, t, n) {
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
            r = n(20),
            o = n(1),
            s = n(11),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    765: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(1),
            o = n(10),
            s = n(2),
            l = n(7),
            c = n(5),
            d = n(771),
            u = n(3),
            p = n(789),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [r.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : Object(d.b)(this.props.data.reportReasons).map(function(e) {
                        return r.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), r.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.M, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, r.createElement(u._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, r.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(c.c)("ReportReasonSelect")], t)
            }(r.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            g = (n(790), n(791));
        n.d(t, "a", function() {
            return b
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "c", function() {
            return y
        });
        var f, b = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(f || (f = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: r.createElement("br", null),
                        tosLink: r.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(f.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === b ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(u.U, {
                        display: u.H.Flex,
                        flexDirection: u.J.Column,
                        alignItems: u.c.Center,
                        justifyContent: u.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === f.Success ? r.createElement("div", null, r.createElement(u.u, {
                        onClick: this.props.onClose
                    }, r.createElement(u.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : r.createElement("div", null, r.createElement(u.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u._21, {
                        type: u._26.H4
                    }, this.props.title), r.createElement(u._17, {
                        color: u.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), r.createElement("form", null, r.createElement(u._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, r.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), r.createElement(u.M, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, r.createElement(u._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), r.createElement(u._17, {
                        display: u.H.Flex,
                        justifyContent: u.T.Center
                    }, r.createElement(u.u, {
                        onClick: this.handleSubmit
                    }, r.createElement(u.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return r.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return r.createElement(u.U, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(u.M, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, r.createElement(u._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case f.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case f.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case f.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== f.Success,
                        "reporting__success-container": this.props.submitStatus === f.Success
                    });
                    return r.createElement(u._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== f.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(r.Component),
            y = Object(o.compose)(Object(l.a)(g, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(v)
    },
    766: function(e, t, n) {
        "use strict";

        function i(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var a, r = n(0),
            o = n(1),
            s = n(2),
            l = n(776),
            c = n(125),
            d = n(249),
            u = n(5),
            p = n(775),
            m = n(356),
            h = n(787),
            g = n(777),
            f = n(248),
            b = n(3),
            v = (n(812), "gift-subscription-button"),
            y = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(a || (a = {}));
        var k = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + a.Prime:
                                n.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier1:
                                n.setState({
                                    activeTab: a.Tier1,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier2:
                                n.setState({
                                    activeTab: a.Tier2,
                                    currentPurchasePrice: n.messages.tier2Price
                                }), n.props.onSelectTierTab(a.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + a.Tier3:
                                n.setState({
                                    activeTab: a.Tier3,
                                    currentPurchasePrice: n.messages.tier3Price
                                }), n.props.onSelectTierTab(a.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: a.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(a.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case a.Prime:
                                return n.messages.freeSubWithPrime;
                            case a.Tier1:
                                return n.messages.tier1Sub;
                            case a.Tier2:
                                return n.messages.tier2Sub;
                            case a.Tier3:
                                return n.messages.tier3Sub;
                            default:
                                return n.messages.tier1Sub
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        return n.props.isGift ? n.props.giftRecipient ? o.createElement(b.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: n.state.currentPurchasePrice,
                            linkTo: Object(c.a)(e.url, {
                                recipient: n.props.giftRecipient
                            })
                        }, n.messages.giftSubscription) : o.createElement(b.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, n.messages.giftSubscription) : n.state.subbedTier === n.state.activeTab && n.state.activeTab === a.Prime ? o.createElement(h.a, {
                            authToken: n.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: n.props.isSubscribed,
                            isSubscribedWithPrime: n.props.subbedTier === p.a,
                            onSubscribedWithPrime: n.onSubscribedWithPrime,
                            reportSubMenuAction: n.props.reportSubMenuAction,
                            subLogin: n.props.subLogin,
                            userHasPrime: n.props.userHasPrime,
                            canPrimeSubscribe: n.props.canPrimeSubscribe
                        }) : o.createElement(m.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            reportSubAction: n.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": y
                        })
                    }, n.onSubscribedWithPrime = function() {
                        n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.reportSubMenuAction({
                            action: f.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: f.a.GiftASub,
                            checkoutButtonTier: n.state.currentPurchasePrice
                        }), n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (n.setState({
                            activeTab: a.Prime,
                            subbedTier: a.Prime
                        }), e.onSelectTierTab(a.Prime)) : e.subbedTier === l.a.Tier1 ? (n.setState({
                            activeTab: a.Tier1,
                            subbedTier: a.Tier1
                        }), e.onSelectTierTab(a.Tier1)) : e.subbedTier === l.a.Tier2 ? (n.setState({
                            activeTab: a.Tier2,
                            subbedTier: a.Tier2
                        }), e.onSelectTierTab(a.Tier2)) : e.subbedTier === l.a.Tier3 ? (n.setState({
                            activeTab: a.Tier3,
                            subbedTier: a.Tier3
                        }), e.onSelectTierTab(a.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(a.Prime)
                    }, n.getExtraEmotes = function(e) {
                        return (e === a.Tier2 ? Object(d.b)(n.props.subscriptionProducts[1].emotes) : Object(d.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return o.createElement(b.U, {
                                display: b.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, o.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, n.state = {
                        activeTab: a.Tier1,
                        currentPurchasePrice: n.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, o.createElement(b._8, {
                        asset: b._9.Star
                    })));
                    var t = o.createElement(b._21, null),
                        n = null,
                        r = null,
                        c = null,
                        d = o.createElement(b.U, {
                            display: b.H.InlineFlex
                        }, this.state.subbedTier === a.Tier3 && e, o.createElement(b._18, {
                            active: this.state.activeTab === a.Tier3,
                            "data-a-target": i(a.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== a.Prime && (t = o.createElement(b.U, null, o.createElement(b._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, Object(g.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), o.createElement(b._21, {
                        className: "tw-subscription-modal__new-price",
                        type: b._26.H5,
                        bold: !0
                    }, Object(g.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (n = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, o.createElement(b._8, {
                        asset: b._9.Crown
                    })), o.createElement(b._18, {
                        active: this.state.activeTab === a.Prime,
                        "data-a-target": i(a.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (r = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier1 && e, o.createElement(b._18, {
                        active: this.state.activeTab === a.Tier1,
                        "data-a-target": i(a.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (c = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === a.Tier2 && e, o.createElement(b._18, {
                        active: this.state.activeTab === a.Tier2,
                        "data-a-target": i(a.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var u = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === a.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === a.Tier3) && (u = o.createElement(b.U, {
                        display: b.H.InlineFlex,
                        alignItems: b.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), o.createElement(b._21, {
                        bold: !0
                    }, Object(s.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === a.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), o.createElement(b.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._19, null, n, r, c, d)), o.createElement(b.U, null, o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._21, {
                        type: b._26.H5,
                        bold: !0
                    }, this.getTabTitle())), o.createElement(b.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(b._21, null, this.messages.subTierBenefits)), u, t, o.createElement(b.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        n = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: n,
                        prime: Object(s.d)("Prime", "SubTierTabs"),
                        subscribed: Object(s.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(s.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(s.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(g.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(g.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(g.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(g.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(u.c)("SubTierTabs")], t)
            }(o.Component),
            S = k;
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return S
        })
    },
    767: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "black_friday_2017"
    },
    768: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.d)
        }

        function a(e) {
            return e.type !== u.a && (r(e) && null !== e.promotion && e.promotion.type === u.e)
        }

        function r(e) {
            return e.type === u.b && null !== e.promotion && !!e.promotion
        }

        function o(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }

        function s(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                a = t.smallestCheermote;
            if (n) {
                var r = {
                    cheerAboveMaxBitsPerEmote: i > p.k,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: a < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > p.j,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(r).some(function(e) {
                        return r[e]
                    })) return c.__assign({
                    canSpend: !1
                }, r)
            }
            return {
                canSpend: !0
            }
        }

        function l(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(m.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(d.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(m.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        }
        t.c = i, t.e = a, t.d = r, t.a = o, t.f = s, t.b = l;
        var c = n(0),
            d = n(799),
            u = n(767),
            p = n(247),
            m = n(758)
    },
    770: function(e, t, n) {
        "use strict";
        var i, a = n(4),
            r = n(1),
            o = n(350),
            s = n(353),
            l = n(351),
            c = n(3);
        n(839);
        ! function(e) {
            e[e.Normal = 0] = "Normal", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.ExtraSmall = 3] = "ExtraSmall"
        }(i || (i = {}));
        var d;
        ! function(e) {
            e[e.ImageAndText = 0] = "ImageAndText", e[e.ImageOnly = 1] = "ImageOnly", e[e.TextOnly = 2] = "TextOnly", e[e.InlineTextOnly = 3] = "InlineTextOnly", e[e.Inline = 4] = "Inline"
        }(d || (d = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(s.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = null,
                p = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline
                });
            e.amount && e.display !== d.ImageOnly && (u = r.createElement(c.P, {
                padding: e.size === i.Small ? 0 : void 0,
                textAlign: e.size === i.Small ? c._22.Center : void 0
            }, r.createElement("strong", {
                className: p,
                style: {
                    color: n.color
                }
            }, e.amount)));
            var m = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__cheer-image--inline": e.display === d.Inline
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__display--table-cell": e.display !== d.InlineTextOnly && e.display !== d.Inline && e.size !== i.Small
                }),
                h = r.createElement(l.a, {
                    className: m,
                    sources: Object(o.b)(n, 4, e.animated)
                });
            return e.display !== d.TextOnly && e.display !== d.InlineTextOnly || (h = null), e.display === d.InlineTextOnly || e.display === d.Inline ? r.createElement(c.U, {
                className: "cheermote-for-amount",
                display: c.H.Inline
            }, h, u) : r.createElement(c.U, {
                className: "cheermote-for-amount"
            }, h, u)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return d
        })
    },
    771: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return o().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return o()
        }
        var a = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            r = n(2),
            o = function() {
                return [{
                    localized: Object(r.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(r.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(r.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(r.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(r.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(r.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(r.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(r.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(r.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(r.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(r.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(r.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(r.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(r.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(r.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(r.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(r.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(r.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(r.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(r.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return i
        })
    },
    772: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(l.bindActionCreators)({
                closeModal: d.c
            }, e)
        }
        var a = n(773),
            r = n(0),
            o = n(1),
            s = n(8),
            l = n(10),
            c = n(123),
            d = n(49),
            u = n(5),
            p = n(3),
            m = (n(797), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, o.createElement(a.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), o.createElement(c.a, null))
                }, t
            }(o.Component)),
            h = Object(l.compose)(Object(u.c)("ReportUserModal"), Object(s.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return a.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    773: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return k
        });
        var a = n(0),
            r = n(1),
            o = (n.n(r), n(8)),
            s = n(10),
            l = n(2),
            c = n(7),
            d = n(22),
            u = n(13),
            p = n(5),
            m = n(765),
            h = n(762),
            g = n(771),
            f = n(765),
            b = n(792),
            v = (n.n(b), n(793)),
            y = (n.n(v), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: f.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, r) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t, o, t, s;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: i || "",
                                            reason: n
                                        }, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(d.a)(t))];
                                    case 2:
                                        return a.sent(), l.n.tracking.track(u.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: r,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return o = a.sent(), l.i.error(o, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: f.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(g.a)(this.props.reportContext.extra, n)), a.label = 6;
                                    case 6:
                                        return a.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(d.a)(t))];
                                    case 7:
                                        return a.sent(), this.props.reportContext.contentType === h.a.Community && l.n.tracking.track(u.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: f.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return s = a.sent(), l.i.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: f.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return r.createElement(f.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(r.Component)),
            k = Object(s.compose)(Object(c.a)(b, {
                name: "reportUserInCommunity"
            }), Object(c.a)(v, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(o.a)(i, null))(y)
    },
    774: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                authToken: Object(s.a)(e)
            }
        }
        var a = n(0),
            r = n(1),
            o = n(8),
            s = n(18),
            l = n(5),
            c = n(775),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(c.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = a.__decorate([Object(l.c)("SubscribeButton")], t)
            }(r.Component),
            u = Object(o.a)(i)(d);
        n.d(t, !1, function() {
            return d
        }), n.d(t, "b", function() {
            return u
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return c.a
        }), n.d(t, !1, function() {
            return c.b
        })
    },
    775: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map;
            return t.set(F.b.Prime, null), e.forEach(function(e, n) {
                t.set(n + 1, e)
            }), t
        }
        var a, r = n(0),
            o = n(1),
            s = n(2),
            l = n(60),
            c = n(7),
            d = n(102),
            u = n(776),
            p = n(130),
            m = n(22),
            h = n(35),
            g = n(19),
            f = n(5),
            b = n(61),
            v = n(83),
            y = n(128),
            k = n(355),
            S = n(29),
            _ = n(51),
            C = n(125),
            E = n(800),
            w = n(248),
            T = n(3),
            N = (n(811), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(s.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(s.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(s.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: w.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? o.createElement(T.U, {
                        fullHeight: !0
                    }, o.createElement(T.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : o.createElement(T.U, {
                        margin: 1
                    }, o.createElement(T._21, {
                        color: T.F.Alt2
                    }, this.messages.searchHint)), o.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, o.createElement(T._17, {
                        className: "gift-recipient-search-result-view",
                        background: T.m.Alt,
                        position: T._2.Relative,
                        overflow: T.Y.Hidden,
                        display: T.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, o.createElement(T.P, {
                        overflow: T.Y.Hidden,
                        position: T._2.Relative
                    }, o.createElement(S.b, {
                        suppressScrollX: !0
                    }, o.createElement(T.U, null, e, o.createElement(S.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(C.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = o.createElement(E.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        n = null;
                    if (this.state.selectedUser) {
                        var i = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        n = o.createElement(T.P, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(T._21, null, Object(s.d)("for {displayName}", {
                            displayName: o.createElement(T._21, {
                                bold: !0,
                                type: T._26.Span
                            }, i)
                        }, "GiftRecipientSearchResult")))
                    }
                    return o.createElement(T.U, {
                        display: T.H.Flex,
                        alignItems: T.c.Center,
                        fullWidth: !0
                    }, t, n)
                }, t.prototype.getErrorMessage = function() {
                    return o.createElement(T.U, {
                        fullWidth: !0,
                        textAlign: T._22.Center,
                        justifyContent: T.T.Center
                    }, o.createElement(T._21, null, Object(s.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(_.a)(t.login || "", t.name || "");
                        return o.createElement(T.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, o.createElement(T.U, {
                            padding: .5
                        }, o.createElement(T.A, {
                            row: !0
                        }, o.createElement(T.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: T.D.Size4,
                            aspect: T.k.Aspect1x1
                        }), o.createElement(T.B, null, o.createElement(T.P, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(T._21, {
                            type: T._26.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : o.createElement(T._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return o.createElement(T.U, {
                        margin: 1
                    }, o.createElement(T._21, {
                        color: T.F.Alt2
                    }, this.messages.noResults))
                }, t = r.__decorate([Object(f.c)("GiftRecipientSearchResultPanel")], t)
            }(o.Component)),
            O = N,
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), o.createElement(T.U, {
                        padding: 2
                    }, o.createElement(T.U, null, o.createElement(T.U, {
                        display: T.H.Flex,
                        justifyContent: T.T.Between,
                        alignItems: T.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), o.createElement(T.u, {
                        type: T.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: T._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(T.U, {
                        alignItems: T.c.Center,
                        display: T.H.InlineFlex
                    }, o.createElement(T._21, null, this.messages.back)))), o.createElement(T.U, null, o.createElement(T._21, null, this.messages.giftSingleMonth), o.createElement(T.U, {
                        display: T.H.Flex,
                        justifyContent: T.T.Center,
                        fullWidth: !0
                    }, o.createElement(T.P, {
                        fullWidth: !0
                    }, o.createElement("div", null, o.createElement(T._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), o.createElement(O, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : o.createElement(T._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(s.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(s.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(s.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(s.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(o.Component),
            I = 50,
            U = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, I)
                    }, t.loadMore = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(v.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(k.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: i.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === b.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === b.a.Up ? t.focusNext(-1) : e.keyCode === b.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new y.a(s.a.algoliaApplicationID, s.a.algoliaAPIKey), t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(D, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a, o, s;
                        return r.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = g.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(v.a.Users, e, n)];
                                case 2:
                                    return a = l.sent(), [3, 4];
                                case 3:
                                    return o = l.sent(), this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return a ? this.state.queryID !== a.id ? [2] : (s = Object(k.b)({
                                        searchResults: a,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return r.__assign({}, n, s, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(r.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
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
                }, t = r.__decorate([Object(f.c)("GiftRecipientSearch")], t)
            }(o.Component),
            P = U,
            x = n(783),
            F = n(766),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return o.createElement(T.U, {
                        padding: 2
                    }, o.createElement(T.U, null, o.createElement(T.U, {
                        display: T.H.Flex,
                        justifyContent: T.T.Between,
                        alignItems: T.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), o.createElement(T.u, {
                        type: T.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: T._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(T.U, {
                        alignItems: T.c.Center,
                        display: T.H.InlineFlex
                    }, o.createElement(T._21, null, this.messages.back)))), o.createElement(F.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(s.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(o.Component),
            A = R,
            M = n(774),
            L = n(787);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(a || (a = {}));
        var j = n(777),
            B = n(813),
            V = (n(814), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.ClickCheckout,
                            checkoutButtonTier: n.messages.tier1Price
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.props.reportSubMenuAction({
                            action: w.a.ClickBack,
                            modalLevel: n.state.currentPage === a.SubOptions || n.state.currentPage === a.GiftOptions ? "top_page" : "second_page"
                        }), n.state.currentPage === a.SubOptions || n.state.currentPage === a.GiftOptions ? void n.showTop() : n.state.currentPage === a.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(M.a)
                    }, n.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return o.createElement(A, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(T.U, {
                        padding: 2
                    }, o.createElement(x.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(P, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        n = null,
                        i = o.createElement(T._21, null, this.messages.tier1PricePerMonth),
                        a = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (i = o.createElement(T.U, null, o.createElement(T._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, this.messages.tier1PricePerMonth)), o.createElement(T._21, {
                        className: "tw-subscription-modal__new-price",
                        type: T._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), a = Object(j.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (n = this.renderPrimeSection()), this.props.isNonStandardSub || (e = o.createElement(T.U, {
                        margin: {
                            right: 1
                        },
                        display: T.H.Inline
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: T.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = o.createElement(T.U, {
                        display: T.H.Inline
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: T.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), o.createElement(T.U, {
                        padding: 2
                    }, n, o.createElement(T.U, null, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), i, o.createElement(T.U, {
                        display: T.H.Flex
                    }, o.createElement(T.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: a,
                        targetBlank: !0
                    }, this.messages.subscribe)))), o.createElement(T.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return o.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), o.createElement(T.U, null, o.createElement(T.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(T._21, null, e)), o.createElement(L.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(j.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(s.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: o.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(s.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(s.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: o.createElement("strong", null, Object(s.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(s.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(s.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(s.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(s.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(s.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(s.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(s.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(j.b)(e.subscriptionProducts)
                }, t = r.__decorate([Object(c.a)(B, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(f.c)("BalloonNonSubbedUser")], t)
            }(o.Component)),
            H = V,
            W = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.Top
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.RecipientSelect
                            }
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.ClickGiftSubOptions
                        }), n.setState(function() {
                            return {
                                currentPage: a.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.setState(function() {
                            return {
                                currentPage: a.SubOptions
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.state.currentPage === a.GiftOptions || n.state.currentPage === a.SubOptions || n.state.giftShortcut ? (n.showTop(), void n.setState({
                            giftShortcut: !1
                        })) : n.state.currentPage === a.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.GiftASub,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        }), n.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), n.showRecipientSelect()
                    }, n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: w.a.ClickCheckout,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        })
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(M.a)
                    }, n.state = {
                        currentPage: a.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === a.Top ? this.getTopPage() : this.state.currentPage === a.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === a.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === a.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(P, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(T.U, {
                        padding: 2
                    }, o.createElement(x.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return o.createElement(A, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return o.createElement(T.U, null, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), o.createElement(T.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: T.H.Flex
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), o.createElement(T.U, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: T.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return o.createElement(T.U, null, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), o.createElement(F.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, n = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), o.createElement(T.U, null, o.createElement(T._21, {
                        bold: !0,
                        type: T._26.H4
                    }, e), o.createElement(T.P, {
                        margin: {
                            y: 1
                        }
                    }, o.createElement(T._21, null, t)), n)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = o.createElement(T.U, {
                        margin: {
                            right: 1
                        },
                        display: T.H.Inline
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: T.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = o.createElement(T.U, {
                        display: T.H.Inline
                    }, o.createElement(T.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: T.z.Hollow
                    }, this.messages.giftSubscription)), o.createElement(T.U, null, o.createElement(T.U, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(T._21, {
                        type: T._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), o.createElement(T.P, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(T._21, null, this.messages.tier1PricePerMonth)), o.createElement(T.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(T.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), o.createElement(T.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? o.createElement(T.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : o.createElement(T.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : o.createElement(T.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(T.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : o.createElement(T.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case u.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case u.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case u.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(s.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(s.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(s.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(s.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(s.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(s.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(s.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(T._21, {
                                bold: !0,
                                type: T._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(s.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(s.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(T._21, {
                                bold: !0,
                                type: T._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(s.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(s.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = r.__decorate([Object(f.c)("BalloonSubbedUser")], t)
            }(o.Component),
            G = W,
            q = (n(815), n(816));
        n.d(t, "a", function() {
            return z
        }), n.d(t, "b", function() {
            return K
        });
        var z = "prime",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: z,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(w.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === w.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== w.a.ClickMoreSubOptions && e.action !== w.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: z
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? w.a.CloseSubMenu : w.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: w.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: u.a.Prime
                        }), Object(m.d)(q, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(g.a)(),
                                purchasedWithPrime: !0,
                                tier: z,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(s.d)("Gift A Sub", "SubscribeButton") : Object(s.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(s.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(s.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(s.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(s.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var n = Object.assign({}, t.state.subData);
                            if (null !== n) {
                                for (var i = [], a = 0; a < 3; a++) {
                                    var r = Object.assign({}, n.subscriptionProducts[a]);
                                    r.self = e[a].self, i.push(r)
                                }
                                n.subscriptionProducts = i, t.setState({
                                    subData: n
                                })
                            }
                        }
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? z : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var n = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: n
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return o.createElement(T.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: T._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === u.a.Prime ? T._9.Crown : T._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        n = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        i = o.createElement(T.u, {
                            "data-a-target": n,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? T.z.Success : T.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        a = this.props.hostChannelID ? T.q.TopLeft : T.q.BottomRight;
                    return o.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, i, o.createElement(T.p, {
                        size: T.r.Large,
                        direction: a,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return s.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (s.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return o.createElement(G, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = o.createElement(T.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, o.createElement(T._21, null, this.messages.discountMessage))), o.createElement(T.U, null, e, o.createElement(H, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return o.createElement(H, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    e = "no", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(j.b)(e.subData.subscriptionProducts))
                }, t = r.__decorate([Object(c.a)(q, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(d.a)([{
                    topic: function(e) {
                        return Object(h.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(o.Component),
            K = $
    },
    776: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    777: function(e, t, n) {
        "use strict";

        function i(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function a(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = i, t.b = a
    },
    778: function(e, t, n) {
        "use strict";

        function i() {
            return {
                type: r
            }
        }

        function a(e, t, n) {
            return {
                type: o,
                viewerCardOptions: {
                    targetLogin: e,
                    sourceType: t,
                    sourceID: n
                }
            }
        }
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return o
        }), t.c = i, t.d = a;
        var r = "viewer-card.VIEWER_CARD_HIDDEN",
            o = "viewer-card.VIEWER_CARD_SHOWN"
    },
    779: function(e, t, n) {
        "use strict";

        function i(e) {
            return "/ignore " + e
        }

        function a(e) {
            return "/unignore " + e
        }

        function r(e) {
            return "/mod " + e
        }

        function o(e) {
            return "/unmod " + e
        }

        function s(e) {
            return /^[\/]/.test(e)
        }

        function l() {
            return "/clear"
        }

        function c() {
            return "/followersoff"
        }

        function d() {
            return "/slowoff"
        }

        function u(e) {
            return "/followers " + e
        }

        function p() {
            return "/slow"
        }

        function m(e) {
            return "/color " + e
        }

        function h(e) {
            var t = /^\/w(?:$|\s+)(\S+)?\s*(.+)?/i,
                n = e.trim().match(t);
            return n ? {
                recipientLogin: n[1] || null,
                body: n[2] || null
            } : null
        }
        n.d(t, "a", function() {
            return g
        }), t.h = i, t.j = a, t.i = r, t.k = o, t.l = s, t.c = l, t.d = c, t.e = d, t.f = u, t.g = p, t.b = m, t.m = h;
        var g = "/unraid"
    },
    780: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Admin = "admin", e.GlobalMod = "global_mod", e.Moderator = "mod", e.Owner = "owner", e.Staff = "staff", e.Subscriber = "subscriber", e.User = ""
        }(i || (i = {}))
    },
    781: function(e, t, n) {
        "use strict";

        function i() {
            return U.createElement("span", {
                key: "thankyou"
            }, Object(P.d)("Thank you for your feedback!", "ChatLine"))
        }

        function a(e, t, n, i, a) {
            var r = [],
                s = "";
            i && (s = s.concat(" "));
            var l = e.content.split(/\s+/);
            return l.forEach(function(e, i) {
                if ("" !== e) {
                    var a = i < l.length - 1 ? e + " " : e;
                    (t || n) && o(e, t, n) ? (r = r.concat(s), r = r.concat(U.createElement(H.U, {
                        className: "chat-line__message--mention-recipient",
                        display: H.H.InlineFlex,
                        key: "" + e + i,
                        "data-a-target": "chat-message-mention"
                    }, a)), s = "") : s = s.concat(a)
                }
            }), r = r.concat(s), U.createElement("span", {
                key: "chat-line__message-text-" + a,
                "data-a-target": "chat-message-text"
            }, r)
        }

        function r(e, t, n) {
            return e.reduce(function(i, r, o) {
                switch (r.type) {
                    case J.a.Text:
                        var c = o > 0;
                        return i.concat(a(r, t, n, c, o));
                    case J.a.Mention:
                        var d = "";
                        return s(r) && t && r.content.sender.toLowerCase() === t.toLowerCase() ? d = "chat-line__message--mention-sender" : l(r) && t && r.content.recipient.toLowerCase() === t.toLowerCase() && (d = "chat-line__message--mention-recipient"), i.concat(U.createElement(H.U, {
                            className: d,
                            display: H.H.InlineFlex,
                            key: o,
                            "data-a-target": "chat-message-mention"
                        }, "@" + r.content.recipient));
                    case J.a.Link:
                        return i.concat(U.createElement("a", {
                            key: o,
                            className: "chat-line__message--link",
                            href: r.content.url,
                            target: "_blank",
                            rel: "noreferrer noopener"
                        }, r.content.displayText));
                    case J.a.Emote:
                        return i = i.concat(U.createElement(M.a, {
                            key: o,
                            emote: r.content
                        })), e.length > o + 1 && e[o + 1].type === J.a.Emote && i.push(" "), i;
                    case J.a.ClipLink:
                        return i.concat(U.createElement(Q, {
                            key: o,
                            slug: r.content.slug
                        }));
                    default:
                        return i.concat(U.createElement("span", {
                            key: o
                        }))
                }
            }, [])
        }

        function o(e, t, n) {
            var i = e.trim().toLowerCase();
            return t && i === t.toLowerCase() || n && i === n.toLowerCase()
        }

        function s(e) {
            return e.content && e.content.sender
        }

        function l(e) {
            return e.content && e.content.recipient
        }

        function c(e) {
            if (e.type === Y.a.Ban) return e.reason ? U.createElement("span", {
                className: "chat-line__moderation--ban-with-reason"
            }, Object(P.d)("{userLogin} has been banned. Reason: {reason}", {
                userLogin: e.userLogin,
                reason: e.reason
            }, "ChatLine")) : U.createElement("span", {
                className: "chat-line__moderation--ban"
            }, Object(P.d)("{userLogin}  is now banned from this room.", {
                userLogin: e.userLogin
            }, "ChatLine"));
            if (e.reason && e.duration) {
                var t = Object(P.d)("{userLogin} has been timed out for {duration} seconds. Reason: {reason}", {
                    duration: e.duration,
                    reason: e.reason,
                    userLogin: e.userLogin
                }, "ChatLine");
                return U.createElement("span", {
                    className: "chat-line__moderation--timeout-with-reason"
                }, t)
            }
            return e.duration ? U.createElement("span", {
                className: "chat-line__moderation--timeout"
            }, Object(P.d)("{userLogin} has been timed out for {duration} seconds.", {
                userLogin: e.userLogin,
                duration: e.duration
            }, "ChatLine")) : void 0
        }

        function d(e) {
            var t = Object(F.a)("https://twitch.amazon.com/prime", {
                ref: "subscriptionMessage",
                channel: e
            });
            return U.createElement("a", {
                className: "chat-line__subscribe--prime",
                href: t,
                target: "_blank",
                rel: "noopener"
            }, Object(P.d)("Twitch Prime", "ChatLine"))
        }

        function u(e, t) {
            return Object(P.d)("{userLogin} just subscribed with {service}!", {
                userLogin: e,
                service: t
            }, "ChatLine")
        }

        function p(e, t) {
            return Object(P.d)("{userLogin} just subscribed with a {subTier} sub!", {
                userLogin: e,
                subTier: t
            }, "ChatLine")
        }

        function m(e, t) {
            return Object(P.d)("{userLogin} gifted a subscription to {recipient}!", {
                userLogin: e,
                recipient: t
            }, "ChatLine")
        }

        function h(e, t, n) {
            return Object(P.d)("{userLogin} gifted a {subTier} sub to {recipient}!", {
                userLogin: e,
                subTier: t,
                recipient: n
            }, "ChatLine")
        }

        function g(e) {
            return e.isPrime ? U.createElement("span", null, u(e.userLogin, d(e.channel))) : U.createElement("span", null, p(e.userLogin, e.tier))
        }

        function f(e) {
            return "custom" === e.tier ? U.createElement("span", null, m(e.userLogin, e.recipient)) : U.createElement("span", null, h(e.userLogin, e.tier, e.recipient))
        }

        function b(e, t, n, i, a) {
            if (e.user) {
                var o = null;
                e.badges && (o = U.createElement(R.b, {
                    badgeSets: a,
                    badgesToRender: e.badges
                }));
                var s = e.isPrime ? u(e.user.userDisplayName, d(e.channel)) : p(e.user.userDisplayName, e.tier),
                    l = [U.createElement("span", {
                        key: "chat--resubbed"
                    }, s, U.createElement("span", {
                        key: "sub-separator"
                    }, " "), Object(P.d)("{userLogin} subscribed for {months} months in a row!", {
                        userLogin: e.user.userDisplayName,
                        months: e.months
                    }, "ChatLine"))];
                if (e.messageParts && e.user && !e.deleted) {
                    var c = null;
                    t && e.timestamp && (c = T(e.timestamp)), l.push(U.createElement("div", {
                        key: "resub-message",
                        className: "chat-line__subscribe--message"
                    }, c, o, U.createElement(A.a, {
                        userData: e.user
                    }), U.createElement("span", {
                        key: "separator"
                    }, " : "), r(e.messageParts, n, i)))
                }
                return l
            }
            return null
        }

        function v(e) {
            var t = e.enabled ? Object(P.d)("This room is now in slow mode. You may send messages every {length} seconds.", {
                length: e.length
            }, "ChatLine") : Object(P.d)("This room is no longer in slow mode.", "ChatLine");
            return U.createElement("span", null, t)
        }

        function y(e) {
            return U.createElement("span", null, e.message)
        }

        function k(e) {
            return U.createElement("span", null, e.message)
        }

        function S(e) {
            var t;
            if (e.length > 0) {
                var n = e.join(", ");
                t = Object(P.d)("The moderators of this room are: {moderatorList}", {
                    moderatorList: n
                }, "ChatLine")
            } else t = Object(P.d)("There are no moderators of this room.", "ChatLine");
            return U.createElement("span", null, t)
        }

        function _(e) {
            if (e.enabled) {
                var t = 0 === e.length ? Object(P.d)("This room is in followers-only mode.", "ChatLine") : Object(P.d)("This room is now in {length} followers-only mode.", {
                    length: Object(x.a)(60 * e.length)
                }, "ChatLine");
                return U.createElement("span", null, t)
            }
            return U.createElement("span", null, Object(P.d)("This room is no longer in followers-only mode.", "ChatLine"))
        }

        function C(e) {
            var t = e.enabled ? Object(P.d)("This room is now in subscriber-only mode.", "ChatLine") : Object(P.d)("This room is no longer in subscriber-only mode.", "ChatLine");
            return U.createElement("span", null, t)
        }

        function E() {
            return U.createElement("span", null, Object(P.d)("Chat was cleared by a moderator", "ChatLine"))
        }

        function w(e) {
            var t = e.getHours() % 12;
            0 === t && (t = 12);
            var n = e.getMinutes(),
                i = n.toString();
            return n < 10 && (i = "0" + i), t + ":" + i
        }

        function T(e) {
            return U.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, w(new Date(e)))
        }

        function N(e) {
            return U.createElement("span", {
                key: "timestamp",
                className: "chat-line__timestamp",
                "data-a-target": "chat-timestamp",
                "data-test-selector": "chat-timestamp"
            }, I(new Date(e), {
                hour: "numeric",
                minute: "numeric"
            }))
        }

        function O() {
            return U.createElement("span", null, Object(P.d)("The raid has been cancelled.", "RaidCancelMessage"))
        }

        function D(e, t, n) {
            return 0 === n ? Object(P.d)("<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}!</x:bold>", {
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return U.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage") : Object(P.d)("{numCrates, plural, one {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened a <x:bold>Twitch Crate!</x:bold>} other {<x:bold>{userName}</x:bold> bought <x:bold>{gameTitle}</x:bold> and opened # <x:bold>Twitch Crates!</x:bold>}}", {
                numCrates: n,
                userName: e,
                gameTitle: t,
                "x:bold": function(e) {
                    return U.createElement("strong", null, e)
                }
            }, "PurchaseNoticeSystemMessage")
        }

        function I(e, t) {
            void 0 === t && (t = {});
            var n = P.n.intl.getLanguageCode() || "en";
            return Intl.DateTimeFormat(n, t).format(e)
        }
        var U = n(1),
            P = n(2),
            x = n(849),
            F = n(125),
            R = n(784),
            A = n(788),
            M = n(850),
            L = n(0),
            j = n(11),
            B = n(7),
            V = n(851),
            H = n(3),
            W = n(827),
            G = (n(862), "https://static-cdn.jtvnw.net/emoticons/v1/58765/2.0"),
            q = {
                ERROR: "clips-chat-card-error"
            },
            z = {
                isTimedOut: !1
            },
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = z, t.timeoutID = null, t.renderLoadingCard = function() {
                        return U.createElement(H._17, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, U.createElement(H.P, {
                            display: H.H.Flex,
                            flexWrap: H.K.NoWrap,
                            padding: .5
                        }, U.createElement(H.U, {
                            className: "clips-chat-card"
                        }, U.createElement(H.U, {
                            className: "clips-chat-card__thumb",
                            display: H.H.Flex,
                            alignItems: H.c.Center,
                            justifyContent: H.T.Center
                        }, U.createElement(H.X, null)), U.createElement(H.U, {
                            display: H.H.Flex,
                            alignItems: H.c.Center
                        }, U.createElement(H.U, {
                            margin: {
                                left: 1
                            },
                            fullWidth: !0
                        }, U.createElement(H.U, {
                            ellipsis: !0
                        }, U.createElement(H._21, {
                            type: H._26.Span,
                            fontSize: H.L.Size5
                        }, Object(P.d)("Loading Clipperino...", "ClipsChatCard"))))))))
                    }, t.renderErrorCard = function() {
                        return U.createElement(H._17, {
                            elevation: 1,
                            margin: {
                                top: .5
                            }
                        }, U.createElement(H.P, {
                            display: H.H.Flex,
                            flexWrap: H.K.NoWrap,
                            padding: .5
                        }, U.createElement(H.U, {
                            className: "clips-chat-card"
                        }, U.createElement(H.U, {
                            className: "clips-chat-card__thumb",
                            display: H.H.Flex,
                            alignItems: H.c.Center,
                            justifyContent: H.T.Center
                        }, U.createElement("img", {
                            "data-test-selector": q.ERROR,
                            src: G,
                            className: "clips-chat-card__error-img"
                        })), U.createElement(H.U, {
                            display: H.H.Flex,
                            alignItems: H.c.Center
                        }, U.createElement(H.U, {
                            margin: {
                                left: 1
                            },
                            fullWidth: !0
                        }, U.createElement(H.U, {
                            ellipsis: !0
                        }, U.createElement(H._21, {
                            type: H._26.Span,
                            fontSize: H.L.Size5
                        }, Object(P.d)("Something went wrong", "ClipsChatCard"))), U.createElement(H.U, {
                            ellipsis: !0
                        }, U.createElement(H._21, {
                            type: H._26.Span,
                            fontSize: H.L.Size6,
                            color: H.F.Alt2
                        }, Object(P.d)("We couldn't find that Clip", "ClipsChatCard"))))))))
                    }, t
                }
                return L.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.props.data.clip || (this.timeoutID = setTimeout(function() {
                        e.setState({
                            isTimedOut: !0
                        })
                    }, 5e3))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.data.clip && e.data.clip && (this.timeoutID && (clearTimeout(this.timeoutID), this.timeoutID = null), this.setState({
                        isTimedOut: !1
                    }))
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e.clip,
                        n = e.error,
                        i = e.loading,
                        a = t && t.url ? Object(F.a)(t.url, {
                            tt_medium: "twitch_chat",
                            tt_content: "chat_card"
                        }) : "";
                    return n || this.state.isTimedOut ? this.renderErrorCard() : i || !t ? this.renderLoadingCard() : U.createElement(H._17, {
                        elevation: 1,
                        margin: {
                            top: .5
                        }
                    }, U.createElement(H.P, {
                        display: H.H.Flex,
                        flexWrap: H.K.NoWrap,
                        padding: .5
                    }, U.createElement(j.a, {
                        to: a,
                        target: "_blank",
                        className: "clips-chat-card"
                    }, U.createElement(H.U, {
                        className: "clips-chat-card__thumb",
                        display: H.H.Flex,
                        alignItems: H.c.Center,
                        justifyContent: H.T.Center
                    }, U.createElement(H.U, {
                        fullWidth: !0
                    }, U.createElement(H.j, {
                        ratio: H.k.Aspect16x9
                    }, U.createElement(V.a, {
                        imageURL: t.thumbnailURL
                    })))), U.createElement(H.U, {
                        display: H.H.Flex,
                        alignItems: H.c.Center
                    }, U.createElement(H.U, {
                        margin: {
                            left: 1
                        },
                        fullWidth: !0
                    }, U.createElement(H.U, {
                        className: "clips-chat-card__title",
                        ellipsis: !0
                    }, U.createElement(H._21, {
                        type: H._26.Span,
                        fontSize: H.L.Size5
                    }, t.title ? t.title : Object(P.d)("Clip of {broadcaster}", {
                        broadcaster: t.broadcaster.displayName
                    }, "ClipsChatCard"))), U.createElement(H.U, {
                        ellipsis: !0
                    }, U.createElement(H._21, {
                        type: H._26.Span,
                        fontSize: H.L.Size6,
                        color: H.F.Alt2
                    }, Object(P.d)("Clipped by {curator}", {
                        curator: t.curator.displayName
                    }, "ClipsChatCard"))))))))
                }, t
            }(U.Component),
            K = function(e) {
                return {
                    variables: {
                        slug: e.slug
                    },
                    notifyOnNetworkStatusChange: !0,
                    fetchPolicy: "cache-only"
                }
            },
            Q = Object(B.a)(W, {
                options: K
            })($),
            Y = n(757),
            J = n(250);
        t.b = i, t.e = r, t.f = c, t.n = g, t.m = f, t.i = b, t.k = v, t.g = y, t.d = k, t.j = S, t.c = _, t.l = C, t.a = E, t.o = T, t.p = N, t.q = O, t.h = D
    },
    782: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "badge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Badge"
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
                            value: "setID"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "version"
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
                        alias: {
                            kind: "Name",
                            value: "image1x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "NORMAL"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image2x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "DOUBLE"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: {
                            kind: "Name",
                            value: "image4x"
                        },
                        name: {
                            kind: "Name",
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "EnumValue",
                                value: "QUADRUPLE"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clickAction"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "clickURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 189
            }
        };
        n.loc.source = {
            body: "fragment badge on Badge {\n  id\n  setID\n  version\n  title\n  image1x: imageURL(size: NORMAL)\n  image2x: imageURL(size: DOUBLE)\n  image4x: imageURL(size: QUADRUPLE)\n  clickAction\n  clickURL\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    783: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(766),
            s = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(s.U, null, a.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Between,
                        alignItems: s.c.Center,
                        fullWidth: !0
                    }, a.createElement(s._21, {
                        bold: !0,
                        type: s._26.H5
                    }, Object(r.d)("Choose A Gift Subscription", "GiftTierTabs")), a.createElement(s.u, {
                        type: s.z.Text,
                        icon: s._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, a.createElement(s.U, {
                        alignItems: s.c.Center,
                        display: s.H.InlineFlex
                    }, a.createElement(s._21, null, Object(r.d)("Back", "GiftTierTabs"))))), a.createElement(o.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(a.Component),
            c = l;
        n.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), n.d(t, "a", function() {
            return c
        })
    },
    784: function(e, t, n) {
        "use strict";
        var i = n(826),
            a = n(818),
            r = n(795),
            o = (n(860), n(0)),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : (n = this.globalsBySet.get(e), void 0 !== n ? n.get(t) || null : null)
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === r.b && (e = o.__assign({}, e, {
                            channelName: n
                        }));
                        var i = t.get(e.setID);
                        i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                    })
                }, e
            }();
        new s([], [], "");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, "a", function() {
            return a.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    785: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.e];
                i || (i = Object(c.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var p = Object(l.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? p.dark = p.light : p.light = p.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: p
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n(1),
            r = n(2),
            o = n(36),
            s = n(247),
            l = n(350),
            c = n(353),
            d = n(351);
        n(847);
        n.d(t, "a", function() {
            return i
        })
    },
    786: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!e) return void a.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500)
        }
        t.a = i;
        var a = n(2)
    },
    787: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return a.__awaiter(this, void 0, void 0, function() {
                var n, i, r, l, c;
                return a.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            n = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, a.label = 1;
                        case 1:
                            if (!(i <= s)) return [3, 7];
                            a.label = 2;
                        case 2:
                            return a.trys.push([2, 5, , 6]), [4, fetch(n, {
                                method: "POST",
                                headers: {
                                    "Client-ID": o.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return r = a.sent(), [4, r.body];
                        case 4:
                            return l = a.sent(), [2, l];
                        case 5:
                            if (c = a.sent(), i === s) throw c;
                            return [3, 6];
                        case 6:
                            return ++i, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var a = n(0),
            r = n(1),
            o = n(2),
            s = 3,
            l = n(248),
            c = n(3),
            d = "subscribe-button__subscribe-with-prime",
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return a.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, i(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), o.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": d,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": d,
                        disabled: this.state.isSubscribing,
                        icon: c._9.Crown,
                        state: this.state.isSubscribing ? c.y.Loading : c.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(c._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": d,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.primeSubNotAvailable) : r.createElement(c.u, a.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": d,
                        icon: c._9.Crown,
                        linkTo: o.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(c._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(o.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(o.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(o.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(o.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(o.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(r.Component),
            p = u;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return p
        })
    },
    788: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(4),
            a = (n.n(i), n(1)),
            r = (n.n(a), n(861)),
            o = (n.n(r), function(e) {
                var t = [a.createElement("span", {
                    key: "username-display",
                    className: "chat-author__display-name",
                    "data-a-target": "chat-message-username",
                    "data-test-selector": "message-username",
                    style: {
                        color: e.userData.color
                    }
                }, e.userData.userDisplayName)];
                if (e.userData.isIntl) {
                    var n = i((r = {}, r["chat-author__intl-login"] = !e.highlighted, r["chat-author__intl-login--highlighted"] = e.highlighted, r));
                    t.push(a.createElement("span", {
                        key: "username-login",
                        style: {
                            color: e.userData.color
                        },
                        className: n,
                        "data-test-selector": "message-username-canonical"
                    }, " (" + e.userData.userLogin + ")"))
                }
                return a.createElement("span", {
                    key: e.userData.userID + "-authorlabel"
                }, t);
                var r
            })
    },
    789: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
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
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    790: function(e, t) {},
    791: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
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
                                    value: "directories"
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
                                            value: "nodes"
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
                                                    value: "directoryType"
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
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    792: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
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
                            value: "reportUserInCommunity"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    793: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
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
                            value: "reportContent"
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
                                    value: "contentID"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    794: function(e, t, n) {
        "use strict";
        var i = n(2),
            a = n(13),
            r = {
                Public: "public"
            };
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        });
        var o = function(e) {
                return {
                    channel: e.channelLogin,
                    is_host_mode: e.isHostMode,
                    is_using_web_sockets: !0,
                    room_type: r.Public
                }
            },
            s = function(e) {
                i.m.track(a.SpadeEventType.ChatRoomJoined, o(e))
            }
    },
    795: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i = "subscribe_to_channel",
            a = "turbo",
            r = "visit_url",
            o = "broadcaster"
    },
    796: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.recent_raids = 0] = "recent_raids", e[e.chat_message = 1] = "chat_message", e[e.viewer_list = 2] = "viewer_list", e[e.test = 3] = "test"
        }(i || (i = {}))
    },
    797: function(e, t) {},
    799: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = i;
        var a = /\scurse\/\d/
    },
    800: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = n(7),
            s = n(5),
            l = n(3),
            c = n(810),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return a.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(r.d)("Gift Subscription", "GiftSubscribeButton"))
                }, t = i.__decorate([Object(s.c)("GiftSubscribeButton"), Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(a.Component),
            u = d;
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, "a", function() {
            return u
        })
    },
    801: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case 0:
                    return Object(r.d)("0 minutes (Any followers)", "FollowersOnlyLabel");
                case 10:
                    return Object(r.d)("10 minutes (Most used)", "FollowersOnlyLabel");
                case 30:
                    return Object(r.d)("30 minutes", "FollowersOnlyLabel");
                case 60:
                    return Object(r.d)("1 hour", "FollowersOnlyLabel");
                case 1440:
                    return Object(r.d)("1 day", "FollowersOnlyLabel");
                case 10080:
                    return Object(r.d)("1 week", "FollowersOnlyLabel");
                case 43200:
                    return Object(r.d)("1 month", "FollowersOnlyLabel");
                case 129600:
                    return Object(r.d)("3 months", "FollowersOnlyLabel");
                default:
                    return r.i.warn("[FollowersOnlyLabel] Tried to generate a label for a non-preset.", e), ""
            }
        }

        function a(e) {
            switch (e) {
                case 0:
                    return Object(r.d)("0 min", "FollowersOnlyShorthand");
                case 10:
                    return Object(r.d)("10 min", "FollowersOnlyShorthand");
                case 30:
                    return Object(r.d)("30 min", "FollowersOnlyShorthand");
                case 60:
                    return Object(r.d)("1 hr", "FollowersOnlyShorthand");
                case 1440:
                    return Object(r.d)("1 day", "FollowersOnlyShorthand");
                case 10080:
                    return Object(r.d)("1 wk", "FollowersOnlyShorthand");
                case 43200:
                    return Object(r.d)("1 mo", "FollowersOnlyShorthand");
                case 129600:
                    return Object(r.d)("3 mo", "FollowersOnlyShorthand");
                default:
                    return Object(r.d)("custom", "FollowersOnlyShorthand")
            }
        }
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return s
        }), t.c = i, t.d = a;
        var r = n(2),
            o = 30,
            s = [0, 10, 30, 60, 1440, 10080, 43200, 129600]
    },
    802: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var i = e.tiers.map(function(e) {
                    var t = new Map,
                        n = new Map,
                        i = new Map,
                        r = new Map;
                    return e.images.forEach(function(e) {
                        "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
                    }), a.__assign({
                        indexedImages: {
                            LIGHT: {
                                static: t,
                                animated: n
                            },
                            DARK: {
                                static: i,
                                animated: r
                            }
                        }
                    }, e)
                });
                i.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var r = a.__assign({}, e, {
                    indexedTiers: new Map(i.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: i
                });
                t.push(r), n[r.prefix.toLowerCase()] = r
            }), {
                indexedActions: n,
                orderedActions: t
            }
        }
        t.a = i;
        var a = n(0)
    },
    803: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            a = n(1),
            r = (n.n(a), n(3)),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, a.createElement(r.I, {
                        dragOver: this.state.isDraggingOver
                    }, a.createElement(r.P, {
                        display: r.H.Hide
                    }, a.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(a.Component)
    },
    805: function(e, t) {
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
                            value: "bits"
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
                                value: "BitsBundleOffer"
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
                                    value: "price"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "discount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 197
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\n  id\n  type\n  bits\n  ... on BitsBundleOffer {\n    price\n    discount\n    isPromo\n    url\n    includesVAT\n    promotion {\n      id\n      type \n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    806: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
        }

        function a(e) {
            return "" === e ? "" : e.startsWith("v") ? e : "v" + e
        }
        t.b = i, t.a = a
    },
    807: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "cheer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
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
                            value: "cheer"
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
                                    value: "emotes"
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
                                            value: "prefix"
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
                                            value: "tiers"
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
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "images"
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
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
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
                end: 270
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\n  cheer {\n    id\n    emotes {\n      id\n      prefix\n      type\n      tiers {\n        id\n        bits\n        color\n        images {\n          id\n          url\n          theme\n          isAnimated\n          dpiScale\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    810: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
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
                            value: "subProductId"
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
                                    value: "recipientLogin"
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
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
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
                end: 195
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    811: function(e, t) {},
    812: function(e, t) {},
    813: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
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
                                    value: "subscriptionProducts"
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
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
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
                end: 246
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    814: function(e, t) {},
    815: function(e, t) {},
    816: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
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
                                            value: "price"
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
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
                                            value: "emotes"
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
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
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
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
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
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "startsAt"
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
                                                    value: "gift"
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
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
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
                end: 673
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    817: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(h.bindActionCreators)({
                closeModal: c.c
            }, e)
        }

        function a(e) {
            return p.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return p.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = g.b.get("bits_truex_partner_hash", ""), !(n = g.b.get("bits_truex_api_url", "")) || !t) return g.i.warn("Truex API info missing from dynamic settings"), [2, y.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return i = o.sent(), i.ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = o.sent()) && Array.isArray(a) && a.length) return [2, y.Available];
                            o.label = 4;
                        case 4:
                            return [2, y.Unavailable];
                        case 5:
                            return r = o.sent(), g.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, y.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function r(e) {
            return {
                adModalOpen: Object(d.b)(e, w),
                isLoggedIn: Object(u.d)(e)
            }
        }

        function o(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(c.d)(w, t))
                }
            }
        }
        var s, l = n(8),
            c = n(49),
            d = n(85),
            u = n(18),
            p = n(0),
            m = n(1),
            h = n(10),
            g = n(2),
            f = n(123),
            b = n(7),
            v = n(22);
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(s || (s = {}));
        var y, k = n(357),
            S = n(758),
            _ = n(3),
            C = n(835),
            E = (n(836), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, a, r, o;
                            return p.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (n = t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return i = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(i, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(S.g)({
                                                campaignID: a.campaign_id.toString(),
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
                                            if (!(a = JSON.parse(t.activityJSON))) return [2];
                                            Object(S.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: a.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return l.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(v.a)({
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
                                        return r = l.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(r.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return o = l.sent(), g.i.warn("Error while redeeming bits for truex ad", o), this.props.onError && this.props.onError(s.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(s.LimitReached) : t.type === k.a.Adblock ? this.props.onError(s.Adblock) : t.type === k.a.OnError ? this.props.onError(s.Unknown) : this.hasAwarded || this.props.onError(s.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._17, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(f.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = p.__decorate([Object(b.a)(C, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            w = Object(l.a)(null, i)(E),
            T = n(4),
            N = n(786),
            O = n(29);
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(y || (y = {}));
        var D, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(g.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._17, {
                    className: "bits-buy-card__offer-row",
                    display: _.H.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.T.Between,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.U, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(g.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.U, {
                    flexShrink: 0,
                    display: _.H.Flex,
                    flexDirection: _.J.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(g.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.U, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._22.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            U = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(S.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === y.Available
                                    }), e !== y.Available && e !== y.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return U.test(navigator.userAgent) ? null : m.createElement(I, p.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            x = n(767),
            F = n(247),
            R = n(350),
            A = n(768),
            M = n(353),
            L = n(351),
            j = (n(837), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(A.b)({
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
                return p.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === x.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(P, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(A.c)(this.props.offer) ? t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._21, {
                        type: _._26.Strong,
                        fontSize: _.L.Size6
                    }, Object(g.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(A.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === x.c && (t = m.createElement(_.U, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._21, {
                        type: _._26.Strong,
                        fontSize: _.L.Size6
                    }, Object(g.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(g.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(A.c)(this.props.offer) || Object(A.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(g.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? _._17 : _.U;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.H.Flex,
                        justifyContent: _.T.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.J.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.U, {
                        display: _.H.Flex,
                        justifyContent: _.T.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.U, {
                        flexGrow: 1
                    }, m.createElement(_._21, {
                        type: _._26.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.U, {
                        flexShrink: 0,
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(_.U, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._22.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[F.e];
                    t || (t = Object(M.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.U, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(L.a, {
                            key: e.bits,
                            sources: Object(R.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            B = (n(838), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var o = m.createElement(j, {
                            key: a.id,
                            offer: a,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        s = Object(A.d)(a),
                        l = Object(A.c)(a),
                        c = a.type === x.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? i = o : c || s || n.push(o)
                }), e.fullsize ? m.createElement(_.U, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n) : m.createElement(O.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.U, {
                    flexGrow: 1,
                    flexWrap: _.K.NoWrap,
                    display: _.H.Flex,
                    flexDirection: _.J.Column
                }, i, t, n))
            }),
            V = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._21, {
                    italic: !0,
                    type: _._26.P,
                    color: _.F.Alt
                }, Object(g.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._21, {
                    color: _.F.Alt
                }, Object(g.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(_._21, {
                    color: _.F.Alt
                }, Object(g.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._17, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.U, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    color: _.F.Alt
                }, Object(g.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            H = n(770),
            W = function(e) {
                return m.createElement(_.U, {
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(H.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig
                }), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, Object(g.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.P, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._21, {
                    color: _.F.Alt2
                }, Object(g.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(g.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.U, {
                    display: _.H.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(g.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(g.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, a(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), e !== y.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(W, p.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            q = (n(840), function(e) {
                var t = Object(g.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(g.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case s.Adblock:
                        i = "adserroradblock", n = Object(g.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case s.LimitReached:
                        i = "adserrorlimit", t = Object(g.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(g.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case s.ExitEarly:
                        n = Object(g.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(g.d)("Try Again", "Bits--WatchAdError")));
                return e.type === s.LimitReached && (a = m.createElement(_.U, {
                    className: "watch-ad-error__footer",
                    display: _.H.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.T.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(g.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(g.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.U, {
                    padding: {
                        x: 1
                    },
                    display: _.H.Flex,
                    flexGrow: 1,
                    flexDirection: _.J.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.K.NoWrap
                }, m.createElement(_.U, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: F.a + "/light/static/1/" + i + ".png"
                })), m.createElement(_.U, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._21, {
                    type: _._26.H4,
                    bold: !0
                }, t)), m.createElement(_._21, {
                    color: _.F.Alt2
                }, n), a)
            }),
            z = n(841);
        n(842);
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(D || (D = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: D.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(N.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: D.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: S.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: D.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === D.Error && (t.setState({
                            wateb: D.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return p.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = T({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === S.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === S.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._8, {
                            asset: _._9.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._17, p.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center
                    }, e), m.createElement(_.X, {
                        delay: 0
                    }), m.createElement(_.U, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._21, {
                        italic: !0
                    }, Object(g.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.U, p.__assign({
                        className: T(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        padding: 2,
                        textAlign: _._22.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._21, {
                        italic: !0
                    }, Object(g.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(_._17, p.__assign({
                        className: T(t, "bits-buy-card--shorter"),
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.T.Center,
                        textAlign: _._22.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === x.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(B, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: o,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === S.b.ChatTooltip && (l = m.createElement(V, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._17, p.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.H.Flex,
                        flexDirection: _.J.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case D.Awarded:
                            return m.createElement(G, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case D.Error:
                            return m.createElement(q, {
                                type: this.state.watebError || s.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = p.__decorate([Object(b.a)(z, {
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
                })], t)
            }(m.Component),
            K = $,
            Q = Object(l.a)(r, o)(K);
        n.d(t, !1, function() {
            return r
        }), n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return Q
        })
    },
    818: function(e, t, n) {
        "use strict";

        function i(e) {
            return "https://www.twitch.tv/" + e + "/subscribe?ref=in_chat_subscriber_link"
        }

        function a(e) {
            switch (e.clickAction) {
                case o.d:
                    return e.clickURL;
                case o.b:
                    return e.channelName ? i(e.channelName) : "";
                case o.c:
                    return c;
                default:
                    return ""
            }
        }
        n.d(t, "a", function() {
            return d
        });
        var r = n(1),
            o = (n.n(r), n(795)),
            s = n(3),
            l = n(859),
            c = (n.n(l), "https://www.twitch.tv/products/turbo?ref=chat_badge"),
            d = function(e) {
                var t = e.badge,
                    n = r.createElement("img", {
                        alt: t.title,
                        className: "chat-badge",
                        src: t.image1x,
                        srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                    }),
                    i = a(t);
                return "" !== i && (n = r.createElement("a", {
                    href: i,
                    target: "_blank"
                }, n)), r.createElement(s._30, {
                    key: t.image1x,
                    label: t.title,
                    display: s.H.Inline,
                    align: s._31.Left,
                    offsetY: "0.9rem",
                    "data-a-target": "chat-badge"
                }, n)
            }
    },
    819: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            DarkMode: "darkMode",
            FollowerDuration: "followerDuration",
            FollowerMode: "followerMode",
            HideChat: "hideChat",
            ShowMessageFlags: "showMessageFlags",
            ShowModActions: "showModerationActions",
            ShowModIcons: "showModIcons",
            ShowTimestamps: "showTimestamps",
            SlowMode: "slowMode"
        }
    },
    820: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var i, a = "VIEWS",
            r = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    822: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return ie.__assign({}, e, n)
        }

        function a(e, t) {
            switch (void 0 === e && (e = qe()), t.type) {
                case ae:
                    return ie.__assign({}, e, {
                        videos: i(e.videos, t.videos)
                    });
                case ue:
                    return t.hits && t.hits.results.length > 0 ? ie.__assign({}, e, {
                        searchHits: t.hits.results
                    }) : ie.__assign({}, e, {
                        searchHits: []
                    });
                case De:
                    return ie.__assign({}, qe());
                default:
                    return e
            }
        }

        function r() {
            return {
                messageCreatedTooQuickError: Object(gt.d)("Your message was not sent because you are sending messages too quickly.", "format-error-messages"),
                chatReplayFilterError: Object(gt.d)("Your message has been posted. However, other messages posted after the live stream are hidden.", "format-error-messages")
            }
        }

        function o(e, t) {
            switch (void 0 === e && (e = ft()), t.type) {
                case ge:
                    var n = ie.__assign({}, t.comments[0], {
                        highlight: !0,
                        source: Je
                    });
                    return ie.__assign({}, e, {
                        comments: it(e.comments, [n]),
                        isPostCooldownActive: !0
                    });
                case be:
                    return ie.__assign({}, e, {
                        errorMessage: t.createError
                    });
                case ye:
                    return ie.__assign({}, e, {
                        errorMessage: t.errorMessage
                    });
                case Ce:
                    var i = t.comments[0].parentId,
                        a = e.cursor,
                        o = e.replyCursorMap,
                        s = t.comments.slice();
                    if ("" === i) a = t.cursor;
                    else if (o = ie.__assign({}, e.replyCursorMap, (m = {}, m[i] = t.cursor.future, m)), t.cursor.future === Xe) {
                        var l = at(e.comments, i);
                        if (l) {
                            var c = ie.__assign({}, l, {
                                moreReplies: !1
                            });
                            s.push(c)
                        }
                    }
                    var d = it(e.comments, s);
                    return e.isScrollingSynced && (d = ot(d, bt)), ie.__assign({}, e, {
                        comments: d,
                        cursor: a,
                        hasLoadedData: !0,
                        replyCursorMap: o
                    });
                case we:
                    return ie.__assign({}, e, {
                        comments: it(nt(), t.comments),
                        hasLoadedData: !0,
                        cursor: t.cursor,
                        replyCursorMap: {}
                    });
                case Ne:
                    return ie.__assign({}, e, {
                        hasLoadedData: !0
                    });
                case ae:
                    return ie.__assign({}, e, {
                        comments: it(nt(), t.comments),
                        cursor: t.cursor,
                        hasLoadedData: !0,
                        errorMessage: ""
                    });
                case oe:
                    return ie.__assign({}, ft(), {
                        hasLoadedData: !0,
                        errorMessage: t.error
                    });
                case $e:
                    return ie.__assign({}, e, {
                        currentVideoTime: Math.floor(t.updatedTime)
                    });
                case ze:
                case De:
                    return ie.__assign({}, ft());
                case me:
                    return ie.__assign({}, e, {
                        comments: rt(e.comments, t.comment)
                    });
                case Ue:
                    var u = e.errorMessage;
                    return u === r().messageCreatedTooQuickError && (u = ""), ie.__assign({}, e, {
                        isPostCooldownActive: !1,
                        errorMessage: u
                    });
                case Re:
                    return ie.__assign({}, e, {
                        isScrollingSynced: !1
                    });
                case xe:
                    return ie.__assign({}, e, {
                        comments: ot(e.comments, bt),
                        isScrollingSynced: !0
                    });
                case ce:
                    var p = function(e) {
                        return e.commenter !== t.user
                    };
                    return ie.__assign({}, e, {
                        comments: st(e.comments, p)
                    });
                case Se:
                    return ie.__assign({}, e, {
                        comments: it(e.comments, t.comments)
                    });
                case Me:
                    return ie.__assign({}, e, {
                        isReplayFilterOn: t.isReplayFilterOn
                    });
                case je:
                    return ie.__assign({}, e, {
                        hasDismissedChatReplayError: !0
                    });
                case Ve:
                    return ie.__assign({}, e, {
                        hideTimestamps: t.hideTimestamps
                    });
                case We:
                    return ie.__assign({}, e, {
                        isReplayFilterOn: t.isReplayFilterOn,
                        hideTimestamps: t.hideTimestamps
                    });
                default:
                    return e
            }
            var m
        }

        function s(e) {
            return void 0 === e && (e = vt), e
        }

        function l(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.id] = t, e
            }, {});
            return ie.__assign({}, e, n)
        }

        function c(e, t) {
            switch (void 0 === e && (e = yt), t.type) {
                case Ce:
                case we:
                case ae:
                case ge:
                    return {
                        users: l(e.users, t.users)
                    };
                case De:
                    return ie.__assign({}, kt());
                default:
                    return e
            }
        }

        function d(e, t) {
            return u(e, t).then(function(e) {
                return e.json()
            })
        }

        function u(e, t) {
            return fetch(e, t).then(function(e) {
                return e.status >= 300 ? Promise.reject(e) : e
            })
        }

        function p(e) {
            void 0 === e && (e = "");
            var t = {};
            return "" !== e && (t[Tt] = "OAuth " + e), t
        }

        function m(e) {
            return Pt.getClient(Object(Ct.a)(e.getState()))
        }

        function h(e) {
            return new URL(Nt + "/videos/" + e)
        }

        function g(e, t, n, i) {
            var a, r = 0,
                o = Array.from(t);
            return a = e.reduce(function(e, t) {
                var n = t.begin,
                    i = t.end,
                    a = o.slice(r, n),
                    s = o.slice(n, i + 1);
                return 0 !== a.length && e.push({
                    type: Ft.a.Text,
                    content: a.join("")
                }), e.push({
                    type: Ft.a.Emote,
                    content: {
                        images: {
                            themed: !1,
                            sources: {
                                "1x": Object(Rt.e)(t._id, 1),
                                "2x": Object(Rt.e)(t._id, 2),
                                "4x": Object(Rt.e)(t._id, 4)
                            }
                        },
                        alt: s.join("")
                    }
                }), r = i + 1, e
            }, []), r < t.length && a.push({
                type: Ft.a.Text,
                content: o.slice(r).join("")
            }), i ? a.reduce(function(e, t) {
                return t.type === Ft.a.Text ? e.concat(Object(xt.c)(t.content, n)) : (e.push(t), e)
            }, []) : a
        }

        function f() {
            return {
                past: Xe,
                future: Xe
            }
        }

        function b(e) {
            return O(e) ? {
                message: e.message,
                parent_id: e.parentId
            } : {
                content_id: e.contentId,
                content_offset_seconds: e.contentOffsetSeconds,
                content_type: e.contentType,
                message: e.message
            }
        }

        function v(e) {
            return e.reduce(function(e, t) {
                return e[t._id] = t.version, e
            }, {})
        }

        function y(e) {
            var t = h(e);
            return new URL(t.toString() + "/comments")
        }

        function k(e) {
            var t = S(e).toString();
            return new URL(t + "/replies")
        }

        function S(e) {
            return new URL(Nt + "/videos/comments/" + e)
        }

        function _(e, t) {
            var n;
            n = O(t) ? k(t.parentId) : y(t.contentId);
            var i = b(t),
                a = {
                    method: Ot,
                    body: JSON.stringify(i)
                };
            return e.doAuthRequest(n, a).then(function(e) {
                return Vt(e)
            })
        }

        function C(e, t) {
            try {
                if (N(t)) return E(e, t);
                var n = void 0,
                    i = new URLSearchParams;
                return D(t) ? i.append($t, t.cursor) : I(t) && (i.append(zt, "" + t.offset), void 0 !== t.highlightedMessageID && i.append(Kt, t.highlightedMessageID)), n = new URL("?" + i.toString(), y(t.videoID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                    return Ht(e, t.bitsConfig)
                })
            } catch (e) {
                return Promise.reject(e)
            }
        }

        function E(e, t) {
            var n, i = new URLSearchParams;
            return void 0 !== t.cursor && i.append($t, t.cursor), n = new URL("?" + i.toString(), k(t.commentID).toString()), e.doAuthRequest(n, {}).then(function(e) {
                return Wt(e)
            })
        }

        function w(e, t) {
            var n = S(t.comment.id),
                i = {
                    method: Dt,
                    body: JSON.stringify({
                        state: t.state
                    })
                };
            return e.doAuthRequest(n, i).then(function(e) {
                return Vt(e)
            }, function(e) {
                return Promise.reject(e)
            })
        }

        function T(e, t) {
            var n = S(t.id),
                i = {
                    method: It
                };
            return e.doRawAuthRequest(n, i)
        }

        function N(e) {
            return "commentID" in e
        }

        function O(e) {
            return "parentId" in e
        }

        function D(e) {
            return "cursor" in e
        }

        function I(e) {
            return "offset" in e
        }

        function U(e) {
            var t = new URL(Nt + "/videos/comments/"),
                n = new URLSearchParams;
            return n.append(Xt, en.toString()), n.append(Zt, e.videoId), void 0 !== e.cursor && n.append($t, e.cursor), t.search = "?" + n, t
        }

        function P(e) {
            var t = new URL(Nt + "/videos/comments/"),
                n = new URLSearchParams;
            return n.append(Xt, en.toString()), n.append(Jt, e.userId), void 0 !== e.cursor && n.append($t, e.cursor), t.search = "?" + n, t
        }

        function x(e) {
            return new URL(Nt + "/videos/channels/" + e.targetChannel + "/bans")
        }

        function F(e, t) {
            var n;
            return n = A(e) ? P(e) : U(e), t.doAuthRequest(n, {}).then(function(t) {
                return Qt(t, e.bitsConfig)
            })
        }

        function R(e, t) {
            var n = new URL(x(e).toString()),
                i = {
                    method: Ot,
                    body: JSON.stringify({
                        commenter_id: e.bannedUser
                    })
                };
            return t.doRawAuthRequest(n, i)
        }

        function A(e) {
            return "userId" in e
        }

        function M(e, t, n, i) {
            return e in t ? {
                bitsConfig: i,
                commentID: e,
                cursor: t[e]
            } : {
                bitsConfig: i,
                commentID: e,
                videoID: n
            }
        }

        function L(e) {
            var t = e.currentVideoTime < e.offsetRange.beginSec,
                n = e.currentVideoTime > e.offsetRange.endSec;
            return t && H(e.cursor) || n && V(e.cursor)
        }

        function j(e) {
            return V(e.cursor) && B({
                currentVideoTime: e.currentVideoTime,
                offsetEndTime: e.offsetEndTime,
                offsetThreshold: e.offsetThreshold
            })
        }

        function B(e) {
            var t = e.offsetEndTime - e.offsetThreshold;
            return e.currentVideoTime >= t && e.currentVideoTime <= e.offsetEndTime
        }

        function V(e) {
            return e.future !== Xe
        }

        function H(e) {
            return e.past !== Xe
        }

        function W(e, t) {
            var n = e.id === t.id,
                i = e.roles.isGlobalMod || e.roles.isSiteAdmin || e.roles.isStaff;
            return !!t.self && t.self.isModerator || i || n
        }

        function G(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, gt.o.apollo.client)
            }
        }

        function q(e, t) {
            return function(n, i) {
                e({
                    dispatch: n,
                    getState: i
                }, t, gt.o.apollo.client, gt.n)
            }
        }

        function z() {
            return {
                CommenterBannedError: Object(ne.d)("You are banned from sending messages in this channel", "routines-comments"),
                CommentingDisabledError: Object(ne.d)("Sending messages in this channel is disabled", "routines-comments"),
                UserNotVerifiedError: Object(ne.d)("Account email verification required to send a message", "routines-comments"),
                MaxChildCommentsError: Object(ne.d)("The reply limit for this message has been reached", "routines-comments"),
                MessageLikelySpamError: Object(ne.d)("Your message was blocked by the spam filter", "routines-comments"),
                MessageContainsBannedWordsError: Object(ne.d)("Your message wasn't posted due to conflicts with the channel's moderation settings", "routines-comments")
            }
        }

        function $() {
            return Object(ne.d)("Unable to send a new message at this time", "routines-comments")
        }

        function K(e) {
            return {
                isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                hideTimestamps: e.vodChat.comments.hideTimestamps
            }
        }

        function Q(e) {
            return {
                onReplayModeChange: function(t) {
                    Vn({
                        setting: Mn,
                        value: t ? jn : Bn
                    }), e(Le(t))
                },
                onTimestampModeChange: function(t) {
                    Vn({
                        setting: Ln,
                        value: t ? jn : Bn
                    }), e(He(t))
                }
            }
        }

        function Y() {
            return r().messageCreatedTooQuickError
        }

        function J() {
            return r().messageCreatedTooQuickError
        }

        function X(e, t) {
            return !t.data.loading && !t.data.error && (t.data.badges !== e.data.badges || t.data.video.owner !== e.data.video.owner)
        }

        function Z(e, t) {
            var n = {
                comments: [],
                currentVideoTime: e.vodChat.comments.currentVideoTime,
                cursor: e.vodChat.comments.cursor,
                errorMessage: e.vodChat.comments.errorMessage,
                hasFetchedComments: e.vodChat.comments.hasLoadedData,
                hasRequestedCurrentUserBlockList: e.vodChat.comments.hasLoadedCurrentUserBlockedList,
                isCreationCoolDownActive: e.vodChat.comments.isPostCooldownActive,
                isCurrentUserModerator: !1,
                isLoggedIn: Object(Ct.d)(e),
                isReplayFilterOn: e.vodChat.comments.isReplayFilterOn,
                isScrollingSynced: e.vodChat.comments.isScrollingSynced,
                offsetRange: gn(e.vodChat.comments.comments),
                replyCursorMap: e.vodChat.comments.replyCursorMap,
                shouldSendReplayFilterError: !1,
                hideTimestamps: e.vodChat.comments.hideTimestamps,
                videoID: t.videoID
            };
            if (void 0 !== t.highlightedMessageID && (n.highlightedMessageID = t.highlightedMessageID), void 0 !== t.highlightTimestamp && (n.highlightTimestamp = t.highlightTimestamp), !t.data.loading && !t.data.error) {
                var i = t.data,
                    a = i.currentUser,
                    r = i.video;
                null !== a && a.roles && (n.isCurrentUserModerator = W(a, r.owner)), n.comments = ln(e, t.data.video.broadcastType, n.isCurrentUserModerator, t.blockedUsers), n.shouldSendReplayFilterError = ji(e.vodChat.comments.isReplayFilterOn, t.data.video.broadcastType !== tn.a.Upload, e.vodChat.comments.hasDismissedChatReplayError)
            }
            return n
        }

        function ee(e, t) {
            return {
                onUpdateBegan: function(n, i) {
                    if (i.videoID !== n.videoID) return void e(Ke(n.videoID));
                    if (!n.hasFetchedComments) {
                        var a = {
                            bitsConfig: t.bitsConfig,
                            offset: n.currentVideoTime,
                            videoID: n.videoID
                        };
                        if (n.highlightTimestamp && n.currentVideoTime !== n.highlightTimestamp) return;
                        return n.highlightedMessageID && (a.highlightedMessageID = n.highlightedMessageID), void e(G(si, a))
                    }
                    if (n.offsetRange !== rn) {
                        if (j({
                                cursor: n.cursor,
                                currentVideoTime: n.currentVideoTime,
                                offsetEndTime: n.offsetRange.endSec,
                                offsetThreshold: Da
                            })) return void e(G(si, {
                            bitsConfig: t.bitsConfig,
                            cursor: n.cursor.future,
                            videoID: n.videoID
                        }));
                        if (L(n)) return void e(G(si, {
                            bitsConfig: t.bitsConfig,
                            offset: n.currentVideoTime,
                            videoID: n.videoID
                        }))
                    }
                },
                onCreate: function(t) {
                    if (Object(Li.l)(t.message)) {
                        var n = Object(gt.d)("Sorry, commands are not supported in Chat on Videos yet.", "VideoChatPresentation");
                        return void e(ke(n))
                    }
                    e(G(li, t)), e(q(gi, t))
                },
                onError: function(t) {
                    e(ke(t))
                },
                onErrorDismissClick: function() {
                    e(Be())
                },
                onUnmount: function() {
                    e(Ie())
                },
                onLoadMoreReplies: function(t, n, i, a) {
                    e(G(si, M(t, n, i, a)))
                },
                onDisableSync: function() {
                    e(Ae())
                },
                onEnableSync: function() {
                    e(Fe())
                },
                onShowLogin: t.onShowLogin,
                onBanUser: function(t) {
                    e(G(wn, t)), e(q(mi, t))
                },
                onDeleteComment: function(t) {
                    e(G(ci, t)), e(q(hi, t))
                },
                onPlayerSeekRequest: function(n, i) {
                    t.onPlayerSeekRequest(n), void 0 !== i && e(q(bi, i))
                },
                onTurnOffReplayFilter: function() {
                    e(Le(!1))
                },
                onWillMount: function() {
                    e(Ge())
                }
            }
        }
        var te = n(10),
            ne = n(2),
            ie = n(0),
            ae = "vodChat.channel-moderation-comments.RESULTS_RECEIVED",
            re = function(e, t) {
                return ie.__assign({
                    type: ae
                }, e, {
                    bitsConfig: t
                })
            },
            oe = "vodChat.channel-moderation-comments.RESULTS_FAILED",
            se = function(e) {
                return {
                    type: oe,
                    error: e
                }
            },
            le = function(e) {
                return {
                    type: "vodChat.channel-moderation-comments.BAN_FAILED",
                    error: e
                }
            },
            ce = "vodChat.channel-moderation-comments.BAN_SUCCESS",
            de = function(e) {
                return {
                    type: ce,
                    user: e
                }
            },
            ue = "vodChat.channel-moderation-comments.SEARCH_SUCCESS",
            pe = function(e) {
                return {
                    type: ue,
                    hits: e
                }
            },
            me = "vodChat.comments.DELETED_SUCCESS",
            he = function(e) {
                return ie.__assign({
                    type: me
                }, e)
            },
            ge = "vodChat.comments.CREATED_SUCCESS",
            fe = function(e) {
                return ie.__assign({
                    type: ge
                }, e)
            },
            be = "vodChat.comments.CREATE_FAILED",
            ve = function(e) {
                return {
                    type: be,
                    createError: e
                }
            },
            ye = "vodChat.comments.DISPLAY_ERROR",
            ke = function(e) {
                return {
                    type: ye,
                    errorMessage: e
                }
            },
            Se = "vodChat.comments.UPDATED_SUCCESS",
            _e = function(e) {
                return ie.__assign({
                    type: Se
                }, e)
            },
            Ce = "vodChat.comments.CURSOR_RECEIVED",
            Ee = function(e) {
                return ie.__assign({
                    type: Ce
                }, e)
            },
            we = "vodChat.comments.OFFSET_RECEIVED",
            Te = function(e) {
                return ie.__assign({
                    type: we
                }, e)
            },
            Ne = "vodChat.comments.QUERY_FAILED",
            Oe = function() {
                return {
                    type: Ne
                }
            },
            De = "vodChat.comments.CLEARED",
            Ie = function() {
                return {
                    type: De
                }
            },
            Ue = "vodChat.comments.COOLDOWN_ENDED",
            Pe = function() {
                return {
                    type: Ue
                }
            },
            xe = "vodChat.comments.SYNC_ENABLED",
            Fe = function() {
                return {
                    type: xe
                }
            },
            Re = "vodChat.comments.SYNC_DISABLED",
            Ae = function() {
                return {
                    type: Re
                }
            },
            Me = "vodChat.comments.REPLAY_FILTER_CHANGED",
            Le = function(e) {
                return ne.k.set("videoChat.is_replay_mode", e), {
                    type: Me,
                    isReplayFilterOn: e
                }
            },
            je = "vodChat.comments.CHAT_REPLAY_ERROR_HIDE",
            Be = function() {
                return {
                    type: je
                }
            },
            Ve = "vodChat.comments.TIMESTAMP_MODE_CHANGED",
            He = function(e) {
                return ne.k.set("videoChat.hide_timestamps", e), {
                    type: Ve,
                    hideTimestamps: e
                }
            },
            We = "vodChat.comments.REQUEST_CHAT_SETTINGS",
            Ge = function() {
                return {
                    type: We,
                    isReplayFilterOn: ne.k.get("videoChat.is_replay_mode", !1),
                    hideTimestamps: ne.k.get("videoChat.hide_timestamps", !1)
                }
            },
            qe = function(e) {
                return ie.__assign({
                    searchHits: [],
                    videos: {}
                }, e)
            },
            ze = "vodChat.video.CURRENT_VIDEO_CHANGED",
            $e = "vodChat.video.CURRENT_VIDEO_TIME_CHANGED",
            Ke = function(e) {
                return {
                    type: ze,
                    id: e
                }
            },
            Qe = function(e) {
                return {
                    type: $e,
                    updatedTime: e
                }
            },
            Ye = "video",
            Je = "current",
            Xe = "",
            Ze = function(e) {
                return "" !== e.parentId
            },
            et = Number.MAX_VALUE,
            tt = Number.MIN_VALUE,
            nt = function(e) {
                return ie.__assign({
                    commentCount: 0,
                    maxOffset: tt,
                    minOffset: et,
                    parentComments: {},
                    offsets: {},
                    replies: {}
                }, e)
            },
            it = function(e, t) {
                var n = ct(e);
                return t.forEach(function(e) {
                    var t = e.id,
                        i = e.contentOffset,
                        a = e.parentId;
                    if ("" === a) {
                        n.minOffset = Math.min(n.minOffset, i), n.maxOffset = Math.max(n.maxOffset, i), n.parentComments = ie.__assign({}, n.parentComments, (l = {}, l[t] = e, l));
                        var r = n.offsets[i];
                        Array.isArray(r) ? r.includes(t) || (n.offsets[i] = r.concat(t), n.commentCount++) : (n.offsets[i] = [t], n.commentCount++)
                    } else {
                        var o = n.replies[a];
                        if (Array.isArray(o)) {
                            var s = o.findIndex(function(t) {
                                return t.id === e.id
                            }); - 1 !== s ? o[s] = e : (n.replies[a] = o.concat(e), n.commentCount++)
                        } else n.replies[a] = [e], n.commentCount++
                    }
                    var l
                }), n
            },
            at = function(e, t) {
                if (t in e.parentComments) return e.parentComments[t]
            },
            rt = function(e, t) {
                var n = ct(e);
                return Ze(t) ? pt(n, t.parentId, t.id) : ut(n, t.id)
            },
            ot = function(e, t) {
                if (e.commentCount < t || lt(e)) return e;
                for (var n = e; n.commentCount > t && !lt(e);) n = mt(n, n.minOffset);
                return n
            },
            st = function(e, t) {
                var n = ct(e);
                return Object.keys(e.parentComments).forEach(function(i) {
                    var a = e.parentComments[i];
                    t(a) || (n = ut(n, a.id))
                }), Object.keys(e.replies).forEach(function(i) {
                    e.replies[i].forEach(function(e) {
                        t(e) || (n = pt(n, e.id, e.parentId))
                    })
                }), n
            },
            lt = function(e) {
                return e.minOffset === e.maxOffset
            },
            ct = function(e) {
                return {
                    commentCount: e.commentCount,
                    maxOffset: e.maxOffset,
                    minOffset: e.minOffset,
                    offsets: dt(e.offsets),
                    parentComments: ie.__assign({}, e.parentComments),
                    replies: ie.__assign({}, e.replies)
                }
            },
            dt = function(e) {
                return Object.keys(e).reduce(function(t, n) {
                    return t[Number(n)] = e[Number(n)].slice(), t
                }, {})
            },
            ut = function(e, t) {
                if (!(t in e.parentComments)) return e;
                var n = e.parentComments[t],
                    i = n.contentOffset,
                    a = e.offsets[i],
                    r = [];
                if (a && (r = a.filter(function(e) {
                        return e !== t
                    })), e.offsets[i] = r, delete e.parentComments[t], e.commentCount--, t in e.replies) {
                    var o = e.replies[t].length;
                    delete e.replies[t], e.commentCount -= o
                }
                return e
            },
            pt = function(e, t, n) {
                if (!(t in e.replies)) return e;
                var i = e.replies[t].length,
                    a = e.replies[t].filter(function(e) {
                        if (e.id !== n) return e
                    });
                e.replies[t] = a, 0 === a.length && delete e.replies[t];
                var r = i - a.length;
                return e.commentCount -= r, e
            },
            mt = function(e, t) {
                return t >= e.minOffset && t <= e.maxOffset && !lt(e) ? (t in e.offsets && e.offsets[t].forEach(function(t) {
                    e = ut(e, t)
                }), delete e.offsets[t], e.maxOffset === t ? e.maxOffset-- : e.minOffset === t && e.minOffset++, e) : e
            },
            ht = function() {
                function e(e) {
                    this.videoComments = e, this.currentOffset = e.minOffset
                }
                return e.prototype[Symbol.iterator] = function() {
                    var e = this;
                    return {
                        next: function() {
                            var t = e.videoComments.offsets[e.currentOffset] || [],
                                n = {
                                    done: e.currentOffset > e.videoComments.maxOffset,
                                    value: {
                                        offset: e.currentOffset,
                                        comments: t
                                    }
                                };
                            return e.currentOffset++, n
                        }
                    }
                }, e
            }(),
            gt = n(63),
            ft = function(e) {
                return ie.__assign({
                    comments: nt(),
                    currentVideoTime: 0,
                    cursor: {
                        future: Xe,
                        past: Xe
                    },
                    errorMessage: "",
                    hasDismissedChatReplayError: !1,
                    hasLoadedCurrentUserBlockedList: !1,
                    hasLoadedData: !1,
                    isPostCooldownActive: !1,
                    isReplayFilterOn: !1,
                    isScrollingSynced: !0,
                    replyCursorMap: {},
                    hideTimestamps: !1
                }, e)
            },
            bt = 150,
            vt = {
                apiToken: "",
                deviceId: ""
            },
            yt = {
                users: {}
            },
            kt = function(e) {
                return ie.__assign({
                    users: {}
                }, e)
            },
            St = Object(te.combineReducers)({
                comments: o,
                config: s,
                users: c,
                moderation: a
            });
        ne.n.store.registerReducer("vodChat", St);
        var _t, Ct = n(18),
            Et = n(1252),
            wt = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                var n = new Et.BrowserHeaders(t),
                    i = new Et.BrowserHeaders(e);
                return n.forEach(function(e, t) {
                    i.set(e, t)
                }), i
            },
            Tt = "Authorization",
            Nt = "https://api.twitch.tv/v5",
            Ot = "POST",
            Dt = "PUT",
            It = "DELETE",
            Ut = (_t = {}, _t.Accept = "application/vnd.twitchtv.v5+json", _t["Content-Type"] = "application/json", _t["CLIENT-ID"] = "jzkbprff40iqj646a697cyrvl0zt2m6", _t),
            Pt = function() {
                function e(e) {
                    this.chatOAuthToken = e
                }
                return e.getClient = function(t) {
                    return void 0 === t && (t = ""), new e(t)
                }, e.prototype.doRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = ie.__assign({}, t, {
                        headers: wt(Ut, t.headers).toHeaders()
                    });
                    return d(new Request(e.toString(), n))
                }, e.prototype.doAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = ie.__assign({}, t, {
                        headers: wt(p(this.chatOAuthToken), t.headers)
                    });
                    return this.doRequest(e, n)
                }, e.prototype.doRawRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = ie.__assign({}, t, {
                        headers: wt(Ut, t.headers).toHeaders()
                    });
                    return u(new Request(e.toString(), n))
                }, e.prototype.doRawAuthRequest = function(e, t) {
                    void 0 === t && (t = {});
                    var n = ie.__assign({}, t, {
                        headers: wt(p(this.chatOAuthToken), t.headers)
                    });
                    return this.doRawRequest(e, n)
                }, e
            }(),
            xt = n(350),
            Ft = n(250),
            Rt = n(124),
            At = {
                normalizeRecord: function(e, t, n) {
                    var i = e.body,
                        a = e.emoticons || [],
                        r = [];
                    return 0 === a.length ? e.bits_spent ? r = r.concat(Object(xt.c)(i, n)) : r.push({
                        type: Ft.a.Text,
                        content: i
                    }) : r = g(a, i, n, void 0 !== e.bits_spent), {
                        id: "1",
                        isAction: e.is_action,
                        tokens: r,
                        userColor: e.user_color ? e.user_color : Object(Rt.b)(t)
                    }
                }
            },
            Mt = function() {
                function e(e) {
                    this.bio = e.bio, this.createdAt = e.createdAt, this.displayName = e.displayName, this.id = e.id, this.logo = e.logo, this.name = e.name, this.type = e.type, this.updatedAt = e.updatedAt
                }
                return e
            }(),
            Lt = function(e) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/1.0"
            },
            jt = function(e) {
                return "https://static-cdn.jtvnw.net/emoticons/v1/" + e + "/2.0 2x"
            },
            Bt = {
                normalizeRecord: function(e) {
                    return new Mt({
                        id: e._id,
                        name: e.name,
                        logo: new URL(e.logo || "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png"),
                        bio: e.bio,
                        createdAt: new Date(e.created_at),
                        displayName: e.display_name,
                        type: e.type,
                        updatedAt: new Date(e.updated_at)
                    })
                },
                serializeRecord: function(e) {
                    return {
                        _id: e.id,
                        name: e.name,
                        logo: e.logo.toString(),
                        bio: e.bio,
                        created_at: e.createdAt.toISOString(),
                        display_name: e.displayName,
                        type: e.type,
                        updated_at: e.updatedAt.toISOString()
                    }
                }
            },
            Vt = function(e) {
                return {
                    comments: [Gt.normalizeRecord(e, xt.a)],
                    users: [Bt.normalizeRecord(e.commenter)]
                }
            },
            Ht = function(e, t) {
                var n = e.comments.map(function(e) {
                        return Bt.normalizeRecord(e.commenter)
                    }),
                    i = f();
                return void 0 !== e._next && (i.future = e._next), void 0 !== e._prev && (i.past = e._prev), {
                    comments: e.comments.reduce(function(e, i) {
                        return i.replies && i.replies.map(function(e) {
                            n.push(Bt.normalizeRecord(e.commenter))
                        }), e.concat(Gt.normalizeRecords(i, t))
                    }, []),
                    cursor: i,
                    users: n
                }
            },
            Wt = function(e) {
                var t = e.comments.map(function(e) {
                    return Bt.normalizeRecord(e.commenter)
                });
                return {
                    comments: e.comments.map(function(e) {
                        return Gt.normalizeRecord(e, xt.a)
                    }),
                    cursor: {
                        future: e._next || Xe
                    },
                    users: t
                }
            },
            Gt = {
                normalizeRecords: function(e, t) {
                    var n = [Gt.normalizeRecord(e, t)];
                    return Array.isArray(e.replies) && e.replies.forEach(function(e) {
                        n.push(qt.normalizeRecord(e, t))
                    }), n
                },
                normalizeRecord: function(e, t) {
                    return {
                        channelId: e.channel_id,
                        commenter: e.commenter._id,
                        contentId: e.content_id,
                        contentOffset: Math.floor(e.content_offset_seconds),
                        contentType: e.content_type,
                        createdAt: new Date(e.created_at),
                        id: e._id,
                        message: At.normalizeRecord(e.message, e.commenter._id, t),
                        moreReplies: e.more_replies || !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: v(e.message.user_badges || [])
                    }
                }
            },
            qt = {
                normalizeRecord: function(e, t) {
                    return {
                        channelId: e.channel_id,
                        commenter: e.commenter._id,
                        contentId: e.content_id,
                        contentOffset: Math.floor(e.content_offset_seconds),
                        contentType: e.content_type,
                        createdAt: new Date(e.created_at),
                        id: e._id,
                        message: At.normalizeRecord(e.message, e.commenter._id, t),
                        moreReplies: !1,
                        parentId: void 0 !== e.parent_id ? e.parent_id : "",
                        state: e.state,
                        source: e.source,
                        userBadges: v(e.message.user_badges || [])
                    }
                }
            },
            zt = "content_offset_seconds",
            $t = "cursor",
            Kt = "comment_id",
            Qt = function(e, t) {
                var n = Ht(e, t),
                    i = e.comments.reduce(function(e, t) {
                        return void 0 === t.video ? e : e.concat([Yt(t.video)])
                    }, []);
                return Array.isArray(e.parents) && e.parents.forEach(function(e) {
                    n.comments.push(Gt.normalizeRecord(e, t)), n.users.push(Bt.normalizeRecord(e.commenter))
                }), ie.__assign({}, n, {
                    videos: i
                })
            },
            Yt = function(e) {
                return {
                    id: e._id,
                    title: e.title,
                    preview: e.preview
                }
            },
            Jt = "channel_id",
            Xt = "limit",
            Zt = "video_id",
            en = 50,
            tn = (function() {
                function e(e) {
                    this.broadcastId = e.broadcastId, this.broadcastType = e.broadcastType, this.channel = e.channel, this.createdAt = e.createdAt, this.description = e.description, this.descriptionHTML = e.descriptionHTML, this.game = e.game, this.id = e.id, this.language = e.language, this.length = e.length, this.mutedSegments = e.mutedSegments, this.publishedAt = e.publishedAt, this.qualityMap = e.qualityMap, this.status = e.status, this.tagList = e.tagList, this.thumbnailSizeMap = e.thumbnailSizeMap, this.title = e.title, this.url = e.url, this.viewable = e.viewable, this.viewableAt = e.viewableAt, this.views = e.views
                }
            }(), n(251)),
            nn = function(e) {
                return "v" + e
            },
            an = function(e) {
                return e + "s"
            },
            rn = {
                beginSec: Number.MIN_VALUE,
                endSec: Number.MAX_VALUE
            },
            on = function(e) {
                return e.vodChat.comments.comments
            },
            sn = function(e, t) {
                return t.commenter in e
            },
            ln = function(e, t, n, i) {
                var a = e.vodChat.comments,
                    r = a.currentVideoTime,
                    o = a.comments;
                return 0 === o.commentCount ? [] : Array.from(new ht(o)).reduce(function(a, s) {
                    return s.offset > r ? a : (s.comments.forEach(function(r) {
                        var s = at(o, r);
                        if (void 0 !== s && (n || !sn(i, s))) return "comment" === s.source && fn(e.vodChat.comments.isReplayFilterOn, t) ? a : a.push(pn(s, e, n, i, t))
                    }), a)
                }, []).sort(dn)
            },
            cn = function(e) {
                var t = on(e);
                return Object.keys(t.parentComments).map(function(n) {
                    return hn(t.parentComments[n], e)
                }).filter(function(e) {
                    return void 0 !== e.video
                }).sort(un)
            },
            dn = function(e, t) {
                return e.comment.contentOffset === t.comment.contentOffset ? e.comment.createdAt.getTime() - t.comment.createdAt.getTime() : e.comment.contentOffset - t.comment.contentOffset
            },
            un = function(e, t) {
                return e.comment.createdAt.getTime() === t.comment.createdAt.getTime() ? t.comment.contentOffset - e.comment.contentOffset : t.lastUpdated.getTime() - e.lastUpdated.getTime()
            },
            pn = function(e, t, n, i, a) {
                var r = new Array,
                    o = new Array,
                    s = t.vodChat.comments.comments.replies[e.id],
                    l = e.createdAt;
                return Array.isArray(s) && s.forEach(function(e) {
                    !n && sn(i, e) || (e.source === Je && fn(t.vodChat.comments.isReplayFilterOn, a) ? (o.push(pn(e, t, n, i)), l = bn(l, e.createdAt)) : (r.push(pn(e, t, n, i)), l = bn(l, e.createdAt)))
                }), fn(t.vodChat.comments.isReplayFilterOn, a) ? {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: o.sort(dn)
                } : {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: l,
                    replies: r.sort(dn)
                }
            },
            mn = function(e, t) {
                var n = new Array,
                    i = t.vodChat.comments.comments.replies[e.id],
                    a = e.createdAt;
                return Array.isArray(i) && i.forEach(function(e) {
                    n.push(mn(e, t)), a = bn(a, e.createdAt)
                }), {
                    author: t.vodChat.users.users[e.commenter],
                    comment: e,
                    lastUpdated: a,
                    replies: n.sort(dn)
                }
            },
            hn = function(e, t) {
                var n = mn(e, t);
                return ie.__assign({}, n, {
                    video: t.vodChat.moderation.videos[nn(e.contentId)]
                })
            },
            gn = function(e) {
                return 0 === e.commentCount ? rn : {
                    beginSec: e.minOffset,
                    endSec: e.maxOffset
                }
            },
            fn = function(e, t) {
                return !!t && (e && (t === tn.a.Archive || t === tn.a.Highlight))
            },
            bn = function(e, t) {
                return e.getTime() > t.getTime() ? e : t
            },
            vn = n(19),
            yn = n(1076),
            kn = n(128),
            Sn = n(355),
            _n = n(1253),
            Cn = function() {
                return Object(gt.d)("You do not have permission to access this dashboard.", "routines-moderation")
            },
            En = function(e, t) {
                var n = m(e);
                return F(t, n).then(function(n) {
                    e.dispatch(re(n, t.bitsConfig))
                }, function(t) {
                    403 === t.status && e.dispatch(se(Cn()))
                })
            },
            wn = function(e, t) {
                var n = m(e);
                return R(t, n).then(function() {
                    e.dispatch(de(t.bannedUser))
                }).catch(function(t) {
                    return e.dispatch(le(t))
                })
            },
            Tn = function(e, t) {
                var n = new kn.a(ne.a.algoliaApplicationID, ne.a.algoliaAPIKey),
                    i = vn.a(),
                    a = Object(_n.b)({
                        broadcastType: yn.d,
                        broadcasterId: t.creatorId
                    }),
                    r = a.typeID,
                    o = a.params;
                return n.queryForType(r, t.searchTerm, i, o).then(function(t) {
                    var n = Object(Sn.b)({
                        searchResults: t
                    });
                    n.currentVideoResults && e.dispatch(pe(n.currentVideoResults))
                }).catch(function() {})
            },
            Nn = n(1),
            On = n(3),
            Dn = function(e) {
                return Nn.createElement(On.u, {
                    type: On.z.Text,
                    onClick: e.onClick
                }, Object(ne.d)("Show more replies...", "chomments.moderation.showMoreRepliesAction"))
            },
            In = n(13),
            Un = n(55),
            Pn = n(129),
            xn = n(806),
            Fn = n(1077),
            Rn = n(1360),
            An = this,
            Mn = "replay_mode",
            Ln = "timestamp_mode",
            jn = "on",
            Bn = "off",
            Vn = function(e) {
                ne.m.track(Un.SpadeEventType.VideoChatSettingChanged, e)
            },
            Hn = function(e, t) {
                return ie.__awaiter(An, void 0, void 0, function() {
                    var n, i, a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, ne.n.apollo.client.query({
                                    query: Rn,
                                    variables: {
                                        videoCreatorID: e.channelId,
                                        videoID: e.contentId
                                    }
                                })];
                            case 1:
                                return n = o.sent().data, i = {
                                    channel: n.video.owner.login,
                                    channel_id: Number(e.channelId),
                                    game: n.video.game ? n.video.game.name : null,
                                    location: In.PageviewLocation.VideoWatchPage,
                                    share_platform: Fn.a.Link,
                                    share_context: In.ShareItemContext.Chomment,
                                    shared_item_id: Object(xn.a)(e.contentId),
                                    shared_item_type: Object(Pn.a)(n.video.broadcastType),
                                    shared_item_url: t.toString(),
                                    partner: n.video.owner.roles.isPartner,
                                    source_item_id: e.id,
                                    source_item_type: In.ShareItemSourceItemType.Chomment
                                }, a = Yn(e, n, Fn.a.Link), ne.m.track(Un.SpadeEventType.ChommentUIAction, a), ne.m.track(Un.SpadeEventType.ShareItem, i), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), Hn.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Wn = function(e, t) {
                var n = e.users[0],
                    i = e.comments[0];
                return {
                    channel: t.user.login,
                    channel_id: Number(i.channelId),
                    comment_id: i.id,
                    comment_state: i.state,
                    event_source: "frontend",
                    game: t.video.game ? t.video.game.name : null,
                    login: n.name,
                    reply_to_comment_id: Ze(i) ? i.parentId : null,
                    user_id: Number(n.id),
                    vod_id: Number(i.contentId),
                    vod_title: t.video.title,
                    vod_ts: i.contentOffset,
                    vod_type: Object(Pn.a)(t.video.broadcastType)
                }
            },
            Gn = function(e, t, n) {
                return {
                    author_id: Number(e.comment.commenter),
                    author_login: n.users[1].login,
                    channel: n.users[0].login,
                    channel_id: Number(e.comment.channelId),
                    comment_id: e.comment.id,
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user.login,
                    user_id: Number(t.session.user.id),
                    vod_id: Number(e.comment.contentId),
                    vod_title: n.video.title,
                    vod_type: Object(Pn.a)(n.video.broadcastType),
                    vod_ts: e.comment.contentOffset
                }
            },
            qn = function(e, t, n) {
                return {
                    action: "ban_user",
                    author_id: Number(e.bannedUser),
                    channel_id: Number(e.targetChannel),
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user.login,
                    target_user_id: Number(e.bannedUser),
                    user_id: Number(t.session.user.id),
                    vod_id: Number(n.video.id),
                    vod_title: n.video.title,
                    vod_type: Object(Pn.a)(n.video.broadcastType),
                    vod_ts: e.comment.contentOffset
                }
            },
            zn = function(e, t, n) {
                return {
                    action: "delete",
                    author_id: Number(e.commenter),
                    author_login: n.users[1].login,
                    channel: n.users[0].login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user.login,
                    reply_to_comment_id: e.parentId ? e.parentId : null,
                    user_id: Number(t.session.user.id),
                    vod_id: Number(e.contentId),
                    vod_title: n.video.title,
                    vod_type: Object(Pn.a)(n.video.broadcastType),
                    vod_ts: e.contentOffset
                }
            },
            $n = function(e, t, n) {
                var i = null,
                    a = Object.keys(t.vodChat.comments.comments.parentComments);
                if (a.length > 0) {
                    var r = a[0];
                    i = t.vodChat.comments.comments.parentComments[r].channelId
                }
                return {
                    action: "create",
                    channel_id: i ? Number(i) : null,
                    comment_body: e.message,
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user ? t.session.user.login : null,
                    reply_to_comment_id: O(e) ? e.parentId : null,
                    user_id: t.session.user ? Number(t.session.user.id) : null,
                    vod_id: Number(n.video.id),
                    vod_title: n.video.title,
                    vod_ts: O(e) ? null : Number(e.contentOffsetSeconds),
                    vod_type: Object(Pn.a)(n.video.broadcastType)
                }
            },
            Kn = function(e, t, n) {
                var i = e.comment.id,
                    a = e.comment.channelId;
                return {
                    action: "published" === e.state ? "publish" : "unpublish",
                    channel_id: Number(a),
                    comment_id: i,
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user.login,
                    user_id: Number(t.session.user.id),
                    vod_id: Number(n.video.id),
                    vod_title: n.video.title,
                    vod_ts: e.comment.contentOffset,
                    vod_type: Object(Pn.a)(n.video.broadcastType)
                }
            },
            Qn = function(e, t, n) {
                return {
                    action: "sync_vod_to_time",
                    author_id: Number(e.commenter),
                    channel: n.user.login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: "frontend",
                    game: n.video.game ? n.video.game.name : null,
                    login: t.session.user ? t.session.user.login : null,
                    user_id: t.session.user ? Number(t.session.user.id) : null,
                    vod_id: Number(e.contentId),
                    vod_title: n.video.title,
                    vod_ts: e.contentOffset,
                    vod_type: Object(Pn.a)(n.video.broadcastType)
                }
            },
            Yn = function(e, t, n) {
                return {
                    action: "share",
                    author_id: Number(e.commenter),
                    channel: t.video.owner.login,
                    channel_id: Number(e.channelId),
                    comment_id: e.id,
                    event_source: "frontend",
                    game: t.video.game ? t.video.game.name : null,
                    login: t.currentUser ? t.currentUser.login : null,
                    user_id: t.currentUser ? Number(t.currentUser.id) : null,
                    vod_id: Number(e.contentId),
                    vod_title: t.video.title,
                    vod_ts: e.contentOffset,
                    vod_type: Object(Pn.a)(t.video.broadcastType),
                    share_platform: n
                }
            },
            Jn = n(1361),
            Xn = n(1362),
            Zn = n(1363),
            ei = this,
            ti = function(e) {
                return Object(ne.d)("This room is in {duration} followers-only mode. Follow this channel to join the community", {
                    duration: e
                }, "routines-comments")
            },
            ni = function(e) {
                var t = e.split(" "),
                    n = t[t.length - 1],
                    i = n.match(/((\d+)h)?(\d+)m(\d+)s/);
                return Array.isArray(i) ? {
                    600: "10 Minutes",
                    1800: "30 Minutes",
                    3600: "1 Hour",
                    86400: "1 Day",
                    604800: "1 Week",
                    2592e3: "1 Month",
                    7776e3: "3 Months"
                }[60 * parseInt(i[2] || "0", 10) * 60 + 60 * parseInt(i[3], 10) + parseInt(i[4], 10)] : ""
            },
            ii = function(e) {
                if (e.includes("FollowersOnlyError")) {
                    var t = ni(e);
                    return ti(t)
                }
                var n = z(),
                    i = Object.keys(n).find(function(t) {
                        return e.includes(t)
                    });
                return i ? n[i] : $()
            },
            ai = "",
            ri = -1,
            oi = !1,
            si = function(e, t) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var n;
                    return ie.__generator(this, function(i) {
                        if (oi) return [2, Promise.resolve()];
                        if (I(t)) {
                            if (t.offset === ri) return [2, Promise.resolve()];
                            ri = t.offset
                        }
                        if (D(t)) {
                            if (t.cursor === ai) return [2, Promise.resolve()];
                            ai = t.cursor
                        }
                        return n = m(e), oi = !0, [2, C(n, t).then(function(n) {
                            oi = !1, I(t) && t.offset === ri ? e.dispatch(Te(n)) : e.dispatch(Ee(n))
                        }, function(t) {
                            oi = !1, ne.n.logger.error(t, "VideoChat: unable to fetch messages"), e.dispatch(Oe())
                        })]
                    })
                })
            },
            li = function(e, t) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var n;
                    return ie.__generator(this, function(i) {
                        return n = m(e), [2, _(n, t).then(function(t) {
                            e.dispatch(fe(t)), e.dispatch(q(ui, t)), setTimeout(function() {
                                e.dispatch(Pe())
                            }, 5e3)
                        }, function(t) {
                            return t.json().then(function(t) {
                                e.dispatch(ve(ii(t.message)))
                            })
                        })]
                    })
                })
            },
            ci = function(e, t) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var n, i;
                    return ie.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                n = m(e), a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, T(n, t)];
                            case 2:
                                return a.sent(), e.dispatch(he({
                                    comment: t
                                })), e.dispatch(q(pi, {
                                    comment: t
                                })), [3, 4];
                            case 3:
                                return i = a.sent(), ne.i.error(i.toString(), ci.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            di = function(e, t) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var n, i, a;
                    return ie.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                n = m(e), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, w(n, t)];
                            case 2:
                                return i = r.sent(), e.dispatch(_e(i)), [3, 4];
                            case 3:
                                return a = r.sent(), ne.i.error(a.toString(), di.name), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            ui = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var e, a;
                    return ie.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Jn,
                                    variables: {
                                        videoCreatorID: t.comments[0].channelId,
                                        videoID: t.comments[0].contentId
                                    }
                                })];
                            case 1:
                                return e = r.sent().data, i.track(In.SpadeEventType.ChommentCreated, Wn(t, e)), [3, 3];
                            case 2:
                                return a = r.sent(), ne.i.error(a.toString(), ui.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            pi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Xn,
                                    variables: {
                                        videoCreatorID: t.comment.channelId,
                                        commentCreator: t.comment.commenter,
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(In.SpadeEventType.ChommentDeleted, Gn(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), pi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            mi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Zn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(In.SpadeEventType.ChommentUIAction, qn(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), mi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            hi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Xn,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        commentCreator: t.commenter,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(In.SpadeEventType.ChommentUIAction, zn(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), hi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            gi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r, o, s;
                    return ie.__generator(this, function(l) {
                        switch (l.label) {
                            case 0:
                                return l.trys.push([0, 2, , 3]), a = e.getState(), r = O(t) ? a.vodChat.comments.comments.parentComments[t.parentId].contentId : t.contentId, [4, n.query({
                                    query: Zn,
                                    variables: {
                                        videoID: r
                                    }
                                })];
                            case 1:
                                return o = l.sent().data, i.track(In.SpadeEventType.ChommentUIAction, $n(t, e.getState(), o)), [3, 3];
                            case 2:
                                return s = l.sent(), ne.i.error(s.toString(), gi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            fi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Zn,
                                    variables: {
                                        videoID: t.comment.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(In.SpadeEventType.ChommentUIAction, Kn(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), fi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            bi = function(e, t, n, i) {
                return ie.__awaiter(ei, void 0, void 0, function() {
                    var a, r;
                    return ie.__generator(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]), [4, n.query({
                                    query: Jn,
                                    variables: {
                                        videoCreatorID: t.channelId,
                                        videoID: t.contentId
                                    }
                                })];
                            case 1:
                                return a = o.sent().data, i.track(In.SpadeEventType.ChommentUIAction, Qn(t, e.getState(), a)), [3, 3];
                            case 2:
                                return r = o.sent(), ne.i.error(r.toString(), bi.name), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            vi = (n(1364), n(4)),
            yi = n(1365),
            ki = n(82),
            Si = (n(1366), function(e) {
                var t = e.onCloseClick ? e.onCloseClick : function() {},
                    n = e.hideCloseButton ? "" : Nn.createElement(On.U, {
                        className: "modal-shell__close-button",
                        position: On._2.Absolute,
                        attachTop: !0
                    }, Nn.createElement(On.v, {
                        onClick: t,
                        icon: On._9.Close,
                        ariaLabel: Object(ne.d)("Close", "ModalShell")
                    })),
                    i = vi("modal-shell__inner", "ignore-react-onclickoutside");
                return Nn.createElement(yi, {
                    isOpened: !0
                }, Nn.createElement("div", null, Nn.createElement(ki.a, {
                    onClickOut: t
                }, Nn.createElement("div", {
                    className: "modal-shell"
                }, Nn.createElement("div", {
                    className: i
                }, e.children, n)))))
            }),
            _i = (n(1367), "confirm-button"),
            Ci = "deny-button",
            Ei = function(e) {
                return Nn.createElement(Si, {
                    hideCloseButton: !0,
                    onCloseClick: e.onDenyClick
                }, Nn.createElement(On._17, {
                    className: "twp-modal",
                    background: On.m.Base,
                    color: On.F.Alt,
                    padding: 3
                }, Nn.createElement("h3", null, e.title), Nn.createElement(On.U, {
                    className: "twp-modal__message",
                    margin: {
                        bottom: 2
                    }
                }, e.children), Nn.createElement(On.U, {
                    display: On.H.Flex,
                    justifyContent: On.T.End
                }, Nn.createElement(On.U, {
                    margin: {
                        right: 1
                    }
                }, Nn.createElement(On.u, {
                    onClick: e.onDenyClick,
                    type: On.z.Hollow,
                    "data-test-selector": Ci
                }, Object(ne.d)("Cancel", "ConfirmationModal"))), Nn.createElement(On.u, {
                    onClick: e.onConfirmClick,
                    type: On.z.Alert,
                    disabled: e.isConfirmDisabled,
                    "data-test-selector": _i
                }, Object(ne.d)("Ok", "ConfirmationModal")))))
            },
            wi = function(e) {
                var t = e,
                    n = Math.floor(t / 3600);
                t -= 3600 * n;
                var i = Math.floor(t / 60);
                t -= 60 * i;
                var a = Math.floor(t);
                return n > 0 ? n + ":" + Ti(i) + ":" + Ti(a) : i + ":" + Ti(a)
            },
            Ti = function(e) {
                return e < 10 ? "0" + e : "" + e
            },
            Ni = (n(1368), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickHandler = function() {
                        t.props.onClick(t.props.video.id)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    return Nn.createElement(On.S, {
                        onClick: this.onClickHandler,
                        "data-ts_selectable": !0,
                        "data-tt_content": !0
                    }, Nn.createElement(On.U, {
                        className: "search-card-row",
                        fullWidth: !0,
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Nn.createElement(On.A, {
                        row: !0
                    }, Nn.createElement(On.C, {
                        imageSrc: this.props.video.previewImageSrc,
                        imageAlt: this.props.video.title,
                        size: On.D.Size8,
                        aspect: On.k.Aspect16x9
                    }), Nn.createElement(On.B, null, Nn.createElement(On.P, {
                        margin: {
                            left: 1
                        }
                    }, Nn.createElement(On._21, {
                        type: On._26.H5,
                        ellipsis: !0
                    }, this.props.video.title)), Nn.createElement(On.P, {
                        margin: {
                            left: 1
                        }
                    }, Nn.createElement(On._21, {
                        className: "search-card-row__link",
                        ellipsis: !0
                    }, Object(ne.c)(new Date(1e3 * this.props.video.publishedAt), "medium"), Nn.createElement("span", null, " · "), wi(this.props.video.lengthSeconds)))))))
                }, t
            }(Nn.Component)),
            Oi = n(850),
            Di = function(e) {
                var t = e.message,
                    n = t.tokens.map(function(e, t) {
                        switch (e.type) {
                            case Ft.a.Text:
                                return [Nn.createElement("span", {
                                    key: t
                                }, e.content)];
                            case Ft.a.Emote:
                                return [Nn.createElement(Oi.a, {
                                    key: t,
                                    emote: e.content
                                }), " "];
                            default:
                                return null
                        }
                    });
                return Nn.createElement("span", {
                    key: t.id,
                    className: "qa-mod-message",
                    style: {
                        color: e.allowActionTextColors && t.isAction ? t.userColor : ""
                    }
                }, Array.prototype.concat.apply([], n))
            },
            Ii = n(780),
            Ui = /^[\x00-\x7F]*$/,
            Pi = function(e) {
                return !Ui.test(e)
            },
            xi = function(e) {
                return Pi(e.displayName) ? e.displayName + " (" + e.name + ")" : e.displayName
            },
            Fi = function(e, t) {
                return {
                    userID: e.id,
                    userDisplayName: e.displayName,
                    userType: Ii.a.User,
                    isIntl: Pi(e.displayName),
                    userLogin: e.name,
                    color: t
                }
            },
            Ri = n(30),
            Ai = n(8),
            Mi = n(802),
            Li = n(779),
            ji = function(e, t, n) {
                return e && t && !n
            },
            Bi = n(784),
            Vi = n(5),
            Hi = 15e3,
            Wi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.autoDismissErrorTimeoutId = 0, t.clearDismissTimeout = function() {
                        window.clearTimeout(t.autoDismissErrorTimeoutId)
                    }, t.onManualErrorDismissClickHandler = function() {
                        t.props.onErrorDismissed(!0)
                    }, t.setAutoDismissTimeout = function() {
                        t.autoDismissErrorTimeoutId = window.setTimeout(function() {
                            t.props.onErrorDismissed()
                        }, Hi)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.setAutoDismissTimeout()
                }, t.prototype.componentWillUpdate = function(e) {
                    this.props.message !== e.message && (this.clearDismissTimeout(), this.setAutoDismissTimeout())
                }, t.prototype.componentWillUnmount = function() {
                    this.clearDismissTimeout()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.message === r().chatReplayFilterError && (e = Nn.createElement(On._21, {
                        type: On._26.Span
                    }, " ", Nn.createElement(On._21, {
                        type: On._26.Span,
                        decoration: On._24.Underline
                    }, Nn.createElement("a", {
                        onClick: this.props.onMessageClick
                    }, Object(gt.d)("Click here to show all messages.", "CommentError"))))), Nn.createElement(On._17, {
                        alignItems: On.c.Center,
                        background: On.m.Base,
                        className: "anim-swoop",
                        color: On.F.Error,
                        "data-test-selector": "vod-chat-error",
                        display: On.H.Flex,
                        flexWrap: On.K.NoWrap,
                        fullWidth: !0,
                        padding: {
                            y: 1,
                            x: 2
                        },
                        position: On._2.Absolute,
                        zIndex: On._38.Above
                    }, Nn.createElement(On._21, {
                        type: On._26.Span
                    }, this.props.message, e), Nn.createElement(On.U, {
                        alignSelf: On.d.Start
                    }, Nn.createElement(On.v, {
                        ariaLabel: Object(gt.d)("Close", "CommentErrorComponent"),
                        icon: On._9.Close,
                        onClick: this.onManualErrorDismissClickHandler
                    })))
                }, t
            }(Nn.Component),
            Gi = n(864),
            qi = n(360),
            zi = n(126),
            $i = (n(1369), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildModerationDashboardURL = function() {
                        return Object(zi.a)("/" + t.props.videoOwnerLogin + "/dashboard/moderation")
                    }, t.buildModerationPrefsURL = function() {
                        return Object(zi.a)("/" + t.props.videoOwnerLogin + "/dashboard/settings/moderation")
                    }, t.onReplayModeChange = function(e) {
                        t.props.onReplayModeChange(e.currentTarget.checked)
                    }, t.onTimestampModeChange = function(e) {
                        t.props.onTimestampModeChange(e.currentTarget.checked)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    this.props.isUpload || (e = Nn.createElement(On.U, {
                        display: On.H.Flex,
                        flexWrap: On.K.NoWrap,
                        justifyContent: On.T.Between,
                        key: "viewerReplayOption",
                        padding: {
                            bottom: 1
                        }
                    }, Nn.createElement(On.U, null, Object(ne.d)("Show me only messages posted during the live broadcast", "VideoChatSettings")), Nn.createElement(On.U, {
                        flexShrink: 0
                    }, Nn.createElement(On._29, {
                        checked: this.props.isReplayFilterOn,
                        "data-test-selector": "reply-mode",
                        onChange: this.onReplayModeChange
                    }))));
                    var t = [Nn.createElement(On._21, {
                        key: "moderationHeader",
                        bold: !0
                    }, Object(ne.d)("Mod Tools", "VideoChatSettings"))];
                    return this.props.canSessionEditModerationSettings && t.push(Nn.createElement(On.P, {
                        key: "moderationPrefs",
                        display: On.H.InlineBlock
                    }, Nn.createElement("a", {
                        target: Object(zi.b)() ? "_blank" : "",
                        href: this.buildModerationPrefsURL(),
                        "data-test-selector": "video_chat_settings_mod_prefs"
                    }, Object(ne.d)("Change moderation preferences", "VideoChatSettings")))), this.props.canSessionModerateMessages && t.push(Nn.createElement(On.P, {
                        key: "moderationDashboard",
                        display: On.H.InlineBlock
                    }, Nn.createElement("a", {
                        target: Object(zi.b)() ? "_blank" : "",
                        href: this.buildModerationDashboardURL(),
                        "data-test-selector": "video_chat_settings_mod_dashboard"
                    }, Object(ne.d)("Moderate messages", "VideoChatSettings")))), Nn.createElement(On.U, {
                        className: "video-chat__settings",
                        padding: {
                            x: 2,
                            y: 2
                        }
                    }, Nn.createElement(On._21, {
                        bold: !0
                    }, Object(ne.d)("Viewer Settings", "VideoChatSettings")), e, Nn.createElement(On.U, {
                        display: On.H.Flex,
                        justifyContent: On.T.Between,
                        padding: {
                            bottom: 1
                        }
                    }, Nn.createElement(On.U, null, Object(ne.d)("Hide timestamps", "VideoChatSettings")), Nn.createElement(On.U, {
                        flexShrink: 0
                    }, Nn.createElement(On._29, {
                        "data-test-selector": "timestamp-mode",
                        checked: this.props.hideTimestamps,
                        onChange: this.onTimestampModeChange
                    }))), t.length > 1 ? t : null)
                }, t
            }(Nn.Component)),
            Ki = Object(Vi.c)("ChatSettings")($i),
            Qi = Object(Ai.a)(K, Q)(Ki),
            Yi = "@",
            Ji = "Enter",
            Xi = "Escape",
            Zi = " ",
            ea = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onKeyDown = function(e) {
                        switch (e.key) {
                            case Ji:
                                e.preventDefault(), n.createComment();
                                break;
                            case Zi:
                                n.maybeUnpauseScrolling();
                                break;
                            case Yi:
                                n.setState({
                                    isMentionPaused: !n.state.isMentionPaused && n.props.isScrollingSynced || n.state.isMentionPaused
                                }), n.props.onScrollPause()
                        }
                    }, n.createComment = function() {
                        if ("" !== n.state.newCommentText) {
                            if (n.props.isPostCooldownActive) return n.setState({
                                showCoolDownState: !0
                            }), void n.props.onError(Y());
                            n.props.onCreateComment(n.state.newCommentText), n.setState({
                                newCommentText: ""
                            }), n.maybeUnpauseScrolling()
                        }
                    }, n.setTextareaRef = function(e) {
                        n.textArea = e
                    }, n.maybeUnpauseScrolling = function() {
                        n.state.isMentionPaused && (n.setState({
                            isMentionPaused: !1
                        }), n.props.onScrollResume())
                    }, n.onChange = function(e) {
                        e.preventDefault(), n.setState({
                            newCommentText: e.currentTarget.value
                        })
                    }, n.onEmoticonClick = function(e) {
                        n.setState({
                            newCommentText: n.state.newCommentText + " " + e
                        }), n.maybeUnpauseScrolling()
                    };
                    var i = null !== n.props.currentUser && (n.props.currentUser.id === n.props.videoOwnerID || !!n.props.currentUser.roles.isStaff),
                        a = null !== n.props.currentUser && (n.props.isModerator || n.props.currentUser.roles.isSiteAdmin || i);
                    return n.state = {
                        isMentionPaused: !1,
                        canSessionModerateMessages: a,
                        canSessionEditModerationSettings: i,
                        newCommentText: "",
                        showCoolDownState: !1
                    }, n
                }
                return ie.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isPostCooldownActive || this.setState({
                        showCoolDownState: !1
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    return (!this.props.isUpload || this.state.canSessionModerateMessages || this.state.canSessionEditModerationSettings) && (e = Nn.createElement(Gi.b, null, Nn.createElement(Qi, {
                        canSessionEditModerationSettings: this.state.canSessionEditModerationSettings,
                        canSessionModerateMessages: this.state.canSessionModerateMessages,
                        videoOwnerLogin: this.props.videoOwnerLogin,
                        isUpload: this.props.isUpload
                    }))), Nn.createElement("div", null, Nn.createElement(On.U, {
                        position: On._2.Relative
                    }, Nn.createElement(On._23, {
                        "data-a-target": "video-chat-input",
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        paddingRight: 30,
                        placeholder: Object(ne.d)("Post a message", "CommentInput"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newCommentText
                    }), Nn.createElement(qi.a, {
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        attachTop: !0,
                        attachRight: !0,
                        position: On._2.Absolute
                    })), Nn.createElement(On.U, {
                        margin: {
                            top: 1
                        },
                        justifyContent: On.T.Between,
                        display: On.H.Flex
                    }, e, Nn.createElement("span", null), " ", Nn.createElement(On.u, {
                        onClick: this.createComment,
                        disabled: this.state.showCoolDownState,
                        "data-a-target": "video-chat-submit-button"
                    }, Nn.createElement(On.U, {
                        display: On.H.Flex
                    }, Nn.createElement("span", null, Object(ne.d)("Post at ", "CommentInput")), Nn.createElement(On.U, {
                        margin: {
                            x: .5
                        },
                        display: On.H.Flex
                    }, Nn.createElement(On._8, {
                        asset: On._9.GlyphLength
                    })), Nn.createElement("span", null, wi(this.props.currentVideoTime))))))
                }, t
            }(Nn.Component),
            ta = Object(Vi.c)("MessageInput", {
                autoReportInteractive: !0
            })(ea),
            na = (n(1370), function(e) {
                var t = e.offset,
                    n = e.onClick;
                return Nn.createElement(On._30, {
                    align: On._31.Left,
                    direction: On._32.Top,
                    label: Object(ne.d)("Jump to video", "TimeStamp")
                }, Nn.createElement(On.P, {
                    className: "vod-message__timestamp",
                    margin: {
                        right: .5
                    },
                    padding: {
                        x: .5
                    }
                }, Nn.createElement("button", {
                    onClick: n
                }, wi(t))))
            }),
            ia = n(795),
            aa = n(788),
            ra = n(845),
            oa = n(20),
            sa = function(e, t) {
                var n = new URL("https://www.twitch.tv/videos/" + e);
                if (t) {
                    var i = oa.stringify(t);
                    n.search = i
                }
                return n
            },
            la = "ban-user",
            ca = "delete-comment-button",
            da = "reply-button",
            ua = "relative-time-title",
            pa = "share-button",
            ma = "share-button-clicked",
            ha = 3e3,
            ga = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        confirmationAction: null,
                        isMenuOpen: !1,
                        isLinkCopied: !1
                    }, t.dismissTimeoutID = 0, t.onToggleMenu = function() {
                        if (t.state.isMenuOpen) return void t.closeMenu();
                        t.setState({
                            isMenuOpen: !0
                        }), t.props.onOpen()
                    }, t.getContent = function() {
                        if ("function" == typeof t.state.confirmationAction) return Nn.createElement(On.U, {
                            padding: {
                                y: 1
                            }
                        }, Nn.createElement(On.U, {
                            className: "balloon__title",
                            display: On.H.Flex
                        }, Object(ne.d)("Are you sure you want to perform this action?", "chomments.moderation.confirmAction")), Nn.createElement(On.U, {
                            display: On.H.Flex,
                            justifyContent: On.T.Center,
                            alignItems: On.c.Center
                        }, Nn.createElement(On.U, {
                            display: On.H.Inline,
                            padding: {
                                right: 1
                            }
                        }, Nn.createElement(On.u, {
                            type: On.z.Alert,
                            onClick: t.onContinueClickHandler,
                            "data-test-selector": _i
                        }, Object(ne.d)("Continue", "MessageOptionsMenu"))), Nn.createElement(On.u, {
                            type: On.z.Hollow,
                            onClick: t.onCancelClickHandler,
                            "data-test-selector": Ci
                        }, Object(ne.d)("Cancel", "MessageOptionsMenu"))));
                        var e = [];
                        t.props.isExpandedLayout || e.push(Nn.createElement(On.U, {
                            key: t.props.context.comment.id,
                            className: "balloon__title",
                            display: On.H.Flex,
                            "data-test-selector": ua
                        }, Nn.createElement(On._21, {
                            type: On._26.Span
                        }, Object(ne.d)("Posted ", "MessageOptionsMenu"), Object(ne.g)(t.props.context.comment.createdAt))), Nn.createElement(On.U, {
                            key: t.props.context.comment.id + "1",
                            className: "balloon__stroke"
                        }), Nn.createElement(On._17, {
                            key: t.props.context.comment.id + "2",
                            display: On.H.Flex,
                            color: On.F.Link
                        }, Nn.createElement(On.S, {
                            onClick: t.onReplyClickHandler,
                            "data-test-selector": da
                        }, Nn.createElement(On.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(ne.d)("Reply to {userName}", {
                            userName: t.props.context.author.displayName
                        }, "MessageOptionsMenu")))));
                        var n = [];
                        t.props.isCurrentUserModerator && n.push(Nn.createElement(On.U, {
                            key: t.props.context.comment.id,
                            display: On.H.Flex
                        }, Nn.createElement(On.S, {
                            alert: !0,
                            onClick: t.onDeleteButtonClickHandler,
                            "data-test-selector": ca
                        }, Nn.createElement(On.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(ne.d)("Delete", "MessageOptionsMenu")))), Nn.createElement(On.U, {
                            key: t.props.context.comment.id + "1",
                            className: "balloon__stroke"
                        }), Nn.createElement(On.U, {
                            key: t.props.context.comment.id + "2",
                            display: On.H.Flex
                        }, Nn.createElement(On.S, {
                            alert: !0,
                            onClick: t.onBanUserClickHandler,
                            "data-test-selector": la
                        }, Nn.createElement(On.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(ne.d)("Ban User", "MessageOptionsMenu")))));
                        var i = Nn.createElement(On.S, {
                            onClick: t.onShareClick,
                            "data-test-selector": pa
                        }, Nn.createElement(On.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Object(ne.d)("Copy Link", "MessageOptionsMenu")));
                        t.state.isLinkCopied && (i = Nn.createElement(On.u, {
                            fullWidth: !0,
                            icon: On._9.Check,
                            type: On.z.Success,
                            "data-test-selector": ma
                        }, Nn.createElement(On.U, {
                            display: On.H.Flex,
                            alignItems: On.c.Center,
                            justifyContent: On.T.Start
                        }, Object(ne.d)("Copied to clipboard", "MessageOptionsMenu"))));
                        var a = Nn.createElement(On._17, {
                            display: On.H.Flex,
                            fullWidth: !0,
                            key: t.props.context.comment.id + "-share",
                            color: On.F.Link
                        }, i);
                        return Nn.createElement(On.U, {
                            padding: {
                                y: 1
                            }
                        }, e, a, n)
                    }, t.closeMenu = function() {
                        t.setState({
                            isMenuOpen: !1,
                            confirmationAction: null,
                            isLinkCopied: !1
                        }), t.props.onClose()
                    }, t.onShareClick = function() {
                        var e = t.props.context.comment,
                            n = e.contentId,
                            i = sa(n, {
                                tt_medium: "video_chat",
                                tt_content: "message_share_link",
                                t: Object(xn.b)(e.contentOffset),
                                comment: e.id
                            });
                        return Object(ra.a)(i.toString()), t.setState({
                            isLinkCopied: !0
                        }, function() {
                            return t.dismissTimeoutID = setTimeout(function() {
                                t.setState({
                                    isLinkCopied: !1
                                })
                            }, ha)
                        }), Hn(e, i)
                    }, t.onReplyClickHandler = function() {
                        t.props.onReplyClick(t.props.context.author.displayName), t.closeMenu()
                    }, t.onBanUserClickHandler = function() {
                        t.setState(function(e) {
                            return ie.__assign({}, e, {
                                confirmationAction: t.props.onBanUserClick
                            })
                        })
                    }, t.onDeleteButtonClickHandler = function() {
                        t.setState(function(e) {
                            return ie.__assign({}, e, {
                                confirmationAction: t.props.onDeleteCommentClick
                            })
                        })
                    }, t.onContinueClickHandler = function() {
                        "function" == typeof t.state.confirmationAction && t.state.confirmationAction(), t.closeMenu()
                    }, t.onCancelClickHandler = function() {
                        t.setState(function(e) {
                            return ie.__assign({}, e, {
                                confirmationAction: null
                            })
                        })
                    }, t
                }
                return ie.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.dismissTimeoutID)
                }, t.prototype.render = function() {
                    return Nn.createElement(On.U, {
                        position: On._2.Relative
                    }, Nn.createElement(ki.a, {
                        onClickOut: this.closeMenu
                    }, Nn.createElement(On.v, {
                        ariaLabel: Object(ne.d)("Message Actions Menu", "VideoCommentsMenu"),
                        size: On.x.Small,
                        type: On.w.Secondary,
                        "data-test-selector": "menu-button",
                        icon: On._9.More,
                        onClick: this.onToggleMenu
                    }), Nn.createElement(On.p, {
                        direction: On.q.BottomRight,
                        show: this.state.isMenuOpen,
                        size: On.r.Small
                    }, this.getContent())))
                }, t
            }(Nn.Component),
            fa = (n(1371), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        forceMenuVisibility: !1
                    }, t.onBanUserClickHandler = function() {
                        t.props.onBanUserClick({
                            bannedUser: t.props.context.comment.commenter,
                            targetChannel: t.props.context.comment.channelId,
                            comment: t.props.context.comment
                        })
                    }, t.onDeleteCommentClickHandler = function() {
                        t.props.onDeleteCommentClick(t.props.context.comment)
                    }, t.onMenuOpenHandler = function() {
                        t.props.onDisableSync(), t.setState({
                            forceMenuVisibility: !0
                        })
                    }, t.onMenuCloseHandler = function() {
                        t.setState({
                            forceMenuVisibility: !1
                        })
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.context,
                        n = e.badgeSets,
                        i = e.currentUser,
                        a = !!i && t.comment.commenter === i.id,
                        r = void 0 !== t.comment.userBadges[ia.a],
                        o = vi("video-chat__message-menu", {
                            "video-chat__message-menu--force-visible": this.state.forceMenuVisibility
                        }),
                        s = Nn.createElement(On.U, {
                            className: o,
                            "data-test-selector": "menu-options-wrapper",
                            flexShrink: 0
                        }, Nn.createElement(ga, {
                            context: t,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.onBanUserClickHandler,
                            onClose: this.onMenuCloseHandler,
                            onDeleteCommentClick: this.onDeleteCommentClickHandler,
                            onOpen: this.onMenuOpenHandler,
                            onReplyClick: this.props.onReplyClick
                        })),
                        l = vi("video-chat__message-author", (u = {}, u["video-chat__message-author--me"] = a, u["video-chat__message-author--creator"] = r, u)),
                        c = a || r ? "" : t.comment.message.userColor,
                        d = Nn.createElement("span", {
                            className: "pd-x-05"
                        }, ":");
                    return t.comment.message.isAction && (d = Nn.createElement("span", {
                        className: "pd-r-05"
                    })), Nn.createElement(On.U, {
                        alignItems: On.c.Start,
                        display: On.H.Flex,
                        flexWrap: On.K.NoWrap
                    }, Nn.createElement(On.U, {
                        flexGrow: 1
                    }, Nn.createElement(Bi.b, {
                        badgesToRender: t.comment.userBadges,
                        badgeSets: n
                    }), Nn.createElement("a", {
                        className: l,
                        "data-test-selector": "comment-author-selector",
                        "data-tt_content": "tab_videos",
                        "data-tt_medium": "video-message-author",
                        href: "/" + t.author.name,
                        rel: "noopener noreferrer",
                        target: "_blank"
                    }, Nn.createElement(aa.a, {
                        userData: Fi(t.author, c),
                        highlighted: a || r
                    })), Nn.createElement(On.U, {
                        display: On.H.Inline,
                        className: "video-chat__message",
                        "data-test-selector": "comment-message-selector"
                    }, d, Nn.createElement(Di, {
                        message: t.comment.message,
                        allowActionTextColors: !0
                    }))), s);
                    var u
                }, t
            }(Nn.Component)),
            ba = (n(1372), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onReplyClickHandler = function() {
                        t.props.replyCommentContext ? t.props.onReplyClick(t.props.replyCommentContext.author.displayName) : t.props.onReplyClick()
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = Object(ne.d)("Reply", "DashboardModerationReplyButton");
                    return "vod-message" === this.props.context ? Nn.createElement("button", {
                        className: "video-chat-reply-button",
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "parent-reply-button"
                    }, Nn.createElement(On.U, {
                        display: On.H.Flex
                    }, Nn.createElement(On.U, {
                        className: "video-chat-reply-button__icon",
                        display: On.H.Flex,
                        padding: {
                            right: .5
                        }
                    }, Nn.createElement(On._8, {
                        width: 13,
                        height: 13,
                        asset: On._9.Conversations,
                        type: On._10.Inherit
                    })), Nn.createElement(On._21, {
                        align: On._37.Middle,
                        type: On._26.Span
                    }, e))) : "mod-dashboard" === this.props.context ? Nn.createElement(On.v, {
                        ariaLabel: e,
                        type: On.w.Hollow,
                        icon: On._9.Conversations,
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "moderation-reply-button",
                        "data-a-selector": "qa-vod-chat-reply-button"
                    }) : Nn.createElement(On._17, {
                        color: On.F.Link,
                        display: On.H.Inline,
                        margin: {
                            left: 1
                        }
                    }, Nn.createElement("button", {
                        onClick: this.onReplyClickHandler,
                        "data-test-selector": "reply-reply-button"
                    }, Nn.createElement(On._21, {
                        type: On._26.Span
                    }, e)))
                }, t
            }(Nn.Component)),
            va = (n(1373), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.submitReply = function() {
                        if ("" !== n.state.newReplyText) {
                            if (n.props.isCreationCoolDownActive) return n.setState({
                                showCoolDownState: !0
                            }), void(n.props.onError && n.props.onError(J()));
                            n.props.onReplySubmit(n.state.newReplyText), n.setState({
                                newReplyText: ""
                            })
                        }
                    }, n.onChange = function(e) {
                        e.preventDefault(), n.setState({
                            newReplyText: e.currentTarget.value
                        })
                    }, n.onEmoticonClick = function(e) {
                        n.setState({
                            newReplyText: n.state.newReplyText + " " + e
                        })
                    }, n.onKeyDown = function(e) {
                        e.key === Ji && (e.preventDefault(), n.submitReply()), n.props.onReplyFormClose && e.key === Xi && (e.preventDefault(), n.props.onReplyFormClose())
                    }, n.setTextareaRef = function(e) {
                        return n.textArea = e
                    }, n.state = {
                        newReplyText: t.replyToUserDisplayName ? "@" + t.replyToUserDisplayName + " " : "",
                        showCoolDownState: !1
                    }, n
                }
                return ie.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.isCreationCoolDownActive || this.setState({
                        showCoolDownState: !1
                    }), e.replyToUserDisplayName && e.replyToUserDisplayName !== this.props.replyToUserDisplayName && this.setState({
                        newReplyText: "@" + e.replyToUserDisplayName + " "
                    })
                }, t.prototype.render = function() {
                    return Nn.createElement(On.U, {
                        className: this.props.classNames,
                        position: On._2.Relative
                    }, Nn.createElement(On._23, {
                        error: this.state.showCoolDownState,
                        maxLength: 512,
                        noResize: !0,
                        onChange: this.onChange,
                        onKeyDown: this.onKeyDown,
                        placeholder: Object(ne.d)("Reply", "ReplyForm"),
                        refDelegate: this.setTextareaRef,
                        value: this.state.newReplyText
                    }), Nn.createElement(qi.a, {
                        attachRight: !0,
                        attachTop: !0,
                        channelOwnerID: this.props.videoOwnerID,
                        inputRef: this.textArea,
                        onClickEmote: this.onEmoticonClick,
                        position: On._2.Absolute
                    }))
                }, t
            }(Nn.Component)),
            ya = function(e) {
                return Nn.createElement(On.U, {
                    padding: {
                        y: .5,
                        left: 1
                    }
                }, Nn.createElement(On.U, {
                    className: "vod-message__content"
                }, Nn.createElement(fa, {
                    badgeSets: e.badgeSets,
                    context: e.context,
                    currentUser: e.currentUser,
                    isCurrentUserModerator: e.isCurrentUserModerator,
                    isExpandedLayout: e.isExpandedLayout,
                    onBanUserClick: e.onBanUserClick,
                    onDeleteCommentClick: e.onDeleteCommentClick,
                    onDisableSync: e.onDisableSync,
                    onReplyClick: e.onReplyClick
                })))
            },
            ka = "vod-message-reply",
            Sa = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.makeReplyButtonAndRelativeTime = function(e) {
                        return Nn.createElement(On.U, {
                            display: On.H.Flex,
                            alignItems: On.c.Center
                        }, Nn.createElement(ba, {
                            context: ka,
                            onReplyClick: t.props.onReplyClick,
                            replyCommentContext: e
                        }), Nn.createElement(On.P, {
                            margin: {
                                left: .5
                            }
                        }, Nn.createElement(On._21, {
                            color: On.F.Alt2,
                            fontSize: 7,
                            type: On._26.Span
                        }, " • " + Object(ne.g)(e.comment.createdAt))))
                    }, t.makeReply = function(e) {
                        var n = null;
                        return t.props.isExpandedLayout && (n = t.makeReplyButtonAndRelativeTime(e)), Nn.createElement("li", {
                            key: e.comment.id
                        }, Nn.createElement(ya, {
                            badgeSets: t.props.badgeSets,
                            context: e,
                            currentUser: t.props.currentUser,
                            isCurrentUserModerator: t.props.isCurrentUserModerator,
                            isExpandedLayout: t.props.isExpandedLayout,
                            onBanUserClick: t.props.onBanUserClick,
                            onDeleteCommentClick: t.props.onDeleteCommentClick,
                            onDisableSync: t.props.onDisableSync,
                            onReplyClick: t.props.onReplyClick
                        }), n)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.replies,
                        t = e.map(this.makeReply.bind(this));
                    return Nn.createElement("ul", null, t)
                }, t
            }(Nn.Component),
            _a = (n(1374), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    !this.props.parentMessage.comment.moreReplies || this.props.isReplayFilterOn && !this.props.isExpandedLayout || (e = Nn.createElement(On.U, {
                        display: On.H.InlineBlock,
                        className: "vod-message__show-more-replies"
                    }, Nn.createElement(Dn, {
                        onClick: this.props.onLoadMoreRepliesClick
                    })));
                    var t = null;
                    this.props.showReplyForm && (t = Nn.createElement(On.U, {
                        margin: {
                            top: .5,
                            bottom: 1,
                            x: 1
                        }
                    }, Nn.createElement(va, {
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive || !1,
                        onError: this.props.onError,
                        onReplyFormClose: this.props.onReplyFormClose,
                        onReplySubmit: this.props.onReplySubmit,
                        replyToUserDisplayName: this.props.replyToUserDisplayName,
                        videoOwnerID: this.props.parentMessage.comment.channelId
                    })));
                    var n = null;
                    return this.props.isExpandedLayout && (n = Nn.createElement(On.U, {
                        alignItems: On.c.Center,
                        display: On.H.Flex
                    }, Nn.createElement(ba, {
                        context: "vod-message",
                        onReplyClick: this.props.onReplyClick,
                        replyCommentContext: this.props.parentMessage
                    }), Nn.createElement(On.P, {
                        margin: {
                            left: .5
                        }
                    }, Nn.createElement(On._21, {
                        color: On.F.Alt2,
                        fontSize: 7,
                        type: On._26.Span
                    }, " • " + Object(ne.g)(this.props.parentMessage.comment.createdAt))))), Nn.createElement(On.U, null, n, Nn.createElement(On.U, {
                        margin: {
                            y: .5,
                            left: .5
                        },
                        className: vi("vod-message__reply", "qa-vod-chat-reply")
                    }, e, Nn.createElement(Sa, {
                        badgeSets: this.props.badgeSets,
                        currentUser: this.props.currentUser,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isExpandedLayout: this.props.isExpandedLayout,
                        onBanUserClick: this.props.onBanUserClick,
                        onDeleteCommentClick: this.props.onDeleteCommentClick,
                        onDisableSync: this.props.onDisableSync,
                        onReplyClick: this.props.onReplyClick,
                        replies: this.props.parentMessage.replies
                    }), t))
                }, t
            }(Nn.Component)),
            Ca = (n(1375), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showReplyForm: !1,
                        replyToUserDisplayName: ""
                    }, t.onReplyClickHandler = function(e) {
                        t.setState({
                            showReplyForm: !0,
                            replyToUserDisplayName: e
                        }, t.props.onDisableSync)
                    }, t.onReplyFormCloseHandler = function() {
                        t.setState({
                            showReplyForm: !1,
                            replyToUserDisplayName: ""
                        })
                    }, t.onReplySubmitHandler = function(e) {
                        t.props.onCreateReply(e, t.props.messageContext.comment.id), t.setState({
                            showReplyForm: !1,
                            replyToUserDisplayName: ""
                        })
                    }, t.onTimestampClickHandler = function() {
                        t.props.onTimeStampClick(t.props.messageContext.comment.contentOffset, t.props.messageContext.comment)
                    }, t.onLoadMoreRepliesClickHandler = function() {
                        t.props.onLoadMoreRepliesClick(t.props.messageContext.comment.id, t.props.messageContext.comment.contentId)
                    }, t.refHandler = function(e) {
                        t.shouldFocusMessage() && t.props.onFocus(e)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    (this.props.isExpandedLayout || this.props.messageContext.replies.length > 0 || this.state.showReplyForm) && (e = Nn.createElement(_a, {
                        badgeSets: this.props.badgeSets,
                        currentUser: this.props.currentUser,
                        isCreationCoolDownActive: this.props.isCreationCoolDownActive,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isExpandedLayout: this.props.isExpandedLayout,
                        isReplayFilterOn: this.props.isReplayFilterOn,
                        onBanUserClick: this.props.onBanUserClick,
                        onDeleteCommentClick: this.props.onDeleteCommentClick,
                        onDisableSync: this.props.onDisableSync,
                        onError: this.props.onError,
                        onLoadMoreRepliesClick: this.onLoadMoreRepliesClickHandler,
                        onReplyClick: this.onReplyClickHandler,
                        onReplyFormClose: this.onReplyFormCloseHandler,
                        onReplySubmit: this.onReplySubmitHandler,
                        parentMessage: this.props.messageContext,
                        replyToUserDisplayName: this.state.replyToUserDisplayName,
                        showReplyForm: this.state.showReplyForm
                    }));
                    var t = null;
                    !1 === this.props.hideTimestamp && (t = Nn.createElement(On.U, {
                        className: "vod-message__header",
                        "data-test-selector": "message-timestamp",
                        display: On.H.Flex,
                        flexShrink: 0,
                        textAlign: On._22.Right
                    }, Nn.createElement(na, {
                        offset: this.props.messageContext.comment.contentOffset,
                        onClick: this.onTimestampClickHandler
                    })));
                    var n = vi("vod-message", (a = {}, a["vod-message--focused"] = this.shouldFocusMessage(), a)),
                        i = Nn.createElement(On.U, {
                            alignItems: On.c.Start,
                            className: n,
                            "data-test-selector": "message-layout",
                            display: On.H.Flex,
                            flexWrap: On.K.NoWrap,
                            fullWidth: !0,
                            padding: {
                                y: .5,
                                left: this.props.hideTimestamp ? 2 : .5
                            },
                            refDelegate: this.refHandler
                        }, t, Nn.createElement(On.U, {
                            fullWidth: !0
                        }, Nn.createElement(fa, {
                            badgeSets: this.props.badgeSets,
                            context: this.props.messageContext,
                            currentUser: this.props.currentUser,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isExpandedLayout: this.props.isExpandedLayout,
                            onBanUserClick: this.props.onBanUserClick,
                            onDeleteCommentClick: this.props.onDeleteCommentClick,
                            onDisableSync: this.props.onDisableSync,
                            onReplyClick: this.onReplyClickHandler
                        }), e));
                    return this.props.messageContext.comment.highlight || !1 ? Nn.createElement(On.e, {
                        duration: On.g.Medium,
                        enabled: !0,
                        type: On.i.FadeIn
                    }, i) : i;
                    var a
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return e.highlight !== this.props.highlight || e.isReplayFilterOn !== this.props.isReplayFilterOn || e.hideTimestamp !== this.props.hideTimestamp || t.showReplyForm !== this.state.showReplyForm || e.messageContext.replies.length !== this.props.messageContext.replies.length || t.replyToUserDisplayName !== this.state.replyToUserDisplayName
                }, t.prototype.shouldFocusMessage = function() {
                    return this.props.highlight
                }, t
            }(Nn.Component)),
            Ea = (n(1376), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstScroll: !0
                    }, t.componentInitiatedScroll = !1, t.mouseDragging = !1, t.preventScrolling = !1, t.allowScrolling = function() {
                        t.preventScrolling = !1
                    }, t.atBottom = function() {
                        var e = t.commentListRef.scrollTop,
                            n = t.commentListRef.scrollHeight;
                        return e + t.commentListRef.clientHeight === n
                    }, t.bindCommentListRef = function(e) {
                        t.commentListRef = e
                    }, t.onMouseDown = function() {
                        t.preventScrolling = !1, t.mouseDragging = !0
                    }, t.onMouseUp = function() {
                        t.mouseDragging = !1
                    }, t.onScroll = function() {
                        t.shouldFireOnScroll() && (t.componentInitiatedScroll || (t.atBottom() ? t.props.onScrollBottom() : t.props.onScrollOffBottom()), t.componentInitiatedScroll = !1, t.preventScrolling = !0)
                    }, t.syncButtonClick = function() {
                        t.preventScrolling = !1, t.props.onSyncScrollClick()
                    }, t
                }
                return ie.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.onMount()
                }, t.prototype.componentDidUpdate = function() {
                    this.preventScrolling = !0, this.props.isScrollingSynced && (this.preventScrolling = !1, this.componentInitiatedScroll = !0, this.commentListRef.scrollTop = this.commentListRef.scrollHeight)
                }, t.prototype.render = function() {
                    var e = vi("video-chat__message-list-wrapper", (n = {}, n["video-chat__message-list-wrapper--unsynced"] = !this.props.isScrollingSynced, n)),
                        t = null;
                    return !1 === this.props.isScrollingSynced && (t = Nn.createElement(On.P, {
                        className: "video-chat__sync-button",
                        padding: {
                            x: 1
                        },
                        position: On._2.Absolute,
                        attachBottom: !0
                    }, Nn.createElement("button", {
                        onClick: this.syncButtonClick
                    }, Object(gt.d)("Resume auto scroll", "MessageScrollArea")))), Nn.createElement(On._17, {
                        fullHeight: !0,
                        overflow: On.Y.Hidden,
                        position: On._2.Relative
                    }, Nn.createElement("div", {
                        className: e,
                        onKeyDown: this.allowScrolling,
                        onMouseMove: this.allowScrolling,
                        onMouseDown: this.onMouseDown,
                        onMouseUp: this.onMouseUp,
                        onScroll: this.onScroll,
                        onWheel: this.allowScrolling,
                        ref: this.bindCommentListRef,
                        tabIndex: -1
                    }, this.props.children), t);
                    var n
                }, t.prototype.shouldFireOnScroll = function() {
                    return !this.mouseDragging && this.preventScrolling ? (this.componentInitiatedScroll = !1, !1) : !(this.state.firstScroll && !this.props.startSynced) || (this.setState({
                        firstScroll: !1
                    }), !1)
                }, t
            }(Nn.Component)),
            wa = (n(1377), 5e3),
            Ta = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        commentAlreadyFocused: !1
                    }, t.badgeSets = new Bi.c([], [], ""), t.createComment = function(e) {
                        var n = {
                            contentId: t.props.videoID,
                            contentOffsetSeconds: t.props.currentVideoTime,
                            contentType: Ye,
                            message: e
                        };
                        t.onCreate(n)
                    }, t.createReply = function(e, n) {
                        var i = {
                            message: e,
                            parentId: n
                        };
                        t.onCreate(i)
                    }, t.onErrorDismissedHandler = function(e) {
                        t.props.onError("");
                        var n = t.props.errorMessage === r().chatReplayFilterError;
                        e && t.props.shouldSendReplayFilterError && n && t.props.onErrorDismissClick()
                    }, t.onErrorMessageClickHandler = function() {
                        t.props.onError(""), t.props.onTurnOffReplayFilter()
                    }, t.onMessageScrollAreaMount = function() {
                        t.props.highlightedMessageID && "" !== t.props.highlightedMessageID && t.props.onDisableSync()
                    }, t.onError = function(e) {
                        t.props.onError(e)
                    }, t.onLoadMoreRepliesHandler = function(e, n) {
                        var i = t.props.data.video.owner.cheer && t.props.data.video.owner.cheer.emotes || [];
                        t.props.onLoadMoreReplies(e, t.props.replyCursorMap, n, Object(Mi.a)(i))
                    }, t.focusedCommentCallback = function(e) {
                        t.setState({
                            commentToFocus: e
                        })
                    }, t.startUnfocusTimeout = function() {
                        t.focusTimer = setTimeout(function() {
                            t.setState({
                                commentAlreadyFocused: !0
                            })
                        }, wa)
                    }, t
                }
                return ie.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.onWillMount()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    void 0 !== e.highlightedMessageID && this.props.highlightedMessageID !== e.highlightedMessageID && (this.props.onPlayerSeekRequest(e.highlightTimestamp), this.props.onDisableSync(), this.setState({
                        commentAlreadyFocused: !1
                    })), X(this.props, e) && (this.badgeSets = new Bi.c([], [], ""), e.data.loading || e.data.error || (this.badgeSets = new Bi.c(e.data.badges, e.data.video.owner.broadcastBadges, e.data.video.owner.login))), (0, this.props.onUpdateBegan)(e, this.props)
                }, t.prototype.componentDidUpdate = function() {
                    if (this.props.data.loading || this.props.data.error || !this.props.hasFetchedComments || this.props.latencyTracking.reportInteractive(), this.state.commentToFocus) {
                        (this.state.commentToFocus.nextElementSibling || this.state.commentToFocus).scrollIntoView(!0), this.setState({
                            commentToFocus: void 0
                        }), this.startUnfocusTimeout()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.focusTimer), this.props.onUnmount()
                }, t.prototype.render = function() {
                    var e, t = this,
                        n = this.props,
                        i = n.comments,
                        a = n.highlightedMessageID,
                        r = n.data;
                    if (this.props.data.loading) e = Nn.createElement(On.X, {
                        fillContent: !0
                    });
                    else if (this.props.data.error) e = Nn.createElement(On.U, {
                        alignItems: On.c.Center,
                        "data-test-selector": "video-chat-error",
                        fullHeight: !0,
                        justifyContent: On.T.Center
                    }, Nn.createElement(On._21, {
                        italic: !0
                    }, Object(gt.d)("Video Chat is currently unavailable.", "VideoChat")));
                    else {
                        var o = void 0;
                        o = this.props.hasFetchedComments && this.props.offsetRange === rn ? Nn.createElement(On.P, {
                            display: On.H.Flex,
                            margin: {
                                x: 1,
                                top: 2,
                                bottom: 1
                            },
                            alignItems: On.c.Center
                        }, Nn.createElement("li", {
                            "data-test-selector": "no-comments-cta"
                        }, Nn.createElement("img", {
                            className: "mg-r-1",
                            src: Lt(65),
                            srcSet: jt(65)
                        }), Object(gt.d)("Join the chat while watching the video!", "VideoChatComponent"))) : i.map(function(e, n) {
                            var i = !t.state.commentAlreadyFocused && e.comment.id === a,
                                o = n + 1 === t.props.comments.length,
                                s = !t.props.isScrollingSynced && o;
                            return Nn.createElement(On.P, {
                                padding: s ? {
                                    bottom: 4
                                } : {},
                                key: e.comment.id,
                                fullWidth: !0
                            }, Nn.createElement("li", null, Nn.createElement(Ca, {
                                badgeSets: t.badgeSets,
                                currentUser: r.currentUser,
                                highlight: i,
                                isCreationCoolDownActive: t.props.isCreationCoolDownActive,
                                isCurrentUserModerator: t.props.isCurrentUserModerator,
                                isExpandedLayout: r.video.broadcastType === tn.a.Upload,
                                isReplayFilterOn: t.props.isReplayFilterOn,
                                messageContext: e,
                                onBanUserClick: t.props.onBanUser,
                                onCreateReply: t.createReply,
                                onDeleteCommentClick: t.props.onDeleteComment,
                                onDisableSync: t.props.onDisableSync,
                                onError: t.onError,
                                onFocus: t.focusedCommentCallback,
                                onLoadMoreRepliesClick: t.onLoadMoreRepliesHandler,
                                onTimeStampClick: t.props.onPlayerSeekRequest,
                                hideTimestamp: t.props.hideTimestamps
                            })))
                        }), e = Nn.createElement("ul", {
                            style: {
                                minHeight: 0
                            }
                        }, o)
                    }
                    var s = void 0 === this.props.highlightedMessageID,
                        l = null;
                    "" !== this.props.errorMessage && (l = Nn.createElement(Wi, {
                        message: this.props.errorMessage,
                        onErrorDismissed: this.onErrorDismissedHandler,
                        onMessageClick: this.onErrorMessageClickHandler
                    }));
                    var c;
                    return c = this.props.data.loading || this.props.data.error ? Nn.createElement(On._1, {
                        "data-test-selector": "message-input-placeholder",
                        height: 90,
                        width: 340
                    }) : Nn.createElement(ta, {
                        currentUser: this.props.data.currentUser,
                        currentVideoTime: this.props.currentVideoTime,
                        onError: this.onError,
                        isModerator: !!this.props.data.video.owner.self && this.props.data.video.owner.self.isModerator,
                        isReplayMode: this.props.isReplayFilterOn,
                        isScrollingSynced: this.props.isScrollingSynced,
                        isPostCooldownActive: this.props.isCreationCoolDownActive,
                        isUpload: r.video.broadcastType === tn.a.Upload,
                        onCreateComment: this.createComment,
                        onScrollPause: this.props.onDisableSync,
                        onScrollResume: this.props.onEnableSync,
                        videoOwnerID: this.props.data.video.owner.id,
                        videoOwnerLogin: this.props.data.video.owner.login
                    }), Nn.createElement(On._17, {
                        className: vi("video-chat", "qa-vod-chat"),
                        display: On.H.Flex,
                        borderLeft: !0,
                        color: On.F.Alt,
                        flexDirection: On.J.Column,
                        flexShrink: 0,
                        flexWrap: On.K.NoWrap,
                        fullHeight: !0,
                        fullWidth: !0,
                        position: On._2.Relative
                    }, Nn.createElement(On.U, {
                        alignItems: On.c.Center,
                        className: "video-chat__header",
                        display: On.H.Flex,
                        justifyContent: On.T.Center
                    }, Nn.createElement(On._21, {
                        type: On._26.Span
                    }, Object(gt.d)("Chat on Videos", "VideoChatPresentation"))), l, Nn.createElement(Ea, {
                        startSynced: s,
                        isScrollingSynced: this.props.isScrollingSynced,
                        onScrollOffBottom: this.props.onDisableSync,
                        onScrollBottom: this.props.onEnableSync,
                        onMount: this.onMessageScrollAreaMount,
                        onSyncScrollClick: this.props.onEnableSync
                    }, Nn.createElement(On.U, {
                        display: On.H.Flex,
                        flexDirection: On.J.Column,
                        fullHeight: !0,
                        justifyContent: On.T.End
                    }, Nn.createElement(On.P, {
                        display: On.H.Flex,
                        alignItems: On.c.End,
                        fullWidth: !0
                    }, e))), Nn.createElement(On.U, {
                        className: "video-chat__input",
                        padding: {
                            top: 1,
                            bottom: 2,
                            x: 2
                        },
                        flexShrink: 0,
                        fullWidth: !0
                    }, c))
                }, t.prototype.onCreate = function(e) {
                    this.props.isLoggedIn ? this.props.onCreate(e) : this.props.onShowLogin()
                }, t
            }(Nn.Component),
            Na = Object(Vi.c)("VideoChat")(Ta),
            Oa = n(1378),
            Da = 2,
            Ia = function(e, t, n) {
                var i = t.onDisableSync;
                e.isScrollingSynced || (i = function() {});
                var a = t.onCreate;
                return e.shouldSendReplayFilterError && (a = function(e) {
                    t.onError(r().chatReplayFilterError), t.onCreate(e)
                }), ie.__assign({}, e, t, {
                    onDisableSync: i,
                    onCreate: a,
                    data: n.data
                })
            },
            Ua = Object(Ai.a)(Z, ee, Ia)(Na),
            Pa = Object(Ri.graphql)(Oa, {
                options: function(e) {
                    return {
                        variables: {
                            videoID: e.videoID
                        }
                    }
                },
                props: function(e) {
                    var t = e.ownProps,
                        n = e.data,
                        i = Object(Mi.a)(n && !n.loading && !n.error && n.video.owner.cheer && n.video.owner.cheer.emotes || []),
                        a = {};
                    return n && !n.loading && !n.error && n.currentUser && n.currentUser.blockedUsers && (a = n.currentUser.blockedUsers.reduce(function(e, t) {
                        return e[t.id] = !0, e
                    }, {})), ie.__assign({}, t, {
                        data: n,
                        bitsConfig: i,
                        blockedUsers: a
                    })
                }
            })(Ua);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {
            return Mt
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "C", function() {
            return cn
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "p", function() {
            return Ie
        }), n.d(t, "r", function() {
            return Qe
        }), n.d(t, "w", function() {
            return V
        }), n.d(t, "x", function() {
            return H
        }), n.d(t, "o", function() {
            return M
        }), n.d(t, "n", function() {
            return wn
        }), n.d(t, "z", function() {
            return En
        }), n.d(t, "B", function() {
            return Tn
        }), n.d(t, "D", function() {
            return G
        }), n.d(t, "E", function() {
            return q
        }), n.d(t, "l", function() {
            return Dn
        }), n.d(t, "q", function() {
            return li
        }), n.d(t, "s", function() {
            return ci
        }), n.d(t, "A", function() {
            return si
        }), n.d(t, "J", function() {
            return di
        }), n.d(t, "F", function() {
            return mi
        }), n.d(t, "G", function() {
            return gi
        }), n.d(t, "H", function() {
            return hi
        }), n.d(t, "I", function() {
            return fi
        }), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return "pending_review"
        }), n.d(t, "d", function() {
            return "unpublished"
        }), n.d(t, "a", function() {
            return "pending_review_spam"
        }), n.d(t, "c", function() {
            return "published"
        }), n.d(t, !1, function() {}), n.d(t, "y", function() {
            return Ze
        }), n.d(t, "e", function() {
            return Ei
        }), n.d(t, "k", function() {
            return Ni
        }), n.d(t, "h", function() {
            return Di
        }), n.d(t, "u", function() {
            return wi
        }), n.d(t, "v", function() {
            return an
        }), n.d(t, "t", function() {
            return xi
        }), n.d(t, "f", function() {
            return "mod-dashboard"
        }), n.d(t, "g", function() {
            return "mod-comment"
        }), n.d(t, "m", function() {
            return Pa
        }), n.d(t, !1, function() {}), n.d(t, "j", function() {
            return va
        }), n.d(t, "i", function() {
            return ba
        })
    },
    823: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(247),
            o = n(351),
            s = n(3),
            l = (n(848), {
                themed: !0,
                dark: {
                    "1x": r.a + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.a + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(s.U, {
                    display: s.H.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.J.Column,
                    justifyContent: s.T.Center,
                    alignItems: s.c.Center
                }, i.createElement(s._21, {
                    type: s._26.H4,
                    bold: !0
                }, i.createElement(o.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    824: function(e, t, n) {
        "use strict";

        function i() {
            var e = s.k.get(c, {});
            return o.__assign({
                lastUsedFollowerDurations: {},
                showAutoModActions: !0,
                showMessageFlags: !0,
                showModerationActions: !0,
                showModIcons: !1,
                showTimestamps: !1,
                zachModeStatus: l
            }, e)
        }

        function a(e, t) {
            var n = i();
            n[e] = t, s.k.set(c, n)
        }

        function r(e, t) {
            var n = i();
            n.lastUsedFollowerDurations[e] = t, s.k.set(c, n)
        }
        var o = n(0),
            s = n(2),
            l = "control";
        t.a = i, t.b = a, t.c = r;
        var c = "chatSettings"
    },
    826: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(1),
            a = (n.n(i), n(818)),
            r = function(e) {
                var t = Object.keys(e.badgesToRender).map(function(t) {
                        var n = e.badgesToRender[t],
                            r = e.badgeSets.getBadge(t, n);
                        return null === r ? null : i.createElement(a.a, {
                            key: r.setID + "/" + r.version,
                            badge: r
                        })
                    }),
                    n = t.filter(function(e) {
                        return null !== e
                    });
                return i.createElement("span", null, n)
            }
    },
    827: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsChatCard_Clip"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
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
                            value: "clip"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
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
                                    value: "slug"
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
                            }, {
                                kind: "Field",
                                alias: null,
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
                                            value: "displayName"
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
                                            value: "displayName"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 233
            }
        };
        n.loc.source = {
            body: "query ClipsChatCard_Clip($slug: ID!) {\n  clip(slug: $slug) {\n    id\n    slug\n    url\n    curator {\n      displayName\n    }\n    broadcaster {\n      displayName\n    }\n    game {\n      displayName\n    }\n    title\n    thumbnailURL\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    828: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "c", function() {
            return d
        });
        var i = n(0),
            a = n(2),
            r = n(13),
            o = n(819),
            s = n(794),
            l = function(e) {
                a.m.track(r.SpadeEventType.ChatSettingsOpened, Object(s.a)(e))
            },
            c = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: e.settingName,
                    new_value: e.newValue.toString()
                });
                a.m.track(r.SpadeEventType.ChatSettingsChanged, t)
            },
            d = function(e) {
                var t = i.__assign({}, Object(s.a)(e), {
                    setting_name: o.a.FollowerDuration,
                    new_value: e.newValue.toString(),
                    follower_mode_on: e.followerModeOn
                });
                a.m.track(r.SpadeEventType.ChatSettingsChanged, t)
            }
    },
    830: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = i
    },
    833: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(u.a)(p, {
                u: e
            })
        }

        function a(e, t) {
            return Object(u.a)(m, {
                url: e,
                text: t
            })
        }

        function r(e, t) {
            return Object(u.a)(h, {
                url: e,
                title: t
            })
        }

        function o(e) {
            return Object(u.a)(g, {
                url: e
            })
        }
        var s = n(0),
            l = n(1),
            c = n(2),
            d = n(845),
            u = n(125),
            p = "https://www.facebook.com/sharer/sharer.php",
            m = "https://www.twitter.com/share",
            h = "https://www.reddit.com/submit",
            g = "https://vk.com/share.php",
            f = n(3);
        n(874);
        n.d(t, "b", function() {
            return b
        }), n.d(t, "a", function() {
            return v
        });
        var b;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy"
        }(b || (b = {}));
        var v = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? l.createElement("a", s.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(f._39)(n.props)), n.renderIcon()) : l.createElement("button", s.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(f._39)(n.props)), n.renderIcon())
                }, n.onShareClickHandler = function() {
                    n.props.onShareClick && n.props.onShareClick(n.props.type)
                }, n.clearIsCopiedStatus = function() {
                    n.setState({
                        isCopied: !1
                    })
                }, n.getUrl = function() {
                    return n.props.url || window.location.href
                }, n.copyPageUrl = function(e) {
                    e && e.preventDefault(), n.props.onShareClick && n.props.onShareClick(n.props.type), Object(d.a)(n.getUrl()), n.setState({
                        isCopied: !0
                    })
                }, n.renderIcon = function() {
                    var e = n.getAssetFromType();
                    return l.createElement(f.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, l.createElement(f._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== b.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case b.Twitter:
                            return "Twitter";
                        case b.Reddit:
                            return "Reddit";
                        case b.Facebook:
                            return "Facebook";
                        case b.VKontakte:
                            return "VKontakte";
                        case b.Copy:
                            return n.state.isCopied ? Object(c.d)("Copied", "SocialButton") : Object(c.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case b.Twitter:
                            return f._9.Twitter;
                        case b.Facebook:
                            return f._9.Facebook;
                        case b.VKontakte:
                            return f._9.VKontakte;
                        case b.Reddit:
                            return f._9.Reddit;
                        case b.Copy:
                        default:
                            return f._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case b.Twitter:
                            return e + "--twitter";
                        case b.Reddit:
                            return e + "--reddit";
                        case b.Facebook:
                            return e + "--facebook";
                        case b.VKontakte:
                            return e + "--vkontakte";
                        case b.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        s = e.type,
                        l = n.getUrl(),
                        c = t || "";
                    switch (s) {
                        case b.Reddit:
                            return r(l, c);
                        case b.VKontakte:
                            return o(l);
                        case b.Facebook:
                            return i(l);
                        case b.Twitter:
                            return a(l, c);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return s.__extends(t, e), t.prototype.render = function() {
                return l.createElement(f.U, {
                    className: "social-button"
                }, l.createElement(f._30, {
                    label: this.getTooltipFromType(),
                    direction: f._32.Top
                }, this.renderLink()))
            }, t
        }(l.Component)
    },
    835: function(e, t) {
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "grantedBits"
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
                end: 114
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\n  redeemTrueXAd(input:$input) {\n    grantedBits\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    836: function(e, t) {},
    837: function(e, t) {},
    838: function(e, t) {},
    839: function(e, t) {},
    840: function(e, t) {},
    841: function(e, t, n) {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                        alias: null,
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                            }]
                        }
                    }, {
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
                                    value: "cheer"
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
                                                    value: "cheerMinimumBits"
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
                end: 528
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\n\nquery Bits_BuyCard_Offers($withChannel: Boolean!, $isLoggedIn: Boolean!, $channelLogin: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $channelLogin) @include(if: $withChannel) {\n    id\n    displayName\n    cheer {\n      id\n      settings {\n        cheerMinimumBits\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(805).definitions)), e.exports = i
    },
    842: function(e, t) {},
    845: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = document.createElement("textarea");
            t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.select();
            var n = !0;
            try {
                n = document.execCommand("copy")
            } catch (e) {
                n = !1
            }
            return document.body.removeChild(t), n
        }
        t.a = i
    },
    847: function(e, t) {},
    848: function(e, t) {},
    849: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e === r.SECOND ? Object(o.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === r.MINUTE ? Object(o.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === r.DAY ? Object(o.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === r.HOUR ? Object(o.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === r.WEEK ? Object(o.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === r.MONTH ? Object(o.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }

        function a(e) {
            if (e < 60) return i(r.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(r.MINUTE, t) + " " + i(r.SECOND, n) : i(r.MINUTE, t);
            var a = Math.floor(t / 60);
            if (t %= 60, a < 24) return t ? i(r.HOUR, a) + " " + i(r.MINUTE, t) : i(r.HOUR, a);
            var o = Math.floor(a / 24);
            if (a %= 24, o < 7) return a ? i(r.DAY, o) + " " + i(r.HOUR, a) : i(r.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return o %= 7, o ? i(r.WEEK, s) + " " + i(r.DAY, o) : i(r.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return i(r.MONTH, l)
        }
        t.a = a;
        var r, o = n(2);
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(r || (r = {}))
    },
    850: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(1),
            a = (n.n(i), n(365)),
            r = function(e) {
                var t, n = e.emote,
                    r = n.alt || "";
                return n.cheerAmount && (r += " " + n.cheerAmount.toString(), t = i.createElement("strong", {
                    className: "chat-line__message--cheer-amount",
                    style: {
                        color: n.cheerColor
                    }
                }, n.cheerAmount)), i.createElement(a.a, {
                    alt: r,
                    cheerText: t,
                    className: "chat-line__message--emote",
                    srcKey: "1x",
                    srcSet: n.images
                })
            }
    },
    851: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n.handleImageError = function() {
                        n.setState({
                            imageURL: r.a.defaultStreamPreviewURL
                        })
                    }, n.state = {
                        imageURL: t.imageURL
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("img", {
                        src: this.state.imageURL,
                        alt: this.state.imageURL,
                        onError: this.handleImageError,
                        className: this.props.className
                    })
                }, t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    854: function(e, t, n) {
        "use strict";
        var i = n(880);
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    859: function(e, t) {},
    860: function(e, t) {},
    861: function(e, t) {},
    862: function(e, t) {},
    864: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = c.createElement(F._21, {
                    bold: !0,
                    type: F._26.Span
                }, c.createElement("span", {
                    style: {
                        color: e.chatColor
                    }
                }, Object(j.a)(e.login, e.displayName))),
                n = null;
            return e.editAppearance || (n = c.createElement(F.U, {
                margin: {
                    top: 1
                }
            }, c.createElement("div", {
                className: "chat-settings__edit-button",
                onClick: e.onClickEdit,
                "data-test-selector": V
            }, Object(O.d)("Edit Appearance", "ChatSettings")))), c.createElement(F._17, {
                background: F.m.Base,
                color: F.F.Base,
                display: F.H.InlineFlex,
                flexDirection: F.J.Column,
                fullWidth: !0
            }, c.createElement(F._21, {
                color: F.F.Alt2,
                transform: F._25.Uppercase
            }, Object(O.d)("Name Display", "ChatSettings")), c.createElement(F.U, {
                margin: {
                    top: 2
                }
            }, e.userBadges && e.userBadges.map(function(e) {
                return c.createElement(B.a, {
                    key: e.id,
                    badge: e
                })
            }), t), n)
        }

        function a() {
            return {}
        }

        function r(e) {
            return Object(p.bindActionCreators)({
                showReportUserModal: function(e) {
                    var t = l.__rest(e, []);
                    return Object(W.d)(G.a, t)
                }
            }, e)
        }

        function o(e) {
            return {
                darkModeEnabled: Object(k.a)(e) === m.a.Dark,
                followerModeDuration: e.chat.followerDuration,
                followerModeEnabled: e.chat.followerMode,
                lastUsedFollowerDurations: e.chat.lastUsedFollowerDurations,
                showModerationIcons: e.chat.showModIcons,
                showTimestamps: e.chat.showTimestamps,
                slowModeEnabled: e.chat.slowMode,
                theatreModeEnabled: e.ui.theatreModeEnabled,
                isLoggedIn: Object(y.d)(e)
            }
        }

        function s(e) {
            return Object(p.bindActionCreators)({
                onChatHide: function() {
                    return S.E()
                },
                onChatUnhide: function() {
                    return S.G()
                },
                onFollowerModeDisable: function() {
                    return S.u()
                },
                onFollowerModeDurationChange: function(e) {
                    return S.r(e)
                },
                onFollowerModeDurationPreferenceChange: function(e, t) {
                    return S.s(e, t)
                },
                onFollowerModeEnable: function() {
                    return S.z()
                },
                onModIconsDisable: function() {
                    return S.v()
                },
                onModIconsEnable: function() {
                    return S.A()
                },
                onSlowModeDisable: function() {
                    return S.w()
                },
                onSlowModeEnable: function() {
                    return S.B()
                },
                onTimestampsDisable: function() {
                    return S.y()
                },
                onTimestampsEnable: function() {
                    return S.D()
                },
                onShowViewerCard: _.d,
                onThemeChanged: function(e) {
                    return Object(v.b)(e, void 0, !1)
                },
                login: function() {
                    return Object(b.f)(f.a.Chat)
                }
            }, e)
        }
        var l = n(0),
            c = n(1),
            d = n(8),
            u = n(21),
            p = n(10),
            m = n(36),
            h = n(799),
            g = n(786),
            f = n(50),
            b = n(34),
            v = n(127),
            y = n(18),
            k = n(44),
            S = n(354),
            _ = n(778),
            C = n(801),
            E = n(819),
            w = n(779),
            T = n(824),
            N = n(828),
            O = n(2),
            D = n(29),
            I = n(60),
            U = n(7),
            P = n(4),
            x = ["#FF0000", "#0000FF", "#008000", "#B22222", "#FF7F50", "#9ACD32", "#FF4500", "#2E8B57", "#DAA520", "#D2691E", "#5F9EA0", "#1E90FF", "#FF69B4", "#8A2BE2", "#00FF7F"],
            F = n(3),
            R = (n(865), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onColorSelected = function(e) {
                        var n = e.currentTarget.getAttribute("data-color");
                        n && t.props.onColorSelected(n)
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = x.map(function(t) {
                            var n = {
                                "color-chooser": !0,
                                "color-chooser--selected": t === e.props.selectedColor
                            };
                            return c.createElement("div", {
                                key: t,
                                "data-color": t,
                                onClick: e.onColorSelected,
                                className: P(n),
                                style: {
                                    backgroundColor: t
                                },
                                "data-test-selector": "color_swatch_" + t
                            })
                        }),
                        n = c.createElement(F._21, {
                            transform: F._25.Uppercase,
                            color: F.F.Alt2
                        }, Object(O.d)("Name Color", "ChatSettings"));
                    return this.props.borderTop && (n = c.createElement(F._17, {
                        margin: {
                            top: 2
                        },
                        borderTop: !0,
                        padding: {
                            top: 2
                        }
                    }, n)), c.createElement("div", null, c.createElement(F._17, {
                        margin: {
                            bottom: 1
                        },
                        background: F.m.Base,
                        color: F.F.Base,
                        display: F.H.InlineFlex,
                        flexDirection: F.J.Column,
                        fullWidth: !0
                    }, n), c.createElement(F.U, {
                        margin: {
                            y: 1
                        }
                    }, t, c.createElement(F._21, {
                        fontSize: F.L.Size7
                    }, c.createElement("a", {
                        href: "https://twitch.tv/products/turbo?ref=more_colors_direct"
                    }, Object(O.d)("more colors →", "ChatSettings")))))
                }, t
            }(c.Component)),
            A = n(20),
            M = n(866),
            L = (n(867), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onGlobalBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setGlobalBadge(t.props.userLogin, n || "")
                    }, t.onChannelBadgeClicked = function(e) {
                        var n = e.currentTarget.getAttribute("data-badge");
                        t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? c.createElement("div", null, c.createElement(R, {
                        selectedColor: this.props.userChatColor,
                        onColorSelected: this.props.onColorSelected,
                        borderTop: !0
                    }), this.getBadgeChooser()) : null
                }, t.prototype.getBadgeChooser = function() {
                    var e = this;
                    if (this.props.data) {
                        var t = this.props.data.user.self.availableBadges,
                            n = this.props.data.user.self.selectedBadge,
                            i = this.props.data.currentUser.availableBadges,
                            a = this.props.data.currentUser.selectedBadge;
                        if (!t) return null;
                        var r = void 0 === this.state.channelBadgeID && n ? n.setID : this.state.channelBadgeID,
                            o = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": !r
                            },
                            s = Object(O.d)("No channel badges :(", "ChatSettings");
                        t && t.length > 0 && (s = t.map(function(t) {
                            var i = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": n && t.setID === r
                            };
                            return c.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onChannelBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: P(i),
                                "data-test-selector": "channel_badge_" + t.setID
                            }, c.createElement(F._30, {
                                label: t.title
                            }, c.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        }), s.push(c.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onChannelBadgeClicked,
                            className: P(o),
                            "data-test-selector": "channel_badge_none"
                        }, c.createElement(F._30, {
                            label: Object(O.d)("Same as Global", "ChatSettings")
                        }, c.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, c.createElement(F._8, {
                            asset: F._9.Global
                        }))))));
                        var l = void 0 === this.state.globalBadgeID && a ? a.setID : this.state.globalBadgeID,
                            d = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": !l
                            },
                            u = Object(O.d)("No global badges :(", "ChatSettings");
                        return i && i.length > 0 && (u = i.map(function(t) {
                            var n = {
                                "edit-appearance__badge-chooser": !0,
                                "edit-appearance__badge-chooser--selected": a && t.setID === l
                            };
                            return c.createElement("div", {
                                "data-badge": t.setID,
                                onClick: e.onGlobalBadgeClicked,
                                key: t.setID + "/" + t.version,
                                className: P(n),
                                "data-test-selector": "global_badge_" + t.setID
                            }, c.createElement(F._30, {
                                label: t.title
                            }, c.createElement("img", {
                                alt: t.title,
                                src: t.image1x,
                                srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                            })))
                        }), u.push(c.createElement("div", {
                            key: "none",
                            "data-badge": "",
                            onClick: this.onGlobalBadgeClicked,
                            className: P(d),
                            "data-test-selector": "global_badge_none"
                        }, c.createElement(F._30, {
                            label: Object(O.d)("None", "ChatSettings")
                        }, c.createElement("div", {
                            className: "edit-appearance__badge-chooser__none"
                        }, c.createElement(F._8, {
                            asset: F._9.Ban
                        })))))), c.createElement("div", null, c.createElement(F._17, {
                            background: F.m.Base,
                            color: F.F.Base,
                            display: F.H.InlineFlex,
                            flexDirection: F.J.Column,
                            fullWidth: !0
                        }, c.createElement(F._17, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, c.createElement(F._30, {
                            align: F._31.Left,
                            label: Object(O.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                            width: 175
                        }, c.createElement(F._21, {
                            color: F.F.Alt2,
                            transform: F._25.Uppercase
                        }, Object(O.d)("Global Badge [?]", "ChatSettings")))), c.createElement(F.U, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: F.H.Flex
                        }, u)), c.createElement(F._17, {
                            background: F.m.Base,
                            color: F.F.Base,
                            display: F.H.InlineFlex,
                            flexDirection: F.J.Column,
                            fullWidth: !0
                        }, c.createElement(F._17, {
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            },
                            borderTop: !0
                        }, c.createElement(F._30, {
                            align: F._31.Left,
                            label: Object(O.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                            width: 175
                        }, c.createElement(F._21, {
                            color: F.F.Alt2,
                            transform: F._25.Uppercase
                        }, Object(O.d)("Channel Badge [?]", "ChatSettings")))), c.createElement(F.U, {
                            margin: {
                                y: 1
                            },
                            padding: {
                                top: 1
                            },
                            display: F.H.Flex
                        }, s)))
                    }
                }, t.prototype.setChannelBadge = function(e, t, n) {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var i, a, r;
                        return l.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return i = {
                                        "Client-ID": O.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, a = "https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", [4, fetch(a, {
                                        method: "PUT",
                                        body: A.stringify({
                                            selected_badge: n
                                        }),
                                        headers: i
                                    })];
                                case 1:
                                    return r = o.sent(), r && r.ok && (this.props.onBadgesChanged(), this.setState({
                                        channelBadgeID: n
                                    })), [2]
                            }
                        })
                    })
                }, t.prototype.setGlobalBadge = function(e, t) {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var n, i, a;
                        return l.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = {
                                        "Client-ID": O.n.config.legacyClientID,
                                        Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "Accept-Language": "en-us",
                                        Authorization: "OAuth " + this.props.authToken
                                    }, i = "https://api.twitch.tv/kraken/users/" + e + "/chat/badges", [4, fetch(i, {
                                        method: "PUT",
                                        body: A.stringify({
                                            selected_badge: t
                                        }),
                                        headers: n
                                    }).catch(console.error)];
                                case 1:
                                    return a = r.sent(), a && a.ok && (this.props.onBadgesChanged(), this.setState({
                                        globalBadgeID: t
                                    })), [2]
                            }
                        })
                    })
                }, t = l.__decorate([Object(U.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(c.Component)),
            j = n(51),
            B = n(784),
            V = "edit-appearanmce-button",
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(F.U, {
                        "data-toggle-balloon-id": "raids-follower-only-tooltip",
                        margin: {
                            left: .5
                        },
                        position: F._2.Relative
                    }, c.createElement(F._30, {
                        align: F._31.Right,
                        direction: F._32.Top,
                        display: F.H.InlineFlex,
                        label: this.props.text,
                        width: 175,
                        show: !0
                    }, c.createElement(F.P, {
                        alignItems: F.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: F.H.InlineFlex,
                        justifyContent: F.T.Center
                    }, c.createElement(F._21, {
                        color: F.F.Overlay,
                        fontSize: F.L.Size8,
                        type: F._26.Span,
                        "data-test-selector": "raids-follower-only-tooltip"
                    }, "i"))))
                }, t
            }(c.Component),
            W = n(49),
            G = n(772),
            q = n(11),
            z = n(760),
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetChannelID = t.props.targetChannelID, t
                }
                return l.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return l.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, z.a.get("/kraken/raids?client_id=" + O.a.authClientID + "&api_version=" + O.a.defaultAPIVersion + "&target_id=" + e)];
                                case 1:
                                    return t = i.sent(), [2, this.deserialize(t)];
                                case 2:
                                    return n = i.sent(), O.i.error(n, "Couldn't fetch raids list"), [2, []];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.deserialize = function(e) {
                    var t = [];
                    if (e.body && e.body.raids) {
                        for (var n in e.body.raids)
                            if (n.hasOwnProperty) {
                                var i = {
                                    raidID: e.body.raids[n]._id,
                                    raidAt: e.body.raids[n].raid_at,
                                    userID: e.body.raids[n].creator_user._id,
                                    name: e.body.raids[n].creator_user.name
                                };
                                t.push(i)
                            }
                        return t
                    }
                    return []
                }, t
            }(c.Component),
            K = n(22),
            Q = n(781),
            Y = n(796),
            J = n(868),
            X = n(869),
            Z = (n(870), n(871)),
            ee = function(e, t, n) {
                var i = e.readQuery({
                    query: X,
                    variables: {
                        targetUserID: n.raiderUserID,
                        channelID: n.channelID
                    }
                });
                t && t.data && (i.chatRoomBanStatus = {
                    isPermanent: !0,
                    __typename: "ChatRoomBanStatus"
                }), e.writeQuery({
                    query: X,
                    variables: {
                        targetUserID: n.raiderUserID,
                        channelID: n.channelID
                    },
                    data: i
                })
            },
            te = function(e, t) {
                var n = e.readQuery({
                        query: X,
                        variables: {
                            targetUserID: t.raiderUserID,
                            channelID: t.channelID
                        }
                    }),
                    i = l.__assign({}, n, {
                        chatRoomBanStatus: null
                    });
                e.writeQuery({
                    query: X,
                    variables: {
                        targetUserID: t.raiderUserID,
                        channelID: t.channelID
                    },
                    data: i
                })
            },
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onUsernameClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-username"),
                            i = e.currentTarget.getAttribute("data-raid-id") || "";
                        n && t.props.onUsernameClick(n, Y.a.recent_raids, i)
                    }, t.onBanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.banUser)(Object(K.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t.onUnbanButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-channel-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-login") || "";
                        (0, t.props.unbanUser)(Object(K.a)({
                            channelID: n,
                            bannedUserLogin: i
                        }))
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(F.U, {
                        key: "recent-raids-layout2-" + this.props.raiderUserID,
                        className: "recent-raids-item",
                        flexDirection: F.J.Row,
                        display: F.H.Flex,
                        fullWidth: !0
                    }, c.createElement(F.U, {
                        flexDirection: F.J.Row,
                        display: F.H.Flex,
                        fullWidth: !0,
                        justifyContent: F.T.Between
                    }, c.createElement(F._21, {
                        bold: !0
                    }, c.createElement("a", {
                        className: "recent-raids-item__name",
                        "data-username": this.props.channelLogin,
                        "data-raid-id": this.props.raidID,
                        onClick: this.onUsernameClick,
                        href: "#"
                    }, this.props.channelLogin)), c.createElement(F.U, {
                        position: F._2.Relative
                    }, c.createElement(F.U, {
                        className: "recent-raids-item__timestamp"
                    }, Object(Q.p)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                }, t.prototype.getCardSlideInContent = function() {
                    if (!this.props.slideInContent) return null;
                    var e = null;
                    return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? c.createElement(F.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: F.x.Small,
                        type: F.z.Text,
                        onClick: this.onUnbanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(O.d)("Unban", "RecentRaid")) : c.createElement(F.u, {
                        key: "recent-raids-ban-button-" + this.props.raiderUserID,
                        size: F.x.Small,
                        type: F.z.Text,
                        onClick: this.onBanButtonClick,
                        "data-a-target": "recent-raid-item-button",
                        "data-raid-id": this.props.raidID,
                        "data-target-user-login": this.props.raiderLogin,
                        "data-target-user-id": this.props.raiderUserID,
                        "data-channel-id": this.props.channelID
                    }, Object(O.d)("Ban", "RecentRaid")), c.createElement(F.U, {
                        key: "recent-raids-layout-" + this.props.raiderUserID,
                        className: "recent-raids-item__hover-content",
                        zIndex: F._38.Above,
                        "data-a-target": "recent-raids-item-hover"
                    }, this.props.slideInContent, e)
                }, t = l.__decorate([Object(U.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                targetUserID: e.raiderUserID,
                                channelID: e.channelID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(U.a)(J, {
                    name: "banUser",
                    options: function(e) {
                        return {
                            update: function(t, n) {
                                ee(t, n, e)
                            }
                        }
                    }
                }), Object(U.a)(Z, {
                    name: "unbanUser",
                    options: function(e) {
                        return {
                            update: function(t) {
                                te(t, e)
                            }
                        }
                    }
                })], t)
            }(c.Component),
            ie = ne,
            ae = n(762),
            re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onReportButtonClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-raid-id") || "",
                            i = e.currentTarget.getAttribute("data-target-user-id") || "",
                            a = e.currentTarget.getAttribute("data-target-user-login") || "";
                        t.props.showReportUserModal({
                            reportContext: {
                                contentType: ae.a.Raid,
                                targetUserID: i,
                                contentID: n,
                                extra: JSON.stringify({
                                    channel_id: i.toString()
                                })
                            },
                            title: Object(O.d)("Report {channelDisplayName}", {
                                channelDisplayName: a
                            }, "ReportUserModal")
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, $.fetchRecentRaidsList(this.props.targetChannelID)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        raidChannels: e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [],
                        t = [],
                        n = {};
                    if (void 0 !== this.state.raidChannels) {
                        0 === this.state.raidChannels.length && e.push(c.createElement(F._21, {
                            key: "recent-raids-no-raids",
                            type: F._26.P
                        }, Object(O.d)("You have no recent raids", "RecentRaids")));
                        for (var i in this.state.raidChannels)
                            if (i.hasOwnProperty) {
                                var a = this.state.raidChannels[i];
                                this.state.raidChannels.hasOwnProperty(i) && void 0 === n[a.userID] && (t.push(c.createElement(ie, {
                                    key: "recent-raids-item-" + a.userID,
                                    slideInContent: [c.createElement(F._17, {
                                        key: "recent-raids-item-report-area-" + a.userID,
                                        color: F.F.Alt2,
                                        display: F.H.InlineFlex
                                    }, c.createElement(F.u, {
                                        key: "recent-raid-report-button",
                                        size: F.x.Small,
                                        type: F.z.Text,
                                        onClick: this.onReportButtonClick,
                                        "data-a-target": "recent-raid-item-button",
                                        "data-raid-id": a.raidID,
                                        "data-target-user-login": a.name,
                                        "data-target-user-id": a.userID
                                    }, Object(O.d)("Report", "RecentRaid")), c.createElement(F._30, {
                                        align: F._31.Right,
                                        width: 150,
                                        label: Object(O.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                                    }))],
                                    timestamp: a.raidAt,
                                    channelLogin: a.name,
                                    raiderUserID: a.userID,
                                    channelID: this.props.targetChannelID,
                                    raiderLogin: a.name,
                                    raidID: a.raidID,
                                    onUsernameClick: this.props.onUsernameClick,
                                    showReportUserModal: this.props.showReportUserModal
                                })), n[a.userID] = !0)
                            }
                    }
                    var r = null;
                    return this.props.recentRaids ? c.createElement(F.U, {
                        key: "recent-raids"
                    }, c.createElement(F.U, {
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(F._21, {
                        color: F.F.Link,
                        type: F._26.Span
                    }, c.createElement(q.a, {
                        to: {
                            pathname: "/broadcast/dashboard/settings/raids"
                        }
                    }, Object(O.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (r = c.createElement(F.U, {
                        key: "recent-raids",
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: F.H.Flex,
                        justifyContent: F.T.Between,
                        alignItems: F.c.Center
                    }, c.createElement("span", {
                        className: "chat-settings__edit-button",
                        onClick: this.props.onClickRecentRaids,
                        "data-test-selector": "recent-raids-button"
                    }, Object(O.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && c.createElement(F.U, {
                        position: F._2.Relative
                    }, c.createElement(F._30, {
                        align: F._31.Right,
                        direction: F._32.Top,
                        display: F.H.InlineFlex,
                        label: this.props.tooltipText,
                        width: 175,
                        show: !0
                    }, c.createElement(F.P, {
                        alignItems: F.c.Center,
                        className: "chat-settings__highlight-indicator",
                        display: F.H.InlineFlex,
                        justifyContent: F.T.Center,
                        margin: {
                            left: .5
                        }
                    }, c.createElement(F._21, {
                        color: F.F.Overlay,
                        fontSize: F.L.Size8,
                        type: F._26.Span
                    }, "i"))))), c.createElement(F.U, null, r))
                }, t
            }(c.Component),
            oe = Object(d.a)(a, r)(re),
            se = n(872),
            le = (n(873), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        recentRaids: !1,
                        chatColor: null,
                        raidsTooltipDismissed: !1
                    }, t.dismissRaidsTooltip = function() {
                        t.setState({
                            raidsTooltipDismissed: !0
                        })
                    }, t.handleFollowerDurationClick = function(e) {
                        var n = e.currentTarget.getAttribute("data-duration");
                        n && t.props.onFollowerDurationChange(parseInt(n, 10))
                    }, t.onClickEdit = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onClickEditAppearance()
                    }, t.onClickRecentRaids = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.setState({
                            recentRaids: !0
                        })
                    }, t.onClickBack = function(e) {
                        e.nativeEvent.stopImmediatePropagation(), t.props.onLeaveEditAppearance(), t.setState({
                            recentRaids: !1
                        })
                    }, t.onColorSelected = function(e) {
                        t.setState({
                            chatColor: e
                        }), t.props.onColorSelected(e)
                    }, t.onBadgesChanged = function() {
                        return l.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return l.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return !this.props.data || this.props.data.loading ? [3, 2] : [4, this.props.data.refetch()];
                                    case 1:
                                        if (e = i.sent(), e.data) {
                                            if (t = e.data, !t.user.self) return [2];
                                            n = {}, t.user.self.displayBadges.forEach(function(e) {
                                                n[e.setID] = e.version
                                            }), O.n.tmi.client.updateChannelBadges(this.props.channelLogin, n)
                                        }
                                        i.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading) return null;
                    var e = null;
                    if (this.props.isLoggedIn && this.props.data.currentUser) {
                        var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                        e = c.createElement(i, {
                            key: "name-display",
                            login: this.props.data.currentUser.login,
                            displayName: this.props.data.currentUser.displayName,
                            chatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                            editAppearance: this.props.editAppearance,
                            userBadges: t,
                            onClickEdit: this.onClickEdit
                        })
                    }
                    var n = [];
                    return this.props.isLoggedIn ? this.props.editAppearance ? n = [c.createElement(F.P, {
                        margin: {
                            bottom: 2
                        },
                        key: "chat-settings-edit-inject"
                    }, c.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__edit-button",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, c.createElement(F._21, {
                        color: F.F.Link,
                        type: F._26.Span
                    }, c.createElement(F._8, {
                        asset: F._9.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(O.d)("Back", "ChatSettingsAppearance")))), e, c.createElement(L, {
                        key: "edit-appearance",
                        onColorSelected: this.onColorSelected,
                        editAppearance: this.props.editAppearance,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                        userLogin: this.props.data.currentUser.login,
                        onBadgesChanged: this.onBadgesChanged
                    })] : this.state.recentRaids ? n = [c.createElement(F.P, {
                        key: "chat-settings-recent-raids"
                    }, c.createElement("div", {
                        key: "chat-settings-edit",
                        className: "chat-settings__recent-raids-button",
                        onClick: this.onClickBack,
                        "data-test-selector": "chat-settings-back-button"
                    }, c.createElement(F._21, {
                        color: F.F.Link,
                        type: F._26.Span
                    }, c.createElement(F._8, {
                        asset: F._9.ChatSettingsBack,
                        height: 10,
                        width: 10
                    }), Object(O.d)("Back", "ChatSettingsRecentRaids")), c.createElement(F.U, {
                        margin: {
                            top: 2
                        }
                    }, c.createElement(F._21, {
                        key: "recent-raids-title",
                        color: F.F.Alt2,
                        transform: F._25.Uppercase
                    }, Object(O.d)("Recent Raids", "ChatSettings"))))), c.createElement(oe, {
                        key: "recent-raids",
                        targetChannelID: this.props.channelID,
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: this.props.onShowViewerCard
                    })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && n.push(this.renderModTools())) : n = [c.createElement(R, {
                        key: "color-chooser",
                        onColorSelected: this.props.onColorSelected
                    }), this.renderUniversalOptions()], c.createElement(D.b, {
                        className: "chat-settings"
                    }, c.createElement("div", {
                        onClick: this.dismissRaidsTooltip
                    }, c.createElement(F._17, {
                        key: "chat-settings",
                        className: "chat-settings__content",
                        background: F.m.Base,
                        color: F.F.Base,
                        padding: 2
                    }, n)))
                }, t.prototype.renderUniversalOptions = function() {
                    if (!this.props.data) return null;
                    var e = this.props.isPopout && c.createElement(F.E, {
                            checked: this.props.darkModeEnabled,
                            "data-a-target": "darkmode-checkbox",
                            "data-test-selector": "dark-mode-checkbox",
                            id: "chat-settings-dark-mode",
                            label: Object(O.d)("Dark Mode", "ChatSettings"),
                            onChange: this.props.onDarkModeToggle
                        }),
                        t = !this.props.isPopout && c.createElement("button", {
                            onClick: this.props.onChatPopout,
                            "data-a-target": "popout-chat-button",
                            "data-test-selector": "popout-button"
                        }, Object(O.d)("Popout", "ChatSettings")),
                        n = !this.props.isPopout && (window.BetterTTV || window.FrankerFaceZ) && c.createElement("button", {
                            onClick: this.props.onLegacyChatPopout,
                            "data-test-selector": "legacy-popout-button"
                        }, Object(O.d)("Legacy Popout", "ChatSettings"));
                    return c.createElement(F.U, {
                        key: "chat-options"
                    }, c.createElement(F._17, {
                        borderTop: !0,
                        margin: {
                            top: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, c.createElement(F._21, {
                        color: F.F.Alt2,
                        transform: F._25.Uppercase
                    }, Object(O.d)("Chat Options", "ChatSettings"))), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(F.E, {
                        checked: this.props.showTimestamps,
                        "data-a-target": "timestamp-checkbox",
                        "data-test-selector": "timestamps-selector",
                        id: "chat-settings-timestamp",
                        label: Object(O.d)("Timestamps", "ChatSettings"),
                        onChange: this.props.onTimestampToggle
                    })), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, e), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement("button", {
                        onClick: this.props.onChatHide,
                        "data-a-target": "hide-chat-button",
                        "data-test-selector": "hide-chat-button"
                    }, Object(O.d)("Hide Chat", "ChatSettings"))), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, t), n && c.createElement(F.U, null, n))
                }, Object.defineProperty(t.prototype, "showRaidsTooltip", {
                    get: function() {
                        return this.props.sawFirstRaidPrompt && !this.state.raidsTooltipDismissed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.renderModTools = function() {
                    return c.createElement(F._17, {
                        key: "mod-tools",
                        borderTop: !0,
                        "data-test-selector": "mod-tools",
                        margin: {
                            top: 2
                        },
                        padding: {
                            top: 2
                        }
                    }, c.createElement(F.U, {
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(F._21, {
                        color: F.F.Alt2,
                        transform: F._25.Uppercase
                    }, Object(O.d)("Mod Tools", "ChatSettings"))), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(F.E, {
                        checked: this.props.showModerationIcons,
                        "data-a-target": "mod-icons-checkbox",
                        "data-test-selector": "mod-icons-checkbox",
                        id: "chat-settings-mod-icons",
                        label: Object(O.d)("Mod Icons", "ChatSettings"),
                        onChange: this.props.onModIconsToggle
                    })), c.createElement(F._17, {
                        margin: {
                            bottom: 1
                        },
                        display: F.H.Flex,
                        justifyContent: F.T.Between
                    }, c.createElement(F.E, {
                        checked: this.props.followerModeEnabled,
                        "data-a-target": "follower-mode-checkbox",
                        "data-test-selector": "follower-mode-checkbox",
                        id: "chat-settings-followers-only",
                        label: Object(O.d)("Followers-Only Chat", "ChatSettings"),
                        onChange: this.props.onFollowerModeToggle
                    }), this.showRaidsTooltip ? c.createElement(H, {
                        text: Object(O.d)("Prevent offensive raiders from chatting.", "RaidReportingChat")
                    }) : null, c.createElement(F.U, {
                        alignItems: F.c.Center,
                        display: F.H.Flex,
                        flexWrap: F.K.NoWrap,
                        justifyContent: F.T.Between
                    }, c.createElement(F.U, {
                        margin: {
                            right: .5
                        }
                    }, c.createElement(F._21, {
                        color: F.F.Alt2,
                        fontSize: F.L.Size7,
                        type: F._26.Span
                    }, Object(O.d)("Must have followed for", "ChatSettings"))), c.createElement(F.U, {
                        className: "chat-settings__mod-tools-follower-button",
                        flexShrink: 0
                    }, c.createElement(I.a, {
                        display: F.H.InlineBlock
                    }, c.createElement(F.u, {
                        size: F.x.Small,
                        type: F.z.Text,
                        "data-a-target": "follower-mode-dropdown",
                        "data-test-selector": "follower-mode-duration-menu",
                        dropdown: !0
                    }, Object(C.d)(this.props.selectedFollowerModeDuration)), c.createElement(F.p, {
                        direction: F.q.TopRight
                    }, c.createElement(F.U, {
                        padding: .5
                    }, c.createElement(F._21, {
                        color: F.F.Alt2
                    }, Object(O.d)("Followers can chat if they have followed for at least", "ChatSettings"))), c.createElement(F._17, {
                        color: F.F.Link
                    }, this.renderFollowerModeOptions())))))), c.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(F.E, {
                        checked: this.props.slowModeEnabled,
                        "data-a-target": "slow-mode-checkbox",
                        "data-test-selector": "slow-mode-checkbox",
                        id: "chat-settings-slow-mode",
                        label: Object(O.d)("Slow Mode", "ChatSettings"),
                        onChange: this.props.onSlowModeToggle
                    })), c.createElement(oe, {
                        key: "recent-raids",
                        recentRaids: this.state.recentRaids,
                        onClickRecentRaids: this.onClickRecentRaids,
                        onUsernameClick: _.d,
                        targetChannelID: this.props.channelID,
                        tooltipText: this.showRaidsTooltip ? Object(O.d)("View recent raids with option to report or ban.", "RaidReportingChat") : ""
                    }), c.createElement("button", {
                        onClick: this.props.onChatClear,
                        "data-a-target": "clear-chat-button",
                        "data-test-selector": "clear-chat-button"
                    }, Object(O.d)("Clear Chat", "ChatSettings")))
                }, t.prototype.renderFollowerModeOptions = function() {
                    var e = this;
                    return C.b.map(function(t) {
                        return c.createElement(F.S, {
                            "data-duration": t,
                            key: t,
                            onClick: e.handleFollowerDurationClick,
                            selected: t === e.props.selectedFollowerModeDuration
                        }, c.createElement(F.U, {
                            padding: .5
                        }, Object(C.c)(t)))
                    })
                }, t = l.__decorate([Object(U.a)(se, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin
                            }
                        }
                    }
                })], t)
            }(c.Component)),
            ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        editAppearance: !1
                    }, t.handleSettingsToggle = function(e) {
                        t.props.onToggle && t.props.onToggle(e), t.state.editAppearance && t.setState({
                            editAppearance: !1
                        })
                    }, t.onEdit = function() {
                        t.setState({
                            editAppearance: !0
                        })
                    }, t.onLeaveEdit = function() {
                        t.setState({
                            editAppearance: !1
                        })
                    }, t.onDarkModeToggle = function() {
                        var e = t.props.darkModeEnabled ? m.a.Light : m.a.Dark;
                        t.props.onThemeChanged(e, !t.props.isPopout), Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.darkModeEnabled,
                            settingName: E.a.DarkMode
                        })
                    }, t.onTimestampToggle = function() {
                        Object(T.b)("showTimestamps", !t.props.showTimestamps), t.props.showTimestamps ? t.props.onTimestampsDisable() : t.props.onTimestampsEnable(), Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showTimestamps,
                            settingName: E.a.ShowTimestamps
                        })
                    }, t.onChatHide = function() {
                        t.props.onChatHide(), Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !0,
                            settingName: E.a.HideChat
                        })
                    }, t.onChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("/popout/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(h.a)() && (e.focus(), Object(g.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onLegacyChatPopout = function() {
                        t.props.onChatHide();
                        var e = window.open("https://www.twitch.tv/" + t.props.channelLogin + "/chat?popout=", "_blank", "right=50,top=50,width=400,height=600,resizable=yes,scrollbars=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no");
                        e && !Object(h.a)() && (e.focus(), Object(g.a)(e, function() {
                            t.props.onChatUnhide()
                        }))
                    }, t.onModIconsToggle = function() {
                        Object(T.b)("showModIcons", !t.props.showModerationIcons), t.props.showModerationIcons ? t.props.onModIconsDisable() : t.props.onModIconsEnable(), Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.showModerationIcons,
                            settingName: E.a.ShowModIcons
                        })
                    }, t.onFollowerModeToggle = function() {
                        if (t.props.followerModeEnabled) t.props.onChatCommand(Object(w.d)()), t.props.onFollowerModeDisable();
                        else {
                            var e = t.getSelectedFollowerDuration();
                            t.props.onChatCommand(Object(w.f)(e)), t.props.onFollowerModeDurationChange(e), t.props.onFollowerModeEnable()
                        }
                        Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.followerModeEnabled,
                            settingName: E.a.FollowerMode
                        })
                    }, t.onFollowerDurationChange = function(e) {
                        Object(T.c)(t.props.channelLogin, e), t.props.onFollowerModeDurationPreferenceChange(t.props.channelLogin, e), t.props.followerModeEnabled && (t.props.onChatCommand(Object(w.f)(e)), t.props.onFollowerModeDurationChange(e)), Object(N.c)({
                            channelLogin: t.props.channelLogin,
                            followerModeOn: t.props.followerModeEnabled,
                            isHostMode: t.props.isHostMode,
                            newValue: e
                        })
                    }, t.onSlowModeToggle = function() {
                        t.props.slowModeEnabled ? (t.props.onChatCommand(Object(w.e)()), t.props.onSlowModeDisable()) : (t.props.onChatCommand(Object(w.g)()), t.props.onSlowModeEnable()), Object(N.a)({
                            channelLogin: t.props.channelLogin,
                            isHostMode: t.props.isHostMode,
                            newValue: !t.props.slowModeEnabled,
                            settingName: E.a.SlowMode
                        })
                    }, t.onChatClear = function() {
                        t.props.onChatCommand(Object(w.c)())
                    }, t.getSelectedFollowerDuration = function() {
                        if (t.props.followerModeEnabled) return t.props.followerModeDuration;
                        var e = t.props.lastUsedFollowerDurations[t.props.channelLogin];
                        return "number" == typeof e ? e : C.a
                    }, t.onColorSelected = function(e) {
                        if (!t.props.isLoggedIn) return void t.props.login();
                        t.props.onChatCommand(Object(w.b)(e))
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(pe, {
                        disabled: this.props.disabled,
                        onToggle: this.handleSettingsToggle
                    }, c.createElement(le, {
                        darkModeEnabled: this.props.darkModeEnabled,
                        followerModeEnabled: this.props.followerModeEnabled,
                        editAppearance: this.state.editAppearance,
                        isCurrentUserModerator: this.props.isCurrentUserModerator,
                        isPopout: this.props.isPopout,
                        onChatClear: this.onChatClear,
                        onChatHide: this.onChatHide,
                        onChatPopout: this.onChatPopout,
                        onDarkModeToggle: this.onDarkModeToggle,
                        onFollowerDurationChange: this.onFollowerDurationChange,
                        onFollowerModeToggle: this.onFollowerModeToggle,
                        onLegacyChatPopout: this.onLegacyChatPopout,
                        onModIconsToggle: this.onModIconsToggle,
                        onSlowModeToggle: this.onSlowModeToggle,
                        onTimestampToggle: this.onTimestampToggle,
                        selectedFollowerModeDuration: this.getSelectedFollowerDuration(),
                        showModerationIcons: this.props.showModerationIcons,
                        showTimestamps: this.props.showTimestamps,
                        slowModeEnabled: this.props.slowModeEnabled,
                        theatreModeEnabled: this.props.theatreModeEnabled,
                        onColorSelected: this.onColorSelected,
                        authToken: this.props.authToken,
                        channelLogin: this.props.channelLogin,
                        channelID: this.props.channelID,
                        isLoggedIn: this.props.isLoggedIn,
                        onClickEditAppearance: this.onEdit,
                        onLeaveEditAppearance: this.onLeaveEdit,
                        sawFirstRaidPrompt: this.props.sawFirstRaidPrompt,
                        onShowViewerCard: this.props.onShowViewerCard
                    }))
                }, t
            }(c.Component),
            de = Object(d.a)(o, s)(ce),
            ue = Object(u.e)(de),
            pe = function(e) {
                return c.createElement(I.a, {
                    onToggle: e.onToggle
                }, c.createElement(F.v, {
                    icon: F._9.Gear,
                    ariaLabel: Object(O.d)("Chat settings", "ChatInput"),
                    "data-a-target": "chat-settings",
                    disabled: !!e.disabled
                }), c.createElement(F.p, {
                    direction: F.q.Top,
                    noTail: !0,
                    offsetY: "11px",
                    "data-a-target": "chat-settings-balloon"
                }, e.children))
            };
        n.d(t, "a", function() {
            return ue
        }), n.d(t, "b", function() {
            return pe
        })
    },
    865: function(e, t) {},
    866: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatSettings_Badges"
                },
                variableDefinitions: [{
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
                                    value: "selectedBadge"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "availableBadges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "channelLogin"
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
                                            value: "selectedBadge"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "availableBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
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
            }],
            loc: {
                start: 0,
                end: 382
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n\nquery ChatSettings_Badges($channelLogin: String!) {\n  currentUser {\n    id\n    selectedBadge {\n      ...badge\n    }\n    availableBadges {\n      ...badge\n    }\n  }\n  user(login: $channelLogin) {\n    id\n    self {\n      selectedBadge {\n        ...badge\n      }\n      availableBadges {\n        ...badge\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(782).definitions)), e.exports = i
    },
    867: function(e, t) {},
    868: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions_BanUser"
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
                                value: "BanUserFromChatRoomInput"
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
                            value: "banUserFromChatRoom"
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
                                    value: "ban"
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
                                            value: "isPermanent"
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
                end: 155
            }
        };
        n.loc.source = {
            body: "mutation RecentRaidsModActions_BanUser($input: BanUserFromChatRoomInput!) {\n  banUserFromChatRoom(input: $input) {\n    ban {\n      isPermanent\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    869: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "targetUserID"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelID"
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
                            value: "chatRoomBanStatus"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "channelID"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "targetUserID"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userID"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
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
                                    value: "isPermanent"
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
                end: 203
            }
        };
        n.loc.source = {
            body: "query RecentRaidsModActions($targetUserID: ID!, $channelID: ID!) {\n  # This is currently backwards on the server\n  chatRoomBanStatus(channelID: $targetUserID, userID: $channelID) {\n    isPermanent\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    870: function(e, t) {},
    871: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "RecentRaidsModActions_UnbanUser"
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
                                value: "UnbanUserFromChatRoomInput"
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
                            value: "unbanUserFromChatRoom"
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
                                    value: "ban"
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
                                            value: "isPermanent"
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
                end: 161
            }
        };
        n.loc.source = {
            body: "mutation RecentRaidsModActions_UnbanUser($input: UnbanUserFromChatRoomInput!) {\n  unbanUserFromChatRoom(input: $input) {\n    ban {\n      isPermanent\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    872: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatSettings_CurrentUser"
                },
                variableDefinitions: [{
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
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "chatColor"
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
                                            value: "displayBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
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
            }],
            loc: {
                start: 0,
                end: 294
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n\nquery ChatSettings_CurrentUser($channelLogin: String!) {\n  currentUser {\n    id\n    login\n    displayName\n    chatColor\n  }\n  user(login: $channelLogin) {\n    id\n    self {\n      displayBadges {\n        ...badge\n      }\n    }\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n(782).definitions)), e.exports = i
    },
    873: function(e, t) {},
    874: function(e, t) {},
    880: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(E.d)(e)
            }
        }

        function a(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }

        function r(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }

        function o(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(b.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + b.a.authClientID + "&api_version=" + b.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: Z[n].id
                })
            })
        }

        function s(e, t, n) {
            return m.__awaiter(this, void 0, void 0, function() {
                var i;
                return m.__generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, fetch(b.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + b.a.authClientID + "&api_version=" + b.a.defaultAPIVersion + "&image_type=" + n, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return i = a.sent(), [2, i.json()]
                    }
                })
            })
        }

        function l(e) {
            switch (e) {
                case J.Success:
                    return {
                        message: Object(b.d)("Success!", "Profile Edit"),
                        type: P._0.Success
                    };
                case J.UnexpectedError:
                    return {
                        message: Object(b.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: P._0.Alert
                    };
                case J.BadSizeError:
                    return {
                        message: Object(b.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: P._0.Alert
                    };
                case J.NonImageError:
                    return {
                        message: Object(b.d)("You must upload an image.", "Profile Edit"),
                        type: P._0.Alert
                    };
                case J.WrongFormatError:
                    return {
                        message: Object(b.d)("You must select a valid image type.", "Profile Edit"),
                        type: P._0.Alert
                    };
                case J.TimeoutError:
                    return {
                        message: Object(b.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: P._0.Alert
                    };
                case J.Uploading:
                    return {
                        message: Object(b.d)("Uploading....", "Profile Edit"),
                        type: P._0.Brand
                    };
                case J.ImageNotSelected:
                    return {
                        message: Object(b.d)("Select a image first.", "Profile Edit"),
                        type: P._0.Alert
                    };
                default:
                    return {
                        message: Object(b.d)("Please try again.", "Profile Edit"),
                        type: P._0.Alert
                    }
            }
        }

        function c(e) {
            return {
                authToken: Object(E.a)(e)
            }
        }

        function d(e, t) {
            return Object(G.bindActionCreators)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(q.c)()
                }
            }, e)
        }

        function u(e) {
            return Object(G.bindActionCreators)({
                showModal: q.d
            }, e)
        }
        var p, m = n(0),
            h = n(4),
            g = n(1),
            f = n(11),
            b = n(2),
            v = n(254),
            y = n(363),
            k = n(60),
            S = n(7),
            _ = n(126),
            C = n(8),
            E = n(18),
            w = n(84),
            T = n(786),
            N = n(785),
            O = n(817),
            D = n(823),
            I = n(768),
            U = n(758),
            P = n(3),
            x = (n(887), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(I.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: U.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = g.createElement(P.U, null, g.createElement(P.U, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: P._22.Center
                    }, g.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, Object(b.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), g.createElement(P.U, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, g.createElement(P._21, {
                        type: P._26.Span,
                        color: P.F.Alt
                    }, Object(b.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), g.createElement(P.P, {
                        margin: {
                            left: .5
                        }
                    }, g.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(b.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), g.createElement(P.U, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: P._22.Center
                    }, g.createElement(P.P, {
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(P._21, {
                        type: P._26.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(b.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), g.createElement(P.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(b.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? g.createElement(P.U, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, g.createElement(P.U, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, g.createElement(P.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: P.z.Text
                    }, g.createElement(P._8, {
                        asset: P._9.Play,
                        height: 8
                    }), " ", Object(b.d)("Back", "Bits--FirstTimeUserPrompt"))), g.createElement(P.U, {
                        textAlign: P._22.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, g.createElement(P.e, {
                        type: P.i.SlideInLeft,
                        duration: P.g.Long,
                        enabled: !0
                    }, g.createElement(D.a, null)))) : this.props.animateFirstTimeUserIntro ? g.createElement(P.P, {
                        className: "bits-first-time-user-prompt"
                    }, g.createElement(P.e, {
                        type: P.i.SlideInRight,
                        duration: P.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : g.createElement(P.U, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(g.Component)),
            F = x,
            R = n(767),
            A = n(802),
            M = n(5),
            L = n(888),
            j = (n(889), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: U.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(U.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(T.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return g.createElement(P._17, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: P.H.Flex,
                        flexDirection: P.J.Column,
                        alignItems: P.c.Center,
                        justifyContent: P.T.Center,
                        textAlign: P._22.Center,
                        padding: {
                            y: 5
                        }
                    }, g.createElement(P.X, {
                        delay: 0
                    }), g.createElement(P.U, {
                        padding: {
                            top: 2
                        }
                    }, g.createElement(P._21, {
                        italic: !0
                    }, Object(b.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(I.c)(e)
                        });
                        t && t.type === R.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = g.createElement(F, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var n = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = g.createElement(P._17, {
                        borderBottom: !0,
                        textAlign: P._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, g.createElement(P._21, {
                        type: P._26.Span
                    }, Object(b.d)("You have {bitsBalance}", {
                        bitsBalance: g.createElement(N.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = g.createElement(P._17, {
                        borderBottom: !0,
                        textAlign: P._22.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, g.createElement(P._21, {
                        type: P._26.Span
                    }, Object(b.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: g.createElement(N.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = g.createElement(O.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: U.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), g.createElement(w.b, {
                        className: "get-bits-button-content"
                    }, g.createElement(P.U, null, n, e, i))
                }, t = m.__decorate([Object(M.c)("GetBitsButtonContent"), Object(S.a)(L, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(A.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(g.Component)),
            B = j,
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(U.h)({
                            actionName: U.a.BuyMain,
                            location: U.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = g.createElement(B, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), g.createElement(k.a, {
                        onToggle: this.toggleBalloon
                    }, g.createElement(P.u, {
                        dropdown: !0
                    }, Object(b.d)("Get Bits", "Bits--GetBitsButton")), g.createElement(P.p, {
                        direction: P.q.BottomRight,
                        size: P.r.Large
                    }, e))
                }, t = m.__decorate([Object(M.c)("GetBitsButton")], t)
            }(g.Component),
            H = V,
            W = Object(C.a)(i)(H),
            G = n(10),
            q = n(49),
            z = n(803),
            $ = n(123),
            K = n(35),
            Q = (n(890), function(e) {
                var t = function() {
                        e.onSelect(e.index)
                    },
                    n = {
                        "default-avatar__selected": e.selected,
                        "default-avatar": !0
                    };
                return g.createElement(P.U, {
                    padding: {
                        bottom: 1
                    }
                }, g.createElement("div", {
                    onClick: t,
                    "aria-label": Object(b.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, g.createElement(P._17, {
                    border: !0,
                    fullHeight: !0,
                    fullWidth: !0,
                    position: P._2.Relative,
                    className: h(n)
                }, g.createElement("img", {
                    alt: Object(b.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            });
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(p || (p = {}));
        var Y;
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(Y || (Y = {}));
        var J;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(J || (J = {}));
        var X = (n(891), n(892)),
            Z = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            ee = ["image/*"],
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1
                    }, t.currentImage = null, t.logger = b.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null === e) return void t.setState({
                            statusMessage: J.ImageNotSelected
                        });
                        n = e[0];
                        var i = (n.size / 1024 / 1024).toFixed(4);
                        if (parseInt(i, 10) > 10) return void t.setState({
                            statusMessage: J.BadSizeError
                        });
                        t.setState({
                            selectedImageIndex: void 0,
                            imagePreviewURL: "",
                            currentImageHasTallAspectRatio: !1
                        }), a(n, function(e) {
                            t.currentImage = e, t.setState({
                                statusMessage: null
                            })
                        }, function(e) {
                            var n = new Image,
                                i = !1;
                            n.onload = function() {
                                n.width < n.height && (i = !0), t.setState({
                                    currentImageHasTallAspectRatio: i
                                })
                            }, n.src = e, t.setState({
                                imagePreviewURL: e
                            })
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, o = this;
                            return m.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: J.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: J.Uploading
                                        }), l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, s(this.props.userID, this.props.authToken, p.ProfileImage)];
                                    case 2:
                                        return t = l.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return a = l.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: J.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = b.j.subscribe({
                                            topic: Object(K.c)(this.props.userID),
                                            success: function() {
                                                try {
                                                    r(n, o.currentImage)
                                                } catch (e) {
                                                    o.logger.error(e, "Profile Image upload failed."), o.unsubscribe(), o.setState({
                                                        statusMessage: J.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                o.timeoutHandle = setTimeout(function() {
                                                    return o.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                o.setState({
                                                    statusMessage: J.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(o.timeoutHandle);
                                                    var t = null,
                                                        n = o.state.imagePreviewURL;
                                                    e.status === Y.Success ? t = J.Success : e.status === Y.BadSize ? (t = J.BadSizeError, n = "", o.currentImage = null) : e.status === Y.NonImage ? (t = J.NonImageError, n = "", o.currentImage = null) : e.status === Y.WrongFormat ? (t = J.WrongFormatError, n = "", o.currentImage = null) : (t = J.UnexpectedError, n = "", o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                        statusMessage: t,
                                                        imagePreviewURL: n
                                                    }), o.state.statusMessage === J.Success && o.setState({
                                                        profileUpdated: !0
                                                    })
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Z[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: J.TimeoutError
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = Z.map(function(t, n) {
                            return g.createElement(Q, {
                                key: t.id,
                                imageSrc: t.uri,
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = "" !== this.state.imagePreviewURL,
                        i = null;
                    if (n) {
                        var a = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        i = g.createElement(P.U, {
                            className: h(a),
                            "data-test-selector": "preview-image",
                            position: P._2.Relative
                        }, g.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = "" === this.state.imagePreviewURL,
                        o = null;
                    r && (o = g.createElement(P.U, {
                        className: "profile-edit__upload-info"
                    }, g.createElement(P.U, null, g.createElement(P._8, {
                        asset: P._9.Plus,
                        type: P._10.Alt2,
                        height: 20,
                        width: 20
                    })), g.createElement(P._21, {
                        type: P._26.H3,
                        color: P.F.Alt2,
                        fontSize: P.L.Size4
                    }, Object(b.d)("Upload a Photo", "Profile Edit"))));
                    var s = null;
                    this.props.showCloser && (s = g.createElement($.a, null));
                    var c = null;
                    if (null !== this.state.statusMessage) {
                        var d = l(this.state.statusMessage),
                            u = d.message,
                            p = d.type;
                        c = g.createElement(P.Z, {
                            label: u,
                            type: p
                        })
                    }
                    var m = this.props.login;
                    return this.props.displayName && (m = this.props.displayName), g.createElement(P.U, {
                        className: "profile-edit",
                        position: P._2.Relative,
                        fullHeight: !0
                    }, g.createElement(P._17, {
                        className: "profile-edit__background-container",
                        background: P.m.Base,
                        fullWidth: !0
                    }, g.createElement(P.U, {
                        padding: 2,
                        display: P.H.InlineBlock,
                        position: P._2.Relative,
                        textAlign: P._22.Center,
                        fullWidth: !0
                    }, g.createElement(P._17, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(P._21, {
                        type: P._26.H3,
                        fontSize: P.L.Size4
                    }, Object(b.d)("Editing profile picture for {userName}", {
                        userName: m
                    }, "Profile Edit"), " ")), g.createElement(P.U, {
                        className: "profile-edit__upload-container",
                        display: P.H.InlineBlock,
                        position: P._2.Relative,
                        textAlign: P._22.Center,
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(P.U, {
                        className: "profile-edit__upload",
                        display: P.H.InlineBlock,
                        position: P._2.Relative,
                        textAlign: P._22.Center
                    }, g.createElement(z.a, {
                        allowedFileTypes: ee,
                        onFilesSubmitted: this.onImageInputChange
                    }, o), i)), g.createElement(P._17, {
                        "data-test-selector": "status-message",
                        fontSize: P.L.Size4,
                        position: P._2.Relative,
                        textAlign: P._22.Center,
                        className: "profile-edit__status-message"
                    }, c), g.createElement(P._17, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(P.U, {
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(P._21, {
                        type: P._26.H3,
                        fontSize: P.L.Size5
                    }, Object(b.d)("Or select one of these", "Profile Edit"))), g.createElement(P._33, {
                        childWidth: P._34.ExtraSmall,
                        gutterSize: P._35.ExtraSmall,
                        placeholderItems: 3
                    }, t)), g.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Center
                    }, g.createElement(P.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick
                    }, Object(b.d)("Update", "Profile Edit"))))), s)
                }, t.prototype.setDefaultAvatar = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return m.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: J.Uploading
                                    }), e = J.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, o(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return t = i.sent(), 204 === t.status || 200 === t.status ? e = J.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === J.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = m.__decorate([Object(S.a)(X, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(g.Component),
            ne = Object(M.c)("Profile Edit")(te),
            ie = Object(C.a)(c, d)(ne),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        t.props.showModal(ie, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return g.createElement(P.U, null, g.createElement("div", {
                        onClick: this.openModal
                    }, g.createElement(P._8, {
                        asset: P._9.Edit,
                        height: 36,
                        width: 36,
                        fill: !0,
                        type: P._10.Brand
                    })))
                }, t = m.__decorate([Object(M.c)("EditProfileOverlay")], t)
            }(g.Component),
            re = ae,
            oe = Object(C.a)(null, u)(re),
            se = n(774),
            le = (n(893), n(894));
        n.d(t, "b", function() {
            return ce
        }), n.d(t, "a", function() {
            return me
        });
        var ce, de = "channel-header__verified-badge",
            ue = "channel-header__live-indicator";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(ce || (ce = {}));
        var pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        live: !1
                    }, t.verifiedBadgeElement = g.createElement(P._30, {
                        label: Object(b.d)("Verified", "ChannelHeader"),
                        direction: P._32.Right
                    }, g.createElement(P.U, {
                        className: "channel-header__verified",
                        "data-target": de,
                        display: P.H.Flex,
                        alignItems: P.c.Center,
                        margin: {
                            left: 1
                        }
                    }, g.createElement(P._8, {
                        asset: P._9.Verified
                    }))), t.liveIndicatorElement = g.createElement(P.U, {
                        margin: {
                            left: 1
                        },
                        "data-target": ue
                    }, g.createElement(P._30, {
                        label: Object(b.d)("Live Now", "ChannelHeader"),
                        direction: P._32.Right
                    }, g.createElement(P.V, {
                        pulse: !0
                    }))), t.renderAvatarEditButton = function() {
                        return t.props.data && t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? g.createElement(P.U, {
                            className: "channel-header__edit-profile-overlay",
                            position: P._2.Absolute
                        }, g.createElement(oe, {
                            userID: t.props.data.user.id,
                            login: t.props.data.user.login,
                            displayName: t.props.data.user.displayName
                        })) : null
                    }, t.onUpdateDebounce = function() {
                        if (!t.resizeAnimationFrame && t.channelHeader) {
                            var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                            t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                        }
                    }, t.handleWindowResize = function() {
                        t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                    }, t.saveChannelHeaderRef = function(e) {
                        return t.channelHeader = e
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.updateLiveState(this.props)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateLiveState(e)
                }, t.prototype.componentDidUpdate = function() {
                    this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce)
                }, t.prototype.updateWidth = function(e) {
                    var t = e !== this.width || this.width !== this.prevWidth;
                    void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
                }, t.prototype.render = function() {
                    var e, t, n = 0,
                        i = 0,
                        a = 0,
                        r = b.a.defaultAvatarURL;
                    this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, a = this.props.data.user.follows.totalCount, r = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                    var o = this.state.live && ce[this.props.currentPage] !== ce[ce.Channel],
                        s = this.createChannelLinks(n, i, a),
                        l = {
                            "channel-header__user": !0,
                            "channel-header__user--selected": ce[this.props.currentPage] === ce[ce.Channel]
                        },
                        c = null;
                    this.canRenderBitsButton() && (c = g.createElement(P.U, {
                        margin: {
                            left: 1
                        }
                    }, g.createElement(W, {
                        channelLogin: this.props.channelLogin
                    })));
                    var d, u = g.createElement(P.U, {
                        display: P.H.Flex,
                        flexWrap: P.K.NoWrap,
                        alignItems: P.c.Center,
                        flexShrink: 0
                    }, g.createElement(P.U, {
                        className: "channel-header__user-avatar channel-header__user-avatar--active",
                        margin: {
                            right: 1
                        },
                        display: P.H.Flex,
                        flexShrink: 0,
                        alignItems: P.c.Stretch
                    }, g.createElement(P.l, {
                        size: 36,
                        imageSrc: r,
                        imageAlt: e || ""
                    }), this.renderAvatarEditButton()), e ? g.createElement(P._21, {
                        type: P._26.H5
                    }, e) : g.createElement(P.U, {
                        alignItems: P.c.Center
                    }, g.createElement(P._1, {
                        lineCount: 1,
                        width: 120
                    })), o && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                    return d = this.props.data && this.props.data.user && this.props.data.user.login ? g.createElement(f.a, {
                        to: "/" + this.props.data.user.login,
                        "data-target": "channel-header__channel-link",
                        "data-a-target": "user-channel-header-item"
                    }, u) : u, g.createElement(P.U, {
                        className: "channel-header",
                        flexShrink: 0,
                        padding: {
                            x: 3
                        }
                    }, g.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Between,
                        flexWrap: P.K.NoWrap,
                        fullHeight: !0,
                        refDelegate: this.saveChannelHeaderRef
                    }, g.createElement(P.U, {
                        display: P.H.Flex,
                        alignItems: P.c.Stretch,
                        flexShrink: 0,
                        flexWrap: P.K.NoWrap,
                        "data-target": "channel-header-left"
                    }, g.createElement(P.P, {
                        className: h(l),
                        padding: {
                            y: .5,
                            right: 2
                        },
                        display: P.H.Flex,
                        flexWrap: P.K.NoWrap,
                        alignItems: P.c.Center,
                        flexShrink: 0
                    }, d), this.renderTabs(s), g.createElement(P.U, {
                        className: "channel-header__item channel-header__item--no-underline",
                        padding: {
                            x: 1
                        },
                        display: P.H.Flex,
                        flexShrink: 0,
                        alignSelf: P.d.Center,
                        "data-target": "channel-header-button"
                    }, g.createElement(k.a, {
                        alwaysMountBalloonContent: !0
                    }, g.createElement(P.v, {
                        icon: P._9.NavMore,
                        ariaLabel: Object(b.d)("More", "ChannelHeader")
                    }), g.createElement(P.p, {
                        direction: P.q.Bottom,
                        noTail: !0
                    }, g.createElement(P.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderDropdown(s)))))), g.createElement(P.U, {
                        display: P.H.Flex,
                        flexWrap: P.K.NoWrap,
                        flexShrink: 0,
                        alignItems: P.c.Center,
                        className: "channel-header__right",
                        "data-target": "channel-header-right"
                    }, g.createElement(P.U, {
                        className: "channel-header__follow-button",
                        display: P.H.Flex,
                        alignItems: P.c.Stretch,
                        margin: {
                            left: 1
                        }
                    }, g.createElement(v.a, {
                        updateContainerWidth: this.onUpdateDebounce,
                        isHostedFollow: !1,
                        channelLogin: this.props.channelLogin
                    })), g.createElement(P.U, {
                        margin: {
                            left: 1
                        }
                    }, g.createElement(se.b, {
                        updateContainerWidth: this.onUpdateDebounce,
                        channelLogin: this.props.channelLogin
                    })), c)), g.createElement(y.a, {
                        onResize: this.onUpdateDebounce
                    }))
                }, t.prototype.updateLiveState = function(e) {
                    !e.data || e.data.loading || e.data.error || this.setState({
                        live: !!e.data.user.stream && "" !== e.data.user.stream.id
                    })
                }, t.prototype.generateUserLink = function(e, t) {
                    void 0 === e && (e = ""), void 0 === t && (t = !1);
                    var n = this.props.data && this.props.data.user && this.props.data.user.login;
                    if (!n) return "#";
                    var i = "/" + n + "/" + e;
                    return t ? Object(_.a)(i) : i
                }, t.prototype.renderTabs = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? g.createElement(P.U, {
                                className: "channel-header__item-count",
                                display: P.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, g.createElement(P._21, {
                                type: P._26.Span,
                                fontSize: P.L.Size5
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.target = Object(_.b)() ? "_blank" : ""), g.createElement(P.P, {
                            key: "channel-header__item--" + e.label,
                            display: P.H.Flex,
                            alignItems: P.c.Center,
                            flexShrink: 0
                        }, g.createElement(f.a, m.__assign({
                            className: "channel-header__item hide " + (e.isSelected ? "channel-header__item--selected" : "")
                        }, a, {
                            to: i,
                            disabled: "#" === i,
                            "data-target": "channel-header-item",
                            "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                        }), g.createElement(P.U, {
                            padding: {
                                x: 2,
                                y: .5
                            },
                            display: P.H.Flex
                        }, g.createElement(P._21, {
                            type: P._26.Span,
                            fontSize: P.L.Size5
                        }, e.label), n)))
                    })
                }, t.prototype.renderDropdown = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        var n = e.count ? g.createElement(P.U, {
                                className: "channel-header__item-count",
                                display: P.H.Flex,
                                margin: {
                                    left: .5
                                }
                            }, g.createElement(P._21, {
                                type: P._26.Span
                            }, e.count)) : null,
                            i = t.generateUserLink(e.pathSuffix, e.isExternal),
                            a = {};
                        return e.isExternal && (a.targetBlank = !0), g.createElement(P.U, {
                            key: "channel-header__dropdown-item--" + e.label,
                            "data-target": "channel-header-dropdown-item"
                        }, g.createElement(P.S, m.__assign({
                            linkTo: i,
                            disabled: "#" === i
                        }, a), g.createElement(P.U, {
                            className: "channel-header__dropdown-hover-target",
                            padding: {
                                y: .5,
                                x: 1
                            },
                            display: P.H.Flex
                        }, g.createElement(P._21, {
                            type: P._26.Span
                        }, e.label), n)))
                    })
                }, t.prototype.createChannelLinks = function(e, t, n) {
                    return [{
                        label: Object(b.d)("Videos", "ChannelHeader"),
                        count: Object(b.e)(e),
                        pathSuffix: "videos/all",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Videos]
                    }, {
                        label: Object(b.d)("Clips", "ChannelHeader"),
                        pathSuffix: "clips",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Clips]
                    }, {
                        label: Object(b.d)("Collections", "ChannelHeader"),
                        pathSuffix: "collections",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Collections]
                    }, {
                        label: Object(b.d)("Events", "ChannelHeader"),
                        pathSuffix: "events",
                        isExternal: !1,
                        isSelected: ce[this.props.currentPage] === ce[ce.Events]
                    }, {
                        label: Object(b.d)("Followers", "ChannelHeader"),
                        count: Object(b.e)(t),
                        pathSuffix: "followers",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Followers]
                    }, {
                        label: Object(b.d)("Following", "ChannelHeader"),
                        count: Object(b.e)(n),
                        pathSuffix: "following",
                        isExternal: !0,
                        isSelected: ce[this.props.currentPage] === ce[ce.Following]
                    }]
                }, t.prototype.getChannelHeaderSize = function() {
                    if (this.channelHeader) {
                        var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                            t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                            n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                            i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                        if (n.length) {
                            var a = this.getWidth(this.channelHeader).width,
                                r = this.getWidth(e).width,
                                o = this.getWidth(t).width,
                                s = r + o + 20 - a;
                            if (s > 0)
                                for (var l = n.length - 1; l >= 0; l--) {
                                    var c = n[l];
                                    if (!c.classList.contains("hide")) {
                                        var d = this.getWidth(c);
                                        if (c.classList.add("hide"), i[l].classList.remove("hide"), (s -= d.width) <= 0) break
                                    }
                                } else
                                    for (var l = 0; l < n.length; l++) {
                                        var c = n[l];
                                        if (c.classList.contains("hide")) {
                                            c.classList.remove("hide");
                                            var d = this.getWidth(c);
                                            if (d.width >= Math.abs(s)) {
                                                c.classList.add("hide");
                                                break
                                            }
                                            c.classList.remove("hide"), i[l].classList.add("hide"), s += d.width
                                        }
                                    }
                            var u = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                            if (u) {
                                var p = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].hide').length;
                                u.classList.toggle("hide", p)
                            }
                        }
                    }
                }, t.prototype.canRenderBitsButton = function() {
                    return this.props.data && !this.props.data.loading && this.props.currentPage !== ce.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
                }, t.prototype.getWidth = function(e) {
                    return e ? {
                        width: e.clientWidth
                    } : {
                        width: 0
                    }
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(S.a)(le, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(M.c)("ChannelHeader")], t)
            }(g.Component),
            me = pe
    },
    883: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PreviewCardVideo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
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
                            value: "animatedPreviewURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "broadcastType"
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
                            value: "lengthSeconds"
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
                            value: "previewThumbnailURL"
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
                            value: "publishedAt"
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
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 289
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\n  animatedPreviewURL\n  broadcastType\n  game {\n    boxArtURL(width: 40 height: 55)\n    id\n    name\n  }\n  id\n  lengthSeconds\n  owner {\n    displayName\n    id\n    login\n  }\n  previewThumbnailURL(width: 320 height: 180)\n  publishedAt\n  title\n  viewCount\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    886: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(N.d)(e)
            }
        }

        function a(e) {
            return Object(C.bindActionCreators)({
                login: function() {
                    return Object(T.f)(E.a.ReportHoster)
                },
                showReportUserModal: function(e) {
                    var t = d.__rest(e, []);
                    return Object(w.d)(O.a, t)
                }
            }, e)
        }

        function r() {
            return !!window.Twitch && !!window.Twitch.Player
        }

        function o(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                isLoggedIn: Object(N.d)(e),
                authToken: Object(N.a)(e)
            }
        }

        function s(e) {
            return Object(C.bindActionCreators)({
                enableTheatreMode: I.k,
                disableTheatreMode: I.j
            }, e)
        }

        function l(e, t, n) {
            if (!e.collectionID && e.videoID) return void t.push("/videos/" + e.videoID);
            if (e.collectionID && e.videoID) {
                if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                return void t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
            }
            if (e.collectionID && !e.videoID) return void t.push("/collections/" + e.collectionID);
            m.i.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.")
        }
        var c, d = n(0),
            u = n(1),
            p = n(11),
            m = n(2),
            h = n(254),
            g = n(60),
            f = n(13),
            b = n(765),
            v = n(762),
            y = n(774),
            k = n(3),
            S = (n(986), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: v.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(m.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === b.b.MutationError || e === b.b.Success) && t.props.history.push("/")
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName;
                    return u.createElement(k._17, {
                        className: "video-player-hosting-ui__container"
                    }, e && this.renderHeader(), u.createElement("span", {
                        key: "video-player"
                    }, this.props.children), u.createElement(k.U, {
                        display: e ? k.H.Block : k.H.Hide,
                        position: k._2.Relative,
                        zIndex: k._38.Above
                    }, e && this.renderFooter()))
                }, t.prototype.renderHeader = function() {
                    return u.createElement(k.e, {
                        type: k.i.SlideInBottom,
                        delay: k.f.Medium,
                        duration: k.g.Medium,
                        enabled: !0
                    }, u.createElement(p.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: f.PageviewMedium.Channel,
                                content: f.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, u.createElement(k._17, {
                        className: "video-player-hosting-ui__header",
                        display: k.H.Flex,
                        background: k.m.AccentAlt2,
                        color: k.F.Overlay,
                        alignItems: k.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        "data-a-target": "hosting-ui-header"
                    }, u.createElement(k.U, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, u.createElement(k.l, {
                        imageSrc: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        imageAlt: Object(m.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), u.createElement(k._17, {
                        margin: {
                            left: 1
                        },
                        fontSize: k.L.Size5
                    }, Object(m.d)("Hosting", "VideoPlayerHostingUI"), " ", u.createElement(k._21, {
                        type: k._26.Span,
                        className: "video-player-hosting-ui__channel-name",
                        color: k.F.OverlayAlt,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))))
                }, t.prototype.renderFooter = function() {
                    return u.createElement(k.e, {
                        type: k.i.SlideInTop,
                        enabled: !0,
                        delay: k.f.Medium,
                        duration: k.g.Medium
                    }, u.createElement(k._17, {
                        key: "hosting-ui-footer",
                        background: k.m.AccentAlt2,
                        className: "video-player-hosting-ui__footer",
                        display: k.H.Block,
                        padding: 1,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, u.createElement(k.U, {
                        padding: {
                            y: .5
                        },
                        display: k.H.Flex,
                        justifyContent: k.T.Between
                    }, u.createElement(k.U, {
                        display: k.H.Flex
                    }, u.createElement(k.U, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(h.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: k.q.BottomLeft
                    })), u.createElement(k.U, null, u.createElement(y.b, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), u.createElement(g.a, null, u.createElement(k.v, {
                        ariaLabel: Object(m.d)("More options", "HostingUI"),
                        overlay: !0,
                        icon: k._9.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), u.createElement(k.p, {
                        direction: k.q.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, u.createElement(k.U, {
                        padding: {
                            y: 1
                        }
                    }, u.createElement(k.S, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, u.createElement(k.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(m.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))))
                }, t
            }(u.Component)),
            _ = n(8),
            C = n(10),
            E = n(50),
            w = n(49),
            T = n(34),
            N = n(18),
            O = n(772),
            D = Object(_.a)(i, a)(Object(p.f)(S)),
            I = n(65),
            U = n(4),
            P = n(373),
            x = n(372),
            F = n(20),
            R = n(830),
            A = n(5);
        ! function(e) {
            e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
        }(c || (c = {}));
        var M;
        ! function(e) {
            e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange"
        }(M || (M = {}));
        var L, j = (n(987), n(806));
        ! function(e) {
            e.Embed = "embed", e.Frontpage = "frontpage", e.Site = "site"
        }(L || (L = {}));
        var B = {
                allowfullscreen: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: L.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            },
            V = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = m.i.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        r() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onOpenStream = function() {
                        n.props.playerTypeOverride === L.Frontpage && n.player && (n.props.channelLogin ? m.n.history.push("/" + n.props.channelLogin) : n.props.vodID ? m.n.history.push("/videos/" + n.props.vodID + "?t=" + n.player.getCurrentTime()) : n.props.collectionID && m.n.history.push("/collections/" + n.props.collectionID))
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, function() {
                            return n.updatePlayerTrackingData(n.props.hostChannel)
                        }))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerPlayed()
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(M.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(R.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(R.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = m.m.getLastPageview();
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                hostChannel: e
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                hostChannel: e
                            }), n.player.setTrackingProperties(d.__assign({}, t, {
                                host_channel: e
                            }))
                        }
                    }, n.updatePlayerType = function() {
                        var e = n.props.playerTypeOverride || B.player;
                        n.player && n.playerType !== e && (n.player.setPlayerType(e), n.playerType = e)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: r(),
                        playerInitialized: !1,
                        isFullScreen: !1
                    }, n.playerType = t.playerTypeOverride || B.player, n.lastSetChannel = t.channelLogin, n
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), m.m.eventEmitter.addListener(f.SpadeEventType.Pageview, function() {
                            return e.updatePlayerTrackingData(e.props.hostChannel)
                        }), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var n = document.createElement("script");
                        n.crossOrigin = "anonymous", n.src = window.__jqueryChunk, n.onload = function() {
                            var e = document.createElement("script");
                            e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e)
                        }, document.body.appendChild(n);
                        var i = document.createElement("link");
                        i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (!this.state.canInitializePlayer && t.canInitializePlayer) return void this.initializePlayer();
                    if (t.canInitializePlayer && t.playerInitialized) {
                        if (this.updatePlayerTrackingData(e.hostChannel), this.updatePlayerType(), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.channelLogin && e.channelLogin !== this.lastSetChannel) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void m.m.setVideoPlayerTrackingData({
                            vodID: void 0
                        });
                        var n = e.collectionID && this.props.collectionID !== e.collectionID,
                            i = e.vodID && this.props.vodID !== e.vodID;
                        if (n || i) {
                            var a = e.vodID ? Object(j.a)(e.vodID) : "";
                            if ("" !== a && m.m.setVideoPlayerTrackingData({
                                    vodID: e.vodID
                                }), !this.player) return;
                            return void(n || e.collectionID && i ? this.player.setCollection(e.collectionID, a, e.nextVideoOffset) : this.player.setVideo(a, e.nextVideoOffset))
                        }
                        void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                    }
                }, t.prototype.render = function() {
                    var e = U("video-player", {
                        "video-player--theatre": this.props.theatreModeEnabled,
                        "video-player--logged-in": this.props.isLoggedIn,
                        "video-player--fullscreen": this.state.isFullScreen
                    });
                    return u.createElement("div", {
                        className: U(e),
                        "data-test-selector": "video-player"
                    }, u.createElement("div", {
                        className: "video-player__container",
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.unbindHotKeys(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.props.onDestroy && this.props.onDestroy(), this.player && (m.m.eventEmitter.removeListener(f.SpadeEventType.Pageview, this.updatePlayerTrackingData), this.player.removeEventListener(M.PlayerReady, this.onPlayerReady), this.player.removeEventListener(M.Online, this.onStreamStatusOnline), this.player.removeEventListener(M.Offline, this.onStreamStatusOffline), this.player.removeEventListener(c.Ended, this.onStreamStatusOffline), this.player.removeEventListener(c.Play, this.onPlayerPlay), this.player.removeEventListener(M.TheatreChange, this.onTheatreChange), this.player.removeEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(M.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(c.Seeked, this.onSeek), this.player.removeEventListener(c.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(M.OpenStream, this.onOpenStream), P.extensionService.unregisterPlayer(), this.player.destroy()), m.m.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.initializePlayer = function() {
                    var e = d.__assign({}, B, {
                        showtheatre: !this.props.disableTheatreButton
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.vodID && (e.video = Object(j.a)(this.props.vodID), m.m.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.nextVideoOffset && (e.time = Object(j.b)(this.props.nextVideoOffset)), e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(M.PlayerReady, this.onPlayerReady), t.addEventListener(M.Online, this.onStreamStatusOnline), t.addEventListener(M.Offline, this.onStreamStatusOffline), t.addEventListener(c.Ended, this.onStreamStatusOffline), t.addEventListener(c.Play, this.onPlayerPlay), t.addEventListener(c.Seeked, this.onSeek), t.addEventListener(c.TimeUpdate, this.onTimeUpdate), t.addEventListener(M.TheatreChange, this.onTheatreChange), t.addEventListener(M.FullscreenChange, this.onFullScreenChange), t.addEventListener(M.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(M.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(M.OpenStream, this.onOpenStream), P.extensionService.registerPlayer(this.player), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-created", "Created", 1e3)
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-loaded", "Init", 2500)
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-played", "First Frame", 4e3)
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.maybeAttachToWindow = function(e) {
                    F.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    x.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    x.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(u.Component),
            H = Object(A.c)("VideoPlayer")(V),
            W = Object(_.a)(o, s)(H);
        n.d(t, !1, function() {
            return "hosting-ui-report-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-balloon"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-channel-name"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer"
        }), n.d(t, !1, function() {
            return S
        }), n.d(t, "a", function() {
            return D
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return L
        }), n.d(t, "c", function() {
            return W
        }), n.d(t, "d", function() {
            return l
        })
    },
    887: function(e, t) {},
    888: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
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
                    },
                    defaultValue: null
                }, {
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
                    },
                    defaultValue: null
                }, {
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
                        alias: null,
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                            }]
                        }
                    }, {
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 803
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally, use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\n\nquery GetBitsButton_Bits($isLoggedIn: Boolean!, $withChannel: Boolean!, $login: String!) {\n  bitsOffers @skip(if: $isLoggedIn) {\n    ...bitsOffersFragment\n  }\n  currentUser @include(if: $isLoggedIn) {\n    id\n    idSHA1\n    bitsBalance\n    bitsOffers {\n      ...bitsOffersFragment\n    }\n  }\n  user(login: $login) @include(if: $withChannel) {\n    id\n    ...cheer\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(805).definitions)), a.definitions = a.definitions.concat(i(n(807).definitions)), e.exports = a
    },
    889: function(e, t) {},
    890: function(e, t) {},
    891: function(e, t) {},
    892: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 121
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\n  user(login: $login) {\n    id\n    login\n    profileImageURL(width: 70)\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    893: function(e, t) {},
    894: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                                    value: "roles"
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
                                            value: "isPartner"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "videos"
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
                                            value: "totalCount"
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
                                    value: "followers"
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
                                            value: "totalCount"
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
                                    value: "follows"
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
                                            value: "totalCount"
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
                                    value: "cheer"
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
                    }, {
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
                                    value: "roles"
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
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
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
                end: 423
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    profileImageURL(width: 70)\n    roles {\n      isPartner\n    }\n    stream {\n      id\n    }\n    videos {\n      totalCount\n    }\n    followers {\n      totalCount\n    }\n    follows {\n      totalCount\n    }\n    cheer {\n      id\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    900: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n(1),
            a = (n.n(i), n(3)),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._1, null)), i.createElement(a.B, null, i.createElement(a.U, {
                    display: a.H.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._1, {
                    width: 40,
                    height: 56
                })), i.createElement(a.U, {
                    display: a.H.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._21, null, i.createElement(a._1, {
                    width: 150
                })), i.createElement(a._21, {
                    fontSize: a.L.Size7
                }, i.createElement(a._1, {
                    width: 100
                }))))))
            }
    },
    969: function(e, t, n) {
        "use strict";
        var i = n(833);
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        })
    },
    982: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            var r = i || a(t),
                l = "";
            r && (l = "?sort=" + s(r));
            var c = n ? n.toLowerCase() : o(t);
            p.n.history.push(e + "/" + c + l)
        }

        function a(e) {
            return c(u.parse(e.location.search).sort || "")
        }

        function r(e) {
            switch (e.match.params.filter) {
                case m.a.Archive.toLowerCase():
                    return m.a.Archive;
                case m.a.Highlight.toLowerCase():
                    return m.a.Highlight;
                case m.a.Upload.toLowerCase():
                    return m.a.Upload;
                case m.a.PastPremiere.toLowerCase():
                    return m.a.PastPremiere;
                default:
                    return
            }
        }

        function o(e) {
            var t = r(e);
            return t ? t.toLowerCase() : "all"
        }

        function s(e) {
            switch (e) {
                case h.b:
                    return d.Popular;
                case h.a:
                    return d.Newest;
                default:
                    return e
            }
        }

        function l(e) {
            var t = u.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }

        function c(e) {
            switch (e.toUpperCase()) {
                case h.b:
                    return h.b;
                case h.a:
                    return h.a;
                default:
                    return null
            }
        }
        t.d = i, t.c = a, t.b = r, t.a = l, t.e = c;
        var d, u = n(20),
            p = (n.n(u), n(2)),
            m = n(251),
            h = n(820);
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(d || (d = {}))
    },
    983: function(e, t, n) {
        "use strict";
        var i = n(993);
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n(995),
            r = (n.n(a), n(900));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    986: function(e, t) {},
    987: function(e, t) {},
    993: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(20),
            o = n(1),
            s = n(11),
            l = n(2),
            c = n(51),
            d = n(364),
            u = n(5),
            p = n(251),
            m = n(830),
            h = n(760),
            g = n(806),
            f = function() {
                function e() {}
                return e.getResumeTime = function(t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var a, r, o, s, c, d;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return a = l.n.store.getState(), a.session.user && a.session.user.id ? (e.currentRequest || (window.location.pathname !== e.lastPath && delete e.cachedResponse, e.cachedResponse ? e.currentRequest = e.cachedResponse : e.currentRequest = h.a.get("/api/resumewatching/user?id=" + (a.session.user && a.session.user.id), {
                                        credentials: "include"
                                    }, {
                                        excludeHeaders: ["Authorization", "Client-ID", "Twitch-Api-Token", "X-Requested-With"]
                                    })), [4, e.currentRequest]) : [3, 2];
                                case 1:
                                    return r = i.sent(), !r.error && r.body && r.body.videos && Array.isArray(r.body.videos) ? (e.lastPath = window.location.pathname, e.cachedResponse = Promise.resolve(r), delete e.currentRequest, o = r.body.videos.find(function(e) {
                                        return e && e.video_id === Object(m.a)(t) || e.video_id === Object(g.a)(t)
                                    }), [2, Promise.resolve(o ? o.position : void 0)]) : (delete e.currentRequest, [2, Promise.resolve(void 0)]);
                                case 2:
                                    return s = Object(g.a)(t), c = l.n.storage.get("vodResumeTimes", {}), c[s] ? [2, Promise.resolve(c[s])] : n === p.a.Archive && (d = l.n.storage.get("livestreamResumeTimes", {}), d[t]) ? [2, Promise.resolve(d[t])] : [2, Promise.resolve(void 0)]
                            }
                        })
                    })
                }, e
            }(),
            b = n(3);
        n(994);
        n.d(t, "a", function() {
            return y
        });
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.getResumeData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, f.getResumeTime(this.props.video.id, this.props.video.broadcastType)];
                                    case 1:
                                        return e = t.sent(), this.ignoreResumeTimeResponse ? [2] : (e !== this.state.resumeOffsetSeconds && this.setState({
                                            resumeOffsetSeconds: e
                                        }), [2])
                                }
                            })
                        })
                    }, t.onMouseEnter = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeave = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.getResumeData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.video.id !== e.video.id && this.setState({
                        resumeOffsetSeconds: void 0
                    }, this.getResumeData)
                }, t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null;
                    if (this.state.resumeOffsetSeconds) {
                        var t = this.state.resumeOffsetSeconds / this.props.video.lengthSeconds * 100;
                        e = o.createElement(b.U, {
                            position: b._2.Absolute,
                            attachBottom: !0,
                            fullWidth: !0
                        }, o.createElement(b._5, {
                            size: b._6.Small,
                            value: t,
                            mask: !0
                        }))
                    }
                    return o.createElement("div", i.__assign({
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, Object(b._39)(this.props)), o.createElement(b.A, null, o.createElement(b.U, {
                        fullWidth: !0
                    }, o.createElement(b.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(b._17, {
                        display: b.H.InlineFlex,
                        position: b._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: b._38.Default,
                        fontSize: b.L.Size6,
                        background: b.m.Overlay,
                        color: b.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(b._16, {
                        "data-test-selector": "video-view-count",
                        icon: b._9.GlyphViews,
                        label: Object(l.d)("views", "VideoPreviewCard"),
                        value: Object(l.f)(this.props.video.viewCount)
                    })), o.createElement(b._17, {
                        display: b.H.InlineFlex,
                        position: b._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: b._38.Default,
                        fontSize: b.L.Size6,
                        background: b.m.Overlay,
                        color: b.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(b._16, {
                        "data-test-selector": "video-length",
                        icon: b._9.GlyphLength,
                        label: Object(l.d)("length", "VideoPreviewCard"),
                        value: Object(d.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(b.B, null, o.createElement(b.U, {
                        display: b.H.Flex,
                        flexDirection: b.J.Row,
                        flexWrap: b.K.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad,
                        t = e ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": !(void 0 === this.state.resumeOffsetSeconds || this.state.hovered)
                        }),
                        i = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(b.j, {
                        overflow: !0
                    }, o.createElement(s.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, o.createElement("div", {
                        className: n
                    }, o.createElement(b.P, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(b.j, {
                        ratio: b.k.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: i,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: t
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/games/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": !(void 0 === this.state.resumeOffsetSeconds || this.state.hovered)
                        });
                    return o.createElement(b.U, {
                        "data-test-selector": "game-box-art",
                        display: b.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(s.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(b.P, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(b._30, {
                        display: b.H.Block,
                        direction: b._32.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n
                    }, o.createElement(b.C, {
                        aspect: b.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || l.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(l.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(s.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(b.U, {
                        display: b.H.Flex,
                        flexDirection: b.J.Column
                    }, o.createElement(b.U, {
                        "data-test-selector": "video-title",
                        overflow: b.Y.Hidden,
                        position: b._2.Relative
                    }, o.createElement(b._21, {
                        color: b.F.Base,
                        fontSize: b.L.Size5
                    }, o.createElement(s.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(b.U, {
                        flexShrink: 0,
                        flexGrow: 0
                    }, o.createElement(b._21, {
                        type: b._26.Span,
                        color: b.F.Alt2
                    }, e, o.createElement("span", null, " · "), t)))
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component),
            y = Object(u.c)("VideoPreviewCard")(v)
    },
    994: function(e, t) {},
    995: function(e, t) {}
});
//# sourceMappingURL=pages.video-watch-b051e24e74d611dd025e68e9915069fb.js.map