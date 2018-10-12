(window.webpackJsonp = window.webpackJsonp || []).push([
    [122], {
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
        "+Zgt": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "PreviewCardClip"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Clip"
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
                                value: "slug"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 245
                }
            };
            n.loc.source = {
                body: "fragment PreviewCardClip on Clip {\nid\nslug\ntitle\nviewCount\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
                a = n("2xye"),
                o = n("gAd6"),
                s = function() {
                    var e = r.n.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                l = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: s()
                    })
                },
                c = function(e) {
                    r.n.trackItemSectionClick({
                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
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
                                        return a.TwitchDataType.Game
                                    }), d = l.map(function() {
                                        return null
                                    }), r.n.trackItemSectionLoad({
                                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
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
        "0Nms": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "CurrentCollectionCarousel"
                    },
                    variableDefinitions: [{
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
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
                                            value: "100"
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
                                }, {
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionFields"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 396
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/collection-fields-fragment.gql"\n#import "twilight/features/video-carousel/components/collection-carousel/models/collection-connection-fields-fragment.gql"\nquery CurrentCollectionCarousel($collectionID: ID!) {\ncollection(id: $collectionID) {\nitems (first:100) {\n...CollectionConnectionFields\n}\n...CollectionFields\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("msok").definitions)), i.definitions = i.definitions.concat(a(n("+Vfn").definitions)), e.exports = i
        },
        "0T/G": function(e, t) {},
        "5NSO": function(e, t, n) {},
        "6H22": function(e, t, n) {
            e.exports = n.p + "assets/overwatch-chars-fe0fc1dca7ed645de58c.png"
        },
        "6h5w": function(e, t, n) {
            "use strict";
            var i, r = n("q1tI"),
                a = n("9C/b"),
                o = n("/7QA"),
                s = n("vRsq"),
                l = n("tuvy"),
                c = n("Ue10"),
                d = Object(a.a)(function(e) {
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
                    }, Object(o.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.mb, {
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
        "7g+E": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("oJmH"),
                o = n("9C/b"),
                s = n("/7QA"),
                l = n("yR8l"),
                c = n("vRsq"),
                d = n("2xye"),
                p = n("L9xt"),
                u = n("GnwI"),
                m = n("GFmA"),
                h = n("6h5w"),
                g = n("eqgM"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        if (null === this.props.videos || 0 !== this.props.videos.length) return r.createElement(r.Fragment, null, r.createElement(h.a, {
                            titleMessage: Object(s.d)("Video Queue", "VideoQueueCarousel"),
                            subTitle: this.props.subTitle
                        }), r.createElement(g.a, {
                            collectionID: this.props.collectionID,
                            listContext: m.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            tracking: {
                                content: this.props.trackingContext.content,
                                medium: this.props.trackingContext.medium,
                                location: this.props.trackingContext.location,
                                source: this.props.trackingContext.source,
                                itemType: this.props.trackingContext.itemType
                            },
                            videos: this.props.videos,
                            scrollToCurrentlyWatching: this.props.scrollToCurrentlyWatching,
                            currentlyWatchingVideoID: this.props.currentlyWatchingVideoID,
                            renderPositionLabel: !0,
                            renderPositionBanner: !0,
                            renderCurrentlyWatchingCard: !0
                        }))
                    }, t
                }(r.Component),
                f = Object(a.compose)(Object(u.c)("VideoQueueCarousel", {
                    autoReportInteractive: !0
                }))(v),
                k = n("Ue10"),
                b = n("0Nms");
            n.d(t, "a", function() {
                return C
            });
            var y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.error) return null;
                        var t = null,
                            n = null;
                        if (!this.props.data.loading && !this.props.data.collection) return null;
                        if (this.props.data && this.props.data.collection) {
                            if (0 === (t = this.getCollectionVideos()).length) return null;
                            var i = this.props.data.collection.title;
                            n = r.createElement(k.V, {
                                color: k.O.Alt2,
                                type: k.Nb.Span
                            }, Object(s.d)("{numVideos, plural, one {Playing # video from collection: <x:link>collectionTitle</x:link>} other {Playing # videos from collection: <x:link>collectionTitle</x:link>}}", {
                                numVideos: t.length,
                                "x:link": function() {
                                    return r.createElement(k.T, {
                                        to: Object(c.i)(null, null, e.props.collectionID)
                                    }, r.createElement(k.V, {
                                        bold: !0,
                                        type: k.Nb.Span
                                    }, i))
                                }
                            }, "VideoQueueCollectionCarousel"))
                        } else n = r.createElement(k.cb, {
                            width: 250,
                            lineCount: 1
                        });
                        return r.createElement(f, {
                            collectionID: this.props.collectionID,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            trackingContext: {
                                content: d.PageviewContent.VideoQueueCollection,
                                source: {},
                                itemType: p.TwitchDataType.Video,
                                medium: this.props.trackingContext.medium,
                                location: this.props.trackingContext.location
                            },
                            videos: t,
                            subTitle: n,
                            scrollToCurrentlyWatching: !0,
                            currentlyWatchingVideoID: this.getCurrentlyWatchingVideoID()
                        })
                    }, t.prototype.getCurrentlyWatchingVideoID = function() {
                        if (this.props.data.collection) {
                            var e = Object(c.s)(this.props);
                            return e || this.getCollectionVideos()[0].id
                        }
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.data.collection;
                        if (!e || !e.items || !e.items.edges) return [];
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && t.push(e.node)
                        }), t
                    }, t
                }(r.Component),
                C = Object(a.compose)(Object(u.c)("VideoQueueCollectionCarousel"), Object(l.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                collectionID: e.collectionID
                            }
                        }
                    }
                }))(Object(o.a)(y))
        },
        "80G/": function(e, t, n) {},
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("H1ft"),
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
                    return r.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== a.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(r.Component)
        },
        "8rUg": function(e, t, n) {
            e.exports = n.p + "assets/counterstrike-skill-groups-24ec0fc40a78435bc373.png"
        },
        "9kuA": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RecentBroadcasterClipsCarousel_UserClips"
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
                                        value: "channelLogin"
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
                                        value: "displayName"
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
                                                                value: "PreviewCardClip"
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
                    end: 396
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/recent-broadcaster-clips-carousel/components/clip-preview-card/models/preview-card-clip-fragment.gql"\nquery RecentBroadcasterClipsCarousel_UserClips($channelLogin: String! $limit: Int $criteria: UserClipsInput) {\nuser(login: $channelLogin) {\nid\ndisplayName\nclips(first: $limit criteria: $criteria) {\nedges {\nnode {\n...PreviewCardClip\n}\n}\n}\n}\n}',
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
            }(n("+Zgt").definitions)), e.exports = i
        },
        "A7Y/": function(e, t, n) {},
        B3R5: function(e, t, n) {},
        CCqK: function(e, t, n) {},
        EJax: function(e, t, n) {
            "use strict";
            var i, r = n("mrSG"),
                a = n("q1tI"),
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
                                r = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                a = Object(o.d)("Highlights", "VideoFilter"),
                                s = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case c.a.PastPremiere:
                                    t = i;
                                    break;
                                case c.a.Archive:
                                    t = r;
                                    break;
                                case c.a.Highlight:
                                    t = a;
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(p.Va, {
                            alignItems: p.f.End,
                            display: p.W.Flex,
                            flexDirection: p.Y.Row,
                            fullWidth: !0,
                            justifyContent: p.Ua.Between
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            flexDirection: p.Y.Row
                        }, this.renderLanguageSelector(), a.createElement(s.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), a.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return a.createElement(a.Fragment, null, a.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), a.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": c.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.PastPremiere), this.renderCheckmark(c.a.PastPremiere))), a.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": c.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Archive), this.renderCheckmark(c.a.Archive))), a.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": c.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Highlight), this.renderCheckmark(c.a.Highlight))), a.createElement(p.Sa, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": c.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Va, {
                            display: p.W.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Upload), this.renderCheckmark(c.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? a.createElement(p.Va, {
                            attachRight: !0,
                            position: p.db.Absolute,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(p.mb, {
                            asset: p.nb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : a.createElement(p.Va, {
                            margin: {
                                right: 0
                            }
                        }, a.createElement(l.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(d.b)(this.props.selectedSort) || d.a.Newest,
                            t = a.createElement(p.sb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: p.Qa.Large,
                                value: e
                            }, a.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": i.SortNewest,
                                value: d.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), a.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": i.SortPopular,
                                value: d.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return a.createElement(p.Va, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(a.Component),
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
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("/MKj"),
                s = n("TSYQ"),
                l = n("YhoA"),
                c = n("Ue10"),
                d = (n("lRiI"), function(e) {
                    var t, n = e.spriteDetails,
                        i = e.game.toLowerCase(),
                        a = s("metadata-icon__appendage", ((t = {})["metadata-icon__appendage--csgo-skill"] = i === l.a.CounterStrike, t)),
                        o = i === l.a.CounterStrike ? 40 : 20;
                    return r.createElement(c.Va, {
                        className: a
                    }, r.createElement("div", {
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
                                            return t = n.sent(), a.j.error(t, "Failed to get metadata details."), [3, 4];
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
                        }, r.createElement(c.V, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(c.Va, {
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
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(c.Va, {
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
                y = n("kduP"),
                C = n("2xye"),
                w = function(e) {
                    return r.createElement(c.Va, null, r.createElement(c.V, {
                        color: c.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, n, i) {
                        return r.createElement(c.Na, {
                            key: n
                        }, r.createElement(c.T, {
                            to: {
                                pathname: Object(y.c)(t.label),
                                state: {
                                    content: C.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: c.U.Inherit
                        }, t.label, S(n, i.length - 1) ? null : ", "))
                    })))
                },
                S = function(e, t) {
                    return e === t
                },
                V = n("N0BP"),
                x = (n("XA5B"), function(e) {
                    var t = r.createElement(c.xb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: c.x.Small,
                        overflow: c.Ya.Hidden
                    }, r.createElement(c.o, {
                        ratio: e.aspect || c.p.BoxArt,
                        align: c.d.Center
                    }, r.createElement(c.S, i.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(c.T, i.__assign({}, Object(V.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            x.displayName = "PreviewCardIconicImage";
            n("cRsL");
            var N, L = function(e) {
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
                T = (n("m493"), function(e) {
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
                    var a = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(L, i.__assign({}, e.topBar))), a = 3), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, n, r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(c.Va, {
                        position: c.db.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
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
                _ = (n("kF1+"), function(e) {
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
                E = n("GnwI"),
                I = (n("B3R5"), function(e) {
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
                O = Object(E.c)("PreviewCardThumbnail")(I),
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
                    })), r.createElement("div", null, r.createElement(c.T, i.__assign({}, Object(V.a)(e), {
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
                F = n("H1ft"),
                D = n("ZbA5"),
                A = n("QVaV"),
                G = n("hyVY"),
                R = n("MXoD"),
                j = n("0LAi"),
                B = n("fVj5");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(N || (N = {}));
            var W, M, H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        n = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
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
                        "data-test-selector": N.LockSelector
                    }, r.createElement(c.Na, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(c.V, {
                        color: c.O.Overlay,
                        fontSize: c.Aa.Size5,
                        "data-test-selector": N.UpsellSelector
                    }, Object(a.d)("View with {title}", {
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

            function q(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(W || (W = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(M || (M = {}));
            var Q = function(e) {
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
                        }, Object(V.a)(this.props)), r.createElement(c.xb, {
                            position: c.db.Relative,
                            borderRadius: c.x.Medium,
                            overflow: c.Ya.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(c.T, {
                            to: Object(R.a)(this.getTrackingContext(C.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(O, {
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
                        }(this.props) ? r.createElement(T, {
                            topLeft: r.createElement(D.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(_, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : U(this.props) ? r.createElement(T, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(_, {
                                value: Object(G.b)(this.props.durationInSeconds),
                                icon: c.nb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(_, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(_, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(_, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : q(this.props) ? r.createElement(T, {
                            topLeft: r.createElement(_, {
                                value: Object(G.b)(this.props.durationInSeconds),
                                icon: c.nb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(_, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(_, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return U(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return U(this.props) || q(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === M.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(x, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: c.p.BoxArt,
                            "data-test-selector": W.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === M.SingleGameList || this.props.context === M.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(c.Va, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(x, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: c.p.Aspect1x1,
                            "data-test-selector": W.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(A.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), q(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : U(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== M.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(P, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(R.a)(this.getTrackingContext(C.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.isTagsExperiment && this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(c.Va, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(j.a, i.__assign({}, this.props.tagListProps, {
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
                        return !!U(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === F.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, n, i) {
                        switch (e) {
                            case F.a.Balloon:
                                return r.createElement(b, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: n,
                                    onBalloonItemClick: i
                                });
                            case F.a.Inline:
                                return r.createElement(w, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case F.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                Y = Object(E.c)("PreviewCard", {
                    autoReportInteractive: !0
                })(Q);
            n.d(t, !1, function() {
                return W
            }), n.d(t, "b", function() {
                return M
            }), n.d(t, !1, function() {
                return Q
            }), n.d(t, "a", function() {
                return Y
            })
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var i = n("q1tI"),
                r = n("2iEm"),
                a = n("/7QA"),
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
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(o.V, {
                    color: o.O.Alt2,
                    fontSize: o.Aa.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(r.a, {
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
                return r
            }), n.d(t, "d", function() {
                return a
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
                r = "directory.LOL_CHAMPIONS_CHANGED",
                a = "directory.LOL_CHAMPIONS_LOADING",
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
                    type: a,
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
        On2s: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return f
            });
            var i, r = n("mrSG"),
                a = n("/7QA"),
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
                v = a.o.logger.withCategory("metadata-info");
            ! function(e) {
                e.Hearthstone = "hearthstone", e.PUBG = "playerunknown's battlegrounds", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
            }(i || (i = {}));
            var f = function(e, t) {
                    return r.__awaiter(void 0, void 0, Promise, function() {
                        var n, i, o, s, l, c;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = t.toLowerCase(), i = e.counterStrikeGlobalOffensive && e.counterStrikeGlobalOffensive.skill, o = e.hearthstone && e.hearthstone.broadcasterHeroClass, s = e.leagueOfLegends && e.leagueOfLegends.championID, l = e.overwatch && e.overwatch.broadcasterCharacter, i && n === m.a.CounterStrike ? [4, k(i)] : [3, 2];
                                case 1:
                                    return [2, r.sent()];
                                case 2:
                                    return o && n === m.a.Hearthstone ? [4, b(o)] : [3, 4];
                                case 3:
                                    return [2, r.sent()];
                                case 4:
                                    return l && n === m.a.Overwatch ? [4, y(l)] : [3, 6];
                                case 5:
                                    return [2, r.sent()];
                                case 6:
                                    if (s && n === m.a.LeagueOfLegends && (c = a.o.store.getState()).directory)
                                        if (c.directory.leagueOfLegends.championsMap) {
                                            if (c.directory.leagueOfLegends.championsMap) return [2, C(s, c.directory.leagueOfLegends.championsMap, c.directory.leagueOfLegends.version)]
                                        } else a.o.store.dispatch(Object(u.b)());
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
                y = function(e) {
                    return r.__awaiter(void 0, void 0, void 0, function() {
                        var t, n, i, a, o, s, l, c, d, u, m, f;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return r.trys.push([0, 2, , 3]), [4, Object(g.d)()];
                                case 1:
                                    for (n = r.sent(), i = void 0, a = 0, o = n; a < o.length; a++)
                                        for (s in i = o[a])
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
                C = function(e, t, n) {
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
                return a
            });
            var i, r = n("/7QA");
            ! function(e) {
                e[e.CSGOMap = 0] = "CSGOMap", e[e.CSGOSkillGroup = 1] = "CSGOSkillGroup", e[e.HearthstoneClass = 2] = "HearthstoneClass", e[e.HearthstoneMode = 3] = "HearthstoneMode", e[e.LeagueChampion = 4] = "LeagueChampion", e[e.OverwatchCharacter = 5] = "OverwatchCharacter"
            }(i || (i = {}));
            var a = function(e) {
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
            var r = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return r.a
            })
        },
        X7a7: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("cr+I"),
                a = n("/7QA"),
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
                                        e = a.o.logger.withCategory("leagueoflegends-api"), t(Object(c.k)(!0)), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), n = a.o.intl.getLanguageCode(), s = l(n), d = o.a.getAPIURL("/api/lol/champions?" + r.stringify({
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
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, o;
                        return i.__generator(this, function(i) {
                            return n = new Set(v()), t ? n.add(e) : n.delete(e), o = Array.from(n), a.l.set(d, o), r(Object(c.i)(o)), [2]
                        })
                    })
                }
            }

            function g(e) {
                var t = this;
                return function(n) {
                    return i.__awaiter(t, void 0, void 0, function() {
                        return i.__generator(this, function(t) {
                            return a.l.set(d, e), n(Object(c.i)(e)), [2]
                        })
                    })
                }
            }

            function v() {
                return a.l.get(d, [])
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
        YDp0: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "LatestCollectionsShelf_Collections"
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
                        }
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
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
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
                                        value: "channelLogin"
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
                                                value: "first"
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
                    end: 369
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-connection-fragment.gql"\nquery LatestCollectionsShelf_Collections($channelLogin: String! $first: Int! $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\ncollections(first: $first after: $cursor) {\n...PreviewCollectionConnection\n}\nself {\nisEditor\n}\n}\ncurrentUser {\nid\n}\n}',
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
        Z57o: function(e, t, n) {
            "use strict";
            var i, r, a = n("mrSG"),
                o = n("q1tI"),
                s = n("oJmH"),
                l = n("H1ft"),
                c = n("QzU5"),
                d = n("vRsq"),
                p = n("2xye"),
                u = n("tuvy"),
                m = n("GnwI"),
                h = n("pfAL"),
                g = n("7g+E"),
                v = n("NAv5"),
                f = n("fvjX"),
                k = n("yR8l"),
                b = n("9C/b"),
                y = n("8/mp"),
                C = n("hkkJ"),
                w = n("Ue10"),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.collections;
                        if (!t) return o.createElement(w.Xa, {
                            fillContent: !0
                        });
                        var n = null;
                        Object(u.a)() && Object(u.c)() && (n = Object(d.n)(this.props));
                        var i = t.reduce(function(t, i) {
                                return i.id !== n && t.push(o.createElement(C.a, {
                                    key: i.id,
                                    collection: i,
                                    multipleVideoGameMarkersType: e.props.multipleVideoGameMarkersType,
                                    tracking: {
                                        content: p.PageviewContent.VideoShelf,
                                        location: p.PageviewLocation.ChannelVideos,
                                        medium: p.PageviewMedium.ChannelVideos,
                                        source: {
                                            source_channel: e.props.channelLogin,
                                            source_item_type: p.TwitchDataType.Channel
                                        },
                                        itemType: p.TwitchDataType.Video
                                    },
                                    userCanEdit: e.props.userCanEdit
                                })), t
                            }, []),
                            r = null;
                        return this.props.pagination && (r = o.createElement(y.a, {
                            enabled: this.props.pagination.enabled,
                            loadMore: this.props.pagination.onMoreCollectionsRequest
                        })), o.createElement(o.Fragment, null, i, r)
                    }, t
                }(o.Component),
                V = Object(m.c)("LatestCollectionsShelf", {
                    autoReportInteractive: !0
                })(Object(b.a)(S)),
                x = n("YDp0"),
                N = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data && this.props.data.error) return null;
                        if (!this.props.data || this.props.data.loading) return o.createElement(V, {
                            channelLogin: this.props.channelLogin,
                            collections: null,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            userCanEdit: !1
                        });
                        var e = this.props.data.user;
                        if (!e || !e.collections) return null;
                        var t = e.collections.edges.reduce(function(e, t) {
                            return t && e.push(t.node), e
                        }, []);
                        if (t && 0 === t.length) return null;
                        if (this.props.lastUpdateCutOff) {
                            var n = this.props.lastUpdateCutOff;
                            t = t.filter(function(e) {
                                return Object(v.isAfter)(new Date(e.updatedAt), n)
                            })
                        }
                        var i = this.props.data.currentUser,
                            r = !(!i || i.id !== e.id) || !(!e.self || !e.self.isEditor);
                        return o.createElement(V, {
                            channelLogin: this.props.channelLogin,
                            collections: t,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            pagination: this.props.data.user && this.props.data.user.collections ? this.computePagingProp(this.props.data.user.collections) : void 0,
                            userCanEdit: r
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data && e.data.loading && this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.computePagingProp = function(e) {
                        if (this.props.shelf.allowPaging) return {
                            enabled: !!e.pageInfo.hasNextPage,
                            onMoreCollectionsRequest: this.props.loadMore
                        }
                    }, t
                }(o.Component),
                L = Object(f.compose)(Object(k.a)(x, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                first: e.shelf.first
                            }
                        }
                    },
                    props: function(e) {
                        return a.__assign({}, e, {
                            loadMore: function() {
                                if (!e.data.user || !e.data.user.collections) return Promise.resolve();
                                var t = Math.max(e.data.user.collections.edges.length - 1, 0),
                                    n = e.data.user.collections.edges[t];
                                return n ? e.data.fetchMore({
                                    query: x,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: n.cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return e.user && e.user.collections && n.user && n.user.collections ? {
                                            user: a.__assign({}, n.user, {
                                                collections: a.__assign({}, n.user.collections, {
                                                    edges: e.user.collections.edges.concat(n.user.collections.edges)
                                                })
                                            })
                                        } : e
                                    }
                                }) : Promise.resolve()
                            }
                        })
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(m.c)("LatestCollectionsShelfContainer"))(N),
                T = n("/7QA"),
                _ = n("XKWF"),
                E = n("GFmA"),
                I = n("6h5w"),
                O = n("eqgM"),
                P = n("EJax");
            ! function(e) {
                e.LatestCollections = "latest-collections", e.VideoSet = "video-set", e.TimeBoxVideoSet = "time-box-video-set"
            }(i || (i = {})),
            function(e) {
                e.Tower = "video-tower", e.Carousel = "video-carousel"
            }(r || (r = {}));
            var F, D = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.videos,
                            t = this.props.minimum || 1;
                        if (e && e.length < t) return null;
                        var n = this.props.expandLinkOptions && {
                            channelLogin: this.props.channelLogin,
                            options: this.props.expandLinkOptions
                        };
                        return o.createElement(o.Fragment, null, o.createElement(I.a, {
                            expandLink: n,
                            titleMessage: this.props.title
                        }), this.renderShelfType(this.props.format))
                    }, t.prototype.renderShelfType = function(e) {
                        switch (e) {
                            case r.Carousel:
                                return this.renderVideoCarousel();
                            case r.Tower:
                                return this.renderVideoTower();
                            default:
                                return e
                        }
                    }, t.prototype.renderVideoCarousel = function() {
                        var e = this.props.videos ? this.props.videos.slice(0, 10) : null;
                        return o.createElement(O.a, {
                            listContext: E.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            tracking: {
                                content: p.PageviewContent.VideoShelf,
                                medium: p.PageviewMedium.ChannelVideos,
                                location: p.PageviewLocation.ChannelVideos,
                                source: {
                                    source_channel: this.props.channelLogin,
                                    source_item_type: p.TwitchDataType.Channel
                                },
                                itemType: p.TwitchDataType.Video
                            },
                            videos: e,
                            hideTags: !0
                        })
                    }, t.prototype.renderVideoTower = function() {
                        return o.createElement(P.b, {
                            listContext: E.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            trackingContent: p.PageviewContent.VideoShelf,
                            trackingMedium: p.PageviewMedium.ChannelVideos,
                            videos: this.props.videos,
                            hideTags: !0
                        })
                    }, t
                }(o.Component),
                A = n("cy7x");
            ! function(e) {
                e.QuickHits = "quick-hits", e.LongHits = "long-hits"
            }(F || (F = {}));
            var G = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.error) return null;
                        if (!(this.props.data.loading || this.props.data.user && this.props.data.user.videos)) return null;
                        var e = this.props.shelf,
                            t = !this.props.data.loading && this.props.data.user && this.props.data.user.videos ? this.props.data.user.videos.edges : null,
                            n = t ? [] : null;
                        if (t && n)
                            for (var i = 0, r = t; i < r.length; i++) {
                                var a = r[i];
                                a.node && n.push(a.node)
                            }
                        var s, l = e.maxAgeDays;
                        if (n && n.length > 0 && l && !(Object(v.differenceInDays)(new Date, new Date(n[0].publishedAt)) <= l)) return null;
                        if (e.separateGames) return this.renderGameShelves(n);
                        if (e.quickHits) return this.renderQuickHitsShelf(e.quickHits, n);
                        var c = e.videoTypes;
                        if (c && 1 === c.length) {
                            var p = Object(d.B)(c[0]);
                            p && (s = {
                                filter: p,
                                sort: e.sortBy
                            })
                        }
                        return o.createElement(D, {
                            channelLogin: this.props.channelLogin,
                            expandLinkOptions: s,
                            format: e.format,
                            minimum: e.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: this.formatTitle(),
                            videos: n
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data && e.data.loading && this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderQuickHitsShelf = function(e, t) {
                        var n = null,
                            i = null;
                        if (t) {
                            var r = [],
                                a = [];
                            t.forEach(function(t) {
                                t.lengthSeconds <= e.maxLengthSeconds ? r.push(t) : a.push(t)
                            }), n = r, i = a
                        }
                        return o.createElement(o.Fragment, null, o.createElement(D, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": F.QuickHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(T.d)("Short Videos", "VideoShelfSet"),
                            videos: n
                        }), o.createElement(D, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": F.LongHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(T.d)("Long Videos", "VideoShelfSet"),
                            videos: i
                        }))
                    }, t.prototype.renderGameShelves = function(e) {
                        var t = this;
                        if (null === e) return null;
                        var n = [],
                            i = {};
                        e.forEach(function(e) {
                            if (e.game && e.game.id && "" !== e.game.displayName) {
                                var t = e.game.displayName;
                                t in i || (i[t] = [], n.push(t)), i[t].push(e)
                            }
                        });
                        var r = this.props.shelf.minimum || 1,
                            a = (n = (n = n.filter(function(e) {
                                return i[e].length >= r
                            })).slice(0, 4)).map(function(e) {
                                var n = i[e];
                                return o.createElement(D, {
                                    channelLogin: t.props.channelLogin,
                                    format: t.props.shelf.format,
                                    key: e,
                                    minimum: t.props.shelf.minimum,
                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                    title: e,
                                    videos: n
                                })
                            });
                        return o.createElement(o.Fragment, null, a)
                    }, t.prototype.formatTitle = function() {
                        var e = this.props.shelf.videoTypes;
                        if (!e) return Object(T.d)("Latest Videos", "VideoShelfSet");
                        var t = Object(T.d)("Latest Highlights", "VideoShelfSet");
                        if (e.length > 1) return t;
                        var n = e[0];
                        switch (n) {
                            case c.a.PastPremiere:
                                return Object(T.d)("Latest Premieres", "VideoShelfSet");
                            case c.a.Highlight:
                                return t;
                            case c.a.Archive:
                                return Object(T.d)("Latest Broadcasts", "VideoShelfSet");
                            case c.a.Upload:
                            case c.a.PremiereUpload:
                                return Object(T.d)("Latest Uploads", "VideoShelfSet");
                            default:
                                return n
                        }
                    }, t
                }(o.Component),
                R = Object(s.compose)(Object(k.a)(A, {
                    options: function(e) {
                        var t = 10;
                        return e.shelf.separateGames ? t = 100 : e.shelf.quickHits && (t = 50), {
                            variables: {
                                first: t,
                                channelLogin: e.channelLogin,
                                sort: Object(_.c)(e.shelf.sortBy),
                                types: e.shelf.videoTypes
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(m.c)("VideoSetShelf"))(G);
            n("nPIx");
            n.d(t, "b", function() {
                return j
            }), n.d(t, "a", function() {
                return B
            });
            var j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentCollection = function() {
                            if (t.props.collectionID && Object(u.a)() && Object(u.c)()) return o.createElement(w.Va, {
                                className: "channel-videos-overview__video-queue",
                                padding: {
                                    bottom: 1
                                },
                                margin: {
                                    bottom: 1
                                }
                            }, o.createElement(g.a, {
                                collectionID: t.props.collectionID,
                                trackingContext: {
                                    location: p.PageviewLocation.ChannelVideos,
                                    medium: p.PageviewMedium.ChannelVideos
                                },
                                multipleVideoGameMarkersType: Object(l.b)()
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(l.b)();
                        return o.createElement("div", null, this.renderCurrentCollection(), o.createElement(R, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: i.VideoSet,
                                format: r.Carousel,
                                maxAgeDays: 180,
                                sortBy: d.f.Newest,
                                videoTypes: [c.a.Archive]
                            },
                            multipleVideoGameMarkersType: e
                        }), o.createElement(h.a, {
                            channelLogin: this.props.channelLogin,
                            includeExpandTitleLink: !0,
                            omitCreatorInTitle: !0,
                            tracking: {
                                location: p.PageviewLocation.ChannelVideos,
                                medium: p.PageviewMedium.ChannelVideos
                            },
                            criteria: {
                                limit: 15,
                                range: d.b.Month
                            }
                        }), o.createElement(R, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: i.VideoSet,
                                format: r.Carousel,
                                quickHits: {
                                    maxLengthSeconds: 1800
                                },
                                maxAgeDays: 180,
                                sortBy: d.f.Newest,
                                videoTypes: [c.a.Highlight, c.a.Upload, c.a.PastPremiere, c.a.PremiereUpload]
                            },
                            multipleVideoGameMarkersType: e
                        }), o.createElement(L, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: i.LatestCollections,
                                allowPaging: !0,
                                first: 2
                            },
                            multipleVideoGameMarkersType: e
                        }))
                    }, t
                }(o.Component),
                B = Object(s.compose)(Object(m.c)("ChannelVideosOverviewContent", {
                    autoReportInteractive: !0
                }))(j)
        },
        ZbA5: function(e, t, n) {
            "use strict";
            var i, r, a, o, s = n("mrSG"),
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
                h = ((r = {})[p.a.Premiere] = u.nb.VideoPremiere, r[p.a.Rerun] = u.nb.VideoRerun, r[p.a.WatchParty] = u.nb.VideoRerun, r),
                g = ((a = {})[p.a.Premiere] = u.ob.Live, a[p.a.Rerun] = u.ob.Inherit, a[p.a.WatchParty] = u.ob.Inherit, a),
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
        bdIb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("/7QA"),
                o = n("GFmA"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || a.o.config.defaultStreamPreviewURL,
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
                                src: this.props.clip.game.boxArtURL || a.a.defaultBoxArtURL,
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
        cy7x: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "VideoSetShelf_Videos"
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
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "sort"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "VideoSort"
                                }
                            }
                        }
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
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "types"
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
                                                value: "first"
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
                                                value: "sort"
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
                                                value: "types"
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
                    end: 321
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery VideoSetShelf_Videos($channelLogin: String! $sort: VideoSort! $first: Int! $types: [BroadcastType!]) {\nuser(login: $channelLogin) {\nid\nvideos(first: $first sort: $sort types: $types) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
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
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                l = n("RXle"),
                c = n("L5dg"),
                d = n("Ue10"),
                p = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = r.createElement(c.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = r.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return r.createElement(d.Va, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(l.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || a.b.MixedGameAndChannelList,
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
                        t = r.createElement(r.Fragment, null, s)
                    }
                    return r.createElement(d.Tb, {
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
        eqgM: function(e, t, n) {
            "use strict";
            var i, r, a = n("/MKj"),
                o = n("mrSG"),
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
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
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
                y = n("XEwr"),
                C = n("RXle"),
                w = 10,
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], n = [], i = [], r = 0, a = e; r < a.length; r++) {
                                    var s = a[r];
                                    n.push(s.id), i.push(s.viewCount)
                                }
                                l.n.trackItemSectionLoad(o.__assign({
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
                                l.n.trackItemSectionClick(o.__assign({
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
                                for (var n = [], i = 0; i < w; i++) n.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + i
                                }));
                                return n
                            }
                            var r = [];
                            if (t.props.spotlight) {
                                var a = s.createElement(C.VideoPreviewCard, {
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
                                r.push(a)
                            }
                            var o = r.length;
                            if (t.props.currentlyWatchingVideoID && t.props.renderCurrentlyWatchingCard && t.props.scrollToCurrentlyWatching)
                                for (var l = t.getCurrentlyWatchingVideoIndex(), c = 0; c < e.length; c++) {
                                    var d = e[c];
                                    t.props.firstPageLoaded || !(c < l || c > l + w) ? Object(y.a)(d) || r.push(s.createElement(C.VideoPreviewCard, {
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
                                    })) : r.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + c
                                    }))
                                } else
                                    for (c = 0; c < e.length; c++)
                                        if (c + o < w || t.props.firstPageLoaded) {
                                            d = e[c];
                                            if (Object(y.a)(d)) {
                                                if (d.slug === t.props.currentlyWatchingVideoID) continue;
                                                r.push(s.createElement(b.a, {
                                                    context: t.props.listContext,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: o + c,
                                                        medium: t.props.tracking.medium
                                                    },
                                                    clip: d
                                                }))
                                            } else {
                                                if (d.id === t.props.currentlyWatchingVideoID && !t.props.renderCurrentlyWatchingCard) continue;
                                                r.push(s.createElement(C.VideoPreviewCard, {
                                                    context: t.props.listContext,
                                                    collectionID: t.props.collectionID,
                                                    onClick: t.onPreviewCardClick,
                                                    key: "video-" + c,
                                                    tracking: {
                                                        content: t.props.tracking.content,
                                                        content_index: o + c,
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
                                        } else r.push(s.createElement(C.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + c
                                        }));
                            return r
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var n = t.getCurrentlyWatchingVideoIndex(),
                                    i = e === n,
                                    r = e === n + 1,
                                    a = Object(l.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return i ? {
                                    title: Object(l.d)("Now playing", "VideoCarousel"),
                                    subTitle: a,
                                    selected: !0
                                } : r ? {
                                    title: Object(l.d)("Up next", "VideoCarousel"),
                                    subTitle: a
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
                    return o.__extends(t, e), t.prototype.componentDidMount = function() {
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
                V = Object(c.c)("VideoCarousel", {
                    autoReportInteractive: !0
                })(S);
            n.d(t, "a", function() {
                return x
            });
            var x = Object(a.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(V)
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
        gcyA: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("Z57o");
            n.d(t, "ChannelVideosOverviewPresentation", function() {
                return i.b
            }), n.d(t, "ChannelVideosOverviewContent", function() {
                return i.a
            })
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
                a = n("q1tI"),
                o = n("/7QA"),
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
                                for (var t = e.items.edges, n = t.length, r = null, a = 0; a < t.length; a++) {
                                    var o = t[a];
                                    if (o) {
                                        var s = o.node,
                                            l = s.self && s.self.viewingHistory && s.self.viewingHistory;
                                        if (l && l.updatedAt && l.position)
                                            if (r) {
                                                var c = new Date(r.viewedAt),
                                                    d = new Date(l.updatedAt);
                                                Object(p.isAfter)(d, c) && (r = {
                                                    index: a,
                                                    value: s,
                                                    viewedAt: l.updatedAt,
                                                    viewingPosition: l.position
                                                })
                                            } else r = {
                                                index: a,
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
                                                return Object(o.d)("Continue Watching", "SeriesResumeRecommendation");
                                            case i.WatchNext:
                                                return Object(o.d)("Watch Next", "SeriesResumeRecommendation");
                                            default:
                                                return e
                                        }
                                    }(m.type)
                                }, r = m.position + 1), !e) e = {
                                card: n[n.length - 1],
                                title: Object(o.d)("Latest Video", "CollectionCarousel")
                            }, r = n.length;
                            e.subTitle = Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                position: r,
                                totalVideos: n.length
                            }, "CollectionCarousel")
                        }
                        return a.createElement(a.Fragment, null, this.renderCarouselHeader(), a.createElement(h.a, {
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
                        return e ? a.createElement(g.Va, null, a.createElement(g.Va, {
                            display: g.W.Flex,
                            flexDirection: g.Y.Row
                        }, a.createElement(g.Va, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.T, {
                            "data-test-selector": v.TitleLink,
                            to: "/collections/" + e.id,
                            type: g.U.Inherit
                        }, a.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(c.a)() && a.createElement(g.z, {
                            type: g.F.Hollow,
                            size: g.D.Small,
                            icon: g.nb.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": v.PlayAllButton
                        }, Object(o.d)("Play all", "LatestCollectionCarousel"))), a.createElement(g.V, {
                            color: g.O.Alt2,
                            type: g.Nb.Span,
                            "data-test-selector": v.Metadata
                        }, this.renderSubTitle(e))) : a.createElement(g.cb, {
                            width: 250,
                            lineCount: 1
                        })
                    }, t.prototype.renderSubTitle = function(e) {
                        var t = e.items ? e.items.totalCount : 0,
                            n = Object(o.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                                videoCountText: t
                            }, "LatestCollectionCarousel");
                        return this.props.subTitle ? a.createElement(a.Fragment, null, this.props.subTitle, " · ", n) : e.description ? a.createElement(a.Fragment, null, e.description, " · ", n) : n
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.collection;
                        if (!e) return null;
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && "" !== e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(a.Component),
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

            function a(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }
            i.definitions = i.definitions.concat(a(n("msok").definitions)), i.definitions = i.definitions.concat(a(n("+Vfn").definitions)), e.exports = i
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
                return a
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
                a = function() {
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
        nPIx: function(e, t, n) {},
        pfAL: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("fvjX"),
                o = n("/7QA"),
                s = n("GFmA"),
                l = n("yR8l"),
                c = n("vRsq"),
                d = n("2xye"),
                p = n("GnwI"),
                u = n("6h5w"),
                m = n("eqgM"),
                h = n("9kuA"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading ? this.renderCarousel(null) : !this.props.data.user || this.props.data.error ? null : this.renderCarousel(this.props.data.user)
                    }, t.prototype.renderCarousel = function(e) {
                        var t = e ? this.parseClips(e) : null;
                        if (t && 0 === t.length) return null;
                        var n = this.props.channelLogin && this.props.includeExpandTitleLink ? {
                            channelLogin: this.props.channelLogin,
                            options: {
                                filter: c.e.Clips,
                                range: this.props.criteria.range
                            }
                        } : void 0;
                        return r.createElement("div", null, r.createElement(u.a, {
                            expandLink: n,
                            titleMessage: this.getTitle()
                        }), r.createElement(m.a, {
                            currentlyWatchingVideoID: this.props.currentlyWatchingClipSlug,
                            listContext: s.b.SingleChannelList,
                            tracking: {
                                content: d.PageviewContent.ClipsCuratorCarousel,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.getTrackingSource(),
                                itemType: d.TwitchDataType.Clip
                            },
                            videos: t
                        }))
                    }, t.prototype.getTitle = function() {
                        return this.props.omitCreatorInTitle || !this.props.data ? Object(o.d)("Top Clips", "RecentBroadcasterClipsCarousel") : this.props.data.user && this.props.data.user.displayName ? Object(o.d)("Top Clips from {broadcaster}", {
                            broadcaster: this.props.data.user.displayName
                        }, "RecentBroadcasterClipsCarousel") : null
                    }, t.prototype.getTrackingSource = function() {
                        return this.props.channelLogin ? {
                            source_channel: this.props.channelLogin,
                            source_item_type: d.TwitchDataType.Channel
                        } : {
                            source_channel: "",
                            source_item_type: d.TwitchDataType.Channel
                        }
                    }, t.prototype.parseClips = function(e) {
                        if (!e || !e.clips || !e.clips.edges || 0 === e.clips.edges.length) return [];
                        var t = [];
                        return e.clips.edges.forEach(function(e) {
                            e && e.node && e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(r.Component),
                v = Object(a.compose)(Object(l.a)(h, {
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                limit: e.criteria.limit,
                                criteria: {
                                    period: Object(c.l)(e.criteria.range)
                                }
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(p.c)("RecentBroadcasterClipsCarousel", {
                    autoReportInteractive: !0
                }))(g)
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
        }
    }
]);