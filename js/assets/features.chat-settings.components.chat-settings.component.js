(window.webpackJsonp = window.webpackJsonp || []).push([
    [180], {
        "/HY+": function(e, t, n) {
            "use strict";
            var r = n("dAHa"),
                a = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                s = n("fvjX"),
                l = n("cZKs"),
                c = n("aCAx"),
                d = n("GnwI"),
                u = n("Ue10"),
                p = (n("Oy4H"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleClose = function(e, n) {
                            t.props.closeModal(), t.props.onClose && t.props.onClose(e, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return o.createElement(u.Bb, {
                            className: "reporting-modal__container",
                            background: u.r.Base,
                            padding: {
                                x: 2,
                                y: 3
                            }
                        }, o.createElement(r.b, {
                            onClose: this.handleClose,
                            reportContext: this.props.reportContext,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        }), o.createElement(l.a, null))
                    }, t
                }(o.Component));
            var h = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(i.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    closeModal: c.c
                }, e)
            }))(p);
            n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.c
            }), n.d(t, !1, function() {
                return r.a
            }), n.d(t, !1, function() {}), n.d(t, !1, function() {
                return r.b
            }), n.d(t, !1, function() {
                return p
            }), n.d(t, "a", function() {
                return h
            })
        },
        "0hI/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ReportUserModal_ReportUserData"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                            alias: {
                                kind: "Name",
                                value: "targetUser"
                            },
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
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "lookupType"
                                },
                                value: {
                                    kind: "EnumValue",
                                    value: "ALL"
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
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "blockedUsers"
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
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 176
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportUserData($targetUserID: ID!) {\ntargetUser: user(id: $targetUserID lookupType: ALL) {\nid\nlogin\ndisplayName\n}\ncurrentUser {\nid\nblockedUsers {\nid\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1T0i": function(e, t, n) {},
        "3gEX": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "RecentRaidsModActions"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "targetUserID"
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
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "channelID"
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
                                value: "chatRoomBanStatus"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "channelID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "targetUserID"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "userID"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "channelID"
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
                                        value: "isPermanent"
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
                    end: 190
                }
            };
            n.loc.source = {
                body: "query RecentRaidsModActions($targetUserID: ID! $channelID: ID!) {\n# This is currently backwards on the server\nchatRoomBanStatus(channelID: $targetUserID userID: $channelID) {\nisPermanent\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "4qQ0": function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                }),
                function(e) {
                    e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.Room = "ROOM_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT", e.Whisper = "WHISPER_REPORT"
                }(r || (r = {})),
                function(e) {
                    e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
                }(a || (a = {}))
        },
        "8MX0": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                i = n("8/mp"),
                s = n("yR8l"),
                l = n("TSYQ"),
                c = n("8Ad5"),
                d = [{
                    name: "Red",
                    hex: "#FF0000"
                }, {
                    name: "Blue",
                    hex: "#0000FF"
                }, {
                    name: "Green",
                    hex: "#008000"
                }, {
                    name: "Firebrick",
                    hex: "#B22222"
                }, {
                    name: "Coral",
                    hex: "#FF7F50"
                }, {
                    name: "Yellow Green",
                    hex: "#9ACD32"
                }, {
                    name: "Orange Red",
                    hex: "#FF4500"
                }, {
                    name: "Sea Green",
                    hex: "#2E8B57"
                }, {
                    name: "Goldenrod",
                    hex: "#DAA520"
                }, {
                    name: "Chocolate",
                    hex: "#D2691E"
                }, {
                    name: "Cadet Blue",
                    hex: "#5F9EA0"
                }, {
                    name: "Dodger Blue",
                    hex: "#1E90FF"
                }, {
                    name: "Hot Pink",
                    hex: "#FF69B4"
                }, {
                    name: "Blue Violet",
                    hex: "#8A2BE2"
                }, {
                    name: "Spring Green",
                    hex: "#00FF7F"
                }],
                u = n("Ue10"),
                p = (n("1T0i"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onKeyPress = function(e) {
                            if (e.charCode === c.a.Enter || e.charCode === c.a.Space) {
                                var n = e.currentTarget.getAttribute("data-color");
                                t.selectColor(n)
                            }
                        }, t.onColorSelected = function(e) {
                            var n = e.currentTarget.getAttribute("data-color");
                            t.selectColor(n)
                        }, t.selectColor = function(e) {
                            e && t.props.onColorSelected(e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = d.map(function(t) {
                                var n = t.hex === e.props.selectedColor,
                                    r = {
                                        "color-chooser": !0,
                                        "color-chooser--selected": n
                                    };
                                return a.createElement("div", {
                                    role: "radio",
                                    "aria-checked": n,
                                    key: t.hex,
                                    "data-color": t.hex,
                                    title: t.name,
                                    onClick: e.onColorSelected,
                                    onKeyPress: e.onKeyPress,
                                    className: l(r),
                                    style: {
                                        backgroundColor: t.hex
                                    },
                                    "data-test-selector": "color_swatch_" + t.hex,
                                    "data-a-target": "color_swatch_" + t.hex,
                                    tabIndex: 0
                                })
                            }),
                            n = Object(o.d)("Name Color", "ChatSettings"),
                            r = a.createElement(u.W, {
                                transform: u.Qb.Uppercase,
                                color: u.O.Alt2
                            }, n);
                        this.props.borderTop && (r = a.createElement(u.Bb, {
                            margin: {
                                top: 2
                            },
                            borderTop: !0,
                            padding: {
                                top: 2
                            }
                        }, r));
                        var i = this.props.hasExtraColors ? "https://www.twitch.tv/settings/prime" : "https://twitch.tv/products/turbo?ref=more_colors_direct";
                        return a.createElement("div", null, a.createElement(u.Bb, {
                            margin: {
                                bottom: 1
                            },
                            background: u.r.Base,
                            color: u.O.Base,
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            fullWidth: !0
                        }, r), a.createElement(u.Pa, {
                            margin: {
                                y: 1
                            },
                            display: u.X.Flex,
                            flexWrap: u.Ba.Wrap
                        }, a.createElement("div", {
                            role: "radiogroup",
                            "aria-label": n
                        }, t, a.createElement(u.W, {
                            fontSize: u.Ca.Size7
                        }, a.createElement("a", {
                            href: i
                        }, Object(o.d)("more colors →", "ChatSettings"))))))
                    }, t
                }(a.Component)),
                h = n("cr+I"),
                m = n("M//1"),
                g = (n("TwNI"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onGlobalBadgeClicked = function(e) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setGlobalBadge(t.props.userLogin, n || "")
                        }, t.onGlobalBadgeKeyPress = function(e) {
                            if (e.charCode === c.a.Enter || e.charCode === c.a.Space) {
                                var n = e.currentTarget.getAttribute("data-badge");
                                t.setGlobalBadge(t.props.userLogin, n || "")
                            }
                        }, t.onChannelBadgeClicked = function(e) {
                            var n = e.currentTarget.getAttribute("data-badge");
                            t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                        }, t.onChannelBadgeKeyPress = function(e) {
                            if (e.charCode === c.a.Enter || e.charCode === c.a.Space) {
                                var n = e.currentTarget.getAttribute("data-badge");
                                t.setChannelBadge(t.props.channelLogin, t.props.userLogin, n || "")
                            }
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.data && !this.props.data.loading && this.props.data.user && this.props.data.currentUser ? a.createElement("div", null, a.createElement(p, {
                            selectedColor: this.props.userChatColor,
                            onColorSelected: this.props.onColorSelected,
                            hasExtraColors: this.props.data.currentUser.hasTurbo || this.props.data.currentUser.hasPrime,
                            borderTop: !0
                        }), this.getBadgeChooser()) : null
                    }, t.prototype.getBadgeChooser = function() {
                        var e = this;
                        if (this.props.data) {
                            var t = this.props.data.user.self.availableBadges,
                                n = this.props.data.user.self.selectedBadge,
                                r = this.props.data.currentUser.availableBadges,
                                i = this.props.data.currentUser.selectedBadge;
                            if (!t) return null;
                            var s = void 0 === this.state.channelBadgeID && n ? n.setID : this.state.channelBadgeID,
                                c = !s,
                                d = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": c
                                },
                                p = Object(o.d)("No channel badges :(", "ChatSettings");
                            t && t.length > 0 && (p = t.map(function(t) {
                                var r = Boolean(n && t.setID === s),
                                    o = {
                                        "edit-appearance__badge-chooser": !0,
                                        "edit-appearance__badge-chooser--selected": r
                                    };
                                return a.createElement("div", {
                                    role: "radio",
                                    "aria-checked": r,
                                    "data-badge": t.setID,
                                    onClick: e.onChannelBadgeClicked,
                                    onKeyPress: e.onChannelBadgeKeyPress,
                                    key: t.setID + "/" + t.version,
                                    className: l(o),
                                    "data-test-selector": "channel_badge_" + t.setID,
                                    "data-a-target": "channel_badge_" + t.setID,
                                    tabIndex: 0
                                }, a.createElement(u.Ub, {
                                    label: t.title
                                }, a.createElement("img", {
                                    alt: t.title,
                                    src: t.image1x,
                                    srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                                })))
                            })).push(a.createElement("div", {
                                key: "none",
                                role: "radio",
                                "aria-checked": c,
                                "data-badge": "",
                                onClick: this.onChannelBadgeClicked,
                                onKeyPress: this.onChannelBadgeKeyPress,
                                className: l(d),
                                "data-test-selector": "channel_badge_none",
                                "data-a-target": "channel_badge_none",
                                tabIndex: 0
                            }, a.createElement(u.Ub, {
                                label: Object(o.d)("Same as Global", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.qb, {
                                asset: u.rb.Global
                            })))));
                            var h = void 0 === this.state.globalBadgeID && i ? i.setID : this.state.globalBadgeID,
                                m = !h,
                                g = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": m
                                },
                                b = Object(o.d)("No global badges :(", "ChatSettings");
                            return r && r.length > 0 && (b = r.map(function(t) {
                                var n = Boolean(i && t.setID === h),
                                    r = {
                                        "edit-appearance__badge-chooser": !0,
                                        "edit-appearance__badge-chooser--selected": n
                                    };
                                return a.createElement("div", {
                                    role: "radio",
                                    "aria-checked": n,
                                    "data-badge": t.setID,
                                    onClick: e.onGlobalBadgeClicked,
                                    onKeyPress: e.onGlobalBadgeKeyPress,
                                    key: t.setID + "/" + t.version,
                                    className: l(r),
                                    "data-test-selector": "global_badge_" + t.setID,
                                    "data-a-target": "global_badge_" + t.setID,
                                    tabIndex: 0
                                }, a.createElement(u.Ub, {
                                    label: t.title
                                }, a.createElement("img", {
                                    alt: t.title,
                                    src: t.image1x,
                                    srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                                })))
                            })).push(a.createElement("div", {
                                role: "radio",
                                "aria-checked": m,
                                key: "none",
                                "data-badge": "",
                                onClick: this.onGlobalBadgeClicked,
                                onKeyPress: this.onGlobalBadgeKeyPress,
                                className: l(g),
                                "data-test-selector": "global_badge_none",
                                "data-a-target": "global_badge_none",
                                tabIndex: 0
                            }, a.createElement(u.Ub, {
                                label: Object(o.d)("None", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.qb, {
                                asset: u.rb.Ban
                            }))))), a.createElement("div", null, a.createElement(u.Bb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Bb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Ub, {
                                align: u.Vb.Left,
                                label: Object(o.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Qb.Uppercase
                            }, Object(o.d)("Global Badge [?]", "ChatSettings")))), a.createElement(u.Pa, {
                                margin: {
                                    y: 1
                                },
                                padding: {
                                    top: 1
                                },
                                display: u.X.Flex,
                                "data-a-target": "global-badge-selector"
                            }, a.createElement("div", {
                                role: "radiogroup"
                            }, b))), a.createElement(u.Bb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Bb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Ub, {
                                align: u.Vb.Left,
                                label: Object(o.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Qb.Uppercase
                            }, Object(o.d)("Channel Badge [?]", "ChatSettings")))), a.createElement(u.Pa, {
                                margin: {
                                    y: 1
                                },
                                padding: {
                                    top: 1
                                },
                                display: u.X.Flex,
                                "data-a-target": "channel-badge-selector"
                            }, a.createElement("div", {
                                role: "radiogroup"
                            }, p))))
                        }
                    }, t.prototype.setChannelBadge = function(e, t, n) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var a, i, s, l;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        a = {
                                            "Client-ID": o.p.config.legacyClientID,
                                            Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                            "Accept-Language": "en-us",
                                            Authorization: "OAuth " + this.props.authToken
                                        }, i = "https://api.twitch.tv/kraken/users/" + t + "/chat/channels/" + e + "/badges", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, fetch(i, {
                                            method: "PUT",
                                            body: h.stringify({
                                                selected_badge: n
                                            }),
                                            headers: a
                                        })];
                                    case 2:
                                        return (s = r.sent()) && s.ok && (this.props.onBadgesChanged(), this.setState({
                                            channelBadgeID: n
                                        })), [3, 4];
                                    case 3:
                                        return l = r.sent(), o.k.error(l, "Failed to set channel badge"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.setGlobalBadge = function(e, t) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var n, a, i, s;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        n = {
                                            "Client-ID": o.p.config.legacyClientID,
                                            Accept: "application/vnd.twitchtv.v4+json; charset=UTF-8",
                                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                            "Accept-Language": "en-us",
                                            Authorization: "OAuth " + this.props.authToken
                                        }, a = "https://api.twitch.tv/kraken/users/" + e + "/chat/badges", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, fetch(a, {
                                            method: "PUT",
                                            body: h.stringify({
                                                selected_badge: t
                                            }),
                                            headers: n
                                        })];
                                    case 2:
                                        return (i = r.sent()) && i.ok && (this.props.onBadgesChanged(), this.setState({
                                            globalBadgeID: t
                                        })), [3, 4];
                                    case 3:
                                        return s = r.sent(), o.k.error(s, "Failed to set global badge"), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t = r.__decorate([Object(s.a)(m, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelLogin: e.channelLogin
                                }
                            }
                        }
                    })], t)
                }(a.Component)),
                b = n("/MKj"),
                f = n("fvjX"),
                v = n("1/iK"),
                k = n("y5D0"),
                C = n("jZLd"),
                y = n("+pBb"),
                _ = n("eJ65"),
                R = n("aCAx"),
                T = n("/HY+"),
                S = n("geRD"),
                E = n("cys1"),
                O = n("oK83"),
                w = n("g5kB"),
                M = n("3gEX"),
                I = (n("u/v7"), n("Mcr7")),
                U = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUsernameClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-username"),
                                r = e.currentTarget.getAttribute("data-raid-id") || "";
                            n && t.props.onUsernameClick(n, O.a.recent_raids, r)
                        }, t.onBanButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-channel-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-login") || "";
                            (0, t.props.banUser)(Object(S.a)({
                                channelID: n,
                                bannedUserLogin: r
                            }))
                        }, t.onUnbanButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-channel-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-login") || "";
                            (0, t.props.unbanUser)(Object(S.a)({
                                channelID: n,
                                bannedUserLogin: r
                            }))
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Xa, {
                            key: "recent-raids-layout2-" + this.props.raiderUserID,
                            className: "recent-raids-item",
                            flexDirection: u.Aa.Row,
                            display: u.X.Flex,
                            fullWidth: !0
                        }, a.createElement(u.Xa, {
                            flexDirection: u.Aa.Row,
                            display: u.X.Flex,
                            fullWidth: !0,
                            justifyContent: u.Wa.Between
                        }, a.createElement(u.W, {
                            bold: !0
                        }, a.createElement("a", {
                            className: "recent-raids-item__name",
                            "data-username": this.props.channelLogin,
                            "data-raid-id": this.props.raidID,
                            onClick: this.onUsernameClick,
                            href: "#"
                        }, this.props.channelLogin)), a.createElement(u.Xa, {
                            position: u.hb.Relative
                        }, a.createElement(u.Xa, {
                            className: "recent-raids-item__timestamp"
                        }, Object(E.m)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                    }, t.prototype.getCardSlideInContent = function() {
                        if (!this.props.slideInContent) return null;
                        var e = null;
                        return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? a.createElement(u.z, {
                            key: "recent-raids-ban-button-" + this.props.raiderUserID,
                            size: u.D.Small,
                            type: u.F.Text,
                            onClick: this.onUnbanButtonClick,
                            "data-a-target": "recent-raid-item-button",
                            "data-raid-id": this.props.raidID,
                            "data-target-user-login": this.props.raiderLogin,
                            "data-target-user-id": this.props.raiderUserID,
                            "data-channel-id": this.props.channelID
                        }, Object(o.d)("Unban", "RecentRaid")) : a.createElement(u.z, {
                            key: "recent-raids-ban-button-" + this.props.raiderUserID,
                            size: u.D.Small,
                            type: u.F.Text,
                            onClick: this.onBanButtonClick,
                            "data-a-target": "recent-raid-item-button",
                            "data-raid-id": this.props.raidID,
                            "data-target-user-login": this.props.raiderLogin,
                            "data-target-user-id": this.props.raiderUserID,
                            "data-channel-id": this.props.channelID
                        }, Object(o.d)("Ban", "RecentRaid")), a.createElement(u.Xa, {
                            key: "recent-raids-layout-" + this.props.raiderUserID,
                            className: "recent-raids-item__hover-content",
                            zIndex: u.ec.Above,
                            "data-a-target": "recent-raids-item-hover"
                        }, this.props.slideInContent, e)
                    }, t = r.__decorate([Object(s.a)(M, {
                        options: function(e) {
                            return {
                                variables: {
                                    targetUserID: e.raiderUserID,
                                    channelID: e.channelID
                                },
                                fetchPolicy: "cache-and-network"
                            }
                        }
                    }), Object(s.a)(w, {
                        name: "banUser",
                        options: function(e) {
                            return {
                                update: function(t, n) {
                                    ! function(e, t, n) {
                                        var r = e.readQuery({
                                            query: M,
                                            variables: {
                                                targetUserID: n.raiderUserID,
                                                channelID: n.channelID
                                            }
                                        });
                                        r && (t && t.data && (r.chatRoomBanStatus = {
                                            isPermanent: !0,
                                            __typename: "ChatRoomBanStatus"
                                        }), e.writeQuery({
                                            query: M,
                                            variables: {
                                                targetUserID: n.raiderUserID,
                                                channelID: n.channelID
                                            },
                                            data: r
                                        }))
                                    }(t, n, e)
                                }
                            }
                        }
                    }), Object(s.a)(I, {
                        name: "unbanUser",
                        options: function(e) {
                            return {
                                update: function(t) {
                                    ! function(e, t) {
                                        var n = e.readQuery({
                                            query: M,
                                            variables: {
                                                targetUserID: t.raiderUserID,
                                                channelID: t.channelID
                                            }
                                        });
                                        if (n) {
                                            var a = r.__assign({}, n, {
                                                chatRoomBanStatus: null
                                            });
                                            e.writeQuery({
                                                query: M,
                                                variables: {
                                                    targetUserID: t.raiderUserID,
                                                    channelID: t.channelID
                                                },
                                                data: a
                                            })
                                        }
                                    }(t, e)
                                }
                            }
                        }
                    })], t)
                }(a.Component),
                x = n("b6Yk"),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.targetChannelID = t.props.targetChannelID, t
                    }
                    return r.__extends(t, e), t.fetchRecentRaidsList = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, x.a.get("/kraken/raids?client_id=" + o.a.authSettings.clientID + "&api_version=" + o.a.defaultAPIVersion + "&target_id=" + e)];
                                    case 1:
                                        return t = r.sent(), [2, this.deserialize(t)];
                                    case 2:
                                        return n = r.sent(), o.k.error(n, "Couldn't fetch raids list"), [2, []];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.deserialize = function(e) {
                        var t = [];
                        if (e.body && e.body.raids) {
                            for (var n in e.body.raids)
                                if (n.hasOwnProperty) {
                                    var r = {
                                        raidID: e.body.raids[n]._id,
                                        raidAt: e.body.raids[n].raid_at,
                                        userID: e.body.raids[n].creator_user._id,
                                        name: e.body.raids[n].creator_user.name
                                    };
                                    t.push(r)
                                }
                            return t
                        }
                        return []
                    }, t
                }(a.Component),
                D = n("4qQ0"),
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onReportButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-raid-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-id") || "",
                                a = e.currentTarget.getAttribute("data-target-user-login") || "";
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: D.a.Raid,
                                    targetUserID: r,
                                    contentID: n,
                                    extra: JSON.stringify({
                                        channel_id: r.toString()
                                    }),
                                    additionalTrackingID: t.props.targetChannelID
                                },
                                title: Object(o.d)("Report {channelDisplayName}", {
                                    channelDisplayName: a
                                }, "ReportUserModal")
                            })
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        return r.__awaiter(this, void 0, void 0, function() {
                            var e;
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, j.fetchRecentRaidsList(this.props.targetChannelID)];
                                    case 1:
                                        return e = t.sent(), this.setState({
                                            raidChannels: e
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.render = function() {
                        var e = [],
                            t = [],
                            n = {};
                        if (void 0 !== this.state.raidChannels)
                            for (var r in 0 === this.state.raidChannels.length && e.push(a.createElement(u.W, {
                                    key: "recent-raids-no-raids",
                                    type: u.Rb.P
                                }, Object(o.d)("You have no recent raids", "RecentRaids"))), this.state.raidChannels)
                                if (r.hasOwnProperty) {
                                    var i = this.state.raidChannels[r];
                                    this.state.raidChannels.hasOwnProperty(r) && void 0 === n[i.userID] && (t.push(a.createElement(U, {
                                        key: "recent-raids-item-" + i.userID,
                                        slideInContent: [a.createElement(u.Bb, {
                                            key: "recent-raids-item-report-area-" + i.userID,
                                            color: u.O.Alt2,
                                            display: u.X.InlineFlex
                                        }, a.createElement(u.z, {
                                            key: "recent-raid-report-button",
                                            size: u.D.Small,
                                            type: u.F.Text,
                                            onClick: this.onReportButtonClick,
                                            "data-a-target": "recent-raid-item-button",
                                            "data-raid-id": i.raidID,
                                            "data-target-user-login": i.name,
                                            "data-target-user-id": i.userID
                                        }, Object(o.d)("Report", "RecentRaid")), a.createElement(u.Ub, {
                                            align: u.Vb.Right,
                                            width: 150,
                                            label: Object(o.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                                        }))],
                                        timestamp: i.raidAt,
                                        channelLogin: i.name,
                                        raiderUserID: i.userID,
                                        channelID: this.props.targetChannelID,
                                        raiderLogin: i.name,
                                        raidID: i.raidID,
                                        onUsernameClick: this.props.onUsernameClick,
                                        showReportUserModal: this.props.showReportUserModal
                                    })), n[i.userID] = !0)
                                }
                        var s = null;
                        return this.props.recentRaids ? a.createElement(u.Xa, {
                            key: "recent-raids"
                        }, a.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Rb.Span
                        }, a.createElement(u.U, {
                            to: {
                                pathname: "/broadcast/dashboard/settings/raids"
                            }
                        }, Object(o.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (s = a.createElement(u.Xa, {
                            key: "recent-raids",
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            alignItems: u.f.Center
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            onClick: this.props.onClickRecentRaids,
                            "data-test-selector": "recent-raids-button"
                        }, Object(o.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && a.createElement(u.Xa, {
                            position: u.hb.Relative
                        }, a.createElement(u.Ub, {
                            align: u.Vb.Right,
                            direction: u.Wb.Top,
                            display: u.X.InlineFlex,
                            label: this.props.tooltipText,
                            width: 175,
                            show: !0
                        }, a.createElement(u.Pa, {
                            alignItems: u.f.Center,
                            className: "chat-settings__highlight-indicator",
                            display: u.X.InlineFlex,
                            justifyContent: u.Wa.Center,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Overlay,
                            fontSize: u.Ca.Size8,
                            type: u.Rb.Span
                        }, "i"))))), a.createElement(u.Xa, null, s))
                    }, t
                }(a.Component);
            var N = Object(b.connect)(function() {
                    return {}
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        showReportUserModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(R.d)(T.a, t)
                        }
                    }, e)
                })(A),
                W = n("W/3w"),
                B = n("r2Xj"),
                z = n("WytW"),
                F = n("F6GT"),
                L = n("x0gr"),
                P = (n("op4u"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            autoModToolTipVisible: !1
                        }, n.handleFollowerDurationClick = function(e) {
                            var t = e.currentTarget.getAttribute("data-duration");
                            t && n.onFollowerDurationChange(parseInt(t, 10))
                        }, n.onClickRecentRaids = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), n.props.onClickRecentRaids()
                        }, n.onChatClear = function() {
                            n.props.onChatCommand(Object(z.b)())
                        }, n.getSelectedFollowerDuration = function() {
                            if (n.props.followerModeEnabled) return n.props.followerModeDuration;
                            var e = n.props.lastUsedFollowerDurations[n.props.channelLogin];
                            return "number" == typeof e ? e : W.a
                        }, n.onFollowerModeToggle = function() {
                            if (n.props.followerModeEnabled) n.props.onChatCommand(Object(z.c)()), n.props.onRoomStateUpdate({
                                followersOnly: !1
                            });
                            else {
                                var e = n.getSelectedFollowerDuration();
                                n.props.onChatCommand(Object(z.e)(e)), n.props.onRoomStateUpdate({
                                    followersOnly: !0,
                                    followersOnlyRequirement: e
                                })
                            }
                            Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.followerModeEnabled,
                                settingName: B.a.FollowerMode
                            })
                        }, n.onSlowModeToggle = function() {
                            n.props.slowModeEnabled ? (n.props.onChatCommand(Object(z.d)()), n.props.onRoomStateUpdate({
                                slowMode: !1
                            })) : (n.props.onChatCommand(Object(z.f)()), n.props.onRoomStateUpdate({
                                slowMode: !0
                            })), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.slowModeEnabled,
                                settingName: B.a.SlowMode
                            })
                        }, n.onFollowerDurationChange = function(e) {
                            Object(F.c)(n.props.channelLogin, e), n.props.onFollowerModeDurationPreferenceChange(n.props.channelLogin, e), n.props.followerModeEnabled && (n.props.onChatCommand(Object(z.e)(e)), n.props.onRoomStateUpdate({
                                followersOnlyRequirement: e
                            })), Object(L.c)({
                                channelLogin: n.props.channelLogin,
                                followerModeOn: n.props.followerModeEnabled,
                                isHostMode: n.props.isHostMode,
                                newValue: e
                            })
                        }, n.onModIconsToggle = function() {
                            Object(F.b)("showModIcons", !n.props.showModerationIcons), n.props.showModerationIcons ? n.props.onModIconsDisable() : n.props.onModIconsEnable(), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showModerationIcons,
                                settingName: B.a.ShowModIcons
                            })
                        }, n.onShowModerationActionsToggle = function() {
                            Object(F.b)("showModerationActions", !n.props.showModerationActions), n.props.showModerationActions ? n.props.onShowModerationActionsDisable() : n.props.onShowModerationActionsEnable(), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showModerationActions,
                                settingName: B.a.ShowModActions
                            })
                        }, n.onShowAutoModActionsToggle = function() {
                            Object(F.b)("showAutoModActions", !n.props.showAutoModActions), n.props.showAutoModActions ? n.props.onShowAutoModActionsDisable() : n.props.onShowAutoModActionsEnable(), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showAutoModActions,
                                settingName: B.a.ShowAutoModActions
                            })
                        }, n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n.handleToggleAutoModLink = n.handleToggleAutoModLink.bind(n), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!this.props.isCurrentUserModerator) return null;
                        var t = this.getSelectedFollowerDuration(),
                            n = W.b.map(function(n) {
                                return a.createElement(u.Ua, {
                                    "data-duration": n,
                                    key: n,
                                    onClick: e.handleFollowerDurationClick,
                                    selected: n === t
                                }, a.createElement(u.Xa, {
                                    padding: .5
                                }, Object(W.c)(n)))
                            });
                        return a.createElement(u.Bb, {
                            key: "mod-tools",
                            borderTop: !0,
                            "data-test-selector": "mod-tools",
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            }
                        }, a.createElement(u.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            transform: u.Qb.Uppercase
                        }, Object(o.d)("Mod Tools", "ChatSettings"))), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.showModerationIcons,
                            "data-a-target": "mod-icons-checkbox",
                            "data-test-selector": "mod-icons-checkbox",
                            id: "chat-settings-mod-icons",
                            label: Object(o.d)("Mod Icons", "ChatSettings"),
                            onChange: this.onModIconsToggle
                        })), a.createElement(u.Bb, {
                            margin: {
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            flexWrap: u.Ba.Wrap
                        }, a.createElement(u.N, {
                            checked: this.props.followerModeEnabled,
                            "data-a-target": "follower-mode-checkbox",
                            "data-test-selector": "follower-mode-checkbox",
                            id: "chat-settings-followers-only",
                            label: Object(o.d)("Followers-Only Chat", "ChatSettings"),
                            onChange: this.onFollowerModeToggle
                        }), a.createElement(u.Xa, {
                            alignItems: u.f.Center,
                            display: u.X.Flex,
                            flexWrap: u.Ba.NoWrap,
                            justifyContent: u.Wa.Between
                        }, a.createElement(u.Xa, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            fontSize: u.Ca.Size7,
                            type: u.Rb.Span
                        }, Object(o.d)("Must have followed for", "ChatSettings"))), a.createElement(u.Xa, {
                            className: "chat-settings__mod-tools-follower-button",
                            flexShrink: 0
                        }, a.createElement(_.a, {
                            display: u.X.InlineBlock
                        }, a.createElement(u.z, {
                            size: u.D.Small,
                            type: u.F.Text,
                            "data-a-target": "follower-mode-dropdown",
                            "data-test-selector": "follower-mode-duration-menu",
                            dropdown: !0
                        }, Object(W.d)(t)), a.createElement(u.u, {
                            direction: u.v.TopRight
                        }, a.createElement(u.Xa, {
                            padding: .5
                        }, a.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(o.d)("Followers can chat if they have followed for at least", "ChatSettings"))), a.createElement(u.Bb, {
                            color: u.O.Link
                        }, n)))))), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.slowModeEnabled,
                            "data-a-target": "slow-mode-checkbox",
                            "data-test-selector": "slow-mode-checkbox",
                            id: "chat-settings-slow-mode",
                            label: Object(o.d)("Slow Mode", "ChatSettings"),
                            onChange: this.onSlowModeToggle
                        })), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.showModerationActions,
                            "data-a-target": "show-mod-actions-checkbox",
                            "data-test-selector": "show-mod-actions",
                            id: "chat-settings-show-mod-actions",
                            label: Object(o.d)("Show Moderation Actions", "ChatSettings"),
                            onChange: this.onShowModerationActionsToggle
                        })), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.showAutoModActions,
                            "data-a-target": "show-automod-messages-checkbox",
                            "data-test-selector": "show-automod-messages",
                            id: "chat-settings-show-automod-messages",
                            label: Object(o.d)("Show Messages Caught by AutoMod", "ChatSettings"),
                            onChange: this.onShowAutoModActionsToggle
                        })), a.createElement(N, {
                            key: "recent-raids",
                            recentRaids: this.props.recentRaids,
                            onClickRecentRaids: this.onClickRecentRaids,
                            onUsernameClick: this.props.onShowViewerCard,
                            targetChannelID: this.props.channelID
                        }), this.renderModerationSettingsLink(), a.createElement("button", {
                            onClick: this.onChatClear,
                            "data-a-target": "clear-chat-button",
                            "data-test-selector": "clear-chat-button"
                        }, Object(o.d)("Clear Chat", "ChatSettings")))
                    }, t.prototype.handleModerationSettingsClick = function() {
                        o.m.set("autoModToolTipSeen", 5)
                    }, t.prototype.showAutoModHotSpot = function() {
                        return o.m.get("autoModToolTipSeen", 0) < 5
                    }, t.prototype.renderModerationSettingsLink = function() {
                        var e = Object(o.d)("Manage Moderation Settings", "ChatSettings");
                        return this.showAutoModHotSpot() ? a.createElement(u.Xa, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            alignItems: u.f.Center
                        }, a.createElement(u.U, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            onClick: this.handleModerationSettingsClick
                        }, e), a.createElement("div", {
                            onMouseEnter: this.handleToggleAutoModLink,
                            onMouseLeave: this.handleToggleAutoModLink
                        }, a.createElement(u.Xa, {
                            alignItems: u.f.Center,
                            className: "chat-moderation-settings__highlight-indicator",
                            display: u.X.InlineFlex,
                            justifyContent: u.Wa.Center,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Overlay,
                            fontSize: u.Ca.Size8,
                            type: u.Rb.Span
                        }, "i"), a.createElement(u.Xa, {
                            position: u.hb.Relative
                        }, a.createElement(u.u, {
                            direction: u.v.TopRight,
                            show: this.state.autoModToolTipVisible,
                            offsetX: "-0.6rem",
                            offsetY: "1.5rem"
                        }, a.createElement(u.Xa, {
                            margin: 1
                        }, Object(o.d)("Mods can now update AutoMod levels as well as Blocked and Permitted Terms.", "ChatSettings"))))))) : a.createElement(u.Bb, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Wa.Between,
                            alignItems: u.f.Center,
                            color: u.O.Alt
                        }, a.createElement(u.U, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/automod",
                            "data-a-target": "automod-link-button",
                            "data-test-selector": "automod-link-button",
                            type: u.V.Inherit,
                            hoverUnderlineNone: !0
                        }, e))
                    }, t.prototype.handleToggleAutoModLink = function() {
                        this.setState(function(e) {
                            return {
                                autoModToolTipVisible: !e.autoModToolTipVisible
                            }
                        })
                    }, t
                }(a.Component));
            var X = Object(b.connect)(function(e) {
                    return {
                        followerModeDuration: e.chat.followerDuration,
                        followerModeEnabled: e.chat.followerMode,
                        lastUsedFollowerDurations: e.chat.lastUsedFollowerDurations,
                        showAutoModActions: e.chat.showAutoModActions,
                        showModerationActions: e.chat.showModerationActions,
                        showModerationIcons: e.chat.showModIcons,
                        slowModeEnabled: e.chat.slowMode
                    }
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        onChatHide: function() {
                            return y.L()
                        },
                        onChatUnhide: function() {
                            return y.O()
                        },
                        onFollowerModeDurationPreferenceChange: function(e, t) {
                            return y.y(e, t)
                        },
                        onModIconsDisable: function() {
                            return y.B()
                        },
                        onModIconsEnable: function() {
                            return y.G()
                        },
                        onRoomStateUpdate: function(e) {
                            return y.S(e)
                        },
                        onShowAutoModActionsEnable: function() {
                            return y.H()
                        },
                        onShowAutoModActionsDisable: function() {
                            return y.C()
                        },
                        onShowModerationActionsEnable: function() {
                            return y.I()
                        },
                        onShowModerationActionsDisable: function() {
                            return y.D()
                        },
                        onTimestampsDisable: function() {
                            return y.E()
                        },
                        onTimestampsEnable: function() {
                            return y.J()
                        },
                        onThemeChanged: function(e) {
                            return Object(C.b)(e, void 0, !1)
                        },
                        login: function() {
                            return Object(k.e)(v.a.Chat)
                        }
                    }, e)
                })(P),
                V = n("QVaV"),
                H = n("uIkQ"),
                q = "edit-appearance-button",
                G = "edit-display-name";

            function Q(e) {
                var t = a.createElement(u.W, {
                        bold: !0,
                        type: u.Rb.Span
                    }, a.createElement("span", {
                        style: {
                            color: e.chatColor
                        },
                        "data-a-target": G
                    }, Object(V.a)(e.login, e.displayName))),
                    n = null;
                return e.editAppearance || (n = a.createElement(u.Xa, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(u.U, {
                    hoverUnderlineNone: !0,
                    onClick: e.onClickEdit,
                    "data-a-target": q,
                    "data-test-selector": q
                }, Object(o.d)("Edit Appearance", "ChatSettings")))), a.createElement(u.Bb, {
                    background: u.r.Base,
                    color: u.O.Base,
                    display: u.X.InlineFlex,
                    flexDirection: u.Aa.Column,
                    fullWidth: !0
                }, a.createElement(u.W, {
                    color: u.O.Alt2,
                    transform: u.Qb.Uppercase
                }, Object(o.d)("Name Display", "ChatSettings")), a.createElement(u.Xa, {
                    margin: {
                        top: 2
                    }
                }, e.userBadges && e.userBadges.map(function(e) {
                    return a.createElement(H.a, {
                        key: e.id,
                        badge: e
                    })
                }), t), n)
            }
            var K = n("iFBW");
            n("kELf");
            n.d(t, "DARK_MODE_SELECTOR", function() {
                return $
            }), n.d(t, "SHOW_CHAT_RULES_SELECTOR", function() {
                return Y
            }), n.d(t, "HIDE_CHAT_BUTTON_SELECTOR", function() {
                return J
            }), n.d(t, "LEGACY_POPOUT_BUTTON_SELECTOR", function() {
                return Z
            }), n.d(t, "POPOUT_BUTTON_SELECTOR", function() {
                return ee
            }), n.d(t, "TIMESTAMPS_SELECTOR", function() {
                return te
            }), n.d(t, "HIGH_CONTRAST_SELECTOR", function() {
                return ne
            }), n.d(t, "CHAT_SETTINGS_BACK_BUTTON_SELECTOR", function() {
                return re
            }), n.d(t, "AUTOMOD_TOOLTIP_SEEN_NUM_TIMES_LIMIT", function() {
                return ae
            }), n.d(t, "AUTOMOD_TOOLTIP_SEEN_KEY", function() {
                return oe
            }), n.d(t, "ChatSettingsComponent", function() {
                return ie
            });
            var $ = "dark-mode-checkbox",
                Y = "show-chat-rules-button",
                J = "hide-chat-button",
                Z = "legacy-popout-button",
                ee = "popout-button",
                te = "timestamps-selector",
                ne = "high-contrast-selector",
                re = "chat-settings-back-button",
                ae = 5,
                oe = "autoModToolTipInChatSettings",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            recentRaids: !1,
                            chatColor: null,
                            autoModToolTipVisible: !1
                        }, t.resizeAnimationFrame = 0, t.onClickEdit = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.props.onClickEditAppearance()
                        }, t.onClickRecentRaids = function() {
                            t.setState({
                                recentRaids: !0
                            })
                        }, t.onClickBack = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), t.props.onLeaveEditAppearance(), t.setState({
                                recentRaids: !1
                            })
                        }, t.onColorSelected = function(e) {
                            t.setState({
                                chatColor: e
                            }), t.props.onColorSelected(e)
                        }, t.onBadgesChanged = function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e, t, n;
                                return r.__generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return !this.props.data || this.props.data.loading ? [3, 2] : [4, this.props.data.refetch()];
                                        case 1:
                                            if ((e = r.sent()).data) {
                                                if (!(t = e.data).user.self) return [2];
                                                n = {}, t.user.self.displayBadges.forEach(function(e) {
                                                    n[e.setID] = e.version
                                                }), o.p.tmi.client.updateChannelBadges(this.props.channelLogin, n)
                                            }
                                            r.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onResize = function() {
                            t.resizeAnimationFrame || (t.resizeAnimationFrame = requestAnimationFrame(t.setContainerHeight))
                        }, t.setContainerHeight = function() {
                            var e = t.props.containerElement && t.props.containerElement.clientHeight || 700;
                            t.setState({
                                containerHeight: e
                            }), t.resizeAnimationFrame = 0
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        window.addEventListener("resize", this.onResize, !0), this.setContainerHeight()
                    }, t.prototype.componentWillUnmount = function() {
                        window.removeEventListener("resize", this.onResize, !0), this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame)
                    }, t.prototype.render = function() {
                        if (!this.props.data || this.props.data.loading) return null;
                        var e = null;
                        if (this.props.isLoggedIn && this.props.data.currentUser) {
                            var t = this.props.data.user.self ? this.props.data.user.self.displayBadges : [];
                            e = a.createElement(Q, {
                                key: "name-display",
                                login: this.props.data.currentUser.login,
                                displayName: this.props.data.currentUser.displayName,
                                chatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                                editAppearance: this.props.editAppearance,
                                userBadges: t,
                                onClickEdit: this.onClickEdit
                            })
                        }
                        var n = [];
                        return this.props.isLoggedIn ? this.props.editAppearance ? n = [a.createElement(u.Pa, {
                            margin: {
                                bottom: 2
                            },
                            key: "chat-settings-edit-inject",
                            className: "chat-settings__edit-button"
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            key: "chat-settings-edit",
                            onClick: this.onClickBack,
                            "data-test-selector": re
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Rb.Span
                        }, a.createElement(u.qb, {
                            asset: u.rb.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(o.d)("Back", "ChatSettingsAppearance")))), e, a.createElement(g, {
                            key: "edit-appearance",
                            onColorSelected: this.onColorSelected,
                            editAppearance: this.props.editAppearance,
                            authToken: this.props.authToken,
                            channelLogin: this.props.channelLogin,
                            userChatColor: this.state.chatColor || this.props.data.currentUser.chatColor,
                            userLogin: this.props.data.currentUser.login,
                            onBadgesChanged: this.onBadgesChanged
                        })] : this.state.recentRaids ? n = [a.createElement(u.Pa, {
                            key: "chat-settings-recent-raids"
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            key: "chat-settings-edit",
                            onClick: this.onClickBack,
                            "data-test-selector": re
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Rb.Span
                        }, a.createElement(u.qb, {
                            asset: u.rb.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(o.d)("Back", "ChatSettingsRecentRaids")), a.createElement(u.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(u.W, {
                            key: "recent-raids-title",
                            color: u.O.Alt2,
                            transform: u.Qb.Uppercase
                        }, Object(o.d)("Recent Raids", "ChatSettings"))))), a.createElement(N, {
                            key: "recent-raids",
                            targetChannelID: this.props.channelID,
                            recentRaids: this.state.recentRaids,
                            onClickRecentRaids: this.onClickRecentRaids,
                            onUsernameClick: this.props.onShowViewerCard
                        })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && !this.props.isEmbedded && n.push(a.createElement(X, {
                            key: "moderation-tools",
                            channelLogin: this.props.channelLogin,
                            channelID: this.props.channelID,
                            isCurrentUserModerator: this.props.isCurrentUserModerator,
                            isHostMode: this.props.isHostMode,
                            isLoggedIn: this.props.isLoggedIn,
                            onChatCommand: this.props.onChatCommand,
                            onClickRecentRaids: this.onClickRecentRaids,
                            onShowViewerCard: this.props.onShowViewerCard,
                            recentRaids: this.state.recentRaids
                        }))) : n = [a.createElement(p, {
                            key: "color-chooser",
                            onColorSelected: this.props.onColorSelected
                        }), this.renderUniversalOptions()], a.createElement(i.b, {
                            className: "chat-settings",
                            suppressScrollX: !0,
                            style: {
                                maxHeight: this.state.containerHeight
                            }
                        }, a.createElement("div", null, a.createElement(u.Bb, {
                            key: "chat-settings",
                            className: "chat-settings__content",
                            background: u.r.Base,
                            color: u.O.Base,
                            padding: 2
                        }, n)))
                    }, t.prototype.renderUniversalOptions = function() {
                        if (!this.props.data) return null;
                        var e = this.props.isPopout && a.createElement(u.N, {
                                checked: this.props.darkModeEnabled,
                                "data-a-target": "darkmode-checkbox",
                                "data-test-selector": $,
                                id: "chat-settings-dark-mode",
                                label: Object(o.d)("Dark Mode", "ChatSettings"),
                                onChange: this.props.onDarkModeToggle
                            }),
                            t = this.props.onShowChatRules && a.createElement("button", {
                                onClick: this.props.onShowChatRules,
                                "data-a-target": "show-chat-rules-button",
                                "data-test-selector": Y
                            }, Object(o.d)("Show Chat Rules", "ChatSettings")),
                            n = !this.props.isEmbedded && a.createElement("button", {
                                onClick: this.props.onChatPopout,
                                "data-a-target": "popout-chat-button",
                                "data-test-selector": ee
                            }, Object(o.d)("Popout", "ChatSettings")),
                            r = !this.props.isPopout && a.createElement("button", {
                                onClick: this.props.onChatHide,
                                "data-a-target": "hide-chat-button",
                                "data-test-selector": J
                            }, Object(o.d)("Hide Chat", "ChatSettings"));
                        return a.createElement(u.Xa, {
                            key: "chat-options"
                        }, a.createElement(u.Bb, {
                            borderTop: !0,
                            margin: {
                                top: 2
                            },
                            padding: {
                                y: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            transform: u.Qb.Uppercase
                        }, Object(o.d)("Chat Options", "ChatSettings"))), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.showTimestamps,
                            "data-a-target": "timestamp-checkbox",
                            "data-test-selector": te,
                            id: "chat-settings-timestamp",
                            label: Object(o.d)("Timestamps", "ChatSettings"),
                            onChange: this.props.onTimestampToggle
                        })), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.useHighContrastColors,
                            "data-a-target": "high-contrast-color-checkbox",
                            "data-test-selector": ne,
                            id: "chat-settings-high-contrast",
                            label: Object(o.d)("Readable Colors", "ChatSettings"),
                            onChange: this.props.onHighContrastColorsToggle
                        })), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, e), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, t), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, r), a.createElement(u.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, n))
                    }, t = r.__decorate([Object(s.a)(K, {
                        options: function(e) {
                            return {
                                variables: {
                                    channelLogin: e.channelLogin
                                }
                            }
                        }
                    })], t)
                }(a.Component)
        },
        "M//1": function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatSettings_Badges"
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
                    }],
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
                                        value: "hasPrime"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "hasTurbo"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "selectedBadge"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "badge"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "availableBadges"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "badge"
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
                                                value: "selectedBadge"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "availableBadges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
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
                }],
                loc: {
                    start: 0,
                    end: 306
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_Badges($channelLogin: String!) {\ncurrentUser {\nid\nhasPrime\nhasTurbo\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\nuser(login: $channelLogin) {\nid\nself {\nselectedBadge {\n...badge\n}\navailableBadges {\n...badge\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = r
        },
        MPK0: function(e, t, n) {},
        Mcr7: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RecentRaidsModActions_UnbanUser"
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
                                                value: "isPermanent"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "mutation RecentRaidsModActions_UnbanUser($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        Oy4H: function(e, t, n) {},
        RQ6e: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("TSYQ"),
                o = n("q1tI"),
                i = n("/7QA"),
                s = n("fvjX"),
                l = n("yR8l"),
                c = n("GnwI");
            var d = n("Ue10"),
                u = n("gIsd"),
                p = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleChange = function(e) {
                            t.props.onChange && t.props.onChange(e.target.value)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidUpdate = function() {
                        this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        var e = null,
                            t = Object(i.d)("Select One...", "ReportUserModal");
                        this.props.data.loading ? e = [o.createElement("option", {
                            key: "Loading"
                        }, Object(i.d)("Loading...", "ReportReasonsSelect"))] : e = (this.props.data.reportReasons || [{
                            id: "other",
                            text: Object(i.d)("Other Terms of Service Violation", "ReportUserModal")
                        }]).map(function(e) {
                            return o.createElement("option", {
                                key: e.id,
                                value: e.id
                            }, e.text)
                        });
                        return o.createElement(d.Xa, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(i.d)("Select Reason (required)", "ReportUserModal")
                        }, o.createElement(d.xb, {
                            id: "reporting-modal__select",
                            "data-test-selector": "reporting-modal.select",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.handleChange,
                            defaultValue: t
                        }, o.createElement("option", {
                            disabled: !0,
                            key: "default"
                        }, t), e)))
                    }, t
                }(o.Component),
                h = Object(s.compose)(Object(l.a)(u, {
                    options: function(e) {
                        return {
                            variables: {
                                content: e.reportContentType
                            }
                        }
                    }
                }), Object(c.b)("ReportReasonSelect"))(p);
            n("y4Ne");
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return g
            });
            var m;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(m || (m = {}));
            var g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        description: "",
                        reason: null
                    }, t.headerMessage = Object(i.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: o.createElement("br", null),
                        tosLink: o.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(i.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(m.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        t.setState({
                            reason: e
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(d.Xa, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Wa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === m.Success ? o.createElement("div", null, o.createElement(d.z, {
                        onClick: this.props.onClose
                    }, o.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Close", "ReportUser")))) : o.createElement("div", null, o.createElement(d.Xa, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, o.createElement(d.W, {
                        type: d.Rb.H4
                    }, this.props.title), o.createElement(d.Bb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), o.createElement("form", null, o.createElement(d.Bb, {
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
                    }), o.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(i.d)("Description (required)", "ReportUser")
                    }, o.createElement(d.Ob, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), o.createElement(d.Bb, {
                        display: d.X.Flex,
                        justifyContent: d.Wa.Center
                    }, o.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, o.createElement(d.Xa, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case m.FormError:
                            e = Object(i.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case m.MutationError:
                            e = Object(i.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case m.Success:
                            e = Object(i.d)("Thank you for your report.", "ReportUser");
                            break;
                        case m.UserError:
                            e = Object(i.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== m.Success,
                        "reporting__success-container": this.props.submitStatus === m.Success
                    });
                    return o.createElement(d.Bb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== m.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(o.Component)
        },
        TwNI: function(e, t, n) {},
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("mrSG"),
                a = n("/7QA"),
                o = n("kRBY"),
                i = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.request(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a, o, i, s;
                            return r.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, o = this.serialize(t.body, a), i = r.__assign({}, t, {
                                            body: o
                                        }), [4, this._fetch(e, i)];
                                    case 1:
                                        return s = l.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, l.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return r.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = o.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, r.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw o.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return r.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, o;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        t = {
                                            status: e.status
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, e.json()];
                                    case 2:
                                        return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                    case 3:
                                        return a = r.sent(), e.headers && e.headers.get && (o = e.headers.get("Content-Type")) && -1 !== o.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), r.__awaiter(this, void 0, Promise, function() {
                            return r.__generator(this, function(n) {
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
                            headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                        })
                    }, e.serialize = function(e, t) {
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = a.p.store.getState(),
                            r = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                        var i = Object(o.e)(n);
                        return i && (r.Authorization = "OAuth " + i.authToken, i.legacyCSRFToken && (r["Twitch-Api-Token"] = i.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            r[e] && delete r[e]
                        }), r
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        dAHa: function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                o = n("q1tI"),
                i = n("/MKj"),
                s = n("fvjX"),
                l = n("/7QA"),
                c = n("yR8l"),
                d = n("BhFH"),
                u = n("iS14"),
                p = n("geRD"),
                h = n("f00E"),
                m = n("D7An"),
                g = n("2xye"),
                b = n("GnwI"),
                f = n("QVaV"),
                v = n("Ue10"),
                k = (n("MPK0"), "report-wizard-block"),
                C = "report-wizard-unblock",
                y = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return o.createElement(v.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": k
                            }, o.createElement(v.Xa, {
                                display: v.X.Flex,
                                alignItems: v.f.Center
                            }, o.createElement(v.qb, {
                                type: v.sb.Brand,
                                asset: v.rb.Ban
                            }), o.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Block {user}", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return o.createElement(v.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: v.X.Flex,
                                alignItems: v.f.Center
                            }, o.createElement(v.qb, {
                                type: v.sb.Success,
                                asset: v.rb.FollowCheck
                            }), o.createElement(v.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, o.createElement(v.W, {
                                className: "block-user__success",
                                type: v.Rb.Span
                            }, Object(l.d)("{user} blocked", {
                                user: t.props.targetUser.displayName
                            }, "ReportWizardBlockActions"))), o.createElement(v.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": C
                            }, o.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(l.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                return a.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(f.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return o.createElement(v.Bb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, o.createElement(v.Xa, null, Object(l.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement(v.Bb, {
                            color: v.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, o.createElement(v.ac, {
                            baseFontSize: v.Ca.Size6
                        }, o.createElement("p", null, Object(l.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), o.createElement("ul", null, o.createElement("li", null, Object(l.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Prevent them from hosting you", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), o.createElement("li", null, Object(l.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), o.createElement(v.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(o.Component),
                _ = n("4qQ0");
            ! function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(r || (r = {}));
            var R, T = {
                    generalFilter: function() {
                        return Object(l.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(l.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(l.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(l.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(l.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(l.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(l.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(l.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                S = {
                    input_description: {
                        getTitle: function() {
                            return Object(l.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: r.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(l.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: r.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(l.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: r.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: r.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(l.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: r.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(l.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: r.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(l.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(l.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: r.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: r.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(l.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: r.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(l.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: r.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(l.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: r.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(l.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: r.Link
                    },
                    messaging_general: {
                        getTitle: T.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: T.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(l.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: _.b.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(l.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: _.b.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(l.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: _.b.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(l.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: _.b.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(l.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(l.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: _.b.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(l.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(l.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: _.b.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(l.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: _.b.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(l.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(l.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(l.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: _.b.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(l.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: _.b.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(l.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: _.b.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(l.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: _.b.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(l.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: _.b.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(l.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: _.b.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(l.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: _.b.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(l.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: _.b.Miscategorized
                    },
                    video_general: {
                        getTitle: T.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(l.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: _.b.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(l.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: _.b.Harassment
                    },
                    abusiveViolence: {
                        getTitle: T.abusiveViolence,
                        value: "threatening violence",
                        reportReason: _.b.Harm
                    },
                    commitingViolence: {
                        getTitle: T.commitingViolence,
                        value: "committing violence",
                        reportReason: _.b.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(l.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: _.b.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(l.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: _.b.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(l.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: _.b.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(l.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: _.b.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(l.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: _.b.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(l.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(l.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: _.b.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(l.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: _.b.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(l.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: _.b.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(l.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: _.b.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(l.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: _.b.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(l.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: _.b.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(l.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: _.b.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(l.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: _.b.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(l.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(l.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: _.b.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(l.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: _.b.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(l.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: _.b.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: T.me,
                        value: "impersonating me",
                        reportReason: _.b.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(l.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: _.b.Impersonation
                    },
                    impersonation_other: {
                        getTitle: T.someoneElse,
                        value: "impersonating someone else",
                        reportReason: _.b.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(l.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: _.b.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(l.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(l.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(l.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(l.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(l.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: _.a.Whisper
                    },
                    username: {
                        getTitle: function() {
                            return Object(l.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: _.b.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(l.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(l.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(l.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(l.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(l.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(l.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(l.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(l.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(l.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(l.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: _.b.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: T.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: T.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: T.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: _.b.Harm
                    },
                    external_commitingViolence: {
                        getTitle: T.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: _.b.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(l.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: _.b.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(l.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: _.b.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(l.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(l.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(l.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onChange = function(e) {
                            var n = e.target,
                                r = n.name,
                                a = n.value;
                            t.props.onChangeText(r, a)
                        }, t.onSelect = function(e) {
                            if (t.props.currentCard.items && e.currentTarget.parentElement) {
                                var n = Number(e.currentTarget.parentElement.getAttribute("data-a-index")),
                                    r = t.props.currentCard.items[n];
                                t.props.onChangeRadio(r)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? o.createElement(v.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return o.createElement(v.Xa, {
                            className: "reporting-wizard-card"
                        }, e, o.createElement(v.Ea, {
                            label: this.props.currentCard.getLabel ? this.props.currentCard.getLabel() : ""
                        }, this.renderCardItems()))
                    }, t.prototype.renderCardItems = function() {
                        var e = this,
                            t = this.props.currentCard,
                            n = [];
                        return t.items && t.type && (n = t.items.filter(function(e) {
                            return !!e
                        }).map(function(t, n) {
                            switch (t.type) {
                                case r.Text:
                                    return o.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case r.Link:
                                    return o.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(v.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, o.createElement(v.Xa, {
                                        display: v.X.Flex
                                    }, o.createElement(v.Xa, {
                                        display: v.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, o.createElement(v.qb, {
                                        asset: v.rb.Document
                                    })), t.getTitle())));
                                case r.Textarea:
                                    var a = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        i = t.required && (!a || !!a && 0 === a.trim().length);
                                    return o.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, o.createElement(v.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(l.d)("Optional", "ReportModalWizardCard")
                                    }, o.createElement(v.Ob, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && i,
                                        value: a,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case r.MultipleChoice:
                                default:
                                    return o.createElement(v.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, o.createElement(v.nb, {
                                        checked: !!e.props.currentSelection && e.props.currentSelection.value === t.value,
                                        onChange: e.onSelect,
                                        label: t.getTitle(e.props.targetUser.displayName),
                                        "data-a-index": n,
                                        name: "card",
                                        value: t.value
                                    }))
                            }
                        })), n
                    }, t
                }(o.Component),
                O = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(R || (R = {}));
            var w, M, I, U = {
                    contentGeneral: function() {
                        return Object(l.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(l.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(l.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(l.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(l.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                x = {
                    report: function(e) {
                        return Object(l.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(l.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(l.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(l.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(l.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(l.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(l.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(l.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                j = {
                    getDescription: function() {
                        return Object(l.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: R.Info,
                    value: "end card"
                },
                D = {
                    socialMedia: a.__assign({}, j, {
                        items: [S.endBlurb_socialmedia]
                    }),
                    violence: a.__assign({}, j, {
                        items: [S.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [S.endLink_DMCA, S.endLink_trademark, S.endLink_devAgreement],
                        type: R.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [S.endLink_selfharm],
                        type: R.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(l.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [S.endLink_eventCoC],
                        value: "twitch event end",
                        type: R.Info
                    }
                },
                A = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(l.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [S.video, S.whisper, S.chat, S.room, S.profile, S.username, S.report_other],
                    type: R.MultipleChoice,
                    value: "content type"
                },
                N = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: U.identifyUser,
                        items: [S.video_streamer, S.video_someoneElse, S.video_chatSomeone],
                        type: R.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: U.contentGeneral,
                        items: [S.revealPersonalInfo, S.video_labeling, S.video_inactive, S.video_general, S.report_ip, S.violateDevAgreement, S.selfharm],
                        type: R.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: U.content,
                        items: [S.report_username, S.violence, S.abusive, S.cheating, S.scam, S.inappropriateContent, S.evasion, S.impersonation, S.underage, S.bitsViolation],
                        type: R.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                W = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: U.contentGeneral,
                        items: [S.revealPersonalInfo, S.evasion, S.spam, S.maliciousRaid, S.report_username, S.messaging_general, S.selfharm],
                        type: R.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: U.content,
                        items: [S.report_emotes, S.violence, S.abusive, S.inappropriateContent, S.impersonation, S.underage, S.bitsViolation],
                        type: R.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = a.__assign({}, W.content, {
                    getDescription: function() {
                        return Object(l.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                z = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: U.contentGeneral,
                        items: [S.revealPersonalInfo, S.inappropriateBadge, S.inappropriateExtension, S.noModeration, S.profile_general, S.report_ip, S.violateDevAgreement, S.selfharm],
                        type: R.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: U.content,
                        items: [S.report_username, S.violence, S.abusive, S.scam, S.inappropriateContent, S.evasion, S.impersonation, S.underage, S.bitsViolation],
                        type: R.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                F = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.identifyUser,
                    items: [S.report_channelOwner, S.report_member],
                    value: "room report user",
                    type: R.MultipleChoice
                },
                L = {
                    getTitle: x.tellUsMore,
                    items: [S.input_description],
                    type: R.Confirm,
                    value: "tell us more"
                },
                P = {
                    banEvasion: a.__assign({}, L, {
                        items: [S.input_usernames, S.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: a.__assign({}, L, {
                        items: [S.input_link, S.input_connection, S.input_description],
                        nextCard: D.socialMedia,
                        value: "social media tell us more"
                    })
                },
                X = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: U.relevantStatements,
                        items: [S.hateSpeech, S.harassment, S.abusiveViolence, S.commitingViolence, S.swatting, S.personalInfo],
                        type: R.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [S.threat_me, S.threat_person, S.threat_group, S.threat_selfharm],
                        type: R.MultipleChoice,
                        value: "violence type"
                    }
                },
                V = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(l.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [S.location_onTwitch, S.location_anotherSite, S.location_TwitchEvent],
                        type: R.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(l.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: U.thisPersonIs,
                        getDescription: function() {
                            return Object(l.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [S.external_incitingRaids, S.external_threatening, S.external_harassment],
                        type: R.MultipleChoice,
                        nextCard: P.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: a.__assign({}, X.violence, {
                        items: [S.threat_me, S.threat_person, S.threat_group],
                        nextCard: P.socialMedia
                    }),
                    external_abusive: a.__assign({}, X.content, {
                        items: [S.hateSpeech, S.harassment, S.external_abusiveViolence, S.external_commitingViolence, S.swatting, S.personalInfo],
                        nextCard: P.socialMedia
                    })
                },
                H = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.contentGeneral,
                    items: [S.spam_bot, S.spam_scam, S.spam_repeated],
                    type: R.MultipleChoice,
                    value: "spam type"
                },
                q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: U.relevantStatements,
                    items: [S.inappropriate_game, S.gory, S.sexuallyViolent, S.childAnimal, S.pornographic, S.suggestive, S.nudity, S.other],
                    type: R.MultipleChoice,
                    value: "inappropriate content type"
                },
                G = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [S.evasion_chat, S.evasion_sitewide, S.evasion_messaging],
                    type: R.MultipleChoice,
                    nextCard: P.banEvasion
                },
                Q = {
                    getTitle: function(e) {
                        return Object(l.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(l.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(l.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [S.impersonation_me, S.impersonation_brand, S.impersonation_other],
                    type: R.MultipleChoice,
                    value: "impersonation type"
                },
                K = A,
                $ = L,
                Y = j,
                J = {
                    video: N.identifyUser,
                    whisper: B,
                    chat: W.content,
                    profile: z.content,
                    room: F,
                    "somewhere else": V.identifyLocation,
                    streamer: N.content,
                    "someone else in video": N.content,
                    "someone in chat": W.content,
                    general_video: N.general,
                    general_messaging: W.general,
                    general_profile: z.general,
                    "channel owner": z.content,
                    "community member": W.content,
                    "on twitch": z.content,
                    "another site": V.externalSite,
                    "twitch event": D.twitchEvent,
                    "brigading/raids": P.socialMedia,
                    threatening: V.external_violence,
                    "hateful/harassing": V.external_abusive,
                    "external site; threatening violence": V.external_violence,
                    "external site; committing violence": V.external_violence,
                    "external site; scam": P.socialMedia,
                    "ban evasion": G,
                    spam: H,
                    hateful: X.content,
                    impersonation: Q,
                    "violence/threats": X.violence,
                    "threatening violence": X.violence,
                    "committing violence": X.violence,
                    abusive: X.content,
                    "inappropriate content": q,
                    "intellectual property": D.legal,
                    "violating developer agreement": D.legal
                },
                Z = {
                    selfharm: D.selfharm,
                    harm: D.violence,
                    other: Y
                },
                ee = {
                    CHANNEL_FEED_POST_REPORT: z.content,
                    COMMUNITY_REPORT: z.content,
                    CHAT_REPORT: W.content,
                    CLIP_REPORT: N.content,
                    EVENT_REPORT: z.content,
                    EXTENSION_REPORT: z.content,
                    LIVE_UP_REPORT: z.content,
                    ROOM_REPORT: F,
                    WHISPER_REPORT: B,
                    VOD_COMMENT_REPORT: W.content
                },
                te = "report-wizard-back",
                ne = "report-wizard-close",
                re = "report-wizard-next",
                ae = "report-wizard-submit",
                oe = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ee[t.props.reportContentType] || K,
                            prevCards: [],
                            currentSelection: null,
                            prevSelections: [],
                            displacedSelections: [],
                            userTextInput: {},
                            error: "",
                            reportReason: t.props.reportReason || "",
                            modalCloseTracked: !1,
                            targetUnknown: !1,
                            reportContext: t.props.reportContentType
                        }, t.renderPrimer = function() {
                            return o.createElement(v.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, o.createElement(v.W, null, Object(l.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(l.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ne,
                                a = !1,
                                i = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case R.MultipleChoice:
                                    e = Object(l.d)("Next", "ReportModalWizard"), n = t.handleNext, r = re, a = !t.state.currentSelection;
                                    break;
                                case R.Confirm:
                                    e = Object(l.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, r = ae
                            }
                            return o.createElement(v.Xa, null, i, o.createElement(v.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": r
                            }, o.createElement(v.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return o.createElement(v.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: v.X.InlineBlock
                            }, o.createElement(v.z, {
                                type: v.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": te
                            }, o.createElement(v.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(l.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(l.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(l.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(I.Finish, t.state.currentCard.value)
                            }), t.props.onClose()
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    o = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    i = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = e.nextCard || $;
                                J[t.state.currentSelection.value] && (s = J[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === R.Info;
                                t.setState({
                                    currentCard: s,
                                    reportReason: l,
                                    prevCards: c ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: o,
                                    currentSelection: a || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: i
                                }, function() {
                                    return t.trackNavigation(M.Next, e.value)
                                })
                            }
                        }, t.createReportDescription = function() {
                            return "" + (t.state.reportContext !== t.props.reportContentType ? "report context: " + t.props.reportContentType + "\n\n" : "") + t.state.prevSelections.map(function(e) {
                                if (!e.omitFromDescription) return e.value
                            }).filter(function(e) {
                                return !!e
                            }).join(" > ") + "\n\n" + Object.keys(t.state.userTextInput).map(function(e) {
                                return e + ": " + t.state.userTextInput[e]
                            }).join("\n")
                        }, t.requiredInputsNonEmpty = function() {
                            if (t.state.currentCard.items) return 0 === t.state.currentCard.items.filter(function(e) {
                                if (e.type !== r.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    a = n && 0 === n.trim().length;
                                return !n || a
                            }).length
                        }, t.handleSubmit = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o = this;
                                return a.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return e = Object(l.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (a.sent(), this.props.submitStatus) {
                                                case O.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case O.a.Success:
                                                    r = Y, Z[t] && (r = Z[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return o.trackNavigation(M.Submit)
                                                    });
                                                    break;
                                                case O.a.UserError:
                                                    this.setState({
                                                        error: Object(l.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case O.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(l.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(O.a.FormError), this.setState({
                                                error: e
                                            }), a.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return a.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, o, i = this;
                                return a.__generator(this, function(a) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, o = this.state.displacedSelections, this.state.currentSelection && (o = o.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: o,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return i.trackNavigation(M.Back, e.value)
                                    }), [2]
                                })
                            })
                        }, t.handleTextInput = function(e, n) {
                            var r = t.state.userTextInput;
                            r[e] = n, t.setState({
                                userTextInput: r
                            })
                        }, t.handleSelection = function(e) {
                            if (t.state.currentCard.items && e !== t.state.currentSelection) {
                                var n = t.state.targetUnknown;
                                if (n) n = 0 === t.state.displacedSelections.filter(function(e) {
                                    return e.differentTarget
                                }).length;
                                var r = t.state.reportContext;
                                (t.state.displacedSelections.filter(function(e) {
                                    return e.reportContext
                                }).length || t.state.currentSelection && t.state.currentSelection.reportContext) && (r = t.props.reportContentType), t.setState({
                                    currentSelection: e,
                                    displacedSelections: [],
                                    userTextInput: {},
                                    targetUnknown: n,
                                    reportContext: r
                                })
                            }
                        }, t.trackNavigation = function(e, n) {
                            t.props.trackAction(e, n, t.state.currentCard.value)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(I.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === R.Info && this.state.currentCard.blockPrompt ? o.createElement(y, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? o.createElement(v.Bb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === R.Info ? null : this.renderPrimer();
                        return o.createElement(v.Bb, {
                            className: "reporting-wizard",
                            display: v.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: v.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, o.createElement(v.W, {
                            bold: !0,
                            fontSize: v.Ca.Size4
                        }, this.getTitle()), n, o.createElement(v.Xa, {
                            margin: {
                                y: 1
                            }
                        }, o.createElement(E, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === O.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(o.Component),
                ie = n("s8Ou"),
                se = n("0hI/");
            n.d(t, "c", function() {
                    return M
                }), n.d(t, "a", function() {
                    return I
                }), n.d(t, "b", function() {
                    return ce
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(w || (w = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(M || (M = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(I || (I = {}));
            var le = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return a.__awaiter(n, void 0, void 0, function() {
                            var n, o, i, s = this;
                            return a.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (n = r === _.a.Whisper ? r : this.props.reportContext.contentType, null === (o = {
                                                description: t,
                                                reason: e,
                                                content: n,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: O.a.UserError
                                        }), [2];
                                        a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(p.a)(o))];
                                    case 2:
                                        return a.sent(), this.setState({
                                            submitStatus: O.a.Success
                                        }, function() {
                                            s.state.showWizard || s.trackAction(w.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), l.k.error(i, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: O.a.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.handleChildError = function(e) {
                        return n.setState({
                            submitStatus: e
                        })
                    }, n.handleClose = function() {
                        n.props.onClose && n.props.onClose(n.state.submitStatus, n.state.userBlocked)
                    }, n.onBlock = function() {
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, a.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(M.Open, void 0, e) : n.trackAction(w.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(M.Close, t, void 0, e) : n.trackAction(w.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, a) {
                        l.p.tracking.track(g.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === O.a.Success,
                            modal_type: "wizard_v1",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: a,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r
                        })
                    }, n.trackAction = function(e) {
                        l.p.tracking.track(g.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === O.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(h.a)();
                    var r = l.p.experiments.getAssignment(m.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: O.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return o.createElement(v.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(v.W, {
                        fontSize: v.Ca.Size5
                    }, Object(l.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return o.createElement(v.gb, {
                        lineCount: 3
                    });
                    if (this.props.data.targetUser) {
                        var e = {
                            onClose: this.handleClose,
                            onError: this.handleChildError,
                            onSubmit: this.handleSubmit,
                            reportContentType: this.props.reportContext.contentType,
                            submitStatus: this.state.submitStatus,
                            title: this.props.title,
                            defaultDescription: this.props.defaultDescription
                        };
                        return this.state.showWizard ? this.props.data.loading ? o.createElement(v.Za, null) : o.createElement(oe, a.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : o.createElement(O.b, a.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return o.createElement(v.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(v.W, {
                        fontSize: v.Ca.Size5
                    }, Object(l.d)("The user you are trying to report does not exist", "ReportUser")))
                }, Object.defineProperty(t.prototype, "userBlocked", {
                    get: function() {
                        var e = this;
                        return !!(this.props.data.currentUser && this.props.data.currentUser.blockedUsers && this.props.data.currentUser.blockedUsers.find(function(t) {
                            return !!t && t.id === e.props.reportContext.targetUserID
                        }))
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.Component);
            var ce = Object(s.compose)(Object(c.a)(ie, {
                name: "reportUser"
            }), Object(c.a)(se, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(b.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(d.a)(), Object(u.a)(), Object(i.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(le)
        },
        g5kB: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "RecentRaidsModActions_BanUser"
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
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPermanent"
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
                    end: 136
                }
            };
            n.loc.source = {
                body: "mutation RecentRaidsModActions_BanUser($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        gIsd: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                        value: "text"
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
                    end: 114
                }
            };
            n.loc.source = {
                body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\nreportReasons(content: $content) {\nid\ntext\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        iFBW: function(e, t, n) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatSettings_CurrentUser"
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
                    }],
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
                                        value: "chatColor"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
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
                                                value: "displayBadges"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "badge"
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
                }],
                loc: {
                    start: 0,
                    end: 236
                }
            };
            r.loc.source = {
                body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery ChatSettings_CurrentUser($channelLogin: String!) {\ncurrentUser {\nid\nlogin\ndisplayName\nchatColor\n}\nuser(login: $channelLogin) {\nid\nself {\ndisplayBadges {\n...badge\n}\n}\n}\n}',
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            var a = {};
            r.definitions = r.definitions.concat(function(e) {
                return e.filter(function(e) {
                    if ("FragmentDefinition" !== e.kind) return !0;
                    var t = e.name.value;
                    return !a[t] && (a[t] = !0, !0)
                })
            }(n("IKE4").definitions)), e.exports = r
        },
        kELf: function(e, t, n) {},
        op4u: function(e, t, n) {},
        s8Ou: function(e, t) {
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
                        }
                    }],
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
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
                                    name: {
                                        kind: "Name",
                                        value: "contentID"
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
                    end: 111
                }
            };
            n.loc.source = {
                body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\nreportContent(input: $input) {\ncontentID\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "u/v7": function(e, t, n) {},
        y4Ne: function(e, t, n) {}
    }
]);