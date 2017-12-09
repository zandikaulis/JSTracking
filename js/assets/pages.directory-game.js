webpackJsonp([45], {
    1004: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            var r = i || a(t),
                s = "";
            r && (s = "?sort=" + l(r));
            var c = n ? n.toLowerCase() : o(t);
            m.n.history.push(e + "/" + c + s)
        }

        function a(e) {
            return c(u.parse(e.location.search).sort || "")
        }

        function r(e) {
            switch (e.match.params.filter) {
                case p.a.Archive.toLowerCase():
                    return p.a.Archive;
                case p.a.Highlight.toLowerCase():
                    return p.a.Highlight;
                case p.a.Upload.toLowerCase():
                    return p.a.Upload;
                case p.a.PastPremiere.toLowerCase():
                    return p.a.PastPremiere;
                default:
                    return
            }
        }

        function o(e) {
            var t = r(e);
            return t ? t.toLowerCase() : "all"
        }

        function l(e) {
            switch (e) {
                case g.b:
                    return d.Popular;
                case g.a:
                    return d.Newest;
                default:
                    return e
            }
        }

        function s(e) {
            var t = u.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }

        function c(e) {
            switch (e.toUpperCase()) {
                case g.b:
                    return g.b;
                case g.a:
                    return g.a;
                default:
                    return null
            }
        }
        t.d = i, t.c = a, t.b = r, t.a = s, t.e = c;
        var d, u = n(21),
            m = (n.n(u), n(2)),
            p = n(266),
            g = n(850);
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(d || (d = {}))
    },
    1005: function(e, t, n) {
        "use strict";
        var i = n(1014);
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n(1016),
            r = (n.n(a), n(927));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    1007: function(e, t) {},
    1008: function(e, t) {},
    1009: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return o
        });
        var i = n(880),
            a = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? i.a.Communities : i.a.Games
            },
            r = function(e) {
                switch (e) {
                    case "communities":
                        return i.a.Communities;
                    case "games":
                        return i.a.Games;
                    case "creative":
                        return i.a.Creative;
                    default:
                        return i.a.Games
                }
            },
            o = function(e) {
                switch (e) {
                    case "communities":
                        return [i.a.Communities, i.a.Creative];
                    case "games":
                        return [i.a.Games];
                    case "creative":
                        return [i.a.Creative];
                    default:
                        return [i.a.Games]
                }
            }
    },
    1010: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return m
        }), n.d(t, "c", function() {
            return v
        });
        var i, a = n(0),
            r = n(1),
            o = (n.n(r), n(2)),
            l = n(47),
            s = n(5),
            c = n(3);
        ! function(e) {
            e[e.All = 0] = "All", e[e.Month = 1] = "Month", e[e.Week = 2] = "Week", e[e.Day = 3] = "Day", e[e.Trending = 4] = "Trending"
        }(i || (i = {}));
        var d, u, m = (d = {}, d[i.All] = "ALL_TIME", d[i.Day] = "LAST_DAY", d[i.Week] = "LAST_WEEK", d[i.Month] = "LAST_MONTH", d[i.Trending] = "TRENDING", d),
            p = (u = {}, u[i.Trending] = "", u[i.Day] = Object(o.d)("24h", "TopClipsTimeFilter"), u[i.Week] = Object(o.d)("7d", "TopClipsTimeFilter"), u[i.Month] = Object(o.d)("30d", "TopClipsTimeFilter"), u[i.All] = Object(o.d)("all", "TopClipsTimeFilter"), u),
            g = [i.Trending, i.Day, i.Week, i.Month, i.All],
            h = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderFilterButton = function(e) {
                        return r.createElement(c.S, {
                            key: e,
                            onClick: n.updateFilterFuncs[e],
                            "data-a-target": "time-filter-option-" + p[e],
                            selected: e === n.props.timeFilterValue
                        }, r.createElement(c.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, n.renderFilterText(e)))
                    }, n.state = {
                        isShowingMenu: !1
                    }, n.updateFilterFuncs = g.reduce(function(e, t) {
                        return e[t] = function() {
                            n.props.updateTimeFilter(t), n.setState({
                                isShowingMenu: !1
                            })
                        }, e
                    }, {}), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(c.U, {
                        className: "top-clips-time-filter"
                    }, r.createElement(l.a, null, r.createElement(c.u, {
                        dropdown: !0,
                        type: c.z.Hollow,
                        "data-a-target": "time-filter-selection"
                    }, this.renderFilterText(this.props.timeFilterValue)), r.createElement(c.p, {
                        direction: c.q.BottomLeft,
                        noTail: !0
                    }, r.createElement(c.U, {
                        padding: {
                            y: .5
                        }
                    }, g.map(this.renderFilterButton)))))
                }, t.prototype.renderFilterText = function(e) {
                    return e === i.Trending ? r.createElement("span", null, Object(o.d)("Trending", "TopClipsTimeFilter")) : r.createElement(c.U, {
                        display: c.H.Flex
                    }, Object(o.d)("Top", "TopClipsTimeFilter"), r.createElement(c.U, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(c.Z, {
                        type: c._0.Brand,
                        label: p[e]
                    })))
                }, t
            }(r.Component),
            v = Object(s.c)("TopClipsTimeFilter")(h)
    },
    1011: function(e, t) {},
    1014: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i = n(0),
            a = n(4),
            r = (n.n(a), n(21)),
            o = (n.n(r), n(1)),
            l = (n.n(o), n(10)),
            s = n(2),
            c = n(48),
            d = n(383),
            u = n(5),
            m = n(3),
            p = n(1015),
            g = (n.n(p), function(e) {
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
                    return null !== t && (e = o.createElement(m.U, {
                        position: m._2.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(m._5, {
                        size: m._6.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(m._39)(this.props)), o.createElement(m.A, null, o.createElement(m.U, {
                        fullWidth: !0
                    }, o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(m._17, {
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
                    }, o.createElement(m._16, {
                        "data-test-selector": "video-view-count",
                        icon: m._9.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), o.createElement(m._17, {
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
                    }, o.createElement(m._16, {
                        "data-test-selector": "video-length",
                        icon: m._9.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(d.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(m.B, null, o.createElement(m.U, {
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
                    var t = r.stringify(e);
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
                    return o.createElement(m.j, {
                        overflow: !0
                    }, o.createElement(l.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "preview-image-wrapper"
                    }, o.createElement(m.P, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(m.j, {
                        ratio: m.k.Aspect16x9
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
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(m.U, {
                        "data-test-selector": "game-box-art",
                        display: m.H.InlineFlex,
                        flexShrink: 0
                    }, o.createElement(l.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(m.P, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(m._30, {
                        display: m.H.Block,
                        direction: m._32.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(m.C, {
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
                        t = o.createElement(l.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(c.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(m.U, {
                        display: m.H.Flex,
                        flexDirection: m.J.Column
                    }, o.createElement(m.U, {
                        "data-test-selector": "video-title",
                        overflow: m.Y.Hidden,
                        position: m._2.Relative
                    }, o.createElement(m._21, {
                        color: m.F.Base,
                        fontSize: m.L.Size5
                    }, o.createElement(l.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(m.U, {
                        flexShrink: 0,
                        flexGrow: 0
                    }, o.createElement(m._21, {
                        type: m._26.Span,
                        color: m.F.Alt2
                    }, e, o.createElement("span", null, " · "), t)))
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
            }(o.Component)),
            h = Object(u.c)("VideoPreviewCard")(g)
    },
    1015: function(e, t) {},
    1016: function(e, t) {},
    1028: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: f.c
            }, e)
        }

        function a(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: f.c
            }, e)
        }

        function r(e) {
            return Object(v.bindActionCreators)({
                onShowModal: f.d
            }, e)
        }
        var o = n(0),
            l = n(1),
            s = n(2),
            c = n(915),
            d = n(916),
            u = n(48),
            m = n(381),
            p = n(12),
            g = n(880),
            h = n(6),
            v = n(9),
            f = n(37),
            y = n(401),
            k = n(7),
            b = n(5),
            S = n(32),
            _ = n(108),
            C = n(20),
            N = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(s.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(s.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(s.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(s.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(s.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(s.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            E = n(3),
            w = n(1063),
            D = (n(1064), "error-message"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(E.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(E._21, {
                            color: E.F.Error,
                            type: E._26.H4,
                            "data-test-selector": D
                        }, N(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(C.a)({
                                            communityID: this.props.communityID,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                banUserFromCommunity: {
                                                    error: null,
                                                    __typename: "BanUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return t = n.sent(), null === t.data.banUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(E.P, {
                        position: E._2.Relative
                    }, l.createElement(E._17, {
                        background: E.m.Base,
                        className: "stream-ban-modal"
                    }, l.createElement(E.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(E.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E._21, {
                        type: E._26.H4
                    }, Object(s.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamBanModal")), l.createElement(E.Q, {
                        type: E.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: E._22.Center
                    }, l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        type: E.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamBanModal"))), l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(s.d)("Ban", "StreamBanModal")))))), l.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            O = Object(S.compose)(Object(k.a)(w, {
                name: "banUserFromCommunity"
            }))(F),
            T = Object(h.a)(null, i)(O),
            U = (n(1065), n(1066)),
            I = "error-message",
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(E.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(E._21, {
                            color: E.F.Error,
                            type: E._26.H4,
                            "data-test-selector": I
                        }, N(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.onDurationHoursChange = function(e) {
                        var n = parseInt(e.target.value, 10);
                        t.setState({
                            durationHours: n
                        })
                    }, t.timeoutUserFromCommunity = function() {
                        return o.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return o.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(C.a)({
                                            communityID: this.props.communityID,
                                            durationHours: this.state.durationHours,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                timeoutUserFromCommunity: {
                                                    error: null,
                                                    __typename: "TimeoutUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return t = n.sent(), null === t.data.timeoutUserFromCommunity.error ? (s.n.tracking.track(p.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(E.P, {
                        position: E._2.Relative
                    }, l.createElement(E._17, {
                        background: E.m.Base,
                        className: "stream-timeout-modal"
                    }, l.createElement(E.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(E.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(E._21, {
                        type: E._26.H4
                    }, Object(s.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamTimeoutModal")), l.createElement(E.Q, {
                        type: E.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(E.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(E._21, {
                        bold: !0
                    }, Object(s.d)("Duration", "StreamTimeoutModal")), l.createElement(E._14, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, l.createElement("option", {
                        value: "2"
                    }, Object(s.d)("2 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "4"
                    }, Object(s.d)("4 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "8"
                    }, Object(s.d)("8 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "12"
                    }, Object(s.d)("12 hours", "StreamTimeoutModal")), l.createElement("option", {
                        value: "24"
                    }, Object(s.d)("24 hours", "StreamTimeoutModal")))), l.createElement(E._17, {
                        borderTop: !0
                    }, l.createElement(E.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: E._22.Center
                    }, l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        type: E.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamTimeoutModal"))), l.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(E.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(s.d)("Timeout", "StreamTimeoutModal")))))), l.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            j = Object(S.compose)(Object(k.a)(U, {
                name: "timeoutUserFromCommunity"
            }))(L),
            R = Object(h.a)(null, a)(j),
            x = n(1067),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(T, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(R, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? l.createElement(y.a, null, l.createElement(E.v, {
                        ariaLabel: Object(s.d)("Moderation", "DirectoryGamePage"),
                        icon: E._9.ChatRiskFlag
                    }), l.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? l.createElement(E.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, l.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? l.createElement(E.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, l.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Timeout", "StreamFlag"))) : null
                }, t = o.__decorate([Object(k.a)(x, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(b.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            A = P,
            M = Object(h.a)(null, r)(A),
            V = n(931),
            B = (n(1068), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.getLinkTo = function(e, n) {
                        var i = t.props.directoryType === g.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
                        return t.props.trackingMedium && (i = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: i,
                                content: p.PageviewContent.Live,
                                content_index: n
                            }
                        }
                    }, t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && s.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    if (!e.broadcaster) return null;
                    var n = null,
                        i = null;
                    if (this.props.directoryType === g.a.Communities && (n = l.createElement(E.U, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: E._2.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(M, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) i = l.createElement(c.a, {
                        imageSrc: e.previewImageURL || s.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || V.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || s.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.d)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var a = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (a = l.createElement(E.U, {
                            className: "stream-thumbnail__stream-type-indicator-wrapper",
                            position: E._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(d.a, {
                            type: e.type
                        }))), i = l.createElement(E.U, {
                            position: E._2.Relative
                        }, l.createElement(E._27, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || V.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(V.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), a)
                    }
                    return l.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, l.createElement(E.U, {
                        className: "stream-thumbnail__card",
                        position: E._2.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, i, n))
                }, t
            }(l.Component)),
            G = B;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return G
        })
    },
    1036: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(5),
            r = n(1005),
            o = n(927),
            l = n(3),
            s = function(e) {
                var t = [];
                if (null === e.videos)
                    for (var n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, a = 0; a < n; a++) t.push(i.createElement(o.a, {
                        key: a
                    }));
                else t = e.videos.map(function(t, n) {
                    return i.createElement(l.U, {
                        key: "video-" + n,
                        padding: {
                            bottom: 2
                        }
                    }, i.createElement(r.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return i.createElement(l._33, {
                    gutterSize: l._35.Small,
                    childWidth: l._34.Medium,
                    placeholderItems: 20
                }, t)
            },
            c = Object(a.c)("VideoTower", {
                autoReportInteractive: !0
            })(s);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return c
        })
    },
    1037: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
        t.a = i
    },
    1048: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(y.a)(k, e)
        }
        var a = n(0),
            r = n(1),
            o = n(2),
            l = n(64),
            s = n(3),
            c = (n(1069), {
                TITLE: "clips-modal-title",
                MAIN_BODY: "clips-modal-main-body",
                SUCCESS_BODY: "clips-modal-success-body",
                ERROR_BODY: "clips-modal-error-body",
                SUBMIT_BUTTON: "clips-modal-submit-button",
                CANCEL_BUTTON: "clips-modal-cancel-button"
            }),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSuccess = function() {
                        return t.props.successContent ? r.createElement(s._17, {
                            "data-test-selector": c.SUCCESS_BODY,
                            padding: {
                                x: 2,
                                y: 1
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._21, {
                            type: s._26.Strong
                        }, t.props.successContent)) : null
                    }, t.renderError = function() {
                        return t.props.errorContent ? r.createElement(s._17, {
                            "data-test-selector": c.ERROR_BODY,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            borderMarked: !0,
                            background: s.m.Alt,
                            fullWidth: !0
                        }, r.createElement(s._21, {
                            type: s._26.Strong,
                            color: s.F.Error
                        }, t.props.errorContent)) : null
                    }, t.onSubmit = function() {
                        t.props.onSubmit()
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.successContent ? r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._17, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, this.renderSuccess(), r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Center
                    }, r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        onClick: this.props.onClose
                    }, Object(o.d)("Close", "ClipsModal")))))) : r.createElement(l.a, {
                        onClickOut: this.props.onClose
                    }, r.createElement(s._17, {
                        padding: 2,
                        background: s.m.Base,
                        className: "clip-modal"
                    }, r.createElement(s._17, {
                        "data-test-selector": c.TITLE,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 1
                        }
                    }, this.props.title), r.createElement(s._17, {
                        "data-test-selector": c.MAIN_BODY,
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            bottom: 2
                        }
                    }, this.renderError(), this.props.body), r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Center
                    }, r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.CANCEL_BUTTON,
                        type: s.z.Text,
                        onClick: this.props.onClose
                    }, Object(o.d)("Cancel", "ClipsModal"))), r.createElement(s.U, {
                        margin: {
                            x: 1
                        }
                    }, r.createElement(s.u, {
                        "data-test-selector": c.SUBMIT_BUTTON,
                        type: this.props.buttonType ? this.props.buttonType : s.z.Default,
                        onClick: this.onSubmit,
                        disabled: this.props.submitDisabled
                    }, this.props.buttonContent), this.props.isLoading && r.createElement(s.X, {
                        delay: 0
                    })))))
                }, t
            }(r.Component),
            u = n(882),
            m = n(5),
            p = 86400,
            g = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            h = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderTitle = function() {
                        return t.props.isTemporary ? r.createElement(s._21, {
                            type: s._26.H5,
                            ellipsis: !0
                        }, Object(o.d)("Timeout this Clip Creator for 24 hours from Your Channel", "ClipsModalBanUser")) : r.createElement(s._21, {
                            type: s._26.H5,
                            ellipsis: !0
                        }, Object(o.d)("Ban this Clip Creator from Your Channel", "ClipsModalBanUser"))
                    }, t.renderBodyText = function() {
                        return t.props.isTemporary ? r.createElement(s._21, null, Object(o.d)("{clipCreator} will temporarily be timed out from creating clips and chatting in your channel for 24 hours.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser")) : r.createElement(s._21, null, Object(o.d)("{clipCreator} will be permanently banned from creating clips and chatting in your channel.", {
                            clipCreator: t.props.clip.curator.displayName
                        }, "ClipsModalBanUser"))
                    }, t.renderButtonText = function() {
                        return t.props.isTemporary ? Object(o.d)("Timeout User", "ClipsModalBanUser") : Object(o.d)("Ban User", "ClipsModalBanUser")
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalBanUser") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? t.props.isTemporary ? Object(o.d)("There was a problem timing out this clip creator", "ClipsModalBanUser") : Object(o.d)("There was a problem banning this clip creator", "ClipsModalBanUser") : null
                    }, t.banUser = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), e = this.props.clip.curator.login, t = this.props.isTemporary ? this.props.onBanUser(e, p) : this.props.onBanUser(e), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, t];
                                    case 2:
                                        return i.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = g, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(d, {
                        onSubmit: this.banUser,
                        onClose: this.props.onClose,
                        title: this.renderTitle(),
                        body: this.renderBodyText(),
                        buttonContent: this.renderButtonText(),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure(),
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            v = function(e) {
                return {
                    channelID: e.clip.broadcaster.id
                }
            },
            f = Object(m.c)("ClipsModalBanUser")(Object(u.a)(v)(h)),
            y = n(7),
            k = n(1070),
            b = (n(1071), this),
            S = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            _ = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClip(this.props.clip)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = S, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = [r.createElement(s._21, {
                            key: "title",
                            type: s._26.H4
                        }, Object(o.d)("Delete This Clip", "ClipsModalDelete")), r.createElement(s.U, {
                            key: "message",
                            margin: {
                                top: 1
                            }
                        }, r.createElement(s._21, {
                            type: s._26.P,
                            color: s.F.Alt2
                        }, Object(o.d)("This clip will be permanently deleted.", "ClipsModalDelete")))],
                        t = r.createElement(s._17, {
                            display: s.H.Flex,
                            flexWrap: s.K.NoWrap
                        }, r.createElement(s.U, {
                            className: "clips-modal-delete__thumb",
                            margin: {
                                right: 1
                            }
                        }, r.createElement(s.j, {
                            ratio: s.k.Aspect16x9
                        }, r.createElement("img", {
                            src: this.props.clip.thumbnailURL
                        }))), r.createElement(s.U, null, r.createElement(s._21, {
                            type: s._26.H5
                        }, this.props.clip.title), r.createElement(s._21, {
                            color: s.F.Alt2
                        }, Object(o.d)("{created, date, medium}", {
                            created: new Date(this.props.clip.createdAt)
                        }, "ClipsModalDelete"), " • ", Object(o.d)("Clipped by {curator}", {
                            curator: this.props.clip.curator.login
                        }, "ClipsModalDelete")), r.createElement(s._21, {
                            color: s.F.Alt2
                        }, Object(o.d)("{viewCount, number} views", {
                            viewCount: this.props.clip.viewCount
                        }, "ClipsModalDelete"))));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        successContent: this.state.hasSucceeded ? Object(o.d)("Success!", "ClipsModalDelete") : null,
                        errorContent: this.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDelete") : null,
                        isLoading: this.state.isLoading
                    })
                }, t
            }(r.Component),
            C = function(e) {
                return {
                    deleteClip: function(t) {
                        return a.__awaiter(b, void 0, void 0, function() {
                            var n;
                            return a.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: [t.slug]
                                                }
                                            }
                                        })];
                                    case 1:
                                        return i.sent(), e.ownProps.onDelete && e.ownProps.onDelete(t), [3, 3];
                                    case 2:
                                        throw n = i.sent(), o.i.error(n, "Failed to delete clip"), n;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            N = i({
                props: C
            })(_),
            E = n(32),
            w = n(1072),
            D = this,
            F = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            O = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.deleteAll = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteAllClips(this.props.broadcastID, this.props.videoID)];
                                    case 2:
                                        return t.sent(), this.setState({
                                            isLoading: !1,
                                            hasSucceeded: !0
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            isLoading: !1,
                                            hasErrored: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("A request has been made to delete the clip. Please wait a few minutes for this to take effect.", "ClipsModalDeleteAll") : null
                    }, t.renderFailure = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalDeleteAll") : null
                    }, t.state = F, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = r.createElement(s._21, {
                        type: s._26.P
                    }, Object(o.d)("This clip and all other clips created from the same video will be permanently deleted.", "ClipsModalDeleteAll"));
                    return r.createElement(d, {
                        onSubmit: this.deleteAll,
                        onClose: this.props.onClose,
                        title: r.createElement(s._21, {
                            type: s._26.H4
                        }, Object(o.d)("Delete All Clips from Related Video", "ClipsModalDeleteAll")),
                        body: e,
                        buttonContent: Object(o.d)("Delete", "ClipsModalDeleteAll"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.isLoading || this.state.hasSucceeded || "" === this.props.broadcastID,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderFailure()
                    })
                }, t
            }(r.Component),
            T = function(e) {
                return {
                    deleteAllClips: function(t, n) {
                        return a.__awaiter(D, void 0, void 0, function() {
                            var i, r, r, l;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return a.trys.push([0, 6, , 7]), i = void 0, n ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    videoID: n
                                                }
                                            }
                                        })] : [3, 2];
                                    case 1:
                                        return r = a.sent(), i = r.data, [3, 5];
                                    case 2:
                                        return t ? [4, e.mutate({
                                            variables: {
                                                input: {
                                                    broadcastID: t
                                                }
                                            }
                                        })] : [3, 4];
                                    case 3:
                                        return r = a.sent(), i = r.data, [3, 5];
                                    case 4:
                                        throw new Error("Invalid broadcastID specified for deleteAllClips");
                                    case 5:
                                        return e.ownProps.onDeleteAll && e.ownProps.onDeleteAll(i.deleteClips.clips), [3, 7];
                                    case 6:
                                        throw l = a.sent(), o.i.error(l, "Failed to delete clips from VOD"), l;
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            U = function(e) {
                var t = e.data.clip;
                return t ? {
                    videoID: t.video ? t.video.id : null,
                    broadcastID: t.broadcast.id
                } : {
                    videoID: null,
                    broadcastID: ""
                }
            },
            I = function(e) {
                return {
                    variables: {
                        slug: e.clip.slug
                    }
                }
            },
            L = Object(E.compose)(Object(m.c)("ClipsModalDeleteAll"), i({
                props: T
            }), Object(y.a)(w, {
                props: U,
                options: I
            }))(O),
            j = this,
            R = {
                isLoading: !1,
                hasErrored: !1,
                hasSucceeded: !1
            },
            x = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.renderSuccess = function() {
                        return t.state.hasSucceeded ? Object(o.d)("Clips successfully deleted.", "ClipsModalBatchDelete") : null
                    }, t.renderError = function() {
                        return t.state.hasErrored ? Object(o.d)("There was a problem deleting this clip.", "ClipsModalBatchDelete") : null
                    }, t.onDeleteClick = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return a.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            isLoading: !0,
                                            hasSucceeded: !1,
                                            hasErrored: !1
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.deleteClips()];
                                    case 2:
                                        return t.sent(), this.setState({
                                            hasSucceeded: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return e = t.sent(), this.setState({
                                            hasErrored: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.state = R, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(s._21, {
                            type: s._26.H4
                        }, Object(o.d)("Delete these clips?", "ClipsModalBatchDelete")),
                        t = r.createElement(s._21, {
                            type: s._26.P
                        }, Object(o.d)("These clips will be permanently deleted. Are you sure?", "ClipsModalBatchDelete"));
                    return r.createElement(d, {
                        onSubmit: this.onDeleteClick,
                        onClose: this.props.onClose,
                        title: e,
                        body: t,
                        buttonContent: Object(o.d)("Delete", "ClipsModalBatchDelete"),
                        buttonType: s.z.Alert,
                        submitDisabled: this.state.hasSucceeded || this.state.isLoading,
                        isLoading: this.state.isLoading,
                        successContent: this.renderSuccess(),
                        errorContent: this.renderError()
                    })
                }, t
            }(r.Component),
            P = function(e) {
                return {
                    deleteClips: function() {
                        return a.__awaiter(j, void 0, void 0, function() {
                            var t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, e.mutate({
                                            variables: {
                                                input: {
                                                    slugs: e.ownProps.clips.map(function(e) {
                                                        return e.slug
                                                    })
                                                }
                                            }
                                        })];
                                    case 1:
                                        return n.sent(), e.ownProps.onBatchDelete && e.ownProps.onBatchDelete(), [3, 3];
                                    case 2:
                                        throw t = n.sent(), o.i.error(t, "Failed to delete clips"), t;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                }
            },
            A = i({
                props: P
            })(x);
        n.d(t, "a", function() {
            return d
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "d", function() {
            return N
        }), n.d(t, "e", function() {
            return L
        }), n.d(t, "c", function() {
            return A
        })
    },
    1049: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(65),
            o = n(2),
            l = n(109),
            s = "DIRECT_ENTITLEMENT",
            c = n(3),
            d = (n(1311), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return a.createElement(c._21, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i, r) {
                        void 0 === r && (r = c.x.Default);
                        var l = null;
                        if (n && n.length > 1) {
                            var s = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            l = a.createElement(c._21, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, s)
                        }
                        var d = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return a.createElement(c.U, {
                            alignItems: c.c.Center
                        }, a.createElement(c.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? c._9.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": d,
                            size: r
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), l)
                    }, t.onClickClaimOffer = function() {
                        if (t.props.onClickClaimOffer) {
                            var e = t.props.options,
                                n = e.primeOffers,
                                i = e.gameID,
                                a = n && n.find(function(e) {
                                    return !!e.content && !!e.content.game && e.content.game.id === i && e.deliveryMethod === s
                                });
                            a && t.props.onClickClaimOffer(a.id)
                        }
                    }, t.renderExternalAcquisitionLink = function(e) {
                        return a.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.options,
                        t = e.info,
                        n = e.primeOffers,
                        i = e.gameID,
                        d = e.countryCode,
                        u = e.externalAcquisition,
                        m = e.crates,
                        p = e.userHasPrime,
                        g = e.isInGameContent,
                        h = e.size,
                        v = n && n.find(function(e) {
                            return !!e.content && !!e.content.game && e.content.game.id === i && e.deliveryMethod === s
                        }),
                        f = d && Object(l.b)(d),
                        y = !v || !f;
                    if (t.isEntitled) return a.createElement(c._21, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton"));
                    if (0 === t.price.length && u && u.isExternal) return a.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, a.createElement(r, {
                        source: u.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    }));
                    if (!t.isForSale && y) return this.renderUnavailableText();
                    if (!v) return this.renderBuyNowButton(t.price, m, g, h);
                    var k = [],
                        b = a.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, a.createElement(c.u, {
                            onClick: this.onClickClaimOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton"))),
                        S = a.createElement(c._8, {
                            asset: c._9.Crown,
                            type: c._10.Prime,
                            width: 16,
                            height: 16,
                            key: "fuel-crown"
                        });
                    if (p) k = [S, b];
                    else {
                        var _ = v ? Object(o.d)("Free", "FuelBuyButton") : t.price;
                        k = [S, a.createElement(c._21, {
                            bold: !0,
                            className: "fuel-buy-button__prime-price",
                            "data-target": "fuel-buy-button-prime-price",
                            key: "fuel-price"
                        }, _), b]
                    }
                    return a.createElement(c.U, {
                        flexDirection: c.J.Row,
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        "data-target": "fuel-buy-button-prime"
                    }, k)
                }, t
            }(a.Component)),
            u = d;
        n.d(t, "a", function() {
            return u
        })
    },
    1051: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = a.createElement(l.U, {
                padding: 1,
                fullHeight: !0,
                flexDirection: l.J.Column,
                justifyContent: l.T.Center,
                display: l.H.Flex
            }, a.createElement(l._21, {
                color: l.F.Link,
                fontSize: l.L.Size4,
                noWrap: !0
            }, Object(o.d)("View All", "Following--ViewAllButton")), a.createElement(l._21, {
                color: l.F.Alt2,
                fontSize: l.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = a.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), a.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": c
            }, a.createElement(l.U, null, a.createElement(l.j, {
                ratio: e.aspectRatio
            }, a.createElement(l._17, {
                background: l.m.Alt2,
                fullHeight: !0
            }, t))))
        }
        t.a = i;
        var a = n(1),
            r = (n.n(a), n(10)),
            o = n(2),
            l = n(3),
            s = n(1369),
            c = (n.n(s), "view-all-button-selector")
    },
    1052: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        });
        var i;
        ! function(e) {
            e.JPEG = "image/jpeg", e.PNG = "image/png", e.GIF = "image/gif"
        }(i || (i = {}));
        var a = [i.JPEG, i.PNG]
    },
    1063: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamBan_BanUser"
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
                                value: "BanUserFromCommunityInput"
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
                            value: "banUserFromCommunity"
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
                                    value: "error"
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
                end: 130
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\n  banUserFromCommunity(input: $input) {\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1064: function(e, t) {},
    1065: function(e, t) {},
    1066: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamTimeout_TimeoutUser"
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
                                value: "TimeoutUserFromCommunityInput"
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
                            value: "timeoutUserFromCommunity"
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
                                    value: "community"
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
                                    value: "error"
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
                end: 188
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\n  timeoutUserFromCommunity(input: $input) {\n    community {\n      id\n      name\n    }\n    error\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1067: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGame_CommunityPermissions"
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
                            value: "community"
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
                                            value: "permissions"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 205
            }
        };
        n.loc.source = {
            body: "query DirectoryGame_CommunityPermissions($name: String!) {\n  community(name: $name) {\n    id\n    self {\n      permissions {\n        banning\n        timingOut\n      }\n    }\n  }\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1068: function(e, t) {},
    1069: function(e, t) {},
    1070: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Clips_DeleteClips"
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
                                value: "DeleteClipsInput"
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
                            value: "deleteClips"
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
                                    value: "clips"
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
                                            value: "slug"
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
                end: 131
            }
        };
        n.loc.source = {
            body: "mutation Clips_DeleteClips($input: DeleteClipsInput!) {\n  deleteClips(input: $input) {\n    clips {\n      id\n      slug\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1071: function(e, t) {},
    1072: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsModalDeleteAll_Clip"
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
                                    value: "video"
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
                                    value: "broadcast"
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
                end: 138
            }
        };
        n.loc.source = {
            body: "query ClipsModalDeleteAll_Clip($slug: ID!) {\n  clip(slug: $slug) {\n    id\n    video {\n      id\n    }\n    broadcast {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1073: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e.game && e.product) {
                var t, n;
                e.user && (t = e.user.displayName, n = e.user.id);
                var i = {
                    location: e.location,
                    game_id: e.game.id,
                    game_name: e.game.name,
                    developer: e.product.developer,
                    genre: e.product.genres,
                    asin: e.info.asin,
                    channel: t,
                    channel_id: n,
                    crate: e.info.crateASINs
                };
                s.n.tracking.track(c.SpadeEventType.FuelBuyButton, i)
            }
        }

        function a(e, t, n, a, o) {
            n = n || t && t.lastBroadcast && t.lastBroadcast.game;
            var l = n && n.product;
            if (n && l) {
                i({
                    user: t,
                    game: n,
                    product: l,
                    info: e,
                    location: a
                });
                var s = "";
                t && t.isCommerceRevShareEnabled && (s = "&br_id=" + t.id);
                r(e.purchaseURL + s, o)
            }
        }

        function r(e, t) {
            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
            n && !Object(o.a)() && (n.focus(), Object(l.a)(n, function(e) {
                t(e)
            }))
        }
        var o = n(841),
            l = n(836),
            s = n(2),
            c = n(12);
        t.a = a
    },
    1074: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productInfo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductInfo"
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
                            value: "asin"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "crateASINs"
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
                            value: "imageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "size"
                            },
                            value: {
                                kind: "IntValue",
                                value: "256"
                            }
                        }],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isFeatured"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isForSale"
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
                            value: "purchaseURL"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 169
            }
        };
        n.loc.source = {
            body: "fragment productInfo on ProductInfo {\n  id\n  asin\n  crateASINs\n  description\n  imageURL(size: 256)\n  isEntitled\n  isFeatured\n  isForSale\n  price\n  purchaseURL\n  title\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1076: function(e, t) {},
    1086: function(e, t, n) {
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
                case l.b:
                    return o.PageviewContent.PopularVideos;
                case l.a:
                    return o.PageviewContent.RecentVideos;
                default:
                    return e
            }
        }
        t.b = i, t.a = a;
        var r = n(266),
            o = n(12),
            l = n(850)
    },
    1087: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(4),
            r = n(1),
            o = n(2),
            l = n(993),
            s = n(47),
            c = n(266),
            d = n(1004),
            u = n(850),
            m = n(3),
            p = (n(1088), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(m.U, {
                            display: m.H.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.a, null))
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
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isPremiereExperimentActive: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e, t = Object(o.d)("All Videos", "VideoFilter"),
                        n = Object(o.d)("Past Premieres", "VideoFilter"),
                        i = Object(o.d)("Past Broadcasts", "VideoFilter"),
                        l = Object(o.d)("Highlights", "VideoFilter"),
                        p = Object(o.d)("Uploads", "VideoFilter"),
                        g = this.props.selectedSort && Object(d.e)(this.props.selectedSort) || u.a;
                    switch (this.props.broadcastType) {
                        case c.a.PastPremiere:
                            e = n;
                            break;
                        case c.a.Archive:
                            e = i;
                            break;
                        case c.a.Highlight:
                            e = l;
                            break;
                        case c.a.Upload:
                            e = p;
                            break;
                        default:
                            e = t
                    }
                    var h = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        v = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = r.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(m.U, {
                        className: a(this.props.broadcastType === c.a.PastPremiere ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(m.U, {
                        margin: {
                            bottom: 2
                        },
                        display: m.H.Flex,
                        justifyContent: m.T.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(m.U, {
                        display: m.H.InlineFlex
                    }, r.createElement(s.a, {
                        ref: this.saveBalloonWrapperRef
                    }, r.createElement(m.u, {
                        type: m.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), r.createElement(m.p, {
                        direction: m.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, r.createElement(m.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(m.U, {
                        className: a(this.props.broadcastType ? v : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(m.U, {
                        className: a(this.props.broadcastType === c.a.Archive ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(m.U, {
                        className: a(this.props.broadcastType === c.a.Highlight ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, l)), r.createElement(m.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": c.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(m.U, {
                        className: a(this.props.broadcastType === c.a.Upload ? h : v),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, p))))))), r.createElement("div", null, r.createElement(m._14, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: g,
                        "data-a-target": "video-sort-select"
                    }, r.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: u.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: u.b,
                        "data-a-target": "video-sort-popular"
                    }, Object(o.d)("Popular", "VideoFilter")))))
                }, t
            }(r.Component)),
            g = n(1036);
        n.d(t, "a", function() {
            return p
        }), n.d(t, "b", function() {
            return g.a
        }), n.d(t, !1, function() {})
    },
    1088: function(e, t) {},
    1089: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            CommunitiesAvatar: "avatar_image",
            CommunitiesCover: "cover_image",
            Default: "encoded_image",
            EventCoverImage: "event_cover_image"
        }
    },
    1250: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelGame"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Game"
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
                            value: "product"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelProduct"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 135
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n\nfragment fuelGame on Game {\n  id\n  name\n  product {\n    ...fuelProduct\n  }\n}\n',
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
        }(n(1251).definitions)), e.exports = i
    },
    1251: function(e, t, n) {
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
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProduct"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
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
                            value: "acquisition"
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
                                    value: "isExternal"
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
                            value: "developer"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "esrbRating"
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
                                    value: "details"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
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
                            value: "featureDetails"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "genres"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "inGameContent"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "inGameContent"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "launchPlatform"
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
                                    value: "isExternal"
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
                            value: "supportedPlatforms"
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
                                    value: "iconURL"
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
                end: 501
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\n\nfragment fuelProduct on GameProduct {\n  id\n  acquisition {\n    id\n    description\n    isExternal\n  }\n  developer\n  esrbRating {\n    id\n    details\n    iconURL\n  }\n  featureDetails\n  genres\n  inGameContent {\n    ...inGameContent\n  }\n  info {\n    ...productInfo\n  }\n  launchPlatform {\n    id\n    description\n    isExternal\n  }\n  supportedPlatforms {\n    id\n    name\n    iconURL\n  }\n}\n\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1074).definitions)), a.definitions = a.definitions.concat(i(n(1313).definitions)), e.exports = a
    },
    1252: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelPrimeOffer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer"
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
                            value: "deliveryMethod"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "content"
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
                end: 118
            }
        };
        n.loc.source = {
            body: "\nfragment fuelPrimeOffer on PrimeOffer {\n  id\n  deliveryMethod\n  content {\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1267: function(e, t, n) {
        "use strict";
        var i = n(1),
            a = n(2),
            r = n(3),
            o = function(e) {
                var t = Object(a.d)("Channels in English", "DirectoryInternationalSectionHeader"),
                    n = {
                        ar: Object(a.d)("Channels in Arabic", "DirectoryInternationalSectionHeader"),
                        asl: Object(a.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader"),
                        bg: Object(a.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader"),
                        cs: Object(a.d)("Channels in Czech", "DirectoryInternationalSectionHeader"),
                        da: Object(a.d)("Channels in Danish", "DirectoryInternationalSectionHeader"),
                        de: Object(a.d)("Channels in German", "DirectoryInternationalSectionHeader"),
                        el: Object(a.d)("Channels in Greek", "DirectoryInternationalSectionHeader"),
                        en: t,
                        es: Object(a.d)("Channels in Spanish", "DirectoryInternationalSectionHeader"),
                        fi: Object(a.d)("Channels in Finnish", "DirectoryInternationalSectionHeader"),
                        fr: Object(a.d)("Channels in French", "DirectoryInternationalSectionHeader"),
                        hu: Object(a.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader"),
                        it: Object(a.d)("Channels in Italian", "DirectoryInternationalSectionHeader"),
                        ja: Object(a.d)("Channels in Japanese", "DirectoryInternationalSectionHeader"),
                        ko: Object(a.d)("Channels in Korean", "DirectoryInternationalSectionHeader"),
                        nl: Object(a.d)("Channels in Dutch", "DirectoryInternationalSectionHeader"),
                        no: Object(a.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader"),
                        pl: Object(a.d)("Channels in Polish", "DirectoryInternationalSectionHeader"),
                        pt: Object(a.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader"),
                        ru: Object(a.d)("Channels in Russian", "DirectoryInternationalSectionHeader"),
                        sk: Object(a.d)("Channels in Slovak", "DirectoryInternationalSectionHeader"),
                        sv: Object(a.d)("Channels in Swedish", "DirectoryInternationalSectionHeader"),
                        th: Object(a.d)("Channels in Thai", "DirectoryInternationalSectionHeader"),
                        tr: Object(a.d)("Channels in Turkish", "DirectoryInternationalSectionHeader"),
                        vi: Object(a.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader"),
                        zh: Object(a.d)("Channels in Chinese", "DirectoryInternationalSectionHeader")
                    };
                return i.createElement(r.U, {
                    margin: {
                        bottom: 2
                    }
                }, i.createElement(r._21, {
                    type: r._26.H4,
                    color: r.F.Alt2,
                    fontSize: r.L.Size5,
                    transform: r._25.Uppercase,
                    "data-a-target": "international-section-header"
                }, n[e.languageCode] || t))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    1268: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(F.bindActionCreators)({
                onClose: O.c
            }, e)
        }
        var a, r = n(0),
            o = n(1),
            l = n(2),
            s = n(869),
            c = n(3),
            d = (n(1370), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(s.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles
                    }, o.createElement(c.U, {
                        className: "image-uploader",
                        textAlign: c._22.Center,
                        display: c.H.Flex,
                        flexDirection: c.J.Column,
                        alignItems: c.c.Center,
                        justifyContent: c.T.Center,
                        position: c._2.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), o.createElement(c.U, {
                        position: c._2.Relative
                    }, o.createElement(c.U, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, o.createElement(c._8, {
                        asset: c._9.Upload,
                        type: c._10.Alt2,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconWidth || 76
                    })), o.createElement(c.U, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: c._2.Absolute,
                        display: this.props.isLoading ? c.H.Block : c.H.Hide,
                        attachTop: !0
                    }, o.createElement(c._8, {
                        asset: c._9.Upload,
                        type: c._10.Brand,
                        width: this.props.iconWidth || 99,
                        height: this.props.iconHeight || 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return o.createElement(c.U, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, o.createElement(c._21, {
                        type: c._26.H4
                    }, Object(l.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(l.d)("Browse", "ImageUploader");
                    return o.createElement(c.U, null, o.createElement(c.U, null, o.createElement(c._21, {
                        type: c._26.H4
                    }, Object(l.d)("Drag and drop your image here", "ImageUploader"))), o.createElement(c.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, o.createElement(c._21, {
                        type: c._26.P,
                        fontSize: c.L.Size7,
                        color: c.F.Alt2
                    }, this.props.hintMessage)), o.createElement(c.U, null, o.createElement(c.u, {
                        ariaLabel: e,
                        type: c.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return o.createElement(c.U, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, o.createElement(c._21, {
                        type: c._26.H5,
                        color: c.F.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(o.Component)),
            u = n(1089),
            m = function(e) {
                return new Promise(function(t, n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var e = p(i.result);
                        t(e)
                    }, i.onerror = function(e) {
                        n(e)
                    }, i.readAsDataURL(e)
                })
            },
            p = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            g = this,
            h = function(e, t, n) {
                return r.__awaiter(g, void 0, void 0, function() {
                    var i, a, o, l, s, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t ? (i = void 0, n ? (s = {}, a = n, [4, m(e)]) : [3, 2]) : [3, 5];
                            case 1:
                                return s[a] = r.sent(), i = s, [3, 4];
                            case 2:
                                return c = {}, o = u.a.Default, [4, m(e)];
                            case 3:
                                c[o] = r.sent(), i = c, r.label = 4;
                            case 4:
                                return [2, i];
                            case 5:
                                return l = new FormData, l.append("files[]", e), [2, l];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            v = n(1052),
            f = function(e, t) {
                return Object(l.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            y = function(e, t) {
                return Object(l.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            k = function(e) {
                return Object(l.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            b = function() {
                return Object(l.d)("File too large.", "ImageUploader")
            },
            S = (a = {}, a[v.a.JPEG] = "JPG", a[v.a.PNG] = "PNG", a[v.a.GIF] = "GIF", a),
            _ = function(e) {
                var t = e.map(function(e) {
                    return S[e]
                });
                return t.length > 1 && (t[t.length - 1] = "or " + t[t.length - 1]), Object(l.d)("Incompatible format. File must be an image in {allowedTypes} format.", {
                    allowedTypes: t.join(", ")
                }, "ImageUploader")
            },
            C = n(831),
            N = this,
            E = function(e, t) {
                return r.__awaiter(N, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, C.a.post(e, {
                                    body: t,
                                    credentials: t instanceof FormData ? "include" : void 0
                                })];
                            case 1:
                                if (n = i.sent(), n.status >= 200 && n.status < 300) return [2, n.body];
                                if (n && n.error) throw new Error(JSON.stringify(n.error));
                                if (n && n.requestError) throw new Error(JSON.stringify(n.requestError));
                                throw new Error(k(n.status))
                        }
                    })
                })
            },
            w = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: v.b
                    }, n.processFiles = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n, i, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = e[0], (this.setState({
                                            errorMessage: "",
                                            isLoading: !0
                                        }), this.isFileTypeAcceptable(t)) ? [3, 1] : (this.setState({
                                            errorMessage: _(this.state.allowedFileTypes),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: b(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, h(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
                                    case 3:
                                        n = r.sent(), r.label = 4;
                                    case 4:
                                        return r.trys.push([4, 6, , 7]), [4, E(this.props.uploadURL, n)];
                                    case 5:
                                        return i = r.sent(), this.setState({
                                            isLoading: !1
                                        }), this.props.onFinishUploading && this.props.onFinishUploading(i, n), [3, 7];
                                    case 6:
                                        return a = r.sent(), this.setState({
                                            errorMessage: a.message,
                                            isLoading: !1
                                        }), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t.allowedFileTypes && (n.state.allowedFileTypes = t.allowedFileTypes), n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? y(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : f(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return o.createElement(d, {
                        allowedFileTypes: this.state.allowedFileTypes,
                        errorMessage: this.state.errorMessage,
                        hintMessage: this.state.hintMessage,
                        isLoading: this.state.isLoading,
                        processFiles: this.processFiles,
                        iconHeight: this.props.iconHeight,
                        iconWidth: this.props.iconWidth
                    })
                }, t.prototype.isFileTypeAcceptable = function(e) {
                    return this.state.allowedFileTypes.includes(e.type)
                }, t.prototype.isFileSizeAcceptable = function(e) {
                    var t = 1048576 * this.props.maxFileSizeMegabytes;
                    return e.size <= t
                }, t
            }(o.Component),
            D = n(6),
            F = n(9),
            O = n(37),
            T = n(108),
            U = (n(1371), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(c._17, {
                        className: "image-uploader-modal",
                        background: c.m.Base
                    }, o.createElement(w, r.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), o.createElement(T.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(o.Component)),
            I = Object(D.a)(null, i)(U);
        n.d(t, "a", function() {
            return w
        }), n.d(t, "b", function() {
            return I
        })
    },
    1292: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }

        function a(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(s.f)(l.a.FollowGameButton)
                }
            }, e)
        }
        var r = n(6),
            o = n(9),
            l = n(54),
            s = n(39),
            c = n(17),
            d = n(0),
            u = n(1),
            m = n(32),
            p = n(2),
            g = n(7),
            h = n(20),
            v = n(12),
            f = n(3),
            y = n(1293),
            k = n(1294),
            b = n(1295),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(h.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                followGame: {
                                                    __typename: "FollowGamePayload",
                                                    game: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "GameFollow"
                                                            },
                                                            __typename: "GameSelfConnection"
                                                        },
                                                        __typename: "Game"
                                                    }
                                                }
                                            },
                                            update: function(e, n) {
                                                var i = n.data.followGame,
                                                    a = e.readQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                a.game && (a.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: a
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = d.__assign({}, Object(h.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowGame: {
                                                    __typename: "UnfollowGamePayload",
                                                    follow: null
                                                }
                                            },
                                            update: function(e) {
                                                var n = e.readQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return u.createElement(f.u, {
                        icon: f._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return u.createElement(f._1, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(p.d)("Unfollow", "FollowGameButton");
                        return u.createElement(f.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: f._9.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: f._9.Unheart
                        })
                    }
                    return u.createElement(f.u, {
                        icon: f._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.follow,
                        "data-a-target": "game-directory-follow-button"
                    }, e)
                }, Object.defineProperty(t.prototype, "isFollowing", {
                    get: function() {
                        return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return !this.props.data || this.props.data.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.track = function(e) {
                    p.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === v.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(u.Component),
            _ = Object(m.compose)(Object(g.a)(k, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.gameName
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn || !e.gameName
                }
            }), Object(g.a)(y, {
                name: "followGame"
            }), Object(g.a)(b, {
                name: "unfollowGame"
            }))(S),
            C = Object(r.a)(i, a)(_);
        n.d(t, "a", function() {
            return C
        })
    },
    1293: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_FollowGame"
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
                                value: "FollowGameInput"
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
                            value: "followGame"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\n  followGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1294: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_Game"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 177
            }
        };
        n.loc.source = {
            body: "query FollowGameButton_Game($name: String!) {\n  game(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1295: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_UnfollowGame"
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
                                value: "UnfollowGameInput"
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
                            value: "unfollowGame"
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
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\n  unfollowGame(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1296: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(p.bindActionCreators)({
                showModal: g.d,
                closeModal: g.c
            }, e)
        }

        function a(e) {
            return Object(p.bindActionCreators)({
                showModal: g.d
            }, e)
        }

        function r(e) {
            return Object(p.bindActionCreators)({
                showModal: g.d
            }, e)
        }

        function o(e) {
            return Object(p.bindActionCreators)({
                showModal: g.d
            }, e)
        }
        var l, s = n(1),
            c = n(2),
            d = n(993),
            u = n(5),
            m = n(6),
            p = n(9),
            g = n(37),
            h = n(0),
            v = n(69),
            f = n(10),
            y = n(381),
            k = n(4),
            b = n(108),
            S = n(1048),
            _ = n(382),
            C = n(265),
            N = n(40),
            E = n(64),
            w = n(3),
            D = (n(1297), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.selectOnFocus = function(e) {
                        e.currentTarget.select(), t.props.onSelection && t.props.onSelection()
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(w.U, h.__assign({
                        position: w._2.Relative,
                        className: "selectable-input-wrapper"
                    }, Object(w._39)(this.props)), s.createElement(w.Q, {
                        type: w.R.Text,
                        value: this.props.text,
                        readOnly: !0,
                        onFocus: this.selectOnFocus,
                        icon: this.props.iconAsset,
                        id: this.props.id
                    }), this.props.children)
                }, t = h.__decorate([Object(u.c)("SelectableInput")], t)
            }(s.Component)),
            F = D,
            O = n(852),
            T = n(860),
            U = n(68),
            I = n(911),
            L = [{
                type: O.b.Twitter,
                params: {
                    tt_medium: "twtr"
                }
            }, {
                type: O.b.Facebook,
                params: {
                    tt_medium: "fb"
                }
            }, {
                type: O.b.Reddit,
                params: {
                    tt_medium: "redt"
                }
            }, {
                type: O.b.Copy
            }],
            j = function(e) {
                return s.createElement(w.U, {
                    className: "clips-social-share",
                    display: w.H.Flex,
                    flexWrap: w.K.NoWrap
                }, L.map(function(t) {
                    return s.createElement(w.U, {
                        key: t.type,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(O.a, {
                        key: t.type,
                        type: t.type,
                        text: e.clip.title,
                        url: Object(U.a)(e.clip.url, t.params),
                        onShareClick: Object(I.c)(e.clip, e.pageType)
                    }))
                }))
            },
            R = j,
            x = n(401),
            P = n(7);
        ! function(e) {
            e[e.View = 0] = "View", e[e.Report = 1] = "Report", e[e.Delete = 2] = "Delete", e[e.DeleteAll = 3] = "DeleteAll", e[e.Ban = 4] = "Ban", e[e.Timeout = 5] = "Timeout"
        }(l || (l = {}));
        var A = n(1298),
            M = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderMenuItem = function(e) {
                        var t = n.menuData.get(e);
                        return e && t ? s.createElement(w.S, {
                            key: t.display,
                            onClick: t.destinationHandler,
                            "data-a-target": "clip-moderation-button-" + t.display
                        }, s.createElement(w.U, {
                            padding: {
                                x: 1,
                                y: .5
                            }
                        }, t.display)) : null
                    }, n.menuData = new Map([
                        [l.Report, {
                            display: Object(v.d)("Report", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Report)
                            }
                        }],
                        [l.Delete, {
                            display: Object(v.d)("Delete", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Delete)
                            }
                        }],
                        [l.DeleteAll, {
                            display: Object(v.d)("Delete All Clips from Video", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.DeleteAll)
                            }
                        }],
                        [l.Ban, {
                            display: Object(v.d)("Ban User", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Ban)
                            }
                        }],
                        [l.Timeout, {
                            display: Object(v.d)("Timeout User (24 hr)", "ModerationMenu"),
                            destinationHandler: function() {
                                return n.props.updateModalViewState(l.Timeout)
                            }
                        }]
                    ]), n
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = this.props.clip;
                    if (!e || !e.currentUser) return null;
                    var n = e.currentUser.isStaff || e.currentUser.isSiteAdmin,
                        i = e.currentUser.id === t.curator.id,
                        a = e.currentUser.id === t.broadcaster.id,
                        r = i || a || n,
                        o = a || n,
                        c = [l.Report];
                    return r && c.push(l.Delete), o && (c.push(l.DeleteAll), c.push(l.Ban), c.push(l.Timeout)), s.createElement(w.U, {
                        className: "moderation-menu"
                    }, s.createElement(x.a, null, s.createElement(w.u, {
                        type: w.z.Hollow,
                        icon: w._9.More,
                        ariaLabel: Object(v.d)("More Options", "ModerationMenu"),
                        "data-a-target": "moderation-menu-button"
                    }), s.createElement(w.p, {
                        direction: w.q.TopRight
                    }, s.createElement(w.U, {
                        padding: {
                            y: .5
                        }
                    }, this.moderationMenuRender(c)))))
                }, t.prototype.moderationMenuRender = function(e) {
                    var t = this;
                    return e.map(function(e) {
                        return t.renderMenuItem(e)
                    })
                }, t = h.__decorate([Object(P.a)(A), Object(u.c)("ModerationMenu")], t)
            }(s.Component),
            V = M,
            B = (n(1299), 2e3),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingBalloon: !1
                    }, t.timeoutID = null, t.copyClipURL = function() {
                        var e;
                        try {
                            e = Object(T.a)(t.props.clip.url)
                        } catch (e) {
                            return void c.i.warn("Failed to copy", e)
                        }
                        e && (t.setState({
                            isShowingBalloon: !0
                        }), t.timeoutID = setTimeout(function() {
                            t.setState({
                                isShowingBalloon: !1
                            })
                        }, B), Object(I.c)(t.props.clip, t.props.pageType)(O.b.CopyInput))
                    }, t.dismissBalloon = function() {
                        t.setState({
                            isShowingBalloon: !1
                        }), t.timeoutID && (clearTimeout(t.timeoutID), t.timeoutID = null)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = s.createElement(f.a, {
                        to: "/" + this.props.clip.broadcaster.login,
                        onClick: this.props.closeModal,
                        "data-a-target": "clip-modal-broadcaster-link"
                    }, this.props.clip.broadcaster.login);
                    return e = this.props.clip.game ? Object(c.d)("{broadcaster} playing {game}", {
                        broadcaster: t,
                        game: s.createElement(f.a, {
                            to: "" + Object(y.d)(this.props.clip.game.name),
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-game-link"
                        }, this.props.clip.game.name)
                    }, "ClipsViewModalContent") : Object(c.d)("{broadcaster}", {
                        broadcaster: t
                    }, "ClipsViewModalContent"), s.createElement(w.U, {
                        className: "clips-view-modal-content"
                    }, s.createElement(w.U, {
                        padding: {
                            bottom: 2
                        }
                    }, s.createElement(w.j, {
                        ratio: w.k.Aspect16x9
                    }, s.createElement("iframe", {
                        src: this.props.clip.embedURL,
                        width: "100%",
                        height: "100%",
                        className: "block aspect__fill",
                        allowFullScreen: !0
                    }))), s.createElement(w.U, {
                        padding: {
                            x: 2,
                            bottom: 2
                        }
                    }, s.createElement(w.U, {
                        display: w.H.Flex,
                        flexWrap: w.K.NoWrap
                    }, s.createElement(w.U, {
                        flexGrow: 1,
                        margin: {
                            right: 1
                        }
                    }, s.createElement(E.a, {
                        onClickOut: this.dismissBalloon
                    }, s.createElement(F, {
                        text: this.props.clip.url,
                        icon: !0,
                        iconAsset: w._9.Link,
                        onSelection: this.copyClipURL,
                        "data-a-target": "clip-share-input"
                    }, s.createElement(w.p, {
                        show: this.state.isShowingBalloon,
                        direction: w.q.TopRight
                    }, s.createElement(w.S, {
                        onClick: this.dismissBalloon
                    }, s.createElement(w.U, {
                        padding: 1
                    }, s.createElement(w._21, {
                        bold: !0
                    }, Object(c.d)("Link copied to clipboard", "ClipsViewModalContent")))))))), s.createElement(R, {
                        clip: this.props.clip,
                        pageType: this.props.pageType
                    }), s.createElement(V, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState
                    }))), s.createElement(w.U, {
                        padding: {
                            x: 2,
                            bottom: 2
                        },
                        display: w.H.Flex,
                        flexWrap: w.K.NoWrap,
                        justifyContent: w.T.Between,
                        fullWidth: !0
                    }, s.createElement(w.U, {
                        flexGrow: 1
                    }, s.createElement(w.P, {
                        ellipsis: !0
                    }, s.createElement(w._17, {
                        display: w.H.Flex,
                        flexWrap: w.K.NoWrap,
                        fontSize: w.L.Size5
                    }, s.createElement(w.U, {
                        ellipsis: !0
                    }, this.props.clip.title), s.createElement(w.U, {
                        flexShrink: 0
                    }, s.createElement(w._21, {
                        type: w._26.Span,
                        color: w.F.Alt2
                    }, " • ", Object(c.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsViewModalContent"))))), s.createElement(w.P, {
                        ellipsis: !0
                    }, s.createElement(w._17, {
                        color: w.F.Alt2
                    }, e, " • ", Object(c.d)("Clipped by {curator}", {
                        curator: s.createElement(f.a, {
                            to: "/" + this.props.clip.curator.login,
                            onClick: this.props.closeModal,
                            "data-a-target": "clip-modal-curator-link"
                        }, this.props.clip.curator.login)
                    }, "ClipsViewModalContent")))), s.createElement(w._17, {
                        display: w.H.Flex,
                        margin: {
                            bottom: 2,
                            left: 2
                        },
                        fontSize: w.L.Size5,
                        color: w.F.Alt2,
                        flexShrink: 0
                    }, s.createElement(w.U, {
                        margin: {
                            right: .5
                        },
                        alignItems: w.c.Center,
                        display: w.H.Flex
                    }, s.createElement(w._8, {
                        asset: w._9.GlyphViews
                    })), Object(c.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsViewModalContent"))))
                }, t = h.__decorate([Object(u.c)("ClipsViewModalContent")], t)
            }(s.Component),
            H = G,
            W = (n(1300), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onKeyDown = function(e) {
                        var n = e.charCode || e.keyCode;
                        n === N.a.Left ? t.updateClipBackward() : n === N.a.Right && t.updateClipForward()
                    }, t.updateClipForward = function() {
                        t.updateClipIndex(t.props.clipIndex + 1)
                    }, t.updateClipBackward = function() {
                        t.updateClipIndex(t.props.clipIndex - 1)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.setUpArrowListeners()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.clipIndex && this.props.clipIndex > 0 && (e = s.createElement(w.U, {
                        position: w._2.Absolute,
                        display: w.H.Flex,
                        alignItems: w.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--left"
                    }, s.createElement(w.v, {
                        ariaLabel: Object(c.d)("Previous clip", "ClipsViewModalNavigation"),
                        type: w.w.Primary,
                        icon: w._9.AngleLeft,
                        onClick: this.updateClipBackward,
                        "data-test-selector": "clips-view-modal-content-back"
                    }))), s.createElement(w.U, {
                        className: "clips-view-modal-content"
                    }, e, s.createElement(H, {
                        clip: this.props.clip,
                        updateModalViewState: this.props.updateModalViewState,
                        pageType: this.props.pageType,
                        closeModal: this.props.closeModal
                    }), s.createElement(w.U, {
                        position: w._2.Absolute,
                        display: w.H.Flex,
                        alignItems: w.c.Stretch,
                        className: "clip-carousel-button clip-carousel-button--right"
                    }, s.createElement(w.v, {
                        ariaLabel: Object(c.d)("Next clip", "ClipsViewModalNavigation"),
                        type: w.w.Primary,
                        icon: w._9.AngleRight,
                        onClick: this.updateClipForward,
                        "data-test-selector": "clips-view-modal-content-forward"
                    })))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.onKeyDown)
                }, t.prototype.setUpArrowListeners = function() {
                    document.addEventListener("keydown", this.onKeyDown)
                }, t.prototype.updateClipIndex = function(e) {
                    var t = Math.max(0, e),
                        n = this.props.getClips();
                    n.length - t < 4 && this.props.loadMoreClips(), t < n.length && this.props.showModal(Y, {
                        getClips: this.props.getClips,
                        clip: n[t],
                        clipIndex: t,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    })
                }, t
            }(s.Component)),
            q = Object(u.c)("ClipsViewModalNavigation")(W),
            z = Object(m.a)(null, i)(q),
            $ = (n(1301), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        modalView: l.View
                    }, t.setToViewState = function() {
                        t.updateClipsModalViewState(l.View)
                    }, t.updateClipsModalViewState = function(e) {
                        t.setState({
                            modalView: e
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = (n = {}, n["clips-modal-view"] = !0, n["clips-modal-view--wide"] = !1, n);
                    return this.state.modalView === l.Report ? e = s.createElement(_.a, {
                        title: Object(c.d)("Report this Clip", "ClipsViewModal"),
                        reportContext: {
                            contentType: C.a.Clip,
                            contentID: this.props.clip.slug,
                            targetUserID: this.props.clip.broadcaster.id
                        },
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Delete ? e = s.createElement(S.d, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.DeleteAll ? e = s.createElement(S.e, {
                        clip: this.props.clip,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Ban ? e = s.createElement(S.b, {
                        clip: this.props.clip,
                        isTemporary: !1,
                        onClose: this.setToViewState
                    }) : this.state.modalView === l.Timeout ? e = s.createElement(S.b, {
                        clip: this.props.clip,
                        isTemporary: !0,
                        onClose: this.setToViewState
                    }) : (e = s.createElement(z, {
                        getClips: this.props.getClips,
                        clip: this.props.clip,
                        clipIndex: this.props.clipIndex,
                        updateModalViewState: this.updateClipsModalViewState,
                        loadMoreClips: this.props.loadMoreClips,
                        pageType: this.props.pageType
                    }), t["clips-modal-view--wide"] = !0), s.createElement(w.U, {
                        className: k(t)
                    }, e, s.createElement(b.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }));
                    var n
                }, t = h.__decorate([Object(u.c)("ClipsViewModal")], t)
            }(s.Component)),
            Q = $,
            Y = Object(m.a)(null, a)(Q),
            K = (n(1302), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getClips = function() {
                        return t.props.clips
                    }, t.openModal = function(e) {
                        e.preventDefault(), t.props.showModal(Y, {
                            getClips: t.getClips,
                            clip: t.props.clip,
                            clipIndex: t.props.clipIndex,
                            loadMoreClips: t.props.loadMoreClips,
                            pageType: t.props.pageType
                        })
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = null;
                    return this.props.pageType === I.b.Channel && this.props.clip.game && (e = s.createElement(w._17, {
                        position: w._2.Absolute,
                        attachBottom: !0,
                        attachRight: !0,
                        borderRight: !1,
                        borderBottom: !1,
                        className: "clips-preview-card__boxart"
                    }, s.createElement(f.a, {
                        to: Object(y.d)(this.props.clip.game.name) + "/clips",
                        "data-test-selector": "card-view-game-link",
                        "data-a-target": "clip-game-link"
                    }, s.createElement(w._30, {
                        display: w.H.Block,
                        direction: w._32.Bottom,
                        label: this.props.clip.game.name
                    }, s.createElement(w.C, {
                        imageAlt: this.props.clip.game.name,
                        imageSrc: this.props.clip.game.boxArtURL,
                        aspect: w.k.BoxArt,
                        size: w.D.Size4
                    }))))), this.props.pageType === I.b.Game && (t = s.createElement(w.U, null, s.createElement(f.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.broadcaster.login + "/clips"
                    }, this.props.clip.broadcaster.login))), s.createElement(w.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(w.A, h.__assign({
                        row: !0
                    }, Object(w._39)(this.props)), s.createElement(w.U, {
                        position: w._2.Relative,
                        margin: {
                            right: 1
                        },
                        flexShrink: 0
                    }, s.createElement(f.a, {
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-thumbnail-link"
                    }, s.createElement(w.C, {
                        imageSrc: this.props.clip.thumbnailURL || c.n.config.defaultStreamPreviewURL,
                        imageAlt: this.props.clip.title,
                        aspect: w.k.Aspect16x9,
                        size: w.D.Size24
                    })), e), s.createElement(w.B, null, s.createElement(w._21, {
                        type: w._26.H3,
                        fontSize: w.L.Size5
                    }, s.createElement(f.a, {
                        className: "clips-preview-card__title",
                        to: this.props.clip.url,
                        onClick: this.openModal,
                        "data-a-target": "clip-title-link"
                    }, this.props.clip.title)), s.createElement(w._21, {
                        ellipsis: !0
                    }, t), s.createElement(w._21, {
                        color: w.F.Alt2,
                        ellipsis: !0
                    }, Object(c.d)("{created, date, medium}", {
                        created: new Date(this.props.clip.createdAt)
                    }, "ClipsCardView"), s.createElement(w.P, {
                        padding: {
                            x: .5
                        }
                    }, s.createElement("span", null, "·")), s.createElement(w.P, {
                        padding: {
                            right: .5
                        }
                    }, s.createElement("span", null, Object(c.d)("Clipped by", "ClipsCardView"))), s.createElement(f.a, {
                        className: "clips-preview-card__display-name",
                        to: "/" + this.props.clip.curator.login,
                        "data-a-target": "clip-curator-link"
                    }, this.props.clip.curator.login)), s.createElement(w._21, {
                        color: w.F.Alt2
                    }, Object(c.d)("{viewCount, number} views", {
                        viewCount: this.props.clip.viewCount
                    }, "ClipsCardView")))))
                }, t = h.__decorate([Object(u.c)("ClipsCardView")], t)
            }(s.Component)),
            J = K,
            X = Object(m.a)(null, r)(J),
            Z = n(1010),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.updateToAllTime = function() {
                        t.props.updateTimeFilter(Z.b.All)
                    }, t
                }
                return h.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return s.createElement(w.U, {
                        className: "clips-cards"
                    }, s.createElement(w.N, {
                        gutterSize: w.O.None
                    }, 0 === this.props.clips.length ? this.renderEmpty() : this.renderClips()))
                }, t.prototype.renderEmpty = function() {
                    var e = s.createElement(w.U, null, s.createElement(w._21, {
                        fontSize: w.L.Size4
                    }, Object(v.d)("No clips were created in this time period.", "ClipsCards"), s.createElement("br", null), Object(v.d)("Check out all popular clips from this channel instead.", "ClipsCards")), s.createElement(w.U, {
                        margin: 3
                    }, s.createElement(w.u, {
                        type: w.z.Hollow,
                        onClick: this.updateToAllTime
                    }, Object(v.d)("See all popular clips", "ClipCards"))));
                    return this.props.timeFilterValue === Z.b.All && (e = s.createElement(w.U, null, s.createElement(w._21, {
                        fontSize: w.L.Size4
                    }, Object(v.d)("No Clips Found", "ClipsCards")), s.createElement(w.U, {
                        margin: 3
                    }, Object(v.d)("{learnClipsLink} to make and share clips of this channel", {
                        learnClipsLink: s.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2442508-how-to-use-clips",
                            target: "_blank"
                        }, Object(v.d)("Learn how", "ClipsCards"))
                    }, "ClipsCards")))), s.createElement(w.U, {
                        fullWidth: !0
                    }, s.createElement(w.N, null, s.createElement(w.G, {
                        cols: 3
                    }), s.createElement(w.G, {
                        cols: 6
                    }, s.createElement(w.U, {
                        textAlign: w._22.Center
                    }, e)), s.createElement(w.G, {
                        cols: 3
                    })))
                }, t.prototype.renderClips = function() {
                    var e = this;
                    return this.props.clips.map(function(t, n) {
                        return s.createElement(w.G, {
                            cols: {
                                default: 12,
                                xl: 6
                            },
                            key: t.slug
                        }, s.createElement(X, {
                            clip: t,
                            clips: e.props.clips,
                            clipIndex: n,
                            pageType: e.props.pageType,
                            loadMoreClips: e.props.loadMoreClips,
                            "data-target": "clips-card-view",
                            "data-a-target": "clips-card-" + n
                        }))
                    })
                }, t = h.__decorate([Object(u.c)("ClipCards")], t)
            }(s.Component),
            te = ee,
            ne = Object(m.a)(null, o)(te),
            ie = function(e) {
                return s.createElement(w.U, null, s.createElement(w.U, {
                    display: w.H.Flex,
                    flexWrap: w.K.NoWrap,
                    justifyContent: w.T.Between,
                    margin: {
                        bottom: 2
                    },
                    fullWidth: !0
                }, s.createElement(w.U, {
                    display: w.H.Flex,
                    flexWrap: w.K.NoWrap
                }, e.pageType === I.b.Game && s.createElement(w.U, {
                    margin: {
                        right: 1
                    }
                }, s.createElement(d.a, null)), s.createElement(w.U, null, s.createElement(Z.c, {
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                }))), s.createElement(w.u, {
                    linkTo: "https://twitch.tv/manager/clips",
                    targetBlank: !0,
                    type: w.z.Hollow,
                    "data-a-target": "manage-clips-button"
                }, Object(c.d)("Manage my clips", "TopClips"))), s.createElement(w.U, null, e.isLoading ? s.createElement(w.X, {
                    fillContent: !0
                }) : s.createElement(ne, {
                    clips: e.clips,
                    pageType: e.pageType,
                    loadMoreClips: e.loadMoreClips,
                    updateTimeFilter: e.updateTimeFilter,
                    timeFilterValue: e.timeFilterValue
                })))
            },
            ae = Object(u.c)("TopClips", {
                autoReportInteractive: !0
            })(ie);
        n.d(t, !1, function() {
            return ie
        }), n.d(t, "a", function() {
            return ae
        })
    },
    1297: function(e, t) {},
    1298: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ModerationMenu_User"
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
                                    value: "isStaff"
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
                end: 85
            }
        };
        n.loc.source = {
            body: "query ModerationMenu_User {\n  currentUser {\n    id\n    isSiteAdmin\n    isStaff\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1299: function(e, t) {},
    1300: function(e, t) {},
    1301: function(e, t) {},
    1302: function(e, t) {},
    1311: function(e, t) {},
    1312: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = a.test(e.info.price),
                i = a.test(t.info.price);
            if (n && i) {
                var r = +e.info.price.replace("$", ""),
                    o = +t.info.price.replace("$", ""),
                    l = r - o;
                return 0 !== l ? l : e.info.title.localeCompare(t.info.title)
            }
            return n && !i ? -1 : i ? 1 : e.info.price.localeCompare(t.info.price)
        }
        t.a = i;
        var a = /^\$[\d]+.[\d]{2}$/
    },
    1313: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "inGameContent"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "InGameContent"
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
                            value: "info"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productInfo"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 160
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n\nfragment inGameContent on InGameContent {\n  id\n  description\n  info {\n    ...productInfo\n  }\n  tags\n}\n',
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
        }(n(1074).definitions)), e.exports = i
    },
    1314: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.configScript = null, t.enabledChannelNames = new Set(r.b.get("sizmek_versatag_channels", [])), t.enabledGameIDs = new Set(r.b.get("sizmek_versatag_games", [])), t.logger = r.i.withCategory("sizmek-versatag"), t.trackingScript = null, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    (this.props.gameID && this.enabledGameIDs.has(this.props.gameID) || this.props.channelName && this.enabledChannelNames.has(this.props.channelName)) && this.injectScripts()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.gameID && this.enabledGameIDs.has(e.gameID) && this.props.gameID !== e.gameID || e.channelName && this.enabledChannelNames.has(e.channelName) && this.props.channelName !== e.channelName) && this.reloadScripts()
                }, t.prototype.componentWillUnmount = function() {
                    this.removeScripts()
                }, t.prototype.render = function() {
                    return null
                }, t.prototype.reloadScripts = function() {
                    this.removeScripts(), this.injectScripts()
                }, t.prototype.removeScripts = function() {
                    try {
                        this.configScript && (document.body.removeChild(this.configScript), this.configScript = null, this.logger.debug("VersaTag config script removed.")), this.trackingScript && (document.body.removeChild(this.trackingScript), this.trackingScript = null, this.logger.debug("VersaTag tracking script removed."));
                        var e = document.querySelector('[src^="https://bs.serving-sys.com/Serving?"]');
                        e && (document.body.removeChild(e), this.logger.debug("Extra VersaTag scripts removed."))
                    } catch (e) {
                        this.logger.warn("Failed to remove VersaTag", {
                            error: e
                        })
                    }
                }, t.prototype.injectScripts = function() {
                    try {
                        document.querySelector('[data-target="' + t.configScriptSelector + '"]') || (this.configScript = document.createElement("script"), this.configScript.setAttribute("data-target", t.configScriptSelector), this.configScript.innerHTML = "\n          versaTag = {\n            id: '8034',\n            sync: 0,\n            dispType: 'js',\n            ptcl: 'HTTPS',\n            bsUrl: 'bs.serving-sys.com/BurstingPipe',\n            activityParams: {\n              OrderID: '',\n              Session: '',\n              Value: '',\n              productid: '',\n              productinfo: '',\n              Quantity: '',\n            },\n            retargetParams: {},\n            dynamicRetargetParams: {},\n            conditionalParams: {},\n          };\n        ", document.body.appendChild(this.configScript), this.logger.debug("VersaTag config script created.")), document.querySelector('[data-target="' + t.trackingScriptSelector + '"]') || (this.trackingScript = document.createElement("script"), this.trackingScript.setAttribute("data-target", t.trackingScriptSelector), this.trackingScript.id = "ebOneTagUrlId", this.trackingScript.async = !0, this.trackingScript.src = "https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js", document.body.appendChild(this.trackingScript), this.logger.debug("VersaTag tracking script created."))
                    } catch (e) {
                        this.logger.warn("Failed to create VersaTag", {
                            error: e
                        })
                    }
                }, t.configScriptSelector = "sizmek-versatag-config", t.trackingScriptSelector = "sizmek-versatag-tracking", t
            }(a.Component);
        n.d(t, "a", function() {
            return o
        })
    },
    133: function(e, t, n) {
        "use strict";

        function i(e) {
            return r.b.get(l.a, !1) || r.a.buildType !== o.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }

        function a() {
            return !r.b.get(l.a, !1) && r.a.buildType === o.a.Production
        }
        var r = n(2),
            o = n(14),
            l = n(267);
        t.a = i, t.b = a;
        var s = "https://www.twitch.tv"
    },
    1357: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.replace(/(^|\n)(#+)([^\s#]+)/g, function(e, t, n, i) {
                return "" + t + n + " " + i
            })
        }
        t.b = i, n.d(t, "a", function() {
            return d
        });
        var a = n(0),
            r = n(1),
            o = (n.n(r), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e;
                    switch (this.props.level) {
                        case 1:
                            e = "h4";
                            break;
                        case 6:
                            e = "h6";
                            break;
                        default:
                            e = "h5"
                    }
                    return Object(r.createElement)(e, {}, this.props.children)
                }, t
            }(r.Component)),
            l = o,
            s = function(e) {
                return r.createElement("a", {
                    href: e.href,
                    title: e.title,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, e.children)
            },
            c = {
                Heading: l,
                Link: s
            },
            d = {
                allowedTypes: ["BlockQuote", "Emph", "Hardbreak", "Heading", "Item", "Link", "List", "Paragraph", "Softbreak", "Strong", "Text"],
                className: "panel-description",
                renderers: c,
                skipHtml: !0,
                softBreak: "br"
            }
    },
    1369: function(e, t) {},
    1370: function(e, t) {},
    1371: function(e, t) {},
    1372: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(926),
            o = n(5),
            l = n(275),
            s = function(e) {
                var t = e.video,
                    n = t.id,
                    o = t.lengthSeconds,
                    s = t.publishedAt,
                    c = t.previewThumbnailURL,
                    d = t.viewCount,
                    u = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return a.createElement(r.a, {
                    createdAt: s,
                    lengthSeconds: o,
                    type: r.b.Video,
                    thumbnailURL: c,
                    viewCount: d
                }, a.createElement(l.c, i.__assign({}, u)))
            },
            c = Object(o.c)("VideoEmbed")(s);
        n.d(t, !1, function() {
            return s
        }), n.d(t, "a", function() {
            return c
        })
    },
    1373: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        });
        var i, a = n(0),
            r = n(4),
            o = (n.n(r), n(1)),
            l = (n.n(o), n(2)),
            s = n(5),
            c = n(3),
            d = n(1374),
            u = (n.n(d), "[data-js-selector=carousel-content]");
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(i || (i = {}));
        var m, p = (m = {}, m[i.Previous] = c._9.AngleLeft, m[i.Next] = c._9.AngleRight, m),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1,
                        windowWidth: window.innerWidth
                    }, t.onResize = function() {
                        t.setState({
                            windowWidth: window.innerWidth
                        })
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.items) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex + 1, a = i; a < e.length; a++) {
                                if (e[a].getBoundingClientRect().right - t.getBaseOffset() > n) {
                                    i = a;
                                    break
                                }
                            }
                            t.setState({
                                currentElementIndex: i
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            for (var e = t.getCarouselChildren(), n = t.getCarouselWidth(), i = t.state.currentElementIndex - 1, a = i - 1; a >= 0; a--) {
                                if (n < -1 * (e[a].getBoundingClientRect().left - t.getBaseOffset())) break;
                                i = a
                            }
                            t.setState({
                                currentElementIndex: i
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        if (!t.carouselContainerRef) return !0;
                        if (t.props.items) {
                            var e = t.getCarouselWidth(),
                                n = t.getCarouselChildren();
                            if (t.state.currentElementIndex >= n.length - 1) return !0;
                            var i = n[t.state.currentElementIndex].getBoundingClientRect().left;
                            if (n[n.length - 1].getBoundingClientRect().right - i > e) return !1
                        }
                        return !0
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getCarouselChildren = function() {
                        if (!t.carouselContainerRef) return [];
                        var e = t.getCarouselSlider();
                        return e && e.children.length ? Array.prototype.slice.call(e.children) : []
                    }, t.getCarouselSlider = function() {
                        return t.carouselContainerRef.querySelector(u)
                    }, t.getCarouselWidth = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().width : 0
                    }, t.getBaseOffset = function() {
                        return t.carouselContainerRef ? t.carouselContainerRef.getBoundingClientRect().left : 0
                    }, t.getSliderOffset = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.getCarouselSlider();
                        return e ? e.getBoundingClientRect().left : 0
                    }, t.getChildOffset = function(e) {
                        var n = t.getCarouselChildren();
                        return 0 === n.length || n.length <= e ? 0 : n[e].getBoundingClientRect().left
                    }, t.transformString = function() {
                        return "translate3d(" + -1 * (t.getChildOffset(t.state.currentElementIndex) - t.getSliderOffset()) + "px, 0px, 0px)"
                    }, t.refHandler = function(e) {
                        return t.state.childrenRendered || null === t.props.items || t.setState({
                            childrenRendered: !0
                        }), t.carouselContainerRef = e
                    }, t.renderNavButton = function(e, t, n) {
                        var a = (d = {}, d[i.Previous] = Object(l.d)("previous", "MediaCarouselNavButton"), d[i.Next] = Object(l.d)("next", "MediaCarouselNavButton"), d),
                            s = r("media-carousel__button", {
                                "media-carousel__button--previous": e === i.Previous,
                                "media-carousel__button--next": e === i.Next,
                                "media-carousel__button--disabled": t
                            });
                        return o.createElement(c.U, {
                            className: s,
                            position: c._2.Relative,
                            display: c.H.Flex,
                            alignItems: c.c.Stretch
                        }, o.createElement(c.v, {
                            "data-test-selector": e + "-button",
                            "data-a-target": e + "-button",
                            onClick: n,
                            disabled: t,
                            ariaLabel: a[e],
                            icon: p[e],
                            size: c.x.Large
                        }));
                        var d
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onResize)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onResize)
                }, t.prototype.render = function() {
                    return o.createElement(c.P, a.__assign({}, this.props, {
                        margin: {
                            bottom: 3,
                            top: 1
                        },
                        position: c._2.Relative
                    }), o.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler,
                        "data-test-selector": "carousel-container"
                    }, o.createElement(c.U, {
                        className: "media-carousel__child-container",
                        overflow: c.Y.Hidden,
                        position: c._2.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, o.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, o.createElement(c.P, {
                        className: "media-carousel__content",
                        display: c.H.Flex,
                        flexWrap: c.K.NoWrap,
                        flexDirection: c.J.Row,
                        "data-js-selector": "carousel-content"
                    }, o.createElement("div", {
                        style: {
                            width: "max-content"
                        }
                    }, this.props.items)))), o.createElement(c.U, {
                        className: "media-carousel__nav",
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        position: c._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), o.createElement(c.U, {
                        className: "media-carousel__nav",
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        position: c._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(i.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = a.__decorate([Object(s.c)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            h = g
    },
    1374: function(e, t) {},
    1861: function(e, t) {},
    1862: function(e, t) {},
    1863: function(e, t) {},
    1864: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Events_UpdateEventBroadcastNotifications"
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
                                value: "UpdateEventBroadcastNotificationsInput"
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
                            value: "updateEventBroadcastNotifications"
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
                                    value: "eventBroadcast"
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
                                                    value: "emailEnabled"
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
                end: 238
            }
        };
        n.loc.source = {
            body: "mutation Events_UpdateEventBroadcastNotifications($input: UpdateEventBroadcastNotificationsInput!) {\n  updateEventBroadcastNotifications(input: $input) {\n    eventBroadcast {\n      id\n      self {\n        emailEnabled\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1865: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Events"
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
                                    value: "featuredEventBroadcasts"
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
                                            value: "live"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "future"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
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
                                                            value: "emailEnabled"
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
                                            value: "past"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "InlineEventBroadcast"
                                                },
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "highlights"
                                                },
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
                                                        value: "3"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "HIGHLIGHT"
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
                                                                        alias: null,
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
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
                                                                            value: "lengthSeconds"
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
                                                alias: {
                                                    kind: "Name",
                                                    value: "vods"
                                                },
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
                                                        value: "1"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "type"
                                                    },
                                                    value: {
                                                        kind: "EnumValue",
                                                        value: "ARCHIVE"
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
                                                                        alias: null,
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "thumbnailURLs"
                                                                        },
                                                                        arguments: [{
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "54"
                                                                            }
                                                                        }, {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "width"
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "96"
                                                                            }
                                                                        }],
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
                                                                            value: "lengthSeconds"
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
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "InlineEventBroadcast"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "EventBroadcast"
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
                            value: "startAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "endAt"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "coverImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "340"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "193"
                            }
                        }],
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
                                    value: "displayName"
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
                end: 1135
            }
        };
        n.loc.source = {
            body: "query GamePage_Events($name: String!) {\n  game(name: $name) {\n    id\n    name\n\n    featuredEventBroadcasts {\n      live {\n        ...InlineEventBroadcast\n        owner {\n          stream {\n            id\n            viewersCount\n          }\n        }\n      }\n      future {\n        ...InlineEventBroadcast\n        self {\n          emailEnabled\n        }\n      }\n      past {\n        ...InlineEventBroadcast\n        highlights: videos(first: 3, type:HIGHLIGHT, sort:VIEWS) {\n          edges {\n            node {\n              id\n              title\n              thumbnailURLs(height: 54, width:96)\n              viewCount\n              lengthSeconds\n            }\n          }\n        }\n        vods: videos(first: 1, type:ARCHIVE) {\n          edges {\n            node {\n              id\n              title\n              thumbnailURLs(height: 54, width:96)\n              viewCount\n              lengthSeconds\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment InlineEventBroadcast on EventBroadcast {\n  id\n  title\n  startAt\n  endAt\n  coverImageURL(width:340, height:193)\n  owner {\n    id\n    login\n    displayName\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1866: function(e, t) {},
    1867: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                    },
                    defaultValue: null
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
                            value: "directory"
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
                                    value: "type"
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
                                    value: "streams"
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
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
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
                                            value: "pageInfo"
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
                                                    value: "hasNextPage"
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
                end: 666
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    streams(first: $limit, after: $cursor, languages: $languages) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1868: function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-classes-b3b59eedbe78268cf62299a41ec09be1.png"
    },
    1869: function(e, t, n) {
        e.exports = n.p + "assets/hearthstone-modes-2390ca3de0f916ce2c85d7b26b665138.png"
    },
    1870: function(e, t, n) {
        e.exports = n.p + "assets/overwatch-chars-062a1df5ff2aaa76eb8e129940ef964a.png"
    },
    1871: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "filters"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamMetadataFilterInput"
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
                            value: "directory"
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
                                    value: "type"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Community"
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
                                            value: "streams"
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
                                                value: "languages"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "languages"
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
                                                            value: "cursor"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
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
                                                                    value: "type"
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
                                                    value: "pageInfo"
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
                                                            value: "hasNextPage"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Game"
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
                                            value: "streams"
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
                                                value: "filters"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
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
                                                            value: "cursor"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
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
                                                                    value: "type"
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
                                                    value: "pageInfo"
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
                                                            value: "hasNextPage"
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
                end: 1402
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor, $filters: StreamMetadataFilterInput) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    ... on Community {\n      id\n      streams(first: $limit, after: $cursor, languages: $languages) {\n        edges {\n          cursor\n          node {\n            id\n            title\n            viewersCount\n            previewImageURL(width: 320 height: 180)\n            broadcaster {\n              id\n              login\n              displayName\n            }\n            game {\n              id\n              boxArtURL(width: 40 height: 56)\n              name\n            }\n            type\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n    ... on Game {\n      id\n      streams(first: $limit, after: $cursor, languages: $languages, filters: $filters) {\n        edges {\n          cursor\n          node {\n            id\n            title\n            viewersCount\n            previewImageURL(width: 320 height: 180)\n            broadcaster {\n              id\n              login\n              displayName\n            }\n            game {\n              id\n              boxArtURL(width: 40 height: 56)\n              name\n            }\n            type\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1872: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GamePage_Game"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                    },
                    defaultValue: null
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
                            value: "directory"
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
                                    value: "type"
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
                                    value: "streams"
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
                                        value: "languages"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "languages"
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
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
                                            value: "pageInfo"
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
                                                    value: "hasNextPage"
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
                end: 666
            }
        };
        n.loc.source = {
            body: "query GamePage_Game($name: String!, $type: DirectoryType!, $limit: Int, $languages: [String!], $cursor: Cursor) {\n  directory(name: $name, type: $type) {\n    id\n    displayName\n    streams(first: $limit, after: $cursor, languages: $languages) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1873: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryAvatar"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                            value: "directory"
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
                                    value: "type"
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
                                        value: "80"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "112"
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
                                            value: "isStaff"
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
                end: 272
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryAvatar($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    avatarURL(width: 80 height: 112)\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1874: function(e, t) {},
    1875: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryBanner"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                            value: "directory"
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
                                    value: "type"
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
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
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
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "streams"
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
                                            value: "isStaff"
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
                end: 449
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryBanner($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    coverURL(width: 1200 height: 180)\n    viewersCount\n    followersCount\n    streams(first: 1) {\n      edges {\n        node {\n          id\n          previewImageURL(width: 320 height: 180)\n        }\n      }\n    }\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1876: function(e, t) {},
    1877: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_Community"
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
                            value: "community"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 192
            }
        };
        n.loc.source = {
            body: "query DirectoryFollowButton_Community($name: String!) {\n  community(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1878: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_FollowCommunity"
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
                                value: "FollowCommunityInput"
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
                            value: "followCommunity"
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
                                    value: "community"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\n  followCommunity(input: $input) {\n    community {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1879: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_UnfollowCommunity"
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
                                value: "UnfollowCommunityInput"
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
                            value: "unfollowCommunity"
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
            }],
            loc: {
                start: 0,
                end: 163
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\n  unfollowCommunity(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1880: function(e, t) {},
    1881: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityTosBan_TosBanCommunity"
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
                                value: "TOSBanCommunityInput"
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
                            value: "tosBanCommunity"
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
                                    value: "community"
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
                end: 146
            }
        };
        n.loc.source = {
            body: "mutation CommunityTosBan_TosBanCommunity($input: TOSBanCommunityInput!) {\n  tosBanCommunity(input: $input) {\n    community {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1882: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsCog_CommunityUserPermissions"
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
                            value: "community"
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
                                            value: "permissions"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "editing"
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
                end: 282
            }
        };
        n.loc.source = {
            body: "query SettingsCog_CommunityUserPermissions($name: String!) {\n  community(name: $name) {\n    id\n    owner {\n      id\n    }\n    self {\n      permissions {\n        banning\n        editing\n      }\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1883: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryTabs_Directory"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
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
                            value: "directory"
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
                                    value: "type"
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
                                kind: "InlineFragment",
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Game"
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
                                            value: "product"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 192
            }
        };
        n.loc.source = {
            body: "query DirectoryTabs_Directory($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    ... on Game {\n      id\n      product {\n        id\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1884: function(e, t) {},
    1885: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityPage_Details"
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
                            value: "community"
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
                                    value: "rules"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "summary"
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
                                            value: "isStaff"
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
                end: 227
            }
        };
        n.loc.source = {
            body: "query CommunityPage_Details($name: String!) {\n  community(name: $name) {\n    id\n    name\n    displayName\n    description\n    rules\n    summary\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1886: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityPage_EditCommunity"
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
                                value: "EditCommunityInput"
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
                            value: "editCommunity"
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
                                    value: "community"
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
                                            value: "rules"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "summary"
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
                end: 173
            }
        };
        n.loc.source = {
            body: "mutation CommunityPage_EditCommunity($input: EditCommunityInput!) {\n  editCommunity(input: $input) {\n    community {\n      description\n      rules\n      summary\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1887: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsCards__Game"
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                            value: "GameClipsInput"
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
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
                                                            value: "embedURL"
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
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "language"
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
                                                            }]
                                                        }
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
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "createdAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "durationSeconds"
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
                end: 813
            }
        };
        n.loc.source = {
            body: "query ClipsCards__Game($gameName: String!, $limit: Int, $cursor: Cursor, $criteria: GameClipsInput) {\n  game(name: $gameName) {\n    id,\n    clips(first: $limit, after: $cursor, criteria: $criteria) {\n      pageInfo {\n        hasNextPage\n      },\n      edges {\n        cursor\n        node {\n          id,\n          slug,\n          url,\n          embedURL,\n          title,\n          viewCount,\n          language,\n          curator {\n            id,\n            login,\n            displayName,\n          },\n          game {\n            id,\n            name,\n            boxArtURL(width: 52 height: 72),\n          },\n          broadcaster {\n            id,\n            login,\n            displayName,\n          },\n          thumbnailURL,\n          createdAt,\n          durationSeconds\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1888: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Fuel_ClaimPrimeOffer"
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
                                value: "ClaimPrimeOfferInput"
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
                            value: "claimOffer"
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
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation Fuel_ClaimPrimeOffer($input: ClaimPrimeOfferInput!) {\n  claimOffer(input: $input) {\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1889: function(e, t) {},
    1890: function(e, t) {},
    1891: function(e, t) {},
    1892: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGameDetails"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
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
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
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
                                    value: "isCommerceRevShareEnabled"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query DirectoryGameDetails($login: String!, $id: ID!) {\n user(login: $login, id: $id) {\n   displayName\n   isCommerceRevShareEnabled\n   id\n }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1893: function(e, t, n) {
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
                    value: "DirectoryGameDetails"
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
                                    value: "product"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "fuelProductFull"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelGame"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelPrimeOffer"
                                },
                                directives: []
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
                                    value: "hasPrime"
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
                end: 414
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\n#import "twilight/features/fuel/models/fuel-prime-offer.gql"\n\nquery DirectoryGameDetails($name: String!) {\n game(name: $name) {\n   product {\n     ...fuelProductFull\n   }\n   ...fuelGame\n }\n primeOffers {\n   ...fuelPrimeOffer\n }\n requestInfo {\n   countryCode\n }\n currentUser {\n   id\n   hasPrime\n }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1894).definitions)), a.definitions = a.definitions.concat(i(n(1250).definitions)), a.definitions = a.definitions.concat(i(n(1252).definitions)), e.exports = a
    },
    1894: function(e, t, n) {
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
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelProductFull"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "GameProduct"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "fuelProduct"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publisher"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "websiteURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "eulaURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "media"
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
                                    value: "backgroundImageURL"
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
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "screenshotURLs"
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
                                                value: "460"
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "height"
                                            },
                                            value: {
                                                kind: "IntValue",
                                                value: "260"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "minimumSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "recommendedSystemRequirement"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "systemRequirement"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportedLanguages"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "productLangauge"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 684
            }
        };
        a.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\n\nfragment fuelProductFull on GameProduct {\n  ...fuelProduct\n\n  publisher\n  websiteURL\n  eulaURL\n  supportURL\n  media {\n    id\n    backgroundImageURL\n    boxArtURL\n    screenshotURLs\n    videos {\n      id\n      lengthSeconds\n      previewThumbnailURL(width: 460, height: 260)\n      publishedAt\n      title\n      viewCount\n    }\n  }\n  minimumSystemRequirement {\n    ...systemRequirement\n  }\n  recommendedSystemRequirement {\n    ...systemRequirement\n  }\n  supportedLanguages {\n    ...productLangauge\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n(1251).definitions)), a.definitions = a.definitions.concat(i(n(1895).definitions)), a.definitions = a.definitions.concat(i(n(1896).definitions)), e.exports = a
    },
    1895: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "productLangauge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "ProductLanguage"
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
                            value: "language"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasInterface"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasAudio"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasSubtitles"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "fragment productLangauge on ProductLanguage {\n  language\n  hasInterface\n  hasAudio\n  hasSubtitles\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1896: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "systemRequirement"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SystemRequirement"
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
                            value: "osVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "processor"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "ram"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "videoCard"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directXVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hardDriveSpace"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "other"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 136
            }
        };
        n.loc.source = {
            body: "fragment systemRequirement on SystemRequirement {\n  osVersion\n  processor\n  ram\n  videoCard\n  directXVersion\n  hardDriveSpace\n  other\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1897: function(e, t, n) {
        var i = {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
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
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
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
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
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
                end: 571
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\n\nquery DirectoryVideos_Game($gameName: String, $videoLimit: Int, $followedCursor: Cursor, $videoSort: VideoSort, $languages: [String!], $broadcastTypes: [BroadcastType!]) {\n  game(name: $gameName) {\n    id\n    name\n    videos(first: $videoLimit, after: $followedCursor, languages: $languages, types: $broadcastTypes, sort: $videoSort) {\n      edges{\n        cursor\n        node {\n          ...PreviewCardVideo\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n',
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
    2061: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function a(e) {
            return {
                isLoggedIn: Object(we.d)(e)
            }
        }

        function r(e, t, n) {
            return e + "?tt_medium=" + Z.PageviewMedium.Game + "&tt_content=" + t + "&tt_content_index=" + n
        }

        function o(e) {
            for (var t = "", n = [], i = 0, a = Le.length; i < a && n.length <= 1; i++) t = Le[i], n = e.split(t).map(function(e) {
                return e.trim()
            }).filter(function(e) {
                return e.length
            });
            if (n.length <= 1) return {
                prefix: e,
                postfix: "",
                best: e
            };
            for (var r = 0, o = ""; 0 === o.length;) r--, o = n.slice(r).join(t);
            return {
                prefix: n.slice(0, n.length + r).join(t).trim(),
                postfix: o,
                best: o
            }
        }

        function l(e) {
            if (0 === e.length) return [];
            for (var t = "", n = [], i = 0, a = 0, r = Le.length; a < r && i <= 1; a++) t = Le[a], n = e.map(function(e) {
                return e.split(t).map(function(e) {
                    return e.trim()
                }).filter(function(e) {
                    return e.length
                })
            }), i = Math.min.apply(Math, n.map(function(e) {
                return e.length
            }));
            for (var l = 0, s = -1, c = 0; c < i; c++) ! function(e) {
                var t = n.reduce(function(t, i, a) {
                    for (var r = 0; r < a; r++) {
                        var o = n[r];
                        i[e] !== o[e] && (t += 1)
                    }
                    return t
                }, 0);
                t > l && (l = t, s = e)
            }(c);
            return -1 === s ? e.map(function(e) {
                return {
                    full: e,
                    identifier: o(e).best
                }
            }) : e.map(function(e, t) {
                return {
                    full: e,
                    identifier: n[t][s]
                }
            })
        }

        function s(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function c(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function d(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function u(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function m(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function p(e) {
            return {
                languagePreferences: Object(H.a)(e),
                sideNavExpanded: e.ui.sideNavExpanded,
                languageCode: e.session.languageCode,
                firstPageLoaded: e.session.firstPageLoaded
            }
        }

        function g(e) {
            return Object(B.bindActionCreators)({
                onShowModal: G.d
            }, e)
        }

        function h(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function v() {
            return {
                type: Lt
            }
        }

        function f() {
            return {
                type: jt
            }
        }

        function y() {
            return {
                isEditingEnabled: !1
            }
        }

        function k(e, t) {
            switch (void 0 === e && (e = y()), t.type) {
                case Lt:
                    return A.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case jt:
                    return A.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        }

        function b(e) {
            return e.directoryHeader.isEditingEnabled
        }

        function S(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function _(e) {
            return Object(B.bindActionCreators)({
                onCloseModal: G.c,
                onShowModal: G.d
            }, e)
        }

        function C(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function N(e) {
            return Object(B.bindActionCreators)({
                onCloseModal: G.c,
                onDisableDirectoryHeaderEdit: f,
                onShowModal: G.d
            }, e)
        }

        function E(e) {
            return {
                isLoggedIn: Object(we.d)(e)
            }
        }

        function w(e) {
            return Object(B.bindActionCreators)({
                login: function() {
                    return Object(yn.f)(fn.a.DirectoryFollowButton)
                }
            }, e)
        }

        function D(e) {
            return Object(B.bindActionCreators)({
                onCloseModal: G.c
            }, e)
        }

        function F(e) {
            return {
                isHeaderEditEnabled: b(e),
                isLoggedIn: Object(we.d)(e)
            }
        }

        function O(e) {
            return Object(B.bindActionCreators)({
                login: function() {
                    return Object(yn.f)(fn.a.ReportChannel)
                },
                onShowModal: G.d,
                onCloseModal: G.c,
                onEnableDirectoryHeaderEdit: v,
                onDisableDirectoryHeaderEdit: f
            }, e)
        }

        function T(e) {
            return {
                isHeaderEditEnabled: b(e)
            }
        }

        function U(e) {
            return Object(B.bindActionCreators)({
                onDisableDirectoryHeaderEdit: f
            }, e)
        }

        function I(e) {
            return {
                languagePreferences: Object(H.a)(e)
            }
        }

        function L(e) {
            return Object(B.bindActionCreators)({
                closeModal: G.c
            }, e)
        }

        function j() {
            return {}
        }

        function R(e) {
            return Object(B.bindActionCreators)({
                showImageViewerModal: function(e) {
                    var t = A.__rest(e, []);
                    return Object(G.d)(Mi, t)
                }
            }, e)
        }

        function x(e) {
            return {
                languagePreferences: Object(H.a)(e)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var P, A = n(0),
            M = n(1),
            V = n(6),
            B = n(9),
            G = n(37),
            H = n(929),
            W = n(2),
            q = n(993),
            z = n(67),
            $ = n(384),
            Q = n(7),
            Y = n(823),
            K = n(20),
            J = n(821),
            X = n(115),
            Z = n(12),
            ee = n(884),
            te = n(385),
            ne = n(5),
            ie = n(1314),
            ae = n(880),
            re = n(1009),
            oe = [{
                Maps: [{
                    name: "cs_agency",
                    display_name: "Agency"
                }, {
                    name: "cs_assault",
                    display_name: "Assault"
                }, {
                    name: "de_austria",
                    display_name: "Austria"
                }, {
                    name: "de_cache",
                    display_name: "Cache"
                }, {
                    name: "de_canals",
                    display_name: "Canals"
                }, {
                    name: "de_cbble",
                    display_name: "Cobblestone"
                }, {
                    name: "custom",
                    display_name: "Custom"
                }, {
                    name: "deathmatch",
                    display_name: "Deathmatch"
                }, {
                    name: "de_dust",
                    display_name: "Dust"
                }, {
                    name: "de_dust2",
                    display_name: "Dust II"
                }, {
                    name: "guardian",
                    display_name: "Guardian"
                }, {
                    name: "de_inferno",
                    display_name: "Inferno"
                }, {
                    name: "cs_insertion",
                    display_name: "Insertion"
                }, {
                    name: "cs_italy",
                    display_name: "Italy"
                }, {
                    name: "de_mirage",
                    display_name: "Mirage"
                }, {
                    name: "de_nuke",
                    display_name: "Nuke"
                }, {
                    name: "cs_office",
                    display_name: "Office"
                }, {
                    name: "de_overpass",
                    display_name: "Overpass"
                }, {
                    name: "de_train",
                    display_name: "Train"
                }, {
                    name: "wargames",
                    display_name: "War Games"
                }, {
                    name: "weaponsexpert",
                    display_name: "Weapons Expert"
                }]
            }],
            le = n(28),
            se = n(47),
            ce = n(3),
            de = (n(1861), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.balloonOpen = !1, t.onChangeSearchTerm = function(e) {
                        t.props.onSearch(e.currentTarget.value)
                    }, t.onToggle = function(e) {
                        return t.balloonOpen = !e
                    }, t.renderSections = function() {
                        return t.props.sections ? t.props.sections.map(function(e) {
                            return [M.createElement(ce.P, {
                                padding: {
                                    x: 1,
                                    top: .5
                                },
                                key: "header"
                            }, M.createElement(ce._21, {
                                color: ce.F.Alt2
                            }, e.title)), e.items]
                        }) : null
                    }, t.renderSelected = function() {
                        return t.props.selected ? M.createElement(ce._17, {
                            borderBottom: !0
                        }, M.createElement(ce.P, {
                            padding: {
                                x: 1,
                                top: .5
                            }
                        }, M.createElement(ce._21, {
                            color: ce.F.Alt2
                        }, t.props.selectedTitle)), t.props.selected) : null
                    }, t.setSearchRef = function(e) {
                        t.props.searchRefDelegate && t.props.searchRefDelegate(e)
                    }, t.setToggleRef = function(e) {
                        return t.toggleRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    (!this.props.selected && e.selected || this.props.selected && !e.selected) && this.balloonOpen && this.toggleRef && this.toggleRef.toggleBalloon(!1)
                }, t.prototype.render = function() {
                    return this.props.isError ? null : this.props.isLoading ? M.createElement(ce.U, {
                        margin: {
                            left: 1
                        },
                        display: ce.H.Flex,
                        justifyContent: ce.T.Center,
                        alignItems: ce.c.Center
                    }, M.createElement(ce._1, {
                        width: 70,
                        height: 30
                    })) : M.createElement(ce.U, {
                        className: "selectable-filter",
                        margin: {
                            left: 1
                        }
                    }, M.createElement(se.a, {
                        onToggle: this.onToggle,
                        ref: this.setToggleRef
                    }, M.createElement(ce.u, A.__assign({
                        dropdown: !0,
                        type: ce.z.Hollow
                    }, Object(ce._39)(this.props)), M.createElement(ce.U, {
                        display: ce.H.Flex
                    }, this.props.title)), M.createElement(ce.p, {
                        direction: ce.q.BottomLeft,
                        noTail: !0
                    }, M.createElement(ce.U, {
                        className: "selectable-filter__balloon",
                        padding: {
                            y: .5
                        }
                    }, M.createElement(ce._17, {
                        padding: 1,
                        borderBottom: !0
                    }, M.createElement(ce._11, {
                        refDelegate: this.setSearchRef,
                        onChange: this.onChangeSearchTerm,
                        placeholder: this.props.searchPlaceholder
                    })), this.renderSelected(), M.createElement(le.b, {
                        className: "selectable-filter__scroll-container"
                    }, M.createElement(ce.U, null, this.renderSections()))))))
                }, t
            }(M.Component)),
            ue = de,
            me = (n(1862), function(e) {
                return M.createElement(ce.S, A.__assign({
                    onClick: e.onClick,
                    key: e.key,
                    disabled: e.disabled
                }, Object(ce._39)(e)), M.createElement(ce.U, {
                    className: "selectable-filter-item",
                    display: ce.H.Flex,
                    flexDirection: ce.J.Row,
                    alignItems: ce.c.Center,
                    margin: {
                        y: .5,
                        x: 1
                    },
                    flexWrap: ce.K.NoWrap
                }, e.spriteWidth && M.createElement(ce.U, {
                    className: "selectable-filter-item__avatar-container",
                    flexShrink: 0
                }, M.createElement("div", {
                    className: "selectable-filter-item__avatar",
                    style: {
                        backgroundImage: "url(" + e.spriteAsset + ")",
                        backgroundPositionX: e.spriteOffsetX ? -1 * e.spriteOffsetX : 0,
                        backgroundPositionY: e.spriteOffsetY ? -1 * e.spriteOffsetY : 0,
                        width: e.spriteWidth ? e.spriteWidth + "px" : "3rem",
                        height: e.spriteWidth ? e.spriteHeight + "px" : "3rem",
                        transform: "scale(" + (e.spriteWidth > 0 ? 30 / e.spriteWidth : 1) + ")",
                        transformOrigin: "0 0"
                    }
                })), M.createElement(ce.P, {
                    margin: {
                        left: 1
                    },
                    flexGrow: 1,
                    ellipsis: !0
                }, M.createElement(ce._21, {
                    fontSize: ce.L.Size5
                }, e.name)), e.withClose && M.createElement(ce._8, {
                    asset: ce._9.Close
                })))
            }),
            pe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    var o = [];
                                    a[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && i && !e.name.match(i) || o.push(t.renderMap(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderMap(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            return A.__generator(this, function(e) {
                                return this.state.isLoading || this.state.isError || this.state.content ? [2] : (this.setState({
                                    content: oe
                                }), [2])
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.name)
                        })
                    }, t.renderMap = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(me, {
                            key: e.name,
                            "data-a-name": e.name,
                            name: e.display_name,
                            onClick: t,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return M.createElement(ue, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(W.d)("Search by Map", "CSGOMapFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(W.d)("Selected Map", "CSGOMapFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(W.d)("Map", "CSGOMapFilter"),
                        "data-test-selector": "csgo-filter-selector"
                    })
                }, t
            }(M.Component),
            ge = pe,
            he = Object(V.a)(i)(ge),
            ve = n(914),
            fe = n(4),
            ye = function() {
                var e = function() {
                    return M.createElement(ce.U, {
                        className: "featured-events-layout__column",
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ce._1, {
                        height: 60
                    })), M.createElement(ce._21, null, M.createElement(ce._1, {
                        width: 130
                    })), M.createElement(ce._21, null, M.createElement(ce._1, {
                        width: 105
                    })))
                };
                return M.createElement(ce.U, {
                    fullWidth: !0
                }, M.createElement(ce.U, {
                    margin: {
                        bottom: 2
                    }
                }, M.createElement(ce._21, null, M.createElement(ce._1, {
                    width: 150
                }))), [1, 2, 3].map(function(t) {
                    return M.createElement(e, {
                        key: t
                    })
                }))
            },
            ke = (n(1863), function(e) {
                var t = {
                    backgroundImage: "url(" + e.imageURL + ")"
                };
                return M.createElement(ce._17, {
                    className: "event",
                    margin: {
                        bottom: 1
                    },
                    border: !0
                }, M.createElement("div", {
                    className: "event__header",
                    style: t
                }, M.createElement("div", {
                    className: "event__header-overlay"
                }, M.createElement(ce._21, {
                    type: ce._26.H5,
                    bold: !0
                }, e.title))), e.children)
            }),
            be = Object(ne.c)("EventCard", {
                autoReportInteractive: !0
            })(ke),
            Se = function(e) {
                var t = e.events.map(function(e, t) {
                    if (!e.owner) return null;
                    var n = e.owner.stream;
                    if (!n) return null;
                    var i = {
                        pathname: "/" + e.owner.login,
                        state: {
                            medium: Z.PageviewMedium.Game,
                            content: Z.PageviewContent.EventLive,
                            content_index: t
                        }
                    };
                    return M.createElement(be, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.coverImageURL,
                        eventIDs: [e.id]
                    }, M.createElement(ce.U, {
                        padding: 1,
                        alignItems: ce.c.Baseline,
                        display: ce.H.Flex,
                        justifyContent: ce.T.Between
                    }, M.createElement(ce._21, {
                        type: ce._26.P
                    }, Object(W.d)("{viewerCount, number} viewers", {
                        viewerCount: n.viewersCount
                    }, "Events"), " - ", e.owner.displayName), M.createElement(ce.u, {
                        linkTo: i
                    }, Object(W.d)("Watch Now", "Events"))))
                });
                return M.createElement(ce.U, null, t)
            },
            _e = Object(ne.c)("LiveEvents", {
                autoReportInteractive: !0
            })(Se),
            Ce = n(383),
            Ne = function(e) {
                var t = e.events.map(function(e, t) {
                    if (0 === e.videos.length) return null;
                    var n = e.videos.map(function(n, i) {
                        var a = Object(Ce.a)(n.lengthSeconds || 0),
                            r = i === e.videos.length - 1 ? "event__video-last" : "",
                            o = {
                                pathname: "/videos/" + n.id,
                                state: {
                                    medium: Z.PageviewMedium.Game,
                                    content: Z.PageviewContent.EventPast,
                                    content_index: t
                                }
                            };
                        return M.createElement(ce.S, {
                            key: n.id,
                            linkTo: o,
                            alpha: !0
                        }, M.createElement(ce.U, {
                            className: "event__video " + r,
                            padding: 1
                        }, M.createElement(ce.U, {
                            className: "event__video-card"
                        }, M.createElement(ce.A, {
                            row: !0
                        }, M.createElement(ce.C, {
                            imageSrc: n.thumbnailURL,
                            imageAlt: n.title,
                            size: ce.D.Size6
                        }), M.createElement(ce.B, null, M.createElement(ce.U, {
                            padding: {
                                left: 1
                            }
                        }, M.createElement(ce._21, {
                            type: ce._26.H6
                        }, n.title), M.createElement(ce.U, {
                            className: "event__broadcast-details"
                        }, M.createElement(ce._21, {
                            type: ce._26.P
                        }, Object(W.d)("{viewCount, number} views", {
                            viewCount: n.viewCount
                        }, "Events"), " · ", a))))))))
                    });
                    return M.createElement(be, {
                        key: e.id,
                        title: e.title,
                        imageURL: e.imageURL,
                        eventIDs: [e.id]
                    }, n)
                });
                return M.createElement(ce.U, null, t)
            },
            Ee = Object(ne.c)("PastEvents", {
                autoReportInteractive: !0
            })(Ne),
            we = n(17),
            De = n(1864),
            Fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.unfollowEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(K.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !1
                        })), W.n.tracking.track(Z.SpadeEventType.EventFollowing, {
                            action: "email_reminder_off",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t.followEvent = function(e) {
                        e && (e.stopPropagation(), e.preventDefault()), t.props.updateEventBroadcastNotifications(Object(K.a)({
                            eventID: t.props.eventID,
                            emailEnabled: !0
                        })), W.n.tracking.track(Z.SpadeEventType.EventFollowing, {
                            action: "email_reminder_on",
                            event_id: t.props.eventID,
                            location: "directory"
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return null;
                    var e = ce._9.Heart,
                        t = this.followEvent,
                        n = Object(W.d)("Remind Me", "Events");
                    return this.props.areNotificationsEnabled && (e = ce._9.FollowCheck, t = this.unfollowEvent, n = Object(W.d)("Reminder Set", "Events")), M.createElement(ce._30, {
                        label: n,
                        align: ce._31.Right
                    }, M.createElement(ce.v, {
                        size: ce.x.Default,
                        icon: e,
                        onClick: t,
                        ariaLabel: n
                    }))
                }, t = A.__decorate([Object(Q.a)(De, {
                    name: "updateEventBroadcastNotifications"
                }), Object(ne.c)("NotifyMeComponent")], t)
            }(M.Component),
            Oe = Fe,
            Te = Object(V.a)(a)(Oe),
            Ue = function(e) {
                var t = 0,
                    n = e.events.map(function(e) {
                        var n = e.broadcasts.map(function(n, i) {
                                return M.createElement(ce.S, {
                                    key: n.id,
                                    linkTo: r("https://twitch.tv/events/" + n.id, Z.PageviewContent.EventUpcoming, t++),
                                    alpha: !0
                                }, M.createElement(ce.U, {
                                    className: "event__broadcast-wrapper"
                                }, M.createElement(ce.U, {
                                    className: fe("event__broadcast", {
                                        "event__broadcast-last": i === e.broadcasts.length - 1
                                    }),
                                    padding: {
                                        y: .5,
                                        left: 2,
                                        right: 1
                                    },
                                    margin: {
                                        left: 2
                                    },
                                    display: ce.H.Flex,
                                    flexWrap: ce.K.NoWrap,
                                    justifyContent: ce.T.Between
                                }, M.createElement(ce.U, {
                                    display: ce.H.Flex,
                                    flexShrink: 1
                                }, M.createElement(ce.U, {
                                    className: "event__broadcast-header",
                                    fullWidth: !0
                                }, M.createElement(ce._21, {
                                    bold: !0
                                }, Object(W.c)(n.startAt, "medium"), n.title && " - ", n.title)), M.createElement(ce.U, {
                                    className: "event__broadcast-details"
                                }, Object(W.d)("{start,time,short} - {end,time,short}", {
                                    start: n.startAt,
                                    end: n.endAt
                                }, "UpcomingEvents"))), M.createElement(ce.U, {
                                    display: ce.H.Flex,
                                    flexShrink: 0,
                                    margin: {
                                        left: 1
                                    },
                                    alignSelf: ce.d.Center
                                }, M.createElement(Te, {
                                    eventID: n.id,
                                    areNotificationsEnabled: n.notificationsEnabled
                                })))))
                            }),
                            i = e.broadcasts.map(function(e) {
                                return e.id
                            });
                        return M.createElement(be, {
                            key: i.join(""),
                            imageURL: e.imageURL,
                            title: e.title,
                            eventIDs: i
                        }, n)
                    });
                return M.createElement(ce.U, null, n)
            },
            Ie = Object(ne.c)("UpcomingEvents", {
                autoReportInteractive: !0
            })(Ue),
            Le = [" | ", " - "],
            je = n(1865),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tracked = !1, t
                }
                return A.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (this.props.data.loading) return M.createElement(ye, null);
                    if (this.props.data.error || null === this.props.data.game) return M.createElement(ce._17, {
                        color: ce.F.Alt2,
                        display: ce.H.Flex,
                        justifyContent: ce.T.Center,
                        alignItems: ce.c.Center,
                        fullWidth: !0
                    }, M.createElement(ce._8, {
                        asset: ce._9.DeadGlitch,
                        width: 46,
                        height: 48
                    }));
                    var e = !1,
                        t = null,
                        n = this.props.data.game.featuredEventBroadcasts.live.filter(this.isNotNull);
                    0 !== n.length && (e = !0, t = M.createElement(ce.U, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4
                    }, Object(W.d)("Live Events", "Events"))), M.createElement(ce.U, null, M.createElement(_e, {
                        events: n
                    }))));
                    var i = null,
                        a = this.props.data.game.featuredEventBroadcasts.future.filter(this.isNotNull),
                        r = this.convertUpcomingEvents(a);
                    0 !== r.length && (e = !0, i = M.createElement(ce.U, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4
                    }, Object(W.d)("Upcoming Events", "Events"))), M.createElement(ce.U, null, M.createElement(Ie, {
                        events: r
                    }))));
                    var o = null,
                        l = this.props.data.game.featuredEventBroadcasts.past.filter(this.isNotNull),
                        s = this.convertPastEvents(l);
                    return 0 !== s.length && (e = !0, o = M.createElement(ce.U, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4
                    }, Object(W.d)("Recent Events", "Events"))), M.createElement(ce.U, null, M.createElement(Ee, {
                        events: s
                    })))), M.createElement(ce.U, {
                        className: fe({
                            "featured-events-layout__column": e
                        })
                    }, t, i, o)
                }, t.prototype.trackPresentation = function(e, t, n) {
                    var i = e.map(function(e) {
                            return e.id
                        }),
                        a = [];
                    t.forEach(function(e) {
                        var t = e.broadcasts.map(function(e) {
                            return e.id
                        });
                        a.push.apply(a, t)
                    });
                    var r = n.map(function(e) {
                        return e.id
                    });
                    W.n.tracking.track(Z.SpadeEventType.FeaturedEventPresentation, {
                        game: this.props.data.game ? this.props.data.game.name : "unknown game",
                        live_events: JSON.stringify(i),
                        upcoming_events: JSON.stringify(a),
                        past_events: JSON.stringify(r)
                    })
                }, t.prototype.convertUpcomingEvents = function(e) {
                    var t = new Map;
                    e.forEach(function(e) {
                        var n = e.owner;
                        if (null !== n) {
                            var i = t.get(n.id) || [];
                            i.push(e), t.set(n.id, i)
                        }
                    });
                    var n = [];
                    return t.forEach(function(e) {
                        var t = new Map;
                        e.forEach(function(e) {
                            var n = o(e.title),
                                i = t.get(n.prefix) || [];
                            i.push(e), t.has(n.prefix) || t.set(n.prefix, i)
                        }), t.forEach(function(e, t) {
                            n.push({
                                title: t,
                                imageURL: e[0].coverImageURL,
                                broadcasts: e.map(function(e) {
                                    return {
                                        id: e.id,
                                        title: o(e.title).postfix,
                                        startAt: new Date(e.startAt),
                                        endAt: new Date(e.endAt),
                                        notificationsEnabled: !!e.self && e.self.emailEnabled
                                    }
                                }),
                                broadcaster: e[0].owner
                            })
                        })
                    }), n
                }, t.prototype.convertPastEvents = function(e) {
                    return e.map(function(e) {
                        var t = [];
                        e.highlights && e.highlights.edges.length > 0 ? t = e.highlights.edges : e.vods && e.vods.edges.length > 0 && (t = e.vods.edges);
                        var n = l(t.map(function(e) {
                            return e.node.title
                        }));
                        return {
                            id: e.id,
                            title: e.title,
                            imageURL: e.coverImageURL,
                            videos: t.map(function(e, t) {
                                return {
                                    id: e.node.id,
                                    title: n[t].identifier,
                                    thumbnailURL: e.node.thumbnailURLs[0],
                                    viewCount: e.node.viewCount,
                                    lengthSeconds: e.node.lengthSeconds
                                }
                            })
                        }
                    })
                }, t.prototype.isNotNull = function(e) {
                    return null !== e
                }, t.prototype.onRender = function() {
                    if (!this.props.data.loading && !this.tracked && !this.props.data.error && this.props.data.game) {
                        var e = this.props.data.game.featuredEventBroadcasts;
                        this.trackPresentation(e.live.filter(this.isNotNull), this.convertUpcomingEvents(e.future.filter(this.isNotNull)), this.convertPastEvents(e.past.filter(this.isNotNull))), this.tracked = !0
                    }
                }, t = A.__decorate([Object(Q.a)(je, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.gameName
                            }
                        }
                    }
                })], t)
            }(M.Component),
            xe = Re,
            Pe = n(1028),
            Ae = (n(1866), "directory-container"),
            Me = "direectory-grid-grid-layout",
            Ve = "directory-grid-sidebar-layout",
            Be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAdLessGrid = function() {
                        return t.renderGrid(!1)
                    }, t.renderGrid = function(e) {
                        void 0 === e && (e = !0);
                        var n = null;
                        return e && (n = M.createElement(ee.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: te.d.directory,
                            slotID: te.b.directory.rectangle,
                            adSize: te.c.directory.rectangle,
                            targeting: {
                                pagetype: te.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        })), M.createElement(ce.U, {
                            flexShrink: 0,
                            "data-target": Ae,
                            "data-test-selector": Me
                        }, M.createElement(ce._33, {
                            gutterSize: ce._35.Small,
                            childWidth: ce._34.Large,
                            placeholderItems: 20
                        }, n, t.props.children), M.createElement(le.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))
                    }, t.renderSidebar = function() {
                        return M.createElement(ce.U, {
                            display: ce.H.Flex,
                            flexWrap: ce.K.NoWrap,
                            "data-test-selector": Ve
                        }, M.createElement(ce.U, {
                            flexGrow: 1,
                            display: ce.H.Flex
                        }, M.createElement(ce.U, {
                            flexShrink: 0
                        }, M.createElement(ce._33, {
                            gutterSize: ce._35.Small,
                            childWidth: ce._34.Medium,
                            placeholderItems: 20
                        }, t.props.children), M.createElement(le.a, {
                            enabled: t.props.canLoadMore,
                            loadMore: t.props.loadMore,
                            pixelThreshold: 200
                        }))), M.createElement(ce.U, {
                            display: ce.H.Flex,
                            flexGrow: 0,
                            flexShrink: 0,
                            margin: {
                                left: 3
                            }
                        }, M.createElement(ce.U, {
                            display: ce.H.Flex,
                            flexDirection: ce.J.Column
                        }, M.createElement(ee.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 0,
                                width: 320,
                                height: 250
                            },
                            adUnit: te.d.directory,
                            slotID: te.b.directory.rectangle,
                            adSize: te.c.directory.rectangle,
                            targeting: {
                                pagetype: te.a.games,
                                game: t.props.directoryName
                            },
                            key: -1,
                            autoEnable: !1
                        }), t.props.firstPageLoaded ? M.createElement(xe, {
                            gameName: t.props.communityName
                        }) : M.createElement(ye, null))))
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Ae + '"]'),
                            t = document.querySelector('[data-target="' + Pe.a + '"]'),
                            n = document.querySelector("#" + te.b.directory.rectangle);
                        if (t && e && n) {
                            var i = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== i && "0" !== i && (n.style.order = i)
                        }
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.updateDisplayAdOrder), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.updateDisplayAdOrder()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.updateDisplayAdOrder)
                }, t.prototype.render = function() {
                    if (this.isEventApprovedDirectory(this.props.communityName)) {
                        var e = {
                                shown: this.renderSidebar,
                                hidden: this.renderGrid,
                                fallback: this.renderGrid
                            },
                            t = this.renderAdLessGrid;
                        return M.createElement(ve.a, {
                            name: "TWILIGHT_EVENT_GAME_DIRECTORY",
                            assignments: e,
                            loader: t
                        })
                    }
                    return this.renderGrid()
                }, t.prototype.isEventApprovedDirectory = function(e) {
                    return W.n.dynamicSettings.get("event_directory_enabled_games", []).includes(e.toLowerCase())
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(M.Component),
            Ge = Object(ne.c)("DirectoryGrid")(Be),
            He = Object(V.a)(s)(Ge),
            We = n(915),
            qe = n(48),
            ze = n(381),
            $e = n(1051),
            Qe = n(1037),
            Ye = n(1867),
            Ke = n(1267),
            Je = n(931),
            Xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory || this.props.data.error || !this.props.data.directory) return null;
                    var t, n = Object(W.d)("Channels in English", "DirectoryInternationalSection"),
                        i = this.props.data.directory.streams.edges || [],
                        a = this.props.directoryWidth;
                    if (a && a > 0) {
                        var r = Object(Qe.a)(a, 240, 2);
                        r < i.length && (i = i.slice(0, r - 1), t = M.createElement($e.a, {
                            subHeader: n,
                            linkTo: {
                                pathname: this.getViewAllPath(),
                                state: {
                                    medium: "GAME" === this.props.type ? Z.PageviewMedium.Game : Z.PageviewMedium.Community,
                                    content: Z.PageviewContent.Game
                                }
                            }
                        }))
                    }
                    var o = "COMMUNITY" === this.props.type ? Z.PageviewMedium.Community : Z.PageviewMedium.Game,
                        l = Object(W.d)("Untitled Broadcast", "DirectoryInternationalSection"),
                        s = i.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(t, n) {
                            var i = t.node;
                            return i.broadcaster ? "COMMUNITY" === e.props.type && i.game ? M.createElement(ce.U, {
                                key: i.id,
                                margin: {
                                    bottom: 2
                                }
                            }, M.createElement(We.a, {
                                imageSrc: i.previewImageURL || W.a.defaultStreamPreviewURL,
                                imageAlt: i.broadcaster.login + " cover image",
                                viewerCount: i.viewersCount || 0,
                                title: i.title || l,
                                channelName: Object(qe.a)(i.broadcaster.login, i.broadcaster.displayName, !0),
                                gameImageSrc: i.game.boxArtURL || W.a.defaultBoxArtURL,
                                gameTitle: i.game.name,
                                gameLinkTo: {
                                    pathname: Object(ze.d)(i.game.name),
                                    state: {
                                        medium: Z.PageviewMedium.Community,
                                        content: Z.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                linkTo: {
                                    pathname: "/" + i.broadcaster.login,
                                    state: {
                                        medium: Z.PageviewMedium.Community,
                                        content: Z.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                channelNameLinkTo: {
                                    pathname: "/" + i.broadcaster.login + "/videos",
                                    state: {
                                        medium: o,
                                        content: Z.PageviewContent.Live,
                                        content_index: n
                                    }
                                }
                            })) : M.createElement(ce.U, {
                                key: i.id,
                                margin: {
                                    bottom: 2
                                }
                            }, M.createElement(ce._27, {
                                linkTo: {
                                    pathname: "/" + i.broadcaster.login,
                                    state: {
                                        content: Z.PageviewContent.Live,
                                        content_index: n,
                                        medium: o
                                    }
                                },
                                title: i.title || l,
                                imageAlt: i.broadcaster.login + " cover image",
                                imageSrc: i.previewImageURL,
                                info: Object(Je.b)(i.viewersCount, Object(qe.a)(i.broadcaster.login, i.broadcaster.displayName, !0)),
                                "data-a-target": "card-" + n,
                                "data-a-id": "card-" + (i.broadcaster.login || "").replace(/ /g, "")
                            })) : null
                        });
                    return M.createElement("div", null, M.createElement(Ke.a, {
                        languageCode: this.props.languageCode
                    }), M.createElement(ce._33, {
                        gutterSize: ce._35.Small,
                        childWidth: ce._34.Medium,
                        placeholderItems: 20
                    }, s, t))
                }, t.prototype.getViewAllPath = function() {
                    return "COMMUNITY" === this.props.type ? Object(ze.a)(this.props.name) + "/" + this.props.languageCode : Object(ze.d)(this.props.name) + "/" + this.props.languageCode
                }, t = A.__decorate([Object(Q.a)(Ye, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.name),
                                limit: 30,
                                languages: [e.languageCode],
                                type: e.type
                            }
                        }
                    }
                }), Object(ne.c)("DirectoryInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            Ze = Xe,
            et = n(1868),
            tt = n.n(et),
            nt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = W.n.logger.withCategory("hearthstone-class-filter"), t.getItems = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    a[r].forEach(function(a) {
                                        t.state.selected && t.state.selected.name === a.name || n && !a.name.match(n) && i && !a.name.match(i) || e.push(t.renderCharacter(a, function() {
                                            return t.onSelect(a)
                                        }))
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(68).then(n.bind(null, 2062))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone class data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.class)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(me, {
                            key: e.name,
                            name: e.class,
                            onClick: t,
                            spriteAsset: tt.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    var e = Object(W.d)("Class", "HearthstoneClassFilter");
                    return M.createElement(ue, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(W.d)("Search by Class", "HearthstoneClassFilter"),
                        selected: this.getSelected(),
                        sections: [{
                            title: e,
                            items: this.getItems()
                        }],
                        selectedTitle: Object(W.d)("Selected Class", "HearthstoneClassFilter"),
                        title: this.state.selected ? this.state.selected.class : e
                    })
                }, t
            }(M.Component),
            it = nt,
            at = Object(V.a)(c)(it),
            rt = n(1869),
            ot = n.n(rt),
            lt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = W.n.logger.withCategory("hearthstone-mode-filter"), t.getSections = function() {
                        var e = [];
                        if (t.state.content) {
                            var n = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                i = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            t.state.content.forEach(function(a) {
                                Object.keys(a).forEach(function(r) {
                                    var o = [];
                                    a[r].forEach(function(e) {
                                        t.state.selected && t.state.selected.name === e.name || n && !e.name.match(n) && i && !e.name.match(i) || o.push(t.renderCharacter(e, function() {
                                            return t.onSelect(e)
                                        }))
                                    }), o.length && e.push({
                                        title: r,
                                        items: o
                                    })
                                })
                            })
                        }
                        return e
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(67).then(n.bind(null, 2063))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Hearthstone mode data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.name)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(me, {
                            key: e.name,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: ot.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_height,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return M.createElement(ue, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(W.d)("Search by Mode", "HearthstoneModeFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(W.d)("Selected Mode", "HearthstoneModeFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(W.d)("Mode", "HearthstoneModeFilter")
                    })
                }, t
            }(M.Component),
            st = lt,
            ct = Object(V.a)(d)(st),
            dt = n(21),
            ut = n(831),
            mt = "en_US",
            pt = {
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
            gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = W.n.logger.withCategory("league-filter"), t.getSections = function() {
                        var e = [],
                            n = [];
                        if (t.state.content) {
                            var i = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                a = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null;
                            Object.keys(t.state.content.data).forEach(function(r) {
                                if (t.state.content) {
                                    var o = t.state.content.data[r];
                                    if (t.state.selected && t.state.selected.name === o.name) return;
                                    if (i && !o.name.match(i) && a && !o.name.match(a)) return;
                                    var l = t.renderCharacter(o, function() {
                                        return t.onSelect(o)
                                    });
                                    o.channels > 0 ? e.push(l) : n.push(l)
                                }
                            })
                        }
                        var r = [];
                        return e.length > 0 && r.push({
                            title: Object(W.d)("Champions Online", "LeagueFilter"),
                            items: e
                        }), n.length > 0 && r.push({
                            title: Object(W.d)("Champions Offline", "LeagueFilter"),
                            items: n
                        }), r
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, r;
                            return A.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), e = W.n.intl.getLanguageCode(), t = e ? pt[e] || mt : mt, n = ut.a.getAPIURL("/api/lol/champions?" + dt.stringify({
                                            locale: t,
                                            on_site: 1
                                        })).toString(), i = this.setState, a = {}, [4, ut.a.get(n)];
                                    case 2:
                                        return i.apply(this, [(a.content = o.sent().body, a.isLoading = !1, a)]), [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Failed to load LoL champion data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelect = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.id)
                        })
                    }, t.renderCharacter = function(e, n, i) {
                        void 0 === i && (i = !1);
                        var a = "https://ddragon.leagueoflegends.com/cdn/" + t.state.content.version + "/img/sprite/" + e.image.sprite,
                            r = e.name.replace(/[.']/g, "").replace(/ /g, "").toLowerCase();
                        return M.createElement(me, {
                            disabled: 0 === e.channels,
                            key: e.id,
                            name: e.name,
                            onClick: n,
                            spriteAsset: a,
                            spriteOffsetX: e.image.x,
                            spriteOffsetY: e.image.y,
                            spriteWidth: e.image.w,
                            spriteHeight: e.image.h,
                            withClose: i,
                            "data-a-target": "champion-filter-" + r
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return M.createElement(ue, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(W.d)("Search by Champion", "LeagueFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(W.d)("Selected Champion", "LeagueFilter"),
                        title: this.state.selected ? this.state.selected.name : Object(W.d)("Champion", "LeagueFilter"),
                        "data-a-target": "league-champion-filter-dropdown"
                    })
                }, t
            }(M.Component),
            ht = gt,
            vt = Object(V.a)(u)(ht),
            ft = n(1870),
            yt = n.n(ft),
            kt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        isError: !1
                    }, t.logger = W.n.logger.withCategory("overwatch-filter"), t.getSections = function() {
                        var e = [],
                            n = [],
                            i = [],
                            a = [];
                        if (t.state.content) {
                            var r = t.state.searchTerm ? new RegExp(".*" + t.state.searchTerm.split("").join(".*"), "i") : null,
                                o = t.state.searchTerm ? new RegExp("^" + t.state.searchTerm, "i") : null,
                                l = function(e, n) {
                                    t.state.selected && t.state.selected.character === e.character || r && !e.display_name.match(r) && o && !e.display_name.match(o) || n.push(t.renderCharacter(e, function() {
                                        return t.onSelectCharacter(e)
                                    }))
                                };
                            t.state.content[0].Offense.forEach(function(t) {
                                return l(t, e)
                            }), t.state.content[1].Defense.forEach(function(e) {
                                return l(e, n)
                            }), t.state.content[2].Tank.forEach(function(e) {
                                return l(e, i)
                            }), t.state.content[3].Support.forEach(function(e) {
                                return l(e, a)
                            })
                        }
                        var s = [];
                        return e.length > 0 && s.push({
                            title: Object(W.d)("Offense", "OverwatchFilter"),
                            items: e
                        }), n.length > 0 && s.push({
                            title: Object(W.d)("Defense", "OverwatchFilter"),
                            items: n
                        }), i.length > 0 && s.push({
                            title: Object(W.d)("Tank", "OverwatchFilter"),
                            items: i
                        }), a.length > 0 && s.push({
                            title: Object(W.d)("Support", "OverwatchFilter"),
                            items: a
                        }), s
                    }, t.getSelected = function() {
                        if (t.state.selected) {
                            var e = function() {
                                return t.setState({
                                    selected: void 0,
                                    searchTerm: void 0
                                }, function() {
                                    t.searchRef && (t.searchRef.value = ""), t.props.onSelect()
                                })
                            };
                            return t.renderCharacter(t.state.selected, e, !0)
                        }
                    }, t.loadData = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.isLoading || this.state.isError || this.state.content) return [2];
                                        this.setState({
                                            isLoading: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, n.e(66).then(n.bind(null, 2064))];
                                    case 2:
                                        return e = i.sent(), this.setState({
                                            content: e,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = i.sent(), this.logger.error(t, "Failed to load Overwatch character data"), this.setState({
                                            isError: !0,
                                            isLoading: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onSearch = function(e) {
                        return t.setState({
                            searchTerm: e
                        })
                    }, t.onSelectCharacter = function(e) {
                        t.setState({
                            selected: e,
                            searchTerm: void 0
                        }, function() {
                            t.searchRef && (t.searchRef.value = ""), t.props.onSelect(e.character)
                        })
                    }, t.renderCharacter = function(e, t, n) {
                        return void 0 === n && (n = !1), M.createElement(me, {
                            key: e.character,
                            name: e.display_name,
                            onClick: t,
                            spriteAsset: yt.a,
                            spriteOffsetX: e.sprite_x_offset,
                            spriteOffsetY: e.sprite_y_offset,
                            spriteWidth: e.image_width,
                            spriteHeight: e.image_height,
                            withClose: n
                        })
                    }, t.setSearchRef = function(e) {
                        return t.searchRef = e
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.firstPageLoaded && this.loadData()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.firstPageLoaded && e.firstPageLoaded && this.loadData()
                }, t.prototype.render = function() {
                    return M.createElement(ue, {
                        isError: this.state.isError || !1,
                        isLoading: !this.props.firstPageLoaded || this.state.isLoading || !1,
                        onSearch: this.onSearch,
                        searchRefDelegate: this.setSearchRef,
                        searchPlaceholder: Object(W.d)("Search by Hero", "OverwatchFilter"),
                        selected: this.getSelected(),
                        sections: this.getSections(),
                        selectedTitle: Object(W.d)("Selected Hero", "OverwatchFilter"),
                        title: this.state.selected ? this.state.selected.display_name : Object(W.d)("Hero", "OverwatchFilter")
                    })
                }, t
            }(M.Component),
            bt = kt,
            St = Object(V.a)(m)(bt),
            _t = n(1871);
        ! function(e) {
            e.Hearthstone = "hearthstone", e.League = "league of legends", e.Overwatch = "overwatch", e.CSGO = "counter-strike%3a global offensive"
        }(P || (P = {}));
        var Ct = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getAdditionalFilters = function() {
                        if (n.state.directoryType === ae.a.Communities) return null;
                        switch (decodeURI(n.props.match.params.encodedCommunityName).toLowerCase()) {
                            case P.Hearthstone:
                                return [M.createElement(at, {
                                    onSelect: n.props.onSelectHearthstoneClass,
                                    key: "class"
                                }), M.createElement(ct, {
                                    onSelect: n.props.onSelectHearthstoneMode,
                                    key: "mode"
                                })];
                            case P.League:
                                return M.createElement(vt, {
                                    onSelect: n.props.onSelectLeagueChampion
                                });
                            case P.Overwatch:
                                return M.createElement(St, {
                                    onSelect: n.props.onSelectOverwatchCharacter
                                });
                            case P.CSGO:
                                return M.createElement(he, {
                                    onSelect: n.props.onSelectCSGOMap,
                                    key: "map"
                                });
                            default:
                                return null
                        }
                    }, n.onResize = function(e) {
                        n.setState({
                            directoryWidth: e
                        })
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(te.b.directory).length && X.a.display(te.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(re.c)(t.match.path),
                        directoryWidth: -1,
                        numSlotsAdded: 0
                    }, n
                }
                return A.__extends(t, e), t.prototype.componentWillMount = function() {
                    te.g.addListener(te.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.match.path !== e.match.path && this.setState({
                        directoryType: Object(re.c)(e.match.path)
                    })
                }, t.prototype.componentWillUnmount = function() {
                    te.g.removeListener(te.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return M.createElement(ce.U, {
                        margin: 2
                    }, M.createElement(ce.X, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return M.createElement(z.a, {
                        message: Object(W.d)("Error loading data.", "DirectoryGamePage")
                    });
                    if (!this.props.data.directory) return M.createElement(z.a, {
                        message: Object(W.d)("Game does not exist", "DirectoryGamePage")
                    });
                    var t = null,
                        n = null;
                    "en" !== this.props.languageCode && (n = M.createElement(ce.U, {
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4,
                        color: ce.F.Alt2,
                        fontSize: ce.L.Size5,
                        transform: ce._25.Uppercase,
                        "data-a-target": "international-section-header"
                    }, Object(W.d)("All Channels", "DirectoryInternationalSection"))), t = M.createElement(Ze, {
                        name: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        type: this.props.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode
                    }));
                    var i, a = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login
                    }).map(function(t, n) {
                        var i = t.node;
                        return M.createElement(Pe.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id
                        })
                    });
                    if (a.length > 0) {
                        var r = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        i = M.createElement(He, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: r,
                            loadMore: this.props.loadMore
                        }, a)
                    } else {
                        var o = Object(W.d)("There are currently no channels streaming to this community", "DirectoryGamePage");
                        this.state.directoryType === ae.a.Games && (o = Object(W.d)("No live channels for this game", "DirectoryGamePage")), i = M.createElement(ce.U, {
                            display: ce.H.Flex,
                            alignItems: ce.c.Center,
                            justifyContent: ce.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, M.createElement(ce._21, {
                            color: ce.F.Alt2,
                            fontSize: ce.L.Size4,
                            italic: !0
                        }, o))
                    }
                    return M.createElement(ce.U, null, M.createElement(ce.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(ee.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: te.d.directory,
                        slotID: te.b.directory.banner,
                        adSize: te.c.directory.banner,
                        targeting: {
                            pagetype: te.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), t, M.createElement(ce.U, {
                        margin: {
                            bottom: 2
                        },
                        display: ce.H.Flex,
                        flexDirection: ce.J.Row
                    }, M.createElement(q.a, null), this.getAdditionalFilters()), n, i, M.createElement($.a, {
                        onResize: this.onResize
                    })), this.props.firstPageLoaded && M.createElement(ie.a, {
                        gameID: this.props.data.directory.id
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && W.n.setPageTitle(this.props.data.directory.displayName))
                }, t = A.__decorate([Object(Q.a)(_t, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName),
                                limit: 30,
                                languages: e.languagePreferences,
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME",
                                filters: {
                                    hearthstoneBroadcasterHeroName: "",
                                    hearthstoneBroadcasterHeroClass: e.hearthstoneClass || "",
                                    hearthstoneGameMode: e.hearthstoneMode || "",
                                    overwatchBroadcasterCharacter: e.overwatchCharacter || "",
                                    leagueOfLegendsChampionID: e.leagueChampion ? e.leagueChampion.toString() : "",
                                    counterStrikeMap: e.csgoMap || "",
                                    counterStrikeSkill: ""
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return A.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: _t,
                                    variables: A.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            directory: A.__assign({}, i.directory, {
                                                streams: A.__assign({}, i.directory.streams, {
                                                    edges: Object(K.b)(e.directory.streams.edges, i.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ne.c)("DirectoryGamePage", {
                    destination: J.a.DirectoryGameIndex
                }), Object(Y.a)({
                    location: Z.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(M.Component),
            Nt = Ct,
            Et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.onSelectHearthstoneClass = function(e) {
                        return t.setState({
                            hearthstoneClass: e
                        })
                    }, t.onSelectHearthstoneMode = function(e) {
                        return t.setState({
                            hearthstoneMode: e
                        })
                    }, t.onSelectLeagueChampion = function(e) {
                        return t.setState({
                            leagueChampion: e
                        })
                    }, t.onSelectOverwatchCharacter = function(e) {
                        return t.setState({
                            overwatchCharacter: e
                        })
                    }, t.onSelectCSGOMap = function(e) {
                        return t.setState({
                            csgoMap: e
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    var e = Nt;
                    return M.createElement(e, A.__assign({
                        hearthstoneClass: this.state.hearthstoneClass,
                        hearthstoneMode: this.state.hearthstoneMode,
                        leagueChampion: this.state.leagueChampion,
                        csgoMap: this.state.csgoMap,
                        onSelectHearthstoneClass: this.onSelectHearthstoneClass,
                        onSelectHearthstoneMode: this.onSelectHearthstoneMode,
                        onSelectLeagueChampion: this.onSelectLeagueChampion,
                        onSelectOverwatchCharacter: this.onSelectOverwatchCharacter,
                        onSelectCSGOMap: this.onSelectCSGOMap,
                        overwatchCharacter: this.state.overwatchCharacter
                    }, this.props))
                }, t
            }(M.Component),
            wt = Object(V.a)(p, g)(Et),
            Dt = n(1872),
            Ft = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(te.b.directory).length && X.a.display(te.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(re.c)(t.match.path),
                        numSlotsAdded: 0
                    }, n
                }
                return A.__extends(t, e), t.prototype.componentWillMount = function() {
                    te.g.addListener(te.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    te.g.removeListener(te.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directory) return M.createElement(ce.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return M.createElement(z.a, {
                        message: Object(W.d)("Error loading data.", "DirectoryByLanguagePapge")
                    });
                    if (!this.props.data.directory) return M.createElement(z.a, {
                        message: Object(W.d)("Game does not exist", "DirectoryByLanguagePapge")
                    });
                    var t, n = this.props.data.directory.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login
                    }).map(function(t, n) {
                        var i = t.node;
                        return M.createElement(Pe.b, {
                            directoryName: decodeURIComponent(e.props.match.params.encodedCommunityName),
                            directoryType: e.state.directoryType,
                            streamIndex: n,
                            streamNode: i,
                            key: i.id
                        })
                    });
                    if (n.length > 0) {
                        var i = !this.props.data.loading && !this.props.data.error && "" !== this.props.data.directory.id && !!this.props.data.directory.streams.pageInfo.hasNextPage;
                        t = M.createElement(He, {
                            directoryName: this.props.data.directory.displayName,
                            communityName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                            canLoadMore: i,
                            loadMore: this.props.loadMore
                        }, n)
                    } else {
                        var a = Object(W.d)("There are currently no channels streaming to this community", "DirectoryByLanguagePapge");
                        this.state.directoryType === ae.a.Games && (a = Object(W.d)("No live channels for this game", "DirectoryByLanguagePapge")), t = M.createElement(ce.U, {
                            display: ce.H.Flex,
                            alignItems: ce.c.Center,
                            justifyContent: ce.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, M.createElement(ce._21, {
                            color: ce.F.Alt2,
                            fontSize: ce.L.Size4,
                            italic: !0
                        }, a))
                    }
                    return M.createElement(ce.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(ee.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: te.d.directory,
                        slotID: te.b.directory.banner,
                        adSize: te.c.directory.banner,
                        targeting: {
                            pagetype: te.a.games,
                            game: this.props.data.directory.displayName
                        },
                        autoEnable: !1
                    }), M.createElement(Ke.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), t)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.latencyTracking.reportInteractive(), this.props.data.directory && W.n.setPageTitle(this.props.data.directory.displayName))
                }, t = A.__decorate([Object(Q.a)(Dt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.match.params.encodedCommunityName),
                                limit: 30,
                                languages: [e.match.params.encodedLanguage],
                                type: e.match.path.startsWith("/communities") ? "COMMUNITY" : "GAME"
                            }
                        }
                    },
                    props: function(e) {
                        return A.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Dt,
                                    variables: A.__assign({}, e.data.variables, {
                                        cursor: e.data.directory.streams.edges[e.data.directory.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            directory: A.__assign({}, i.directory, {
                                                streams: A.__assign({}, i.directory.streams, {
                                                    edges: Object(K.b)(e.directory.streams.edges, i.directory.streams.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ne.c)("DirectoryCommunityByLanguagePage", {
                    destination: J.a.DirectoryCommunityByLanguage
                }), Object(Y.a)({
                    location: Z.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            game: e.data.directory ? e.data.directory.displayName : null
                        }
                    }
                })], t)
            }(M.Component),
            Ot = Ft,
            Tt = Object(V.a)(h)(Ot),
            Ut = n(22),
            It = n(14),
            Lt = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            jt = "header.DIRECTORY_HEADER_EDIT_DISABLED";
        W.n.store.registerReducer("directoryHeader", k);
        var Rt, xt = "directory-avatar-edit-menu",
            Pt = "directory-avatar-overlay",
            At = "directory-avatar-remover",
            Mt = "directory-avatar-uploader",
            Vt = "directory-banner-edit-menu",
            Bt = "directory-banner-overlay",
            Gt = "directory-banner-remover",
            Ht = "directory-banner-uploader",
            Wt = this,
            qt = function(e) {
                return A.__awaiter(Wt, void 0, void 0, function() {
                    var t;
                    return A.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, ut.a.get("https://api.twitch.tv/kraken/communities?name=" + e)];
                            case 1:
                                if ((t = n.sent()) && 200 === t.status && t.body) return [2, t.body];
                                throw new Error
                        }
                    })
                })
            },
            zt = function(e) {
                return A.__awaiter(Wt, void 0, void 0, function() {
                    var t, n;
                    return A.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, qt(e)];
                            case 1:
                                return t = i.sent(), [2, t.avatar_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            $t = function(e) {
                return A.__awaiter(Wt, void 0, void 0, function() {
                    var t, n;
                    return A.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, qt(e)];
                            case 1:
                                return t = i.sent(), [2, t.cover_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            Qt = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            Yt = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            Kt = function(e) {
                return e === ae.a.Communities ? "COMMUNITY" : "GAME"
            },
            Jt = function() {
                return Object(W.d)("Upload new image", "DirectoryHeader")
            },
            Xt = function() {
                return Object(W.d)("Remove", "DirectoryHeader")
            },
            Zt = "https://api.twitch.tv/kraken/communities/",
            en = function(e) {
                return "" + Zt + e + "/images/avatar"
            },
            tn = function(e) {
                return "" + Zt + e + "/images/cover"
            },
            nn = function(e) {
                return e === ae.a.Communities ? Object(ze.b)("communities") : Object(ze.b)()
            },
            an = n(1268),
            rn = n(1089),
            on = n(1873),
            ln = (n(1874), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? M.createElement(ce.U, null, M.createElement("div", {
                            onClick: t.onAvatarClick
                        }, M.createElement(ce.U, {
                            "data-test-selector": Pt,
                            className: "directory-header__overlay",
                            flexDirection: ce.J.Column,
                            textAlign: ce._22.Center,
                            display: ce.H.Flex,
                            position: ce._2.Absolute,
                            alignItems: ce.c.Center,
                            justifyContent: ce.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, M.createElement(ce._17, {
                            color: ce.F.Overlay
                        }, M.createElement(ce._8, {
                            asset: ce._9.Edit
                        })), M.createElement(ce._21, {
                            color: ce.F.Overlay,
                            type: ce._26.P
                        }, Object(W.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? M.createElement(ce.p, {
                            "data-test-selector": xt,
                            direction: ce.q.BottomLeft,
                            show: !0
                        }, M.createElement(ce.S, {
                            "data-test-selector": Mt,
                            onClick: t.onAvatarUploadClick
                        }, M.createElement(ce.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Jt())), M.createElement(ce.S, {
                            "data-test-selector": At,
                            onClick: t.onAvatarDeleteClick
                        }, M.createElement(ce.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Xt()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        W.n.tracking.track(Z.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "avatar",
                            old_value: t.props.data.directory.avatarURL,
                            new_value: e || null
                        })
                    }, t.onAvatarClick = function() {
                        t.setState({
                            isEditingAvatar: !t.state.isEditingAvatar
                        })
                    }, t.onAvatarUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: en(t.props.data.directory.id),
                            imageDimensions: "600x800",
                            maxFileSizeMegabytes: 1,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: rn.a.CommunitiesAvatar,
                            onFinishUploading: t.onAvatarDoneUploading
                        };
                        t.props.onShowModal(an.b, e)
                    }, t.onAvatarDeleteClick = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return A.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ut.a.delete(en(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = Qt, e
                                        }, Object(K.d)(on, {
                                            name: this.props.directoryName,
                                            type: Kt(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, zt(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackAvatarEdit(e), t.directory.avatarURL = e), t
                                        }, Object(K.d)(on, {
                                            name: this.props.directoryName,
                                            type: Kt(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? M.createElement(ce._1, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : M.createElement(ce.C, {
                        imageAlt: "",
                        imageSrc: this.props.data.directory.avatarURL,
                        size: ce.D.Size8,
                        aspect: ce.k.BoxArt
                    }), M.createElement(ce.U, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: ce._2.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = A.__decorate([Object(Q.a)(on, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Kt(e.directoryType)
                            }
                        }
                    }
                }), Object(ne.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component)),
            sn = ln,
            cn = Object(V.a)(S, _)(sn),
            dn = n(10),
            un = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("IRL" === this.props.directoryName) {
                        var n = Object(W.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(W.d)("Learn More", "DirectoryHeader"),
                            a = void 0;
                        a = M.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = M.createElement("span", null, n, " ", a)
                    } else "Always On" === this.props.directoryName && (e = Object(W.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = M.createElement(ce._21, {
                        color: ce.F.Overlay,
                        type: ce._26.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(M.Component),
            mn = un,
            pn = n(1875),
            gn = (n(1876), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? M.createElement(ce.U, null, M.createElement("div", {
                            onClick: t.onBannerClick
                        }, M.createElement(ce.U, {
                            "data-test-selector": Bt,
                            className: "directory-header__overlay",
                            flexDirection: ce.J.Column,
                            display: ce.H.Flex,
                            position: ce._2.Absolute,
                            alignItems: ce.c.Center,
                            justifyContent: ce.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, M.createElement(ce.U, {
                            position: ce._2.Relative
                        }, M.createElement(ce._17, {
                            color: ce.F.Overlay,
                            textAlign: ce._22.Center
                        }, M.createElement(ce._8, {
                            asset: ce._9.Edit
                        })), M.createElement(ce._21, {
                            color: ce.F.Overlay,
                            type: ce._26.P
                        }, Object(W.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), M.createElement(ce.U, {
                            alignContent: ce.b.End,
                            position: ce._2.Absolute,
                            textAlign: ce._22.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, M.createElement(ce.u, {
                            icon: ce._9.Check,
                            onClick: t.onDoneClick
                        }, Object(W.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? M.createElement(ce.p, {
                            "data-test-selector": Vt,
                            direction: ce.q.BottomCenter,
                            show: !0
                        }, M.createElement(ce.S, {
                            "data-test-selector": Ht,
                            onClick: t.onBannerUploadClick
                        }, M.createElement(ce.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Jt())), M.createElement(ce.S, {
                            "data-test-selector": Gt,
                            onClick: t.onBannerDeleteClick
                        }, M.createElement(ce.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, Xt()))) : null
                    }, t.trackBannerEdit = function(e) {
                        W.n.tracking.track(Z.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "banner",
                            old_value: t.props.data.directory.coverURL,
                            new_value: e || null
                        })
                    }, t.onDoneClick = function() {
                        t.props.onDisableDirectoryHeaderEdit()
                    }, t.onBannerClick = function() {
                        t.setState({
                            isEditingBanner: !t.state.isEditingBanner
                        })
                    }, t.onBannerUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: tn(t.props.data.directory.id),
                            imageDimensions: "1200x180",
                            maxFileSizeMegabytes: 3,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: rn.a.CommunitiesCover,
                            onFinishUploading: t.onBannerDoneUploading
                        };
                        t.props.onShowModal(an.b, e)
                    }, t.onBannerDeleteClick = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return A.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ut.a.delete(tn(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = Yt, e
                                        }, Object(K.d)(pn, {
                                            name: this.props.directoryName,
                                            type: Kt(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, $t(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackBannerEdit(e), t.directory.coverURL = e), t
                                        }, Object(K.d)(pn, {
                                            name: this.props.directoryName,
                                            type: Kt(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading || this.props.data.error || !this.props.data.directory) e = M.createElement(ce._1, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    else {
                        var t = Object(W.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(W.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = M.createElement(ce._21, {
                            color: ce.F.Overlay,
                            type: ce._26.P
                        }, t, " · ", n)
                    }
                    var i = !1,
                        a = {};
                    this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && (this.props.data.directory.coverURL ? a = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams.edges.length && this.props.data.directory.streams.edges.filter(function(e) {
                        return e.node.previewImageURL
                    }).map(function(e) {
                        var t = e.node;
                        i = !0, a = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }
                    }));
                    var r = fe("directory-header__banner", {
                        "directory-header__banner--blur": i
                    });
                    return M.createElement(ce.U, {
                        position: ce._2.Relative,
                        overflow: ce.Y.Hidden
                    }, M.createElement("div", {
                        className: r,
                        style: a,
                        "data-test-selector": "directory-banner-image"
                    }), M.createElement(ce.U, {
                        className: "directory-header__title",
                        position: ce._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, M.createElement(dn.a, {
                        to: {
                            pathname: nn(this.props.directoryType)
                        },
                        className: "directory-header__link"
                    }, M.createElement(ce._8, {
                        asset: ce._9.AngleLeft,
                        height: 10
                    }), Object(W.d)("Browse", "DirectoryHeader")), M.createElement(ce._21, {
                        color: ce.F.Overlay,
                        type: ce._26.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), M.createElement(mn, A.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = A.__decorate([Object(Q.a)(pn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: Kt(e.directoryType)
                            }
                        }
                    }
                }), Object(ne.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component)),
            hn = gn,
            vn = Object(V.a)(C, N)(hn),
            fn = n(54),
            yn = n(39),
            kn = n(1877),
            bn = n(1878),
            Sn = n(1879),
            _n = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1
                    }, t.communityDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                    }, t.toggleFollowing = function() {
                        t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing
                            }
                        })
                    }, t.trackResponse = function(e) {
                        if (t.props.data) {
                            var n = "follow" === e ? Z.SpadeEventType.CommunityFollow : Z.SpadeEventType.CommunityUnfollow;
                            W.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return A.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = A.__assign({}, Object(K.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                followCommunity: {
                                                    __typename: "FollowCommunityPayload",
                                                    community: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "CommunityFollow"
                                                            },
                                                            __typename: "CommunitySelfConnection"
                                                        },
                                                        __typename: "Community"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.followCommunity(e)]) : [2];
                                    case 1:
                                        return t = a.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(K.d)(kn, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return A.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = A.__assign({}, Object(K.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowCommunity: {
                                                    __typename: "UnfollowCommunityPayload",
                                                    follow: null
                                                }
                                            }
                                        }), [4, this.props.unfollowCommunity(e)]) : [2];
                                    case 1:
                                        return i.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(K.d)(kn, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(W.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? M.createElement(ce._1, {
                        width: 70,
                        height: 30
                    }) : this.communityDataLoaded() ? this.state.isFollowing ? M.createElement(ce.U, {
                        display: ce.H.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, M.createElement(ce.v, {
                        ariaLabel: Object(W.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: ce._9.Heart,
                        statusAlertIcon: ce._9.Unheart
                    })) : M.createElement(ce.u, A.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: ce._9.Heart,
                        onClick: this.toggleFollowing
                    }, Object(ce._39)(this.props)), e) : null : M.createElement(ce.u, {
                        ariaLabel: e,
                        icon: ce._9.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e)
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = A.__decorate([Object(Q.a)(kn, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.directoryName
                    }
                }), Object(Q.a)(bn, {
                    name: "followCommunity"
                }), Object(Q.a)(Sn, {
                    name: "unfollowCommunity"
                }), Object(ne.c)("DirectoryFollowButton")], t)
            }(M.Component),
            Cn = _n,
            Nn = Object(V.a)(E, w)(Cn),
            En = n(878),
            wn = n(133),
            Dn = n(401),
            Fn = n(382),
            On = n(143),
            Tn = n(265),
            Un = n(32),
            In = n(108),
            Ln = (n(1880), n(1881)),
            jn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return A.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = A.__assign({}, Object(K.a)({
                                            communityID: this.props.communityID
                                        }), {
                                            optimisticResponse: {
                                                tosBanCommunity: {
                                                    community: {
                                                        id: this.props.communityID,
                                                        __typename: "Community"
                                                    },
                                                    __typename: "TosBanCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.tosBanCommunity(e)]) : [2];
                                    case 1:
                                        return t.sent(), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    return M.createElement(ce.P, {
                        position: ce._2.Relative
                    }, M.createElement(ce._17, {
                        background: ce.m.Base,
                        className: "community-ban-modal"
                    }, M.createElement(ce.U, {
                        padding: 2
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4
                    }, Object(W.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), M.createElement(ce._17, {
                        borderTop: !0
                    }, M.createElement(ce.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: ce._22.Center
                    }, M.createElement(ce.U, {
                        display: ce.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, M.createElement(ce.u, {
                        type: ce.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(W.d)("Cancel", "CommunityBanModal"))), M.createElement(ce.U, {
                        display: ce.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, M.createElement(ce.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(W.d)("Ban", "CommunityBanModal")))))), M.createElement(In.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(M.Component),
            Rn = Object(Un.compose)(Object(Q.a)(Ln, {
                name: "tosBanCommunity"
            }))(jn),
            xn = Object(V.a)(null, D)(Rn),
            Pn = n(1882),
            An = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(Fn.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: Tn.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(W.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(xn, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (W.n.history.push(Object(ze.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === On.b.MutationError || e === On.b.Success) && t.props.history.push("/")
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : M.createElement(ce.U, {
                        position: ce._2.Relative
                    }, M.createElement(Dn.a, null, M.createElement(ce.v, {
                        ariaLabel: Object(W.d)("Settings", "CommunitiesSettingsCog"),
                        icon: ce._9.Gear
                    }), M.createElement(ce.p, {
                        direction: ce.q.BottomRight,
                        size: ce.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), M.createElement(ce.S, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, M.createElement(ce.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(W.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : M.createElement(ce.S, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, M.createElement(ce.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(W.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.banning ? null : M.createElement(ce.S, {
                        linkTo: Object(wn.a)("/communities/" + this.props.communityName + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, M.createElement(ce.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(W.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? M.createElement(ce.S, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, M.createElement(ce.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(W.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = A.__decorate([Object(Q.a)(Pn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.communityName
                    }
                }), Object(ne.c)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            Mn = An,
            Vn = Object(V.a)(F, O)(Object(dn.f)(Mn)),
            Bn = n(1292),
            Gn = n(1883);
        n(1884);
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(Rt || (Rt = {}));
        var Hn, Wn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return M.createElement(ce.U, {
                        className: "directory-tabs"
                    }, M.createElement(ce.U, {
                        display: ce.H.Flex,
                        justifyContent: ce.T.Between,
                        flexWrap: ce.K.NoWrap,
                        fullHeight: !0
                    }, M.createElement(ce.U, {
                        display: ce.H.Flex,
                        alignItems: ce.c.Stretch,
                        flexShrink: 0,
                        flexWrap: ce.K.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), M.createElement(ce.U, {
                        display: ce.H.Flex,
                        alignItems: ce.c.Center,
                        flexShrink: 0,
                        flexWrap: ce.K.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === ae.a.Games ? Object(ze.d)(this.props.directoryName) : Object(ze.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var a = n.label.replace(/ /g, "-").toLowerCase(),
                            r = fe("directory-tabs__item", (o = {}, o["directory-tabs__item--first"] = 0 === i, o["directory-tabs__item--selected"] = n.isSelected, o));
                        return M.createElement(ce.P, {
                            key: "directory-tabs__item--" + n.label,
                            display: ce.H.Flex,
                            alignItems: ce.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + a + "-tab"
                        }, M.createElement(dn.a, {
                            className: r,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return M.createElement(ce.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: ce.H.Flex
                    }, M.createElement(ce._21, {
                        type: ce._26.Span,
                        fontSize: ce.L.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (this.props.data.loading && !this.props.data.directory) return null;
                    if (this.props.data.error || !this.props.data.directory) return null;
                    if (this.props.data.directory && !this.props.data.directory.product) return null;
                    var e, t = fe("directory-tabs__item", (a = {}, a["directory-tabs__item--selected"] = this.props.activeTab === Rt.DirectoryDetailsPage, a)),
                        n = Object(W.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(ze.d)(this.props.directoryName) + "/details";
                    return e = W.b.get("commerce_gdp_launch", En.a.Off) !== En.a.On ? M.createElement("a", {
                        className: t,
                        href: Object(wn.a)(i),
                        target: Object(wn.b)() ? "_blank" : ""
                    }, this.renderTabData(n)) : M.createElement(dn.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)), M.createElement(ce.P, {
                        display: ce.H.Flex,
                        alignItems: ce.c.Center,
                        flexShrink: 0
                    }, e);
                    var a
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== ae.a.Communities ? null : M.createElement(Vn, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case ae.a.Communities:
                            return M.createElement(ce.U, {
                                margin: {
                                    left: 1
                                }
                            }, M.createElement(Nn, {
                                directoryName: this.props.directoryName
                            }));
                        case ae.a.Games:
                            return M.createElement(ce.U, {
                                margin: {
                                    left: 1
                                }
                            }, M.createElement(Bn.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            }));
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(W.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === Rt.DirectoryPage,
                        whitelistDirectories: [ae.a.Communities, ae.a.Games]
                    }, {
                        label: Object(W.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === Rt.DirectoryVideosPage,
                        whitelistDirectories: [ae.a.Games]
                    }, {
                        label: Object(W.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === Rt.DirectoryClipsPage,
                        whitelistDirectories: [ae.a.Games]
                    }, {
                        label: Object(W.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === Rt.DirectoryDetailsPage,
                        whitelistDirectories: [ae.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = A.__decorate([Object(Q.a)(Gn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.directoryName),
                                type: Kt(e.directoryType)
                            }
                        }
                    }
                }), Object(ne.c)("DirectoryGameTabs")], t)
            }(M.Component),
            qn = Wn,
            zn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    return M.createElement(ce.U, {
                        position: ce._2.Relative
                    }, M.createElement(vn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), M.createElement(cn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), M.createElement(qn, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab
                    }))
                }, t = A.__decorate([Object(ne.c)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            $n = zn,
            Qn = n(451),
            Yn = n(65),
            Kn = n(1357),
            Jn = n(69),
            Xn = n(1885),
            Zn = n(1886),
            ei = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        buttonState: ce.y.Default,
                        description: "",
                        rules: "",
                        summary: ""
                    }, t.onDescriptionChange = function(e) {
                        t.setState({
                            buttonState: ce.y.Default,
                            description: e.target.value
                        })
                    }, t.onRulesChange = function(e) {
                        t.setState({
                            buttonState: ce.y.Default,
                            rules: e.target.value
                        })
                    }, t.onSummaryChange = function(e) {
                        t.setState({
                            buttonState: ce.y.Default,
                            summary: e.target.value
                        })
                    }, t.onSaveClick = function() {
                        if (t.props.editCommunity && t.props.data) {
                            var e = t.state.description,
                                n = t.state.rules,
                                i = t.state.summary,
                                a = A.__assign({}, Object(K.a)({
                                    communityID: t.props.data.community.id,
                                    description: e,
                                    rules: n,
                                    summary: i
                                }), {
                                    optimisticResponse: {
                                        editCommunity: {
                                            __typename: "EditCommunityPayload",
                                            community: {
                                                description: e,
                                                rules: n,
                                                summary: i,
                                                __typename: "Community"
                                            }
                                        }
                                    }
                                });
                            t.setState({
                                buttonState: ce.y.Loading
                            }), t.props.editCommunity(a).then(function(e) {
                                var n = function(n) {
                                    return ["description", "summary", "rules"].forEach(function(i) {
                                        var a = n.community[i],
                                            r = e.data.editCommunity.community[i];
                                        a !== r && W.n.tracking.track(Z.SpadeEventType.CommunityEdit, {
                                            community_id: t.props.data.community.id,
                                            name: t.props.data.community.name,
                                            is_official: !1,
                                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                                            edit_type: i,
                                            old_value: a,
                                            new_value: r
                                        })
                                    }), n.community.description = e.data.editCommunity.community.description, n.community.rules = e.data.editCommunity.community.rules, n.community.summary = e.data.editCommunity.community.summary, t.setState({
                                        buttonState: ce.y.Success
                                    }), n
                                };
                                Object(K.d)(Xn, {
                                    name: decodeURIComponent(t.props.communityName)
                                }, n)
                            })
                        }
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    e.data.loading || e.data.error || !e.data.community || this.setState({
                        description: e.data.community.description,
                        rules: e.data.community.rules,
                        summary: e.data.community.summary
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.props.isHeaderEditEnabled && this.props.onDisableDirectoryHeaderEdit()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? M.createElement(ce._33, {
                        childWidth: ce._34.Large
                    }, this.renderPlaceholder(), this.renderPlaceholder()) : this.props.data.error ? null : M.createElement(ce._33, {
                        childWidth: ce._34.Large
                    }, M.createElement(ce.U, null, this.renderSummary(), this.renderDetailsPanel({
                        title: Object(Jn.d)("Description", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.description,
                        onChangeHandler: this.onDescriptionChange
                    })), M.createElement(ce.U, null, this.renderDetailsPanel({
                        title: Object(Jn.d)("Rules", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.rules,
                        onChangeHandler: this.onRulesChange
                    }), this.props.isHeaderEditEnabled ? this.renderSaveButton() : null))
                }, t.prototype.renderDetailsPanel = function(e) {
                    var t = M.createElement(ce._36, null, M.createElement(Yn, A.__assign({
                        source: e.data
                    }, Kn.a)));
                    return this.props.isHeaderEditEnabled && (t = M.createElement(ce._23, {
                        defaultValue: e.data,
                        onChange: e.onChangeHandler,
                        rows: e.rows || 15,
                        maxLength: e.maxLength
                    })), M.createElement(ce._17, {
                        background: ce.m.Base,
                        border: !0,
                        margin: {
                            bottom: 2
                        }
                    }, M.createElement(ce._17, {
                        borderBottom: !0
                    }, M.createElement(ce.U, {
                        padding: 1
                    }, M.createElement(ce._21, {
                        transform: ce._25.Uppercase,
                        type: ce._26.H5
                    }, e.title))), M.createElement(ce.U, {
                        padding: 1
                    }, t))
                }, t.prototype.renderSummary = function() {
                    return this.props.isHeaderEditEnabled ? this.renderDetailsPanel({
                        title: Object(Jn.d)("Summary", "DirectoryCommunityDetailsContent"),
                        data: this.props.data.community.summary,
                        onChangeHandler: this.onSummaryChange,
                        rows: 5,
                        maxLength: 160
                    }) : null
                }, t.prototype.renderSaveButton = function() {
                    return M.createElement(ce.U, {
                        margin: {
                            top: 1
                        },
                        textAlign: ce._22.Right
                    }, M.createElement(ce.u, {
                        state: this.state.buttonState,
                        onClick: this.onSaveClick,
                        disabled: !this.state.description || !this.state.rules || !this.state.summary,
                        "data-test-selector": "save-button"
                    }, Object(Jn.d)("Save", "DirectoryCommunityDetailsContent")))
                }, t.prototype.renderPlaceholder = function() {
                    return M.createElement(ce.U, null, M.createElement(ce._17, {
                        background: ce.m.Base,
                        border: !0
                    }, M.createElement(ce._17, {
                        borderBottom: !0
                    }, M.createElement(ce.U, {
                        padding: 1
                    }, M.createElement(ce._1, {
                        lineCount: 6
                    })))))
                }, t = A.__decorate([Object(Q.a)(Xn, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(Q.a)(Zn, {
                    name: "editCommunity"
                }), Object(ne.c)("DirectoryCommunityDetailsComponent", {
                    autoReportInteractive: !0
                })], t)
            }(M.Component),
            ti = ei,
            ni = Object(V.a)(T, U)(ti),
            ii = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        directoryType: Object(re.c)(t.match.path)
                    }, n
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), W.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return M.createElement(ce.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(ni, {
                        communityName: decodeURIComponent(this.props.match.params.encodedCommunityName)
                    }))
                }, t = A.__decorate([Object(ne.c)("DirectoryCommunityDetailsPage", {
                    destination: J.a.DirectoryCommunityDetails
                })], t)
            }(M.Component),
            ai = ii,
            ri = n(1010),
            oi = n(1296),
            li = n(911),
            si = n(1887),
            ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.loadMoreTopClips = function() {
                        return A.__awaiter(t, void 0, void 0, function() {
                            return A.__generator(this, function(e) {
                                return this.canLoadMore() ? [2, this.props.loadMore()] : [2]
                            })
                        })
                    }, t.canLoadMore = function() {
                        var e = t.props.data;
                        return !e.loading && !e.error && "" !== t.props.gameName && e.game && e.game.clips.pageInfo.hasNextPage
                    }, t
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.game) return M.createElement(ce.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return M.createElement(z.a, {
                        message: Object(Jn.d)("Error loading data.", "DirectoryGameClipsContent")
                    });
                    if (this.props.data.game) {
                        var e = ri.a[this.props.timeFilterValue];
                        return M.createElement(ce.U, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, M.createElement(oi.a, {
                            clips: this.props.data.game.clips.edges.map(function(e) {
                                return e.node
                            }),
                            pageType: li.b.Game,
                            timeFilterValue: this.props.timeFilterValue,
                            updateTimeFilter: this.props.updateTimeFilter,
                            loadMoreClips: this.loadMoreTopClips,
                            isLoading: !1
                        }), M.createElement(le.a, {
                            enabled: this.canLoadMore(),
                            key: e,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return M.createElement(z.a, {
                        message: Object(Jn.d)("Game does not exist", "DirectoryGameClipsContent")
                    })
                }, t = A.__decorate([Object(ne.c)("DirectoryGameClipsContent", {
                    autoReportInteractive: !0
                }), Object(Q.a)(si, {
                    options: function(e) {
                        return {
                            variables: {
                                gameName: decodeURIComponent(e.gameName),
                                limit: 20,
                                criteria: {
                                    languages: e.languagePreferences,
                                    filter: ri.a[e.timeFilterValue]
                                }
                            }
                        }
                    },
                    props: function(e) {
                        return A.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: si,
                                    variables: A.__assign({}, e.data.variables, {
                                        cursor: e.data.game.clips.edges[e.data.game.clips.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            game: A.__assign({}, i.game, {
                                                clips: A.__assign({}, i.game.clips, {
                                                    edges: Object(K.b)(e.game.clips.edges, i.game.clips.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                })], t)
            }(M.Component),
            di = ci,
            ui = Object(V.a)(I)(di),
            mi = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateTimeFilter = function(e) {
                        n.setState({
                            timeFilterValue: e
                        })
                    }, n.state = {
                        directoryType: Object(re.c)(t.match.path),
                        timeFilterValue: ri.b.Day
                    }, n
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), W.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    return M.createElement(ui, {
                        gameName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        updateTimeFilter: this.updateTimeFilter,
                        timeFilterValue: this.state.timeFilterValue
                    })
                }, t = A.__decorate([Object(ne.c)("DirectoryGameClipsPage", {
                    destination: J.a.DirectoryGameClips
                }), Object(Y.a)({
                    location: Z.PageviewLocation.ClipsGame
                })], t)
            }(M.Component),
            pi = mi,
            gi = n(76),
            hi = n(1312),
            vi = n(1073),
            fi = n(1049),
            yi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(vi.a)(t.props.content.info, e, t.props.game, Z.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.content,
                        t = e.description,
                        n = e.info,
                        i = e.tags,
                        a = n.description,
                        r = n.imageURL,
                        o = n.title,
                        l = i.join(", "),
                        s = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        };
                    return M.createElement(ce.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce.N, {
                        gutterSize: ce.O.Default
                    }, M.createElement(ce.G, {
                        cols: 4
                    }, M.createElement(ce.j, {
                        ratio: ce.k.Aspect1x1
                    }, M.createElement("img", {
                        src: r
                    }))), M.createElement(ce.G, {
                        cols: 8
                    }, M.createElement(ce._21, {
                        type: ce._26.P,
                        fontSize: ce.L.Size4,
                        title: o
                    }, o), M.createElement(ce._21, {
                        type: ce._26.P,
                        color: ce.F.Alt2,
                        title: l
                    }, l), M.createElement(ce.U, {
                        display: ce.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: ce.K.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, M.createElement(fi.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: s
                    })), M.createElement(ce._36, null, M.createElement(Yn, {
                        source: a || t
                    }))))))
                }, t
            }(M.Component),
            ki = Object(ne.c)("FeaturedContent")(yi),
            bi = ki,
            Si = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? ce.m.Alt : ce.m.Base;
                    return M.createElement(ce._17, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(M.Component),
            _i = Object(ne.c)("GameDetailsSection")(Si),
            Ci = _i,
            Ni = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return M.createElement(ce.U, {
                        margin: {
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H3
                    }, this.props.title))
                }, t
            }(M.Component),
            Ei = Object(ne.c)("GameDetailsTitle")(Ni),
            wi = Ei,
            Di = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return M.createElement(bi, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return M.createElement(Ci, {
                        alt: !0
                    }, M.createElement(wi, {
                        title: Object(W.d)("Game Add-Ons", "FeaturedContentRow")
                    }), M.createElement(ce.N, {
                        gutterSize: ce.O.Large
                    }, n))
                }, t
            }(M.Component),
            Fi = Object(ne.c)("FeaturedContentRow")(Di),
            Oi = Fi,
            Ti = n(1888),
            Ui = (n(1889), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return M.createElement(ce._17, {
                            borderRight: !0,
                            padding: {
                                left: .5
                            },
                            margin: {
                                right: 1
                            },
                            className: "game-details-box__separator"
                        })
                    }, t.onBuyNowClick = function() {
                        var e = t.props && t.props.referrer,
                            n = t.props && t.props.game && t.props.game.product && t.props.game.product.info;
                        n && Object(vi.a)(n, e, t.props.game, Z.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimOffer = function(e) {
                        t.props.claimOffer && t.props.claimOffer(Object(K.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return M.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return M.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                            "data-test-selector": "fuel-shared-revenue-link",
                            target: "_blank"
                        }, e)
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.game,
                        t = e ? e.product : void 0;
                    if (!e || !t) return M.createElement(Ci, {
                        alt: !0
                    }, M.createElement(ce._17, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ce.J.Row,
                        display: ce.H.Flex,
                        justifyContent: ce.T.Between,
                        alignItems: ce.c.Center
                    }, M.createElement(ce.U, {
                        display: ce.H.Flex,
                        flexDirection: ce.J.Row,
                        alignItems: ce.c.Center
                    }, M.createElement(ce.U, null, M.createElement(ce._1, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), M.createElement(ce.U, null, M.createElement(ce._1, {
                        width: 22,
                        height: 30
                    })), M.createElement(ce.U, null, M.createElement(ce._1, {
                        width: 50,
                        height: 15
                    }))), M.createElement(ce.U, null, M.createElement(ce._1, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        a = {
                            info: t.info,
                            gameID: e.id,
                            crates: t.info.crateASINs,
                            size: ce.x.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        r = t.supportedPlatforms.map(function(e) {
                            return M.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        o = null;
                    if (this.props.referrer && this.props.referrer.isCommerceRevShareEnabled) {
                        var l = Object(W.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: M.createElement(ce._21, {
                                bold: !0,
                                type: ce._26.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        o = M.createElement(ce._21, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, l)
                    }
                    return M.createElement(Ci, {
                        alt: !0
                    }, M.createElement(ce._17, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: ce.J.Row,
                        display: ce.H.Flex,
                        justifyContent: ce.T.Between,
                        alignItems: ce.c.Center
                    }, M.createElement(ce.U, {
                        display: ce.H.Flex,
                        flexDirection: ce.J.Row,
                        alignItems: ce.c.Center
                    }, M.createElement(fi.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimOffer: this.onClaimOffer,
                        options: a,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), M.createElement("img", {
                        alt: Object(W.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), r, M.createElement(Yn, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), o))
                }, t
            }(M.Component)),
            Ii = Object(ne.c)("GameDetailBox")(Ui),
            Li = Object(Q.a)(Ti, {
                name: "claimOffer"
            })(Ii),
            ji = Li,
            Ri = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.game || !this.props.game.product || !this.props.game.product.info) return null;
                    var e = this.props.game.product,
                        t = e.info,
                        n = e.featureDetails,
                        i = e.supportedLanguages,
                        a = e.minimumSystemRequirement,
                        r = e.recommendedSystemRequirement,
                        o = n.map(function(e, t) {
                            return M.createElement("li", {
                                key: t
                            }, M.createElement(Yn, {
                                source: e
                            }))
                        }),
                        l = i.map(function(e, t) {
                            return [M.createElement(ce.G, {
                                key: t + "lang",
                                cols: 3
                            }, M.createElement(ce.U, null, e.language)), M.createElement(ce.G, {
                                key: t + "int",
                                cols: 3
                            }, M.createElement(ce._17, {
                                textAlign: ce._22.Center
                            }, e.hasInterface && M.createElement(ce._8, {
                                asset: ce._9.Check,
                                type: ce._10.Success
                            }))), M.createElement(ce.G, {
                                key: t + "audio",
                                cols: 3
                            }, M.createElement(ce._17, {
                                textAlign: ce._22.Center
                            }, e.hasAudio && M.createElement(ce._8, {
                                asset: ce._9.Check,
                                type: ce._10.Success
                            }))), M.createElement(ce.G, {
                                key: t + "subs",
                                cols: 3
                            }, M.createElement(ce._17, {
                                textAlign: ce._22.Center
                            }, e.hasSubtitles && M.createElement(ce._8, {
                                asset: ce._9.Check,
                                type: ce._10.Success
                            }))), M.createElement(ce.G, {
                                key: t + "hr",
                                cols: 12
                            }, M.createElement(ce._17, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: ce.b.Stretch
                            }))]
                        }),
                        s = this.renderSystemRequirements(a),
                        c = this.renderSystemRequirements(r);
                    return M.createElement(Ci, null, M.createElement(ce.N, {
                        gutterSize: ce.O.Large
                    }, M.createElement(ce.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(wi, {
                        title: Object(W.d)("Description", "DirectoryGameDetailsPage")
                    }), M.createElement(ce._36, null, M.createElement(Yn, {
                        source: t.description
                    }))), M.createElement(ce.U, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(wi, {
                        title: Object(W.d)("Features", "DirectoryGameDetailsPage")
                    }), M.createElement(ce._36, null, M.createElement("ul", null, o))), M.createElement(ce._17, {
                        margin: {
                            top: 4
                        },
                        fontSize: ce.L.Size6
                    }, M.createElement(wi, {
                        title: Object(W.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(W.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(W.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(W.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(W.d)("More Info: ", "DirectoryGameDetailsPage"), Object(W.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), this.renderRowLink(Object(W.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(W.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(W.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(W.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), M.createElement(ce.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, M.createElement(ce.U, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(wi, {
                        title: Object(W.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), M.createElement(ce.U, {
                        padding: {
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4,
                        bold: !0
                    }, Object(W.d)("Minimum", "DirectoryGameDetailsPage"))), s, M.createElement(ce.U, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, M.createElement(ce._21, {
                        type: ce._26.H4,
                        bold: !0
                    }, Object(W.d)("Recommended", "DirectoryGameDetailsPage"))), c), M.createElement(ce.U, {
                        margin: {
                            top: 4
                        }
                    }, M.createElement(wi, {
                        title: Object(W.d)("Language Support", "DirectoryGameDetailsPage")
                    }), M.createElement(ce.N, null, M.createElement(ce.G, {
                        cols: 3
                    }, M.createElement(ce._17, {
                        color: ce.F.Alt2
                    }, Object(W.d)("Language", "DirectoryGameDetailsPage"))), M.createElement(ce.G, {
                        cols: 3
                    }, M.createElement(ce._17, {
                        color: ce.F.Alt2,
                        textAlign: ce._22.Center
                    }, Object(W.d)("Audio", "DirectoryGameDetailsPage"))), M.createElement(ce.G, {
                        cols: 3
                    }, M.createElement(ce._17, {
                        color: ce.F.Alt2,
                        textAlign: ce._22.Center
                    }, Object(W.d)("Interface", "DirectoryGameDetailsPage"))), M.createElement(ce.G, {
                        cols: 3
                    }, M.createElement(ce._17, {
                        color: ce.F.Alt2,
                        textAlign: ce._22.Center
                    }, Object(W.d)("Subtitles", "DirectoryGameDetailsPage"))), M.createElement(ce.G, {
                        cols: 12
                    }, M.createElement(ce._17, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), l)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return M.createElement(ce.U, null, this.renderRow(Object(W.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(W.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(W.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(W.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(W.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(W.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(W.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? M.createElement(ce.U, {
                        display: ce.H.Flex,
                        flexDirection: ce.J.Row,
                        flexWrap: ce.K.NoWrap
                    }, M.createElement(ce._17, {
                        color: ce.F.Alt2,
                        padding: {
                            right: 1
                        },
                        display: ce.H.Flex,
                        flexShrink: 0
                    }, e), M.createElement(ce.U, {
                        display: ce.H.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, M.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(M.Component),
            xi = Object(ne.c)("GameInfoSection")(Ri),
            Pi = xi,
            Ai = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    return M.createElement(ce._17, {
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, M.createElement("img", {
                        src: this.props.screenshotURL
                    }), M.createElement(In.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(M.Component),
            Mi = Object(B.compose)(Object(V.a)(null, L))(Ai),
            Vi = n(1372),
            Bi = n(1373),
            Gi = (n(1890), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.screenshotURLs) return [0, 1, 2, 3].map(function(e) {
                            return M.createElement(ce.U, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, M.createElement(ce._1, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return M.createElement(ce.U, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, M.createElement(Vi.a, {
                                    video: e
                                }))
                            }),
                            n = (t.props.screenshotURLs || []).map(function(e) {
                                return M.createElement(ce.U, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, M.createElement(ce.S, {
                                    onClick: t.handleOpenModal,
                                    "data-full": e,
                                    ariaLabel: Object(W.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, M.createElement(ce.j, {
                                    ratio: ce.k.Aspect16x9
                                }, M.createElement("img", {
                                    src: e
                                }))))
                            });
                        return e.concat(n)
                    }, t.handleOpenModal = function(e) {
                        var n = e.currentTarget.dataset.full || "";
                        t.props.showImageViewerModal({
                            onClose: t.handleCloseModal,
                            screenshotURL: n
                        })
                    }, t.handleCloseModal = function() {}, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return M.createElement(Ci, null, M.createElement(wi, {
                        title: Object(W.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), M.createElement(Bi.a, {
                        items: this.renderItems()
                    }))
                }, t = A.__decorate([Object(ne.c)("GameMedia")], t)
            }(M.Component)),
            Hi = Gi,
            Wi = Object(V.a)(j, R)(Hi),
            qi = (n(1891), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(vi.a)(t.props.content.info, e, t.props.game, Z.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        a = n.crateASINs,
                        r = n.imageURL,
                        o = n.price,
                        l = n.title,
                        s = i.join(", "),
                        c = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        d = M.createElement(fi.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: c
                        });
                    if (a.length > 1) {
                        var u = Object(W.d)("{numCrates} Twitch Crates", {
                            numCrates: a.length
                        }, "InGameContentCrateReward");
                        e = M.createElement(ce._17, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: ce._2.Absolute,
                            textAlign: ce._22.Right
                        }, u)
                    }
                    return M.createElement(ce.U, {
                        margin: {
                            bottom: 3
                        }
                    }, M.createElement(ce._17, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: ce._2.Relative
                    }, M.createElement(ce.j, {
                        ratio: ce.k.Aspect1x1
                    }, M.createElement("img", {
                        src: r
                    })), M.createElement(ce._17, {
                        background: ce.m.Base,
                        padding: 1
                    }, M.createElement(ce.U, {
                        className: "in-game-content__info-header"
                    }, M.createElement(ce._21, {
                        type: ce._26.P,
                        fontSize: ce.L.Size5,
                        bold: !0,
                        title: l
                    }, l), M.createElement(ce._21, {
                        type: ce._26.P,
                        color: ce.F.Alt2,
                        title: s
                    }, s)), M.createElement(ce.U, {
                        className: "in-game-content__price",
                        position: ce._2.Relative
                    }, M.createElement("p", {
                        title: o
                    }, o), e), M.createElement(ce.U, {
                        className: "in-game-content__buy-button",
                        position: ce._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, d))))
                }, t
            }(M.Component)),
            zi = Object(ne.c)("InGameContent")(qi),
            $i = zi,
            Qi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return M.createElement($i, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return M.createElement(Ci, {
                        alt: !0
                    }, M.createElement(wi, {
                        title: Object(W.d)("In-Game Content", "FeaturedContentRow")
                    }), M.createElement(ce._33, {
                        childWidth: ce._34.Medium,
                        gutterSize: ce._35.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(M.Component),
            Yi = Object(ne.c)("InGameContentRow")(Qi),
            Ki = Yi,
            Ji = n(1892),
            Xi = n(1893),
            Zi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), W.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(hi.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return M.createElement(z.a, {
                            message: Object(W.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return M.createElement(gi.PageNotFound, null)
                    }
                    var e = null,
                        t = null;
                    this.props.data.game && this.props.data.game.product && (e = this.props.data.game.product.media.screenshotURLs, t = this.props.data.game.product.media.videos);
                    var n = this.props.data,
                        i = n.currentUser,
                        a = n.game,
                        r = i && i.hasPrime,
                        o = this.props.referrerData && this.props.referrerData.user,
                        l = "";
                    this.props.data.requestInfo && (l = this.props.data.requestInfo.countryCode);
                    var s = [],
                        c = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? s.push(e) : c.push(e)
                    }), M.createElement(ce.U, null, M.createElement(ji, {
                        game: this.props.data.game,
                        referrer: o,
                        countryCode: l,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), M.createElement(Wi, {
                        screenshotURLs: e,
                        videos: t
                    }), M.createElement(Oi, {
                        contentList: s,
                        countryCode: l,
                        game: a,
                        hasPrime: r,
                        refetchData: this.refetchData,
                        referrer: o
                    }), M.createElement(Ki, {
                        contentList: c,
                        countryCode: l,
                        game: a,
                        hasPrime: r,
                        refetchData: this.refetchData,
                        referrer: o
                    }), M.createElement(Pi, {
                        game: this.props.data.game
                    }))
                }, t
            }(M.Component),
            ea = Object(ne.c)("DirectoryGameDetails")(Zi),
            ta = Object(Q.a)(Xi, {
                options: function(e) {
                    return {
                        variables: {
                            name: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                }
            })(ea),
            na = Object(Q.a)(Ji, {
                name: "referrerData",
                skip: function(e) {
                    var t = dt.parse(e.location.search),
                        n = t.br_name,
                        i = t.br_id;
                    return !(n || i)
                },
                options: function(e) {
                    var t = dt.parse(e.location.search),
                        n = t.br_name,
                        i = t.br_id;
                    return {
                        variables: {
                            login: n || null,
                            id: i || null
                        }
                    }
                }
            })(ta),
            ia = Object(Y.a)({
                location: Z.PageviewLocation.GameDetail
            })(na),
            aa = ia,
            ra = n(1004),
            oa = n(1086),
            la = n(1087),
            sa = n(850),
            ca = n(1897),
            da = sa.b,
            ua = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.onVideoSortChange = function(e) {
                        Object(ra.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, void 0, e)
                    }, n.onVideoFilterChange = function(e) {
                        Object(ra.d)("/directory/game/" + n.props.match.params.encodedCommunityName + "/videos", n.props, e)
                    }, n.state = {
                        directoryType: Object(re.c)(t.match.path)
                    }, n
                }
                return A.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), W.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.render = function() {
                    var e = null,
                        t = decodeURIComponent(this.props.match.params.encodedCommunityName),
                        n = Object(ra.c)(this.props) || da,
                        i = Object(ra.b)(this.props);
                    if (this.props.data.error) {
                        var a = Object(W.d)("{gameName} videos are temporarily unavailable.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return M.createElement(z.a, {
                            message: a
                        })
                    }
                    if (!this.props.data.loading && null === this.props.data.game) {
                        var a = Object(W.d)("{gameName} does not exist.", {
                            gameName: t
                        }, "DirectoryVideosPage");
                        return M.createElement(z.a, {
                            message: a
                        })
                    }
                    return this.props.data.game && this.props.data.game.videos && (e = this.props.data.game.videos.edges.map(function(e) {
                        return e.node
                    })), M.createElement(ce.U, {
                        padding: {
                            top: 2,
                            bottom: 3,
                            x: 3
                        }
                    }, M.createElement(la.a, {
                        onVideoSortChange: this.onVideoSortChange,
                        onVideoFilterChange: this.onVideoFilterChange,
                        selectedSort: n,
                        broadcastType: i
                    }), M.createElement(la.b, {
                        hideGameArt: !0,
                        trackingContent: Object(oa.a)(n),
                        trackingMedium: Z.PageviewMedium.GameVideos,
                        videos: e
                    }), M.createElement(le.a, {
                        enabled: this.enablePagination(),
                        key: "directory-game-videos-page-" + i + "-" + n,
                        loadMore: this.props.loadMore
                    }))
                }, t.prototype.enablePagination = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && !!this.props.data.game.videos.pageInfo.hasNextPage
                }, t = A.__decorate([Object(Q.a)(ca, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                videoLimit: 30,
                                languages: e.languagePreferences,
                                broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                videoSort: Object(ra.c)(e) || sa.b
                            }
                        }
                    },
                    props: function(e) {
                        return A.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: ca,
                                    variables: A.__assign({}, e.data.variables, {
                                        followedCursor: e.data.game && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            i = n;
                                        return {
                                            game: A.__assign({}, i.game, {
                                                videos: A.__assign({}, i.game.videos, {
                                                    edges: Object(K.b)(e.game.videos.edges, i.game.videos.edges)
                                                })
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(ne.c)("DirectoryGameVideosPage", {
                    destination: J.a.DirectoryGameVideos
                }), Object(Y.a)({
                    location: Z.PageviewLocation.Directory,
                    properties: function(e) {
                        return {
                            content_type: Z.PageviewDirectoryContentType.Videos,
                            game: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                })], t)
            }(M.Component),
            ma = ua,
            pa = Object(V.a)(x)(ma);
        ! function(e) {
            e.CLIPS = "clips-scroller", e.DEFAULT = "directory-root-scroller", e.GAME = "game-scroller"
        }(Hn || (Hn = {}));
        var ga = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return A.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.match.path.startsWith("/communities") ? ae.a.Communities : ae.a.Games;
                    return M.createElement(ce.U, {
                        "data-a-target": this.getScrollerName()
                    }, M.createElement(Qn.b, {
                        suppressScrollX: !0
                    }), M.createElement($n, {
                        directoryType: e,
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        activeTab: this.getActiveTab()
                    }), M.createElement(Ut.d, null, M.createElement(Ut.b, {
                        path: "/communities/:encodedCommunityName/details",
                        component: ai
                    }), M.createElement(Ut.b, {
                        path: "/communities/:encodedCommunityName/:encodedLanguage",
                        component: Tt
                    }), M.createElement(Ut.b, {
                        path: "/communities/:encodedCommunityName",
                        component: wt
                    }), M.createElement(Ut.b, {
                        path: "/directory/game/:encodedCommunityName/clips",
                        component: pi
                    }), W.a.buildType !== It.a.Production && M.createElement(Ut.b, {
                        path: "/directory/game/:encodedCommunityName/details",
                        component: aa
                    }), M.createElement(Ut.b, {
                        path: "/directory/game/:encodedCommunityName/videos/:filter",
                        component: pa
                    }), M.createElement(Ut.b, {
                        path: "/directory/game/:encodedCommunityName/:encodedLanguage",
                        component: Tt
                    }), M.createElement(Ut.b, {
                        path: "/directory/game/:encodedCommunityName",
                        component: wt
                    })))
                }, t.prototype.getActiveTab = function() {
                    var e = void 0;
                    return this.isClipsPage() ? e = Rt.DirectoryClipsPage : this.isDetailsPage() ? e = Rt.DirectoryDetailsPage : this.isVideosPage() ? e = Rt.DirectoryVideosPage : this.isMainPage() && (e = Rt.DirectoryPage), e
                }, t.prototype.getScrollerName = function() {
                    var e = Hn.DEFAULT;
                    return this.isClipsPage() ? e = Hn.CLIPS : this.isMainPage() && (e = Hn.GAME), e
                }, t.prototype.isMainPage = function() {
                    return "/communities/:encodedCommunityName" === this.props.match.path || "/directory/game/:encodedCommunityName" === this.props.match.path
                }, t.prototype.isClipsPage = function() {
                    return "/directory/game/:encodedCommunityName/clips" === this.props.match.path
                }, t.prototype.isDetailsPage = function() {
                    return "/communities/:encodedCommunityName/details" === this.props.match.path || "/directory/game/:encodedCommunityName/details" === this.props.match.path
                }, t.prototype.isVideosPage = function() {
                    return "/directory/game/:encodedCommunityName/videos/:filter" === this.props.match.path
                }, t
            }(M.Component),
            ha = ga;
        n.d(t, "DirectoryGamePage", function() {
            return wt
        }), n.d(t, "DirectoryCommunityByLanguagePage", function() {
            return Tt
        }), n.d(t, "DirectoryRootPage", function() {
            return ha
        })
    },
    267: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(21),
            r = n(1),
            o = n(2),
            l = n(14),
            s = "legacy_routes_enabled",
            c = function(e) {
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
                                    var r = a.stringify(i),
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
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
                                    r = "";
                                i.length > 0 && (r = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var r = new RegExp(a, "i");
                            t.push(r)
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
            }(r.Component),
            d = c;
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    383: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Math.floor(e % 60),
                i = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? a(r, 2) + ":" + a(i, 2) + ":" + a(n, 2) : r ? r + ":" + a(i, 2) + ":" + a(n, 2) : i + ":" + a(n, 2)
        }

        function a(e, t) {
            return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = i
    },
    385: function(e, t, n) {
        "use strict";

        function i(e) {
            p.emit(u, e)
        }

        function a(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "a", function() {
            return d
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), t.i = i, t.h = a;
        var r = n(24),
            o = (n.n(r), n(2)),
            l = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            s = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            c = {
                directory: "/" + o.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + o.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + o.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + o.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            d = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            u = "ads.slot-render-end",
            m = "ads.slot-ready",
            p = new r.EventEmitter
    },
    455: function(e, t) {
        function n(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function i(e) {
            return !!e && "object" == typeof e
        }

        function a(e) {
            if (!i(e) || u.call(e) != r || n(e)) return !1;
            var t = m(e);
            if (null === t) return !0;
            var a = c.call(t, "constructor") && t.constructor;
            return "function" == typeof a && a instanceof a && s.call(a) == d
        }
        var r = "[object Object]",
            o = Function.prototype,
            l = Object.prototype,
            s = o.toString,
            c = l.hasOwnProperty,
            d = s.call(Object),
            u = l.toString,
            m = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }(Object.getPrototypeOf, Object);
        e.exports = a
    },
    76: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1),
            a = n(2),
            r = n(67),
            o = n(3),
            l = function() {
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
        n.d(t, "PageNotFound", function() {
            return l
        })
    },
    818: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Post = 0] = "Post", e[e.Action = 1] = "Action", e[e.PostWithMention = 2] = "PostWithMention", e[e.Ban = 3] = "Ban", e[e.Timeout = 4] = "Timeout", e[e.AutoModRejectedPrompt = 5] = "AutoModRejectedPrompt", e[e.AutoModMessageRejected = 6] = "AutoModMessageRejected", e[e.AutoModMessageAllowed = 7] = "AutoModMessageAllowed", e[e.AutoModMessageDenied = 8] = "AutoModMessageDenied", e[e.Connected = 9] = "Connected", e[e.Disconnected = 10] = "Disconnected", e[e.Reconnect = 11] = "Reconnect", e[e.Hosting = 12] = "Hosting", e[e.Unhost = 13] = "Unhost", e[e.Subscription = 14] = "Subscription", e[e.Resubscription = 15] = "Resubscription", e[e.SubGift = 16] = "SubGift", e[e.Clear = 17] = "Clear", e[e.SubscriberOnlyMode = 18] = "SubscriberOnlyMode", e[e.FollowerOnlyMode = 19] = "FollowerOnlyMode", e[e.SlowMode = 20] = "SlowMode", e[e.EmoteOnlyMode = 21] = "EmoteOnlyMode", e[e.RoomMods = 22] = "RoomMods", e[e.RoomState = 23] = "RoomState", e[e.Raid = 24] = "Raid", e[e.Unraid = 25] = "Unraid", e[e.Notice = 26] = "Notice", e[e.Info = 27] = "Info", e[e.BadgesUpdated = 28] = "BadgesUpdated", e[e.Purchase = 29] = "Purchase"
        }(i || (i = {}))
    },
    820: function(e, t, n) {
        "use strict";

        function i(e) {
            return e + "-" + Date.now() + "}"
        }
        t.a = i
    },
    821: function(e, t, n) {
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
    823: function(e, t, n) {
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
                                var r = i.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    c = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
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
                return Object(l.f)(n)
            }
        }
        var a = n(0),
            r = n(21),
            o = n(1),
            l = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    831: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            a = n(2),
            r = n(17),
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
    836: function(e, t, n) {
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
    841: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!a.exec(e)
        }
        t.a = i;
        var a = /\scurse\/\d/
    },
    844: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                type: a.a.Info,
                id: Object(r.a)("notice"),
                message: e
            }
        }
        t.a = i;
        var a = n(818),
            r = n(820)
    },
    850: function(e, t, n) {
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
    852: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(u.a)(m, {
                u: e
            })
        }

        function a(e, t) {
            return Object(u.a)(p, {
                url: e,
                text: t
            })
        }

        function r(e, t) {
            return Object(u.a)(g, {
                url: e,
                title: t
            })
        }

        function o(e) {
            return Object(u.a)(h, {
                url: e
            })
        }
        var l = n(0),
            s = n(1),
            c = n(2),
            d = n(860),
            u = n(68),
            m = "https://www.facebook.com/sharer/sharer.php",
            p = "https://www.twitter.com/share",
            g = "https://www.reddit.com/submit",
            h = "https://vk.com/share.php",
            v = n(3);
        n(901);
        n.d(t, "b", function() {
            return f
        }), n.d(t, "a", function() {
            return y
        });
        var f;
        ! function(e) {
            e[e.Twitter = 0] = "Twitter", e[e.Reddit = 1] = "Reddit", e[e.VKontakte = 2] = "VKontakte", e[e.Facebook = 3] = "Facebook", e[e.Copy = 4] = "Copy", e[e.CopyInput = 5] = "CopyInput"
        }(f || (f = {}));
        var y = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.renderLink = function() {
                    var e = "social-button__link " + n.addSocialClassModifier("social-button__link");
                    return n.isLink() ? s.createElement("a", l.__assign({
                        href: n.getLinkTarget(),
                        target: "_blank",
                        className: e,
                        onClick: n.onShareClickHandler
                    }, Object(v._39)(n.props)), n.renderIcon()) : s.createElement("button", l.__assign({
                        onClick: n.copyPageUrl,
                        onMouseLeave: n.clearIsCopiedStatus,
                        className: e
                    }, Object(v._39)(n.props)), n.renderIcon())
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
                    return s.createElement(v.U, {
                        className: "social-button__icon " + n.addSocialClassModifier("social-button__icon")
                    }, s.createElement(v._8, {
                        asset: e,
                        width: 30,
                        height: 30
                    }))
                }, n.isLink = function() {
                    return n.props.type !== f.Copy
                }, n.getTooltipFromType = function() {
                    switch (n.props.type) {
                        case f.Twitter:
                            return "Twitter";
                        case f.Reddit:
                            return "Reddit";
                        case f.Facebook:
                            return "Facebook";
                        case f.VKontakte:
                            return "VKontakte";
                        case f.Copy:
                            return n.state.isCopied ? Object(c.d)("Copied", "SocialButton") : Object(c.d)("Copy to clipboard", "SocialButton");
                        default:
                            return ""
                    }
                }, n.getAssetFromType = function() {
                    switch (n.props.type) {
                        case f.Twitter:
                            return v._9.Twitter;
                        case f.Facebook:
                            return v._9.Facebook;
                        case f.VKontakte:
                            return v._9.VKontakte;
                        case f.Reddit:
                            return v._9.Reddit;
                        case f.Copy:
                        default:
                            return v._9.Copy
                    }
                }, n.addSocialClassModifier = function(e) {
                    switch (n.props.type) {
                        case f.Twitter:
                            return e + "--twitter";
                        case f.Reddit:
                            return e + "--reddit";
                        case f.Facebook:
                            return e + "--facebook";
                        case f.VKontakte:
                            return e + "--vkontakte";
                        case f.Copy:
                            return e + "--copy";
                        default:
                            return ""
                    }
                }, n.getLinkTarget = function() {
                    var e = n.props,
                        t = e.text,
                        l = e.type,
                        s = n.getUrl(),
                        c = t || "";
                    switch (l) {
                        case f.Reddit:
                            return r(s, c);
                        case f.VKontakte:
                            return o(s);
                        case f.Facebook:
                            return i(s);
                        case f.Twitter:
                            return a(s, c);
                        default:
                            return ""
                    }
                }, n.state = {
                    isCopied: !1
                }, n
            }
            return l.__extends(t, e), t.prototype.render = function() {
                return s.createElement(v.U, {
                    className: "social-button"
                }, s.createElement(v._30, {
                    label: this.getTooltipFromType(),
                    direction: v._32.Top
                }, this.renderLink()))
            }, t
        }(s.Component)
    },
    856: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            return {
                type: e,
                id: Object(a.a)(t + "-mod"),
                userLogin: t,
                reason: n,
                duration: i
            }
        }
        t.a = i;
        var a = n(820)
    },
    860: function(e, t, n) {
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
    869: function(e, t, n) {
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
    872: function(e, t, n) {
        "use strict";

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function a() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return o.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(i(!0))
        }
        n.d(t, "a", function() {
            return l
        }), t.b = a;
        var r = n(2),
            o = [{
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
            l = new Set(o.concat(i()).map(function(e) {
                return e.code
            }))
    },
    878: function(e, t, n) {
        "use strict";
        var i, a = n(0),
            r = n(1),
            o = n(2);
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(i || (i = {}));
        var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, i.Off);
                    return e === i.On || e === i.StaffOnly && this.props.isStaff ? r.Children.only(this.props.children) : null
                }, t
            }(r.Component),
            s = l;
        n.d(t, "a", function() {
            return i
        }), n.d(t, !1, function() {
            return l
        }), n.d(t, "b", function() {
            return s
        })
    },
    880: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(i || (i = {}))
    },
    882: function(e, t, n) {
        "use strict";

        function i() {
            return Object(l.d)("Unable to ban user", "BlockUserMutation")
        }

        function a(e) {
            var t = this;
            return Object(s.a)(p, {
                props: function(n) {
                    return {
                        onBanUser: function(a, s) {
                            return void 0 === s && (s = null), o.__awaiter(t, void 0, void 0, function() {
                                var t, p, g, h, v, f;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t = s ? m.a.Timeout : m.a.Ban, p = e(n.ownProps), g = p.channelID, h = p.onPushMessage, !n.mutate) return [3, 5];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, n.mutate(Object(c.a)({
                                                channelID: g,
                                                bannedUserLogin: a,
                                                expiresIn: s && r(s)
                                            }))];
                                        case 2:
                                            return o.sent(), v = Object(u.a)(t, a, null, s), h && h(v), [2, v];
                                        case 3:
                                            throw f = o.sent(), l.i.error(f, "Unable to ban user"), h && h(Object(d.a)(i())), new Error(i());
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            throw h && h(Object(d.a)(i())), new Error(i());
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                }
            })
        }

        function r(e) {
            if (!e) return "0s";
            var t = e,
                n = "";
            if (t > y) {
                var i = Math.floor(t / y);
                t -= i * y, n += i + "mo"
            }
            if (t > f) {
                var a = Math.floor(t / f);
                t -= a * f, n += a + "w"
            }
            if (t > v) {
                var r = Math.floor(t / v);
                t -= r * v, n += r + "d"
            }
            if (t > h) {
                var o = Math.floor(t / h);
                t -= o * h, n += o + "h"
            }
            if (t > g) {
                var l = Math.floor(t / g);
                t -= l * g, n += l + "m"
            }
            return t > 0 && (n += t + "s"), n
        }
        t.a = a;
        var o = n(0),
            l = n(2),
            s = n(7),
            c = n(20),
            d = n(844),
            u = n(856),
            m = n(818),
            p = n(890),
            g = (n.n(p), 60),
            h = 60 * g,
            v = 24 * h,
            f = 7 * v,
            y = 4 * f
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
    884: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var a = n(6),
            r = n(0),
            o = n(1),
            l = n(2),
            s = n(115),
            c = n(385),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = l.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = i.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === c.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === c.b.directory.banner) {
                                var i = n.slotRef.querySelector(d);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === c.b.directory.rectangle) {
                                var i = n.slotRef.querySelector(u);
                                return void(i && 1 !== i.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            p = m,
            g = Object(a.a)(i)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    890: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_BanUserFromChatRoom"
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
                                            value: "createdAt"
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
                end: 148
            }
        };
        n.loc.source = {
            body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\n  banUserFromChatRoom(input: $input) {\n    ban {\n      createdAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    901: function(e, t) {},
    909: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = this;
            return function(i) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, a;
                    return o.__generator(this, function(o) {
                        return n = new Set(r()), t ? n.add(e) : n.delete(e), a = Array.from(n), l.k.set(d, a), i(Object(c.b)(a)), [2]
                    })
                })
            }
        }

        function a() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return l.k.set(d, []), t(Object(c.b)([])), [2]
                    })
                })
            }
        }

        function r() {
            return l.k.get(d, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = i, t.a = a, t.b = r;
        var o = n(0),
            l = n(2),
            s = n(872),
            c = n(910),
            d = "languageDirectoryFilters"
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
    911: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var i, a = n(2),
            r = n(852),
            o = n(12),
            l = (i = {}, i[r.b.Twitter] = "twitter", i[r.b.Reddit] = "reddit", i[r.b.VKontakte] = "vkontakte", i[r.b.Facebook] = "facebook", i[r.b.Copy] = "link", i[r.b.CopyInput] = "option_link", i),
            s = {
                MyClips: "MyClips",
                ClipsOfMyChannel: "ClipsOfMyChannel"
            },
            c = {
                Game: "TopClipsGame",
                Channel: "TopClipsChannel"
            },
            d = {
                MyClips: o.PageviewLocation.MyClipsManager,
                ClipsOfMyChannel: o.PageviewLocation.ChannelClipsManager,
                TopClipsGame: o.PageviewLocation.ClipsGame,
                TopClipsChannel: o.PageviewLocation.ChannelClips
            },
            u = function(e, t) {
                return function(n) {
                    a.n.tracking.track(o.SpadeEventType.VideoShare, {
                        vod_id: e.id,
                        vod_type: "clip",
                        share_platform: l[n],
                        location: d[t],
                        game: e.game ? e.game.name : null,
                        channel_id: Number(e.broadcaster.id),
                        channel: e.broadcaster.login,
                        live: null
                    })
                }
            }
    },
    914: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        assignmentDetermined: !1,
                        assignment: ""
                    }, t.logger = r.n.logger.withCategory("component-experiment"), t.didUnmount = !1, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, r.n.experiments.getAssignment(this.props.name, this.props.channel ? {
                                        channel: this.props.channel
                                    } : {})];
                                case 1:
                                    return e = t.sent(), this.didUnmount ? [2] : (e && this.props.assignments[e] ? this.logger.debug("Displaying component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }) : this.logger.debug("Displaying fallback component for experiment", {
                                        name: this.props.name,
                                        assignment: e
                                    }), this.setState({
                                        assignment: e,
                                        assignmentDetermined: !0
                                    }), [2])
                            }
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.didUnmount = !0
                }, t.prototype.render = function() {
                    if (!this.state.assignmentDetermined) return this.props.loader();
                    if (this.props.assignments[this.state.assignment]) {
                        var e = this.props.assignments[this.state.assignment]();
                        return "string" == typeof e ? (window.location.replace(e), null) : e
                    }
                    return this.props.assignments.fallback()
                }, t
            }(a.Component),
            l = o;
        n.d(t, "a", function() {
            return l
        })
    },
    915: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(10),
            o = n(2),
            l = n(916),
            s = n(3),
            c = (n(1008), function(e) {
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
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && o.b.get("premiere_video_manager_staff", !1) && this.setState({
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
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: a.createElement(r.a, {
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
                    }, a.createElement("div", null, a.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, a.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), a.createElement(s.B, null, a.createElement(r.a, {
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
                    return t && e ? a.createElement(r.a, {
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
                    }, a.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(a.Component)),
            d = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return d
        })
    },
    916: function(e, t, n) {
        "use strict";
        var i, a, r, o = n(0),
            l = n(4),
            s = n(1),
            c = n(2),
            d = n(148),
            u = n(3),
            m = (n(1007), i = {}, i[d.a.Live] = "stream-type-indicator--live", i[d.a.Premiere] = "stream-type-indicator--premiere", i[d.a.Rerun] = "stream-type-indicator--rerun", i[d.a.WatchParty] = "stream-type-indicator--rerun", i),
            p = (a = {}, a[d.a.Premiere] = u._9.VideoPremiere, a[d.a.Rerun] = u._9.VideoRerun, a[d.a.WatchParty] = u._9.VideoRerun, a),
            g = (r = {}, r[d.a.Premiere] = u._10.Live, r[d.a.Rerun] = u._10.Inherit, r[d.a.WatchParty] = u._10.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
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
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._17, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? s.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.V, {
                        size: u.W.Small
                    })) : s.createElement(u._8, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(c.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case d.a.Live:
                            return Object(c.d)("Live", "StreamTypeIndicator");
                        case d.a.Premiere:
                            return Object(c.d)("Premiere", "StreamTypeIndicator");
                        case d.a.Rerun:
                        case d.a.WatchParty:
                            return Object(c.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    926: function(e, t, n) {
        "use strict";
        var i, a = n(0),
            r = n(1),
            o = n(2),
            l = n(383),
            s = n(5),
            c = n(3),
            d = (n(1076), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            a = e.lengthSeconds,
                            s = e.thumbnailURL,
                            u = e.type,
                            m = e.viewCount,
                            p = a && a > 0 ? Object(l.a)(a) : "";
                        return r.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": d
                        }, r.createElement(c.j, {
                            ratio: c.k.Aspect16x9
                        }, r.createElement(c.U, null, r.createElement(c.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: c._2.Absolute
                        }, r.createElement("img", {
                            src: s
                        })), r.createElement(c.U, {
                            className: "embed-card__overlay",
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c.U, {
                            className: "embed-card__play",
                            display: c.H.Flex,
                            justifyContent: c.T.Center,
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(c._8, {
                            asset: c._9.Play,
                            width: 50,
                            height: 50
                        })), r.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && r.createElement(c._21, null, Object(o.c)(new Date(n), "medium")), r.createElement(c.U, null, u === i.Stream && r.createElement(c.U, {
                            display: c.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, r.createElement(c.V, null)), m && r.createElement("span", null, t.getFormattedViewCount(m, u)))), r.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, p && r.createElement(c.U, null, r.createElement(c._21, null, p)))), r.createElement(c._17, {
                            position: c._2.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: c.L.Size5
                        }, u === i.Stream && r.createElement(c.Z, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: c._0.Live
                        }), u === i.Video && r.createElement(c.Z, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: c._0.Overlay
                        }), u === i.Clip && r.createElement(c.Z, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: c._0.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : r.createElement(c.j, {
                        ratio: c.k.Aspect16x9
                    }, this.props.children)
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(o.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(o.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(r.Component),
            m = Object(s.c)("EmbedOverlay")(u),
            p = m;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return p
        })
    },
    927: function(e, t, n) {
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
    929: function(e, t, n) {
        "use strict";

        function i() {
            return {
                languagePreferences: Object(c.b)()
            }
        }

        function a(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case s.a:
                    return o.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        }

        function r(e) {
            return e.userPreferences.languagePreferences
        }
        t.a = r;
        var o = n(0),
            l = n(2),
            s = n(910),
            c = n(909);
        l.n.store.registerReducer("userPreferences", a)
    },
    931: function(e, t, n) {
        "use strict";
        var i = n(0),
            a = n(1),
            r = n(2),
            o = function(e, t) {
                return Object(r.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            l = Object(r.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", null, Object(r.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(a.Component),
            c = s;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return c
        })
    },
    993: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function a(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: l.c,
                clearLanguagePreferences: l.a
            }, e)
        }
        var r = n(6),
            o = n(9),
            l = n(909),
            s = n(929),
            c = n(0),
            d = n(1),
            u = n(2),
            m = n(28),
            p = n(47),
            g = n(872),
            h = n(5),
            v = n(3),
            f = (n(1011), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return d.createElement(v.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, d.createElement(v.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return d.createElement(v.U, {
                        className: "language-select-menu"
                    }, d.createElement(p.a, null, d.createElement(v.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: v.z.Hollow
                    }, d.createElement(v.U, {
                        display: v.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), d.createElement(v.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && d.createElement(v.Z, {
                        type: v._0.Brand,
                        label: e.toString()
                    })))), d.createElement(v.p, {
                        direction: v.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, d.createElement(m.b, {
                        className: "language-select-menu__balloon"
                    }, d.createElement(v.U, {
                        padding: .5
                    }, Object(g.b)().map(this.renderLanguageOption))), d.createElement(v._17, {
                        background: v.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, d.createElement(v.u, {
                        type: v.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = c.__decorate([Object(h.c)("LanguageSelectMenu")], t)
            }(d.Component)),
            y = f,
            k = Object(r.a)(i, a)(y);
        n.d(t, "a", function() {
            return k
        })
    }
});
//# sourceMappingURL=pages.directory-game-1fd0aac35197ebf20c11711d525b1d1d.js.map