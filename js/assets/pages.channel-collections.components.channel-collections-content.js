(window.webpackJsonp = window.webpackJsonp || []).push([
    [120], {
        "+Vfn": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionConnectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionConnection"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "totalCount"
                            },
                            arguments: [],
                            directives: []
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
                }],
                loc: {
                    start: 0,
                    end: 199
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment CollectionConnectionFields on CollectionConnection {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}',
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
            }(n("he03").definitions)), e.exports = i
        },
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
                r = n("/7QA"),
                o = n("2xye"),
                a = n("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || o.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: o.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: o.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: o.TwitchDataType.Video,
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
                                                        return [4, r.o.apollo.client.query({
                                                            query: a,
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
                                        return o.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), r.n.trackItemSectionLoad({
                                        carousel_content: o.PageviewContent.PreviewCardGameBalloonGame,
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
        "6h5w": function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                o = n("9C/b"),
                a = n("/7QA"),
                s = n("vRsq"),
                l = n("tuvy"),
                c = n("Ue10"),
                d = Object(o.a)(function(e) {
                    var t, n = e.options;
                    return t = Object(l.a)() ? Object(s.j)(e.channelLogin, e, n) : Object(s.q)(e.channelLogin, n && {
                        filter: n.filter ? Object(s.z)(n.filter) : void 0,
                        sort: n.sort
                    }), r.createElement(c.T, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, r.createElement(c.Va, {
                        display: c.W.InlineFlex,
                        flexDirection: c.Y.Row,
                        alignItems: c.f.Center
                    }, r.createElement(c.V, {
                        type: c.Nb.H5
                    }, Object(a.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.mb, {
                        asset: c.nb.AngleRight,
                        height: 14
                    })))
                });
            n.d(t, "a", function() {
                    return p
                }),
                function(e) {
                    e.Title = "title", e.SubTitle = "subtitle"
                }(i || (i = {}));
            var p = function(e) {
                if (!e.titleMessage) return r.createElement(c.cb, {
                    width: 200
                });
                var t = r.createElement(c.V, {
                        type: c.Nb.H4,
                        color: c.O.Base,
                        bold: !0,
                        "data-test-selector": i.Title
                    }, e.titleMessage),
                    n = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? n = r.createElement(c.V, {
                    color: c.O.Alt2,
                    type: c.Nb.Span,
                    "data-test-selector": i.SubTitle
                }, e.subTitle) : e.subTitle && (n = r.createElement(c.Va, {
                    "data-test-selector": i.SubTitle
                }, n)), r.createElement(r.Fragment, null, r.createElement(c.Va, {
                    display: c.W.Flex,
                    flexDirection: c.Y.Row,
                    alignItems: c.f.End
                }, t, e.expandLink && r.createElement(c.Va, {
                    padding: {
                        left: 1
                    }
                }, r.createElement(d, {
                    channelLogin: e.expandLink.channelLogin,
                    options: e.expandLink.options
                }))), n)
            }
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("H1ft"),
                a = n("SWMh"),
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
                        return r.createElement(c.a, {
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
                }(r.Component),
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
                                        return this.promise = Object(a.a)(e, n, this.props.video.game), [4, this.promise];
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
                    return r.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== o.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(r.Component)
        },
        "8n0m": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return s
            });
            var i = n("/7QA"),
                r = n("2xye");

            function o(e) {
                i.n.track(r.SpadeEventType.CollectionCreate, {
                    channel_id: e.channelID,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    title: e.title
                })
            }

            function a(e) {
                i.n.track(r.SpadeEventType.CollectionAddItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID,
                    place: e.place
                })
            }

            function s(e) {
                i.n.track(r.SpadeEventType.CollectionRemoveItem, {
                    channel_id: e.channelID,
                    item_id: e.itemID,
                    item_position: e.itemPosition,
                    item_type: e.itemType,
                    playlist_id: e.playlistID,
                    user_id: e.userID
                })
            }
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "A7Y/": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        Bucx: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        Fj9y: function(e, t, n) {},
        GFmA: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        i = e.game.toLowerCase(),
                        o = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                        a = i === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(c.Va, {
                        className: o
                    }, r.createElement("div", {
                        style: {
                            backgroundImage: "url(" + n.spriteURL + ")",
                            backgroundPositionX: n.spriteOffsetX ? -1 * n.spriteOffsetX : 0,
                            backgroundPositionY: n.spriteOffsetY ? -1 * n.spriteOffsetY : 0,
                            width: n.imageWidth ? n.imageWidth + "px" : "2rem",
                            height: n.imageWidth ? n.imageHeight + "px" : "2rem",
                            transform: "scale(" + (n.imageWidth > 0 ? a / n.imageWidth : 1) + ")",
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
                                            return t = n.sent(), o.j.error(t, "Failed to get metadata details."), [3, 4];
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
                        return this.props.streamMetadata && this.props.game && this.state.metadataDetails ? r.createElement(c.Va, {
                            className: "preview-card-appendage",
                            display: c.W.Flex
                        }, r.createElement(c.Va, {
                            className: "preview-card-appendage__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: c.W.Flex,
                            alignItems: c.f.Center,
                            justifyContent: c.Ua.End
                        }, r.createElement("div", null, r.createElement(d, {
                            game: this.props.game,
                            spriteDetails: this.state.metadataDetails.spriteDetails
                        }))), r.createElement(c.xb, {
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
                        }, r.createElement(c.Va, {
                            flexGrow: 1,
                            flexShrink: 1,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.V, {
                            ellipsis: !0
                        }, this.state.metadataDetails.name)), r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(c.V, null, this.state.metadataDetails.label)))) : null
                    }, t
                }(r.Component));
            var m = Object(a.connect)(function(e) {
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
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row",
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Sa, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row,
                            padding: .5
                        }, r.createElement(c.xb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: c.x.Small,
                            overflow: c.Ya.Hidden,
                            position: c.db.Relative
                        }, r.createElement(c.o, {
                            align: c.d.Center,
                            ratio: c.p.BoxArt
                        }, r.createElement(c.S, i.__assign({}, e))), r.createElement(c.xb, {
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
                        }, r.createElement(c.mb, {
                            asset: c.nb.Play,
                            type: c.ob.Inherit
                        }))), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(c.V, null, this.props.gameChange.label)), r.createElement(c.Va, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(c.V, null, Object(h.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
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
                        return r.createElement(c.Va, {
                            className: "preview-card-game-balloon",
                            display: c.W.InlineBlock,
                            position: c.db.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(k.a, {
                            key: "game-balloon",
                            display: c.W.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(c.z, {
                            type: c.F.Hollow,
                            icon: c.nb.ViewerList
                        }, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Row
                        }, r.createElement(c.V, null, Object(o.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(c.Va, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(c.ab, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(c.u, {
                            direction: c.v.TopLeft,
                            size: c.w.Medium
                        }, r.createElement(c.Va, {
                            overflow: c.Ya.Hidden,
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(c.Va, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(c.V, {
                            color: c.O.Alt2
                        }, Object(o.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(c.Va, {
                            className: "preview-card-game-balloon__content",
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: c.Z.NoWrap
                        }, r.createElement(f.b, null, r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexDirection: c.Y.Column,
                            flexWrap: c.Z.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, n) {
                            return r.createElement(g, {
                                index: n,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                C = n("kduP"),
                y = n("2xye"),
                w = function(e) {
                    return r.createElement(c.Va, null, r.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return r.createElement(c.Na, {
                            key: n
                        }, r.createElement(c.T, {
                            to: {
                                pathname: Object(C.c)(t.label),
                                state: {
                                    content: y.PageviewContent.TextLink,
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
                E = n("N0BP"),
                I = (n("XA5B"), function(e) {
                    var t = r.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, r.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, r.createElement(c.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(c.T, i.__assign({}, Object(E.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            I.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var S, x = function(e) {
                    var t = s("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(c.Va, {
                        display: c.W.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: c.Ua.Between,
                        alignItems: c.f.Center,
                        className: t
                    }, r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-title-selector",
                        color: c.O.Overlay,
                        bold: !0,
                        transform: c.Mb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(c.Va, {
                        display: c.W.InlineFlex
                    }, r.createElement(c.V, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: c.O.Overlay
                    }, e.subTitle)))
                },
                O = (n("m493"), function(e) {
                    var t = .5,
                        n = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (n = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(c.gb, {
                        borderRadius: c.x.None,
                        size: c.ib.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var o = 1,
                        a = null;
                    return e.topBar && (a = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(x, i.__assign({}, e.topBar))), o = 3), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, a, n, r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: o
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(c.Va, {
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
                L = (n("kF1+"), function(e) {
                    var t = e.icon && r.createElement(c.Va, {
                        display: c.W.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(c.mb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(c.xb, {
                        alignItems: c.f.Center,
                        background: c.r.Overlay,
                        borderRadius: c.x.Small,
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        fontSize: c.Aa.Size6,
                        justifyContent: c.Ua.Center
                    }, t, r.createElement(c.V, null, e.value)) : r.createElement(c.xb, {
                        className: "preview-card-stat",
                        color: c.O.Overlay,
                        display: c.W.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(c.V, null, e.value))
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
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = {};
                        return this.props.animatedImageProps && (e = {
                            onMouseEnter: this.handleFocus,
                            onMouseLeave: this.handleBlur,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        }), r.createElement("div", i.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(c.xb, {
                            background: c.r.Alt2,
                            overflow: c.Ya.Hidden
                        }, r.createElement(c.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            n = s("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, i.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: n
                        }, r.createElement(c.S, i.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                N = Object(V.c)("PreviewCardThumbnail")(T),
                P = (n("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(c.Va, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(c.V, {
                            color: c.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(c.T, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: c.U.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(c.T, i.__assign({}, Object(E.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: c.U.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(c.V, {
                        type: c.Nb.H3,
                        fontSize: c.Aa.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(c.Va, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                D = n("H1ft"),
                F = n("ZbA5"),
                R = n("QVaV"),
                A = n("hyVY"),
                j = n("MXoD"),
                G = n("0LAi"),
                B = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(S || (S = {}));
            var W, M, H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(o.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(o.d)("unlocked", "VideoPreviewCardRestriction") : Object(o.d)("locked", "VideoPreviewCardRestriction"),
                        i = t ? c.nb.Unlock : c.nb.Lock;
                    return r.createElement(c.Va, null, !t && r.createElement(c.xb, {
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
                    }, r.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": S.UpsellSelector
                    }, Object(o.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(c.Va, null, r.createElement(c.z, {
                        type: c.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(c.xb, {
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
                    }, r.createElement(c.Qb, {
                        direction: this.props.attachTop ? c.Sb.Bottom : c.Sb.Top,
                        align: c.Rb.Right,
                        label: n
                    }, r.createElement(c.mb, {
                        asset: i,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            n("5NSO");

            function U(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function z(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(W || (W = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var Y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isTagsExperiment = Object(B.b)(), t.getTrackingContext = function(e) {
                            var n = t.props.trackingContext;
                            return {
                                content: n && n.content ? n.content : e,
                                medium: n && n.medium
                            }
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement("div", i.__assign({
                            className: "preview-card"
                        }, Object(E.a)(this.props)), r.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(c.T, {
                            to: Object(j.a)(this.getTrackingContext(y.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(N, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: U(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(c.Va, {
                            display: c.W.Flex,
                            flexWrap: c.Z.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(c.Va, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(c.Va, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, i.__assign({}, this.props.contextualCardActionProps.props)))), this.renderAppendages())
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(O, {
                            topLeft: r.createElement(F.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(L, {
                                value: Object(o.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? r.createElement(O, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(L, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(L, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(L, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(L, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : z(this.props) ? r.createElement(O, {
                            topLeft: r.createElement(L, {
                                value: Object(A.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(L, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(L, {
                                value: Object(o.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || z(this.props) ? Object(o.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(I, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(j.a)(this.getTrackingContext(y.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": W.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(I, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(j.a)(this.getTrackingContext(y.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": W.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(R.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(j.a)(this.getTrackingContext(y.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), z(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(o.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(j.a)(this.getTrackingContext(y.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(P, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(j.a)(this.getTrackingContext(y.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(G.a, i.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderAppendages = function() {
                        if (this.props.playerMetadata && this.props.playerMetadataGame) return r.createElement(c.Va, {
                            margin: {
                                top: this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? .5 : 0
                            }
                        }, r.createElement(m, {
                            streamMetadata: this.props.playerMetadata,
                            game: this.props.playerMetadataGame
                        }))
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return U(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(H, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === D.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case D.a.Balloon:
                                return r.createElement(b, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case D.a.Inline:
                                return r.createElement(w, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case D.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                q = Object(V.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(Y);
            n.d(t, !1, function() {
                return W
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return Y
            }), n.d(t, "a", function() {
                return q
            })
        },
        HNnW: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-320x180-101fcbc1ff8445933141.png"
        },
        Igt5: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return r
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "c", function() {
                return a
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
                r = "directory.LOL_CHAMPIONS_CHANGED",
                o = "directory.LOL_CHAMPIONS_LOADING",
                a = "directory.LOL_CHAMPIONS_ERRORED",
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
                    type: a,
                    leagueOfLegendsChampionsErrored: e
                }
            }

            function u(e) {
                return {
                    type: o,
                    leagueOfLegendsChampionsLoading: e
                }
            }

            function m(e) {
                var t = {},
                    n = e.data;
                for (var i in n) n.hasOwnProperty(i) && (t[n[i].id] = n[i]);
                return {
                    type: r,
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
        IhxQ: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChannelCollectionsContent"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "ownerLogin"
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
                                        value: "ownerLogin"
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
                                        value: "collections"
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
                                    }],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "PreviewCollectionConnection"
                                            },
                                            directives: []
                                        }]
                                    }
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
                                                value: "isEditor"
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
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 373
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-connection-fragment.gql"\nquery ChannelCollectionsContent($ownerLogin: String! $limit: Int $cursor: Cursor) {\nuser(login: $ownerLogin) {\nid\nlogin\ndisplayName\ncollections(first: $limit after: $cursor) {\n...PreviewCollectionConnection\n}\nself {\nisEditor\n}\n}\ncurrentUser {\nid\n}\n}',
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
            }(n("izJ5").definitions)), e.exports = i
        },
        JVvM: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return f
            });
            var i, r, o, a = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("u3aQ"),
                d = n.n(c),
                p = n("HNnW"),
                u = n.n(p),
                m = n("GnwI"),
                h = n("Ue10");
            n("Bucx");
            ! function(e) {
                e[e.VideoCountOverlayText = 0] = "VideoCountOverlayText"
            }(r || (r = {})),
            function(e) {
                e.Half = "160", e.Full = "320"
            }(o || (o = {}));
            var g = ((i = {})[o.Half] = d.a, i[o.Full] = u.a, i),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            imageLoadError: !1
                        }, t.onErrorHandler = function() {
                            t.props.latencyTracking.reportInteractive(), t.setState({
                                imageLoadError: !0
                            })
                        }, t.onLoadHandler = function() {
                            t.props.latencyTracking.reportInteractive()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n, i = null;
                        "number" == typeof this.props.videoCount && (i = s.createElement(h.Va, {
                            position: h.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachBottom: !0
                        }, s.createElement(h.xb, {
                            alignItems: h.f.Center,
                            attachRight: !0,
                            className: "collection-preview-image__wrapper",
                            color: h.O.Overlay,
                            display: h.W.InlineFlex,
                            flexDirection: h.Y.Column,
                            fontSize: h.Aa.Size5,
                            fullHeight: !0,
                            justifyContent: h.Ua.Center,
                            position: h.db.Absolute,
                            textAlign: h.Jb.Center
                        }, s.createElement(h.mb, {
                            asset: h.nb.Collections,
                            height: 20,
                            width: 20
                        }), s.createElement(h.V, {
                            "data-test-selector": r.VideoCountOverlayText
                        }, Object(l.d)("{videoCount, plural, one {# video} other {# videos}}", {
                            videoCount: this.props.videoCount.toString()
                        }, "CollectionCard")))));
                        var a = o.Full;
                        return this.props.fallbackSize && (a = this.props.fallbackSize), !this.props.src || this.state.imageLoadError ? (t = g[a], (e = {})[a + "w"] = t, n = e) : (t = this.props.src, n = this.props.srcSet), s.createElement(h.Va, {
                            position: h.db.Relative
                        }, s.createElement(h.S, {
                            alt: this.props.alt,
                            onError: this.onErrorHandler,
                            onLoad: this.onLoadHandler,
                            src: t,
                            srcSet: n,
                            sizes: this.props.sizes
                        }), i)
                    }, t
                }(s.Component),
                f = Object(m.c)("CollectionPreviewImage")(v)
        },
        MxAq: function(e, t, n) {
            "use strict";
            var i = n("/MKj"),
                r = n("fvjX"),
                o = n("kRBY"),
                a = n("SiBg"),
                s = (n("zHWM"), n("mrSG")),
                l = n("q1tI"),
                c = n("/7QA"),
                d = n("hyVY"),
                p = n("GnwI"),
                u = n("Ue10"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChangeHandler = function() {
                            return t.props.onSelected(t.props.collection)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.render = function() {
                        return l.createElement(u.Va, {
                            display: u.W.Flex
                        }, l.createElement(u.Va, {
                            padding: 2
                        }, l.createElement(u.N, {
                            label: "",
                            onChange: this.onChangeHandler,
                            checked: this.props.videoIsInCollection
                        })), l.createElement(u.Va, {
                            padding: 1
                        }, l.createElement(u.I, {
                            aspect: u.p.Aspect16x9,
                            alt: this.props.collection.title,
                            src: this.props.collection.thumbnailSrc || "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png",
                            size: u.J.Size8
                        })), l.createElement(u.Va, {
                            padding: 1,
                            display: u.W.Flex,
                            flexDirection: u.Y.Column
                        }, l.createElement(u.Va, null, l.createElement(u.V, {
                            ellipsis: !0
                        }, this.props.collection.title)), l.createElement(u.Va, {
                            display: u.W.Flex
                        }, l.createElement(u.Va, {
                            padding: {
                                right: 1
                            }
                        }, l.createElement(u.V, null, Object(c.d)("{videoCount} video", {
                            videoCount: this.props.collection.itemsCount
                        }, "CollectionRowPresentation"))), l.createElement(u.Va, {
                            padding: {
                                x: 1
                            }
                        }, l.createElement(u.V, null, "·")), l.createElement(u.Va, {
                            padding: {
                                left: 1
                            }
                        }, l.createElement(u.V, null, Object(d.b)(this.props.collection.totalDuration))))))
                    }, t
                }(l.Component),
                h = Object(p.c)("CollectionRow")(m),
                g = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onCollectionRowChange = function(e) {
                            t.props.updateItemInCollection(e, t.props.videoID, t.props.channelID, t.props.trackingPlace)
                        }, t
                    }
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), this.props.channelID && this.props.videoID && this.props.fetchCollectionsForVideo(this.props.channelID, this.props.videoID)
                    }, t.prototype.render = function() {
                        var e = this;
                        return this.props.channelID && this.props.videoID && this.props.collections ? l.createElement(u.Va, null, this.props.collections.map(function(t) {
                            return l.createElement(h, {
                                key: t.id,
                                collection: t,
                                videoIsInCollection: e.props.containingCollections.map(function(e) {
                                    return e.id
                                }).indexOf(t.id) > -1,
                                onSelected: e.onCollectionRowChange
                            })
                        })) : l.createElement(u.Va, null)
                    }, t
                }(l.Component),
                v = Object(p.c)("CollectionsListPresentation")(g);
            var f = Object(i.connect)(function(e) {
                    return {
                        isLoggedIn: Object(o.f)(e),
                        collections: e.collections.collections,
                        containingCollections: e.collections.containingCollections
                    }
                }, function(e) {
                    return Object(r.bindActionCreators)({
                        fetchCollectionsForVideo: a.e,
                        updateItemInCollection: a.f
                    }, e)
                })(v),
                k = n("JVvM");
            n.d(t, "b", function() {
                return f
            }), n.d(t, "a", function() {
                return k.a
            })
        },
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return f
            });
            var i, r = n("mrSG"),
                o = n("/7QA"),
                a = n("8rUg"),
                s = n.n(a),
                l = n("ZrRH"),
                c = n.n(l),
                d = n("6H22"),
                p = n.n(d),
                u = n("X7a7"),
                m = n("YhoA"),
                h = n("Pcnk"),
                g = n("mz1O"),
                v = o.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(i || (i = {}));
            var f = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var n, i, a, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, a = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, k(i)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return a && n === m.a.Hearthstone ? [4, b(a)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, C(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = o.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, y(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else o.o.store.dispatch(Object(u.b)());
                                    r.label = 7;
                                case 7:
                                    return [2, null]
                            }
                        })
                    })
                },
                k = function(e) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var t, n, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(g.a)()];
                                case 1:
                                    return t = r.sent(), (n = {})[e] = t[0]["Skill Group"][e - 1], [2, {
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
                                    return i = r.sent(), v.error(i, "Failed to load Counter-Strike skill group data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                b = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(g.b)()];
                                case 1:
                                    return t = r.sent(), n = {}, t[0].Class.forEach(function(e) {
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
                                    return i = r.sent(), v.error(i, "Failed to load Hearthstone class data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                C = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i, o, a, s, l, c, d, u, m, f;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = r.sent(), i = void 0, o = 0, a = n; o < a.length; o++)
                                        for (s in i = a[o])
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
                                    return f = r.sent(), v.error(f, "Failed to load Overwatch character data"), [2, null];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                },
                y = function(e, t, n) {
                    if (!t || !e) return null;
                    var i = t[e],
                        r = "https://ddragon.leagueoflegends.com/cdn/" + n + "/img/sprite/" + i.image.sprite;
                    return {
                        name: i.name,
                        label: Object(h.b)(h.a.LeagueChampion),
                        spriteDetails: {
                            imageWidth: i.image.w,
                            imageHeight: i.image.h,
                            spriteOffsetX: i.image.x,
                            spriteOffsetY: i.image.y,
                            spriteURL: r
                        }
                    }
                }
        },
        Pcnk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return o
            });
            var i, r = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(i || (i = {}));
            var o = function(e) {
                switch (e) {
                    case i.CSGOMap:
                        return Object(r.d)("Map", "CSGOMapFilter");
                    case i.CSGOSkillGroup:
                        return Object(r.d)("Rank", "CSGORankFilter");
                    case i.HearthstoneClass:
                        return Object(r.d)("Class", "HearthstoneClassFilter");
                    case i.HearthstoneMode:
                        return Object(r.d)("Mode", "HearthstoneModeFilter");
                    case i.LeagueChampion:
                        return Object(r.d)("Champion", "LeagueFilter");
                    case i.OverwatchCharacter:
                        return Object(r.d)("Hero", "OverwatchFilter");
                    default:
                        return ""
                }
            }
        },
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var r = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return r.a
            })
        },
        SiBg: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("8n0m"),
                a = n("b6Yk"),
                s = n("kRBY"),
                l = n("rj3Y"),
                c = n("uzvh");

            function d(e) {
                return function(t, n) {
                    return e({
                        store: {
                            dispatch: t,
                            getState: n
                        }
                    })
                }
            }
            n.d(t, "a", function() {
                return p
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return m
            }), n.d(t, "e", function() {
                return v
            }), n.d(t, "d", function() {
                return k
            }), n.d(t, "f", function() {
                return b
            });
            var p = "collections.COLLECTIONS_FETCHED",
                u = "collections.COLLECTIONS_FETCHED_FOR_VIDEO_ID",
                m = "collections.COLLECTIONS_FETCH_FAILED",
                h = "collections.COLLECTIONS_CREATE_FAILED",
                g = "collections.COLLECTIONS_UPDATE_FAILED";

            function v(e, t) {
                var n = this;
                return d(function(o) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, s, c;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100")];
                                case 1:
                                    return n = i.sent(), o.store.dispatch({
                                        type: p,
                                        collections: Object(l.d)(n.body)
                                    }), [4, a.a.getOrThrow("/v5/channels/" + e + "/collections/?limit=100&containing_item=" + l.b.Video + ":" + t)];
                                case 2:
                                    return s = i.sent(), o.store.dispatch({
                                        type: u,
                                        containingCollections: Object(l.d)(s.body),
                                        videoID: t
                                    }), [3, 4];
                                case 3:
                                    return c = i.sent(), r.j.error(c, "Failed to fetch collections"), o.store.dispatch({
                                        type: m,
                                        errorType: "Fetch Failed",
                                        errorMessage: "Fetching collections for channel " + e + " and video " + t + " failed."
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })
            }
            var f = function(e, t) {
                return a.a.postOrThrow(e, {
                    body: t
                })
            };

            function k(e, t, n, a) {
                var c = this;
                return d(function(d) {
                    return i.__awaiter(c, void 0, void 0, function() {
                        var c, m, g, v, k, b, C, y;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    c = d.store.getState(), m = c.collections, g = Object(s.e)(c), v = g ? g.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, f("/v5/channels/" + e + "/collections/", {
                                        title: t
                                    })];
                                case 2:
                                    return k = i.sent(), b = Object(l.c)(k.body), m.collections = [b].concat(m.collections), d.store.dispatch({
                                        type: p,
                                        collections: m.collections
                                    }), Object(o.b)({
                                        channelID: e,
                                        playlistID: b.id,
                                        userID: v,
                                        title: b.title
                                    }), C = {
                                        type: l.b.Video,
                                        id: n
                                    }, [4, f("/v5/collections/" + b.id + "/items", C)];
                                case 3:
                                    return i.sent(), m.containingCollections = [b].concat(m.containingCollections), d.store.dispatch({
                                        type: u,
                                        containingCollections: m.containingCollections,
                                        videoID: n
                                    }), Object(o.a)({
                                        channelID: e,
                                        itemID: n,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: b.id,
                                        userID: v,
                                        place: a
                                    }), [3, 5];
                                case 4:
                                    return y = i.sent(), r.j.error(y, "Failed to add new collection with video"), d.store.dispatch({
                                        type: h,
                                        errorType: "Create Failed",
                                        errorMessage: "Creating collections for channel " + e + " and video " + n + " with title " + t + "."
                                    }), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                })
            }

            function b(e, t, n, p) {
                var m = this;
                return d(function(d) {
                    return i.__awaiter(m, void 0, void 0, function() {
                        var m, h, v, k, b, C, y, w, _;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    m = d.store.getState(), h = Object(c.a)(m), v = Object(s.e)(m), k = v ? v.id : "", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 6, , 7]), h.map(function(e) {
                                        return e.id
                                    }).includes(e.id) ? (b = JSON.stringify({
                                        type: l.b.Video,
                                        id: t
                                    }), C = btoa(b), [4, a.a.deleteOrThrow("/v5/collections/" + e.id + "/items/" + C)]) : [3, 3];
                                case 2:
                                    return i.sent(), w = h.filter(function(t) {
                                        return t.id !== e.id
                                    }), d.store.dispatch({
                                        type: u,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(o.c)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: k
                                    }), [3, 5];
                                case 3:
                                    return y = {
                                        type: l.b.Video,
                                        id: t
                                    }, [4, f("/v5/collections/" + e.id + "/items", y)];
                                case 4:
                                    i.sent(), w = h.concat([e]), d.store.dispatch({
                                        type: u,
                                        containingCollections: w,
                                        videoID: t
                                    }), Object(o.a)({
                                        channelID: n,
                                        itemID: t,
                                        itemPosition: -1,
                                        itemType: l.b.Video,
                                        playlistID: e.id,
                                        userID: k,
                                        place: p
                                    }), i.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return _ = i.sent(), r.j.error(_, "Failed to fetch collections"), d.store.dispatch({
                                        type: g,
                                        errorType: "Update Failed",
                                        errorMessage: "Updating collection " + e.id + " for channel " + n + " and video " + t + " failed."
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                })
            }
        },
        WfYB: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("fvjX"),
                s = n("/7QA"),
                l = n("ZDlU"),
                c = n("8/mp"),
                d = n("yR8l"),
                p = n("QVaV"),
                u = n("2xye"),
                m = n("tuvy"),
                h = n("GnwI"),
                g = n("hkkJ"),
                v = n("RsJ2"),
                f = n("2iEm"),
                k = n("MxAq"),
                b = n("Ue10"),
                C = 0,
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.computeViewsMessage = function() {
                            var e = t.props.totalViews || C;
                            return 0 === e || 1 === e ? Object(s.d)("{viewCount, plural, one {# view}  other {# views}}", {
                                viewCount: e
                            }, "CollectionCard") : Object(s.d)("{viewCount} views", {
                                viewCount: Object(s.f)(e)
                            }, "CollectionCard")
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.d)("By {channelName}", {
                            channelName: o.createElement(b.T, {
                                "data-test-selector": "collection-card-channel-link",
                                to: this.props.channelLinkTo,
                                hoverUnderlineNone: !0
                            }, this.props.channelDisplayName)
                        }, "ChannelCollections");
                        return o.createElement(b.G, r.__assign({
                            key: this.props.title
                        }, Object(b.bc)(this.props)), o.createElement(b.Na, {
                            position: b.db.Relative
                        }, o.createElement(f.a, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: u.PageviewContent.CollectionCard,
                                    medium: u.PageviewMedium.ChannelCollections
                                }
                            },
                            title: this.props.title,
                            "data-test-selector": 'collection-card-overlay-link"'
                        }, o.createElement(k.a, {
                            alt: this.props.title,
                            sizes: [{
                                size: "320px"
                            }],
                            src: this.props.imageSrc,
                            videoCount: this.props.videoCount
                        }))), o.createElement(b.H, {
                            "data-test-selector": "collection-card-body"
                        }, o.createElement(b.Va, {
                            display: b.W.Flex,
                            flexDirection: b.Y.Column,
                            flexWrap: b.Z.NoWrap,
                            padding: {
                                top: .5
                            }
                        }, o.createElement(b.V, {
                            fontSize: b.Aa.Size5,
                            ellipsis: !0
                        }, o.createElement(b.T, {
                            to: {
                                pathname: this.props.linkTo,
                                state: {
                                    content: u.PageviewContent.CollectionCard,
                                    medium: u.PageviewMedium.ChannelCollections
                                }
                            },
                            "data-test-selector": "collection-card-title-link",
                            hoverUnderlineNone: !0
                        }, this.props.title)), o.createElement(b.V, {
                            color: b.O.Alt2,
                            ellipsis: !0
                        }, o.createElement(b.V, {
                            type: b.Nb.Span
                        }, e), o.createElement(b.V, {
                            type: b.Nb.Span
                        }, " · " + this.computeViewsMessage())))))
                    }, t
                }(o.Component),
                w = Object(h.c)("CollectionCard", {
                    autoReportInteractive: !0
                })(y),
                _ = n("VwyG");
            ! function(e) {
                e[e.NoCollections = 0] = "NoCollections", e[e.NoCollectionsUpSell = 1] = "NoCollectionsUpSell"
            }(i || (i = {}));
            var E, I = function(e) {
                    var t;
                    return t = e.canEdit ? o.createElement("div", {
                        "data-test-selector": i.NoCollectionsUpSell
                    }, o.createElement(b.V, {
                        type: b.Nb.H4
                    }, Object(s.d)("Create a collection of your videos from Video Producer.", "collection-page")), o.createElement(b.Va, {
                        padding: {
                            top: 2
                        }
                    }, o.createElement(b.z, {
                        type: b.F.Hollow,
                        linkTo: "/" + e.channelLogin + "/manager/collections"
                    }, Object(s.d)("Go to Video Producer", "collection-page")))) : o.createElement(b.V, {
                        type: b.Nb.H4,
                        italic: !0,
                        "data-test-selector": i.NoCollections
                    }, Object(s.d)("No collections found.", "collection-page")), o.createElement(b.xb, {
                        color: b.O.Alt2,
                        textAlign: b.Jb.Center
                    }, t)
                },
                S = function(e) {
                    return o.createElement(_.a, {
                        ownerLogin: e.channelLogin,
                        permittedRoles: {
                            owner: !0,
                            editor: !0,
                            staff: !0
                        }
                    }, function(t) {
                        var n = t.permitted;
                        return o.createElement(I, {
                            canEdit: n,
                            channelLogin: e.channelLogin
                        })
                    })
                },
                x = n("cERj"),
                O = n("IhxQ");
            ! function(e) {
                e[e.Filters = 0] = "Filters"
            }(E || (E = {}));
            var L = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading || (this.props.data.user && this.props.data.user.displayName && s.o.setPageTitle(this.props.data.user.displayName), this.props.latencyTracking.reportInteractive())
                    }, t.prototype.render = function() {
                        if (!this.props.data.error && this.props.data.user) {
                            var e = this.props.data.user,
                                t = [];
                            e.collections && e.collections.edges && e.collections.edges.forEach(function(e) {
                                e && e.node && t.push(e.node)
                            });
                            var n = null;
                            return Object(m.a)() || (n = o.createElement(b.Va, {
                                alignItems: b.f.End,
                                "data-test-selector": E.Filters,
                                display: b.W.Flex,
                                flexDirection: b.Y.Row,
                                justifyContent: b.Ua.Between,
                                padding: {
                                    bottom: 2
                                }
                            }, Object(m.b)() ? o.createElement(x.a, {
                                channelLogin: this.props.channelLogin
                            }) : o.createElement("div", null), o.createElement(v.a, {
                                channelLogin: this.props.channelLogin
                            }))), o.createElement("div", null, n, this.renderCollections(e, t, this.props.data.currentUser))
                        }
                        if (this.props.data.loading && !this.props.data.user) {
                            for (var i = [], r = 0; r < 12; r++) i.push(o.createElement(b.Va, {
                                key: "collection-placeholder-" + r,
                                padding: {
                                    bottom: 2
                                },
                                "data-test-selector": "collections-placeholder"
                            }, o.createElement(b.Va, {
                                margin: {
                                    bottom: .5
                                }
                            }, o.createElement(b.o, {
                                ratio: b.p.Aspect16x9
                            }, o.createElement(b.cb, null))), o.createElement(b.V, null, o.createElement(b.cb, {
                                width: 150
                            })), o.createElement(b.V, {
                                fontSize: b.Aa.Size7
                            }, o.createElement(b.cb, {
                                width: 100
                            }))));
                            return o.createElement(b.Tb, {
                                gutterSize: b.Vb.Small,
                                childWidth: b.Ub.Medium,
                                placeholderItems: 20
                            }, i)
                        }
                        return o.createElement(b.Va, {
                            margin: {
                                top: 5
                            }
                        }, o.createElement(l.a, {
                            message: Object(s.d)("These collections are temporarily unavailable.", "channel-collections")
                        }))
                    }, t.prototype.renderCollections = function(e, t, n) {
                        var i, r = this;
                        if (0 === t.length) return o.createElement(b.Va, {
                            padding: {
                                y: 5
                            }
                        }, o.createElement(S, {
                            channelLogin: this.props.channelLogin
                        }));
                        if (Object(m.a)() || Object(m.b)()) {
                            var a = !(!n || n.id !== e.id) || !(!e.self || !e.self.isEditor);
                            i = t.map(function(e) {
                                return o.createElement(g.a, {
                                    collection: e,
                                    key: e.id,
                                    tracking: {
                                        content: u.PageviewContent.CollectionCarousel,
                                        location: u.PageviewLocation.ChannelCollections,
                                        medium: u.PageviewMedium.ChannelCollections,
                                        source: {
                                            source_channel: r.props.channelLogin
                                        },
                                        itemType: u.TwitchDataType.Collection
                                    },
                                    userCanEdit: a
                                })
                            })
                        } else {
                            var s = t.map(function(t, n) {
                                return o.createElement(b.Va, {
                                    key: t.id,
                                    margin: {
                                        bottom: 2
                                    }
                                }, o.createElement(w, {
                                    channelLinkTo: "/" + e.login,
                                    channelDisplayName: Object(p.a)(e.login, e.displayName),
                                    imageSrc: t.thumbnailURL || void 0,
                                    linkTo: "/collections/" + t.id,
                                    title: t.title,
                                    totalViews: t.viewCount,
                                    videoCount: t.items.totalCount,
                                    "data-a-target": "collection-card-" + n
                                }))
                            });
                            i = o.createElement(b.Tb, {
                                gutterSize: b.Vb.Small,
                                childWidth: b.Ub.Large,
                                placeholderItems: 20
                            }, s)
                        }
                        var l = !this.props.data.loading && !this.props.data.error && !!e.collections.pageInfo.hasNextPage;
                        return o.createElement(o.Fragment, null, i, o.createElement(c.a, {
                            enabled: l,
                            loadMore: this.props.loadMore
                        }))
                    }, t
                }(o.Component),
                V = Object(a.compose)(Object(h.c)("ChannelCollectionsContent"), Object(d.a)(O, {
                    options: function(e) {
                        return {
                            variables: {
                                ownerLogin: e.channelLogin,
                                limit: Object(m.a)() || Object(m.b)() ? 4 : 30
                            }
                        }
                    },
                    props: function(e) {
                        return r.__assign({}, e, {
                            loadMore: function() {
                                if (e.data.user && e.data.user.collections) {
                                    var t = e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)];
                                    if (t) return e.data.fetchMore({
                                        query: O,
                                        variables: r.__assign({}, e.data.variables, {
                                            cursor: t.cursor
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                user: r.__assign({}, n.user, {
                                                    collections: r.__assign({}, n.user.collections, {
                                                        edges: e.user.collections.edges.concat(n.user.collections.edges)
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                }))(L);
            n.d(t, "TestSelectors", function() {
                return E
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_SELECTOR", function() {
                return "collections-placeholder"
            }), n.d(t, "COLLECTIONS_PLACEHOLDER_LIMIT", function() {
                return 12
            }), n.d(t, "ChannelCollectionsContentComponent", function() {
                return L
            }), n.d(t, "ChannelCollectionsContent", function() {
                return V
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                o = n("/7QA"),
                a = n("b6Yk"),
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
                                        e = o.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), n = o.o.intl.getLanguageCode(), s = l(n), d = a.a.getAPIURL("/api/lol/champions?" + r.stringify({
                                            locale: s,
                                            on_site: 1
                                        })).toString(), [4, a.a.get(d)];
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
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, a;
                        return i.__generator(this, function(i) {
                            return n = new Set(v()), t ? n.add(e) : n.delete(e), a = Array.from(n), o.l.set(d, a), r(Object(c.i)(a)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return o.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function v() {
                return o.l.get(d, [])
            }
        },
        XA5B: function(e, t, n) {},
        XEwr: function(e, t, n) {
            "use strict";

            function i(e) {
                if (!e || 0 === e.edges.length) return [];
                var t = [];
                return e.edges.forEach(function(e) {
                    e.node.id && t.push(e.node)
                }), t
            }

            function r(e) {
                return "slug" in e
            }
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return r
            })
        },
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
            var i, r, o, a, s = n("mrSG"),
                l = n("TSYQ"),
                c = n("q1tI"),
                d = n("/7QA"),
                p = n("oB8h"),
                u = n("Ue10");
            n("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(a || (a = {}));
            var m = ((i = {})[p.a.Live] = "stream-type-indicator--live", i[p.a.Premiere] = "stream-type-indicator--premiere", i[p.a.Rerun] = "stream-type-indicator--rerun", i[p.a.WatchParty] = "stream-type-indicator--rerun", i),
                h = ((r = {})[p.a.Premiere] = u.nb.VideoPremiere, r[p.a.Rerun] = u.nb.VideoRerun, r[p.a.WatchParty] = u.nb.VideoRerun, r),
                g = ((o = {})[p.a.Premiere] = u.ob.Live, o[p.a.Rerun] = u.ob.Inherit, o[p.a.WatchParty] = u.ob.Inherit, o),
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
                            "data-test-selector": a.HostingDot
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
                return a
            }), n.d(t, "a", function() {
                return v
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
            var i = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                a = n("GFmA"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(a.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || o.o.config.defaultStreamPreviewURL,
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
                                src: this.props.clip.game.boxArtURL || o.a.defaultBoxArtURL,
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
                }(r.Component)
        },
        cRsL: function(e, t, n) {},
        eqgM: function(e, t, n) {
            "use strict";
            var i, r, o = n("/MKj"),
                a = n("mrSG"),
                s = n("q1tI"),
                l = n("/7QA"),
                c = n("GnwI"),
                d = n("TSYQ"),
                p = n("17x9"),
                u = n("Ue10");
            n("A7Y/");
            var m = "carousel-content",
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            hasBeenVisible: !1
                        }, t.moveCarouselToCardIndex = function(e) {
                            if (t.props.children && !(t.props.children.length <= 1)) {
                                var n = t.getNumberOfVisibleElements();
                                t.props.children.length < n || (e < t.props.children.length && e > t.props.children.length - n ? t.setState({
                                    currentElementIndex: t.props.children.length - n
                                }) : t.setState({
                                    currentElementIndex: e
                                }))
                            }
                        }, t.moveCarouselForward = function() {
                            if (!t.isForwardButtonDisabled() && t.props.children) {
                                var e = t.getNumberOfVisibleElements();
                                t.state.currentElementIndex + 2 * e > t.props.children.length ? t.setState({
                                    currentElementIndex: t.props.children.length - e
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
                            if (!t.carouselContainerRef) return !1;
                            if (t.props.children) {
                                var e = 0,
                                    n = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                                return n && (e = n.childElementCount), t.getLastVisibleIndex() >= e
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getLastVisibleIndex = function() {
                            return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                        }, t.getNumberOfVisibleElements = function() {
                            var e = t.carouselContainerRef.getBoundingClientRect(),
                                n = e.left,
                                i = e.right - n,
                                r = t.getVideoCardEndPadding();
                            return Math.floor((i + r) / t.getChildWidth())
                        }, t.refHandler = function(e) {
                            return t.carouselContainerRef = e
                        }, t.getChildWidth = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                        }, t.getVideoCardEndPadding = function() {
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            if (!e || 0 === e.children.length) return 0;
                            var n = window.getComputedStyle(e.children[0]).paddingRight || "";
                            return 2 * parseInt(n, 10) || 0
                        }, t.pixelOffset = function() {
                            return t.getChildWidth() * t.state.currentElementIndex * -1
                        }, t.transformString = function() {
                            return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        var e = this.context.registerReceiver;
                        e && (this.unregisterScrollHandler = e(this)), null !== this.props.children && this.checkVisible()
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.children && null !== this.props.children && this.checkVisible(), (!e.options && this.props.options || e.options && this.props.options && this.props.options.videoIndex !== e.options.videoIndex) && this.moveCarouselToCardIndex(this.props.options.videoIndex)
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregisterScrollHandler && this.unregisterScrollHandler()
                    }, t.prototype.render = function() {
                        return s.createElement(u.Na, {
                            margin: {
                                y: 1
                            },
                            position: u.db.Relative
                        }, s.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, s.createElement(u.Va, {
                            className: "preview-card-carousel__child-container",
                            overflow: u.Ya.Hidden,
                            position: u.db.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, s.createElement(u.Na, {
                            margin: {
                                bottom: 1
                            }
                        }, s.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, s.createElement(u.Tb, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || u.Ub.Large,
                            gutterSize: u.Vb.Small,
                            "data-js-selector": m
                        }, this.props.children)))), s.createElement(u.Va, {
                            className: "preview-card-carousel__nav",
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            position: u.db.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, s.createElement(k, {
                            direction: g.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        })), s.createElement(u.Va, {
                            className: "preview-card-carousel__nav",
                            display: u.W.Flex,
                            alignItems: u.f.Center,
                            position: u.db.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, s.createElement(k, {
                            direction: g.DirectionNext,
                            disabled: !this.props.children || this.isForwardButtonDisabled(),
                            onClickHandler: this.moveCarouselForward
                        }))))
                    }, t.prototype.checkVisible = function(e) {
                        this.props.children && this.props.children.length > 0 && !this.state.hasBeenVisible && function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect(),
                                n = window.innerWidth,
                                i = window.innerHeight;
                            return !(t.right < 0 || t.bottom < 0 || t.left > n || t.top > i)
                        }(this.carouselContainerRef) && this.props.onFirstVisible()
                    }, t.contextTypes = {
                        registerReceiver: p.func
                    }, t
                }(s.Component),
                g = {
                    DirectionPrevious: "previous",
                    DirectionNext: "next"
                },
                v = ((i = {})[g.DirectionPrevious] = "previous", i[g.DirectionNext] = "next", i),
                f = ((r = {})[g.DirectionPrevious] = u.nb.AngleLeft, r[g.DirectionNext] = u.nb.AngleRight, r),
                k = function(e) {
                    var t, n = v[e.direction],
                        i = ((t = {})[g.DirectionPrevious] = Object(l.d)("previous", "CarouselNavButton"), t[g.DirectionNext] = Object(l.d)("next", "CarouselNavButton"), t),
                        r = d("preview-card-carousel__button", "preview-card-carousel__button--" + n, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return s.createElement(u.Va, {
                        className: r,
                        position: u.db.Relative,
                        display: u.W.Flex,
                        alignItems: u.f.Stretch
                    }, s.createElement(u.A, {
                        ariaLabel: i[e.direction],
                        blurAfterClick: !0,
                        "data-test-selector": n + "-button",
                        disabled: e.disabled,
                        icon: f[e.direction],
                        onClick: e.onClickHandler,
                        size: u.B.Large
                    }))
                },
                b = n("bdIb"),
                C = n("XEwr"),
                y = n("RXle"),
                w = 10,
                _ = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], n = [], i = [], r = 0, o = e; r < o.length; r++) {
                                    var s = o[r];
                                    n.push(s.id), i.push(s.viewCount)
                                }
                                l.n.trackItemSectionLoad(a.__assign({
                                    carousel_content: t.props.tracking.content,
                                    location: t.props.tracking.location,
                                    rendered_item_count: e.length,
                                    rendered_item_list: n,
                                    rendered_item_types: [t.props.tracking.itemType],
                                    rendered_items_viewcounts: i
                                }, t.props.tracking.source)), t.setState({
                                    hasTrackedItemSectionLoad: !0
                                })
                            }
                        }, t.onPreviewCardClick = function(e) {
                            if (t.props.videos) {
                                var n = t.props.videos[e];
                                l.n.trackItemSectionClick(a.__assign({
                                    carousel_content: t.props.tracking.content,
                                    item_id: n.id,
                                    item_index: e,
                                    item_type: t.props.tracking.itemType,
                                    item_viewcount: n.viewCount,
                                    location: t.props.tracking.location
                                }, t.props.tracking.source)), t.props.scrollToCurrentlyWatching && t.props.videos.length > 0 && t.setCarouselOptions({
                                    videoIndex: e
                                })
                            }
                        }, t.setCarouselOptions = function(e) {
                            t.props.videos && t.props.videos.length > 0 && t.setState({
                                scrollToOptions: e
                            })
                        }, t.getCurrentlyWatchingVideoIndex = function() {
                            var e = 0;
                            if (t.props.videos && t.props.videos.length > 0)
                                for (var n = 0; n < t.props.videos.length; n++) {
                                    if (t.props.videos[n].id === t.props.currentlyWatchingVideoID) {
                                        e = n;
                                        break
                                    }
                                }
                            return e
                        }, t.getVideoCards = function() {
                            var e = t.props.videos;
                            if (null === e) {
                                for (var n = [], i = 0; i < w; i++) n.push(s.createElement(y.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + i
                                }));
                                return n
                            }
                            var r = [];
                            if (t.props.spotlight) {
                                var o = s.createElement(y.VideoPreviewCard, {
                                    key: "spotlight",
                                    collectionID: t.props.collectionID,
                                    topBar: {
                                        title: t.props.spotlight.title,
                                        subTitle: t.props.spotlight.subTitle
                                    },
                                    context: t.props.listContext,
                                    tracking: {
                                        content: t.props.tracking.content,
                                        content_index: r.length,
                                        medium: t.props.tracking.medium
                                    },
                                    video: t.props.spotlight.card,
                                    hideTags: t.props.hideTags
                                });
                                r.push(o)
                            }
                            var a = r.length;
                            if (t.props.currentlyWatchingVideoID && t.props.renderCurrentlyWatchingCard && t.props.scrollToCurrentlyWatching)
                                for (var l = t.getCurrentlyWatchingVideoIndex(), c = 0; c < e.length; c++) {
                                    var d = e[c];
                                    t.props.firstPageLoaded || !(c < l || c > l + w) ? Object(C.a)(d) || r.push(s.createElement(y.VideoPreviewCard, {
                                        context: t.props.listContext,
                                        collectionID: t.props.collectionID,
                                        onClick: t.onPreviewCardClick,
                                        key: "video-" + c,
                                        tracking: {
                                            content: t.props.tracking.content,
                                            content_index: c,
                                            medium: t.props.tracking.medium
                                        },
                                        video: d,
                                        multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                        listPosition: t.getPositionLabel(c),
                                        topBar: t.getPositionBanner(c),
                                        hideDuration: t.willRenderPositionBanner(c),
                                        hideTags: t.props.hideTags
                                    })) : r.push(s.createElement(y.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + c
                                    }))
                                } else
                                    for (c = 0; c < e.length; c++)
                                        if (c + a < w || t.props.firstPageLoaded) {
                                            d = e[c];
                                            if (Object(C.a)(d)) {
                                                if (d.slug === t.props.currentlyWatchingVideoID) continue;
                                                r.push(s.createElement(b.a, {
                                                    context: t.props.listContext,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: a + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    clip: d
                                                }))
                                            } else {
                                                if (d.id === t.props.currentlyWatchingVideoID && !t.props.renderCurrentlyWatchingCard) continue;
                                                r.push(s.createElement(y.VideoPreviewCard, {
                                                    context: t.props.listContext,
                                                    collectionID: t.props.collectionID,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: a + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    video: d,
                                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                                    listPosition: t.getPositionLabel(c),
                                                    topBar: t.getPositionBanner(c),
                                                    hideDuration: t.willRenderPositionBanner(c),
                                                    hideTags: t.props.hideTags
                                                }))
                                            }
                                        } else r.push(s.createElement(y.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + c
                                        }));
                            return r
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var n = t.getCurrentlyWatchingVideoIndex(),
                                    i = e === n,
                                    r = e === n + 1,
                                    o = Object(l.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return i ? {
                                    title: Object(l.d)("Now playing", "VideoCarousel"),
                                    subTitle: o,
                                    selected: !0
                                } : r ? {
                                    title: Object(l.d)("Up next", "VideoCarousel"),
                                    subTitle: o
                                } : void 0
                            }
                        }, t.willRenderPositionBanner = function(e) {
                            if (!t.props.renderPositionBanner || !t.props.videos) return !1;
                            var n = t.getCurrentlyWatchingVideoIndex();
                            return e === n || e === n + 1
                        }, t.getPositionLabel = function(e) {
                            if (t.props.renderPositionLabel && !t.willRenderPositionBanner(e) && t.props.videos) return {
                                position: e + 1,
                                totalVideos: t.props.videos.length
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID && !this.state.scrollToOptions && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        null === e.videos && null !== this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID ? this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        }) : this.props.videos && this.props.scrollToCurrentlyWatching && this.props.currentlyWatchingVideoID !== e.currentlyWatchingVideoID && this.setCarouselOptions({
                            videoIndex: this.getCurrentlyWatchingVideoIndex()
                        })
                    }, t.prototype.render = function() {
                        return s.createElement(h, {
                            options: this.state.scrollToOptions,
                            cardWidth: this.props.videoCardSize,
                            onFirstVisible: this.handleFirstVisible
                        }, this.getVideoCards())
                    }, t
                }(s.Component),
                E = Object(c.c)("VideoCarousel", {
                    autoReportInteractive: !0
                })(_);
            n.d(t, "a", function() {
                return I
            });
            var I = Object(o.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(E)
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
            var r = {};
            i.definitions = i.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(n("iiOx").definitions)), e.exports = i
        },
        hkkJ: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                s = n("GFmA"),
                l = n("DMoW"),
                c = n("tuvy"),
                d = n("GnwI"),
                p = n("NAv5");
            ! function(e) {
                e.KeepWatching = "keep-watching", e.WatchNext = "watch-next"
            }(i || (i = {}));
            var u = .8;
            var m = n("6h5w"),
                h = n("eqgM"),
                g = n("Ue10");
            n.d(t, "a", function() {
                return k
            });
            var v;
            ! function(e) {
                e.Metadata = "collection-metadata", e.PlayAllButton = "play-all-button", e.TitleLink = "collection-title-link"
            }(v || (v = {}));
            var f = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props.collection,
                            n = this.getCollectionVideos();
                        if (n && 0 === n.length) return null;
                        var r = 0,
                            d = t && t.type === l.l.SERIES && n && n.length >= 4;
                        if (t && n && d && Object(c.a)() && Object(c.c)()) {
                            var m = function(e) {
                                for (var t = e.items.edges, n = t.length, r = null, o = 0; o < t.length; o++) {
                                    var a = t[o];
                                    if (a) {
                                        var s = a.node,
                                            l = s.self && s.self.viewingHistory && s.self.viewingHistory;
                                        if (l && l.updatedAt && l.position)
                                            if (r) {
                                                var c = new Date(r.viewedAt),
                                                    d = new Date(l.updatedAt);
                                                Object(p.isAfter)(d, c) && (r = {
                                                    index: o,
                                                    value: s,
                                                    viewedAt: l.updatedAt,
                                                    viewingPosition: l.position
                                                })
                                            } else r = {
                                                index: o,
                                                value: s,
                                                viewedAt: l.updatedAt,
                                                viewingPosition: l.position
                                            }
                                    }
                                }
                                if (!r) return null;
                                if (r.viewingPosition / r.value.lengthSeconds > u) {
                                    var m = r.index + 1;
                                    if (m < n) {
                                        var h = t[m];
                                        if (h && h.node) return {
                                            item: h.node,
                                            position: m,
                                            type: i.WatchNext
                                        }
                                    }
                                }
                                return {
                                    item: r.value,
                                    position: r.index,
                                    type: i.KeepWatching
                                }
                            }(t);
                            if (m && (e = {
                                    card: m.item,
                                    title: function(e) {
                                        switch (e) {
                                            case i.KeepWatching:
                                                return Object(a.d)("Continue Watching", "SeriesResumeRecommendation");
                                            case i.WatchNext:
                                                return Object(a.d)("Watch Next", "SeriesResumeRecommendation");
                                            default:
                                                return e
                                        }
                                    }(m.type)
                                }, r = m.position + 1), !e) e = {
                                card: n[n.length - 1],
                                title: Object(a.d)("Latest Video", "CollectionCarousel")
                            }, r = n.length;
                            e.subTitle = Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                position: r,
                                totalVideos: n.length
                            }, "CollectionCarousel")
                        }
                        return o.createElement(o.Fragment, null, this.renderCarouselHeader(), o.createElement(h.a, {
                            collectionID: t ? t.id : void 0,
                            listContext: s.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            spotlight: e,
                            tracking: {
                                content: this.props.tracking.content,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.props.tracking.source,
                                itemType: this.props.tracking.itemType
                            },
                            videos: n,
                            renderPositionLabel: !!e
                        }))
                    }, t.prototype.renderCarouselHeader = function() {
                        var e = this.props.collection;
                        return e ? o.createElement(g.Va, null, o.createElement(g.Va, {
                            display: g.W.Flex,
                            flexDirection: g.Y.Row
                        }, o.createElement(g.Va, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(g.T, {
                            "data-test-selector": v.TitleLink,
                            to: "/collections/" + e.id,
                            type: g.U.Inherit
                        }, o.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(c.a)() && o.createElement(g.z, {
                            type: g.F.Hollow,
                            size: g.D.Small,
                            icon: g.nb.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": v.PlayAllButton
                        }, Object(a.d)("Play all", "LatestCollectionCarousel"))), o.createElement(g.V, {
                            color: g.O.Alt2,
                            type: g.Nb.Span,
                            "data-test-selector": v.Metadata
                        }, this.renderSubTitle(e))) : o.createElement(g.cb, {
                            width: 250,
                            lineCount: 1
                        })
                    }, t.prototype.renderSubTitle = function(e) {
                        var t = e.items ? e.items.totalCount : 0,
                            n = Object(a.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                                videoCountText: t
                            }, "LatestCollectionCarousel");
                        return this.props.subTitle ? o.createElement(o.Fragment, null, this.props.subTitle, " · ", n) : e.description ? o.createElement(o.Fragment, null, e.description, " · ", n) : n
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.collection;
                        if (!e) return null;
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && "" !== e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(o.Component),
                k = Object(d.c)("CollectionCarousel", {
                    autoReportInteractive: !0
                })(f)
        },
        izJ5: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollectionConnection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CollectionsConnection"
                        }
                    },
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
                                                value: "PreviewCollection"
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
                }],
                loc: {
                    start: 0,
                    end: 250
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-fragment.gql"\nfragment PreviewCollectionConnection on CollectionsConnection {\nedges {\ncursor\nnode {\n...PreviewCollection\n}\n}\npageInfo {\nhasNextPage\n}\n}',
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
            }(n("jr2J").definitions)), e.exports = i
        },
        jr2J: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCollection"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "FragmentSpread",
                            name: {
                                kind: "Name",
                                value: "CollectionFields"
                            },
                            directives: []
                        }, {
                            kind: "Field",
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
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionConnectionFields"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 350
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/collection-fields-fragment.gql"\n#import "twilight/features/video-carousel/components/collection-carousel/models/collection-connection-fields-fragment.gql"\nfragment PreviewCollection on Collection {\n...CollectionFields\nitems (first:30) {\n...CollectionConnectionFields\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function o(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(o(n("msok").definitions)), i.definitions = i.definitions.concat(o(n("+Vfn").definitions)), e.exports = i
        },
        "kF1+": function(e, t, n) {},
        kVMo: function(e, t, n) {},
        lRiI: function(e, t, n) {},
        m493: function(e, t, n) {},
        msok: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "CollectionFields"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection"
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
                                value: "description"
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
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "thumbnailURL"
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
                                value: "title"
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
                                value: "updatedAt"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 221
                }
            };
            n.loc.source = {
                body: "fragment CollectionFields on Collection {\nid\ndescription\nowner {\nid\nlogin\n}\nthumbnailURL(width: 320 height: 180) # only used for legacy CollectionCard\ntitle\ntype\nupdatedAt\nviewCount # only used for legacy CollectionCard\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        mz1O: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "c", function() {
                return a
            }), n.d(t, "d", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            }), n.d(t, "f", function() {
                return c
            });
            var i = n("mrSG"),
                r = function() {
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
                o = function() {
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
                a = function() {
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
        rj3Y: function(e, t, n) {
            "use strict";
            var i, r, o = function(e, t, n) {
                var i = e.collectionItems || [];
                return Boolean(i.find(function(e) {
                    return e.ObjectType === n && e.id === t
                }))
            };
            ! function(e) {
                e.Public = "public"
            }(i || (i = {})),
            function(e) {
                e.Staff = "staff"
            }(r || (r = {}));
            var a, s, l = function(e) {
                return {
                    __typename: "Collection",
                    id: e._id,
                    title: e.title,
                    state: i.Public,
                    thumbnailSrc: e.thumbnails && e.thumbnails.small,
                    totalDuration: e.total_duration,
                    itemsCount: e.items_count
                }
            };

            function c(e) {
                return e.collections.map(function(e) {
                    return l(e)
                })
            }! function(e) {
                e.Video = "video"
            }(a || (a = {})),
            function(e) {
                e.PostCreateModal = "post-create", e.EditModal = "edit", e.CollectionManager = "collection_manager", e.VideoProducerRow = "video_producer_row"
            }(s || (s = {})), n.d(t, !1, function() {
                return o
            }), n.d(t, !1, function() {
                return i
            }), n.d(t, !1, function() {
                return r
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return s
            })
        },
        u3aQ: function(e, t, n) {
            e.exports = n.p + "assets/missing-video-thumb-160x90-6d63306a771e0e239cf4.png"
        },
        uzvh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = n("mrSG"),
                r = n("/7QA"),
                o = n("SiBg");

            function a(e) {
                return e.collections.containingCollections
            }
            r.o.store.registerReducer("collections", function(e, t) {
                var n;
                switch (void 0 === e && (e = {
                    collections: [],
                    videoID: "",
                    containingCollections: [],
                    errors: {}
                }), t.type) {
                    case o.a:
                        return i.__assign({}, e, {
                            collections: t.collections
                        });
                    case o.b:
                        return i.__assign({}, e, {
                            videoID: t.videoID,
                            containingCollections: t.containingCollections
                        });
                    case o.c:
                        return i.__assign({}, e, {
                            errors: i.__assign({}, e.errors, (n = {}, n[t.errorType] = t.errorMessage, n))
                        });
                    default:
                        return e
                }
            })
        },
        vDRX: function(e, t, n) {},
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = "0h0m1s";

            function r(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        },
        zHWM: function(e, t, n) {
            "use strict";
            n("uzvh")
        }
    }
]);