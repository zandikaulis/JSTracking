(window.webpackJsonp = window.webpackJsonp || []).push([
    [198], {
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
                        return o.createElement(u.Fb, {
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
            var m = Object(s.compose)(Object(d.b)("ReportUserModal"), Object(i.connect)(null, function(e) {
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
                return m
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
        "1Rv/": function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "mutation",
                    name: {
                        kind: "Name",
                        value: "Chat_UnbanUserFromChatRoom"
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
                    end: 170
                }
            };
            n.loc.source = {
                body: "mutation Chat_UnbanUserFromChatRoom($input: UnbanUserFromChatRoomInput!) {\nunbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\nbannedUser {\nid\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "1T0i": function(e, t, n) {},
        "4w0E": function(e, t) {
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
                    end: 164
                }
            };
            n.loc.source = {
                body: "mutation Chat_BanUserFromChatRoom($input: BanUserFromChatRoomInput!) {\nbanUserFromChatRoom(input: $input) {\nban {\nisPermanent\nbannedUser {\nid\n}\n}\nerror {\ncode\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
        "5g1g": function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("wUQP"),
                i = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.incremental && Object(o.c)(this.props.name) || Object(o.b)(this.props.name) ? this.props.children : null
                    }, t
                }(a.Component),
                s = i;
            n.d(t, "b", function() {
                return i
            }), n.d(t, "a", function() {
                return s
            })
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
                                transform: u.Vb.Uppercase,
                                color: u.O.Alt2
                            }, n);
                        this.props.borderTop && (r = a.createElement(u.Fb, {
                            margin: {
                                top: 2
                            },
                            borderTop: !0,
                            padding: {
                                top: 2
                            }
                        }, r));
                        var i = this.props.hasExtraColors ? "https://www.twitch.tv/settings/prime" : "https://twitch.tv/products/turbo?ref=more_colors_direct";
                        return a.createElement("div", null, a.createElement(u.Fb, {
                            margin: {
                                bottom: 1
                            },
                            background: u.r.Base,
                            color: u.O.Base,
                            display: u.X.InlineFlex,
                            flexDirection: u.Aa.Column,
                            fullWidth: !0
                        }, r), a.createElement(u.Qa, {
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
                m = n("cr+I"),
                h = n("M//1"),
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
                                }, a.createElement(u.Zb, {
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
                            }, a.createElement(u.Zb, {
                                label: Object(o.d)("Same as Global", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.tb, {
                                asset: u.ub.Global
                            })))));
                            var m = void 0 === this.state.globalBadgeID && i ? i.setID : this.state.globalBadgeID,
                                h = !m,
                                g = {
                                    "edit-appearance__badge-chooser": !0,
                                    "edit-appearance__badge-chooser--selected": h
                                },
                                b = Object(o.d)("No global badges :(", "ChatSettings");
                            return r && r.length > 0 && (b = r.map(function(t) {
                                var n = Boolean(i && t.setID === m),
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
                                }, a.createElement(u.Zb, {
                                    label: t.title
                                }, a.createElement("img", {
                                    alt: t.title,
                                    src: t.image1x,
                                    srcSet: t.image1x + " 1x, " + t.image2x + " 2x, " + t.image4x + " 4x"
                                })))
                            })).push(a.createElement("div", {
                                role: "radio",
                                "aria-checked": h,
                                key: "none",
                                "data-badge": "",
                                onClick: this.onGlobalBadgeClicked,
                                onKeyPress: this.onGlobalBadgeKeyPress,
                                className: l(g),
                                "data-test-selector": "global_badge_none",
                                "data-a-target": "global_badge_none",
                                tabIndex: 0
                            }, a.createElement(u.Zb, {
                                label: Object(o.d)("None", "ChatSettings")
                            }, a.createElement("div", {
                                className: "edit-appearance__badge-chooser__none"
                            }, a.createElement(u.tb, {
                                asset: u.ub.Ban
                            }))))), a.createElement("div", null, a.createElement(u.Fb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Fb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Zb, {
                                align: u.ac.Left,
                                label: Object(o.d)("Your global badge is shown when chatting and whispering.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Vb.Uppercase
                            }, Object(o.d)("Global Badge [?]", "ChatSettings")))), a.createElement(u.Qa, {
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
                            }, b))), a.createElement(u.Fb, {
                                background: u.r.Base,
                                color: u.O.Base,
                                display: u.X.InlineFlex,
                                flexDirection: u.Aa.Column,
                                fullWidth: !0
                            }, a.createElement(u.Fb, {
                                margin: {
                                    top: 2
                                },
                                padding: {
                                    top: 2
                                },
                                borderTop: !0
                            }, a.createElement(u.Zb, {
                                align: u.ac.Left,
                                label: Object(o.d)("Change the badge shown when chatting in this channel.", "ChatSettings"),
                                width: 175
                            }, a.createElement(u.W, {
                                color: u.O.Alt2,
                                transform: u.Vb.Uppercase
                            }, Object(o.d)("Channel Badge [?]", "ChatSettings")))), a.createElement(u.Qa, {
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
                                            body: m.stringify({
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
                                            body: m.stringify({
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
                    }, t = r.__decorate([Object(s.a)(h, {
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
                S = n("eJ65"),
                _ = n("wUQP"),
                E = n("aCAx"),
                R = n("/HY+"),
                O = n("DMoW"),
                w = n("cys1"),
                T = n("oK83"),
                M = n("iyGE"),
                U = n("a2UF"),
                j = n("HzXE"),
                A = (n("u/v7"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onReportButtonClick = function() {
                            t.props.onReportButtonClick(t.props.raidID, t.props.raiderUserID, t.props.raiderLogin)
                        }, t.onUsernameClick = function() {
                            t.props.onUsernameClick(t.props.raiderLogin, T.a.recent_raids, t.props.raidID)
                        }, t.onBanButtonClick = function() {
                            t.props.banUserMutation(t.props.raiderLogin)
                        }, t.onUnbanButtonClick = function() {
                            t.props.unbanUserMutation(t.props.raiderLogin)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(u.Ya, {
                            className: "recent-raids-item",
                            flexDirection: u.Aa.Row,
                            display: u.X.Flex,
                            fullWidth: !0
                        }, a.createElement(u.Ya, {
                            flexDirection: u.Aa.Row,
                            display: u.X.Flex,
                            fullWidth: !0,
                            justifyContent: u.Xa.Between
                        }, a.createElement(u.W, {
                            bold: !0
                        }, a.createElement("a", {
                            className: "recent-raids-item__name",
                            onClick: this.onUsernameClick,
                            href: "#"
                        }, this.props.raiderLogin)), a.createElement(u.Ya, {
                            position: u.kb.Relative
                        }, a.createElement(u.Ya, {
                            className: "recent-raids-item__timestamp"
                        }, Object(w.m)(Date.parse(this.props.timestamp))), this.getCardSlideInContent())))
                    }, t.prototype.getCardSlideInContent = function() {
                        var e = null;
                        return e = this.props.data.chatRoomBanStatus && this.props.data.chatRoomBanStatus.isPermanent ? a.createElement(u.z, {
                            size: u.D.Small,
                            type: u.F.Text,
                            onClick: this.onUnbanButtonClick,
                            "data-a-target": "recent-raid-item-button"
                        }, Object(o.d)("Unban", "RecentRaid")) : a.createElement(u.Zb, {
                            align: u.ac.Right,
                            width: 150,
                            label: Object(o.d)("Banning a user prevents them from future chatting or raiding", "RecentRaid")
                        }, a.createElement(u.z, {
                            size: u.D.Small,
                            type: u.F.Text,
                            onClick: this.onBanButtonClick,
                            "data-a-target": "recent-raid-item-button"
                        }, Object(o.d)("Ban", "RecentRaid"))), a.createElement(u.Ya, {
                            className: "recent-raids-item__hover-content",
                            zIndex: u.jc.Above,
                            "data-a-target": "recent-raids-item-hover"
                        }, a.createElement(u.Fb, {
                            color: u.O.Alt2,
                            display: u.X.InlineFlex
                        }, a.createElement(u.z, {
                            size: u.D.Small,
                            type: u.F.Text,
                            onClick: this.onReportButtonClick,
                            "data-a-target": "recent-raid-item-button"
                        }, Object(o.d)("Report", "RecentRaid"))), e)
                    }, t
                }(a.Component));

            function D(e) {
                return {
                    channelID: e.channelID
                }
            }
            var I = Object(f.compose)(Object(s.a)(j, {
                    options: function(e) {
                        return {
                            variables: {
                                channelID: e.channelID,
                                targetUserID: e.raiderUserID
                            },
                            fetchPolicy: "cache-and-network"
                        }
                    }
                }), Object(M.a)(D), Object(U.a)(D))(A),
                x = n("b6Yk"),
                z = function(e) {
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
                N = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {}, t.onReportButtonClick = function(e, n, r) {
                            t.props.showReportUserModal({
                                reportContext: {
                                    contentType: O.O.RAID_REPORT,
                                    targetUserID: n,
                                    contentID: e,
                                    extra: JSON.stringify({
                                        channel_id: n.toString()
                                    }),
                                    additionalTrackingID: t.props.targetChannelID
                                },
                                title: Object(o.d)("Report {channelDisplayName}", {
                                    channelDisplayName: r
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
                                        return [4, z.fetchRecentRaidsList(this.props.targetChannelID)];
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
                                    type: u.Wb.P
                                }, Object(o.d)("You have no recent raids", "RecentRaids"))), this.state.raidChannels)
                                if (r.hasOwnProperty) {
                                    var i = this.state.raidChannels[r];
                                    this.state.raidChannels.hasOwnProperty(r) && void 0 === n[i.userID] && (t.push(a.createElement(I, {
                                        key: "recent-raids-item-" + i.userID,
                                        channelID: this.props.targetChannelID,
                                        onReportButtonClick: this.onReportButtonClick,
                                        onUsernameClick: this.props.onUsernameClick,
                                        raiderLogin: i.name,
                                        raiderUserID: i.userID,
                                        raidID: i.raidID,
                                        timestamp: i.raidAt
                                    })), n[i.userID] = !0)
                                }
                        var s = null;
                        return this.props.recentRaids ? a.createElement(u.Ya, {
                            key: "recent-raids"
                        }, a.createElement(u.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Wb.Span
                        }, a.createElement(u.U, {
                            to: {
                                pathname: "/broadcast/dashboard/settings/raids"
                            }
                        }, Object(o.d)("Manage Raid Settings", "RecentRaids")))), e, t) : (s = a.createElement(u.Ya, {
                            key: "recent-raids",
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Xa.Between,
                            alignItems: u.f.Center
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            onClick: this.props.onClickRecentRaids,
                            "data-test-selector": "recent-raids-button"
                        }, Object(o.d)("See Recent Raids", "ChatSettings")), this.props.tooltipText && a.createElement(u.Ya, {
                            position: u.kb.Relative
                        }, a.createElement(u.Zb, {
                            align: u.ac.Right,
                            direction: u.bc.Top,
                            display: u.X.InlineFlex,
                            label: this.props.tooltipText,
                            width: 175,
                            show: !0
                        }, a.createElement(u.Qa, {
                            alignItems: u.f.Center,
                            className: "chat-settings__highlight-indicator",
                            display: u.X.InlineFlex,
                            justifyContent: u.Xa.Center,
                            margin: {
                                left: .5
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Overlay,
                            fontSize: u.Ca.Size8,
                            type: u.Wb.Span
                        }, "i"))))), a.createElement(u.Ya, null, s))
                    }, t
                }(a.Component);
            var W = Object(b.connect)(function() {
                    return {}
                }, function(e) {
                    return Object(f.bindActionCreators)({
                        showReportUserModal: function(e) {
                            var t = r.__rest(e, []);
                            return Object(E.d)(R.a, t)
                        }
                    }, e)
                })(N),
                F = n("W/3w"),
                B = n("r2Xj"),
                L = n("WytW"),
                P = n("F6GT"),
                V = n("x0gr"),
                H = n("nEWQ"),
                Y = (n("op4u"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.state = {
                            autoModToolTipVisible: !1
                        }, n.isConsolidatedModerationEnabled = Object(_.b)(H.a), n.handleFollowerDurationClick = function(e) {
                            var t = e.currentTarget.getAttribute("data-duration");
                            t && n.onFollowerDurationChange(parseInt(t, 10))
                        }, n.onClickRecentRaids = function(e) {
                            e.nativeEvent.stopImmediatePropagation(), n.props.onClickRecentRaids()
                        }, n.onChatClear = function() {
                            n.props.onChatCommand(Object(L.b)())
                        }, n.getSelectedFollowerDuration = function() {
                            if (n.props.followerModeEnabled) return n.props.followerModeDuration;
                            var e = n.props.lastUsedFollowerDurations[n.props.channelLogin];
                            return "number" == typeof e ? e : F.a
                        }, n.onFollowerModeToggle = function() {
                            if (n.props.followerModeEnabled) n.props.onChatCommand(Object(L.c)()), n.props.onRoomStateUpdate({
                                followersOnly: !1
                            });
                            else {
                                var e = n.getSelectedFollowerDuration();
                                n.props.onChatCommand(Object(L.e)(e)), n.props.onRoomStateUpdate({
                                    followersOnly: !0,
                                    followersOnlyRequirement: e
                                })
                            }
                            Object(V.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.followerModeEnabled,
                                settingName: B.a.FollowerMode
                            })
                        }, n.onSlowModeToggle = function() {
                            n.props.slowModeEnabled ? (n.props.onChatCommand(Object(L.d)()), n.props.onRoomStateUpdate({
                                slowMode: !1
                            })) : (n.props.onChatCommand(Object(L.f)()), n.props.onRoomStateUpdate({
                                slowMode: !0
                            })), Object(V.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.slowModeEnabled,
                                settingName: B.a.SlowMode
                            })
                        }, n.onFollowerDurationChange = function(e) {
                            Object(P.c)(n.props.channelLogin, e), n.props.onFollowerModeDurationPreferenceChange(n.props.channelLogin, e), n.props.followerModeEnabled && (n.props.onChatCommand(Object(L.e)(e)), n.props.onRoomStateUpdate({
                                followersOnlyRequirement: e
                            })), Object(V.c)({
                                channelLogin: n.props.channelLogin,
                                followerModeOn: n.props.followerModeEnabled,
                                isHostMode: n.props.isHostMode,
                                newValue: e
                            })
                        }, n.onModIconsToggle = function() {
                            Object(P.b)("showModIcons", !n.props.showModerationIcons), n.props.showModerationIcons ? n.props.onModIconsDisable() : n.props.onModIconsEnable(), Object(V.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showModerationIcons,
                                settingName: B.a.ShowModIcons
                            })
                        }, n.onShowModerationActionsToggle = function() {
                            Object(P.b)("showModerationActions", !n.props.showModerationActions), n.props.showModerationActions ? n.props.onShowModerationActionsDisable() : n.props.onShowModerationActionsEnable(), Object(V.a)({
                                channelLogin: n.props.channelLogin,
                                isHostMode: n.props.isHostMode,
                                newValue: !n.props.showModerationActions,
                                settingName: B.a.ShowModActions
                            })
                        }, n.onShowAutoModActionsToggle = function() {
                            Object(P.b)("showAutoModActions", !n.props.showAutoModActions), n.props.showAutoModActions ? n.props.onShowAutoModActionsDisable() : n.props.onShowAutoModActionsEnable(), Object(V.a)({
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
                            n = F.b.map(function(n) {
                                return a.createElement(u.Va, {
                                    "data-duration": n,
                                    key: n,
                                    onClick: e.handleFollowerDurationClick,
                                    selected: n === t
                                }, a.createElement(u.Ya, {
                                    padding: .5
                                }, Object(F.c)(n)))
                            });
                        return a.createElement(u.Fb, {
                            key: "mod-tools",
                            borderTop: !0,
                            "data-test-selector": "mod-tools",
                            margin: {
                                top: 2
                            },
                            padding: {
                                top: 2
                            }
                        }, a.createElement(u.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            transform: u.Vb.Uppercase
                        }, Object(o.d)("Mod Tools", "ChatSettings"))), a.createElement(u.Ya, {
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
                        })), a.createElement(u.Fb, {
                            margin: {
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Xa.Between,
                            flexWrap: u.Ba.Wrap
                        }, a.createElement(u.N, {
                            checked: this.props.followerModeEnabled,
                            "data-a-target": "follower-mode-checkbox",
                            "data-test-selector": "follower-mode-checkbox",
                            id: "chat-settings-followers-only",
                            label: Object(o.d)("Followers-Only Chat", "ChatSettings"),
                            onChange: this.onFollowerModeToggle
                        }), a.createElement(u.Ya, {
                            alignItems: u.f.Center,
                            display: u.X.Flex,
                            flexWrap: u.Ba.NoWrap,
                            justifyContent: u.Xa.Between
                        }, a.createElement(u.Ya, {
                            margin: {
                                right: .5
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            fontSize: u.Ca.Size7,
                            type: u.Wb.Span
                        }, Object(o.d)("Must have followed for", "ChatSettings"))), a.createElement(u.Ya, {
                            className: "chat-settings__mod-tools-follower-button",
                            flexShrink: 0
                        }, a.createElement(S.a, {
                            display: u.X.InlineBlock
                        }, a.createElement(u.z, {
                            size: u.D.Small,
                            type: u.F.Text,
                            "data-a-target": "follower-mode-dropdown",
                            "data-test-selector": "follower-mode-duration-menu",
                            dropdown: !0
                        }, Object(F.d)(t)), a.createElement(u.u, {
                            direction: u.v.TopRight
                        }, a.createElement(u.Ya, {
                            padding: .5
                        }, a.createElement(u.W, {
                            color: u.O.Alt2
                        }, Object(o.d)("Followers can chat if they have followed for at least", "ChatSettings"))), a.createElement(u.Fb, {
                            color: u.O.Link
                        }, n)))))), a.createElement(u.Ya, {
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
                        })), a.createElement(u.Ya, {
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
                        })), a.createElement(u.Ya, {
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
                        })), a.createElement(W, {
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
                    }, t.prototype.renderModerationSettingsLink = function() {
                        var e = Object(o.d)("Manage Moderation Settings", "ChatSettings"),
                            t = "moderation";
                        return this.isConsolidatedModerationEnabled || (t = "automod"), a.createElement(u.Fb, {
                            margin: {
                                top: 1,
                                bottom: 1
                            },
                            display: u.X.Flex,
                            justifyContent: u.Xa.Between,
                            alignItems: u.f.Center,
                            color: u.O.Alt
                        }, a.createElement(u.U, {
                            to: "/" + this.props.channelLogin + "/dashboard/settings/" + t,
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
            var q = Object(b.connect)(function(e) {
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
                })(Y),
                G = n("QVaV"),
                X = n("uIkQ"),
                Q = "edit-appearance-button",
                K = "edit-display-name";

            function $(e) {
                var t = a.createElement(u.W, {
                        bold: !0,
                        type: u.Wb.Span
                    }, a.createElement("span", {
                        style: {
                            color: e.chatColor
                        },
                        "data-a-target": K
                    }, Object(G.a)(e.login, e.displayName))),
                    n = null;
                return e.editAppearance || (n = a.createElement(u.Ya, {
                    margin: {
                        top: 1
                    }
                }, a.createElement(u.U, {
                    hoverUnderlineNone: !0,
                    onClick: e.onClickEdit,
                    "data-a-target": Q,
                    "data-test-selector": Q
                }, Object(o.d)("Edit Appearance", "ChatSettings")))), a.createElement(u.Fb, {
                    background: u.r.Base,
                    color: u.O.Base,
                    display: u.X.InlineFlex,
                    flexDirection: u.Aa.Column,
                    fullWidth: !0
                }, a.createElement(u.W, {
                    color: u.O.Alt2,
                    transform: u.Vb.Uppercase
                }, Object(o.d)("Name Display", "ChatSettings")), a.createElement(u.Ya, {
                    margin: {
                        top: 2
                    }
                }, e.userBadges && e.userBadges.map(function(e) {
                    return a.createElement(X.a, {
                        key: e.id,
                        badge: e
                    })
                }), t), n)
            }
            var Z = n("iFBW");
            n("kELf");
            n.d(t, "DARK_MODE_SELECTOR", function() {
                return J
            }), n.d(t, "SHOW_CHAT_RULES_SELECTOR", function() {
                return ee
            }), n.d(t, "HIDE_CHAT_BUTTON_SELECTOR", function() {
                return te
            }), n.d(t, "LEGACY_POPOUT_BUTTON_SELECTOR", function() {
                return ne
            }), n.d(t, "POPOUT_BUTTON_SELECTOR", function() {
                return re
            }), n.d(t, "TIMESTAMPS_SELECTOR", function() {
                return ae
            }), n.d(t, "HIGH_CONTRAST_SELECTOR", function() {
                return oe
            }), n.d(t, "CHAT_SETTINGS_BACK_BUTTON_SELECTOR", function() {
                return ie
            }), n.d(t, "AUTOMOD_TOOLTIP_SEEN_NUM_TIMES_LIMIT", function() {
                return se
            }), n.d(t, "AUTOMOD_TOOLTIP_SEEN_KEY", function() {
                return le
            }), n.d(t, "ChatSettingsComponent", function() {
                return ce
            });
            var J = "dark-mode-checkbox",
                ee = "show-chat-rules-button",
                te = "hide-chat-button",
                ne = "legacy-popout-button",
                re = "popout-button",
                ae = "timestamps-selector",
                oe = "high-contrast-selector",
                ie = "chat-settings-back-button",
                se = 5,
                le = "autoModToolTipInChatSettings",
                ce = function(e) {
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
                            e = a.createElement($, {
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
                        return this.props.isLoggedIn ? this.props.editAppearance ? n = [a.createElement(u.Qa, {
                            margin: {
                                bottom: 2
                            },
                            key: "chat-settings-edit-inject",
                            className: "chat-settings__edit-button"
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            key: "chat-settings-edit",
                            onClick: this.onClickBack,
                            "data-test-selector": ie
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Wb.Span
                        }, a.createElement(u.tb, {
                            asset: u.ub.ChatSettingsBack,
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
                        })] : this.state.recentRaids ? n = [a.createElement(u.Qa, {
                            key: "chat-settings-recent-raids"
                        }, a.createElement(u.U, {
                            hoverUnderlineNone: !0,
                            key: "chat-settings-edit",
                            onClick: this.onClickBack,
                            "data-test-selector": ie
                        }, a.createElement(u.W, {
                            color: u.O.Link,
                            type: u.Wb.Span
                        }, a.createElement(u.tb, {
                            asset: u.ub.ChatSettingsBack,
                            height: 10,
                            width: 10
                        }), Object(o.d)("Back", "ChatSettingsRecentRaids")), a.createElement(u.Ya, {
                            margin: {
                                top: 2
                            }
                        }, a.createElement(u.W, {
                            key: "recent-raids-title",
                            color: u.O.Alt2,
                            transform: u.Vb.Uppercase
                        }, Object(o.d)("Recent Raids", "ChatSettings"))))), a.createElement(W, {
                            key: "recent-raids",
                            targetChannelID: this.props.channelID,
                            recentRaids: this.state.recentRaids,
                            onClickRecentRaids: this.onClickRecentRaids,
                            onUsernameClick: this.props.onShowViewerCard
                        })] : (n = [e, this.renderUniversalOptions()], this.props.isCurrentUserModerator && !this.props.isEmbedded && n.push(a.createElement(q, {
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
                        }, a.createElement("div", null, a.createElement(u.Fb, {
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
                                "data-test-selector": J,
                                id: "chat-settings-dark-mode",
                                label: Object(o.d)("Dark Mode", "ChatSettings"),
                                onChange: this.props.onDarkModeToggle
                            }),
                            t = this.props.onShowChatRules && a.createElement("button", {
                                onClick: this.props.onShowChatRules,
                                "data-a-target": "show-chat-rules-button",
                                "data-test-selector": ee
                            }, Object(o.d)("Show Chat Rules", "ChatSettings")),
                            n = !this.props.isEmbedded && a.createElement("button", {
                                onClick: this.props.onChatPopout,
                                "data-a-target": "popout-chat-button",
                                "data-test-selector": re
                            }, Object(o.d)("Popout", "ChatSettings")),
                            r = !this.props.isPopout && a.createElement("button", {
                                onClick: this.props.onChatHide,
                                "data-a-target": "hide-chat-button",
                                "data-test-selector": te
                            }, Object(o.d)("Hide Chat", "ChatSettings"));
                        return a.createElement(u.Ya, {
                            key: "chat-options"
                        }, a.createElement(u.Fb, {
                            borderTop: !0,
                            margin: {
                                top: 2
                            },
                            padding: {
                                y: 2
                            }
                        }, a.createElement(u.W, {
                            color: u.O.Alt2,
                            transform: u.Vb.Uppercase
                        }, Object(o.d)("Chat Options", "ChatSettings"))), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.showTimestamps,
                            "data-a-target": "timestamp-checkbox",
                            "data-test-selector": ae,
                            id: "chat-settings-timestamp",
                            label: Object(o.d)("Timestamps", "ChatSettings"),
                            onChange: this.props.onTimestampToggle
                        })), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, a.createElement(u.N, {
                            checked: this.props.useHighContrastColors,
                            "data-a-target": "high-contrast-color-checkbox",
                            "data-test-selector": oe,
                            id: "chat-settings-high-contrast",
                            label: Object(o.d)("Readable Colors", "ChatSettings"),
                            onChange: this.props.onHighContrastColorsToggle
                        })), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, e), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, t), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, r), a.createElement(u.Ya, {
                            margin: {
                                bottom: 1
                            }
                        }, n))
                    }, t = r.__decorate([Object(s.a)(Z, {
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
        HzXE: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "ChatRoomBanStatus"
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
                                        value: "channelID"
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
                                        value: "targetUserID"
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
                    end: 142
                }
            };
            n.loc.source = {
                body: "query ChatRoomBanStatus($targetUserID: ID! $channelID: ID!) {\nchatRoomBanStatus(channelID: $channelID userID: $targetUserID) {\nisPermanent\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
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
        "O3/n": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                a = n("Ue10"),
                o = function(e) {
                    return r.createElement(a.Ya, {
                        margin: {
                            top: 2,
                            bottom: 1,
                            x: 1
                        }
                    }, r.createElement(a.W, {
                        bold: !0,
                        color: a.O.Alt,
                        fontSize: a.Ca.Size7,
                        transform: a.Vb.Uppercase,
                        type: a.Wb.H4
                    }, e.children))
                };
            n.d(t, "a", function() {
                return o
            })
        },
        O3Y9: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return i
            });
            var r, a = n("/7QA"),
                o = n("2xye");

            function i(e) {
                a.p.tracking.track(o.SpadeEventType.WhisperIgnoreUser, {
                    ui_context: e.context,
                    from_login: e.currentUserLogin,
                    ignored_login: e.targetUserLogin
                })
            }! function(e) {
                e.ViewerCard = "chat_card", e.ReportWizard = "report_wizard"
            }(r || (r = {}))
        },
        Oy4H: function(e, t, n) {},
        Pp1Y: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("uNOt"),
                i = n("Ue10"),
                s = (n("obKW"), function(e) {
                    return a.createElement(i.Ra, {
                        borderRadius: i.x.Medium,
                        display: i.X.Block,
                        fontSize: i.Ca.Size5,
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, a.createElement(o.a, r.__assign({
                        activeClassName: "dashboard-side-nav__link--active",
                        className: "dashboard-side-nav__link",
                        exact: e.exact,
                        to: e.linkTo
                    }, Object(i.kc)(e)), e.children))
                });
            n.d(t, "a", function() {
                return s
            })
        },
        "Pub/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("HzXE");

            function a(e, t, n) {
                try {
                    return e.readQuery({
                        query: r,
                        variables: {
                            channelID: t,
                            targetUserID: n
                        }
                    })
                } catch (e) {}
            }
        },
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
                        return o.createElement(d.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, o.createElement(d.Ea, {
                            id: "reporting-modal__select",
                            label: Object(i.d)("Select Reason (required)", "ReportUserModal")
                        }, o.createElement(d.Ab, {
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
                m = Object(s.compose)(Object(l.a)(u, {
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
                return h
            }), n.d(t, "b", function() {
                return g
            });
            var h;
            ! function(e) {
                e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError", e[e.UserError = 4] = "UserError"
            }(h || (h = {}));
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
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description) : t.props.onError(h.FormError)
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
                    return o.createElement(d.Ya, {
                        display: d.X.Flex,
                        flexDirection: d.Aa.Column,
                        alignItems: d.f.Center,
                        justifyContent: d.Xa.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === h.Success ? o.createElement("div", null, o.createElement(d.z, {
                        onClick: this.props.onClose
                    }, o.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Close", "ReportUser")))) : o.createElement("div", null, o.createElement(d.Ya, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        },
                        "data-a-target": "reporting-channel-name"
                    }, o.createElement(d.W, {
                        type: d.Wb.H4
                    }, this.props.title), o.createElement(d.Fb, {
                        color: d.O.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), o.createElement("form", null, o.createElement(d.Fb, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, o.createElement(m, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), o.createElement(d.Ea, {
                        id: "reporting__text-area",
                        label: Object(i.d)("Description (required)", "ReportUser")
                    }, o.createElement(d.Tb, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), o.createElement(d.Fb, {
                        display: d.X.Flex,
                        justifyContent: d.Xa.Center
                    }, o.createElement(d.z, {
                        onClick: this.handleSubmit
                    }, o.createElement(d.Ya, {
                        padding: {
                            x: 2
                        }
                    }, Object(i.d)("Send", "ReportUser"))))))
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case h.FormError:
                            e = Object(i.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case h.MutationError:
                            e = Object(i.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case h.Success:
                            e = Object(i.d)("Thank you for your report.", "ReportUser");
                            break;
                        case h.UserError:
                            e = Object(i.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = a({
                        "reporting__error-container": this.props.submitStatus !== h.Success,
                        "reporting__success-container": this.props.submitStatus === h.Success
                    });
                    return o.createElement(d.Fb, {
                        className: t,
                        fullWidth: this.props.submitStatus !== h.Success,
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
        a2UF: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var r = n("mrSG"),
                a = n("yR8l"),
                o = n("Pub/"),
                i = n("HzXE"),
                s = n("1Rv/");

            function l(e) {
                var t = this;
                return Object(a.a)(s, {
                    props: function(n) {
                        return {
                            unbanUserMutation: function(a) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a
                                                        }
                                                    },
                                                    update: function(e, n) {
                                                        return function(e, t, n) {
                                                            if (t && t.data && t.data.unbanUserFromChatRoom && t.data.unbanUserFromChatRoom.ban && t.data.unbanUserFromChatRoom.ban.bannedUser && t.data.unbanUserFromChatRoom.ban.bannedUser.id) {
                                                                var a = Object(o.a)(e, n, t.data.unbanUserFromChatRoom.ban.bannedUser.id);
                                                                if (!a) return;
                                                                e.writeQuery({
                                                                    query: i,
                                                                    variables: {
                                                                        targetUserID: t.data.unbanUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: r.__assign({}, a, {
                                                                        chatRoomBanStatus: null
                                                                    })
                                                                })
                                                            }
                                                        }(e, n, t)
                                                    }
                                                })];
                                            case 2:
                                                return [2, s.sent().data];
                                            case 3:
                                                throw s.sent(), new Error("Unable to unban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Unban user mutation is not ready");
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
        },
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
        bRMw: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            });
            var r = n("/7QA"),
                a = n("kRBY"),
                o = "cc_v2_whitelist";

            function i(e, t) {
                var n = r.b.get(e, []),
                    o = r.p.store.getState();
                return n.includes(t) || n.includes(t + "-staff") && Object(a.g)(o)
            }
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
                m = n("geRD"),
                h = n("O3Y9"),
                g = n("f00E"),
                b = n("D7An"),
                f = n("DMoW"),
                v = n("2xye"),
                k = n("GnwI"),
                C = n("QVaV"),
                y = n("Ue10"),
                S = (n("MPK0"), "report-wizard-block"),
                _ = "report-wizard-unblock",
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            userBlocked: t.props.userBlocked || !1
                        }, t.renderBlock = function() {
                            return i.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleBlock,
                                "data-test-selector": S
                            }, i.createElement(y.Ya, {
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, i.createElement(y.tb, {
                                type: y.vb.Brand,
                                asset: y.ub.Ban
                            }), i.createElement(y.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, Object(c.d)("Block {user}", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))))
                        }, t.renderUnblock = function() {
                            return i.createElement(y.Ya, {
                                className: "reporting-wizard__block-actions",
                                display: y.X.Flex,
                                alignItems: y.f.Center
                            }, i.createElement(y.tb, {
                                type: y.vb.Success,
                                asset: y.ub.FollowCheck
                            }), i.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                }
                            }, i.createElement(y.W, {
                                className: "block-user__success",
                                type: y.Wb.Span
                            }, Object(c.d)("{user} blocked", {
                                user: t.displayName()
                            }, "ReportWizardBlockActions"))), i.createElement(y.U, {
                                hoverUnderlineNone: !0,
                                onClick: t.handleUnblock,
                                "data-test-selector": _
                            }, i.createElement(y.Ya, {
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
                            t = Object(C.a)(this.props.targetUser.login, this.props.targetUser.displayName, !0);
                        return i.createElement(y.Fb, {
                            borderTop: !0,
                            padding: {
                                y: 1
                            },
                            margin: {
                                top: 1
                            }
                        }, i.createElement(y.Ya, null, Object(c.d)("Would you like to block {user}?", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement(y.Fb, {
                            color: y.O.Alt2,
                            margin: {
                                y: 1
                            }
                        }, i.createElement(y.fc, {
                            baseFontSize: y.Ca.Size6
                        }, i.createElement("p", null, Object(c.d)("Blocking {user} will:", {
                            user: t
                        }, "ReportWizardBlockActions")), i.createElement("ul", null, i.createElement("li", null, Object(c.d)("Prevent them from sending you whispers", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from hosting you", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Prevent them from adding you as a friend", "ReportWizardBlockActions")), i.createElement("li", null, Object(c.d)("Filter their messages out of chats you don’t moderate", "ReportWizardBlockActions"))))), i.createElement(y.Ya, {
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
            var R, O = {
                    generalFilter: function() {
                        return Object(c.d)("I don't think their content or behavior is allowed on Twitch", "ReportModalWizard")
                    },
                    me: function() {
                        return Object(c.d)("Me", "ReportModalWizard")
                    },
                    someoneElse: function() {
                        return Object(c.d)("Someone else", "ReportModalWizard")
                    },
                    abusiveViolence: function() {
                        return Object(c.d)("Threatening violence or physical harm", "ReportModalWizard")
                    },
                    commitingViolence: function() {
                        return Object(c.d)("Committing acts of violence or physical harm", "ReportModalWizard")
                    },
                    threatening: function() {
                        return Object(c.d)("Threatening, harming, or endangering someone", "ReportModalWizard")
                    },
                    abusive: function() {
                        return Object(c.d)("Being hateful, harassing, or abusive", "ReportModalWizard")
                    },
                    harassment: function() {
                        return Object(c.d)("Hate speech, harassment, or abuse", "ReportModalWizard")
                    },
                    moreOptions: function() {
                        return Object(c.d)("Give me more options...", "ReportModalWizard")
                    },
                    scam: function() {
                        return Object(c.d)("Attempts to scam other community members", "ReportModalWizard")
                    }
                },
                w = {
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
                            return Object(c.d)("Please submit a report on the site or service where the incident occurred as well if you have not already done so.", "ReportModalWizard")
                        },
                        type: a.Text
                    },
                    endBlurb_threat: {
                        getTitle: function() {
                            return Object(c.d)("If you feel you are in immediate danger, please contact your local law enforcement. To protect yourself on Twitch, you may also block the user.", "ReportModalWizard")
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
                        getTitle: O.generalFilter,
                        value: "general_messaging",
                        omitFromDescription: !0
                    },
                    profile_general: {
                        getTitle: O.generalFilter,
                        value: "general_profile",
                        omitFromDescription: !0
                    },
                    maliciousRaid: {
                        getTitle: function() {
                            return Object(c.d)("Participating in a malicious raid", "ReportModalWizard")
                        },
                        value: "malicious raid",
                        reportReason: r.Harassment
                    },
                    automod: {
                        getTitle: function() {
                            return Object(c.d)("It's being used to bypass AutoMod", "ReportModalWizard")
                        },
                        value: "bypass automod",
                        reportReason: r.Other
                    },
                    violence: {
                        getTitle: function() {
                            return Object(c.d)("Threats, harm, or endangerment of someone", "ReportModalWizard")
                        },
                        value: "violence/threats",
                        reportReason: r.Harm
                    },
                    report_username: {
                        getTitle: function() {
                            return Object(c.d)("The username is inappropriate", "ReportModalWizard")
                        },
                        value: "inappropriate username",
                        reportReason: r.OffensiveUsername
                    },
                    report_emotes: {
                        getTitle: function() {
                            return Object(c.d)("The emotes or badges", "ReportModalWizard")
                        },
                        value: "inappropriate emotes",
                        reportReason: r.Other
                    },
                    emotes_break_guidelines: {
                        getTitle: function() {
                            return Object(c.d)("The emotes break Twitch's guidelines", "ReportModalWizard")
                        },
                        value: "emotes break guidelines",
                        reportReason: r.Other
                    },
                    abusive: {
                        getTitle: O.harassment,
                        value: "abusive"
                    },
                    scam: {
                        getTitle: O.scam,
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
                    impersonating: {
                        getTitle: function() {
                            return Object(c.d)("Impersonating someone", "ReportModalWizard")
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
                    itsInappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("It's inappropriate or obscene", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    inappropriateContent: {
                        getTitle: function() {
                            return Object(c.d)("Inappropriate or obscene content", "ReportModalWizard")
                        },
                        value: "inappropriate content"
                    },
                    violateDevAgreement: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Developer Agreement", "ReportModalWizard")
                        },
                        value: "violating developer agreement"
                    },
                    revealPersonalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Revealing someone's personal information", "ReportModalWizard")
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
                            return Object(c.d)("The extensions are inappropriate or malicious", "ReportModalWizard")
                        },
                        value: "inappropriate extension",
                        reportReason: r.Other
                    },
                    cheating: {
                        getTitle: function() {
                            return Object(c.d)("Cheating in an online game", "ReportModalWizard")
                        },
                        value: "cheating",
                        reportReason: r.Cheating
                    },
                    bitsViolation: {
                        getTitle: function() {
                            return Object(c.d)("They're breaking Twitch's Bits Policy", "ReportModalWizard")
                        },
                        value: "bits violation",
                        reportReason: r.BitsViolation
                    },
                    compromisedAccount: {
                        getTitle: function() {
                            return Object(c.d)("The account is stolen or compromised", "ReportModalWizard")
                        },
                        value: "account compromised",
                        reportReason: r.Other
                    },
                    video_labeling: {
                        getTitle: function() {
                            return Object(c.d)("Their content is misclassified (wrong category or tags)", "ReportModalWizard")
                        },
                        value: "incorrect label",
                        reportReason: r.Miscategorized
                    },
                    video_inactive: {
                        getTitle: function() {
                            return Object(c.d)("There's no streamer, or the streamer is inactive", "ReportModalWizard")
                        },
                        value: "inactive stream",
                        reportReason: r.Miscategorized
                    },
                    video_general: {
                        getTitle: O.generalFilter,
                        value: "general_video",
                        omitFromDescription: !0
                    },
                    hateSpeechSymbols: {
                        getTitle: function() {
                            return Object(c.d)("It contains hate speech or hate symbols", "ReportModalWizard")
                        },
                        value: "hate speech symbols",
                        reportReason: r.HatefulConduct
                    },
                    hateSpeech: {
                        getTitle: function() {
                            return Object(c.d)("Hate speech, hateful symbols, or other hateful conduct", "ReportModalWizard")
                        },
                        value: "hate speech",
                        reportReason: r.HatefulConduct
                    },
                    harassing: {
                        getTitle: function() {
                            return Object(c.d)("It's harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    harassment: {
                        getTitle: function() {
                            return Object(c.d)("Harassing or bullying someone", "ReportModalWizard")
                        },
                        value: "harassment",
                        reportReason: r.Harassment
                    },
                    abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "threatening violence",
                        reportReason: r.Harm
                    },
                    commitingViolence: {
                        getTitle: O.commitingViolence,
                        value: "committing violence",
                        reportReason: r.Harm
                    },
                    swatting: {
                        getTitle: function() {
                            return Object(c.d)("Involvement in swatting or DDOS attacks", "ReportModalWizard")
                        },
                        value: "swatting/ddosing",
                        reportReason: r.Harassment
                    },
                    personalInfo: {
                        getTitle: function() {
                            return Object(c.d)("Doxxing (purposely revealing personal information)", "ReportModalWizard")
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
                    sexuallyViolentChildAnimal: {
                        getTitle: function() {
                            return Object(c.d)("Sexual conduct involving violence, children, or animals", "ReportModalWizard")
                        },
                        value: "sexual conduct: violent, child, or animal",
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
                            return Object(c.d)("Evading a block, ban, or suspension", "ReportModalWizard")
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
                        getTitle: O.me,
                        value: "impersonating me",
                        reportReason: r.Impersonation
                    },
                    impersonation_brand: {
                        getTitle: function() {
                            return Object(c.d)("Someone I represent, or a company I work for", "ReportModalWizard")
                        },
                        value: "impersonating brand",
                        reportReason: r.Impersonation
                    },
                    impersonation_other: {
                        getTitle: O.someoneElse,
                        value: "Impersonating someone else",
                        reportReason: r.Impersonation
                    },
                    selfharm: {
                        getTitle: function() {
                            return Object(c.d)("I'm concerned for their wellbeing", "ReportModalWizard")
                        },
                        value: "selfharm",
                        reportReason: r.SelfHarm
                    },
                    video: {
                        getTitle: function() {
                            return Object(c.d)("In a live stream, video, or clip", "ReportModalWizard")
                        },
                        value: "video"
                    },
                    video_more_options: {
                        getTitle: O.moreOptions,
                        value: "video more options"
                    },
                    whisper: {
                        getTitle: function() {
                            return Object(c.d)("In a whisper (private message)", "ReportModalWizard")
                        },
                        value: "whisper",
                        reportContext: f.O.WHISPER_REPORT
                    },
                    whisper_more_options: {
                        getTitle: O.moreOptions,
                        value: "whisper more options"
                    },
                    chat: {
                        getTitle: function() {
                            return Object(c.d)("In a chat message or room", "ReportModalWizard")
                        },
                        value: "chat"
                    },
                    chat_more_options: {
                        getTitle: O.moreOptions,
                        value: "chat more options"
                    },
                    moderating: {
                        getTitle: function(e) {
                            return Object(c.d)("{username} isn't moderating their chat", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "moderating",
                        reportReason: r.Other
                    },
                    otherContent: {
                        getTitle: function(e) {
                            return Object(c.d)("In {username}'s other content (profile, emotes, etc.)", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        value: "other content"
                    },
                    profile: {
                        getTitle: function() {
                            return Object(c.d)("The profile content (avatar, panels, etc.)", "ReportModalWizard")
                        },
                        value: "profile"
                    },
                    profile_more_options: {
                        getTitle: O.moreOptions,
                        value: "profile more options"
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
                            return Object(c.d)("Inciting brigading or malicious raids", "ReportModalWizard")
                        },
                        reportReason: r.Harassment,
                        value: "brigading/raids"
                    },
                    external_threatening: {
                        getTitle: O.threatening,
                        value: "threatening"
                    },
                    external_harassment: {
                        getTitle: O.harassment,
                        value: "hateful/harassing"
                    },
                    external_abusiveViolence: {
                        getTitle: O.abusiveViolence,
                        value: "external site; threatening violence",
                        reportReason: r.Harm
                    },
                    external_commitingViolence: {
                        getTitle: O.commitingViolence,
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
                            return Object(c.d)("Spam, malicious links, or bot accounts", "ReportModalWizard")
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
                    spam_links: {
                        getTitle: function() {
                            return Object(c.d)("Sending malicious links", "ReportModalWizard")
                        },
                        value: "malicious links"
                    },
                    spam_scam: {
                        getTitle: O.scam,
                        value: "scam"
                    },
                    spam_repeated: {
                        getTitle: function() {
                            return Object(c.d)("Sending repeated messages (spam)", "ReportModalWizard")
                        },
                        value: "repeat messages"
                    }
                },
                T = function(e) {
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
                        var e = this.props.currentCard.getDescription ? i.createElement(y.Ya, {
                            padding: {
                                bottom: 1
                            }
                        }, this.props.currentCard.getDescription()) : null;
                        return i.createElement(y.Ya, {
                            className: "reporting-wizard-card"
                        }, e, i.createElement(y.Ea, {
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
                                    return i.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, t.getTitle());
                                case a.Link:
                                    return i.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(y.U, {
                                        to: t.value,
                                        targetBlank: !0
                                    }, i.createElement(y.Ya, {
                                        display: y.X.Flex
                                    }, i.createElement(y.Ya, {
                                        display: y.X.Inline,
                                        padding: {
                                            right: .5
                                        }
                                    }, i.createElement(y.tb, {
                                        asset: y.ub.Document
                                    })), t.getTitle())));
                                case a.Textarea:
                                    var r = t.value ? e.props.userTextInputs[t.value] : void 0,
                                        o = t.required && (!r || !!r && 0 === r.trim().length);
                                    return i.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            bottom: 1
                                        }
                                    }, i.createElement(y.Ea, {
                                        label: t.getTitle(),
                                        labelOptional: t.required ? "" : Object(c.d)("Optional", "ReportModalWizardCard")
                                    }, i.createElement(y.Tb, {
                                        onChange: e.onChange,
                                        rows: t.rows || 3,
                                        name: t.value,
                                        error: e.props.error && o,
                                        value: r,
                                        "data-test-selector": "report-wizard-textarea"
                                    })));
                                case a.MultipleChoice:
                                default:
                                    return i.createElement(y.Ya, {
                                        key: n,
                                        padding: {
                                            y: .5
                                        }
                                    }, i.createElement(y.qb, {
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
                M = n("RQ6e");
            ! function(e) {
                e.Confirm = "Confirm", e.MultipleChoice = "MultipleChoice", e.Info = "End Card"
            }(R || (R = {}));
            var U, j, A, D = {
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
                I = {
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
                    reportWhisper: function(e) {
                        return Object(c.d)("Report {username}'s Whisper", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfileOrOtherContent: function(e) {
                        return Object(c.d)("Report {username}'s Profile Or Other Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportProfile: function(e) {
                        return Object(c.d)("Report {username}'s Profile Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    reportEmotesBadges: function(e) {
                        return Object(c.d)("Report {username}'s Emotes or Badges", {
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
                x = {
                    getDescription: function() {
                        return Object(c.d)("Reports are reviewed by Twitch Staff 24 hours a day. We will issue penalties, such as account suspension and/or content removal, once we verify that a violation of our policies has occurred.", "ReportModalWizard")
                    },
                    blockPrompt: !0,
                    getTitle: I.thanks,
                    type: R.Info,
                    value: "end card"
                },
                z = {
                    socialMedia: o.__assign({}, x, {
                        items: [w.endBlurb_socialmedia]
                    }),
                    violence: o.__assign({}, x, {
                        items: [w.endBlurb_threat]
                    }),
                    legal: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("To submit a claim or report a violation of this type, you will need to follow the steps listed on the relevant page below.", "ReportModalWizard")
                        },
                        items: [w.endLink_DMCA, w.endLink_trademark, w.endLink_devAgreement],
                        type: R.Info,
                        value: "ip end"
                    },
                    selfharm: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("If you know the user personally, and you believe them to be in danger, please contact their local authorities immediately. The link below contains some general information that may be of use.", "ReportModalWizard")
                        },
                        items: [w.endLink_selfharm],
                        type: R.Info,
                        value: "selfharm end"
                    },
                    twitchEvent: {
                        getTitle: I.thanksConcern,
                        getDescription: function() {
                            return Object(c.d)("Please bring this concern to the attention of staff or security at the event if you have not already done so. More information is available at the link below.", "ReportModalWizard")
                        },
                        items: [w.endLink_eventCoC],
                        value: "twitch event end",
                        type: R.Info
                    }
                },
                N = {
                    getTitle: I.report,
                    getLabel: function() {
                        return Object(c.d)("Where is the problem?", "ReportModalWizard")
                    },
                    items: [w.video, w.whisper, w.chat, w.moderating, w.otherContent, w.report_username, w.report_other],
                    type: R.MultipleChoice,
                    value: "content type"
                },
                W = {
                    identifyUser: {
                        getTitle: I.reportVideo,
                        getLabel: D.identifyUser,
                        items: [w.video_streamer, w.video_someoneElse, w.video_chatSomeone],
                        type: R.MultipleChoice,
                        value: "video identify user"
                    },
                    content: {
                        getTitle: I.reportVideo,
                        getLabel: D.contentGeneral,
                        items: [w.violence, w.abusive, w.video_inactive, w.video_labeling, w.inappropriateContent, w.selfharm, w.video_more_options],
                        type: R.MultipleChoice,
                        value: "video report reason"
                    },
                    moreOptions: {
                        getTitle: I.reportVideo,
                        getLabel: D.contentGeneral,
                        items: [w.revealPersonalInfo, w.cheating, w.impersonating, w.underage, w.bitsViolation, w.report_ip, w.other],
                        type: R.MultipleChoice,
                        value: "video general report reason"
                    }
                },
                F = {
                    content: {
                        getTitle: I.reportMessage,
                        getLabel: D.contentGeneral,
                        items: [w.report_username, w.violence, w.abusive, w.evasion, w.spam, w.selfharm, w.chat_more_options],
                        type: R.MultipleChoice,
                        value: "message report reason"
                    },
                    moreOptions: {
                        getTitle: I.reportMessage,
                        getLabel: D.contentGeneral,
                        items: [w.emotes_break_guidelines, w.inappropriateContent, w.revealPersonalInfo, w.maliciousRaid, w.underage, w.bitsViolation, w.other],
                        type: R.MultipleChoice,
                        value: "message general report reason"
                    }
                },
                B = {
                    general: {
                        getTitle: I.reportWhisper,
                        getLabel: D.contentGeneral,
                        items: [w.report_username, w.violence, w.abusive, w.spam, w.selfharm, w.whisper_more_options],
                        type: R.MultipleChoice,
                        value: "whisper report reason",
                        getDescription: function() {
                            return Object(c.d)("Please note that we may review additional messages in this conversation to determine the context of your report.", "ReportModalWizard")
                        }
                    },
                    moreOptions: {
                        getTitle: I.reportWhisper,
                        getLabel: D.contentGeneral,
                        items: [w.emotes_break_guidelines, w.evasion, w.inappropriateContent, w.revealPersonalInfo, w.underage, w.other],
                        type: R.MultipleChoice,
                        value: "whisper general report reason"
                    }
                },
                L = {
                    profile: {
                        getTitle: I.reportProfile,
                        getLabel: D.contentGeneral,
                        items: [w.revealPersonalInfo, w.violence, w.abusive, w.inappropriateContent, w.selfharm, w.profile_more_options],
                        type: R.MultipleChoice,
                        value: "profile report reason"
                    },
                    profileMoreOptions: {
                        getTitle: I.reportProfile,
                        getLabel: D.contentGeneral,
                        items: [w.scam, w.evasion, w.impersonation, w.underage, w.report_ip, w.other],
                        type: R.MultipleChoice,
                        value: "profile general report reason"
                    },
                    emotes: {
                        getTitle: I.reportEmotesBadges,
                        getLabel: D.content,
                        items: [w.hateSpeechSymbols, w.harassing, w.itsInappropriateContent, w.automod, w.report_ip, w.other],
                        type: R.MultipleChoice,
                        value: "emote report reason"
                    },
                    general: {
                        getTitle: I.reportProfileOrOtherContent,
                        getLabel: D.content,
                        items: [w.report_username, w.profile, w.report_emotes, w.inappropriateExtension, w.compromisedAccount, w.violateDevAgreement],
                        type: R.MultipleChoice,
                        value: "profile content location"
                    }
                },
                P = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Room", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.identifyUser,
                    items: [w.report_channelOwner, w.report_member],
                    value: "room report user",
                    type: R.MultipleChoice
                },
                V = {
                    getTitle: I.tellUsMore,
                    items: [w.input_description],
                    type: R.Confirm,
                    value: "tell us more"
                },
                H = {
                    banEvasion: o.__assign({}, V, {
                        items: [w.input_usernames, w.input_description],
                        value: "ban evasion tell us more"
                    }),
                    socialMedia: o.__assign({}, V, {
                        items: [w.input_link, w.input_connection, w.input_description],
                        nextCard: z.socialMedia,
                        value: "social media tell us more"
                    })
                },
                Y = {
                    content: {
                        getTitle: I.reportAbusive,
                        getLabel: D.relevantStatements,
                        items: [w.hateSpeech, w.harassment, w.abusiveViolence, w.commitingViolence, w.swatting, w.personalInfo],
                        type: R.MultipleChoice,
                        value: "abuse type"
                    }
                },
                q = {
                    identifyLocation: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username} for something else...", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: function() {
                            return Object(c.d)("Where did the problem happen?", "ReportModalWizard")
                        },
                        items: [w.location_onTwitch, w.location_anotherSite, w.location_TwitchEvent],
                        type: R.MultipleChoice,
                        value: "off-site conduct location"
                    },
                    externalSite: {
                        getTitle: function(e) {
                            return Object(c.d)("Report {username}'s Conduct on Another Site or Service", {
                                username: e
                            }, "ReportModalWizard")
                        },
                        getLabel: D.contentGeneral,
                        getDescription: function() {
                            return Object(c.d)("Please note that incidents reported through this form must involve Twitch community members. If possible, please submit a report to the site or service where the incident occurred as well.", "ReportModalWizard")
                        },
                        items: [w.external_incitingRaids, w.external_threatening, w.external_harassment],
                        type: R.MultipleChoice,
                        nextCard: H.socialMedia,
                        value: "external site conduct"
                    },
                    external_abusive: o.__assign({}, Y.content, {
                        items: [w.hateSpeech, w.harassment, w.external_abusiveViolence, w.external_commitingViolence, w.swatting, w.personalInfo],
                        nextCard: H.socialMedia
                    })
                },
                G = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username}'s Spam or Malicious Links", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.contentGeneral,
                    items: [w.spam_bot, w.spam_scam, w.spam_links, w.spam_repeated],
                    type: R.MultipleChoice,
                    value: "spam type"
                },
                X = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Inappropriate Content", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: D.relevantStatements,
                    items: [w.inappropriate_game, w.gory, w.sexuallyViolentChildAnimal, w.pornographic, w.suggestive, w.nudity, w.other],
                    type: R.MultipleChoice,
                    value: "inappropriate content type"
                },
                Q = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Evading a Ban", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("What kind of ban are they evading?", "ReportModalWizard")
                    },
                    value: "ban type",
                    items: [w.evasion_chat, w.evasion_sitewide, w.evasion_messaging],
                    type: R.MultipleChoice,
                    nextCard: H.banEvasion
                },
                K = {
                    getTitle: function(e) {
                        return Object(c.d)("Report {username} for Impersonation", {
                            username: e
                        }, "ReportModalWizard")
                    },
                    getLabel: function() {
                        return Object(c.d)("Who is being impersonated?", "ReportModalWizard")
                    },
                    getDescription: function() {
                        return Object(c.d)("Please note that parody, cosplay, and other portrayals without the intent to deceive or defraud are allowed under Twitch's Community Guidelines. If you would still like to submit a report, please continue.", "ReportModalWizard")
                    },
                    items: [w.impersonation_me, w.impersonation_brand, w.impersonation_other],
                    type: R.MultipleChoice,
                    value: "impersonation type"
                },
                $ = N,
                Z = V,
                J = x,
                ee = {
                    video: W.content,
                    "video more options": W.moreOptions,
                    whisper: B.general,
                    "whisper more options": B.moreOptions,
                    chat: F.content,
                    "chat more options": F.moreOptions,
                    "other content": L.general,
                    profile: L.profile,
                    "profile more options": L.profileMoreOptions,
                    room: P,
                    "somewhere else": q.identifyLocation,
                    streamer: W.content,
                    "someone else in video": W.content,
                    "someone in chat": F.content,
                    general_video: W.moreOptions,
                    general_messaging: F.content,
                    general_profile: L.profile,
                    "channel owner": L.general,
                    "community member": F.content,
                    "on twitch": L.general,
                    "another site": q.externalSite,
                    "twitch event": z.twitchEvent,
                    "brigading/raids": H.socialMedia,
                    "hateful/harassing": q.external_abusive,
                    "external site; scam": H.socialMedia,
                    "ban evasion": Q,
                    spam: G,
                    hateful: Y.content,
                    impersonation: K,
                    abusive: Y.content,
                    "inappropriate content": X,
                    "inappropriate emotes": L.emotes,
                    "intellectual property": z.legal,
                    "violating developer agreement": z.legal
                },
                te = {
                    selfharm: z.selfharm,
                    harm: z.violence,
                    other: J
                },
                ne = {
                    CHANNEL_FEED_POST_REPORT: L.general,
                    COMMUNITY_REPORT: L.general,
                    CHAT_REPORT: F.content,
                    CLIP_REPORT: W.content,
                    EVENT_REPORT: L.general,
                    EXTENSION_REPORT: L.general,
                    LIVE_UP_REPORT: L.general,
                    ROOM_REPORT: P,
                    WHISPER_REPORT: B.general,
                    VOD_COMMENT_REPORT: F.content
                },
                re = "report-wizard-back",
                ae = "report-wizard-close",
                oe = "report-wizard-next",
                ie = "report-wizard-submit",
                se = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            currentCard: t.props.currentCard || ne[t.props.reportContentType] || $,
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
                            return i.createElement(y.Ya, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(y.W, null, Object(c.d)("We are going to ask you a few questions to help us investigate your report quickly and accurately.", "ReportModalWizard")))
                        }, t.renderButtons = function() {
                            var e = Object(c.d)("Close", "ReportModalWizard"),
                                n = t.handleClose,
                                r = ae,
                                a = !1,
                                o = t.state.prevCards.length ? t.renderBack() : null;
                            switch (t.state.currentCard.type) {
                                case R.MultipleChoice:
                                    e = Object(c.d)("Next", "ReportModalWizard"), n = t.handleNext, r = oe, a = !t.state.currentSelection;
                                    break;
                                case R.Confirm:
                                    e = Object(c.d)("Submit Report", "ReportModalWizard"), n = t.handleSubmit, a = !t.state.userTextInput, r = ie
                            }
                            return i.createElement(y.Ya, null, o, i.createElement(y.z, {
                                onClick: n,
                                disabled: a,
                                "data-test-selector": r
                            }, i.createElement(y.Ya, {
                                padding: {
                                    x: 1
                                }
                            }, e)))
                        }, t.renderBack = function() {
                            return i.createElement(y.Ya, {
                                margin: {
                                    right: 1
                                },
                                display: y.X.InlineBlock
                            }, i.createElement(y.z, {
                                type: y.F.Hollow,
                                onClick: t.handleBack,
                                "data-test-selector": re
                            }, i.createElement(y.Ya, {
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
                                return t.props.trackClose(A.Finish, t.state.currentCard.value, t.getChoiceIndex())
                            }), t.props.onClose()
                        }, t.getChoiceIndex = function() {
                            var e = 0;
                            return t.state.currentCard && t.state.currentCard.items && (e = t.state.currentCard.items.findIndex(function(e) {
                                return t.state.currentSelection === e
                            }) + 1), e >= 1 ? e : void 0
                        }, t.handleNext = function() {
                            if (t.state.currentSelection && t.state.currentSelection.value) {
                                var e = t.state.currentCard,
                                    n = t.state.prevCards.concat(e),
                                    r = t.state.prevSelections.concat(t.state.currentSelection),
                                    a = t.state.displacedSelections[t.state.displacedSelections.length - 1],
                                    o = t.state.currentSelection.differentTarget || t.state.targetUnknown,
                                    i = t.state.currentSelection.reportContext || t.state.reportContext,
                                    s = t.getChoiceIndex(),
                                    l = e.nextCard || Z;
                                ee[t.state.currentSelection.value] && (l = ee[t.state.currentSelection.value]);
                                var c = t.state.currentSelection.reportReason || t.state.reportReason,
                                    d = l.type === R.Info;
                                t.setState({
                                    currentCard: l,
                                    reportReason: c,
                                    prevCards: d ? [] : n,
                                    prevSelections: r,
                                    targetUnknown: o,
                                    currentSelection: a || null,
                                    displacedSelections: t.state.displacedSelections.slice(0, -1),
                                    reportContext: i
                                }, function() {
                                    return t.trackNavigation(j.Next, e.value, s)
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
                                var e, t, n, r, a, i = this;
                                return o.__generator(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e = Object(c.d)("Additional information is required.", "ReportModalWizard"), this.requiredInputsNonEmpty() ? (t = this.state.reportReason || "other", n = this.createReportDescription(), [4, this.props.onSubmit(t, n, this.state.reportContext)]) : [3, 2];
                                        case 1:
                                            switch (o.sent(), this.props.submitStatus) {
                                                case M.a.FormError:
                                                    this.setState({
                                                        error: e
                                                    });
                                                    break;
                                                case M.a.Success:
                                                    r = J, te[t] && (r = te[t]), this.state.currentCard.nextCard && (r = this.state.currentCard.nextCard), a = this.getChoiceIndex(), this.setState({
                                                        currentCard: r,
                                                        prevCards: [],
                                                        prevSelections: [],
                                                        currentSelection: null,
                                                        displacedSelections: [],
                                                        userTextInput: {},
                                                        error: ""
                                                    }, function() {
                                                        return i.trackNavigation(j.Submit, void 0, a)
                                                    });
                                                    break;
                                                case M.a.UserError:
                                                    this.setState({
                                                        error: Object(c.d)("This account could not be reported. It may have already been suspended, or the owner may have deleted it.", "ReportModalWizard")
                                                    });
                                                    break;
                                                case M.a.MutationError:
                                                default:
                                                    this.setState({
                                                        error: Object(c.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportModalWizard")
                                                    })
                                            }
                                            return [3, 3];
                                        case 2:
                                            this.props.onError(M.a.FormError), this.setState({
                                                error: e
                                            }), o.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        }, t.handleBack = function() {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var e, t, n, r, a, i, s = this;
                                return o.__generator(this, function(o) {
                                    return e = this.state.currentCard, t = this.state.prevCards[this.state.prevCards.length - 1], n = this.state.prevSelections[this.state.prevSelections.length - 1], r = !n.differentTarget && this.state.targetUnknown, a = this.getChoiceIndex(), i = this.state.displacedSelections, this.state.currentSelection && (i = i.concat(this.state.currentSelection)), t && n && this.setState({
                                        currentCard: t,
                                        currentSelection: n,
                                        displacedSelections: i,
                                        prevCards: this.state.prevCards.slice(0, -1),
                                        prevSelections: this.state.prevSelections.slice(0, -1),
                                        error: "",
                                        targetUnknown: r
                                    }, function() {
                                        return s.trackNavigation(j.Back, e.value, a)
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
                        }, t.trackNavigation = function(e, n, r) {
                            t.props.trackAction(e, n, t.state.currentCard.value, r)
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.componentWillUnmount = function() {
                        this.state.modalCloseTracked || this.props.trackClose(A.Close, this.state.currentCard.value, this.getChoiceIndex())
                    }, t.prototype.render = function() {
                        var e = this.state.currentCard.type === R.Info && this.state.currentCard.blockPrompt ? i.createElement(E, {
                                targetUser: this.props.targetUser,
                                onBlock: this.props.onBlock,
                                onUnblock: this.props.onUnblock,
                                userBlocked: this.props.userBlocked
                            }) : null,
                            t = this.state.error ? i.createElement(y.Fb, {
                                fullWidth: !0,
                                margin: {
                                    bottom: 1
                                },
                                padding: 1,
                                className: "reporting__error-container"
                            }, this.state.error) : null,
                            n = this.state.prevCards.length || this.state.currentCard.type === R.Info ? null : this.renderPrimer();
                        return i.createElement(y.Fb, {
                            className: "reporting-wizard",
                            display: y.X.Flex,
                            margin: {
                                x: 1
                            },
                            flexDirection: y.Aa.Column,
                            fullHeight: !0,
                            "data-test-card-value": this.state.currentCard.value
                        }, t, i.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size4
                        }, this.getTitle()), n, i.createElement(y.Ya, {
                            margin: {
                                y: 1
                            }
                        }, i.createElement(T, {
                            currentCard: this.state.currentCard,
                            currentSelection: this.state.currentSelection,
                            targetUser: this.props.targetUser,
                            targetUserID: this.props.targetUser.id,
                            onChangeRadio: this.handleSelection,
                            onChangeText: this.handleTextInput,
                            userTextInputs: this.state.userTextInput,
                            error: this.props.submitStatus === M.a.FormError && !!this.state.error
                        }), e), this.renderButtons())
                    }, t
                }(i.Component),
                le = n("s8Ou"),
                ce = n("0hI/");
            n.d(t, "c", function() {
                    return j
                }), n.d(t, "a", function() {
                    return A
                }), n.d(t, "b", function() {
                    return ue
                }),
                function(e) {
                    e.Close = "close", e.Open = "open", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(U || (U = {})),
                function(e) {
                    e.Back = "back", e.Close = "close", e.Open = "open", e.Next = "next", e.Submit = "submit_report", e.ToggleSettings = "modal_settings"
                }(j || (j = {})),
                function(e) {
                    e.Close = "close", e.Finish = "finish"
                }(A || (A = {}));
            var de = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.handleSubmit = function(e, t, r) {
                        return o.__awaiter(n, void 0, void 0, function() {
                            var n, a, i, s, l = this;
                            return o.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (n = r === f.O.WHISPER_REPORT ? r : this.props.reportContext.contentType, a = f.O[n], null === (i = {
                                                description: t,
                                                reason: e,
                                                content: a,
                                                contentID: this.props.reportContext.contentID,
                                                extra: this.props.reportContext.extra,
                                                targetID: this.props.data.targetUser.id
                                            }).targetID) return this.setState({
                                            submitStatus: M.a.UserError
                                        }), [2];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.props.reportUser(Object(m.a)(i))];
                                    case 2:
                                        return o.sent(), this.setState({
                                            submitStatus: M.a.Success
                                        }, function() {
                                            l.state.showWizard || l.trackAction(U.Submit)
                                        }), [3, 4];
                                    case 3:
                                        return s = o.sent(), c.k.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: M.a.MutationError
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
                        }), n.props.sessionUser && n.props.sessionUser.login && n.props.data.targetUser && n.props.data.targetUser.login && Object(h.b)({
                            context: h.a.ReportWizard,
                            targetUserLogin: n.props.data.targetUser.login,
                            currentUserLogin: n.props.sessionUser.login
                        })
                    }, n.onUnblock = function() {
                        n.props.unblockUserMutation(n.props.data.targetUser.id, o.__assign({}, n.props.sessionUser, {
                            __typename: "User"
                        })), n.setState({
                            userBlocked: !1
                        })
                    }, n.trackOpen = function(e) {
                        n.state.openEventSent || (n.state.showWizard ? n.trackWizardAction(j.Open, void 0, e) : n.trackAction(U.Open), n.setState({
                            openEventSent: !0
                        }))
                    }, n.trackClose = function(e, t, r) {
                        n.state.closeEventSent || (n.state.showWizard ? n.trackWizardAction(j.Close, t, void 0, r, e) : n.trackAction(U.Close), n.setState({
                            closeEventSent: !0
                        }))
                    }, n.trackWizardAction = function(e, t, r, a, o) {
                        c.p.tracking.track(v.SpadeEventType.ReportWizardFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            modal_type: "wizard_v2",
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            close_type: o,
                            report_session_id: n.reportID,
                            current_step: t,
                            navigated_to: r,
                            choice_index: a
                        })
                    }, n.trackAction = function(e) {
                        c.p.tracking.track(v.SpadeEventType.ReportFlowAction, {
                            ui_context: n.props.reportContext.contentType,
                            target_user_id: n.props.reportContext.targetUserID,
                            report_sent: n.state.submitStatus === M.a.Success,
                            extra_user_id: n.props.reportContext.additionalTrackingID,
                            action: e,
                            report_session_id: n.reportID
                        })
                    }, n.reportID = Object(g.a)();
                    var r = c.p.experiments.getAssignment(b.b.NewReportingWizard);
                    return n.state = {
                        submitStatus: M.a.Unsubmitted,
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
                    if (this.props.data.error) return i.createElement(y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(y.W, {
                        fontSize: y.Ca.Size5
                    }, Object(c.d)("There was an unexpected error. Please refresh the page and try again", "ReportUser")));
                    if (this.props.data.loading) return i.createElement(y.jb, {
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
                        return this.state.showWizard ? this.props.data.loading ? i.createElement(y.ab, null) : i.createElement(se, o.__assign({}, e, {
                            user: this.props.sessionUser,
                            onBlock: this.onBlock,
                            onUnblock: this.onUnblock,
                            targetUser: this.props.data.targetUser,
                            trackAction: this.trackWizardAction,
                            trackClose: this.trackClose,
                            userBlocked: this.userBlocked
                        })) : i.createElement(M.b, o.__assign({}, e, {
                            targetUser: this.props.data.targetUser
                        }))
                    }
                    return i.createElement(y.Ya, {
                        margin: {
                            bottom: 1
                        }
                    }, i.createElement(y.W, {
                        fontSize: y.Ca.Size5
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
            var ue = Object(l.compose)(Object(d.a)(le, {
                name: "reportUser"
            }), Object(d.a)(ce, {
                options: function(e) {
                    return {
                        variables: {
                            targetUserID: e.reportContext.targetUserID
                        }
                    }
                }
            }), Object(k.b)("ReportUser", {
                autoReportInteractive: !0
            }), Object(u.a)(), Object(p.a)(), Object(s.connect)(function(e) {
                return {
                    sessionUser: e.session.user
                }
            }, null))(de)
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
        gq0V: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return l
            });
            var r = n("q1tI"),
                a = n("/7QA"),
                o = n("5g1g"),
                i = n("wUQP"),
                s = function(e) {
                    var t = e.children;
                    return r.createElement(o.a, {
                        name: "vip_badge_gate"
                    }, t)
                },
                l = function() {
                    return i.a.On === a.b.get("vip_badge_gate", i.a.Off)
                }
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
        iyGE: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("yR8l"),
                o = n("Pub/"),
                i = n("HzXE"),
                s = 60,
                l = 60 * s,
                c = 24 * l,
                d = 7 * c,
                u = 4 * d;
            var p = n("4w0E");

            function m(e) {
                var t = this;
                return Object(a.a)(p, {
                    props: function(n) {
                        return {
                            banUserMutation: function(a, p, m) {
                                return void 0 === p && (p = null), void 0 === m && (m = null), r.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return r.__generator(this, function(h) {
                                        switch (h.label) {
                                            case 0:
                                                if (t = e(n.ownProps).channelID, !n.mutate) return [3, 5];
                                                h.label = 1;
                                            case 1:
                                                return h.trys.push([1, 3, , 4]), [4, n.mutate({
                                                    variables: {
                                                        input: {
                                                            channelID: t,
                                                            bannedUserLogin: a,
                                                            expiresIn: p && function(e) {
                                                                if (!e) return "0s";
                                                                var t = e,
                                                                    n = "";
                                                                if (t > u) {
                                                                    var r = Math.floor(t / u);
                                                                    t -= r * u, n += r + "mo"
                                                                }
                                                                if (t > d) {
                                                                    var a = Math.floor(t / d);
                                                                    t -= a * d, n += a + "w"
                                                                }
                                                                if (t > c) {
                                                                    var o = Math.floor(t / c);
                                                                    t -= o * c, n += o + "d"
                                                                }
                                                                if (t > l) {
                                                                    var i = Math.floor(t / l);
                                                                    t -= i * l, n += i + "h"
                                                                }
                                                                if (t > s) {
                                                                    var p = Math.floor(t / s);
                                                                    t -= p * s, n += p + "m"
                                                                }
                                                                return t > 0 && (n += t + "s"), n
                                                            }(p),
                                                            reason: m
                                                        }
                                                    },
                                                    update: function(e, n) {
                                                        return function(e, t, n) {
                                                            if (t && t.data && t.data.banUserFromChatRoom && t.data.banUserFromChatRoom.ban && t.data.banUserFromChatRoom.ban.bannedUser && t.data.banUserFromChatRoom.ban.bannedUser.id) {
                                                                var a = Object(o.a)(e, n, t.data.banUserFromChatRoom.ban.bannedUser.id);
                                                                if (!a) return;
                                                                e.writeQuery({
                                                                    query: i,
                                                                    variables: {
                                                                        targetUserID: t.data.banUserFromChatRoom.ban.bannedUser.id,
                                                                        channelID: n
                                                                    },
                                                                    data: r.__assign({}, a, {
                                                                        chatRoomBanStatus: {
                                                                            isPermanent: t.data.banUserFromChatRoom.ban.isPermanent,
                                                                            __typename: "ChatRoomBanStatus"
                                                                        }
                                                                    })
                                                                })
                                                            }
                                                        }(e, n, t)
                                                    }
                                                })];
                                            case 2:
                                                return [2, h.sent().data];
                                            case 3:
                                                throw h.sent(), new Error("Unable to ban user");
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                throw new Error("Ban user mutation is not ready");
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
            n.d(t, "a", function() {
                return m
            })
        },
        kELf: function(e, t, n) {},
        m9vr: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                i = n("Ue10"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(i.Ya, {
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(i.Ya, {
                            display: i.X.Flex,
                            flexGrow: 1,
                            alignItems: i.f.Center,
                            justifyContent: i.Xa.Center,
                            flexDirection: i.Aa.Column,
                            fullHeight: !0
                        }, a.createElement(i.tb, {
                            width: 48,
                            height: 48,
                            asset: i.ub.Lock,
                            type: i.vb.Alt2
                        }), a.createElement(i.Ya, {
                            display: i.X.Flex,
                            alignItems: i.f.Center,
                            flexDirection: i.Aa.Column,
                            margin: {
                                top: 1
                            }
                        }, a.createElement(i.W, {
                            bold: !0,
                            fontSize: i.Ca.Size3
                        }, Object(o.d)("Access Denied", "DashboardAccessDenied")), a.createElement(i.W, {
                            fontSize: i.Ca.Size4,
                            color: i.O.Alt2
                        }, Object(o.d)("You don't have access to this dashboard", "DashboardAccessDenied")))))
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        nEWQ: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                o = n("9C/b"),
                i = n("fvjX"),
                s = n("/7QA"),
                l = n("wUQP"),
                c = n("O3/n"),
                d = n("Pp1Y"),
                u = n("gq0V"),
                p = n("w+70"),
                m = "consolidated_dashboard_settings",
                h = {
                    "data-test-selector": "revenue-settings-link-selector"
                },
                g = {
                    "data-test-selector": "settings-link-selector"
                },
                b = {
                    "data-test-selector": "moderation-link-selector"
                },
                f = {
                    "data-test-selector": "moderation-settings-link-selector"
                },
                v = {
                    "data-test-selector": "permissions-link-selector"
                },
                k = {
                    "data-test-selector": "roles-link-selector"
                },
                C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.isVIPBadgeEnabled = Object(u.b)(), t.isConsolidatedModerationEnabled = Object(l.b)(m), t
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e, t = this.props,
                            n = t.match.params.channelLogin,
                            o = t.pageAccess,
                            i = [];
                        return o[p.a.SettingsChannel].channelEnabled && o[p.a.SettingsChannel].currentUserAuthorized && i.push(a.createElement(d.a, r.__assign({
                            exact: !0,
                            linkTo: "/" + n + "/dashboard/settings"
                        }, g), Object(s.d)("Channel", "SettingsDashboardNav"))), o[p.a.SettingsRoles].channelEnabled && o[p.a.SettingsRoles].currentUserAuthorized && (this.isVIPBadgeEnabled ? i.push(a.createElement(d.a, r.__assign({
                            linkTo: "/" + n + "/dashboard/roles"
                        }, k), Object(s.d)("Roles", "SettingsDashboardNav"))) : i.push(a.createElement(d.a, r.__assign({
                            linkTo: "/" + n + "/dashboard/permissions"
                        }, v), Object(s.d)("Permissions", "DashboardNav")))), o[p.a.SettingsModeration].channelEnabled && o[p.a.SettingsModeration].currentUserAuthorized && (this.isConsolidatedModerationEnabled ? i.push(a.createElement(d.a, r.__assign({
                            linkTo: "/" + n + "/dashboard/settings/moderation"
                        }, f), Object(s.d)("Moderation Settings", "SettingsDashboardNav"))) : i.push(a.createElement(d.a, r.__assign({
                            linkTo: "/" + n + "/dashboard/settings/automod"
                        }, b), Object(s.d)("Moderation", "SettingsDashboardNav")))), o[p.a.SettingsRevenuePartner].channelEnabled && o[p.a.SettingsRevenuePartner].currentUserAuthorized || o[p.a.SettingsRevenueAffiliate].channelEnabled && o[p.a.SettingsRevenueAffiliate].currentUserAuthorized ? e = Object(s.d)("Affiliate / Partner", "SettingsDashboardNav") : o[p.a.SettingsRevenueDeveloper].channelEnabled && o[p.a.SettingsRevenueDeveloper].currentUserAuthorized && (e = Object(s.d)("Extensions Developer", "SettingsDashboardNav")), e && i.push(a.createElement(d.a, r.__assign({
                            linkTo: "/" + n + "/dashboard/settings/revenue"
                        }, h), e)), i.length ? a.createElement(a.Fragment, null, a.createElement(c.a, null, Object(s.d)("Settings", "SettingsDashboardNav")), a.createElement("ul", null, i.map(function(e, t) {
                            return a.createElement("li", {
                                key: t
                            }, e)
                        }))) : null
                    }, t
                }(a.Component),
                y = Object(i.compose)(o.a, p.c)(C);
            n.d(t, "a", function() {
                return m
            }), n.d(t, !1, function() {
                return h
            }), n.d(t, !1, function() {
                return g
            }), n.d(t, !1, function() {
                return b
            }), n.d(t, !1, function() {
                return f
            }), n.d(t, !1, function() {
                return v
            }), n.d(t, !1, function() {
                return k
            }), n.d(t, !1, function() {
                return C
            }), n.d(t, "b", function() {
                return y
            })
        },
        obKW: function(e, t, n) {},
        op4u: function(e, t, n) {},
        rVj2: function(e, t) {
            var n = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DashboardPageAccessContext"
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
                                value: "isChannelOwner"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
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
                                        value: "roles"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isGlobalMod"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isSiteAdmin"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }, {
                            kind: "Field",
                            alias: {
                                kind: "Name",
                                value: "channel"
                            },
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
                                        value: "bountyBoardSettings"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isEnabled"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "payoutInvite"
                                    },
                                    arguments: [],
                                    directives: [{
                                        kind: "Directive",
                                        name: {
                                            kind: "Name",
                                            value: "include"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "if"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isChannelOwner"
                                                }
                                            }
                                        }]
                                    }],
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
                                                value: "category"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
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
                                            name: {
                                                kind: "Name",
                                                value: "isAffiliate"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isPartner"
                                            },
                                            arguments: [],
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "isModerator"
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
                    end: 337
                }
            };
            n.loc.source = {
                body: "query DashboardPageAccessContext($channelLogin: String! $isChannelOwner: Boolean!) {\ncurrentUser {\nid\nroles {\nisGlobalMod\nisSiteAdmin\n}\n}\nchannel: user(login: $channelLogin) {\nid\nbountyBoardSettings {\nisEnabled\n}\npayoutInvite @include(if: $isChannelOwner) {\nid\ncategory\n}\nroles {\nisAffiliate\nisPartner\n}\nself {\nisEditor\nisModerator\n}\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = n
        },
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
        "w+70": function(e, t, n) {
            "use strict";
            var r, a, o, i = n("mrSG"),
                s = n("q1tI"),
                l = n("/MKj"),
                c = n("9C/b"),
                d = n("fvjX"),
                u = n("ZDlU"),
                p = n("LA8z"),
                m = n("yR8l"),
                h = n("DMoW"),
                g = n("kRBY"),
                b = n("1rIY"),
                f = n("m9vr"),
                v = n("bRMw"),
                k = n("Ue10"),
                C = n("rVj2");
            ! function(e) {
                e.AnalyticsChannel = "AnalyticsChannel", e.AnalyticsStreamSummary = "AnalyticsStreamSummary", e.DashboardAchievements = "DashboardAchievements", e.DashboardActivity = "DashboardActivity", e.DashboardBounties = "DashboardBounties", e.DashboardEvents = "DashboardEvents", e.DashboardExtensions = "DashboardExtensions", e.DashboardLive = "DashboardLive", e.DashboardMultiview = "DashboardMultiview", e.DashboardBroadcast = "DashboardBroadcast", e.SettingsChannel = "SettingsChannel", e.SettingsModeration = "SettingsModeration", e.SettingsRevenueAffiliate = "SettingsRevenueAffiliate", e.SettingsRevenueDeveloper = "SettingsRevenueDeveloper", e.SettingsRevenuePartner = "SettingsRevenuePartner", e.SettingsRoles = "SettingsRoles", e.VideoClips = "VideoClips", e.VideoCollections = "VideoCollections", e.VideoModeration = "VideoModeration", e.VideoProducer = "VideoProducer"
            }(o || (o = {}));
            var y = (a = Object(b.a)("PageAccessContext", {
                    pageAccess: (r = {}, r[o.AnalyticsChannel] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.AnalyticsStreamSummary] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardAchievements] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardActivity] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardBounties] = {
                        channelEnabled: !1,
                        currentUserAuthorized: !1
                    }, r[o.DashboardEvents] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardExtensions] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardLive] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.DashboardMultiview] = {
                        channelEnabled: !1,
                        currentUserAuthorized: !1
                    }, r[o.DashboardBroadcast] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.SettingsChannel] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.SettingsModeration] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.SettingsRevenueAffiliate] = {
                        channelEnabled: !1,
                        currentUserAuthorized: !1
                    }, r[o.SettingsRevenueDeveloper] = {
                        channelEnabled: !1,
                        currentUserAuthorized: !1
                    }, r[o.SettingsRevenuePartner] = {
                        channelEnabled: !1,
                        currentUserAuthorized: !1
                    }, r[o.SettingsRoles] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.VideoClips] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.VideoCollections] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.VideoModeration] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r[o.VideoProducer] = {
                        channelEnabled: !0,
                        currentUserAuthorized: !1
                    }, r)
                })).InnerProvider,
                S = a.withContext;

            function _(e) {
                return e
            }

            function E(e) {
                return S(_)(e)
            }
            var R = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t = this.props,
                        n = t.data,
                        r = n.channel,
                        a = n.currentUser,
                        i = n.error,
                        l = n.loading,
                        c = t.match.params.channelLogin,
                        d = t.sessionUser;
                    if (l) return s.createElement(k.ab, {
                        fillContent: !0,
                        size: k.Db.Large
                    });
                    var m = Boolean(d && d.login.toLowerCase() === c.toLowerCase()),
                        g = Boolean(r && r.self && r.self.isEditor),
                        b = Boolean(r && r.self && r.self.isModerator),
                        C = Boolean(d && d.roles && d.roles.isStaff),
                        S = Boolean(a && a.roles && a.roles.isSiteAdmin),
                        _ = Boolean(a && a.roles && a.roles.isGlobalMod);
                    if (!m) {
                        if (i) return s.createElement(u.a, null);
                        if (!r || !r.id) return s.createElement(p.a, null);
                        if (!(g || b || C || S || _)) return s.createElement(f.a, null)
                    }
                    var E = r && r.payoutInvite && r.payoutInvite.category,
                        R = {
                            pageAccess: (e = {}, e[o.AnalyticsChannel] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || C
                            }, e[o.AnalyticsStreamSummary] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || C
                            }, e[o.DashboardAchievements] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || C
                            }, e[o.DashboardActivity] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || C
                            }, e[o.DashboardBounties] = {
                                channelEnabled: Boolean(r && r.bountyBoardSettings && r.bountyBoardSettings.isEnabled),
                                currentUserAuthorized: m
                            }, e[o.DashboardEvents] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || g || C
                            }, e[o.DashboardExtensions] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m
                            }, e[o.DashboardLive] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || g || C
                            }, e[o.DashboardMultiview] = {
                                channelEnabled: Object(v.b)(v.a, c),
                                currentUserAuthorized: m
                            }, e[o.DashboardBroadcast] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m
                            }, e[o.SettingsChannel] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m
                            }, e[o.SettingsModeration] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || b || C || S
                            }, e[o.SettingsRevenueAffiliate] = {
                                channelEnabled: Boolean(r && r.roles && r.roles.isAffiliate) || E === h.I.AFFILIATE,
                                currentUserAuthorized: m || C
                            }, e[o.SettingsRevenueDeveloper] = {
                                channelEnabled: E === h.I.EXTENSIONS_DEVELOPER,
                                currentUserAuthorized: m || C
                            }, e[o.SettingsRevenuePartner] = {
                                channelEnabled: Boolean(r && r.roles && r.roles.isPartner) || E === h.I.CUSTOM_PARTNER || E === h.I.PREMIUM_PARTNER || E === h.I.STANDARD_PARTNER,
                                currentUserAuthorized: m || C
                            }, e[o.SettingsRoles] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m
                            }, e[o.VideoClips] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m
                            }, e[o.VideoCollections] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || g || C
                            }, e[o.VideoModeration] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || b || C || S || _
                            }, e[o.VideoProducer] = {
                                channelEnabled: !0,
                                currentUserAuthorized: m || g || C
                            }, e)
                        };
                    return s.createElement(y, {
                        value: R
                    }, this.props.children)
                }, t
            }(s.Component);
            var O = Object(d.compose)(c.a, Object(l.connect)(function(e) {
                return {
                    sessionUser: Object(g.e)(e)
                }
            }), Object(m.a)(C, {
                options: function(e) {
                    var t = e.match.params.channelLogin,
                        n = e.sessionUser;
                    return {
                        variables: {
                            channelLogin: t,
                            isChannelOwner: Boolean(n && n.login.toLowerCase() === t.toLowerCase())
                        }
                    }
                }
            }))(R);
            n.d(t, "a", function() {
                return o
            }), n.d(t, !1, function() {
                return y
            }), n.d(t, !1, function() {
                return S
            }), n.d(t, "c", function() {
                return E
            }), n.d(t, !1, function() {
                return R
            }), n.d(t, "b", function() {
                return O
            })
        },
        y4Ne: function(e, t, n) {}
    }
]);