webpackJsonp([50], {
    1003: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            var l = i || a(t),
                s = "";
            l && (s = "?sort=" + o(l));
            var d = n ? n.toLowerCase() : r(t);
            m.n.history.push(e + "/" + d + s)
        }

        function a(e) {
            return d(u.parse(e.location.search).sort || "")
        }

        function l(e) {
            switch (e.match.params.filter) {
                case g.a.Archive.toLowerCase():
                    return g.a.Archive;
                case g.a.Highlight.toLowerCase():
                    return g.a.Highlight;
                case g.a.Upload.toLowerCase():
                    return g.a.Upload;
                case g.a.PastPremiere.toLowerCase():
                    return g.a.PastPremiere;
                default:
                    return
            }
        }

        function r(e) {
            var t = l(e);
            return t ? t.toLowerCase() : "all"
        }

        function o(e) {
            switch (e) {
                case p.b:
                    return c.Popular;
                case p.a:
                    return c.Newest;
                default:
                    return e
            }
        }

        function s(e) {
            var t = u.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }

        function d(e) {
            switch (e.toUpperCase()) {
                case p.b:
                    return p.b;
                case p.a:
                    return p.a;
                default:
                    return null
            }
        }
        t.d = i, t.c = a, t.b = l, t.a = s, t.e = d;
        var c, u = n(20),
            m = (n.n(u), n(2)),
            g = n(263),
            p = n(849);
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(c || (c = {}))
    },
    1004: function(e, t, n) {
        "use strict";
        var i = n(1013);
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n(1015),
            l = (n.n(a), n(926));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return l.a
        })
    },
    1006: function(e, t) {},
    1007: function(e, t) {},
    1010: function(e, t) {},
    1013: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return v
        });
        var i = n(0),
            a = n(4),
            l = (n.n(a), n(20)),
            r = (n.n(l), n(1)),
            o = (n.n(r), n(10)),
            s = n(2),
            d = n(48),
            c = n(378),
            u = n(5),
            m = n(3),
            g = n(1014),
            p = (n.n(g), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.ignoreResumeTimeResponse = !1, t.onClickHandler = function() {
                        t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                    }, t.onMouseEnterHandler = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeaveHandler = function() {
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
                return i.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = r.createElement(m.U, {
                        position: m._2.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, r.createElement(m._5, {
                        size: m._6.Small,
                        value: t,
                        mask: !0
                    }))), r.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._39)(this.props)), r.createElement(m.A, null, r.createElement(m.U, {
                        fullWidth: !0
                    }, r.createElement(m.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(m._17, {
                        display: m.H.InlineFlex,
                        position: m._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: m._38.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, r.createElement(m._16, {
                        "data-test-selector": "video-view-count",
                        icon: m._9.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), r.createElement(m._17, {
                        display: m.H.InlineFlex,
                        position: m._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: m._38.Default,
                        fontSize: m.L.Size6,
                        background: m.m.Overlay,
                        color: m.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, r.createElement(m._16, {
                        "data-test-selector": "video-length",
                        icon: m._9.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), r.createElement(m.B, null, r.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Row,
                        flexWrap: m.K.NoWrap,
                        padding: {
                            top: 1
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = l.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad,
                        t = e ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        i = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return r.createElement(m.j, {
                        overflow: !0
                    }, r.createElement(o.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, r.createElement("div", {
                        className: n,
                        "data-test-selector": "preview-image-wrapper"
                    }, r.createElement(m.P, {
                        flexShrink: 0
                    }, r.createElement("figure", null, r.createElement(m.j, {
                        ratio: m.k.Aspect16x9
                    }, r.createElement("img", {
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
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return r.createElement(m.U, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, r.createElement(o.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, r.createElement(m.P, {
                        margin: {
                            right: 1
                        }
                    }, r.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, r.createElement(m._30, {
                        display: m.H.Block,
                        direction: m._32.Bottom,
                        label: e.name
                    }, r.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, r.createElement(m.C, {
                        aspect: m.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || s.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(s.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = r.createElement(o.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return r.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, r.createElement(m.U, {
                        "data-test-selector": "video-title",
                        overflow: m.Y.Hidden,
                        position: m._2.Relative
                    }, r.createElement(m._21, {
                        color: m.F.Base,
                        fontSize: m.L.Size5
                    }, r.createElement(o.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), r.createElement(m.U, {
                        flexShrink: 0,
                        flexGrow: 0
                    }, r.createElement(m._21, {
                        type: m._26.Span,
                        color: m.F.Alt2
                    }, e, r.createElement("span", null, " · "), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(r.Component)),
            v = Object(u.c)("VideoPreviewCard")(p)
    },
    1014: function(e, t) {},
    1015: function(e, t) {},
    1035: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(5),
            l = n(1004),
            r = n(926),
            o = n(3),
            s = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(r.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(o.U, {
                        key: "video-" + n,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(l.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(o._33, {
                    gutterSize: o._35.Small,
                    childWidth: o._34.Medium,
                    placeholderItems: 20
                }, t)
            },
            d = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return d
        })
    },
    1036: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
        t.a = i
    },
    1050: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = a.createElement(o.U, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.J.Column,
                justifyContent: o.T.Center,
                display: o.H.Flex
            }, a.createElement(o._21, {
                color: o.F.Link,
                fontSize: o.L.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), a.createElement(o._21, {
                color: o.F.Alt2,
                fontSize: o.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = a.createElement(l.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), a.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": d
            }, a.createElement(o.U, null, a.createElement(o.j, {
                ratio: e.aspectRatio
            }, a.createElement(o._17, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        }
        t.a = i;
        var a = n(1),
            l = (n.n(a), n(10)),
            r = n(2),
            o = n(3),
            s = n(1368),
            d = (n.n(s), "view-all-button-selector")
    },
    1056: function(e, t, n) {
        "use strict";

        function i(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    i = e[t];
                e[t] = e[n], e[n] = i
            }
            return e
        }
        t.a = i
    },
    1057: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n(0),
            a = n(20),
            l = (n.n(a), n(1)),
            r = (n.n(l), n(2)),
            o = n(7),
            s = n(17),
            d = n(3),
            c = n(1058),
            u = (n.n(c), n(1059)),
            m = (n.n(u), n(1060)),
            g = (n.n(m), function(e) {
                return "https://api.twitch.tv/api/users/" + e + "/follows/games/follow"
            }),
            p = function(e) {
                return "https://api.twitch.tv/api/users/" + e + "/follows/games/unfollow"
            },
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        followed: !1,
                        inProgress: !1
                    }, t.onClick = function() {
                        t.state.inProgress || t.setState({
                            inProgress: !0
                        }, t.mutateFollowGame)
                    }, t.mutateFollowGame = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, l, o, d, c, u = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, r.n.apollo.client.query({
                                            query: m
                                        })];
                                    case 1:
                                        return e = i.sent(), e.data.currentUser ? (t = {
                                            "Client-ID": r.n.config.legacyClientID,
                                            Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                            "Accept-Language": "en-us",
                                            "X-Requested-With": "XMLHttpRequest"
                                        }, n = r.n.store.getState(), l = Object(s.b)(n), o = Object(s.c)(n), o && (t.Authorization = "OAuth " + o.authToken), l && (t["Twitch-Api-Token"] = l), this.state.followed ? [4, fetch(p(e.data.currentUser.login), {
                                            method: "DELETE",
                                            body: a.stringify({
                                                src: "onboard",
                                                name: this.props.title,
                                                onsite: 1
                                            }),
                                            headers: t,
                                            credentials: "include"
                                        })] : [3, 3]) : [2];
                                    case 2:
                                        return d = i.sent(), this.setState({
                                            followed: !d.ok,
                                            inProgress: !1
                                        }, function() {
                                            d.ok && u.props.onUnfollow(u.props.title)
                                        }), [3, 5];
                                    case 3:
                                        return [4, fetch(g(e.data.currentUser.login), {
                                            method: "PUT",
                                            body: a.stringify({
                                                src: "onboard",
                                                name: this.props.title,
                                                onsite: 1
                                            }),
                                            headers: t,
                                            credentials: "include"
                                        })];
                                    case 4:
                                        c = i.sent(), this.setState({
                                            followed: c.ok,
                                            inProgress: !1
                                        }, function() {
                                            c.ok && u.props.onFollow(u.props.title)
                                        }), i.label = 5;
                                    case 5:
                                        return this.props.data.refetch(), [2]
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
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.data.refetch()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.updateFollowedState(e)
                }, t.prototype.render = function() {
                    var e;
                    return this.state.inProgress ? e = l.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, l.createElement(d.X, {
                        fillContent: !0
                    })) : this.state.hovered ? e = l.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, l.createElement(d._8, {
                        width: 50,
                        height: 50,
                        asset: this.state.followed ? d._9.Unheart : d._9.Heart
                    })) : this.state.followed && (e = l.createElement("div", {
                        className: "follow-game-card__overlay follow-game-card__overlay--followed",
                        "data-a-target": "follow-game-card--followed"
                    }, l.createElement(d._8, {
                        width: 50,
                        height: 50,
                        asset: d._9.Heart
                    }))), l.createElement(d.P, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement("div", i.__assign({
                        className: "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(d._39)(this.props)), l.createElement(d.A, {
                        key: this.props.title
                    }, l.createElement(d.U, {
                        position: d._2.Relative
                    }, e, l.createElement(d.C, {
                        aspect: d.k.Aspect3x4,
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc
                    })), l.createElement(d.B, null, l.createElement(d.U, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, l.createElement(d._21, {
                        color: d.F.Base,
                        fontSize: d.L.Size5
                    }, this.props.title), l.createElement(d._21, {
                        color: d.F.Alt,
                        fontSize: d.L.Size6
                    }, this.props.info))))))
                }, t.prototype.updateFollowedState = function(e) {
                    e.data && e.data.game && (e.data.game.self.follow ? this.setState({
                        followed: !0
                    }) : this.setState({
                        followed: !1
                    }))
                }, t = i.__decorate([Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                })], t)
            }(l.Component),
            h = v
    },
    1058: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Game_FollowGameCard"
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
                                            value: "follow"
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
                                                    value: "followedAt"
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
                end: 137
            }
        };
        n.loc.source = {
            body: "query Game_FollowGameCard($name: String) {\n  game(name: $name) {\n    id\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1059: function(e, t) {},
    1060: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Following_FollowGameCard"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 72
            }
        };
        n.loc.source = {
            body: "query Following_FollowGameCard {\n  currentUser {\n    id\n    login\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1086: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            l = n(1),
            r = n(2),
            o = n(992),
            s = n(47),
            d = n(263),
            c = n(1003),
            u = n(849),
            m = n(3),
            g = (n(1087), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : l.createElement(m.U, {
                            display: m.H.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, l.createElement(o.a, null))
                    }, n.typeChangeHandler = function(e) {
                        if (n.balloonWrapperRef.toggleBalloon(!1), n.props.onVideoFilterChange) {
                            var t = e.currentTarget.getAttribute("data-filter-type");
                            t && n.props.onVideoFilterChange(t)
                        }
                    }, n.saveBalloonWrapperRef = function(e) {
                        n.balloonWrapperRef = e
                    }, n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isPremiereExperimentActive: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e, t = Object(r.d)("All Videos", "VideoFilter"),
                        n = Object(r.d)("Past Premieres", "VideoFilter"),
                        i = Object(r.d)("Past Broadcasts", "VideoFilter"),
                        o = Object(r.d)("Highlights", "VideoFilter"),
                        g = Object(r.d)("Uploads", "VideoFilter"),
                        p = this.props.selectedSort && Object(c.e)(this.props.selectedSort) || u.a;
                    switch (this.props.broadcastType) {
                        case d.a.PastPremiere:
                            e = n;
                            break;
                        case d.a.Archive:
                            e = i;
                            break;
                        case d.a.Highlight:
                            e = o;
                            break;
                        case d.a.Upload:
                            e = g;
                            break;
                        default:
                            e = t
                    }
                    var v = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        h = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = l.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, l.createElement(m.U, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), l.createElement(m.U, {
                        margin: {
                            bottom: 2
                        },
                        display: m.H.Flex,
                        justifyContent: m.T.Between
                    }, l.createElement("div", null, this.renderLanguageSelector(), l.createElement(m.U, {
                        display: m.H.InlineFlex
                    }, l.createElement(s.a, {
                        ref: this.saveBalloonWrapperRef
                    }, l.createElement(m.u, {
                        type: m.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), l.createElement(m.p, {
                        direction: m.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, l.createElement(m.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, l.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, l.createElement(m.U, {
                        className: a(this.props.broadcastType ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, l.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, l.createElement(m.U, {
                        className: a(this.props.broadcastType === d.a.Archive ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), l.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, l.createElement(m.U, {
                        className: a(this.props.broadcastType === d.a.Highlight ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, o)), l.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, l.createElement(m.U, {
                        className: a(this.props.broadcastType === d.a.Upload ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, g))))))), l.createElement("div", null, l.createElement(m._14, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: p,
                        "data-a-target": "video-sort-select"
                    }, l.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: u.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(r.d)("Newest", "VideoFilter")), l.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: u.b,
                        "data-a-target": "video-sort-popular"
                    }, Object(r.d)("Popular", "VideoFilter")))))
                }, t
            }(l.Component)),
            p = n(1035);
        n.d(t, "a", function() {
            return g
        }), n.d(t, "b", function() {
            return p.a
        }), n.d(t, !1, function() {})
    },
    1087: function(e, t) {},
    1288: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            l = n(2),
            r = n(105),
            o = n(28),
            s = n(7),
            d = n(38),
            c = n(1056),
            u = n(1057),
            m = n(3),
            g = n(1289),
            p = (n(1290), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        followCount: 0
                    }, n.getAndStoreShuffledGameCards = function() {
                        n.props.data && (n.shuffledGameCards = Object(c.a)(n.props.data.games.edges.map(function(e, t) {
                            var i = e.node;
                            return a.createElement(m.U, {
                                key: i.id
                            }, a.createElement(u.a, {
                                info: "",
                                title: i.name,
                                imageAlt: i.name,
                                imageSrc: i.boxArtURL,
                                onFollow: n.onFollow,
                                onUnfollow: n.onUnfollow,
                                "data-a-target": "follow-game-card-" + t
                            }))
                        })))
                    }, n.onClickContinue = function() {
                        n.props.onContinue && n.props.onContinue(), l.n.store.dispatch(Object(d.c)())
                    }, n.onFollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount + 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n.onUnfollow = function() {
                        n.setState(function(e) {
                            return {
                                followCount: e.followCount - 1
                            }
                        }), n.props.onFollowChange && n.props.onFollowChange()
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), a.createElement(m._17, {
                        className: "following-games-modal",
                        background: m.m.Base,
                        padding: 2,
                        overflow: m.Y.Hidden,
                        "data-a-target": "follow-games-modal",
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap
                    }, a.createElement(m.U, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._22.Center,
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        alignContent: m.b.Center
                    }, a.createElement(m.U, {
                        margin: {
                            bottom: .5
                        }
                    }, a.createElement(m._21, {
                        fontSize: m.L.Size4,
                        color: m.F.Base,
                        bold: !0
                    }, Object(l.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), a.createElement(m._21, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt
                    }, Object(l.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), a.createElement(m.U, {
                        className: "following-games-modal__list",
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1
                    }, a.createElement(o.b, {
                        suppressScrollX: !0
                    }, a.createElement(m.U, {
                        padding: 1
                    }, a.createElement(m._33, {
                        childWidth: m._34.Small,
                        gutterSize: m._35.Small,
                        placeholderItems: 99
                    }, this.shuffledGameCards)))), a.createElement(m.U, {
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, a.createElement(m.u, {
                        size: m.x.Large,
                        onClick: this.onClickContinue,
                        disabled: 0 === this.state.followCount
                    }, Object(l.d)("Continue", "FollowGamesModal"))), a.createElement(r.a, null)))
                }, t = i.__decorate([Object(s.a)(g, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })], t)
            }(a.Component));
        n.d(t, "a", function() {
            return p
        })
    },
    1289: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGamesModal_Games"
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
                }],
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
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 180
            }
        };
        n.loc.source = {
            body: "query FollowGamesModal_Games($limit: Int) {\n  games(first: $limit) {\n    edges {\n      node {\n        id\n        name\n        boxArtURL(width: 285 height: 380)\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    129: function(e, t, n) {
        "use strict";

        function i(e) {
            return l.b.get(o.a, !1) || l.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }

        function a() {
            return !l.b.get(o.a, !1) && l.a.buildType === r.a.Production
        }
        var l = n(2),
            r = n(14),
            o = n(264);
        t.a = i, t.b = a;
        var s = "https://www.twitch.tv"
    },
    1290: function(e, t) {},
    1368: function(e, t) {},
    1904: function(e, t) {},
    1905: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingCommunities_CurrentUser"
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
                                    value: "followedCommunities"
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
                                                            value: "avatarURL"
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
                                                            value: "broadcastersCount"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 322
            }
        };
        n.loc.source = {
            body: "query FollowingCommunities_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    followedCommunities(first: $limit) {\n      edges {\n        node {\n          id\n          avatarURL(width: 285 height: 380)\n          viewersCount\n          displayName\n          broadcastersCount\n          name\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1906: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingGames_CurrentUser"
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
                                    value: "followedGames"
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
                                }],
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 227
            }
        };
        n.loc.source = {
            body: "query FollowingGames_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    followedGames(first: $limit) {\n      nodes {\n        id\n        name\n        boxArtURL(width: 285 height: 380)\n        viewersCount\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1907: function(e, t) {},
    1908: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingHosts_CurrentUser"
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
                                    value: "followedHosts"
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
                                }],
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
                end: 574
            }
        };
        n.loc.source = {
            body: "query FollowingHosts_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    follows {\n      totalCount\n    }\n    followedHosts(first: $limit) {\n      nodes {\n        id\n        login\n        displayName\n        hosting {\n          id\n          login\n          displayName\n          stream {\n            id\n            game {\n              id\n              name\n              boxArtURL(width: 40 height: 56)\n            }\n            viewersCount\n            title\n            type\n            previewImageURL(width: 320 height: 180)\n          }\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1909: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SuggestedVideos_CurrentUser"
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
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "limit"
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
                end: 318
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery SuggestedVideos_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    recommendations {\n      videos(first: $limit) {\n        edges {\n          node {\n            ...PreviewCardVideo\n          }\n        }\n      }\n    }\n  }\n}\n',
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
        }(n(882).definitions)), e.exports = i
    },
    1910: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowedIndex_CurrentUser"
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
                                    value: "followedGames"
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
                                }],
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followedLiveUsers"
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
                                }],
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
                                    value: "followedHosts"
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
                                }],
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
                                    value: "followedCommunities"
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
                                                            value: "avatarURL"
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
                                                            value: "broadcastersCount"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 1323
            }
        };
        n.loc.source = {
            body: "query FollowedIndex_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    followedGames(first: $limit) {\n      nodes {\n        id\n        name\n        boxArtURL(width: 285 height: 380)\n        viewersCount\n      }\n    }\n    followedLiveUsers(first: $limit) {\n      nodes {\n        id\n        login\n        displayName\n        stream {\n          id\n          game {\n            id\n            name\n            boxArtURL(width: 40 height: 56)\n          }\n          viewersCount\n          title\n          type\n          previewImageURL(width: 320 height: 180)\n        }\n      }\n    }\n    followedHosts(first: $limit) {\n      nodes {\n        id\n        login\n        displayName\n        hosting {\n          id\n          login\n          displayName\n          stream {\n            id\n            game {\n              id\n              name\n              boxArtURL(width: 40 height: 56)\n            }\n            viewersCount\n            title\n            type\n            previewImageURL(width: 320 height: 180)\n          }\n        }\n      }\n    }\n    followedCommunities(first: $limit) {\n      edges {\n        node {\n          id\n          avatarURL(width: 285 height: 380)\n          viewersCount\n          displayName\n          broadcastersCount\n          name\n        }\n      }\n    }\n    follows {\n      totalCount\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1911: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowingLive_CurrentUser"
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
                                    value: "followedLiveUsers"
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
                                }],
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
                end: 474
            }
        };
        n.loc.source = {
            body: "query FollowingLive_CurrentUser($limit: Int) {\n  currentUser {\n    id\n    follows {\n      totalCount\n    }\n    followedLiveUsers(first: $limit) {\n      nodes {\n        id\n        login\n        displayName\n        stream {\n          id\n          game {\n            id\n            name\n            boxArtURL(width: 40 height: 56)\n          }\n          viewersCount\n          title\n          type\n          previewImageURL(width: 320 height: 180)\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2066: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.activeCategory;
            return f.createElement(F.U, {
                margin: {
                    bottom: 2
                },
                className: "following__header-tabs"
            }, f.createElement(F._19, null, f.createElement(F._18, {
                active: void 0 === t,
                linkTo: "/directory/following",
                "data-a-target": "following-overview-tab"
            }, Object(w.d)("Overview", "FollowingHeaderTabs")), f.createElement(F._18, {
                active: t === N.SpadeFollowingCategory.Live,
                "data-a-target": "following-channels-tab",
                linkTo: "/directory/following/live"
            }, Object(w.d)("Channels", "FollowingHeaderTabs")), f.createElement(F._18, {
                active: t === N.SpadeFollowingCategory.Hosts,
                "data-a-target": "following-hosts-tab",
                linkTo: "/directory/following/hosts"
            }, Object(w.d)("Hosts", "FollowingHeaderTabs")), f.createElement(F._18, {
                active: t === N.SpadeFollowingCategory.Games,
                "data-a-target": "following-games-tab",
                linkTo: "/directory/following/games"
            }, Object(w.d)("Games", "FollowingHeaderTabs")), f.createElement(F._18, {
                active: t === N.SpadeFollowingCategory.Communities,
                linkTo: Object(E.a)("/directory/following/communities"),
                targetBlank: Object(E.b)(),
                "data-a-target": "following-communities-tab"
            }, Object(w.d)("Communities", "FollowingPage"))))
        }

        function a(e) {
            var t;
            if (!e.communities || 0 === e.communities.length) return f.createElement(F._21, {
                "data-a-target": "no-communities-text"
            }, Object(w.d)("No communities", "LiveCommunities"));
            var n, i = e.communities;
            if (e.showSample) {
                var a = Object(U.a)(e.directoryWidth || 0, 180, 1); - 1 === a ? i = [] : a < i.length && (i = i.slice(0, a - 1), n = f.createElement(L.a, {
                    subHeader: Object(w.d)("Communities", "LiveCommunities--view-all"),
                    linkTo: "/directory/following/communities",
                    aspectRatio: F.k.Aspect3x4
                })), t = f.createElement(F.U, {
                    margin: {
                        bottom: 2
                    }
                }, f.createElement(F._21, {
                    type: F._26.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._25.Uppercase,
                    "data-a-target": "live-communities-header"
                }, Object(w.d)("Communities", "LiveCommunities")))
            }
            var l = i.map(function(e, t) {
                var n = e.node,
                    i = Object(w.d)("{channelsCount,number} streams", {
                        channelsCount: n.broadcastersCount
                    }, "LiveCommunities"),
                    a = Object(w.d)("{viewerCount,number} viewers {streams}", {
                        viewerCount: n.viewersCount,
                        streams: f.createElement("span", null, i)
                    }, "LiveCommunities");
                return f.createElement(F.U, {
                    key: n.id,
                    margin: {
                        bottom: 2
                    }
                }, f.createElement(F.t, {
                    linkTo: {
                        pathname: "/communities/" + encodeURIComponent(n.name),
                        state: {
                            content: "communities_select_click",
                            medium: "twitch_communities_directory",
                            content_index: t
                        }
                    },
                    title: n.displayName,
                    imageAlt: n.displayName + " cover image",
                    imageSrc: n.avatarURL || w.a.defaultBoxArtURL,
                    info: f.createElement("span", {
                        className: "live-communities__info"
                    }, a),
                    "data-a-target": "live-community-card-" + t
                }))
            });
            return f.createElement("div", null, t, f.createElement(F._33, {
                gutterSize: F._35.Small,
                childWidth: F._34.Small,
                placeholderItems: 30
            }, l, n))
        }

        function l(e, t) {
            return Object.assign(Object(m.bindActionCreators)({
                showFollowGamesModal: function() {
                    return Object(O.d)(T.a, {
                        onFollowChange: t.onFollowChange
                    })
                }
            }, e), t)
        }

        function r() {
            return f.createElement(F.U, {
                className: "following__empty",
                margin: {
                    x: "auto"
                }
            }, f.createElement(F.U, {
                textAlign: F._22.Center,
                margin: {
                    bottom: 2
                }
            }, f.createElement(F._21, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                type: F._26.H4
            }, Object(w.d)("Never miss the Channels you love.", "EmptyChannelList"))), f.createElement(F.U, {
                display: F.H.Flex,
                justifyContent: F.T.Between
            }, f.createElement(F.U, {
                className: "following__empty-information",
                position: F._2.Relative
            }, f.createElement(F.U, {
                margin: {
                    bottom: 1
                }
            }, f.createElement("figure", {
                className: "following__empty-image"
            }, f.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_1.png"
            }))), f.createElement(F._21, {
                fontSize: F.L.Size5
            }, Object(w.d)("Like the channel you're watching? Follow it.", "EmptyChannelList")), f.createElement(F._17, {
                className: "following__empty-information-num",
                position: F._2.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._22.Center
            }, "1")), f.createElement(F.U, {
                className: "following__empty-information",
                position: F._2.Relative
            }, f.createElement(F.U, {
                margin: {
                    bottom: 1
                }
            }, f.createElement("figure", {
                className: "following__empty-image"
            }, f.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_2.png"
            }))), f.createElement(F._21, {
                fontSize: F.L.Size5
            }, Object(w.d)("We'll let you know when the channel goes live again.", "EmptyChannelList")), f.createElement(F._17, {
                className: "following__empty-information-num",
                position: F._2.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._22.Center
            }, "2")), f.createElement(F.U, {
                className: "following__empty-information",
                position: F._2.Relative
            }, f.createElement(F.U, {
                margin: {
                    bottom: 1
                }
            }, f.createElement("figure", {
                className: "following__empty-image"
            }, f.createElement("img", {
                src: "//s.jtvnw.net/jtv_user_pictures/hosted_images/guide_3.png"
            }))), f.createElement(F._21, {
                fontSize: F.L.Size5
            }, Object(w.d)("Come back and watch your favorite channels.", "EmptyChannelList")), f.createElement(F._17, {
                className: "following__empty-information-num",
                position: F._2.Absolute,
                attachLeft: !0,
                attachTop: !0,
                background: F.m.Alt,
                textAlign: F._22.Center
            }, "3"))))
        }

        function o(e) {
            var t = Object(w.d)("Live hosts", "LiveHosts"),
                n = f.createElement(F.U, {
                    margin: {
                        bottom: 2
                    }
                }, f.createElement(F._21, {
                    type: F._26.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._25.Uppercase,
                    "data-a-target": "live-hosts-header"
                }, t));
            if (!e.hosts || 0 === e.hosts.length) return e.followsCount > 0 ? f.createElement("div", null, n, f.createElement(F.U, {
                textAlign: F._22.Center,
                padding: {
                    y: 5
                }
            }, f.createElement(F._21, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                "data-a-target": "no-hosts-live-text",
                italic: !0
            }, Object(w.d)("No Hosts Live", "LiveHosts")))) : f.createElement("div", null, n, !e.showSample && f.createElement(r, null));
            var i, a = e.hosts.filter(function(e) {
                return e.hosting && e.hosting.stream
            });
            if (e.maxCount) e.maxCount < a.length && (a = a.slice(0, e.maxCount - 1), i = f.createElement(L.a, {
                subHeader: "Live Hosts",
                onClickViewAll: e.onClickViewAll
            }));
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var l = Object(U.a)(e.directoryWidth, 240, 2);
                l < a.length && (a = a.slice(0, l - 1), i = f.createElement(L.a, {
                    subHeader: t,
                    linkTo: {
                        pathname: "/directory/following/hosts",
                        state: {
                            medium: N.PageviewMedium.Following,
                            content: N.PageviewContent.Following
                        }
                    }
                }))
            }
            var o = a.map(function(e, t) {
                if (e.hosting && e.hosting.stream) {
                    var n = Object(M.a)(e.hosting.login, e.hosting.displayName, !0),
                        i = Object(M.a)(e.login, e.displayName, !0),
                        a = Object(w.d)("{hostDisplayName} hosting {hostedDisplayName}", {
                            hostDisplayName: i,
                            hostedDisplayName: n
                        }, "LiveHosts");
                    return f.createElement(F.U, {
                        key: e.id,
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(G.a, {
                        imageSrc: e.hosting.stream.previewImageURL || w.a.defaultStreamPreviewURL,
                        imageAlt: a,
                        viewerCount: e.hosting.stream && e.hosting.stream.viewersCount || 0,
                        title: a,
                        channelName: n,
                        gameImageSrc: e.hosting.stream && e.hosting.stream.game && e.hosting.stream.game.boxArtURL || w.a.defaultBoxArtURL,
                        gameTitle: e.hosting.stream.game && e.hosting.stream.game.name || "",
                        gameLinkTo: {
                            pathname: "/directory/game/" + (e.hosting.stream && e.hosting.stream.game ? e.hosting.stream.game.name : ""),
                            state: {
                                medium: N.PageviewMedium.Following,
                                content: N.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        linkTo: {
                            pathname: "/" + e.login,
                            state: {
                                medium: N.PageviewMedium.Following,
                                content: N.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        channelNameLinkTo: {
                            pathname: "/" + e.hosting.login + "/videos",
                            state: {
                                medium: N.PageviewMedium.Following,
                                content: N.PageviewContent.LiveHost,
                                content_index: t
                            }
                        },
                        "data-a-target": "live-host-card-" + t,
                        streamType: e.hosting.stream.type,
                        hosting: !0
                    }))
                }
            });
            return f.createElement("div", null, n, f.createElement(F._33, {
                gutterSize: F._35.Small,
                childWidth: F._34.Medium,
                placeholderItems: 20
            }, o, i))
        }

        function s(e) {
            var t = Object(w.d)("Live channels", "LiveChannels"),
                n = f.createElement(F.U, {
                    margin: {
                        bottom: 2
                    }
                }, f.createElement(F._21, {
                    type: F._26.H4,
                    color: F.F.Alt2,
                    fontSize: F.L.Size5,
                    transform: F._25.Uppercase,
                    "data-a-target": "live-channels-header"
                }, t));
            if (!e.users || 0 === e.users.length) return e.followsCount > 0 ? f.createElement("div", null, n, f.createElement(F.U, {
                textAlign: F._22.Center,
                padding: {
                    y: 5
                }
            }, f.createElement(F._21, {
                color: F.F.Alt2,
                fontSize: F.L.Size4,
                "data-a-target": "no-channels-live-text",
                italic: !0
            }, Object(w.d)("No Channels Live", "LiveChannels")))) : f.createElement("div", null, n, f.createElement(r, null));
            var i, a = e.users;
            if (e.maxDisplayCount && e.maxDisplayCount < a.length) a = a.slice(0, e.maxDisplayCount - 1), i = f.createElement(L.a, {
                subHeader: "Live Channels",
                onClickViewAll: e.onClickViewAll
            });
            else if (e.showSample && e.directoryWidth && e.directoryWidth > 0) {
                var l = Object(U.a)(e.directoryWidth, 240, 2);
                l < a.length && (a = a.slice(0, l - 1), i = f.createElement(L.a, {
                    subHeader: t,
                    linkTo: "/directory/following/live"
                }))
            }
            var o = a.map(function(e, t) {
                if (!e.stream) return null;
                var n = Object(M.a)(e.login, e.displayName),
                    i = {
                        medium: N.PageviewMedium.Following,
                        content: N.PageviewContent.Live,
                        content_index: t
                    };
                return f.createElement(F.U, {
                    key: e.id,
                    margin: {
                        bottom: 2
                    }
                }, f.createElement(G.a, {
                    imageSrc: e.stream && e.stream.previewImageURL || w.a.defaultStreamPreviewURL,
                    imageAlt: e.stream && e.stream.title || "",
                    viewerCount: e.stream && e.stream.viewersCount || 0,
                    title: e.stream && e.stream.title || Object(w.d)("Untitled Broadcast", "LiveChannels"),
                    channelName: n,
                    gameImageSrc: e.stream && e.stream.game && e.stream.game.boxArtURL || w.a.defaultBoxArtURL,
                    gameTitle: e.stream && e.stream.game ? e.stream.game.name : "",
                    gameLinkTo: {
                        pathname: "/directory/game/" + (e.stream && e.stream.game ? e.stream.game.name : ""),
                        state: i
                    },
                    linkTo: {
                        pathname: "/" + e.login,
                        state: i
                    },
                    channelNameLinkTo: {
                        pathname: "/" + e.login + "/videos",
                        state: i
                    },
                    "data-a-target": "live-channel-card-" + t,
                    vodcast: !(!e.stream || "watch_party" !== e.stream.type),
                    streamType: e.stream.type
                }))
            });
            return f.createElement("div", null, n, f.createElement(F._33, {
                gutterSize: F._35.Small,
                childWidth: F._34.Medium,
                placeholderItems: 20
            }, o, i))
        }

        function d(e) {
            return Object(m.bindActionCreators)({
                login: function() {
                    return Object(p.f)(g.a.FollowingPage)
                }
            }, e)
        }

        function c(e) {
            return {
                isLoggedIn: Object(v.d)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(6),
            m = n(9),
            g = n(49),
            p = n(33),
            v = n(17),
            h = n(0),
            f = n(1),
            k = n(22),
            w = n(2),
            y = n(67),
            S = n(5),
            b = n(7),
            _ = n(822),
            C = n(820),
            N = n(12),
            E = n(129),
            F = n(3),
            L = n(1050),
            U = n(1036),
            A = (n(1904), n(1905)),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Communities You Follow", "FollowingCommunitiesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? f.createElement(F.U, {
                        display: F.H.Flex,
                        position: F._2.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, f.createElement(F.X, {
                        fillContent: !0
                    })) : this.props.data.error ? f.createElement(y.a, {
                        message: Object(w.d)("Error loading data.", "FollowingCommunitiesPage")
                    }) : f.createElement(a, {
                        communities: this.props.data.currentUser ? this.props.data.currentUser.followedCommunities.edges : []
                    }), f.createElement(F.U, {
                        padding: 3
                    }, f.createElement(i, {
                        activeCategory: N.SpadeFollowingCategory.Communities
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(b.a)(A, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(S.c)("FollowingCommunitiesPage", {
                    destination: C.a.DirectoryFollowingCommunities
                }), Object(_.a)({
                    location: N.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: N.PageviewDirectoryContentType.Communities,
                            tab: N.PageviewFollowingTab.Communities
                        }
                    }
                })], t)
            }(f.Component),
            P = x,
            O = n(38),
            T = n(1288),
            j = n(376),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    var e = f.createElement(F.U, {
                        margin: {
                            bottom: 2
                        }
                    }, f.createElement(F._21, {
                        type: F._26.H4,
                        color: F.F.Alt2,
                        fontSize: F.L.Size5,
                        transform: F._25.Uppercase,
                        "data-a-target": "live-games-header"
                    }, Object(w.d)("Live games", "LiveGames")));
                    if (!this.props.games) return f.createElement("div", null, e);
                    var t = this.props.games.filter(function(e) {
                        return e && !!e.viewersCount
                    });
                    if (!(t = t.sort(function(e, t) {
                            if (!e) return -1;
                            if (!t) return 1;
                            var n = e.name.toLowerCase(),
                                i = t.name.toLowerCase();
                            return n < i ? -1 : n > i ? 1 : 0
                        })) || 0 === t.length) return f.createElement(F._17, {
                        fullWidth: !0,
                        background: F.m.Alt2,
                        display: F.H.Flex,
                        flexDirection: F.J.Column,
                        alignItems: F.c.Center,
                        padding: {
                            y: 3
                        },
                        margin: {
                            y: 2
                        },
                        "data-target": "following__follow-games-cta"
                    }, f.createElement(F.U, {
                        margin: {
                            bottom: 1
                        }
                    }, f.createElement(F._21, {
                        fontSize: F.L.Size4,
                        color: F.F.Alt2
                    }, Object(w.d)("You can now follow your favorite games!", "LiveGames"))), f.createElement(F.U, {
                        margin: {
                            top: .5
                        }
                    }, f.createElement(F.u, {
                        size: F.x.Large,
                        onClick: this.props.showFollowGamesModal,
                        "data-a-target": "find-out-more-button"
                    }, Object(w.d)("Find Out More!", "LiveGames"))));
                    var n;
                    if (this.props.showSample && this.props.directoryWidth && this.props.directoryWidth > 0) {
                        var i = Object(U.a)(this.props.directoryWidth, 180, 1);
                        i < t.length && (t = t.slice(0, i - 1), n = f.createElement(F.U, {
                            margin: {
                                bottom: 2
                            }
                        }, f.createElement(L.a, {
                            subHeader: "Live Games",
                            linkTo: "/directory/following/games",
                            aspectRatio: F.k.Aspect3x4
                        })))
                    }
                    var a = t.map(function(e, t) {
                        return e ? f.createElement(F.U, {
                            key: e.id,
                            margin: {
                                bottom: 2
                            }
                        }, f.createElement(F.t, {
                            linkTo: {
                                pathname: Object(j.d)(e.name),
                                state: {
                                    content: "twitch_following",
                                    medium: "live_game",
                                    content_index: t
                                }
                            },
                            title: e.name,
                            imageAlt: e.name + " cover image",
                            imageSrc: e.boxArtURL || w.a.defaultBoxArtURL,
                            info: Object(w.d)("{viewerCount,number} viewers", {
                                viewerCount: e.viewersCount
                            }, "LiveGames"),
                            "data-a-target": "live-game-card-" + t
                        })) : null
                    });
                    return f.createElement("div", null, e, f.createElement(F._33, {
                        gutterSize: F._35.Small,
                        childWidth: F._34.Small,
                        placeholderItems: 30
                    }, a, n))
                }, t
            }(f.Component),
            I = Object(u.a)(null, l)(D),
            V = n(1906),
            R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Games You Follow", "FollowingGamesPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading ? f.createElement(F.U, {
                        display: F.H.Flex,
                        position: F._2.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, f.createElement(F.X, {
                        fillContent: !0
                    })) : this.props.data.error ? f.createElement(y.a, {
                        message: Object(w.d)("Error loading data.", "FollowingGamesPage")
                    }) : f.createElement(I, {
                        games: this.props.data.currentUser ? this.props.data.currentUser.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), f.createElement(F.U, {
                        padding: 3
                    }, f.createElement(i, {
                        activeCategory: N.SpadeFollowingCategory.Games
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(b.a)(V, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 100
                        }
                    }
                }), Object(S.c)("FollowingGamesPage", {
                    destination: C.a.DirectoryFollowingGames
                }), Object(_.a)({
                    location: N.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: N.PageviewDirectoryContentType.Games,
                            tab: N.PageviewFollowingTab.Games,
                            num_live_games: e.data.currentUser.followedGames.nodes.filter(function(e) {
                                return e && e.viewersCount > 0
                            }).length
                        }
                    }
                })], t)
            }(f.Component),
            H = R,
            G = n(914),
            M = n(48),
            W = (n(1907), n(1908)),
            z = 50,
            B = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        maxCount: z
                    }, t.onClickViewAll = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            return h.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch({
                                            limit: 100
                                        })];
                                    case 1:
                                        return e.sent(), this.setState({
                                            maxCount: null
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Hosts You Follow", "FollowingHostsPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading) e = f.createElement(F.U, {
                        display: F.H.Flex,
                        position: F._2.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, f.createElement(F.X, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = f.createElement(y.a, {
                        message: Object(w.d)("Error loading data.", "FollowingHostsPage")
                    });
                    else {
                        var t = this.props.data.currentUser ? this.props.data.currentUser.followedHosts.nodes : [],
                            n = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = f.createElement(o, {
                            hosts: t,
                            followsCount: n,
                            maxCount: this.state.maxCount,
                            onClickViewAll: this.onClickViewAll
                        })
                    }
                    return f.createElement(F.U, {
                        padding: 3
                    }, f.createElement(i, {
                        activeCategory: N.SpadeFollowingCategory.Hosts
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(b.a)(W, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 51
                            }
                        }
                    }
                }), Object(S.c)("FollowingHostsPage", {
                    destination: C.a.DirectoryFollowingHosts
                }), Object(_.a)({
                    location: N.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: N.PageviewDirectoryContentType.Hosts,
                            tab: N.PageviewFollowingTab.Hosts,
                            num_host_channels: e.data.currentUser.followedHosts.nodes.length
                        }
                    }
                })], t)
            }(f.Component),
            q = B,
            $ = n(380),
            Q = n(1086),
            X = n(1909),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    !e.data.loading || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                    var e = f.createElement(F.U, {
                            margin: {
                                bottom: 2
                            }
                        }, f.createElement(F._21, {
                            type: F._26.H4,
                            color: F.F.Alt2,
                            fontSize: F.L.Size5,
                            transform: F._25.Uppercase
                        }, Object(w.d)("Based on your viewing history", "SuggestedVideos"))),
                        t = [];
                    if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                            return e.node
                        })), this.props.directoryWidth > 0) {
                        var n = Object(U.a)(this.props.directoryWidth, 240, 2);
                        t = t.slice(0, n)
                    }
                    return f.createElement("div", null, e, f.createElement(Q.b, {
                        trackingMedium: N.PageviewMedium.Following,
                        trackingContent: N.PageviewContent.SuggestedVideos,
                        videos: t
                    }))
                }, t = h.__decorate([Object(b.a)(X, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(S.c)("SuggestedVideos")], t)
            }(f.Component),
            J = Y,
            K = n(1910),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        directoryWidth: -1
                    }, t.onResize = function(e) {
                        t.setState({
                            directoryWidth: e
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Following", "FollowingPage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser;
                    return this.props.data.error || !this.props.data.loading && !e ? f.createElement(y.a, {
                        message: Object(w.d)("Error loading data.", "FollowingPage")
                    }) : f.createElement(F.U, {
                        padding: 3
                    }, f.createElement(i, null), e && f.createElement(s, {
                        key: "live-channels",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        users: e ? e.followedLiveUsers.nodes : [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), e && f.createElement(o, {
                        key: "live-hosts",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        hosts: e ? e.followedHosts.nodes : [],
                        followsCount: e ? e.follows.totalCount : 0
                    }), e && f.createElement(I, {
                        key: "live-games",
                        showSample: !0,
                        directoryWidth: this.state.directoryWidth,
                        games: e ? e.followedGames.nodes : [],
                        onFollowChange: this.props.data.refetch
                    }), f.createElement(J, {
                        key: "suggested-videos",
                        directoryWidth: this.state.directoryWidth
                    }), e && f.createElement(a, {
                        key: "live-communities",
                        showSample: !0,
                        communities: e ? e.followedCommunities.edges : [],
                        directoryWidth: this.state.directoryWidth
                    }), f.createElement($.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(b.a)(K, {
                    options: {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(S.c)("FollowingIndexPage", {
                    destination: C.a.DirectoryFollowingIndex
                }), Object(_.a)({
                    location: N.PageviewLocation.Directory,
                    properties: function() {
                        return {
                            content_type: N.PageviewDirectoryContentType.Mixed,
                            tab: N.PageviewFollowingTab.Overview
                        }
                    }
                })], t)
            }(f.Component),
            ee = Z,
            te = n(1911),
            ne = 50,
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        maxDisplayCount: ne
                    }, t.onClickViewAll = function() {
                        return h.__awaiter(t, void 0, void 0, function() {
                            return h.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch({
                                            limit: 100
                                        })];
                                    case 1:
                                        return e.sent(), this.setState({
                                            maxDisplayCount: null
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Channels You Follow", "FollowingLivePage")), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading) e = f.createElement(F.U, {
                        display: F.H.Flex,
                        position: F._2.Absolute,
                        fullHeight: !0,
                        fullWidth: !0
                    }, f.createElement(F.X, {
                        fillContent: !0
                    }));
                    else if (this.props.data.error) e = f.createElement(y.a, {
                        message: Object(w.d)("Error loading data.", "FollowingLivePage")
                    });
                    else {
                        var t = this.props.data.currentUser ? this.props.data.currentUser.followedLiveUsers.nodes : [],
                            n = this.props.data.currentUser ? this.props.data.currentUser.follows.totalCount : 0;
                        e = f.createElement(s, {
                            users: t,
                            followsCount: n,
                            maxDisplayCount: this.state.maxDisplayCount,
                            onClickViewAll: this.onClickViewAll
                        })
                    }
                    return f.createElement(F.U, {
                        padding: 3
                    }, f.createElement(i, {
                        activeCategory: N.SpadeFollowingCategory.Live
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = h.__decorate([Object(b.a)(te, {
                    options: function() {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                limit: 51
                            }
                        }
                    }
                }), Object(S.c)("FollowingLivePage", {
                    destination: C.a.DirectoryFollowingLiveChannels
                }), Object(_.a)({
                    location: N.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            content_type: N.PageviewDirectoryContentType.Channels,
                            tab: N.PageviewFollowingTab.Channels,
                            num_live_channels: e.data.currentUser.followedLiveUsers.nodes.length
                        }
                    }
                })], t)
            }(f.Component),
            ae = ie,
            le = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return h.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? f.createElement(k.d, null, f.createElement(k.b, {
                        path: "/directory/following/live",
                        component: ae
                    }), f.createElement(k.b, {
                        path: "/directory/following/hosts",
                        component: q
                    }), f.createElement(k.b, {
                        path: "/directory/following/games",
                        component: H
                    }), f.createElement(k.b, {
                        path: "/directory/following/communities",
                        component: P
                    }), f.createElement(k.b, {
                        path: "/",
                        component: ee
                    })) : (this.props.login(), f.createElement(y.a, {
                        message: Object(w.d)("You must be logged in to view this page", "FollowingRoot")
                    }))
                }, t = h.__decorate([Object(S.c)("FollowingPageRoot", {
                    autoReportInteractive: !0
                })], t)
            }(f.Component),
            re = le,
            oe = Object(u.a)(c, d)(re);
        n.d(t, "FollowingRootPage", function() {
            return oe
        })
    },
    264: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(20),
            l = n(1),
            r = n(2),
            o = n(14),
            s = "legacy_routes_enabled",
            d = function(e) {
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
                                    var l = a.stringify(i),
                                        s = r.a.buildType === o.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + l;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                r.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
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
                                    l = "";
                                i.length > 0 && (l = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: l
                                })
                            }
                        }
                    }, n.isEnabled = r.b.get(s, !1), n.logger = r.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = r.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var l = new RegExp(a, "i");
                            t.push(l)
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
            }(l.Component),
            c = d;
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
    378: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                l = Math.floor(e / 3600);
            return t && t.zeroPadAll ? a(l, 2) + ":" + a(i, 2) + ":" + a(n, 2) : l ? l + ":" + a(i, 2) + ":" + a(n, 2) : i + ":" + a(n, 2)
        }

        function a(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = i
    },
    820: function(e, t, n) {
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
    822: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var l = i.referenceTracking,
                                    r = l.content,
                                    o = l.medium,
                                    d = l.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: r,
                                    medium: o,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return r.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? l.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = l.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(r.Component);
                return Object(o.f)(n)
            }
        }
        var a = n(0),
            l = n(20),
            r = n(1),
            o = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    849: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return l
        });
        var i, a = "VIEWS",
            l = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    871: function(e, t, n) {
        "use strict";

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(l.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function a() {
            var e = l.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return r.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(i(!0))
        }
        n.d(t, "a", function() {
            return o
        }), t.b = a;
        var l = n(2),
            r = [{
                code: "ar",
                label: "العربية"
            }, {
                code: "bg",
                label: "Български"
            }, {
                code: "cs",
                label: "Čeština"
            }, {
                code: "da",
                label: "Dansk"
            }, {
                code: "de",
                label: "Deutsch"
            }, {
                code: "el",
                label: "Ελληνικά"
            }, {
                code: "en",
                label: "English"
            }, {
                code: "es",
                label: "Español"
            }, {
                code: "fi",
                label: "Suomi"
            }, {
                code: "fr",
                label: "Français"
            }, {
                code: "hu",
                label: "Magyar"
            }, {
                code: "it",
                label: "Italiano"
            }, {
                code: "ja",
                label: "日本語"
            }, {
                code: "ko",
                label: "한국어"
            }, {
                code: "nl",
                label: "Nederlands"
            }, {
                code: "no",
                label: "Norsk"
            }, {
                code: "pl",
                label: "Polski"
            }, {
                code: "pt",
                label: "Português"
            }, {
                code: "ru",
                label: "Русский"
            }, {
                code: "sk",
                label: "Slovenčina"
            }, {
                code: "sv",
                label: "Svenska"
            }, {
                code: "th",
                label: "ภาษาไทย"
            }, {
                code: "tr",
                label: "Türkçe"
            }, {
                code: "vi",
                label: "Tiếng Việt"
            }, {
                code: "zh-hk",
                label: "中文(粵語)"
            }, {
                code: "zh",
                label: "中文"
            }],
            o = new Set(r.concat(i()).map(function(e) {
                return e.code
            }))
    },
    882: function(e, t) {
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
                                        value: "56"
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
                                    value: "viewingHistory"
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
                                            value: "position"
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
                end: 328
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\n  animatedPreviewURL\n  game {\n    boxArtURL(width: 40 height: 56)\n    id\n    name\n  }\n  id\n  lengthSeconds\n  owner {\n    displayName\n    id\n    login\n  }\n  previewThumbnailURL(width: 320 height: 180)\n  publishedAt\n  self {\n    viewingHistory {\n      position\n    }\n  }\n  title\n  viewCount\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    909: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = this;
            return function(i) {
                return r.__awaiter(n, void 0, void 0, function() {
                    var n, a;
                    return r.__generator(this, function(r) {
                        return n = new Set(l()), t ? n.add(e) : n.delete(e), a = Array.from(n), o.k.set(c, a), i(Object(d.b)(a)), [2]
                    })
                })
            }
        }

        function a() {
            var e = this;
            return function(t) {
                return r.__awaiter(e, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        return o.k.set(c, []), t(Object(d.b)([])), [2]
                    })
                })
            }
        }

        function l() {
            return o.k.get(c, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = i, t.a = a, t.b = l;
        var r = n(0),
            o = n(2),
            s = n(871),
            d = n(910),
            c = "languageDirectoryFilters"
    },
    910: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: a,
                languagePreferences: e
            }
        }
        n.d(t, "a", function() {
            return a
        }), t.b = i;
        var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    914: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            l = n(10),
            r = n(2),
            o = n(915),
            s = n(3),
            d = (n(1007), function(e) {
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
                                    return [4, r.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && r.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = a.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, a.createElement(s.Z, {
                        label: Object(r.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(r.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: a.createElement(l.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return a.createElement("div", i.__assign({
                        className: "live-channel-card"
                    }, Object(s._39)(this.props)), a.createElement(s.A, {
                        key: this.props.title
                    }, a.createElement(s.U, {
                        fullWidth: !0
                    }, a.createElement(s.j, {
                        overflow: !0
                    }, a.createElement("div", null, a.createElement(l.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, a.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), a.createElement(s.B, null, a.createElement(l.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, a.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, a.createElement(s._21, {
                        type: s._26.H3,
                        fontSize: s.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), a.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, a.createElement(s._21, {
                        type: s._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? a.createElement(l.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, a.createElement(s._17, {
                        className: "live-channel-card__boxart",
                        position: s._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(s._30, {
                        display: s.H.Block,
                        direction: s._32.Bottom,
                        label: t
                    }, a.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? a.createElement(s.U, {
                        position: s._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, a.createElement(o.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(a.Component)),
            c = d;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return c
        })
    },
    915: function(e, t, n) {
        "use strict";
        var i, a, l, r = n(0),
            o = n(4),
            s = n(1),
            d = n(2),
            c = n(145),
            u = n(3),
            m = (n(1006), i = {}, i[c.a.Live] = "stream-type-indicator--live", i[c.a.Premiere] = "stream-type-indicator--premiere", i[c.a.Rerun] = "stream-type-indicator--rerun", i[c.a.WatchParty] = "stream-type-indicator--rerun", i),
            g = (a = {}, a[c.a.Premiere] = u._9.VideoPremiere, a[c.a.Rerun] = u._9.VideoRerun, a[c.a.WatchParty] = u._9.VideoRerun, a),
            p = (l = {}, l[c.a.Premiere] = u._10.Live, l[c.a.Rerun] = u._10.Inherit, l[c.a.WatchParty] = u._10.Inherit, l),
            v = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._17, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, s.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(u._21, {
                        type: u._26.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, o(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._17, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? s.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.V, {
                        size: u.W.Small
                    })) : s.createElement(u._8, {
                        asset: g[this.props.type],
                        type: p[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("Live", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return v
        })
    },
    926: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        var i = n(1),
            a = (n.n(i), n(3)),
            l = function() {
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
    928: function(e, t, n) {
        "use strict";

        function i() {
            return {
                languagePreferences: Object(d.b)()
            }
        }

        function a(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case s.a:
                    return r.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        }

        function l(e) {
            return e.userPreferences.languagePreferences
        }
        t.a = l;
        var r = n(0),
            o = n(2),
            s = n(910),
            d = n(909);
        o.n.store.registerReducer("userPreferences", a)
    },
    992: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function a(e) {
            return Object(r.bindActionCreators)({
                updateLanguagePreferences: o.c,
                clearLanguagePreferences: o.a
            }, e)
        }
        var l = n(6),
            r = n(9),
            o = n(909),
            s = n(928),
            d = n(0),
            c = n(1),
            u = n(2),
            m = n(28),
            g = n(47),
            p = n(871),
            v = n(5),
            h = n(3),
            f = (n(1010), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return c.createElement(h.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, c.createElement(h.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return c.createElement(h.U, {
                        className: "language-select-menu"
                    }, c.createElement(g.a, null, c.createElement(h.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: h.z.Hollow
                    }, c.createElement(h.U, {
                        display: h.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), c.createElement(h.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && c.createElement(h.Z, {
                        type: h._0.Brand,
                        label: e.toString()
                    })))), c.createElement(h.p, {
                        direction: h.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, c.createElement(m.b, {
                        className: "language-select-menu__balloon"
                    }, c.createElement(h.U, {
                        padding: .5
                    }, Object(p.b)().map(this.renderLanguageOption))), c.createElement(h._17, {
                        background: h.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, c.createElement(h.u, {
                        type: h.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = d.__decorate([Object(v.c)("LanguageSelectMenu")], t)
            }(c.Component)),
            k = f,
            w = Object(l.a)(i, a)(k);
        n.d(t, "a", function() {
            return w
        })
    }
});
//# sourceMappingURL=pages.following-83edb5577be6ef5e212d8b0dbe07dfc9.js.map