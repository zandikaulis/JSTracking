(window.webpackJsonp = window.webpackJsonp || []).push([
    [129], {
        "0T/G": function(e, t) {},
        "86FS": function(e, t, i) {
            "use strict";
            var a = i("mrSG"),
                n = i("q1tI"),
                r = i("H1ft"),
                o = i("SWMh"),
                d = i("cr+I"),
                s = i("/7QA"),
                l = i("GFmA"),
                c = i("0INk"),
                m = i("yWUM"),
                p = i("vRsq"),
                u = i("2xye"),
                v = i("3W+h"),
                g = i("GnwI"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var i = {
                                    t: Object(m.a)(e.offset)
                                };
                                return t.props.collectionID && (i.collection = t.props.collectionID), a.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: d.stringify(i),
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
                    return a.__extends(t, e), t.prototype.render = function() {
                        return n.createElement(l.a, {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(p.i)(void 0, this.props.video.id),
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
                                src: this.props.video.game && this.props.video.game.boxArtURL || s.a.defaultBoxArtURL,
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
                                linkPath: v.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = d.stringify(e);
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
                }(n.Component),
                k = Object(g.c)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(h);
            i.d(t, "a", function() {
                return f
            });
            var f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, i) {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, i, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = a.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return n.createElement(k, a.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(n.Component)
        },
        EJax: function(e, t, i) {
            "use strict";
            var a, n = i("mrSG"),
                r = i("q1tI"),
                o = i("/7QA"),
                d = i("vSJR"),
                s = i("sLlB"),
                l = i("QzU5"),
                c = i("XKWF"),
                m = i("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(a || (a = {}));
            var p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, i = Object(o.d)("All Videos", "VideoFilter"),
                                a = Object(o.d)("Past Premieres", "VideoFilter"),
                                n = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                d = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case l.a.PastPremiere:
                                    t = a;
                                    break;
                                case l.a.Archive:
                                    t = n;
                                    break;
                                case l.a.Highlight:
                                    t = r;
                                    break;
                                case l.a.Upload:
                                    t = d;
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
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(m.Va, {
                            alignItems: m.f.End,
                            display: m.W.Flex,
                            flexDirection: m.Y.Row,
                            fullWidth: !0,
                            justifyContent: m.Ua.Between
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            flexDirection: m.Y.Row
                        }, this.renderLanguageSelector(), r.createElement(d.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": a.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(m.Sa, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": a.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(m.Sa, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": l.a.PastPremiere,
                            "data-test-selector": a.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.PastPremiere), this.renderCheckmark(l.a.PastPremiere))), r.createElement(m.Sa, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": l.a.Archive,
                            "data-test-selector": a.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Archive), this.renderCheckmark(l.a.Archive))), r.createElement(m.Sa, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": l.a.Highlight,
                            "data-test-selector": a.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Highlight), this.renderCheckmark(l.a.Highlight))), r.createElement(m.Sa, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": l.a.Upload,
                            "data-test-selector": a.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(m.Va, {
                            display: m.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Upload), this.renderCheckmark(l.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(m.Va, {
                            attachRight: !0,
                            position: m.db.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(m.mb, {
                            asset: m.nb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(m.Va, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(s.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(m.sb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": a.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: m.Qa.Large,
                                value: e
                            }, r.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": a.SortNewest,
                                value: c.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": a.SortPopular,
                                value: c.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return r.createElement(m.Va, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                u = i("daWW");
            i.d(t, "a", function() {
                return p
            }), i.d(t, "b", function() {
                return u.a
            }), i.d(t, !1, function() {
                return c.a
            })
        },
        L5dg: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return r
            });
            var a = i("q1tI"),
                n = i("0Rl0"),
                r = function(e) {
                    for (var t = [], i = void 0 === e.placeholderCount ? 20 : e.placeholderCount, r = 0; r < i; r++) t.push(a.createElement(n.a, {
                        key: r
                    }));
                    return a.createElement(a.Fragment, null, t)
                }
        },
        PfQt: function(e, t, i) {
            "use strict";
            var a = i("HrG3");
            i.d(t, "a", function() {
                return a.a
            })
        },
        RXle: function(e, t, i) {
            "use strict";
            var a = i("86FS");
            i.d(t, "VideoPreviewCard", function() {
                return a.a
            });
            i("0T/G");
            var n = i("0Rl0");
            i.d(t, "VideoPreviewCardPlaceholder", function() {
                return n.a
            })
        },
        SWMh: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return r
            });
            var a = i("mrSG"),
                n = i("b6Yk"),
                r = function(e, t, i) {
                    return a.__awaiter(void 0, void 0, Promise, function() {
                        var r, o;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    r = null, a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, n.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = a.sent()).body && o.body.markers.game_changes && (r = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, i, a) {
                                        var n = a[i + 1];
                                        return {
                                            duration: n ? n.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: o.body.vod_id
                                        }
                                    }), i && i.boxArtURL && r.unshift({
                                        duration: r[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: i.name,
                                        thumbnailUrl: i.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return a.sent(), [3, 4];
                                case 4:
                                    return [2, r || []]
                            }
                        })
                    })
                }
        },
        TB8s: function(e, t, i) {},
        TH8Y: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i("/MKj"),
                n = i("OhOW"),
                r = i("mrSG"),
                o = i("q1tI"),
                d = i("/7QA"),
                s = i("ZDlU"),
                l = i("GFmA"),
                c = i("8/mp"),
                m = i("yR8l"),
                p = i("V+GM"),
                u = i("geRD"),
                v = i("vRsq"),
                g = i("NvVO"),
                h = i("2xye"),
                k = i("llur"),
                f = i("cras"),
                y = i("GnwI"),
                b = i("EJax"),
                N = i("XKWF"),
                S = i("9DYP"),
                w = i("HStj"),
                V = i("Ue10"),
                C = i("tBbK"),
                F = (i("TB8s"), N.a.Popular),
                P = function(e) {
                    function t(t) {
                        var i = e.call(this, t) || this;
                        return i.onVideoSortChange = function(e) {
                            Object(v.u)("/directory/game/" + i.props.match.params.encodedCommunityName + "/videos", i.props, void 0, e)
                        }, i.onVideoFilterChange = function(e) {
                            Object(v.u)("/directory/game/" + i.props.match.params.encodedCommunityName + "/videos", i.props, e)
                        }, i.state = {
                            directoryType: Object(S.a)(t.match.path)
                        }, i
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), d.o.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                    }, t.prototype.render = function() {
                        var e = null,
                            t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                            i = Object(v.r)(this.props) || F,
                            a = Object(v.t)(this.props);
                        if (this.props.data.error) {
                            var n = Object(d.d)("{gameName} videos are temporarily unavailable.", {
                                gameName: t
                            }, "DirectoryVideosPage");
                            return o.createElement(s.a, {
                                message: n
                            })
                        }
                        if (!this.props.data.loading && null === this.props.data.game) {
                            n = Object(d.d)("{gameName} does not exist.", {
                                gameName: t
                            }, "DirectoryVideosPage");
                            return o.createElement(s.a, {
                                message: n
                            })
                        }
                        this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                            return e.node
                        }));
                        var r = o.createElement(f.a, {
                                buttonSize: V.D.Large,
                                contentType: w.a.Videos,
                                directoryType: this.state.directoryType,
                                directoryName: t
                            }),
                            m = o.createElement(V.Va, {
                                className: "directory-game-videos-page__filters",
                                display: V.W.Flex,
                                flexDirection: V.Y.Row,
                                fullWidth: !0,
                                padding: {
                                    top: 1,
                                    right: 3
                                }
                            }, r, o.createElement(b.a, {
                                onVideoSortChange: this.onVideoSortChange,
                                onVideoFilterChange: this.onVideoFilterChange,
                                selectedSort: i,
                                broadcastType: a
                            }));
                        return o.createElement(o.Fragment, null, m, o.createElement(V.Va, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, o.createElement(b.b, {
                            hideGameArt: !0,
                            trackingContent: Object(k.a)(i),
                            trackingMedium: h.PageviewMedium.GameVideos,
                            videos: e,
                            listContext: l.b.SingleGameList
                        }), o.createElement(c.a, {
                            enabled: this.enablePagination(),
                            key: "directory-game-videos-page-" + a + "-" + i,
                            loadMore: this.props.loadMore
                        })))
                    }, t.prototype.enablePagination = function() {
                        return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                    }, t = r.__decorate([Object(m.a)(C, {
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                    videoLimit: 30,
                                    languages: e.languagePreferences,
                                    broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                    videoSort: Object(v.r)(e) || N.a.Popular
                                }
                            }
                        },
                        props: function(e) {
                            return r.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: C,
                                        variables: r.__assign({}, e.data.variables, {
                                            followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                        }),
                                        updateQuery: function(e, t) {
                                            var i = t.fetchMoreResult;
                                            return {
                                                game: r.__assign({}, i.game, {
                                                    videos: r.__assign({}, i.game.videos, {
                                                        edges: Object(u.c)(e.game.videos.edges, i.game.videos.edges)
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }), Object(y.c)("DirectoryGameVideosPage", {
                        destination: g.a.DirectoryGameVideos
                    }), Object(p.a)({
                        location: h.PageviewLocation.Directory,
                        properties: function(e) {
                            return {
                                content_type: h.PageviewDirectoryContentType.Videos,
                                game: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    })], t)
                }(o.Component);
            var T = Object(a.connect)(function(e) {
                return {
                    languagePreferences: Object(n.a)(e)
                }
            })(P);
            i.d(t, "DirectoryGameVideosPage", function() {
                return T
            })
        },
        daWW: function(e, t, i) {
            "use strict";
            var a = i("mrSG"),
                n = i("q1tI"),
                r = i("GFmA"),
                o = i("PfQt"),
                d = i("GnwI"),
                s = i("RXle"),
                l = i("L5dg"),
                c = i("Ue10"),
                m = function(e) {
                    var t = null,
                        i = null;
                    if (null === e.videos) t = n.createElement(l.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (i = n.createElement(o.a, a.__assign({}, e.viewAllButtonProps)));
                        var d = e.videos.map(function(t, i) {
                            return n.createElement(c.Va, {
                                "data-a-target": "video-tower-card-" + i,
                                key: "video-" + i,
                                margin: {
                                    bottom: 2
                                }
                            }, n.createElement(s.VideoPreviewCard, {
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
                        t = n.createElement(n.Fragment, null, d)
                    }
                    return n.createElement(c.Tb, {
                        gutterSize: c.Vb.Small,
                        childWidth: e.videoCardSize || c.Ub.Large,
                        placeholderItems: 20
                    }, t, i)
                },
                p = Object(d.c)("VideoTower", {
                    autoReportInteractive: !0
                })(m);
            i.d(t, !1, function() {
                return m
            }), i.d(t, "a", function() {
                return p
            })
        },
        he03: function(e, t, i) {
            var a = {
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
            a.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var n = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !n[t] && (n[t] = !0, !0)
                })
            }(i("iiOx").definitions)), e.exports = a
        },
        llur: function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return o
            }), i.d(t, "a", function() {
                return d
            });
            var a = i("QzU5"),
                n = i("2xye"),
                r = i("XKWF");

            function o(e) {
                switch (e) {
                    case a.a.Archive:
                        return n.SpadeVideoBroadcastType.Archive;
                    case a.a.Highlight:
                        return n.SpadeVideoBroadcastType.Highlight;
                    case a.a.Upload:
                        return n.SpadeVideoBroadcastType.Upload;
                    case a.a.PastPremiere:
                        return n.SpadeVideoBroadcastType.PastPremiere;
                    case a.a.PremiereUpload:
                        return n.SpadeVideoBroadcastType.PremiereUpload;
                    default:
                        return e
                }
            }

            function d(e) {
                switch (e) {
                    case r.a.Popular:
                        return n.PageviewContent.PopularVideos;
                    case r.a.Newest:
                        return n.PageviewContent.RecentVideos;
                    default:
                        return e
                }
            }
        },
        tBbK: function(e, t, i) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryVideos_Game"
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
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoLimit"
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
                                value: "followedCursor"
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
                                        value: "String"
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
                                value: "broadcastTypes"
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
                                        value: "BroadcastType"
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
                                                value: "videoLimit"
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
                                                value: "followedCursor"
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
                                            value: "types"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTypes"
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
                    end: 474
                }
            };
            a.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery DirectoryVideos_Game($gameName: String $videoLimit: Int $followedCursor: Cursor $videoSort: VideoSort $languages: [String!] $broadcastTypes: [BroadcastType!]) {\ngame(name: $gameName) {\nid\nname\nvideos(first: $videoLimit after: $followedCursor languages: $languages types: $broadcastTypes sort: $videoSort) {\nedges{\ncursor\nnode {\n...PreviewCardVideo\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var n = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !n[t] && (n[t] = !0, !0)
                })
            }(i("he03").definitions)), e.exports = a
        },
        yWUM: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return n
            });
            var a = "0h0m1s";

            function n(e) {
                if (0 === e) return a;
                if (!e || e < 0) return "";
                var t = e,
                    i = Math.floor(t / 3600);
                return t %= 3600, i + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        }
    }
]);