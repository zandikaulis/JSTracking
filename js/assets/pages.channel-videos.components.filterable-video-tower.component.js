(window.webpackJsonp = window.webpackJsonp || []).push([
    [119], {
        "0INk": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return c
            }), n.d(t, "a", function() {
                return d
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = a.n.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
                    a.n.trackItemSectionClick({
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
                    a.n.trackItemSectionClick({
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
                d = function(e) {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, l, c, d, p = this;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return i.__awaiter(p, void 0, void 0, function() {
                                            var t;
                                            return i.__generator(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, a.o.apollo.client.query({
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
                                    }), d = l.map(function() {
                                        return null
                                    }), a.n.trackItemSectionLoad({
                                        carousel_content: r.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: l.length,
                                        rendered_item_list: l,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
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
        "0T/G": function(e, t) {},
        "5NSO": function(e, t, n) {},
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                l = n("/7QA"),
                c = n("GFmA"),
                d = n("0INk"),
                p = n("yWUM"),
                u = n("vRsq"),
                m = n("2xye"),
                h = n("3W+h"),
                g = n("GnwI"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(p.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: m.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(c.a, {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(u.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner ? this.props.video.owner.displayName : ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || l.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount,
                            durationInSeconds: this.props.hideDuration ? void 0 : this.props.video.lengthSeconds,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: h.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component),
                f = Object(g.c)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(v);
            n.d(t, "a", function() {
                return k
            });
            var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(a.Component)
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        B3R5: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        EJax: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("vSJR"),
                l = n("sLlB"),
                c = n("QzU5"),
                d = n("XKWF"),
                p = n("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(i || (i = {}));
            var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, n = Object(o.d)("All Videos", "VideoFilter"),
                                i = Object(o.d)("Past Premieres", "VideoFilter"),
                                a = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                s = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case c.a.PastPremiere:
                                    t = i;
                                    break;
                                case c.a.Archive:
                                    t = a;
                                    break;
                                case c.a.Highlight:
                                    t = r;
                                    break;
                                case c.a.Upload:
                                    t = s;
                                    break;
                                default:
                                    t = n
                            }
                            return t
                        }, t.sortChangeHandler = function(e) {
                            t.props.onVideoSortChange(e.target.value)
                        }, t.typeChangeHandler = function(e) {
                            if (t.props.onVideoFilterChange) {
                                var n = e.currentTarget.getAttribute("data-filter-type");
                                n && t.props.onVideoFilterChange(n)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(p.Va, {
                            alignItems: p.f.End,
                            display: p.W.Flex,
                            flexDirection: p.Y.Row,
                            fullWidth: !0,
                            justifyContent: p.Ua.Between
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            flexDirection: p.Y.Row
                        }, this.renderLanguageSelector(), r.createElement(s.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": c.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.PastPremiere), this.renderCheckmark(c.a.PastPremiere))), r.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": c.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Archive), this.renderCheckmark(c.a.Archive))), r.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": c.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Highlight), this.renderCheckmark(c.a.Highlight))), r.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": c.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Upload), this.renderCheckmark(c.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(p.Va, {
                            attachRight: !0,
                            position: p.db.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.mb, {
                            asset: p.nb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(p.Va, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(l.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(d.b)(this.props.selectedSort) || d.a.Newest,
                            t = r.createElement(p.sb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: p.Qa.Large,
                                value: e
                            }, r.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": i.SortNewest,
                                value: d.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": i.SortPopular,
                                value: d.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return r.createElement(p.Va, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                m = n("daWW");
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return m.a
            }), n.d(t, !1, function() {
                return d.a
            })
        },
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        i = e.game.toLowerCase(),
                        r = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                        o = i === l.a.CounterStrike ? 40 : 20;
                    return a.createElement(c.Va, {
                        className: r
                    }, a.createElement("div", {
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
                p = n("On2s"),
                u = (n("CCqK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            metadataDetails: null
                        }, t.didUnmount = !1, t.loadStreamMetadataDetails = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.streamMetadata || !this.props.game) return [3, 4];
                                            n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 3, , 4]), [4, Object(p.b)(this.props.streamMetadata, this.props.game)];
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.loadStreamMetadataDetails()
                    }, t.prototype.componentDidUpdate = function(e) {
                        !e.leagueOfLegends.championsMap && this.props.leagueOfLegends.championsMap && this.loadStreamMetadataDetails()
                    }, t.prototype.componentWillUnmount = function() {
                        this.didUnmount = !0
                    }, t.prototype.render = function() {
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? a.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, a.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, a.createElement("div", null, a.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), a.createElement(c.xb, {
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
                        }, a.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, a.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(a.Component));
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
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            src: this.props.gameChange.thumbnailUrl,
                            alt: this.props.gameChange.label
                        };
                        return a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, a.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, a.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, a.createElement(c.S, i.__assign({}, e))), a.createElement(c.xb, {
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
                        }, a.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(c.V, null, this.props.gameChange.label)), a.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(c.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                v = n("0INk"),
                f = n("8/mp"),
                k = n("eJ65"),
                b = (n("vDRX"), function(e) {
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
                            Object(v.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(k.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, a.createElement(c.V, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, a.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, a.createElement(f.b, null, a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return a.createElement(g, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                y = n("kduP"),
                w = n("2xye"),
                C = function(e) {
                    return a.createElement(c.Va, null, a.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return a.createElement(c.Na, {
                            key: n
                        }, a.createElement(c.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: w.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, _(n, i.length - 1) ? null : ", "))
                    })))
                },
                _ = function(e, t) {
                    return e === t
                },
                S = n("N0BP"),
                E = (n("XA5B"), function(e) {
                    var t = a.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, a.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, a.createElement(c.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(c.T, i.__assign({}, Object(S.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            E.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var V, x = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, a.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, a.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, a.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                L = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(x, i.__assign({}, e.topBar))), r = 3), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(c.Va, {
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
                O = (n("kF1+"), function(e) {
                    var t = e.icon && a.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, a.createElement(c.V, null, e.value)) : a.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(c.V, null, e.value))
                }),
                T = n("GnwI"),
                P = (n("B3R5"), function(e) {
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
                        }), a.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, a.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: n
                        }, a.createElement(c.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: n
                        }, a.createElement(c.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                I = Object(T.c)("PreviewCardThumbnail")(P),
                N = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(c.T, i.__assign({}, Object(S.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                F = n("H1ft"),
                A = n("ZbA5"),
                G = n("QVaV"),
                R = n("hyVY"),
                B = n("MXoD"),
                D = n("0LAi"),
                j = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(V || (V = {}));
            var H, M, W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? c.nb.Unlock : c.nb.Lock;
                    return a.createElement(c.Va, null, !t && a.createElement(c.xb, {
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
                        "data-test-selector": V.LockSelector
                    }, a.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": V.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(c.Va, null, a.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(c.xb, {
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
                    }, a.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, a.createElement(c.mb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            n("5NSO");

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function Y(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(H || (H = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var z = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(j.b)(), t.getTrackingContext = function(e) {
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
                        }, Object(S.a)(this.props)), a.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(c.T, {
                            to: Object(B.a)(this.getTrackingContext(w.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(I, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: U(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(L, {
                            topLeft: a.createElement(A.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(O, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? a.createElement(L, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(O, {
                                value: Object(R.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(O, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(O, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(O, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : Y(this.props) ? a.createElement(L, {
                            topLeft: a.createElement(O, {
                                value: Object(R.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(O, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: a.createElement(O, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || Y(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(E, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(B.a)(this.getTrackingContext(w.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": H.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(E, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(B.a)(this.getTrackingContext(w.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": H.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(G.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(B.a)(this.getTrackingContext(w.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), Y(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(B.a)(this.getTrackingContext(w.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(N, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(B.a)(this.getTrackingContext(w.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(D.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return a.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, a.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(W, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === F.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case F.a.Balloon:
                                return a.createElement(b, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case F.a.Inline:
                                return a.createElement(C, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case F.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                q = Object(T.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(z);
            n.d(t, !1, function() {
                return H
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return z
            }), n.d(t, "a", function() {
                return q
            })
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("q1tI"),
                a = n("2iEm"),
                r = n("/7QA"),
                o = n("Ue10"),
                s = (n("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = i.createElement(o.Va, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: o.Y.Column,
                    justifyContent: o.Ua.Center,
                    display: o.W.Flex
                }, i.createElement(o.V, {
                    color: o.O.Link,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.V, {
                    color: o.O.Alt2,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(a.a, {
                    to: e.linkTo,
                    className: "following__view-all__link"
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": s
                }, i.createElement(o.Va, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(o.o, {
                    ratio: e.aspectRatio
                }, i.createElement(o.xb, {
                    background: o.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
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
                return d
            }), n.d(t, "j", function() {
                return p
            }), n.d(t, "k", function() {
                return u
            }), n.d(t, "l", function() {
                return m
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "m", function() {
                return g
            });
            var i = "directory.LANGUAGE_TAGS_UPDATED",
                a = "directory.LOL_CHAMPIONS_CHANGED",
                r = "directory.LOL_CHAMPIONS_LOADING",
                o = "directory.LOL_CHAMPIONS_ERRORED",
                s = "directory.TAG_FILTER_ADDED",
                l = "directory.TAG_FILTER_CHANGED",
                c = "directory.TAG_FILTER_REMOVED";

            function d(e) {
                return {
                    type: i,
                    languageTags: e
                }
            }

            function p(e) {
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
                for (var i in n) n.hasOwnProperty(i) && (t[n[i].id] = n[i]);
                return {
                    type: a,
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
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return f
            });
            var i, a = n("mrSG"),
                r = n("/7QA"),
                o = n("8rUg"),
                s = n.n(o),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                p = n.n(d),
                u = n("X7a7"),
                m = n("YhoA"),
                h = n("Pcnk"),
                g = n("mz1O"),
                v = r.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(i || (i = {}));
            var f = function(e, t) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var n, i, o, s, l, c;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, k(i)] : [3, 2];
                                case 1:
                                    return [2, a.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, b(o)] : [3, 4];
                                case 3:
                                    return [2, a.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, a.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = r.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, w(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else r.o.store.dispatch(Object(u.b)());
                                    a.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                k = function(e) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                                case 1:
                                    return t = a.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                    return i = a.sent(), v.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                b = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                                case 1:
                                    return t = a.sent(), n = {}, t[0].Class.forEach(function(e) {
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
                                    return i = a.sent(), v.error(i, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e) {
                    return a.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i, r, o, s, l, c, d, u, m, f;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = a.sent(), i = void 0, r = 0, o = n; r < o.length; r++)
                                        for (s in i = o[r])
                                            if (i.hasOwnProperty(s))
                                                for (l = i[s], c = 0, d = l; c < d.length; c++)
                                                    if ((u = d[c]).character === e) return (t = {})[u.character] = u, [2, {
                                                        name: (m = t)[e].display_name,
                                                        label: Object(h.b)(h.a.OverwatchCharacter),
                                                        spriteDetails: {
                                                            imageWidth: m[e].image_width,
                                                            imageHeight: m[e].image_height,
                                                            spriteOffsetX: m[e].sprite_x_offset,
                                                            spriteOffsetY: m[e].sprite_y_offset,
                                                            spriteURL: p.a
                                                        }
                                                    }];
                                    return [2, null];
                                case 2:
                                    return f = a.sent(), v.error(f, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                w = function(e, t, n) {
                    if (!t || !e) return null;
                    var i = t[e],
                        a = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                    return {
                        name: i.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: i.image.w,
                            imageHeight: i.image.h,
                            spriteOffsetX: i.image.x,
                            spriteOffsetY: i.image.y,
                            spriteURL: a
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            });
            var i, a = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(i || (i = {}));
            var r = function(e) {
                switch (e) {
                    case i.CSGOMap:
                        return Object(a.d)("Map", "CSGOMapFilter");
                    case i.CSGOSkillGroup:
                        return Object(a.d)("Rank", "CSGORankFilter");
                    case i.HearthstoneClass:
                        return Object(a.d)("Class", "HearthstoneClassFilter");
                    case i.HearthstoneMode:
                        return Object(a.d)("Mode", "HearthstoneModeFilter");
                    case i.LeagueChampion:
                        return Object(a.d)("Champion", "LeagueFilter");
                    case i.OverwatchCharacter:
                        return Object(a.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        PfQt: function(e, t, n) {
            "use strict";
            var i = n("HrG3");
            n.d(t, "a", function() {
                return i.a
            })
        },
        RFKy: function(e, t, n) {},
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        TCEa: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TestSelectors", function() {
                return i
            }), n.d(t, "DEFAULT_PAGE_SIZE", function() {
                return y
            }), n.d(t, "DEFAULT_VIDEO_SORT", function() {
                return w
            }), n.d(t, "FilterableVideoTowerComponent", function() {
                return C
            }), n.d(t, "FilterableVideoTower", function() {
                return S
            });
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("fvjX"),
                s = n("/7QA"),
                l = n("ZDlU"),
                c = n("GFmA"),
                d = n("8/mp"),
                p = n("yR8l"),
                u = n("geRD"),
                m = n("2xye"),
                h = n("llur"),
                g = n("GnwI"),
                v = n("EJax"),
                f = n("XKWF"),
                k = n("Ue10"),
                b = n("aRnl");
            ! function(e) {
                e.NoVideos = "no-videos"
            }(i || (i = {}));
            var y = 30,
                w = f.a.Newest,
                C = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        if (this.props.data.error) return r.createElement(l.a, {
                            message: Object(s.d)("These videos are temporarily unavailable.", "ChannelVideosPage")
                        });
                        var e = null;
                        if (!this.props.data.loading && this.props.data.user && this.props.data.user.videos && (e = this.props.data.user.videos.edges.map(function(e) {
                                return e.node
                            })), e && 0 === e.length) return r.createElement(k.xb, {
                            color: k.O.Alt2,
                            textAlign: k.Jb.Center,
                            key: "no-videos",
                            padding: {
                                y: 5
                            }
                        }, r.createElement(k.V, {
                            type: k.Nb.H4,
                            italic: !0,
                            "data-test-selector": i.NoVideos
                        }, Object(s.d)("No videos found.", "ChannelVideosPage")));
                        var t = !(this.props.data.loading || this.props.data.error || !this.props.data.user || !this.props.data.user.videos || !this.props.data.user.videos.pageInfo.hasNextPage);
                        return r.createElement(k.Va, null, r.createElement(v.b, {
                            videos: e,
                            listContext: c.b.SingleChannelList,
                            trackingContent: Object(h.a)(this.props.sort),
                            trackingMedium: m.PageviewMedium.ChannelVideos,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            hideTags: !0
                        }), r.createElement(d.a, {
                            enabled: t,
                            key: "channel-videos-page-" + this.props.filter + "-" + this.props.sort,
                            loadMore: this.props.loadMore
                        }))
                    }, t
                }(r.Component),
                _ = {
                    options: function(e) {
                        return {
                            variables: {
                                limit: y,
                                channelOwnerLogin: e.channelLogin,
                                broadcastType: e.filter ? e.filter : null,
                                videoSort: e.sort || w
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.user && e.data.user.videos ? e.data.user.videos.edges : [],
                                    n = t.length > 0 ? t[t.length - 1].cursor : void 0;
                                return e.data.fetchMore({
                                    query: b,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: n
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        if (!n.user || !n.user.videos) return e;
                                        var i = e.user && e.user.videos ? e.user.videos.edges : [];
                                        return {
                                            user: a.__assign({}, n.user, {
                                                videos: a.__assign({}, n.user.videos, {
                                                    edges: Object(u.c)(i, n.user.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                },
                S = Object(o.compose)(Object(p.a)(b, _), Object(g.c)("FilterableVideoTower"))(C)
        },
        X7a7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("cr+I"),
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
                return v
            });
            var d = "languageTags",
                p = 0,
                u = 350;

            function m() {
                var e = this;
                return function(t) {
                    clearTimeout(p), p = setTimeout(function() {
                        return i.__awaiter(e, void 0, void 0, function() {
                            var e, n, s, d, p, u;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        e = r.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), n = r.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + a.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, o.a.get(d)];
                                    case 2:
                                        return (p = i.sent()).body ? t(Object(c.l)(p.body)) : (e.warn("LoL champion API response body was empty."), t(Object(c.j)(!0))), [3, 4];
                                    case 3:
                                        throw u = i.sent(), t(Object(c.j)(!0)), e.error(u, "Failed to load LoL champion data"), u;
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
                return function(a) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return i.__generator(this, function(i) {
                            return n = new Set(v()), t ? n.add(e) : n.delete(e), o = Array.from(n), r.l.set(d, o), a(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return r.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function v() {
                return r.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        YhoA: function(e, t, n) {
            "use strict";
            var i;
            n.d(t, "a", function() {
                    return i
                }),
                function(e) {
                    e.CounterStrike = "counter-strike: global offensive", e.Hearthstone = "hearthstone", e.LeagueOfLegends = "league of legends", e.Overwatch = "overwatch"
                }(i || (i = {}))
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var i, a, r, o, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                p = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((i = {})[p.a.Live] = "stream-type-indicator--live", i[p.a.Premiere] = "stream-type-indicator--premiere", i[p.a.Rerun] = "stream-type-indicator--rerun", i[p.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((a = {})[p.a.Premiere] = u.nb.VideoPremiere, a[p.a.Rerun] = u.nb.VideoRerun, a[p.a.WatchParty] = u.nb.VideoRerun, a),
                g = ((r = {})[p.a.Premiere] = u.ob.Live, r[p.a.Rerun] = u.ob.Inherit, r[p.a.WatchParty] = u.ob.Inherit, r),
                v = function(e) {
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
                        }) : this.props.type === p.a.Live ? c.createElement(u.Va, {
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
                        if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case p.a.Live:
                                return Object(d.d)("LIVE", "StreamTypeIndicator");
                            case p.a.Premiere:
                                return Object(d.d)("Premiere", "StreamTypeIndicator");
                            case p.a.Rerun:
                            case p.a.WatchParty:
                                return Object(d.d)("Rerun", "StreamTypeIndicator");
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
        ZrRH: function(e, t, n) {
            e.exports = n.p + "assets/hearthstone-classes-d5c707fb47547e9585bc.png"
        },
        aRnl: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "FilterableVideoTower_Videos"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelOwnerLogin"
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
                                value: "broadcastType"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BroadcastType"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoSort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "VideoSort"
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
                                        value: "channelOwnerLogin"
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
                                        value: "videos"
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
                                            value: "type"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastType"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "videoSort"
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
                    end: 421
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery FilterableVideoTower_Videos($channelOwnerLogin: String! $limit: Int $cursor: Cursor $broadcastType: BroadcastType $videoSort: VideoSort) {\nuser(login: $channelOwnerLogin) {\nid\nvideos(first: $limit after: $cursor type: $broadcastType sort: $videoSort) {\nedges {\ncursor\nnode {\n...PreviewCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
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
            }(n("he03").definitions)), e.exports = i
        },
        cRsL: function(e, t, n) {},
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                l = n("RXle"),
                c = n("L5dg"),
                d = n("Ue10"),
                p = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(c.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return a.createElement(d.Va, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: n,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === n,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(d.Tb, {
                        gutterSize: d.Vb.Small,
                        childWidth: e.videoCardSize || d.Ub.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                u = Object(s.c)("VideoTower", {
                    autoReportInteractive: !0
                })(p);
            n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return u
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
        he03: function(e, t, n) {
            var i = {
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
                            name: {
                                kind: "Name",
                                value: "animatedPreviewURL"
                            },
                            arguments: [],
                            directives: []
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
                                }, {
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
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
                                value: "lengthSeconds"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
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
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "publishedAt"
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
                                        value: "isRestricted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "viewingHistory"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "position"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
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
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 454
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
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
            }(n("iiOx").definitions)), e.exports = i
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        lRiI: function(e, t, n) {},
        llur: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var i = n("QzU5"),
                a = n("2xye"),
                r = n("XKWF");

            function o(e) {
                switch (e) {
                    case i.a.Archive:
                        return a.SpadeVideoBroadcastType.Archive;
                    case i.a.Highlight:
                        return a.SpadeVideoBroadcastType.Highlight;
                    case i.a.Upload:
                        return a.SpadeVideoBroadcastType.Upload;
                    case i.a.PastPremiere:
                        return a.SpadeVideoBroadcastType.PastPremiere;
                    case i.a.PremiereUpload:
                        return a.SpadeVideoBroadcastType.PremiereUpload;
                    default:
                        return e
                }
            }

            function s(e) {
                switch (e) {
                    case r.a.Popular:
                        return a.PageviewContent.PopularVideos;
                    case r.a.Newest:
                        return a.PageviewContent.RecentVideos;
                    default:
                        return e
                }
            }
        },
        m493: function(e, t, n) {},
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
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
            var i = n("mrSG"),
                a = function() {
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
                    return i.__awaiter(void 0, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
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
        vDRX: function(e, t, n) {},
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        }
    }
]);