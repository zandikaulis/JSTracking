(window.webpackJsonp = window.webpackJsonp || []).push([
    [199], {
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
                        return o.createElement(u.Eb, {
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
                                transform: u.Ub.Uppercase,
                                color: u.O.Alt2
                            }, n);
                        this.props.borderTop && (r = a.createElement(u.Eb, {
                            margin: {
                                top: 2
                            },
                            borderTop: !0,
                            padding: {
                                top: 2
                            }
                        }, r));
                        var i = this.props.hasExtraColors ? "https://www.twitch.tv/settings/prime" : "https://twitch.tv/products/turbo?ref=more_colors_direct";
                        return a.createElement("div", null, a.createElement(u.Eb, {
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
                                }, a.createElement(u.Yb, {
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
                            }, a.createElement(u.Yb, {
                                label: Object(o.d)("Same as Global", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.sb, {
                                asset: u.tb.Global
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
                                }, a.createElement(u.Yb, {
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
                            }, a.createElement(u.Yb, {
                                label: Object(o.d)("None", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.sb, {
                                asset: u.tb.Ban
                            }))))), a.createElement("div", null, a.createElement(u.Eb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Eb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Yb, {
                                align: u.Zb.Left,
                                label: Object(o.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Ub.Uppercase
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
                            }, b))), a.createElement(u.Eb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Eb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Yb, {
                                align: u.Zb.Left,
                                label: Object(o.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Ub.Uppercase
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
                S = n("aCAx"),
                T = n("/HY+"),
                R = n("DMoW"),
                E = n("geRD"),
                w = n("cys1"),
                O = n("oK83"),
                M = n("g5kB"),
                I = n("3gEX"),
                U = (n("u/v7"), n("Mcr7")),
                j = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onUsernameClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-username"),
                                r = e.currentTarget.getAttribute("data-raid-id") || "";
                            n && t.props.onUsernameClick(n, O.a.recent_raids, r)
                        }, t.onBanButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-channel-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-login") || "";
                            (0, t.props.banUser)(Object(E.a)({
                                channelID: n,
                                bannedUserLogin: r
                            }))
                        }, t.onUnbanButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-channel-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-login") || "";
                            (0, t.props.unbanUser)(Object(E.a)({
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
                            position: u.jb.Relative
                        }, a.createElement(u.Xa, {
                            className: "recent-raids-item__timestamp"
                        }, Object(w.m)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
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
                            zIndex: u.ic.Above,
                            "data-a-target": "recent-raids-item-hover"
                        }, this.props.slideInContent, e)
                    }, t = r.__decorate([Object(s.a)(I, {
                        options: function(e) {
                            return {
                                variables: {
                                    targetUserID: e.raiderUserID,
                                    channelID: e.channelID
                                },
                                fetchPolicy: "cache-and-network"
                            }
                        }
                    }), Object(s.a)(M, {
                        name: "banUser",
                        options: function(e) {
                            return {
                                update: function(t, n) {
                                    ! function(e, t, n) {
                                        var r = e.readQuery({
                                            query: I,
                                            variables: {
                                                targetUserID: n.raiderUserID,
                                                channelID: n.channelID
                                            }
                                        });
                                        r && (t && t.data && (r.chatRoomBanStatus = {
                                            isPermanent: !0,
                                            __typename: "ChatRoomBanStatus"
                                        }), e.writeQuery({
                                            query: I,
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
                    }), Object(s.a)(U, {
                        name: "unbanUser",
                        options: function(e) {
                            return {
                                update: function(t) {
                                    ! function(e, t) {
                                        var n = e.readQuery({
                                            query: I,
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
                                                query: I,
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
                D = function(e) {
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
                A = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onReportButtonClick = function(e) {
                            var n = e.currentTarget.getAttribute("data-raid-id") || "",
                                r = e.currentTarget.getAttribute("data-target-user-id") || "",
                                a = e.currentTarget.getAttribute("data-target-user-login") || "";
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: R.N.RAID_REPORT,
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
                                        return [4, D.fetchRecentRaidsList(this.props.targetChannelID)];
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
                                    type: u.Vb.P
                                }, Object(o.d)("You have no recent raids", "RecentRaids"))), this.state.raidChannels)
                                if (r.hasOwnProperty) {
                                    var i = this.state.raidChannels[r];
                                    this.state.raidChannels.hasOwnProperty(r) && void 0 === n[i.userID] && (t.push(a.createElement(j, {
                                        key: "recent-raids-item-" + i.userID,
                                        slideInContent: [a.createElement(u.Eb, {
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
                                        }, Object(o.d)("Report", "RecentRaid")), a.createElement(u.Yb, {
                                            align: u.Zb.Right,
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
                            type: u.Vb.Span
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
                            position: u.jb.Relative
                        }, a.createElement(u.Yb, {
                            align: u.Zb.Right,
                            direction: u.ac.Top,
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
                            type: u.Vb.Span
                        }, "i"))))), a.createElement(u.Xa, null, s))
                    }, t
                }(a.Component);
            var N = Object(b.connect)(function() {
                    return {}
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        showReportUserModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(S.d)(T.a, t)
                        }
                    }, e)
                })(A),
                W = n("W/3w"),
                z = n("r2Xj"),
                B = n("WytW"),
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
                            n.props.onChatCommand(Object(B.b)())
                        }, n.getSelectedFollowerDuration = function() {
                            if (n.props.followerModeEnabled) return n.props.followerModeDuration;
                            var e = n.props.lastUsedFollowerDurations[n.props.channelLogin];
                            return "number" == typeof e ? e : W.a
                        }, n.onFollowerModeToggle = function() {
                            if (n.props.followerModeEnabled) n.props.onChatCommand(Object(B.c)()), n.props.onRoomStateUpdate({
                                followersOnly: !1
                            });
                            else {
                                var e = n.getSelectedFollowerDuration();
                                n.props.onChatCommand(Object(B.e)(e)), n.props.onRoomStateUpdate({
                                    followersOnly: !0,
                                    followersOnlyRequirement: e
                                })
                            }
                            Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.followerModeEnabled,
                                settingName: z.a.FollowerMode
                            })
                        }, n.onSlowModeToggle = function() {
                            n.props.slowModeEnabled ? (n.props.onChatCommand(Object(B.d)()), n.props.onRoomStateUpdate({
                                slowMode: !1
                            })) : (n.props.onChatCommand(Object(B.f)()), n.props.onRoomStateUpdate({
                                slowMode: !0
                            })), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.slowModeEnabled,
                                settingName: z.a.SlowMode
                            })
                        }, n.onFollowerDurationChange = function(e) {
                            Object(F.c)(n.props.channelLogin, e), n.props.onFollowerModeDurationPreferenceChange(n.props.channelLogin, e), n.props.followerModeEnabled && (n.props.onChatCommand(Object(B.e)(e)), n.props.onRoomStateUpdate({
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
                                settingName: z.a.ShowModIcons
                            })
                        }, n.onShowModerationActionsToggle = function() {
                            Object(F.b)("showModerationActions", !n.props.showModerationActions), n.props.showModerationActions ? n.props.onShowModerationActionsDisable() : n.props.onShowModerationActionsEnable(), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showModerationActions,
                                settingName: z.a.ShowModActions
                            })
                        }, n.onShowAutoModActionsToggle = function() {
                            Object(F.b)("showAutoModActions", !n.props.showAutoModActions), n.props.showAutoModActions ? n.props.onShowAutoModActionsDisable() : n.props.onShowAutoModActionsEnable(), Object(L.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showAutoModActions,
                                settingName: z.a.ShowAutoModActions
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
                        return a.createElement(u.Eb, {
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
                            transform: u.Ub.Uppercase
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
                        })), a.createElement(u.Eb, {
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
                            type: u.Vb.Span
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
                        }, Object(o.d)("Followers can chat if they have followed for at least", "ChatSettings"))), a.createElement(u.Eb, {
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
                            type: u.Vb.Span
                        }, "i"), a.createElement(u.Xa, {
                            position: u.jb.Relative
                        }, a.createElement(u.u, {
                            direction: u.v.TopRight,
                            show: this.state.autoModToolTipVisible,
                            offsetX: "-0.6rem",
                            offsetY: "1.5rem"
                        }, a.createElement(u.Xa, {
                            margin: 1
                        }, Object(o.d)("Mods can now update AutoMod levels as well as Blocked and Permitted Terms.", "ChatSettings"))))))) : a.createElement(u.Eb, {
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
            var V = Object(b.connect)(function(e) {
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
                X = n("QVaV"),
                H = n("uIkQ"),
                q = "edit-appearance-button",
                G = "edit-display-name";

            function K(e) {
                var t = a.createElement(u.W, {
                        bold: !0,
                        type: u.Vb.Span
                    }, a.createElement("span", {
                        style: {
                            color: e.chatColor
                        },
                        "data-a-target": G
                    }, Object(X.a)(e.login, e.displayName))),
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
                }, Object(o.d)("Edit Appearance", "ChatSettings")))), a.createElement(u.Eb, {
                    background: u.r.Base,
                    color: u.O.Base,
                    display: u.X.InlineFlex,
                    flexDirection: u.Aa.Column,
                    fullWidth: !0
                }, a.createElement(u.W, {
                    color: u.O.Alt2,
                    transform: u.Ub.Uppercase
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
            var Q = n("iFBW");
            n("kELf");
            n.d(t, "DARK_MODE_SELECTOR", function() {
                return Y
            }), n.d(t, "SHOW_CHAT_RULES_SELECTOR", function() {
                return $
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
            var Y = "dark-mode-checkbox",
                $ = "show-chat-rules-button",
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
                            e = a.createElement(K, {
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
                            type: u.Vb.Span
                        }, a.createElement(u.sb, {
                            asset: u.tb.ChatSettingsBack,
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
                            type: u.Vb.Span
                        }, a.createElement(u.sb, {
                            asset: u.tb.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(o.d)("Back", "ChatSettingsRecentRaids")), a.createElement(u.Xa, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(u.W, {
                            key: "recent-raids-title",
                            color: u.O.Alt2,
                            transform: u.Ub.Uppercase
                        }, Object(o.d)("Recent Raids", "ChatSettings"))))), a.createElement(N, {
                            key: "recent-raids",
                            targetChannelID: this.props.channelID,
                            recentRaids: this.state.recentRaids,
                            onClickRecentRaids: this.onClickRecentRaids,
                            onUsernameClick: this.props.onShowViewerCard
                        })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && !this.props.isEmbedded && n.push(a.createElement(V, {
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
                        }, a.createElement("div", null, a.createElement(u.Eb, {
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
                                "data-test-selector": Y,
                                id: "chat-settings-dark-mode",
                                label: Object(o.d)("Dark Mode", "ChatSettings"),
                                onChange: this.props.onDarkModeToggle
                            }),
                            t = this.props.onShowChatRules && a.createElement("button", {
                                onClick: this.props.onShowChatRules,
                                "data-a-target": "show-chat-rules-button",
                                "data-test-selector": $
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
                        }, a.createElement(u.Eb, {
                            borderTop: !0,
                            margin: {
                                top: 2
                            },
                            padding: {
                                y: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            transform: u.Ub.Uppercase
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
                    }, t = r.__decorate([Object(s.a)(Q, {
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
                        }, o.createElement(d.zb, {
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
                        type: d.Vb.H4
                    }, this.props.title), o.createElement(d.Eb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), o.createElement("form", null, o.createElement(d.Eb, {
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
                    }, o.createElement(d.Sb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), o.createElement(d.Eb, {
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
                    return o.createElement(d.Eb, {
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
            var r, a, o = n("mrSG"),
                i = n("q1tI"),
                s = n("/MKj"),
                l = n("fvjX"),
                c = n("/7QA"),
                d = n("yR8l"),
                u = n("BhFH"),
                p = n("iS14"),
                h = n("geRD"),
                m = n("f00E"),
                g = n("D7An"),
                b = n("DMoW"),
                f = n("2xye"),
                v = n("GnwI"),
                k = n("QVaV"),
                C = n("Ue10"),
                y = (n("MPK0"), "report-wizard-block"),
                _ = "report-wizard-unblock",
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": y
                            }, i.createElement(C.Xa, {
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(C.sb, {
                                type: C.ub.Brand,
                                asset: C.tb.Ban
                            }), i.createElement(C.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return i.createElement(C.Xa, {
                                className: "reporting-wizard__block-actions",
                                display: C.X.Flex,
                                alignItems: C.f.Center
                            }, i.createElement(C.sb, {
                                type: C.ub.Success,
                                asset: C.tb.FollowCheck
                            }), i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(C.W, {
                                className: "block-user__success",
                                type: C.Vb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), i.createElement(C.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": _
                            }, i.createElement(C.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Unblock", "ReportWizardBlockActions"))))
                        }, t.handleBlock = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                return o.__generator(this, function(e) {
                                    return this.props.onBlock(), this.setState({
                                        userBlocked: !0
                                    }), [2]
                                })
                            })
                        }, t.handleUnblock = function() {
                            t.props.onUnblock(), t.setState({
                                userBlocked: !1
                            })
                        }, t.displayName = function() {
                            var e = t.props.targetUser.displayName,
                                n = t.props.targetUser.login;
                            return e || (n || "")
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.state.userBlocked ? this.renderUnblock() : this.renderBlock(),
                            t = Object(k.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(C.Eb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(C.Xa, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(C.Eb, {
                            color: C.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(C.ec, {
                            baseFontSize: C.Ca.Size6
                        }, i.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement("ul", null, i.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), i.createElement(C.Xa, {
                            margin: {
                                top: 1
                            }
                        }, e))
                    }, t
                }(i.Component);
            ! function(e) {
                e.BitsViolation = "bits_violation", e.ChatBanEvasion = "chat_ban_evasion", e.Cheating = "cheating", e.Gore = "gore", e.Harassment = "harassment", e.Harm = "harm", e.HatefulConduct = "hateful_conduct", e.Impersonation = "impersonation", e.Miscategorized = "miscategorized", e.OffensiveUsername = "offensive_username", e.Other = "other", e.Porn = "porn", e.Prohibited = "prohibited", e.SelfHarm = "selfharm", e.SexualContent = "sexual_content", e.SexualViolence = "sexual_violence", e.Spam = "spam", e.TosBanEvasion = "tos_ban_evasion", e.Underaged = "underaged"
            }(r || (r = {})),
            function(e) {
                e.Link = "link", e.MultipleChoice = "multiple choice", e.Text = "text", e.Textarea = "textarea"
            }(a || (a = {}));
            var T, R = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    sexuallyCoercive: function() {
                        return Object(c.d)("acting in a sexually coercive or inappropriate way", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("They're threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("They're committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("being hateful, harassing, or abusive", "ReportModalWizard")
                    }
                },
                E = {
                    input_description: {
                        getTitle: function() {
                            return Object(c.d)("Could you provide more detail about this issue? You may include links to videos, clips, and content outside Twitch.", "ReportModalWizard")
                        },
                        value: "description",
                        type: a.Textarea,
                        required: !0
                    },
                    input_link: {
                        getTitle: function() {
                            return Object(c.d)("If possible, please provide a link to show us where the issue occurred. Links that do not lead to the original source of the content may not be usable as evidence.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "external links",
                        type: a.Textarea
                    },
                    input_usernames: {
                        getTitle: function() {
                            return Object(c.d)("If you know the usernames of any other Twitch accounts that may be owned by this person, please list them in this space.", "ReportModalWizard")
                        },
                        value: "other usernames",
                        rows: 2,
                        type: a.Textarea
                    },
                    input_connection: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you connected the offsite content to this Twitch account.", "ReportModalWizard")
                        },
                        value: "offsite content connection",
                        type: a.Textarea
                    },
                    input_comments: {
                        getTitle: function() {
                            return Object(c.d)("If you have any other comments you would like to add, please do so here.", "ReportModalWizard")
                        },
                        value: "comments",
                        type: a.Textarea
                    },
                    input_identifyOwner: {
                        getTitle: function() {
                            return Object(c.d)("Please describe how you identified this person as the owner of this Twitch account.", "ReportModalWizard")
                        },
                        rows: 2,
                        value: "connect account owner",
                        type: a.Textarea
                    },
                    endBlurb_socialmedia: {
                        getTitle: function() {
                            return Object(c.d)("Please submit a report to the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endLink_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("Learn more about mental health support", "ReportModalWizard")
                        },
                        value: "https://help.twitch.tv/customer/en/portal/articles/2904486-twitch-cares-mental-health-support-information",
                        type: a.Link
                    },
                    endLink_DMCA: {
                        getTitle: function() {
                            return Object(c.d)("View our DMCA Notification Guidelines", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/dmca-guidelines/",
                        type: a.Link
                    },
                    endLink_trademark: {
                        getTitle: function() {
                            return Object(c.d)("View our Trademark Policy", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/trademark-policy/",
                        type: a.Link
                    },
                    endLink_devAgreement: {
                        getTitle: function() {
                            return Object(c.d)("View our Developer Agreement", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/developer-agreement/",
                        type: a.Link
                    },
                    endLink_eventCoC: {
                        getTitle: function() {
                            return Object(c.d)("View our Events Code of Conduct", "ReportModalWizard")
                        },
                        value: "https://www.twitch.tv/p/legal/events-code-of-conduct",
                        type: a.Link
                    },
                    messaging_general: {
                        getTitle: R.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: R.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("They're participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("It contains threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("They're using an inappropriate or offensive username", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes are inappropriate or offensive", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: function() {
                            return Object(c.d)("It's hateful, harassing, or abusive", "ReportModalWizard")
                        },
                        value: "abusive"
                    },
                    scam: {
                        getTitle: function() {
                            return Object(c.d)("It contains attempts to scam other community members", "ReportModalWizard")
                        },
                        value: "scam",
                        reportReason: r.Spam
                    },
                    emptyStream: {
                        getTitle: function() {
                            return Object(c.d)("There's nobody on the stream", "ReportModalWizard")
                        },
                        value: "empty stream"
                    },
                    impersonation: {
                        getTitle: function() {
                            return Object(c.d)("They're impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    underage: {
                        getTitle: function() {
                            return Object(c.d)("They're underage (12 or younger)", "ReportModalWizard")
                        },
                        value: "underage",
                        reportReason: r.Underaged
                    },
                    report_ip: {
                        getTitle: function() {
                            return Object(c.d)("I think they're using copyrighted content, trademarks, or other intellectual property that's not theirs", "ReportModalWizard")
                        },
                        value: "intellectual property"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("I think they're violating Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They might have revealed someone's personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Other
                    },
                    inappropriateBadge: {
                        getTitle: function() {
                            return Object(c.d)("Their emote or subscriber badge violates Twitch's Guidelines", "ReportModalWizard")
                        },
                        value: "emote/subscriber badge",
                        reportReason: r.Other
                    },
                    noModeration: {
                        getTitle: function() {
                            return Object(c.d)("They're not moderating their chat appropriately", "ReportModalWizard")
                        },
                        value: "not moderating chat",
                        reportReason: r.Other
                    },
                    inappropriateExtension: {
                        getTitle: function() {
                            return Object(c.d)("Their extension contains malicious or inappropriate content", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("They're cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("Their use of Bits goes against Twitch's Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is labeled incorrectly", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("The stream is inactive (sleeping/AFK)", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: R.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("They're using hate speech, hateful symbols, or hateful media", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("They're harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: R.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: R.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("They're inciting or committing swatting or a DDOS attack", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("They're purposely revealing personal information", "ReportModalWizard")
                        },
                        value: "revealing personal info",
                        reportReason: r.Harassment
                    },
                    threat_me: {
                        getTitle: function() {
                            return Object(c.d)("At me", "ReportModalWizard")
                        },
                        value: "against me",
                        reportReason: r.Harm
                    },
                    threat_person: {
                        getTitle: function() {
                            return Object(c.d)("At someone else", "ReportModalWizard")
                        },
                        value: "against another person",
                        reportReason: r.Harm
                    },
                    threat_group: {
                        getTitle: function() {
                            return Object(c.d)("At a group of people", "ReportModalWizard")
                        },
                        value: "against group of people",
                        reportReason: r.Harm
                    },
                    threat_selfharm: {
                        getTitle: function() {
                            return Object(c.d)("They're threatening self-harm", "ReportModalWizard")
                        },
                        value: "selfharm"
                    },
                    inappropriate_game: {
                        getTitle: function() {
                            return Object(c.d)("The game isn't allowed on Twitch", "ReportModalWizard")
                        },
                        value: "prohibited game",
                        reportReason: r.Prohibited
                    },
                    sexuallyViolent: {
                        getTitle: function() {
                            return Object(c.d)("Violent sexual conduct", "ReportModalWizard")
                        },
                        value: "sexually violent",
                        reportReason: r.SexualViolence
                    },
                    childAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving a child or animal", "ReportModalWizard")
                        },
                        value: "sexual conduct; child or animal",
                        reportReason: r.SexualViolence
                    },
                    pornographic: {
                        getTitle: function() {
                            return Object(c.d)("Sexually explicit or pornographic content", "ReportModalWizard")
                        },
                        value: "pornographic",
                        reportReason: r.SexualContent
                    },
                    gory: {
                        getTitle: function() {
                            return Object(c.d)("Extreme violence or gore", "ReportModalWizard")
                        },
                        value: "gory",
                        reportReason: r.Gore
                    },
                    suggestive: {
                        getTitle: function() {
                            return Object(c.d)("Sexually suggestive content", "ReportModalWizard")
                        },
                        value: "sexually suggestive",
                        reportReason: r.SexualContent
                    },
                    nudity: {
                        getTitle: function() {
                            return Object(c.d)("Full or partial nudity", "ReportModalWizard")
                        },
                        value: "nudity",
                        reportReason: r.SexualContent
                    },
                    other: {
                        getTitle: function() {
                            return Object(c.d)("There's something else wrong with it...", "ReportModalWizard")
                        },
                        value: "other",
                        reportReason: r.Other
                    },
                    evasion: {
                        getTitle: function() {
                            return Object(c.d)("They were banned or suspended and are trying to get around it (ban evasion)", "ReportModalWizard")
                        },
                        value: "ban evasion"
                    },
                    evasion_sitewide: {
                        getTitle: function() {
                            return Object(c.d)("A sitewide ban from Twitch", "ReportModalWizard")
                        },
                        value: "sitewide ban",
                        reportReason: r.TosBanEvasion
                    },
                    evasion_chat: {
                        getTitle: function() {
                            return Object(c.d)("A chat ban from one or more channels", "ReportModalWizard")
                        },
                        value: "chat ban",
                        reportReason: r.ChatBanEvasion
                    },
                    evasion_messaging: {
                        getTitle: function() {
                            return Object(c.d)("A block from messaging me", "ReportModalWizard")
                        },
                        value: "messaging block",
                        reportReason: r.ChatBanEvasion
                    },
                    impersonation_me: {
                        getTitle: R.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a brand/company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: R.someoneElse,
                        value: "impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a stream chat message", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("In the profile content, extensions, or emotes", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    room: {
                        getTitle: function(e) {
                            return Object(c.d)("In one of {username}'s rooms", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "room"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: b.N.WHISPER_REPORT
                    },
                    username: {
                        getTitle: function() {
                            return Object(c.d)("In the username", "ReportModalWizard")
                        },
                        value: "username",
                        reportReason: r.OffensiveUsername
                    },
                    report_other: {
                        getTitle: function() {
                            return Object(c.d)("Somewhere else...", "ReportModalWizard")
                        },
                        value: "somewhere else",
                        omitFromDescription: !0
                    },
                    video_streamer: {
                        getTitle: function() {
                            return Object(c.d)("The streamer or channel owner", "ReportModalWizard")
                        },
                        value: "streamer"
                    },
                    video_someoneElse: {
                        getTitle: function() {
                            return Object(c.d)("Someone else in the video", "ReportModalWizard")
                        },
                        value: "someone else in video"
                    },
                    video_chatSomeone: {
                        getTitle: function() {
                            return Object(c.d)("Someone in chat", "ReportModalWizard")
                        },
                        value: "someone in chat",
                        differentTarget: !0
                    },
                    report_channelOwner: {
                        getTitle: function() {
                            return Object(c.d)("The channel owner", "ReportModalWizard")
                        },
                        value: "channel owner"
                    },
                    report_member: {
                        getTitle: function() {
                            return Object(c.d)("Another community member", "ReportModalWizard")
                        },
                        value: "community member",
                        differentTarget: !0
                    },
                    location_onTwitch: {
                        getTitle: function() {
                            return Object(c.d)("On Twitch", "ReportModalWizard")
                        },
                        value: "on twitch"
                    },
                    location_anotherSite: {
                        getTitle: function() {
                            return Object(c.d)("On another site or service", "RpoertModalWizard")
                        },
                        value: "another site"
                    },
                    location_TwitchEvent: {
                        getTitle: function() {
                            return Object(c.d)("In person, at a Twitch event", "ReportModalWizard")
                        },
                        value: "twitch event"
                    },
                    external_incitingRaids: {
                        getTitle: function() {
                            return Object(c.d)("inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: R.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: R.abusive,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: R.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: R.commitingViolence,
                        value: "external site; committing violence",
                        reportReason: r.Harm
                    },
                    conduct_impersonation: {
                        getTitle: function() {
                            return Object(c.d)("impersonating someone", "ReportModalWizard")
                        },
                        value: "impersonation",
                        reportReason: r.Impersonation
                    },
                    spam: {
                        getTitle: function() {
                            return Object(c.d)("They're spamming or spreading malicious links", "ReportModalWizard")
                        },
                        value: "spam",
                        reportReason: r.Spam
                    },
                    spam_bot: {
                        getTitle: function() {
                            return Object(c.d)("I think this is a bot account", "ReportModalWizard")
                        },
                        value: "bot"
                    },
                    spam_scam: {
                        getTitle: function() {
                            return Object(c.d)("They're trying to scam other community members or sending malicious links", "ReportModalWizard")
                        },
                        value: "scam or malicious links"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("They're sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                w = function(e) {
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
                    return o.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.currentCard.getDescription ? i.createElement(C.Xa, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return i.createElement(C.Xa, {
                            className: "reporting-wizard-card"
                        }, e, i.createElement(C.Ea, {
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
                                case a.Text:
                                    return i.createElement(C.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case a.Link:
                                    return i.createElement(C.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(C.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, i.createElement(C.Xa, {
                                        display: C.X.Flex
                                    }, i.createElement(C.Xa, {
                                        display: C.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, i.createElement(C.sb, {
                                        asset: C.tb.Document
                                    })), t.getTitle())));
                                case a.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!r || !!r && 0 === r.trim().length);
                                    return i.createElement(C.Xa, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(C.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(C.Sb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case a.MultipleChoice:
                                default:
                                    return i.createElement(C.Xa, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, i.createElement(C.pb, {
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
                }(i.Component),
                O = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(T || (T = {}));
            var M, I, U, j = {
                    contentGeneral: function() {
                        return Object(c.d)("What would you like to report?", "ReportModalWizard")
                    },
                    content: function() {
                        return Object(c.d)("What's wrong with this content?", "ReportModalWizard")
                    },
                    identifyUser: function() {
                        return Object(c.d)("Who do you want to report?", "ReportModalWizard")
                    },
                    thisPersonIs: function() {
                        return Object(c.d)("This person is...", "ReportModalWizard")
                    },
                    relevantStatements: function() {
                        return Object(c.d)("What would you like to report? (Please choose the most relevant statement that applies.)", "ReportModalWizard")
                    }
                },
                x = {
                    report: function(e) {
                        return Object(c.d)("Report {username}", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportVideo: function(e) {
                        return Object(c.d)("Report {username}'s Video", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportMessage: function(e) {
                        return Object(c.d)("Report {username}'s Message", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportAbusive: function(e) {
                        return Object(c.d)("Report {username} for Abusive Conduct", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    tellUsMore: function() {
                        return Object(c.d)("Tell Us More", "ReportModalWizard")
                    },
                    thanks: function() {
                        return Object(c.d)("Thanks for letting us know", "ReportModalWizard")
                    },
                    thanksConcern: function() {
                        return Object(c.d)("Thank you for your concern", "ReportModalWizard")
                    }
                },
                D = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: x.thanks,
                    type: T.Info,
                    value: "end card"
                },
                A = {
                    socialMedia: o.__assign({}, D, {
                        items: [E.endBlurb_socialmedia]
                    }),
                    violence: o.__assign({}, D, {
                        items: [E.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [E.endLink_DMCA, E.endLink_trademark, E.endLink_devAgreement],
                        type: T.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [E.endLink_selfharm],
                        type: T.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: x.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [E.endLink_eventCoC],
                        value: "twitch event end",
                        type: T.Info
                    }
                },
                N = {
                    getTitle: x.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [E.video, E.whisper, E.chat, E.room, E.profile, E.username, E.report_other],
                    type: T.MultipleChoice,
                    value: "content type"
                },
                W = {
                    identifyUser: {
                        getTitle: x.reportVideo,
                        getLabel: j.identifyUser,
                        items: [E.video_streamer, E.video_someoneElse, E.video_chatSomeone],
                        type: T.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: x.reportVideo,
                        getLabel: j.contentGeneral,
                        items: [E.revealPersonalInfo, E.video_labeling, E.video_inactive, E.video_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: T.MultipleChoice,
                        value: "video report reason"
                    },
                    general: {
                        getTitle: x.reportVideo,
                        getLabel: j.content,
                        items: [E.report_username, E.violence, E.abusive, E.cheating, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                z = {
                    content: {
                        getTitle: x.reportMessage,
                        getLabel: j.contentGeneral,
                        items: [E.revealPersonalInfo, E.evasion, E.spam, E.maliciousRaid, E.report_username, E.messaging_general, E.selfharm],
                        type: T.MultipleChoice,
                        value: "message report reason"
                    },
                    general: {
                        getTitle: x.reportMessage,
                        getLabel: j.content,
                        items: [E.report_emotes, E.violence, E.abusive, E.inappropriateContent, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = o.__assign({}, z.content, {
                    getDescription: function() {
                        return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                    }
                }),
                F = {
                    content: {
                        getTitle: x.reportProfile,
                        getLabel: j.contentGeneral,
                        items: [E.revealPersonalInfo, E.inappropriateBadge, E.inappropriateExtension, E.noModeration, E.profile_general, E.report_ip, E.violateDevAgreement, E.selfharm],
                        type: T.MultipleChoice,
                        value: "profile report reason"
                    },
                    general: {
                        getTitle: x.reportProfile,
                        getLabel: j.content,
                        items: [E.report_username, E.violence, E.abusive, E.scam, E.inappropriateContent, E.evasion, E.impersonation, E.underage, E.bitsViolation],
                        type: T.MultipleChoice,
                        value: "profile general report reason"
                    }
                },
                L = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.identifyUser,
                    items: [E.report_channelOwner, E.report_member],
                    value: "room report user",
                    type: T.MultipleChoice
                },
                P = {
                    getTitle: x.tellUsMore,
                    items: [E.input_description],
                    type: T.Confirm,
                    value: "tell us more"
                },
                V = {
                    banEvasion: o.__assign({}, P, {
                        items: [E.input_usernames, E.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: o.__assign({}, P, {
                        items: [E.input_link, E.input_connection, E.input_description],
                        nextCard: A.socialMedia,
                        value: "social media tell us more"
                    })
                },
                X = {
                    content: {
                        getTitle: x.reportAbusive,
                        getLabel: j.relevantStatements,
                        items: [E.hateSpeech, E.harassment, E.abusiveViolence, E.commitingViolence, E.swatting, E.personalInfo],
                        type: T.MultipleChoice,
                        value: "abuse type"
                    },
                    violence: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for Violence or Threats", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Are the threats or actions directed at you or someone else?", "ReportModalWizard")
                        },
                        items: [E.threat_me, E.threat_person, E.threat_group, E.threat_selfharm],
                        type: T.MultipleChoice,
                        value: "violence type"
                    }
                },
                H = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [E.location_onTwitch, E.location_anotherSite, E.location_TwitchEvent],
                        type: T.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: j.thisPersonIs,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [E.external_incitingRaids, E.external_threatening, E.external_harassment],
                        type: T.MultipleChoice,
                        nextCard: V.socialMedia,
                        value: "external site conduct"
                    },
                    external_violence: o.__assign({}, X.violence, {
                        items: [E.threat_me, E.threat_person, E.threat_group],
                        nextCard: V.socialMedia
                    }),
                    external_abusive: o.__assign({}, X.content, {
                        items: [E.hateSpeech, E.harassment, E.external_abusiveViolence, E.external_commitingViolence, E.swatting, E.personalInfo],
                        nextCard: V.socialMedia
                    })
                },
                q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.contentGeneral,
                    items: [E.spam_bot, E.spam_scam, E.spam_repeated],
                    type: T.MultipleChoice,
                    value: "spam type"
                },
                G = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: j.relevantStatements,
                    items: [E.inappropriate_game, E.gory, E.sexuallyViolent, E.childAnimal, E.pornographic, E.suggestive, E.nudity, E.other],
                    type: T.MultipleChoice,
                    value: "inappropriate content type"
                },
                K = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [E.evasion_chat, E.evasion_sitewide, E.evasion_messaging],
                    type: T.MultipleChoice,
                    nextCard: V.banEvasion
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [E.impersonation_me, E.impersonation_brand, E.impersonation_other],
                    type: T.MultipleChoice,
                    value: "impersonation type"
                },
                Y = N,
                $ = P,
                J = D,
                Z = {
                    video: W.identifyUser,
                    whisper: B,
                    chat: z.content,
                    profile: F.content,
                    room: L,
                    "somewhere else": H.identifyLocation,
                    streamer: W.content,
                    "someone else in video": W.content,
                    "someone in chat": z.content,
                    general_video: W.general,
                    general_messaging: z.general,
                    general_profile: F.general,
                    "channel owner": F.content,
                    "community member": z.content,
                    "on twitch": F.content,
                    "another site": H.externalSite,
                    "twitch event": A.twitchEvent,
                    "brigading/raids": V.socialMedia,
                    threatening: H.external_violence,
                    "hateful/harassing": H.external_abusive,
                    "external site; threatening violence": H.external_violence,
                    "external site; committing violence": H.external_violence,
                    "external site; scam": V.socialMedia,
                    "ban evasion": K,
                    spam: q,
                    hateful: X.content,
                    impersonation: Q,
                    "violence/threats": X.violence,
                    "threatening violence": X.violence,
                    "committing violence": X.violence,
                    abusive: X.content,
                    "inappropriate content": G,
                    "intellectual property": A.legal,
                    "violating developer agreement": A.legal
                },
                ee = {
                    selfharm: A.selfharm,
                    harm: A.violence,
                    other: J
                },
                te = {
                    CHANNEL_FEED_POST_REPORT: F.content,
                    COMMUNITY_REPORT: F.content,
                    CHAT_REPORT: z.content,
                    CLIP_REPORT: W.content,
                    EVENT_REPORT: F.content,
                    EXTENSION_REPORT: F.content,
                    LIVE_UP_REPORT: F.content,
                    ROOM_REPORT: L,
                    WHISPER_REPORT: B,
                    VOD_COMMENT_REPORT: z.content
                },
                ne = "report-wizard-back",
                re = "report-wizard-close",
                ae = "report-wizard-next",
                oe = "report-wizard-submit",
                ie = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || te[t.props.reportContentType] || Y,
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
                            return i.createElement(C.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(C.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = re,
                                a = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case T.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = ae, a = !t.state.currentSelection;
                                    break;
                                case T.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, r = oe
                            }
                            return i.createElement(C.Xa, null, o, i.createElement(C.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": r
                            }, i.createElement(C.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return i.createElement(C.Xa, {
                                margin: {
                                    right: 1
                                },
                                display: C.X.InlineBlock
                            }, i.createElement(C.z, {
                                type: C.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": ne
                            }, i.createElement(C.Xa, {
                                padding: {
                                    x: 1
                                }
                            }, Object(c.d)("Back", "ReportModalWizard"))))
                        }, t.getTitle = function() {
                            return t.state.currentCard.getTitle && t.props.targetUser.displayName && t.props.targetUser.id ? t.state.targetUnknown ? t.state.currentCard.getTitle(Object(c.d)("Another User", "ReportModalWizard")) : t.state.currentCard.getTitle(t.props.targetUser.displayName) : t.state.targetUnknown ? Object(c.d)("Report User", "ReportModalWizard") : t.props.title
                        }, t.handleClose = function() {
                            t.setState({
                                modalCloseTracked: !0
                            }, function() {
                                return t.props.trackClose(U.Finish, t.state.currentCard.value)
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
                                Z[t.state.currentSelection.value] && (s = Z[t.state.currentSelection.value]);
                                var l = t.state.currentSelection.reportReason || t.state.reportReason,
                                    c = s.type === T.Info;
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
                                    return t.trackNavigation(I.Next, e.value)
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
                                if (e.type !== a.Textarea || !e.required) return !1;
                                var n = t.state.userTextInput[e.value],
                                    r = n && 0 === n.trim().length;
                                return !n || r
                            }).length
                        }, t.handleSubmit = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (o.sent(), this.props.submitStatus) {
                                                case O.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case O.a.Success:
                                                    r = J, ee[t] && (r = ee[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return a.trackNavigation(I.Submit)
                                                    });
                                                    break;
                                                case O.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case O.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(O.a.FormError), this.setState({
                                                error: e
                                            }), o.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, i = this;
                                return o.__generator(this, function(o) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.state.displacedSelections, this.state.currentSelection && (a = a.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: a,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return i.trackNavigation(I.Back, e.value)
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
                    return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(U.Close, this.state.currentCard.value)
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === T.Info && this.state.currentCard.blockPrompt ? i.createElement(S, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(C.Eb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === T.Info ? null : this.renderPrimer();
                        return i.createElement(C.Eb, {
                            className: "reporting-wizard",
                            display: C.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: C.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, i.createElement(C.W, {
                            bold: !0,
                            fontSize: C.Ca.Size4
                        }, this.getTitle()), n, i.createElement(C.Xa, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(w, {
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
                }(i.Component),
                se = n("s8Ou"),
                le = n("0hI/");
            n.d(t, "c", function() {
                    return I
                }), n.d(t, "a", function() {
                    return U
                }), n.d(t, "b", function() {
                    return de
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(M || (M = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(I || (I = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(U || (U = {}));
            var ce = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var n, a, i, s, l = this;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = r === b.N.WHISPER_REPORT ? r : this.props.reportContext.contentType, a = b.N[n], null === (i = {
                                                description: t,
                                                reason: e,
                                                content: a,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: O.a.UserError
                                        }), [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(h.a)(i))];
                                    case 2:
                                        return o.sent(), this.setState({
                                            submitStatus: O.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(M.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = o.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
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
                        n.props.blockUserMutation(n.props.data.targetUser.id, void 0, void 0, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !0
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(I.Open, void 0, e) : n.trackAction(M.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(I.Close, t, void 0, e) : n.trackAction(M.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, a) {
                        c.p.tracking.track(f.SpadeEventType.ReportWizardFlowAction, {
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
                        c.p.tracking.track(f.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === O.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(m.a)();
                    var r = c.p.experiments.getAssignment(g.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: O.a.Unsubmitted,
                        showWizard: "yes" === r,
                        openEventSent: !1,
                        closeEventSent: !1,
                        userBlocked: !1
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.trackOpen()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose(), this.state.showWizard || this.trackClose()
                }, t.prototype.render = function() {
                    if (this.props.data.error) return i.createElement(C.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return i.createElement(C.ib, {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(C.Za, null) : i.createElement(ie, o.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(O.b, o.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return i.createElement(C.Xa, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(C.W, {
                        fontSize: C.Ca.Size5
                    }, Object(c.d)("The user you are trying to report does not exist", "ReportUser")))
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
            }(i.Component);
            var de = Object(l.compose)(Object(d.a)(se, {
                name: "reportUser"
            }), Object(d.a)(le, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(v.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(ce)
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