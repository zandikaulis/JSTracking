(window.webpackJsonp = window.webpackJsonp || []).push([
    [122], {
        "+Vfn": function(e, t, i) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment CollectionConnectionFields on CollectionConnection {\ntotalCount\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("he03").definitions)), e.exports = n
        },
        "+Zgt": function(e, t) {
            var i = {
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
            i.loc.source = {
                body: "fragment PreviewCardClip on Clip {\nid\nslug\ntitle\nviewCount\ncurator {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 52 height: 72)\n}\nbroadcaster {\nid\nlogin\ndisplayName\nprofileImageURL(width: 50)\n}\nthumbnailURL\ncreatedAt\ndurationSeconds\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        "0INk": function(e, t, i) {
            "use strict";
            i.d(t, "b", function() {
                return s
            }), i.d(t, "c", function() {
                return c
            }), i.d(t, "a", function() {
                return d
            });
            var n = i("mrSG"),
                r = i("/7QA"),
                a = i("2xye"),
                o = i("gAd6"),
                l = function() {
                    var e = r.o.getLastPageview();
                    return e && e.location || a.PageviewLocation.None
                },
                s = function(e) {
                    r.o.trackItemSectionClick({
                        carousel_content: a.PageviewContent.Video,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameName,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                c = function(e) {
                    r.o.trackItemSectionClick({
                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                        channel_id: e.broadcasterID || "0",
                        channel: e.channelLogin || "unknown",
                        content: a.PageviewContent.PreviewCardGameBalloonGame,
                        item_index: e.contentIndex,
                        medium: e.pageviewMedium,
                        item_id: e.videoID,
                        item_type: a.TwitchDataType.Video,
                        item_viewcount: null,
                        location: l()
                    })
                },
                d = function(e) {
                    return n.__awaiter(void 0, void 0, void 0, function() {
                        var t, i, s, c, d, p = this;
                        return n.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), t = e.map(function(e) {
                                        return n.__awaiter(p, void 0, void 0, function() {
                                            var t;
                                            return n.__generator(this, function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, r.p.apollo.client.query({
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
                                    return i = u.sent(), s = i.filter(function(e) {
                                        return !!e
                                    }), c = s.map(function() {
                                        return a.TwitchDataType.Game
                                    }), d = s.map(function() {
                                        return null
                                    }), r.o.trackItemSectionLoad({
                                        carousel_content: a.PageviewContent.PreviewCardGameBalloonGame,
                                        rendered_item_count: s.length,
                                        rendered_item_list: s,
                                        rendered_item_types: c,
                                        rendered_items_viewcounts: d,
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
        "0Nms": function(e, t, i) {
            var n = {
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
            n.loc.source = {
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
            n.definitions = n.definitions.concat(a(i("msok").definitions)), n.definitions = n.definitions.concat(a(i("+Vfn").definitions)), e.exports = n
        },
        "0T/G": function(e, t) {},
        "5NSO": function(e, t, i) {},
        "6h5w": function(e, t, i) {
            "use strict";
            var n, r = i("q1tI"),
                a = i("9C/b"),
                o = i("/7QA"),
                l = i("vRsq"),
                s = i("tuvy"),
                c = i("Ue10"),
                d = Object(a.a)(function(e) {
                    var t, i = e.options;
                    return t = Object(s.a)() ? Object(l.j)(e.channelLogin, e, i) : Object(l.q)(e.channelLogin, i && {
                        filter: i.filter ? Object(l.z)(i.filter) : void 0,
                        sort: i.sort
                    }), r.createElement(c.U, {
                        to: t,
                        hoverUnderlineNone: !0
                    }, r.createElement(c.Xa, {
                        display: c.X.InlineFlex,
                        flexDirection: c.Aa.Row,
                        alignItems: c.f.Center
                    }, r.createElement(c.W, {
                        type: c.Rb.H5
                    }, Object(o.d)("Expand All", "VideoShelfExpandLink")), r.createElement(c.qb, {
                        asset: c.rb.AngleRight,
                        height: 14
                    })))
                });
            i.d(t, "a", function() {
                    return p
                }),
                function(e) {
                    e.Title = "title", e.SubTitle = "subtitle"
                }(n || (n = {}));
            var p = function(e) {
                if (!e.titleMessage) return r.createElement(c.gb, {
                    width: 200
                });
                var t = r.createElement(c.W, {
                        type: c.Rb.H4,
                        color: c.O.Base,
                        bold: !0,
                        "data-test-selector": n.Title
                    }, e.titleMessage),
                    i = e.subTitle;
                return e.subTitle && "string" == typeof e.subTitle ? i = r.createElement(c.W, {
                    color: c.O.Alt2,
                    type: c.Rb.Span,
                    "data-test-selector": n.SubTitle
                }, e.subTitle) : e.subTitle && (i = r.createElement(c.Xa, {
                    "data-test-selector": n.SubTitle
                }, i)), r.createElement(r.Fragment, null, r.createElement(c.Xa, {
                    display: c.X.Flex,
                    flexDirection: c.Aa.Row,
                    alignItems: c.f.End
                }, t, e.expandLink && r.createElement(c.Xa, {
                    padding: {
                        left: 1
                    }
                }, r.createElement(d, {
                    channelLogin: e.expandLink.channelLogin,
                    options: e.expandLink.options
                }))), i)
            }
        },
        "7g+E": function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("oJmH"),
                o = i("9C/b"),
                l = i("/7QA"),
                s = i("yR8l"),
                c = i("vRsq"),
                d = i("2xye"),
                p = i("L9xt"),
                u = i("GnwI"),
                m = i("GFmA"),
                h = i("6h5w"),
                g = i("eqgM"),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        if (null === this.props.videos || 0 !== this.props.videos.length) return r.createElement(r.Fragment, null, r.createElement(h.a, {
                            titleMessage: Object(l.d)("Video Queue", "VideoQueueCarousel"),
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
                f = Object(a.compose)(Object(u.b)("VideoQueueCarousel", {
                    autoReportInteractive: !0
                }))(v),
                k = i("Ue10"),
                C = i("0Nms");
            i.d(t, "a", function() {
                return b
            });
            var y = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                        e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = this;
                        if (this.props.data.error) return null;
                        var t = null,
                            i = null;
                        if (!this.props.data.loading && !this.props.data.collection) return null;
                        if (this.props.data && this.props.data.collection) {
                            if (0 === (t = this.getCollectionVideos()).length) return null;
                            var n = this.props.data.collection.title;
                            i = r.createElement(k.W, {
                                color: k.O.Alt2,
                                type: k.Rb.Span
                            }, Object(l.d)("{numVideos, plural, one {Playing # video from collection: <x:link>collectionTitle</x:link>} other {Playing # videos from collection: <x:link>collectionTitle</x:link>}}", {
                                numVideos: t.length,
                                "x:link": function() {
                                    return r.createElement(k.U, {
                                        to: Object(c.i)(null, null, e.props.collectionID)
                                    }, r.createElement(k.W, {
                                        bold: !0,
                                        type: k.Rb.Span
                                    }, n))
                                }
                            }, "VideoQueueCollectionCarousel"))
                        } else i = r.createElement(k.gb, {
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
                            subTitle: i,
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
                b = Object(a.compose)(Object(u.b)("VideoQueueCollectionCarousel"), Object(s.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                collectionID: e.collectionID
                            }
                        }
                    }
                }))(Object(o.a)(y))
        },
        "80G/": function(e, t, i) {},
        "86FS": function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("H1ft"),
                o = i("SWMh"),
                l = i("cr+I"),
                s = i("/7QA"),
                c = i("GFmA"),
                d = i("0INk"),
                p = i("yWUM"),
                u = i("vRsq"),
                m = i("2xye"),
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
                                        search: l.stringify(i),
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
                        }, t.trackVideoGameBalloonItemClick = function(e, i) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(d.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: i,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
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
                                linkPath: g.a.PopularTag
                            } : void 0
                        })
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = l.stringify(e);
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
                f = Object(h.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(v);
            i.d(t, "a", function() {
                return k
            });
            var k = function(e) {
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
                    return r.createElement(f, n.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== a.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds)
                }, t
            }(r.Component)
        },
        "9kuA": function(e, t, i) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/video-carousel/components/recent-broadcaster-clips-carousel/components/clip-preview-card/models/preview-card-clip-fragment.gql"\nquery RecentBroadcasterClipsCarousel_UserClips($channelLogin: String! $limit: Int $criteria: UserClipsInput) {\nuser(login: $channelLogin) {\nid\ndisplayName\nclips(first: $limit criteria: $criteria) {\nedges {\nnode {\n...PreviewCardClip\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("+Zgt").definitions)), e.exports = n
        },
        "A7Y/": function(e, t, i) {},
        B3R5: function(e, t, i) {},
        EJax: function(e, t, i) {
            "use strict";
            var n, r = i("mrSG"),
                a = i("q1tI"),
                o = i("/7QA"),
                l = i("vSJR"),
                s = i("sLlB"),
                c = i("QzU5"),
                d = i("XKWF"),
                p = i("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(n || (n = {}));
            var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, i = Object(o.d)("All Videos", "VideoFilter"),
                                n = Object(o.d)("Past Premieres", "VideoFilter"),
                                r = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                a = Object(o.d)("Highlights", "VideoFilter"),
                                l = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case c.a.PastPremiere:
                                    t = n;
                                    break;
                                case c.a.Archive:
                                    t = r;
                                    break;
                                case c.a.Highlight:
                                    t = a;
                                    break;
                                case c.a.Upload:
                                    t = l;
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
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(p.Xa, {
                            alignItems: p.f.End,
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row,
                            fullWidth: !0,
                            justifyContent: p.Wa.Between
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            flexDirection: p.Aa.Row
                        }, this.renderLanguageSelector(), a.createElement(l.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": n.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), a.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return a.createElement(a.Fragment, null, a.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": n.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), a.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": c.a.PastPremiere,
                            "data-test-selector": n.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.PastPremiere), this.renderCheckmark(c.a.PastPremiere))), a.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": c.a.Archive,
                            "data-test-selector": n.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Archive), this.renderCheckmark(c.a.Archive))), a.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": c.a.Highlight,
                            "data-test-selector": n.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Highlight), this.renderCheckmark(c.a.Highlight))), a.createElement(p.Ua, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": c.a.Upload,
                            "data-test-selector": n.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, a.createElement(p.Xa, {
                            display: p.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(c.a.Upload), this.renderCheckmark(c.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? a.createElement(p.Xa, {
                            attachRight: !0,
                            position: p.hb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(p.qb, {
                            asset: p.rb.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : a.createElement(p.Xa, {
                            margin: {
                                right: 0
                            }
                        }, a.createElement(s.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(d.b)(this.props.selectedSort) || d.a.Newest,
                            t = a.createElement(p.xb, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": n.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: p.Sa.Large,
                                value: e
                            }, a.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": n.SortNewest,
                                value: d.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), a.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": n.SortPopular,
                                value: d.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return a.createElement(p.Xa, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(a.Component),
                m = i("daWW");
            i.d(t, "a", function() {
                return u
            }), i.d(t, "b", function() {
                return m.a
            }), i.d(t, !1, function() {
                return d.a
            })
        },
        Fj9y: function(e, t, i) {},
        GFmA: function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("/7QA"),
                o = i("5zf8"),
                l = i("Ue10"),
                s = (i("Fj9y"), function(e) {
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
                        return r.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row",
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap
                        }, r.createElement(l.Ua, {
                            linkTo: this.props.gameChange.linkTo,
                            onClick: this.onBalloonItemClick
                        }, r.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row,
                            padding: .5
                        }, r.createElement(l.Bb, {
                            className: "preview-card-game-balloon-row__image-wrapper",
                            flexGrow: 0,
                            flexShrink: 0,
                            borderRadius: l.x.Small,
                            overflow: l.cb.Hidden,
                            position: l.hb.Relative
                        }, r.createElement(l.o, {
                            align: l.d.Center,
                            ratio: l.p.BoxArt
                        }, r.createElement(l.S, n.__assign({}, e))), r.createElement(l.Bb, {
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
                        }, r.createElement(l.qb, {
                            asset: l.rb.Play,
                            type: l.sb.Inherit
                        }))), r.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: {
                                left: 1,
                                top: 1
                            }
                        }, r.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row__info-label"
                        }, r.createElement(l.W, null, this.props.gameChange.label)), r.createElement(l.Xa, {
                            className: "preview-card-game-balloon-row__info-duration"
                        }, r.createElement(l.W, null, Object(o.b)(this.props.gameChange.duration)))))))
                    }, t
                }(r.Component)),
                c = i("0INk"),
                d = i("8/mp"),
                p = i("eJ65"),
                u = (i("vDRX"), function(e) {
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
                            Object(c.a)(e)
                        }
                    }, t.prototype.render = function() {
                        return r.createElement(l.Xa, {
                            className: "preview-card-game-balloon",
                            display: l.X.InlineBlock,
                            position: l.hb.Relative,
                            margin: {
                                top: .5
                            }
                        }, r.createElement(p.a, {
                            key: "game-balloon",
                            display: l.X.Inline,
                            onToggle: this.onBalloonToggle
                        }, r.createElement(l.z, {
                            type: l.F.Hollow,
                            icon: l.rb.ViewerList
                        }, r.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Row
                        }, r.createElement(l.W, null, Object(a.d)("Chapters", "PreviewCardGameBalloon")), r.createElement(l.Xa, {
                            margin: {
                                left: 1
                            }
                        }, r.createElement(l.eb, {
                            label: this.props.videoGameChanges.length.toString()
                        })))), r.createElement(l.u, {
                            direction: l.v.TopLeft,
                            size: l.w.Medium
                        }, r.createElement(l.Xa, {
                            overflow: l.cb.Hidden,
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap
                        }, r.createElement(l.Xa, {
                            padding: .5,
                            flexShrink: 0,
                            flexGrow: 0
                        }, r.createElement(l.W, {
                            color: l.O.Alt2
                        }, Object(a.d)("Chapter Select", "PreviewCardGameBalloon"))), r.createElement(l.Xa, {
                            className: "preview-card-game-balloon__content",
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexGrow: 1,
                            flexShrink: 1,
                            flexWrap: l.Ba.NoWrap
                        }, r.createElement(d.b, null, r.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexDirection: l.Aa.Column,
                            flexWrap: l.Ba.NoWrap,
                            fullHeight: !0
                        }, this.renderAdditionalGameList(this.props.videoGameChanges))))))))
                    }, t.prototype.renderAdditionalGameList = function(e) {
                        var t = this;
                        return e.map(function(e, i) {
                            return r.createElement(s, {
                                index: i,
                                gameChange: e,
                                key: t.props.videoID + "-" + e.offset,
                                videoID: t.props.videoID,
                                onBalloonItemClick: t.props.onBalloonItemClick
                            })
                        })
                    }, t
                }(r.Component)),
                m = i("kduP"),
                h = i("2xye"),
                g = function(e) {
                    return r.createElement(l.Xa, null, r.createElement(l.W, {
                        color: l.O.Alt,
                        ellipsis: !0
                    }, e.videoGameChanges.map(function(t, i, n) {
                        return r.createElement(l.Pa, {
                            key: i
                        }, r.createElement(l.U, {
                            to: {
                                pathname: Object(m.c)(t.label),
                                state: {
                                    content: h.PageviewContent.TextLink,
                                    medium: e.trackingContext && e.trackingContext.medium
                                }
                            },
                            type: l.V.Inherit
                        }, t.label, v(i, n.length - 1) ? null : ", "))
                    })))
                },
                v = function(e, t) {
                    return e === t
                },
                f = i("N0BP"),
                k = (i("XA5B"), function(e) {
                    var t = r.createElement(l.Bb, {
                        className: "preview-card-iconic-image__wrapper",
                        borderRadius: l.x.Small,
                        overflow: l.cb.Hidden
                    }, r.createElement(l.o, {
                        ratio: e.aspect || l.p.BoxArt,
                        align: l.d.Center
                    }, r.createElement(l.S, n.__assign({}, e.imageProps))));
                    return e.linkTo && (t = r.createElement(l.U, n.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick
                    }), t)), t
                });
            k.displayName = "PreviewCardIconicImage";
            var C, y = i("TSYQ"),
                b = (i("cRsL"), function(e) {
                    var t = y("preview-card-top-bar", {
                        "preview-card-top-bar--gray": !e.selected,
                        "preview-card-top-bar--green": e.selected
                    });
                    return r.createElement(l.Xa, {
                        display: l.X.Flex,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: l.Wa.Between,
                        alignItems: l.f.Center,
                        className: t
                    }, r.createElement(l.Xa, {
                        display: l.X.InlineFlex
                    }, r.createElement(l.W, {
                        "data-test-selector": "top-bar-title-selector",
                        color: l.O.Overlay,
                        bold: !0,
                        transform: l.Qb.Uppercase
                    }, e.title)), e.subTitle && r.createElement(l.Xa, {
                        display: l.X.InlineFlex
                    }, r.createElement(l.W, {
                        "data-test-selector": "top-bar-sub-title-selector",
                        color: l.O.Overlay
                    }, e.subTitle)))
                }),
                w = (i("m493"), function(e) {
                    var t = .5,
                        i = null;
                    "number" == typeof e.progressBarPercent && e.progressBarPercent > 0 && (i = r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(l.kb, {
                        borderRadius: l.x.None,
                        size: l.mb.Small,
                        value: e.progressBarPercent,
                        mask: !0
                    })), t = 1);
                    var a = 1,
                        o = null;
                    return e.topBar && (o = r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        fullWidth: !0
                    }, r.createElement(b, n.__assign({}, e.topBar))), a = 3), r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        className: "preview-card-overlay"
                    }, o, i, r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-left-selector"
                    }, e.topLeft), r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: e.topBar ? {
                            x: 1,
                            y: a
                        } : 1,
                        "data-test-selector": "top-right-selector"
                    }, e.topRight), r.createElement(l.Xa, {
                        position: l.hb.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            x: .5,
                            y: t
                        },
                        "data-test-selector": "bottom-left-selector"
                    }, e.bottomLeft), r.createElement(l.Xa, {
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
                S = (i("kF1+"), function(e) {
                    var t = e.icon && r.createElement(l.Xa, {
                        display: l.X.Flex,
                        margin: {
                            right: .5
                        }
                    }, r.createElement(l.qb, {
                        asset: e.icon,
                        width: 10,
                        height: 10
                    }));
                    return e.withBackground ? r.createElement(l.Bb, {
                        alignItems: l.f.Center,
                        background: l.r.Overlay,
                        borderRadius: l.x.Small,
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        fontSize: l.Ca.Size6,
                        justifyContent: l.Wa.Center
                    }, t, r.createElement(l.W, null, e.value)) : r.createElement(l.Bb, {
                        className: "preview-card-stat",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        padding: {
                            x: .5
                        }
                    }, t, r.createElement(l.W, null, e.value))
                }),
                N = i("GnwI"),
                x = (i("B3R5"), function(e) {
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
                        }), r.createElement("div", n.__assign({}, e, {
                            onClick: this.props.onClick
                        }), r.createElement(l.Bb, {
                            background: l.r.Alt2,
                            overflow: l.cb.Hidden
                        }, r.createElement(l.o, {
                            ratio: this.props.aspectRatio
                        }, this.renderImage())))
                    }, t.prototype.renderImage = function() {
                        var e, t = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad),
                            i = y("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad, e));
                        return t && void 0 !== this.props.animatedImageProps ? r.createElement("div", {
                            className: i
                        }, r.createElement(l.S, n.__assign({}, this.props.animatedImageProps, {
                            onLoad: this.onAnimatedImageLoad,
                            onError: this.onAnimatedImageLoadError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        }))) : r.createElement("div", {
                            className: i
                        }, r.createElement(l.S, n.__assign({}, this.props.staticImageProps, {
                            onLoad: this.onImageLoad,
                            onError: this.onImageError,
                            "data-test-selector": "preview-card-thumbnail__image-selector"
                        })))
                    }, t
                }(r.Component)),
                T = Object(N.b)("PreviewCardThumbnail")(x),
                I = (i("80G/"), function(e) {
                    var t = null;
                    return e.subtitles && e.subtitles.length > 0 && (t = e.subtitles.map(function(e, t) {
                        return r.createElement(l.Xa, {
                            key: t,
                            "data-test-selector": "preview-card-titles__subtitle"
                        }, r.createElement(l.W, {
                            color: l.O.Alt,
                            ellipsis: !0
                        }, "string" == typeof e ? e : r.createElement(l.U, {
                            "data-a-target": e.automationSelector,
                            to: e.linkTo,
                            onClick: e.onClick,
                            type: l.V.Inherit
                        }, e.text)))
                    })), r.createElement("div", null, r.createElement(l.U, n.__assign({}, Object(f.a)(e), {
                        to: e.linkTo,
                        onClick: e.onClick,
                        type: l.V.Inherit,
                        "data-test-selector": "preview-card-titles__primary-link"
                    }), r.createElement(l.W, {
                        type: l.Rb.H3,
                        fontSize: l.Ca.Size5,
                        lines: 1,
                        bold: !0,
                        ellipsis: !0
                    }, e.title)), r.createElement(l.Xa, {
                        className: "preview-card-titles__subtitle-wrapper"
                    }, t))
                }),
                L = i("H1ft"),
                E = i("ZbA5"),
                V = i("QVaV"),
                P = i("hyVY"),
                F = i("MXoD"),
                _ = i("0LAi");
            ! function(e) {
                e.LockSelector = "video-lock", e.UpsellSelector = "upsell"
            }(C || (C = {}));
            var O, A, D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return n.__extends(t, e), t.prototype.render = function() {
                    if (!this.props.restriction || !this.props.restriction.productName || !this.props.restriction.title) return null;
                    var e = Object(a.d)("Get It Now", "VideoPreviewCardRestriction"),
                        t = this.props.restriction.canViewRestricted,
                        i = t ? Object(a.d)("unlocked", "VideoPreviewCardRestriction") : Object(a.d)("locked", "VideoPreviewCardRestriction"),
                        n = t ? l.rb.Unlock : l.rb.Lock;
                    return r.createElement(l.Xa, null, !t && r.createElement(l.Bb, {
                        background: l.r.Overlay,
                        className: "video-preview-card-restriction",
                        color: l.O.Overlay,
                        display: l.X.Flex,
                        position: l.hb.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        zIndex: l.ec.Default,
                        padding: {
                            x: 5
                        },
                        textAlign: l.Nb.Center,
                        fullWidth: !0,
                        fullHeight: !0,
                        alignItems: l.f.Center,
                        alignContent: l.e.Center,
                        flexDirection: l.Aa.Column,
                        flexWrap: l.Ba.Wrap,
                        justifyContent: l.Wa.Center,
                        "data-test-selector": C.LockSelector
                    }, r.createElement(l.Pa, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(l.W, {
                        color: l.O.Overlay,
                        fontSize: l.Ca.Size5,
                        "data-test-selector": C.UpsellSelector
                    }, Object(a.d)("View with {title}", {
                        title: this.props.restriction.title
                    }, "VideoPreviewCardRestriction"))), r.createElement(l.Xa, null, r.createElement(l.z, {
                        type: l.F.Hollow,
                        ariaLabel: e,
                        targetBlank: !0,
                        disabled: "" === this.props.restriction.upsellLinkTo,
                        linkTo: this.props.restriction.upsellLinkTo,
                        overlay: !0
                    }, e))), r.createElement(l.Bb, {
                        display: l.X.InlineFlex,
                        position: l.hb.Absolute,
                        attachTop: this.props.attachTop,
                        attachBottom: !this.props.attachTop,
                        attachRight: !0,
                        margin: .5,
                        zIndex: l.ec.Default,
                        fontSize: l.Ca.Size6,
                        background: l.r.Overlay,
                        borderRadius: l.x.Medium,
                        color: l.O.Overlay
                    }, r.createElement(l.Ub, {
                        direction: this.props.attachTop ? l.Wb.Bottom : l.Wb.Top,
                        align: l.Vb.Right,
                        label: i
                    }, r.createElement(l.qb, {
                        asset: n,
                        height: 20,
                        width: 20
                    }))))
                }, t
            }(r.PureComponent);
            i("5NSO");

            function B(e) {
                return void 0 !== e.watchedProgressPercent
            }

            function G(e) {
                return void 0 !== e.clipCreatedByChannelLogin
            }! function(e) {
                e.Avatar = "preview-card-avatar", e.BoxArt = "preview-card-box-art"
            }(O || (O = {})),
            function(e) {
                e[e.SingleGameList = 1] = "SingleGameList", e[e.SingleChannelList = 2] = "SingleChannelList", e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
            }(A || (A = {}));
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
                        return r.createElement("div", n.__assign({
                            className: "preview-card"
                        }, Object(f.a)(this.props)), r.createElement(l.Bb, {
                            position: l.hb.Relative,
                            borderRadius: l.x.Medium,
                            overflow: l.cb.Hidden
                        }, this.renderVODRestrictionOverlay(), r.createElement(l.U, {
                            to: Object(F.a)(this.getTrackingContext(h.PageviewContent.VideoThumbnail), this.props.linkTo),
                            onClick: this.props.onThumbnailClick || this.props.onClick,
                            "data-a-target": "preview-card-image-link"
                        }, this.props.thumbnailImageProps && r.createElement(T, {
                            staticImageProps: this.props.thumbnailImageProps,
                            animatedImageProps: B(this.props) && this.props.animatedImageProps || void 0,
                            trackImageLatency: this.props.trackImageLatency
                        }), this.renderOverlay())), r.createElement(l.Xa, {
                            display: l.X.Flex,
                            flexWrap: l.Ba.NoWrap,
                            margin: {
                                top: 1
                            }
                        }, r.createElement(l.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, this.renderIconicImage()), r.createElement(l.Xa, {
                            className: "preview-card__titles-wrapper",
                            flexGrow: 1,
                            flexShrink: 1
                        }, this.renderTitles(), this.renderTags()), this.props.contextualCardActionProps && r.createElement(l.Xa, {
                            flexGrow: 0,
                            flexShrink: 0
                        }, r.createElement(this.props.contextualCardActionProps.component, n.__assign({}, this.props.contextualCardActionProps.props)))))
                    }, t.prototype.renderOverlay = function() {
                        return function(e) {
                            return void 0 !== e.streamType
                        }(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(E.a, {
                                type: this.props.streamType,
                                hosting: !!this.props.hostedByChannelLogin
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: Object(a.d)("{viewerCount, plural, one {# viewer} other {# viewers}}", {
                                    viewerCount: this.props.currentViewerCount
                                }, "VideoPreviewCard")
                            }),
                            bottomRight: void 0
                        }) : B(this.props) ? r.createElement(w, {
                            topLeft: void 0 !== this.props.durationInSeconds && r.createElement(S, {
                                value: Object(P.b)(this.props.durationInSeconds),
                                icon: l.rb.Play,
                                withBackground: !0
                            }),
                            topRight: this.props.listPosition && r.createElement(S, {
                                withBackground: !0,
                                value: this.getListPositionLabel()
                            }),
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(S, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            }),
                            progressBarPercent: this.props.watchedProgressPercent,
                            topBar: this.props.topBar
                        }) : G(this.props) ? r.createElement(w, {
                            topLeft: r.createElement(S, {
                                value: Object(P.b)(this.props.durationInSeconds),
                                icon: l.rb.Clip,
                                withBackground: !0
                            }),
                            topRight: void 0,
                            bottomLeft: r.createElement(S, {
                                value: this.getViewCountLabel()
                            }),
                            bottomRight: r.createElement(S, {
                                value: Object(a.c)(new Date(this.props.datePublished), "medium")
                            })
                        }) : void 0
                    }, t.prototype.getListPositionLabel = function() {
                        return B(this.props) && this.props.listPosition ? Object(a.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                            position: this.props.listPosition.position,
                            totalVideos: this.props.listPosition.totalVideos
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.getViewCountLabel = function() {
                        return B(this.props) || G(this.props) ? Object(a.d)("{viewerCount, plural, one {# view} other {# views}}", {
                            viewerCount: this.props.viewCount
                        }, "VideoPreviewCard") : ""
                    }, t.prototype.renderIconicImage = function() {
                        return this.props.context === A.SingleChannelList && this.props.gameBoxArtImageProps && this.props.gameBoxArtImageProps.src && this.props.gameTitleLinkTo ? r.createElement(l.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(k, {
                            imageProps: this.props.gameBoxArtImageProps,
                            linkTo: Object(F.a)(this.getTrackingContext(h.PageviewContent.GameBoxart), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            aspect: l.p.BoxArt,
                            "data-test-selector": O.BoxArt,
                            "data-a-target": "preview-card-boxart-link"
                        })) : (this.props.context === A.SingleGameList || this.props.context === A.MixedGameAndChannelList) && this.props.channelImageProps && this.props.channelImageProps.src ? r.createElement(l.Xa, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(k, {
                            imageProps: this.props.channelImageProps,
                            linkTo: Object(F.a)(this.getTrackingContext(h.PageviewContent.UserThumbnail), this.props.channelLinkTo),
                            onClick: this.props.onChannelImageClick || this.props.onChannelLoginClick,
                            aspect: l.p.Aspect1x1,
                            "data-test-selector": O.Avatar
                        })) : void 0
                    }, t.prototype.renderTitles = function() {
                        var e = null,
                            t = [];
                        return this.shouldShowGameBalloon(this.props) || t.push({
                            text: Object(V.a)(this.props.channelLogin, this.props.channelDisplayName, !0),
                            linkTo: Object(F.a)(this.getTrackingContext(h.PageviewContent.ChannelMetadata), this.props.channelLinkTo),
                            onClick: this.props.onChannelLoginClick,
                            automationSelector: "preview-card-channel-link"
                        }), G(this.props) && this.props.clipCreatedByChannelLoginLinkTo ? t.push({
                            text: Object(a.d)("Clipped by {userName}", {
                                userName: this.props.clipCreatedByChannelLogin || ""
                            }, "VideoPreviewCard"),
                            linkTo: this.props.clipCreatedByChannelLoginLinkTo,
                            onClick: this.props.onClipCreatedByChannelLoginClick,
                            automationSelector: "preview-card-clip-curator-link"
                        }) : B(this.props) && this.props.multipleVideoGameMarkersType && this.props.videoGameChanges && this.props.videoGameChanges.length > 0 ? e = this.renderPreviewCardGameInfo(this.props.multipleVideoGameMarkersType, this.props.videoGameChanges, this.props.onVideoGameBalloonClick, this.props.onVideoGameBalloonItemClick) : this.props.context !== A.SingleGameList && this.props.gameTitle && this.props.gameTitleLinkTo && t.push({
                            text: this.props.gameTitle,
                            linkTo: Object(F.a)(this.getTrackingContext(h.PageviewContent.GameMetadata), this.props.gameTitleLinkTo),
                            onClick: this.props.onGameTitleClick,
                            automationSelector: "preview-card-game-link"
                        }), r.createElement(r.Fragment, null, r.createElement(I, {
                            title: this.props.title,
                            onClick: this.props.onVideoTitleClick || this.props.onClick,
                            linkTo: Object(F.a)(this.getTrackingContext(h.PageviewContent.VideoTitle), this.props.linkTo),
                            subtitles: t,
                            "data-a-target": "preview-card-title-link"
                        }), e)
                    }, t.prototype.renderTags = function() {
                        return this.props.tagListProps && 0 !== this.props.tagListProps.tags.length ? r.createElement(l.Xa, {
                            margin: {
                                top: .5
                            }
                        }, r.createElement(_.a, n.__assign({}, this.props.tagListProps, {
                            tagNumberLimit: 3
                        }))) : null
                    }, t.prototype.renderVODRestrictionOverlay = function() {
                        return B(this.props) && this.props.restriction && this.props.restriction.productName && this.props.restriction.title ? r.createElement(D, {
                            restriction: this.props.restriction,
                            attachTop: !0
                        }) : null
                    }, t.prototype.shouldShowGameBalloon = function(e) {
                        return !!B(e) && (!!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === L.a.Balloon)
                    }, t.prototype.renderPreviewCardGameInfo = function(e, t, i, n) {
                        switch (e) {
                            case L.a.Balloon:
                                return r.createElement(u, {
                                    videoGameChanges: t,
                                    videoID: t[0].videoID,
                                    onBalloonClick: i,
                                    onBalloonItemClick: n
                                });
                            case L.a.Inline:
                                return r.createElement(g, {
                                    videoGameChanges: t,
                                    trackingContext: this.props.trackingContext
                                });
                            case L.a.None:
                                return null;
                            default:
                                return e
                        }
                    }, t
                }(r.Component),
                j = Object(N.b)("PreviewCard", {
                    autoReportInteractive: !0
                })(R);
            i.d(t, !1, function() {
                return O
            }), i.d(t, "b", function() {
                return A
            }), i.d(t, !1, function() {
                return R
            }), i.d(t, "a", function() {
                return j
            })
        },
        HrG3: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return l
            });
            var n = i("q1tI"),
                r = i("/7QA"),
                a = i("Ue10"),
                o = (i("RFKy"), "view-all-button-selector");

            function l(e) {
                var t = n.createElement(a.Xa, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: a.Aa.Column,
                    justifyContent: a.Wa.Center,
                    display: a.X.Flex
                }, n.createElement(a.W, {
                    color: a.O.Link,
                    fontSize: a.Ca.Size4,
                    noWrap: !0
                }, Object(r.d)("View All", "Following--ViewAllButton")), n.createElement(a.W, {
                    color: a.O.Alt2,
                    fontSize: a.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = n.createElement(a.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), n.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, n.createElement(a.Xa, {
                    margin: {
                        bottom: 5
                    }
                }, n.createElement(a.o, {
                    ratio: e.aspectRatio
                }, n.createElement(a.Bb, {
                    background: a.r.Alt2,
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
            var r = i("0Rl0");
            i.d(t, "VideoPreviewCardPlaceholder", function() {
                return r.a
            })
        },
        XA5B: function(e, t, i) {},
        XEwr: function(e, t, i) {
            "use strict";

            function n(e) {
                if (!e || 0 === e.edges.length) return [];
                var t = [];
                return e.edges.forEach(function(e) {
                    e.node.id && t.push(e.node)
                }), t
            }

            function r(e) {
                return "slug" in e
            }
            i.d(t, "b", function() {
                return n
            }), i.d(t, "a", function() {
                return r
            })
        },
        YDp0: function(e, t, i) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-connection-fragment.gql"\nquery LatestCollectionsShelf_Collections($channelLogin: String! $first: Int! $cursor: Cursor) {\nuser(login: $channelLogin) {\nid\ncollections(first: $first after: $cursor) {\n...PreviewCollectionConnection\n}\nself {\nisEditor\n}\n}\ncurrentUser {\nid\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("izJ5").definitions)), e.exports = n
        },
        Z57o: function(e, t, i) {
            "use strict";
            var n, r, a = i("mrSG"),
                o = i("q1tI"),
                l = i("oJmH"),
                s = i("H1ft"),
                c = i("QzU5"),
                d = i("vRsq"),
                p = i("2xye"),
                u = i("tuvy"),
                m = i("GnwI"),
                h = i("pfAL"),
                g = i("7g+E"),
                v = i("NAv5"),
                f = i("fvjX"),
                k = i("yR8l"),
                C = i("9C/b"),
                y = i("8/mp"),
                b = i("hkkJ"),
                w = i("Ue10"),
                S = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props.collections;
                        if (!t) return o.createElement(w.Za, {
                            fillContent: !0
                        });
                        var i = null;
                        Object(u.a)() && Object(u.c)() && (i = Object(d.n)(this.props));
                        var n = t.reduce(function(t, n) {
                                return n.id !== i && t.push(o.createElement(b.a, {
                                    key: n.id,
                                    collection: n,
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
                        })), o.createElement(o.Fragment, null, n, r)
                    }, t
                }(o.Component),
                N = Object(m.b)("LatestCollectionsShelf", {
                    autoReportInteractive: !0
                })(Object(C.a)(S)),
                x = i("YDp0"),
                T = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (this.props.data && this.props.data.error) return null;
                        if (!this.props.data || this.props.data.loading) return o.createElement(N, {
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
                            var i = this.props.lastUpdateCutOff;
                            t = t.filter(function(e) {
                                return Object(v.isAfter)(new Date(e.updatedAt), i)
                            })
                        }
                        var n = this.props.data.currentUser,
                            r = !(!n || n.id !== e.id) || !(!e.self || !e.self.isEditor);
                        return o.createElement(N, {
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
                I = Object(f.compose)(Object(k.a)(x, {
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
                                    i = e.data.user.collections.edges[t];
                                return i ? e.data.fetchMore({
                                    query: x,
                                    variables: a.__assign({}, e.data.variables, {
                                        cursor: i.cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var i = t.fetchMoreResult;
                                        return e.user && e.user.collections && i.user && i.user.collections ? {
                                            user: a.__assign({}, i.user, {
                                                collections: a.__assign({}, i.user.collections, {
                                                    edges: e.user.collections.edges.concat(i.user.collections.edges)
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
                }), Object(m.b)("LatestCollectionsShelfContainer"))(T),
                L = i("/7QA"),
                E = i("XKWF"),
                V = i("GFmA"),
                P = i("6h5w"),
                F = i("eqgM"),
                _ = i("EJax");
            ! function(e) {
                e.LatestCollections = "latest-collections", e.VideoSet = "video-set", e.TimeBoxVideoSet = "time-box-video-set"
            }(n || (n = {})),
            function(e) {
                e.Tower = "video-tower", e.Carousel = "video-carousel"
            }(r || (r = {}));
            var O, A = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.videos,
                            t = this.props.minimum || 1;
                        if (e && e.length < t) return null;
                        var i = this.props.expandLinkOptions && {
                            channelLogin: this.props.channelLogin,
                            options: this.props.expandLinkOptions
                        };
                        return o.createElement(o.Fragment, null, o.createElement(P.a, {
                            expandLink: i,
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
                        return o.createElement(F.a, {
                            listContext: V.b.SingleChannelList,
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
                        return o.createElement(_.b, {
                            listContext: V.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            trackingContent: p.PageviewContent.VideoShelf,
                            trackingMedium: p.PageviewMedium.ChannelVideos,
                            videos: this.props.videos,
                            hideTags: !0
                        })
                    }, t
                }(o.Component),
                D = i("cy7x");
            ! function(e) {
                e.QuickHits = "quick-hits", e.LongHits = "long-hits"
            }(O || (O = {}));
            var B = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        if (!this.props.data || this.props.data.error) return null;
                        if (!(this.props.data.loading || this.props.data.user && this.props.data.user.videos)) return null;
                        var e = this.props.shelf,
                            t = !this.props.data.loading && this.props.data.user && this.props.data.user.videos ? this.props.data.user.videos.edges : null,
                            i = t ? [] : null;
                        if (t && i)
                            for (var n = 0, r = t; n < r.length; n++) {
                                var a = r[n];
                                a.node && i.push(a.node)
                            }
                        var l, s = e.maxAgeDays;
                        if (i && i.length > 0 && s && !(Object(v.differenceInDays)(new Date, new Date(i[0].publishedAt)) <= s)) return null;
                        if (e.separateGames) return this.renderGameShelves(i);
                        if (e.quickHits) return this.renderQuickHitsShelf(e.quickHits, i);
                        var c = e.videoTypes;
                        if (c && 1 === c.length) {
                            var p = Object(d.B)(c[0]);
                            p && (l = {
                                filter: p,
                                sort: e.sortBy
                            })
                        }
                        return o.createElement(A, {
                            channelLogin: this.props.channelLogin,
                            expandLinkOptions: l,
                            format: e.format,
                            minimum: e.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: this.formatTitle(),
                            videos: i
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.data && e.data.loading && this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.renderQuickHitsShelf = function(e, t) {
                        var i = null,
                            n = null;
                        if (t) {
                            var r = [],
                                a = [];
                            t.forEach(function(t) {
                                t.lengthSeconds <= e.maxLengthSeconds ? r.push(t) : a.push(t)
                            }), i = r, n = a
                        }
                        return o.createElement(o.Fragment, null, o.createElement(A, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": O.QuickHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(L.d)("Short Videos", "VideoShelfSet"),
                            videos: i
                        }), o.createElement(A, {
                            channelLogin: this.props.channelLogin,
                            "data-test-selector": O.LongHits,
                            format: this.props.shelf.format,
                            minimum: this.props.shelf.minimum,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            title: Object(L.d)("Long Videos", "VideoShelfSet"),
                            videos: n
                        }))
                    }, t.prototype.renderGameShelves = function(e) {
                        var t = this;
                        if (null === e) return null;
                        var i = [],
                            n = {};
                        e.forEach(function(e) {
                            if (e.game && e.game.id && "" !== e.game.displayName) {
                                var t = e.game.displayName;
                                t in n || (n[t] = [], i.push(t)), n[t].push(e)
                            }
                        });
                        var r = this.props.shelf.minimum || 1,
                            a = (i = (i = i.filter(function(e) {
                                return n[e].length >= r
                            })).slice(0, 4)).map(function(e) {
                                var i = n[e];
                                return o.createElement(A, {
                                    channelLogin: t.props.channelLogin,
                                    format: t.props.shelf.format,
                                    key: e,
                                    minimum: t.props.shelf.minimum,
                                    multipleVideoGameMarkersType: t.props.multipleVideoGameMarkersType,
                                    title: e,
                                    videos: i
                                })
                            });
                        return o.createElement(o.Fragment, null, a)
                    }, t.prototype.formatTitle = function() {
                        var e = this.props.shelf.videoTypes;
                        if (!e) return Object(L.d)("Latest Videos", "VideoShelfSet");
                        var t = Object(L.d)("Latest Highlights", "VideoShelfSet");
                        if (e.length > 1) return t;
                        var i = e[0];
                        switch (i) {
                            case c.a.PastPremiere:
                                return Object(L.d)("Latest Premieres", "VideoShelfSet");
                            case c.a.Highlight:
                                return t;
                            case c.a.Archive:
                                return Object(L.d)("Latest Broadcasts", "VideoShelfSet");
                            case c.a.Upload:
                            case c.a.PremiereUpload:
                                return Object(L.d)("Latest Uploads", "VideoShelfSet");
                            default:
                                return i
                        }
                    }, t
                }(o.Component),
                G = Object(l.compose)(Object(k.a)(D, {
                    options: function(e) {
                        var t = 10;
                        return e.shelf.separateGames ? t = 100 : e.shelf.quickHits && (t = 50), {
                            variables: {
                                first: t,
                                channelLogin: e.channelLogin,
                                sort: Object(E.c)(e.shelf.sortBy),
                                types: e.shelf.videoTypes
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(m.b)("VideoSetShelf"))(B);
            i("nPIx");
            i.d(t, "b", function() {
                return R
            }), i.d(t, "a", function() {
                return j
            });
            var R = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderCurrentCollection = function() {
                            if (t.props.collectionID && Object(u.a)() && Object(u.c)()) return o.createElement(w.Xa, {
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
                                multipleVideoGameMarkersType: Object(s.b)()
                            }))
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = Object(s.b)();
                        return o.createElement("div", null, this.renderCurrentCollection(), o.createElement(G, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: n.VideoSet,
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
                        }), o.createElement(G, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: n.VideoSet,
                                format: r.Carousel,
                                quickHits: {
                                    maxLengthSeconds: 1800
                                },
                                maxAgeDays: 180,
                                sortBy: d.f.Newest,
                                videoTypes: [c.a.Highlight, c.a.Upload, c.a.PastPremiere, c.a.PremiereUpload]
                            },
                            multipleVideoGameMarkersType: e
                        }), o.createElement(I, {
                            channelLogin: this.props.channelLogin,
                            shelf: {
                                __typename: n.LatestCollections,
                                allowPaging: !0,
                                first: 2
                            },
                            multipleVideoGameMarkersType: e
                        }))
                    }, t
                }(o.Component),
                j = Object(l.compose)(Object(m.b)("ChannelVideosOverviewContent", {
                    autoReportInteractive: !0
                }))(R)
        },
        ZbA5: function(e, t, i) {
            "use strict";
            var n, r, a, o, l = i("mrSG"),
                s = i("TSYQ"),
                c = i("q1tI"),
                d = i("/7QA"),
                p = i("oB8h"),
                u = i("Ue10");
            i("kVMo");
            ! function(e) {
                e.HostingDot = "stream-type-indicator__hosting-dot"
            }(o || (o = {}));
            var m = ((n = {})[p.a.Live] = "stream-type-indicator--live", n[p.a.Premiere] = "stream-type-indicator--premiere", n[p.a.Rerun] = "stream-type-indicator--rerun", n[p.a.WatchParty] = "stream-type-indicator--rerun", n),
                h = ((r = {})[p.a.Premiere] = u.rb.VideoPremiere, r[p.a.Rerun] = u.rb.VideoRerun, r[p.a.WatchParty] = u.rb.VideoRerun, r),
                g = ((a = {})[p.a.Premiere] = u.sb.Live, a[p.a.Rerun] = u.sb.Inherit, a[p.a.WatchParty] = u.sb.Inherit, a),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return l.__extends(t, e), t.prototype.render = function() {
                        return c.createElement(u.Bb, {
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
                            type: u.Rb.Span
                        }, this.getLabel()))
                    }, t.prototype.getClassNames = function() {
                        var e = {
                            "stream-type-indicator": !0
                        };
                        return e[m[this.props.type]] = !0, s(e)
                    }, t.prototype.getIcon = function() {
                        return this.props.hosting ? c.createElement(u.Bb, {
                            borderRadius: u.x.Rounded,
                            className: "stream-type-indicator__hosting-dot",
                            "data-test-selector": o.HostingDot
                        }) : this.props.type === p.a.Live ? c.createElement(u.Xa, {
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
            i.d(t, !1, function() {
                return o
            }), i.d(t, "a", function() {
                return v
            })
        },
        bdIb: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return l
            });
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("/7QA"),
                o = i("GFmA"),
                l = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(o.a, {
                            context: this.props.context,
                            title: this.props.clip.title,
                            linkTo: {
                                pathname: this.props.clip.broadcaster ? "/" + this.props.clip.broadcaster.login + "/clip/" + this.props.clip.slug : "",
                                state: this.getLinkState()
                            },
                            onClick: this.onClickHandler,
                            thumbnailImageProps: {
                                src: this.props.clip.thumbnailURL || a.p.config.defaultStreamPreviewURL,
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
        cRsL: function(e, t, i) {},
        cy7x: function(e, t, i) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery VideoSetShelf_Videos($channelLogin: String! $sort: VideoSort! $first: Int! $types: [BroadcastType!]) {\nuser(login: $channelLogin) {\nid\nvideos(first: $first sort: $sort types: $types) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("he03").definitions)), e.exports = n
        },
        daWW: function(e, t, i) {
            "use strict";
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("GFmA"),
                o = i("PfQt"),
                l = i("GnwI"),
                s = i("RXle"),
                c = i("L5dg"),
                d = i("Ue10"),
                p = function(e) {
                    var t = null,
                        i = null;
                    if (null === e.videos) t = r.createElement(c.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (i = r.createElement(o.a, n.__assign({}, e.viewAllButtonProps)));
                        var l = e.videos.map(function(t, i) {
                            return r.createElement(d.Xa, {
                                "data-a-target": "video-tower-card-" + i,
                                key: "video-" + i,
                                margin: {
                                    bottom: 2
                                }
                            }, r.createElement(s.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || a.b.MixedGameAndChannelList,
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
                        t = r.createElement(r.Fragment, null, l)
                    }
                    return r.createElement(d.Xb, {
                        gutterSize: d.Zb.Small,
                        childWidth: e.videoCardSize || d.Yb.Large,
                        placeholderItems: 20
                    }, t, i)
                },
                u = Object(l.b)("VideoTower", {
                    autoReportInteractive: !0
                })(p);
            i.d(t, !1, function() {
                return p
            }), i.d(t, "a", function() {
                return u
            })
        },
        eqgM: function(e, t, i) {
            "use strict";
            var n, r, a = i("/MKj"),
                o = i("mrSG"),
                l = i("q1tI"),
                s = i("/7QA"),
                c = i("GnwI"),
                d = i("TSYQ"),
                p = i("17x9"),
                u = i("Ue10");
            i("A7Y/");
            var m = "carousel-content",
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentElementIndex: 0,
                            hasBeenVisible: !1
                        }, t.moveCarouselToCardIndex = function(e) {
                            if (t.props.children && !(t.props.children.length <= 1)) {
                                var i = t.getNumberOfVisibleElements();
                                t.props.children.length < i || (e < t.props.children.length && e > t.props.children.length - i ? t.setState({
                                    currentElementIndex: t.props.children.length - i
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
                                    i = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                                return i && (e = i.childElementCount), t.getLastVisibleIndex() >= e
                            }
                            return !0
                        }, t.isBackButtonDisabled = function() {
                            return 0 === t.state.currentElementIndex
                        }, t.getLastVisibleIndex = function() {
                            return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                        }, t.getNumberOfVisibleElements = function() {
                            var e = t.carouselContainerRef.getBoundingClientRect(),
                                i = e.left,
                                n = e.right - i,
                                r = t.getVideoCardEndPadding();
                            return Math.floor((n + r) / t.getChildWidth())
                        }, t.refHandler = function(e) {
                            return t.carouselContainerRef = e
                        }, t.getChildWidth = function() {
                            if (!t.carouselContainerRef) return 0;
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                        }, t.getVideoCardEndPadding = function() {
                            var e = t.carouselContainerRef.querySelector("[data-js-selector=" + m + "]");
                            if (!e || 0 === e.children.length) return 0;
                            var i = window.getComputedStyle(e.children[0]).paddingRight || "";
                            return 2 * parseInt(i, 10) || 0
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
                        return l.createElement(u.Pa, {
                            margin: {
                                y: 1
                            },
                            position: u.hb.Relative
                        }, l.createElement("div", {
                            className: "preview-card-carousel",
                            ref: this.refHandler
                        }, l.createElement(u.Xa, {
                            className: "preview-card-carousel__child-container",
                            overflow: u.cb.Hidden,
                            position: u.hb.Relative,
                            fullWidth: !0,
                            "data-test-selector": "child-container"
                        }, l.createElement(u.Pa, {
                            margin: {
                                bottom: 1
                            }
                        }, l.createElement("div", {
                            className: "preview-card-carousel__body",
                            style: {
                                transform: this.transformString()
                            },
                            "data-test-selector": "carousel-body"
                        }, l.createElement(u.Xb, {
                            noWrap: !0,
                            noGrow: !0,
                            childWidth: this.props.cardWidth || u.Yb.Large,
                            gutterSize: u.Zb.Small,
                            "data-js-selector": m
                        }, this.props.children)))), l.createElement(u.Xa, {
                            className: "preview-card-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.hb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0
                        }, l.createElement(k, {
                            direction: g.DirectionPrevious,
                            disabled: !this.props.children || this.isBackButtonDisabled(),
                            onClickHandler: this.moveCarouselBackward
                        })), l.createElement(u.Xa, {
                            className: "preview-card-carousel__nav",
                            display: u.X.Flex,
                            alignItems: u.f.Center,
                            position: u.hb.Absolute,
                            attachTop: !0,
                            attachRight: !0,
                            fullHeight: !0
                        }, l.createElement(k, {
                            direction: g.DirectionNext,
                            disabled: !this.props.children || this.isForwardButtonDisabled(),
                            onClickHandler: this.moveCarouselForward
                        }))))
                    }, t.prototype.checkVisible = function(e) {
                        this.props.children && this.props.children.length > 0 && !this.state.hasBeenVisible && function(e) {
                            if (!e) return !1;
                            var t = e.getBoundingClientRect(),
                                i = window.innerWidth,
                                n = window.innerHeight;
                            return !(t.right < 0 || t.bottom < 0 || t.left > i || t.top > n)
                        }(this.carouselContainerRef) && this.props.onFirstVisible()
                    }, t.contextTypes = {
                        registerReceiver: p.func
                    }, t
                }(l.Component),
                g = {
                    DirectionPrevious: "previous",
                    DirectionNext: "next"
                },
                v = ((n = {})[g.DirectionPrevious] = "previous", n[g.DirectionNext] = "next", n),
                f = ((r = {})[g.DirectionPrevious] = u.rb.AngleLeft, r[g.DirectionNext] = u.rb.AngleRight, r),
                k = function(e) {
                    var t, i = v[e.direction],
                        n = ((t = {})[g.DirectionPrevious] = Object(s.d)("previous", "CarouselNavButton"), t[g.DirectionNext] = Object(s.d)("next", "CarouselNavButton"), t),
                        r = d("preview-card-carousel__button", "preview-card-carousel__button--" + i, {
                            "preview-card-carousel__button--disabled": e.disabled
                        });
                    return l.createElement(u.Xa, {
                        className: r,
                        position: u.hb.Relative,
                        display: u.X.Flex,
                        alignItems: u.f.Stretch
                    }, l.createElement(u.A, {
                        ariaLabel: n[e.direction],
                        blurAfterClick: !0,
                        "data-test-selector": i + "-button",
                        disabled: e.disabled,
                        icon: f[e.direction],
                        onClick: e.onClickHandler,
                        size: u.B.Large
                    }))
                },
                C = i("bdIb"),
                y = i("XEwr"),
                b = i("RXle"),
                w = 10,
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            hasTrackedItemSectionLoad: !1
                        }, t.handleFirstVisible = function() {
                            if (!t.state.hasTrackedItemSectionLoad) {
                                for (var e = t.props.videos ? t.props.videos : [], i = [], n = [], r = 0, a = e; r < a.length; r++) {
                                    var l = a[r];
                                    i.push(l.id), n.push(l.viewCount)
                                }
                                s.o.trackItemSectionLoad(o.__assign({
                                    carousel_content: t.props.tracking.content,
                                    location: t.props.tracking.location,
                                    rendered_item_count: e.length,
                                    rendered_item_list: i,
                                    rendered_item_types: [t.props.tracking.itemType],
                                    rendered_items_viewcounts: n
                                }, t.props.tracking.source)), t.setState({
                                    hasTrackedItemSectionLoad: !0
                                })
                            }
                        }, t.onPreviewCardClick = function(e) {
                            if (t.props.videos) {
                                var i = t.props.videos[e];
                                s.o.trackItemSectionClick(o.__assign({
                                    carousel_content: t.props.tracking.content,
                                    item_id: i.id,
                                    item_index: e,
                                    item_type: t.props.tracking.itemType,
                                    item_viewcount: i.viewCount,
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
                                for (var i = 0; i < t.props.videos.length; i++) {
                                    if (t.props.videos[i].id === t.props.currentlyWatchingVideoID) {
                                        e = i;
                                        break
                                    }
                                }
                            return e
                        }, t.getVideoCards = function() {
                            var e = t.props.videos;
                            if (null === e) {
                                for (var i = [], n = 0; n < w; n++) i.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                    key: "carousel-placeholder-" + n
                                }));
                                return i
                            }
                            var r = [];
                            if (t.props.spotlight) {
                                var a = l.createElement(b.VideoPreviewCard, {
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
                                for (var s = t.getCurrentlyWatchingVideoIndex(), c = 0; c < e.length; c++) {
                                    var d = e[c];
                                    t.props.firstPageLoaded || !(c < s || c > s + w) ? Object(y.a)(d) || r.push(l.createElement(b.VideoPreviewCard, {
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
                                    })) : r.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                        key: "carousel-placeholder-" + c
                                    }))
                                } else
                                    for (c = 0; c < e.length; c++)
                                        if (c + o < w || t.props.firstPageLoaded) {
                                            d = e[c];
                                            if (Object(y.a)(d)) {
                                                if (d.slug === t.props.currentlyWatchingVideoID) continue;
                                                r.push(l.createElement(C.a, {
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
                                                r.push(l.createElement(b.VideoPreviewCard, {
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
                                        } else r.push(l.createElement(b.VideoPreviewCardPlaceholder, {
                                            key: "carousel-placeholder-" + c
                                        }));
                            return r
                        }, t.getPositionBanner = function(e) {
                            if (t.props.renderPositionBanner && t.props.renderCurrentlyWatchingCard && t.props.videos) {
                                var i = t.getCurrentlyWatchingVideoIndex(),
                                    n = e === i,
                                    r = e === i + 1,
                                    a = Object(s.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                        position: e + 1,
                                        totalVideos: t.props.videos.length
                                    }, "VideoCarousel");
                                return n ? {
                                    title: Object(s.d)("Now playing", "VideoCarousel"),
                                    subTitle: a,
                                    selected: !0
                                } : r ? {
                                    title: Object(s.d)("Up next", "VideoCarousel"),
                                    subTitle: a
                                } : void 0
                            }
                        }, t.willRenderPositionBanner = function(e) {
                            if (!t.props.renderPositionBanner || !t.props.videos) return !1;
                            var i = t.getCurrentlyWatchingVideoIndex();
                            return e === i || e === i + 1
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
                        return l.createElement(h, {
                            options: this.state.scrollToOptions,
                            cardWidth: this.props.videoCardSize,
                            onFirstVisible: this.handleFirstVisible
                        }, this.getVideoCards())
                    }, t
                }(l.Component),
                N = Object(c.b)("VideoCarousel", {
                    autoReportInteractive: !0
                })(S);
            i.d(t, "a", function() {
                return x
            });
            var x = Object(a.connect)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(N)
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
        gcyA: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = i("Z57o");
            i.d(t, "ChannelVideosOverviewPresentation", function() {
                return n.b
            }), i.d(t, "ChannelVideosOverviewContent", function() {
                return n.a
            })
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
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("iiOx").definitions)), e.exports = n
        },
        hkkJ: function(e, t, i) {
            "use strict";
            var n, r = i("mrSG"),
                a = i("q1tI"),
                o = i("/7QA"),
                l = i("GFmA"),
                s = i("DMoW"),
                c = i("tuvy"),
                d = i("GnwI"),
                p = i("NAv5");
            ! function(e) {
                e.KeepWatching = "keep-watching", e.WatchNext = "watch-next"
            }(n || (n = {}));
            var u = .8;
            var m = i("6h5w"),
                h = i("eqgM"),
                g = i("Ue10");
            i.d(t, "a", function() {
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
                            i = this.getCollectionVideos();
                        if (i && 0 === i.length) return null;
                        var r = 0,
                            d = t && t.type === s.m.SERIES && i && i.length >= 4;
                        if (t && i && d && Object(c.a)() && Object(c.c)()) {
                            var m = function(e) {
                                for (var t = e.items.edges, i = t.length, r = null, a = 0; a < t.length; a++) {
                                    var o = t[a];
                                    if (o) {
                                        var l = o.node,
                                            s = l.self && l.self.viewingHistory && l.self.viewingHistory;
                                        if (s && s.updatedAt && s.position)
                                            if (r) {
                                                var c = new Date(r.viewedAt),
                                                    d = new Date(s.updatedAt);
                                                Object(p.isAfter)(d, c) && (r = {
                                                    index: a,
                                                    value: l,
                                                    viewedAt: s.updatedAt,
                                                    viewingPosition: s.position
                                                })
                                            } else r = {
                                                index: a,
                                                value: l,
                                                viewedAt: s.updatedAt,
                                                viewingPosition: s.position
                                            }
                                    }
                                }
                                if (!r) return null;
                                if (r.viewingPosition / r.value.lengthSeconds > u) {
                                    var m = r.index + 1;
                                    if (m < i) {
                                        var h = t[m];
                                        if (h && h.node) return {
                                            item: h.node,
                                            position: m,
                                            type: n.WatchNext
                                        }
                                    }
                                }
                                return {
                                    item: r.value,
                                    position: r.index,
                                    type: n.KeepWatching
                                }
                            }(t);
                            if (m && (e = {
                                    card: m.item,
                                    title: function(e) {
                                        switch (e) {
                                            case n.KeepWatching:
                                                return Object(o.d)("Continue Watching", "SeriesResumeRecommendation");
                                            case n.WatchNext:
                                                return Object(o.d)("Watch Next", "SeriesResumeRecommendation");
                                            default:
                                                return e
                                        }
                                    }(m.type)
                                }, r = m.position + 1), !e) e = {
                                card: i[i.length - 1],
                                title: Object(o.d)("Latest Video", "CollectionCarousel")
                            }, r = i.length;
                            e.subTitle = Object(o.d)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                                position: r,
                                totalVideos: i.length
                            }, "CollectionCarousel")
                        }
                        return a.createElement(a.Fragment, null, this.renderCarouselHeader(), a.createElement(h.a, {
                            collectionID: t ? t.id : void 0,
                            listContext: l.b.SingleChannelList,
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            spotlight: e,
                            tracking: {
                                content: this.props.tracking.content,
                                medium: this.props.tracking.medium,
                                location: this.props.tracking.location,
                                source: this.props.tracking.source,
                                itemType: this.props.tracking.itemType
                            },
                            videos: i,
                            renderPositionLabel: !!e
                        }))
                    }, t.prototype.renderCarouselHeader = function() {
                        var e = this.props.collection;
                        return e ? a.createElement(g.Xa, null, a.createElement(g.Xa, {
                            display: g.X.Flex,
                            flexDirection: g.Aa.Row
                        }, a.createElement(g.Xa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(g.U, {
                            "data-test-selector": v.TitleLink,
                            to: "/collections/" + e.id,
                            type: g.V.Inherit
                        }, a.createElement(m.a, {
                            titleMessage: e.title || this.props.fallbackTitle || ""
                        }))), !Object(c.a)() && a.createElement(g.z, {
                            type: g.F.Hollow,
                            size: g.D.Small,
                            icon: g.rb.Play,
                            linkTo: "/collections/" + e.id,
                            "data-test-selector": v.PlayAllButton
                        }, Object(o.d)("Play all", "LatestCollectionCarousel"))), a.createElement(g.W, {
                            color: g.O.Alt2,
                            type: g.Rb.Span,
                            "data-test-selector": v.Metadata
                        }, this.renderSubTitle(e))) : a.createElement(g.gb, {
                            width: 250,
                            lineCount: 1
                        })
                    }, t.prototype.renderSubTitle = function(e) {
                        var t = e.items ? e.items.totalCount : 0,
                            i = Object(o.d)("{videoCountText, plural, one {# video} other {# videos}}", {
                                videoCountText: t
                            }, "LatestCollectionCarousel");
                        return this.props.subTitle ? a.createElement(a.Fragment, null, this.props.subTitle, " · ", i) : e.description ? a.createElement(a.Fragment, null, e.description, " · ", i) : i
                    }, t.prototype.getCollectionVideos = function() {
                        var e = this.props.collection;
                        if (!e) return null;
                        var t = [];
                        return e.items.edges.forEach(function(e) {
                            e && "" !== e.node.id && t.push(e.node)
                        }), t
                    }, t
                }(a.Component),
                k = Object(d.b)("CollectionCarousel", {
                    autoReportInteractive: !0
                })(f)
        },
        izJ5: function(e, t, i) {
            var n = {
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
            n.loc.source = {
                body: '#import "twilight/features/video-carousel/components/collection-carousel/models/preview-collection-fragment.gql"\nfragment PreviewCollectionConnection on CollectionsConnection {\nedges {\ncursor\nnode {\n...PreviewCollection\n}\n}\npageInfo {\nhasNextPage\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            n.definitions = n.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !r[t] && (r[t] = !0, !0)
                })
            }(i("jr2J").definitions)), e.exports = n
        },
        jr2J: function(e, t, i) {
            var n = {
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
            n.loc.source = {
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
            n.definitions = n.definitions.concat(a(i("msok").definitions)), n.definitions = n.definitions.concat(a(i("+Vfn").definitions)), e.exports = n
        },
        "kF1+": function(e, t, i) {},
        kVMo: function(e, t, i) {},
        m493: function(e, t, i) {},
        msok: function(e, t) {
            var i = {
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
            i.loc.source = {
                body: "fragment CollectionFields on Collection {\nid\ndescription\nowner {\nid\nlogin\n}\nthumbnailURL(width: 320 height: 180) # only used for legacy CollectionCard\ntitle\ntype\nupdatedAt\nviewCount # only used for legacy CollectionCard\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = i
        },
        nPIx: function(e, t, i) {},
        pfAL: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return v
            });
            var n = i("mrSG"),
                r = i("q1tI"),
                a = i("fvjX"),
                o = i("/7QA"),
                l = i("GFmA"),
                s = i("yR8l"),
                c = i("vRsq"),
                d = i("2xye"),
                p = i("GnwI"),
                u = i("6h5w"),
                m = i("eqgM"),
                h = i("9kuA"),
                g = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        return !this.props.data || this.props.data.loading ? this.renderCarousel(null) : !this.props.data.user || this.props.data.error ? null : this.renderCarousel(this.props.data.user)
                    }, t.prototype.renderCarousel = function(e) {
                        var t = e ? this.parseClips(e) : null;
                        if (t && 0 === t.length) return null;
                        var i = this.props.channelLogin && this.props.includeExpandTitleLink ? {
                            channelLogin: this.props.channelLogin,
                            options: {
                                filter: c.e.Clips,
                                range: this.props.criteria.range
                            }
                        } : void 0;
                        return r.createElement("div", null, r.createElement(u.a, {
                            expandLink: i,
                            titleMessage: this.getTitle()
                        }), r.createElement(m.a, {
                            currentlyWatchingVideoID: this.props.currentlyWatchingClipSlug,
                            listContext: l.b.SingleChannelList,
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
                v = Object(a.compose)(Object(s.a)(h, {
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
                }), Object(p.b)("RecentBroadcasterClipsCarousel", {
                    autoReportInteractive: !0
                }))(g)
        },
        vDRX: function(e, t, i) {},
        yWUM: function(e, t, i) {
            "use strict";
            i.d(t, "a", function() {
                return r
            });
            var n = "0h0m1s";

            function r(e) {
                if (0 === e) return n;
                if (!e || e < 0) return "";
                var t = e,
                    i = Math.floor(t / 3600);
                return t %= 3600, i + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        }
    }
]);