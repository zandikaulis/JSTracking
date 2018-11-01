(window.webpackJsonp = window.webpackJsonp || []).push([
    [119], {
        "0INk": function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return l
            }), i.d(t, "c", function() {
                return d
            }), i.d(t, "a", function() {
                return c
            });
            var n = i("mrSG"),
                a = i("/7QA"),
                r = i("2xye"),
                o = i("gAd6"),
                s = function() {
                    var e = a.o.getLastPageview();
                    return e && e.location || r.PageviewLocation.None
                },
                l = function(e) {
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
                        location: s()
                    })
                },
                d = function(e) {
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
                        location: s()
                    })
                },
                c = function(e) {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        var t, i, l, d, c, p = this;
                        return n.__generator(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    return m.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return n.__awaiter(p, void 0, void 0, function() {
                                            var t;
                                            return n.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, a.p.apollo.client.query({
                                                            query: o,
                                                            variables: {
                                                                name: e
                                                            }
                                                        })];
                                                    case 1:
                                                        return [2, (t = i.sent().data).game && t.game.id]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(t)];
                                case 1:
                                    return i = m.sent(), l = i.filter(function(e) {
                                        return !!e
                                    }), d = l.map(function() {
                                        return r.TwitchDataType.Game
                                    }), c = l.map(function() {
                                        return null
                                    }), a.o.trackItemSectionLoad({
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
        "0T/G": function(e, t) {},
        "5NSO": function(e, t, i) {},
        "80G/": function(e, t, i) {},
        "86FS": function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                a = i("q1tI"),
                r = i("H1ft"),
                o = i("SWMh"),
                s = i("cr+I"),
                l = i("/7QA"),
                d = i("GFmA"),
                c = i("0INk"),
                p = i("yWUM"),
                m = i("vRsq"),
                u = i("2xye"),
                h = i("GnwI"),
                g = i("4HIT"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var i = {
                                    t: Object(p.a)(e.offset)
                                };
                                return t.props.collectionID && (i.collection = t.props.collectionID), n.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(i),
                                        state: {
                                            content: u.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, i) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: i,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(m.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
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
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
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
                                linkPath: g.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(d.a, n.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
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
                k = Object(h.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(v);
            i.d(t, "a", function() {
                return f
            });
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, i) {
                        return n.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return n.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, i, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = n.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(k, n.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
                }, t
            }(a.Component)
        },
        B3R5: function(e, t, i) {},
        EJax: function(e, t, i) {
            "use strict";
            var n, a = i("mrSG"),
                r = i("q1tI"),
                o = i("/7QA"),
                s = i("vSJR"),
                l = i("sLlB"),
                d = i("QzU5"),
                c = i("XKWF"),
                p = i("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(n || (n = {}));
            var m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, i = Object(o.d)("All Videos", "VideoFilter"),
                                n = Object(o.d)("Past Premieres", "VideoFilter"),
                                a = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                s = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case d.a.PastPremiere:
                                    t = n;
                                    break;
                                case d.a.Archive:
                                    t = a;
                                    break;
                                case d.a.Highlight:
                                    t = r;
                                    break;
                                case d.a.Upload:
                                    t = s;
                                    break;
                                default:
                                    t = i
                            }
                            return t
                        }, t.sortChangeHandler = function(e) {
                            t.props.onVideoSortChange(e.target.value)
                        }, t.typeChangeHandler = function(e) {
                            if (t.props.onVideoFilterChange) {
                                var i = e.currentTarget.getAttribute("data-filter-type");
                                i && t.props.onVideoFilterChange(i)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(p.Xa, {
                            alignItems: p.f.End,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            fullWidth: !0,
                            justifyContent: p.Wa.Between
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row
                        }, this.renderLanguageSelector(), r.createElement(s.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": n.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": n.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": d.a.PastPremiere,
                            "data-test-selector": n.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.PastPremiere), this.renderCheckmark(d.a.PastPremiere))), r.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": d.a.Archive,
                            "data-test-selector": n.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Archive), this.renderCheckmark(d.a.Archive))), r.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": d.a.Highlight,
                            "data-test-selector": n.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Highlight), this.renderCheckmark(d.a.Highlight))), r.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": d.a.Upload,
                            "data-test-selector": n.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(d.a.Upload), this.renderCheckmark(d.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(p.Xa, {
                            attachRight: !0,
                            position: p.hb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(p.qb, {
                            asset: p.rb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(p.Xa, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(l.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(p.xb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": n.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: p.Sa.Large,
                                value: e
                            }, r.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": n.SortNewest,
                                value: c.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": n.SortPopular,
                                value: c.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return r.createElement(p.Xa, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                u = i("daWW");
            i.d(t, "a", function() {
                return m
            }), i.d(t, "b", function() {
                return u.a
            }), i.d(t, !1, function() {
                return c.a
            })
        },
        Fj9y: function(e, t, i) {},
        GFmA: function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                a = i("q1tI"),
                r = i("/7QA"),
                o = i("5zf8"),
                s = i("Ue10"),
                l = (i("Fj9y"), function(e) {
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
                        return a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row,
                            padding: .5
                        }, a.createElement(s.Cb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: s.x.Small,
                            overflow: s.cb.Hidden,
                            position: s.hb.Relative
                        }, a.createElement(s.o, {
                            align: s.d.Center,
                            ratio: s.p.BoxArt
                        }, a.createElement(s.S, n.__assign({}, e))), a.createElement(s.Cb, {
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
                        }, a.createElement(s.qb, {
                            asset: s.rb.Play,
                            type: s.sb.Inherit
                        }))), a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, a.createElement(s.W, null, this.props.gameChange.label)), a.createElement(s.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, a.createElement(s.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(a.Component)),
                d = i("0INk"),
                c = i("8/mp"),
                p = i("eJ65"),
                m = (i("vDRX"), function(e) {
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
                            Object(d.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return a.createElement(s.Xa, {
                            className: "preview-card-game-balloon",
                            display: s.X.InlineBlock,
                            position: s.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, a.createElement(p.a, {
                            key: "game-balloon",
                            display: s.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, a.createElement(s.z, {
                            type: s.F.Hollow,
                            icon: s.rb.ViewerList
                        }, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Row
                        }, a.createElement(s.W, null, Object(r.d)("Chapters", "PreviewCardGameBalloon")), a.createElement(s.Xa, {
                            margin: {
                                left: 1
                            }
                        }, a.createElement(s.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), a.createElement(s.u, {
                            direction: s.v.TopLeft,
                            size: s.w.Medium
                        }, a.createElement(s.Xa, {
                            overflow: s.cb.Hidden,
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(s.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, a.createElement(s.W, {
                            color: s.O.Alt2
                        }, Object(r.d)("Chapter Select", "PreviewCardGameBalloon"))), a.createElement(s.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: s.Ba.NoWrap
                        }, a.createElement(c.b, null, a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexDirection: s.Aa.Column,
                            flexWrap: s.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, i) {
                            return a.createElement(l, {
                                index: i,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(a.Component)),
                u = i("kduP"),
                h = i("2xye"),
                g = function(e) {
                    return a.createElement(s.Xa, null, a.createElement(s.W, {
                        color: s.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, i, n) {
                        return a.createElement(s.Pa, {
                            key: i
                        }, a.createElement(s.U, {
                            to: {
                                pathname: Object(u.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: s.V.Inherit
                        }, t.label, v(i, n.length - 1) ? null : ", "))
                    })))
                },
                v = function(e, t) {
                    return e === t
                },
                k = i("N0BP"),
                f = (i("XA5B"), function(e) {
                    var t = a.createElement(s.Cb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: s.x.Small,
                        overflow: s.cb.Hidden
                    }, a.createElement(s.o, {
                        ratio: e.aspect || s.p.BoxArt,
                        align: s.d.Center
                    }, a.createElement(s.S, n.__assign({}, e.imageProps))));
                    return e.linkTo && (t = a.createElement(s.U, n.__assign({}, Object(k.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            f.displayName = "PreviewCardIconicImage";
            var b, y = i("TSYQ"),
                C = (i("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return a.createElement(s.Xa, {
                        display: s.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: s.Wa.Between,
                        alignItems: s.f.Center,
                        className: t
                    }, a.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: s.O.Overlay,
                        bold: !0,
                        transform: s.Sb.Uppercase
                    }, e.title)), e.subTitle && a.createElement(s.Xa, {
                        display: s.X.InlineFlex
                    }, a.createElement(s.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: s.O.Overlay
                    }, e.subTitle)))
                }),
                w = (i("m493"), function(e) {
                    var t = .5,
                        i = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (i = a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, a.createElement(s.kb, {
                        borderRadius: s.x.None,
                        size: s.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var r = 1,
                        o = null;
                    return e.topBar && (o = a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement(C, n.__assign({}, e.topBar))), r = 3), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, i, a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: r
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), a.createElement(s.Xa, {
                        position: s.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), a.createElement(s.Xa, {
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
                S = (i("kF1+"), function(e) {
                    var t = e.icon && a.createElement(s.Xa, {
                        display: s.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, a.createElement(s.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? a.createElement(s.Cb, {
                        alignItems: s.f.Center,
                        background: s.r.Overlay,
                        borderRadius: s.x.Small,
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        fontSize: s.Ca.Size6,
                        justifyContent: s.Wa.Center
                    }, t, a.createElement(s.W, null, e.value)) : a.createElement(s.Cb, {
                        className: "preview-card-stat",
                        color: s.O.Overlay,
                        display: s.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, a.createElement(s.W, null, e.value))
                }),
                E = i("GnwI"),
                P = (i("B3R5"), function(e) {
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
                        }), a.createElement("div", n.__assign({}, e, {
                            onClick: this.props.onClick
                        }), a.createElement(s.Cb, {
                            background: s.r.Alt2,
                            overflow: s.cb.Hidden
                        }, a.createElement(s.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            i = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? a.createElement("div", {
                            className: i
                        }, a.createElement(s.S, n.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : a.createElement("div", {
                            className: i
                        }, a.createElement(s.S, n.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(a.Component)),
                T = Object(E.b)("PreviewCardThumbnail")(P),
                I = (i("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return a.createElement(s.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, a.createElement(s.W, {
                            color: s.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : a.createElement(s.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: s.V.Inherit
                        }, e.text)))
                    })), a.createElement("div", null, a.createElement(s.U, n.__assign({}, Object(k.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: s.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), a.createElement(s.W, {
                        type: s.Tb.H3,
                        fontSize: s.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), a.createElement(s.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                x = i("H1ft"),
                N = i("ZbA5"),
                L = i("QVaV"),
                _ = i("hyVY"),
                V = i("MXoD"),
                F = i("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(b || (b = {}));
            var A, B, O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(r.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        i = t ? Object(r.d)("unlocked", "VideoPreviewCardRestriction") : Object(r.d)("locked", "VideoPreviewCardRestriction"),
                        n = t ? s.rb.Unlock : s.rb.Lock;
                    return a.createElement(s.Xa, null, !t && a.createElement(s.Cb, {
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
                        "data-test-selector": b.LockSelector
                    }, a.createElement(s.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(s.W, {
                        color: s.O.Overlay,
                        fontSize: s.Ca.Size5,
                        "data-test-selector": b.UpsellSelector
                    }, Object(r.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), a.createElement(s.Xa, null, a.createElement(s.z, {
                        type: s.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), a.createElement(s.Cb, {
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
                    }, a.createElement(s.Wb, {
                        direction: this.props.attachTop ? s.Yb.Bottom : s.Yb.Top,
                        align: s.Xb.Right,
                        label: i
                    }, a.createElement(s.qb, {
                        asset: n,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(a.PureComponent);
            i("5NSO");

            function G(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function X(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(A || (A = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(B || (B = {}));
            var R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getTrackingContext = function(e) {
                            var i = t.props.trackingContext;
                            return {
                                content: i && i.content ? i.content : e,
                                medium: i && i.medium
                            }
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("div", n.__assign({
                            className: "preview-card"
                        }, Object(k.a)(this.props)), a.createElement(s.Cb, {
                            position: s.hb.Relative,
                            borderRadius: s.x.Medium,
                            overflow: s.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), a.createElement(s.U, {
                            to: Object(V.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && a.createElement(T, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: G(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), a.createElement(s.Xa, {
                            display: s.X.Flex,
                            flexWrap: s.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), a.createElement(s.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && a.createElement(s.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, a.createElement(this.props.contextualCardActionProps.component, n.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? a.createElement(w, {
                            topLeft: a.createElement(N.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: Object(r.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : G(this.props) ? a.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && a.createElement(S, {
                                value: Object(_.b)(this.props.durationInSeconds),
                                icon: s.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && a.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null,
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : X(this.props) ? a.createElement(w, {
                            topLeft: a.createElement(S, {
                                value: Object(_.b)(this.props.durationInSeconds),
                                icon: s.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: a.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: this.props.datePublished ? a.createElement(S, {
                                value: Object(r.c)(new Date(this.props.datePublished), "medium")
                            }) : null
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return G(this.props) && this.props.listPosition ? Object(r.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return G(this.props) || X(this.props) ? Object(r.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === B.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? a.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: s.p.BoxArt,
                            "data-test-selector": A.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === B.SingleGameList || this.props.context === B.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? a.createElement(s.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(f, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(V.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: s.p.Aspect1x1,
                            "data-test-selector": A.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(L.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(V.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), X(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(r.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : G(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== B.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(V.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), a.createElement(a.Fragment, null, a.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(V.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? a.createElement(s.Xa, {
                            margin: {
                                top: .5
                            }
                        }, a.createElement(F.a, n.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return G(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? a.createElement(O, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!G(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === x.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, i, n) {
                        switch (e) {
                            case x.a.Balloon:
                                return a.createElement(m, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: i,
                                    onBalloonItemClick: n
                                });
                            case x.a.Inline:
                                return a.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case x.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(a.Component),
                D = Object(E.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(R);
            i.d(t, !1, function() {
                return A
            }), i.d(t, "b", function() {
                return B
            }), i.d(t, !1, function() {
                return R
            }), i.d(t, "a", function() {
                return D
            })
        },
        HrG3: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return s
            });
            var n = i("q1tI"),
                a = i("/7QA"),
                r = i("Ue10"),
                o = (i("RFKy"), "view-all-button-selector");

            function s(e) {
                var t = n.createElement(r.Xa, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Aa.Column,
                    justifyContent: r.Wa.Center,
                    display: r.X.Flex
                }, n.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), n.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = n.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), n.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, n.createElement(r.Xa, {
                    margin: {
                        bottom: 5
                    }
                }, n.createElement(r.o, {
                    ratio: e.aspectRatio
                }, n.createElement(r.Cb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        PfQt: function(e, t, i) {
            "use strict";
            var n = i("HrG3");
            i.d(t, "a", function() {
                return n.a
            })
        },
        RFKy: function(e, t, i) {},
        RXle: function(e, t, i) {
            "use strict";
            var n = i("86FS");
            i.d(t, "VideoPreviewCard", function() {
                return n.a
            });
            i("0T/G");
            var a = i("0Rl0");
            i.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        TCEa: function(e, t, i) {
            "use strict";
            i.r(t);
            var n, a = i("mrSG"),
                r = i("q1tI"),
                o = i("fvjX"),
                s = i("/7QA"),
                l = i("ZDlU"),
                d = i("GFmA"),
                c = i("8/mp"),
                p = i("yR8l"),
                m = i("geRD"),
                u = i("2xye"),
                h = i("llur"),
                g = i("GnwI"),
                v = i("EJax"),
                k = i("XKWF"),
                f = function(e) {
                    var t = e.user;
                    return (t && t.videos && t.videos.edges || []).filter(function(e) {
                        return e && e.node && e.node.id
                    })
                },
                b = i("Ue10"),
                y = i("aRnl");
            i.d(t, "TestSelectors", function() {
                    return n
                }), i.d(t, "DEFAULT_PAGE_SIZE", function() {
                    return C
                }), i.d(t, "DEFAULT_VIDEO_SORT", function() {
                    return w
                }), i.d(t, "FilterableVideoTowerComponent", function() {
                    return S
                }), i.d(t, "FilterableVideoTower", function() {
                    return P
                }),
                function(e) {
                    e.NoVideos = "no-videos"
                }(n || (n = {}));
            var C = 30,
                w = k.a.Newest,
                S = function(e) {
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
                        if (!this.props.data.loading && this.props.data.user && this.props.data.user.videos && this.props.data.user.videos.edges && (e = this.props.data.user.videos.edges.map(function(e) {
                                if (e && e.node) return e.node
                            })), e && 0 === e.length) return r.createElement(b.Cb, {
                            color: b.O.Alt2,
                            textAlign: b.Pb.Center,
                            key: "no-videos",
                            padding: {
                                y: 5
                            }
                        }, r.createElement(b.W, {
                            type: b.Tb.H4,
                            italic: !0,
                            "data-test-selector": n.NoVideos
                        }, Object(s.d)("No videos found.", "ChannelVideosPage")));
                        var t = !(this.props.data.loading || this.props.data.error || !this.props.data.user || !this.props.data.user.videos || !this.props.data.user.videos.pageInfo || !this.props.data.user.videos.pageInfo.hasNextPage);
                        return r.createElement(b.Xa, null, r.createElement(v.b, {
                            videos: e,
                            listContext: d.b.SingleChannelList,
                            trackingContent: Object(h.a)(this.props.sort),
                            trackingMedium: u.PageviewMedium.ChannelVideos,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            hideTags: !0
                        }), r.createElement(c.a, {
                            enabled: t,
                            key: "channel-videos-page-" + this.props.filter + "-" + this.props.sort,
                            loadMore: this.props.loadMore
                        }))
                    }, t
                }(r.Component),
                E = {
                    options: function(e) {
                        return {
                            variables: {
                                limit: C,
                                channelOwnerLogin: e.channelLogin,
                                broadcastType: e.filter ? e.filter : null,
                                videoSort: e.sort || w
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data.user && e.data.user.videos && e.data.user.videos.edges ? e.data.user.videos.edges : [],
                                    i = t && t.length > 0 ? t[t.length - 1].cursor : void 0;
                                return e.data.fetchMore({
                                    query: y,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: i
                                    }),
                                    updateQuery: function(e, t) {
                                        var i = t.fetchMoreResult;
                                        return i.user && i.user.videos ? {
                                            user: a.__assign({}, i.user, {
                                                videos: a.__assign({}, i.user.videos, {
                                                    edges: Object(m.c)(f(e), f(i))
                                                })
                                            })
                                        } : e
                                    }
                                })
                            }
                        })
                    }
                },
                P = Object(o.compose)(Object(p.a)(y, E), Object(g.b)("FilterableVideoTower"))(S)
        },
        XA5B: function(e, t, i) {},
        ZbA5: function(e, t, i) {
            "use strict";
            var n, a, r, o, s = i("mrSG"),
                l = i("TSYQ"),
                d = i("q1tI"),
                c = i("/7QA"),
                p = i("oB8h"),
                m = i("Ue10");
            i("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var u = ((n = {})[p.a.Live] = "stream-type-indicator--live", n[p.a.Premiere] = "stream-type-indicator--premiere", n[p.a.Rerun] = "stream-type-indicator--rerun", n[p.a.WatchParty] = "stream-type-indicator--rerun", n),
                h = ((a = {})[p.a.Premiere] = m.rb.VideoPremiere, a[p.a.Rerun] = m.rb.VideoRerun, a[p.a.WatchParty] = m.rb.VideoRerun, a),
                g = ((r = {})[p.a.Premiere] = m.sb.Live, r[p.a.Rerun] = m.sb.Inherit, r[p.a.WatchParty] = m.sb.Inherit, r),
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
                        return e[u[this.props.type]] = !0, l(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? d.createElement(m.Cb, {
                            borderRadius: m.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === p.a.Live ? d.createElement(m.Xa, {
                            className: "stream-type-indicator__live-wrapper",
                            display: m.X.Flex,
                            alignItems: m.f.Center
                        }, d.createElement(m.K, {
                            status: m.M.Live,
                            size: m.L.Small
                        })) : d.createElement(m.qb, {
                            asset: h[this.props.type],
                            type: g[this.props.type],
                            width: 14,
                            height: 14
                        })
                    }, t.prototype.getLabel = function() {
                        if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                        switch (this.props.type) {
                            case p.a.Live:
                                return Object(c.d)("LIVE", "StreamTypeIndicator");
                            case p.a.Premiere:
                                return Object(c.d)("Premiere", "StreamTypeIndicator");
                            case p.a.Rerun:
                            case p.a.WatchParty:
                                return Object(c.d)("Rerun", "StreamTypeIndicator");
                            default:
                                return ""
                        }
                    }, t
                }(d.Component);
            i.d(t, !1, function() {
                return o
            }), i.d(t, "a", function() {
                return v
            })
        },
        aRnl: function(e, t, i) {
            var n = {
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "VideoEdge"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 390
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/video-edge-fragment.gql"\nquery FilterableVideoTower_Videos($channelOwnerLogin: String! $limit: Int $cursor: Cursor $broadcastType: BroadcastType $videoSort: VideoSort) {\nuser(login: $channelOwnerLogin) {\nid\nvideos(first: $limit after: $cursor type: $broadcastType sort: $videoSort) {\nedges {\n...VideoEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(i("qy/S").definitions)), e.exports = n
        },
        cRsL: function(e, t, i) {},
        daWW: function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                a = i("q1tI"),
                r = i("GFmA"),
                o = i("PfQt"),
                s = i("GnwI"),
                l = i("RXle"),
                d = i("L5dg"),
                c = i("Ue10"),
                p = function(e) {
                    var t = null,
                        i = null;
                    if (null === e.videos) t = a.createElement(d.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (i = a.createElement(o.a, n.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, i) {
                            return a.createElement(c.Xa, {
                                "data-a-target": "video-tower-card-" + i,
                                key: "video-" + i,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: i,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === i,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(c.Zb, {
                        gutterSize: c.bc.Small,
                        childWidth: e.videoCardSize || c.ac.Large,
                        placeholderItems: 20
                    }, t, i)
                },
                m = Object(s.b)("VideoTower", {
                    autoReportInteractive: !0
                })(p);
            i.d(t, !1, function() {
                return p
            }), i.d(t, "a", function() {
                return m
            })
        },
        gAd6: function(e, t) {
            var i = {
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
            i.loc.source = {
                body: "query VideoPreviewCardGameID($name: String!) {\ngame(name: $name) {\nid\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        he03: function(e, t, i) {
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
            n.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(i("iiOx").definitions)), e.exports = n
        },
        "kF1+": function(e, t, i) {},
        kVMo: function(e, t, i) {},
        llur: function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return o
            }), i.d(t, "a", function() {
                return s
            });
            var n = i("QzU5"),
                a = i("2xye"),
                r = i("XKWF");

            function o(e) {
                switch (e) {
                    case n.a.Archive:
                        return a.SpadeVideoBroadcastType.Archive;
                    case n.a.Highlight:
                        return a.SpadeVideoBroadcastType.Highlight;
                    case n.a.Upload:
                        return a.SpadeVideoBroadcastType.Upload;
                    case n.a.PastPremiere:
                        return a.SpadeVideoBroadcastType.PastPremiere;
                    case n.a.PremiereUpload:
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
        m493: function(e, t, i) {},
        "qy/S": function(e, t, i) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "VideoEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoEdge"
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
                }],
                loc: {
                    start: 0,
                    end: 157
                }
            };
            n.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment VideoEdge on VideoEdge {\ncursor\nnode {\n...PreviewCardVideo\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(i("he03").definitions)), e.exports = n
        },
        vDRX: function(e, t, i) {},
        yWUM: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return a
            });
            var n = "0h0m1s";

            function a(e) {
                if (0 === e) return n;
                if (!e || e < 0) return "";
                var t = e,
                    i = Math.floor(t / 3600);
                return t %= 3600, i + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        }
    }
]);