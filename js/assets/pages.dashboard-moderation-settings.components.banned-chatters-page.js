(window.webpackJsonp = window.webpackJsonp || []).push([
    [150], {
        "0l36": function(e, n, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "BanUserFromChatRoom"
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "ban"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "BannedUserStatus"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
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
                    end: 275
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/settings/components/settings-channel-page/components/banned-chatters/banned-user-status-fragment.gql"\nmutation BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\n...BannedUserStatus\n}\nerror {\ncode\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !r[n] && (r[n] = !0, !0)
                })
            }(t("YWuw").definitions)), e.exports = a
        },
        "5EjR": function(e, n, t) {},
        SlBD: function(e, n, t) {
            "use strict";
            var a, r = t("mrSG"),
                i = t("q1tI"),
                s = t("fvjX"),
                d = t("/7QA"),
                o = t("4VQm"),
                l = t("yR8l"),
                c = t("geRD"),
                u = t("GnwI"),
                m = t("Ue10"),
                b = t("pnuN"),
                p = (t("5EjR"), t("pNbj"));
            ! function(e) {
                e.BannedUserName = "banned-chatters-component__user-name", e.BannedDate = "banned-chatters-component__banned-date", e.BannedByUserName = "banned-chatters-component__banned-by-user-name"
            }(a || (a = {}));
            var h = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            error: !1,
                            working: !1
                        }, n.handleDeleteBannedChatterClick = function(e) {
                            n.setState({
                                error: !1,
                                working: !0
                            });
                            var t = e.currentTarget.getAttribute("data-chatter-login"),
                                a = e.currentTarget.getAttribute("data-chatter-id");
                            null !== a && null !== t ? n.unbanUserFromChat(t, a) : n.setState({
                                error: !0,
                                working: !1
                            })
                        }, n.unbanUserFromChat = function(e, t) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n, a, i, s;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this.props.data || !this.props.data.currentUser || null === this.props.data.currentUser.id) return this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                            n = {
                                                bannedUserLogin: e,
                                                channelID: this.props.data.currentUser.id
                                            }, a = {
                                                unbanUserFromChatRoom: {
                                                    __typename: "UnbanUserFromChatRoomPayload",
                                                    ban: {
                                                        __typename: "ChatRoomBanStatus",
                                                        bannedUser: {
                                                            __typename: "User",
                                                            id: t,
                                                            login: e
                                                        },
                                                        createdAt: "faketime",
                                                        moderator: null
                                                    },
                                                    error: null
                                                }
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.unbanUserFromChatQuery(Object(c.b)(n, a))];
                                        case 2:
                                            return i = r.sent(), s = function(e) {
                                                return e && e.currentUser && e.currentUser.bannedUsers && (e.currentUser.bannedUsers = e.currentUser.bannedUsers.filter(function(e) {
                                                    return e.bannedUser && e.bannedUser.id !== t
                                                })), e
                                            }, i.data && null !== i.data.unbanUserFromChatRoom && (null === i.data.unbanUserFromChatRoom.error ? (Object(c.e)(b, {}, s), this.setState({
                                                error: !1,
                                                working: !1
                                            })) : this.setState({
                                                error: !0,
                                                working: !1
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.componentDidMount = function() {
                        this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.componentDidUpdate = function() {
                        this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                    }, n.prototype.render = function() {
                        return this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.data.currentUser.bannedUsers.length > 0 ? this.renderBannedChatters() : this.renderEmptyMessage()
                    }, n.prototype.renderBannedChatters = function() {
                        var e = this,
                            n = this.props.data.currentUser && this.props.data.currentUser.bannedUsers;
                        if (!n) return null;
                        var t = n.filter(function(e) {
                                return e && e.bannedUser && e.bannedUser.id
                            }),
                            r = t.length >= 100 ? "99+" : t.length;
                        return i.createElement(o.b, {
                            className: "banned-chatters__list",
                            autoHide: !0
                        }, i.createElement(m.Cb, {
                            background: m.r.Base,
                            elevation: 1,
                            padding: {
                                bottom: .5
                            }
                        }, this.state.error && this.renderError(), i.createElement(m.Xa, {
                            padding: .5
                        }, Object(d.d)("<x:bold>Currently Banned </x:bold>({countBannedUsers})", {
                            countBannedUsers: r,
                            "x:bold": function(e) {
                                return i.createElement(m.W, {
                                    bold: !0,
                                    type: m.Tb.Span
                                }, e)
                            }
                        }, "BannedChatters")), i.createElement(m.Fb, null, i.createElement(m.Ib, null, i.createElement(m.Jb, {
                            label: Object(d.d)("Username", "BannedChatters")
                        }), i.createElement(m.Jb, {
                            label: Object(d.d)("Added By", "BannedChatters")
                        }), i.createElement(m.Jb, {
                            label: Object(d.d)("Time Banned", "BannedChatters")
                        }), i.createElement(m.Jb, {
                            textAlign: m.Pb.Center,
                            label: Object(d.d)("Actions", "BannedChatters")
                        })), i.createElement(m.Gb, null, t.map(function(n) {
                            return i.createElement(m.Kb, {
                                key: n.bannedUser.id
                            }, i.createElement(m.Hb, null, i.createElement(m.Pa, {
                                padding: {
                                    right: 4,
                                    bottom: .5
                                }
                            }, i.createElement(m.W, {
                                ellipsis: !0,
                                bold: !0,
                                "data-test-selector": a.BannedUserName
                            }, n.bannedUser && n.bannedUser.login))), i.createElement(m.Hb, null, i.createElement(m.W, {
                                "data-test-selector": a.BannedByUserName
                            }, n.modUser && n.modUser.displayName || Object(d.d)("an unknown user", "BannedChatters"))), i.createElement(m.Hb, null, i.createElement(m.W, {
                                "data-test-selector": a.BannedDate
                            }, Object(d.c)(new Date(n.bannedAt)))), i.createElement(m.Hb, {
                                textAlign: m.Pb.Center
                            }, i.createElement(m.Wb, {
                                label: Object(d.d)("Unban", "BannedChatters")
                            }, i.createElement(m.A, {
                                "data-chatter-login": n.bannedUser ? n.bannedUser.login : "",
                                "data-chatter-id": n.bannedUser ? n.bannedUser.id : "",
                                icon: m.rb.Trash,
                                type: m.C.Secondary,
                                onClick: e.handleDeleteBannedChatterClick,
                                disabled: !!e.state.working
                            }))))
                        })))))
                    }, n.prototype.renderError = function() {
                        return i.createElement(m.Xa, {
                            padding: .5
                        }, i.createElement(m.W, {
                            bold: !0,
                            color: m.O.Error
                        }, Object(d.d)("An error occurred, please try again.", "BannedChatters")))
                    }, n.prototype.renderEmptyMessage = function() {
                        return i.createElement(m.W, {
                            color: m.O.Alt2
                        }, Object(d.d)("There are no users banned from your chat.", "BannedChatters"))
                    }, n
                }(i.Component),
                k = Object(s.compose)(Object(l.a)(b), Object(l.a)(p, {
                    name: "unbanUserFromChatQuery"
                }), Object(u.b)("BannedChatters"))(h);
            t.d(n, "a", function() {
                return k
            })
        },
        Xq7d: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "BannedUser"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ChannelBannedUser"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedUser"
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
                                value: "modUser"
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
                                        value: "displayName"
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
                    end: 104
                }
            };
            t.loc.source = {
                body: "fragment BannedUser on ChannelBannedUser {\nbannedAt\nbannedUser {\nid\nlogin\n}\nmodUser {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        YWuw: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "BannedUserStatus"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ChatRoomBanStatus"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "bannedUser"
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
                                value: "createdAt"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "moderator"
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
                                        value: "displayName"
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
                    end: 113
                }
            };
            t.loc.source = {
                body: "fragment BannedUserStatus on ChatRoomBanStatus {\nbannedUser {\nid\nlogin\n}\ncreatedAt\nmoderator {\nid\ndisplayName\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        "gi/2": function(e, n, t) {
            "use strict";
            var a, r = t("mrSG"),
                i = t("q1tI"),
                s = t("fvjX"),
                d = t("/7QA"),
                o = t("yR8l"),
                l = t("geRD"),
                c = t("DMoW"),
                u = t("GnwI"),
                m = t("pnuN"),
                b = t("Ue10"),
                p = t("0l36");
            ! function(e) {
                e.BanButton = "add-banned-chatters-component__add-button", e.BanUsernameField = "add-banned-chatters-component__ban-username-input"
            }(a || (a = {}));
            var h = function(e) {
                    function n() {
                        var n = null !== e && e.apply(this, arguments) || this;
                        return n.state = {
                            error: !1,
                            errorCode: null,
                            working: !1,
                            userToBan: ""
                        }, n.handleAddBannedChatterClick = function() {
                            var e = n.state.userToBan;
                            "" !== e ? (n.setState({
                                error: !1,
                                working: !0
                            }), n.banUserFromChat(e)) : n.setState({
                                error: !0,
                                working: !1
                            })
                        }, n.getErrorMessage = function(e) {
                            if (null === e) return Object(d.d)("Something went wrong. Please try again.", "AddBannedChatters");
                            switch (e) {
                                case c.b.TARGET_NOT_FOUND:
                                    return Object(d.d)("That user is suspended or does not exist.", "AddBannedChatters");
                                case c.b.TARGET_IS_MOD:
                                case c.b.TARGET_IS_SELF:
                                case c.b.TARGET_IS_STAFF:
                                case c.b.TARGET_IS_BROADCASTER:
                                case c.b.TARGET_IS_ADMIN:
                                case c.b.TARGET_ALREADY_BANNED:
                                    return Object(d.d)("You cannot ban that user.", "AddBannedChatters");
                                default:
                                    return Object(d.d)("An unknown error occurred. Please try again.", "AddBannedChatters")
                            }
                        }, n.updateUserToBan = function(e) {
                            n.setState({
                                userToBan: e.currentTarget.value
                            })
                        }, n.banUserFromChat = function(e) {
                            return r.__awaiter(n, void 0, void 0, function() {
                                var n, t, a;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (null === this.props.channelID) return this.setState({
                                                error: !0,
                                                working: !1
                                            }), [2];
                                            n = {
                                                bannedUserLogin: e,
                                                channelID: this.props.channelID
                                            }, r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), [4, this.props.banUserFromChatQuery(Object(l.a)(n))];
                                        case 2:
                                            return t = r.sent(), a = function(e) {
                                                if (e && e.currentUser && e.currentUser.bannedUsers && t.data && null !== t.data.banUserFromChatRoom && null !== t.data.banUserFromChatRoom.ban) {
                                                    var n = null === t.data.banUserFromChatRoom.ban.bannedUser ? "" : t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                        a = null === t.data.banUserFromChatRoom.ban.bannedUser ? "" : t.data.banUserFromChatRoom.ban.bannedUser.login,
                                                        r = null === t.data.banUserFromChatRoom.ban.moderator ? "" : t.data.banUserFromChatRoom.ban.moderator.id,
                                                        i = null === t.data.banUserFromChatRoom.ban.moderator ? "" : t.data.banUserFromChatRoom.ban.moderator.displayName,
                                                        s = {
                                                            __typename: "ChannelBannedUser",
                                                            bannedAt: t.data.banUserFromChatRoom.ban.createdAt,
                                                            bannedUser: {
                                                                __typename: "User",
                                                                id: n,
                                                                login: a
                                                            },
                                                            modUser: {
                                                                __typename: "User",
                                                                id: r,
                                                                displayName: i
                                                            }
                                                        };
                                                    e.currentUser.bannedUsers.push(s)
                                                }
                                                return e
                                            }, t.data && null !== t.data.banUserFromChatRoom && (null === t.data.banUserFromChatRoom.error ? (Object(l.e)(m, {}, a), this.setState({
                                                error: !1,
                                                errorCode: null,
                                                working: !1,
                                                userToBan: ""
                                            })) : this.setState({
                                                error: !0,
                                                errorCode: t.data.banUserFromChatRoom.error.code,
                                                working: !1
                                            })), [3, 4];
                                        case 3:
                                            return r.sent(), this.setState({
                                                error: !0,
                                                working: !1
                                            }), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, n
                    }
                    return r.__extends(n, e), n.prototype.render = function() {
                        var e = "" === this.state.userToBan,
                            n = this.state.working ? b.E.Loading : b.E.Default;
                        return i.createElement(b.Xa, {
                            className: "add-banned-chatter",
                            margin: {
                                bottom: 3
                            }
                        }, i.createElement(b.Ea, {
                            label: Object(d.d)("Add a user to your ban list", "AddBannedChatter"),
                            error: this.state.error,
                            errorMessage: this.getErrorMessage(this.state.errorCode)
                        }, i.createElement(b.Xa, {
                            display: b.X.Flex,
                            margin: {
                                top: .5
                            }
                        }, i.createElement(b.Xa, {
                            flexGrow: 1,
                            padding: {
                                right: .5
                            }
                        }, i.createElement(b.Ra, {
                            placeholder: Object(d.d)("Enter a username", "AddBannedChatter"),
                            type: b.Ta.Text,
                            onChange: this.updateUserToBan,
                            value: this.state.userToBan,
                            "data-test-selector": a.BanUsernameField
                        })), !e && i.createElement(b.z, {
                            onClick: this.handleAddBannedChatterClick,
                            state: n,
                            "data-test-selector": a.BanButton
                        }, Object(d.d)("Add", "AddBannedChatter")))))
                    }, n
                }(i.Component),
                k = Object(s.compose)(Object(u.b)("AddBannedChatter", {
                    autoReportInteractive: !0
                }), Object(o.a)(p, {
                    name: "banUserFromChatQuery"
                }))(h);
            t.d(n, !1, function() {
                return a
            }), t.d(n, !1, function() {
                return h
            }), t.d(n, "a", function() {
                return k
            })
        },
        "m/zG": function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t("/MKj"),
                r = t("fvjX"),
                i = t("V+GM"),
                s = t("NvVO"),
                d = t("2xye"),
                o = t("kRBY"),
                l = t("GnwI"),
                c = t("mrSG"),
                u = t("q1tI"),
                m = t("/7QA"),
                b = t("IFXb"),
                p = t("gi/2"),
                h = t("SlBD"),
                k = t("Ue10"),
                g = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return c.__extends(n, e), n.prototype.render = function() {
                        return this.props.sessionUser ? u.createElement(b.a, null, u.createElement(k.Cb, {
                            background: k.r.Base,
                            border: !0,
                            padding: {
                                left: 1,
                                right: 3,
                                bottom: 2,
                                top: 2
                            }
                        }, u.createElement(k.Xa, {
                            display: k.X.Flex
                        }, u.createElement(k.qb, {
                            asset: k.rb.AngleLeft
                        }), u.createElement(k.Xa, {
                            padding: {
                                left: 3
                            }
                        }, u.createElement(k.W, {
                            fontSize: k.Ca.Size4,
                            bold: !0
                        }, Object(m.d)("Banned Users", "BannedChattersPage")), u.createElement(k.W, {
                            fontSize: k.Ca.Size7,
                            color: k.O.Alt2
                        }, Object(m.d)("View and modify your banned users list", "BannedChattersPage"))))), u.createElement(k.Cb, {
                            background: k.r.Base,
                            borderBottom: !0,
                            borderLeft: !0,
                            borderRight: !0,
                            padding: 3
                        }, u.createElement(p.a, {
                            channelID: this.props.sessionUser.id
                        }), u.createElement(h.a, null))) : null
                    }, n
                }(u.Component);
            var U = Object(r.compose)(Object(a.connect)(function(e) {
                return {
                    sessionUser: Object(o.e)(e)
                }
            }), Object(l.b)("BannedChattersPage", {
                autoReportInteractive: !0,
                destination: s.a.DashboardSettingsModerationBannedChatters
            }), Object(i.a)({
                location: d.PageviewLocation.DashboardSettingsModerationBannedChatters
            }))(g);
            t.d(n, "BannedChattersPage", function() {
                return U
            })
        },
        pNbj: function(e, n) {
            var t = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "UnBanUserFromChat"
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
                                    value: "UnbanUserFromChatRoomInput"
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
                                value: "unbanUserFromChatRoom"
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
                                            name: {
                                                kind: "Name",
                                                value: "bannedUser"
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
                                                value: "createdAt"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "moderator"
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
                                                        value: "displayName"
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
                                        value: "error"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "code"
                                            },
                                            arguments: [],
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
                    end: 194
                }
            };
            t.loc.source = {
                body: "mutation UnBanUserFromChat($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nbannedUser {\nid\nlogin\n}\ncreatedAt\nmoderator {\nid\ndisplayName\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = t
        },
        pnuN: function(e, n, t) {
            var a = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Settings_ChannelChat_BannedChatters"
                    },
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "bannedUsers"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "BannedUser"
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
                    end: 213
                }
            };
            a.loc.source = {
                body: '#import "twilight/pages/settings/components/settings-channel-page/components/banned-chatters/banned-user-fragment.gql"\nquery Settings_ChannelChat_BannedChatters {\ncurrentUser {\nid\nbannedUsers {\n...BannedUser\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var r = {};
            a.definitions = a.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var n = e.name.value;
                    return !r[n] && (r[n] = !0, !0)
                })
            }(t("Xq7d").definitions)), e.exports = a
        }
    }
]);