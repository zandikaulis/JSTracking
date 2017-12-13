webpackJsonp([32], {
    1004: function(e, t, n) {
        "use strict";
        var a, i, r, o = n(0),
            l = n(4),
            s = n(1),
            d = n(2),
            c = n(147),
            u = n(3),
            m = (n(1034), a = {}, a[c.a.Live] = "stream-type-indicator--live", a[c.a.Premiere] = "stream-type-indicator--premiere", a[c.a.Rerun] = "stream-type-indicator--rerun", a[c.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = (i = {}, i[c.a.Premiere] = u._10.VideoPremiere, i[c.a.Rerun] = u._10.VideoRerun, i[c.a.WatchParty] = u._10.VideoRerun, i),
            g = (r = {}, r[c.a.Premiere] = u._11.Live, r[c.a.Rerun] = u._11.Inherit, r[c.a.WatchParty] = u._11.Inherit, r),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._18, {
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
                    }, this.getIcon()), s.createElement(u._22, {
                        type: u._27.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._18, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? s.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.W, {
                        size: u.X.Small
                    })) : s.createElement(u._9, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
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
            return h
        })
    },
    1009: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Popularity = "popularity", e.Relevancy = "relevancy"
        }(a || (a = {}))
    },
    1010: function(e, t) {},
    1011: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return i.createElement("div", null, Object(r.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(i.Component),
            d = s;
        n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return d
        })
    },
    1012: function(e, t, n) {
        "use strict";

        function a(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
        t.a = a
    },
    1026: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                type: o,
                browseType: e
            }
        }

        function i(e) {
            return {
                type: l,
                lastBrowsePath: e
            }
        }

        function r(e) {
            return {
                type: s,
                sortBy: e
            }
        }
        n.d(t, "a", function() {
            return o
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return s
        }), t.d = a, t.e = i, t.f = r;
        var o = "browse.BROWSE_TYPE_CHANGED",
            l = "browse.LAST_BROWSE_PATH",
            s = "browse.SORT_BY_CHANGED"
    },
    1027: function(e, t, n) {
        "use strict";

        function a(e) {
            var t = i.createElement(l.U, {
                padding: 1,
                fullHeight: !0,
                flexDirection: l.J.Column,
                justifyContent: l.T.Center,
                display: l.H.Flex
            }, i.createElement(l._22, {
                color: l.F.Link,
                fontSize: l.L.Size4,
                noWrap: !0
            }, Object(o.d)("View All", "Following--ViewAllButton")), i.createElement(l._22, {
                color: l.F.Alt2,
                fontSize: l.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": d
            }, i.createElement(l.U, null, i.createElement(l.j, {
                ratio: e.aspectRatio
            }, i.createElement(l._18, {
                background: l.m.Alt2,
                fullHeight: !0
            }, t))))
        }
        t.a = a;
        var i = n(1),
            r = (n.n(i), n(10)),
            o = n(2),
            l = n(3),
            s = n(1074),
            d = (n.n(s), "view-all-button-selector")
    },
    1034: function(e, t) {},
    1035: function(e, t) {},
    1036: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "e", function() {
            return r
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "g", function() {
            return m
        }), n.d(t, "h", function() {
            return p
        }), n.d(t, "f", function() {
            return g
        }), n.d(t, "i", function() {
            return h
        });
        var a, i = "TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING",
            r = "TWILIGHT_WEB_ONBOARDING_FOR_YOU",
            o = "TWILIGHT_WEB_ONBOARDING",
            l = "control";
        ! function(e) {
            e.Skip = "skip", e.NoSkip = "no_skip"
        }(a || (a = {}));
        var s, d = new Set([a.Skip.toString(), a.NoSkip.toString()]);
        ! function(e) {
            e.First = "first", e.Last = "last"
        }(s || (s = {}));
        var c, u = new Set([s.First.toString(), s.Last.toString()]);
        ! function(e) {
            e.Yes = "yes"
        }(c || (c = {}));
        var m = function(e) {
                return !!e && u.has(e)
            },
            p = function(e, t) {
                return !!e && d.has(e) && m(t)
            },
            g = function(e, t, n) {
                return !!e && d.has(e) && m(t) && n === c.Yes
            },
            h = function(e) {
                return e.getTime() >= v().getTime()
            },
            v = function() {
                return new Date((new Date).getTime() - 12096e5)
            }
    },
    1037: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var a = n(927),
            i = function(e) {
                return e.startsWith("/communities") || e.startsWith("/directory/communities") ? a.a.Communities : a.a.Games
            }
    },
    1057: function(e, t, n) {
        "use strict";

        function a() {
            var e = Object(u.a)();
            return s.__assign({
                browseType: p.a.GamesAndCommunities,
                lastBrowsePath: "/directory",
                sortBy: c.a.Popularity
            }, e)
        }

        function i(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
                case m.a:
                    return s.__assign({}, e, {
                        browseType: t.browseType
                    });
                case m.b:
                    return s.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case m.c:
                    return s.__assign({}, e, {
                        sortBy: t.sortBy
                    });
                default:
                    return e
            }
        }

        function r(e) {
            return e.browse.sortBy
        }

        function o(e) {
            return e.browse.browseType
        }

        function l(e) {
            return e.browse.lastBrowsePath
        }
        t.a = r, t.b = o, t.c = l;
        var s = n(0),
            d = n(2),
            c = n(1009),
            u = n(1259),
            m = n(1026),
            p = n(931);
        d.n.store.registerReducer("browse", i)
    },
    1058: function(e, t, n) {
        "use strict";

        function a(e) {
            return Object(v.bindActionCreators)({
                onCloseModal: f.c
            }, e)
        }

        function i(e) {
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
            d = n(926),
            c = n(1004),
            u = n(48),
            m = n(379),
            p = n(13),
            g = n(927),
            h = n(6),
            v = n(9),
            f = n(37),
            y = n(446),
            k = n(7),
            b = n(5),
            S = n(33),
            w = n(107),
            _ = n(20),
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
            E = n(1305),
            F = (n(1306), "error-message"),
            T = function(e) {
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
                        }, l.createElement(C._22, {
                            color: C.F.Error,
                            type: C._27.H4,
                            "data-test-selector": F
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
                                        return this.props.banUserFromCommunity ? (e = o.__assign({}, Object(_.a)({
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
                        position: C._3.Relative
                    }, l.createElement(C._18, {
                        background: C.m.Base,
                        className: "stream-ban-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._22, {
                        type: C._27.H4
                    }, Object(s.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), l.createElement(C._18, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._22, {
                        bold: !0
                    }, Object(s.d)("Reason (Required)", "StreamBanModal")), l.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(s.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), l.createElement(C._18, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._23.Center
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
                    }, Object(s.d)("Ban", "StreamBanModal")))))), l.createElement(w.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            D = Object(S.compose)(Object(k.a)(E, {
                name: "banUserFromCommunity"
            }))(T),
            P = Object(h.a)(null, a)(D),
            O = (n(1307), n(1308)),
            I = "error-message",
            B = function(e) {
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
                        }, l.createElement(C._22, {
                            color: C.F.Error,
                            type: C._27.H4,
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
                                        return this.props.timeoutUserFromCommunity ? (e = o.__assign({}, Object(_.a)({
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
                        position: C._3.Relative
                    }, l.createElement(C._18, {
                        background: C.m.Base,
                        className: "stream-timeout-modal"
                    }, l.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), l.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(C._22, {
                        type: C._27.H4
                    }, Object(s.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), l.createElement(C._18, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(C._22, {
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
                    }, l.createElement(C._22, {
                        bold: !0
                    }, Object(s.d)("Duration", "StreamTimeoutModal")), l.createElement(C._15, {
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
                    }, Object(s.d)("24 hours", "StreamTimeoutModal")))), l.createElement(C._18, {
                        borderTop: !0
                    }, l.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._23.Center
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
                    }, Object(s.d)("Timeout", "StreamTimeoutModal")))))), l.createElement(w.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(l.Component),
            x = Object(S.compose)(Object(k.a)(O, {
                name: "timeoutUserFromCommunity"
            }))(B),
            U = Object(h.a)(null, i)(x),
            A = n(1309),
            L = function(e) {
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
                        t.props.onShowModal(U, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? l.createElement(y.a, null, l.createElement(C.v, {
                        ariaLabel: Object(s.d)("Moderation", "DirectoryGamePage"),
                        icon: C._10.ChatRiskFlag
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
                }, t = o.__decorate([Object(k.a)(A, {
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
            j = L,
            R = Object(h.a)(null, r)(j),
            G = n(1011),
            V = (n(1310), function(e) {
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
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: C._3.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, l.createElement(R, {
                            communityName: this.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        }))), this.props.directoryType === g.a.Communities && e.game) a = l.createElement(d.a, {
                        imageSrc: e.previewImageURL || s.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || G.a,
                        channelName: Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: e.game.boxArtURL || s.a.defaultBoxArtURL,
                        gameTitle: e.game.name,
                        gameLinkTo: this.getLinkTo(Object(m.c)(e.game.name), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type
                    });
                    else {
                        var i = null;
                        this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (i = l.createElement(C.U, {
                            className: "stream-thumbnail__stream-type-indicator-wrapper",
                            position: C._3.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            padding: .5
                        }, l.createElement(c.a, {
                            type: e.type
                        }))), a = l.createElement(C.U, {
                            position: C._3.Relative
                        }, l.createElement(C._28, {
                            linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                            title: e.title || G.a,
                            imageAlt: e.broadcaster.login + " cover image",
                            imageSrc: e.previewImageURL,
                            info: Object(G.b)(e.viewersCount, Object(u.a)(e.broadcaster.login, e.broadcaster.displayName, !0)),
                            "data-a-target": "card-" + t,
                            "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                        }), i)
                    }
                    return l.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, l.createElement(C.U, {
                        className: "stream-thumbnail__card",
                        position: C._3.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": "directory-game__card_container"
                    }, a, n))
                }, t
            }(l.Component)),
            M = V;
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return "directory-game__card_container"
        }), n.d(t, "b", function() {
            return M
        })
    },
    1067: function(e, t, n) {
        "use strict";

        function a(e) {
            for (var t = e.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * (t + 1)),
                    a = e[t];
                e[t] = e[n], e[n] = a
            }
            return e
        }
        t.a = a
    },
    1068: function(e, t, n) {
        "use strict";

        function a(e, t, n, a) {
            void 0 === n && (n = {});
            var i = e.readQuery({
                    query: t,
                    variables: n
                }),
                r = s(i, function(e) {
                    return e
                }, function(e) {
                    return a(e)
                });
            e.writeQuery({
                query: t,
                variables: n,
                data: r
            })
        }
        var i = n(0),
            r = n(1),
            o = n(7),
            l = n(20),
            s = n(137),
            d = n(3),
            c = n(1069),
            u = n(1070),
            m = (n(1071), n(1072));
        n.d(t, "a", function() {
            return g
        });
        var p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        inProgress: !1
                    }, t.onClick = function() {
                        t.state.inProgress || t.setState({
                            inProgress: !0
                        }, t.mutateFollowGame)
                    }, t.mutateFollowGame = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.followGameDataLoadedWithoutError() && this.props.data.game ? this.isFollowing() ? [3, 2] : [4, this.followGame(this.props.data.game.id)] : [2];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return [4, this.unfollowGame(this.props.data.game.id)];
                                    case 3:
                                        e.sent(), e.label = 4;
                                    case 4:
                                        return [2]
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
                return i.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return this.state.inProgress ? e = r.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, r.createElement(d.Y, {
                        fillContent: !0
                    })) : this.state.hovered ? e = r.createElement("div", {
                        className: "follow-game-card__overlay"
                    }, r.createElement(d._9, {
                        width: 50,
                        height: 50,
                        asset: this.isFollowing() ? d._10.Unheart : d._10.Heart
                    })) : this.isFollowing() && (e = r.createElement("div", {
                        className: "follow-game-card__overlay follow-game-card__overlay--followed",
                        "data-a-target": "follow-game-card--followed"
                    }, r.createElement(d._9, {
                        width: 50,
                        height: 50,
                        asset: d._10.Heart
                    }))), r.createElement(d.P, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement("div", i.__assign({
                        className: "follow-game-card",
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onClick: this.onClick
                    }, Object(d._40)(this.props)), r.createElement(d.A, {
                        key: this.props.title
                    }, r.createElement(d.U, {
                        position: d._3.Relative
                    }, e, r.createElement(d.C, {
                        aspect: d.k.Aspect3x4,
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc
                    })), r.createElement(d.B, null, r.createElement(d.U, {
                        margin: {
                            top: .5,
                            bottom: 1
                        }
                    }, r.createElement(d._22, {
                        color: d.F.Base,
                        fontSize: d.L.Size5
                    }, this.props.title), r.createElement(d._22, {
                        color: d.F.Alt,
                        fontSize: d.L.Size6
                    }, this.props.info))))))
                }, t.prototype.followGame = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = i.__assign({}, Object(l.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var n = t.data.followGame;
                                            a(e, u, {
                                                name: r.props.title
                                            }, function(e) {
                                                return e.game && n && n.game ? (e.game.self.follow = n.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            followGame: {
                                                __typename: "FollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: {
                                                            __typename: "GameFollow",
                                                            followedAt: (new Date).toISOString()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.props.followGame(t)];
                                case 2:
                                    return o.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        r.props.onFollow(r.props.title)
                                    }), [3, 4];
                                case 3:
                                    return n = o.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.unfollowGame = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    t = i.__assign({}, Object(l.a)({
                                        gameID: e
                                    }), {
                                        update: function(e, t) {
                                            var n = t.data.unfollowGame;
                                            a(e, u, {
                                                name: r.props.title
                                            }, function(e) {
                                                return e.game && n && n.game ? (e.game.self.follow = n.game.self.follow, e) : e
                                            })
                                        },
                                        optimisticResponse: {
                                            unfollowGame: {
                                                __typename: "UnfollowGamePayload",
                                                game: {
                                                    __typename: "Game",
                                                    self: {
                                                        __typename: "GameSelfConnection",
                                                        follow: null
                                                    }
                                                }
                                            }
                                        }
                                    }), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.props.unfollowGame(t)];
                                case 2:
                                    return o.sent(), this.setState({
                                        inProgress: !1
                                    }, function() {
                                        r.props.onUnfollow(r.props.title)
                                    }), [3, 4];
                                case 3:
                                    return n = o.sent(), this.setState({
                                        inProgress: !1
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.isFollowing = function() {
                    return !!(this.followGameDataLoadedWithoutError() && this.props.data.game && this.props.data.game.self && this.props.data.game.self.follow)
                }, t.prototype.followGameDataLoadedWithoutError = function() {
                    return !(!this.props || !this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.game)
                }, t = i.__decorate([Object(o.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.title
                            }
                        }
                    }
                }), Object(o.a)(c, {
                    name: "followGame"
                }), Object(o.a)(m, {
                    name: "unfollowGame"
                })], t)
            }(r.Component),
            g = p
    },
    1069: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_FollowGame"
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
                end: 185
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_FollowGame($input: FollowGameInput!) {\n  followGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1070: function(e, t) {
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
    1071: function(e, t) {},
    1072: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameCard_UnfollowGame"
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
                end: 191
            }
        };
        n.loc.source = {
            body: "mutation FollowGameCard_UnfollowGame($input: UnfollowGameInput!) {\n  unfollowGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
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
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), n.d(t, "g", function() {
            return l
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "d", function() {
            return c
        }), n.d(t, "c", function() {
            return u
        });
        var a, i = n(2),
            r = n(13);
        ! function(e) {
            e.HomepageCTA = "homepage_cta", e.NewSignup = "new_signup"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e.Click = "click", e.Impression = "impression", e.Start = "start", e.Dismissed = "dismissed", e.Completed = "completed", e.Skipped = "skipped"
        }(o || (o = {}));
        var l = function(e) {
                var t = {
                    source: e.source,
                    action: o.Start
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            s = function() {
                var e = {
                    source: a.HomepageCTA,
                    action: o.Dismissed
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, e)
            },
            d = function(e) {
                var t = {
                    source: a.HomepageCTA,
                    action: e
                };
                i.m.track(r.SpadeEventType.OnboardingEvent, t)
            },
            c = function(e, t) {
                var n = {
                    src: r.SpadeEventType.OnboardingEvent,
                    game: t
                };
                i.m.track(e, n)
            },
            u = function(e) {
                i.m.track(r.SpadeEventType.BrowseForYou, e)
            }
    },
    1074: function(e, t) {},
    1075: function(e, t, n) {
        "use strict";
        var a = n(1),
            i = n(2),
            r = n(3),
            o = function(e) {
                var t = Object(i.d)("Channels in English", "DirectoryInternationalSectionHeader"),
                    n = {
                        ar: Object(i.d)("Channels in Arabic", "DirectoryInternationalSectionHeader"),
                        asl: Object(i.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader"),
                        bg: Object(i.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader"),
                        cs: Object(i.d)("Channels in Czech", "DirectoryInternationalSectionHeader"),
                        da: Object(i.d)("Channels in Danish", "DirectoryInternationalSectionHeader"),
                        de: Object(i.d)("Channels in German", "DirectoryInternationalSectionHeader"),
                        el: Object(i.d)("Channels in Greek", "DirectoryInternationalSectionHeader"),
                        en: t,
                        es: Object(i.d)("Channels in Spanish", "DirectoryInternationalSectionHeader"),
                        fi: Object(i.d)("Channels in Finnish", "DirectoryInternationalSectionHeader"),
                        fr: Object(i.d)("Channels in French", "DirectoryInternationalSectionHeader"),
                        hu: Object(i.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader"),
                        it: Object(i.d)("Channels in Italian", "DirectoryInternationalSectionHeader"),
                        ja: Object(i.d)("Channels in Japanese", "DirectoryInternationalSectionHeader"),
                        ko: Object(i.d)("Channels in Korean", "DirectoryInternationalSectionHeader"),
                        nl: Object(i.d)("Channels in Dutch", "DirectoryInternationalSectionHeader"),
                        no: Object(i.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader"),
                        pl: Object(i.d)("Channels in Polish", "DirectoryInternationalSectionHeader"),
                        pt: Object(i.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader"),
                        ru: Object(i.d)("Channels in Russian", "DirectoryInternationalSectionHeader"),
                        sk: Object(i.d)("Channels in Slovak", "DirectoryInternationalSectionHeader"),
                        sv: Object(i.d)("Channels in Swedish", "DirectoryInternationalSectionHeader"),
                        th: Object(i.d)("Channels in Thai", "DirectoryInternationalSectionHeader"),
                        tr: Object(i.d)("Channels in Turkish", "DirectoryInternationalSectionHeader"),
                        vi: Object(i.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader"),
                        zh: Object(i.d)("Channels in Chinese", "DirectoryInternationalSectionHeader")
                    };
                return a.createElement(r.U, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(r._22, {
                    type: r._27.H4,
                    color: r.F.Alt2,
                    fontSize: r.L.Size5,
                    transform: r._26.Uppercase,
                    "data-a-target": "international-section-header"
                }, n[e.languageCode] || t))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    1259: function(e, t, n) {
        "use strict";

        function a() {
            var e = o.k.get(s, {});
            return r.__assign({
                sortBy: l.a.Popularity
            }, e)
        }

        function i(e, t) {
            var n = a();
            n[e] = t, o.k.set(s, n)
        }
        t.a = a, t.b = i;
        var r = n(0),
            o = n(2),
            l = n(1009),
            s = "browseSettings"
    },
    1298: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(2),
            o = n(107),
            l = n(28),
            s = n(7),
            d = n(37),
            c = n(1067),
            u = n(1068),
            m = n(3),
            p = n(1299),
            g = (n(1300), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        followCount: 0
                    }, n.getAndStoreShuffledGameCards = function() {
                        n.props.data && (n.shuffledGameCards = Object(c.a)(n.props.data.games.edges.map(function(e, t) {
                            var a = e.node;
                            return i.createElement(m.U, {
                                key: a.id
                            }, i.createElement(u.a, {
                                info: "",
                                title: a.name,
                                imageAlt: a.name,
                                imageSrc: a.boxArtURL,
                                onFollow: n.onFollow,
                                onUnfollow: n.onUnfollow,
                                "data-a-target": "follow-game-card-" + t
                            }))
                        })))
                    }, n.onClickContinue = function() {
                        n.props.onContinue && n.props.onContinue(), r.n.store.dispatch(Object(d.c)())
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
                return a.__extends(t, e), t.prototype.render = function() {
                    return !this.props.data || this.props.data.loading ? null : (this.shuffledGameCards || this.getAndStoreShuffledGameCards(), i.createElement(m._18, {
                        className: "following-games-modal",
                        background: m.m.Base,
                        padding: 2,
                        overflow: m.Z.Hidden,
                        "data-a-target": "follow-games-modal",
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        flexWrap: m.K.NoWrap
                    }, i.createElement(m.U, {
                        flexGrow: 0,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 1
                        },
                        textAlign: m._23.Center,
                        display: m.H.Flex,
                        flexDirection: m.J.Column,
                        alignContent: m.b.Center
                    }, i.createElement(m.U, {
                        margin: {
                            bottom: .5
                        }
                    }, i.createElement(m._22, {
                        fontSize: m.L.Size4,
                        color: m.F.Base,
                        bold: !0
                    }, Object(r.d)("Choose some games that you'd like to follow.", "FollowGamesModal"))), i.createElement(m._22, {
                        fontSize: m.L.Size5,
                        color: m.F.Alt
                    }, Object(r.d)("This will let you pin your favorites for easy access.", "FollowGamesModal"))), i.createElement(m.U, {
                        className: "following-games-modal__list",
                        margin: {
                            bottom: 1
                        },
                        flexGrow: 1
                    }, i.createElement(l.b, {
                        suppressScrollX: !0
                    }, i.createElement(m.U, {
                        padding: 1
                    }, i.createElement(m._34, {
                        childWidth: m._35.Small,
                        gutterSize: m._36.Small,
                        placeholderItems: 99
                    }, this.shuffledGameCards)))), i.createElement(m.U, {
                        display: m.H.Flex,
                        justifyContent: m.T.Center,
                        padding: {
                            y: 1
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, i.createElement(m.u, {
                        size: m.x.Large,
                        onClick: this.onClickContinue,
                        disabled: 0 === this.state.followCount
                    }, Object(r.d)("Continue", "FollowGamesModal"))), i.createElement(o.a, null)))
                }, t = a.__decorate([Object(s.a)(p, {
                    options: {
                        variables: {
                            limit: 40
                        }
                    }
                })], t)
            }(i.Component));
        n.d(t, "a", function() {
            return g
        })
    },
    1299: function(e, t) {
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
    1300: function(e, t) {},
    1301: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                isLoggedIn: Object(d.d)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(s.f)(l.a.FollowGameButton)
                }
            }, e)
        }
        var r = n(6),
            o = n(9),
            l = n(55),
            s = n(39),
            d = n(17),
            c = n(0),
            u = n(1),
            m = n(33),
            p = n(2),
            g = n(7),
            h = n(20),
            v = n(13),
            f = n(3),
            y = n(1302),
            k = n(1303),
            b = n(1304),
            S = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(h.a)({
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
                                                var a = n.data.followGame,
                                                    i = e.readQuery({
                                                        query: k,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                i.game && (i.game.self.follow = a.game.self.follow, e.writeQuery({
                                                    query: k,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: i
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(v.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = c.__assign({}, Object(h.a)({
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
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return u.createElement(f.u, {
                        icon: f._10.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return u.createElement(f._2, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(p.d)("Unfollow", "FollowGameButton");
                        return u.createElement(f.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: f._10.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: f._10.Unheart
                        })
                    }
                    return u.createElement(f.u, {
                        icon: f._10.Heart,
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
            w = Object(m.compose)(Object(g.a)(k, {
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
            _ = Object(r.a)(a, i)(w);
        n.d(t, "a", function() {
            return _
        })
    },
    1302: function(e, t) {
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
    1303: function(e, t) {
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
    1304: function(e, t) {
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
    1305: function(e, t) {
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
    1306: function(e, t) {},
    1307: function(e, t) {},
    1308: function(e, t) {
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
    1309: function(e, t) {
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
    131: function(e, t, n) {
        "use strict";

        function a(e) {
            return r.b.get(l.a, !1) || r.a.buildType !== o.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? s + e : s + e.pathname
        }

        function i() {
            return !r.b.get(l.a, !1) && r.a.buildType === o.a.Production
        }
        var r = n(2),
            o = n(15),
            l = n(266);
        t.a = a, t.b = i;
        var s = "https://www.twitch.tv"
    },
    1310: function(e, t) {},
    1701: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_AllDirectories"
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
                            value: "directoryFilters"
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
                                    value: "DirectoryFilter"
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
                            value: "directorySort"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DirectorySort"
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
                            value: "directories"
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
                                value: "filterBySet"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directoryFilters"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "sortBy"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directorySort"
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
                                                    value: "directoryType"
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
                end: 463
            }
        };
        n.loc.source = {
            body: "query BrowsePage_AllDirectories($limit: Int, $cursor: Cursor, $directoryFilters: [DirectoryFilter!], $directorySort: DirectorySort) {\n  directories(first: $limit, after: $cursor, filterBySet: $directoryFilters, sortBy: $directorySort) {\n    edges {\n      cursor\n      node {\n        id\n        displayName\n        name\n        avatarURL(width: 285 height: 380)\n        viewersCount\n        directoryType\n      }\n    }\n    pageInfo {\n      hasNextPage\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1702: function(e, t) {
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
    1703: function(e, t) {},
    1704: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityStreams_Streams"
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
                end: 582
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_Streams($name: String!, $type: DirectoryType!, $limit: Int) {\n  directory(name: $name, type: $type) {\n    id\n    streams(first: $limit) {\n      edges {\n        cursor\n        node {\n          id\n          title\n          viewersCount\n          previewImageURL(width: 320 height: 180)\n          broadcaster {\n            id\n            login\n            displayName\n          }\n          game {\n            id\n            boxArtURL(width: 285 height: 380)\n            name\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1705: function(e, t) {},
    1706: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CommunityStreams_RankedChannelStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "logins"
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
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "users"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "logins"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "logins"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 381
            }
        };
        n.loc.source = {
            body: "query CommunityStreams_RankedChannelStreams($logins: [String!]) {\n  users(logins: $logins) {\n    id\n    login\n    stream {\n      id\n      title\n      viewersCount\n      previewImageURL(width: 320 height: 180)\n      broadcaster {\n        id\n        login\n        displayName\n      }\n      game {\n        id\n        boxArtURL(width: 285 height: 380)\n        name\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1707: function(e, t) {},
    1708: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowseForYouPage_UserFollows"
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
                                                    value: "directoryType"
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
                end: 202
            }
        };
        n.loc.source = {
            body: "query BrowseForYouPage_UserFollows($limit: Int) {\n  currentUser {\n    id\n    createdAt\n    followedGames(first: $limit) {\n      nodes {\n        id\n        name\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1709: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePopular_InternationalStreams"
                },
                variableDefinitions: [{
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 519
            }
        };
        n.loc.source = {
            body: "query BrowsePopular_InternationalStreams($platformType: PlatformType, $limit: Int, $languages: [Language!]) {\n  streams(platformType: $platformType, first: $limit, languages: $languages) {\n    edges {\n      node {\n        id\n        title\n        viewersCount\n        previewImageURL(width: 320 height: 180)\n        broadcaster {\n          id\n          login\n          displayName\n        }\n        game {\n          id\n          boxArtURL(width: 40 height: 56)\n          name\n        }\n        type\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1710: function(e, t) {
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
    1711: function(e, t) {
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
    2072: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                browseType: e.browse.browseType,
                lastBrowsePath: e.browse.lastBrowsePath,
                sideNavExpanded: e.ui.sideNavExpanded,
                sortBy: e.browse.sortBy
            }
        }

        function i(e) {
            return Object(T.bindActionCreators)({
                changeLastBrowsePath: D.e
            }, e)
        }

        function r(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded,
                isLoggedIn: Object(ie.d)(e)
            }
        }

        function o(e) {
            switch (e) {
                case R.a.Channels:
                    return Object(w.d)("Channels", "NewBrowseHeader");
                case R.a.Communities:
                    return Object(w.d)("Communities", "NewBrowseHeader");
                case R.a.CreativeCommunities:
                    return Object(w.d)("Creative Communities", "NewBrowseHeader");
                case R.a.Games:
                    return Object(w.d)("Games", "NewBrowseHeader");
                default:
                    return Object(w.d)("Games and Communities", "NewBrowseHeader")
            }
        }

        function l(e) {
            return {
                browseType: Object(y.b)(e)
            }
        }

        function s(e) {
            return Object(T.bindActionCreators)({
                changeBrowseType: D.d
            }, e)
        }

        function d(e) {
            switch (e) {
                case M.a.Relevancy:
                    return Object(w.d)("Relevancy", "BrowseHeader");
                default:
                    return Object(w.d)("Popularity", "BrowseHeader")
            }
        }

        function c(e) {
            return {
                sortBy: Object(y.a)(e)
            }
        }

        function u(e) {
            return Object(T.bindActionCreators)({
                changeSortBy: D.f
            }, e)
        }

        function m(e) {
            return {
                isLoggedIn: Object(ie.d)(e)
            }
        }

        function p(e) {
            return {
                languageCode: e.session.languageCode,
                languagePreferences: e.userPreferences.languagePreferences,
                lastBrowsePath: e.browse.lastBrowsePath,
                sideNavExpanded: e.ui.sideNavExpanded
            }
        }

        function g(e) {
            return Object(T.bindActionCreators)({
                changeLastBrowsePath: D.e
            }, e)
        }

        function h(e) {
            return {
                browseType: Object(y.b)(e),
                sortBy: Object(y.a)(e)
            }
        }

        function v(e) {
            return Object(T.bindActionCreators)({
                changeBrowseType: D.d,
                changeSortBy: D.f
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f, y = n(1057),
            k = n(0),
            b = n(1),
            S = n(33),
            w = n(2),
            _ = n(823),
            N = n(821),
            C = n(13),
            E = n(5),
            F = n(6),
            T = n(9),
            D = n(1026),
            P = n(10),
            O = n(69),
            I = n(28),
            B = n(7),
            x = n(20),
            U = n(379),
            A = n(114),
            L = n(885),
            j = n(384),
            R = n(931),
            G = n(927),
            V = function(e) {
                switch (e) {
                    case R.a.Communities:
                        return [G.a.Communities, G.a.Creative];
                    case R.a.Games:
                        return [G.a.Games];
                    case R.a.CreativeCommunities:
                        return [G.a.Creative];
                    default:
                        return [G.a.Communities, G.a.Creative, G.a.Games]
                }
            },
            M = n(1009),
            H = function(e) {
                return e === M.a.Relevancy ? "RELEVANCE" : "VIEWER_COUNT"
            },
            W = n(3),
            z = n(1701),
            q = "directory-first-item",
            $ = "directory-container",
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + $ + '"]'),
                            t = document.querySelector('[data-target="' + q + '"]'),
                            n = document.querySelector("#" + j.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(j.b.directory).length && A.a.display(j.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentWillMount = function() {
                    j.g.addListener(j.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), j.g.removeListener(j.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directories) return b.createElement(W.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return b.createElement(O.a, {
                        message: Object(w.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = this.props.category === R.a.Communities ? C.PageviewContent.Community : C.PageviewContent.Game,
                        n = this.props.data.directories.edges.map(function(n, a) {
                            var i = n.node;
                            return b.createElement("div", {
                                key: i.id,
                                "data-target": a ? "" : q,
                                style: {
                                    order: a
                                }
                            }, b.createElement(W.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container"
                            }, b.createElement(W.t, {
                                linkTo: {
                                    pathname: e.getPathURL(i.name, i.directoryType),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: C.PageviewMedium.Browse
                                    }
                                },
                                title: i.displayName,
                                imageAlt: Object(w.d)("{displayName} cover image", {
                                    displayName: i.displayName
                                }, "BrowseDirectory"),
                                imageSrc: i.avatarURL,
                                info: Object(w.d)("{viewerCount,number} viewers", {
                                    viewerCount: i.viewersCount
                                }, "BrowseDirectory"),
                                "data-a-target": "card-" + a,
                                "data-a-id": "card-" + i.displayName.replace(/ /g, "")
                            })))
                        }),
                        a = !this.props.data.loading && !this.props.data.error && !!this.props.data.directories.pageInfo.hasNextPage;
                    return b.createElement(W.U, null, b.createElement("div", {
                        "data-target": $
                    }, b.createElement(W._34, {
                        gutterSize: W._36.Small,
                        childWidth: W._35.Small,
                        placeholderItems: 20
                    }, b.createElement(L.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: j.d.directory,
                        slotID: j.b.directory.rectangle,
                        adSize: j.c.directory.rectangle,
                        targeting: {
                            pagetype: j.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), b.createElement(I.a, {
                        enabled: a,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 300
                    })), this.props.children)
                }, t.prototype.getPathURL = function(e, t) {
                    return "COMMUNITY" === t || this.props.category === R.a.Communities || this.props.category === R.a.CreativeCommunities ? Object(U.a)(e) : Object(U.c)(e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(b.Component),
            Q = Object(S.compose)(Object(E.c)("BrowseDirectory"), Object(B.a)(z, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30,
                            directoryFilters: V(e.browseType),
                            directorySort: H(e.sortBy)
                        }
                    }
                },
                props: function(e) {
                    return k.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: z,
                                variables: k.__assign({}, e.data.variables, {
                                    cursor: e.data.directories.edges[e.data.directories.edges.length - 5].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        a = n;
                                    return {
                                        directories: k.__assign({}, a.directories, {
                                            edges: Object(x.b)(e.directories.edges, a.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(Object(P.f)(Y)),
            J = Object(F.a)(a, i)(Q),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Communities", "BrowseCommunitiesPage"))
                }, t.prototype.render = function() {
                    return b.createElement(J, {
                        category: R.a.Communities
                    })
                }, t
            }(b.Component),
            K = Object(S.compose)(Object(E.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: N.a.BrowseCommunities
            }), Object(_.a)({
                location: C.PageviewLocation.BrowseCommunities
            }))(X),
            Z = function() {
                return b.createElement(W._18, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: W._23.Center
                }, b.createElement(W._22, {
                    fontSize: W.L.Size4,
                    color: W.F.Alt2
                }, Object(w.d)("Not what you're looking for?", "BrowseCreativePage")), b.createElement(W.U, {
                    margin: {
                        top: 2
                    }
                }, b.createElement(W.u, {
                    type: W.z.Hollow,
                    linkTo: "/directory/game/creative"
                }, Object(w.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return b.createElement(J, {
                        category: R.a.CreativeCommunities
                    }, b.createElement(Z, null))
                }, t
            }(b.Component),
            te = Object(S.compose)(Object(E.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: N.a.BrowseCreative
            }), Object(_.a)({
                location: C.PageviewLocation.BrowseCreative
            }))(ee),
            ne = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    return b.createElement(J, {
                        category: R.a.GamesAndCommunities
                    })
                }, t
            }(b.Component),
            ae = Object(S.compose)(Object(E.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: N.a.BrowseGamesAndCommunities
            }), Object(_.a)({
                location: C.PageviewLocation.Directory
            }))(ne),
            ie = n(17),
            re = n(1036),
            oe = n(1702);
        ! function(e) {
            e[e.BrowseForYouPage = 0] = "BrowseForYouPage", e[e.BrowseGamePage = 1] = "BrowseGamePage", e[e.BrowseCommunitiesPage = 2] = "BrowseCommunitiesPage", e[e.BrowsePopularPage = 3] = "BrowsePopularPage", e[e.BrowseCreativePage = 4] = "BrowseCreativePage"
        }(f || (f = {}));
        var le, se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.userDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    return k.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return k.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.props.latencyTracking.reportInteractive(), [4, w.n.experiments.getAssignment(re.d)];
                                case 1:
                                    return e = a.sent(), [4, w.n.experiments.getAssignment(re.e)];
                                case 2:
                                    return t = a.sent(), [4, w.n.experiments.getAssignment("TWILIGHT_NEW_BROWSE")];
                                case 3:
                                    return n = a.sent(), "control" === n && Object(re.h)(e, t) && this.setState({
                                        forYouAssignment: t
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = [b.createElement(W._19, {
                        key: f.BrowseGamePage,
                        active: this.props.activeTab === f.BrowseGamePage,
                        linkTo: "/directory",
                        "data-a-target": "browse-games-tab"
                    }, Object(w.d)("Games", "BrowseHeader")), b.createElement(W._19, {
                        key: f.BrowseCommunitiesPage,
                        active: this.props.activeTab === f.BrowseCommunitiesPage,
                        linkTo: "/directory/communities",
                        "data-a-target": "browse-communities-tab"
                    }, Object(w.d)("Communities", "BrowseHeader")), b.createElement(W._19, {
                        key: f.BrowsePopularPage,
                        active: this.props.activeTab === f.BrowsePopularPage,
                        linkTo: "/directory/all",
                        "data-a-target": "browse-popular-tab"
                    }, Object(w.d)("Popular", "BrowseHeader")), b.createElement(W._19, {
                        key: f.BrowseCreativePage,
                        active: this.props.activeTab === f.BrowseCreativePage,
                        linkTo: "/directory/creative",
                        "data-a-target": "browse-creative-tab"
                    }, Object(w.d)("Creative", "BrowseHeader"))];
                    if (this.props.isLoggedIn && this.userDataLoaded() && this.props.data.currentUser && Object(re.i)(new Date(this.props.data.currentUser.createdAt)) && this.state.forYouAssignment) {
                        var t = b.createElement(W._19, {
                            key: f.BrowseForYouPage,
                            active: this.props.activeTab === f.BrowseForYouPage,
                            linkTo: "/directory/foryou",
                            "data-a-target": "browse-for-you-tab"
                        }, Object(w.d)("For You", "BrowseHeader"));
                        this.state.forYouAssignment === re.b.First ? e.unshift(t) : this.state.forYouAssignment === re.b.Last && e.push(t)
                    }
                    return b.createElement(W.U, {
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(W._20, null, e))
                }, t = k.__decorate([Object(E.c)("BrowseHeader"), Object(B.a)(oe, {
                    skip: function(e) {
                        return !e.firstPageLoaded
                    }
                })], t)
            }(b.Component),
            de = se,
            ce = Object(F.a)(r, null)(de),
            ue = n(928),
            me = n(131),
            pe = n(47);
        ! function(e) {
            e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory/games", e.GamesAndCommunities = "/directory", e.DirectoryCategory = "/directory/:category?", e.ForYou = "/directory/foryou", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularXbox = "/directory/all/xbox"
        }(le || (le = {}));
        var ge, he = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        switch (t.balloonWrapperRef.toggleBalloon(!1), e.currentTarget.getAttribute("data-filter-type")) {
                            case R.a.Channels:
                                w.n.history.push(le.Popular), t.props.changeBrowseType(R.a.Channels);
                                break;
                            case R.a.Communities:
                                w.n.history.push(le.Communities), t.props.changeBrowseType(R.a.Communities);
                                break;
                            case R.a.CreativeCommunities:
                                w.n.history.push(le.CreativeCommunities), t.props.changeBrowseType(R.a.CreativeCommunities);
                                break;
                            case R.a.Games:
                                w.n.history.push(le.GamesAndCommunities), t.props.changeBrowseType(R.a.Games);
                                break;
                            default:
                                w.n.history.push(le.GamesAndCommunities), t.props.changeBrowseType(R.a.GamesAndCommunities)
                        }
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    return b.createElement(W.U, {
                        display: W.H.Flex
                    }, b.createElement(W.U, {
                        display: W.H.InlineFlex
                    }, b.createElement(pe.a, {
                        ref: this.saveBalloonWrapperRef
                    }, b.createElement(W.u, {
                        type: W.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        dropdown: !0
                    }, o(this.props.browseType)), b.createElement(W.p, {
                        direction: W.q.Bottom,
                        noTail: !0
                    }, b.createElement(W.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem(R.a.GamesAndCommunities), this.renderFilterItem(R.a.Games), this.renderFilterItem(R.a.Communities), this.renderFilterItem(R.a.CreativeCommunities), this.renderFilterItem(R.a.Channels))))))
                }, t.prototype.renderFilterItem = function(e) {
                    return b.createElement(W.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-test-selector": e + "-selector",
                        selected: this.props.browseType === e
                    }, b.createElement(W.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, o(e)))
                }, t
            }(b.Component),
            ve = Object(F.a)(l, s)(he),
            fe = n(1259),
            ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    return b.createElement(W.U, {
                        display: W.H.Flex
                    }, b.createElement(W.U, {
                        display: W.H.InlineFlex
                    }, b.createElement(pe.a, {
                        ref: this.saveBalloonWrapperRef
                    }, b.createElement(W.u, {
                        type: W.z.Hollow,
                        "data-test-selector": "sort-dropdown-button",
                        dropdown: !0
                    }, d(this.props.sortBy)), b.createElement(W.p, {
                        direction: W.q.Bottom,
                        noTail: !0
                    }, b.createElement(W.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderSortItem(M.a.Relevancy), this.renderSortItem(M.a.Popularity))))))
                }, t.prototype.renderSortItem = function(e) {
                    var t = this,
                        n = function() {
                            t.balloonWrapperRef.toggleBalloon(!1), t.props.changeSortBy(e), Object(fe.b)("sortBy", e)
                        };
                    return b.createElement(W.S, {
                        onClick: n,
                        "data-test-selector": e + "-selector",
                        selected: this.props.sortBy === e
                    }, b.createElement(W.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, d(e)))
                }, t
            }(b.Component),
            ke = Object(F.a)(c, u)(ye),
            be = function(e) {
                return e === le.Popular || e === le.PopularEncodedLanguage || e === le.PopularPlaystation || e === le.PopularXbox
            },
            Se = n(4),
            we = (n(1703), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? w.n.history.push("/directory/all/") : w.n.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(w.d)("All Platforms", "PlatformFilter"),
                        n = Object(w.d)("Xbox One", "PlatformFilter"),
                        a = Object(w.d)("PlayStation 4", "PlatformFilter");
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
                    return b.createElement(W.U, {
                        display: W.H.Flex
                    }, b.createElement("div", null, b.createElement(W.U, {
                        display: W.H.InlineFlex
                    }, b.createElement(pe.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, b.createElement(W.u, {
                        type: W.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), b.createElement(W.p, {
                        direction: W.q.Bottom,
                        noTail: !0
                    }, b.createElement(W.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = Se("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return b.createElement(W.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, b.createElement(W.U, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(b.Component)),
            _e = {
                "/directory/all": "all",
                "/directory/all/:encodedLanguage": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            },
            Ne = "create-community-button",
            Ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSortOrStream = function() {
                        return be(t.props.match.path) ? Object(w.d)("Show me {filter} streaming from {platform}", {
                            filter: b.createElement(W.U, {
                                margin: {
                                    x: 1
                                }
                            }, b.createElement(ve, null)),
                            platform: b.createElement(W.U, {
                                margin: {
                                    x: 1
                                }
                            }, b.createElement(we, {
                                broadcastType: _e[decodeURIComponent(t.props.match.path)] || "all"
                            }))
                        }, "NewBrowseHeader") : Object(w.d)("Show me {filter} sorted by {sort}", {
                            filter: b.createElement(W.U, {
                                margin: {
                                    x: 1
                                }
                            }, b.createElement(ve, null)),
                            sort: b.createElement(W.U, {
                                margin: {
                                    x: 1
                                }
                            }, b.createElement(ke, null))
                        }, "NewBrowseHeader")
                    }, t.renderCreateCommunity = function() {
                        return t.props.location.pathname !== le.Communities ? null : b.createElement(W.u, {
                            type: W.z.Hollow,
                            linkTo: Object(me.a)("/communities/create"),
                            "data-test-selector": Ne
                        }, Object(w.d)("Create Community", "NewBrowseHeader"))
                    }, t.renderLanguageSelect = function() {
                        return be(t.props.match.path) ? b.createElement(ue.a, null) : null
                    }, t
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    return b.createElement(W._18, {
                        background: W.m.Base,
                        border: !0,
                        display: W.H.Flex,
                        flexDirection: W.J.Row,
                        margin: {
                            bottom: 2
                        },
                        padding: 2
                    }, b.createElement(W.U, {
                        display: W.H.Flex,
                        flexGrow: 1
                    }, b.createElement(W.U, {
                        display: W.H.Flex,
                        alignItems: W.c.Center
                    }, this.renderSortOrStream())), b.createElement(W.U, {
                        display: W.H.Flex,
                        flexGrow: 1,
                        justifyContent: W.T.End
                    }, b.createElement(W.U, {
                        display: W.H.Flex,
                        flexDirection: W.J.Row
                    }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                }, t
            }(b.Component),
            Ee = Object(P.f)(Ce),
            Fe = n(1298),
            Te = function() {
                return n.e(65).then(n.bind(null, 2073))
            },
            De = n(1704),
            Pe = n(1004),
            Oe = n(147),
            Ie = n(1301),
            Be = n(11),
            xe = n(1073),
            Ue = n(1058),
            Ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.impressionEventFired = !1, t.setRef = function(e) {
                        return t.element = e
                    }, t.isVisible = function(e) {
                        if (null !== t.element) {
                            var n = t.element.getBoundingClientRect();
                            return n.left < e.right && n.right > e.left
                        }
                        return !1
                    }, t.trackImpression = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: xe.a.Impression,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(xe.c)(e)
                    }, t.trackClickEvent = function() {
                        var e = {
                            channel: t.props.streamNode.title,
                            channel_id: t.props.streamNode.id,
                            action: xe.a.Click,
                            parent_game: t.props.streamNode.game ? t.props.streamNode.game.name : "",
                            content_index: t.props.streamIndex
                        };
                        Object(xe.c)(e)
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : w.i.warn("<StreamThumbnailWithTrackingComponent /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return b.createElement("div", {
                        onClick: this.trackClickEvent
                    }, b.createElement(W.U, {
                        refDelegate: this.setRef
                    }, b.createElement(Ue.b, {
                        key: this.props.streamIndex,
                        directoryName: this.props.directoryName,
                        directoryType: this.props.directoryType,
                        streamIndex: this.props.streamIndex,
                        streamNode: this.props.streamNode,
                        trackingMedium: this.props.trackingMedium
                    })))
                }, t.prototype.checkVisible = function(e) {
                    return k.__awaiter(this, void 0, void 0, function() {
                        return k.__generator(this, function(t) {
                            return !this.impressionEventFired && this.isVisible(e) && (this.trackImpression(), this.impressionEventFired = !0), [2]
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: Be.func
                }, t
            }(b.Component),
            Le = Ae,
            je = (n(1705), "community-streams-row__title"),
            Re = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderTitle = function() {
                        if (t.props.title) return b.createElement(W.U, {
                            className: "community-streams-row__title"
                        }, b.createElement(W._22, {
                            "data-test-selector": je,
                            color: W.F.Alt2,
                            fontSize: W.L.Size5,
                            transform: W._26.Uppercase
                        }, b.createElement(P.a, {
                            to: Object(U.c)(t.props.name)
                        }, t.props.title)))
                    }, t.renderCommunityStreams = function() {
                        return t.props.data.map(function(e, n) {
                            return b.createElement(W.U, {
                                key: "community-streams-row-stream-thumbnail-" + e.id,
                                position: W._3.Relative
                            }, b.createElement(W.U, {
                                padding: .5,
                                position: W._3.Absolute,
                                zIndex: W._39.Above
                            }, b.createElement(Pe.a, {
                                type: Oe.a.Live
                            })), b.createElement(Le, {
                                key: e.id,
                                trackingMedium: C.PageviewMedium.BrowseForYou,
                                directoryName: t.props.name,
                                directoryType: t.props.type,
                                streamIndex: n,
                                streamNode: e
                            }))
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.length) return null;
                    var e = 1 === this.props.data.length ? 1 : 0;
                    return b.createElement(W.U, {
                        "data-test-selector": "community-streams-row",
                        flexShrink: 0
                    }, b.createElement(W.U, {
                        alignItems: W.c.Center,
                        display: W.H.Flex,
                        flexWrap: W.K.NoWrap,
                        justifyContent: W.T.Between,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderTitle(), b.createElement(Ie.a, {
                        gameName: this.props.name,
                        src: C.PageviewMedium.BrowseForYou
                    })), b.createElement(I.b, null, b.createElement(W.U, {
                        display: W.H.Flex
                    }, b.createElement(W._34, {
                        gutterSize: W._36.Small,
                        childWidth: W._35.Large,
                        noWrap: !0,
                        placeholderItems: e
                    }, this.renderCommunityStreams()))))
                }, t = k.__decorate([Object(E.c)("CommunityStreamsRow")], t)
            }(b.Component),
            Ge = Re,
            Ve = n(1706),
            Me = 7,
            He = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getData = function() {
                        var e = t.rankedChannelStreamsInputPresent() && t.rankedChannelStreamsLoaded();
                        if (e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges) {
                            var n = t.props.rankedChannelData.users.filter(function(e) {
                                return e.stream && e.stream.id && e.stream.broadcaster && e.stream.broadcaster.login
                            }).map(function(e) {
                                return e.stream
                            }).slice(0, Me);
                            if (n.length === Me) return n;
                            var a = new Set(n.map(function(e) {
                                    return e.id
                                })),
                                i = t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                                    var t = e.node;
                                    return !a.has(t.id) && t.broadcaster && t.broadcaster.login
                                }).map(function(e) {
                                    return e.node
                                });
                            return n.concat(i.slice(0, Me - n.length))
                        }
                        return !e && t.communityStreamsLoaded() && t.props.communityStreamsData.directory.streams && t.props.communityStreamsData.directory.streams.edges ? t.props.communityStreamsData.directory.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(e) {
                            return e.node
                        }) : []
                    }, t.communityStreamsLoaded = function() {
                        return t.props.communityStreamsData && !t.props.communityStreamsData.loading && !t.props.communityStreamsData.error && t.props.communityStreamsData.directory
                    }, t.rankedChannelStreamsInputPresent = function() {
                        return !!t.props.channelLogins && !!t.props.channelLogins.length
                    }, t.rankedChannelStreamsLoaded = function() {
                        return t.props.rankedChannelData && !t.props.rankedChannelData.loading && !t.props.rankedChannelData.error && t.props.rankedChannelData.users
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    (this.rankedChannelStreamsInputPresent() && this.rankedChannelStreamsLoaded() || !this.rankedChannelStreamsInputPresent() && !this.rankedChannelStreamsLoaded()) && this.communityStreamsLoaded() && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return b.createElement(Ge, {
                        name: this.props.name,
                        title: this.props.title,
                        type: this.props.type,
                        data: this.getData()
                    })
                }, t = k.__decorate([Object(B.a)(De, {
                    name: "communityStreamsData",
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.name,
                                limit: Me,
                                type: e.type
                            }
                        }
                    }
                }), Object(B.a)(Ve, {
                    name: "rankedChannelData",
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                logins: e.channelLogins
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogins || !e.channelLogins.length
                    }
                }), Object(E.c)("CommunityStreamsRowContainer")], t)
            }(b.Component),
            We = He,
            ze = (n(1707), n(1708)),
            qe = "browse-for-you__empty",
            $e = "browse-for-you__add_more_games",
            Ye = 10,
            Qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        rankedChannelData: {},
                        loadingRankedChannelData: !1
                    }, t.logger = w.n.logger.withCategory("browse-for-you"), t.loadedChannelRankingsData = !1, t.renderPage = function() {
                        return t.userFollowedGamesDataLoaded(t.props) ? t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length ? b.createElement(W.U, null, t.renderFollowedCommunityStreams(), b.createElement(W.U, {
                            margin: {
                                top: .5
                            }
                        }, t.renderAddMoreGamesCTA())) : t.renderEmptyFollowedState() : b.createElement(W.U, null, b.createElement(W.Y, {
                            fillContent: !0
                        }))
                    }, t.userFollowedGamesDataLoaded = function(e) {
                        return e.data && !e.data.loading && !e.data.error && e.data.currentUser
                    }, t.renderFollowedCommunityStreams = function() {
                        if (t.props.data.currentUser.followedGames && t.props.data.currentUser.followedGames.nodes && t.props.data.currentUser.followedGames.nodes.length) return t.props.data.currentUser.followedGames.nodes.map(function(e) {
                            return b.createElement(W.U, {
                                key: e.id
                            }, b.createElement(We, {
                                key: e.id,
                                title: Object(w.d)("BECAUSE YOU FOLLOW {name}", {
                                    name: e.name.toUpperCase()
                                }, "BrowseForYouPage"),
                                name: e.name,
                                type: e.directoryType,
                                channelLogins: t.state.rankedChannelData[e.id]
                            }))
                        })
                    }, t.renderAddMoreGamesCTA = function() {
                        if (!t.props.data.currentUser.followedGames || !t.props.data.currentUser.followedGames.nodes || t.props.data.currentUser.followedGames.nodes.length < Ye) return b.createElement(W.S, {
                            "data-test-selector": $e,
                            onClick: t.redirectToCommunitySelectionPage,
                            alpha: !0
                        }, b.createElement(W._18, {
                            alignItems: W.c.Center,
                            border: !0,
                            display: W.H.Flex,
                            justifyContent: W.T.Center,
                            padding: 2
                        }, b.createElement(W.U, {
                            alignItems: W.c.Center,
                            display: W.H.Flex,
                            margin: {
                                right: 1
                            }
                        }, b.createElement(W._9, {
                            asset: W._10.Plus,
                            type: W._11.Alt2
                        })), b.createElement(W._22, {
                            fontSize: W.L.Size5,
                            color: W.F.Alt2
                        }, Object(w.d)("Add More Games", "BrowseForYouPage"))))
                    }, t.renderEmptyFollowedState = function() {
                        return b.createElement(W._18, {
                            background: W.m.Base,
                            display: W.H.Flex,
                            flexDirection: W.J.Column,
                            margin: {
                                bottom: 1
                            },
                            alignItems: W.c.Center,
                            "data-test-selector": qe,
                            className: "browse-for-you__empty"
                        }, b.createElement(Fe.a, {
                            onContinue: t.refetchFollowedData
                        }))
                    }, t.redirectToDirectory = function() {
                        w.n.history.push("/directory" + location.search)
                    }, t.redirectToCommunitySelectionPage = function() {
                        window.location.assign("/hi" + location.search)
                    }, t.refetchFollowedData = function() {
                        return k.__awaiter(t, void 0, void 0, function() {
                            return k.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.props.data.refetch()];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    }, t.loadChannelRankingsByGameData = function() {
                        return k.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return k.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.loadedChannelRankingsData) return [3, 4];
                                        this.loadedChannelRankingsData = !0, this.setState({
                                            loadingRankedChannelData: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Te()];
                                    case 2:
                                        return e = n.sent(), this.setState({
                                            rankedChannelData: e,
                                            loadingRankedChannelData: !1
                                        }), [3, 4];
                                    case 3:
                                        return t = n.sent(), this.logger.error(t, "failed to load channel ranking data"), this.setState({
                                            loadingRankedChannelData: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    return k.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return k.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return w.n.setPageTitle(Object(w.d)("For You", "BrowseForYouPage")), this.props.isLoggedIn ? [3, 1] : (this.redirectToDirectory(), [3, 7]);
                                case 1:
                                    return [4, w.n.experiments.getAssignment(re.d)];
                                case 2:
                                    return e = a.sent(), [4, w.n.experiments.getAssignment(re.e)];
                                case 3:
                                    return t = a.sent(), Object(re.h)(e, t) ? [3, 4] : (this.redirectToDirectory(), [3, 7]);
                                case 4:
                                    return [4, w.n.experiments.getAssignment(re.c)];
                                case 5:
                                    return n = a.sent(), Object(re.f)(e, t, n) ? [4, this.loadChannelRankingsByGameData()] : [3, 7];
                                case 6:
                                    a.sent(), a.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.userFollowedGamesDataLoaded(e) && !Object(re.i)(new Date(e.data.currentUser.createdAt)) && this.redirectToDirectory()
                }, t.prototype.componentDidUpdate = function() {
                    this.userFollowedGamesDataLoaded(this.props) && !this.state.loadingRankedChannelData && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return b.createElement(I.b, null, b.createElement(W.U, {
                        className: "browse-for-you-page",
                        padding: 3,
                        fullWidth: !0
                    }, b.createElement(ce, {
                        activeTab: f.BrowseForYouPage
                    }), this.props.isLoggedIn && this.renderPage()))
                }, t = k.__decorate([Object(E.c)("DirectoryPage", {
                    destination: N.a.BrowseForYou
                }), Object(B.a)(ze, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: Ye
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn
                    }
                }), Object(_.a)({
                    location: C.PageviewLocation.BrowseForYou
                })], t)
            }(b.Component),
            Je = Qe,
            Xe = Object(F.a)(m)(Je),
            Ke = n(22),
            Ze = n(926),
            et = n(383),
            tt = n(48),
            nt = n(1011),
            at = n(1027),
            it = n(1012),
            rt = n(1075),
            ot = n(1709),
            lt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return k.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                    var e, t = Object(w.d)("Channels in English", "PopularInternationalSection"),
                        n = this.props.data.streams.edges || [],
                        a = this.props.directoryWidth;
                    if (a && a > 0) {
                        var i = Object(it.a)(a, 240, 2);
                        i < n.length && (n = n.slice(0, i - 1), e = b.createElement(at.a, {
                            subHeader: t,
                            linkTo: {
                                pathname: "/directory/all/" + this.props.languageCode,
                                state: {
                                    medium: C.PageviewMedium.Browse,
                                    content: C.PageviewContent.Popular
                                }
                            }
                        }))
                    }
                    var r = n.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login
                    }).map(function(e, t) {
                        var n = e.node;
                        return n.broadcaster ? b.createElement(W.U, {
                            key: n.id,
                            margin: {
                                bottom: 2
                            }
                        }, b.createElement(Ze.a, {
                            linkTo: {
                                pathname: "/" + n.broadcaster.login,
                                state: {
                                    content: C.PageviewContent.Popular,
                                    content_index: t,
                                    medium: C.PageviewMedium.Browse
                                }
                            },
                            title: n.title || nt.a,
                            imageAlt: n.broadcaster.login + " cover image",
                            imageSrc: n.previewImageURL || w.a.defaultStreamPreviewURL,
                            viewerCount: n.viewersCount || 0,
                            channelName: Object(tt.a)(n.broadcaster.login, n.broadcaster.displayName, !0),
                            gameImageSrc: n.game && n.game.boxArtURL || w.a.defaultBoxArtURL,
                            gameTitle: n.game && n.game.name || "",
                            gameLinkTo: {
                                pathname: Object(U.c)(n.game && n.game.name || ""),
                                state: {
                                    medium: C.PageviewMedium.Browse,
                                    content: C.PageviewContent.Popular,
                                    content_index: t
                                }
                            },
                            channelNameLinkTo: {
                                pathname: "/" + n.broadcaster.login + "/videos",
                                state: {
                                    medium: C.PageviewMedium.Browse,
                                    content: C.PageviewContent.Popular,
                                    content_index: t
                                }
                            }
                        })) : null
                    });
                    return b.createElement("div", null, b.createElement(rt.a, {
                        languageCode: this.props.languageCode
                    }), b.createElement(W._34, {
                        gutterSize: W._36.Small,
                        childWidth: W._35.Medium,
                        placeholderItems: 20
                    }, r, e))
                }, t = k.__decorate([Object(B.a)(ot, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                languages: [e.languageCode],
                                platformType: e.platformType
                            }
                        }
                    }
                }), Object(E.c)("PopularInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(b.Component),
            st = lt,
            dt = n(1710),
            ct = "directory-first-item",
            ut = "directory-container",
            mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0,
                        directoryWidth: -1
                    }, t.onResize = function(e) {
                        t.setState({
                            directoryWidth: e
                        })
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + ut + '"]'),
                            t = document.querySelector('[data-target="' + ct + '"]'),
                            n = document.querySelector("#" + j.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(j.b.directory).length && A.a.display(j.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentWillMount = function() {
                    j.g.addListener(j.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    w.n.setPageTitle(Object(w.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), j.g.removeListener(j.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return b.createElement(W.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return b.createElement(O.a, {
                        message: Object(w.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = null,
                        t = null;
                    "en" !== this.props.languageCode && (t = b.createElement(W.U, {
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(W._22, {
                        type: W._27.H4,
                        color: W.F.Alt2,
                        fontSize: W.L.Size5,
                        transform: W._26.Uppercase
                    }, Object(w.d)("All Channels", "PopularInternationalSection"))), e = b.createElement(st, {
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode,
                        platformType: _e[decodeURIComponent(this.props.match.path)] || "all"
                    }));
                    var n = C.PageviewMedium.Browse,
                        a = this.props.data.streams.edges.map(function(e, t) {
                            var a = e.node;
                            return a.broadcaster.id ? b.createElement("div", {
                                key: a.id,
                                "data-target": t ? "" : ct,
                                style: {
                                    order: t
                                }
                            }, b.createElement(W.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, b.createElement(Ze.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: C.PageviewContent.Live,
                                        content_index: t,
                                        medium: n
                                    }
                                },
                                title: a.title || nt.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(tt.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || w.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(U.c)(a.game && a.game.name || ""),
                                    state: {
                                        medium: n,
                                        content: C.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                "data-a-target": "card-" + t,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: n,
                                        content: C.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                streamType: a.type
                            }))) : null
                        }),
                        i = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return b.createElement(W.U, {
                        flexShrink: 0,
                        "data-target": ut
                    }, e, t, b.createElement(W._34, {
                        gutterSize: W._36.Small,
                        childWidth: W._35.Large,
                        placeholderItems: 20
                    }, b.createElement(L.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: j.d.directory,
                        slotID: j.b.directory.rectangle,
                        adSize: j.c.directory.rectangle,
                        targeting: {
                            pagetype: j.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), a), b.createElement(I.a, {
                        enabled: i,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    }), b.createElement(et.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = k.__decorate([Object(B.a)(dt, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: _e[decodeURIComponent(e.match.path)] || "all",
                                languages: e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return k.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    i = t.streams;
                                return n({
                                    query: dt,
                                    variables: k.__assign({}, a, {
                                        cursor: i.edges[i.edges.length - 5].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            streams: k.__assign({}, a.streams, {
                                                edges: Object(x.b)(e.streams.edges, a.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularPage", {
                    destination: N.a.DirectoryPopular
                }), Object(_.a)({
                    location: C.PageviewLocation.DirectoryPopular
                })], t)
            }(b.Component),
            pt = mt,
            gt = Object(F.a)(p, g)(pt),
            ht = n(1037),
            vt = n(1711),
            ft = "directory-container",
            yt = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + ft + '"]'),
                            t = document.querySelector('[data-target="' + Ue.a + '"]'),
                            n = document.querySelector("#" + j.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(j.b.directory).length && A.a.display(j.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        directoryType: Object(ht.a)(t.match.path),
                        numSlotsCreated: 0
                    }, n
                }
                return k.__extends(t, e), t.prototype.componentWillMount = function() {
                    j.g.addListener(j.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    j.g.removeListener(j.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return b.createElement(W.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return b.createElement(O.a, {
                        message: Object(w.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return b.createElement(O.a, {
                        message: Object(w.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                    });
                    var e, t = C.PageviewMedium.Browse,
                        n = this.props.data.streams.edges.filter(function(e) {
                            var t = e.node;
                            return t.broadcaster && t.broadcaster.login
                        }).map(function(e, n) {
                            var a = e.node;
                            return b.createElement("div", {
                                key: a.id,
                                "data-target": n ? "" : Ue.a,
                                style: {
                                    order: n
                                }
                            }, b.createElement(W.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card-container"
                            }, b.createElement(Ze.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: C.PageviewContent.Live,
                                        content_index: n,
                                        medium: t
                                    }
                                },
                                title: a.title || nt.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(tt.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || w.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(U.c)(a.game && a.game.name || ""),
                                    state: {
                                        medium: t,
                                        content: C.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                "data-a-target": "card-" + n,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: t,
                                        content: C.PageviewContent.Live,
                                        content_index: n
                                    }
                                },
                                streamType: a.type
                            })))
                        });
                    if (n.length > 0) {
                        var a = W._35.Large,
                            i = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = b.createElement(W.U, {
                            flexShrink: 0,
                            "data-target": ft
                        }, b.createElement(W._34, {
                            gutterSize: W._36.Small,
                            childWidth: a,
                            placeholderItems: 20
                        }, b.createElement(L.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: j.d.directory,
                            slotID: j.b.directory.rectangle,
                            adSize: j.c.directory.rectangle,
                            targeting: {
                                pagetype: j.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), n), b.createElement(I.a, {
                            enabled: i,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var r = Object(w.d)("There are currently no channels streaming to this community", "PopularDirectoryByLanguagePage");
                        this.state.directoryType === G.a.Games && (r = Object(w.d)("No live channels for this game", "PopularDirectoryByLanguagePage")), e = b.createElement(W.U, {
                            display: W.H.Flex,
                            alignItems: W.c.Center,
                            justifyContent: W.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, b.createElement(W._22, {
                            color: W.F.Alt2,
                            fontSize: W.L.Size4,
                            italic: !0
                        }, r))
                    }
                    return b.createElement(W.U, {
                        margin: {
                            bottom: 2
                        },
                        display: W.H.Flex,
                        flexDirection: W.J.Row
                    }, b.createElement(L.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: j.d.directory,
                        slotID: j.b.directory.banner,
                        adSize: j.c.directory.banner,
                        targeting: {
                            pagetype: j.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), b.createElement(rt.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = k.__decorate([Object(B.a)(vt, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage]
                            }
                        }
                    },
                    props: function(e) {
                        return k.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: vt,
                                    variables: k.__assign({}, e.data.variables, {
                                        cursor: e.data.streams.edges[e.data.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult,
                                            a = n;
                                        return {
                                            streams: k.__assign({}, a.streams, {
                                                edges: Object(x.b)(e.streams.edges, a.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(E.c)("DirectoryPopularByLanguagePage", {
                    destination: N.a.DirectoryPopularByLanguage
                }), Object(_.a)({
                    location: C.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                })], t)
            }(b.Component),
            kt = yt,
            bt = (ge = {}, ge[le.ForYou] = f.BrowseForYouPage, ge[le.DirectoryCategory] = f.BrowseGamePage, ge[le.Communities] = f.BrowseCommunitiesPage, ge[le.Popular] = f.BrowsePopularPage, ge[le.PopularXbox] = f.BrowsePopularPage, ge[le.PopularPlaystation] = f.BrowsePopularPage, ge[le.PopularEncodedLanguage] = f.BrowsePopularPage, ge[le.CreativeCommunities] = f.BrowseCreativePage, ge),
            St = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasViewedGamesPage: !1,
                        newBrowseExperimentType: "control"
                    }, t
                }
                return k.__extends(t, e), t.prototype.componentDidMount = function() {
                    return k.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return k.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, w.n.experiments.getAssignment("TWILIGHT_NEW_BROWSE")];
                                case 1:
                                    if (e = t.sent(), this.setState({
                                            newBrowseExperimentType: e || "control"
                                        }), this.props.match.path === le.DirectoryCategory) {
                                        switch (this.state.newBrowseExperimentType) {
                                            case "variant1":
                                                this.props.changeBrowseType(R.a.GamesAndCommunities), this.props.changeSortBy(M.a.Relevancy);
                                                break;
                                            case "variant2":
                                                this.props.changeBrowseType(R.a.GamesAndCommunities), this.props.changeSortBy(M.a.Popularity);
                                                break;
                                            case "variant3":
                                                this.props.changeSortBy(M.a.Relevancy), this.props.changeBrowseType(R.a.Games);
                                                break;
                                            case "variant4":
                                            default:
                                                this.props.changeSortBy(M.a.Popularity), this.props.changeBrowseType(R.a.Games)
                                        }
                                        this.setCorrectPageTitle(this.props.browseType)
                                    } else this.setBrowseType(this.props.match.path);
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.hasViewedGamesPage || this.props.match.path !== le.Games || this.setState({
                        hasViewedGamesPage: !0
                    }), this.setBrowseType(e.match.path), this.setCorrectPageTitle(e.browseType)
                }, t.prototype.render = function() {
                    return b.createElement(W.U, {
                        padding: 3
                    }, b.createElement(L.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: j.d.directory,
                        slotID: j.b.directory.banner,
                        adSize: j.c.directory.banner,
                        targeting: {
                            pagetype: j.a.games
                        },
                        autoEnable: !1
                    }), this.renderBrowseHeader(), b.createElement(Ke.d, null, b.createElement(Ke.b, {
                        path: le.Communities,
                        component: K
                    }), b.createElement(Ke.b, {
                        path: le.CreativeCommunities,
                        component: te
                    }), b.createElement(Ke.b, {
                        path: le.PopularPlaystation,
                        component: gt
                    }), b.createElement(Ke.b, {
                        path: le.PopularXbox,
                        component: gt
                    }), b.createElement(Ke.b, {
                        path: le.PopularEncodedLanguage,
                        component: kt
                    }), b.createElement(Ke.b, {
                        path: le.Popular,
                        component: gt
                    }), b.createElement(Ke.b, {
                        path: le.DirectoryCategory,
                        component: ae
                    })))
                }, t.prototype.renderBrowseHeader = function() {
                    return "control" === this.state.newBrowseExperimentType ? b.createElement(W.U, null, b.createElement(ce, {
                        activeTab: bt[decodeURIComponent(this.props.match.path)]
                    }), this.renderCreateCommunityButton(), this.renderPopularPageFilters()) : b.createElement(Ee, null)
                }, t.prototype.renderCreateCommunityButton = function() {
                    if (bt[decodeURIComponent(this.props.match.path)] === f.BrowseCommunitiesPage) return b.createElement(W.U, {
                        display: W.H.Flex,
                        justifyContent: W.T.End,
                        margin: {
                            bottom: 2
                        }
                    }, b.createElement(W.u, {
                        linkTo: Object(me.a)("/communities/create"),
                        "data-test-selector": "create-community-button-test"
                    }, Object(w.d)("Create a Community", "BrowseDirectory")))
                }, t.prototype.renderPopularPageFilters = function() {
                    if (bt[decodeURIComponent(this.props.match.path)] === f.BrowsePopularPage) return b.createElement(W.U, {
                        margin: {
                            bottom: 2
                        },
                        display: W.H.Flex,
                        flexDirection: W.J.Row
                    }, b.createElement(we, {
                        broadcastType: _e[decodeURIComponent(this.props.match.path)] || "all"
                    }), b.createElement(W.U, {
                        padding: {
                            x: 1
                        }
                    }, b.createElement(ue.a, null)))
                }, t.prototype.setCorrectPageTitle = function(e) {
                    e === R.a.GamesAndCommunities ? w.n.setPageTitle(Object(w.d)("Games and Communities", "BrowseGamesAndCommunitiesPage")) : e === R.a.Games && w.n.setPageTitle(Object(w.d)("All Games", "BrowseGamePage"))
                }, t.prototype.setBrowseType = function(e) {
                    "control" === this.state.newBrowseExperimentType && e === le.DirectoryCategory && this.props.changeBrowseType(R.a.Games), e === le.Communities && this.props.changeBrowseType(R.a.Communities), e === le.CreativeCommunities && this.props.changeBrowseType(R.a.CreativeCommunities), be(e) && this.props.changeBrowseType(R.a.Channels)
                }, t
            }(b.Component),
            wt = Object(F.a)(h, v)(St);
        n.d(t, "BrowseCommunitiesPage", function() {
            return K
        }), n.d(t, "BrowseCreativePage", function() {
            return te
        }), n.d(t, "BrowseGamesAndCommunitiesPage", function() {
            return ae
        }), n.d(t, "BrowseForYouPage", function() {
            return Xe
        }), n.d(t, "BrowseRootPage", function() {
            return wt
        })
    },
    266: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(21),
            r = n(1),
            o = n(2),
            l = n(15),
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
                                    var a = "" !== e.search ? i.parse(e.search) : {};
                                    a["from-redirect"] = "true";
                                    var r = i.stringify(a),
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : void n.logger.debug("Unable to process history change. Path is null or empty.") : void n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? i.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var a = i.stringify(t),
                                    r = "";
                                a.length > 0 && (r = "?" + a), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var i = a[n];
                        try {
                            var r = new RegExp(i, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: i,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component),
            c = d;
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
    384: function(e, t, n) {
        "use strict";

        function a(e) {
            p.emit(u, e)
        }

        function i(e) {
            p.emit(m, e)
        }
        n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return s
        }), n.d(t, "d", function() {
            return d
        }), n.d(t, "a", function() {
            return c
        }), n.d(t, "f", function() {
            return u
        }), n.d(t, "e", function() {
            return m
        }), n.d(t, "g", function() {
            return p
        }), t.i = a, t.h = i;
        var r = n(25),
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
            d = {
                directory: "/" + o.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + o.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + o.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + o.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            c = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            u = "ads.slot-render-end",
            m = "ads.slot-ready",
            p = new r.EventEmitter
    },
    821: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
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
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = a.referenceTracking,
                                    o = r.content,
                                    l = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(i.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return i.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, i.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? r.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                i = r.stringify(t);
                            i.length > 0 && (a = "?" + i), this.props.history.replace({
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
        var i = n(0),
            r = n(21),
            o = n(1),
            l = n(10),
            s = n(2);
        n.d(t, "a", function() {
            return a
        })
    },
    874: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }

        function i() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return o.slice().sort(function(e, n) {
                var a = t(e),
                    i = t(n);
                return a !== i ? a - i : a + ":" + e.label < i + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        }
        n.d(t, "a", function() {
            return l
        }), t.b = i;
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
            l = new Set(o.concat(a()).map(function(e) {
                return e.code
            }))
    },
    885: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                trackingSet: e.ads.trackingSet
            }
        }
        var i = n(6),
            r = n(0),
            o = n(1),
            l = n(2),
            s = n(114),
            d = n(384),
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            u = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = l.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t, n;
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, s.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = a.sent(), Object(d.h)(t.getSlotElementId()), this.setState({
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
                            if (n.props.slotID === d.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === d.b.directory.banner) {
                                var a = n.slotRef.querySelector(c);
                                return void(a && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === d.b.directory.rectangle) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.g.addListener(d.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), d.g.removeListener(d.f, this.onSlotRenderEnd), this.state.slot && s.a.destroySlot(this.state.slot)
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
            g = Object(i.a)(a)(p);
        n.d(t, "a", function() {
            return g
        })
    },
    908: function(e, t, n) {
        "use strict";

        function a(e, t) {
            var n = this;
            return function(a) {
                return o.__awaiter(n, void 0, void 0, function() {
                    var n, i;
                    return o.__generator(this, function(o) {
                        return n = new Set(r()), t ? n.add(e) : n.delete(e), i = Array.from(n), l.k.set(c, i), a(Object(d.b)(i)), [2]
                    })
                })
            }
        }

        function i() {
            var e = this;
            return function(t) {
                return o.__awaiter(e, void 0, void 0, function() {
                    return o.__generator(this, function(e) {
                        return l.k.set(c, []), t(Object(d.b)([])), [2]
                    })
                })
            }
        }

        function r() {
            return l.k.get(c, []).filter(function(e) {
                return s.a.has(e)
            })
        }
        t.c = a, t.a = i, t.b = r;
        var o = n(0),
            l = n(2),
            s = n(874),
            d = n(909),
            c = "languageDirectoryFilters"
    },
    909: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                type: i,
                languagePreferences: e
            }
        }
        n.d(t, "a", function() {
            return i
        }), t.b = a;
        var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    926: function(e, t, n) {
        "use strict";
        var a = n(0),
            i = n(1),
            r = n(10),
            o = n(2),
            l = n(1004),
            s = n(3),
            d = (n(1035), function(e) {
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
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = i.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, i.createElement(s._0, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: i.createElement(r.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return i.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(s._40)(this.props)), i.createElement(s.A, {
                        key: this.props.title
                    }, i.createElement(s.U, {
                        fullWidth: !0
                    }, i.createElement(s.j, {
                        overflow: !0
                    }, i.createElement("div", null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, i.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), i.createElement(s.B, null, i.createElement(r.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, i.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, i.createElement(s._22, {
                        type: s._27.H3,
                        fontSize: s.L.Size5,
                        lineHeight: s.V.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), i.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, i.createElement(s._22, {
                        type: s._27.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? i.createElement(r.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, i.createElement(s._18, {
                        className: "live-channel-card__boxart",
                        position: s._3.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, i.createElement(s._31, {
                        display: s.H.Block,
                        direction: s._33.Bottom,
                        label: t
                    }, i.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? i.createElement(s.U, {
                        position: s._3.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, i.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(i.Component)),
            c = d;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return c
        })
    },
    927: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    928: function(e, t, n) {
        "use strict";

        function a(e) {
            return {
                languagePreferences: Object(s.a)(e)
            }
        }

        function i(e) {
            return Object(o.bindActionCreators)({
                updateLanguagePreferences: l.c,
                clearLanguagePreferences: l.a
            }, e)
        }
        var r = n(6),
            o = n(9),
            l = n(908),
            s = n(929),
            d = n(0),
            c = n(1),
            u = n(2),
            m = n(28),
            p = n(47),
            g = n(874),
            h = n(5),
            v = n(3),
            f = (n(1010), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return c.createElement(v.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, c.createElement(v.E, {
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
                    return c.createElement(v.U, {
                        className: "language-select-menu"
                    }, c.createElement(p.a, null, c.createElement(v.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: v.z.Hollow
                    }, c.createElement(v.U, {
                        display: v.H.Flex
                    }, Object(u.d)("Language", "LanguageSelectMenu"), c.createElement(v.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && c.createElement(v._0, {
                        type: v._1.Brand,
                        label: e.toString()
                    })))), c.createElement(v.p, {
                        direction: v.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, c.createElement(m.b, {
                        className: "language-select-menu__balloon"
                    }, c.createElement(v.U, {
                        padding: .5
                    }, Object(g.b)().map(this.renderLanguageOption))), c.createElement(v._18, {
                        background: v.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, c.createElement(v.u, {
                        type: v.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(u.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = d.__decorate([Object(h.c)("LanguageSelectMenu")], t)
            }(c.Component)),
            y = f,
            k = Object(r.a)(a, i)(y);
        n.d(t, "a", function() {
            return k
        })
    },
    929: function(e, t, n) {
        "use strict";

        function a() {
            return {
                languagePreferences: Object(d.b)()
            }
        }

        function i(e, t) {
            switch (void 0 === e && (e = a()), t.type) {
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
            s = n(909),
            d = n(908);
        l.n.store.registerReducer("userPreferences", i)
    },
    931: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games", e.GamesAndCommunities = "games-and-communities"
        }(a || (a = {}))
    }
});
//# sourceMappingURL=pages.browse-for-you-83a21c85345956db594b4aad3528ff28.js.map