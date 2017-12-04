webpackJsonp([34], {
    1002: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return r
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "e", function() {
            return d
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "g", function() {
            return m
        });
        var a, r = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            i = "TWILIGHT_WEB_ONBOARDING",
            o = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(a || (a = {}));
        var l, s = new Set([a.Skip.toString(), a.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(l || (l = {}));
        var c = new Set([l.First.toString(), l.Last.toString()]),
            d = function(e) {
                return !!e && c.has(e)
            },
            u = function(e, t) {
                return !!e && s.has(e) && d(t)
            },
            m = function(e) {
                return e.getTime() >= p().getTime()
            },
            p = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1008: function(e, t) {},
    1009: function(e, t) {},
    1038: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: y.c
            }, e)
        }

        function r(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: y.c
            }, e)
        }

        function i(e) {
            return Object(v.bindActionCreators)({
                onShowModal: y.d
            }, e)
        }
        var o = n(0),
            l = n(1),
            s = n(2),
            c = n(908),
            d = n(909),
            u = n(49),
            m = n(374),
            p = n(12),
            g = n(824),
            h = n(7),
            v = n(9),
            y = n(36),
            f = n(385),
            b = n(6),
            k = n(5),
            _ = n(31),
            S = n(104),
            E = n(21),
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
            C = n(3),
            T = n(1075),
            w = (n(1076), "error-message"),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(C._21, {
                            color: C.F.Error,
                            type: C._26.H4,
                            "data-test-selector": w
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
                    return l.createElement(C.P, {
                        position: C._2.Relative
                    }, l.createElement(C._17, {
                        background: C.m.Base,
                        className: "stream-ban-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._21, {
                        type: C._26.H4
                    }, Object(s.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamBanModal")), l.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._22.Center
                    }, l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamBanModal"))), l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(s.d)("Ban", "StreamBanModal")))))), l.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            D = Object(_.compose)(Object(b.a)(T, {
                name: "banUserFromCommunity"
            }))(P),
            O = Object(h.a)(null, a)(D),
            U = (n(1077), n(1078)),
            I = "error-message",
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? l.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, l.createElement(C._21, {
                            color: C.F.Error,
                            type: C._26.H4,
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
                    return l.createElement(C.P, {
                        position: C._2.Relative
                    }, l.createElement(C._17, {
                        background: C.m.Base,
                        className: "stream-timeout-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._21, {
                        type: C._26.H4
                    }, Object(s.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamTimeoutModal")), l.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._21, {
                        bold: !0
                    }, Object(s.d)("Duration", "StreamTimeoutModal")), l.createElement(C._14, {
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
                    }, Object(s.d)("24 hours", "StreamTimeoutModal")))), l.createElement(C._17, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._22.Center
                    }, l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(s.d)("Cancel", "StreamTimeoutModal"))), l.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, l.createElement(C.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(s.d)("Timeout", "StreamTimeoutModal")))))), l.createElement(S.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            F = Object(_.compose)(Object(b.a)(U, {
                name: "timeoutUserFromCommunity"
            }))(x),
            L = Object(h.a)(null, r)(F),
            A = n(1079),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(O, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(u.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(L, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? l.createElement(f.a, null, l.createElement(C.v, {
                        ariaLabel: Object(s.d)("Moderation", "DirectoryGamePage"),
                        icon: C._9.ChatRiskFlag
                    }), l.createElement(C.p, {
                        direction: C.q.BottomRight,
                        size: C.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? l.createElement(C.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, l.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? l.createElement(C.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, l.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(s.d)("Timeout", "StreamFlag"))) : null
                }, t = o.__decorate([Object(b.a)(A, {
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
            }(l.Component),
            j = R,
            B = Object(h.a)(null, i)(j),
            M = n(932),
            V = (n(1080), function(e) {
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
                        a = null;
                    if (this.props.directoryType === g.a.Communities && (n = l.createElement(C.U, {
                            className: "card card__flag",
                            position: C._2.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(B, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) a = l.createElement(c.a, {
                        imageSrc: e.previewImageURL || s.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || M.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || s.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.d)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var r = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (r = l.createElement(C.U, {
                            position: C._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(d.a, {
                            type: e.type
                        }))), a = l.createElement(C.U, {
                            position: C._2.Relative
                        }, l.createElement(C._27, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || M.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(M.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), r)
                    }
                    return l.createElement("div", {
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, l.createElement(C.U, {
                        className: "card",
                        position: C._2.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, a, n))
                }, t
            }(l.Component)),
            W = V;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return W
        })
    },
    1068: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(v.d)(e)
            }
        }
        var r, i = n(0),
            o = n(1),
            l = n(2),
            s = n(6),
            c = n(5),
            d = n(1002),
            u = n(3),
            m = n(1301);
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
                                    return this.props.latencyTracking.reportInteractive(), [4, l.n.experiments.getAssignment(d.c)];
                                case 1:
                                    return e = n.sent(), [4, l.n.experiments.getAssignment(d.d)];
                                case 2:
                                    return t = n.sent(), Object(d.f)(e, t) && this.setState({
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
                    }, Object(l.d)("Games", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowseCommunitiesPage,
                        active: this.props.activeTab === r.BrowseCommunitiesPage,
                        linkTo: "/directory/communities",
                        "data-a-target": "browse-communities-tab"
                    }, Object(l.d)("Communities", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowsePopularPage,
                        active: this.props.activeTab === r.BrowsePopularPage,
                        linkTo: "/directory/all",
                        "data-a-target": "browse-popular-tab"
                    }, Object(l.d)("Popular", "BrowseHeader")), o.createElement(u._18, {
                        key: r.BrowseCreativePage,
                        active: this.props.activeTab === r.BrowseCreativePage,
                        linkTo: "/directory/creative",
                        "data-a-target": "browse-creative-tab"
                    }, Object(l.d)("Creative", "BrowseHeader"))];
                    if (this.props.isLoggedIn && this.userDataLoaded() && this.props.data.currentUser && Object(d.g)(new Date(this.props.data.currentUser.createdAt)) && this.state.forYouAssignment) {
                        var t = o.createElement(u._18, {
                            key: r.BrowseForYouPage,
                            active: this.props.activeTab === r.BrowseForYouPage,
                            linkTo: "/directory/foryou",
                            "data-a-target": "browse-for-you-tab"
                        }, Object(l.d)("For You", "BrowseHeader"));
                        this.state.forYouAssignment === d.b.First ? e.unshift(t) : this.state.forYouAssignment === d.b.Last && e.push(t)
                    }
                    return o.createElement(u.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(u._19, null, e))
                }, t = i.__decorate([Object(c.c)("BrowseHeader"), Object(s.a)(m, {
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(o.Component),
            g = p,
            h = n(7),
            v = n(17),
            y = Object(h.a)(a, null)(g);
        n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return y
        })
    },
    1075: function(e, t) {
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
    1076: function(e, t) {},
    1077: function(e, t) {},
    1078: function(e, t) {
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
    1079: function(e, t) {
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
    1080: function(e, t) {},
    1280: function(e, t, n) {
        "use strict";

        function a() {
            return r.createElement(o.U, {
                margin: {
                    bottom: 2
                }
            }, r.createElement(o._21, {
                type: o._26.H4,
                color: o.F.Alt2,
                fontSize: o.L.Size5,
                transform: o._25.Uppercase,
                "data-a-target": "international-section-header"
            }, Object(i.d)("Channels in English", "DirectoryInternationalSectionHeader")))
        }
        var r = n(1),
            i = n(2),
            o = n(3);
        n.d(t, "a", function() {
            return a
        })
    },
    1301: function(e, t) {
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
    1893: function(e, t) {},
    1894: function(e, t) {
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
    1895: function(e, t) {
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
    2067: function(e, t, n) {
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
        var r = n(7),
            i = n(0),
            o = n(1),
            l = n(2),
            s = n(918),
            c = n(908),
            d = n(66),
            u = n(28),
            m = n(6),
            p = n(811),
            g = n(49),
            h = n(21),
            v = n(374),
            y = n(808),
            f = n(110),
            b = n(12),
            k = n(874),
            _ = n(381),
            S = n(1068),
            E = n(5),
            N = n(443),
            C = n(932),
            T = n(4),
            w = n(47),
            P = n(3),
            D = (n(1893), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? l.n.history.push("/directory/all/") : l.n.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(l.d)("All Platforms", "PlatformFilter"),
                        n = Object(l.d)("Xbox One", "PlatformFilter"),
                        a = Object(l.d)("PlayStation 4", "PlatformFilter");
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
                    return o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        display: P.H.Flex
                    }, o.createElement("div", null, o.createElement(P.U, {
                        display: P.H.InlineFlex
                    }, o.createElement(w.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, o.createElement(P.u, {
                        type: P.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), o.createElement(P.p, {
                        direction: P.q.Bottom,
                        noTail: !0
                    }, o.createElement(P.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = T("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return o.createElement(P.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, o.createElement(P.U, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(o.Component)),
            O = n(1894),
            U = "directory-first-item",
            I = "directory-container",
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
                        var e = document.querySelector('[data-target="' + I + '"]'),
                            t = document.querySelector('[data-target="' + U + '"]'),
                            n = document.querySelector("#" + _.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(_.b.directory).length && f.a.display(_.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    _.g.addListener(_.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    l.n.setPageTitle(Object(l.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), _.g.removeListener(_.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize()
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return o.createElement(P.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return o.createElement(d.a, {
                        message: Object(l.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = b.PageviewMedium.Browse,
                        t = this.props.data.streams.edges.map(function(t, n) {
                            var a = t.node;
                            return o.createElement("div", {
                                key: a.id,
                                "data-target": n ? "" : U,
                                style: {
                                    order: n
                                }
                            }, o.createElement(P.U, {
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
                                title: a.title || C.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(g.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || l.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(v.d)(a.game && a.game.name || ""),
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
                    return o.createElement(P.U, {
                        padding: 3
                    }, o.createElement(N.b, {
                        className: "browse-popular"
                    }), o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: _.d.directory,
                        slotID: _.b.directory.banner,
                        adSize: _.c.directory.banner,
                        targeting: {
                            pagetype: _.a.games
                        },
                        autoEnable: !1
                    }), o.createElement(S.a, {
                        activeTab: S.b.BrowsePopularPage
                    }), o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        display: P.H.Flex,
                        flexDirection: P.J.Row
                    }, o.createElement(D, {
                        broadcastType: x[decodeURIComponent(this.props.location.pathname)] || "all"
                    }), o.createElement(P.U, {
                        padding: {
                            x: 1
                        }
                    }, o.createElement(s.a, null))), o.createElement(P.U, {
                        flexShrink: 0,
                        "data-target": I
                    }, o.createElement(P._33, {
                        gutterSize: P._35.Small,
                        childWidth: P._34.Large,
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
                        adUnit: _.d.directory,
                        slotID: _.b.directory.rectangle,
                        adSize: _.c.directory.rectangle,
                        targeting: {
                            pagetype: _.a.games
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
                }, t = i.__decorate([Object(m.a)(O, {
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
                                    query: O,
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
                    destination: y.a.DirectoryPopular
                }), Object(p.a)({
                    location: b.PageviewLocation.DirectoryPopular
                })], t)
            }(o.Component),
            L = F,
            A = Object(r.a)(a)(L),
            R = n(824),
            j = n(923),
            B = n(1280),
            M = n(1038),
            V = n(1895),
            W = "directory-container",
            H = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + W + '"]'),
                            t = document.querySelector('[data-target="' + M.a + '"]'),
                            n = document.querySelector("#" + _.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(_.b.directory).length && f.a.display(_.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(j.c)(t.match.path),
                        numSlotsCreated: 0
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    _.g.addListener(_.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    _.g.removeListener(_.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return o.createElement(P.X, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return o.createElement(d.a, {
                        message: Object(l.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return o.createElement(d.a, {
                        message: Object(l.d)("Game does not exist", "PopularDirectoryByLanguagePage")
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
                            }, o.createElement(P.U, {
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
                                title: a.title || C.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(g.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || l.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(v.d)(a.game && a.game.name || ""),
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
                        var a = P._34.Large,
                            r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = o.createElement(P.U, {
                            flexShrink: 0,
                            "data-target": W
                        }, o.createElement(P._33, {
                            gutterSize: P._35.Small,
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
                            adUnit: _.d.directory,
                            slotID: _.b.directory.rectangle,
                            adSize: _.c.directory.rectangle,
                            targeting: {
                                pagetype: _.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), n), o.createElement(u.a, {
                            enabled: r,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var i = Object(l.d)("There are currently no channels streaming to this community", "PopularDirectoryByLanguagePage");
                        this.state.directoryType === R.a.Games && (i = Object(l.d)("No live channels for this game", "PopularDirectoryByLanguagePage")), e = o.createElement(P.U, {
                            display: P.H.Flex,
                            alignItems: P.c.Center,
                            justifyContent: P.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, o.createElement(P._21, {
                            color: P.F.Alt2,
                            fontSize: P.L.Size4,
                            italic: !0
                        }, i))
                    }
                    return o.createElement(P.U, {
                        padding: 3
                    }, o.createElement(N.b, {
                        className: "browse-popular-by-language"
                    }), o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: _.d.directory,
                        slotID: _.b.directory.banner,
                        adSize: _.c.directory.banner,
                        targeting: {
                            pagetype: _.a.games
                        },
                        autoEnable: !1
                    }), o.createElement(S.a, {
                        activeTab: S.b.BrowsePopularPage
                    }), o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        },
                        display: P.H.Flex,
                        flexDirection: P.J.Row
                    }, o.createElement(k.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: _.d.directory,
                        slotID: _.b.directory.banner,
                        adSize: _.c.directory.banner,
                        targeting: {
                            pagetype: _.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), o.createElement(B.a, null), e))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = i.__decorate([Object(m.a)(V, {
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
                                    query: V,
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
                    destination: y.a.DirectoryPopularByLanguage
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
            z = H;
        n.d(t, "DirectoryPopularPage", function() {
            return A
        }), n.d(t, "DirectoryPopularByLanguagePage", function() {
            return z
        })
    },
    381: function(e, t, n) {
        "use strict";

        function a(e) {
            p.emit(u, e)
        }

        function r(e) {
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
        }), t.i = a, t.h = r;
        var i = n(24),
            o = (n.n(i), n(2)),
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
            p = new i.EventEmitter
    },
    808: function(e, t, n) {
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
    811: function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    o = i.content,
                                    l = i.medium,
                                    c = i.content_index;
                                s.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
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
                return Object(l.f)(n)
            }
        }
        var r = n(0),
            i = n(20),
            o = n(1),
            l = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    824: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    837: function(e, t, n) {
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
            return l
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
            l = new Set(o.concat(a()).map(function(e) {
                return e.code
            }))
    },
    851: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = this;
            return function(a) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, r;
                    return o.__generator(this, function(o) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), r = Array.from(n), l.k.set(d, r), a(Object(c.b)(r)), [2]
                    })
                })
            }
        }

        function r() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return l.k.set(d, []), t(Object(c.b)([])), [2]
                    })
                })
            }
        }

        function i() {
            return l.k.get(d, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = a, t.a = r, t.b = i;
        var o = n(0),
            l = n(2),
            s = n(837),
            c = n(852),
            d = "languageDirectoryFilters"
    },
    852: function(e, t, n) {
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
    874: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var r = n(7),
            i = n(0),
            o = n(1),
            l = n(2),
            s = n(110),
            c = n(381),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = l.i.withCategory("ad-slot"), n.createSlot = function(e) {
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
                                        return a.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
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
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), c.g.removeListener(c.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
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
    877: function(e, t, n) {
        "use strict";

        function a() {
            return {
                languagePreferences: Object(c.b)()
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
                case s.a:
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
            l = n(2),
            s = n(852),
            c = n(851);
        l.n.store.registerReducer("userPreferences", r)
    },
    908: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n(1),
            i = n(10),
            o = n(2),
            l = n(909),
            s = n(3),
            c = (n(1009), function(e) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(s.Z, {
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
                    }, Object(s._39)(this.props)), r.createElement(s.A, {
                        key: this.props.title
                    }, r.createElement(s.U, {
                        fullWidth: !0
                    }, r.createElement(s.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    })), this.renderContentType(), this.renderGameBoxArt()))), r.createElement(s.B, null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(s._21, {
                        type: s._26.H3,
                        fontSize: s.L.Size5,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, r.createElement(s._21, {
                        type: s._26.Span,
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
                    }, r.createElement(s._17, {
                        className: "live-channel-card__boxart",
                        position: s._2.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(s._30, {
                        display: s.H.Block,
                        direction: s._32.Bottom,
                        label: t
                    }, r.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(s.U, {
                        position: s._2.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: this.props.streamType
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
    909: function(e, t, n) {
        "use strict";
        var a, r, i, o = n(4),
            l = n(1),
            s = n(2),
            c = n(274),
            d = n(3),
            u = (n(1008), a = {}, a[c.a.Live] = "stream-type-indicator--live", a[c.a.Premiere] = "stream-type-indicator--premiere", a[c.a.Rerun] = "stream-type-indicator--rerun", a[c.a.WatchParty] = "stream-type-indicator--rerun", a),
            m = (r = {}, r[c.a.Premiere] = d._9.VideoPremiere, r[c.a.Rerun] = d._9.VideoRerun, r[c.a.WatchParty] = d._9.VideoRerun, r),
            p = (i = {}, i[c.a.Premiere] = d._10.Live, i[c.a.Rerun] = d._10.Inherit, i[c.a.WatchParty] = d._10.Inherit, i),
            g = function(e) {
                var t = {
                    "stream-type-indicator": !0
                };
                t[u[e.type]] = !0;
                var n;
                n = e.type === c.a.Live ? l.createElement(d.U, {
                    className: "stream-type-indicator__live-wrapper",
                    display: d.H.Flex,
                    alignItems: d.c.Center
                }, l.createElement(d.V, {
                    size: d.W.Small
                })) : l.createElement(d._8, {
                    asset: m[e.type],
                    type: p[e.type],
                    width: 14,
                    height: 14
                });
                var a;
                switch (e.type) {
                    case c.a.Live:
                        a = Object(s.d)("Live", "StreamTypeIndicator");
                        break;
                    case c.a.Premiere:
                        a = Object(s.d)("Premiere", "StreamTypeIndicator");
                        break;
                    case c.a.Rerun:
                    case c.a.WatchParty:
                        a = Object(s.d)("Rerun", "StreamTypeIndicator");
                        break;
                    default:
                        a = ""
                }
                return l.createElement(d._17, {
                    className: o(t),
                    background: d.m.Overlay,
                    padding: {
                        x: .5
                    },
                    borderRadius: d.s.Small,
                    display: d.H.Flex
                }, l.createElement(d.U, {
                    display: d.H.Flex,
                    margin: {
                        right: .5
                    }
                }, n), l.createElement(d._21, {
                    type: d._26.Span
                }, a))
            };
        n.d(t, "a", function() {
            return g
        })
    },
    918: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: l.c,
                clearLanguagePreferences: l.a
            }, e)
        }
        var i = n(7),
            o = n(9),
            l = n(851),
            s = n(877),
            c = n(0),
            d = n(1),
            u = n(2),
            m = n(28),
            p = n(47),
            g = n(837),
            h = n(5),
            v = n(3),
            y = (n(919), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
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
            f = y,
            b = Object(i.a)(a, r)(f);
        n.d(t, "a", function() {
            return b
        })
    },
    919: function(e, t) {},
    923: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return o
        });
        var a = n(824),
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
    932: function(e, t, n) {
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
            l = Object(i.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(i.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(r.Component),
            c = s;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return c
        })
    }
});
//# sourceMappingURL=pages.directory-popular-b44f205e212df7006ea646f42e3b9bd0.js.map