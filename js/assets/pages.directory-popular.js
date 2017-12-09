webpackJsonp([33], {
    1001: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "e", function() {
            return i
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return p
        }), n.d(t, "f", function() {
            return g
        }), n.d(t, "i", function() {
            return h
        });
        var a, r = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            i = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            o = "TWILIGHT_WEB_ONBOARDING",
            s = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(a || (a = {}));
        var l, c = new Set([a.Skip.toString(), a.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(l || (l = {}));
        var d, u = new Set([l.First.toString(), l.Last.toString()]);
        ! function(e) {
            e.Yes = "yes"
        }(d || (d = {}));
        var m = function(e) {
                return !!e && u.has(e)
            },
            p = function(e, t) {
                return !!e && c.has(e) && m(t)
            },
            g = function(e, t, n) {
                return !!e && c.has(e) && m(t) && n === d.Yes
            },
            h = function(e) {
                return e.getTime() >= y().getTime()
            },
            y = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1007: function(e, t) {},
    1008: function(e, t) {},
    1009: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        });
        var a = n(880),
            r = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? a.a.Communities : a.a.Games
            },
            i = function(e) {
                switch (e) {
                    case "communities":
                        return a.a.Communities;
                    case "games":
                        return a.a.Games;
                    case "creative":
                        return a.a.Creative;
                    default:
                        return a.a.Games
                }
            },
            o = function(e) {
                switch (e) {
                    case "communities":
                        return [a.a.Communities, a.a.Creative];
                    case "games":
                        return [a.a.Games];
                    case "creative":
                        return [a.a.Creative];
                    default:
                        return [a.a.Games]
                }
            }
    },
    1011: function(e, t) {},
    1028: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(y.bindActionCreators)({
                onCloseModal: v.c
            }, e)
        }

        function r(e) {
            return Object(y.bindActionCreators)({
                onCloseModal: v.c
            }, e)
        }

        function i(e) {
            return Object(y.bindActionCreators)({
                onShowModal: v.d
            }, e)
        }
        var o = n(0),
            s = n(1),
            l = n(2),
            c = n(915),
            d = n(916),
            u = n(48),
            m = n(381),
            p = n(12),
            g = n(880),
            h = n(6),
            y = n(9),
            v = n(37),
            f = n(401),
            b = n(7),
            k = n(5),
            S = n(32),
            _ = n(108),
            E = n(20),
            C = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(l.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(l.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(l.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(l.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(l.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(l.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            N = n(3),
            T = n(1063),
            D = (n(1064), "error-message"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(N.U, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(N._21, {
                            color: N.F.Error,
                            type: N._26.H4,
                            "data-test-selector": D
                        }, C(t.state.error))) : null
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
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(E.a)({
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
                                        return t = n.sent(), null === t.data.banUserFromCommunity.error ? (l.n.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                    return s.createElement(N.P, {
                        position: N._2.Relative
                    }, s.createElement(N._17, {
                        background: N.m.Base,
                        className: "stream-ban-modal"
                    }, s.createElement(N.U, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(N.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(N._21, {
                        type: N._26.H4
                    }, Object(l.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), s.createElement(N._17, {
                        borderTop: !0
                    }, s.createElement(N.U, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(N._21, {
                        bold: !0
                    }, Object(l.d)("Reason (Required)", "StreamBanModal")), s.createElement(N.Q, {
                        type: N.R.Text,
                        placeholder: Object(l.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(N._17, {
                        borderTop: !0
                    }, s.createElement(N.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: N._22.Center
                    }, s.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(N.u, {
                        type: N.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(l.d)("Cancel", "StreamBanModal"))), s.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(N.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(l.d)("Ban", "StreamBanModal")))))), s.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            O = Object(S.compose)(Object(b.a)(T, {
                name: "banUserFromCommunity"
            }))(w),
            P = Object(h.a)(null, a)(O),
            I = (n(1065), n(1066)),
            U = "error-message",
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? s.createElement(N.U, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(N._21, {
                            color: N.F.Error,
                            type: N._26.H4,
                            "data-test-selector": U
                        }, C(t.state.error))) : null
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
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(E.a)({
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
                                        return t = n.sent(), null === t.data.timeoutUserFromCommunity.error ? (l.n.tracking.track(p.SpadeEventType.CommunityModeration, {
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
                    return s.createElement(N.P, {
                        position: N._2.Relative
                    }, s.createElement(N._17, {
                        background: N.m.Base,
                        className: "stream-timeout-modal"
                    }, s.createElement(N.U, {
                        padding: 2
                    }, this.renderErrorMessage(), s.createElement(N.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(N._21, {
                        type: N._26.H4
                    }, Object(l.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), s.createElement(N._17, {
                        borderTop: !0
                    }, s.createElement(N.U, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(N._21, {
                        bold: !0
                    }, Object(l.d)("Reason (Required)", "StreamTimeoutModal")), s.createElement(N.Q, {
                        type: N.R.Text,
                        placeholder: Object(l.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), s.createElement(N.U, {
                        margin: {
                            y: 2
                        }
                    }, s.createElement(N._21, {
                        bold: !0
                    }, Object(l.d)("Duration", "StreamTimeoutModal")), s.createElement(N._14, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, s.createElement("option", {
                        value: "2"
                    }, Object(l.d)("2 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "4"
                    }, Object(l.d)("4 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "8"
                    }, Object(l.d)("8 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "12"
                    }, Object(l.d)("12 hours", "StreamTimeoutModal")), s.createElement("option", {
                        value: "24"
                    }, Object(l.d)("24 hours", "StreamTimeoutModal")))), s.createElement(N._17, {
                        borderTop: !0
                    }, s.createElement(N.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: N._22.Center
                    }, s.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(N.u, {
                        type: N.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(l.d)("Cancel", "StreamTimeoutModal"))), s.createElement(N.U, {
                        display: N.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, s.createElement(N.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(l.d)("Timeout", "StreamTimeoutModal")))))), s.createElement(_.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(s.Component),
            F = Object(S.compose)(Object(b.a)(I, {
                name: "timeoutUserFromCommunity"
            }))(x),
            j = Object(h.a)(null, r)(F),
            L = n(1067),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(P, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(j, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? s.createElement(f.a, null, s.createElement(N.v, {
                        ariaLabel: Object(l.d)("Moderation", "DirectoryGamePage"),
                        icon: N._9.ChatRiskFlag
                    }), s.createElement(N.p, {
                        direction: N.q.BottomRight,
                        size: N.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? s.createElement(N.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, s.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(l.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? s.createElement(N.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, s.createElement(N.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(l.d)("Timeout", "StreamFlag"))) : null
                }, t = o.__decorate([Object(b.a)(L, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(k.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            R = A,
            B = Object(h.a)(null, i)(R),
            M = n(931),
            H = (n(1068), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.directoryType === g.a.Communities ? p.PageviewMedium.Community : p.PageviewMedium.Game;
                        return t.props.trackingMedium && (a = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: a,
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
                                    return [4, l.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), "yes" === e && l.b.get("premiere_video_manager_staff", !1) && this.setState({
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
                        a = null;
                    if (this.props.directoryType === g.a.Communities && (n = s.createElement(N.U, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: N._2.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, s.createElement(B, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) a = s.createElement(c.a, {
                        imageSrc: e.previewImageURL || l.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || M.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || l.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.d)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var r = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (r = s.createElement(N.U, {
                            className: "stream-thumbnail__stream-type-indicator-wrapper",
                            position: N._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, s.createElement(d.a, {
                            type: e.type
                        }))), a = s.createElement(N.U, {
                            position: N._2.Relative
                        }, s.createElement(N._27, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || M.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(M.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), r)
                    }
                    return s.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, s.createElement(N.U, {
                        className: "stream-thumbnail__card",
                        position: N._2.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, a, n))
                }, t
            }(s.Component)),
            V = H;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return V
        })
    },
    1056: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(y.d)(e)
            }
        }
        var r, i = n(0),
            o = n(1),
            s = n(2),
            l = n(7),
            c = n(5),
            d = n(1001),
            u = n(3),
            m = n(1288);
        ! function(e) {
            e[e.BrowseForYouPage = 0] = "BrowseForYouPage", e[e.BrowseGamePage = 1] = "BrowseGamePage", e[e.BrowseCommunitiesPage = 2] = "BrowseCommunitiesPage", e[e.BrowsePopularPage = 3] = "BrowsePopularPage", e[e.BrowseCreativePage = 4] = "BrowseCreativePage"
        }(r || (r = {}));
        var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, s.n.experiments.getAssignment(d.d)];
                                case 1:
                                    return e = n.sent(), [4, s.n.experiments.getAssignment(d.e)];
                                case 2:
                                    return t = n.sent(), Object(d.h)(e, t) && this.setState({
                                        forYouAssignment: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [o.createElement(u._18, {
                        key: r.BrowseGamePage,
                        active: this.props.activeTab === r.BrowseGamePage,
                        linkTo: "/directory",
                        "data-a-target": "browse-games-tab"
                    }, Object(s.d)("Games", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowseCommunitiesPage,
                        active: this.props.activeTab === r.BrowseCommunitiesPage,
                        linkTo: "/directory/communities",
                        "data-a-target": "browse-communities-tab"
                    }, Object(s.d)("Communities", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowsePopularPage,
                        active: this.props.activeTab === r.BrowsePopularPage,
                        linkTo: "/directory/all",
                        "data-a-target": "browse-popular-tab"
                    }, Object(s.d)("Popular", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowseCreativePage,
                        active: this.props.activeTab === r.BrowseCreativePage,
                        linkTo: "/directory/creative",
                        "data-a-target": "browse-creative-tab"
                    }, Object(s.d)("Creative", "BrowseHeader"))];
                    if (this.props.isLoggedIn && this.userDataLoaded() && this.props.data.currentUser && Object(d.i)(new Date(this.props.data.currentUser.createdAt)) && this.state.forYouAssignment) {
                        var t = o.createElement(u._18, {
                            key: r.BrowseForYouPage,
                            active: this.props.activeTab === r.BrowseForYouPage,
                            linkTo: "/directory/foryou",
                            "data-a-target": "browse-for-you-tab"
                        }, Object(s.d)("For You", "BrowseHeader"));
                        this.state.forYouAssignment === d.b.First ? e.unshift(t) : this.state.forYouAssignment === d.b.Last && e.push(t)
                    }
                    return o.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(u._19, null, e))
                }, t = i.__decorate([Object(c.c)("BrowseHeader"), Object(l.a)(m, {
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(o.Component),
            g = p,
            h = n(6),
            y = n(17),
            v = Object(h.a)(a, null)(g);
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return v
        })
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
    1267: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n(2),
            i = n(3),
            o = function(e) {
                var t = Object(r.d)("Channels in English", "DirectoryInternationalSectionHeader"),
                    n = {
                        ar: Object(r.d)("Channels in Arabic", "DirectoryInternationalSectionHeader"),
                        asl: Object(r.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader"),
                        bg: Object(r.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader"),
                        cs: Object(r.d)("Channels in Czech", "DirectoryInternationalSectionHeader"),
                        da: Object(r.d)("Channels in Danish", "DirectoryInternationalSectionHeader"),
                        de: Object(r.d)("Channels in German", "DirectoryInternationalSectionHeader"),
                        el: Object(r.d)("Channels in Greek", "DirectoryInternationalSectionHeader"),
                        en: t,
                        es: Object(r.d)("Channels in Spanish", "DirectoryInternationalSectionHeader"),
                        fi: Object(r.d)("Channels in Finnish", "DirectoryInternationalSectionHeader"),
                        fr: Object(r.d)("Channels in French", "DirectoryInternationalSectionHeader"),
                        hu: Object(r.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader"),
                        it: Object(r.d)("Channels in Italian", "DirectoryInternationalSectionHeader"),
                        ja: Object(r.d)("Channels in Japanese", "DirectoryInternationalSectionHeader"),
                        ko: Object(r.d)("Channels in Korean", "DirectoryInternationalSectionHeader"),
                        nl: Object(r.d)("Channels in Dutch", "DirectoryInternationalSectionHeader"),
                        no: Object(r.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader"),
                        pl: Object(r.d)("Channels in Polish", "DirectoryInternationalSectionHeader"),
                        pt: Object(r.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader"),
                        ru: Object(r.d)("Channels in Russian", "DirectoryInternationalSectionHeader"),
                        sk: Object(r.d)("Channels in Slovak", "DirectoryInternationalSectionHeader"),
                        sv: Object(r.d)("Channels in Swedish", "DirectoryInternationalSectionHeader"),
                        th: Object(r.d)("Channels in Thai", "DirectoryInternationalSectionHeader"),
                        tr: Object(r.d)("Channels in Turkish", "DirectoryInternationalSectionHeader"),
                        vi: Object(r.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader"),
                        zh: Object(r.d)("Channels in Chinese", "DirectoryInternationalSectionHeader")
                    };
                return a.createElement(i.U, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i._21, {
                    type: i._26.H4,
                    color: i.F.Alt2,
                    fontSize: i.L.Size5,
                    transform: i._25.Uppercase,
                    "data-a-target": "international-section-header"
                }, n[e.languageCode] || t))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    1288: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowseHeader_User"
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
                                    value: "createdAt"
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
                end: 69
            }
        };
        n.loc.source = {
            body: "query BrowseHeader_User {\n  currentUser {\n    id\n    createdAt\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1899: function(e, t) {},
    1900: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_Popular"
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
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
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
                                    value: "Language"
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
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
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
            }],
            loc: {
                start: 0,
                end: 588
            }
        };
        n.loc.source = {
            body: "query BrowsePage_Popular($limit: Int, $cursor: Cursor, $platformType: PlatformType, $languages: [Language!]) {\n  streams(first: $limit, after: $cursor, platformType: $platformType, languages: $languages) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        viewersCount\n        previewImageURL(width: 320 height: 180)\n        broadcaster {\n          id\n          login\n          displayName\n        }\n        game {\n          id\n          name\n          boxArtURL(width: 40 height: 56)\n        }\n        type\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1901: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularPage_StreamsByLanguage"
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
                                    value: "Language"
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
            }],
            loc: {
                start: 0,
                end: 541
            }
        };
        n.loc.source = {
            body: "query PopularPage_StreamsByLanguage($limit: Int, $languages: [Language!], $cursor: Cursor) {\n  streams(first: $limit, after: $cursor, languages: $languages) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        viewersCount\n        previewImageURL(width: 320 height: 180)\n        broadcaster {\n          id\n          login\n          displayName\n        }\n        game {\n          id\n          boxArtURL(width: 40 height: 56)\n          name\n        }\n        type\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n}\n",
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

        function a(e) {
            return {
                sideNavExpanded: e.ui.sideNavExpanded,
                languagePreferences: e.userPreferences.languagePreferences
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(6),
            i = n(0),
            o = n(1),
            s = n(2),
            l = n(993),
            c = n(915),
            d = n(67),
            u = n(28),
            m = n(7),
            p = n(823),
            g = n(48),
            h = n(20),
            y = n(381),
            v = n(821),
            f = n(115),
            b = n(12),
            k = n(884),
            S = n(385),
            _ = n(1056),
            E = n(5),
            C = n(451),
            N = n(931),
            T = n(4),
            D = n(47),
            w = n(3),
            O = (n(1899), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? s.n.history.push("/directory/all/") : s.n.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(s.d)("All Platforms", "PlatformFilter"),
                        n = Object(s.d)("Xbox One", "PlatformFilter"),
                        a = Object(s.d)("PlayStation 4", "PlatformFilter");
                    switch (this.props.broadcastType) {
                        case "xbox":
                            e = n;
                            break;
                        case "ps4":
                            e = a;
                            break;
                        default:
                            e = t
                    }
                    return o.createElement(w.U, {
                        margin: {
                            bottom: 2
                        },
                        display: w.H.Flex
                    }, o.createElement("div", null, o.createElement(w.U, {
                        display: w.H.InlineFlex
                    }, o.createElement(D.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, o.createElement(w.u, {
                        type: w.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), o.createElement(w.p, {
                        direction: w.q.Bottom,
                        noTail: !0
                    }, o.createElement(w.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = T("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return o.createElement(w.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, o.createElement(w.U, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(o.Component)),
            P = n(1900),
            I = "directory-first-item",
            U = "directory-container",
            x = {
                "/directory/all": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            },
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + U + '"]'),
                            t = document.querySelector('[data-target="' + I + '"]'),
                            n = document.querySelector("#" + S.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(S.b.directory).length && f.a.display(S.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    S.g.addListener(S.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    s.n.setPageTitle(Object(s.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), S.g.removeListener(S.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize()
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return o.createElement(w.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return o.createElement(d.a, {
                        message: Object(s.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = b.PageviewMedium.Browse,
                        t = this.props.data.streams.edges.map(function(t, n) {
                            var a = t.node;
                            return o.createElement("div", {
                                key: a.id,
                                "data-target": n ? "" : I,
                                style: {
                                    order: n
                                }
                            }, o.createElement(w.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, o.createElement(c.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: b.PageviewContent.Live,
                                        content_index: n,
                                        medium: e
                                    }
                                },
                                title: a.title || N.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(g.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || s.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(y.d)(a.game && a.game.name || ""),
                                    state: {
                                        medium: e,
                                        content: b.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                "data-a-target": "card-" + n,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: e,
                                        content: b.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                streamType: a.type
                            })))
                        }),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return o.createElement(w.U, {
                        padding: 3
                    }, o.createElement(C.b, {
                        className: "browse-popular"
                    }), o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: S.d.directory,
                        slotID: S.b.directory.banner,
                        adSize: S.c.directory.banner,
                        targeting: {
                            pagetype: S.a.games
                        },
                        autoEnable: !1
                    }), o.createElement(_.a, {
                        activeTab: _.b.BrowsePopularPage
                    }), o.createElement(w.U, {
                        margin: {
                            bottom: 2
                        },
                        display: w.H.Flex,
                        flexDirection: w.J.Row
                    }, o.createElement(O, {
                        broadcastType: x[decodeURIComponent(this.props.location.pathname)] || "all"
                    }), o.createElement(w.U, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement(l.a, null))), o.createElement(w.U, {
                        flexShrink: 0,
                        "data-target": U
                    }, o.createElement(w._33, {
                        gutterSize: w._35.Small,
                        childWidth: w._34.Large,
                        placeholderItems: 20
                    }, o.createElement(k.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: S.d.directory,
                        slotID: S.b.directory.rectangle,
                        adSize: S.c.directory.rectangle,
                        targeting: {
                            pagetype: S.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), t), o.createElement(u.a, {
                        enabled: n,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    })))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = i.__decorate([Object(m.a)(P, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: x[decodeURIComponent(e.location.pathname)] || "all",
                                languages: e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    r = t.streams;
                                return n({
                                    query: P,
                                    variables: i.__assign({}, a, {
                                        cursor: r.edges[r.edges.length - 5].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            streams: i.__assign({}, a.streams, {
                                                edges: Object(h.b)(e.streams.edges, a.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularPage", {
                    destination: v.a.DirectoryPopular
                }), Object(p.a)({
                    location: b.PageviewLocation.DirectoryPopular
                })], t)
            }(o.Component),
            j = F,
            L = Object(r.a)(a)(j),
            A = n(880),
            R = n(1009),
            B = n(1267),
            M = n(1028),
            H = n(1901),
            V = "directory-container",
            G = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + V + '"]'),
                            t = document.querySelector('[data-target="' + M.a + '"]'),
                            n = document.querySelector("#" + S.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(S.b.directory).length && f.a.display(S.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(R.c)(t.match.path),
                        numSlotsCreated: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    S.g.addListener(S.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    S.g.removeListener(S.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return o.createElement(w.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return o.createElement(d.a, {
                        message: Object(s.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return o.createElement(d.a, {
                        message: Object(s.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                    });
                    var e, t = b.PageviewMedium.Browse,
                        n = this.props.data.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(e, n) {
                            var a = e.node;
                            return o.createElement("div", {
                                key: a.id,
                                "data-target": n ? "" : M.a,
                                style: {
                                    order: n
                                }
                            }, o.createElement(w.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card-container"
                            }, o.createElement(c.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: b.PageviewContent.Live,
                                        content_index: n,
                                        medium: t
                                    }
                                },
                                title: a.title || N.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(g.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || s.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(y.d)(a.game && a.game.name || ""),
                                    state: {
                                        medium: t,
                                        content: b.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                "data-a-target": "card-" + n,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: t,
                                        content: b.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                streamType: a.type
                            })))
                        });
                    if (n.length > 0) {
                        var a = w._34.Large,
                            r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = o.createElement(w.U, {
                            flexShrink: 0,
                            "data-target": V
                        }, o.createElement(w._33, {
                            gutterSize: w._35.Small,
                            childWidth: a,
                            placeholderItems: 20
                        }, o.createElement(k.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: S.d.directory,
                            slotID: S.b.directory.rectangle,
                            adSize: S.c.directory.rectangle,
                            targeting: {
                                pagetype: S.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), n), o.createElement(u.a, {
                            enabled: r,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var i = Object(s.d)("There are currently no channels streaming to this community", "PopularDirectoryByLanguagePage");
                        this.state.directoryType === A.a.Games && (i = Object(s.d)("No live channels for this game", "PopularDirectoryByLanguagePage")), e = o.createElement(w.U, {
                            display: w.H.Flex,
                            alignItems: w.c.Center,
                            justifyContent: w.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, o.createElement(w._21, {
                            color: w.F.Alt2,
                            fontSize: w.L.Size4,
                            italic: !0
                        }, i))
                    }
                    return o.createElement(w.U, {
                        padding: 3
                    }, o.createElement(C.b, {
                        className: "browse-popular-by-language"
                    }), o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: S.d.directory,
                        slotID: S.b.directory.banner,
                        adSize: S.c.directory.banner,
                        targeting: {
                            pagetype: S.a.games
                        },
                        autoEnable: !1
                    }), o.createElement(_.a, {
                        activeTab: _.b.BrowsePopularPage
                    }), o.createElement(w.U, {
                        margin: {
                            bottom: 2
                        },
                        display: w.H.Flex,
                        flexDirection: w.J.Row
                    }, o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: S.d.directory,
                        slotID: S.b.directory.banner,
                        adSize: S.c.directory.banner,
                        targeting: {
                            pagetype: S.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), o.createElement(B.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(m.a)(H, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage]
                            }
                        }
                    },
                    props: function(e) {
                        return i.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: H,
                                    variables: i.__assign({}, e.data.variables, {
                                        cursor: e.data.streams.edges[e.data.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            streams: i.__assign({}, a.streams, {
                                                edges: Object(h.b)(e.streams.edges, a.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularByLanguagePage", {
                    destination: v.a.DirectoryPopularByLanguage
                }), Object(p.a)({
                    location: b.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                })], t)
            }(o.Component),
            W = G;
        n.d(t, "DirectoryPopularPage", function() {
            return L
        }), n.d(t, "DirectoryPopularByLanguagePage", function() {
            return W
        })
    },
    385: function(e, t, n) {
        "use strict";

        function a(e) {
            p.emit(u, e)
        }

        function r(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return l
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
        }), t.i = a, t.h = r;
        var i = n(24),
            o = (n.n(i), n(2)),
            s = {
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
            l = {
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
            p = new i.EventEmitter
    },
    821: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
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

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, l.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    o = i.content,
                                    s = i.medium,
                                    c = i.content_index;
                                l.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                r = i.stringify(t);
                            r.length > 0 && (a = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var r = n(0),
            i = n(21),
            o = n(1),
            s = n(10),
            l = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    872: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function r() {
            var e = i.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return o.slice().sort(function(e, n) {
                var a = t(e),
                    r = t(n);
                return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        }
        n.d(t, "a", function() {
            return s
        }), t.b = r;
        var i = n(2),
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
            s = new Set(o.concat(a()).map(function(e) {
                return e.code
            }))
    },
    880: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    884: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var r = n(6),
            i = n(0),
            o = n(1),
            s = n(2),
            l = n(115),
            c = n(385),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = s.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return i.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = a.sent(), Object(c.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n = a.sent(), this.logger.warn("Unable to create ad slot", {
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
                                var a = n.slotRef.querySelector(d);
                                return void(a && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === c.b.directory.rectangle) {
                                var a = n.slotRef.querySelector(u);
                                return void(a && 1 !== a.clientWidth && n.setState({
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
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.g.addListener(c.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = i.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), o.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(o.Component),
            p = m,
            g = Object(r.a)(a)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    909: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = this;
            return function(a) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, r;
                    return o.__generator(this, function(o) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), r = Array.from(n), s.k.set(d, r), a(Object(c.b)(r)), [2]
                    })
                })
            }
        }

        function r() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return s.k.set(d, []), t(Object(c.b)([])), [2]
                    })
                })
            }
        }

        function i() {
            return s.k.get(d, []).filter(function(e) {
                return l.a.has(e)
            })
        }
        t.c = a, t.a = r, t.b = i;
        var o = n(0),
            s = n(2),
            l = n(872),
            c = n(910),
            d = "languageDirectoryFilters"
    },
    910: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                type: r,
                languagePreferences: e
            }
        }
        n.d(t, "a", function() {
            return r
        }), t.b = a;
        var r = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    915: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(10),
            o = n(2),
            s = n(916),
            l = n(3),
            c = (n(1008), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(l.U, {
                        display: l.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(l.Z, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: r.createElement(i.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return r.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(l._39)(this.props)), r.createElement(l.A, {
                        key: this.props.title
                    }, r.createElement(l.U, {
                        fullWidth: !0
                    }, r.createElement(l.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(l.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: l.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(l.B, null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(l.P, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(l._21, {
                        type: l._26.H3,
                        fontSize: l.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(l.U, {
                        className: "live-channel-card__meta",
                        display: l.H.Flex,
                        flexWrap: l.K.NoWrap
                    }, e, r.createElement(l._21, {
                        type: l._26.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(i.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(l._17, {
                        className: "live-channel-card__boxart",
                        position: l._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(l._30, {
                        display: l.H.Block,
                        direction: l._32.Bottom,
                        label: t
                    }, r.createElement(l.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: l.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(l.U, {
                        position: l._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(s.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(r.Component)),
            d = c;
        n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return d
        })
    },
    916: function(e, t, n) {
        "use strict";
        var a, r, i, o = n(0),
            s = n(4),
            l = n(1),
            c = n(2),
            d = n(148),
            u = n(3),
            m = (n(1007), a = {}, a[d.a.Live] = "stream-type-indicator--live", a[d.a.Premiere] = "stream-type-indicator--premiere", a[d.a.Rerun] = "stream-type-indicator--rerun", a[d.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = (r = {}, r[d.a.Premiere] = u._9.VideoPremiere, r[d.a.Rerun] = u._9.VideoRerun, r[d.a.WatchParty] = u._9.VideoRerun, r),
            g = (i = {}, i[d.a.Premiere] = u._10.Live, i[d.a.Rerun] = u._10.Inherit, i[d.a.WatchParty] = u._10.Inherit, i),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(u._17, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, l.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), l.createElement(u._21, {
                        type: u._26.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, s(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? l.createElement(u._17, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === d.a.Live ? l.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, l.createElement(u.V, {
                        size: u.W.Small
                    })) : l.createElement(u._8, {
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
            }(l.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    929: function(e, t, n) {
        "use strict";

        function a() {
            return {
                languagePreferences: Object(c.b)()
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
                case l.a:
                    return o.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        }

        function i(e) {
            return e.userPreferences.languagePreferences
        }
        t.a = i;
        var o = n(0),
            s = n(2),
            l = n(910),
            c = n(909);
        s.n.store.registerReducer("userPreferences", r)
    },
    931: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(2),
            o = function(e, t) {
                return Object(i.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            s = Object(i.d)("Untitled Broadcast", "StreamThumbnail"),
            l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(i.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(r.Component),
            c = l;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return c
        })
    },
    993: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                languagePreferences: Object(l.a)(e)
            }
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: s.c,
                clearLanguagePreferences: s.a
            }, e)
        }
        var i = n(6),
            o = n(9),
            s = n(909),
            l = n(929),
            c = n(0),
            d = n(1),
            u = n(2),
            m = n(28),
            p = n(47),
            g = n(872),
            h = n(5),
            y = n(3),
            v = (n(1011), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return d.createElement(y.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, d.createElement(y.E, {
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
                    return d.createElement(y.U, {
                        className: "language-select-menu"
                    }, d.createElement(p.a, null, d.createElement(y.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: y.z.Hollow
                    }, d.createElement(y.U, {
                        display: y.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), d.createElement(y.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && d.createElement(y.Z, {
                        type: y._0.Brand,
                        label: e.toString()
                    })))), d.createElement(y.p, {
                        direction: y.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, d.createElement(m.b, {
                        className: "language-select-menu__balloon"
                    }, d.createElement(y.U, {
                        padding: .5
                    }, Object(g.b)().map(this.renderLanguageOption))), d.createElement(y._17, {
                        background: y.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, d.createElement(y.u, {
                        type: y.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = c.__decorate([Object(h.c)("LanguageSelectMenu")], t)
            }(d.Component)),
            f = v,
            b = Object(i.a)(a, r)(f);
        n.d(t, "a", function() {
            return b
        })
    }
});
//# sourceMappingURL=pages.directory-popular-82687ba772249d473e2b135ec4ed65d6.js.map