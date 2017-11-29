webpackJsonp([56], {
    1889: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserPage_User"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 82
            }
        };
        n.loc.source = {
            body: "query ReportUserPage_User($login: String!) {\n  user(login: $login) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2043: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                isLoggedIn: Object(c.d)(e),
                currentUser: Object(c.c)(e)
            }
        }

        function i(e) {
            return Object(a.bindActionCreators)({
                login: function() {
                    return Object(l.f)(s.a.ReportChannel)
                }
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(8),
            a = n(10),
            s = n(50),
            l = n(34),
            c = n(18),
            u = n(0),
            d = n(20),
            p = n(1),
            m = n(2),
            h = n(7),
            b = n(5),
            f = n(762),
            y = n(770),
            g = n(759),
            v = n(3),
            k = n(1889),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.getReportingContext = function() {
                        var e = d.parse(t.props.location.search);
                        return {
                            contentType: e.contentType ? e.contentType : g.a.User,
                            contentID: e.contentId,
                            targetUserID: t.props.userToReportData.user.id
                        }
                    }, t.handleReportUserClose = function(e) {
                        e !== f.b.MutationError && e !== f.b.Success || t.props.history.push("/")
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), this.props.isLoggedIn || this.props.login()
                }, t.prototype.render = function() {
                    return p.createElement(v.U, {
                        "data-test-selector": "report-user-page",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column,
                        fullHeight: !0,
                        padding: 3
                    }, this.renderPage())
                }, t.prototype.renderPage = function() {
                    return this.props.isLoggedIn ? this.props.userToReportData.error ? p.createElement(v.U, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(v._21, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("There was an unexpected error. Please refresh the page and try again", "ReportUserPage"))) : this.props.userToReportData && !this.props.userToReportData.loading && this.props.userToReportData.user ? p.createElement(y.a, {
                        onClose: this.handleReportUserClose,
                        reportContext: this.getReportingContext(),
                        title: Object(m.d)("Report {channelName}", {
                            channelName: this.props.match.params.channelName
                        }, "ReportUserPage")
                    }) : p.createElement(v._1, {
                        lineCount: 3
                    }) : p.createElement(v.U, {
                        "data-test-selector": "report-user-page__logged-out",
                        alignItems: v.c.Center,
                        display: v.H.Flex,
                        flexDirection: v.J.Column
                    }, p.createElement(v.U, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(v._21, {
                        fontSize: v.L.Size5
                    }, Object(m.d)("You must be logged in to report {channelName}. Please log in to complete.", {
                        channelName: this.props.match.params.channelName
                    }, "ReportUserPage"))), p.createElement(v.u, {
                        onClick: this.props.login
                    }, Object(m.d)("Log in", "ReportUserPage")))
                }, t = u.__decorate([Object(h.a)(k, {
                    name: "userToReportData",
                    options: function(e) {
                        return {
                            variables: {
                                login: e.match.params.channelName
                            }
                        }
                    }
                }), Object(b.c)("ReportUserPage", {
                    autoReportInteractive: !0,
                    destination: "reportUser.page"
                })], t)
            }(p.Component),
            R = C,
            S = Object(o.a)(r, i)(R);
        n.d(t, "ReportUserPage", function() {
            return S
        })
    },
    759: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(r || (r = {}))
    },
    762: function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(4),
            o = n(1),
            a = n(10),
            s = n(2),
            l = n(7),
            c = n(5),
            u = n(768),
            d = n(3),
            p = n(786),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [o.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : Object(u.b)(this.props.data.reportReasons).map(function(e) {
                        return o.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), o.createElement(d.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(d.M, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, o.createElement(d._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, o.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = r.__decorate([Object(c.c)("ReportReasonSelect")], t)
            }(o.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            b = (n(787), n(788));
        n.d(t, "a", function() {
            return y
        }), n.d(t, "b", function() {
            return f
        }), n.d(t, "c", function() {
            return v
        });
        var f, y = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(f || (f = {}));
        var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: o.createElement("br", null),
                        tosLink: o.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(f.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === y ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === f.Success ? o.createElement("div", null, o.createElement(d.u, {
                        onClick: this.props.onClose
                    }, o.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : o.createElement("div", null, o.createElement(d.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(d._21, {
                        type: d._26.H4
                    }, this.props.title), o.createElement(d._17, {
                        color: d.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), o.createElement("form", null, o.createElement(d._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, o.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), o.createElement(d.M, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, o.createElement(d._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), o.createElement(d._17, {
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, o.createElement(d.u, {
                        onClick: this.handleSubmit
                    }, o.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return o.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return o.createElement(d.U, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(d.M, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, o.createElement(d._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case f.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case f.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case f.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = i({
                        "reporting__error-container": this.props.submitStatus !== f.Success,
                        "reporting__success-container": this.props.submitStatus === f.Success
                    });
                    return o.createElement(d._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== f.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(o.Component),
            v = Object(a.compose)(Object(l.a)(b, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(g)
    },
    768: function(e, t, n) {
        "use strict";

        function r(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return a().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return a()
        }
        var i = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            o = n(2),
            a = function() {
                return [{
                    localized: Object(o.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(o.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(o.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(o.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(o.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(o.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(o.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(o.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(o.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(o.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(o.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(o.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(o.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(o.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(o.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(o.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(o.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(o.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(o.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(o.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        })
    },
    770: function(e, t, n) {
        "use strict";

        function r(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return k
        });
        var i = n(0),
            o = n(1),
            a = (n.n(o), n(8)),
            s = n(10),
            l = n(2),
            c = n(7),
            u = n(22),
            d = n(13),
            p = n(5),
            m = n(762),
            h = n(759),
            b = n(768),
            f = n(762),
            y = n(789),
            g = (n.n(y), n(790)),
            v = (n.n(g), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: f.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, r, o) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, a, t, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: r || "",
                                            reason: n
                                        }, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(u.a)(t))];
                                    case 2:
                                        return i.sent(), l.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: r,
                                            name: o,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: f.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return a = i.sent(), l.i.error(a, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: f.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(b.a)(this.props.reportContext.extra, n)), i.label = 6;
                                    case 6:
                                        return i.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(u.a)(t))];
                                    case 7:
                                        return i.sent(), this.props.reportContext.contentType === h.a.Community && l.n.tracking.track(d.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: f.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return s = i.sent(), l.i.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: f.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return o.createElement(f.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(o.Component)),
            k = Object(s.compose)(Object(c.a)(y, {
                name: "reportUserInCommunity"
            }), Object(c.a)(g, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(a.a)(r, null))(v)
    },
    786: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
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
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
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
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    787: function(e, t) {},
    788: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
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
                                    value: "directories"
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
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    789: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
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
                            value: "reportUserInCommunity"
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
                                    value: "user"
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
                end: 157
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    790: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
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
                            value: "reportContent"
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
                                    value: "contentID"
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
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.report-user-page-1965cd537bab0492bc6c512b7f01a734.js.map